import { createVNode as c } from "vue";
import { ref as m, shallowRef as p, onBeforeUnmount as R, watch as b, readonly as w, defineComponent as A, computed as i, watchEffect as T } from "vue-demi";
function O(e, t) {
  const s = m(), n = p(!1), a = new IntersectionObserver(
    (r) => {
      n.value = !!r.find((l) => l.isIntersecting);
    },
    t
  );
  return R(() => {
    a.disconnect();
  }), b(
    s,
    (r, l) => {
      l && (a.unobserve(l), n.value = !1), r && a.observe(r);
    },
    {
      flush: "post"
    }
  ), { intersectionRef: s, isIntersecting: n };
}
function x(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function y() {
  const e = p(), t = (s) => {
    e.value = s;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (s) => e.value = s
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => x(e.value)
  }), t;
}
function S(e, t = "content") {
  const s = y(), n = m(), a = new ResizeObserver((r) => {
    r.length && (t === "content" ? n.value = r[0].contentRect : n.value = r[0].target.getBoundingClientRect());
  });
  return R(() => {
    a.disconnect();
  }), b(
    () => s.el,
    (r, l) => {
      l && (a.unobserve(l), n.value = void 0), r && a.observe(r);
    },
    {
      flush: "post"
    }
  ), {
    resizeRef: s,
    contentRect: w(n)
  };
}
const k = ["modelValue", "color", "indeterminate", "width"], E = /* @__PURE__ */ A({
  name: "DProgressCircular",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: k,
  setup(e, {
    slots: t
  }) {
    const n = 2 * Math.PI * 20, a = m(), {
      intersectionRef: r,
      isIntersecting: l
    } = O(), {
      resizeRef: C,
      contentRect: g
    } = S(), v = i(() => Math.max(0, Math.min(100, e.modelValue || 0))), d = i(() => Number(e.width || 4)), u = i(() => g.value ? g.value.width : Math.max(d.value, 32)), f = i(() => 20 / (1 - d.value / u.value) * 2), h = i(() => d.value / u.value * f.value), N = (o, _ = "px") => {
      if (!(o == null || o === ""))
        return isNaN(+o) ? String(o) : isFinite(+o) ? `${Number(o)}${_}` : void 0;
    }, I = i(() => N((100 - v.value) / 100 * n));
    return T(() => {
      r.value = a.value, C.value = a.value;
    }), () => c("div", {
      ref: a,
      class: ["d-progress-circular", {
        "d-progress-circular--indeterminate": !!e.indeterminate,
        "d-progress-circular--visible": l.value
      }],
      style: {
        color: e.color || "black",
        width: u.value + "px",
        height: u.value + "px"
      },
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : v.value
    }, [c("svg", {
      style: {
        transform: "rotate(-90deg)"
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${f.value} ${f.value}`
    }, [c("circle", {
      class: ["d-progress-circular__underlay"],
      fill: "transparent",
      cx: "50%",
      cy: "50%",
      r: 20,
      "stroke-width": h.value,
      "stroke-dasharray": n,
      "stroke-dashoffset": 0
    }, null), c("circle", {
      class: "d-progress-circular__overlay",
      fill: "transparent",
      cx: "50%",
      cy: "50%",
      r: 20,
      "stroke-width": h.value,
      "stroke-dasharray": n,
      "stroke-dashoffset": I.value
    }, null)]), t.default && c("div", {
      class: "d-progress-circular__content"
    }, [t.default({
      value: v.value
    })])]);
  }
});
export {
  E as DProgressCircular
};
