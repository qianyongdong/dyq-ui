// @ts-ignore
import MD5 from 'md5';
// @ts-ignore
import mainWorker from './worker?worker&inline';
// @ts-ignore
import offscreenCanvasWorker from './offscreenCanvas.worker?worker&inline';
import { FileTypeName } from '../index';
// const worker = new Worker(new URL('./worker.js?worker', import.meta.url), {
//   type: 'module',
// });
const worker = new mainWorker({ type: 'module' });
const temp: any = {};
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
  const view = [0, 0, naturalWidth, naturalHeight];
  that.view = view;
  return {
    width: Math.round(view[2] * scale),
    height: Math.round(view[3] * scale),
    scale,
    viewBox: view,
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
    const offscreenCanvas = new OffscreenCanvas(
      viewport.width,
      viewport.height
    );
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
          console.log('offscreenWorker.onmessage', data);
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

    return { uid, pageIndex, render, getViewport };
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
  console.log(_eventName, _errorMessage, _props);
  const { uid, pageIndex } = _props;
  const capability = capabilityObj[_eventName](uid, pageIndex);
  if (_errorMessage) capability?.reject(_errorMessage);
  capability?.resolve(eventsObj[_eventName](_props));
};

export default async (fileType: FileTypeName, src: ArrayBuffer) => {
  const typedArray = new Int32Array(src, 0, src.byteLength / 4);
  const uid = MD5(typedArray);
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
