import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
//  @ts-ignore
import WORKER_SRC from 'pdfjs-dist/build/pdf.worker.mjs?url';

GlobalWorkerOptions.workerSrc = WORKER_SRC;
export default async (src: ArrayBuffer) => {
  const loadingTask = getDocument(src);
  return await loadingTask.promise;
};
