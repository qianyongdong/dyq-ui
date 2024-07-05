import {
  defineComponent,
  h,
  reactive,
  ref,
  computed,
  unref,
  toRefs,
} from 'vue-demi';
import type { Ref } from 'vue-demi';
import { objectMap } from '@dong-ui/utils';

interface ImgProps {
  src: string;
  cover?: boolean;
  aspectRatio?: number;
}

export const imgEmits = ['rendered', 'error', 'loaded'] as const;
export const imgProps = [
  'src',
  'aspectRatio',
  'cover',
  ...imgEmits.map((key) => `on${key.replace(/^\S/, (s) => s.toUpperCase())}`),
] as const;

export const DImg = defineComponent<ImgProps>({
  name: 'DImg',
  props: imgProps as unknown as any,
  emits: [...imgEmits],
  setup(props, { slots, emit, expose, attrs }) {
    const events = imgEmits.reduce((acc, key) => {
      const event = `on${key.replace(/^\S/, (s) => s.toUpperCase())}`;
      acc[event] = (...args: any) => emit(key, ...args);
      return acc;
    }, {} as any);

    const options = computed(() => {
      // eslint-disable-next-line
      const { ...rest } = toRefs(props);
      const opt = Object.entries(rest).reduce((acc, [key, value]) => {
        // @ts-ignore
        const newValue = unref(value);
        if (newValue !== undefined) acc[key] = newValue;
        return acc;
      }, {} as any);
      return {
        ...events,
        ...objectMap({ ...attrs, ...opt }),
      };
    });
    console.log(options);
    const methods = {};
    const data = reactive({ ...methods });

    expose(data);
    const imgRef: Ref<HTMLImageElement | null> = ref(null);
    const renderState = ref(0);
    const isRenderError = ref(false);

    const onload = () => {
      renderState.value = 2;
      options.value.onLoaded(imgRef.value as HTMLImageElement);
      options.value.onRendered({ pageNum: 1 });
    };

    const onerror = (e: any) => {
      isRenderError.value = true;
      options.value.onError(e);
    };
    return () => (
      <>
        {renderState.value < 2
          ? slots.placeholder?.()
          : isRenderError.value && slots.error?.()}
        <img
          ref={imgRef}
          class={{
            'd-img': true,
            cover:
              options.value.cover || options.value.cover === '' ? true : false,
          }}
          style={{
            'aspect-ratio': options.value.aspectRatio || 'unset',
            width: options.value.width || '100%',
          }}
          onload={onload}
          onerror={onerror}
          src={options.value.src}
        />
      </>
    );
  },
});

export default DImg;
