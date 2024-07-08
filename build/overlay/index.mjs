import { withDirectives as t, createVNode as n, vShow as d } from "vue";
import { defineComponent as r } from "vue-demi";
const u = {
  modelValue: {
    type: Boolean
  },
  closeOnBack: {
    type: Boolean,
    default: () => !1
  },
  closeOnContentClick: {
    type: Boolean,
    default: () => !1
  },
  zIndex: {
    type: Number,
    default: 2e3
  },
  opacity: {
    type: Number,
    default: 0.3
  }
}, m = /* @__PURE__ */ r({
  name: "DOverlay",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: u,
  setup(e, {
    slots: o
  }) {
    const l = {
      zIndex: e.zIndex,
      backgroundColor: `rgba(0,0,0,${e.opacity})`
    };
    return () => {
      var a;
      return t(n("div", {
        class: "d-overlay",
        style: l
      }, [(a = o.default) == null ? void 0 : a.call(o)]), [[d, e.modelValue]]);
    };
  }
});
export {
  m as DOverlay
};
