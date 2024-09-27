
function getMimeType(uint8Array) {
    // 检查图片格式
    if (uint8Array[0] === 0xFF && uint8Array[1] === 0xD8) { // JPEG
        return "image/jpeg"
    } else if (
        uint8Array[0] === 0x89 &&
        uint8Array[1] === 0x50 &&
        uint8Array[2] === 0x4E &&
        uint8Array[3] === 0x47
    ) { // PNG
        return "image/png"
    } else {
        return null;
    }
}
function decodeImage(arrayBuffer, page) {
}

function toRGBA8(page) {
    return null
}

async function decode(arrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer);
    const blob = new Blob([uint8Array], { type: getMimeType(uint8Array) });
    let result = false
    const bitmap = await createImageBitmap(blob)
    const width = bitmap.width;
    const height = bitmap.height;
    return [{ bitmap, width, height }];
}

var IMG = { decode, toRGBA8, decodeImage };
export default IMG;