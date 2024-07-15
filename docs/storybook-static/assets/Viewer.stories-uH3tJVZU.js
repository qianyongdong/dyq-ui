import{a as u}from"./base-A8LnW6LW.js";import"./vue.esm-bundler-CMyW0Ddt.js";import"./iframe-BvJ9nJlQ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g={title:"组件/数据展示(DATA & DISPLAY)/文件查看器(Viewer)",component:u,tags:["autodocs"],argTypes:{src:{control:{type:"select"},options:["./1.jpg","./1.png","./1.bmp","./1.pdf","./1.tif"],description:"文件地址,支持文件格式png",type:"string|dataUrl|File"},transform:{description:"视图变换",defaultValue:{table:{control:{type:"object",fields:{scale:{control:{type:"number"}},rotate:{control:{type:"number"}},xFlip:{control:{type:"boolean"}},yFlip:{control:{type:"boolean"}}}}}}},zoomIn:{type:"function",description:"放大，接收参数 level：number,默认为0.3"},zoomOut:{type:"function",description:"缩小，接收参数 level：number,默认为0.3"},rotateLeft:{type:"function",description:"左旋转，接收参数 deg：number,默认为90"},rotateRight:{type:"function",description:"右旋转，接收参数 deg：number,默认为90"},flipX:{type:"function",description:"水平翻转，接收参数 isFlipX：boolean,默认为切换"},flipY:{type:"function",description:"垂直翻转，接收参数 isFlipY：boolean,默认为切换"},createMagnifyArea:{type:"function",description:"创建矩形引导，接收参数 origin: [number, number] = [0, 0]， size: [number, number] = [10, 10]， pageNum = 1；备注：只允许存在一个，创建前请先removeMagnifyArea"},removeMagnifyArea:{type:"function",description:"移除矩形引导"}},args:{transform:{scale:1,rotate:0,xFlip:!1,yFlip:!1}}},t={args:{src:"./1.jpg"}},e=({})=>({components:{DViewer:u},data(){return{src:"./1.pdf",inputVal:1,magnifyArea:[[100,100],[60,100],1],magnifyArea3:[[100,100],[60,100],3]}},methods:{dispatch(s,...p){this.$refs.viewerRef[s](...p)}},template:`
  <div class="a-100">
  <button @click="dispatch('zoomIn')">放大</button>
  <button @click="dispatch('zoomOut')">缩小</button>
  <button @click="dispatch('rotateLeft')">左转</button>
  <button @click="dispatch('rotateRight')">右转</button>
  <button @click="dispatch('flipX')">镜面翻转</button>
  <button @click="dispatch('flipY')">垂直翻转</button>
  <button @click="dispatch('createMagnifyArea',...magnifyArea)">第一页放大区域</button>
  <button @click="dispatch('createMagnifyArea',...magnifyArea3)">第三页放大区域</button>
  <button @click="dispatch('removeMagnifyArea')">清除放大区域</button>
  <DViewer :src="src" ref="viewerRef" />
  </div>
  `});var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: './1.jpg'
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,a,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({}) => ({
  components: {
    DViewer
  },
  data() {
    return {
      src: "./1.pdf",
      inputVal: 1,
      magnifyArea: [[100, 100], [60, 100], 1],
      magnifyArea3: [[100, 100], [60, 100], 3]
    };
  },
  methods: {
    dispatch(eventName, ...args) {
      this.$refs.viewerRef[eventName](...args);
    }
  },
  template: \`
  <div class="a-100">
  <button @click="dispatch('zoomIn')">放大</button>
  <button @click="dispatch('zoomOut')">缩小</button>
  <button @click="dispatch('rotateLeft')">左转</button>
  <button @click="dispatch('rotateRight')">右转</button>
  <button @click="dispatch('flipX')">镜面翻转</button>
  <button @click="dispatch('flipY')">垂直翻转</button>
  <button @click="dispatch('createMagnifyArea',...magnifyArea)">第一页放大区域</button>
  <button @click="dispatch('createMagnifyArea',...magnifyArea3)">第三页放大区域</button>
  <button @click="dispatch('removeMagnifyArea')">清除放大区域</button>
  <DViewer :src="src" ref="viewerRef" />
  </div>
  \`
})`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const y=["Default","Transform"];export{t as Default,e as Transform,y as __namedExportsOrder,g as default};
