import { DViewer } from '../../packages/components';
import "../../packages/components/viewer/style"
import "./viewer.css"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: '组件/数据展示(DATA & DISPLAY)/文件查看器(Viewer)',
  component: DViewer,
  tags: ['autodocs'],
  argTypes: {
    src: { control: { type: 'select' }, options: ["/1.jpg", "/1.png", "/1.bmp", "/1.pdf", "/1.tif"], description: '文件地址,支持文件格式png', type: 'string|dataUrl|File' },
    transform: {
      description: "视图变换",
      defaultValue: {
        table: {
          control: {
            type: 'object',
            fields: {
              scale: { control: { type: 'number' } },
              rotate: { control: { type: 'number' } },
              xFlip: { control: { type: 'boolean' } },
              yFlip: { control: { type: 'boolean' } },
            },
          },
        }
      }
    }
  },
  args: {
    transform: {
      scale: 1,
      rotate: 0,
      xFlip: false,
      yFlip: false,
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    src: '/1.jpg',
  },
};

// export const Transform = {
//   args: {
//     src: "/1.bmp",
//     transform: {
//       "scale": 1,
//       "rotate": 0,
//       "xFlip": false,
//       "yFlip": true
//     },
//   }
// };
export const Transform = ({ }) => ({
  components: { DViewer },
  data() {
    return {
      src: "./1.pdf",
      inputVal: 1,
      magnifyArea: [[100, 100], [60, 100], 1],
      magnifyArea3: [[100, 100], [60, 100], 3]
    }
  },
  methods: {
    dispatch(eventName, ...args) {
      this.$refs.viewerRef[eventName](...args)
    },
  },
  template: `
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
  `
});