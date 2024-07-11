import {
  defineComponent,
  h,
  reactive,
  ref,
  computed,
  unref,
  toRefs,
  type App,
} from 'vue-demi';
import { objectMap, calculateMaxChildren } from '@dyq-ui/utils';
import { useResizeObserver } from '@dyq-ui/hooks/resizeObserver';
import { useDraggable, UseDraggableOptions } from './useDraggable';

interface ListProps extends UseDraggableOptions<any> {
  modelValue: any[];
  column?: number;
  row?: number;
  gap?: string;
  itemHeight?: string;
  itemWidth?: string;
  disabled?: boolean;
}

export const listEmits = [
  'update',
  'start',
  'add',
  'remove',
  'choose',
  'unchoose',
  'end',
  'sort',
  'filter',
  'clone',
  'move',
  'change',
] as const;
export const listProps = [
  'modelValue',
  'column',
  'row',
  'gap',
  'itemHeight',
  'itemWidth',
  'disabled',
  ...listEmits.map((key) => `on${key.replace(/^\S/, (s) => s.toUpperCase())}`),
] as const;

export const DList = defineComponent<ListProps>({
  name: 'DList',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: listProps as unknown as any,
  emits: ['update:modelValue', ...listEmits],
  setup(props, { slots, emit, expose, attrs }) {
    const events = listEmits.reduce((acc, key) => {
      const event = `on${key.replace(/^\S/, (s) => s.toUpperCase())}`;
      acc[event] = (...args: any) => emit(key, ...args);
      return acc;
    }, {} as any);

    const options = computed(() => {
      // eslint-disable-next-line
      const { modelValue, ...rest } = toRefs(props);
      const opt = Object.entries(rest).reduce((acc, [key, value]) => {
        // @ts-ignore
        const newValue = unref(value);
        if (newValue !== undefined) {
          // @ts-ignore
          acc[key] = key === 'disabled' && newValue === '' ? true : newValue;
        }
        return acc;
      }, {} as any);
      return {
        ...events,
        ...objectMap({ ...attrs, ...opt }),
      };
    });
    console.log(options);

    const { resizeRef, contentRect } = useResizeObserver();
    const list = computed({
      get: () => props.modelValue,
      set: (v) => emit('update:modelValue', v),
    });
    const style = computed(() => {
      const gridTemplateColumns = [
        options.value.itemWidth
          ? calculateMaxChildren(
              options.value.itemWidth,
              contentRect.value?.width || 400
            )
          : options.value.column || 4,
        options.value.itemWidth ? options.value.itemWidth : '1fr',
      ];
      const gridAutoRows =
        options.value.itemHeight || options.value.row
          ? (100 / options.value.row).toFixed(2) + '%'
          : '25%';

      const gap = options.value.gap || 0;
      return {
        'grid-template-columns': `repeat(${gridTemplateColumns[0]},${gridTemplateColumns[1]})`,
        'grid-auto-rows': gridAutoRows,
        gap: gap,
      };
    });
    const target = ref();
    const data = reactive(useDraggable(target, list, options));
    expose(data);

    return () => (
      <div ref={resizeRef} class="d-list">
        <div class="d-list__content" style={style.value} ref={target}>
          {list.value.map((item: any, index: number) => (
            <div class={{ move: !options.value.disabled }}>
              {slots.default?.({ item, index }) || (
                <div class="list__content__item">{item}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  },
});

DList.install = (app: App) => {
  const name = DList.name as string;
  app.component(name, DList);
};
export default DList;
