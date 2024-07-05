import { defineComponent as v, computed as C, toRefs as h, unref as U, ref as w, reactive as D, h as I } from "vue-demi";
import "vue";
function O(r) {
  return r.replace(/-(\w)/g, (e, t) => t ? t.toUpperCase() : "");
}
function S(r) {
  return Object.keys(r).reduce(
    (e, t) => (typeof r[t] < "u" && (e[O(t)] = r[t]), e),
    {}
  );
}
const u = ["rendered", "error"], $ = [
  "src",
  "target",
  ...u.map((r) => `on${r.replace(/^\S/, (e) => e.toUpperCase())}`)
], z = v({
  name: "DImg",
  props: $,
  emits: [...u],
  setup(r, { slots: e, emit: t, expose: m, attrs: d }) {
    const f = u.reduce((n, c) => {
      const p = `on${c.replace(/^\S/, (o) => o.toUpperCase())}`;
      return n[p] = (...o) => t(c, ...o), n;
    }, {});
    C(() => {
      const { ...n } = h(r), c = Object.entries(n).reduce((p, [o, g]) => {
        const i = U(g);
        return i !== void 0 && (p[o] = i), p;
      }, {});
      return {
        ...f,
        ...S({ ...d, ...c })
      };
    });
    const s = w(), a = D({ ...{} });
    return m(a), () => {
      var n;
      return I("img", { ref: s, src: r.src }, (n = e == null ? void 0 : e.default) == null ? void 0 : n.call(e, a));
    };
  }
});
export {
  z as DImg,
  z as default,
  u as imgEmits,
  $ as imgProps
};
