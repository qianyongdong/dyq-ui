import { defineComponent, watchEffect, computed, ref } from 'vue-demi';
import { useIntersectionObserver } from '@dong-ui/hooks/intersectionObserver';
import { useResizeObserver } from '@dong-ui/hooks/resizeObserver';
export interface ProgressCircularProps {
  modelValue?: number;
  color?: string;
  indeterminate?: boolean;
  width?: number;
}
const progressCircularProps = ['modelValue', 'color', 'indeterminate', 'width'];
export const DProgressCircular = defineComponent<ProgressCircularProps>({
  name: 'DProgressCircular',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: progressCircularProps as unknown as any,
  setup(props, { slots }) {
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;

    const root = ref<HTMLElement>();

    const { intersectionRef, isIntersecting } = useIntersectionObserver();
    const { resizeRef, contentRect } = useResizeObserver();

    const normalizedValue = computed(() =>
      Math.max(0, Math.min(100, props.modelValue || 0))
    );
    const width = computed(() => Number(props.width || 4));
    const size = computed(() =>
      contentRect.value ? contentRect.value.width : Math.max(width.value, 32)
    );
    const diameter = computed(
      () => (MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value)) * 2
    );
    const strokeWidth = computed(
      () => (width.value / size.value) * diameter.value
    );
    const convertToUnit = (
      str: string | number | null | undefined,
      unit = 'px'
    ): string | undefined => {
      if (str == null || str === '') {
        return undefined;
      } else if (isNaN(+str!)) {
        return String(str);
      } else if (!isFinite(+str!)) {
        return undefined;
      } else {
        return `${Number(str)}${unit}`;
      }
    };
    const strokeDashOffset = computed(() =>
      convertToUnit(((100 - normalizedValue.value) / 100) * CIRCUMFERENCE)
    );
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    return () => (
      <div
        ref={root}
        class={[
          'd-progress-circular',
          {
            'd-progress-circular--indeterminate': !!props.indeterminate,
            'd-progress-circular--visible': isIntersecting.value,
          },
        ]}
        style={{
          color: props.color || 'black',
          width: size.value + 'px',
          height: size.value + 'px',
        }}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={props.indeterminate ? undefined : normalizedValue.value}
      >
        <svg
          style={{
            transform: `rotate(-90deg)`,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${diameter.value} ${diameter.value}`}
        >
          <circle
            class={['d-progress-circular__underlay']}
            fill="transparent"
            cx="50%"
            cy="50%"
            r={MAGIC_RADIUS_CONSTANT}
            stroke-width={strokeWidth.value}
            stroke-dasharray={CIRCUMFERENCE}
            stroke-dashoffset={0}
          />

          <circle
            class="d-progress-circular__overlay"
            fill="transparent"
            cx="50%"
            cy="50%"
            r={MAGIC_RADIUS_CONSTANT}
            stroke-width={strokeWidth.value}
            stroke-dasharray={CIRCUMFERENCE}
            stroke-dashoffset={strokeDashOffset.value}
          />
        </svg>

        {slots.default && (
          <div class="d-progress-circular__content">
            {slots.default({ value: normalizedValue.value })}
          </div>
        )}
      </div>
    );
  },
});
export default DProgressCircular;
