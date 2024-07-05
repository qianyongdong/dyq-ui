importScripts('./tiff/UTIF.js')
importScripts('./bmp/BMP.js')
importScripts('./img/IMG.js')
// 缓存
const temp = {}

const EVENT = {
    decode: async ({ fileType, arrayBuffer, uid }, lib) => {
        if (!temp[uid]) {
            temp[uid] = {
                fileType,
                pages: await lib.decode(arrayBuffer),
                arrayBuffer: arrayBuffer,
            };
        }
        const numPages = temp[uid].pages.length;
        if (!numPages) throw new Error('解码失败');
        return { uid, numPages };
    },
    getPage: ({ pageIndex, uid }, lib) => {
        const tem = temp[uid];
        if (!tem) {
            throw new Error('请先解码文件');
        }
        const { pages, arrayBuffer } = tem;
        const page = pages[pageIndex];
        lib.decodeImage(arrayBuffer, page);
        return {
            uid,
            pageIndex,
            buffer: lib.toRGBA8(page),
            naturalWidth: page.width,
            naturalHeight: page.height,
            bitmap: page.bitmap
        };
    },
};

const destroy = ({ uid }) => {
    delete temp[uid];
}
const LIBS = {
    tiff: UTIF,
    bmp: BMP,
    img: IMG
}
onmessage = async function (e) {
    const { eventName, props } = e.data
    if (!eventName || !props) return postMessage('缺少必要参数');
    if (eventName === 'destroy') {
        destroy(props)
        return postMessage({ _eventName: eventName, _props: props })
    }
    let _props = null
    let _errorMessage = ''
    try {
        const { uid, fileType } = props
        const eventFun = EVENT[eventName]
        _props = await eventFun(props, LIBS[fileType || temp[uid].fileType])
    } catch (e) {
        _errorMessage = e?.message || `${fileType}.worker.js出错了`
    }

    postMessage({ _eventName: eventName, _props, _errorMessage })
}