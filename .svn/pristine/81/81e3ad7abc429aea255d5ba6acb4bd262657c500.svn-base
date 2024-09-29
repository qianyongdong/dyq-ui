//@ts-nocheck
import { createWorker } from 'tesseract.js';
export type CreateWorkerArgsType = Parameters<typeof createWorker>;
// import workerUrl from 'tesseract.js/dist/worker.min.js?url';
// import coreUrl from 'tesseract.js-core/tesseract-core-simd-lstm.wasm.js?url';

export async function _getTextContent(
  e: any,
  containerWidth: number,
  containerHeight: number,
  options: CreateWorkerArgsType
) {
  if (!window.tesseractWorker) {
    window.tesseractWorker = await createWorker(...options);
  }
  const tesseractWorker = window.tesseractWorker;
  //   'eng', 1, {
  //   workerPath: '/worker.min.js',
  //   corePath: '/tesseract-core-simd-lstm.wasm.js',
  //   langPath: '/lang-data',
  //   }
  const {
    data: { words },
  } = await tesseractWorker.recognize(e);

  return convertTesseractWordsToPDFTextContent(
    words,
    containerWidth,
    containerHeight
  );
}

function convertTesseractWordsToPDFTextContent(
  words: any,
  containerWidth: number,
  containerHeight: number
) {
  const items = words.map((word: any) => {
    const { x0: left, y0: top, x1: right, y1: bottom } = word.bbox;
    // 计算宽度和高度
    const width = right - left;
    const height = bottom - top;

    // 将位置和大小转换为类似 PDF.js 的 transform 矩阵
    const transform = [
      width, // 水平缩放
      0, // 水平倾斜
      0, // 垂直倾斜
      height, // 垂直缩放
      left, // x 位置
      containerHeight - bottom, // y 位置（PDF 坐标系原点在左下角）
    ];

    return {
      str: word.text,
      dir: 'ltr', // 假设是从左到右的文本
      width: width,
      height: height,
      transform: transform,
      fontName: 'sans_serif', // 你可以根据实际需要设置字体
    };
  });
  const styles = {
    sans_serif: {
      ascent: 0,
      descent: 0,
      fontFamily: 'sans-serif',
      vertical: false,
    },
  };
  return { items, lang: null, styles };
}
