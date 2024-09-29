// @ts-ignore
import MD5 from 'md5';
// @ts-ignore
import mainWorker from './worker?worker&inline';
// @ts-ignore
import offscreenCanvasWorker from './offscreenCanvas.worker?worker&inline';
import type { FileTypeName } from '../index';
import { _getTextContent, type CreateWorkerArgsType } from './tesseract';

// const worker = new Worker(new URL('./worker.js?worker', import.meta.url), {
//   type: 'module',
// });
const worker = new mainWorker({ type: 'module' });
const temp: any = {};
const OCROptions: { value: CreateWorkerArgsType } = { value: [] };
async function getPage(pageNum: number) {
  // @ts-ignore
  const that = this;
  const { uid } = that;
  const pageIndex = pageNum - 1;
  if (!temp[uid].processCapabilityArray[pageIndex]) {
    const processCapability = Promise.withResolvers();
    temp[uid].processCapabilityArray[pageIndex] = processCapability;
    worker.postMessage({
      eventName: 'getPage',
      props: { uid, pageIndex },
    });
  }
  return temp[uid].processCapabilityArray[pageIndex].promise;
}
async function destroy() {
  const endCapability = Promise.withResolvers();
  // @ts-ignore
  const that = this;
  const { uid } = that;
  if (!temp[uid]) {
    return;
  }
  // const offscreenWorkerArray = temp[uid].offscreenWorkerArray;
  // offscreenWorkerArray.forEach((offscreenWorker: any) =>
  //   offscreenWorker.terminate()
  // );
  worker.postMessage({ eventName: 'destroy', props: { uid } });
  temp[uid].endCapability = endCapability;
  return temp[uid].endCapability.promise;
}
function getViewport({ scale }: { scale: number }) {
  // @ts-ignore
  const that = this;
  const { uid, pageIndex } = that;
  const tem = temp[uid];
  const page = tem.pages[pageIndex];
  if (!page) {
    throw new Error(`${that.pageIndex + 1}页没有先执行getPage方法`);
  }
  const { naturalWidth, naturalHeight } = page;
  return {
    width: Math.round(naturalWidth * scale),
    height: Math.round(naturalHeight * scale),
    scale,
    rawDims: {
      pageHeight: naturalHeight,
      pageWidth: naturalWidth,
      pageX: 0,
      pageY: 0,
    },
  };
}
function _render({ canvasContext, viewport, page }: any) {
  const { naturalWidth, naturalHeight, bitmap } = page;
  const { width, height } = viewport;

  canvasContext.drawImage(
    bitmap,
    0,
    0,
    naturalWidth,
    naturalHeight,
    0,
    0,
    width,
    height
  );
}

function render({ canvasContext, viewport }: any) {
  // @ts-ignore
  const that = this;
  const { pageIndex, uid } = that;
  const tem = temp[uid];
  const { pages, offscreenArray, offscreenWorkerArray } = tem;
  const page = pages[pageIndex];
  if (!offscreenArray[pageIndex]) {
    // offscreenArray[pageIndex] = canvasContext.transferControlToOffscreen();
    const { naturalWidth, naturalHeight } = page;
    const offscreenCanvas = new OffscreenCanvas(naturalWidth, naturalHeight);
    offscreenArray[pageIndex] = offscreenCanvas;
  }

  return {
    promise: new Promise((r, j) => {
      if (page.bitmap) {
        requestAnimationFrame(() => {
          _render({ canvasContext, viewport, page });
          requestAnimationFrame(() => r(null));
        });
        return;
      }
      if (!offscreenWorkerArray[pageIndex]) {
        // const offscreenWorker = new Worker(
        //   new URL('./offscreenCanvas.worker.js?worker', import.meta.url)
        // );
        const offscreenWorker = new offscreenCanvasWorker();
        offscreenWorkerArray[pageIndex] = offscreenWorker;

        offscreenWorker.onmessage = ({ data }: { data: any }) => {
          if (data) {
            if (data instanceof ImageBitmap) {
              page.bitmap = data;
              delete page.buffer;
              requestAnimationFrame(() =>
                _render({ canvasContext, viewport, page })
              );
            }
            r(null);
          } else {
            j(null);
          }
          offscreenWorker.terminate();
          delete offscreenWorkerArray[pageIndex];
        };
        offscreenWorker.postMessage(
          { canvas: offscreenArray[pageIndex], page, viewport },
          [offscreenArray[pageIndex]]
        );
      }
    }),
  };
}

