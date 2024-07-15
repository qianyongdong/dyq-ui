import {
  defineComponent,
  onMounted,
  ref,
  computed,
  unref,
  watch,
  nextTick,
  type Ref,
} from 'vue-demi';
import { TextLayer } from 'pdfjs-dist';
import { debounce } from 'lodash-unified';
import { h } from '@dyq-ui/utils';
import { useIntersectionObserver } from '@dyq-ui/hooks/intersectionObserver';

export interface Transform {
  scale?: number;
  rotate?: number;
  xFlip?: boolean;
  yFlip?: boolean;
  offsetX?: number;
  offsetY?: number;
}
export interface ContainerSize {
  width: number;
  height: number;
}
export interface ViewerPageProps {
  instance: any;
  devicePixelRatio: number;
  containerSize: ContainerSize;
  transform: Transform;
  pageNum: number;
}
export const viewerPageEmits = ['rendered', 'error'] as const;
const viewerPageProps = [
  'instance',
  'devicePixelRatio',
  'pageNum',
  'containerSize',
  'transform',
  ...viewerPageEmits.map(
    (key) => `on${key.replace(/^\S/, (s) => s.toUpperCase())}`
  ),
];
export const DViewerPage = defineComponent<ViewerPageProps>({
  name: 'DViewerPage',
  props: viewerPageProps as unknown as any,
  emits: [...viewerPageEmits],
  setup(props, { slots, emit, expose }) {
    const events = viewerPageEmits.reduce((acc, key) => {
      const event = `on${key.replace(/^\S/, (s) => s.toUpperCase())}`;
      acc[event] = (...args: any) => emit(key, ...args);
      return acc;
    }, {} as any);
    // 0 未渲染 1 渲染中 2渲染结束
    const renderState = ref(0);
    // 渲染出错
    const isRenderError = ref(false);
    // page 元素
    const pageRef: Ref<HTMLElement | null> = ref(null);
    // canvas 元素
    const canvasRef: Ref<HTMLCanvasElement | null> = ref(null);
    // 文本图层元素
    const textLayerRef: Ref<HTMLElement | null> = ref(null);
    // 批注图层元素
    const annotationLayerRef: Ref<HTMLElement | null> = ref(null);
    // 页面对象
    let page: any = null;
    // 文本图层对象
    let textLayer: any = null;
    // 视图
    const view = ref(null);
    // 当前缩放
    const currentScale = ref(0);

    const style = computed(() => {
      const size = view.value
        ? [
            `round(var(--scale-factor) * ${view.value[2]}px, 1px)`,
            `round(var(--scale-factor) * ${view.value[3]}px, 1px)`,
          ]
        : props.containerSize
          ? [
              `round(var(--scale-factor) * ${props.containerSize.width}px, 1px)`,
              `round(var(--scale-factor) * ${props.containerSize.height}px, 1px)`,
            ]
          : [];
      const transform = {
        transform: props.transform
          ? `rotate(${props.transform.rotate}deg) rotateX(${
              props.transform.yFlip ? 0.5 : 0
            }turn) rotateY(${props.transform.xFlip ? 0.5 : 0}turn)`
          : '',
      };

      return size.length > 0
        ? {
            ...transform,
            width: size[0],
            height: size[1],
          }
        : transform;
    });
    // 交叉观察器
    const intersectionObserverCallback = debounce((entries: any[]) => {
      for (const entry of entries) {
        entry.isIntersecting && render();
      }
    }, 500);
    const { intersectionRef, isIntersecting } = useIntersectionObserver(
      intersectionObserverCallback
    );

    const render = debounce(async () => {
      const canvas = unref(canvasRef);
      const textLayerDiv = unref(textLayerRef);
      const {
        pageNum,
        devicePixelRatio,
        transform: { scale },
        instance,
      } = props;
      if (
        renderState.value === 1 ||
        !scale ||
        !canvas ||
        !textLayerDiv ||
        !instance ||
        currentScale.value === scale ||
        !isIntersecting.value
      ) {
        return;
      }
      resetCanvasStyle();
      try {
        if (!page) {
          renderState.value = 1;
          page = await instance.getPage(pageNum);
        }
        const viewport = page.getViewport({
          scale: scale * devicePixelRatio,
        });
        view.value = page.view;
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = Math.floor(viewport.width) + 'px';
        canvas.style.height = Math.floor(viewport.height) + 'px';
        const ctx = canvas.getContext('2d');
        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };
        await page.render(renderContext).promise;
        renderState.value = 2;
        currentScale.value = scale;
        const eventData: any = { pageNum };
        events.onRendered(eventData);
        if (page.getTextContent && !textLayer) {
          const textContent = await page.getTextContent();
          textLayer = new TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport,
          });
          textLayer.render();
        }
      } catch (e: any) {
        console.error('error', e?.message || e);
        renderState.value = 2;
        isRenderError.value = true;
        events.onError({
          eventName: 'render',
          message: '页面渲染失败,原因：' + e.message,
          pageNum: pageNum,
        });
      }
    }, 500);
    const resetCanvasStyle = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    onMounted(() => {
      intersectionRef.value = pageRef.value as HTMLElement;
      watch(
        () => props.transform.scale,
        () => {
          render();
        },
        {
          immediate: true,
        }
      );
    });
    expose({
      textLayerRef,
      annotationLayerRef,
      canvasRef,
      renderState,
      isRenderError,
    });
    return () =>
      h('div', { class: 'd-page', ref: pageRef }, [
        // renderState.value < 2
        //   ? slots?.placeholder?.()
        //   : isRenderError.value
        //     ? slots?.error?.()
        //     : null,

        h(
          'div',
          {
            class: 'absolute a-100 z-index-5',
            style: {
              display: renderState.value < 2 ? 'block' : 'none',
            },
          },
          slots?.placeholder?.()
        ),
        h(
          'div',
          {
            class: 'absolute a-100 z-index-5',
            style: {
              display: isRenderError.value ? 'block' : 'none',
            },
          },
          slots?.error?.()
        ),
        h('div', { class: 'page', style: style.value }, [
          h('div', { class: 'canvasWrapper' }, [
            h('canvas', {
              domProps: {
                width: 0,
                height: 0,
              },
              ref: canvasRef,
            }),
          ]),
          h('div', { class: 'textLayer', ref: textLayerRef }),
          h('div', { class: 'annotationLayer', ref: annotationLayerRef }),
        ]),
      ]);
  },
});
export default DViewerPage;
