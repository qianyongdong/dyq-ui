<template>
    <div class="app">
        <!-- component test -->
        <section class="list viewer-list">
            <d-viewer :src="pdfUrl"></d-viewer>
            <d-viewer :src="tifUrl"></d-viewer>
            <d-viewer :src="bmpUrl"></d-viewer>
            <d-viewer :src="imgUrl"></d-viewer>
        </section>

        <div class="list">
            <d-list :row="3" :column="4" gap="10px" drag v-model="list">
                <template #default="{ item, index }">
                    <div class="list-item">
                        index:{{ index }}, item:{{ item }}
                    </div>
                </template>
            </d-list>
        </div>

    </div>
</template>

<script>
import imgUrl from './assets/1.jpg';
import bmpUrl from './assets/1.bmp';
import pdfUrl from './assets/1.pdf';
import tifUrl from './assets/1.tif?url';
export default {
    name: 'App',
    data() {
        return {
            list: Array.from({ length: 36 }, (_, i) => i + 1),
            imgUrl,
            bmpUrl,
            pdfUrl,
            tifUrl
        }
    }
};
</script>



<style lang='scss'>
body {
    margin: 0;
    padding: 0;
}

.app {
    width: 100vw;
    height: 100vh;

    .list {
        width: 100vw;
        height: 50vh;
        overflow: hidden;
    }

    .viewer-list {
        display: flex;

        >div {
            width: 25%;
        }
    }

    .list-item {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
}
</style>