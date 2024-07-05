import { defineComponent as f, ref as w, reactive as y, h as g, computed as D, toRefs as A, unref as C } from "vue-demi";
import "vue";
const S = ["rendered", "error"], P = [
  "src",
  "mimeType",
  "target",
  ...S.map(
    (r) => `on${r.replace(/^\S/, (e) => e.toUpperCase())}`
  )
], j = f({
  name: "DViewer",
  props: P,
  emits: [...S],
  setup(r, { slots: e, emit: t, expose: i, attrs: a }) {
    const m = w(), s = y({ ...{} });
    return i(s), () => {
      var o;
      return g("div", { ref: m }, (o = e == null ? void 0 : e.default) == null ? void 0 : o.call(e, s));
    };
  }
});
function U(r) {
  return r.replace(/-(\w)/g, (e, t) => t ? t.toUpperCase() : "");
}
function I(r) {
  return Object.keys(r).reduce(
    (e, t) => (typeof r[t] < "u" && (e[U(t)] = r[t]), e),
    {}
  );
}
function V() {
  const r = localStorage.getItem("auth");
  return r ? r.split(",").filter(Boolean) : [];
}
const d = ["rendered", "error"], $ = [
  "src",
  "target",
  ...d.map((r) => `on${r.replace(/^\S/, (e) => e.toUpperCase())}`)
], x = f({
  name: "DImg",
  props: $,
  emits: [...d],
  setup(r, { slots: e, emit: t, expose: i, attrs: a }) {
    const m = d.reduce((n, c) => {
      const p = `on${c.replace(/^\S/, (u) => u.toUpperCase())}`;
      return n[p] = (...u) => t(c, ...u), n;
    }, {});
    D(() => {
      const { ...n } = A(r), c = Object.entries(n).reduce((p, [u, l]) => {
        const v = C(l);
        return v !== void 0 && (p[u] = v), p;
      }, {});
      return {
        ...m,
        ...I({ ...a, ...c })
      };
    });
    const h = w(), o = y({ ...{} });
    return i(o), () => {
      var n;
      return g("img", { ref: h, src: r.src }, (n = e == null ? void 0 : e.default) == null ? void 0 : n.call(e, o));
    };
  }
}), E = ["permission"], z = f({
  name: "DAuthority",
  props: E,
  setup(r, { slots: e }) {
    const t = V(), i = D(() => r.permission ? t ? Array.isArray(r.permission) ? r.permission.every((a) => t.includes(a)) : t.includes(r.permission) : !1 : !0);
    return e.default && e.default({ userPermissions: t }), () => i.value && e.default ? g(e.default) : null;
  }
});
export {
  z as DAuthority,
  x as DImg,
  j as DViewer,
  E as authorityProps,
  d as imgEmits,
  $ as imgProps,
  S as viewerEmits,
  P as viewerProps
};
