import {
  defineComponent,
  reactive,
  ref,
  onBeforeUnmount,
  onMounted,
  watch,
  toRaw,
  nextTick,
  unref,
  type Ref,
  type App,
} from 'vue-demi';
import { useResizeObserver } from '@dyq-ui/hooks/resizeObserver';
import { getFileTypeAndArrayBuffer, h } from '@dyq-ui/utils';
import getDocument from './utils';
import Page, { type Transform, type ContainerSize } from './page';
import { DProgressCircular } from '../../progress-circular';
import type { CreateWorkerArgsType } from './utils/tesseract';

type FileSrc = string | File;

const FileTypePropsObj = {
  img: ['image/jpeg', 'image/png'],
  tiff: ['image/tiff'],
  bmp: ['image/bmp'],
  pdf: ['application/pdf'],
} as const;

export type FileTypeName = keyof typeof FileTypePropsObj;
const mimeTypes = Object.values(FileTypePropsObj);
export type MimeType = (typeof mimeTypes)[number];
// 获取类型
const getFileTypeName = (mimeType: string) => {
  const arr = Object.entries(FileTypePropsObj);
  for (let i = 0; i < arr.length; i++) {
    const [fileType, mimeTypes] = arr[i];
    if (mimeTypes.includes(mimeType as never)) return fileType;
  }
};
// 获取变换
const getTransform = (e: Transform) => {
  e.scale ||= 1;
  e.rotate ||= 0;
  e.xFlip ||= false;
  e.yFlip ||= false;
  e.offsetX ||= 0;
  e.offsetY ||= 0;
  e.origin = [];
  return e as Required<Transform>;
};

export interface ViewerProps {
  src: FileSrc;
  transform?: Transform;
  lazy?: boolean;
  onlyFirstPage?: boolean | string;
  autoSize?: boolean;
  enabledTextLayer?: boolean;
  enabledOCR?: boolean | string;
  OCROptions?: CreateWorkerArgsType;
}
export const viewerEmits = ['rendered', 'error'] as const;
export const viewerProps = [
  'src',
  'transform',
  'lazy',
  'onlyFirstPage',
  'autoSize',
  'enabledTextLayer',
  'enabledOCR',
  'OCROptions',
  ...viewerEmits.map(
    (key) => `on${key.replace(/^\S/, (s) => s.toUpperCase())}`
  ),
] as const;

