/**
 * Convert a hyphen-delimited string to camelCase.
 * @param {string} str
 * @returns {string}
 */
export function camelize(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

/**
 * Convert an object's keys from hyphen-delimited to camelCase.
 * @param {Record<string, any>} object
 * @returns {Record<string, any>}
 */
export function objectMap(object: Record<any, any>) {
  return Object.keys(object).reduce((result, key) => {
    if (typeof object[key] !== 'undefined') {
      result[camelize(key)] = object[key];
    }
    return result;
  }, {} as Record<string, any>);
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getView(
  imageWidth: number,
  imageHeight: number,
  containerWidth: number,
  containerHeight: number
) {
  // 计算缩放比例
  // const widthRatio = containerWidth / imageWidth / (96 / 72);
  // const heightRatio = containerHeight / imageHeight / (96 / 72);
  const widthRatio = containerWidth / imageWidth;
  const heightRatio = containerHeight / imageHeight;
  const scale = Math.min(widthRatio, heightRatio);
  // const scale = widthRatio;
  // 计算缩放后的图片尺寸并取整
  let scaledWidth = Math.floor(imageWidth * scale);
  let scaledHeight = Math.floor(imageHeight * scale);

  // 计算居中偏移量并取整
  // const offsetX = Math.floor((containerWidth - scaledWidth) / 2);
  // const offsetY = Math.floor((containerHeight - scaledHeight) / 2);

  const offsetX = 0,
    offsetY = 0;

  // 计算 view 属性
  const view = [
    offsetX,
    offsetY,
    offsetX + scaledWidth,
    offsetY + scaledHeight,
  ];

  return view;
}

/**
 * 计算父元素最多可容纳多少个子元素
 * @param {string} childWidth - 子元素的宽度（可以是px、em、%等）
 * @param {number} parentWidth - 父元素的宽度（以像素为单位）
 * @returns {number} - 父元素最多可容纳的子元素个数
 */
export function calculateMaxChildren(
  childWidth: string,
  parentWidth: number,
  gap: string
): number {
  const childWidthInPixels = calculatePixels(childWidth, parentWidth);
  const gapInPixels = calculatePixels(gap, parentWidth);

  // 每个子元素占用的总宽度 = 子元素的宽度 + gap
  const totalChildWidthWithGap = childWidthInPixels + gapInPixels;

  // 计算父元素最多可容纳的子元素个数（减去最后一个子元素后没有 gap）
  return Math.floor((parentWidth + gapInPixels) / totalChildWidthWithGap);
}

export function calculatePixels(e: string, parentWidth: number) {
  // 将子元素宽度的单位转换为像素
  const regex = /(\d+)(px|em|%)/;
  const match = e.match(regex);

  if (!match) {
    throw new Error('子元素宽度格式无效');
  }

  let value = parseFloat(match[1]);
  let unit = match[2];
  let childWidthInPixels;

  switch (unit) {
    case 'px':
      childWidthInPixels = value;
      break;
    case 'em':
      // 假设1em = 16px
      childWidthInPixels = value * 16;
      break;
    case '%':
      // 假设父元素宽度已知，百分比是相对于父元素宽度
      childWidthInPixels = (value / 100) * parentWidth;
      break;
    default:
      throw new Error('不支持的单位类型');
  }
  return childWidthInPixels;
}

export function getAutoSizeScale(
  imageWidth: number,
  imageHeight: number,
  containerWidth: number,
  containerHeight: number
) {
  const view = getView(
    imageWidth,
    imageHeight,
    containerWidth,
    containerHeight
  );
  return view[2] / imageWidth;
}