// function serializeBitmap() {
//   // @ts-ignore
//   const that = this;
//   const { pageIndex, uid } = that;
//   const tem = temp[uid];
//   const { pages } = tem;
//   const page = pages[pageIndex];
//   const { naturalWidth, naturalHeight, bitmap } = page;
//   const canvas = document.createElement('canvas');
//   canvas.width = naturalWidth;
//   canvas.height = naturalHeight;
//   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
//   ctx.drawImage(bitmap, 0, 0);
//   return canvas.toDataURL();
// }
function getTextContent() {
  // @ts-ignore
  const that = this;
  const { pageIndex, uid } = that;
  const tem = temp[uid];
  const { pages } = tem;
  const page = pages[pageIndex];
  const { bitmap, naturalHeight, naturalWidth } = page;
  const canvas = document.createElement('canvas');
  canvas.width = naturalWidth;
  canvas.height = naturalHeight;
  const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvasContext.drawImage(bitmap, 0, 0);
  return _getTextContent(canvas, naturalWidth, naturalHeight, OCROptions.value);
}
const eventsObj = {
  decode: ({ uid, numPages }: { uid: string; numPages: number }) => {
    return { uid, numPages, getPage, destroy };
  },
  getPage: ({
    uid,
    pageIndex,
    buffer,
    bitmap,
    naturalWidth,
    naturalHeight,
  }: {
    uid: string;
    pageIndex: number;
    buffer: Uint8Array;
    bitmap: ImageBitmap;
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    if (!temp[uid].pages[pageIndex]) {
      temp[uid].pages[pageIndex] = {
        buffer,
        bitmap,
        naturalWidth,
        naturalHeight,
      };
    }
    const view = [0, 0, naturalWidth, naturalHeight];

    return {
      uid,
      pageIndex,
      render,
      getViewport,
      view,
      isOwn: true,
      getTextContent,
      //  serializeBitmap
    };
  },
  destroy: ({ uid }: { uid: string }) => {
    delete temp[uid];
  },
};
const capabilityObj = {
  decode: (uid: string) => {
    return temp[uid]?.startCapability;
  },
  getPage: (uid: string, pageIndex: number) => {
    return temp[uid]?.processCapabilityArray[pageIndex];
  },
  destroy: (uid: string) => {
    return temp[uid]?.endCapability;
  },
};

worker.onmessage = (e: any) => {
  const {
    _eventName,
    _errorMessage,
    _props,
  }: {
    _eventName: keyof typeof capabilityObj | 'destroy';
    _errorMessage: string;
    _props: any;
  } = e.data;
  const { uid, pageIndex } = _props;
  const capability = capabilityObj[_eventName](uid, pageIndex);
  if (_errorMessage) capability?.reject(_errorMessage);
  capability?.resolve(eventsObj[_eventName](_props));
};

export default async (
  fileType: FileTypeName,
  src: ArrayBuffer,
  _OCROptions: CreateWorkerArgsType
) => {
  const typedArray = new Int32Array(src, 0, src.byteLength / 4);
  const uid = MD5(typedArray);
  OCROptions.value = _OCROptions;
  if (!temp[uid]) {
    const startCapability = Promise.withResolvers();
    const processCapabilityArray: any[] = [];
    const offscreenArray: any[] = []; // 离线画布对象
    const offscreenWorkerArray: any[] = [];
    temp[uid] = {
      startCapability,
      processCapabilityArray,
      offscreenArray,
      pages: [],
      offscreenWorkerArray,
    };
    worker.postMessage({
      eventName: 'decode',
      props: { fileType, uid, arrayBuffer: src },
    });
  }

  return temp[uid].startCapability.promise;
};
