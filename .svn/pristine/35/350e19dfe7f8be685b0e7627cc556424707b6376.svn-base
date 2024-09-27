import * as PDF from 'pdfjs-dist';
//  @ts-ignore
import WORKER_SRC from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

PDF.GlobalWorkerOptions.workerSrc = WORKER_SRC;
export default async (src: ArrayBuffer) => {
  const loadingTask = PDF.getDocument(src);
  return await loadingTask.promise;
};
