onmessage = (event) => {
    try {
        const { canvas, page, viewport } = event.data;
        // draw to the offscreen canvas context

        const { buffer, naturalWidth, naturalHeight } = page
        const { width, height } = viewport

        let bitmap = page.bitmap
        const ctx = canvas.getContext("2d");

        if (!bitmap) {


            const imageData = new Uint8ClampedArray(buffer.buffer);

            // 创建原始图像数据对象
            const originalImageData = new ImageData(imageData, naturalWidth, naturalHeight);

            // // 创建临时 Canvas 用于绘制原始图像
            // const tempOffscreen = new OffscreenCanvas(naturalWidth, naturalHeight);
            // const tempCtx = tempOffscreen.getContext("2d");
            ctx.putImageData(originalImageData, 0, 0);
            bitmap = canvas.transferToImageBitmap()
        }
        // 在主 Canvas 上按比例绘制缩放后的图像
        // ctx.drawImage(bitmap, 0, 0, naturalWidth, naturalHeight, 0, 0, width, height);
        requestAnimationFrame(() => {
            postMessage(page.bitmap ? true : bitmap)
        });

    } catch (e) {
        console.log('error', e, e.message)
        postMessage(null)
    }
};