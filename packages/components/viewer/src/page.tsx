import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
  computed,
  unref,
  watch,
  toRefs,
} from 'vue-demi';
import type { Ref } from 'vue-demi';
import { TextLayer } from 'pdfjs-dist';
import { debounce } from 'lodash-unified';
import { useIntersectionObserver } from '@dong-ui/hooks/intersectionObserver';
import { objectMap } from '@dong-ui/utils';
import middleware from './utils/middleware';

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
  pageNum: number;
  devicePixelRatio: number;
  containerSize: ContainerSize;
  transform: Transform;
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
  setup(props, { slots, emit, attrs, expose }) {
    const events = viewerPageEmits.reduce((acc, key) => {
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
      // const isHorizontal = (options.value.transform.rotate / 90) % 2 !== 0;
      const size = view.value
        ? [
            `round(var(--scale-factor) * ${view.value[2]}px, 1px)`,
            `round(var(--scale-factor) * ${view.value[3]}px, 1px)`,
            // Math.round(options.value.transform.scale * view.value[2]),
            // Math.round(options.value.transform.scale * view.value[3]),
          ]
        : options.value.containerSize
          ? [
              `round(var(--scale-factor) * ${options.value.containerSize.width}px, 1px)`,
              `round(var(--scale-factor) * ${options.value.containerSize.height}px, 1px)`,
              // Math.round(
              //   options.value.transform.scale * options.value.contentRect.width
              // ),
              // Math.round(
              //   options.value.transform.scale * options.value.contentRect.height
              // ),
            ]
          : [];
      // isHorizontal && size.reverse();
      const transform = {
        transform: `rotate(${options.value.transform.rotate}deg) rotateX(${options.value.transform.yFlip ? 0.5 : 0}turn) rotateY(${options.value.transform.xFlip ? 0.5 : 0}turn) `,
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
      // console.log(`render`, canvas, textLayerDiv, props.instance);

      const {
        pageNum,
        devicePixelRatio,
        transform: { scale },
        instance,
      } = options.value;
      if (
        !canvas ||
        !textLayerDiv ||
        !options.value.instance ||
        currentScale.value === scale ||
        !isIntersecting.value
      ) {
        return;
      }
      try {
        if (!page) {
          renderState.value = 1;
          page = await instance.getPage(pageNum);
        }
        // console.log('page', page);
        // const isPDF = !!page.getTextContent;
        const viewport = page.getViewport({
          scale: scale * devicePixelRatio,
        });
        view.value = page.view;
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = Math.floor(viewport.width) + 'px';
        canvas.style.height = Math.floor(viewport.height) + 'px';
        const renderContext = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport,
        };
        await page.render(renderContext).promise;
        currentScale.value = scale;
        renderState.value = 2;
        const eventData: any = { pageNum: options.value.pageNum };

        options.value.onRendered(eventData);

        // 渲染文本图层
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
        console.log(e.message);
        renderState.value = 2;
        isRenderError.value = true;
        options.value.onError({
          eventName: 'render',
          message: '页面渲染失败,原因：' + e.message,
          pageNum: options.value.pageNum,
        });
      }
    }, 500);
    const resetCanvasStyle = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };
    const addAnnotation = (annotation: Element) => {
      const annotationLayer = annotationLayerRef.value;
      if (!annotation || !annotationLayer) return;
      const promise = new Promise((resolve, reject) => {
        const timer = setInterval(() => {
          if (renderState.value === 2) {
            clearInterval(timer);
            resolve(null);
          }
        }, 200);
      });
      requestAnimationFrame(async () => {
        await promise;
        annotationLayer.appendChild(annotation);
      });
    };
    const createAnnotation = ([x, y] = [0, 0], [width, height] = [0, 0]) => {
      const element = document.createElement('div');
      element.style.position = 'absolute';
      element.style.left = `round(var(--scale-factor) * ${x}px, 1px)`;
      element.style.top = `round(var(--scale-factor) * ${y}px, 1px)`;
      element.style.width = `round(var(--scale-factor) * ${width}px, 1px)`;
      element.style.height = `round(var(--scale-factor) * ${height}px, 1px)`;
      element.style.border = '1px dashed red';
      element.style.backgroundColor = 'transparent';
      return element;
    };
    let focusedElement: Element | null = null;
    const scrollToPage = (pageNum: number) => {
      const pageEl = pageRef.value;
      if (+pageNum !== +props.pageNum || !pageEl) return;
      pageEl.scrollIntoView(true);
    };
    const createMagnifyArea = (
      origin: [number, number] = [0, 0],
      size: [number, number] = [10, 10],
      pageNum = 0
    ) => {
      if (+pageNum !== +props.pageNum || focusedElement) {
        return;
      }
      focusedElement = createAnnotation(origin, size);
      addAnnotation(focusedElement);
    };
    const removeMagnifyArea = () => {
      if (!focusedElement) return;
      focusedElement.remove();
      focusedElement = null;
    };
    onMounted(() => {
      intersectionRef.value = pageRef.value as HTMLElement;
      watch(
        () => props.transform.scale,
        (newValue) => {
          if (currentScale.value === newValue) return;
          resetCanvasStyle();
          isIntersecting.value && render();
        },
        {
          immediate: true,
        }
      );
      middleware.on('PAGE:SCROLL_TO', scrollToPage);
      middleware.on('PAGE:CREATE_MAGNIFY_AREA', createMagnifyArea);
      middleware.on('PAGE:REMOVE_MAGNIFY_AREA', removeMagnifyArea);
    });
    return () => (
      <div class="d-page" ref={pageRef}>
        {renderState.value < 2
          ? slots.placeholder?.()
          : isRenderError.value && slots.error?.()}
        <div class="page" style={style.value}>
          <div class="canvasWrapper">
            <canvas width={0} height={0} ref={canvasRef} />
          </div>
          <div class="textLayer" ref={textLayerRef}></div>
          <div class="annotationLayer" ref={annotationLayerRef}></div>
        </div>
      </div>
    );
  },
});
export default DViewerPage;
