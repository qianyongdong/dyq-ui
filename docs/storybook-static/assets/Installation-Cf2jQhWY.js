import{j as e}from"./jsx-runtime-Bse31Axk.js";import{u as p}from"./index-DVVN6Y6w.js";import{ae as s,ag as r}from"./index-C9GAtMxv.js";import"./iframe-iDXBaYcE.js";import"../sb-preview/runtime.js";import"./index-TAVom-gR.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function n(i){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...p(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"快速开始/安装"}),`
`,e.jsx(t.h1,{id:"开始使用-dyq-ui",children:"开始使用 dyq-ui"}),`
`,e.jsx(t.p,{children:"让我们从 dyq-ui 开始吧。"}),`
`,e.jsx(t.h2,{id:"安装",children:"安装"}),`
`,e.jsx(t.p,{children:"如果您想要 Dyq-ui 添加到现有的项目，请按照这些步骤操作。"}),`
`,e.jsx(t.p,{children:"npm:"}),`
`,e.jsx(r,{type:"dynamic",language:"bash",code:"npm install dyq-ui",dark:!0}),`
`,e.jsx(t.p,{children:"or yarn:"}),`
`,e.jsx(r,{type:"dynamic",language:"bash",code:"yarn add dyq-ui",dark:!0}),`
`,e.jsx(t.p,{children:"or pnpm:"}),`
`,e.jsx(r,{type:"dynamic",language:"bash",code:"pnpm add dyq-ui",dark:!0}),`
`,e.jsx(t.h3,{id:"完整引入",children:"完整引入"}),`
`,e.jsx(t.p,{children:"在 main.js 中写入以下内容："}),`
`,e.jsx(t.p,{children:"vue3:"}),`
`,e.jsx(r,{type:"dynamic",language:"typescript",code:`
import { createApp } from 'vue'
import DUi from 'dyq-ui'
import 'dyq-ui/index.css';
import App from './App.vue'

const app = createApp(App)

app.use(DUi)
app.mount('#app')
`,dark:!0}),`
`,e.jsx(t.p,{children:"or vue2:"}),`
`,e.jsx(r,{type:"dynamic",language:"typescript",code:`
import Vue from 'vue';
import DUi from 'dyq-ui';
import 'dyq-ui/index.css';
import App from './App.vue';

Vue.use(DUi);

new Vue({
  el: '#app',
  render: h => h(App)
});
`,dark:!0}),`
`,e.jsx(t.h3,{id:"手动导入",children:"手动导入"}),`
`,e.jsx(t.p,{children:"在页面中使用(YourPage.vue)："}),`
`,e.jsx(t.p,{children:"vue3:"}),`
`,e.jsx(r,{type:"dynamic",language:"typescript",code:`
<template>
  <d-list v-model="list" />
</template>
<script setup>
  import {ref} from 'vue'
  import { DList } from 'dyq-ui'
  import "dyq-ui/list/style.css"
  const list = ref(Array.from({ length: 9 }, (_, i) => i + 1))
<\/script>
`,dark:!0}),`
`,e.jsx(t.p,{children:"or vue2:"}),`
`,e.jsx(r,{type:"dynamic",language:"typescript",code:`
<template>
  <d-list v-model="list" />
</template>
<script>
  import { DList } from 'dyq-ui'
  import "dyq-ui/list/style.css"
  export default {
    components: { DList },
    data:{
      return {
        list:Array.from({ length: 9 }, (_, i) => i + 1)
      }
    }
  }
<\/script>
`,dark:!0}),`
`,e.jsx(t.h2,{id:"开始使用",children:"开始使用"}),`
`,e.jsx(t.p,{children:"至此，一个基于 Vue 和 Dyq-ui 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。"})]})}function h(i={}){const{wrapper:t}={...p(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{h as default};
