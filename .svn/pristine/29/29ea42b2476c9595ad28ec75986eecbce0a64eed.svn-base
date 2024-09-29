const getFileTypeAndArrayBufferFromUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    const mimeType = response.headers.get('Content-Type') as string;
    const arrayBuffer = await response.arrayBuffer();
    return { arrayBuffer, mimeType };
  } catch (error) {
    console.error('Error Processing URL:', error);
    return null;
  }
};

const isValidBase64 = (str: string): boolean => {
  const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
  return base64Regex.test(str);
};

const base64ToArrayBuffer = (base64String: string): ArrayBuffer => {
  if (!isValidBase64(base64String)) {
    console.log(base64String);

    throw new Error('Invalid Base64 string');
  }
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
};

const getFileTypeAndArrayBufferFromBase64 = (base64String: string) => {
  try {
    const match = base64String.match(/^data:(.+);base64,(.*)$/);
    if (!match) {
      console.error('base64 was not contentType');
      return null;
    }
    const mimeType = match[1];
    const base64Data = match[2];
    const arrayBuffer = base64ToArrayBuffer(base64Data);
    return { arrayBuffer, mimeType };
  } catch (error) {
    console.error('Error Processing Base64:', error);
    return null;
  }
};

const readFileAsArrayBuffer = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

const getFileTypeAndArrayBufferFromLocal = async (file: File) => {
  try {
    const arrayBuffer = await readFileAsArrayBuffer(file);
    const mimeType = file.type;
    return { arrayBuffer: arrayBuffer as ArrayBuffer, mimeType };
  } catch (error) {
    console.error('Error reading file as ArrayBuffer:', error);
    return null;
  }
};

export const getFileTypeAndArrayBuffer = async (
  input: File | string
): Promise<{ arrayBuffer: ArrayBuffer; mimeType: string } | null> => {
  if (typeof input === 'string') {
    if (input.startsWith('data:')) {
      // Base64 编码
      return getFileTypeAndArrayBufferFromBase64(input);
    }
    {
      // URL
      return await getFileTypeAndArrayBufferFromUrl(input);
    }
  } else if (input instanceof File) {
    // 本地文件
    return await getFileTypeAndArrayBufferFromLocal(input);
  }
  return null;
};
