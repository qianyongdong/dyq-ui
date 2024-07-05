import {
  defineComponent,
  h,
  reactive,
  ref,
  computed,
  unref,
  toRefs,
  watchEffect,
  onBeforeUnmount,
  onMounted,
  watch,
  type Ref,
} from 'vue-demi';
import { debounce, throttle } from 'lodash-unified';
import { useResizeObserver } from '@dong-ui/hooks/resizeObserver';
import { objectMap, getFileTypeAndArrayBuffer } from '@dong-ui/utils';
import getDocument from './utils';
import middleware from './utils/middleware';
import Page, { type Transform } from './page';
import { DProgressCircular } from '../../progress-circular';
import '../../progress-circular/style';

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
  return e as Required<Transform>;
};
export interface ViewerProps {
  src: FileSrc;
  transform?: Transform;
}
export const viewerEmits = ['rendered', 'error'] as const;
export const viewerProps = [
  'src',
  'transform',
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
    const transform: Ref<Required<Transform>> = ref(
      getTransform(({ ...props.transform } || {}) as Transform)
    );
    // 加载占位
    const slot_placeholder = computed(() => (
      <div class="absolute a-100 z-index-5">
        <div class="w-100 flex justify-content align-center ">
          {slots.placeholder?.() || <DProgressCircular indeterminate />}
        </div>
      </div>
    ));
    // 错误占位
    const slot_error = computed(() => (
      <div class="absolute a-100 z-index-5">
        <div class="w-100 flex justify-content align-center error ">
          {slots.error?.() || (
            <>
              <svg
                style="width:32px;"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  style="fill:currentColor"
                  d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
              <em style="color:currentColor">failed to load</em>
            </>
          )}
        </div>
      </div>
    ));
    // 文件处理后获取到的对象
    let fileInstance: any = null;
    // 文件加载状态 0空闲 1加载中 2 加载完毕
    const readyState = ref(0);
    // 文件加载错误
    const isReadyError = ref(false);
    // 文件处理状态 0空闲 1处理中 2 处理完毕
    const progressState = ref(0);
    // 文件处理错误
    const isProgressError = ref(false);
    // 获取屏幕像素比
    const devicePixelRatio = window.devicePixelRatio || 1;
    // 文件的页数
    const pageCount = ref(0);
    // 第一页渲染完成
    const isFirstPageRendered = ref(false);
    // 所有页
    const pages = computed(() =>
      Array.from(
        {
          length: pageCount.value
            ? isFirstPageRendered.value
              ? pageCount.value
              : 1
            : 0,
        },
        (_, i) => ({
          key: i,
          pageNum: i + 1,
        })
      )
    );
    // 元素观察器
    const resizeObserverCallback = (entries: any[]) => {};
    const { resizeRef, contentRect } = useResizeObserver(
      resizeObserverCallback
    );
    const containerSize = ref({ width: 150, height: 300 });
    // 重置默认参数
    const resetState = () => {
      readyState.value = 0;
      isReadyError.value = false;
      progressState.value = 0;
      isProgressError.value = false;
      fileInstance = null;
      pageCount.value = 0;
      isFirstPageRendered.value = false;
    };
    // 初始化
    const initialize = async (src: FileSrc) => {
      // console.log('initialize');
      resetState();
      // 开始读取文件流
      readyState.value = 1;
      const file = await getFileTypeAndArrayBuffer(src);
      readyState.value = 2;
      if (!file) {
        // 读取失败
        isReadyError.value = true;
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
        isReadyError.value = true;
        return events.onError({
          eventName: 'load',
          message: '文件格式不支持',
          pageNum: 0,
        });
      } else {
        // console.log(fileTypeName);
        // 支持则开始解码文件
        progressState.value = 1;
        fileInstance = await getDocument(
          fileTypeName as FileTypeName,
          arrayBuffer
        );
      }

      console.log(fileInstance);
      progressState.value = 2;
      if (!fileInstance?.numPages) {
        // 处理失败
        isProgressError.value = true;
        return events.onError({
          eventName: 'load',
          message: '文件处理失败',
          pageNum: 0,
        });
      }
      // 解码成功
      // 设置总页数开始逐页渲染
      pageCount.value = fileInstance.numPages;
    };
    const onRendered = (e: any) => {
      if (e.pageNum === 1) {
        isFirstPageRendered.value = true;
      }
      options.value.onRendered(e);
    };
    const onError = (e: any) => {
      if (e.pageNum === 1) {
        isFirstPageRendered.value = true;
      }
      options.value.onError(e);
    };

    const zoomIn = (level = 0.3) => {
      const newScale = (transform.value.scale * 10 + level * 10) / 10;
      setScale(newScale);
    };
    const zoomOut = (level = 0.3) => {
      const newScale = (transform.value.scale * 10 - level * 10) / 10;
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
      if (scale < 0.3 || scale > 10) {
        return;
      }
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
    const scrollToPage = (pageNum: number) => {
      middleware.emit('PAGE:SCROLL_TO', pageNum);
    };
    let focusedPageNum: number = -1;
    const createMagnifyArea = (
      origin: [number, number] = [0, 0],
      size: [number, number] = [10, 10],
      pageNum = 1
    ) => {
      if (focusedPageNum > -1) {
        return;
      }
      scrollToPage(pageNum);
      requestAnimationFrame(() => {
        middleware.emit('PAGE:CREATE_MAGNIFY_AREA', origin, size, pageNum);
      });
    };
    const removeMagnifyArea = () => {
      middleware.emit('PAGE:REMOVE_MAGNIFY_AREA');
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
    });
    expose(data);
    onMounted(() => {
      watch(
        () => props.src,
        (newValue) => {
          initialize(newValue);
        },
        {
          immediate: true,
        }
      );
      watch(
        () => props.transform,
        (newValue) => {
          transform.value = getTransform(({ ...newValue } || {}) as Transform);
        },
        {
          immediate: true,
        }
      );
      watch(
        contentRect,
        (newValue) => {
          if (newValue) {
            containerSize.value = {
              width: newValue.width,
              height: newValue.height,
            };
          }
        },
        {
          immediate: true,
        }
      );
    });
    onBeforeUnmount(async () => {
      await fileInstance?.destroy?.()?.promise;
    });
    return () => (
      <div class="d-viewer outerContainer">
        <div class="mainContainer" ref={resizeRef}>
          <div class="viewerContainer">
            {readyState.value < 2 && slot_placeholder.value}
            {(isReadyError.value || isProgressError.value) && slot_error.value}
            <div
              class="pdfViewer"
              style={{ '--scale-factor': `${transform.value.scale}` }}
            >
              {pages.value.map((page) => (
                <Page
                  {...page}
                  instance={fileInstance}
                  devicePixelRatio={devicePixelRatio}
                  onRendered={onRendered}
                  onError={onError}
                  containerSize={containerSize.value}
                  transform={transform.value}
                  // style={{
                  //   transform: `rotate(${options.value.transform.rotate}deg) rotateX(${options.value.transform.yFlip ? 0.5 : 0}turn) rotateY(${options.value.transform.xFlip ? 0.5 : 0}turn)`,
                  // }}
                >
                  {{
                    placeholder: () => slot_placeholder.value,
                    error: () => slot_error.value,
                  }}
                </Page>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default DViewer;
