import { defineComponent, defineProps, withDefaults } from 'vue-demi';
export interface OverlayProps {
  modelValue: boolean;
  closeOnBack?: boolean;
  closeOnContentClick?: boolean;
  zIndex?: number;
  opacity?: number;
}
const overlayProps = {
  modelValue: {
    type: Boolean,
  },
  closeOnBack: {
    type: Boolean,
    default: () => false,
  },
  closeOnContentClick: {
    type: Boolean,
    default: () => false,
  },
  zIndex: { type: Number, default: 2000 },
  opacity: { type: Number, default: 0.3 },
};
export const DOverlay = defineComponent<OverlayProps>({
  name: 'DOverlay',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: overlayProps as unknown as any,
  setup(props, { slots }) {
    const style = {
      zIndex: props.zIndex,
      backgroundColor: `rgba(0,0,0,${props.opacity})`,
    };
    return () => (
      <div class="d-overlay" v-show={props.modelValue} style={style}>
        {slots.default?.()}
      </div>
    );
  },
});
export default DOverlay;
