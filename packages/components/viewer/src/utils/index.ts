import { default as getPDFDocument } from './pdf';
import { default as getFileDocument } from './getFileDocument';
import type { FileTypeName } from '../index';

export default (fileType: FileTypeName, arrayBuffer: ArrayBuffer) => {
  switch (fileType) {
    case 'pdf':
      return getPDFDocument(arrayBuffer);
    default:
      return getFileDocument(fileType, arrayBuffer);
  }
};
