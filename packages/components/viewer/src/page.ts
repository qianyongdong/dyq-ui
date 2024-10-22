import {
  defineComponent,
  onMounted,
  ref,
  computed,
  unref,
  watch,
  type Ref,
  watchEffect,
} from 'vue-demi';
import { TextLayer } from 'pdfjs-dist';
import { debounce } from 'lodash-unified';
import { h, getAutoSizeScale } from '@dyq-ui/utils';
import { useIntersectionObserver } from '@dyq-ui/hooks/intersectionObserver';

export interface Transform {
  scale?: number;
  rotate?: number;
  xFlip?: boolean;
  yFlip?: boolean;
  offsetX?: number;
  offsetY?: number;
  origin?: number[];
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
  lazy: boolean;
  autoSize: boolean;
  enabledTextLayer: boolean;
  enabledOCR: boolean;
}
export const viewerPageEmits = ['rendered', 'error', 'updateScale'] as const;
const viewerPageProps = [
  'instance',
  'devicePixelRatio',
  'pageNum',
  'containerSize',
  'transform',
  'lazy',
  'autoSize',
  'enabledTextLayer',
  'enabledOCR',
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
    // 0 未渲染 1 渲染中 2渲染结束 3 渲染出错
    const renderState = ref(0);
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
    const currentScale = ref();

    const getTransformScale = (deg: number) => {
      if (!currentScale.value || !view.value || (deg / 90) % 2 === 0) {
        return 1;
      }
      const scale = currentScale.value;
      const width = Math.round(scale * view.value[2]);
      const height = Math.round(scale * view.value[3]);

      return width > height
        ? getAutoSizeScale(height, width, width, height)
        : 1;
    };
    const style = computed(() => {
      const scale = props.transform.scale || 1;
      const size = view.value
        ? [
            Math.round(scale * view.value[2]) + 'px',
            Math.round(scale * view.value[3]) + 'px',
          ]
        : props.containerSize
        ? [
            '30px',
            `round(var(--scale-factor) * ${props.containerSize.height}px, 1px)`,
          ]
        : [];

      const transform = {
        transform: props.transform
          ? `rotate(${props.transform.rotate}deg) rotateX(${
              props.transform.yFlip ? 0.5 : 0
            }turn) rotateY(${
              props.transform.xFlip ? 0.5 : 0
            }turn) scale(${getTransformScale(props.transform.rotate || 0)})`
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
    // const intersectionObserverCallback = debounce((entries: any[]) => {
    // for (const entry of entries) {
    //   entry.isIntersecting && render();
    // }
    // }, 500);
    const intersectionObserverCallback = () => {};
    const { intersectionRef, isIntersecting } = useIntersectionObserver(
      intersectionObserverCallback
    );

    const render = async () => {
      const canvas = unref(canvasRef);
      const textLayerDiv = unref(textLayerRef);
      const {
        pageNum,
        devicePixelRatio,
        transform: { scale },
        instance,
        autoSize,
        containerSize,
        enabledTextLayer,
        enabledOCR,
      } = props;
      console.log('autoSize', autoSize, props.lazy, isIntersecting.value);
      if (
        !instance ||
        renderState.value === 1 ||
        !canvas ||
        !textLayerDiv ||
        !scale ||
        (currentScale.value === scale && !autoSize) ||
        (props.lazy && !isIntersecting.value)
      ) {
        return;
      }
      try {
        renderState.value = 1;
        resetCanvasStyle();
        if (!page) {
          page = await instance.getPage(pageNum);
          view.value = page.view;
        }
        // 自适应
        const renderScale = autoSize
          ? getAutoSizeScale(
              page.view[2],
              page.view[3],
              containerSize.width,
              containerSize.height
            )
          : scale;
        const viewport = page.getViewport({
          scale: renderScale * devicePixelRatio,
        });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width =
          Math.round(viewport.width / devicePixelRatio) + 'px';
        canvas.style.height =
          Math.round(viewport.height / devicePixelRatio) + 'px';
        const renderContext = {
          canvasContext: canvas.getContext('2d', { colorSpace: 'srgb' }),
          viewport: viewport,
        };
        await page.render(renderContext).promise;
        renderState.value = 2;
        currentScale.value = renderScale;
        const eventData: any = { pageNum, scale: renderScale };
        events.onRendered(eventData);
      } catch (e: any) {
        console.error('error', e?.message || e);
        renderState.value = 3;
        events.onError({
          eventName: 'render',
          message: '页面渲染失败,原因：' + e.message,
          pageNum: pageNum,
        });
      }
      if (enabledTextLayer && !textLayer) {
        if (enabledOCR || !page.isOwn) {
          const textContent = await page.getTextContent();
          textLayer = new TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport: page.getViewport({ scale: currentScale.value }),
          });
          textLayer.render();
        }
      }
    };

    const resetCanvasStyle = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };
    onMounted(() => {
      intersectionRef.value = pageRef.value as HTMLElement;
      watchEffect(() => {
        console.log(props.lazy);
        render();
      });
    });

    const serializeBitmap = async () => {
      if (!page) return;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
      return canvas.toDataURL();
    };

    expose({
      textLayerRef,
      annotationLayerRef,
      canvasRef,
      renderState,
      view,
      serializeBitmap,
      currentScale,
    });
    return () =>
      h(
        'div',
        {
          class: 'd-page',
          ref: pageRef,
          style: '--scale-factor:' + props.transform.scale,
        },
        [
          h(
            'div',
            {
              class: 'status-icon',
              style: {
                display: renderState.value < 2 ? '' : 'none',
              },
            },
            slots?.placeholder?.()
          ),
          h(
            'div',
            {
              class: 'status-icon',
              style: {
                display: renderState.value > 2 ? '' : 'none',
              },
            },
            slots?.error?.('页面加载错误')
          ),
          h('div', { class: 'page', style: unref(style) }, [
            h('div', { class: 'canvasWrapper' }, [
              h('canvas', {
                domProps: {
                  width: 0,
                  height: 0,
                },
                ref: canvasRef,
              }),
            ]),
            h('div', {
              class: 'textLayer',
              ref: textLayerRef,
            }),
            h('div', {
              class: 'annotationLayer',
              ref: annotationLayerRef,
            }),
          ]),
        ]
      );
  },
});
export default DViewerPage;
