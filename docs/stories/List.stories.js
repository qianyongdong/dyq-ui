import { DList } from '../../packages/components';
import "../../packages/components/list/style"
import "./list.css"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const modelValue = Array.from({ length: 9 }, (_, i) => i + 1)
export default {
  title: '组件/容器组件(CONTAINMENT)/列表(List)',
  component: DList,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { required: true, description: "v-model绑定的列表数组" },
    column: { type: 'number', description: "列数" },
    row: { type: 'number', description: "行数" },
    gap: { type: 'string', description: "间隔,像素单位 px | em | %" },
    itemHeight: { type: 'string', description: "子元素高度,优先级比row属性高,像素单位 px | em | %", control: false },
    itemWidth: { type: 'string', description: "子元素宽度,优先级比column属性高,像素单位 px| em | %", control: false },
    disabled: { description: '是否禁用拖拽', defaultValue: false },
    onEnd: { type: "function", description: '监听拖动结束时，返回 SortableEvent 对象' },
  },
  args: {
    modelValue: modelValue,
    column: 4,
    row: 4,
    gap: '0px',
    disabled: false
  }
};

export const Default = {
  args: {
    disabled: true,
  }
}

export const Layout = ({ }) => ({
  components: { DList },
  data() {
    return { modelValue: [...modelValue], gap: "10px", row: 3, column: 3, }
  },
  methods: {
    insertAtIndex(start, newElement, isReplace = false) {
      const end = isReplace ? (Array.isArray(newElement) ? newElement.length : 1) + start : start
      this.modelValue = [...this.modelValue.slice(0, start), ...Array.isArray(newElement) ? newElement : [newElement], ...this.modelValue.slice(end)];
    },
    resetModelValue() {
      this.modelValue = [...modelValue]
    }
  },
  template: `
  <div class="a-100">
  <button @click="insertAtIndex(modelValue.length, ['末尾1', '末尾2', '末尾3'])">末尾增加3个</button>
  <button @click="insertAtIndex(1, '插入1')">在第一个后面增加1个</button>
  <button @click="insertAtIndex(0, '替换了', true)">替换第一个</button>
  <button @click="resetModelValue">还原</button>
  <DList v-model="modelValue" :row="row" :column="column" :gap="gap" disabled></DList>
  </div>
  `
});


export const Draggable = ({ }) => ({
  components: { DList },
  data() {
    return { modelValue: [...modelValue], event: null, }
  },
  methods: {
    onEnd(event) {
      if (!event) return
      // 移动的元素
      this.event = event
    }
  },
  template: `
  <div class="a-100">
  <p v-if="event">原始位置：{{ event.oldIndex}}, 当前位置： {{event.newIndex}}, 移动元素：{{modelValue[event.oldIndex]}}, 被替换元素： {{modelValue[event.newIndex]}}</p>
  <p v-else> 拖动元素试试 </p>
  <DList v-model="modelValue" @end="onEnd" ></DList>
  </div> `,
});

export const Slots_default = ({ }) => ({
  components: { DList },
  data() {
    return { modelValue: [...modelValue] }
  },
  template: `
  <DList v-model="modelValue" >
    <template #default="{item,index}">
      <div class="list-item">
     索引：{{ index }}，子元素：{{ item }}
      </div>
    </template>
  </DList>
  `
});