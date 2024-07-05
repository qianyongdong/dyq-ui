import { defineComponent as m, ref as o, reactive as c, h as d } from "vue-demi";
const a = ["rendered", "error"], f = [
  "src",
  "mimeType",
  "target",
  ...a.map(
    (r) => `on${r.replace(/^\S/, (e) => e.toUpperCase())}`
  )
], g = m({
  name: "DViewer",
  props: f,
  emits: [...a],
  setup(r, { slots: e, emit: u, expose: n, attrs: v }) {
    const i = o(), t = c({ ...{} });
    return n(t), () => {
      var p;
      return d("div", { ref: i }, (p = e == null ? void 0 : e.default) == null ? void 0 : p.call(e, t));
    };
  }
});
export {
  g as DViewer,
  g as default,
  a as viewerEmits,
  f as viewerProps
};