export const DViewer = defineComponent<ViewerProps>({
  name: 'DViewer',
  props: viewerProps as unknown as any,
  emits: [...viewerEmits] as unknown as string[],
  setup(props, { slots, emit, expose, attrs }) {
    const events = viewerEmits.reduce((acc, key) => {
      const event = `on${key.replace(/^\S/, (s) => s.toUpperCase())}`;
      acc[event] = (...args: any) => emit(key, ...args);
      return acc;
    }, {} as any);
    const defaultTransForm = getTransform({ ...props.transform } as Transform);
    const transform: Ref<Required<Transform>> = ref({ ...defaultTransForm });
    const defaultAutoSize = props.autoSize === false ? false : true;
    const autoSize = ref(defaultAutoSize);
    const lazy = ref(props.lazy === false ? false : true);
    const onlyFirstPage = ref(
      props.onlyFirstPage === '' ? true : props.onlyFirstPage
    );
    const enabledTextLayer = ref(
      props.enabledTextLayer === false || onlyFirstPage.value ? false : true
    );
    const enabledOCR = ref(props.enabledOCR === '' ? true : props.enabledOCR);
    const OCROptions: Ref<CreateWorkerArgsType> = ref(props.OCROptions || []);
    // 加载占位
    const slot_placeholder = () =>
      h('div', { class: 'w-100 flex justify-content align-center' }, [
        slots.placeholder?.() ||
          h(DProgressCircular, { props: { indeterminate: true } }),
      ]);

    // 错误占位
    const slot_error = (e: string) =>
      h('div', { class: 'w-100 flex justify-content align-center error' }, [
        slots.error?.() || [
          h(
            'svg',
            {
              style: 'width:32px;',
              domProps: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
              },
            },
            [
              h('path', {
                style: 'fill:currentColor',
                domProps: {
                  d: 'M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
                },
              }),
            ]
          ),
          h('em', { style: 'color:currentColor' }, e),
        ],
      ]);
    // 文件处理后获取到的对象
    let fileInstance: any = null;
    // 文件加载状态 0空闲 1加载中 2 加载完毕 3 资源加载错误 4文件格式不支持 5文件处理错误
    const renderState = ref(0);
    const renderStateMessages = [
      '空闲',
      '加载中',
      '加载完毕',
      '资源加载错误',
      '文件格式不支持',
      '文件处理错误',
    ];
    // 获取屏幕像素比
    const devicePixelRatio = window.devicePixelRatio || 1;
    // 文件的页数
    const pageCount = ref(0);
    // 第一页渲染完成
    const isFirstPageRendered = ref(false);
    // 所有页
    const pageRefs: Ref<any[]> = ref([]);
    // 记录初始化元素的尺寸
    const containerSize: Ref<ContainerSize> = ref({ width: 300, height: 300 });

    // 元素观察器
    // const resizeObserverCallback = (entries: any[]) => {};
    // const { resizeRef, contentRect } = useResizeObserver(
    //   resizeObserverCallback
    // );
    const resizeRef = ref();
    // 重置默认参数
    const resetState = () => {
      renderState.value = 0;
      fileInstance = null;
      pageCount.value = 0;
      isFirstPageRendered.value = false;
    };
    const resetContainerSize = () => {
      let width;
      let height;
      if (!resizeRef.value) return;
      ({ clientWidth: width, clientHeight: height } =
        resizeRef.value as HTMLElement);

      containerSize.value = { width, height };
    };
    // 初始化
    const initialize = async (src: FileSrc) => {
      resetState();
      // 开始读取文件流
      renderState.value = 1;
      const file = await getFileTypeAndArrayBuffer(src);
      if (!file) {
        // 读取失败
        renderState.value = 3;
        return events.onError({
          eventName: 'load',
          message: '文件加载失败',
          pageNum: 0,
        });
      }
      // 读取完毕 判断是否支持
      let { arrayBuffer, mimeType } = file;
      const fileTypeName = getFileTypeName(mimeType);
      if (!fileTypeName) {
        renderState.value = 4;
        return events.onError({
          eventName: 'load',
          message: '文件格式不支持',
          pageNum: 0,
        });
      } else {
        // 支持则开始解码文件
        fileInstance = await getDocument(
          fileTypeName as FileTypeName,
          arrayBuffer,
          toRaw(OCROptions.value)
        );
      }

      if (!fileInstance?.numPages) {
        // 处理失败
        renderState.value = 5;
        return events.onError({
          eventName: 'load',
          message: '文件处理失败',
          pageNum: 0,
        });
      }
      // 解码成功
      // 设置总页数开始逐页渲染
      pageCount.value = fileInstance.numPages;
      resetContainerSize();
      renderState.value = 2;
    };
    const onRendered = (e: any) => {
      autoSize.value = false;
      transform.value.scale = e.scale;
      isFirstPageRendered.value = true;
      events.onRendered(e);
    };
    const onError = (e: any) => {
      if (e.pageNum === 1) {
        isFirstPageRendered.value = true;
      }
      events.onError(e);
    };
    const zoomIn = (level = 0.2) => {
      const newScale = transform.value.scale * (1 + level);
      setScale(newScale);
    };
    const zoomOut = (level = 0.2) => {
      const newScale = transform.value.scale * (1 - level);
      setScale(newScale);
    };
    const rotateLeft = (level = 90) => {
      setRotate(transform.value.rotate - level);
    };
    const rotateRight = (level = 90) => {
      setRotate(transform.value.rotate + level);
    };
    const flipX = (isXFlip?: Boolean) => {
      let xFlip = !transform.value.xFlip;
      if (isXFlip instanceof Boolean) {
        xFlip = isXFlip as boolean;
      }
      transform.value.xFlip = xFlip;
    };
    const flipY = (isYFlip?: Boolean) => {
      let yFlip = !transform.value.yFlip;
      if (isYFlip instanceof Boolean) {
        yFlip = isYFlip as boolean;
      }
      transform.value.yFlip = yFlip;
    };
    const setScale = (scale: number, [offsetX, offsetY] = [0, 0]) => {
      transform.value.scale = scale;
      transform.value.offsetX = offsetX;
      transform.value.offsetY = offsetY;
    };
    const setRotate = (rotate: number) => {
      rotate %= 360;
      if (rotate < 0) {
        rotate += 360;
      }
      if (transform.value.rotate === rotate) {
        return;
      }
      transform.value.rotate = rotate;
    };
    let focusedElement: HTMLDivElement | null = null;
    let lastScale = 1;
    const addAnnotation = (
      pageNum: number,
      annotation: HTMLDivElement,
      [aw, ah] = [0, 0]
    ) => {
      const pageRef = pageRefs.value[pageNum - 1];
      if (!pageRef) return;
      const annotationLayer = pageRef.annotationLayerRef;
      if (!annotation || !annotationLayer) return;
      const view = pageRef.view;
      const wr = view[2] / aw;
      const hr = view[3] / ah;
      const { width, height } = containerSize.value;
      const cwr = width / aw;
      const chr = height / ah;
      const minRadio = Math.min(wr, hr);
      const minCRadio = Math.min(cwr, chr);
      const radio = Math.min(minRadio, minCRadio);
      setScale(radio * 0.8);
      annotationLayer.appendChild(annotation);

      requestAnimationFrame(() => {
        // setTimeout(() => {
        annotation.scrollIntoView({
          behavior: 'instant',
          block: 'center',
          inline: 'center',
        });
        // }, 1000);
      });
    };
    const createAnnotation = ([x, y] = [0, 0], [width, height] = [0, 0]) => {
      const element = document.createElement('div');
      element.style.position = 'absolute';
      element.style.left = `round(var(--scale-factor) * ${x}px, 1px)`;
      element.style.top = `round(var(--scale-factor) * ${y}px, 1px)`;
      element.style.width = `round(var(--scale-factor) * ${width}px, 1px)`;
      element.style.height = `round(var(--scale-factor) * ${height}px, 1px)`;
      // element.style.border = '1px dashed red';
      // element.style.left = x + 'px';
      // element.style.top = y + 'px';
      // element.style.width = width + 'px';
      // element.style.height = height + 'px';
      element.style.background = 'rgba(255,255,0,0.5)';
      // element.style.backgroundColor = 'transparent';
      return element;
    };
    const scrollToPage = (pageNum: number) => {
      const pageRef = pageRefs.value[pageNum - 1];
      if (!pageRef) return;
      pageRef.$el.scrollIntoView(true);
    };
    const addMagnifyArea = (
      origin: [number, number] = [0, 0],
      size: [number, number] = [10, 10],
      pageNum = 0
    ) => {
      lastScale = transform.value.scale;
      focusedElement = createAnnotation(origin, size);
      pageRenderPromise(pageNum).then((res) => {
        if (!res) {
          return window.alert('加载页面失败');
        }
        addAnnotation(pageNum, focusedElement as HTMLDivElement, size);
      });
    };
    const removeMagnifyArea = () => {
      if (!focusedElement) return;
      focusedElement.remove();
      focusedElement = null;
      requestAnimationFrame(() => {
        setScale(lastScale);
      });
    };
    const pageRenderPromise = async (pageNum: number): Promise<any> => {
      const pageRef = pageRefs.value[pageNum - 1];
      if (!pageRef) return;
      return new Promise((resolve, reject) => {
        let errorIndex = 0;
        const timer = setInterval(() => {
          errorIndex++;
          if (pageRef.renderState === 2) {
            clearInterval(timer);
            resolve(pageRef);
          }
          if (pageRef.renderState > 2 || errorIndex > 60) {
            clearInterval(timer);
            resolve(false);
          }
        }, 200);
      });
    };
    const createMagnifyArea = (
      origin: [number, number] = [0, 0],
      size: [number, number] = [10, 10],
      pageNum = 1
    ) => {
      if (focusedElement) {
        return;
      }
      scrollToPage(pageNum);

      addMagnifyArea(origin, size, pageNum);
    };
    let pictureTemp: null | any[] = null;
    const getPictures = async () => {
      if (pictureTemp) return pictureTemp;
      lazy.value = false;
      const initialized = await loadedPromise();
      if (!initialized) return [null];
      const pictures = [];
      const pageCountValue = pageCount.value;
      for (let pageNum = 0; pageNum < pageCountValue; pageNum++) {
        const page = await pageRenderPromise(pageNum);
        pictures.push(page ? await page.serializeBitmap() : null);
      }
      pictureTemp = pictures;
      return pictures;
    };
    const checkPagesLoaded = () => {
      for (const page of pageRefs.value) {
        if (page.renderState !== 2) return;
      }
      return true;
    };
    const loadedPromise = async () => {
      return await new Promise((resolve, reject) => {
        if (renderState.value > 2) {
          return resolve(renderState.value === 2 ? true : false);
        }
        const timer = setInterval(() => {
          const isLoaded = checkPagesLoaded();
          if (isLoaded) {
            clearInterval(timer);
            resolve(renderState.value === 2 ? true : false);
          }
        }, 1000);
      });
    };
    const resetTransform = () => {
      autoSize.value = defaultAutoSize;
      transform.value = { ...defaultTransForm };
    };
    const zoomAuto = () => {
      autoSize.value = true;
    };
    const data = reactive({
      zoomIn,
      zoomOut,
      rotateLeft,
      rotateRight,
      flipX,
      flipY,
      createMagnifyArea,
      removeMagnifyArea,
      scrollToPage,
      getPictures,
      loadedPromise,
      resetTransform,
      zoomAuto,
    });
    expose(data);

    watch(
      () => props.transform,
      (newValue) => {
        transform.value = getTransform({ ...newValue } as Transform);
      },
      {
        immediate: true,
        deep: true,
      }
    );
    let ctrlKeyPressed = false;
    const handleWheel = (event: WheelEvent) => {
      // Handle mouse up event
      // Implement your logic here

      if (!ctrlKeyPressed || !isFirstPageRendered.value) return;
      event.preventDefault();
      const el = resizeRef.value as HTMLElement;
      // 获取滚动方向和滚动量
      const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / transform.value.scale;
      const y = (event.clientY - rect.top) / transform.value.scale;
      transform.value.origin = [x, y];
      const zoomFn = delta > 0 ? zoomOut : zoomIn;
      zoomFn();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        ctrlKeyPressed = true;
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        ctrlKeyPressed = false;
      }
    };
    onMounted(() => {
      watch(
        () => props.src,
        (newValue) => {
          nextTick(() => {
            initialize(newValue);
          });
        },
        {
          immediate: true,
        }
      );
      const el = resizeRef.value as HTMLElement;
      if (!el || onlyFirstPage.value) return;
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      el.addEventListener('wheel', handleWheel, {
        passive: false,
      });
    });
    onBeforeUnmount(async () => {
      const el = resizeRef.value as HTMLElement;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyDown);
      el.removeEventListener('wheel', handleWheel);
      await fileInstance?.destroy?.()?.promise;
    });

    return () =>
      h('div', { class: 'd-viewer outerContainer' }, [
        h('div', { class: 'mainContainer', ref: resizeRef }, [
          h(
            'div',
            {
              class: `viewerContainer ${
                onlyFirstPage.value ? 'thumbnail' : ''
              }`,
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
                slot_placeholder()
              ),
              h(
                'div',
                {
                  class: 'status-icon',
                  style: {
                    display: renderState.value > 2 ? '' : 'none',
                  },
                },
                slot_error(renderStateMessages[renderState.value])
              ),
              h(
                'div',
                {
                  class: 'pdfViewer',
                },
                [
                  Array.from(
                    {
                      length: pageCount.value
                        ? isFirstPageRendered.value && !onlyFirstPage.value
                          ? pageCount.value
                          : 1
                        : 0,
                    },
                    (_, index) =>
                      h(Page, {
                        ref: (el: any) => {
                          pageRefs.value[index] = el;
                        },
                        key: index,
                        props: {
                          pageNum: index + 1,
                          instance: fileInstance,
                          devicePixelRatio,
                          transform: transform.value,
                          lazy: lazy.value,
                          autoSize: autoSize.value,
                          containerSize: containerSize.value,
                          enabledTextLayer: enabledTextLayer.value,
                          enabledOCR: enabledOCR.value,
                        },
                        on: {
                          rendered: onRendered,
                          error: onError,
                        },
                        scopedSlots: {
                          placeholder: slot_placeholder,
                          error: slot_error,
                        },
                      })
                  ),
                ]
              ),
            ]
          ),
        ]),
      ]);
  },
});

DViewer.install = (app: App) => {
  const name = DViewer.name as string;
  app.component(name, DViewer);
};

export const getPictures = async (src: string) => {
  const file = await getFileTypeAndArrayBuffer(src);
  if (!file) {
    return null;
  }
  let { arrayBuffer, mimeType } = file;
  const fileTypeName = getFileTypeName(mimeType);
  if (!fileTypeName) {
    return null;
  }
  const fileInstance = await getDocument(
    fileTypeName as FileTypeName,
    arrayBuffer,
    []
  );
  const pageCount = fileInstance.numPages;
  const pArr = [];
  for (let i = 0; i < pageCount; i++) {
    const promise = new Promise((resolve) => {
      fileInstance.getPage(i + 1).then((page: any) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        page.render(renderContext).promise.then(() => {
          resolve(canvas.toDataURL());
        });
      });
    });
    pArr.push(promise);
  }
  return await Promise.all(pArr);
};

export const setOCROptions = async (e: CreateWorkerArgsType) => {
  // @ts-ignore
  window.OCROptions = e;
};
export default DViewer;
