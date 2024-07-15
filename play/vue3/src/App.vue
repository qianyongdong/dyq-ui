<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { SortableEvent } from "sortablejs";
import type { MimeType } from '@dyq-ui/components';
import { setAuth } from '@dyq-ui/utils';
import { vSlideIn } from '@dyq-ui/directives';
// import { DViewer, DList } from '../../../packages/components';
import imgUrl from './assets/1.jpg';
import bmpUrl from './assets/1.bmp';
import pdfUrl from './assets/1.pdf';
import tifUrl from './assets/1.tif?url';

const onRendered = (e) => {
    console.log('onRendered', e);
}
const onError = (e) => {
    console.log('onError', e);
}
const viewerRef = ref(null)
const list = ref(Array.from({ length: 36 }, (_, i) => i + 1))

const insertAtIndex = (start: number, newElement: any, isReplace = false) => {
    const end = isReplace ? (Array.isArray(newElement) ? newElement.length : 1) + start : start
    list.value = [...list.value.slice(0, start), ...Array.isArray(newElement) ? newElement : [newElement], ...list.value.slice(end)];
}

const onChange = (event: SortableEvent) => {
    if (!event) return
    // 移动的元素
    const movedElement = list.value[event.oldIndex as number]
    // 被替换位置的元素
    const replacedElement = list.value[event.newIndex as number]

    console.log("原始位置：", event.oldIndex, '当前位置：', event.newIndex, '移动元素:', movedElement, '被替换元素：', replacedElement)
}
</script>

<template>
    <div class="app">
        <!-- component test -->
        <section class="list viewer-list">
            <d-viewer :src="pdfUrl" @rendered="onRendered" @error="onError"></d-viewer>
            <d-viewer :src="tifUrl" @rendered="onRendered" @error="onError"></d-viewer>
            <d-viewer :src="bmpUrl" @rendered="onRendered" @error="onError"></d-viewer>
            <d-viewer :src="imgUrl" @rendered="onRendered" @error="onError"></d-viewer>
        </section>

        <!-- <d-authority permission="edit">111</d-authority>
        <d-authority :permission="['edit']">2222</d-authority> -->
        <!-- <canvas ref="canvas"></canvas> -->
        <!-- directives test -->
        <!-- <ul>
            <li v-slide-in v-for="i in 10" :key="i" class="page">i</li>
        </ul> -->
        <div class="list">
            <button @click="insertAtIndex(list.length, [999, 1000, 1111])">增加3个</button>
            <button @click="insertAtIndex(1, '1-1')">在第一个后面增加1个</button>
            <button @click="insertAtIndex(0, '替换了', true)">替换第一个</button>
            <d-list :row="3" :column="4" gap="10px" drag v-model="list" @change="onChange">
                <template #default="{ item, index }">
                    <div class="list-item">
                        index:{{ index }}, item:{{ item }}
                    </div>
                </template>
            </d-list>
        </div>

    </div>
</template>

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