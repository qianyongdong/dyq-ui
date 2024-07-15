import{d as s}from"./index-D9f9qccq.js";import"./iframe-iDXBaYcE.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-DU015vb9.js";const n=Array.from({length:9},(e,t)=>t+1),y={title:"组件/容器组件(CONTAINMENT)/列表(List)",component:s,tags:["autodocs"],argTypes:{modelValue:{required:!0,description:"v-model绑定的列表数组"},column:{type:"number",description:"列数"},row:{type:"number",description:"行数"},gap:{type:"string",description:"间隔,像素单位 px | em | %"},itemHeight:{type:"string",description:"子元素高度,优先级比row属性高,像素单位 px | em | %",control:!1},itemWidth:{type:"string",description:"子元素宽度,优先级比column属性高,像素单位 px| em | %",control:!1},disabled:{description:"是否禁用拖拽",defaultValue:!1},onEnd:{type:"function",description:"监听拖动结束时，返回 SortableEvent 对象"}},args:{modelValue:n,column:4,row:4,gap:"0px",disabled:!1}},u={args:{disabled:!0}},l=({})=>({components:{DList:s},data(){return{modelValue:[...n],gap:"10px",row:3,column:3}},methods:{insertAtIndex(e,t,x=!1){const b=x?(Array.isArray(t)?t.length:1)+e:e;this.modelValue=[...this.modelValue.slice(0,e),...Array.isArray(t)?t:[t],...this.modelValue.slice(b)]},resetModelValue(){this.modelValue=[...n]}},template:`
  <div class="a-100">
  <button @click="insertAtIndex(modelValue.length, ['末尾1', '末尾2', '末尾3'])">末尾增加3个</button>
  <button @click="insertAtIndex(1, '插入1')">在第一个后面增加1个</button>
  <button @click="insertAtIndex(0, '替换了', true)">替换第一个</button>
  <button @click="resetModelValue">还原</button>
  <DList v-model="modelValue" :row="row" :column="column" :gap="gap" disabled></DList>
  </div>
  `}),o=({})=>({components:{DList:s},data(){return{modelValue:[...n],event:null}},methods:{onEnd(e){e&&(this.event=e)}},template:`
  <div class="a-100">
  <p v-if="event">原始位置：{{ event.oldIndex}}, 当前位置： {{event.newIndex}}, 移动元素：{{modelValue[event.oldIndex]}}, 被替换元素： {{modelValue[event.newIndex]}}</p>
  <p v-else> 拖动元素试试 </p>
  <DList v-model="modelValue" @end="onEnd" ></DList>
  </div> `}),a=({})=>({components:{DList:s},data(){return{modelValue:[...n]}},template:`
  <DList v-model="modelValue" >
    <template #default="{item,index}">
      <div class="list-item">
     索引：{{ index }}，子元素：{{ item }}
      </div>
    </template>
  </DList>
  `});var d,r,i;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(i=(r=u.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var m,c,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`({}) => ({
  components: {
    DList
  },
  data() {
    return {
      modelValue: [...modelValue],
      gap: "10px",
      row: 3,
      column: 3
    };
  },
  methods: {
    insertAtIndex(start, newElement, isReplace = false) {
      const end = isReplace ? (Array.isArray(newElement) ? newElement.length : 1) + start : start;
      this.modelValue = [...this.modelValue.slice(0, start), ...(Array.isArray(newElement) ? newElement : [newElement]), ...this.modelValue.slice(end)];
    },
    resetModelValue() {
      this.modelValue = [...modelValue];
    }
  },
  template: \`
  <div class="a-100">
  <button @click="insertAtIndex(modelValue.length, ['末尾1', '末尾2', '末尾3'])">末尾增加3个</button>
  <button @click="insertAtIndex(1, '插入1')">在第一个后面增加1个</button>
  <button @click="insertAtIndex(0, '替换了', true)">替换第一个</button>
  <button @click="resetModelValue">还原</button>
  <DList v-model="modelValue" :row="row" :column="column" :gap="gap" disabled></DList>
  </div>
  \`
})`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,V,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`({}) => ({
  components: {
    DList
  },
  data() {
    return {
      modelValue: [...modelValue],
      event: null
    };
  },
  methods: {
    onEnd(event) {
      if (!event) return;
      // 移动的元素
      this.event = event;
    }
  },
  template: \`
  <div class="a-100">
  <p v-if="event">原始位置：{{ event.oldIndex}}, 当前位置： {{event.newIndex}}, 移动元素：{{modelValue[event.oldIndex]}}, 被替换元素： {{modelValue[event.newIndex]}}</p>
  <p v-else> 拖动元素试试 </p>
  <DList v-model="modelValue" @end="onEnd" ></DList>
  </div> \`
})`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var A,F,g;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`({}) => ({
  components: {
    DList
  },
  data() {
    return {
      modelValue: [...modelValue]
    };
  },
  template: \`
  <DList v-model="modelValue" >
    <template #default="{item,index}">
      <div class="list-item">
     索引：{{ index }}，子元素：{{ item }}
      </div>
    </template>
  </DList>
  \`
})`,...(g=(F=a.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const I=["Default","Layout","Draggable","Slots_default"];export{u as Default,o as Draggable,l as Layout,a as Slots_default,I as __namedExportsOrder,y as default};
