import { default as getPDFDocument } from './pdf';
import { default as getFileDocument } from './getFileDocument';
import type { FileTypeName } from '../index';
import type { CreateWorkerArgsType } from './tesseract';

export default (
  fileType: FileTypeName,
  arrayBuffer: ArrayBuffer,
  OCROptions: CreateWorkerArgsType
) => {
  switch (fileType) {
    case 'pdf':
      return getPDFDocument(arrayBuffer);
    default:
      return getFileDocument(fileType, arrayBuffer, OCROptions);
  }
};
