import { createVNode as v, Fragment as S } from "vue";
import { defineComponent as U, computed as D, toRefs as I, unref as N, reactive as O, ref as d } from "vue-demi";
function V(r) {
  return r.replace(/-(\w)/g, (e, t) => t ? t.toUpperCase() : "");
}
function $(r) {
  return Object.keys(r).reduce(
    (e, t) => (typeof r[t] < "u" && (e[V(t)] = r[t]), e),
    {}
  );
}
const p = ["rendered", "error", "loaded"], b = ["src", "aspectRatio", "cover", ...p.map((r) => `on${r.replace(/^\S/, (e) => e.toUpperCase())}`)], F = /* @__PURE__ */ U({
  name: "DImg",
  props: b,
  emits: [...p],
  setup(r, {
    slots: e,
    emit: t,
    expose: f,
    attrs: g
  }) {
    const R = p.reduce((o, a) => {
      const c = `on${a.replace(/^\S/, (u) => u.toUpperCase())}`;
      return o[c] = (...u) => t(a, ...u), o;
    }, {}), n = D(() => {
      const {
        ...o
      } = I(r), a = Object.entries(o).reduce((c, [u, E]) => {
        const m = N(E);
        return m !== void 0 && (c[u] = m), c;
      }, {});
      return {
        ...R,
        ...$({
          ...g,
          ...a
        })
      };
    });
    console.log(n);
    const h = O({
      ...{}
    });
    f(h);
    const s = d(null), i = d(0), l = d(!1), w = () => {
      i.value = 2, n.value.onLoaded(s.value), n.value.onRendered({
        pageNum: 1
      });
    }, C = (o) => {
      l.value = !0, n.value.onError(o);
    };
    return () => {
      var o, a;
      return v(S, null, [i.value < 2 ? (o = e.placeholder) == null ? void 0 : o.call(e) : l.value && ((a = e.error) == null ? void 0 : a.call(e)), v("img", {
        ref: s,
        class: {
          "d-img": !0,
          cover: !!(n.value.cover || n.value.cover === "")
        },
        style: {
          "aspect-ratio": n.value.aspectRatio || "unset",
          width: n.value.width || "100%"
        },
        onload: w,
        onerror: C,
        src: n.value.src
      }, null)]);
    };
  }
});
export {
  F as DImg,
  p as imgEmits,
  b as imgProps
};
