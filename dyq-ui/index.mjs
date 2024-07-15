var Kb = Object.defineProperty;
var LN = (c) => {
  throw TypeError(c);
};
var gb = (c, l, U) => l in c ? Kb(c, l, { enumerable: !0, configurable: !0, writable: !0, value: U }) : c[l] = U;
var v = (c, l, U) => gb(c, typeof l != "symbol" ? l + "" : l, U), TV = (c, l, U) => l.has(c) || LN("Cannot " + U);
var Q = (c, l, U) => (TV(c, l, "read from private field"), U ? U.call(c) : l.get(c)), i = (c, l, U) => l.has(c) ? LN("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(c) : l.set(c, U), m = (c, l, U, d) => (TV(c, l, "write to private field"), d ? d.call(c, U) : l.set(c, U), U), h = (c, l, U) => (TV(c, l, "access private method"), U);
var SU = (c, l, U, d) => ({
  set _(Z) {
    m(c, l, Z, U);
  },
  get _() {
    return Q(c, l, d);
  }
});
import { shallowRef as Ts, isVue2 as Hb, h as VF, ref as Bl, onBeforeUnmount as RN, watch as W0, readonly as vb, getCurrentInstance as NN, unref as tU, onUnmounted as Pb, onMounted as sN, nextTick as fb, isRef as GV, defineComponent as kc, computed as Rd, toRefs as Ab, reactive as Gs, watchEffect as _b, isVue3 as qb } from "vue-demi";
var $b = typeof global == "object" && global && global.Object === Object && global, la = typeof self == "object" && self && self.Object === Object && self, Js = $b || la || Function("return this")(), yt = Js.Symbol, Ss = Object.prototype, Ua = Ss.hasOwnProperty, da = Ss.toString, BW = yt ? yt.toStringTag : void 0;
function Za(c) {
  var l = Ua.call(c, BW), U = c[BW];
  try {
    c[BW] = void 0;
    var d = !0;
  } catch {
  }
  var Z = da.call(c);
  return d && (l ? c[BW] = U : delete c[BW]), Z;
}
var Fa = Object.prototype, Wa = Fa.toString;
function Qa(c) {
  return Wa.call(c);
}
var ca = "[object Null]", ta = "[object Undefined]", oN = yt ? yt.toStringTag : void 0;
function Va(c) {
  return c == null ? c === void 0 ? ta : ca : oN && oN in Object(c) ? Za(c) : Qa(c);
}
function Ra(c) {
  return c != null && typeof c == "object";
}
var Na = "[object Symbol]";
function sa(c) {
  return typeof c == "symbol" || Ra(c) && Va(c) == Na;
}
var na = /\s/;
function ba(c) {
  for (var l = c.length; l-- && na.test(c.charAt(l)); )
    ;
  return l;
}
var aa = /^\s+/;
function ma(c) {
  return c && c.slice(0, ba(c) + 1).replace(aa, "");
}
function wV(c) {
  var l = typeof c;
  return c != null && (l == "object" || l == "function");
}
var zN = NaN, ha = /^[-+]0x[0-9a-f]+$/i, ia = /^0b[01]+$/i, Ma = /^0o[0-7]+$/i, Ta = parseInt;
function DN(c) {
  if (typeof c == "number")
    return c;
  if (sa(c))
    return zN;
  if (wV(c)) {
    var l = typeof c.valueOf == "function" ? c.valueOf() : c;
    c = wV(l) ? l + "" : l;
  }
  if (typeof c != "string")
    return c === 0 ? c : +c;
  c = ma(c);
  var U = ia.test(c);
  return U || Ma.test(c) ? Ta(c.slice(2), U ? 2 : 8) : ha.test(c) ? zN : +c;
}
var JV = function() {
  return Js.Date.now();
}, Ga = "Expected a function", Ja = Math.max, Sa = Math.min;
function kN(c, l, U) {
  var d, Z, F, W, t, V, R = 0, N = !1, s = !1, n = !0;
  if (typeof c != "function")
    throw new TypeError(Ga);
  l = DN(l) || 0, wV(U) && (N = !!U.leading, s = "maxWait" in U, F = s ? Ja(DN(U.maxWait) || 0, l) : F, n = "trailing" in U ? !!U.trailing : n);
  function b(X) {
    var e = d, p = Z;
    return d = Z = void 0, R = X, W = c.apply(p, e), W;
  }
  function a(X) {
    return R = X, t = setTimeout(T, l), N ? b(X) : W;
  }
  function M(X) {
    var e = X - V, p = X - R, y = l - e;
    return s ? Sa(y, F - p) : y;
  }
  function G(X) {
    var e = X - V, p = X - R;
    return V === void 0 || e >= l || e < 0 || s && p >= F;
  }
  function T() {
    var X = JV();
    if (G(X))
      return J(X);
    t = setTimeout(T, M(X));
  }
  function J(X) {
    return t = void 0, n && d ? b(X) : (d = Z = void 0, W);
  }
  function Y() {
    t !== void 0 && clearTimeout(t), R = 0, d = V = Z = t = void 0;
  }
  function B() {
    return t === void 0 ? W : J(JV());
  }
  function S() {
    var X = JV(), e = G(X);
    if (d = arguments, Z = this, V = X, e) {
      if (t === void 0)
        return a(V);
      if (s)
        return clearTimeout(t), t = setTimeout(T, l), b(V);
    }
    return t === void 0 && (t = setTimeout(T, l)), W;
  }
  return S.cancel = Y, S.flush = B, S;
}
function Xa(c) {
  return c.replace(/-(\w)/g, (l, U) => U ? U.toUpperCase() : "");
}
function Ya(c) {
  return Object.keys(c).reduce(
    (l, U) => (typeof c[U] < "u" && (l[Xa(U)] = c[U]), l),
    {}
  );
}
function Ba(c, l) {
  const U = /(\d+)(px|em|%)/, d = c.match(U);
  if (!d)
    throw new Error("子元素宽度格式无效");
  let Z = parseFloat(d[1]), F = d[2], W;
  switch (F) {
    case "px":
      W = Z;
      break;
    case "em":
      W = Z * 16;
      break;
    case "%":
      W = Z / 100 * l;
      break;
    default:
      throw new Error("不支持的单位类型");
  }
  return Math.floor(l / W);
}
function ea() {
  const c = localStorage.getItem("auth");
  return c ? c.split(",").filter(Boolean) : [];
}
const ua = async (c) => {
  try {
    const l = await fetch(c);
    if (!l.ok)
      throw new Error(`Failed to fetch file: ${l.statusText}`);
    const U = l.headers.get("Content-Type");
    return { arrayBuffer: await l.arrayBuffer(), mimeType: U };
  } catch (l) {
    return console.error("Error Processing URL:", l), null;
  }
}, pa = (c) => {
  const l = atob(c), U = new Uint8Array(l.length);
  for (let d = 0; d < l.length; d++)
    U[d] = l.charCodeAt(d);
  return U.buffer;
}, ya = (c) => {
  try {
    const l = c.match(/^data:(.+);base64,(.*)$/);
    if (!l)
      return console.error("base64 was not contentType"), null;
    const U = l[1];
    return { arrayBuffer: pa(c), mimeType: U };
  } catch (l) {
    return console.error("Error Processing Base64:", l), null;
  }
}, La = (c) => new Promise((l, U) => {
  const d = new FileReader();
  d.onload = () => l(d.result), d.onerror = (Z) => U(Z), d.readAsArrayBuffer(c);
}), oa = async (c) => {
  try {
    const l = await La(c), U = c.type;
    return { arrayBuffer: l, mimeType: U };
  } catch (l) {
    return console.error("Error reading file as ArrayBuffer:", l), null;
  }
}, za = async (c) => typeof c == "string" ? c.startsWith("data:") ? ya(c) : await ua(c) : c instanceof File ? await oa(c) : null;
function Da(c) {
  if (c && "$el" in c) {
    const l = c.$el;
    return (l == null ? void 0 : l.nodeType) === Node.TEXT_NODE ? l.nextElementSibling : l;
  }
  return c;
}
function ka() {
  const c = Ts(), l = (U) => {
    c.value = U;
  };
  return Object.defineProperty(l, "value", {
    enumerable: !0,
    get: () => c.value,
    set: (U) => c.value = U
  }), Object.defineProperty(l, "el", {
    enumerable: !0,
    get: () => Da(c.value)
  }), l;
}
const Ia = (c) => c ? Object.entries(c).reduce((l, [U, d]) => (U = U.charAt(0).toUpperCase() + U.slice(1), U = `on${U}`, { ...l, [U]: d }), {}) : null, il = (c, l = {}, U) => {
  if (Hb) return VF(c, l, U);
  const { props: d, domProps: Z, on: F, scopedSlots: W, attrs: t, ...V } = l;
  let R = Ia(F);
  const N = { ...V, ...d, ...Z, ...t, ...R };
  return VF(c, N, W || U);
};
function nN(c, l = "content") {
  const U = ka(), d = Bl(), Z = new ResizeObserver((F) => {
    c == null || c(F, Z), F.length && (l === "content" ? d.value = F[0].contentRect : d.value = F[0].target.getBoundingClientRect());
  });
  return RN(() => {
    Z.disconnect();
  }), W0(
    () => U.el,
    (F, W) => {
      W && (Z.unobserve(W), d.value = void 0), F && Z.observe(F);
    },
    {
      flush: "post"
    }
  ), {
    resizeRef: U,
    contentRect: vb(d)
  };
}
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function IN(c, l) {
  var U = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(c);
    l && (d = d.filter(function(Z) {
      return Object.getOwnPropertyDescriptor(c, Z).enumerable;
    })), U.push.apply(U, d);
  }
  return U;
}
function Ld(c) {
  for (var l = 1; l < arguments.length; l++) {
    var U = arguments[l] != null ? arguments[l] : {};
    l % 2 ? IN(Object(U), !0).forEach(function(d) {
      Ea(c, d, U[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(U)) : IN(Object(U)).forEach(function(d) {
      Object.defineProperty(c, d, Object.getOwnPropertyDescriptor(U, d));
    });
  }
  return c;
}
function _c(c) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _c = function(l) {
    return typeof l;
  } : _c = function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, _c(c);
}
function Ea(c, l, U) {
  return l in c ? Object.defineProperty(c, l, {
    value: U,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[l] = U, c;
}
function hZ() {
  return hZ = Object.assign || function(c) {
    for (var l = 1; l < arguments.length; l++) {
      var U = arguments[l];
      for (var d in U)
        Object.prototype.hasOwnProperty.call(U, d) && (c[d] = U[d]);
    }
    return c;
  }, hZ.apply(this, arguments);
}
function Ca(c, l) {
  if (c == null) return {};
  var U = {}, d = Object.keys(c), Z, F;
  for (F = 0; F < d.length; F++)
    Z = d[F], !(l.indexOf(Z) >= 0) && (U[Z] = c[Z]);
  return U;
}
function wa(c, l) {
  if (c == null) return {};
  var U = Ca(c, l), d, Z;
  if (Object.getOwnPropertySymbols) {
    var F = Object.getOwnPropertySymbols(c);
    for (Z = 0; Z < F.length; Z++)
      d = F[Z], !(l.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(c, d) && (U[d] = c[d]);
  }
  return U;
}
var xa = "1.15.2";
function sZ(c) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(c);
}
var TZ = sZ(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ic = sZ(/Edge/i), EN = sZ(/firefox/i), PW = sZ(/safari/i) && !sZ(/chrome/i) && !sZ(/android/i), Xs = sZ(/iP(ad|od|hone)/i), Ys = sZ(/chrome/i) && sZ(/android/i), Bs = {
  capture: !1,
  passive: !1
};
function cl(c, l, U) {
  c.addEventListener(l, U, !TZ && Bs);
}
function Zl(c, l, U) {
  c.removeEventListener(l, U, !TZ && Bs);
}
function Lt(c, l) {
  if (l) {
    if (l[0] === ">" && (l = l.substring(1)), c)
      try {
        if (c.matches)
          return c.matches(l);
        if (c.msMatchesSelector)
          return c.msMatchesSelector(l);
        if (c.webkitMatchesSelector)
          return c.webkitMatchesSelector(l);
      } catch {
        return !1;
      }
    return !1;
  }
}
function ja(c) {
  return c.host && c !== document && c.host.nodeType ? c.host : c.parentNode;
}
function Vd(c, l, U, d) {
  if (c) {
    U = U || document;
    do {
      if (l != null && (l[0] === ">" ? c.parentNode === U && Lt(c, l) : Lt(c, l)) || d && c === U)
        return c;
      if (c === U) break;
    } while (c = ja(c));
  }
  return null;
}
var CN = /\s+/g;
function YU(c, l, U) {
  if (c && l)
    if (c.classList)
      c.classList[U ? "add" : "remove"](l);
    else {
      var d = (" " + c.className + " ").replace(CN, " ").replace(" " + l + " ", " ");
      c.className = (d + (U ? " " + l : "")).replace(CN, " ");
    }
}
function O(c, l, U) {
  var d = c && c.style;
  if (d) {
    if (U === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? U = document.defaultView.getComputedStyle(c, "") : c.currentStyle && (U = c.currentStyle), l === void 0 ? U : U[l];
    !(l in d) && l.indexOf("webkit") === -1 && (l = "-webkit-" + l), d[l] = U + (typeof U == "string" ? "" : "px");
  }
}
function Y0(c, l) {
  var U = "";
  if (typeof c == "string")
    U = c;
  else
    do {
      var d = O(c, "transform");
      d && d !== "none" && (U = d + " " + U);
    } while (!l && (c = c.parentNode));
  var Z = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return Z && new Z(U);
}
function es(c, l, U) {
  if (c) {
    var d = c.getElementsByTagName(l), Z = 0, F = d.length;
    if (U)
      for (; Z < F; Z++)
        U(d[Z], Z);
    return d;
  }
  return [];
}
function ud() {
  var c = document.scrollingElement;
  return c || document.documentElement;
}
function yl(c, l, U, d, Z) {
  if (!(!c.getBoundingClientRect && c !== window)) {
    var F, W, t, V, R, N, s;
    if (c !== window && c.parentNode && c !== ud() ? (F = c.getBoundingClientRect(), W = F.top, t = F.left, V = F.bottom, R = F.right, N = F.height, s = F.width) : (W = 0, t = 0, V = window.innerHeight, R = window.innerWidth, N = window.innerHeight, s = window.innerWidth), (l || U) && c !== window && (Z = Z || c.parentNode, !TZ))
      do
        if (Z && Z.getBoundingClientRect && (O(Z, "transform") !== "none" || U && O(Z, "position") !== "static")) {
          var n = Z.getBoundingClientRect();
          W -= n.top + parseInt(O(Z, "border-top-width")), t -= n.left + parseInt(O(Z, "border-left-width")), V = W + F.height, R = t + F.width;
          break;
        }
      while (Z = Z.parentNode);
    if (d && c !== window) {
      var b = Y0(Z || c), a = b && b.a, M = b && b.d;
      b && (W /= M, t /= a, s /= a, N /= M, V = W + N, R = t + s);
    }
    return {
      top: W,
      left: t,
      bottom: V,
      right: R,
      width: s,
      height: N
    };
  }
}
function wN(c, l, U) {
  for (var d = fZ(c, !0), Z = yl(c)[l]; d; ) {
    var F = yl(d)[U], W = void 0;
    if (W = Z >= F, !W) return d;
    if (d === ud()) break;
    d = fZ(d, !1);
  }
  return !1;
}
function SW(c, l, U, d) {
  for (var Z = 0, F = 0, W = c.children; F < W.length; ) {
    if (W[F].style.display !== "none" && W[F] !== r.ghost && (d || W[F] !== r.dragged) && Vd(W[F], U.draggable, c, !1)) {
      if (Z === l)
        return W[F];
      Z++;
    }
    F++;
  }
  return null;
}
function bN(c, l) {
  for (var U = c.lastElementChild; U && (U === r.ghost || O(U, "display") === "none" || l && !Lt(U, l)); )
    U = U.previousElementSibling;
  return U || null;
}
function wU(c, l) {
  var U = 0;
  if (!c || !c.parentNode)
    return -1;
  for (; c = c.previousElementSibling; )
    c.nodeName.toUpperCase() !== "TEMPLATE" && c !== r.clone && (!l || Lt(c, l)) && U++;
  return U;
}
function xN(c) {
  var l = 0, U = 0, d = ud();
  if (c)
    do {
      var Z = Y0(c), F = Z.a, W = Z.d;
      l += c.scrollLeft * F, U += c.scrollTop * W;
    } while (c !== d && (c = c.parentNode));
  return [l, U];
}
function Oa(c, l) {
  for (var U in c)
    if (c.hasOwnProperty(U)) {
      for (var d in l)
        if (l.hasOwnProperty(d) && l[d] === c[U][d]) return Number(U);
    }
  return -1;
}
function fZ(c, l) {
  if (!c || !c.getBoundingClientRect) return ud();
  var U = c, d = !1;
  do
    if (U.clientWidth < U.scrollWidth || U.clientHeight < U.scrollHeight) {
      var Z = O(U);
      if (U.clientWidth < U.scrollWidth && (Z.overflowX == "auto" || Z.overflowX == "scroll") || U.clientHeight < U.scrollHeight && (Z.overflowY == "auto" || Z.overflowY == "scroll")) {
        if (!U.getBoundingClientRect || U === document.body) return ud();
        if (d || l) return U;
        d = !0;
      }
    }
  while (U = U.parentNode);
  return ud();
}
function ra(c, l) {
  if (c && l)
    for (var U in l)
      l.hasOwnProperty(U) && (c[U] = l[U]);
  return c;
}
function SV(c, l) {
  return Math.round(c.top) === Math.round(l.top) && Math.round(c.left) === Math.round(l.left) && Math.round(c.height) === Math.round(l.height) && Math.round(c.width) === Math.round(l.width);
}
var fW;
function us(c, l) {
  return function() {
    if (!fW) {
      var U = arguments, d = this;
      U.length === 1 ? c.call(d, U[0]) : c.apply(d, U), fW = setTimeout(function() {
        fW = void 0;
      }, l);
    }
  };
}
function Ka() {
  clearTimeout(fW), fW = void 0;
}
function ps(c, l, U) {
  c.scrollLeft += l, c.scrollTop += U;
}
function ys(c) {
  var l = window.Polymer, U = window.jQuery || window.Zepto;
  return l && l.dom ? l.dom(c).cloneNode(!0) : U ? U(c).clone(!0)[0] : c.cloneNode(!0);
}
function Ls(c, l, U) {
  var d = {};
  return Array.from(c.children).forEach(function(Z) {
    var F, W, t, V;
    if (!(!Vd(Z, l.draggable, c, !1) || Z.animated || Z === U)) {
      var R = yl(Z);
      d.left = Math.min((F = d.left) !== null && F !== void 0 ? F : 1 / 0, R.left), d.top = Math.min((W = d.top) !== null && W !== void 0 ? W : 1 / 0, R.top), d.right = Math.max((t = d.right) !== null && t !== void 0 ? t : -1 / 0, R.right), d.bottom = Math.max((V = d.bottom) !== null && V !== void 0 ? V : -1 / 0, R.bottom);
    }
  }), d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
var EU = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ga() {
  var c = [], l;
  return {
    captureAnimationState: function() {
      if (c = [], !!this.options.animation) {
        var d = [].slice.call(this.el.children);
        d.forEach(function(Z) {
          if (!(O(Z, "display") === "none" || Z === r.ghost)) {
            c.push({
              target: Z,
              rect: yl(Z)
            });
            var F = Ld({}, c[c.length - 1].rect);
            if (Z.thisAnimationDuration) {
              var W = Y0(Z, !0);
              W && (F.top -= W.f, F.left -= W.e);
            }
            Z.fromRect = F;
          }
        });
      }
    },
    addAnimationState: function(d) {
      c.push(d);
    },
    removeAnimationState: function(d) {
      c.splice(Oa(c, {
        target: d
      }), 1);
    },
    animateAll: function(d) {
      var Z = this;
      if (!this.options.animation) {
        clearTimeout(l), typeof d == "function" && d();
        return;
      }
      var F = !1, W = 0;
      c.forEach(function(t) {
        var V = 0, R = t.target, N = R.fromRect, s = yl(R), n = R.prevFromRect, b = R.prevToRect, a = t.rect, M = Y0(R, !0);
        M && (s.top -= M.f, s.left -= M.e), R.toRect = s, R.thisAnimationDuration && SV(n, s) && !SV(N, s) && // Make sure animatingRect is on line between toRect & fromRect
        (a.top - s.top) / (a.left - s.left) === (N.top - s.top) / (N.left - s.left) && (V = va(a, n, b, Z.options)), SV(s, N) || (R.prevFromRect = N, R.prevToRect = s, V || (V = Z.options.animation), Z.animate(R, a, s, V)), V && (F = !0, W = Math.max(W, V), clearTimeout(R.animationResetTimer), R.animationResetTimer = setTimeout(function() {
          R.animationTime = 0, R.prevFromRect = null, R.fromRect = null, R.prevToRect = null, R.thisAnimationDuration = null;
        }, V), R.thisAnimationDuration = V);
      }), clearTimeout(l), F ? l = setTimeout(function() {
        typeof d == "function" && d();
      }, W) : typeof d == "function" && d(), c = [];
    },
    animate: function(d, Z, F, W) {
      if (W) {
        O(d, "transition", ""), O(d, "transform", "");
        var t = Y0(this.el), V = t && t.a, R = t && t.d, N = (Z.left - F.left) / (V || 1), s = (Z.top - F.top) / (R || 1);
        d.animatingX = !!N, d.animatingY = !!s, O(d, "transform", "translate3d(" + N + "px," + s + "px,0)"), this.forRepaintDummy = Ha(d), O(d, "transition", "transform " + W + "ms" + (this.options.easing ? " " + this.options.easing : "")), O(d, "transform", "translate3d(0,0,0)"), typeof d.animated == "number" && clearTimeout(d.animated), d.animated = setTimeout(function() {
          O(d, "transition", ""), O(d, "transform", ""), d.animated = !1, d.animatingX = !1, d.animatingY = !1;
        }, W);
      }
    }
  };
}
function Ha(c) {
  return c.offsetWidth;
}
function va(c, l, U, d) {
  return Math.sqrt(Math.pow(l.top - c.top, 2) + Math.pow(l.left - c.left, 2)) / Math.sqrt(Math.pow(l.top - U.top, 2) + Math.pow(l.left - U.left, 2)) * d.animation;
}
var b0 = [], XV = {
  initializeByDefault: !0
}, Ec = {
  mount: function(l) {
    for (var U in XV)
      XV.hasOwnProperty(U) && !(U in l) && (l[U] = XV[U]);
    b0.forEach(function(d) {
      if (d.pluginName === l.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(l.pluginName, " more than once");
    }), b0.push(l);
  },
  pluginEvent: function(l, U, d) {
    var Z = this;
    this.eventCanceled = !1, d.cancel = function() {
      Z.eventCanceled = !0;
    };
    var F = l + "Global";
    b0.forEach(function(W) {
      U[W.pluginName] && (U[W.pluginName][F] && U[W.pluginName][F](Ld({
        sortable: U
      }, d)), U.options[W.pluginName] && U[W.pluginName][l] && U[W.pluginName][l](Ld({
        sortable: U
      }, d)));
    });
  },
  initializePlugins: function(l, U, d, Z) {
    b0.forEach(function(t) {
      var V = t.pluginName;
      if (!(!l.options[V] && !t.initializeByDefault)) {
        var R = new t(l, U, l.options);
        R.sortable = l, R.options = l.options, l[V] = R, hZ(d, R.defaults);
      }
    });
    for (var F in l.options)
      if (l.options.hasOwnProperty(F)) {
        var W = this.modifyOption(l, F, l.options[F]);
        typeof W < "u" && (l.options[F] = W);
      }
  },
  getEventProperties: function(l, U) {
    var d = {};
    return b0.forEach(function(Z) {
      typeof Z.eventProperties == "function" && hZ(d, Z.eventProperties.call(U[Z.pluginName], l));
    }), d;
  },
  modifyOption: function(l, U, d) {
    var Z;
    return b0.forEach(function(F) {
      l[F.pluginName] && F.optionListeners && typeof F.optionListeners[U] == "function" && (Z = F.optionListeners[U].call(l[F.pluginName], d));
    }), Z;
  }
};
function Pa(c) {
  var l = c.sortable, U = c.rootEl, d = c.name, Z = c.targetEl, F = c.cloneEl, W = c.toEl, t = c.fromEl, V = c.oldIndex, R = c.newIndex, N = c.oldDraggableIndex, s = c.newDraggableIndex, n = c.originalEvent, b = c.putSortable, a = c.extraEventProperties;
  if (l = l || U && U[EU], !!l) {
    var M, G = l.options, T = "on" + d.charAt(0).toUpperCase() + d.substr(1);
    window.CustomEvent && !TZ && !Ic ? M = new CustomEvent(d, {
      bubbles: !0,
      cancelable: !0
    }) : (M = document.createEvent("Event"), M.initEvent(d, !0, !0)), M.to = W || U, M.from = t || U, M.item = Z || U, M.clone = F, M.oldIndex = V, M.newIndex = R, M.oldDraggableIndex = N, M.newDraggableIndex = s, M.originalEvent = n, M.pullMode = b ? b.lastPutMode : void 0;
    var J = Ld(Ld({}, a), Ec.getEventProperties(d, l));
    for (var Y in J)
      M[Y] = J[Y];
    U && U.dispatchEvent(M), G[T] && G[T].call(l, M);
  }
}
var fa = ["evt"], bU = function(l, U) {
  var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Z = d.evt, F = wa(d, fa);
  Ec.pluginEvent.bind(r)(l, U, Ld({
    dragEl: u,
    parentEl: Sl,
    ghostEl: H,
    rootEl: Ml,
    nextEl: ZF,
    lastDownEl: qc,
    cloneEl: Tl,
    cloneHidden: BZ,
    dragStarted: yW,
    putSortable: Ol,
    activeSortable: r.active,
    originalEvent: Z,
    oldIndex: S0,
    oldDraggableIndex: AW,
    newIndex: BU,
    newDraggableIndex: YZ,
    hideGhostForTarget: ks,
    unhideGhostForTarget: Is,
    cloneNowHidden: function() {
      BZ = !0;
    },
    cloneNowShown: function() {
      BZ = !1;
    },
    dispatchSortableEvent: function(t) {
      QU({
        sortable: U,
        name: t,
        originalEvent: Z
      });
    }
  }, F));
};
function QU(c) {
  Pa(Ld({
    putSortable: Ol,
    cloneEl: Tl,
    targetEl: u,
    rootEl: Ml,
    oldIndex: S0,
    oldDraggableIndex: AW,
    newIndex: BU,
    newDraggableIndex: YZ
  }, c));
}
var u, Sl, H, Ml, ZF, qc, Tl, BZ, S0, BU, AW, YZ, Oc, Ol, m0 = !1, ot = !1, zt = [], UF, vU, YV, BV, jN, ON, yW, a0, _W, qW = !1, rc = !1, $c, ql, eV = [], xV = !1, Dt = [], tV = typeof document < "u", Kc = Xs, rN = Ic || TZ ? "cssFloat" : "float", Aa = tV && !Ys && !Xs && "draggable" in document.createElement("div"), os = function() {
  if (tV) {
    if (TZ)
      return !1;
    var c = document.createElement("x");
    return c.style.cssText = "pointer-events:auto", c.style.pointerEvents === "auto";
  }
}(), zs = function(l, U) {
  var d = O(l), Z = parseInt(d.width) - parseInt(d.paddingLeft) - parseInt(d.paddingRight) - parseInt(d.borderLeftWidth) - parseInt(d.borderRightWidth), F = SW(l, 0, U), W = SW(l, 1, U), t = F && O(F), V = W && O(W), R = t && parseInt(t.marginLeft) + parseInt(t.marginRight) + yl(F).width, N = V && parseInt(V.marginLeft) + parseInt(V.marginRight) + yl(W).width;
  if (d.display === "flex")
    return d.flexDirection === "column" || d.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (d.display === "grid")
    return d.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (F && t.float && t.float !== "none") {
    var s = t.float === "left" ? "left" : "right";
    return W && (V.clear === "both" || V.clear === s) ? "vertical" : "horizontal";
  }
  return F && (t.display === "block" || t.display === "flex" || t.display === "table" || t.display === "grid" || R >= Z && d[rN] === "none" || W && d[rN] === "none" && R + N > Z) ? "vertical" : "horizontal";
}, _a = function(l, U, d) {
  var Z = d ? l.left : l.top, F = d ? l.right : l.bottom, W = d ? l.width : l.height, t = d ? U.left : U.top, V = d ? U.right : U.bottom, R = d ? U.width : U.height;
  return Z === t || F === V || Z + W / 2 === t + R / 2;
}, qa = function(l, U) {
  var d;
  return zt.some(function(Z) {
    var F = Z[EU].options.emptyInsertThreshold;
    if (!(!F || bN(Z))) {
      var W = yl(Z), t = l >= W.left - F && l <= W.right + F, V = U >= W.top - F && U <= W.bottom + F;
      if (t && V)
        return d = Z;
    }
  }), d;
}, Ds = function(l) {
  function U(F, W) {
    return function(t, V, R, N) {
      var s = t.options.group.name && V.options.group.name && t.options.group.name === V.options.group.name;
      if (F == null && (W || s))
        return !0;
      if (F == null || F === !1)
        return !1;
      if (W && F === "clone")
        return F;
      if (typeof F == "function")
        return U(F(t, V, R, N), W)(t, V, R, N);
      var n = (W ? t : V).options.group.name;
      return F === !0 || typeof F == "string" && F === n || F.join && F.indexOf(n) > -1;
    };
  }
  var d = {}, Z = l.group;
  (!Z || _c(Z) != "object") && (Z = {
    name: Z
  }), d.name = Z.name, d.checkPull = U(Z.pull, !0), d.checkPut = U(Z.put), d.revertClone = Z.revertClone, l.group = d;
}, ks = function() {
  !os && H && O(H, "display", "none");
}, Is = function() {
  !os && H && O(H, "display", "");
};
tV && !Ys && document.addEventListener("click", function(c) {
  if (ot)
    return c.preventDefault(), c.stopPropagation && c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), ot = !1, !1;
}, !0);
var dF = function(l) {
  if (u) {
    l = l.touches ? l.touches[0] : l;
    var U = qa(l.clientX, l.clientY);
    if (U) {
      var d = {};
      for (var Z in l)
        l.hasOwnProperty(Z) && (d[Z] = l[Z]);
      d.target = d.rootEl = U, d.preventDefault = void 0, d.stopPropagation = void 0, U[EU]._onDragOver(d);
    }
  }
}, $a = function(l) {
  u && u.parentNode[EU]._isOutsideThisEl(l.target);
};
function r(c, l) {
  if (!(c && c.nodeType && c.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(c));
  this.el = c, this.options = l = hZ({}, l), c[EU] = this;
  var U = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(c.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return zs(c, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(W, t) {
      W.setData("Text", t.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: r.supportPointer !== !1 && "PointerEvent" in window && !PW,
    emptyInsertThreshold: 5
  };
  Ec.initializePlugins(this, c, U);
  for (var d in U)
    !(d in l) && (l[d] = U[d]);
  Ds(l);
  for (var Z in this)
    Z.charAt(0) === "_" && typeof this[Z] == "function" && (this[Z] = this[Z].bind(this));
  this.nativeDraggable = l.forceFallback ? !1 : Aa, this.nativeDraggable && (this.options.touchStartThreshold = 1), l.supportPointer ? cl(c, "pointerdown", this._onTapStart) : (cl(c, "mousedown", this._onTapStart), cl(c, "touchstart", this._onTapStart)), this.nativeDraggable && (cl(c, "dragover", this), cl(c, "dragenter", this)), zt.push(this.el), l.store && l.store.get && this.sort(l.store.get(this) || []), hZ(this, ga());
}
r.prototype = /** @lends Sortable.prototype */
{
  constructor: r,
  _isOutsideThisEl: function(l) {
    !this.el.contains(l) && l !== this.el && (a0 = null);
  },
  _getDirection: function(l, U) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, l, U, u) : this.options.direction;
  },
  _onTapStart: function(l) {
    if (l.cancelable) {
      var U = this, d = this.el, Z = this.options, F = Z.preventOnFilter, W = l.type, t = l.touches && l.touches[0] || l.pointerType && l.pointerType === "touch" && l, V = (t || l).target, R = l.target.shadowRoot && (l.path && l.path[0] || l.composedPath && l.composedPath()[0]) || V, N = Z.filter;
      if (cm(d), !u && !(/mousedown|pointerdown/.test(W) && l.button !== 0 || Z.disabled) && !R.isContentEditable && !(!this.nativeDraggable && PW && V && V.tagName.toUpperCase() === "SELECT") && (V = Vd(V, Z.draggable, d, !1), !(V && V.animated) && qc !== V)) {
        if (S0 = wU(V), AW = wU(V, Z.draggable), typeof N == "function") {
          if (N.call(this, l, V, this)) {
            QU({
              sortable: U,
              rootEl: R,
              name: "filter",
              targetEl: V,
              toEl: d,
              fromEl: d
            }), bU("filter", U, {
              evt: l
            }), F && l.cancelable && l.preventDefault();
            return;
          }
        } else if (N && (N = N.split(",").some(function(s) {
          if (s = Vd(R, s.trim(), d, !1), s)
            return QU({
              sortable: U,
              rootEl: s,
              name: "filter",
              targetEl: V,
              fromEl: d,
              toEl: d
            }), bU("filter", U, {
              evt: l
            }), !0;
        }), N)) {
          F && l.cancelable && l.preventDefault();
          return;
        }
        Z.handle && !Vd(R, Z.handle, d, !1) || this._prepareDragStart(l, t, V);
      }
    }
  },
  _prepareDragStart: function(l, U, d) {
    var Z = this, F = Z.el, W = Z.options, t = F.ownerDocument, V;
    if (d && !u && d.parentNode === F) {
      var R = yl(d);
      if (Ml = F, u = d, Sl = u.parentNode, ZF = u.nextSibling, qc = d, Oc = W.group, r.dragged = u, UF = {
        target: u,
        clientX: (U || l).clientX,
        clientY: (U || l).clientY
      }, jN = UF.clientX - R.left, ON = UF.clientY - R.top, this._lastX = (U || l).clientX, this._lastY = (U || l).clientY, u.style["will-change"] = "all", V = function() {
        if (bU("delayEnded", Z, {
          evt: l
        }), r.eventCanceled) {
          Z._onDrop();
          return;
        }
        Z._disableDelayedDragEvents(), !EN && Z.nativeDraggable && (u.draggable = !0), Z._triggerDragStart(l, U), QU({
          sortable: Z,
          name: "choose",
          originalEvent: l
        }), YU(u, W.chosenClass, !0);
      }, W.ignore.split(",").forEach(function(N) {
        es(u, N.trim(), uV);
      }), cl(t, "dragover", dF), cl(t, "mousemove", dF), cl(t, "touchmove", dF), cl(t, "mouseup", Z._onDrop), cl(t, "touchend", Z._onDrop), cl(t, "touchcancel", Z._onDrop), EN && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), bU("delayStart", this, {
        evt: l
      }), W.delay && (!W.delayOnTouchOnly || U) && (!this.nativeDraggable || !(Ic || TZ))) {
        if (r.eventCanceled) {
          this._onDrop();
          return;
        }
        cl(t, "mouseup", Z._disableDelayedDrag), cl(t, "touchend", Z._disableDelayedDrag), cl(t, "touchcancel", Z._disableDelayedDrag), cl(t, "mousemove", Z._delayedDragTouchMoveHandler), cl(t, "touchmove", Z._delayedDragTouchMoveHandler), W.supportPointer && cl(t, "pointermove", Z._delayedDragTouchMoveHandler), Z._dragStartTimer = setTimeout(V, W.delay);
      } else
        V();
    }
  },
  _delayedDragTouchMoveHandler: function(l) {
    var U = l.touches ? l.touches[0] : l;
    Math.max(Math.abs(U.clientX - this._lastX), Math.abs(U.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && uV(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var l = this.el.ownerDocument;
    Zl(l, "mouseup", this._disableDelayedDrag), Zl(l, "touchend", this._disableDelayedDrag), Zl(l, "touchcancel", this._disableDelayedDrag), Zl(l, "mousemove", this._delayedDragTouchMoveHandler), Zl(l, "touchmove", this._delayedDragTouchMoveHandler), Zl(l, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(l, U) {
    U = U || l.pointerType == "touch" && l, !this.nativeDraggable || U ? this.options.supportPointer ? cl(document, "pointermove", this._onTouchMove) : U ? cl(document, "touchmove", this._onTouchMove) : cl(document, "mousemove", this._onTouchMove) : (cl(u, "dragend", this), cl(Ml, "dragstart", this._onDragStart));
    try {
      document.selection ? lt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(l, U) {
    if (m0 = !1, Ml && u) {
      bU("dragStarted", this, {
        evt: U
      }), this.nativeDraggable && cl(document, "dragover", $a);
      var d = this.options;
      !l && YU(u, d.dragClass, !1), YU(u, d.ghostClass, !0), r.active = this, l && this._appendGhost(), QU({
        sortable: this,
        name: "start",
        originalEvent: U
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (vU) {
      this._lastX = vU.clientX, this._lastY = vU.clientY, ks();
      for (var l = document.elementFromPoint(vU.clientX, vU.clientY), U = l; l && l.shadowRoot && (l = l.shadowRoot.elementFromPoint(vU.clientX, vU.clientY), l !== U); )
        U = l;
      if (u.parentNode[EU]._isOutsideThisEl(l), U)
        do {
          if (U[EU]) {
            var d = void 0;
            if (d = U[EU]._onDragOver({
              clientX: vU.clientX,
              clientY: vU.clientY,
              target: l,
              rootEl: U
            }), d && !this.options.dragoverBubble)
              break;
          }
          l = U;
        } while (U = U.parentNode);
      Is();
    }
  },
  _onTouchMove: function(l) {
    if (UF) {
      var U = this.options, d = U.fallbackTolerance, Z = U.fallbackOffset, F = l.touches ? l.touches[0] : l, W = H && Y0(H, !0), t = H && W && W.a, V = H && W && W.d, R = Kc && ql && xN(ql), N = (F.clientX - UF.clientX + Z.x) / (t || 1) + (R ? R[0] - eV[0] : 0) / (t || 1), s = (F.clientY - UF.clientY + Z.y) / (V || 1) + (R ? R[1] - eV[1] : 0) / (V || 1);
      if (!r.active && !m0) {
        if (d && Math.max(Math.abs(F.clientX - this._lastX), Math.abs(F.clientY - this._lastY)) < d)
          return;
        this._onDragStart(l, !0);
      }
      if (H) {
        W ? (W.e += N - (YV || 0), W.f += s - (BV || 0)) : W = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: N,
          f: s
        };
        var n = "matrix(".concat(W.a, ",").concat(W.b, ",").concat(W.c, ",").concat(W.d, ",").concat(W.e, ",").concat(W.f, ")");
        O(H, "webkitTransform", n), O(H, "mozTransform", n), O(H, "msTransform", n), O(H, "transform", n), YV = N, BV = s, vU = F;
      }
      l.cancelable && l.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!H) {
      var l = this.options.fallbackOnBody ? document.body : Ml, U = yl(u, !0, Kc, !0, l), d = this.options;
      if (Kc) {
        for (ql = l; O(ql, "position") === "static" && O(ql, "transform") === "none" && ql !== document; )
          ql = ql.parentNode;
        ql !== document.body && ql !== document.documentElement ? (ql === document && (ql = ud()), U.top += ql.scrollTop, U.left += ql.scrollLeft) : ql = ud(), eV = xN(ql);
      }
      H = u.cloneNode(!0), YU(H, d.ghostClass, !1), YU(H, d.fallbackClass, !0), YU(H, d.dragClass, !0), O(H, "transition", ""), O(H, "transform", ""), O(H, "box-sizing", "border-box"), O(H, "margin", 0), O(H, "top", U.top), O(H, "left", U.left), O(H, "width", U.width), O(H, "height", U.height), O(H, "opacity", "0.8"), O(H, "position", Kc ? "absolute" : "fixed"), O(H, "zIndex", "100000"), O(H, "pointerEvents", "none"), r.ghost = H, l.appendChild(H), O(H, "transform-origin", jN / parseInt(H.style.width) * 100 + "% " + ON / parseInt(H.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(l, U) {
    var d = this, Z = l.dataTransfer, F = d.options;
    if (bU("dragStart", this, {
      evt: l
    }), r.eventCanceled) {
      this._onDrop();
      return;
    }
    bU("setupClone", this), r.eventCanceled || (Tl = ys(u), Tl.removeAttribute("id"), Tl.draggable = !1, Tl.style["will-change"] = "", this._hideClone(), YU(Tl, this.options.chosenClass, !1), r.clone = Tl), d.cloneId = lt(function() {
      bU("clone", d), !r.eventCanceled && (d.options.removeCloneOnHide || Ml.insertBefore(Tl, u), d._hideClone(), QU({
        sortable: d,
        name: "clone"
      }));
    }), !U && YU(u, F.dragClass, !0), U ? (ot = !0, d._loopId = setInterval(d._emulateDragOver, 50)) : (Zl(document, "mouseup", d._onDrop), Zl(document, "touchend", d._onDrop), Zl(document, "touchcancel", d._onDrop), Z && (Z.effectAllowed = "move", F.setData && F.setData.call(d, Z, u)), cl(document, "drop", d), O(u, "transform", "translateZ(0)")), m0 = !0, d._dragStartId = lt(d._dragStarted.bind(d, U, l)), cl(document, "selectstart", d), yW = !0, PW && O(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(l) {
    var U = this.el, d = l.target, Z, F, W, t = this.options, V = t.group, R = r.active, N = Oc === V, s = t.sort, n = Ol || R, b, a = this, M = !1;
    if (xV) return;
    function G(w, GZ) {
      bU(w, a, Ld({
        evt: l,
        isOwner: N,
        axis: b ? "vertical" : "horizontal",
        revert: W,
        dragRect: Z,
        targetRect: F,
        canSort: s,
        fromSortable: n,
        target: d,
        completed: J,
        onMove: function(zd, ol) {
          return gc(Ml, U, u, Z, zd, yl(zd), l, ol);
        },
        changed: Y
      }, GZ));
    }
    function T() {
      G("dragOverAnimationCapture"), a.captureAnimationState(), a !== n && n.captureAnimationState();
    }
    function J(w) {
      return G("dragOverCompleted", {
        insertion: w
      }), w && (N ? R._hideClone() : R._showClone(a), a !== n && (YU(u, Ol ? Ol.options.ghostClass : R.options.ghostClass, !1), YU(u, t.ghostClass, !0)), Ol !== a && a !== r.active ? Ol = a : a === r.active && Ol && (Ol = null), n === a && (a._ignoreWhileAnimating = d), a.animateAll(function() {
        G("dragOverAnimationComplete"), a._ignoreWhileAnimating = null;
      }), a !== n && (n.animateAll(), n._ignoreWhileAnimating = null)), (d === u && !u.animated || d === U && !d.animated) && (a0 = null), !t.dragoverBubble && !l.rootEl && d !== document && (u.parentNode[EU]._isOutsideThisEl(l.target), !w && dF(l)), !t.dragoverBubble && l.stopPropagation && l.stopPropagation(), M = !0;
    }
    function Y() {
      BU = wU(u), YZ = wU(u, t.draggable), QU({
        sortable: a,
        name: "change",
        toEl: U,
        newIndex: BU,
        newDraggableIndex: YZ,
        originalEvent: l
      });
    }
    if (l.preventDefault !== void 0 && l.cancelable && l.preventDefault(), d = Vd(d, t.draggable, U, !0), G("dragOver"), r.eventCanceled) return M;
    if (u.contains(l.target) || d.animated && d.animatingX && d.animatingY || a._ignoreWhileAnimating === d)
      return J(!1);
    if (ot = !1, R && !t.disabled && (N ? s || (W = Sl !== Ml) : Ol === this || (this.lastPutMode = Oc.checkPull(this, R, u, l)) && V.checkPut(this, R, u, l))) {
      if (b = this._getDirection(l, d) === "vertical", Z = yl(u), G("dragOverValid"), r.eventCanceled) return M;
      if (W)
        return Sl = Ml, T(), this._hideClone(), G("revert"), r.eventCanceled || (ZF ? Ml.insertBefore(u, ZF) : Ml.appendChild(u)), J(!0);
      var B = bN(U, t.draggable);
      if (!B || Zm(l, b, this) && !B.animated) {
        if (B === u)
          return J(!1);
        if (B && U === l.target && (d = B), d && (F = yl(d)), gc(Ml, U, u, Z, d, F, l, !!d) !== !1)
          return T(), B && B.nextSibling ? U.insertBefore(u, B.nextSibling) : U.appendChild(u), Sl = U, Y(), J(!0);
      } else if (B && dm(l, b, this)) {
        var S = SW(U, 0, t, !0);
        if (S === u)
          return J(!1);
        if (d = S, F = yl(d), gc(Ml, U, u, Z, d, F, l, !1) !== !1)
          return T(), U.insertBefore(u, S), Sl = U, Y(), J(!0);
      } else if (d.parentNode === U) {
        F = yl(d);
        var X = 0, e, p = u.parentNode !== U, y = !_a(u.animated && u.toRect || Z, d.animated && d.toRect || F, b), j = b ? "top" : "left", D = wN(d, "top", "top") || wN(u, "top", "top"), ll = D ? D.scrollTop : void 0;
        a0 !== d && (e = F[j], qW = !1, rc = !y && t.invertSwap || p), X = Fm(l, d, F, b, y ? 1 : t.swapThreshold, t.invertedSwapThreshold == null ? t.swapThreshold : t.invertedSwapThreshold, rc, a0 === d);
        var P;
        if (X !== 0) {
          var q = wU(u);
          do
            q -= X, P = Sl.children[q];
          while (P && (O(P, "display") === "none" || P === H));
        }
        if (X === 0 || P === d)
          return J(!1);
        a0 = d, _W = X;
        var dl = d.nextElementSibling, Nl = !1;
        Nl = X === 1;
        var x = gc(Ml, U, u, Z, d, F, l, Nl);
        if (x !== !1)
          return (x === 1 || x === -1) && (Nl = x === 1), xV = !0, setTimeout(Um, 30), T(), Nl && !dl ? U.appendChild(u) : d.parentNode.insertBefore(u, Nl ? dl : d), D && ps(D, 0, ll - D.scrollTop), Sl = u.parentNode, e !== void 0 && !rc && ($c = Math.abs(e - yl(d)[j])), Y(), J(!0);
      }
      if (U.contains(u))
        return J(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Zl(document, "mousemove", this._onTouchMove), Zl(document, "touchmove", this._onTouchMove), Zl(document, "pointermove", this._onTouchMove), Zl(document, "dragover", dF), Zl(document, "mousemove", dF), Zl(document, "touchmove", dF);
  },
  _offUpEvents: function() {
    var l = this.el.ownerDocument;
    Zl(l, "mouseup", this._onDrop), Zl(l, "touchend", this._onDrop), Zl(l, "pointerup", this._onDrop), Zl(l, "touchcancel", this._onDrop), Zl(document, "selectstart", this);
  },
  _onDrop: function(l) {
    var U = this.el, d = this.options;
    if (BU = wU(u), YZ = wU(u, d.draggable), bU("drop", this, {
      evt: l
    }), Sl = u && u.parentNode, BU = wU(u), YZ = wU(u, d.draggable), r.eventCanceled) {
      this._nulling();
      return;
    }
    m0 = !1, rc = !1, qW = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), jV(this.cloneId), jV(this._dragStartId), this.nativeDraggable && (Zl(document, "drop", this), Zl(U, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), PW && O(document.body, "user-select", ""), O(u, "transform", ""), l && (yW && (l.cancelable && l.preventDefault(), !d.dropBubble && l.stopPropagation()), H && H.parentNode && H.parentNode.removeChild(H), (Ml === Sl || Ol && Ol.lastPutMode !== "clone") && Tl && Tl.parentNode && Tl.parentNode.removeChild(Tl), u && (this.nativeDraggable && Zl(u, "dragend", this), uV(u), u.style["will-change"] = "", yW && !m0 && YU(u, Ol ? Ol.options.ghostClass : this.options.ghostClass, !1), YU(u, this.options.chosenClass, !1), QU({
      sortable: this,
      name: "unchoose",
      toEl: Sl,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: l
    }), Ml !== Sl ? (BU >= 0 && (QU({
      rootEl: Sl,
      name: "add",
      toEl: Sl,
      fromEl: Ml,
      originalEvent: l
    }), QU({
      sortable: this,
      name: "remove",
      toEl: Sl,
      originalEvent: l
    }), QU({
      rootEl: Sl,
      name: "sort",
      toEl: Sl,
      fromEl: Ml,
      originalEvent: l
    }), QU({
      sortable: this,
      name: "sort",
      toEl: Sl,
      originalEvent: l
    })), Ol && Ol.save()) : BU !== S0 && BU >= 0 && (QU({
      sortable: this,
      name: "update",
      toEl: Sl,
      originalEvent: l
    }), QU({
      sortable: this,
      name: "sort",
      toEl: Sl,
      originalEvent: l
    })), r.active && ((BU == null || BU === -1) && (BU = S0, YZ = AW), QU({
      sortable: this,
      name: "end",
      toEl: Sl,
      originalEvent: l
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    bU("nulling", this), Ml = u = Sl = H = ZF = Tl = qc = BZ = UF = vU = yW = BU = YZ = S0 = AW = a0 = _W = Ol = Oc = r.dragged = r.ghost = r.clone = r.active = null, Dt.forEach(function(l) {
      l.checked = !0;
    }), Dt.length = YV = BV = 0;
  },
  handleEvent: function(l) {
    switch (l.type) {
      case "drop":
      case "dragend":
        this._onDrop(l);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(l), lm(l));
        break;
      case "selectstart":
        l.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var l = [], U, d = this.el.children, Z = 0, F = d.length, W = this.options; Z < F; Z++)
      U = d[Z], Vd(U, W.draggable, this.el, !1) && l.push(U.getAttribute(W.dataIdAttr) || Qm(U));
    return l;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(l, U) {
    var d = {}, Z = this.el;
    this.toArray().forEach(function(F, W) {
      var t = Z.children[W];
      Vd(t, this.options.draggable, Z, !1) && (d[F] = t);
    }, this), U && this.captureAnimationState(), l.forEach(function(F) {
      d[F] && (Z.removeChild(d[F]), Z.appendChild(d[F]));
    }), U && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var l = this.options.store;
    l && l.set && l.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(l, U) {
    return Vd(l, U || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(l, U) {
    var d = this.options;
    if (U === void 0)
      return d[l];
    var Z = Ec.modifyOption(this, l, U);
    typeof Z < "u" ? d[l] = Z : d[l] = U, l === "group" && Ds(d);
  },
  /**
   * Destroy
   */
  destroy: function() {
    bU("destroy", this);
    var l = this.el;
    l[EU] = null, Zl(l, "mousedown", this._onTapStart), Zl(l, "touchstart", this._onTapStart), Zl(l, "pointerdown", this._onTapStart), this.nativeDraggable && (Zl(l, "dragover", this), Zl(l, "dragenter", this)), Array.prototype.forEach.call(l.querySelectorAll("[draggable]"), function(U) {
      U.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), zt.splice(zt.indexOf(this.el), 1), this.el = l = null;
  },
  _hideClone: function() {
    if (!BZ) {
      if (bU("hideClone", this), r.eventCanceled) return;
      O(Tl, "display", "none"), this.options.removeCloneOnHide && Tl.parentNode && Tl.parentNode.removeChild(Tl), BZ = !0;
    }
  },
  _showClone: function(l) {
    if (l.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (BZ) {
      if (bU("showClone", this), r.eventCanceled) return;
      u.parentNode == Ml && !this.options.group.revertClone ? Ml.insertBefore(Tl, u) : ZF ? Ml.insertBefore(Tl, ZF) : Ml.appendChild(Tl), this.options.group.revertClone && this.animate(u, Tl), O(Tl, "display", ""), BZ = !1;
    }
  }
};
function lm(c) {
  c.dataTransfer && (c.dataTransfer.dropEffect = "move"), c.cancelable && c.preventDefault();
}
function gc(c, l, U, d, Z, F, W, t) {
  var V, R = c[EU], N = R.options.onMove, s;
  return window.CustomEvent && !TZ && !Ic ? V = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (V = document.createEvent("Event"), V.initEvent("move", !0, !0)), V.to = l, V.from = c, V.dragged = U, V.draggedRect = d, V.related = Z || l, V.relatedRect = F || yl(l), V.willInsertAfter = t, V.originalEvent = W, c.dispatchEvent(V), N && (s = N.call(R, V, W)), s;
}
function uV(c) {
  c.draggable = !1;
}
function Um() {
  xV = !1;
}
function dm(c, l, U) {
  var d = yl(SW(U.el, 0, U.options, !0)), Z = Ls(U.el, U.options, H), F = 10;
  return l ? c.clientX < Z.left - F || c.clientY < d.top && c.clientX < d.right : c.clientY < Z.top - F || c.clientY < d.bottom && c.clientX < d.left;
}
function Zm(c, l, U) {
  var d = yl(bN(U.el, U.options.draggable)), Z = Ls(U.el, U.options, H), F = 10;
  return l ? c.clientX > Z.right + F || c.clientY > d.bottom && c.clientX > d.left : c.clientY > Z.bottom + F || c.clientX > d.right && c.clientY > d.top;
}
function Fm(c, l, U, d, Z, F, W, t) {
  var V = d ? c.clientY : c.clientX, R = d ? U.height : U.width, N = d ? U.top : U.left, s = d ? U.bottom : U.right, n = !1;
  if (!W) {
    if (t && $c < R * Z) {
      if (!qW && (_W === 1 ? V > N + R * F / 2 : V < s - R * F / 2) && (qW = !0), qW)
        n = !0;
      else if (_W === 1 ? V < N + $c : V > s - $c)
        return -_W;
    } else if (V > N + R * (1 - Z) / 2 && V < s - R * (1 - Z) / 2)
      return Wm(l);
  }
  return n = n || W, n && (V < N + R * F / 2 || V > s - R * F / 2) ? V > N + R / 2 ? 1 : -1 : 0;
}
function Wm(c) {
  return wU(u) < wU(c) ? 1 : -1;
}
function Qm(c) {
  for (var l = c.tagName + c.className + c.src + c.href + c.textContent, U = l.length, d = 0; U--; )
    d += l.charCodeAt(U);
  return d.toString(36);
}
function cm(c) {
  Dt.length = 0;
  for (var l = c.getElementsByTagName("input"), U = l.length; U--; ) {
    var d = l[U];
    d.checked && Dt.push(d);
  }
}
function lt(c) {
  return setTimeout(c, 0);
}
function jV(c) {
  return clearTimeout(c);
}
tV && cl(document, "touchmove", function(c) {
  (r.active || m0) && c.cancelable && c.preventDefault();
});
r.utils = {
  on: cl,
  off: Zl,
  css: O,
  find: es,
  is: function(l, U) {
    return !!Vd(l, U, l, !1);
  },
  extend: ra,
  throttle: us,
  closest: Vd,
  toggleClass: YU,
  clone: ys,
  index: wU,
  nextTick: lt,
  cancelNextTick: jV,
  detectDirection: zs,
  getChild: SW
};
r.get = function(c) {
  return c[EU];
};
r.mount = function() {
  for (var c = arguments.length, l = new Array(c), U = 0; U < c; U++)
    l[U] = arguments[U];
  l[0].constructor === Array && (l = l[0]), l.forEach(function(d) {
    if (!d.prototype || !d.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(d));
    d.utils && (r.utils = Ld(Ld({}, r.utils), d.utils)), Ec.mount(d);
  });
};
r.create = function(c, l) {
  return new r(c, l);
};
r.version = xa;
var pl = [], LW, OV, rV = !1, pV, yV, kt, oW;
function tm() {
  function c() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var l in this)
      l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  }
  return c.prototype = {
    dragStarted: function(U) {
      var d = U.originalEvent;
      this.sortable.nativeDraggable ? cl(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? cl(document, "pointermove", this._handleFallbackAutoScroll) : d.touches ? cl(document, "touchmove", this._handleFallbackAutoScroll) : cl(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(U) {
      var d = U.originalEvent;
      !this.options.dragOverBubble && !d.rootEl && this._handleAutoScroll(d);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Zl(document, "dragover", this._handleAutoScroll) : (Zl(document, "pointermove", this._handleFallbackAutoScroll), Zl(document, "touchmove", this._handleFallbackAutoScroll), Zl(document, "mousemove", this._handleFallbackAutoScroll)), KN(), Ut(), Ka();
    },
    nulling: function() {
      kt = OV = LW = rV = oW = pV = yV = null, pl.length = 0;
    },
    _handleFallbackAutoScroll: function(U) {
      this._handleAutoScroll(U, !0);
    },
    _handleAutoScroll: function(U, d) {
      var Z = this, F = (U.touches ? U.touches[0] : U).clientX, W = (U.touches ? U.touches[0] : U).clientY, t = document.elementFromPoint(F, W);
      if (kt = U, d || this.options.forceAutoScrollFallback || Ic || TZ || PW) {
        LV(U, this.options, t, d);
        var V = fZ(t, !0);
        rV && (!oW || F !== pV || W !== yV) && (oW && KN(), oW = setInterval(function() {
          var R = fZ(document.elementFromPoint(F, W), !0);
          R !== V && (V = R, Ut()), LV(U, Z.options, R, d);
        }, 10), pV = F, yV = W);
      } else {
        if (!this.options.bubbleScroll || fZ(t, !0) === ud()) {
          Ut();
          return;
        }
        LV(U, this.options, fZ(t, !1), !1);
      }
    }
  }, hZ(c, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ut() {
  pl.forEach(function(c) {
    clearInterval(c.pid);
  }), pl = [];
}
function KN() {
  clearInterval(oW);
}
var LV = us(function(c, l, U, d) {
  if (l.scroll) {
    var Z = (c.touches ? c.touches[0] : c).clientX, F = (c.touches ? c.touches[0] : c).clientY, W = l.scrollSensitivity, t = l.scrollSpeed, V = ud(), R = !1, N;
    OV !== U && (OV = U, Ut(), LW = l.scroll, N = l.scrollFn, LW === !0 && (LW = fZ(U, !0)));
    var s = 0, n = LW;
    do {
      var b = n, a = yl(b), M = a.top, G = a.bottom, T = a.left, J = a.right, Y = a.width, B = a.height, S = void 0, X = void 0, e = b.scrollWidth, p = b.scrollHeight, y = O(b), j = b.scrollLeft, D = b.scrollTop;
      b === V ? (S = Y < e && (y.overflowX === "auto" || y.overflowX === "scroll" || y.overflowX === "visible"), X = B < p && (y.overflowY === "auto" || y.overflowY === "scroll" || y.overflowY === "visible")) : (S = Y < e && (y.overflowX === "auto" || y.overflowX === "scroll"), X = B < p && (y.overflowY === "auto" || y.overflowY === "scroll"));
      var ll = S && (Math.abs(J - Z) <= W && j + Y < e) - (Math.abs(T - Z) <= W && !!j), P = X && (Math.abs(G - F) <= W && D + B < p) - (Math.abs(M - F) <= W && !!D);
      if (!pl[s])
        for (var q = 0; q <= s; q++)
          pl[q] || (pl[q] = {});
      (pl[s].vx != ll || pl[s].vy != P || pl[s].el !== b) && (pl[s].el = b, pl[s].vx = ll, pl[s].vy = P, clearInterval(pl[s].pid), (ll != 0 || P != 0) && (R = !0, pl[s].pid = setInterval((function() {
        d && this.layer === 0 && r.active._onTouchMove(kt);
        var dl = pl[this.layer].vy ? pl[this.layer].vy * t : 0, Nl = pl[this.layer].vx ? pl[this.layer].vx * t : 0;
        typeof N == "function" && N.call(r.dragged.parentNode[EU], Nl, dl, c, kt, pl[this.layer].el) !== "continue" || ps(pl[this.layer].el, Nl, dl);
      }).bind({
        layer: s
      }), 24))), s++;
    } while (l.bubbleScroll && n !== V && (n = fZ(n, !1)));
    rV = R;
  }
}, 30), Es = function(l) {
  var U = l.originalEvent, d = l.putSortable, Z = l.dragEl, F = l.activeSortable, W = l.dispatchSortableEvent, t = l.hideGhostForTarget, V = l.unhideGhostForTarget;
  if (U) {
    var R = d || F;
    t();
    var N = U.changedTouches && U.changedTouches.length ? U.changedTouches[0] : U, s = document.elementFromPoint(N.clientX, N.clientY);
    V(), R && !R.el.contains(s) && (W("spill"), this.onSpill({
      dragEl: Z,
      putSortable: d
    }));
  }
};
function aN() {
}
aN.prototype = {
  startIndex: null,
  dragStart: function(l) {
    var U = l.oldDraggableIndex;
    this.startIndex = U;
  },
  onSpill: function(l) {
    var U = l.dragEl, d = l.putSortable;
    this.sortable.captureAnimationState(), d && d.captureAnimationState();
    var Z = SW(this.sortable.el, this.startIndex, this.options);
    Z ? this.sortable.el.insertBefore(U, Z) : this.sortable.el.appendChild(U), this.sortable.animateAll(), d && d.animateAll();
  },
  drop: Es
};
hZ(aN, {
  pluginName: "revertOnSpill"
});
function mN() {
}
mN.prototype = {
  onSpill: function(l) {
    var U = l.dragEl, d = l.putSortable, Z = d || this.sortable;
    Z.captureAnimationState(), U.parentNode && U.parentNode.removeChild(U), Z.animateAll();
  },
  drop: Es
};
hZ(mN, {
  pluginName: "removeOnSpill"
});
r.mount(new tm());
r.mount(mN, aN);
const Cs = "[vue-draggable-plus]: ";
function Vm(c) {
  console.warn(Cs + c);
}
function Rm(c) {
  console.error(Cs + c);
}
function gN(c, l, U) {
  return U >= 0 && U < c.length && c.splice(U, 0, c.splice(l, 1)[0]), c;
}
function HN(c, l) {
  return Array.isArray(c) && c.splice(l, 1), c;
}
function vN(c, l, U) {
  return Array.isArray(c) && c.splice(l, 0, U), c;
}
function Nm(c) {
  return typeof c > "u";
}
function sm(c) {
  return typeof c == "string";
}
function PN(c, l, U) {
  const d = c.children[U];
  c.insertBefore(l, d);
}
function oV(c) {
  c.parentNode && c.parentNode.removeChild(c);
}
function nm(c, l = document) {
  var d;
  let U = null;
  return typeof (l == null ? void 0 : l.querySelector) == "function" ? U = (d = l == null ? void 0 : l.querySelector) == null ? void 0 : d.call(l, c) : U = document.querySelector(c), U || Vm(`Element not found: ${c}`), U;
}
function bm(c, l, U = null) {
  return function(...d) {
    return c.apply(U, d), l.apply(U, d);
  };
}
function am(c, l) {
  const U = { ...c };
  return Object.keys(l).forEach((d) => {
    U[d] ? U[d] = bm(c[d], l[d]) : U[d] = l[d];
  }), U;
}
function mm(c) {
  return c instanceof HTMLElement;
}
function hm(c, l) {
  Object.keys(c).forEach((U) => {
    l(U, c[U]);
  });
}
function im(c) {
  return c == null ? c : JSON.parse(JSON.stringify(c));
}
function Mm(c) {
  NN() && Pb(c);
}
function Tm(c) {
  NN() ? sN(c) : fb(c);
}
const fN = Symbol("cloneElement");
function Gm(...c) {
  var B;
  const l = (B = NN()) == null ? void 0 : B.proxy, U = c[0];
  let [, d, Z] = c;
  Array.isArray(tU(d)) || (Z = d, d = null);
  let F = null;
  const {
    immediate: W = !0,
    clone: t = im,
    customUpdate: V
  } = tU(Z) ?? {};
  function R(S) {
    var X;
    S.item[fN] = t(tU((X = tU(d)) == null ? void 0 : X[S.oldIndex]));
  }
  function N(S) {
    const X = S.item[fN];
    if (!Nm(X)) {
      if (oV(S.item), GV(d)) {
        const e = [...tU(d)];
        d.value = vN(e, S.newDraggableIndex, X);
        return;
      }
      vN(tU(d), S.newDraggableIndex, X);
    }
  }
  function s(S) {
    const { from: X, item: e, oldIndex: p, oldDraggableIndex: y, pullMode: j, clone: D } = S;
    if (PN(X, e, p), j === "clone") {
      oV(D);
      return;
    }
    if (GV(d)) {
      const ll = [...tU(d)];
      d.value = HN(ll, y);
      return;
    }
    HN(tU(d), y);
  }
  function n(S) {
    if (V) {
      V(S);
      return;
    }
    const { from: X, item: e, oldIndex: p, newIndex: y } = S;
    if (oV(e), PN(X, e, p), GV(d)) {
      const j = [...tU(d)];
      d.value = gN(j, p, y);
      return;
    }
    gN(tU(d), p, y);
  }
  const b = {
    onUpdate: n,
    onStart: R,
    onAdd: N,
    onRemove: s
  };
  function a(S) {
    const X = tU(U);
    return S || (S = sm(X) ? nm(X, l == null ? void 0 : l.$el) : X), S && !mm(S) && (S = S.$el), S || Rm("Root element not found"), S;
  }
  function M() {
    const { immediate: S, clone: X, ...e } = tU(Z) ?? {};
    return am(
      d === null ? {} : b,
      e
    );
  }
  const G = (S) => {
    S = a(S), F && T.destroy(), F = new r(S, M());
  };
  W0(
    () => Z,
    () => {
      F && hm(M(), (S, X) => {
        F == null || F.option(S, X);
      });
    },
    { deep: !0 }
  );
  const T = {
    option: (S, X) => F == null ? void 0 : F.option(S, X),
    destroy: () => {
      F == null || F.destroy(), F = null;
    },
    save: () => F == null ? void 0 : F.save(),
    toArray: () => F == null ? void 0 : F.toArray(),
    closest: (...S) => F == null ? void 0 : F.closest(...S)
  }, J = () => T == null ? void 0 : T.option("disabled", !0), Y = () => T == null ? void 0 : T.option("disabled", !1);
  return Tm(() => {
    W && G();
  }), Mm(T.destroy), { start: G, pause: J, resume: Y, ...T };
}
const KV = [
  "update",
  "start",
  "add",
  "remove",
  "choose",
  "unchoose",
  "end",
  "sort",
  "filter",
  "clone",
  "move",
  "change"
], Jm = [
  "modelValue",
  "column",
  "row",
  "gap",
  "itemHeight",
  "itemWidth",
  "disabled",
  ...KV.map((c) => `on${c.replace(/^\S/, (l) => l.toUpperCase())}`)
], dt = kc({
  name: "DList",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Jm,
  emits: ["update:modelValue", ...KV],
  setup(c, { slots: l, emit: U, expose: d, attrs: Z }) {
    const F = KV.reduce((b, a) => {
      const M = `on${a.replace(/^\S/, (G) => G.toUpperCase())}`;
      return b[M] = (...G) => U(a, ...G), b;
    }, {}), W = Rd(() => {
      const { modelValue: b, ...a } = Ab(c), M = Object.entries(a).reduce((G, [T, J]) => {
        const Y = tU(J);
        return Y !== void 0 && (G[T] = T === "disabled" && Y === "" ? !0 : Y), G;
      }, {});
      return {
        ...F,
        ...Ya({ ...Z, ...M })
      };
    }), { resizeRef: t, contentRect: V } = nN(), R = Rd({
      get: () => c.modelValue,
      set: (b) => U("update:modelValue", b)
    }), N = Rd(() => {
      var G;
      const b = [
        W.value.itemWidth ? Ba(
          W.value.itemWidth,
          ((G = V.value) == null ? void 0 : G.width) || 400
        ) : W.value.column || 4,
        W.value.itemWidth ? W.value.itemWidth : "1fr"
      ], a = W.value.itemHeight || W.value.row ? (100 / W.value.row).toFixed(2) + "%" : "25%", M = W.value.gap || 0;
      return {
        "grid-template-columns": `repeat(${b[0]},${b[1]})`,
        "grid-auto-rows": a,
        gap: M
      };
    }), s = Bl(), n = Gs(Gm(s, R, W));
    return d(n), () => VF("div", { ref: t, class: "d-list" }, [
      VF(
        "div",
        { class: "d-list__content", style: N.value, ref: s },
        [
          R.value.map(
            (b, a) => {
              var M;
              return VF("div", { class: { move: !W.value.disabled } }, [
                ((M = l.default) == null ? void 0 : M.call(l, { item: b, index: a })) || VF("div", { class: "list__content__item" }, b)
              ]);
            }
          )
        ]
      )
    ]);
  }
});
dt.install = (c) => {
  const l = dt.name;
  c.component(l, dt);
};
var $W = {};
$W.d = (c, l) => {
  for (var U in l)
    $W.o(l, U) && !$W.o(c, U) && Object.defineProperty(c, U, { enumerable: !0, get: l[U] });
};
$W.o = (c, l) => Object.prototype.hasOwnProperty.call(c, l);
var K = globalThis.pdfjsLib = {};
$W.d(K, {
  AbortException: () => (
    /* reexport */
    s0
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    lN
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    g
  ),
  AnnotationEditorType: () => (
    /* reexport */
    Ul
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    c0
  ),
  AnnotationLayer: () => (
    /* reexport */
    Ti
  ),
  AnnotationMode: () => (
    /* reexport */
    eZ
  ),
  CMapCompressionType: () => (
    /* reexport */
    HV
  ),
  ColorPicker: () => (
    /* reexport */
    jt
  ),
  DOMSVGFactory: () => (
    /* reexport */
    MN
  ),
  DrawLayer: () => (
    /* reexport */
    FN
  ),
  FeatureTest: () => (
    /* reexport */
    MU
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    nZ
  ),
  ImageKind: () => (
    /* reexport */
    Zt
  ),
  InvalidPDFException: () => (
    /* reexport */
    xs
  ),
  MissingPDFException: () => (
    /* reexport */
    N0
  ),
  OPS: () => (
    /* reexport */
    fU
  ),
  Outliner: () => (
    /* reexport */
    kR
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    In
  ),
  PDFDateString: () => (
    /* reexport */
    vs
  ),
  PDFWorker: () => (
    /* reexport */
    e0
  ),
  PasswordResponses: () => (
    /* reexport */
    Bm
  ),
  PermissionFlag: () => (
    /* reexport */
    Ym
  ),
  PixelsPerInch: () => (
    /* reexport */
    AZ
  ),
  RenderingCancelledException: () => (
    /* reexport */
    TN
  ),
  TextLayer: () => (
    /* reexport */
    XW
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    sV
  ),
  Util: () => (
    /* reexport */
    I
  ),
  VerbosityLevel: () => (
    /* reexport */
    VV
  ),
  XfaLayer: () => (
    /* reexport */
    Cn
  ),
  build: () => (
    /* reexport */
    li
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    ym
  ),
  fetchData: () => (
    /* reexport */
    hV
  ),
  getDocument: () => (
    /* reexport */
    gh
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    xm
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    jm
  ),
  getXfaPageViewport: () => (
    /* reexport */
    Om
  ),
  isDataScheme: () => (
    /* reexport */
    GN
  ),
  isPdfFile: () => (
    /* reexport */
    JN
  ),
  noContextMenu: () => (
    /* reexport */
    GU
  ),
  normalizeUnicode: () => (
    /* reexport */
    Im
  ),
  renderTextLayer: () => (
    /* reexport */
    Ih
  ),
  setLayerDimensions: () => (
    /* reexport */
    Q0
  ),
  shadow: () => (
    /* reexport */
    Fl
  ),
  updateTextLayer: () => (
    /* reexport */
    Eh
  ),
  version: () => (
    /* reexport */
    $h
  )
});
const FU = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), ws = [1, 0, 0, 1, 0, 0], gV = [1e-3, 0, 0, 1e-3, 0, 0], Sm = 1e7, zV = 1.35, KU = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, eZ = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Xm = "pdfjs_internal_editor_", Ul = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, g = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, Ym = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, $l = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Zt = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, zl = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, eW = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, VV = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, HV = {
  NONE: 0,
  BINARY: 1
}, fU = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, Bm = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let RV = VV.WARNINGS;
function em(c) {
  Number.isInteger(c) && (RV = c);
}
function um() {
  return RV;
}
function NV(c) {
  RV >= VV.INFOS && console.log(`Info: ${c}`);
}
function f(c) {
  RV >= VV.WARNINGS && console.log(`Warning: ${c}`);
}
function nl(c) {
  throw new Error(c);
}
function Cl(c, l) {
  c || nl(l);
}
function pm(c) {
  switch (c == null ? void 0 : c.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function ym(c, l = null, U = null) {
  if (!c)
    return null;
  try {
    if (U && typeof c == "string") {
      if (U.addDefaultProtocol && c.startsWith("www.")) {
        const Z = c.match(/\./g);
        (Z == null ? void 0 : Z.length) >= 2 && (c = `http://${c}`);
      }
      if (U.tryConvertEncoding)
        try {
          c = km(c);
        } catch {
        }
    }
    const d = l ? new URL(c, l) : new URL(c);
    if (pm(d))
      return d;
  } catch {
  }
  return null;
}
function Fl(c, l, U, d = !1) {
  return Object.defineProperty(c, l, {
    value: U,
    enumerable: !d,
    configurable: !0,
    writable: !1
  }), U;
}
const $Z = function() {
  function l(U, d) {
    this.constructor === l && nl("Cannot initialize BaseException."), this.message = U, this.name = d;
  }
  return l.prototype = new Error(), l.constructor = l, l;
}();
class vV extends $Z {
  constructor(l, U) {
    super(l, "PasswordException"), this.code = U;
  }
}
class PV extends $Z {
  constructor(l, U) {
    super(l, "UnknownErrorException"), this.details = U;
  }
}
class xs extends $Z {
  constructor(l) {
    super(l, "InvalidPDFException");
  }
}
class N0 extends $Z {
  constructor(l) {
    super(l, "MissingPDFException");
  }
}
class sV extends $Z {
  constructor(l, U) {
    super(l, "UnexpectedResponseException"), this.status = U;
  }
}
class Lm extends $Z {
  constructor(l) {
    super(l, "FormatError");
  }
}
class s0 extends $Z {
  constructor(l) {
    super(l, "AbortException");
  }
}
function js(c) {
  (typeof c != "object" || (c == null ? void 0 : c.length) === void 0) && nl("Invalid argument for bytesToString");
  const l = c.length, U = 8192;
  if (l < U)
    return String.fromCharCode.apply(null, c);
  const d = [];
  for (let Z = 0; Z < l; Z += U) {
    const F = Math.min(Z + U, l), W = c.subarray(Z, F);
    d.push(String.fromCharCode.apply(null, W));
  }
  return d.join("");
}
function nV(c) {
  typeof c != "string" && nl("Invalid argument for stringToBytes");
  const l = c.length, U = new Uint8Array(l);
  for (let d = 0; d < l; ++d)
    U[d] = c.charCodeAt(d) & 255;
  return U;
}
function om(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function hN(c) {
  const l = /* @__PURE__ */ Object.create(null);
  for (const [U, d] of c)
    l[U] = d;
  return l;
}
function zm() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function Dm() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class MU {
  static get isLittleEndian() {
    return Fl(this, "isLittleEndian", zm());
  }
  static get isEvalSupported() {
    return Fl(this, "isEvalSupported", Dm());
  }
  static get isOffscreenCanvasSupported() {
    return Fl(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? Fl(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : Fl(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var l, U;
    return Fl(this, "isCSSRoundSupported", (U = (l = globalThis.CSS) == null ? void 0 : l.supports) == null ? void 0 : U.call(l, "width: round(1.5px, 1px)"));
  }
}
const DV = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, "0"));
var aZ, Ft, fV;
class I {
  static makeHexColor(l, U, d) {
    return `#${DV[l]}${DV[U]}${DV[d]}`;
  }
  static scaleMinMax(l, U) {
    let d;
    l[0] ? (l[0] < 0 && (d = U[0], U[0] = U[2], U[2] = d), U[0] *= l[0], U[2] *= l[0], l[3] < 0 && (d = U[1], U[1] = U[3], U[3] = d), U[1] *= l[3], U[3] *= l[3]) : (d = U[0], U[0] = U[1], U[1] = d, d = U[2], U[2] = U[3], U[3] = d, l[1] < 0 && (d = U[1], U[1] = U[3], U[3] = d), U[1] *= l[1], U[3] *= l[1], l[2] < 0 && (d = U[0], U[0] = U[2], U[2] = d), U[0] *= l[2], U[2] *= l[2]), U[0] += l[4], U[1] += l[5], U[2] += l[4], U[3] += l[5];
  }
  static transform(l, U) {
    return [l[0] * U[0] + l[2] * U[1], l[1] * U[0] + l[3] * U[1], l[0] * U[2] + l[2] * U[3], l[1] * U[2] + l[3] * U[3], l[0] * U[4] + l[2] * U[5] + l[4], l[1] * U[4] + l[3] * U[5] + l[5]];
  }
  static applyTransform(l, U) {
    const d = l[0] * U[0] + l[1] * U[2] + U[4], Z = l[0] * U[1] + l[1] * U[3] + U[5];
    return [d, Z];
  }
  static applyInverseTransform(l, U) {
    const d = U[0] * U[3] - U[1] * U[2], Z = (l[0] * U[3] - l[1] * U[2] + U[2] * U[5] - U[4] * U[3]) / d, F = (-l[0] * U[1] + l[1] * U[0] + U[4] * U[1] - U[5] * U[0]) / d;
    return [Z, F];
  }
  static getAxialAlignedBoundingBox(l, U) {
    const d = this.applyTransform(l, U), Z = this.applyTransform(l.slice(2, 4), U), F = this.applyTransform([l[0], l[3]], U), W = this.applyTransform([l[2], l[1]], U);
    return [Math.min(d[0], Z[0], F[0], W[0]), Math.min(d[1], Z[1], F[1], W[1]), Math.max(d[0], Z[0], F[0], W[0]), Math.max(d[1], Z[1], F[1], W[1])];
  }
  static inverseTransform(l) {
    const U = l[0] * l[3] - l[1] * l[2];
    return [l[3] / U, -l[1] / U, -l[2] / U, l[0] / U, (l[2] * l[5] - l[4] * l[3]) / U, (l[4] * l[1] - l[5] * l[0]) / U];
  }
  static singularValueDecompose2dScale(l) {
    const U = [l[0], l[2], l[1], l[3]], d = l[0] * U[0] + l[1] * U[2], Z = l[0] * U[1] + l[1] * U[3], F = l[2] * U[0] + l[3] * U[2], W = l[2] * U[1] + l[3] * U[3], t = (d + W) / 2, V = Math.sqrt((d + W) ** 2 - 4 * (d * W - F * Z)) / 2, R = t + V || 1, N = t - V || 1;
    return [Math.sqrt(R), Math.sqrt(N)];
  }
  static normalizeRect(l) {
    const U = l.slice(0);
    return l[0] > l[2] && (U[0] = l[2], U[2] = l[0]), l[1] > l[3] && (U[1] = l[3], U[3] = l[1]), U;
  }
  static intersect(l, U) {
    const d = Math.max(Math.min(l[0], l[2]), Math.min(U[0], U[2])), Z = Math.min(Math.max(l[0], l[2]), Math.max(U[0], U[2]));
    if (d > Z)
      return null;
    const F = Math.max(Math.min(l[1], l[3]), Math.min(U[1], U[3])), W = Math.min(Math.max(l[1], l[3]), Math.max(U[1], U[3]));
    return F > W ? null : [d, F, Z, W];
  }
  static bezierBoundingBox(l, U, d, Z, F, W, t, V, R) {
    return R ? (R[0] = Math.min(R[0], l, t), R[1] = Math.min(R[1], U, V), R[2] = Math.max(R[2], l, t), R[3] = Math.max(R[3], U, V)) : R = [Math.min(l, t), Math.min(U, V), Math.max(l, t), Math.max(U, V)], h(this, aZ, fV).call(this, l, d, F, t, U, Z, W, V, 3 * (-l + 3 * (d - F) + t), 6 * (l - 2 * d + F), 3 * (d - l), R), h(this, aZ, fV).call(this, l, d, F, t, U, Z, W, V, 3 * (-U + 3 * (Z - W) + V), 6 * (U - 2 * Z + W), 3 * (Z - U), R), R;
  }
}
aZ = new WeakSet(), Ft = function(l, U, d, Z, F, W, t, V, R, N) {
  if (R <= 0 || R >= 1)
    return;
  const s = 1 - R, n = R * R, b = n * R, a = s * (s * (s * l + 3 * R * U) + 3 * n * d) + b * Z, M = s * (s * (s * F + 3 * R * W) + 3 * n * t) + b * V;
  N[0] = Math.min(N[0], a), N[1] = Math.min(N[1], M), N[2] = Math.max(N[2], a), N[3] = Math.max(N[3], M);
}, fV = function(l, U, d, Z, F, W, t, V, R, N, s, n) {
  if (Math.abs(R) < 1e-12) {
    Math.abs(N) >= 1e-12 && h(this, aZ, Ft).call(this, l, U, d, Z, F, W, t, V, -s / N, n);
    return;
  }
  const b = N ** 2 - 4 * s * R;
  if (b < 0)
    return;
  const a = Math.sqrt(b), M = 2 * R;
  h(this, aZ, Ft).call(this, l, U, d, Z, F, W, t, V, (-N + a) / M, n), h(this, aZ, Ft).call(this, l, U, d, Z, F, W, t, V, (-N - a) / M, n);
}, i(I, aZ);
function km(c) {
  return decodeURIComponent(escape(c));
}
let kV = null, AN = null;
function Im(c) {
  return kV || (kV = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, AN = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), c.replaceAll(kV, (l, U, d) => U ? U.normalize("NFKC") : AN.get(d));
}
function Em() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const c = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(c);
  else
    for (let l = 0; l < 32; l++)
      c[l] = Math.floor(Math.random() * 255);
  return js(c);
}
const Os = "pdfjs_internal_id_", kd = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class bV {
  constructor() {
    this.constructor === bV && nl("Cannot initialize BaseFilterFactory.");
  }
  addFilter(l) {
    return "none";
  }
  addHCMFilter(l, U) {
    return "none";
  }
  addAlphaFilter(l) {
    return "none";
  }
  addLuminosityFilter(l) {
    return "none";
  }
  addHighlightHCMFilter(l, U, d, Z, F) {
    return "none";
  }
  destroy(l = !1) {
  }
}
var ZQ;
const eN = class eN {
  constructor({
    enableHWA: l = !1
  } = {}) {
    i(this, ZQ, !1);
    this.constructor === eN && nl("Cannot initialize BaseCanvasFactory."), m(this, ZQ, l);
  }
  create(l, U) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid canvas size");
    const d = this._createCanvas(l, U);
    return {
      canvas: d,
      context: d.getContext("2d", {
        willReadFrequently: !Q(this, ZQ)
      })
    };
  }
  reset(l, U, d) {
    if (!l.canvas)
      throw new Error("Canvas is not specified");
    if (U <= 0 || d <= 0)
      throw new Error("Invalid canvas size");
    l.canvas.width = U, l.canvas.height = d;
  }
  destroy(l) {
    if (!l.canvas)
      throw new Error("Canvas is not specified");
    l.canvas.width = 0, l.canvas.height = 0, l.canvas = null, l.context = null;
  }
  _createCanvas(l, U) {
    nl("Abstract method `_createCanvas` called.");
  }
};
ZQ = new WeakMap();
let It = eN;
class aV {
  constructor({
    baseUrl: l = null,
    isCompressed: U = !0
  }) {
    this.constructor === aV && nl("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = l, this.isCompressed = U;
  }
  async fetch({
    name: l
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!l)
      throw new Error("CMap name must be specified.");
    const U = this.baseUrl + l + (this.isCompressed ? ".bcmap" : ""), d = this.isCompressed ? HV.BINARY : HV.NONE;
    return this._fetchData(U, d).catch((Z) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${U}`);
    });
  }
  _fetchData(l, U) {
    nl("Abstract method `_fetchData` called.");
  }
}
class mV {
  constructor({
    baseUrl: l = null
  }) {
    this.constructor === mV && nl("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = l;
  }
  async fetch({
    filename: l
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!l)
      throw new Error("Font filename must be specified.");
    const U = `${this.baseUrl}${l}`;
    return this._fetchData(U).catch((d) => {
      throw new Error(`Unable to load font data at: ${U}`);
    });
  }
  _fetchData(l) {
    nl("Abstract method `_fetchData` called.");
  }
}
class iN {
  constructor() {
    this.constructor === iN && nl("Cannot initialize BaseSVGFactory.");
  }
  create(l, U, d = !1) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid SVG dimensions");
    const Z = this._createSVG("svg:svg");
    return Z.setAttribute("version", "1.1"), d || (Z.setAttribute("width", `${l}px`), Z.setAttribute("height", `${U}px`)), Z.setAttribute("preserveAspectRatio", "none"), Z.setAttribute("viewBox", `0 0 ${l} ${U}`), Z;
  }
  createElement(l) {
    if (typeof l != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(l);
  }
  _createSVG(l) {
    nl("Abstract method `_createSVG` called.");
  }
}
const Ed = "http://www.w3.org/2000/svg", cF = class cF {
};
v(cF, "CSS", 96), v(cF, "PDF", 72), v(cF, "PDF_TO_CSS_UNITS", cF.CSS / cF.PDF);
let AZ = cF;
var RF, sd, Od, mU, rt, NF, k, lU, h0, i0, Wt, rs, AV, M0, zW, DW, _V, kW;
class Cm extends bV {
  constructor({
    docId: U,
    ownerDocument: d = globalThis.document
  } = {}) {
    super();
    i(this, k);
    i(this, RF);
    i(this, sd);
    i(this, Od);
    i(this, mU);
    i(this, rt);
    i(this, NF, 0);
    m(this, Od, U), m(this, mU, d);
  }
  addFilter(U) {
    if (!U)
      return "none";
    let d = Q(this, k, lU).get(U);
    if (d)
      return d;
    const [Z, F, W] = h(this, k, Wt).call(this, U), t = U.length === 1 ? Z : `${Z}${F}${W}`;
    if (d = Q(this, k, lU).get(t), d)
      return Q(this, k, lU).set(U, d), d;
    const V = `g_${Q(this, Od)}_transfer_map_${SU(this, NF)._++}`, R = `url(#${V})`;
    Q(this, k, lU).set(U, R), Q(this, k, lU).set(t, R);
    const N = h(this, k, M0).call(this, V);
    return h(this, k, DW).call(this, Z, F, W, N), R;
  }
  addHCMFilter(U, d) {
    var a;
    const Z = `${U}-${d}`, F = "base";
    let W = Q(this, k, h0).get(F);
    if ((W == null ? void 0 : W.key) === Z || (W ? ((a = W.filter) == null || a.remove(), W.key = Z, W.url = "none", W.filter = null) : (W = {
      key: Z,
      url: "none",
      filter: null
    }, Q(this, k, h0).set(F, W)), !U || !d))
      return W.url;
    const t = h(this, k, kW).call(this, U);
    U = I.makeHexColor(...t);
    const V = h(this, k, kW).call(this, d);
    if (d = I.makeHexColor(...V), Q(this, k, i0).style.color = "", U === "#000000" && d === "#ffffff" || U === d)
      return W.url;
    const R = new Array(256);
    for (let M = 0; M <= 255; M++) {
      const G = M / 255;
      R[M] = G <= 0.03928 ? G / 12.92 : ((G + 0.055) / 1.055) ** 2.4;
    }
    const N = R.join(","), s = `g_${Q(this, Od)}_hcm_filter`, n = W.filter = h(this, k, M0).call(this, s);
    h(this, k, DW).call(this, N, N, N, n), h(this, k, AV).call(this, n);
    const b = (M, G) => {
      const T = t[M] / 255, J = V[M] / 255, Y = new Array(G + 1);
      for (let B = 0; B <= G; B++)
        Y[B] = T + B / G * (J - T);
      return Y.join(",");
    };
    return h(this, k, DW).call(this, b(0, 5), b(1, 5), b(2, 5), n), W.url = `url(#${s})`, W.url;
  }
  addAlphaFilter(U) {
    let d = Q(this, k, lU).get(U);
    if (d)
      return d;
    const [Z] = h(this, k, Wt).call(this, [U]), F = `alpha_${Z}`;
    if (d = Q(this, k, lU).get(F), d)
      return Q(this, k, lU).set(U, d), d;
    const W = `g_${Q(this, Od)}_alpha_map_${SU(this, NF)._++}`, t = `url(#${W})`;
    Q(this, k, lU).set(U, t), Q(this, k, lU).set(F, t);
    const V = h(this, k, M0).call(this, W);
    return h(this, k, _V).call(this, Z, V), t;
  }
  addLuminosityFilter(U) {
    let d = Q(this, k, lU).get(U || "luminosity");
    if (d)
      return d;
    let Z, F;
    if (U ? ([Z] = h(this, k, Wt).call(this, [U]), F = `luminosity_${Z}`) : F = "luminosity", d = Q(this, k, lU).get(F), d)
      return Q(this, k, lU).set(U, d), d;
    const W = `g_${Q(this, Od)}_luminosity_map_${SU(this, NF)._++}`, t = `url(#${W})`;
    Q(this, k, lU).set(U, t), Q(this, k, lU).set(F, t);
    const V = h(this, k, M0).call(this, W);
    return h(this, k, rs).call(this, V), U && h(this, k, _V).call(this, Z, V), t;
  }
  addHighlightHCMFilter(U, d, Z, F, W) {
    var J;
    const t = `${d}-${Z}-${F}-${W}`;
    let V = Q(this, k, h0).get(U);
    if ((V == null ? void 0 : V.key) === t || (V ? ((J = V.filter) == null || J.remove(), V.key = t, V.url = "none", V.filter = null) : (V = {
      key: t,
      url: "none",
      filter: null
    }, Q(this, k, h0).set(U, V)), !d || !Z))
      return V.url;
    const [R, N] = [d, Z].map(h(this, k, kW).bind(this));
    let s = Math.round(0.2126 * R[0] + 0.7152 * R[1] + 0.0722 * R[2]), n = Math.round(0.2126 * N[0] + 0.7152 * N[1] + 0.0722 * N[2]), [b, a] = [F, W].map(h(this, k, kW).bind(this));
    n < s && ([s, n, b, a] = [n, s, a, b]), Q(this, k, i0).style.color = "";
    const M = (Y, B, S) => {
      const X = new Array(256), e = (n - s) / S, p = Y / 255, y = (B - Y) / (255 * S);
      let j = 0;
      for (let D = 0; D <= S; D++) {
        const ll = Math.round(s + D * e), P = p + D * y;
        for (let q = j; q <= ll; q++)
          X[q] = P;
        j = ll + 1;
      }
      for (let D = j; D < 256; D++)
        X[D] = X[j - 1];
      return X.join(",");
    }, G = `g_${Q(this, Od)}_hcm_${U}_filter`, T = V.filter = h(this, k, M0).call(this, G);
    return h(this, k, AV).call(this, T), h(this, k, DW).call(this, M(b[0], a[0], 5), M(b[1], a[1], 5), M(b[2], a[2], 5), T), V.url = `url(#${G})`, V.url;
  }
  destroy(U = !1) {
    U && Q(this, k, h0).size !== 0 || (Q(this, sd) && (Q(this, sd).parentNode.parentNode.remove(), m(this, sd, null)), Q(this, RF) && (Q(this, RF).clear(), m(this, RF, null)), m(this, NF, 0));
  }
}
RF = new WeakMap(), sd = new WeakMap(), Od = new WeakMap(), mU = new WeakMap(), rt = new WeakMap(), NF = new WeakMap(), k = new WeakSet(), lU = function() {
  return Q(this, RF) || m(this, RF, /* @__PURE__ */ new Map());
}, h0 = function() {
  return Q(this, rt) || m(this, rt, /* @__PURE__ */ new Map());
}, i0 = function() {
  if (!Q(this, sd)) {
    const U = Q(this, mU).createElement("div"), {
      style: d
    } = U;
    d.visibility = "hidden", d.contain = "strict", d.width = d.height = 0, d.position = "absolute", d.top = d.left = 0, d.zIndex = -1;
    const Z = Q(this, mU).createElementNS(Ed, "svg");
    Z.setAttribute("width", 0), Z.setAttribute("height", 0), m(this, sd, Q(this, mU).createElementNS(Ed, "defs")), U.append(Z), Z.append(Q(this, sd)), Q(this, mU).body.append(U);
  }
  return Q(this, sd);
}, Wt = function(U) {
  if (U.length === 1) {
    const R = U[0], N = new Array(256);
    for (let n = 0; n < 256; n++)
      N[n] = R[n] / 255;
    const s = N.join(",");
    return [s, s, s];
  }
  const [d, Z, F] = U, W = new Array(256), t = new Array(256), V = new Array(256);
  for (let R = 0; R < 256; R++)
    W[R] = d[R] / 255, t[R] = Z[R] / 255, V[R] = F[R] / 255;
  return [W.join(","), t.join(","), V.join(",")];
}, rs = function(U) {
  const d = Q(this, mU).createElementNS(Ed, "feColorMatrix");
  d.setAttribute("type", "matrix"), d.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), U.append(d);
}, AV = function(U) {
  const d = Q(this, mU).createElementNS(Ed, "feColorMatrix");
  d.setAttribute("type", "matrix"), d.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), U.append(d);
}, M0 = function(U) {
  const d = Q(this, mU).createElementNS(Ed, "filter");
  return d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("id", U), Q(this, k, i0).append(d), d;
}, zW = function(U, d, Z) {
  const F = Q(this, mU).createElementNS(Ed, d);
  F.setAttribute("type", "discrete"), F.setAttribute("tableValues", Z), U.append(F);
}, DW = function(U, d, Z, F) {
  const W = Q(this, mU).createElementNS(Ed, "feComponentTransfer");
  F.append(W), h(this, k, zW).call(this, W, "feFuncR", U), h(this, k, zW).call(this, W, "feFuncG", d), h(this, k, zW).call(this, W, "feFuncB", Z);
}, _V = function(U, d) {
  const Z = Q(this, mU).createElementNS(Ed, "feComponentTransfer");
  d.append(Z), h(this, k, zW).call(this, Z, "feFuncA", U);
}, kW = function(U) {
  return Q(this, k, i0).style.color = U, SN(getComputedStyle(Q(this, k, i0)).getPropertyValue("color"));
};
class wm extends It {
  constructor({
    ownerDocument: l = globalThis.document,
    enableHWA: U = !1
  } = {}) {
    super({
      enableHWA: U
    }), this._document = l;
  }
  _createCanvas(l, U) {
    const d = this._document.createElement("canvas");
    return d.width = l, d.height = U, d;
  }
}
async function hV(c, l = "text") {
  if (IW(c, document.baseURI)) {
    const U = await fetch(c);
    if (!U.ok)
      throw new Error(U.statusText);
    switch (l) {
      case "arraybuffer":
        return U.arrayBuffer();
      case "blob":
        return U.blob();
      case "json":
        return U.json();
    }
    return U.text();
  }
  return new Promise((U, d) => {
    const Z = new XMLHttpRequest();
    Z.open("GET", c, !0), Z.responseType = l, Z.onreadystatechange = () => {
      if (Z.readyState === XMLHttpRequest.DONE) {
        if (Z.status === 200 || Z.status === 0) {
          switch (l) {
            case "arraybuffer":
            case "blob":
            case "json":
              U(Z.response);
              return;
          }
          U(Z.responseText);
          return;
        }
        d(new Error(Z.statusText));
      }
    }, Z.send(null);
  });
}
class Ks extends aV {
  _fetchData(l, U) {
    return hV(l, this.isCompressed ? "arraybuffer" : "text").then((d) => ({
      cMapData: d instanceof ArrayBuffer ? new Uint8Array(d) : nV(d),
      compressionType: U
    }));
  }
}
class gs extends mV {
  _fetchData(l) {
    return hV(l, "arraybuffer").then((U) => new Uint8Array(U));
  }
}
class MN extends iN {
  _createSVG(l) {
    return document.createElementNS(Ed, l);
  }
}
class Cc {
  constructor({
    viewBox: l,
    scale: U,
    rotation: d,
    offsetX: Z = 0,
    offsetY: F = 0,
    dontFlip: W = !1
  }) {
    this.viewBox = l, this.scale = U, this.rotation = d, this.offsetX = Z, this.offsetY = F;
    const t = (l[2] + l[0]) / 2, V = (l[3] + l[1]) / 2;
    let R, N, s, n;
    switch (d %= 360, d < 0 && (d += 360), d) {
      case 180:
        R = -1, N = 0, s = 0, n = 1;
        break;
      case 90:
        R = 0, N = 1, s = 1, n = 0;
        break;
      case 270:
        R = 0, N = -1, s = -1, n = 0;
        break;
      case 0:
        R = 1, N = 0, s = 0, n = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    W && (s = -s, n = -n);
    let b, a, M, G;
    R === 0 ? (b = Math.abs(V - l[1]) * U + Z, a = Math.abs(t - l[0]) * U + F, M = (l[3] - l[1]) * U, G = (l[2] - l[0]) * U) : (b = Math.abs(t - l[0]) * U + Z, a = Math.abs(V - l[1]) * U + F, M = (l[2] - l[0]) * U, G = (l[3] - l[1]) * U), this.transform = [R * U, N * U, s * U, n * U, b - R * U * t - s * U * V, a - N * U * t - n * U * V], this.width = M, this.height = G;
  }
  get rawDims() {
    const {
      viewBox: l
    } = this;
    return Fl(this, "rawDims", {
      pageWidth: l[2] - l[0],
      pageHeight: l[3] - l[1],
      pageX: l[0],
      pageY: l[1]
    });
  }
  clone({
    scale: l = this.scale,
    rotation: U = this.rotation,
    offsetX: d = this.offsetX,
    offsetY: Z = this.offsetY,
    dontFlip: F = !1
  } = {}) {
    return new Cc({
      viewBox: this.viewBox.slice(),
      scale: l,
      rotation: U,
      offsetX: d,
      offsetY: Z,
      dontFlip: F
    });
  }
  convertToViewportPoint(l, U) {
    return I.applyTransform([l, U], this.transform);
  }
  convertToViewportRectangle(l) {
    const U = I.applyTransform([l[0], l[1]], this.transform), d = I.applyTransform([l[2], l[3]], this.transform);
    return [U[0], U[1], d[0], d[1]];
  }
  convertToPdfPoint(l, U) {
    return I.applyInverseTransform([l, U], this.transform);
  }
}
class TN extends $Z {
  constructor(l, U = 0) {
    super(l, "RenderingCancelledException"), this.extraDelay = U;
  }
}
function GN(c) {
  const l = c.length;
  let U = 0;
  for (; U < l && c[U].trim() === ""; )
    U++;
  return c.substring(U, U + 5).toLowerCase() === "data:";
}
function JN(c) {
  return typeof c == "string" && /\.pdf$/i.test(c);
}
function xm(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf("/") + 1);
}
function jm(c, l = "document.pdf") {
  if (typeof c != "string")
    return l;
  if (GN(c))
    return f('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), l;
  const U = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, d = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, Z = U.exec(c);
  let F = d.exec(Z[1]) || d.exec(Z[2]) || d.exec(Z[3]);
  if (F && (F = F[0], F.includes("%")))
    try {
      F = d.exec(decodeURIComponent(F))[0];
    } catch {
    }
  return F || l;
}
class _N {
  constructor() {
    v(this, "started", /* @__PURE__ */ Object.create(null));
    v(this, "times", []);
  }
  time(l) {
    l in this.started && f(`Timer is already running for ${l}`), this.started[l] = Date.now();
  }
  timeEnd(l) {
    l in this.started || f(`Timer has not been started for ${l}`), this.times.push({
      name: l,
      start: this.started[l],
      end: Date.now()
    }), delete this.started[l];
  }
  toString() {
    const l = [];
    let U = 0;
    for (const {
      name: d
    } of this.times)
      U = Math.max(d.length, U);
    for (const {
      name: d,
      start: Z,
      end: F
    } of this.times)
      l.push(`${d.padEnd(U)} ${F - Z}ms
`);
    return l.join("");
  }
}
function IW(c, l) {
  try {
    const {
      protocol: U
    } = l ? new URL(c, l) : new URL(c);
    return U === "http:" || U === "https:";
  } catch {
    return !1;
  }
}
function GU(c) {
  c.preventDefault();
}
function Hs(c) {
  console.log("Deprecated API usage: " + c);
}
let qN;
class vs {
  static toDateObject(l) {
    if (!l || typeof l != "string")
      return null;
    qN || (qN = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const U = qN.exec(l);
    if (!U)
      return null;
    const d = parseInt(U[1], 10);
    let Z = parseInt(U[2], 10);
    Z = Z >= 1 && Z <= 12 ? Z - 1 : 0;
    let F = parseInt(U[3], 10);
    F = F >= 1 && F <= 31 ? F : 1;
    let W = parseInt(U[4], 10);
    W = W >= 0 && W <= 23 ? W : 0;
    let t = parseInt(U[5], 10);
    t = t >= 0 && t <= 59 ? t : 0;
    let V = parseInt(U[6], 10);
    V = V >= 0 && V <= 59 ? V : 0;
    const R = U[7] || "Z";
    let N = parseInt(U[8], 10);
    N = N >= 0 && N <= 23 ? N : 0;
    let s = parseInt(U[9], 10) || 0;
    return s = s >= 0 && s <= 59 ? s : 0, R === "-" ? (W += N, t += s) : R === "+" && (W -= N, t -= s), new Date(Date.UTC(d, Z, F, W, t, V));
  }
}
function Om(c, {
  scale: l = 1,
  rotation: U = 0
}) {
  const {
    width: d,
    height: Z
  } = c.attributes.style, F = [0, 0, parseInt(d), parseInt(Z)];
  return new Cc({
    viewBox: F,
    scale: l,
    rotation: U
  });
}
function SN(c) {
  if (c.startsWith("#")) {
    const l = parseInt(c.slice(1), 16);
    return [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255];
  }
  return c.startsWith("rgb(") ? c.slice(4, -1).split(",").map((l) => parseInt(l)) : c.startsWith("rgba(") ? c.slice(5, -1).split(",").map((l) => parseInt(l)).slice(0, 3) : (f(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function rm(c) {
  const l = document.createElement("span");
  l.style.visibility = "hidden", document.body.append(l);
  for (const U of c.keys()) {
    l.style.color = U;
    const d = window.getComputedStyle(l).color;
    c.set(U, SN(d));
  }
  l.remove();
}
function Jl(c) {
  const {
    a: l,
    b: U,
    c: d,
    d: Z,
    e: F,
    f: W
  } = c.getTransform();
  return [l, U, d, Z, F, W];
}
function Id(c) {
  const {
    a: l,
    b: U,
    c: d,
    d: Z,
    e: F,
    f: W
  } = c.getTransform().invertSelf();
  return [l, U, d, Z, F, W];
}
function Q0(c, l, U = !1, d = !0) {
  if (l instanceof Cc) {
    const {
      pageWidth: Z,
      pageHeight: F
    } = l.rawDims, {
      style: W
    } = c, t = MU.isCSSRoundSupported, V = `var(--scale-factor) * ${Z}px`, R = `var(--scale-factor) * ${F}px`, N = t ? `round(${V}, 1px)` : `calc(${V})`, s = t ? `round(${R}, 1px)` : `calc(${R})`;
    !U || l.rotation % 180 === 0 ? (W.width = N, W.height = s) : (W.width = s, W.height = N);
  }
  d && c.setAttribute("data-main-rotation", l.rotation);
}
var sF, nF, uU, bF, Kt, Ps, sU, fs, As, Qt, _s, $V;
const gt = class gt {
  constructor(l) {
    i(this, sU);
    i(this, sF, null);
    i(this, nF, null);
    i(this, uU);
    i(this, bF, null);
    m(this, uU, l);
  }
  render() {
    const l = m(this, sF, document.createElement("div"));
    l.className = "editToolbar", l.setAttribute("role", "toolbar");
    const U = Q(this, uU)._uiManager._signal;
    l.addEventListener("contextmenu", GU, {
      signal: U
    }), l.addEventListener("pointerdown", h(gt, Kt, Ps), {
      signal: U
    });
    const d = m(this, bF, document.createElement("div"));
    d.className = "buttons", l.append(d);
    const Z = Q(this, uU).toolbarPosition;
    if (Z) {
      const {
        style: F
      } = l, W = Q(this, uU)._uiManager.direction === "ltr" ? 1 - Z[0] : Z[0];
      F.insetInlineEnd = `${100 * W}%`, F.top = `calc(${100 * Z[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return h(this, sU, _s).call(this), l;
  }
  hide() {
    var l;
    Q(this, sF).classList.add("hidden"), (l = Q(this, nF)) == null || l.hideDropdown();
  }
  show() {
    Q(this, sF).classList.remove("hidden");
  }
  addAltTextButton(l) {
    h(this, sU, Qt).call(this, l), Q(this, bF).prepend(l, Q(this, sU, $V));
  }
  addColorPicker(l) {
    m(this, nF, l);
    const U = l.renderButton();
    h(this, sU, Qt).call(this, U), Q(this, bF).prepend(U, Q(this, sU, $V));
  }
  remove() {
    var l;
    Q(this, sF).remove(), (l = Q(this, nF)) == null || l.destroy(), m(this, nF, null);
  }
};
sF = new WeakMap(), nF = new WeakMap(), uU = new WeakMap(), bF = new WeakMap(), Kt = new WeakSet(), Ps = function(l) {
  l.stopPropagation();
}, sU = new WeakSet(), fs = function(l) {
  Q(this, uU)._focusEventsAllowed = !1, l.preventDefault(), l.stopPropagation();
}, As = function(l) {
  Q(this, uU)._focusEventsAllowed = !0, l.preventDefault(), l.stopPropagation();
}, Qt = function(l) {
  const U = Q(this, uU)._uiManager._signal;
  l.addEventListener("focusin", h(this, sU, fs).bind(this), {
    capture: !0,
    signal: U
  }), l.addEventListener("focusout", h(this, sU, As).bind(this), {
    capture: !0,
    signal: U
  }), l.addEventListener("contextmenu", GU, {
    signal: U
  });
}, _s = function() {
  const l = document.createElement("button");
  l.className = "delete", l.tabIndex = 0, l.setAttribute("data-l10n-id", `pdfjs-editor-remove-${Q(this, uU).editorType}-button`), h(this, sU, Qt).call(this, l), l.addEventListener("click", (U) => {
    Q(this, uU)._uiManager.delete();
  }, {
    signal: Q(this, uU)._uiManager._signal
  }), Q(this, bF).append(l);
}, $V = function() {
  const l = document.createElement("div");
  return l.className = "divider", l;
}, i(gt, Kt);
let qV = gt;
var FQ, aF, mF, _Z, qs, $s, ln;
class Km {
  constructor(l) {
    i(this, _Z);
    i(this, FQ, null);
    i(this, aF, null);
    i(this, mF);
    m(this, mF, l);
  }
  show(l, U, d) {
    const [Z, F] = h(this, _Z, $s).call(this, U, d), {
      style: W
    } = Q(this, aF) || m(this, aF, h(this, _Z, qs).call(this));
    l.append(Q(this, aF)), W.insetInlineEnd = `${100 * Z}%`, W.top = `calc(${100 * F}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    Q(this, aF).remove();
  }
}
FQ = new WeakMap(), aF = new WeakMap(), mF = new WeakMap(), _Z = new WeakSet(), qs = function() {
  const l = m(this, aF, document.createElement("div"));
  l.className = "editToolbar", l.setAttribute("role", "toolbar"), l.addEventListener("contextmenu", GU, {
    signal: Q(this, mF)._signal
  });
  const U = m(this, FQ, document.createElement("div"));
  return U.className = "buttons", l.append(U), h(this, _Z, ln).call(this), l;
}, $s = function(l, U) {
  let d = 0, Z = 0;
  for (const F of l) {
    const W = F.y + F.height;
    if (W < d)
      continue;
    const t = F.x + (U ? F.width : 0);
    if (W > d) {
      Z = t, d = W;
      continue;
    }
    U ? t > Z && (Z = t) : t < Z && (Z = t);
  }
  return [U ? 1 - Z : Z, d];
}, ln = function() {
  const l = document.createElement("button");
  l.className = "highlightButton", l.tabIndex = 0, l.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const U = document.createElement("span");
  l.append(U), U.className = "visuallyHidden", U.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const d = Q(this, mF)._signal;
  l.addEventListener("contextmenu", GU, {
    signal: d
  }), l.addEventListener("click", () => {
    Q(this, mF).highlightSelection("floating_button");
  }, {
    signal: d
  }), Q(this, FQ).append(l);
};
function Et(c, l, U) {
  for (const d of U)
    l.addEventListener(d, c[d].bind(c));
}
function gm(c) {
  return Math.round(Math.min(255, Math.max(1, 255 * c))).toString(16).padStart(2, "0");
}
var Ht;
class Hm {
  constructor() {
    i(this, Ht, 0);
  }
  get id() {
    return `${Xm}${SU(this, Ht)._++}`;
  }
}
Ht = new WeakMap();
var WQ, vt, xU, QQ, UR;
const uN = class uN {
  constructor() {
    i(this, QQ);
    i(this, WQ, Em());
    i(this, vt, 0);
    i(this, xU, null);
  }
  static get _isSVGFittingCanvas() {
    const l = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', d = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), Z = new Image();
    Z.src = l;
    const F = Z.decode().then(() => (d.drawImage(Z, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(d.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Fl(this, "_isSVGFittingCanvas", F);
  }
  async getFromFile(l) {
    const {
      lastModified: U,
      name: d,
      size: Z,
      type: F
    } = l;
    return h(this, QQ, UR).call(this, `${U}_${d}_${Z}_${F}`, l);
  }
  async getFromUrl(l) {
    return h(this, QQ, UR).call(this, l, l);
  }
  async getFromId(l) {
    Q(this, xU) || m(this, xU, /* @__PURE__ */ new Map());
    const U = Q(this, xU).get(l);
    return U ? U.bitmap ? (U.refCounter += 1, U) : U.file ? this.getFromFile(U.file) : this.getFromUrl(U.url) : null;
  }
  getSvgUrl(l) {
    const U = Q(this, xU).get(l);
    return U != null && U.isSvg ? U.svgUrl : null;
  }
  deleteId(l) {
    Q(this, xU) || m(this, xU, /* @__PURE__ */ new Map());
    const U = Q(this, xU).get(l);
    U && (U.refCounter -= 1, U.refCounter === 0 && (U.bitmap = null));
  }
  isValidId(l) {
    return l.startsWith(`image_${Q(this, WQ)}_`);
  }
};
WQ = new WeakMap(), vt = new WeakMap(), xU = new WeakMap(), QQ = new WeakSet(), UR = async function(l, U) {
  Q(this, xU) || m(this, xU, /* @__PURE__ */ new Map());
  let d = Q(this, xU).get(l);
  if (d === null)
    return null;
  if (d != null && d.bitmap)
    return d.refCounter += 1, d;
  try {
    d || (d = {
      bitmap: null,
      id: `image_${Q(this, WQ)}_${SU(this, vt)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let Z;
    if (typeof U == "string" ? (d.url = U, Z = await hV(U, "blob")) : Z = d.file = U, Z.type === "image/svg+xml") {
      const F = uN._isSVGFittingCanvas, W = new FileReader(), t = new Image(), V = new Promise((R, N) => {
        t.onload = () => {
          d.bitmap = t, d.isSvg = !0, R();
        }, W.onload = async () => {
          const s = d.svgUrl = W.result;
          t.src = await F ? `${s}#svgView(preserveAspectRatio(none))` : s;
        }, t.onerror = W.onerror = N;
      });
      W.readAsDataURL(Z), await V;
    } else
      d.bitmap = await createImageBitmap(Z);
    d.refCounter = 1;
  } catch (Z) {
    console.error(Z), d = null;
  }
  return Q(this, xU).set(l, d), d && Q(this, xU).set(d.id, d), d;
};
let lR = uN;
var xl, uZ, cQ, jl;
class vm {
  constructor(l = 128) {
    i(this, xl, []);
    i(this, uZ, !1);
    i(this, cQ);
    i(this, jl, -1);
    m(this, cQ, l);
  }
  add({
    cmd: l,
    undo: U,
    post: d,
    mustExec: Z,
    type: F = NaN,
    overwriteIfSameType: W = !1,
    keepUndo: t = !1
  }) {
    if (Z && l(), Q(this, uZ))
      return;
    const V = {
      cmd: l,
      undo: U,
      post: d,
      type: F
    };
    if (Q(this, jl) === -1) {
      Q(this, xl).length > 0 && (Q(this, xl).length = 0), m(this, jl, 0), Q(this, xl).push(V);
      return;
    }
    if (W && Q(this, xl)[Q(this, jl)].type === F) {
      t && (V.undo = Q(this, xl)[Q(this, jl)].undo), Q(this, xl)[Q(this, jl)] = V;
      return;
    }
    const R = Q(this, jl) + 1;
    R === Q(this, cQ) ? Q(this, xl).splice(0, 1) : (m(this, jl, R), R < Q(this, xl).length && Q(this, xl).splice(R)), Q(this, xl).push(V);
  }
  undo() {
    if (Q(this, jl) === -1)
      return;
    m(this, uZ, !0);
    const {
      undo: l,
      post: U
    } = Q(this, xl)[Q(this, jl)];
    l(), U == null || U(), m(this, uZ, !1), m(this, jl, Q(this, jl) - 1);
  }
  redo() {
    if (Q(this, jl) < Q(this, xl).length - 1) {
      m(this, jl, Q(this, jl) + 1), m(this, uZ, !0);
      const {
        cmd: l,
        post: U
      } = Q(this, xl)[Q(this, jl)];
      l(), U == null || U(), m(this, uZ, !1);
    }
  }
  hasSomethingToUndo() {
    return Q(this, jl) !== -1;
  }
  hasSomethingToRedo() {
    return Q(this, jl) < Q(this, xl).length - 1;
  }
  destroy() {
    m(this, xl, null);
  }
}
xl = new WeakMap(), uZ = new WeakMap(), cQ = new WeakMap(), jl = new WeakMap();
var Pt, Un;
class wc {
  constructor(l) {
    i(this, Pt);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: U
    } = MU.platform;
    for (const [d, Z, F = {}] of l)
      for (const W of d) {
        const t = W.startsWith("mac+");
        U && t ? (this.callbacks.set(W.slice(4), {
          callback: Z,
          options: F
        }), this.allKeys.add(W.split("+").at(-1))) : !U && !t && (this.callbacks.set(W, {
          callback: Z,
          options: F
        }), this.allKeys.add(W.split("+").at(-1)));
      }
  }
  exec(l, U) {
    if (!this.allKeys.has(U.key))
      return;
    const d = this.callbacks.get(h(this, Pt, Un).call(this, U));
    if (!d)
      return;
    const {
      callback: Z,
      options: {
        bubbles: F = !1,
        args: W = [],
        checker: t = null
      }
    } = d;
    t && !t(l, U) || (Z.bind(l, ...W, U)(), F || (U.stopPropagation(), U.preventDefault()));
  }
}
Pt = new WeakSet(), Un = function(l) {
  l.altKey && this.buffer.push("alt"), l.ctrlKey && this.buffer.push("ctrl"), l.metaKey && this.buffer.push("meta"), l.shiftKey && this.buffer.push("shift"), this.buffer.push(l.key);
  const U = this.buffer.join("+");
  return this.buffer.length = 0, U;
};
const ft = class ft {
  get _colors() {
    const l = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return rm(l), Fl(this, "_colors", l);
  }
  convert(l) {
    const U = SN(l);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return U;
    for (const [d, Z] of this._colors)
      if (Z.every((F, W) => F === U[W]))
        return ft._colorsMapping.get(d);
    return U;
  }
  getHexCode(l) {
    const U = this._colors.get(l);
    return U ? I.makeHexColor(...U) : l;
  }
};
v(ft, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let dR = ft;
var u0, pU, Dl, Kl, p0, rd, y0, AU, L0, hF, nd, _U, iF, tQ, VQ, bd, o0, pZ, ad, At, yZ, RQ, MF, NQ, z0, gl, Vl, Kd, TF, sQ, nQ, bQ, aQ, mQ, hQ, iQ, MQ, TQ, GQ, JQ, SQ, XQ, LZ, md, gd, YQ, o, ct, dn, Zn, tt, Fn, Wn, Qn, ZR, cn, FR, WR, tn, cU, JZ, Vn, Rn, QR, Nn, EW, cR;
const X0 = class X0 {
  constructor(l, U, d, Z, F, W, t, V, R) {
    i(this, o);
    i(this, u0, new AbortController());
    i(this, pU, null);
    i(this, Dl, /* @__PURE__ */ new Map());
    i(this, Kl, /* @__PURE__ */ new Map());
    i(this, p0, null);
    i(this, rd, null);
    i(this, y0, null);
    i(this, AU, new vm());
    i(this, L0, 0);
    i(this, hF, /* @__PURE__ */ new Set());
    i(this, nd, null);
    i(this, _U, null);
    i(this, iF, /* @__PURE__ */ new Set());
    i(this, tQ, !1);
    i(this, VQ, null);
    i(this, bd, null);
    i(this, o0, null);
    i(this, pZ, !1);
    i(this, ad, null);
    i(this, At, new Hm());
    i(this, yZ, !1);
    i(this, RQ, !1);
    i(this, MF, null);
    i(this, NQ, null);
    i(this, z0, null);
    i(this, gl, Ul.NONE);
    i(this, Vl, /* @__PURE__ */ new Set());
    i(this, Kd, null);
    i(this, TF, null);
    i(this, sQ, null);
    i(this, nQ, this.blur.bind(this));
    i(this, bQ, this.focus.bind(this));
    i(this, aQ, this.copy.bind(this));
    i(this, mQ, this.cut.bind(this));
    i(this, hQ, this.paste.bind(this));
    i(this, iQ, this.keydown.bind(this));
    i(this, MQ, this.keyup.bind(this));
    i(this, TQ, this.onEditingAction.bind(this));
    i(this, GQ, this.onPageChanging.bind(this));
    i(this, JQ, this.onScaleChanging.bind(this));
    i(this, SQ, this.onRotationChanging.bind(this));
    i(this, XQ, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    i(this, LZ, [0, 0]);
    i(this, md, null);
    i(this, gd, null);
    i(this, YQ, null);
    this._signal = Q(this, u0).signal, m(this, gd, l), m(this, YQ, U), m(this, p0, d), this._eventBus = Z, this._eventBus._on("editingaction", Q(this, TQ)), this._eventBus._on("pagechanging", Q(this, GQ)), this._eventBus._on("scalechanging", Q(this, JQ)), this._eventBus._on("rotationchanging", Q(this, SQ)), h(this, o, Fn).call(this), h(this, o, tn).call(this), h(this, o, ZR).call(this), m(this, rd, F.annotationStorage), m(this, VQ, F.filterFactory), m(this, TF, W), m(this, o0, t || null), m(this, tQ, V), m(this, z0, R || null), this.viewParameters = {
      realScale: AZ.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const l = X0.prototype, U = (W) => Q(W, gd).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && W.hasSomethingToControl(), d = (W, {
      target: t
    }) => {
      if (t instanceof HTMLInputElement) {
        const {
          type: V
        } = t;
        return V !== "text" && V !== "number";
      }
      return !0;
    }, Z = this.TRANSLATE_SMALL, F = this.TRANSLATE_BIG;
    return Fl(this, "_keyboardManager", new wc([[["ctrl+a", "mac+meta+a"], l.selectAll, {
      checker: d
    }], [["ctrl+z", "mac+meta+z"], l.undo, {
      checker: d
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], l.redo, {
      checker: d
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], l.delete, {
      checker: d
    }], [["Enter", "mac+Enter"], l.addNewEditorFromKeyboard, {
      checker: (W, {
        target: t
      }) => !(t instanceof HTMLButtonElement) && Q(W, gd).contains(t) && !W.isEnterHandled
    }], [[" ", "mac+ "], l.addNewEditorFromKeyboard, {
      checker: (W, {
        target: t
      }) => !(t instanceof HTMLButtonElement) && Q(W, gd).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], l.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], l.translateSelectedEditors, {
      args: [-Z, 0],
      checker: U
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], l.translateSelectedEditors, {
      args: [-F, 0],
      checker: U
    }], [["ArrowRight", "mac+ArrowRight"], l.translateSelectedEditors, {
      args: [Z, 0],
      checker: U
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], l.translateSelectedEditors, {
      args: [F, 0],
      checker: U
    }], [["ArrowUp", "mac+ArrowUp"], l.translateSelectedEditors, {
      args: [0, -Z],
      checker: U
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], l.translateSelectedEditors, {
      args: [0, -F],
      checker: U
    }], [["ArrowDown", "mac+ArrowDown"], l.translateSelectedEditors, {
      args: [0, Z],
      checker: U
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], l.translateSelectedEditors, {
      args: [0, F],
      checker: U
    }]]));
  }
  destroy() {
    var l, U, d;
    (l = Q(this, u0)) == null || l.abort(), m(this, u0, null), this._signal = null, this._eventBus._off("editingaction", Q(this, TQ)), this._eventBus._off("pagechanging", Q(this, GQ)), this._eventBus._off("scalechanging", Q(this, JQ)), this._eventBus._off("rotationchanging", Q(this, SQ));
    for (const Z of Q(this, Kl).values())
      Z.destroy();
    Q(this, Kl).clear(), Q(this, Dl).clear(), Q(this, iF).clear(), m(this, pU, null), Q(this, Vl).clear(), Q(this, AU).destroy(), (U = Q(this, p0)) == null || U.destroy(), (d = Q(this, ad)) == null || d.hide(), m(this, ad, null), Q(this, bd) && (clearTimeout(Q(this, bd)), m(this, bd, null)), Q(this, md) && (clearTimeout(Q(this, md)), m(this, md, null));
  }
  async mlGuess(l) {
    var U;
    return ((U = Q(this, z0)) == null ? void 0 : U.guess(l)) || null;
  }
  get hasMLManager() {
    return !!Q(this, z0);
  }
  get hcmFilter() {
    return Fl(this, "hcmFilter", Q(this, TF) ? Q(this, VQ).addHCMFilter(Q(this, TF).foreground, Q(this, TF).background) : "none");
  }
  get direction() {
    return Fl(this, "direction", getComputedStyle(Q(this, gd)).direction);
  }
  get highlightColors() {
    return Fl(this, "highlightColors", Q(this, o0) ? new Map(Q(this, o0).split(",").map((l) => l.split("=").map((U) => U.trim()))) : null);
  }
  get highlightColorNames() {
    return Fl(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (l) => l.reverse())) : null);
  }
  setMainHighlightColorPicker(l) {
    m(this, NQ, l);
  }
  editAltText(l) {
    var U;
    (U = Q(this, p0)) == null || U.editAltText(this, l);
  }
  onPageChanging({
    pageNumber: l
  }) {
    m(this, L0, l - 1);
  }
  focusMainContainer() {
    Q(this, gd).focus();
  }
  findParent(l, U) {
    for (const d of Q(this, Kl).values()) {
      const {
        x: Z,
        y: F,
        width: W,
        height: t
      } = d.div.getBoundingClientRect();
      if (l >= Z && l <= Z + W && U >= F && U <= F + t)
        return d;
    }
    return null;
  }
  disableUserSelect(l = !1) {
    Q(this, YQ).classList.toggle("noUserSelect", l);
  }
  addShouldRescale(l) {
    Q(this, iF).add(l);
  }
  removeShouldRescale(l) {
    Q(this, iF).delete(l);
  }
  onScaleChanging({
    scale: l
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = l * AZ.PDF_TO_CSS_UNITS;
    for (const U of Q(this, iF))
      U.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: l
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = l;
  }
  highlightSelection(l = "") {
    const U = document.getSelection();
    if (!U || U.isCollapsed)
      return;
    const {
      anchorNode: d,
      anchorOffset: Z,
      focusNode: F,
      focusOffset: W
    } = U, t = U.toString(), R = h(this, o, ct).call(this, U).closest(".textLayer"), N = this.getSelectionBoxes(R);
    if (N) {
      U.empty(), Q(this, gl) === Ul.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: Ul.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const s of Q(this, Kl).values())
        if (s.hasTextLayer(R)) {
          s.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: l,
            boxes: N,
            anchorNode: d,
            anchorOffset: Z,
            focusNode: F,
            focusOffset: W,
            text: t
          });
          break;
        }
    }
  }
  addToAnnotationStorage(l) {
    !l.isEmpty() && Q(this, rd) && !Q(this, rd).has(l.id) && Q(this, rd).setValue(l.id, l);
  }
  blur() {
    if (this.isShiftKeyDown = !1, Q(this, pZ) && (m(this, pZ, !1), h(this, o, tt).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: l
    } = document;
    for (const U of Q(this, Vl))
      if (U.div.contains(l)) {
        m(this, MF, [U, l]), U._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!Q(this, MF))
      return;
    const [l, U] = Q(this, MF);
    m(this, MF, null), U.addEventListener("focusin", () => {
      l._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), U.focus();
  }
  addEditListeners() {
    h(this, o, ZR).call(this), h(this, o, FR).call(this);
  }
  removeEditListeners() {
    h(this, o, cn).call(this), h(this, o, WR).call(this);
  }
  dragOver(l) {
    for (const {
      type: U
    } of l.dataTransfer.items)
      for (const d of Q(this, _U))
        if (d.isHandlingMimeForPasting(U)) {
          l.dataTransfer.dropEffect = "copy", l.preventDefault();
          return;
        }
  }
  drop(l) {
    for (const U of l.dataTransfer.items)
      for (const d of Q(this, _U))
        if (d.isHandlingMimeForPasting(U.type)) {
          d.paste(U, this.currentLayer), l.preventDefault();
          return;
        }
  }
  copy(l) {
    var d;
    if (l.preventDefault(), (d = Q(this, pU)) == null || d.commitOrRemove(), !this.hasSelection)
      return;
    const U = [];
    for (const Z of Q(this, Vl)) {
      const F = Z.serialize(!0);
      F && U.push(F);
    }
    U.length !== 0 && l.clipboardData.setData("application/pdfjs", JSON.stringify(U));
  }
  cut(l) {
    this.copy(l), this.delete();
  }
  paste(l) {
    l.preventDefault();
    const {
      clipboardData: U
    } = l;
    for (const F of U.items)
      for (const W of Q(this, _U))
        if (W.isHandlingMimeForPasting(F.type)) {
          W.paste(F, this.currentLayer);
          return;
        }
    let d = U.getData("application/pdfjs");
    if (!d)
      return;
    try {
      d = JSON.parse(d);
    } catch (F) {
      f(`paste: "${F.message}".`);
      return;
    }
    if (!Array.isArray(d))
      return;
    this.unselectAll();
    const Z = this.currentLayer;
    try {
      const F = [];
      for (const V of d) {
        const R = Z.deserialize(V);
        if (!R)
          return;
        F.push(R);
      }
      const W = () => {
        for (const V of F)
          h(this, o, QR).call(this, V);
        h(this, o, cR).call(this, F);
      }, t = () => {
        for (const V of F)
          V.remove();
      };
      this.addCommands({
        cmd: W,
        undo: t,
        mustExec: !0
      });
    } catch (F) {
      f(`paste: "${F.message}".`);
    }
  }
  keydown(l) {
    !this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !0), Q(this, gl) !== Ul.NONE && !this.isEditorHandlingKeyboard && X0._keyboardManager.exec(this, l);
  }
  keyup(l) {
    this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !1, Q(this, pZ) && (m(this, pZ, !1), h(this, o, tt).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: l
  }) {
    switch (l) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[l]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(l) {
    l ? (h(this, o, Wn).call(this), h(this, o, FR).call(this), h(this, o, cU).call(this, {
      isEditing: Q(this, gl) !== Ul.NONE,
      isEmpty: h(this, o, EW).call(this),
      hasSomethingToUndo: Q(this, AU).hasSomethingToUndo(),
      hasSomethingToRedo: Q(this, AU).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (h(this, o, Qn).call(this), h(this, o, WR).call(this), h(this, o, cU).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(l) {
    if (!Q(this, _U)) {
      m(this, _U, l);
      for (const U of Q(this, _U))
        h(this, o, JZ).call(this, U.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return Q(this, At).id;
  }
  get currentLayer() {
    return Q(this, Kl).get(Q(this, L0));
  }
  getLayer(l) {
    return Q(this, Kl).get(l);
  }
  get currentPageIndex() {
    return Q(this, L0);
  }
  addLayer(l) {
    Q(this, Kl).set(l.pageIndex, l), Q(this, yZ) ? l.enable() : l.disable();
  }
  removeLayer(l) {
    Q(this, Kl).delete(l.pageIndex);
  }
  updateMode(l, U = null, d = !1) {
    if (Q(this, gl) !== l) {
      if (m(this, gl, l), l === Ul.NONE) {
        this.setEditingState(!1), h(this, o, Rn).call(this);
        return;
      }
      this.setEditingState(!0), h(this, o, Vn).call(this), this.unselectAll();
      for (const Z of Q(this, Kl).values())
        Z.updateMode(l);
      if (!U && d) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (U) {
        for (const Z of Q(this, Dl).values())
          if (Z.annotationElementId === U) {
            this.setSelected(Z), Z.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(l) {
    l !== Q(this, gl) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: l
    });
  }
  updateParams(l, U) {
    var d;
    if (Q(this, _U)) {
      switch (l) {
        case g.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case g.HIGHLIGHT_DEFAULT_COLOR:
          (d = Q(this, NQ)) == null || d.updateColor(U);
          break;
        case g.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (Q(this, sQ) || m(this, sQ, /* @__PURE__ */ new Map())).set(l, U), this.showAllEditors("highlight", U);
          break;
      }
      for (const Z of Q(this, Vl))
        Z.updateParams(l, U);
      for (const Z of Q(this, _U))
        Z.updateDefaultParams(l, U);
    }
  }
  showAllEditors(l, U, d = !1) {
    var F;
    for (const W of Q(this, Dl).values())
      W.editorType === l && W.show(U);
    (((F = Q(this, sQ)) == null ? void 0 : F.get(g.HIGHLIGHT_SHOW_ALL)) ?? !0) !== U && h(this, o, JZ).call(this, [[g.HIGHLIGHT_SHOW_ALL, U]]);
  }
  enableWaiting(l = !1) {
    if (Q(this, RQ) !== l) {
      m(this, RQ, l);
      for (const U of Q(this, Kl).values())
        l ? U.disableClick() : U.enableClick(), U.div.classList.toggle("waiting", l);
    }
  }
  getEditors(l) {
    const U = [];
    for (const d of Q(this, Dl).values())
      d.pageIndex === l && U.push(d);
    return U;
  }
  getEditor(l) {
    return Q(this, Dl).get(l);
  }
  addEditor(l) {
    Q(this, Dl).set(l.id, l);
  }
  removeEditor(l) {
    var U;
    l.div.contains(document.activeElement) && (Q(this, bd) && clearTimeout(Q(this, bd)), m(this, bd, setTimeout(() => {
      this.focusMainContainer(), m(this, bd, null);
    }, 0))), Q(this, Dl).delete(l.id), this.unselect(l), (!l.annotationElementId || !Q(this, hF).has(l.annotationElementId)) && ((U = Q(this, rd)) == null || U.remove(l.id));
  }
  addDeletedAnnotationElement(l) {
    Q(this, hF).add(l.annotationElementId), this.addChangedExistingAnnotation(l), l.deleted = !0;
  }
  isDeletedAnnotationElement(l) {
    return Q(this, hF).has(l);
  }
  removeDeletedAnnotationElement(l) {
    Q(this, hF).delete(l.annotationElementId), this.removeChangedExistingAnnotation(l), l.deleted = !1;
  }
  setActiveEditor(l) {
    Q(this, pU) !== l && (m(this, pU, l), l && h(this, o, JZ).call(this, l.propertiesToUpdate));
  }
  updateUI(l) {
    Q(this, o, Nn) === l && h(this, o, JZ).call(this, l.propertiesToUpdate);
  }
  toggleSelected(l) {
    if (Q(this, Vl).has(l)) {
      Q(this, Vl).delete(l), l.unselect(), h(this, o, cU).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    Q(this, Vl).add(l), l.select(), h(this, o, JZ).call(this, l.propertiesToUpdate), h(this, o, cU).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(l) {
    for (const U of Q(this, Vl))
      U !== l && U.unselect();
    Q(this, Vl).clear(), Q(this, Vl).add(l), l.select(), h(this, o, JZ).call(this, l.propertiesToUpdate), h(this, o, cU).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(l) {
    return Q(this, Vl).has(l);
  }
  get firstSelectedEditor() {
    return Q(this, Vl).values().next().value;
  }
  unselect(l) {
    l.unselect(), Q(this, Vl).delete(l), h(this, o, cU).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return Q(this, Vl).size !== 0;
  }
  get isEnterHandled() {
    return Q(this, Vl).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    Q(this, AU).undo(), h(this, o, cU).call(this, {
      hasSomethingToUndo: Q(this, AU).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: h(this, o, EW).call(this)
    });
  }
  redo() {
    Q(this, AU).redo(), h(this, o, cU).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: Q(this, AU).hasSomethingToRedo(),
      isEmpty: h(this, o, EW).call(this)
    });
  }
  addCommands(l) {
    Q(this, AU).add(l), h(this, o, cU).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: h(this, o, EW).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const l = [...Q(this, Vl)], U = () => {
      for (const Z of l)
        Z.remove();
    }, d = () => {
      for (const Z of l)
        h(this, o, QR).call(this, Z);
    };
    this.addCommands({
      cmd: U,
      undo: d,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var l;
    (l = Q(this, pU)) == null || l.commitOrRemove();
  }
  hasSomethingToControl() {
    return Q(this, pU) || this.hasSelection;
  }
  selectAll() {
    for (const l of Q(this, Vl))
      l.commit();
    h(this, o, cR).call(this, Q(this, Dl).values());
  }
  unselectAll() {
    if (!(Q(this, pU) && (Q(this, pU).commitOrRemove(), Q(this, gl) !== Ul.NONE)) && this.hasSelection) {
      for (const l of Q(this, Vl))
        l.unselect();
      Q(this, Vl).clear(), h(this, o, cU).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(l, U, d = !1) {
    if (d || this.commitOrRemove(), !this.hasSelection)
      return;
    Q(this, LZ)[0] += l, Q(this, LZ)[1] += U;
    const [Z, F] = Q(this, LZ), W = [...Q(this, Vl)], t = 1e3;
    Q(this, md) && clearTimeout(Q(this, md)), m(this, md, setTimeout(() => {
      m(this, md, null), Q(this, LZ)[0] = Q(this, LZ)[1] = 0, this.addCommands({
        cmd: () => {
          for (const V of W)
            Q(this, Dl).has(V.id) && V.translateInPage(Z, F);
        },
        undo: () => {
          for (const V of W)
            Q(this, Dl).has(V.id) && V.translateInPage(-Z, -F);
        },
        mustExec: !1
      });
    }, t));
    for (const V of W)
      V.translateInPage(l, U);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), m(this, nd, /* @__PURE__ */ new Map());
      for (const l of Q(this, Vl))
        Q(this, nd).set(l, {
          savedX: l.x,
          savedY: l.y,
          savedPageIndex: l.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!Q(this, nd))
      return !1;
    this.disableUserSelect(!1);
    const l = Q(this, nd);
    m(this, nd, null);
    let U = !1;
    for (const [{
      x: Z,
      y: F,
      pageIndex: W
    }, t] of l)
      t.newX = Z, t.newY = F, t.newPageIndex = W, U || (U = Z !== t.savedX || F !== t.savedY || W !== t.savedPageIndex);
    if (!U)
      return !1;
    const d = (Z, F, W, t) => {
      if (Q(this, Dl).has(Z.id)) {
        const V = Q(this, Kl).get(t);
        V ? Z._setParentAndPosition(V, F, W) : (Z.pageIndex = t, Z.x = F, Z.y = W);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [Z, {
          newX: F,
          newY: W,
          newPageIndex: t
        }] of l)
          d(Z, F, W, t);
      },
      undo: () => {
        for (const [Z, {
          savedX: F,
          savedY: W,
          savedPageIndex: t
        }] of l)
          d(Z, F, W, t);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(l, U) {
    if (Q(this, nd))
      for (const d of Q(this, nd).keys())
        d.drag(l, U);
  }
  rebuild(l) {
    if (l.parent === null) {
      const U = this.getLayer(l.pageIndex);
      U ? (U.changeParent(l), U.addOrRebuild(l)) : (this.addEditor(l), this.addToAnnotationStorage(l), l.rebuild());
    } else
      l.parent.addOrRebuild(l);
  }
  get isEditorHandlingKeyboard() {
    var l;
    return ((l = this.getActive()) == null ? void 0 : l.shouldGetKeyboardEvents()) || Q(this, Vl).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(l) {
    return Q(this, pU) === l;
  }
  getActive() {
    return Q(this, pU);
  }
  getMode() {
    return Q(this, gl);
  }
  get imageManager() {
    return Fl(this, "imageManager", new lR());
  }
  getSelectionBoxes(l) {
    if (!l)
      return null;
    const U = document.getSelection();
    for (let R = 0, N = U.rangeCount; R < N; R++)
      if (!l.contains(U.getRangeAt(R).commonAncestorContainer))
        return null;
    const {
      x: d,
      y: Z,
      width: F,
      height: W
    } = l.getBoundingClientRect();
    let t;
    switch (l.getAttribute("data-main-rotation")) {
      case "90":
        t = (R, N, s, n) => ({
          x: (N - Z) / W,
          y: 1 - (R + s - d) / F,
          width: n / W,
          height: s / F
        });
        break;
      case "180":
        t = (R, N, s, n) => ({
          x: 1 - (R + s - d) / F,
          y: 1 - (N + n - Z) / W,
          width: s / F,
          height: n / W
        });
        break;
      case "270":
        t = (R, N, s, n) => ({
          x: 1 - (N + n - Z) / W,
          y: (R - d) / F,
          width: n / W,
          height: s / F
        });
        break;
      default:
        t = (R, N, s, n) => ({
          x: (R - d) / F,
          y: (N - Z) / W,
          width: s / F,
          height: n / W
        });
        break;
    }
    const V = [];
    for (let R = 0, N = U.rangeCount; R < N; R++) {
      const s = U.getRangeAt(R);
      if (!s.collapsed)
        for (const {
          x: n,
          y: b,
          width: a,
          height: M
        } of s.getClientRects())
          a === 0 || M === 0 || V.push(t(n, b, a, M));
    }
    return V.length === 0 ? null : V;
  }
  addChangedExistingAnnotation({
    annotationElementId: l,
    id: U
  }) {
    (Q(this, y0) || m(this, y0, /* @__PURE__ */ new Map())).set(l, U);
  }
  removeChangedExistingAnnotation({
    annotationElementId: l
  }) {
    var U;
    (U = Q(this, y0)) == null || U.delete(l);
  }
  renderAnnotationElement(l) {
    var Z;
    const U = (Z = Q(this, y0)) == null ? void 0 : Z.get(l.data.id);
    if (!U)
      return;
    const d = Q(this, rd).getRawValue(U);
    d && (Q(this, gl) === Ul.NONE && !d.hasBeenModified || d.renderAnnotationElement(l));
  }
};
u0 = new WeakMap(), pU = new WeakMap(), Dl = new WeakMap(), Kl = new WeakMap(), p0 = new WeakMap(), rd = new WeakMap(), y0 = new WeakMap(), AU = new WeakMap(), L0 = new WeakMap(), hF = new WeakMap(), nd = new WeakMap(), _U = new WeakMap(), iF = new WeakMap(), tQ = new WeakMap(), VQ = new WeakMap(), bd = new WeakMap(), o0 = new WeakMap(), pZ = new WeakMap(), ad = new WeakMap(), At = new WeakMap(), yZ = new WeakMap(), RQ = new WeakMap(), MF = new WeakMap(), NQ = new WeakMap(), z0 = new WeakMap(), gl = new WeakMap(), Vl = new WeakMap(), Kd = new WeakMap(), TF = new WeakMap(), sQ = new WeakMap(), nQ = new WeakMap(), bQ = new WeakMap(), aQ = new WeakMap(), mQ = new WeakMap(), hQ = new WeakMap(), iQ = new WeakMap(), MQ = new WeakMap(), TQ = new WeakMap(), GQ = new WeakMap(), JQ = new WeakMap(), SQ = new WeakMap(), XQ = new WeakMap(), LZ = new WeakMap(), md = new WeakMap(), gd = new WeakMap(), YQ = new WeakMap(), o = new WeakSet(), ct = function({
  anchorNode: l
}) {
  return l.nodeType === Node.TEXT_NODE ? l.parentElement : l;
}, dn = function() {
  const l = document.getSelection();
  if (!l || l.isCollapsed)
    return;
  const d = h(this, o, ct).call(this, l).closest(".textLayer"), Z = this.getSelectionBoxes(d);
  Z && (Q(this, ad) || m(this, ad, new Km(this)), Q(this, ad).show(d, Z, this.direction === "ltr"));
}, Zn = function() {
  var F, W, t;
  const l = document.getSelection();
  if (!l || l.isCollapsed) {
    Q(this, Kd) && ((F = Q(this, ad)) == null || F.hide(), m(this, Kd, null), h(this, o, cU).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: U
  } = l;
  if (U === Q(this, Kd))
    return;
  if (!h(this, o, ct).call(this, l).closest(".textLayer")) {
    Q(this, Kd) && ((W = Q(this, ad)) == null || W.hide(), m(this, Kd, null), h(this, o, cU).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((t = Q(this, ad)) == null || t.hide(), m(this, Kd, U), h(this, o, cU).call(this, {
    hasSelectedText: !0
  }), !(Q(this, gl) !== Ul.HIGHLIGHT && Q(this, gl) !== Ul.NONE) && (Q(this, gl) === Ul.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), m(this, pZ, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const V = this._signal, R = (N) => {
      N.type === "pointerup" && N.button !== 0 || (window.removeEventListener("pointerup", R), window.removeEventListener("blur", R), N.type === "pointerup" && h(this, o, tt).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", R, {
      signal: V
    }), window.addEventListener("blur", R, {
      signal: V
    });
  }
}, tt = function(l = "") {
  Q(this, gl) === Ul.HIGHLIGHT ? this.highlightSelection(l) : Q(this, tQ) && h(this, o, dn).call(this);
}, Fn = function() {
  document.addEventListener("selectionchange", h(this, o, Zn).bind(this), {
    signal: this._signal
  });
}, Wn = function() {
  const l = this._signal;
  window.addEventListener("focus", Q(this, bQ), {
    signal: l
  }), window.addEventListener("blur", Q(this, nQ), {
    signal: l
  });
}, Qn = function() {
  window.removeEventListener("focus", Q(this, bQ)), window.removeEventListener("blur", Q(this, nQ));
}, ZR = function() {
  const l = this._signal;
  window.addEventListener("keydown", Q(this, iQ), {
    signal: l
  }), window.addEventListener("keyup", Q(this, MQ), {
    signal: l
  });
}, cn = function() {
  window.removeEventListener("keydown", Q(this, iQ)), window.removeEventListener("keyup", Q(this, MQ));
}, FR = function() {
  const l = this._signal;
  document.addEventListener("copy", Q(this, aQ), {
    signal: l
  }), document.addEventListener("cut", Q(this, mQ), {
    signal: l
  }), document.addEventListener("paste", Q(this, hQ), {
    signal: l
  });
}, WR = function() {
  document.removeEventListener("copy", Q(this, aQ)), document.removeEventListener("cut", Q(this, mQ)), document.removeEventListener("paste", Q(this, hQ));
}, tn = function() {
  const l = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: l
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: l
  });
}, cU = function(l) {
  Object.entries(l).some(([d, Z]) => Q(this, XQ)[d] !== Z) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(Q(this, XQ), l)
  }), Q(this, gl) === Ul.HIGHLIGHT && l.hasSelectedEditor === !1 && h(this, o, JZ).call(this, [[g.HIGHLIGHT_FREE, !0]]));
}, JZ = function(l) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: l
  });
}, Vn = function() {
  if (!Q(this, yZ)) {
    m(this, yZ, !0);
    for (const l of Q(this, Kl).values())
      l.enable();
    for (const l of Q(this, Dl).values())
      l.enable();
  }
}, Rn = function() {
  if (this.unselectAll(), Q(this, yZ)) {
    m(this, yZ, !1);
    for (const l of Q(this, Kl).values())
      l.disable();
    for (const l of Q(this, Dl).values())
      l.disable();
  }
}, QR = function(l) {
  const U = Q(this, Kl).get(l.pageIndex);
  U ? U.addOrRebuild(l) : (this.addEditor(l), this.addToAnnotationStorage(l));
}, Nn = function() {
  let l = null;
  for (l of Q(this, Vl))
    ;
  return l;
}, EW = function() {
  if (Q(this, Dl).size === 0)
    return !0;
  if (Q(this, Dl).size === 1)
    for (const l of Q(this, Dl).values())
      return l.isEmpty();
  return !1;
}, cR = function(l) {
  for (const U of Q(this, Vl))
    U.unselect();
  Q(this, Vl).clear();
  for (const U of l)
    U.isEmpty() || (Q(this, Vl).add(U), U.select());
  h(this, o, cU).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, v(X0, "TRANSLATE_SMALL", 1), v(X0, "TRANSLATE_BIG", 10);
let c0 = X0;
var Hd, vd, qU, Pd, yU, D0, $U, BQ, tR;
const Cd = class Cd {
  constructor(l) {
    i(this, BQ);
    i(this, Hd, "");
    i(this, vd, !1);
    i(this, qU, null);
    i(this, Pd, null);
    i(this, yU, null);
    i(this, D0, !1);
    i(this, $U, null);
    m(this, $U, l);
  }
  static initialize(l) {
    Cd._l10nPromise || (Cd._l10nPromise = l);
  }
  async render() {
    const l = m(this, qU, document.createElement("button"));
    l.className = "altText";
    const U = await Cd._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    l.textContent = U, l.setAttribute("aria-label", U), l.tabIndex = "0";
    const d = Q(this, $U)._uiManager._signal;
    l.addEventListener("contextmenu", GU, {
      signal: d
    }), l.addEventListener("pointerdown", (F) => F.stopPropagation(), {
      signal: d
    });
    const Z = (F) => {
      F.preventDefault(), Q(this, $U)._uiManager.editAltText(Q(this, $U));
    };
    return l.addEventListener("click", Z, {
      capture: !0,
      signal: d
    }), l.addEventListener("keydown", (F) => {
      F.target === l && F.key === "Enter" && (m(this, D0, !0), Z(F));
    }, {
      signal: d
    }), await h(this, BQ, tR).call(this), l;
  }
  finish() {
    Q(this, qU) && (Q(this, qU).focus({
      focusVisible: Q(this, D0)
    }), m(this, D0, !1));
  }
  isEmpty() {
    return !Q(this, Hd) && !Q(this, vd);
  }
  get data() {
    return {
      altText: Q(this, Hd),
      decorative: Q(this, vd)
    };
  }
  set data({
    altText: l,
    decorative: U
  }) {
    Q(this, Hd) === l && Q(this, vd) === U || (m(this, Hd, l), m(this, vd, U), h(this, BQ, tR).call(this));
  }
  toggle(l = !1) {
    Q(this, qU) && (!l && Q(this, yU) && (clearTimeout(Q(this, yU)), m(this, yU, null)), Q(this, qU).disabled = !l);
  }
  destroy() {
    var l;
    (l = Q(this, qU)) == null || l.remove(), m(this, qU, null), m(this, Pd, null);
  }
};
Hd = new WeakMap(), vd = new WeakMap(), qU = new WeakMap(), Pd = new WeakMap(), yU = new WeakMap(), D0 = new WeakMap(), $U = new WeakMap(), BQ = new WeakSet(), tR = async function() {
  var Z;
  const l = Q(this, qU);
  if (!l)
    return;
  if (!Q(this, Hd) && !Q(this, vd)) {
    l.classList.remove("done"), (Z = Q(this, Pd)) == null || Z.remove();
    return;
  }
  l.classList.add("done"), Cd._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((F) => {
    l.setAttribute("aria-label", F);
  });
  let U = Q(this, Pd);
  if (!U) {
    m(this, Pd, U = document.createElement("span")), U.className = "tooltip", U.setAttribute("role", "tooltip");
    const F = U.id = `alt-text-tooltip-${Q(this, $U).id}`;
    l.setAttribute("aria-describedby", F);
    const W = 100, t = Q(this, $U)._uiManager._signal;
    t.addEventListener("abort", () => {
      clearTimeout(Q(this, yU)), m(this, yU, null);
    }, {
      once: !0
    }), l.addEventListener("mouseenter", () => {
      m(this, yU, setTimeout(() => {
        m(this, yU, null), Q(this, Pd).classList.add("show"), Q(this, $U)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, W));
    }, {
      signal: t
    }), l.addEventListener("mouseleave", () => {
      var V;
      Q(this, yU) && (clearTimeout(Q(this, yU)), m(this, yU, null)), (V = Q(this, Pd)) == null || V.classList.remove("show");
    }, {
      signal: t
    });
  }
  U.innerText = Q(this, vd) ? await Cd._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : Q(this, Hd), U.parentNode || l.append(U);
  const d = Q(this, $U).getImageForAltText();
  d == null || d.setAttribute("aria-describedby", U.id);
}, v(Cd, "_l10nPromise", null);
let Ct = Cd;
var GF, ld, dU, k0, JF, Hl, SF, I0, E0, ZU, eQ, XF, oZ, uQ, YF, fd, hd, C0, w0, jU, pQ, _t, A, VR, yQ, RR, NR, sn, nn, sR, nR, bR, bn, an, mn, hn, aR, CW;
const al = class al {
  constructor(l) {
    i(this, A);
    i(this, GF, null);
    i(this, ld, null);
    i(this, dU, null);
    i(this, k0, !1);
    i(this, JF, !1);
    i(this, Hl, null);
    i(this, SF, null);
    i(this, I0, this.focusin.bind(this));
    i(this, E0, this.focusout.bind(this));
    i(this, ZU, null);
    i(this, eQ, "");
    i(this, XF, !1);
    i(this, oZ, null);
    i(this, uQ, !1);
    i(this, YF, !1);
    i(this, fd, !1);
    i(this, hd, null);
    i(this, C0, 0);
    i(this, w0, 0);
    i(this, jU, null);
    v(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    v(this, "_isVisible", !0);
    v(this, "_uiManager", null);
    v(this, "_focusEventsAllowed", !0);
    v(this, "_l10nPromise", null);
    i(this, pQ, !1);
    i(this, _t, al._zIndex++);
    this.constructor === al && nl("Cannot initialize AnnotationEditor."), this.parent = l.parent, this.id = l.id, this.width = this.height = null, this.pageIndex = l.parent.pageIndex, this.name = l.name, this.div = null, this._uiManager = l.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = l.isCentered, this._structTreeParentId = null;
    const {
      rotation: U,
      rawDims: {
        pageWidth: d,
        pageHeight: Z,
        pageX: F,
        pageY: W
      }
    } = this.parent.viewport;
    this.rotation = U, this.pageRotation = (360 + U - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [d, Z], this.pageTranslation = [F, W];
    const [t, V] = this.parentDimensions;
    this.x = l.x / t, this.y = l.y / V, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const l = al.prototype._resizeWithKeyboard, U = c0.TRANSLATE_SMALL, d = c0.TRANSLATE_BIG;
    return Fl(this, "_resizerKeyboardManager", new wc([[["ArrowLeft", "mac+ArrowLeft"], l, {
      args: [-U, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], l, {
      args: [-d, 0]
    }], [["ArrowRight", "mac+ArrowRight"], l, {
      args: [U, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], l, {
      args: [d, 0]
    }], [["ArrowUp", "mac+ArrowUp"], l, {
      args: [0, -U]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], l, {
      args: [0, -d]
    }], [["ArrowDown", "mac+ArrowDown"], l, {
      args: [0, U]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], l, {
      args: [0, d]
    }], [["Escape", "mac+Escape"], al.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return Fl(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(l) {
    const U = new Pm({
      id: l.parent.getNextId(),
      parent: l.parent,
      uiManager: l._uiManager
    });
    U.annotationElementId = l.annotationElementId, U.deleted = !0, U._uiManager.addToAnnotationStorage(U);
  }
  static initialize(l, U, d) {
    if (al._l10nPromise || (al._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((F) => [F, l.get(F.replaceAll(/([A-Z])/g, (W) => `-${W.toLowerCase()}`))]))), d != null && d.strings)
      for (const F of d.strings)
        al._l10nPromise.set(F, l.get(F));
    if (al._borderLineWidth !== -1)
      return;
    const Z = getComputedStyle(document.documentElement);
    al._borderLineWidth = parseFloat(Z.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(l, U) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(l) {
    return !1;
  }
  static paste(l, U) {
    nl("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return Q(this, pQ);
  }
  set _isDraggable(l) {
    var U;
    m(this, pQ, l), (U = this.div) == null || U.classList.toggle("draggable", l);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [l, U] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * U / (l * 2), this.y += this.width * l / (U * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * U / (l * 2), this.y -= this.width * l / (U * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(l) {
    this._uiManager.addCommands(l);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = Q(this, _t);
  }
  setParent(l) {
    l !== null ? (this.pageIndex = l.pageIndex, this.pageDimensions = l.pageDimensions) : h(this, A, CW).call(this), this.parent = l;
  }
  focusin(l) {
    this._focusEventsAllowed && (Q(this, XF) ? m(this, XF, !1) : this.parent.setSelected(this));
  }
  focusout(l) {
    var d;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const U = l.relatedTarget;
    U != null && U.closest(`#${this.id}`) || (l.preventDefault(), (d = this.parent) != null && d.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(l, U, d, Z) {
    const [F, W] = this.parentDimensions;
    [d, Z] = this.screenToPageTranslation(d, Z), this.x = (l + d) / F, this.y = (U + Z) / W, this.fixAndSetPosition();
  }
  translate(l, U) {
    h(this, A, VR).call(this, this.parentDimensions, l, U);
  }
  translateInPage(l, U) {
    Q(this, oZ) || m(this, oZ, [this.x, this.y]), h(this, A, VR).call(this, this.pageDimensions, l, U), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(l, U) {
    Q(this, oZ) || m(this, oZ, [this.x, this.y]);
    const [d, Z] = this.parentDimensions;
    if (this.x += l / d, this.y += U / Z, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: R,
        y: N
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, R, N) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: F,
      y: W
    } = this;
    const [t, V] = this.getBaseTranslation();
    F += t, W += V, this.div.style.left = `${(100 * F).toFixed(2)}%`, this.div.style.top = `${(100 * W).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!Q(this, oZ) && (Q(this, oZ)[0] !== this.x || Q(this, oZ)[1] !== this.y);
  }
  getBaseTranslation() {
    const [l, U] = this.parentDimensions, {
      _borderLineWidth: d
    } = al, Z = d / l, F = d / U;
    switch (this.rotation) {
      case 90:
        return [-Z, F];
      case 180:
        return [Z, F];
      case 270:
        return [Z, -F];
      default:
        return [-Z, -F];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(l = this.rotation) {
    const [U, d] = this.pageDimensions;
    let {
      x: Z,
      y: F,
      width: W,
      height: t
    } = this;
    if (W *= U, t *= d, Z *= U, F *= d, this._mustFixPosition)
      switch (l) {
        case 0:
          Z = Math.max(0, Math.min(U - W, Z)), F = Math.max(0, Math.min(d - t, F));
          break;
        case 90:
          Z = Math.max(0, Math.min(U - t, Z)), F = Math.min(d, Math.max(W, F));
          break;
        case 180:
          Z = Math.min(U, Math.max(W, Z)), F = Math.min(d, Math.max(t, F));
          break;
        case 270:
          Z = Math.min(U, Math.max(t, Z)), F = Math.max(0, Math.min(d - W, F));
          break;
      }
    this.x = Z /= U, this.y = F /= d;
    const [V, R] = this.getBaseTranslation();
    Z += V, F += R;
    const {
      style: N
    } = this.div;
    N.left = `${(100 * Z).toFixed(2)}%`, N.top = `${(100 * F).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(l, U) {
    var d;
    return h(d = al, yQ, RR).call(d, l, U, this.parentRotation);
  }
  pageTranslationToScreen(l, U) {
    var d;
    return h(d = al, yQ, RR).call(d, l, U, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: l,
      pageDimensions: [U, d]
    } = this, Z = U * l, F = d * l;
    return MU.isCSSRoundSupported ? [Math.round(Z), Math.round(F)] : [Z, F];
  }
  setDims(l, U) {
    const [d, Z] = this.parentDimensions;
    this.div.style.width = `${(100 * l / d).toFixed(2)}%`, Q(this, JF) || (this.div.style.height = `${(100 * U / Z).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: l
    } = this.div, {
      height: U,
      width: d
    } = l, Z = d.endsWith("%"), F = !Q(this, JF) && U.endsWith("%");
    if (Z && F)
      return;
    const [W, t] = this.parentDimensions;
    Z || (l.width = `${(100 * parseFloat(d) / W).toFixed(2)}%`), !Q(this, JF) && !F && (l.height = `${(100 * parseFloat(U) / t).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var l;
    (l = Q(this, dU)) == null || l.finish();
  }
  async addEditToolbar() {
    return Q(this, ZU) || Q(this, YF) ? Q(this, ZU) : (m(this, ZU, new qV(this)), this.div.append(Q(this, ZU).render()), Q(this, dU) && Q(this, ZU).addAltTextButton(await Q(this, dU).render()), Q(this, ZU));
  }
  removeEditToolbar() {
    var l;
    Q(this, ZU) && (Q(this, ZU).remove(), m(this, ZU, null), (l = Q(this, dU)) == null || l.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    Q(this, dU) || (Ct.initialize(al._l10nPromise), m(this, dU, new Ct(this)), Q(this, GF) && (Q(this, dU).data = Q(this, GF), m(this, GF, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var l;
    return (l = Q(this, dU)) == null ? void 0 : l.data;
  }
  set altTextData(l) {
    Q(this, dU) && (Q(this, dU).data = l);
  }
  hasAltText() {
    var l;
    return !((l = Q(this, dU)) != null && l.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = Q(this, k0) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground();
    const l = this._uiManager._signal;
    this.div.addEventListener("focusin", Q(this, I0), {
      signal: l
    }), this.div.addEventListener("focusout", Q(this, E0), {
      signal: l
    });
    const [U, d] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * d / U).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * U / d).toFixed(2)}%`);
    const [Z, F] = this.getInitialTranslation();
    return this.translate(Z, F), Et(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(l) {
    const {
      isMac: U
    } = MU.platform;
    if (l.button !== 0 || l.ctrlKey && U) {
      l.preventDefault();
      return;
    }
    if (m(this, XF, !0), this._isDraggable) {
      h(this, A, bn).call(this, l);
      return;
    }
    h(this, A, bR).call(this, l);
  }
  moveInDOM() {
    Q(this, hd) && clearTimeout(Q(this, hd)), m(this, hd, setTimeout(() => {
      var l;
      m(this, hd, null), (l = this.parent) == null || l.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(l, U, d) {
    l.changeParent(this), this.x = U, this.y = d, this.fixAndSetPosition();
  }
  getRect(l, U, d = this.rotation) {
    const Z = this.parentScale, [F, W] = this.pageDimensions, [t, V] = this.pageTranslation, R = l / Z, N = U / Z, s = this.x * F, n = this.y * W, b = this.width * F, a = this.height * W;
    switch (d) {
      case 0:
        return [s + R + t, W - n - N - a + V, s + R + b + t, W - n - N + V];
      case 90:
        return [s + N + t, W - n + R + V, s + N + a + t, W - n + R + b + V];
      case 180:
        return [s - R - b + t, W - n + N + V, s - R + t, W - n + N + a + V];
      case 270:
        return [s - N - a + t, W - n - R - b + V, s - N + t, W - n - R + V];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(l, U) {
    const [d, Z, F, W] = l, t = F - d, V = W - Z;
    switch (this.rotation) {
      case 0:
        return [d, U - W, t, V];
      case 90:
        return [d, U - Z, V, t];
      case 180:
        return [F, U - Z, t, V];
      case 270:
        return [F, U - W, V, t];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    m(this, YF, !0);
  }
  disableEditMode() {
    m(this, YF, !1);
  }
  isInEditMode() {
    return Q(this, YF);
  }
  shouldGetKeyboardEvents() {
    return Q(this, fd);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var U, d;
    const l = this._uiManager._signal;
    (U = this.div) == null || U.addEventListener("focusin", Q(this, I0), {
      signal: l
    }), (d = this.div) == null || d.addEventListener("focusout", Q(this, E0), {
      signal: l
    });
  }
  rotate(l) {
  }
  serialize(l = !1, U = null) {
    nl("An editor must be serializable");
  }
  static deserialize(l, U, d) {
    const Z = new this.prototype.constructor({
      parent: U,
      id: U.getNextId(),
      uiManager: d
    });
    Z.rotation = l.rotation, m(Z, GF, l.accessibilityData);
    const [F, W] = Z.pageDimensions, [t, V, R, N] = Z.getRectInCurrentCoords(l.rect, W);
    return Z.x = t / F, Z.y = V / W, Z.width = R / F, Z.height = N / W, Z;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", Q(this, I0)), this.div.removeEventListener("focusout", Q(this, E0)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), Q(this, hd) && (clearTimeout(Q(this, hd)), m(this, hd, null)), h(this, A, CW).call(this), this.removeEditToolbar(), Q(this, jU)) {
      for (const l of Q(this, jU).values())
        clearTimeout(l);
      m(this, jU, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (h(this, A, sn).call(this), Q(this, Hl).classList.remove("hidden"), Et(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(l) {
    if (!this.isResizable || l.target !== this.div || l.key !== "Enter")
      return;
    this._uiManager.setSelected(this), m(this, SF, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const U = Q(this, Hl).children;
    if (!Q(this, ld)) {
      m(this, ld, Array.from(U));
      const W = h(this, A, an).bind(this), t = h(this, A, mn).bind(this), V = this._uiManager._signal;
      for (const R of Q(this, ld)) {
        const N = R.getAttribute("data-resizer-name");
        R.setAttribute("role", "spinbutton"), R.addEventListener("keydown", W, {
          signal: V
        }), R.addEventListener("blur", t, {
          signal: V
        }), R.addEventListener("focus", h(this, A, hn).bind(this, N), {
          signal: V
        }), al._l10nPromise.get(`pdfjs-editor-resizer-label-${N}`).then((s) => R.setAttribute("aria-label", s));
      }
    }
    const d = Q(this, ld)[0];
    let Z = 0;
    for (const W of U) {
      if (W === d)
        break;
      Z++;
    }
    const F = (360 - this.rotation + this.parentRotation) % 360 / 90 * (Q(this, ld).length / 4);
    if (F !== Z) {
      if (F < Z)
        for (let t = 0; t < Z - F; t++)
          Q(this, Hl).append(Q(this, Hl).firstChild);
      else if (F > Z)
        for (let t = 0; t < F - Z; t++)
          Q(this, Hl).firstChild.before(Q(this, Hl).lastChild);
      let W = 0;
      for (const t of U) {
        const R = Q(this, ld)[W++].getAttribute("data-resizer-name");
        al._l10nPromise.get(`pdfjs-editor-resizer-label-${R}`).then((N) => t.setAttribute("aria-label", N));
      }
    }
    h(this, A, aR).call(this, 0), m(this, fd, !0), Q(this, Hl).firstChild.focus({
      focusVisible: !0
    }), l.preventDefault(), l.stopImmediatePropagation();
  }
  _resizeWithKeyboard(l, U) {
    Q(this, fd) && h(this, A, nR).call(this, Q(this, eQ), {
      movementX: l,
      movementY: U
    });
  }
  _stopResizingWithKeyboard() {
    h(this, A, CW).call(this), this.div.focus();
  }
  select() {
    var l, U;
    if (this.makeResizable(), (l = this.div) == null || l.classList.add("selectedEditor"), !Q(this, ZU)) {
      this.addEditToolbar().then(() => {
        var d, Z;
        (d = this.div) != null && d.classList.contains("selectedEditor") && ((Z = Q(this, ZU)) == null || Z.show());
      });
      return;
    }
    (U = Q(this, ZU)) == null || U.show();
  }
  unselect() {
    var l, U, d, Z;
    (l = Q(this, Hl)) == null || l.classList.add("hidden"), (U = this.div) == null || U.classList.remove("selectedEditor"), (d = this.div) != null && d.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (Z = Q(this, ZU)) == null || Z.hide();
  }
  updateParams(l, U) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return Q(this, uQ);
  }
  set isEditing(l) {
    m(this, uQ, l), this.parent && (l ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(l, U) {
    m(this, JF, !0);
    const d = l / U, {
      style: Z
    } = this.div;
    Z.aspectRatio = d, Z.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(l, U = !1) {
    if (U) {
      Q(this, jU) || m(this, jU, /* @__PURE__ */ new Map());
      const {
        action: d
      } = l;
      let Z = Q(this, jU).get(d);
      Z && clearTimeout(Z), Z = setTimeout(() => {
        this._reportTelemetry(l), Q(this, jU).delete(d), Q(this, jU).size === 0 && m(this, jU, null);
      }, al._telemetryTimeout), Q(this, jU).set(d, Z);
      return;
    }
    l.type || (l.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: l
      }
    });
  }
  show(l = this._isVisible) {
    this.div.classList.toggle("hidden", !l), this._isVisible = l;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), m(this, k0, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), m(this, k0, !0);
  }
  renderAnnotationElement(l) {
    let U = l.container.querySelector(".annotationContent");
    if (!U)
      U = document.createElement("div"), U.classList.add("annotationContent", this.editorType), l.container.prepend(U);
    else if (U.nodeName === "CANVAS") {
      const d = U;
      U = document.createElement("div"), U.classList.add("annotationContent", this.editorType), d.before(U);
    }
    return U;
  }
  resetAnnotationElement(l) {
    const {
      firstChild: U
    } = l.container;
    U.nodeName === "DIV" && U.classList.contains("annotationContent") && U.remove();
  }
};
GF = new WeakMap(), ld = new WeakMap(), dU = new WeakMap(), k0 = new WeakMap(), JF = new WeakMap(), Hl = new WeakMap(), SF = new WeakMap(), I0 = new WeakMap(), E0 = new WeakMap(), ZU = new WeakMap(), eQ = new WeakMap(), XF = new WeakMap(), oZ = new WeakMap(), uQ = new WeakMap(), YF = new WeakMap(), fd = new WeakMap(), hd = new WeakMap(), C0 = new WeakMap(), w0 = new WeakMap(), jU = new WeakMap(), pQ = new WeakMap(), _t = new WeakMap(), A = new WeakSet(), VR = function([l, U], d, Z) {
  [d, Z] = this.screenToPageTranslation(d, Z), this.x += d / l, this.y += Z / U, this.fixAndSetPosition();
}, yQ = new WeakSet(), RR = function(l, U, d) {
  switch (d) {
    case 90:
      return [U, -l];
    case 180:
      return [-l, -U];
    case 270:
      return [-U, l];
    default:
      return [l, U];
  }
}, NR = function(l) {
  switch (l) {
    case 90: {
      const [U, d] = this.pageDimensions;
      return [0, -U / d, d / U, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [U, d] = this.pageDimensions;
      return [0, U / d, -d / U, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, sn = function() {
  if (Q(this, Hl))
    return;
  m(this, Hl, document.createElement("div")), Q(this, Hl).classList.add("resizers");
  const l = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], U = this._uiManager._signal;
  for (const d of l) {
    const Z = document.createElement("div");
    Q(this, Hl).append(Z), Z.classList.add("resizer", d), Z.setAttribute("data-resizer-name", d), Z.addEventListener("pointerdown", h(this, A, nn).bind(this, d), {
      signal: U
    }), Z.addEventListener("contextmenu", GU, {
      signal: U
    }), Z.tabIndex = -1;
  }
  this.div.prepend(Q(this, Hl));
}, nn = function(l, U) {
  var M;
  U.preventDefault();
  const {
    isMac: d
  } = MU.platform;
  if (U.button !== 0 || U.ctrlKey && d)
    return;
  (M = Q(this, dU)) == null || M.toggle(!1);
  const Z = h(this, A, nR).bind(this, l), F = this._isDraggable;
  this._isDraggable = !1;
  const W = this._uiManager._signal, t = {
    passive: !0,
    capture: !0,
    signal: W
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", Z, t), window.addEventListener("contextmenu", GU, {
    signal: W
  });
  const V = this.x, R = this.y, N = this.width, s = this.height, n = this.parent.div.style.cursor, b = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(U.target).cursor;
  const a = () => {
    var G;
    this.parent.togglePointerEvents(!0), (G = Q(this, dU)) == null || G.toggle(!0), this._isDraggable = F, window.removeEventListener("pointerup", a), window.removeEventListener("blur", a), window.removeEventListener("pointermove", Z, t), window.removeEventListener("contextmenu", GU), this.parent.div.style.cursor = n, this.div.style.cursor = b, h(this, A, sR).call(this, V, R, N, s);
  };
  window.addEventListener("pointerup", a, {
    signal: W
  }), window.addEventListener("blur", a, {
    signal: W
  });
}, sR = function(l, U, d, Z) {
  const F = this.x, W = this.y, t = this.width, V = this.height;
  F === l && W === U && t === d && V === Z || this.addCommands({
    cmd: () => {
      this.width = t, this.height = V, this.x = F, this.y = W;
      const [R, N] = this.parentDimensions;
      this.setDims(R * t, N * V), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = d, this.height = Z, this.x = l, this.y = U;
      const [R, N] = this.parentDimensions;
      this.setDims(R * d, N * Z), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, nR = function(l, U) {
  const [d, Z] = this.parentDimensions, F = this.x, W = this.y, t = this.width, V = this.height, R = al.MIN_SIZE / d, N = al.MIN_SIZE / Z, s = (x) => Math.round(x * 1e4) / 1e4, n = h(this, A, NR).call(this, this.rotation), b = (x, w) => [n[0] * x + n[2] * w, n[1] * x + n[3] * w], a = h(this, A, NR).call(this, 360 - this.rotation), M = (x, w) => [a[0] * x + a[2] * w, a[1] * x + a[3] * w];
  let G, T, J = !1, Y = !1;
  switch (l) {
    case "topLeft":
      J = !0, G = (x, w) => [0, 0], T = (x, w) => [x, w];
      break;
    case "topMiddle":
      G = (x, w) => [x / 2, 0], T = (x, w) => [x / 2, w];
      break;
    case "topRight":
      J = !0, G = (x, w) => [x, 0], T = (x, w) => [0, w];
      break;
    case "middleRight":
      Y = !0, G = (x, w) => [x, w / 2], T = (x, w) => [0, w / 2];
      break;
    case "bottomRight":
      J = !0, G = (x, w) => [x, w], T = (x, w) => [0, 0];
      break;
    case "bottomMiddle":
      G = (x, w) => [x / 2, w], T = (x, w) => [x / 2, 0];
      break;
    case "bottomLeft":
      J = !0, G = (x, w) => [0, w], T = (x, w) => [x, 0];
      break;
    case "middleLeft":
      Y = !0, G = (x, w) => [0, w / 2], T = (x, w) => [x, w / 2];
      break;
  }
  const B = G(t, V), S = T(t, V);
  let X = b(...S);
  const e = s(F + X[0]), p = s(W + X[1]);
  let y = 1, j = 1, [D, ll] = this.screenToPageTranslation(U.movementX, U.movementY);
  if ([D, ll] = M(D / d, ll / Z), J) {
    const x = Math.hypot(t, V);
    y = j = Math.max(Math.min(Math.hypot(S[0] - B[0] - D, S[1] - B[1] - ll) / x, 1 / t, 1 / V), R / t, N / V);
  } else Y ? y = Math.max(R, Math.min(1, Math.abs(S[0] - B[0] - D))) / t : j = Math.max(N, Math.min(1, Math.abs(S[1] - B[1] - ll))) / V;
  const P = s(t * y), q = s(V * j);
  X = b(...T(P, q));
  const dl = e - X[0], Nl = p - X[1];
  this.width = P, this.height = q, this.x = dl, this.y = Nl, this.setDims(d * P, Z * q), this.fixAndSetPosition();
}, bR = function(l) {
  const {
    isMac: U
  } = MU.platform;
  l.ctrlKey && !U || l.shiftKey || l.metaKey && U ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, bn = function(l) {
  const U = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let d, Z;
  const F = this._uiManager._signal;
  U && (this.div.classList.add("moving"), d = {
    passive: !0,
    capture: !0,
    signal: F
  }, m(this, C0, l.clientX), m(this, w0, l.clientY), Z = (t) => {
    const {
      clientX: V,
      clientY: R
    } = t, [N, s] = this.screenToPageTranslation(V - Q(this, C0), R - Q(this, w0));
    m(this, C0, V), m(this, w0, R), this._uiManager.dragSelectedEditors(N, s);
  }, window.addEventListener("pointermove", Z, d));
  const W = () => {
    window.removeEventListener("pointerup", W), window.removeEventListener("blur", W), U && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", Z, d)), m(this, XF, !1), this._uiManager.endDragSession() || h(this, A, bR).call(this, l);
  };
  window.addEventListener("pointerup", W, {
    signal: F
  }), window.addEventListener("blur", W, {
    signal: F
  });
}, an = function(l) {
  al._resizerKeyboardManager.exec(this, l);
}, mn = function(l) {
  var U;
  Q(this, fd) && ((U = l.relatedTarget) == null ? void 0 : U.parentNode) !== Q(this, Hl) && h(this, A, CW).call(this);
}, hn = function(l) {
  m(this, eQ, Q(this, fd) ? l : "");
}, aR = function(l) {
  if (Q(this, ld))
    for (const U of Q(this, ld))
      U.tabIndex = l;
}, CW = function() {
  if (m(this, fd, !1), h(this, A, aR).call(this, -1), Q(this, SF)) {
    const {
      savedX: l,
      savedY: U,
      savedWidth: d,
      savedHeight: Z
    } = Q(this, SF);
    h(this, A, sR).call(this, l, U, d, Z), m(this, SF, null);
  }
}, i(al, yQ), v(al, "_borderLineWidth", -1), v(al, "_colorManager", new dR()), v(al, "_zIndex", 1), v(al, "_telemetryTimeout", 1e3);
let Rl = al;
class Pm extends Rl {
  constructor(l) {
    super(l), this.annotationElementId = l.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const $N = 3285377520, CU = 4294901760, Nd = 65535;
class Mn {
  constructor(l) {
    this.h1 = l ? l & 4294967295 : $N, this.h2 = l ? l & 4294967295 : $N;
  }
  update(l) {
    let U, d;
    if (typeof l == "string") {
      U = new Uint8Array(l.length * 2), d = 0;
      for (let M = 0, G = l.length; M < G; M++) {
        const T = l.charCodeAt(M);
        T <= 255 ? U[d++] = T : (U[d++] = T >>> 8, U[d++] = T & 255);
      }
    } else if (ArrayBuffer.isView(l))
      U = l.slice(), d = U.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const Z = d >> 2, F = d - Z * 4, W = new Uint32Array(U.buffer, 0, Z);
    let t = 0, V = 0, R = this.h1, N = this.h2;
    const s = 3432918353, n = 461845907, b = s & Nd, a = n & Nd;
    for (let M = 0; M < Z; M++)
      M & 1 ? (t = W[M], t = t * s & CU | t * b & Nd, t = t << 15 | t >>> 17, t = t * n & CU | t * a & Nd, R ^= t, R = R << 13 | R >>> 19, R = R * 5 + 3864292196) : (V = W[M], V = V * s & CU | V * b & Nd, V = V << 15 | V >>> 17, V = V * n & CU | V * a & Nd, N ^= V, N = N << 13 | N >>> 19, N = N * 5 + 3864292196);
    switch (t = 0, F) {
      case 3:
        t ^= U[Z * 4 + 2] << 16;
      case 2:
        t ^= U[Z * 4 + 1] << 8;
      case 1:
        t ^= U[Z * 4], t = t * s & CU | t * b & Nd, t = t << 15 | t >>> 17, t = t * n & CU | t * a & Nd, Z & 1 ? R ^= t : N ^= t;
    }
    this.h1 = R, this.h2 = N;
  }
  hexdigest() {
    let l = this.h1, U = this.h2;
    return l ^= U >>> 1, l = l * 3981806797 & CU | l * 36045 & Nd, U = U * 4283543511 & CU | ((U << 16 | l >>> 16) * 2950163797 & CU) >>> 16, l ^= U >>> 1, l = l * 444984403 & CU | l * 60499 & Nd, U = U * 3301882366 & CU | ((U << 16 | l >>> 16) * 3120437893 & CU) >>> 16, l ^= U >>> 1, (l >>> 0).toString(16).padStart(8, "0") + (U >>> 0).toString(16).padStart(8, "0");
  }
}
const mR = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var BF, vl, qt, Tn;
class XN {
  constructor() {
    i(this, qt);
    i(this, BF, !1);
    i(this, vl, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(l, U) {
    const d = Q(this, vl).get(l);
    return d === void 0 ? U : Object.assign(U, d);
  }
  getRawValue(l) {
    return Q(this, vl).get(l);
  }
  remove(l) {
    if (Q(this, vl).delete(l), Q(this, vl).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const U of Q(this, vl).values())
        if (U instanceof Rl)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(l, U) {
    const d = Q(this, vl).get(l);
    let Z = !1;
    if (d !== void 0)
      for (const [F, W] of Object.entries(U))
        d[F] !== W && (Z = !0, d[F] = W);
    else
      Z = !0, Q(this, vl).set(l, U);
    Z && h(this, qt, Tn).call(this), U instanceof Rl && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(U.constructor._type);
  }
  has(l) {
    return Q(this, vl).has(l);
  }
  getAll() {
    return Q(this, vl).size > 0 ? hN(Q(this, vl)) : null;
  }
  setAll(l) {
    for (const [U, d] of Object.entries(l))
      this.setValue(U, d);
  }
  get size() {
    return Q(this, vl).size;
  }
  resetModified() {
    Q(this, BF) && (m(this, BF, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Gn(this);
  }
  get serializable() {
    if (Q(this, vl).size === 0)
      return mR;
    const l = /* @__PURE__ */ new Map(), U = new Mn(), d = [], Z = /* @__PURE__ */ Object.create(null);
    let F = !1;
    for (const [W, t] of Q(this, vl)) {
      const V = t instanceof Rl ? t.serialize(!1, Z) : t;
      V && (l.set(W, V), U.update(`${W}:${JSON.stringify(V)}`), F || (F = !!V.bitmap));
    }
    if (F)
      for (const W of l.values())
        W.bitmap && d.push(W.bitmap);
    return l.size > 0 ? {
      map: l,
      hash: U.hexdigest(),
      transfer: d
    } : mR;
  }
  get editorStats() {
    let l = null;
    const U = /* @__PURE__ */ new Map();
    for (const d of Q(this, vl).values()) {
      if (!(d instanceof Rl))
        continue;
      const Z = d.telemetryFinalData;
      if (!Z)
        continue;
      const {
        type: F
      } = Z;
      U.has(F) || U.set(F, Object.getPrototypeOf(d).constructor), l || (l = /* @__PURE__ */ Object.create(null));
      const W = l[F] || (l[F] = /* @__PURE__ */ new Map());
      for (const [t, V] of Object.entries(Z)) {
        if (t === "type")
          continue;
        let R = W.get(t);
        R || (R = /* @__PURE__ */ new Map(), W.set(t, R));
        const N = R.get(V) ?? 0;
        R.set(V, N + 1);
      }
    }
    for (const [d, Z] of U)
      l[d] = Z.computeTelemetryFinalData(l[d]);
    return l;
  }
}
BF = new WeakMap(), vl = new WeakMap(), qt = new WeakSet(), Tn = function() {
  Q(this, BF) || (m(this, BF, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var LQ;
class Gn extends XN {
  constructor(U) {
    super();
    i(this, LQ);
    const {
      map: d,
      hash: Z,
      transfer: F
    } = U.serializable, W = structuredClone(d, F ? {
      transfer: F
    } : null);
    m(this, LQ, {
      map: W,
      hash: Z,
      transfer: F
    });
  }
  get print() {
    nl("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return Q(this, LQ);
  }
}
LQ = new WeakMap();
var x0;
class fm {
  constructor({
    ownerDocument: l = globalThis.document,
    styleElement: U = null
  }) {
    i(this, x0, /* @__PURE__ */ new Set());
    this._document = l, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(l) {
    this.nativeFontFaces.add(l), this._document.fonts.add(l);
  }
  removeNativeFontFace(l) {
    this.nativeFontFaces.delete(l), this._document.fonts.delete(l);
  }
  insertRule(l) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const U = this.styleElement.sheet;
    U.insertRule(l, U.cssRules.length);
  }
  clear() {
    for (const l of this.nativeFontFaces)
      this._document.fonts.delete(l);
    this.nativeFontFaces.clear(), Q(this, x0).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: l,
    _inspectFont: U
  }) {
    if (!(!l || Q(this, x0).has(l.loadedName))) {
      if (Cl(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: d,
          src: Z,
          style: F
        } = l, W = new FontFace(d, Z, F);
        this.addNativeFontFace(W);
        try {
          await W.load(), Q(this, x0).add(d), U == null || U(l);
        } catch {
          f(`Cannot load system font: ${l.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(W);
        }
        return;
      }
      nl("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(l) {
    if (l.attached || l.missingFile && !l.systemFontInfo)
      return;
    if (l.attached = !0, l.systemFontInfo) {
      await this.loadSystemFont(l);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const d = l.createNativeFontFace();
      if (d) {
        this.addNativeFontFace(d);
        try {
          await d.loaded;
        } catch (Z) {
          throw f(`Failed to load font '${d.family}': '${Z}'.`), l.disableFontFace = !0, Z;
        }
      }
      return;
    }
    const U = l.createFontFaceRule();
    if (U) {
      if (this.insertRule(U), this.isSyncFontLoadingSupported)
        return;
      await new Promise((d) => {
        const Z = this._queueLoadingCallback(d);
        this._prepareFontLoadEvent(l, Z);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var U;
    const l = !!((U = this._document) != null && U.fonts);
    return Fl(this, "isFontLoadingAPISupported", l);
  }
  get isSyncFontLoadingSupported() {
    let l = !1;
    return (FU || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (l = !0), Fl(this, "isSyncFontLoadingSupported", l);
  }
  _queueLoadingCallback(l) {
    function U() {
      for (Cl(!Z.done, "completeRequest() cannot be called twice."), Z.done = !0; d.length > 0 && d[0].done; ) {
        const F = d.shift();
        setTimeout(F.callback, 0);
      }
    }
    const {
      loadingRequests: d
    } = this, Z = {
      done: !1,
      complete: U,
      callback: l
    };
    return d.push(Z), Z;
  }
  get _loadTestFont() {
    const l = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return Fl(this, "_loadTestFont", l);
  }
  _prepareFontLoadEvent(l, U) {
    function d(B, S) {
      return B.charCodeAt(S) << 24 | B.charCodeAt(S + 1) << 16 | B.charCodeAt(S + 2) << 8 | B.charCodeAt(S + 3) & 255;
    }
    function Z(B, S, X, e) {
      const p = B.substring(0, S), y = B.substring(S + X);
      return p + e + y;
    }
    let F, W;
    const t = this._document.createElement("canvas");
    t.width = 1, t.height = 1;
    const V = t.getContext("2d");
    let R = 0;
    function N(B, S) {
      if (++R > 30) {
        f("Load test font never loaded."), S();
        return;
      }
      if (V.font = "30px " + B, V.fillText(".", 0, 20), V.getImageData(0, 0, 1, 1).data[3] > 0) {
        S();
        return;
      }
      setTimeout(N.bind(null, B, S));
    }
    const s = `lt${Date.now()}${this.loadTestFontId++}`;
    let n = this._loadTestFont;
    n = Z(n, 976, s.length, s);
    const a = 16, M = 1482184792;
    let G = d(n, a);
    for (F = 0, W = s.length - 3; F < W; F += 4)
      G = G - M + d(s, F) | 0;
    F < s.length && (G = G - M + d(s + "XXX", F) | 0), n = Z(n, a, 4, om(G));
    const T = `url(data:font/opentype;base64,${btoa(n)});`, J = `@font-face {font-family:"${s}";src:${T}}`;
    this.insertRule(J);
    const Y = this._document.createElement("div");
    Y.style.visibility = "hidden", Y.style.width = Y.style.height = "10px", Y.style.position = "absolute", Y.style.top = Y.style.left = "0px";
    for (const B of [l.loadedName, s]) {
      const S = this._document.createElement("span");
      S.textContent = "Hi", S.style.fontFamily = B, Y.append(S);
    }
    this._document.body.append(Y), N(s, () => {
      Y.remove(), U.complete();
    });
  }
}
x0 = new WeakMap();
class Am {
  constructor(l, {
    disableFontFace: U = !1,
    inspectFont: d = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const Z in l)
      this[Z] = l[Z];
    this.disableFontFace = U === !0, this._inspectFont = d;
  }
  createNativeFontFace() {
    var U;
    if (!this.data || this.disableFontFace)
      return null;
    let l;
    if (!this.cssFontInfo)
      l = new FontFace(this.loadedName, this.data, {});
    else {
      const d = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (d.style = `oblique ${this.cssFontInfo.italicAngle}deg`), l = new FontFace(this.cssFontInfo.fontFamily, this.data, d);
    }
    return (U = this._inspectFont) == null || U.call(this, this), l;
  }
  createFontFaceRule() {
    var Z;
    if (!this.data || this.disableFontFace)
      return null;
    const l = js(this.data), U = `url(data:${this.mimetype};base64,${btoa(l)});`;
    let d;
    if (!this.cssFontInfo)
      d = `@font-face {font-family:"${this.loadedName}";src:${U}}`;
    else {
      let F = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (F += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), d = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${F}src:${U}}`;
    }
    return (Z = this._inspectFont) == null || Z.call(this, this, U), d;
  }
  getPathGenerator(l, U) {
    if (this.compiledGlyphs[U] !== void 0)
      return this.compiledGlyphs[U];
    let d;
    try {
      d = l.get(this.loadedName + "_path_" + U);
    } catch (F) {
      f(`getPathGenerator - ignoring character: "${F}".`);
    }
    if (!Array.isArray(d) || d.length === 0)
      return this.compiledGlyphs[U] = function(F, W) {
      };
    const Z = [];
    for (let F = 0, W = d.length; F < W; )
      switch (d[F++]) {
        case kd.BEZIER_CURVE_TO:
          {
            const [t, V, R, N, s, n] = d.slice(F, F + 6);
            Z.push((b) => b.bezierCurveTo(t, V, R, N, s, n)), F += 6;
          }
          break;
        case kd.MOVE_TO:
          {
            const [t, V] = d.slice(F, F + 2);
            Z.push((R) => R.moveTo(t, V)), F += 2;
          }
          break;
        case kd.LINE_TO:
          {
            const [t, V] = d.slice(F, F + 2);
            Z.push((R) => R.lineTo(t, V)), F += 2;
          }
          break;
        case kd.QUADRATIC_CURVE_TO:
          {
            const [t, V, R, N] = d.slice(F, F + 4);
            Z.push((s) => s.quadraticCurveTo(t, V, R, N)), F += 4;
          }
          break;
        case kd.RESTORE:
          Z.push((t) => t.restore());
          break;
        case kd.SAVE:
          Z.push((t) => t.save());
          break;
        case kd.SCALE:
          Cl(Z.length === 2, "Scale command is only valid at the third position.");
          break;
        case kd.TRANSFORM:
          {
            const [t, V, R, N, s, n] = d.slice(F, F + 6);
            Z.push((b) => b.transform(t, V, R, N, s, n)), F += 6;
          }
          break;
        case kd.TRANSLATE:
          {
            const [t, V] = d.slice(F, F + 2);
            Z.push((R) => R.translate(t, V)), F += 2;
          }
          break;
      }
    return this.compiledGlyphs[U] = function(W, t) {
      Z[0](W), Z[1](W), W.scale(t, -t);
      for (let V = 2, R = Z.length; V < R; V++)
        Z[V](W);
    };
  }
}
if (FU) {
  var hR = Promise.withResolvers(), lQ = null;
  (async () => {
    const l = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    ), U = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    ), d = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    ), Z = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    );
    let F, W;
    return new Map(Object.entries({
      fs: l,
      http: U,
      https: d,
      url: Z,
      canvas: F,
      path2d: W
    }));
  })().then((l) => {
    lQ = l, hR.resolve();
  }, (l) => {
    f(`loadPackages: ${l}`), lQ = /* @__PURE__ */ new Map(), hR.resolve();
  });
}
class od {
  static get promise() {
    return hR.promise;
  }
  static get(l) {
    return lQ == null ? void 0 : lQ.get(l);
  }
}
const Jn = function(c) {
  return od.get("fs").promises.readFile(c).then((U) => new Uint8Array(U));
};
class _m extends bV {
}
class qm extends It {
  _createCanvas(l, U) {
    return od.get("canvas").createCanvas(l, U);
  }
}
class $m extends aV {
  _fetchData(l, U) {
    return Jn(l).then((d) => ({
      cMapData: d,
      compressionType: U
    }));
  }
}
class lh extends mV {
  _fetchData(l) {
    return Jn(l);
  }
}
const NU = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function iR(c, l) {
  if (!l)
    return;
  const U = l[2] - l[0], d = l[3] - l[1], Z = new Path2D();
  Z.rect(l[0], l[1], U, d), c.clip(Z);
}
class xc {
  constructor() {
    this.constructor === xc && nl("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    nl("Abstract method `getPattern` called.");
  }
}
class Uh extends xc {
  constructor(l) {
    super(), this._type = l[1], this._bbox = l[2], this._colorStops = l[3], this._p0 = l[4], this._p1 = l[5], this._r0 = l[6], this._r1 = l[7], this.matrix = null;
  }
  _createGradient(l) {
    let U;
    this._type === "axial" ? U = l.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (U = l.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const d of this._colorStops)
      U.addColorStop(d[0], d[1]);
    return U;
  }
  getPattern(l, U, d, Z) {
    let F;
    if (Z === NU.STROKE || Z === NU.FILL) {
      const W = U.current.getClippedPathBoundingBox(Z, Jl(l)) || [0, 0, 0, 0], t = Math.ceil(W[2] - W[0]) || 1, V = Math.ceil(W[3] - W[1]) || 1, R = U.cachedCanvases.getCanvas("pattern", t, V, !0), N = R.context;
      N.clearRect(0, 0, N.canvas.width, N.canvas.height), N.beginPath(), N.rect(0, 0, N.canvas.width, N.canvas.height), N.translate(-W[0], -W[1]), d = I.transform(d, [1, 0, 0, 1, W[0], W[1]]), N.transform(...U.baseTransform), this.matrix && N.transform(...this.matrix), iR(N, this._bbox), N.fillStyle = this._createGradient(N), N.fill(), F = l.createPattern(R.canvas, "no-repeat");
      const s = new DOMMatrix(d);
      F.setTransform(s);
    } else
      iR(l, this._bbox), F = this._createGradient(l);
    return F;
  }
}
function IV(c, l, U, d, Z, F, W, t) {
  const V = l.coords, R = l.colors, N = c.data, s = c.width * 4;
  let n;
  V[U + 1] > V[d + 1] && (n = U, U = d, d = n, n = F, F = W, W = n), V[d + 1] > V[Z + 1] && (n = d, d = Z, Z = n, n = W, W = t, t = n), V[U + 1] > V[d + 1] && (n = U, U = d, d = n, n = F, F = W, W = n);
  const b = (V[U] + l.offsetX) * l.scaleX, a = (V[U + 1] + l.offsetY) * l.scaleY, M = (V[d] + l.offsetX) * l.scaleX, G = (V[d + 1] + l.offsetY) * l.scaleY, T = (V[Z] + l.offsetX) * l.scaleX, J = (V[Z + 1] + l.offsetY) * l.scaleY;
  if (a >= J)
    return;
  const Y = R[F], B = R[F + 1], S = R[F + 2], X = R[W], e = R[W + 1], p = R[W + 2], y = R[t], j = R[t + 1], D = R[t + 2], ll = Math.round(a), P = Math.round(J);
  let q, dl, Nl, x, w, GZ, lF, zd;
  for (let ol = ll; ol <= P; ol++) {
    if (ol < G) {
      const C = ol < a ? 0 : (a - ol) / (a - G);
      q = b - (b - M) * C, dl = Y - (Y - X) * C, Nl = B - (B - e) * C, x = S - (S - p) * C;
    } else {
      let C;
      ol > J ? C = 1 : G === J ? C = 0 : C = (G - ol) / (G - J), q = M - (M - T) * C, dl = X - (X - y) * C, Nl = e - (e - j) * C, x = p - (p - D) * C;
    }
    let wl;
    ol < a ? wl = 0 : ol > J ? wl = 1 : wl = (a - ol) / (a - J), w = b - (b - T) * wl, GZ = Y - (Y - y) * wl, lF = B - (B - j) * wl, zd = S - (S - D) * wl;
    const YW = Math.round(Math.min(q, w)), Dd = Math.round(Math.max(q, w));
    let L = s * ol + YW * 4;
    for (let C = YW; C <= Dd; C++)
      wl = (q - C) / (q - w), wl < 0 ? wl = 0 : wl > 1 && (wl = 1), N[L++] = dl - (dl - GZ) * wl | 0, N[L++] = Nl - (Nl - lF) * wl | 0, N[L++] = x - (x - zd) * wl | 0, N[L++] = 255;
  }
}
function dh(c, l, U) {
  const d = l.coords, Z = l.colors;
  let F, W;
  switch (l.type) {
    case "lattice":
      const t = l.verticesPerRow, V = Math.floor(d.length / t) - 1, R = t - 1;
      for (F = 0; F < V; F++) {
        let N = F * t;
        for (let s = 0; s < R; s++, N++)
          IV(c, U, d[N], d[N + 1], d[N + t], Z[N], Z[N + 1], Z[N + t]), IV(c, U, d[N + t + 1], d[N + 1], d[N + t], Z[N + t + 1], Z[N + 1], Z[N + t]);
      }
      break;
    case "triangles":
      for (F = 0, W = d.length; F < W; F += 3)
        IV(c, U, d[F], d[F + 1], d[F + 2], Z[F], Z[F + 1], Z[F + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Zh extends xc {
  constructor(l) {
    super(), this._coords = l[2], this._colors = l[3], this._figures = l[4], this._bounds = l[5], this._bbox = l[7], this._background = l[8], this.matrix = null;
  }
  _createMeshCanvas(l, U, d) {
    const t = Math.floor(this._bounds[0]), V = Math.floor(this._bounds[1]), R = Math.ceil(this._bounds[2]) - t, N = Math.ceil(this._bounds[3]) - V, s = Math.min(Math.ceil(Math.abs(R * l[0] * 1.1)), 3e3), n = Math.min(Math.ceil(Math.abs(N * l[1] * 1.1)), 3e3), b = R / s, a = N / n, M = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -t,
      offsetY: -V,
      scaleX: 1 / b,
      scaleY: 1 / a
    }, G = s + 2 * 2, T = n + 2 * 2, J = d.getCanvas("mesh", G, T, !1), Y = J.context, B = Y.createImageData(s, n);
    if (U) {
      const X = B.data;
      for (let e = 0, p = X.length; e < p; e += 4)
        X[e] = U[0], X[e + 1] = U[1], X[e + 2] = U[2], X[e + 3] = 255;
    }
    for (const X of this._figures)
      dh(B, X, M);
    return Y.putImageData(B, 2, 2), {
      canvas: J.canvas,
      offsetX: t - 2 * b,
      offsetY: V - 2 * a,
      scaleX: b,
      scaleY: a
    };
  }
  getPattern(l, U, d, Z) {
    iR(l, this._bbox);
    let F;
    if (Z === NU.SHADING)
      F = I.singularValueDecompose2dScale(Jl(l));
    else if (F = I.singularValueDecompose2dScale(U.baseTransform), this.matrix) {
      const t = I.singularValueDecompose2dScale(this.matrix);
      F = [F[0] * t[0], F[1] * t[1]];
    }
    const W = this._createMeshCanvas(F, Z === NU.SHADING ? null : this._background, U.cachedCanvases);
    return Z !== NU.SHADING && (l.setTransform(...U.baseTransform), this.matrix && l.transform(...this.matrix)), l.translate(W.offsetX, W.offsetY), l.scale(W.scaleX, W.scaleY), l.createPattern(W.canvas, "no-repeat");
  }
}
class Fh extends xc {
  getPattern() {
    return "hotpink";
  }
}
function Wh(c) {
  switch (c[0]) {
    case "RadialAxial":
      return new Uh(c);
    case "Mesh":
      return new Zh(c);
    case "Dummy":
      return new Fh();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const ls = {
  COLORED: 1,
  UNCOLORED: 2
}, $t = class $t {
  constructor(l, U, d, Z, F) {
    this.operatorList = l[2], this.matrix = l[3], this.bbox = l[4], this.xstep = l[5], this.ystep = l[6], this.paintType = l[7], this.tilingType = l[8], this.color = U, this.ctx = d, this.canvasGraphicsFactory = Z, this.baseTransform = F;
  }
  createPatternCanvas(l) {
    const U = this.operatorList, d = this.bbox, Z = this.xstep, F = this.ystep, W = this.paintType, t = this.tilingType, V = this.color, R = this.canvasGraphicsFactory;
    NV("TilingType: " + t);
    const N = d[0], s = d[1], n = d[2], b = d[3], a = I.singularValueDecompose2dScale(this.matrix), M = I.singularValueDecompose2dScale(this.baseTransform), G = [a[0] * M[0], a[1] * M[1]], T = this.getSizeAndScale(Z, this.ctx.canvas.width, G[0]), J = this.getSizeAndScale(F, this.ctx.canvas.height, G[1]), Y = l.cachedCanvases.getCanvas("pattern", T.size, J.size, !0), B = Y.context, S = R.createCanvasGraphics(B);
    S.groupLevel = l.groupLevel, this.setFillAndStrokeStyleToContext(S, W, V);
    let X = N, e = s, p = n, y = b;
    return N < 0 && (X = 0, p += Math.abs(N)), s < 0 && (e = 0, y += Math.abs(s)), B.translate(-(T.scale * X), -(J.scale * e)), S.transform(T.scale, 0, 0, J.scale, 0, 0), B.save(), this.clipBbox(S, X, e, p, y), S.baseTransform = Jl(S.ctx), S.executeOperatorList(U), S.endDrawing(), {
      canvas: Y.canvas,
      scaleX: T.scale,
      scaleY: J.scale,
      offsetX: X,
      offsetY: e
    };
  }
  getSizeAndScale(l, U, d) {
    l = Math.abs(l);
    const Z = Math.max($t.MAX_PATTERN_SIZE, U);
    let F = Math.ceil(l * d);
    return F >= Z ? F = Z : d = F / l, {
      scale: d,
      size: F
    };
  }
  clipBbox(l, U, d, Z, F) {
    const W = Z - U, t = F - d;
    l.ctx.rect(U, d, W, t), l.current.updateRectMinMax(Jl(l.ctx), [U, d, Z, F]), l.clip(), l.endPath();
  }
  setFillAndStrokeStyleToContext(l, U, d) {
    const Z = l.ctx, F = l.current;
    switch (U) {
      case ls.COLORED:
        const W = this.ctx;
        Z.fillStyle = W.fillStyle, Z.strokeStyle = W.strokeStyle, F.fillColor = W.fillStyle, F.strokeColor = W.strokeStyle;
        break;
      case ls.UNCOLORED:
        const t = I.makeHexColor(d[0], d[1], d[2]);
        Z.fillStyle = t, Z.strokeStyle = t, F.fillColor = t, F.strokeColor = t;
        break;
      default:
        throw new Lm(`Unsupported paint type: ${U}`);
    }
  }
  getPattern(l, U, d, Z) {
    let F = d;
    Z !== NU.SHADING && (F = I.transform(F, U.baseTransform), this.matrix && (F = I.transform(F, this.matrix)));
    const W = this.createPatternCanvas(U);
    let t = new DOMMatrix(F);
    t = t.translate(W.offsetX, W.offsetY), t = t.scale(1 / W.scaleX, 1 / W.scaleY);
    const V = l.createPattern(W.canvas, "repeat");
    return V.setTransform(t), V;
  }
};
v($t, "MAX_PATTERN_SIZE", 3e3);
let MR = $t;
function Qh({
  src: c,
  srcPos: l = 0,
  dest: U,
  width: d,
  height: Z,
  nonBlackColor: F = 4294967295,
  inverseDecode: W = !1
}) {
  const t = MU.isLittleEndian ? 4278190080 : 255, [V, R] = W ? [F, t] : [t, F], N = d >> 3, s = d & 7, n = c.length;
  U = new Uint32Array(U.buffer);
  let b = 0;
  for (let a = 0; a < Z; a++) {
    for (const G = l + N; l < G; l++) {
      const T = l < n ? c[l] : 255;
      U[b++] = T & 128 ? R : V, U[b++] = T & 64 ? R : V, U[b++] = T & 32 ? R : V, U[b++] = T & 16 ? R : V, U[b++] = T & 8 ? R : V, U[b++] = T & 4 ? R : V, U[b++] = T & 2 ? R : V, U[b++] = T & 1 ? R : V;
    }
    if (s === 0)
      continue;
    const M = l < n ? c[l++] : 255;
    for (let G = 0; G < s; G++)
      U[b++] = M & 1 << 7 - G ? R : V;
  }
  return {
    srcPos: l,
    destPos: b
  };
}
const Us = 16, ds = 100, ch = 15, Zs = 10, Fs = 1e3, iU = 16;
function th(c, l) {
  if (c._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
    c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
  }, c.save = function() {
    l.save(), this.__originalSave();
  }, c.restore = function() {
    l.restore(), this.__originalRestore();
  }, c.translate = function(d, Z) {
    l.translate(d, Z), this.__originalTranslate(d, Z);
  }, c.scale = function(d, Z) {
    l.scale(d, Z), this.__originalScale(d, Z);
  }, c.transform = function(d, Z, F, W, t, V) {
    l.transform(d, Z, F, W, t, V), this.__originalTransform(d, Z, F, W, t, V);
  }, c.setTransform = function(d, Z, F, W, t, V) {
    l.setTransform(d, Z, F, W, t, V), this.__originalSetTransform(d, Z, F, W, t, V);
  }, c.resetTransform = function() {
    l.resetTransform(), this.__originalResetTransform();
  }, c.rotate = function(d) {
    l.rotate(d), this.__originalRotate(d);
  }, c.clip = function(d) {
    l.clip(d), this.__originalClip(d);
  }, c.moveTo = function(U, d) {
    l.moveTo(U, d), this.__originalMoveTo(U, d);
  }, c.lineTo = function(U, d) {
    l.lineTo(U, d), this.__originalLineTo(U, d);
  }, c.bezierCurveTo = function(U, d, Z, F, W, t) {
    l.bezierCurveTo(U, d, Z, F, W, t), this.__originalBezierCurveTo(U, d, Z, F, W, t);
  }, c.rect = function(U, d, Z, F) {
    l.rect(U, d, Z, F), this.__originalRect(U, d, Z, F);
  }, c.closePath = function() {
    l.closePath(), this.__originalClosePath();
  }, c.beginPath = function() {
    l.beginPath(), this.__originalBeginPath();
  };
}
class Vh {
  constructor(l) {
    this.canvasFactory = l, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(l, U, d) {
    let Z;
    return this.cache[l] !== void 0 ? (Z = this.cache[l], this.canvasFactory.reset(Z, U, d)) : (Z = this.canvasFactory.create(U, d), this.cache[l] = Z), Z;
  }
  delete(l) {
    delete this.cache[l];
  }
  clear() {
    for (const l in this.cache) {
      const U = this.cache[l];
      this.canvasFactory.destroy(U), delete this.cache[l];
    }
  }
}
function Hc(c, l, U, d, Z, F, W, t, V, R) {
  const [N, s, n, b, a, M] = Jl(c);
  if (s === 0 && n === 0) {
    const J = W * N + a, Y = Math.round(J), B = t * b + M, S = Math.round(B), X = (W + V) * N + a, e = Math.abs(Math.round(X) - Y) || 1, p = (t + R) * b + M, y = Math.abs(Math.round(p) - S) || 1;
    return c.setTransform(Math.sign(N), 0, 0, Math.sign(b), Y, S), c.drawImage(l, U, d, Z, F, 0, 0, e, y), c.setTransform(N, s, n, b, a, M), [e, y];
  }
  if (N === 0 && b === 0) {
    const J = t * n + a, Y = Math.round(J), B = W * s + M, S = Math.round(B), X = (t + R) * n + a, e = Math.abs(Math.round(X) - Y) || 1, p = (W + V) * s + M, y = Math.abs(Math.round(p) - S) || 1;
    return c.setTransform(0, Math.sign(s), Math.sign(n), 0, Y, S), c.drawImage(l, U, d, Z, F, 0, 0, y, e), c.setTransform(N, s, n, b, a, M), [y, e];
  }
  c.drawImage(l, U, d, Z, F, W, t, V, R);
  const G = Math.hypot(N, s), T = Math.hypot(n, b);
  return [G * V, T * R];
}
function Rh(c) {
  const {
    width: l,
    height: U
  } = c;
  if (l > Fs || U > Fs)
    return null;
  const d = 1e3, Z = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), F = l + 1;
  let W = new Uint8Array(F * (U + 1)), t, V, R;
  const N = l + 7 & -8;
  let s = new Uint8Array(N * U), n = 0;
  for (const T of c.data) {
    let J = 128;
    for (; J > 0; )
      s[n++] = T & J ? 0 : 255, J >>= 1;
  }
  let b = 0;
  for (n = 0, s[n] !== 0 && (W[0] = 1, ++b), V = 1; V < l; V++)
    s[n] !== s[n + 1] && (W[V] = s[n] ? 2 : 1, ++b), n++;
  for (s[n] !== 0 && (W[V] = 2, ++b), t = 1; t < U; t++) {
    n = t * N, R = t * F, s[n - N] !== s[n] && (W[R] = s[n] ? 1 : 8, ++b);
    let T = (s[n] ? 4 : 0) + (s[n - N] ? 8 : 0);
    for (V = 1; V < l; V++)
      T = (T >> 2) + (s[n + 1] ? 4 : 0) + (s[n - N + 1] ? 8 : 0), Z[T] && (W[R + V] = Z[T], ++b), n++;
    if (s[n - N] !== s[n] && (W[R + V] = s[n] ? 2 : 4, ++b), b > d)
      return null;
  }
  for (n = N * (U - 1), R = t * F, s[n] !== 0 && (W[R] = 8, ++b), V = 1; V < l; V++)
    s[n] !== s[n + 1] && (W[R + V] = s[n] ? 4 : 8, ++b), n++;
  if (s[n] !== 0 && (W[R + V] = 4, ++b), b > d)
    return null;
  const a = new Int32Array([0, F, -1, 0, -F, 0, 0, 0, 1]), M = new Path2D();
  for (t = 0; b && t <= U; t++) {
    let T = t * F;
    const J = T + l;
    for (; T < J && !W[T]; )
      T++;
    if (T === J)
      continue;
    M.moveTo(T % F, t);
    const Y = T;
    let B = W[T];
    do {
      const S = a[B];
      do
        T += S;
      while (!W[T]);
      const X = W[T];
      X !== 5 && X !== 10 ? (B = X, W[T] = 0) : (B = X & 51 * B >> 4, W[T] &= B >> 2 | B << 2), M.lineTo(T % F, T / F | 0), W[T] || --b;
    } while (Y !== T);
    --t;
  }
  return s = null, W = null, function(T) {
    T.save(), T.scale(1 / l, -1 / U), T.translate(0, -U), T.fill(M), T.beginPath(), T.restore();
  };
}
class Ws {
  constructor(l, U) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = ws, this.textMatrixScale = 1, this.fontMatrix = gV, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = $l.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, l, U]);
  }
  clone() {
    const l = Object.create(this);
    return l.clipBox = this.clipBox.slice(), l;
  }
  setCurrentPoint(l, U) {
    this.x = l, this.y = U;
  }
  updatePathMinMax(l, U, d) {
    [U, d] = I.applyTransform([U, d], l), this.minX = Math.min(this.minX, U), this.minY = Math.min(this.minY, d), this.maxX = Math.max(this.maxX, U), this.maxY = Math.max(this.maxY, d);
  }
  updateRectMinMax(l, U) {
    const d = I.applyTransform(U, l), Z = I.applyTransform(U.slice(2), l), F = I.applyTransform([U[0], U[3]], l), W = I.applyTransform([U[2], U[1]], l);
    this.minX = Math.min(this.minX, d[0], Z[0], F[0], W[0]), this.minY = Math.min(this.minY, d[1], Z[1], F[1], W[1]), this.maxX = Math.max(this.maxX, d[0], Z[0], F[0], W[0]), this.maxY = Math.max(this.maxY, d[1], Z[1], F[1], W[1]);
  }
  updateScalingPathMinMax(l, U) {
    I.scaleMinMax(l, U), this.minX = Math.min(this.minX, U[0]), this.minY = Math.min(this.minY, U[1]), this.maxX = Math.max(this.maxX, U[2]), this.maxY = Math.max(this.maxY, U[3]);
  }
  updateCurvePathMinMax(l, U, d, Z, F, W, t, V, R, N) {
    const s = I.bezierBoundingBox(U, d, Z, F, W, t, V, R, N);
    N || this.updateRectMinMax(l, s);
  }
  getPathBoundingBox(l = NU.FILL, U = null) {
    const d = [this.minX, this.minY, this.maxX, this.maxY];
    if (l === NU.STROKE) {
      U || nl("Stroke bounding box must include transform.");
      const Z = I.singularValueDecompose2dScale(U), F = Z[0] * this.lineWidth / 2, W = Z[1] * this.lineWidth / 2;
      d[0] -= F, d[1] -= W, d[2] += F, d[3] += W;
    }
    return d;
  }
  updateClipFromPath() {
    const l = I.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(l || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(l) {
    this.clipBox = l, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(l = NU.FILL, U = null) {
    return I.intersect(this.clipBox, this.getPathBoundingBox(l, U));
  }
}
function Qs(c, l) {
  if (typeof ImageData < "u" && l instanceof ImageData) {
    c.putImageData(l, 0, 0);
    return;
  }
  const U = l.height, d = l.width, Z = U % iU, F = (U - Z) / iU, W = Z === 0 ? F : F + 1, t = c.createImageData(d, iU);
  let V = 0, R;
  const N = l.data, s = t.data;
  let n, b, a, M;
  if (l.kind === Zt.GRAYSCALE_1BPP) {
    const G = N.byteLength, T = new Uint32Array(s.buffer, 0, s.byteLength >> 2), J = T.length, Y = d + 7 >> 3, B = 4294967295, S = MU.isLittleEndian ? 4278190080 : 255;
    for (n = 0; n < W; n++) {
      for (a = n < F ? iU : Z, R = 0, b = 0; b < a; b++) {
        const X = G - V;
        let e = 0;
        const p = X > Y ? d : X * 8 - 7, y = p & -8;
        let j = 0, D = 0;
        for (; e < y; e += 8)
          D = N[V++], T[R++] = D & 128 ? B : S, T[R++] = D & 64 ? B : S, T[R++] = D & 32 ? B : S, T[R++] = D & 16 ? B : S, T[R++] = D & 8 ? B : S, T[R++] = D & 4 ? B : S, T[R++] = D & 2 ? B : S, T[R++] = D & 1 ? B : S;
        for (; e < p; e++)
          j === 0 && (D = N[V++], j = 128), T[R++] = D & j ? B : S, j >>= 1;
      }
      for (; R < J; )
        T[R++] = 0;
      c.putImageData(t, 0, n * iU);
    }
  } else if (l.kind === Zt.RGBA_32BPP) {
    for (b = 0, M = d * iU * 4, n = 0; n < F; n++)
      s.set(N.subarray(V, V + M)), V += M, c.putImageData(t, 0, b), b += iU;
    n < W && (M = d * Z * 4, s.set(N.subarray(V, V + M)), c.putImageData(t, 0, b));
  } else if (l.kind === Zt.RGB_24BPP)
    for (a = iU, M = d * a, n = 0; n < W; n++) {
      for (n >= F && (a = Z, M = d * a), R = 0, b = M; b--; )
        s[R++] = N[V++], s[R++] = N[V++], s[R++] = N[V++], s[R++] = 255;
      c.putImageData(t, 0, n * iU);
    }
  else
    throw new Error(`bad image kind: ${l.kind}`);
}
function cs(c, l) {
  if (l.bitmap) {
    c.drawImage(l.bitmap, 0, 0);
    return;
  }
  const U = l.height, d = l.width, Z = U % iU, F = (U - Z) / iU, W = Z === 0 ? F : F + 1, t = c.createImageData(d, iU);
  let V = 0;
  const R = l.data, N = t.data;
  for (let s = 0; s < W; s++) {
    const n = s < F ? iU : Z;
    ({
      srcPos: V
    } = Qh({
      src: R,
      srcPos: V,
      dest: N,
      width: d,
      height: n,
      nonBlackColor: 0
    })), c.putImageData(t, 0, s * iU);
  }
}
function uW(c, l) {
  const U = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const d of U)
    c[d] !== void 0 && (l[d] = c[d]);
  c.setLineDash !== void 0 && (l.setLineDash(c.getLineDash()), l.lineDashOffset = c.lineDashOffset);
}
function vc(c) {
  if (c.strokeStyle = c.fillStyle = "#000000", c.fillRule = "nonzero", c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = "butt", c.lineJoin = "miter", c.miterLimit = 10, c.globalCompositeOperation = "source-over", c.font = "10px sans-serif", c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0), !FU) {
    const {
      filter: l
    } = c;
    l !== "none" && l !== "" && (c.filter = "none");
  }
}
function ts(c, l) {
  if (l)
    return !0;
  const U = I.singularValueDecompose2dScale(c);
  U[0] = Math.fround(U[0]), U[1] = Math.fround(U[1]);
  const d = Math.fround((globalThis.devicePixelRatio || 1) * AZ.PDF_TO_CSS_UNITS);
  return U[0] <= d && U[1] <= d;
}
const Nh = ["butt", "round", "square"], sh = ["miter", "round", "bevel"], nh = {}, Vs = {};
var qZ, TR, GR;
const pN = class pN {
  constructor(l, U, d, Z, F, {
    optionalContentConfig: W,
    markedContentStack: t = null
  }, V, R) {
    i(this, qZ);
    this.ctx = l, this.current = new Ws(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = U, this.objs = d, this.canvasFactory = Z, this.filterFactory = F, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = t || [], this.optionalContentConfig = W, this.cachedCanvases = new Vh(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = V, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = R, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(l, U = null) {
    return typeof l == "string" ? l.startsWith("g_") ? this.commonObjs.get(l) : this.objs.get(l) : U;
  }
  beginDrawing({
    transform: l,
    viewport: U,
    transparency: d = !1,
    background: Z = null
  }) {
    const F = this.ctx.canvas.width, W = this.ctx.canvas.height, t = this.ctx.fillStyle;
    if (this.ctx.fillStyle = Z || "#ffffff", this.ctx.fillRect(0, 0, F, W), this.ctx.fillStyle = t, d) {
      const V = this.cachedCanvases.getCanvas("transparent", F, W);
      this.compositeCtx = this.ctx, this.transparentCanvas = V.canvas, this.ctx = V.context, this.ctx.save(), this.ctx.transform(...Jl(this.compositeCtx));
    }
    this.ctx.save(), vc(this.ctx), l && (this.ctx.transform(...l), this.outputScaleX = l[0], this.outputScaleY = l[0]), this.ctx.transform(...U.transform), this.viewportScale = U.scale, this.baseTransform = Jl(this.ctx);
  }
  executeOperatorList(l, U, d, Z) {
    const F = l.argsArray, W = l.fnArray;
    let t = U || 0;
    const V = F.length;
    if (V === t)
      return t;
    const R = V - t > Zs && typeof d == "function", N = R ? Date.now() + ch : 0;
    let s = 0;
    const n = this.commonObjs, b = this.objs;
    let a;
    for (; ; ) {
      if (Z !== void 0 && t === Z.nextBreakPoint)
        return Z.breakIt(t, d), t;
      if (a = W[t], a !== fU.dependency)
        this[a].apply(this, F[t]);
      else
        for (const M of F[t]) {
          const G = M.startsWith("g_") ? n : b;
          if (!G.has(M))
            return G.get(M, d), t;
        }
      if (t++, t === V)
        return t;
      if (R && ++s > Zs) {
        if (Date.now() > N)
          return d(), t;
        s = 0;
      }
    }
  }
  endDrawing() {
    h(this, qZ, TR).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const l of this._cachedBitmapsMap.values()) {
      for (const U of l.values())
        typeof HTMLCanvasElement < "u" && U instanceof HTMLCanvasElement && (U.width = U.height = 0);
      l.clear();
    }
    this._cachedBitmapsMap.clear(), h(this, qZ, GR).call(this);
  }
  _scaleImage(l, U) {
    const d = l.width, Z = l.height;
    let F = Math.max(Math.hypot(U[0], U[1]), 1), W = Math.max(Math.hypot(U[2], U[3]), 1), t = d, V = Z, R = "prescale1", N, s;
    for (; F > 2 && t > 1 || W > 2 && V > 1; ) {
      let n = t, b = V;
      F > 2 && t > 1 && (n = t >= 16384 ? Math.floor(t / 2) - 1 || 1 : Math.ceil(t / 2), F /= t / n), W > 2 && V > 1 && (b = V >= 16384 ? Math.floor(V / 2) - 1 || 1 : Math.ceil(V) / 2, W /= V / b), N = this.cachedCanvases.getCanvas(R, n, b), s = N.context, s.clearRect(0, 0, n, b), s.drawImage(l, 0, 0, t, V, 0, 0, n, b), l = N.canvas, t = n, V = b, R = R === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: l,
      paintWidth: t,
      paintHeight: V
    };
  }
  _createMaskCanvas(l) {
    const U = this.ctx, {
      width: d,
      height: Z
    } = l, F = this.current.fillColor, W = this.current.patternFill, t = Jl(U);
    let V, R, N, s;
    if ((l.bitmap || l.data) && l.count > 1) {
      const p = l.bitmap || l.data.buffer;
      R = JSON.stringify(W ? t : [t.slice(0, 4), F]), V = this._cachedBitmapsMap.get(p), V || (V = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(p, V));
      const y = V.get(R);
      if (y && !W) {
        const j = Math.round(Math.min(t[0], t[2]) + t[4]), D = Math.round(Math.min(t[1], t[3]) + t[5]);
        return {
          canvas: y,
          offsetX: j,
          offsetY: D
        };
      }
      N = y;
    }
    N || (s = this.cachedCanvases.getCanvas("maskCanvas", d, Z), cs(s.context, l));
    let n = I.transform(t, [1 / d, 0, 0, -1 / Z, 0, 0]);
    n = I.transform(n, [1, 0, 0, 1, 0, -Z]);
    const [b, a, M, G] = I.getAxialAlignedBoundingBox([0, 0, d, Z], n), T = Math.round(M - b) || 1, J = Math.round(G - a) || 1, Y = this.cachedCanvases.getCanvas("fillCanvas", T, J), B = Y.context, S = b, X = a;
    B.translate(-S, -X), B.transform(...n), N || (N = this._scaleImage(s.canvas, Id(B)), N = N.img, V && W && V.set(R, N)), B.imageSmoothingEnabled = ts(Jl(B), l.interpolate), Hc(B, N, 0, 0, N.width, N.height, 0, 0, d, Z), B.globalCompositeOperation = "source-in";
    const e = I.transform(Id(B), [1, 0, 0, 1, -S, -X]);
    return B.fillStyle = W ? F.getPattern(U, this, e, NU.FILL) : F, B.fillRect(0, 0, d, Z), V && !W && (this.cachedCanvases.delete("fillCanvas"), V.set(R, Y.canvas)), {
      canvas: Y.canvas,
      offsetX: Math.round(S),
      offsetY: Math.round(X)
    };
  }
  setLineWidth(l) {
    l !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = l, this.ctx.lineWidth = l;
  }
  setLineCap(l) {
    this.ctx.lineCap = Nh[l];
  }
  setLineJoin(l) {
    this.ctx.lineJoin = sh[l];
  }
  setMiterLimit(l) {
    this.ctx.miterLimit = l;
  }
  setDash(l, U) {
    const d = this.ctx;
    d.setLineDash !== void 0 && (d.setLineDash(l), d.lineDashOffset = U);
  }
  setRenderingIntent(l) {
  }
  setFlatness(l) {
  }
  setGState(l) {
    for (const [U, d] of l)
      switch (U) {
        case "LW":
          this.setLineWidth(d);
          break;
        case "LC":
          this.setLineCap(d);
          break;
        case "LJ":
          this.setLineJoin(d);
          break;
        case "ML":
          this.setMiterLimit(d);
          break;
        case "D":
          this.setDash(d[0], d[1]);
          break;
        case "RI":
          this.setRenderingIntent(d);
          break;
        case "FL":
          this.setFlatness(d);
          break;
        case "Font":
          this.setFont(d[0], d[1]);
          break;
        case "CA":
          this.current.strokeAlpha = d;
          break;
        case "ca":
          this.current.fillAlpha = d, this.ctx.globalAlpha = d;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = d;
          break;
        case "SMask":
          this.current.activeSMask = d ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(d);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const l = this.inSMaskMode;
    this.current.activeSMask && !l ? this.beginSMaskMode() : !this.current.activeSMask && l && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const l = this.ctx.canvas.width, U = this.ctx.canvas.height, d = "smaskGroupAt" + this.groupLevel, Z = this.cachedCanvases.getCanvas(d, l, U);
    this.suspendedCtx = this.ctx, this.ctx = Z.context;
    const F = this.ctx;
    F.setTransform(...Jl(this.suspendedCtx)), uW(this.suspendedCtx, F), th(F, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), uW(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(l) {
    if (!this.current.activeSMask)
      return;
    l ? (l[0] = Math.floor(l[0]), l[1] = Math.floor(l[1]), l[2] = Math.ceil(l[2]), l[3] = Math.ceil(l[3])) : l = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const U = this.current.activeSMask, d = this.suspendedCtx;
    this.composeSMask(d, U, this.ctx, l), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(l, U, d, Z) {
    const F = Z[0], W = Z[1], t = Z[2] - F, V = Z[3] - W;
    t === 0 || V === 0 || (this.genericComposeSMask(U.context, d, t, V, U.subtype, U.backdrop, U.transferMap, F, W, U.offsetX, U.offsetY), l.save(), l.globalAlpha = 1, l.globalCompositeOperation = "source-over", l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(d.canvas, 0, 0), l.restore());
  }
  genericComposeSMask(l, U, d, Z, F, W, t, V, R, N, s) {
    let n = l.canvas, b = V - N, a = R - s;
    if (W) {
      if (b < 0 || a < 0 || b + d > n.width || a + Z > n.height) {
        const G = this.cachedCanvases.getCanvas("maskExtension", d, Z), T = G.context;
        T.drawImage(n, -b, -a), W.some((J) => J !== 0) && (T.globalCompositeOperation = "destination-atop", T.fillStyle = I.makeHexColor(...W), T.fillRect(0, 0, d, Z), T.globalCompositeOperation = "source-over"), n = G.canvas, b = a = 0;
      } else if (W.some((G) => G !== 0)) {
        l.save(), l.globalAlpha = 1, l.setTransform(1, 0, 0, 1, 0, 0);
        const G = new Path2D();
        G.rect(b, a, d, Z), l.clip(G), l.globalCompositeOperation = "destination-atop", l.fillStyle = I.makeHexColor(...W), l.fillRect(b, a, d, Z), l.restore();
      }
    }
    U.save(), U.globalAlpha = 1, U.setTransform(1, 0, 0, 1, 0, 0), F === "Alpha" && t ? U.filter = this.filterFactory.addAlphaFilter(t) : F === "Luminosity" && (U.filter = this.filterFactory.addLuminosityFilter(t));
    const M = new Path2D();
    M.rect(V, R, d, Z), U.clip(M), U.globalCompositeOperation = "destination-in", U.drawImage(n, b, a, d, Z, V, R, d, Z), U.restore();
  }
  save() {
    this.inSMaskMode ? (uW(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const l = this.current;
    this.stateStack.push(l), this.current = l.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), uW(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(l, U, d, Z, F, W) {
    this.ctx.transform(l, U, d, Z, F, W), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(l, U, d) {
    const Z = this.ctx, F = this.current;
    let W = F.x, t = F.y, V, R;
    const N = Jl(Z), s = N[0] === 0 && N[3] === 0 || N[1] === 0 && N[2] === 0, n = s ? d.slice(0) : null;
    for (let b = 0, a = 0, M = l.length; b < M; b++)
      switch (l[b] | 0) {
        case fU.rectangle:
          W = U[a++], t = U[a++];
          const G = U[a++], T = U[a++], J = W + G, Y = t + T;
          Z.moveTo(W, t), G === 0 || T === 0 ? Z.lineTo(J, Y) : (Z.lineTo(J, t), Z.lineTo(J, Y), Z.lineTo(W, Y)), s || F.updateRectMinMax(N, [W, t, J, Y]), Z.closePath();
          break;
        case fU.moveTo:
          W = U[a++], t = U[a++], Z.moveTo(W, t), s || F.updatePathMinMax(N, W, t);
          break;
        case fU.lineTo:
          W = U[a++], t = U[a++], Z.lineTo(W, t), s || F.updatePathMinMax(N, W, t);
          break;
        case fU.curveTo:
          V = W, R = t, W = U[a + 4], t = U[a + 5], Z.bezierCurveTo(U[a], U[a + 1], U[a + 2], U[a + 3], W, t), F.updateCurvePathMinMax(N, V, R, U[a], U[a + 1], U[a + 2], U[a + 3], W, t, n), a += 6;
          break;
        case fU.curveTo2:
          V = W, R = t, Z.bezierCurveTo(W, t, U[a], U[a + 1], U[a + 2], U[a + 3]), F.updateCurvePathMinMax(N, V, R, W, t, U[a], U[a + 1], U[a + 2], U[a + 3], n), W = U[a + 2], t = U[a + 3], a += 4;
          break;
        case fU.curveTo3:
          V = W, R = t, W = U[a + 2], t = U[a + 3], Z.bezierCurveTo(U[a], U[a + 1], W, t, W, t), F.updateCurvePathMinMax(N, V, R, U[a], U[a + 1], W, t, W, t, n), a += 4;
          break;
        case fU.closePath:
          Z.closePath();
          break;
      }
    s && F.updateScalingPathMinMax(N, n), F.setCurrentPoint(W, t);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(l = !0) {
    const U = this.ctx, d = this.current.strokeColor;
    U.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof d == "object" && (d != null && d.getPattern) ? (U.save(), U.strokeStyle = d.getPattern(U, this, Id(U), NU.STROKE), this.rescaleAndStroke(!1), U.restore()) : this.rescaleAndStroke(!0)), l && this.consumePath(this.current.getClippedPathBoundingBox()), U.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(l = !0) {
    const U = this.ctx, d = this.current.fillColor, Z = this.current.patternFill;
    let F = !1;
    Z && (U.save(), U.fillStyle = d.getPattern(U, this, Id(U), NU.FILL), F = !0);
    const W = this.current.getClippedPathBoundingBox();
    this.contentVisible && W !== null && (this.pendingEOFill ? (U.fill("evenodd"), this.pendingEOFill = !1) : U.fill()), F && U.restore(), l && this.consumePath(W);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = nh;
  }
  eoClip() {
    this.pendingClip = Vs;
  }
  beginText() {
    this.current.textMatrix = ws, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const l = this.pendingTextPaths, U = this.ctx;
    if (l === void 0) {
      U.beginPath();
      return;
    }
    U.save(), U.beginPath();
    for (const d of l)
      U.setTransform(...d.transform), U.translate(d.x, d.y), d.addToPath(U, d.fontSize);
    U.restore(), U.clip(), U.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(l) {
    this.current.charSpacing = l;
  }
  setWordSpacing(l) {
    this.current.wordSpacing = l;
  }
  setHScale(l) {
    this.current.textHScale = l / 100;
  }
  setLeading(l) {
    this.current.leading = -l;
  }
  setFont(l, U) {
    var N;
    const d = this.commonObjs.get(l), Z = this.current;
    if (!d)
      throw new Error(`Can't find font for ${l}`);
    if (Z.fontMatrix = d.fontMatrix || gV, (Z.fontMatrix[0] === 0 || Z.fontMatrix[3] === 0) && f("Invalid font matrix for font " + l), U < 0 ? (U = -U, Z.fontDirection = -1) : Z.fontDirection = 1, this.current.font = d, this.current.fontSize = U, d.isType3Font)
      return;
    const F = d.loadedName || "sans-serif", W = ((N = d.systemFontInfo) == null ? void 0 : N.css) || `"${F}", ${d.fallbackName}`;
    let t = "normal";
    d.black ? t = "900" : d.bold && (t = "bold");
    const V = d.italic ? "italic" : "normal";
    let R = U;
    U < Us ? R = Us : U > ds && (R = ds), this.current.fontSizeScale = U / R, this.ctx.font = `${V} ${t} ${R}px ${W}`;
  }
  setTextRenderingMode(l) {
    this.current.textRenderingMode = l;
  }
  setTextRise(l) {
    this.current.textRise = l;
  }
  moveText(l, U) {
    this.current.x = this.current.lineX += l, this.current.y = this.current.lineY += U;
  }
  setLeadingMoveText(l, U) {
    this.setLeading(-U), this.moveText(l, U);
  }
  setTextMatrix(l, U, d, Z, F, W) {
    this.current.textMatrix = [l, U, d, Z, F, W], this.current.textMatrixScale = Math.hypot(l, U), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(l, U, d, Z) {
    const F = this.ctx, W = this.current, t = W.font, V = W.textRenderingMode, R = W.fontSize / W.fontSizeScale, N = V & $l.FILL_STROKE_MASK, s = !!(V & $l.ADD_TO_PATH_FLAG), n = W.patternFill && !t.missingFile;
    let b;
    (t.disableFontFace || s || n) && (b = t.getPathGenerator(this.commonObjs, l)), t.disableFontFace || n ? (F.save(), F.translate(U, d), F.beginPath(), b(F, R), Z && F.setTransform(...Z), (N === $l.FILL || N === $l.FILL_STROKE) && F.fill(), (N === $l.STROKE || N === $l.FILL_STROKE) && F.stroke(), F.restore()) : ((N === $l.FILL || N === $l.FILL_STROKE) && F.fillText(l, U, d), (N === $l.STROKE || N === $l.FILL_STROKE) && F.strokeText(l, U, d)), s && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Jl(F),
      x: U,
      y: d,
      fontSize: R,
      addToPath: b
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: l
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    l.scale(1.5, 1), l.fillText("I", 0, 10);
    const U = l.getImageData(0, 0, 10, 10).data;
    let d = !1;
    for (let Z = 3; Z < U.length; Z += 4)
      if (U[Z] > 0 && U[Z] < 255) {
        d = !0;
        break;
      }
    return Fl(this, "isFontSubpixelAAEnabled", d);
  }
  showText(l) {
    const U = this.current, d = U.font;
    if (d.isType3Font)
      return this.showType3Text(l);
    const Z = U.fontSize;
    if (Z === 0)
      return;
    const F = this.ctx, W = U.fontSizeScale, t = U.charSpacing, V = U.wordSpacing, R = U.fontDirection, N = U.textHScale * R, s = l.length, n = d.vertical, b = n ? 1 : -1, a = d.defaultVMetrics, M = Z * U.fontMatrix[0], G = U.textRenderingMode === $l.FILL && !d.disableFontFace && !U.patternFill;
    F.save(), F.transform(...U.textMatrix), F.translate(U.x, U.y + U.textRise), R > 0 ? F.scale(N, -1) : F.scale(N, 1);
    let T;
    if (U.patternFill) {
      F.save();
      const X = U.fillColor.getPattern(F, this, Id(F), NU.FILL);
      T = Jl(F), F.restore(), F.fillStyle = X;
    }
    let J = U.lineWidth;
    const Y = U.textMatrixScale;
    if (Y === 0 || J === 0) {
      const X = U.textRenderingMode & $l.FILL_STROKE_MASK;
      (X === $l.STROKE || X === $l.FILL_STROKE) && (J = this.getSinglePixelWidth());
    } else
      J /= Y;
    if (W !== 1 && (F.scale(W, W), J /= W), F.lineWidth = J, d.isInvalidPDFjsFont) {
      const X = [];
      let e = 0;
      for (const p of l)
        X.push(p.unicode), e += p.width;
      F.fillText(X.join(""), 0, 0), U.x += e * M * N, F.restore(), this.compose();
      return;
    }
    let B = 0, S;
    for (S = 0; S < s; ++S) {
      const X = l[S];
      if (typeof X == "number") {
        B += b * X * Z / 1e3;
        continue;
      }
      let e = !1;
      const p = (X.isSpace ? V : 0) + t, y = X.fontChar, j = X.accent;
      let D, ll, P = X.width;
      if (n) {
        const dl = X.vmetric || a, Nl = -(X.vmetric ? dl[1] : P * 0.5) * M, x = dl[2] * M;
        P = dl ? -dl[0] : P, D = Nl / W, ll = (B + x) / W;
      } else
        D = B / W, ll = 0;
      if (d.remeasure && P > 0) {
        const dl = F.measureText(y).width * 1e3 / Z * W;
        if (P < dl && this.isFontSubpixelAAEnabled) {
          const Nl = P / dl;
          e = !0, F.save(), F.scale(Nl, 1), D /= Nl;
        } else P !== dl && (D += (P - dl) / 2e3 * Z / W);
      }
      if (this.contentVisible && (X.isInFont || d.missingFile)) {
        if (G && !j)
          F.fillText(y, D, ll);
        else if (this.paintChar(y, D, ll, T), j) {
          const dl = D + Z * j.offset.x / W, Nl = ll - Z * j.offset.y / W;
          this.paintChar(j.fontChar, dl, Nl, T);
        }
      }
      const q = n ? P * M - p * R : P * M + p * R;
      B += q, e && F.restore();
    }
    n ? U.y -= B : U.x += B * N, F.restore(), this.compose();
  }
  showType3Text(l) {
    const U = this.ctx, d = this.current, Z = d.font, F = d.fontSize, W = d.fontDirection, t = Z.vertical ? 1 : -1, V = d.charSpacing, R = d.wordSpacing, N = d.textHScale * W, s = d.fontMatrix || gV, n = l.length, b = d.textRenderingMode === $l.INVISIBLE;
    let a, M, G, T;
    if (!(b || F === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, U.save(), U.transform(...d.textMatrix), U.translate(d.x, d.y), U.scale(N, W), a = 0; a < n; ++a) {
        if (M = l[a], typeof M == "number") {
          T = t * M * F / 1e3, this.ctx.translate(T, 0), d.x += T * N;
          continue;
        }
        const J = (M.isSpace ? R : 0) + V, Y = Z.charProcOperatorList[M.operatorListId];
        if (!Y) {
          f(`Type3 character "${M.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = M, this.save(), U.scale(F, F), U.transform(...s), this.executeOperatorList(Y), this.restore()), G = I.applyTransform([M.width, 0], s)[0] * F + J, U.translate(G, 0), d.x += G * N;
      }
      U.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(l, U) {
  }
  setCharWidthAndBounds(l, U, d, Z, F, W) {
    this.ctx.rect(d, Z, F - d, W - Z), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(l) {
    let U;
    if (l[0] === "TilingPattern") {
      const d = l[1], Z = this.baseTransform || Jl(this.ctx), F = {
        createCanvasGraphics: (W) => new pN(W, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      U = new MR(l, d, this.ctx, F, Z);
    } else
      U = this._getPattern(l[1], l[2]);
    return U;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(l, U, d) {
    const Z = I.makeHexColor(l, U, d);
    this.ctx.strokeStyle = Z, this.current.strokeColor = Z;
  }
  setFillRGBColor(l, U, d) {
    const Z = I.makeHexColor(l, U, d);
    this.ctx.fillStyle = Z, this.current.fillColor = Z, this.current.patternFill = !1;
  }
  _getPattern(l, U = null) {
    let d;
    return this.cachedPatterns.has(l) ? d = this.cachedPatterns.get(l) : (d = Wh(this.getObject(l)), this.cachedPatterns.set(l, d)), U && (d.matrix = U), d;
  }
  shadingFill(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx;
    this.save();
    const d = this._getPattern(l);
    U.fillStyle = d.getPattern(U, this, Id(U), NU.SHADING);
    const Z = Id(U);
    if (Z) {
      const {
        width: F,
        height: W
      } = U.canvas, [t, V, R, N] = I.getAxialAlignedBoundingBox([0, 0, F, W], Z);
      this.ctx.fillRect(t, V, R - t, N - V);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    nl("Should not call beginInlineImage");
  }
  beginImageData() {
    nl("Should not call beginImageData");
  }
  paintFormXObjectBegin(l, U) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), l && this.transform(...l), this.baseTransform = Jl(this.ctx), U)) {
      const d = U[2] - U[0], Z = U[3] - U[1];
      this.ctx.rect(U[0], U[1], d, Z), this.current.updateRectMinMax(Jl(this.ctx), U), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(l) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const U = this.ctx;
    l.isolated || NV("TODO: Support non-isolated groups."), l.knockout && f("Knockout groups not supported.");
    const d = Jl(U);
    if (l.matrix && U.transform(...l.matrix), !l.bbox)
      throw new Error("Bounding box is required.");
    let Z = I.getAxialAlignedBoundingBox(l.bbox, Jl(U));
    const F = [0, 0, U.canvas.width, U.canvas.height];
    Z = I.intersect(Z, F) || [0, 0, 0, 0];
    const W = Math.floor(Z[0]), t = Math.floor(Z[1]), V = Math.max(Math.ceil(Z[2]) - W, 1), R = Math.max(Math.ceil(Z[3]) - t, 1);
    this.current.startNewPathAndClipBox([0, 0, V, R]);
    let N = "groupAt" + this.groupLevel;
    l.smask && (N += "_smask_" + this.smaskCounter++ % 2);
    const s = this.cachedCanvases.getCanvas(N, V, R), n = s.context;
    n.translate(-W, -t), n.transform(...d), l.smask ? this.smaskStack.push({
      canvas: s.canvas,
      context: n,
      offsetX: W,
      offsetY: t,
      subtype: l.smask.subtype,
      backdrop: l.smask.backdrop,
      transferMap: l.smask.transferMap || null,
      startTransformInverse: null
    }) : (U.setTransform(1, 0, 0, 1, 0, 0), U.translate(W, t), U.save()), uW(U, n), this.ctx = n, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(U), this.groupLevel++;
  }
  endGroup(l) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const U = this.ctx, d = this.groupStack.pop();
    if (this.ctx = d, this.ctx.imageSmoothingEnabled = !1, l.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const Z = Jl(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...Z);
      const F = I.getAxialAlignedBoundingBox([0, 0, U.canvas.width, U.canvas.height], Z);
      this.ctx.drawImage(U.canvas, 0, 0), this.ctx.restore(), this.compose(F);
    }
  }
  beginAnnotation(l, U, d, Z, F) {
    if (h(this, qZ, TR).call(this), vc(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), U) {
      const W = U[2] - U[0], t = U[3] - U[1];
      if (F && this.annotationCanvasMap) {
        d = d.slice(), d[4] -= U[0], d[5] -= U[1], U = U.slice(), U[0] = U[1] = 0, U[2] = W, U[3] = t;
        const [V, R] = I.singularValueDecompose2dScale(Jl(this.ctx)), {
          viewportScale: N
        } = this, s = Math.ceil(W * this.outputScaleX * N), n = Math.ceil(t * this.outputScaleY * N);
        this.annotationCanvas = this.canvasFactory.create(s, n);
        const {
          canvas: b,
          context: a
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(l, b), this.annotationCanvas.savedCtx = this.ctx, this.ctx = a, this.ctx.save(), this.ctx.setTransform(V, 0, 0, -R, 0, t * R), vc(this.ctx);
      } else
        vc(this.ctx), this.ctx.rect(U[0], U[1], W, t), this.ctx.clip(), this.endPath();
    }
    this.current = new Ws(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...d), this.transform(...Z);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), h(this, qZ, GR).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.count;
    l = this.getObject(l.data, l), l.count = U;
    const d = this.ctx, Z = this.processingType3;
    if (Z && (Z.compiled === void 0 && (Z.compiled = Rh(l)), Z.compiled)) {
      Z.compiled(d);
      return;
    }
    const F = this._createMaskCanvas(l), W = F.canvas;
    d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.drawImage(W, F.offsetX, F.offsetY), d.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(l, U, d = 0, Z = 0, F, W) {
    if (!this.contentVisible)
      return;
    l = this.getObject(l.data, l);
    const t = this.ctx;
    t.save();
    const V = Jl(t);
    t.transform(U, d, Z, F, 0, 0);
    const R = this._createMaskCanvas(l);
    t.setTransform(1, 0, 0, 1, R.offsetX - V[4], R.offsetY - V[5]);
    for (let N = 0, s = W.length; N < s; N += 2) {
      const n = I.transform(V, [U, d, Z, F, W[N], W[N + 1]]), [b, a] = I.applyTransform([0, 0], n);
      t.drawImage(R.canvas, b, a);
    }
    t.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx, d = this.current.fillColor, Z = this.current.patternFill;
    for (const F of l) {
      const {
        data: W,
        width: t,
        height: V,
        transform: R
      } = F, N = this.cachedCanvases.getCanvas("maskCanvas", t, V), s = N.context;
      s.save();
      const n = this.getObject(W, F);
      cs(s, n), s.globalCompositeOperation = "source-in", s.fillStyle = Z ? d.getPattern(s, this, Id(U), NU.FILL) : d, s.fillRect(0, 0, t, V), s.restore(), U.save(), U.transform(...R), U.scale(1, -1), Hc(U, N.canvas, 0, 0, t, V, 0, -1, 1, 1), U.restore();
    }
    this.compose();
  }
  paintImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = this.getObject(l);
    if (!U) {
      f("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(U);
  }
  paintImageXObjectRepeat(l, U, d, Z) {
    if (!this.contentVisible)
      return;
    const F = this.getObject(l);
    if (!F) {
      f("Dependent image isn't ready yet");
      return;
    }
    const W = F.width, t = F.height, V = [];
    for (let R = 0, N = Z.length; R < N; R += 2)
      V.push({
        transform: [U, 0, 0, d, Z[R], Z[R + 1]],
        x: 0,
        y: 0,
        w: W,
        h: t
      });
    this.paintInlineImageXObjectGroup(F, V);
  }
  applyTransferMapsToCanvas(l) {
    return this.current.transferMaps !== "none" && (l.filter = this.current.transferMaps, l.drawImage(l.canvas, 0, 0), l.filter = "none"), l.canvas;
  }
  applyTransferMapsToBitmap(l) {
    if (this.current.transferMaps === "none")
      return l.bitmap;
    const {
      bitmap: U,
      width: d,
      height: Z
    } = l, F = this.cachedCanvases.getCanvas("inlineImage", d, Z), W = F.context;
    return W.filter = this.current.transferMaps, W.drawImage(U, 0, 0), W.filter = "none", F.canvas;
  }
  paintInlineImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.width, d = l.height, Z = this.ctx;
    if (this.save(), !FU) {
      const {
        filter: t
      } = Z;
      t !== "none" && t !== "" && (Z.filter = "none");
    }
    Z.scale(1 / U, -1 / d);
    let F;
    if (l.bitmap)
      F = this.applyTransferMapsToBitmap(l);
    else if (typeof HTMLElement == "function" && l instanceof HTMLElement || !l.data)
      F = l;
    else {
      const V = this.cachedCanvases.getCanvas("inlineImage", U, d).context;
      Qs(V, l), F = this.applyTransferMapsToCanvas(V);
    }
    const W = this._scaleImage(F, Id(Z));
    Z.imageSmoothingEnabled = ts(Jl(Z), l.interpolate), Hc(Z, W.img, 0, 0, W.paintWidth, W.paintHeight, 0, -d, U, d), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(l, U) {
    if (!this.contentVisible)
      return;
    const d = this.ctx;
    let Z;
    if (l.bitmap)
      Z = l.bitmap;
    else {
      const F = l.width, W = l.height, V = this.cachedCanvases.getCanvas("inlineImage", F, W).context;
      Qs(V, l), Z = this.applyTransferMapsToCanvas(V);
    }
    for (const F of U)
      d.save(), d.transform(...F.transform), d.scale(1, -1), Hc(d, Z, F.x, F.y, F.w, F.h, 0, -1, 1, 1), d.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(l) {
  }
  markPointProps(l, U) {
  }
  beginMarkedContent(l) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(l, U) {
    l === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(U)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(l) {
    const U = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(l);
    const d = this.ctx;
    this.pendingClip && (U || (this.pendingClip === Vs ? d.clip("evenodd") : d.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), d.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const l = Jl(this.ctx);
      if (l[1] === 0 && l[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(l[0]), Math.abs(l[3]));
      else {
        const U = Math.abs(l[0] * l[3] - l[2] * l[1]), d = Math.hypot(l[0], l[2]), Z = Math.hypot(l[1], l[3]);
        this._cachedGetSinglePixelWidth = Math.max(d, Z) / U;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: l
      } = this.current, {
        a: U,
        b: d,
        c: Z,
        d: F
      } = this.ctx.getTransform();
      let W, t;
      if (d === 0 && Z === 0) {
        const V = Math.abs(U), R = Math.abs(F);
        if (V === R)
          if (l === 0)
            W = t = 1 / V;
          else {
            const N = V * l;
            W = t = N < 1 ? 1 / N : 1;
          }
        else if (l === 0)
          W = 1 / V, t = 1 / R;
        else {
          const N = V * l, s = R * l;
          W = N < 1 ? 1 / N : 1, t = s < 1 ? 1 / s : 1;
        }
      } else {
        const V = Math.abs(U * F - d * Z), R = Math.hypot(U, d), N = Math.hypot(Z, F);
        if (l === 0)
          W = N / V, t = R / V;
        else {
          const s = l * V;
          W = N > s ? N / s : 1, t = R > s ? R / s : 1;
        }
      }
      this._cachedScaleForStroking[0] = W, this._cachedScaleForStroking[1] = t;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(l) {
    const {
      ctx: U
    } = this, {
      lineWidth: d
    } = this.current, [Z, F] = this.getScaleForStroking();
    if (U.lineWidth = d || 1, Z === 1 && F === 1) {
      U.stroke();
      return;
    }
    const W = U.getLineDash();
    if (l && U.save(), U.scale(Z, F), W.length > 0) {
      const t = Math.max(Z, F);
      U.setLineDash(W.map((V) => V / t)), U.lineDashOffset /= t;
    }
    U.stroke(), l && U.restore();
  }
  isContentVisible() {
    for (let l = this.markedContentStack.length - 1; l >= 0; l--)
      if (!this.markedContentStack[l].visible)
        return !1;
    return !0;
  }
};
qZ = new WeakSet(), TR = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, GR = function() {
  if (this.pageColors) {
    const l = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (l !== "none") {
      const U = this.ctx.filter;
      this.ctx.filter = l, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = U;
    }
  }
};
let B0 = pN;
for (const c in fU)
  B0.prototype[c] !== void 0 && (B0.prototype[fU[c]] = B0.prototype[c]);
var oQ, zQ;
class nZ {
  static get workerPort() {
    return Q(this, oQ);
  }
  static set workerPort(l) {
    if (!(typeof Worker < "u" && l instanceof Worker) && l !== null)
      throw new Error("Invalid `workerPort` type.");
    m(this, oQ, l);
  }
  static get workerSrc() {
    return Q(this, zQ);
  }
  static set workerSrc(l) {
    if (typeof l != "string")
      throw new Error("Invalid `workerSrc` type.");
    m(this, zQ, l);
  }
}
oQ = new WeakMap(), zQ = new WeakMap(), i(nZ, oQ, null), i(nZ, zQ, "");
const Pc = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, ul = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function XU(c) {
  switch (c instanceof Error || typeof c == "object" && c !== null || nl('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case "AbortException":
      return new s0(c.message);
    case "MissingPDFException":
      return new N0(c.message);
    case "PasswordException":
      return new vV(c.message, c.code);
    case "UnexpectedResponseException":
      return new sV(c.message, c.status);
    case "UnknownErrorException":
      return new PV(c.message, c.details);
    default:
      return new PV(c.message, c.toString());
  }
}
var pd, Sn, Xn, Vt;
class wW {
  constructor(l, U, d) {
    i(this, pd);
    this.sourceName = l, this.targetName = U, this.comObj = d, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (Z) => {
      const F = Z.data;
      if (F.targetName !== this.sourceName)
        return;
      if (F.stream) {
        h(this, pd, Xn).call(this, F);
        return;
      }
      if (F.callback) {
        const t = F.callbackId, V = this.callbackCapabilities[t];
        if (!V)
          throw new Error(`Cannot resolve callback ${t}`);
        if (delete this.callbackCapabilities[t], F.callback === Pc.DATA)
          V.resolve(F.data);
        else if (F.callback === Pc.ERROR)
          V.reject(XU(F.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const W = this.actionHandler[F.action];
      if (!W)
        throw new Error(`Unknown action from worker: ${F.action}`);
      if (F.callbackId) {
        const t = this.sourceName, V = F.sourceName;
        new Promise(function(R) {
          R(W(F.data));
        }).then(function(R) {
          d.postMessage({
            sourceName: t,
            targetName: V,
            callback: Pc.DATA,
            callbackId: F.callbackId,
            data: R
          });
        }, function(R) {
          d.postMessage({
            sourceName: t,
            targetName: V,
            callback: Pc.ERROR,
            callbackId: F.callbackId,
            reason: XU(R)
          });
        });
        return;
      }
      if (F.streamId) {
        h(this, pd, Sn).call(this, F);
        return;
      }
      W(F.data);
    }, d.addEventListener("message", this._onComObjOnMessage);
  }
  on(l, U) {
    const d = this.actionHandler;
    if (d[l])
      throw new Error(`There is already an actionName called "${l}"`);
    d[l] = U;
  }
  send(l, U, d) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: l,
      data: U
    }, d);
  }
  sendWithPromise(l, U, d) {
    const Z = this.callbackId++, F = Promise.withResolvers();
    this.callbackCapabilities[Z] = F;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: l,
        callbackId: Z,
        data: U
      }, d);
    } catch (W) {
      F.reject(W);
    }
    return F.promise;
  }
  sendWithStream(l, U, d, Z) {
    const F = this.streamId++, W = this.sourceName, t = this.targetName, V = this.comObj;
    return new ReadableStream({
      start: (R) => {
        const N = Promise.withResolvers();
        return this.streamControllers[F] = {
          controller: R,
          startCall: N,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, V.postMessage({
          sourceName: W,
          targetName: t,
          action: l,
          streamId: F,
          data: U,
          desiredSize: R.desiredSize
        }, Z), N.promise;
      },
      pull: (R) => {
        const N = Promise.withResolvers();
        return this.streamControllers[F].pullCall = N, V.postMessage({
          sourceName: W,
          targetName: t,
          stream: ul.PULL,
          streamId: F,
          desiredSize: R.desiredSize
        }), N.promise;
      },
      cancel: (R) => {
        Cl(R instanceof Error, "cancel must have a valid reason");
        const N = Promise.withResolvers();
        return this.streamControllers[F].cancelCall = N, this.streamControllers[F].isClosed = !0, V.postMessage({
          sourceName: W,
          targetName: t,
          stream: ul.CANCEL,
          streamId: F,
          reason: XU(R)
        }), N.promise;
      }
    }, d);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
pd = new WeakSet(), Sn = function(l) {
  const U = l.streamId, d = this.sourceName, Z = l.sourceName, F = this.comObj, W = this, t = this.actionHandler[l.action], V = {
    enqueue(R, N = 1, s) {
      if (this.isCancelled)
        return;
      const n = this.desiredSize;
      this.desiredSize -= N, n > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), F.postMessage({
        sourceName: d,
        targetName: Z,
        stream: ul.ENQUEUE,
        streamId: U,
        chunk: R
      }, s);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, F.postMessage({
        sourceName: d,
        targetName: Z,
        stream: ul.CLOSE,
        streamId: U
      }), delete W.streamSinks[U]);
    },
    error(R) {
      Cl(R instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, F.postMessage({
        sourceName: d,
        targetName: Z,
        stream: ul.ERROR,
        streamId: U,
        reason: XU(R)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: l.desiredSize,
    ready: null
  };
  V.sinkCapability.resolve(), V.ready = V.sinkCapability.promise, this.streamSinks[U] = V, new Promise(function(R) {
    R(t(l.data, V));
  }).then(function() {
    F.postMessage({
      sourceName: d,
      targetName: Z,
      stream: ul.START_COMPLETE,
      streamId: U,
      success: !0
    });
  }, function(R) {
    F.postMessage({
      sourceName: d,
      targetName: Z,
      stream: ul.START_COMPLETE,
      streamId: U,
      reason: XU(R)
    });
  });
}, Xn = function(l) {
  const U = l.streamId, d = this.sourceName, Z = l.sourceName, F = this.comObj, W = this.streamControllers[U], t = this.streamSinks[U];
  switch (l.stream) {
    case ul.START_COMPLETE:
      l.success ? W.startCall.resolve() : W.startCall.reject(XU(l.reason));
      break;
    case ul.PULL_COMPLETE:
      l.success ? W.pullCall.resolve() : W.pullCall.reject(XU(l.reason));
      break;
    case ul.PULL:
      if (!t) {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: ul.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
        break;
      }
      t.desiredSize <= 0 && l.desiredSize > 0 && t.sinkCapability.resolve(), t.desiredSize = l.desiredSize, new Promise(function(V) {
        var R;
        V((R = t.onPull) == null ? void 0 : R.call(t));
      }).then(function() {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: ul.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(V) {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: ul.PULL_COMPLETE,
          streamId: U,
          reason: XU(V)
        });
      });
      break;
    case ul.ENQUEUE:
      if (Cl(W, "enqueue should have stream controller"), W.isClosed)
        break;
      W.controller.enqueue(l.chunk);
      break;
    case ul.CLOSE:
      if (Cl(W, "close should have stream controller"), W.isClosed)
        break;
      W.isClosed = !0, W.controller.close(), h(this, pd, Vt).call(this, W, U);
      break;
    case ul.ERROR:
      Cl(W, "error should have stream controller"), W.controller.error(XU(l.reason)), h(this, pd, Vt).call(this, W, U);
      break;
    case ul.CANCEL_COMPLETE:
      l.success ? W.cancelCall.resolve() : W.cancelCall.reject(XU(l.reason)), h(this, pd, Vt).call(this, W, U);
      break;
    case ul.CANCEL:
      if (!t)
        break;
      new Promise(function(V) {
        var R;
        V((R = t.onCancel) == null ? void 0 : R.call(t, XU(l.reason)));
      }).then(function() {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: ul.CANCEL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(V) {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: ul.CANCEL_COMPLETE,
          streamId: U,
          reason: XU(V)
        });
      }), t.sinkCapability.reject(XU(l.reason)), t.isCancelled = !0, delete this.streamSinks[U];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Vt = async function(l, U) {
  var d, Z, F;
  await Promise.allSettled([(d = l.startCall) == null ? void 0 : d.promise, (Z = l.pullCall) == null ? void 0 : Z.promise, (F = l.cancelCall) == null ? void 0 : F.promise]), delete this.streamControllers[U];
};
var eF, DQ;
class bh {
  constructor({
    parsedData: l,
    rawData: U
  }) {
    i(this, eF);
    i(this, DQ);
    m(this, eF, l), m(this, DQ, U);
  }
  getRaw() {
    return Q(this, DQ);
  }
  get(l) {
    return Q(this, eF).get(l) ?? null;
  }
  getAll() {
    return hN(Q(this, eF));
  }
  has(l) {
    return Q(this, eF).has(l);
  }
}
eF = new WeakMap(), DQ = new WeakMap();
const SZ = Symbol("INTERNAL");
var kQ, IQ, EQ, j0;
class ah {
  constructor(l, {
    name: U,
    intent: d,
    usage: Z
  }) {
    i(this, kQ, !1);
    i(this, IQ, !1);
    i(this, EQ, !1);
    i(this, j0, !0);
    m(this, kQ, !!(l & KU.DISPLAY)), m(this, IQ, !!(l & KU.PRINT)), this.name = U, this.intent = d, this.usage = Z;
  }
  get visible() {
    if (Q(this, EQ))
      return Q(this, j0);
    if (!Q(this, j0))
      return !1;
    const {
      print: l,
      view: U
    } = this.usage;
    return Q(this, kQ) ? (U == null ? void 0 : U.viewState) !== "OFF" : Q(this, IQ) ? (l == null ? void 0 : l.printState) !== "OFF" : !0;
  }
  _setVisible(l, U, d = !1) {
    l !== SZ && nl("Internal method `_setVisible` called."), m(this, EQ, d), m(this, j0, U);
  }
}
kQ = new WeakMap(), IQ = new WeakMap(), EQ = new WeakMap(), j0 = new WeakMap();
var zZ, sl, O0, r0, CQ, JR;
class mh {
  constructor(l, U = KU.DISPLAY) {
    i(this, CQ);
    i(this, zZ, null);
    i(this, sl, /* @__PURE__ */ new Map());
    i(this, O0, null);
    i(this, r0, null);
    if (this.renderingIntent = U, this.name = null, this.creator = null, l !== null) {
      this.name = l.name, this.creator = l.creator, m(this, r0, l.order);
      for (const d of l.groups)
        Q(this, sl).set(d.id, new ah(U, d));
      if (l.baseState === "OFF")
        for (const d of Q(this, sl).values())
          d._setVisible(SZ, !1);
      for (const d of l.on)
        Q(this, sl).get(d)._setVisible(SZ, !0);
      for (const d of l.off)
        Q(this, sl).get(d)._setVisible(SZ, !1);
      m(this, O0, this.getHash());
    }
  }
  isVisible(l) {
    if (Q(this, sl).size === 0)
      return !0;
    if (!l)
      return NV("Optional content group not defined."), !0;
    if (l.type === "OCG")
      return Q(this, sl).has(l.id) ? Q(this, sl).get(l.id).visible : (f(`Optional content group not found: ${l.id}`), !0);
    if (l.type === "OCMD") {
      if (l.expression)
        return h(this, CQ, JR).call(this, l.expression);
      if (!l.policy || l.policy === "AnyOn") {
        for (const U of l.ids) {
          if (!Q(this, sl).has(U))
            return f(`Optional content group not found: ${U}`), !0;
          if (Q(this, sl).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOn") {
        for (const U of l.ids) {
          if (!Q(this, sl).has(U))
            return f(`Optional content group not found: ${U}`), !0;
          if (!Q(this, sl).get(U).visible)
            return !1;
        }
        return !0;
      } else if (l.policy === "AnyOff") {
        for (const U of l.ids) {
          if (!Q(this, sl).has(U))
            return f(`Optional content group not found: ${U}`), !0;
          if (!Q(this, sl).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOff") {
        for (const U of l.ids) {
          if (!Q(this, sl).has(U))
            return f(`Optional content group not found: ${U}`), !0;
          if (Q(this, sl).get(U).visible)
            return !1;
        }
        return !0;
      }
      return f(`Unknown optional content policy ${l.policy}.`), !0;
    }
    return f(`Unknown group type ${l.type}.`), !0;
  }
  setVisibility(l, U = !0) {
    const d = Q(this, sl).get(l);
    if (!d) {
      f(`Optional content group not found: ${l}`);
      return;
    }
    d._setVisible(SZ, !!U, !0), m(this, zZ, null);
  }
  setOCGState({
    state: l,
    preserveRB: U
  }) {
    let d;
    for (const Z of l) {
      switch (Z) {
        case "ON":
        case "OFF":
        case "Toggle":
          d = Z;
          continue;
      }
      const F = Q(this, sl).get(Z);
      if (F)
        switch (d) {
          case "ON":
            F._setVisible(SZ, !0);
            break;
          case "OFF":
            F._setVisible(SZ, !1);
            break;
          case "Toggle":
            F._setVisible(SZ, !F.visible);
            break;
        }
    }
    m(this, zZ, null);
  }
  get hasInitialVisibility() {
    return Q(this, O0) === null || this.getHash() === Q(this, O0);
  }
  getOrder() {
    return Q(this, sl).size ? Q(this, r0) ? Q(this, r0).slice() : [...Q(this, sl).keys()] : null;
  }
  getGroups() {
    return Q(this, sl).size > 0 ? hN(Q(this, sl)) : null;
  }
  getGroup(l) {
    return Q(this, sl).get(l) || null;
  }
  getHash() {
    if (Q(this, zZ) !== null)
      return Q(this, zZ);
    const l = new Mn();
    for (const [U, d] of Q(this, sl))
      l.update(`${U}:${d.visible}`);
    return m(this, zZ, l.hexdigest());
  }
}
zZ = new WeakMap(), sl = new WeakMap(), O0 = new WeakMap(), r0 = new WeakMap(), CQ = new WeakSet(), JR = function(l) {
  const U = l.length;
  if (U < 2)
    return !0;
  const d = l[0];
  for (let Z = 1; Z < U; Z++) {
    const F = l[Z];
    let W;
    if (Array.isArray(F))
      W = h(this, CQ, JR).call(this, F);
    else if (Q(this, sl).has(F))
      W = Q(this, sl).get(F).visible;
    else
      return f(`Optional content group not found: ${F}`), !0;
    switch (d) {
      case "And":
        if (!W)
          return !1;
        break;
      case "Or":
        if (W)
          return !0;
        break;
      case "Not":
        return !W;
      default:
        return !0;
    }
  }
  return d === "And";
};
class hh {
  constructor(l, {
    disableRange: U = !1,
    disableStream: d = !1
  }) {
    Cl(l, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: Z,
      initialData: F,
      progressiveDone: W,
      contentDispositionFilename: t
    } = l;
    if (this._queuedChunks = [], this._progressiveDone = W, this._contentDispositionFilename = t, (F == null ? void 0 : F.length) > 0) {
      const V = F instanceof Uint8Array && F.byteLength === F.buffer.byteLength ? F.buffer : new Uint8Array(F).buffer;
      this._queuedChunks.push(V);
    }
    this._pdfDataRangeTransport = l, this._isStreamingSupported = !d, this._isRangeSupported = !U, this._contentLength = Z, this._fullRequestReader = null, this._rangeReaders = [], l.addRangeListener((V, R) => {
      this._onReceiveData({
        begin: V,
        chunk: R
      });
    }), l.addProgressListener((V, R) => {
      this._onProgress({
        loaded: V,
        total: R
      });
    }), l.addProgressiveReadListener((V) => {
      this._onReceiveData({
        chunk: V
      });
    }), l.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), l.transportReady();
  }
  _onReceiveData({
    begin: l,
    chunk: U
  }) {
    const d = U instanceof Uint8Array && U.byteLength === U.buffer.byteLength ? U.buffer : new Uint8Array(U).buffer;
    if (l === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(d) : this._queuedChunks.push(d);
    else {
      const Z = this._rangeReaders.some(function(F) {
        return F._begin !== l ? !1 : (F._enqueue(d), !0);
      });
      Cl(Z, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  _onProgress(l) {
    var U, d, Z, F;
    l.total === void 0 ? (d = (U = this._rangeReaders[0]) == null ? void 0 : U.onProgress) == null || d.call(U, {
      loaded: l.loaded
    }) : (F = (Z = this._fullRequestReader) == null ? void 0 : Z.onProgress) == null || F.call(Z, {
      loaded: l.loaded,
      total: l.total
    });
  }
  _onProgressiveDone() {
    var l;
    (l = this._fullRequestReader) == null || l.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(l) {
    const U = this._rangeReaders.indexOf(l);
    U >= 0 && this._rangeReaders.splice(U, 1);
  }
  getFullReader() {
    Cl(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const l = this._queuedChunks;
    return this._queuedChunks = null, new ih(this, l, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const d = new Mh(this, l, U);
    return this._pdfDataRangeTransport.requestDataRange(l, U), this._rangeReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeReaders.slice(0))
      d.cancel(l);
    this._pdfDataRangeTransport.abort();
  }
}
class ih {
  constructor(l, U, d = !1, Z = null) {
    this._stream = l, this._done = d || !1, this._filename = JN(Z) ? Z : null, this._queuedChunks = U || [], this._loaded = 0;
    for (const F of this._queuedChunks)
      this._loaded += F.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), l._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(l) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: l,
      done: !1
    }) : this._queuedChunks.push(l), this._loaded += l.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0;
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Mh {
  constructor(l, U, d) {
    this._stream = l, this._begin = U, this._end = d, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(l) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = l;
      else {
        this._requests.shift().resolve({
          value: l,
          done: !1
        });
        for (const d of this._requests)
          d.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const U = this._queuedChunk;
      return this._queuedChunk = null, {
        value: U,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0;
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Th(c) {
  let l = !0, U = d("filename\\*", "i").exec(c);
  if (U) {
    U = U[1];
    let N = t(U);
    return N = unescape(N), N = V(N), N = R(N), F(N);
  }
  if (U = W(c), U) {
    const N = R(U);
    return F(N);
  }
  if (U = d("filename", "i").exec(c), U) {
    U = U[1];
    let N = t(U);
    return N = R(N), F(N);
  }
  function d(N, s) {
    return new RegExp("(?:^|;)\\s*" + N + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', s);
  }
  function Z(N, s) {
    if (N) {
      if (!/^[\x00-\xFF]+$/.test(s))
        return s;
      try {
        const n = new TextDecoder(N, {
          fatal: !0
        }), b = nV(s);
        s = n.decode(b), l = !1;
      } catch {
      }
    }
    return s;
  }
  function F(N) {
    return l && /[\x80-\xff]/.test(N) && (N = Z("utf-8", N), l && (N = Z("iso-8859-1", N))), N;
  }
  function W(N) {
    const s = [];
    let n;
    const b = d("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (n = b.exec(N)) !== null; ) {
      let [, M, G, T] = n;
      if (M = parseInt(M, 10), M in s) {
        if (M === 0)
          break;
        continue;
      }
      s[M] = [G, T];
    }
    const a = [];
    for (let M = 0; M < s.length && M in s; ++M) {
      let [G, T] = s[M];
      T = t(T), G && (T = unescape(T), M === 0 && (T = V(T))), a.push(T);
    }
    return a.join("");
  }
  function t(N) {
    if (N.startsWith('"')) {
      const s = N.slice(1).split('\\"');
      for (let n = 0; n < s.length; ++n) {
        const b = s[n].indexOf('"');
        b !== -1 && (s[n] = s[n].slice(0, b), s.length = n + 1), s[n] = s[n].replaceAll(/\\(.)/g, "$1");
      }
      N = s.join('"');
    }
    return N;
  }
  function V(N) {
    const s = N.indexOf("'");
    if (s === -1)
      return N;
    const n = N.slice(0, s), a = N.slice(s + 1).replace(/^[^']*'/, "");
    return Z(n, a);
  }
  function R(N) {
    return !N.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(N) ? N : N.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(s, n, b, a) {
      if (b === "q" || b === "Q")
        return a = a.replaceAll("_", " "), a = a.replaceAll(/=([0-9a-fA-F]{2})/g, function(M, G) {
          return String.fromCharCode(parseInt(G, 16));
        }), Z(n, a);
      try {
        a = atob(a);
      } catch {
      }
      return Z(n, a);
    });
  }
  return "";
}
function YN({
  getResponseHeader: c,
  isHttp: l,
  rangeChunkSize: U,
  disableRange: d
}) {
  const Z = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, F = parseInt(c("Content-Length"), 10);
  return !Number.isInteger(F) || (Z.suggestedLength = F, F <= 2 * U) || d || !l || c("Accept-Ranges") !== "bytes" || (c("Content-Encoding") || "identity") !== "identity" || (Z.allowRangeRequests = !0), Z;
}
function BN(c) {
  const l = c("Content-Disposition");
  if (l) {
    let U = Th(l);
    if (U.includes("%"))
      try {
        U = decodeURIComponent(U);
      } catch {
      }
    if (JN(U))
      return U;
  }
  return null;
}
function iV(c, l) {
  return c === 404 || c === 0 && l.startsWith("file:") ? new N0('Missing PDF "' + l + '".') : new sV(`Unexpected server response (${c}) while retrieving PDF "${l}".`, c);
}
function Yn(c) {
  return c === 200 || c === 206;
}
function Bn(c, l, U) {
  return {
    method: "GET",
    headers: c,
    signal: U.signal,
    mode: "cors",
    credentials: l ? "include" : "same-origin",
    redirect: "follow"
  };
}
function en(c) {
  const l = new Headers();
  for (const U in c) {
    const d = c[U];
    d !== void 0 && l.append(U, d);
  }
  return l;
}
function un(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (f(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class Rs {
  constructor(l) {
    this.source = l, this.isHttp = /^https?:/i.test(l.url), this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return Cl(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Gh(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const d = new Jh(this, l, U);
    return this._rangeRequestReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeRequestReaders.slice(0))
      d.cancel(l);
  }
}
class Gh {
  constructor(l) {
    this._stream = l, this._reader = null, this._loaded = 0, this._filename = null;
    const U = l.source;
    this._withCredentials = U.withCredentials || !1, this._contentLength = U.length, this._headersCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._headers = en(this._stream.httpHeaders);
    const d = U.url;
    fetch(d, Bn(this._headers, this._withCredentials, this._abortController)).then((Z) => {
      if (!Yn(Z.status))
        throw iV(Z.status, d);
      this._reader = Z.body.getReader(), this._headersCapability.resolve();
      const F = (V) => Z.headers.get(V), {
        allowRangeRequests: W,
        suggestedLength: t
      } = YN({
        getResponseHeader: F,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = W, this._contentLength = t || this._contentLength, this._filename = BN(F), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new s0("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var d;
    await this._headersCapability.promise;
    const {
      value: l,
      done: U
    } = await this._reader.read();
    return U ? {
      value: l,
      done: U
    } : (this._loaded += l.byteLength, (d = this.onProgress) == null || d.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: un(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
class Jh {
  constructor(l, U, d) {
    this._stream = l, this._reader = null, this._loaded = 0;
    const Z = l.source;
    this._withCredentials = Z.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !Z.disableStream, this._abortController = new AbortController(), this._headers = en(this._stream.httpHeaders), this._headers.append("Range", `bytes=${U}-${d - 1}`);
    const F = Z.url;
    fetch(F, Bn(this._headers, this._withCredentials, this._abortController)).then((W) => {
      if (!Yn(W.status))
        throw iV(W.status, F);
      this._readCapability.resolve(), this._reader = W.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var d;
    await this._readCapability.promise;
    const {
      value: l,
      done: U
    } = await this._reader.read();
    return U ? {
      value: l,
      done: U
    } : (this._loaded += l.byteLength, (d = this.onProgress) == null || d.call(this, {
      loaded: this._loaded
    }), {
      value: un(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
const EV = 200, CV = 206;
function Sh(c) {
  const l = c.response;
  return typeof l != "string" ? l : nV(l).buffer;
}
class Xh {
  constructor(l, U = {}) {
    this.url = l, this.isHttp = /^https?:/i.test(l), this.httpHeaders = this.isHttp && U.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = U.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(l, U, d) {
    const Z = {
      begin: l,
      end: U
    };
    for (const F in d)
      Z[F] = d[F];
    return this.request(Z);
  }
  requestFull(l) {
    return this.request(l);
  }
  request(l) {
    const U = new XMLHttpRequest(), d = this.currXhrId++, Z = this.pendingRequests[d] = {
      xhr: U
    };
    U.open("GET", this.url), U.withCredentials = this.withCredentials;
    for (const F in this.httpHeaders) {
      const W = this.httpHeaders[F];
      W !== void 0 && U.setRequestHeader(F, W);
    }
    return this.isHttp && "begin" in l && "end" in l ? (U.setRequestHeader("Range", `bytes=${l.begin}-${l.end - 1}`), Z.expectedStatus = CV) : Z.expectedStatus = EV, U.responseType = "arraybuffer", l.onError && (U.onerror = function(F) {
      l.onError(U.status);
    }), U.onreadystatechange = this.onStateChange.bind(this, d), U.onprogress = this.onProgress.bind(this, d), Z.onHeadersReceived = l.onHeadersReceived, Z.onDone = l.onDone, Z.onError = l.onError, Z.onProgress = l.onProgress, U.send(null), d;
  }
  onProgress(l, U) {
    var Z;
    const d = this.pendingRequests[l];
    d && ((Z = d.onProgress) == null || Z.call(d, U));
  }
  onStateChange(l, U) {
    var V, R, N;
    const d = this.pendingRequests[l];
    if (!d)
      return;
    const Z = d.xhr;
    if (Z.readyState >= 2 && d.onHeadersReceived && (d.onHeadersReceived(), delete d.onHeadersReceived), Z.readyState !== 4 || !(l in this.pendingRequests))
      return;
    if (delete this.pendingRequests[l], Z.status === 0 && this.isHttp) {
      (V = d.onError) == null || V.call(d, Z.status);
      return;
    }
    const F = Z.status || EV;
    if (!(F === EV && d.expectedStatus === CV) && F !== d.expectedStatus) {
      (R = d.onError) == null || R.call(d, Z.status);
      return;
    }
    const t = Sh(Z);
    if (F === CV) {
      const s = Z.getResponseHeader("Content-Range"), n = /bytes (\d+)-(\d+)\/(\d+)/.exec(s);
      d.onDone({
        begin: parseInt(n[1], 10),
        chunk: t
      });
    } else t ? d.onDone({
      begin: 0,
      chunk: t
    }) : (N = d.onError) == null || N.call(d, Z.status);
  }
  getRequestXhr(l) {
    return this.pendingRequests[l].xhr;
  }
  isPendingRequest(l) {
    return l in this.pendingRequests;
  }
  abortRequest(l) {
    const U = this.pendingRequests[l].xhr;
    delete this.pendingRequests[l], U.abort();
  }
}
class Yh {
  constructor(l) {
    this._source = l, this._manager = new Xh(l.url, {
      httpHeaders: l.httpHeaders,
      withCredentials: l.withCredentials
    }), this._rangeChunkSize = l.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(l) {
    const U = this._rangeRequestReaders.indexOf(l);
    U >= 0 && this._rangeRequestReaders.splice(U, 1);
  }
  getFullReader() {
    return Cl(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Bh(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    const d = new eh(this._manager, l, U);
    return d.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeRequestReaders.slice(0))
      d.cancel(l);
  }
}
class Bh {
  constructor(l, U) {
    this._manager = l;
    const d = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = U.url, this._fullRequestId = l.requestFull(d), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._contentLength = U.length, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const l = this._fullRequestId, U = this._manager.getRequestXhr(l), d = (W) => U.getResponseHeader(W), {
      allowRangeRequests: Z,
      suggestedLength: F
    } = YN({
      getResponseHeader: d,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    Z && (this._isRangeSupported = !0), this._contentLength = F || this._contentLength, this._filename = BN(d), this._isRangeSupported && this._manager.abortRequest(l), this._headersReceivedCapability.resolve();
  }
  _onDone(l) {
    if (l && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: l.chunk,
      done: !1
    }) : this._cachedChunks.push(l.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const U of this._requests)
        U.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(l) {
    this._storedError = iV(l, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const U of this._requests)
      U.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(l) {
    var U;
    (U = this.onProgress) == null || U.call(this, {
      loaded: l.loaded,
      total: l.lengthComputable ? l.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0, this._headersReceivedCapability.reject(l);
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class eh {
  constructor(l, U, d) {
    this._manager = l;
    const Z = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = l.url, this._requestId = l.requestRange(U, d, Z), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var l;
    (l = this.onClosed) == null || l.call(this, this);
  }
  _onDone(l) {
    const U = l.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: U,
      done: !1
    }) : this._queuedChunk = U, this._done = !0;
    for (const d of this._requests)
      d.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(l) {
    this._storedError = iV(l, this._url);
    for (const U of this._requests)
      U.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(l) {
    var U;
    this.isStreamingSupported || (U = this.onProgress) == null || U.call(this, {
      loaded: l.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const U = this._queuedChunk;
      return this._queuedChunk = null, {
        value: U,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const l = Promise.withResolvers();
    return this._requests.push(l), l.promise;
  }
  cancel(l) {
    this._done = !0;
    for (const U of this._requests)
      U.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const pn = /^file:\/\/\/[a-zA-Z]:\//;
function uh(c) {
  const l = od.get("url"), U = l.parse(c);
  return U.protocol === "file:" || U.host ? U : /^[a-z]:[/\\]/i.test(c) ? l.parse(`file:///${c}`) : (U.host || (U.protocol = "file:"), U);
}
class ph {
  constructor(l) {
    this.source = l, this.url = uh(l.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return Cl(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new oh(this) : new yh(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const d = this.isFsUrl ? new zh(this, l, U) : new Lh(this, l, U);
    return this._rangeRequestReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeRequestReaders.slice(0))
      d.cancel(l);
  }
}
class yn {
  constructor(l) {
    this._url = l.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const U = l.source;
    this._contentLength = U.length, this._loaded = 0, this._filename = null, this._disableRange = U.disableRange || !1, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var d;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const l = this._readableStream.read();
    return l === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += l.length, (d = this.onProgress) == null || d.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(l).buffer,
      done: !1
    });
  }
  cancel(l) {
    if (!this._readableStream) {
      this._error(l);
      return;
    }
    this._readableStream.destroy(l);
  }
  _error(l) {
    this._storedError = l, this._readCapability.resolve();
  }
  _setReadableStream(l) {
    this._readableStream = l, l.on("readable", () => {
      this._readCapability.resolve();
    }), l.on("end", () => {
      l.destroy(), this._done = !0, this._readCapability.resolve();
    }), l.on("error", (U) => {
      this._error(U);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new s0("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class Ln {
  constructor(l) {
    this._url = l.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const U = l.source;
    this._isStreamingSupported = !U.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var d;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const l = this._readableStream.read();
    return l === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += l.length, (d = this.onProgress) == null || d.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(l).buffer,
      done: !1
    });
  }
  cancel(l) {
    if (!this._readableStream) {
      this._error(l);
      return;
    }
    this._readableStream.destroy(l);
  }
  _error(l) {
    this._storedError = l, this._readCapability.resolve();
  }
  _setReadableStream(l) {
    this._readableStream = l, l.on("readable", () => {
      this._readCapability.resolve();
    }), l.on("end", () => {
      l.destroy(), this._done = !0, this._readCapability.resolve();
    }), l.on("error", (U) => {
      this._error(U);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function wt(c, l) {
  return {
    protocol: c.protocol,
    auth: c.auth,
    host: c.hostname,
    port: c.port,
    path: c.path,
    method: "GET",
    headers: l
  };
}
class yh extends yn {
  constructor(l) {
    super(l);
    const U = (d) => {
      if (d.statusCode === 404) {
        const t = new N0(`Missing PDF "${this._url}".`);
        this._storedError = t, this._headersCapability.reject(t);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(d);
      const Z = (t) => this._readableStream.headers[t.toLowerCase()], {
        allowRangeRequests: F,
        suggestedLength: W
      } = YN({
        getResponseHeader: Z,
        isHttp: l.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = F, this._contentLength = W || this._contentLength, this._filename = BN(Z);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const d = od.get("http");
      this._request = d.request(wt(this._url, l.httpHeaders), U);
    } else {
      const d = od.get("https");
      this._request = d.request(wt(this._url, l.httpHeaders), U);
    }
    this._request.on("error", (d) => {
      this._storedError = d, this._headersCapability.reject(d);
    }), this._request.end();
  }
}
class Lh extends Ln {
  constructor(l, U, d) {
    super(l), this._httpHeaders = {};
    for (const F in l.httpHeaders) {
      const W = l.httpHeaders[F];
      W !== void 0 && (this._httpHeaders[F] = W);
    }
    this._httpHeaders.Range = `bytes=${U}-${d - 1}`;
    const Z = (F) => {
      if (F.statusCode === 404) {
        const W = new N0(`Missing PDF "${this._url}".`);
        this._storedError = W;
        return;
      }
      this._setReadableStream(F);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const F = od.get("http");
      this._request = F.request(wt(this._url, this._httpHeaders), Z);
    } else {
      const F = od.get("https");
      this._request = F.request(wt(this._url, this._httpHeaders), Z);
    }
    this._request.on("error", (F) => {
      this._storedError = F;
    }), this._request.end();
  }
}
class oh extends yn {
  constructor(l) {
    super(l);
    let U = decodeURIComponent(this._url.path);
    pn.test(this._url.href) && (U = U.replace(/^\//, ""));
    const d = od.get("fs");
    d.promises.lstat(U).then((Z) => {
      this._contentLength = Z.size, this._setReadableStream(d.createReadStream(U)), this._headersCapability.resolve();
    }, (Z) => {
      Z.code === "ENOENT" && (Z = new N0(`Missing PDF "${U}".`)), this._storedError = Z, this._headersCapability.reject(Z);
    });
  }
}
class zh extends Ln {
  constructor(l, U, d) {
    super(l);
    let Z = decodeURIComponent(this._url.path);
    pn.test(this._url.href) && (Z = Z.replace(/^\//, ""));
    const F = od.get("fs");
    this._setReadableStream(F.createReadStream(Z, {
      start: U,
      end: d - 1
    }));
  }
}
const Dh = 1e5, aU = 30, kh = 0.8;
var Ms, DZ, hU, wQ, xQ, uF, Ad, jQ, OQ, pF, K0, g0, kZ, H0, rQ, v0, yF, KQ, gQ, LF, oF, IZ, P0, iZ, on, zn, SR, yd, Rt, Dn, kn;
const UU = class UU {
  constructor({
    textContentSource: l,
    container: U,
    viewport: d
  }) {
    i(this, iZ);
    i(this, DZ, Promise.withResolvers());
    i(this, hU, null);
    i(this, wQ, !1);
    i(this, xQ, !!((Ms = globalThis.FontInspector) != null && Ms.enabled));
    i(this, uF, null);
    i(this, Ad, null);
    i(this, jQ, 0);
    i(this, OQ, 0);
    i(this, pF, null);
    i(this, K0, null);
    i(this, g0, 0);
    i(this, kZ, 0);
    i(this, H0, /* @__PURE__ */ Object.create(null));
    i(this, rQ, []);
    i(this, v0, null);
    i(this, yF, []);
    i(this, KQ, /* @__PURE__ */ new WeakMap());
    i(this, gQ, null);
    var V;
    if (l instanceof ReadableStream)
      m(this, v0, l);
    else if (typeof l == "object")
      m(this, v0, new ReadableStream({
        start(R) {
          R.enqueue(l), R.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    m(this, hU, m(this, K0, U)), m(this, kZ, d.scale * (globalThis.devicePixelRatio || 1)), m(this, g0, d.rotation), m(this, Ad, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: Z,
      pageHeight: F,
      pageX: W,
      pageY: t
    } = d.rawDims;
    m(this, gQ, [1, 0, 0, -1, -W, t + F]), m(this, OQ, Z), m(this, jQ, F), h(V = UU, yd, Dn).call(V), Q0(U, d), Q(this, DZ).promise.catch(() => {
    }).then(() => {
      Q(UU, P0).delete(this), m(this, Ad, null), m(this, H0, null);
    });
  }
  render() {
    const l = () => {
      Q(this, pF).read().then(({
        value: U,
        done: d
      }) => {
        if (d) {
          Q(this, DZ).resolve();
          return;
        }
        Q(this, uF) ?? m(this, uF, U.lang), Object.assign(Q(this, H0), U.styles), h(this, iZ, on).call(this, U.items), l();
      }, Q(this, DZ).reject);
    };
    return m(this, pF, Q(this, v0).getReader()), Q(UU, P0).add(this), l(), Q(this, DZ).promise;
  }
  update({
    viewport: l,
    onBefore: U = null
  }) {
    var F;
    const d = l.scale * (globalThis.devicePixelRatio || 1), Z = l.rotation;
    if (Z !== Q(this, g0) && (U == null || U(), m(this, g0, Z), Q0(Q(this, K0), {
      rotation: Z
    })), d !== Q(this, kZ)) {
      U == null || U(), m(this, kZ, d);
      const W = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: h(F = UU, yd, Rt).call(F, Q(this, uF))
      };
      for (const t of Q(this, yF))
        W.properties = Q(this, KQ).get(t), W.div = t, h(this, iZ, SR).call(this, W);
    }
  }
  cancel() {
    var U;
    const l = new s0("TextLayer task cancelled.");
    (U = Q(this, pF)) == null || U.cancel(l).catch(() => {
    }), m(this, pF, null), Q(this, DZ).reject(l);
  }
  get textDivs() {
    return Q(this, yF);
  }
  get textContentItemsStr() {
    return Q(this, rQ);
  }
  static cleanup() {
    if (!(Q(this, P0).size > 0)) {
      Q(this, LF).clear();
      for (const {
        canvas: l
      } of Q(this, oF).values())
        l.remove();
      Q(this, oF).clear();
    }
  }
};
DZ = new WeakMap(), hU = new WeakMap(), wQ = new WeakMap(), xQ = new WeakMap(), uF = new WeakMap(), Ad = new WeakMap(), jQ = new WeakMap(), OQ = new WeakMap(), pF = new WeakMap(), K0 = new WeakMap(), g0 = new WeakMap(), kZ = new WeakMap(), H0 = new WeakMap(), rQ = new WeakMap(), v0 = new WeakMap(), yF = new WeakMap(), KQ = new WeakMap(), gQ = new WeakMap(), LF = new WeakMap(), oF = new WeakMap(), IZ = new WeakMap(), P0 = new WeakMap(), iZ = new WeakSet(), on = function(l) {
  var Z, F;
  if (Q(this, wQ))
    return;
  (F = Q(this, Ad)).ctx ?? (F.ctx = h(Z = UU, yd, Rt).call(Z, Q(this, uF)));
  const U = Q(this, yF), d = Q(this, rQ);
  for (const W of l) {
    if (U.length > Dh) {
      f("Ignoring additional textDivs for performance reasons."), m(this, wQ, !0);
      return;
    }
    if (W.str === void 0) {
      if (W.type === "beginMarkedContentProps" || W.type === "beginMarkedContent") {
        const t = Q(this, hU);
        m(this, hU, document.createElement("span")), Q(this, hU).classList.add("markedContent"), W.id !== null && Q(this, hU).setAttribute("id", `${W.id}`), t.append(Q(this, hU));
      } else W.type === "endMarkedContent" && m(this, hU, Q(this, hU).parentNode);
      continue;
    }
    d.push(W.str), h(this, iZ, zn).call(this, W);
  }
}, zn = function(l) {
  var M;
  const U = document.createElement("span"), d = {
    angle: 0,
    canvasWidth: 0,
    hasText: l.str !== "",
    hasEOL: l.hasEOL,
    fontSize: 0
  };
  Q(this, yF).push(U);
  const Z = I.transform(Q(this, gQ), l.transform);
  let F = Math.atan2(Z[1], Z[0]);
  const W = Q(this, H0)[l.fontName];
  W.vertical && (F += Math.PI / 2);
  const t = Q(this, xQ) && W.fontSubstitution || W.fontFamily, V = Math.hypot(Z[2], Z[3]), R = V * h(M = UU, yd, kn).call(M, t, Q(this, uF));
  let N, s;
  F === 0 ? (N = Z[4], s = Z[5] - R) : (N = Z[4] + R * Math.sin(F), s = Z[5] - R * Math.cos(F));
  const n = "calc(var(--scale-factor)*", b = U.style;
  Q(this, hU) === Q(this, K0) ? (b.left = `${(100 * N / Q(this, OQ)).toFixed(2)}%`, b.top = `${(100 * s / Q(this, jQ)).toFixed(2)}%`) : (b.left = `${n}${N.toFixed(2)}px)`, b.top = `${n}${s.toFixed(2)}px)`), b.fontSize = `${n}${(Q(UU, IZ) * V).toFixed(2)}px)`, b.fontFamily = t, d.fontSize = V, U.setAttribute("role", "presentation"), U.textContent = l.str, U.dir = l.dir, Q(this, xQ) && (U.dataset.fontName = W.fontSubstitutionLoadedName || l.fontName), F !== 0 && (d.angle = F * (180 / Math.PI));
  let a = !1;
  if (l.str.length > 1)
    a = !0;
  else if (l.str !== " " && l.transform[0] !== l.transform[3]) {
    const G = Math.abs(l.transform[0]), T = Math.abs(l.transform[3]);
    G !== T && Math.max(G, T) / Math.min(G, T) > 1.5 && (a = !0);
  }
  if (a && (d.canvasWidth = W.vertical ? l.height : l.width), Q(this, KQ).set(U, d), Q(this, Ad).div = U, Q(this, Ad).properties = d, h(this, iZ, SR).call(this, Q(this, Ad)), d.hasText && Q(this, hU).append(U), d.hasEOL) {
    const G = document.createElement("br");
    G.setAttribute("role", "presentation"), Q(this, hU).append(G);
  }
}, SR = function(l) {
  const {
    div: U,
    properties: d,
    ctx: Z,
    prevFontSize: F,
    prevFontFamily: W
  } = l, {
    style: t
  } = U;
  let V = "";
  if (Q(UU, IZ) > 1 && (V = `scale(${1 / Q(UU, IZ)})`), d.canvasWidth !== 0 && d.hasText) {
    const {
      fontFamily: R
    } = t, {
      canvasWidth: N,
      fontSize: s
    } = d;
    (F !== s || W !== R) && (Z.font = `${s * Q(this, kZ)}px ${R}`, l.prevFontSize = s, l.prevFontFamily = R);
    const {
      width: n
    } = Z.measureText(U.textContent);
    n > 0 && (V = `scaleX(${N * Q(this, kZ) / n}) ${V}`);
  }
  d.angle !== 0 && (V = `rotate(${d.angle}deg) ${V}`), V.length > 0 && (t.transform = V);
}, yd = new WeakSet(), Rt = function(l = null) {
  let U = Q(this, oF).get(l || (l = ""));
  if (!U) {
    const d = document.createElement("canvas");
    d.className = "hiddenCanvasElement", d.lang = l, document.body.append(d), U = d.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), Q(this, oF).set(l, U);
  }
  return U;
}, Dn = function() {
  if (Q(this, IZ) !== null)
    return;
  const l = document.createElement("div");
  l.style.opacity = 0, l.style.lineHeight = 1, l.style.fontSize = "1px", l.textContent = "X", document.body.append(l), m(this, IZ, l.getBoundingClientRect().height), l.remove();
}, kn = function(l, U) {
  const d = Q(this, LF).get(l);
  if (d)
    return d;
  const Z = h(this, yd, Rt).call(this, U), F = Z.font;
  Z.canvas.width = Z.canvas.height = aU, Z.font = `${aU}px ${l}`;
  const W = Z.measureText("");
  let t = W.fontBoundingBoxAscent, V = Math.abs(W.fontBoundingBoxDescent);
  if (t) {
    const s = t / (t + V);
    return Q(this, LF).set(l, s), Z.canvas.width = Z.canvas.height = 0, Z.font = F, s;
  }
  Z.strokeStyle = "red", Z.clearRect(0, 0, aU, aU), Z.strokeText("g", 0, 0);
  let R = Z.getImageData(0, 0, aU, aU).data;
  V = 0;
  for (let s = R.length - 1 - 3; s >= 0; s -= 4)
    if (R[s] > 0) {
      V = Math.ceil(s / 4 / aU);
      break;
    }
  Z.clearRect(0, 0, aU, aU), Z.strokeText("A", 0, aU), R = Z.getImageData(0, 0, aU, aU).data, t = 0;
  for (let s = 0, n = R.length; s < n; s += 4)
    if (R[s] > 0) {
      t = aU - Math.floor(s / 4 / aU);
      break;
    }
  Z.canvas.width = Z.canvas.height = 0, Z.font = F;
  const N = t ? t / (t + V) : kh;
  return Q(this, LF).set(l, N), N;
}, i(UU, yd), i(UU, LF, /* @__PURE__ */ new Map()), i(UU, oF, /* @__PURE__ */ new Map()), i(UU, IZ, null), i(UU, P0, /* @__PURE__ */ new Set());
let XW = UU;
function Ih() {
  Hs("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: c,
    container: l,
    viewport: U,
    ...d
  } = arguments[0], Z = Object.keys(d);
  Z.length > 0 && f("Ignoring `renderTextLayer` parameters: " + Z.join(", "));
  const F = new XW({
    textContentSource: c,
    container: l,
    viewport: U
  }), {
    textDivs: W,
    textContentItemsStr: t
  } = F;
  return {
    promise: F.render(),
    textDivs: W,
    textContentItemsStr: t
  };
}
function Eh() {
  Hs("`updateTextLayer`, please use `TextLayer` instead.");
}
class dQ {
  static textContent(l) {
    const U = [], d = {
      items: U,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function Z(F) {
      var V;
      if (!F)
        return;
      let W = null;
      const t = F.name;
      if (t === "#text")
        W = F.value;
      else if (dQ.shouldBuildText(t))
        (V = F == null ? void 0 : F.attributes) != null && V.textContent ? W = F.attributes.textContent : F.value && (W = F.value);
      else return;
      if (W !== null && U.push({
        str: W
      }), !!F.children)
        for (const R of F.children)
          Z(R);
    }
    return Z(l), d;
  }
  static shouldBuildText(l) {
    return !(l === "textarea" || l === "input" || l === "option" || l === "select");
  }
}
const Ch = 65536, wh = 100, xh = 5e3, jh = FU ? qm : wm, Oh = FU ? $m : Ks, rh = FU ? _m : Cm, Kh = FU ? lh : gs;
function gh(c = {}) {
  typeof c == "string" || c instanceof URL ? c = {
    url: c
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c
  });
  const l = new XR(), {
    docId: U
  } = l, d = c.url ? Hh(c.url) : null, Z = c.data ? vh(c.data) : null, F = c.httpHeaders || null, W = c.withCredentials === !0, t = c.password ?? null, V = c.range instanceof In ? c.range : null, R = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : Ch;
  let N = c.worker instanceof e0 ? c.worker : null;
  const s = c.verbosity, n = typeof c.docBaseUrl == "string" && !GN(c.docBaseUrl) ? c.docBaseUrl : null, b = typeof c.cMapUrl == "string" ? c.cMapUrl : null, a = c.cMapPacked !== !1, M = c.CMapReaderFactory || Oh, G = typeof c.standardFontDataUrl == "string" ? c.standardFontDataUrl : null, T = c.StandardFontDataFactory || Kh, J = c.stopAtErrors !== !0, Y = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1, B = c.isEvalSupported !== !1, S = typeof c.isOffscreenCanvasSupported == "boolean" ? c.isOffscreenCanvasSupported : !FU, X = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1, e = typeof c.disableFontFace == "boolean" ? c.disableFontFace : FU, p = c.fontExtraProperties === !0, y = c.enableXfa === !0, j = c.ownerDocument || globalThis.document, D = c.disableRange === !0, ll = c.disableStream === !0, P = c.disableAutoFetch === !0, q = c.pdfBug === !0, dl = c.enableHWA === !0, Nl = V ? V.length : c.length ?? NaN, x = typeof c.useSystemFonts == "boolean" ? c.useSystemFonts : !FU && !e, w = typeof c.useWorkerFetch == "boolean" ? c.useWorkerFetch : M === Ks && T === gs && b && G && IW(b, document.baseURI) && IW(G, document.baseURI), GZ = c.canvasFactory || new jh({
    ownerDocument: j,
    enableHWA: dl
  }), lF = c.filterFactory || new rh({
    docId: U,
    ownerDocument: j
  }), zd = null;
  em(s);
  const ol = {
    canvasFactory: GZ,
    filterFactory: lF
  };
  if (w || (ol.cMapReaderFactory = new M({
    baseUrl: b,
    isCompressed: a
  }), ol.standardFontDataFactory = new T({
    baseUrl: G
  })), !N) {
    const Dd = {
      verbosity: s,
      port: nZ.workerPort
    };
    N = Dd.port ? e0.fromPort(Dd) : new e0(Dd), l._worker = N;
  }
  const wl = {
    docId: U,
    apiVersion: "4.4.168",
    data: Z,
    password: t,
    disableAutoFetch: P,
    rangeChunkSize: R,
    length: Nl,
    docBaseUrl: n,
    enableXfa: y,
    evaluatorOptions: {
      maxImageSize: Y,
      disableFontFace: e,
      ignoreErrors: J,
      isEvalSupported: B,
      isOffscreenCanvasSupported: S,
      canvasMaxAreaInBytes: X,
      fontExtraProperties: p,
      useSystemFonts: x,
      cMapUrl: w ? b : null,
      standardFontDataUrl: w ? G : null
    }
  }, YW = {
    disableFontFace: e,
    fontExtraProperties: p,
    ownerDocument: j,
    pdfBug: q,
    styleElement: zd,
    loadingParams: {
      disableAutoFetch: P,
      enableXfa: y
    }
  };
  return N.promise.then(function() {
    if (l.destroyed)
      throw new Error("Loading aborted");
    if (N.destroyed)
      throw new Error("Worker was destroyed");
    const Dd = N.messageHandler.sendWithPromise("GetDocRequest", wl, Z ? [Z.buffer] : null);
    let L;
    if (V)
      L = new hh(V, {
        disableRange: D,
        disableStream: ll
      });
    else if (!Z) {
      if (!d)
        throw new Error("getDocument - no `url` parameter provided.");
      L = ((tl) => FU ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && IW(tl.url) ? new Rs(tl) : new ph(tl) : IW(tl.url) ? new Rs(tl) : new Yh(tl))({
        url: d,
        length: Nl,
        httpHeaders: F,
        withCredentials: W,
        rangeChunkSize: R,
        disableRange: D,
        disableStream: ll
      });
    }
    return Dd.then((C) => {
      if (l.destroyed)
        throw new Error("Loading aborted");
      if (N.destroyed)
        throw new Error("Worker was destroyed");
      const tl = new wW(U, C, N.port), WU = new _h(tl, l, L, YW, ol);
      l._transport = WU, tl.send("Ready", null);
    });
  }).catch(l._capability.reject), l;
}
function Hh(c) {
  if (c instanceof URL)
    return c.href;
  try {
    return new URL(c, window.location).href;
  } catch {
    if (FU && typeof c == "string")
      return c;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function vh(c) {
  if (FU && typeof Buffer < "u" && c instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength)
    return c;
  if (typeof c == "string")
    return nV(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c == "object" && !isNaN(c == null ? void 0 : c.length))
    return new Uint8Array(c);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Ns(c) {
  return typeof c == "object" && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0;
}
var lV;
const UV = class UV {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${SU(UV, lV)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var l, U, d;
    this.destroyed = !0;
    try {
      (l = this._worker) != null && l.port && (this._worker._pendingDestroy = !0), await ((U = this._transport) == null ? void 0 : U.destroy());
    } catch (Z) {
      throw (d = this._worker) != null && d.port && delete this._worker._pendingDestroy, Z;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
lV = new WeakMap(), i(UV, lV, 0);
let XR = UV;
class In {
  constructor(l, U, d = !1, Z = null) {
    this.length = l, this.initialData = U, this.progressiveDone = d, this.contentDispositionFilename = Z, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(l) {
    this._rangeListeners.push(l);
  }
  addProgressListener(l) {
    this._progressListeners.push(l);
  }
  addProgressiveReadListener(l) {
    this._progressiveReadListeners.push(l);
  }
  addProgressiveDoneListener(l) {
    this._progressiveDoneListeners.push(l);
  }
  onDataRange(l, U) {
    for (const d of this._rangeListeners)
      d(l, U);
  }
  onDataProgress(l, U) {
    this._readyCapability.promise.then(() => {
      for (const d of this._progressListeners)
        d(l, U);
    });
  }
  onDataProgressiveRead(l) {
    this._readyCapability.promise.then(() => {
      for (const U of this._progressiveReadListeners)
        U(l);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const l of this._progressiveDoneListeners)
        l();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(l, U) {
    nl("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Ph {
  constructor(l, U) {
    this._pdfInfo = l, this._transport = U;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Fl(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(l) {
    return this._transport.getPage(l);
  }
  getPageIndex(l) {
    return this._transport.getPageIndex(l);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(l) {
    return this._transport.getDestination(l);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: l = "display"
  } = {}) {
    const {
      renderingIntent: U
    } = this._transport.getRenderingIntent(l);
    return this._transport.getOptionalContentConfig(U);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(l = !1) {
    return this._transport.startCleanup(l || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(l) {
    return this._transport.cachedPageNumber(l);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var EZ, _d, gU, T0, Nt;
class fh {
  constructor(l, U, d, Z = !1) {
    i(this, gU);
    i(this, EZ, null);
    i(this, _d, !1);
    this._pageIndex = l, this._pageInfo = U, this._transport = d, this._stats = Z ? new _N() : null, this._pdfBug = Z, this.commonObjs = d.commonObjs, this.objs = new En(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: l,
    rotation: U = this.rotate,
    offsetX: d = 0,
    offsetY: Z = 0,
    dontFlip: F = !1
  } = {}) {
    return new Cc({
      viewBox: this.view,
      scale: l,
      rotation: U,
      offsetX: d,
      offsetY: Z,
      dontFlip: F
    });
  }
  getAnnotations({
    intent: l = "display"
  } = {}) {
    const {
      renderingIntent: U
    } = this._transport.getRenderingIntent(l);
    return this._transport.getAnnotations(this._pageIndex, U);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Fl(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var l;
    return ((l = this._transport._htmlForXfa) == null ? void 0 : l.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: l,
    viewport: U,
    intent: d = "display",
    annotationMode: Z = eZ.ENABLE,
    transform: F = null,
    background: W = null,
    optionalContentConfigPromise: t = null,
    annotationCanvasMap: V = null,
    pageColors: R = null,
    printAnnotationStorage: N = null
  }) {
    var Y, B;
    (Y = this._stats) == null || Y.time("Overall");
    const s = this._transport.getRenderingIntent(d, Z, N), {
      renderingIntent: n,
      cacheKey: b
    } = s;
    m(this, _d, !1), h(this, gU, Nt).call(this), t || (t = this._transport.getOptionalContentConfig(n));
    let a = this._intentStates.get(b);
    a || (a = /* @__PURE__ */ Object.create(null), this._intentStates.set(b, a)), a.streamReaderCancelTimeout && (clearTimeout(a.streamReaderCancelTimeout), a.streamReaderCancelTimeout = null);
    const M = !!(n & KU.PRINT);
    a.displayReadyCapability || (a.displayReadyCapability = Promise.withResolvers(), a.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (B = this._stats) == null || B.time("Page Request"), this._pumpOperatorList(s));
    const G = (S) => {
      var X;
      a.renderTasks.delete(T), (this._maybeCleanupAfterRender || M) && m(this, _d, !0), h(this, gU, T0).call(this, !M), S ? (T.capability.reject(S), this._abortOperatorList({
        intentState: a,
        reason: S instanceof Error ? S : new Error(S)
      })) : T.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (X = globalThis.Stats) != null && X.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, T = new BR({
      callback: G,
      params: {
        canvasContext: l,
        viewport: U,
        transform: F,
        background: W
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: V,
      operatorList: a.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !M,
      pdfBug: this._pdfBug,
      pageColors: R
    });
    (a.renderTasks || (a.renderTasks = /* @__PURE__ */ new Set())).add(T);
    const J = T.task;
    return Promise.all([a.displayReadyCapability.promise, t]).then(([S, X]) => {
      var e;
      if (this.destroyed) {
        G();
        return;
      }
      if ((e = this._stats) == null || e.time("Rendering"), !(X.renderingIntent & n))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      T.initializeGraphics({
        transparency: S,
        optionalContentConfig: X
      }), T.operatorListChanged();
    }).catch(G), J;
  }
  getOperatorList({
    intent: l = "display",
    annotationMode: U = eZ.ENABLE,
    printAnnotationStorage: d = null
  } = {}) {
    var V;
    function Z() {
      W.operatorList.lastChunk && (W.opListReadCapability.resolve(W.operatorList), W.renderTasks.delete(t));
    }
    const F = this._transport.getRenderingIntent(l, U, d, !0);
    let W = this._intentStates.get(F.cacheKey);
    W || (W = /* @__PURE__ */ Object.create(null), this._intentStates.set(F.cacheKey, W));
    let t;
    return W.opListReadCapability || (t = /* @__PURE__ */ Object.create(null), t.operatorListChanged = Z, W.opListReadCapability = Promise.withResolvers(), (W.renderTasks || (W.renderTasks = /* @__PURE__ */ new Set())).add(t), W.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (V = this._stats) == null || V.time("Page Request"), this._pumpOperatorList(F)), W.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: l = !1,
    disableNormalization: U = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: l === !0,
      disableNormalization: U === !0
    }, {
      highWaterMark: 100,
      size(Z) {
        return Z.items.length;
      }
    });
  }
  getTextContent(l = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((d) => dQ.textContent(d));
    const U = this.streamTextContent(l);
    return new Promise(function(d, Z) {
      function F() {
        W.read().then(function({
          value: V,
          done: R
        }) {
          if (R) {
            d(t);
            return;
          }
          t.lang ?? (t.lang = V.lang), Object.assign(t.styles, V.styles), t.items.push(...V.items), F();
        }, Z);
      }
      const W = U.getReader(), t = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      F();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const l = [];
    for (const U of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: U,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !U.opListReadCapability)
        for (const d of U.renderTasks)
          l.push(d.completed), d.cancel();
    return this.objs.clear(), m(this, _d, !1), h(this, gU, Nt).call(this), Promise.all(l);
  }
  cleanup(l = !1) {
    m(this, _d, !0);
    const U = h(this, gU, T0).call(this, !1);
    return l && U && this._stats && (this._stats = new _N()), U;
  }
  _startRenderPage(l, U) {
    var Z, F;
    const d = this._intentStates.get(U);
    d && ((Z = this._stats) == null || Z.timeEnd("Page Request"), (F = d.displayReadyCapability) == null || F.resolve(l));
  }
  _renderPageChunk(l, U) {
    for (let d = 0, Z = l.length; d < Z; d++)
      U.operatorList.fnArray.push(l.fnArray[d]), U.operatorList.argsArray.push(l.argsArray[d]);
    U.operatorList.lastChunk = l.lastChunk, U.operatorList.separateAnnots = l.separateAnnots;
    for (const d of U.renderTasks)
      d.operatorListChanged();
    l.lastChunk && h(this, gU, T0).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: l,
    cacheKey: U,
    annotationStorageSerializable: d
  }) {
    const {
      map: Z,
      transfer: F
    } = d, t = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: l,
      cacheKey: U,
      annotationStorage: Z
    }, F).getReader(), V = this._intentStates.get(U);
    V.streamReader = t;
    const R = () => {
      t.read().then(({
        value: N,
        done: s
      }) => {
        if (s) {
          V.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(N, V), R());
      }, (N) => {
        if (V.streamReader = null, !this._transport.destroyed) {
          if (V.operatorList) {
            V.operatorList.lastChunk = !0;
            for (const s of V.renderTasks)
              s.operatorListChanged();
            h(this, gU, T0).call(this, !0);
          }
          if (V.displayReadyCapability)
            V.displayReadyCapability.reject(N);
          else if (V.opListReadCapability)
            V.opListReadCapability.reject(N);
          else
            throw N;
        }
      });
    };
    R();
  }
  _abortOperatorList({
    intentState: l,
    reason: U,
    force: d = !1
  }) {
    if (l.streamReader) {
      if (l.streamReaderCancelTimeout && (clearTimeout(l.streamReaderCancelTimeout), l.streamReaderCancelTimeout = null), !d) {
        if (l.renderTasks.size > 0)
          return;
        if (U instanceof TN) {
          let Z = wh;
          U.extraDelay > 0 && U.extraDelay < 1e3 && (Z += U.extraDelay), l.streamReaderCancelTimeout = setTimeout(() => {
            l.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: l,
              reason: U,
              force: !0
            });
          }, Z);
          return;
        }
      }
      if (l.streamReader.cancel(new s0(U.message)).catch(() => {
      }), l.streamReader = null, !this._transport.destroyed) {
        for (const [Z, F] of this._intentStates)
          if (F === l) {
            this._intentStates.delete(Z);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
EZ = new WeakMap(), _d = new WeakMap(), gU = new WeakSet(), T0 = function(l = !1) {
  if (h(this, gU, Nt).call(this), !Q(this, _d) || this.destroyed)
    return !1;
  if (l)
    return m(this, EZ, setTimeout(() => {
      m(this, EZ, null), h(this, gU, T0).call(this, !1);
    }, xh)), !1;
  for (const {
    renderTasks: U,
    operatorList: d
  } of this._intentStates.values())
    if (U.size > 0 || !d.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), m(this, _d, !1), !0;
}, Nt = function() {
  Q(this, EZ) && (clearTimeout(Q(this, EZ)), m(this, EZ, null));
};
var zF, dV;
class Ah {
  constructor() {
    i(this, zF, /* @__PURE__ */ new Set());
    i(this, dV, Promise.resolve());
  }
  postMessage(l, U) {
    const d = {
      data: structuredClone(l, U ? {
        transfer: U
      } : null)
    };
    Q(this, dV).then(() => {
      for (const Z of Q(this, zF))
        Z.call(this, d);
    });
  }
  addEventListener(l, U) {
    Q(this, zF).add(U);
  }
  removeEventListener(l, U) {
    Q(this, zF).delete(U);
  }
  terminate() {
    Q(this, zF).clear();
  }
}
zF = new WeakMap(), dV = new WeakMap();
const jd = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
FU && (jd.isWorkerDisabled = !0, nZ.workerSrc || (nZ.workerSrc = "./pdf.worker.mjs")), jd.isSameOrigin = function(c, l) {
  let U;
  try {
    if (U = new URL(c), !U.origin || U.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const d = new URL(l, U);
  return U.origin === d.origin;
}, jd.createCDNWrapper = function(c) {
  const l = `await import("${c}");`;
  return URL.createObjectURL(new Blob([l], {
    type: "text/javascript"
  }));
};
var DF, f0, st, A0, nt;
const eU = class eU {
  constructor({
    name: l = null,
    port: U = null,
    verbosity: d = um()
  } = {}) {
    i(this, f0);
    var Z;
    if (this.name = l, this.destroyed = !1, this.verbosity = d, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, U) {
      if ((Z = Q(eU, DF)) != null && Z.has(U))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (Q(eU, DF) || m(eU, DF, /* @__PURE__ */ new WeakMap())).set(U, this), this._initializeFromPort(U);
      return;
    }
    this._initialize();
  }
  get promise() {
    return FU ? Promise.all([od.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(l) {
    this._port = l, this._messageHandler = new wW("main", "worker", l), this._messageHandler.on("ready", function() {
    }), h(this, f0, st).call(this);
  }
  _initialize() {
    if (jd.isWorkerDisabled || Q(eU, A0, nt)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: l
    } = eU;
    try {
      jd.isSameOrigin(window.location.href, l) || (l = jd.createCDNWrapper(new URL(l, window.location).href));
      const U = new Worker(l, {
        type: "module"
      }), d = new wW("main", "worker", U), Z = () => {
        F.abort(), d.destroy(), U.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, F = new AbortController();
      U.addEventListener("error", () => {
        this._webWorker || Z();
      }, {
        signal: F.signal
      }), d.on("test", (t) => {
        if (F.abort(), this.destroyed || !t) {
          Z();
          return;
        }
        this._messageHandler = d, this._port = U, this._webWorker = U, h(this, f0, st).call(this);
      }), d.on("ready", (t) => {
        if (F.abort(), this.destroyed) {
          Z();
          return;
        }
        try {
          W();
        } catch {
          this._setupFakeWorker();
        }
      });
      const W = () => {
        const t = new Uint8Array();
        d.send("test", t, [t.buffer]);
      };
      W();
      return;
    } catch {
      NV("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    jd.isWorkerDisabled || (f("Setting up fake worker."), jd.isWorkerDisabled = !0), eU._setupFakeWorkerGlobal.then((l) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const U = new Ah();
      this._port = U;
      const d = `fake${jd.fakeWorkerId++}`, Z = new wW(d + "_worker", d, U);
      l.setup(Z, U), this._messageHandler = new wW(d, d + "_worker", U), h(this, f0, st).call(this);
    }).catch((l) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${l.message}".`));
    });
  }
  destroy() {
    var l;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (l = Q(eU, DF)) == null || l.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(l) {
    var d;
    if (!(l != null && l.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const U = (d = Q(this, DF)) == null ? void 0 : d.get(l.port);
    if (U) {
      if (U._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return U;
    }
    return new eU(l);
  }
  static get workerSrc() {
    if (nZ.workerSrc)
      return nZ.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Fl(this, "_setupFakeWorkerGlobal", (async () => Q(this, A0, nt) ? Q(this, A0, nt) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
DF = new WeakMap(), f0 = new WeakSet(), st = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, A0 = new WeakSet(), nt = function() {
  var l;
  try {
    return ((l = globalThis.pdfjsWorker) == null ? void 0 : l.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, i(eU, A0), i(eU, DF);
let e0 = eU;
var qd, id, _0, q0, Md, kF, xW;
class _h {
  constructor(l, U, d, Z, F) {
    i(this, kF);
    i(this, qd, /* @__PURE__ */ new Map());
    i(this, id, /* @__PURE__ */ new Map());
    i(this, _0, /* @__PURE__ */ new Map());
    i(this, q0, /* @__PURE__ */ new Map());
    i(this, Md, null);
    this.messageHandler = l, this.loadingTask = U, this.commonObjs = new En(), this.fontLoader = new fm({
      ownerDocument: Z.ownerDocument,
      styleElement: Z.styleElement
    }), this.loadingParams = Z.loadingParams, this._params = Z, this.canvasFactory = F.canvasFactory, this.filterFactory = F.filterFactory, this.cMapReaderFactory = F.cMapReaderFactory, this.standardFontDataFactory = F.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = d, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return Fl(this, "annotationStorage", new XN());
  }
  getRenderingIntent(l, U = eZ.ENABLE, d = null, Z = !1) {
    let F = KU.DISPLAY, W = mR;
    switch (l) {
      case "any":
        F = KU.ANY;
        break;
      case "display":
        break;
      case "print":
        F = KU.PRINT;
        break;
      default:
        f(`getRenderingIntent - invalid intent: ${l}`);
    }
    switch (U) {
      case eZ.DISABLE:
        F += KU.ANNOTATIONS_DISABLE;
        break;
      case eZ.ENABLE:
        break;
      case eZ.ENABLE_FORMS:
        F += KU.ANNOTATIONS_FORMS;
        break;
      case eZ.ENABLE_STORAGE:
        F += KU.ANNOTATIONS_STORAGE, W = (F & KU.PRINT && d instanceof Gn ? d : this.annotationStorage).serializable;
        break;
      default:
        f(`getRenderingIntent - invalid annotationMode: ${U}`);
    }
    return Z && (F += KU.OPLIST), {
      renderingIntent: F,
      cacheKey: `${F}_${W.hash}`,
      annotationStorageSerializable: W
    };
  }
  destroy() {
    var d;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (d = Q(this, Md)) == null || d.reject(new Error("Worker was destroyed during onPassword callback"));
    const l = [];
    for (const Z of Q(this, id).values())
      l.push(Z._destroy());
    Q(this, id).clear(), Q(this, _0).clear(), Q(this, q0).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const U = this.messageHandler.sendWithPromise("Terminate", null);
    return l.push(U), Promise.all(l).then(() => {
      var Z;
      this.commonObjs.clear(), this.fontLoader.clear(), Q(this, qd).clear(), this.filterFactory.destroy(), XW.cleanup(), (Z = this._networkStream) == null || Z.cancelAllRequests(new s0("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: l,
      loadingTask: U
    } = this;
    l.on("GetReader", (d, Z) => {
      Cl(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (F) => {
        this._lastProgress = {
          loaded: F.loaded,
          total: F.total
        };
      }, Z.onPull = () => {
        this._fullReader.read().then(function({
          value: F,
          done: W
        }) {
          if (W) {
            Z.close();
            return;
          }
          Cl(F instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), Z.enqueue(new Uint8Array(F), 1, [F]);
        }).catch((F) => {
          Z.error(F);
        });
      }, Z.onCancel = (F) => {
        this._fullReader.cancel(F), Z.ready.catch((W) => {
          if (!this.destroyed)
            throw W;
        });
      };
    }), l.on("ReaderHeadersReady", (d) => {
      const Z = Promise.withResolvers(), F = this._fullReader;
      return F.headersReady.then(() => {
        var W;
        (!F.isStreamingSupported || !F.isRangeSupported) && (this._lastProgress && ((W = U.onProgress) == null || W.call(U, this._lastProgress)), F.onProgress = (t) => {
          var V;
          (V = U.onProgress) == null || V.call(U, {
            loaded: t.loaded,
            total: t.total
          });
        }), Z.resolve({
          isStreamingSupported: F.isStreamingSupported,
          isRangeSupported: F.isRangeSupported,
          contentLength: F.contentLength
        });
      }, Z.reject), Z.promise;
    }), l.on("GetRangeReader", (d, Z) => {
      Cl(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const F = this._networkStream.getRangeReader(d.begin, d.end);
      if (!F) {
        Z.close();
        return;
      }
      Z.onPull = () => {
        F.read().then(function({
          value: W,
          done: t
        }) {
          if (t) {
            Z.close();
            return;
          }
          Cl(W instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), Z.enqueue(new Uint8Array(W), 1, [W]);
        }).catch((W) => {
          Z.error(W);
        });
      }, Z.onCancel = (W) => {
        F.cancel(W), Z.ready.catch((t) => {
          if (!this.destroyed)
            throw t;
        });
      };
    }), l.on("GetDoc", ({
      pdfInfo: d
    }) => {
      this._numPages = d.numPages, this._htmlForXfa = d.htmlForXfa, delete d.htmlForXfa, U._capability.resolve(new Ph(d, this));
    }), l.on("DocException", function(d) {
      let Z;
      switch (d.name) {
        case "PasswordException":
          Z = new vV(d.message, d.code);
          break;
        case "InvalidPDFException":
          Z = new xs(d.message);
          break;
        case "MissingPDFException":
          Z = new N0(d.message);
          break;
        case "UnexpectedResponseException":
          Z = new sV(d.message, d.status);
          break;
        case "UnknownErrorException":
          Z = new PV(d.message, d.details);
          break;
        default:
          nl("DocException - expected a valid Error.");
      }
      U._capability.reject(Z);
    }), l.on("PasswordRequest", (d) => {
      if (m(this, Md, Promise.withResolvers()), U.onPassword) {
        const Z = (F) => {
          F instanceof Error ? Q(this, Md).reject(F) : Q(this, Md).resolve({
            password: F
          });
        };
        try {
          U.onPassword(Z, d.code);
        } catch (F) {
          Q(this, Md).reject(F);
        }
      } else
        Q(this, Md).reject(new vV(d.message, d.code));
      return Q(this, Md).promise;
    }), l.on("DataLoaded", (d) => {
      var Z;
      (Z = U.onProgress) == null || Z.call(U, {
        loaded: d.length,
        total: d.length
      }), this.downloadInfoCapability.resolve(d);
    }), l.on("StartRenderPage", (d) => {
      if (this.destroyed)
        return;
      Q(this, id).get(d.pageIndex)._startRenderPage(d.transparency, d.cacheKey);
    }), l.on("commonobj", ([d, Z, F]) => {
      var W;
      if (this.destroyed || this.commonObjs.has(d))
        return null;
      switch (Z) {
        case "Font":
          const {
            disableFontFace: t,
            fontExtraProperties: V,
            pdfBug: R
          } = this._params;
          if ("error" in F) {
            const b = F.error;
            f(`Error during font loading: ${b}`), this.commonObjs.resolve(d, b);
            break;
          }
          const N = R && ((W = globalThis.FontInspector) != null && W.enabled) ? (b, a) => globalThis.FontInspector.fontAdded(b, a) : null, s = new Am(F, {
            disableFontFace: t,
            inspectFont: N
          });
          this.fontLoader.bind(s).catch(() => l.sendWithPromise("FontFallback", {
            id: d
          })).finally(() => {
            !V && s.data && (s.data = null), this.commonObjs.resolve(d, s);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: n
          } = F;
          Cl(n, "The imageRef must be defined.");
          for (const b of Q(this, id).values())
            for (const [, a] of b.objs)
              if ((a == null ? void 0 : a.ref) === n)
                return a.dataLen ? (this.commonObjs.resolve(d, structuredClone(a)), a.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(d, F);
          break;
        default:
          throw new Error(`Got unknown common object type ${Z}`);
      }
      return null;
    }), l.on("obj", ([d, Z, F, W]) => {
      var V;
      if (this.destroyed)
        return;
      const t = Q(this, id).get(Z);
      if (!t.objs.has(d)) {
        if (t._intentStates.size === 0) {
          (V = W == null ? void 0 : W.bitmap) == null || V.close();
          return;
        }
        switch (F) {
          case "Image":
            t.objs.resolve(d, W), (W == null ? void 0 : W.dataLen) > Sm && (t._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            t.objs.resolve(d, W);
            break;
          default:
            throw new Error(`Got unknown object type ${F}`);
        }
      }
    }), l.on("DocProgress", (d) => {
      var Z;
      this.destroyed || (Z = U.onProgress) == null || Z.call(U, {
        loaded: d.loaded,
        total: d.total
      });
    }), l.on("FetchBuiltInCMap", (d) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(d) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), l.on("FetchStandardFontData", (d) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(d) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var d;
    this.annotationStorage.size <= 0 && f("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: l,
      transfer: U
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: l,
      filename: ((d = this._fullReader) == null ? void 0 : d.filename) ?? null
    }, U).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(l) {
    if (!Number.isInteger(l) || l <= 0 || l > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const U = l - 1, d = Q(this, _0).get(U);
    if (d)
      return d;
    const Z = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: U
    }).then((F) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      F.refStr && Q(this, q0).set(F.refStr, l);
      const W = new fh(U, F, this, this._params.pdfBug);
      return Q(this, id).set(U, W), W;
    });
    return Q(this, _0).set(U, Z), Z;
  }
  getPageIndex(l) {
    return Ns(l) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: l.num,
      gen: l.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(l, U) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: l,
      intent: U
    });
  }
  getFieldObjects() {
    return h(this, kF, xW).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return h(this, kF, xW).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(l) {
    return typeof l != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: l
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return h(this, kF, xW).call(this, "GetDocJSActions");
  }
  getPageJSActions(l) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: l
    });
  }
  getStructTree(l) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: l
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(l) {
    return h(this, kF, xW).call(this, "GetOptionalContentConfig").then((U) => new mh(U, l));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const l = "GetMetadata", U = Q(this, qd).get(l);
    if (U)
      return U;
    const d = this.messageHandler.sendWithPromise(l, null).then((Z) => {
      var F, W;
      return {
        info: Z[0],
        metadata: Z[1] ? new bh(Z[1]) : null,
        contentDispositionFilename: ((F = this._fullReader) == null ? void 0 : F.filename) ?? null,
        contentLength: ((W = this._fullReader) == null ? void 0 : W.contentLength) ?? null
      };
    });
    return Q(this, qd).set(l, d), d;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(l = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const U of Q(this, id).values())
        if (!U.cleanup())
          throw new Error(`startCleanup: Page ${U.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), l || this.fontLoader.clear(), Q(this, qd).clear(), this.filterFactory.destroy(!0), XW.cleanup();
    }
  }
  cachedPageNumber(l) {
    if (!Ns(l))
      return null;
    const U = l.gen === 0 ? `${l.num}R` : `${l.num}R${l.gen}`;
    return Q(this, q0).get(U) ?? null;
  }
}
qd = new WeakMap(), id = new WeakMap(), _0 = new WeakMap(), q0 = new WeakMap(), Md = new WeakMap(), kF = new WeakSet(), xW = function(l, U = null) {
  const d = Q(this, qd).get(l);
  if (d)
    return d;
  const Z = this.messageHandler.sendWithPromise(l, U);
  return Q(this, qd).set(l, Z), Z;
};
const fc = Symbol("INITIAL_DATA");
var Ud, HQ, YR;
class En {
  constructor() {
    i(this, HQ);
    i(this, Ud, /* @__PURE__ */ Object.create(null));
  }
  get(l, U = null) {
    if (U) {
      const Z = h(this, HQ, YR).call(this, l);
      return Z.promise.then(() => U(Z.data)), null;
    }
    const d = Q(this, Ud)[l];
    if (!d || d.data === fc)
      throw new Error(`Requesting object that isn't resolved yet ${l}.`);
    return d.data;
  }
  has(l) {
    const U = Q(this, Ud)[l];
    return !!U && U.data !== fc;
  }
  resolve(l, U = null) {
    const d = h(this, HQ, YR).call(this, l);
    d.data = U, d.resolve();
  }
  clear() {
    var l;
    for (const U in Q(this, Ud)) {
      const {
        data: d
      } = Q(this, Ud)[U];
      (l = d == null ? void 0 : d.bitmap) == null || l.close();
    }
    m(this, Ud, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const l in Q(this, Ud)) {
      const {
        data: U
      } = Q(this, Ud)[l];
      U !== fc && (yield [l, U]);
    }
  }
}
Ud = new WeakMap(), HQ = new WeakSet(), YR = function(l) {
  var U;
  return (U = Q(this, Ud))[l] || (U[l] = {
    ...Promise.withResolvers(),
    data: fc
  });
};
var CZ;
class qh {
  constructor(l) {
    i(this, CZ, null);
    m(this, CZ, l), this.onContinue = null;
  }
  get promise() {
    return Q(this, CZ).capability.promise;
  }
  cancel(l = 0) {
    Q(this, CZ).cancel(null, l);
  }
  get separateAnnots() {
    const {
      separateAnnots: l
    } = Q(this, CZ).operatorList;
    if (!l)
      return !1;
    const {
      annotationCanvasMap: U
    } = Q(this, CZ);
    return l.form || l.canvas && (U == null ? void 0 : U.size) > 0;
  }
}
CZ = new WeakMap();
var wZ, IF;
const tF = class tF {
  constructor({
    callback: l,
    params: U,
    objs: d,
    commonObjs: Z,
    annotationCanvasMap: F,
    operatorList: W,
    pageIndex: t,
    canvasFactory: V,
    filterFactory: R,
    useRequestAnimationFrame: N = !1,
    pdfBug: s = !1,
    pageColors: n = null
  }) {
    i(this, wZ, null);
    this.callback = l, this.params = U, this.objs = d, this.commonObjs = Z, this.annotationCanvasMap = F, this.operatorListIdx = null, this.operatorList = W, this._pageIndex = t, this.canvasFactory = V, this.filterFactory = R, this._pdfBug = s, this.pageColors = n, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = N === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new qh(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = U.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: l = !1,
    optionalContentConfig: U
  }) {
    var t, V;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (Q(tF, IF).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      Q(tF, IF).add(this._canvas);
    }
    this._pdfBug && ((t = globalThis.StepperManager) != null && t.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: d,
      viewport: Z,
      transform: F,
      background: W
    } = this.params;
    this.gfx = new B0(d, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: U
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: F,
      viewport: Z,
      transparency: l,
      background: W
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (V = this.graphicsReadyCallback) == null || V.call(this);
  }
  cancel(l = null, U = 0) {
    var d;
    this.running = !1, this.cancelled = !0, (d = this.gfx) == null || d.endDrawing(), Q(this, wZ) && (window.cancelAnimationFrame(Q(this, wZ)), m(this, wZ, null)), Q(tF, IF).delete(this._canvas), this.callback(l || new TN(`Rendering cancelled, page ${this._pageIndex + 1}`, U));
  }
  operatorListChanged() {
    var l;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (l = this.stepper) == null || l.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? m(this, wZ, window.requestAnimationFrame(() => {
      m(this, wZ, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), Q(tF, IF).delete(this._canvas), this.callback())));
  }
};
wZ = new WeakMap(), IF = new WeakMap(), i(tF, IF, /* @__PURE__ */ new WeakSet());
let BR = tF;
const $h = "4.4.168", li = "19fbc8998";
function ss(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, "0");
}
function pW(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class ns {
  static CMYK_G([l, U, d, Z]) {
    return ["G", 1 - Math.min(1, 0.3 * l + 0.59 * d + 0.11 * U + Z)];
  }
  static G_CMYK([l]) {
    return ["CMYK", 0, 0, 0, 1 - l];
  }
  static G_RGB([l]) {
    return ["RGB", l, l, l];
  }
  static G_rgb([l]) {
    return l = pW(l), [l, l, l];
  }
  static G_HTML([l]) {
    const U = ss(l);
    return `#${U}${U}${U}`;
  }
  static RGB_G([l, U, d]) {
    return ["G", 0.3 * l + 0.59 * U + 0.11 * d];
  }
  static RGB_rgb(l) {
    return l.map(pW);
  }
  static RGB_HTML(l) {
    return `#${l.map(ss).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([l, U, d, Z]) {
    return ["RGB", 1 - Math.min(1, l + Z), 1 - Math.min(1, d + Z), 1 - Math.min(1, U + Z)];
  }
  static CMYK_rgb([l, U, d, Z]) {
    return [pW(1 - Math.min(1, l + Z)), pW(1 - Math.min(1, d + Z)), pW(1 - Math.min(1, U + Z))];
  }
  static CMYK_HTML(l) {
    const U = this.CMYK_RGB(l).slice(1);
    return this.RGB_HTML(U);
  }
  static RGB_CMYK([l, U, d]) {
    const Z = 1 - l, F = 1 - U, W = 1 - d, t = Math.min(Z, F, W);
    return ["CMYK", Z, F, W, t];
  }
}
class Cn {
  static setupStorage(l, U, d, Z, F) {
    const W = Z.getValue(U, {
      value: null
    });
    switch (d.name) {
      case "textarea":
        if (W.value !== null && (l.textContent = W.value), F === "print")
          break;
        l.addEventListener("input", (t) => {
          Z.setValue(U, {
            value: t.target.value
          });
        });
        break;
      case "input":
        if (d.attributes.type === "radio" || d.attributes.type === "checkbox") {
          if (W.value === d.attributes.xfaOn ? l.setAttribute("checked", !0) : W.value === d.attributes.xfaOff && l.removeAttribute("checked"), F === "print")
            break;
          l.addEventListener("change", (t) => {
            Z.setValue(U, {
              value: t.target.checked ? t.target.getAttribute("xfaOn") : t.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (W.value !== null && l.setAttribute("value", W.value), F === "print")
            break;
          l.addEventListener("input", (t) => {
            Z.setValue(U, {
              value: t.target.value
            });
          });
        }
        break;
      case "select":
        if (W.value !== null) {
          l.setAttribute("value", W.value);
          for (const t of d.children)
            t.attributes.value === W.value ? t.attributes.selected = !0 : t.attributes.hasOwnProperty("selected") && delete t.attributes.selected;
        }
        l.addEventListener("input", (t) => {
          const V = t.target.options, R = V.selectedIndex === -1 ? "" : V[V.selectedIndex].value;
          Z.setValue(U, {
            value: R
          });
        });
        break;
    }
  }
  static setAttributes({
    html: l,
    element: U,
    storage: d = null,
    intent: Z,
    linkService: F
  }) {
    const {
      attributes: W
    } = U, t = l instanceof HTMLAnchorElement;
    W.type === "radio" && (W.name = `${W.name}-${Z}`);
    for (const [V, R] of Object.entries(W))
      if (R != null)
        switch (V) {
          case "class":
            R.length && l.setAttribute(V, R.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            l.setAttribute("data-element-id", R);
            break;
          case "style":
            Object.assign(l.style, R);
            break;
          case "textContent":
            l.textContent = R;
            break;
          default:
            (!t || V !== "href" && V !== "newWindow") && l.setAttribute(V, R);
        }
    t && F.addLinkAttributes(l, W.href, W.newWindow), d && W.dataId && this.setupStorage(l, W.dataId, U, d);
  }
  static render(l) {
    var s, n;
    const U = l.annotationStorage, d = l.linkService, Z = l.xfaHtml, F = l.intent || "display", W = document.createElement(Z.name);
    Z.attributes && this.setAttributes({
      html: W,
      element: Z,
      intent: F,
      linkService: d
    });
    const t = F !== "richText", V = l.div;
    if (V.append(W), l.viewport) {
      const b = `matrix(${l.viewport.transform.join(",")})`;
      V.style.transform = b;
    }
    t && V.setAttribute("class", "xfaLayer xfaFont");
    const R = [];
    if (Z.children.length === 0) {
      if (Z.value) {
        const b = document.createTextNode(Z.value);
        W.append(b), t && dQ.shouldBuildText(Z.name) && R.push(b);
      }
      return {
        textDivs: R
      };
    }
    const N = [[Z, -1, W]];
    for (; N.length > 0; ) {
      const [b, a, M] = N.at(-1);
      if (a + 1 === b.children.length) {
        N.pop();
        continue;
      }
      const G = b.children[++N.at(-1)[1]];
      if (G === null)
        continue;
      const {
        name: T
      } = G;
      if (T === "#text") {
        const Y = document.createTextNode(G.value);
        R.push(Y), M.append(Y);
        continue;
      }
      const J = (s = G == null ? void 0 : G.attributes) != null && s.xmlns ? document.createElementNS(G.attributes.xmlns, T) : document.createElement(T);
      if (M.append(J), G.attributes && this.setAttributes({
        html: J,
        element: G,
        storage: U,
        intent: F,
        linkService: d
      }), ((n = G.children) == null ? void 0 : n.length) > 0)
        N.push([G, -1, J]);
      else if (G.value) {
        const Y = document.createTextNode(G.value);
        t && dQ.shouldBuildText(T) && R.push(Y), J.append(Y);
      }
    }
    for (const b of V.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      b.setAttribute("readOnly", !0);
    return {
      textDivs: R
    };
  }
  static update(l) {
    const U = `matrix(${l.viewport.transform.join(",")})`;
    l.div.style.transform = U, l.div.hidden = !1;
  }
}
const jc = 1e3, Ui = 9, t0 = /* @__PURE__ */ new WeakSet();
function bZ(c) {
  return {
    width: c[2] - c[0],
    height: c[3] - c[1]
  };
}
class di {
  static create(l) {
    switch (l.data.annotationType) {
      case zl.LINK:
        return new wn(l);
      case zl.TEXT:
        return new Zi(l);
      case zl.WIDGET:
        switch (l.data.fieldType) {
          case "Tx":
            return new Fi(l);
          case "Btn":
            return l.data.radioButton ? new On(l) : l.data.checkBox ? new Qi(l) : new ci(l);
          case "Ch":
            return new ti(l);
          case "Sig":
            return new Wi(l);
        }
        return new n0(l);
      case zl.POPUP:
        return new uR(l);
      case zl.FREETEXT:
        return new vn(l);
      case zl.LINE:
        return new Ri(l);
      case zl.SQUARE:
        return new Ni(l);
      case zl.CIRCLE:
        return new si(l);
      case zl.POLYLINE:
        return new Pn(l);
      case zl.CARET:
        return new bi(l);
      case zl.INK:
        return new fn(l);
      case zl.POLYGON:
        return new ni(l);
      case zl.HIGHLIGHT:
        return new ai(l);
      case zl.UNDERLINE:
        return new mi(l);
      case zl.SQUIGGLY:
        return new hi(l);
      case zl.STRIKEOUT:
        return new ii(l);
      case zl.STAMP:
        return new An(l);
      case zl.FILEATTACHMENT:
        return new Mi(l);
      default:
        return new el(l);
    }
  }
}
var EF, $0, lW, vQ, eR;
const yN = class yN {
  constructor(l, {
    isRenderable: U = !1,
    ignoreBorder: d = !1,
    createQuadrilaterals: Z = !1
  } = {}) {
    i(this, vQ);
    i(this, EF, null);
    i(this, $0, !1);
    i(this, lW, null);
    this.isRenderable = U, this.data = l.data, this.layer = l.layer, this.linkService = l.linkService, this.downloadManager = l.downloadManager, this.imageResourcesPath = l.imageResourcesPath, this.renderForms = l.renderForms, this.svgFactory = l.svgFactory, this.annotationStorage = l.annotationStorage, this.enableScripting = l.enableScripting, this.hasJSActions = l.hasJSActions, this._fieldObjects = l.fieldObjects, this.parent = l.parent, U && (this.container = this._createContainer(d)), Z && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: l,
    contentsObj: U,
    richText: d
  }) {
    return !!(l != null && l.str || U != null && U.str || d != null && d.str);
  }
  get hasPopupData() {
    return yN._hasPopupData(this.data);
  }
  updateEdited(l) {
    var d;
    if (!this.container)
      return;
    Q(this, EF) || m(this, EF, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: U
    } = l;
    U && h(this, vQ, eR).call(this, U), (d = Q(this, lW)) == null || d.popup.updateEdited(l);
  }
  resetEdited() {
    var l;
    Q(this, EF) && (h(this, vQ, eR).call(this, Q(this, EF).rect), (l = Q(this, lW)) == null || l.popup.resetEdited(), m(this, EF, null));
  }
  _createContainer(l) {
    const {
      data: U,
      parent: {
        page: d,
        viewport: Z
      }
    } = this, F = document.createElement("section");
    F.setAttribute("data-annotation-id", U.id), this instanceof n0 || (F.tabIndex = jc);
    const {
      style: W
    } = F;
    if (W.zIndex = this.parent.zIndex++, U.popupRef && F.setAttribute("aria-haspopup", "dialog"), U.alternativeText && (F.title = U.alternativeText), U.noRotate && F.classList.add("norotate"), !U.rect || this instanceof uR) {
      const {
        rotation: M
      } = U;
      return !U.hasOwnCanvas && M !== 0 && this.setRotation(M, F), F;
    }
    const {
      width: t,
      height: V
    } = bZ(U.rect);
    if (!l && U.borderStyle.width > 0) {
      W.borderWidth = `${U.borderStyle.width}px`;
      const M = U.borderStyle.horizontalCornerRadius, G = U.borderStyle.verticalCornerRadius;
      if (M > 0 || G > 0) {
        const J = `calc(${M}px * var(--scale-factor)) / calc(${G}px * var(--scale-factor))`;
        W.borderRadius = J;
      } else if (this instanceof On) {
        const J = `calc(${t}px * var(--scale-factor)) / calc(${V}px * var(--scale-factor))`;
        W.borderRadius = J;
      }
      switch (U.borderStyle.style) {
        case eW.SOLID:
          W.borderStyle = "solid";
          break;
        case eW.DASHED:
          W.borderStyle = "dashed";
          break;
        case eW.BEVELED:
          f("Unimplemented border style: beveled");
          break;
        case eW.INSET:
          f("Unimplemented border style: inset");
          break;
        case eW.UNDERLINE:
          W.borderBottomStyle = "solid";
          break;
      }
      const T = U.borderColor || null;
      T ? (m(this, $0, !0), W.borderColor = I.makeHexColor(T[0] | 0, T[1] | 0, T[2] | 0)) : W.borderWidth = 0;
    }
    const R = I.normalizeRect([U.rect[0], d.view[3] - U.rect[1] + d.view[1], U.rect[2], d.view[3] - U.rect[3] + d.view[1]]), {
      pageWidth: N,
      pageHeight: s,
      pageX: n,
      pageY: b
    } = Z.rawDims;
    W.left = `${100 * (R[0] - n) / N}%`, W.top = `${100 * (R[1] - b) / s}%`;
    const {
      rotation: a
    } = U;
    return U.hasOwnCanvas || a === 0 ? (W.width = `${100 * t / N}%`, W.height = `${100 * V / s}%`) : this.setRotation(a, F), F;
  }
  setRotation(l, U = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: d,
      pageHeight: Z
    } = this.parent.viewport.rawDims, {
      width: F,
      height: W
    } = bZ(this.data.rect);
    let t, V;
    l % 180 === 0 ? (t = 100 * F / d, V = 100 * W / Z) : (t = 100 * W / d, V = 100 * F / Z), U.style.width = `${t}%`, U.style.height = `${V}%`, U.setAttribute("data-main-rotation", (360 - l) % 360);
  }
  get _commonActions() {
    const l = (U, d, Z) => {
      const F = Z.detail[U], W = F[0], t = F.slice(1);
      Z.target.style[d] = ns[`${W}_HTML`](t), this.annotationStorage.setValue(this.data.id, {
        [d]: ns[`${W}_rgb`](t)
      });
    };
    return Fl(this, "_commonActions", {
      display: (U) => {
        const {
          display: d
        } = U.detail, Z = d % 2 === 1;
        this.container.style.visibility = Z ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: Z,
          noPrint: d === 1 || d === 2
        });
      },
      print: (U) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !U.detail.print
        });
      },
      hidden: (U) => {
        const {
          hidden: d
        } = U.detail;
        this.container.style.visibility = d ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: d,
          noView: d
        });
      },
      focus: (U) => {
        setTimeout(() => U.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (U) => {
        U.target.title = U.detail.userName;
      },
      readonly: (U) => {
        U.target.disabled = U.detail.readonly;
      },
      required: (U) => {
        this._setRequired(U.target, U.detail.required);
      },
      bgColor: (U) => {
        l("bgColor", "backgroundColor", U);
      },
      fillColor: (U) => {
        l("fillColor", "backgroundColor", U);
      },
      fgColor: (U) => {
        l("fgColor", "color", U);
      },
      textColor: (U) => {
        l("textColor", "color", U);
      },
      borderColor: (U) => {
        l("borderColor", "borderColor", U);
      },
      strokeColor: (U) => {
        l("strokeColor", "borderColor", U);
      },
      rotation: (U) => {
        const d = U.detail.rotation;
        this.setRotation(d), this.annotationStorage.setValue(this.data.id, {
          rotation: d
        });
      }
    });
  }
  _dispatchEventFromSandbox(l, U) {
    const d = this._commonActions;
    for (const Z of Object.keys(U.detail)) {
      const F = l[Z] || d[Z];
      F == null || F(U);
    }
  }
  _setDefaultPropertiesFromJS(l) {
    if (!this.enableScripting)
      return;
    const U = this.annotationStorage.getRawValue(this.data.id);
    if (!U)
      return;
    const d = this._commonActions;
    for (const [Z, F] of Object.entries(U)) {
      const W = d[Z];
      if (W) {
        const t = {
          detail: {
            [Z]: F
          },
          target: l
        };
        W(t), delete U[Z];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: l
    } = this.data;
    if (!l)
      return;
    const [U, d, Z, F] = this.data.rect.map((M) => Math.fround(M));
    if (l.length === 8) {
      const [M, G, T, J] = l.subarray(2, 6);
      if (Z === M && F === G && U === T && d === J)
        return;
    }
    const {
      style: W
    } = this.container;
    let t;
    if (Q(this, $0)) {
      const {
        borderColor: M,
        borderWidth: G
      } = W;
      W.borderWidth = 0, t = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${M}" stroke-width="${G}">`], this.container.classList.add("hasBorder");
    }
    const V = Z - U, R = F - d, {
      svgFactory: N
    } = this, s = N.createElement("svg");
    s.classList.add("quadrilateralsContainer"), s.setAttribute("width", 0), s.setAttribute("height", 0);
    const n = N.createElement("defs");
    s.append(n);
    const b = N.createElement("clipPath"), a = `clippath_${this.data.id}`;
    b.setAttribute("id", a), b.setAttribute("clipPathUnits", "objectBoundingBox"), n.append(b);
    for (let M = 2, G = l.length; M < G; M += 8) {
      const T = l[M], J = l[M + 1], Y = l[M + 2], B = l[M + 3], S = N.createElement("rect"), X = (Y - U) / V, e = (F - J) / R, p = (T - Y) / V, y = (J - B) / R;
      S.setAttribute("x", X), S.setAttribute("y", e), S.setAttribute("width", p), S.setAttribute("height", y), b.append(S), t == null || t.push(`<rect vector-effect="non-scaling-stroke" x="${X}" y="${e}" width="${p}" height="${y}"/>`);
    }
    Q(this, $0) && (t.push("</g></svg>')"), W.backgroundImage = t.join("")), this.container.append(s), this.container.style.clipPath = `url(#${a})`;
  }
  _createPopup() {
    const {
      container: l,
      data: U
    } = this;
    l.setAttribute("aria-haspopup", "dialog");
    const d = m(this, lW, new uR({
      data: {
        color: U.color,
        titleObj: U.titleObj,
        modificationDate: U.modificationDate,
        contentsObj: U.contentsObj,
        richText: U.richText,
        parentRect: U.rect,
        borderStyle: 0,
        id: `popup_${U.id}`,
        rotation: U.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(d.render());
  }
  render() {
    nl("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(l, U = null) {
    const d = [];
    if (this._fieldObjects) {
      const Z = this._fieldObjects[l];
      if (Z)
        for (const {
          page: F,
          id: W,
          exportValues: t
        } of Z) {
          if (F === -1 || W === U)
            continue;
          const V = typeof t == "string" ? t : null, R = document.querySelector(`[data-element-id="${W}"]`);
          if (R && !t0.has(R)) {
            f(`_getElementsByName - element not allowed: ${W}`);
            continue;
          }
          d.push({
            id: W,
            exportValue: V,
            domElement: R
          });
        }
      return d;
    }
    for (const Z of document.getElementsByName(l)) {
      const {
        exportValue: F
      } = Z, W = Z.getAttribute("data-element-id");
      W !== U && t0.has(Z) && d.push({
        id: W,
        exportValue: F,
        domElement: Z
      });
    }
    return d;
  }
  show() {
    var l;
    this.container && (this.container.hidden = !1), (l = this.popup) == null || l.maybeShow();
  }
  hide() {
    var l;
    this.container && (this.container.hidden = !0), (l = this.popup) == null || l.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const l = this.getElementsToTriggerPopup();
    if (Array.isArray(l))
      for (const U of l)
        U.classList.add("highlightArea");
    else
      l.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: l,
      data: {
        id: U
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var d;
      (d = this.linkService.eventBus) == null || d.dispatch("switchannotationeditormode", {
        source: this,
        mode: l,
        editId: U
      });
    });
  }
};
EF = new WeakMap(), $0 = new WeakMap(), lW = new WeakMap(), vQ = new WeakSet(), eR = function(l) {
  const {
    container: {
      style: U
    },
    data: {
      rect: d,
      rotation: Z
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: F,
          pageHeight: W,
          pageX: t,
          pageY: V
        }
      }
    }
  } = this;
  d == null || d.splice(0, 4, ...l);
  const {
    width: R,
    height: N
  } = bZ(l);
  U.left = `${100 * (l[0] - t) / F}%`, U.top = `${100 * (W - l[3] + V) / W}%`, Z === 0 ? (U.width = `${100 * R / F}%`, U.height = `${100 * N / W}%`) : this.setRotation(Z);
};
let el = yN;
var IU, FF, xn, jn;
class wn extends el {
  constructor(U, d = null) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !!(d != null && d.ignoreBorder),
      createQuadrilaterals: !0
    });
    i(this, IU);
    this.isTooltipOnly = U.data.isTooltipOnly;
  }
  render() {
    const {
      data: U,
      linkService: d
    } = this, Z = document.createElement("a");
    Z.setAttribute("data-element-id", U.id);
    let F = !1;
    return U.url ? (d.addLinkAttributes(Z, U.url, U.newWindow), F = !0) : U.action ? (this._bindNamedAction(Z, U.action), F = !0) : U.attachment ? (h(this, IU, xn).call(this, Z, U.attachment, U.attachmentDest), F = !0) : U.setOCGState ? (h(this, IU, jn).call(this, Z, U.setOCGState), F = !0) : U.dest ? (this._bindLink(Z, U.dest), F = !0) : (U.actions && (U.actions.Action || U.actions["Mouse Up"] || U.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(Z, U), F = !0), U.resetForm ? (this._bindResetFormAction(Z, U.resetForm), F = !0) : this.isTooltipOnly && !F && (this._bindLink(Z, ""), F = !0)), this.container.classList.add("linkAnnotation"), F && this.container.append(Z), this.container;
  }
  _bindLink(U, d) {
    U.href = this.linkService.getDestinationHash(d), U.onclick = () => (d && this.linkService.goToDestination(d), !1), (d || d === "") && h(this, IU, FF).call(this);
  }
  _bindNamedAction(U, d) {
    U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeNamedAction(d), !1), h(this, IU, FF).call(this);
  }
  _bindJSAction(U, d) {
    U.href = this.linkService.getAnchorUrl("");
    const Z = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const F of Object.keys(d.actions)) {
      const W = Z.get(F);
      W && (U[W] = () => {
        var t;
        return (t = this.linkService.eventBus) == null || t.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: d.id,
            name: F
          }
        }), !1;
      });
    }
    U.onclick || (U.onclick = () => !1), h(this, IU, FF).call(this);
  }
  _bindResetFormAction(U, d) {
    const Z = U.onclick;
    if (Z || (U.href = this.linkService.getAnchorUrl("")), h(this, IU, FF).call(this), !this._fieldObjects) {
      f('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), Z || (U.onclick = () => !1);
      return;
    }
    U.onclick = () => {
      var s;
      Z == null || Z();
      const {
        fields: F,
        refs: W,
        include: t
      } = d, V = [];
      if (F.length !== 0 || W.length !== 0) {
        const n = new Set(W);
        for (const b of F) {
          const a = this._fieldObjects[b] || [];
          for (const {
            id: M
          } of a)
            n.add(M);
        }
        for (const b of Object.values(this._fieldObjects))
          for (const a of b)
            n.has(a.id) === t && V.push(a);
      } else
        for (const n of Object.values(this._fieldObjects))
          V.push(...n);
      const R = this.annotationStorage, N = [];
      for (const n of V) {
        const {
          id: b
        } = n;
        switch (N.push(b), n.type) {
          case "text": {
            const M = n.defaultValue || "";
            R.setValue(b, {
              value: M
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const M = n.defaultValue === n.exportValues;
            R.setValue(b, {
              value: M
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const M = n.defaultValue || "";
            R.setValue(b, {
              value: M
            });
            break;
          }
          default:
            continue;
        }
        const a = document.querySelector(`[data-element-id="${b}"]`);
        if (a) {
          if (!t0.has(a)) {
            f(`_bindResetFormAction - element not allowed: ${b}`);
            continue;
          }
        } else continue;
        a.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((s = this.linkService.eventBus) == null || s.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: N,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
IU = new WeakSet(), FF = function() {
  this.container.setAttribute("data-internal-link", "");
}, xn = function(U, d, Z = null) {
  U.href = this.linkService.getAnchorUrl(""), d.description && (U.title = d.description), U.onclick = () => {
    var F;
    return (F = this.downloadManager) == null || F.openOrDownloadData(d.content, d.filename, Z), !1;
  }, h(this, IU, FF).call(this);
}, jn = function(U, d) {
  U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeSetOCGState(d), !1), h(this, IU, FF).call(this);
};
class Zi extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const l = document.createElement("img");
    return l.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", l.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), l.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(l), this.container;
  }
}
class n0 extends el {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(l) {
    var U;
    this.data.hasOwnCanvas && (((U = l.previousSibling) == null ? void 0 : U.nodeName) === "CANVAS" && (l.previousSibling.hidden = !0), l.hidden = !1);
  }
  _getKeyModifier(l) {
    return MU.platform.isMac ? l.metaKey : l.ctrlKey;
  }
  _setEventListener(l, U, d, Z, F) {
    d.includes("mouse") ? l.addEventListener(d, (W) => {
      var t;
      (t = this.linkService.eventBus) == null || t.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: Z,
          value: F(W),
          shift: W.shiftKey,
          modifier: this._getKeyModifier(W)
        }
      });
    }) : l.addEventListener(d, (W) => {
      var t;
      if (d === "blur") {
        if (!U.focused || !W.relatedTarget)
          return;
        U.focused = !1;
      } else if (d === "focus") {
        if (U.focused)
          return;
        U.focused = !0;
      }
      F && ((t = this.linkService.eventBus) == null || t.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: Z,
          value: F(W)
        }
      }));
    });
  }
  _setEventListeners(l, U, d, Z) {
    var F, W, t;
    for (const [V, R] of d)
      (R === "Action" || (F = this.data.actions) != null && F[R]) && ((R === "Focus" || R === "Blur") && (U || (U = {
        focused: !1
      })), this._setEventListener(l, U, V, R, Z), R === "Focus" && !((W = this.data.actions) != null && W.Blur) ? this._setEventListener(l, U, "blur", "Blur", null) : R === "Blur" && !((t = this.data.actions) != null && t.Focus) && this._setEventListener(l, U, "focus", "Focus", null));
  }
  _setBackgroundColor(l) {
    const U = this.data.backgroundColor || null;
    l.style.backgroundColor = U === null ? "transparent" : I.makeHexColor(U[0], U[1], U[2]);
  }
  _setTextStyle(l) {
    const U = ["left", "center", "right"], {
      fontColor: d
    } = this.data.defaultAppearanceData, Z = this.data.defaultAppearanceData.fontSize || Ui, F = l.style;
    let W;
    const t = 2, V = (R) => Math.round(10 * R) / 10;
    if (this.data.multiLine) {
      const R = Math.abs(this.data.rect[3] - this.data.rect[1] - t), N = Math.round(R / (zV * Z)) || 1, s = R / N;
      W = Math.min(Z, V(s / zV));
    } else {
      const R = Math.abs(this.data.rect[3] - this.data.rect[1] - t);
      W = Math.min(Z, V(R / zV));
    }
    F.fontSize = `calc(${W}px * var(--scale-factor))`, F.color = I.makeHexColor(d[0], d[1], d[2]), this.data.textAlignment !== null && (F.textAlign = U[this.data.textAlignment]);
  }
  _setRequired(l, U) {
    U ? l.setAttribute("required", !0) : l.removeAttribute("required"), l.setAttribute("aria-required", U);
  }
}
class Fi extends n0 {
  constructor(l) {
    const U = l.renderForms || l.data.hasOwnCanvas || !l.data.hasAppearance && !!l.data.fieldValue;
    super(l, {
      isRenderable: U
    });
  }
  setPropertyOnSiblings(l, U, d, Z) {
    const F = this.annotationStorage;
    for (const W of this._getElementsByName(l.name, l.id))
      W.domElement && (W.domElement[U] = d), F.setValue(W.id, {
        [Z]: d
      });
  }
  render() {
    var Z, F;
    const l = this.annotationStorage, U = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let d = null;
    if (this.renderForms) {
      const W = l.getValue(U, {
        value: this.data.fieldValue
      });
      let t = W.value || "";
      const V = l.getValue(U, {
        charLimit: this.data.maxLen
      }).charLimit;
      V && t.length > V && (t = t.slice(0, V));
      let R = W.formattedValue || ((Z = this.data.textContent) == null ? void 0 : Z.join(`
`)) || null;
      R && this.data.comb && (R = R.replaceAll(/\s+/g, ""));
      const N = {
        userValue: t,
        formattedValue: R,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (d = document.createElement("textarea"), d.textContent = R ?? t, this.data.doNotScroll && (d.style.overflowY = "hidden")) : (d = document.createElement("input"), d.type = "text", d.setAttribute("value", R ?? t), this.data.doNotScroll && (d.style.overflowX = "hidden")), this.data.hasOwnCanvas && (d.hidden = !0), t0.add(d), d.setAttribute("data-element-id", U), d.disabled = this.data.readOnly, d.name = this.data.fieldName, d.tabIndex = jc, this._setRequired(d, this.data.required), V && (d.maxLength = V), d.addEventListener("input", (n) => {
        l.setValue(U, {
          value: n.target.value
        }), this.setPropertyOnSiblings(d, "value", n.target.value, "value"), N.formattedValue = null;
      }), d.addEventListener("resetform", (n) => {
        const b = this.data.defaultFieldValue ?? "";
        d.value = N.userValue = b, N.formattedValue = null;
      });
      let s = (n) => {
        const {
          formattedValue: b
        } = N;
        b != null && (n.target.value = b), n.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        d.addEventListener("focus", (b) => {
          var M;
          if (N.focused)
            return;
          const {
            target: a
          } = b;
          N.userValue && (a.value = N.userValue), N.lastCommittedValue = a.value, N.commitKey = 1, (M = this.data.actions) != null && M.Focus || (N.focused = !0);
        }), d.addEventListener("updatefromsandbox", (b) => {
          this.showElementAndHideCanvas(b.target);
          const a = {
            value(M) {
              N.userValue = M.detail.value ?? "", l.setValue(U, {
                value: N.userValue.toString()
              }), M.target.value = N.userValue;
            },
            formattedValue(M) {
              const {
                formattedValue: G
              } = M.detail;
              N.formattedValue = G, G != null && M.target !== document.activeElement && (M.target.value = G), l.setValue(U, {
                formattedValue: G
              });
            },
            selRange(M) {
              M.target.setSelectionRange(...M.detail.selRange);
            },
            charLimit: (M) => {
              var Y;
              const {
                charLimit: G
              } = M.detail, {
                target: T
              } = M;
              if (G === 0) {
                T.removeAttribute("maxLength");
                return;
              }
              T.setAttribute("maxLength", G);
              let J = N.userValue;
              !J || J.length <= G || (J = J.slice(0, G), T.value = N.userValue = J, l.setValue(U, {
                value: J
              }), (Y = this.linkService.eventBus) == null || Y.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: U,
                  name: "Keystroke",
                  value: J,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: T.selectionStart,
                  selEnd: T.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(a, b);
        }), d.addEventListener("keydown", (b) => {
          var G;
          N.commitKey = 1;
          let a = -1;
          if (b.key === "Escape" ? a = 0 : b.key === "Enter" && !this.data.multiLine ? a = 2 : b.key === "Tab" && (N.commitKey = 3), a === -1)
            return;
          const {
            value: M
          } = b.target;
          N.lastCommittedValue !== M && (N.lastCommittedValue = M, N.userValue = M, (G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: M,
              willCommit: !0,
              commitKey: a,
              selStart: b.target.selectionStart,
              selEnd: b.target.selectionEnd
            }
          }));
        });
        const n = s;
        s = null, d.addEventListener("blur", (b) => {
          var M, G;
          if (!N.focused || !b.relatedTarget)
            return;
          (M = this.data.actions) != null && M.Blur || (N.focused = !1);
          const {
            value: a
          } = b.target;
          N.userValue = a, N.lastCommittedValue !== a && ((G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: a,
              willCommit: !0,
              commitKey: N.commitKey,
              selStart: b.target.selectionStart,
              selEnd: b.target.selectionEnd
            }
          })), n(b);
        }), (F = this.data.actions) != null && F.Keystroke && d.addEventListener("beforeinput", (b) => {
          var S;
          N.lastCommittedValue = null;
          const {
            data: a,
            target: M
          } = b, {
            value: G,
            selectionStart: T,
            selectionEnd: J
          } = M;
          let Y = T, B = J;
          switch (b.inputType) {
            case "deleteWordBackward": {
              const X = G.substring(0, T).match(/\w*[^\w]*$/);
              X && (Y -= X[0].length);
              break;
            }
            case "deleteWordForward": {
              const X = G.substring(T).match(/^[^\w]*\w*/);
              X && (B += X[0].length);
              break;
            }
            case "deleteContentBackward":
              T === J && (Y -= 1);
              break;
            case "deleteContentForward":
              T === J && (B += 1);
              break;
          }
          b.preventDefault(), (S = this.linkService.eventBus) == null || S.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: G,
              change: a || "",
              willCommit: !1,
              selStart: Y,
              selEnd: B
            }
          });
        }), this._setEventListeners(d, N, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (b) => b.target.value);
      }
      if (s && d.addEventListener("blur", s), this.data.comb) {
        const b = (this.data.rect[2] - this.data.rect[0]) / V;
        d.classList.add("comb"), d.style.letterSpacing = `calc(${b}px * var(--scale-factor) - 1ch)`;
      }
    } else
      d = document.createElement("div"), d.textContent = this.data.fieldValue, d.style.verticalAlign = "middle", d.style.display = "table-cell", this.data.hasOwnCanvas && (d.hidden = !0);
    return this._setTextStyle(d), this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
  }
}
class Wi extends n0 {
  constructor(l) {
    super(l, {
      isRenderable: !!l.data.hasOwnCanvas
    });
  }
}
class Qi extends n0 {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    const l = this.annotationStorage, U = this.data, d = U.id;
    let Z = l.getValue(d, {
      value: U.exportValue === U.fieldValue
    }).value;
    typeof Z == "string" && (Z = Z !== "Off", l.setValue(d, {
      value: Z
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const F = document.createElement("input");
    return t0.add(F), F.setAttribute("data-element-id", d), F.disabled = U.readOnly, this._setRequired(F, this.data.required), F.type = "checkbox", F.name = U.fieldName, Z && F.setAttribute("checked", !0), F.setAttribute("exportValue", U.exportValue), F.tabIndex = jc, F.addEventListener("change", (W) => {
      const {
        name: t,
        checked: V
      } = W.target;
      for (const R of this._getElementsByName(t, d)) {
        const N = V && R.exportValue === U.exportValue;
        R.domElement && (R.domElement.checked = N), l.setValue(R.id, {
          value: N
        });
      }
      l.setValue(d, {
        value: V
      });
    }), F.addEventListener("resetform", (W) => {
      const t = U.defaultFieldValue || "Off";
      W.target.checked = t === U.exportValue;
    }), this.enableScripting && this.hasJSActions && (F.addEventListener("updatefromsandbox", (W) => {
      const t = {
        value(V) {
          V.target.checked = V.detail.value !== "Off", l.setValue(d, {
            value: V.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(t, W);
    }), this._setEventListeners(F, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (W) => W.target.checked)), this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class On extends n0 {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const l = this.annotationStorage, U = this.data, d = U.id;
    let Z = l.getValue(d, {
      value: U.fieldValue === U.buttonValue
    }).value;
    if (typeof Z == "string" && (Z = Z !== U.buttonValue, l.setValue(d, {
      value: Z
    })), Z)
      for (const W of this._getElementsByName(U.fieldName, d))
        l.setValue(W.id, {
          value: !1
        });
    const F = document.createElement("input");
    if (t0.add(F), F.setAttribute("data-element-id", d), F.disabled = U.readOnly, this._setRequired(F, this.data.required), F.type = "radio", F.name = U.fieldName, Z && F.setAttribute("checked", !0), F.tabIndex = jc, F.addEventListener("change", (W) => {
      const {
        name: t,
        checked: V
      } = W.target;
      for (const R of this._getElementsByName(t, d))
        l.setValue(R.id, {
          value: !1
        });
      l.setValue(d, {
        value: V
      });
    }), F.addEventListener("resetform", (W) => {
      const t = U.defaultFieldValue;
      W.target.checked = t != null && t === U.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const W = U.buttonValue;
      F.addEventListener("updatefromsandbox", (t) => {
        const V = {
          value: (R) => {
            const N = W === R.detail.value;
            for (const s of this._getElementsByName(R.target.name)) {
              const n = N && s.id === d;
              s.domElement && (s.domElement.checked = n), l.setValue(s.id, {
                value: n
              });
            }
          }
        };
        this._dispatchEventFromSandbox(V, t);
      }), this._setEventListeners(F, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t) => t.target.checked);
    }
    return this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class ci extends wn {
  constructor(l) {
    super(l, {
      ignoreBorder: l.data.hasAppearance
    });
  }
  render() {
    const l = super.render();
    l.classList.add("buttonWidgetAnnotation", "pushButton");
    const U = l.lastChild;
    return this.enableScripting && this.hasJSActions && U && (this._setDefaultPropertiesFromJS(U), U.addEventListener("updatefromsandbox", (d) => {
      this._dispatchEventFromSandbox({}, d);
    })), l;
  }
}
class ti extends n0 {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const l = this.annotationStorage, U = this.data.id, d = l.getValue(U, {
      value: this.data.fieldValue
    }), Z = document.createElement("select");
    t0.add(Z), Z.setAttribute("data-element-id", U), Z.disabled = this.data.readOnly, this._setRequired(Z, this.data.required), Z.name = this.data.fieldName, Z.tabIndex = jc;
    let F = this.data.combo && this.data.options.length > 0;
    this.data.combo || (Z.size = this.data.options.length, this.data.multiSelect && (Z.multiple = !0)), Z.addEventListener("resetform", (N) => {
      const s = this.data.defaultFieldValue;
      for (const n of Z.options)
        n.selected = n.value === s;
    });
    for (const N of this.data.options) {
      const s = document.createElement("option");
      s.textContent = N.displayValue, s.value = N.exportValue, d.value.includes(N.exportValue) && (s.setAttribute("selected", !0), F = !1), Z.append(s);
    }
    let W = null;
    if (F) {
      const N = document.createElement("option");
      N.value = " ", N.setAttribute("hidden", !0), N.setAttribute("selected", !0), Z.prepend(N), W = () => {
        N.remove(), Z.removeEventListener("input", W), W = null;
      }, Z.addEventListener("input", W);
    }
    const t = (N) => {
      const s = N ? "value" : "textContent", {
        options: n,
        multiple: b
      } = Z;
      return b ? Array.prototype.filter.call(n, (a) => a.selected).map((a) => a[s]) : n.selectedIndex === -1 ? null : n[n.selectedIndex][s];
    };
    let V = t(!1);
    const R = (N) => {
      const s = N.target.options;
      return Array.prototype.map.call(s, (n) => ({
        displayValue: n.textContent,
        exportValue: n.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (Z.addEventListener("updatefromsandbox", (N) => {
      const s = {
        value(n) {
          W == null || W();
          const b = n.detail.value, a = new Set(Array.isArray(b) ? b : [b]);
          for (const M of Z.options)
            M.selected = a.has(M.value);
          l.setValue(U, {
            value: t(!0)
          }), V = t(!1);
        },
        multipleSelection(n) {
          Z.multiple = !0;
        },
        remove(n) {
          const b = Z.options, a = n.detail.remove;
          b[a].selected = !1, Z.remove(a), b.length > 0 && Array.prototype.findIndex.call(b, (G) => G.selected) === -1 && (b[0].selected = !0), l.setValue(U, {
            value: t(!0),
            items: R(n)
          }), V = t(!1);
        },
        clear(n) {
          for (; Z.length !== 0; )
            Z.remove(0);
          l.setValue(U, {
            value: null,
            items: []
          }), V = t(!1);
        },
        insert(n) {
          const {
            index: b,
            displayValue: a,
            exportValue: M
          } = n.detail.insert, G = Z.children[b], T = document.createElement("option");
          T.textContent = a, T.value = M, G ? G.before(T) : Z.append(T), l.setValue(U, {
            value: t(!0),
            items: R(n)
          }), V = t(!1);
        },
        items(n) {
          const {
            items: b
          } = n.detail;
          for (; Z.length !== 0; )
            Z.remove(0);
          for (const a of b) {
            const {
              displayValue: M,
              exportValue: G
            } = a, T = document.createElement("option");
            T.textContent = M, T.value = G, Z.append(T);
          }
          Z.options.length > 0 && (Z.options[0].selected = !0), l.setValue(U, {
            value: t(!0),
            items: R(n)
          }), V = t(!1);
        },
        indices(n) {
          const b = new Set(n.detail.indices);
          for (const a of n.target.options)
            a.selected = b.has(a.index);
          l.setValue(U, {
            value: t(!0)
          }), V = t(!1);
        },
        editable(n) {
          n.target.disabled = !n.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(s, N);
    }), Z.addEventListener("input", (N) => {
      var b;
      const s = t(!0), n = t(!1);
      l.setValue(U, {
        value: s
      }), N.preventDefault(), (b = this.linkService.eventBus) == null || b.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: U,
          name: "Keystroke",
          value: V,
          change: n,
          changeEx: s,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(Z, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (N) => N.target.value)) : Z.addEventListener("input", function(N) {
      l.setValue(U, {
        value: t(!0)
      });
    }), this.data.combo && this._setTextStyle(Z), this._setBackgroundColor(Z), this._setDefaultPropertiesFromJS(Z), this.container.append(Z), this.container;
  }
}
class uR extends el {
  constructor(l) {
    const {
      data: U,
      elements: d
    } = l;
    super(l, {
      isRenderable: el._hasPopupData(U)
    }), this.elements = d, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const l = this.popup = new Vi({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    }), U = [];
    for (const d of this.elements)
      d.popup = l, U.push(d.data.id), d.addHighlightArea();
    return this.container.setAttribute("aria-controls", U.map((d) => `${Os}${d}`).join(",")), this.container;
  }
}
var UW, ZV, FV, dW, CF, Xl, $d, wF, PQ, fQ, ZW, lZ, dd, UZ, AQ, dZ, _Q, xF, jF, bl, bt, pR, rn, Kn, gn, Hn, at, mt, yR;
class Vi {
  constructor({
    container: l,
    color: U,
    elements: d,
    titleObj: Z,
    modificationDate: F,
    contentsObj: W,
    richText: t,
    parent: V,
    rect: R,
    parentRect: N,
    open: s
  }) {
    i(this, bl);
    i(this, UW, h(this, bl, gn).bind(this));
    i(this, ZV, h(this, bl, yR).bind(this));
    i(this, FV, h(this, bl, mt).bind(this));
    i(this, dW, h(this, bl, at).bind(this));
    i(this, CF, null);
    i(this, Xl, null);
    i(this, $d, null);
    i(this, wF, null);
    i(this, PQ, null);
    i(this, fQ, null);
    i(this, ZW, null);
    i(this, lZ, !1);
    i(this, dd, null);
    i(this, UZ, null);
    i(this, AQ, null);
    i(this, dZ, null);
    i(this, _Q, null);
    i(this, xF, null);
    i(this, jF, !1);
    var n;
    m(this, Xl, l), m(this, _Q, Z), m(this, $d, W), m(this, dZ, t), m(this, fQ, V), m(this, CF, U), m(this, AQ, R), m(this, ZW, N), m(this, PQ, d), m(this, wF, vs.toDateObject(F)), this.trigger = d.flatMap((b) => b.getElementsToTriggerPopup());
    for (const b of this.trigger)
      b.addEventListener("click", Q(this, dW)), b.addEventListener("mouseenter", Q(this, FV)), b.addEventListener("mouseleave", Q(this, ZV)), b.classList.add("popupTriggerArea");
    for (const b of d)
      (n = b.container) == null || n.addEventListener("keydown", Q(this, UW));
    Q(this, Xl).hidden = !0, s && h(this, bl, at).call(this);
  }
  render() {
    if (Q(this, dd))
      return;
    const l = m(this, dd, document.createElement("div"));
    if (l.className = "popup", Q(this, CF)) {
      const F = l.style.outlineColor = I.makeHexColor(...Q(this, CF));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? l.style.backgroundColor = `color-mix(in srgb, ${F} 30%, white)` : l.style.backgroundColor = I.makeHexColor(...Q(this, CF).map((t) => Math.floor(0.7 * (255 - t) + t)));
    }
    const U = document.createElement("span");
    U.className = "header";
    const d = document.createElement("h1");
    if (U.append(d), {
      dir: d.dir,
      str: d.textContent
    } = Q(this, _Q), l.append(U), Q(this, wF)) {
      const F = document.createElement("span");
      F.classList.add("popupDate"), F.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), F.setAttribute("data-l10n-args", JSON.stringify({
        date: Q(this, wF).toLocaleDateString(),
        time: Q(this, wF).toLocaleTimeString()
      })), U.append(F);
    }
    const Z = Q(this, bl, bt);
    if (Z)
      Cn.render({
        xfaHtml: Z,
        intent: "richText",
        div: l
      }), l.lastChild.classList.add("richText", "popupContent");
    else {
      const F = this._formatContents(Q(this, $d));
      l.append(F);
    }
    Q(this, Xl).append(l);
  }
  _formatContents({
    str: l,
    dir: U
  }) {
    const d = document.createElement("p");
    d.classList.add("popupContent"), d.dir = U;
    const Z = l.split(/(?:\r\n?|\n)/);
    for (let F = 0, W = Z.length; F < W; ++F) {
      const t = Z[F];
      d.append(document.createTextNode(t)), F < W - 1 && d.append(document.createElement("br"));
    }
    return d;
  }
  updateEdited({
    rect: l,
    popupContent: U
  }) {
    var d;
    Q(this, xF) || m(this, xF, {
      contentsObj: Q(this, $d),
      richText: Q(this, dZ)
    }), l && m(this, UZ, null), U && (m(this, dZ, h(this, bl, Kn).call(this, U)), m(this, $d, null)), (d = Q(this, dd)) == null || d.remove(), m(this, dd, null);
  }
  resetEdited() {
    var l;
    Q(this, xF) && ({
      contentsObj: SU(this, $d)._,
      richText: SU(this, dZ)._
    } = Q(this, xF), m(this, xF, null), (l = Q(this, dd)) == null || l.remove(), m(this, dd, null), m(this, UZ, null));
  }
  forceHide() {
    m(this, jF, this.isVisible), Q(this, jF) && (Q(this, Xl).hidden = !0);
  }
  maybeShow() {
    Q(this, jF) && (Q(this, dd) || h(this, bl, mt).call(this), m(this, jF, !1), Q(this, Xl).hidden = !1);
  }
  get isVisible() {
    return Q(this, Xl).hidden === !1;
  }
}
UW = new WeakMap(), ZV = new WeakMap(), FV = new WeakMap(), dW = new WeakMap(), CF = new WeakMap(), Xl = new WeakMap(), $d = new WeakMap(), wF = new WeakMap(), PQ = new WeakMap(), fQ = new WeakMap(), ZW = new WeakMap(), lZ = new WeakMap(), dd = new WeakMap(), UZ = new WeakMap(), AQ = new WeakMap(), dZ = new WeakMap(), _Q = new WeakMap(), xF = new WeakMap(), jF = new WeakMap(), bl = new WeakSet(), bt = function() {
  const l = Q(this, dZ), U = Q(this, $d);
  return l != null && l.str && (!(U != null && U.str) || U.str === l.str) && Q(this, dZ).html || null;
}, pR = function() {
  var l, U, d;
  return ((d = (U = (l = Q(this, bl, bt)) == null ? void 0 : l.attributes) == null ? void 0 : U.style) == null ? void 0 : d.fontSize) || 0;
}, rn = function() {
  var l, U, d;
  return ((d = (U = (l = Q(this, bl, bt)) == null ? void 0 : l.attributes) == null ? void 0 : U.style) == null ? void 0 : d.color) || null;
}, Kn = function(l) {
  const U = [], d = {
    str: l,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: U
      }]
    }
  }, Z = {
    style: {
      color: Q(this, bl, rn),
      fontSize: Q(this, bl, pR) ? `calc(${Q(this, bl, pR)}px * var(--scale-factor))` : ""
    }
  };
  for (const F of l.split(`
`))
    U.push({
      name: "span",
      value: F,
      attributes: Z
    });
  return d;
}, gn = function(l) {
  l.altKey || l.shiftKey || l.ctrlKey || l.metaKey || (l.key === "Enter" || l.key === "Escape" && Q(this, lZ)) && h(this, bl, at).call(this);
}, Hn = function() {
  if (Q(this, UZ) !== null)
    return;
  const {
    page: {
      view: l
    },
    viewport: {
      rawDims: {
        pageWidth: U,
        pageHeight: d,
        pageX: Z,
        pageY: F
      }
    }
  } = Q(this, fQ);
  let W = !!Q(this, ZW), t = W ? Q(this, ZW) : Q(this, AQ);
  for (const a of Q(this, PQ))
    if (!t || I.intersect(a.data.rect, t) !== null) {
      t = a.data.rect, W = !0;
      break;
    }
  const V = I.normalizeRect([t[0], l[3] - t[1] + l[1], t[2], l[3] - t[3] + l[1]]), N = W ? t[2] - t[0] + 5 : 0, s = V[0] + N, n = V[1];
  m(this, UZ, [100 * (s - Z) / U, 100 * (n - F) / d]);
  const {
    style: b
  } = Q(this, Xl);
  b.left = `${Q(this, UZ)[0]}%`, b.top = `${Q(this, UZ)[1]}%`;
}, at = function() {
  m(this, lZ, !Q(this, lZ)), Q(this, lZ) ? (h(this, bl, mt).call(this), Q(this, Xl).addEventListener("click", Q(this, dW)), Q(this, Xl).addEventListener("keydown", Q(this, UW))) : (h(this, bl, yR).call(this), Q(this, Xl).removeEventListener("click", Q(this, dW)), Q(this, Xl).removeEventListener("keydown", Q(this, UW)));
}, mt = function() {
  Q(this, dd) || this.render(), this.isVisible ? Q(this, lZ) && Q(this, Xl).classList.add("focused") : (h(this, bl, Hn).call(this), Q(this, Xl).hidden = !1, Q(this, Xl).style.zIndex = parseInt(Q(this, Xl).style.zIndex) + 1e3);
}, yR = function() {
  Q(this, Xl).classList.remove("focused"), !(Q(this, lZ) || !this.isVisible) && (Q(this, Xl).hidden = !0, Q(this, Xl).style.zIndex = parseInt(Q(this, Xl).style.zIndex) - 1e3);
};
class vn extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = l.data.textContent, this.textPosition = l.data.textPosition, this.annotationEditorType = Ul.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const l = document.createElement("div");
      l.classList.add("annotationTextContent"), l.setAttribute("role", "comment");
      for (const U of this.textContent) {
        const d = document.createElement("span");
        d.textContent = U, l.append(d);
      }
      this.container.append(l);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var qQ;
class Ri extends el {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, qQ, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const U = this.data, {
      width: d,
      height: Z
    } = bZ(U.rect), F = this.svgFactory.create(d, Z, !0), W = m(this, qQ, this.svgFactory.createElement("svg:line"));
    return W.setAttribute("x1", U.rect[2] - U.lineCoordinates[0]), W.setAttribute("y1", U.rect[3] - U.lineCoordinates[1]), W.setAttribute("x2", U.rect[2] - U.lineCoordinates[2]), W.setAttribute("y2", U.rect[3] - U.lineCoordinates[3]), W.setAttribute("stroke-width", U.borderStyle.width || 1), W.setAttribute("stroke", "transparent"), W.setAttribute("fill", "transparent"), F.append(W), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, qQ);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
qQ = new WeakMap();
var $Q;
class Ni extends el {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, $Q, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const U = this.data, {
      width: d,
      height: Z
    } = bZ(U.rect), F = this.svgFactory.create(d, Z, !0), W = U.borderStyle.width, t = m(this, $Q, this.svgFactory.createElement("svg:rect"));
    return t.setAttribute("x", W / 2), t.setAttribute("y", W / 2), t.setAttribute("width", d - W), t.setAttribute("height", Z - W), t.setAttribute("stroke-width", W || 1), t.setAttribute("stroke", "transparent"), t.setAttribute("fill", "transparent"), F.append(t), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, $Q);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
$Q = new WeakMap();
var lc;
class si extends el {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, lc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const U = this.data, {
      width: d,
      height: Z
    } = bZ(U.rect), F = this.svgFactory.create(d, Z, !0), W = U.borderStyle.width, t = m(this, lc, this.svgFactory.createElement("svg:ellipse"));
    return t.setAttribute("cx", d / 2), t.setAttribute("cy", Z / 2), t.setAttribute("rx", d / 2 - W / 2), t.setAttribute("ry", Z / 2 - W / 2), t.setAttribute("stroke-width", W || 1), t.setAttribute("stroke", "transparent"), t.setAttribute("fill", "transparent"), F.append(t), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, lc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
lc = new WeakMap();
var Uc;
class Pn extends el {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, Uc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: U,
        vertices: d,
        borderStyle: Z,
        popupRef: F
      }
    } = this;
    if (!d)
      return this.container;
    const {
      width: W,
      height: t
    } = bZ(U), V = this.svgFactory.create(W, t, !0);
    let R = [];
    for (let s = 0, n = d.length; s < n; s += 2) {
      const b = d[s] - U[0], a = U[3] - d[s + 1];
      R.push(`${b},${a}`);
    }
    R = R.join(" ");
    const N = m(this, Uc, this.svgFactory.createElement(this.svgElementName));
    return N.setAttribute("points", R), N.setAttribute("stroke-width", Z.width || 1), N.setAttribute("stroke", "transparent"), N.setAttribute("fill", "transparent"), V.append(N), this.container.append(V), !F && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, Uc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Uc = new WeakMap();
class ni extends Pn {
  constructor(l) {
    super(l), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class bi extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var dc;
class fn extends el {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, dc, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = Ul.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: U,
        inkLists: d,
        borderStyle: Z,
        popupRef: F
      }
    } = this, {
      width: W,
      height: t
    } = bZ(U), V = this.svgFactory.create(W, t, !0);
    for (const R of d) {
      let N = [];
      for (let n = 0, b = R.length; n < b; n += 2) {
        const a = R[n] - U[0], M = U[3] - R[n + 1];
        N.push(`${a},${M}`);
      }
      N = N.join(" ");
      const s = this.svgFactory.createElement(this.svgElementName);
      Q(this, dc).push(s), s.setAttribute("points", N), s.setAttribute("stroke-width", Z.width || 1), s.setAttribute("stroke", "transparent"), s.setAttribute("fill", "transparent"), !F && this.hasPopupData && this._createPopup(), V.append(s);
    }
    return this.container.append(V), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, dc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
dc = new WeakMap();
class ai extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
  }
}
class mi extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
  }
}
class hi extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
  }
}
class ii extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
  }
}
class An extends el {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Zc, Fc, LR;
class Mi extends el {
  constructor(U) {
    var Z;
    super(U, {
      isRenderable: !0
    });
    i(this, Fc);
    i(this, Zc, null);
    const {
      file: d
    } = this.data;
    this.filename = d.filename, this.content = d.content, (Z = this.linkService.eventBus) == null || Z.dispatch("fileattachmentannotation", {
      source: this,
      ...d
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: U,
      data: d
    } = this;
    let Z;
    d.hasAppearance || d.fillAlpha === 0 ? Z = document.createElement("div") : (Z = document.createElement("img"), Z.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(d.name) ? "paperclip" : "pushpin"}.svg`, d.fillAlpha && d.fillAlpha < 1 && (Z.style = `filter: opacity(${Math.round(d.fillAlpha * 100)}%);`)), Z.addEventListener("dblclick", h(this, Fc, LR).bind(this)), m(this, Zc, Z);
    const {
      isMac: F
    } = MU.platform;
    return U.addEventListener("keydown", (W) => {
      W.key === "Enter" && (F ? W.metaKey : W.ctrlKey) && h(this, Fc, LR).call(this);
    }), !d.popupRef && this.hasPopupData ? this._createPopup() : Z.classList.add("popupTriggerArea"), U.append(Z), U;
  }
  getElementsToTriggerPopup() {
    return Q(this, Zc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Zc = new WeakMap(), Fc = new WeakSet(), LR = function() {
  var U;
  (U = this.downloadManager) == null || U.openOrDownloadData(this.content, this.filename);
};
var Wc, OF, FW, V0, _n, oR;
class Ti {
  constructor({
    div: l,
    accessibilityManager: U,
    annotationCanvasMap: d,
    annotationEditorUIManager: Z,
    page: F,
    viewport: W
  }) {
    i(this, V0);
    i(this, Wc, null);
    i(this, OF, null);
    i(this, FW, /* @__PURE__ */ new Map());
    this.div = l, m(this, Wc, U), m(this, OF, d), this.page = F, this.viewport = W, this.zIndex = 0, this._annotationEditorUIManager = Z;
  }
  async render(l) {
    var W;
    const {
      annotations: U
    } = l, d = this.div;
    Q0(d, this.viewport);
    const Z = /* @__PURE__ */ new Map(), F = {
      data: null,
      layer: d,
      linkService: l.linkService,
      downloadManager: l.downloadManager,
      imageResourcesPath: l.imageResourcesPath || "",
      renderForms: l.renderForms !== !1,
      svgFactory: new MN(),
      annotationStorage: l.annotationStorage || new XN(),
      enableScripting: l.enableScripting === !0,
      hasJSActions: l.hasJSActions,
      fieldObjects: l.fieldObjects,
      parent: this,
      elements: null
    };
    for (const t of U) {
      if (t.noHTML)
        continue;
      const V = t.annotationType === zl.POPUP;
      if (V) {
        const s = Z.get(t.id);
        if (!s)
          continue;
        F.elements = s;
      } else {
        const {
          width: s,
          height: n
        } = bZ(t.rect);
        if (s <= 0 || n <= 0)
          continue;
      }
      F.data = t;
      const R = di.create(F);
      if (!R.isRenderable)
        continue;
      if (!V && t.popupRef) {
        const s = Z.get(t.popupRef);
        s ? s.push(R) : Z.set(t.popupRef, [R]);
      }
      const N = R.render();
      t.hidden && (N.style.visibility = "hidden"), h(this, V0, _n).call(this, N, t.id), R.annotationEditorType > 0 && (Q(this, FW).set(R.data.id, R), (W = this._annotationEditorUIManager) == null || W.renderAnnotationElement(R));
    }
    h(this, V0, oR).call(this);
  }
  update({
    viewport: l
  }) {
    const U = this.div;
    this.viewport = l, Q0(U, {
      rotation: l.rotation
    }), h(this, V0, oR).call(this), U.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(Q(this, FW).values());
  }
  getEditableAnnotation(l) {
    return Q(this, FW).get(l);
  }
}
Wc = new WeakMap(), OF = new WeakMap(), FW = new WeakMap(), V0 = new WeakSet(), _n = function(l, U) {
  var Z;
  const d = l.firstChild || l;
  d.id = `${Os}${U}`, this.div.append(l), (Z = Q(this, Wc)) == null || Z.moveElementInDOM(this.div, l, d, !1);
}, oR = function() {
  if (!Q(this, OF))
    return;
  const l = this.div;
  for (const [U, d] of Q(this, OF)) {
    const Z = l.querySelector(`[data-annotation-id="${U}"]`);
    if (!Z)
      continue;
    d.className = "annotationContent";
    const {
      firstChild: F
    } = Z;
    F ? F.nodeName === "CANVAS" ? F.replaceWith(d) : F.classList.contains("annotationContent") ? F.after(d) : F.before(d) : Z.append(d);
  }
  Q(this, OF).clear();
};
const Ac = /\r\n?|\n/g;
var Qc, cc, tc, Vc, Rc, Zd, LU, Nc, oU, WW, Ll, qn, $n, lb, ht, mZ, it, Mt, Ub, DR, db;
const hl = class hl extends Rl {
  constructor(U) {
    super({
      ...U,
      name: "freeTextEditor"
    });
    i(this, Ll);
    i(this, Qc, this.editorDivBlur.bind(this));
    i(this, cc, this.editorDivFocus.bind(this));
    i(this, tc, this.editorDivInput.bind(this));
    i(this, Vc, this.editorDivKeydown.bind(this));
    i(this, Rc, this.editorDivPaste.bind(this));
    i(this, Zd);
    i(this, LU, "");
    i(this, Nc, `${this.id}-editor`);
    i(this, oU);
    i(this, WW, null);
    m(this, Zd, U.color || hl._defaultColor || Rl._defaultLineColor), m(this, oU, U.fontSize || hl._defaultFontSize);
  }
  static get _keyboardManager() {
    const U = hl.prototype, d = (W) => W.isEmpty(), Z = c0.TRANSLATE_SMALL, F = c0.TRANSLATE_BIG;
    return Fl(this, "_keyboardManager", new wc([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], U.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], U.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], U._translateEmpty, {
      args: [-Z, 0],
      checker: d
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], U._translateEmpty, {
      args: [-F, 0],
      checker: d
    }], [["ArrowRight", "mac+ArrowRight"], U._translateEmpty, {
      args: [Z, 0],
      checker: d
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], U._translateEmpty, {
      args: [F, 0],
      checker: d
    }], [["ArrowUp", "mac+ArrowUp"], U._translateEmpty, {
      args: [0, -Z],
      checker: d
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], U._translateEmpty, {
      args: [0, -F],
      checker: d
    }], [["ArrowDown", "mac+ArrowDown"], U._translateEmpty, {
      args: [0, Z],
      checker: d
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], U._translateEmpty, {
      args: [0, F],
      checker: d
    }]]));
  }
  static initialize(U, d) {
    Rl.initialize(U, d, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const Z = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(Z.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(U, d) {
    switch (U) {
      case g.FREETEXT_SIZE:
        hl._defaultFontSize = d;
        break;
      case g.FREETEXT_COLOR:
        hl._defaultColor = d;
        break;
    }
  }
  updateParams(U, d) {
    switch (U) {
      case g.FREETEXT_SIZE:
        h(this, Ll, qn).call(this, d);
        break;
      case g.FREETEXT_COLOR:
        h(this, Ll, $n).call(this, d);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[g.FREETEXT_SIZE, hl._defaultFontSize], [g.FREETEXT_COLOR, hl._defaultColor || Rl._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[g.FREETEXT_SIZE, Q(this, oU)], [g.FREETEXT_COLOR, Q(this, Zd)]];
  }
  _translateEmpty(U, d) {
    this._uiManager.translateSelectedEditors(U, d, !0);
  }
  getInitialTranslation() {
    const U = this.parentScale;
    return [-hl._internalPadding * U, -(hl._internalPadding + Q(this, oU)) * U];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(Ul.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant");
    const U = this._uiManager._signal;
    this.editorDiv.addEventListener("keydown", Q(this, Vc), {
      signal: U
    }), this.editorDiv.addEventListener("focus", Q(this, cc), {
      signal: U
    }), this.editorDiv.addEventListener("blur", Q(this, Qc), {
      signal: U
    }), this.editorDiv.addEventListener("input", Q(this, tc), {
      signal: U
    }), this.editorDiv.addEventListener("paste", Q(this, Rc), {
      signal: U
    });
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", Q(this, Nc)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", Q(this, Vc)), this.editorDiv.removeEventListener("focus", Q(this, cc)), this.editorDiv.removeEventListener("blur", Q(this, Qc)), this.editorDiv.removeEventListener("input", Q(this, tc)), this.editorDiv.removeEventListener("paste", Q(this, Rc)), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
  }
  focusin(U) {
    this._focusEventsAllowed && (super.focusin(U), U.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    var U;
    this.width || (this.enableEditMode(), this.editorDiv.focus(), (U = this._initialOptions) != null && U.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const U = Q(this, LU), d = m(this, LU, h(this, Ll, lb).call(this).trimEnd());
    if (U === d)
      return;
    const Z = (F) => {
      if (m(this, LU, F), !F) {
        this.remove();
        return;
      }
      h(this, Ll, Mt).call(this), this._uiManager.rebuild(this), h(this, Ll, ht).call(this);
    };
    this.addCommands({
      cmd: () => {
        Z(d);
      },
      undo: () => {
        Z(U);
      },
      mustExec: !1
    }), h(this, Ll, ht).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  dblclick(U) {
    this.enterInEditMode();
  }
  keydown(U) {
    U.target === this.div && U.key === "Enter" && (this.enterInEditMode(), U.preventDefault());
  }
  editorDivKeydown(U) {
    hl._keyboardManager.exec(this, U);
  }
  editorDivFocus(U) {
    this.isEditing = !0;
  }
  editorDivBlur(U) {
    this.isEditing = !1;
  }
  editorDivInput(U) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  render() {
    if (this.div)
      return this.div;
    let U, d;
    this.width && (U = this.x, d = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", Q(this, Nc)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), Rl._l10nPromise.get("pdfjs-free-text-default-content").then((F) => {
      var W;
      return (W = this.editorDiv) == null ? void 0 : W.setAttribute("default-content", F);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: Z
    } = this.editorDiv;
    if (Z.fontSize = `calc(${Q(this, oU)}px * var(--scale-factor))`, Z.color = Q(this, Zd), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), Et(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [F, W] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: t
        } = Q(this, WW);
        let [V, R] = this.getInitialTranslation();
        [V, R] = this.pageTranslationToScreen(V, R);
        const [N, s] = this.pageDimensions, [n, b] = this.pageTranslation;
        let a, M;
        switch (this.rotation) {
          case 0:
            a = U + (t[0] - n) / N, M = d + this.height - (t[1] - b) / s;
            break;
          case 90:
            a = U + (t[0] - n) / N, M = d - (t[1] - b) / s, [V, R] = [R, -V];
            break;
          case 180:
            a = U - this.width + (t[0] - n) / N, M = d - (t[1] - b) / s, [V, R] = [-V, -R];
            break;
          case 270:
            a = U + (t[0] - n - this.height * s) / N, M = d + (t[1] - b - this.width * N) / s, [V, R] = [-R, V];
            break;
        }
        this.setAt(a * F, M * W, V, R);
      } else
        this.setAt(U * F, d * W, this.width * F, this.height * W);
      h(this, Ll, Mt).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(U) {
    var a, M, G;
    const d = U.clipboardData || window.clipboardData, {
      types: Z
    } = d;
    if (Z.length === 1 && Z[0] === "text/plain")
      return;
    U.preventDefault();
    const F = h(a = hl, mZ, DR).call(a, d.getData("text") || "").replaceAll(Ac, `
`);
    if (!F)
      return;
    const W = window.getSelection();
    if (!W.rangeCount)
      return;
    this.editorDiv.normalize(), W.deleteFromDocument();
    const t = W.getRangeAt(0);
    if (!F.includes(`
`)) {
      t.insertNode(document.createTextNode(F)), this.editorDiv.normalize(), W.collapseToStart();
      return;
    }
    const {
      startContainer: V,
      startOffset: R
    } = t, N = [], s = [];
    if (V.nodeType === Node.TEXT_NODE) {
      const T = V.parentElement;
      if (s.push(V.nodeValue.slice(R).replaceAll(Ac, "")), T !== this.editorDiv) {
        let J = N;
        for (const Y of this.editorDiv.childNodes) {
          if (Y === T) {
            J = s;
            continue;
          }
          J.push(h(M = hl, mZ, it).call(M, Y));
        }
      }
      N.push(V.nodeValue.slice(0, R).replaceAll(Ac, ""));
    } else if (V === this.editorDiv) {
      let T = N, J = 0;
      for (const Y of this.editorDiv.childNodes)
        J++ === R && (T = s), T.push(h(G = hl, mZ, it).call(G, Y));
    }
    m(this, LU, `${N.join(`
`)}${F}${s.join(`
`)}`), h(this, Ll, Mt).call(this);
    const n = new Range();
    let b = N.reduce((T, J) => T + J.length, 0);
    for (const {
      firstChild: T
    } of this.editorDiv.childNodes)
      if (T.nodeType === Node.TEXT_NODE) {
        const J = T.nodeValue.length;
        if (b <= J) {
          n.setStart(T, b), n.setEnd(T, b);
          break;
        }
        b -= J;
      }
    W.removeAllRanges(), W.addRange(n);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(U, d, Z) {
    var t;
    let F = null;
    if (U instanceof vn) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: V,
            fontColor: R
          },
          rect: N,
          rotation: s,
          id: n
        },
        textContent: b,
        textPosition: a,
        parent: {
          page: {
            pageNumber: M
          }
        }
      } = U;
      if (!b || b.length === 0)
        return null;
      F = U = {
        annotationType: Ul.FREETEXT,
        color: Array.from(R),
        fontSize: V,
        value: b.join(`
`),
        position: a,
        pageIndex: M - 1,
        rect: N.slice(0),
        rotation: s,
        id: n,
        deleted: !1
      };
    }
    const W = super.deserialize(U, d, Z);
    return m(W, oU, U.fontSize), m(W, Zd, I.makeHexColor(...U.color)), m(W, LU, h(t = hl, mZ, DR).call(t, U.value)), W.annotationElementId = U.id || null, m(W, WW, F), W;
  }
  serialize(U = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: !0
      };
    const d = hl._internalPadding * this.parentScale, Z = this.getRect(d, d), F = Rl._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : Q(this, Zd)), W = {
      annotationType: Ul.FREETEXT,
      color: F,
      fontSize: Q(this, oU),
      value: h(this, Ll, Ub).call(this),
      pageIndex: this.pageIndex,
      rect: Z,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return U ? W : this.annotationElementId && !h(this, Ll, db).call(this, W) ? null : (W.id = this.annotationElementId, W);
  }
  renderAnnotationElement(U) {
    const d = super.renderAnnotationElement(U);
    if (this.deleted)
      return d;
    const {
      style: Z
    } = d;
    Z.fontSize = `calc(${Q(this, oU)}px * var(--scale-factor))`, Z.color = Q(this, Zd), d.replaceChildren();
    for (const W of Q(this, LU).split(`
`)) {
      const t = document.createElement("div");
      t.append(W ? document.createTextNode(W) : document.createElement("br")), d.append(t);
    }
    const F = hl._internalPadding * this.parentScale;
    return U.updateEdited({
      rect: this.getRect(F, F),
      popupContent: Q(this, LU)
    }), d;
  }
  resetAnnotationElement(U) {
    super.resetAnnotationElement(U), U.resetEdited();
  }
};
Qc = new WeakMap(), cc = new WeakMap(), tc = new WeakMap(), Vc = new WeakMap(), Rc = new WeakMap(), Zd = new WeakMap(), LU = new WeakMap(), Nc = new WeakMap(), oU = new WeakMap(), WW = new WeakMap(), Ll = new WeakSet(), qn = function(U) {
  const d = (F) => {
    this.editorDiv.style.fontSize = `calc(${F}px * var(--scale-factor))`, this.translate(0, -(F - Q(this, oU)) * this.parentScale), m(this, oU, F), h(this, Ll, ht).call(this);
  }, Z = Q(this, oU);
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, $n = function(U) {
  const d = (F) => {
    m(this, Zd, this.editorDiv.style.color = F);
  }, Z = Q(this, Zd);
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, lb = function() {
  var d;
  const U = [];
  this.editorDiv.normalize();
  for (const Z of this.editorDiv.childNodes)
    U.push(h(d = hl, mZ, it).call(d, Z));
  return U.join(`
`);
}, ht = function() {
  const [U, d] = this.parentDimensions;
  let Z;
  if (this.isAttachedToDOM)
    Z = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: F,
      div: W
    } = this, t = W.style.display, V = W.classList.contains("hidden");
    W.classList.remove("hidden"), W.style.display = "hidden", F.div.append(this.div), Z = W.getBoundingClientRect(), W.remove(), W.style.display = t, W.classList.toggle("hidden", V);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = Z.width / U, this.height = Z.height / d) : (this.width = Z.height / U, this.height = Z.width / d), this.fixAndSetPosition();
}, mZ = new WeakSet(), it = function(U) {
  return (U.nodeType === Node.TEXT_NODE ? U.nodeValue : U.innerText).replaceAll(Ac, "");
}, Mt = function() {
  if (this.editorDiv.replaceChildren(), !!Q(this, LU))
    for (const U of Q(this, LU).split(`
`)) {
      const d = document.createElement("div");
      d.append(U ? document.createTextNode(U) : document.createElement("br")), this.editorDiv.append(d);
    }
}, Ub = function() {
  return Q(this, LU).replaceAll(" ", " ");
}, DR = function(U) {
  return U.replaceAll(" ", " ");
}, db = function(U) {
  const {
    value: d,
    fontSize: Z,
    color: F,
    pageIndex: W
  } = Q(this, WW);
  return this._hasBeenMoved || U.value !== d || U.fontSize !== Z || U.color.some((t, V) => t !== F[V]) || U.pageIndex !== W;
}, i(hl, mZ), v(hl, "_freeTextDefaultContent", ""), v(hl, "_internalPadding", 0), v(hl, "_defaultColor", null), v(hl, "_defaultFontSize", 10), v(hl, "_type", "freetext"), v(hl, "_editorType", Ul.FREETEXT);
let zR = hl;
var sc, xZ, Fd, nU, Zb, Tt, Fb, Wb, IR;
class kR {
  constructor(l, U = 0, d = 0, Z = !0) {
    i(this, nU);
    i(this, sc);
    i(this, xZ, []);
    i(this, Fd, []);
    let F = 1 / 0, W = -1 / 0, t = 1 / 0, V = -1 / 0;
    const N = 10 ** -4;
    for (const {
      x: T,
      y: J,
      width: Y,
      height: B
    } of l) {
      const S = Math.floor((T - U) / N) * N, X = Math.ceil((T + Y + U) / N) * N, e = Math.floor((J - U) / N) * N, p = Math.ceil((J + B + U) / N) * N, y = [S, e, p, !0], j = [X, e, p, !1];
      Q(this, xZ).push(y, j), F = Math.min(F, S), W = Math.max(W, X), t = Math.min(t, e), V = Math.max(V, p);
    }
    const s = W - F + 2 * d, n = V - t + 2 * d, b = F - d, a = t - d, M = Q(this, xZ).at(Z ? -1 : -2), G = [M[0], M[2]];
    for (const T of Q(this, xZ)) {
      const [J, Y, B] = T;
      T[0] = (J - b) / s, T[1] = (Y - a) / n, T[2] = (B - a) / n;
    }
    m(this, sc, {
      x: b,
      y: a,
      width: s,
      height: n,
      lastPoint: G
    });
  }
  getOutlines() {
    Q(this, xZ).sort((U, d) => U[0] - d[0] || U[1] - d[1] || U[2] - d[2]);
    const l = [];
    for (const U of Q(this, xZ))
      U[3] ? (l.push(...h(this, nU, IR).call(this, U)), h(this, nU, Fb).call(this, U)) : (h(this, nU, Wb).call(this, U), l.push(...h(this, nU, IR).call(this, U)));
    return h(this, nU, Zb).call(this, l);
  }
}
sc = new WeakMap(), xZ = new WeakMap(), Fd = new WeakMap(), nU = new WeakSet(), Zb = function(l) {
  const U = [], d = /* @__PURE__ */ new Set();
  for (const W of l) {
    const [t, V, R] = W;
    U.push([t, V, W], [t, R, W]);
  }
  U.sort((W, t) => W[1] - t[1] || W[0] - t[0]);
  for (let W = 0, t = U.length; W < t; W += 2) {
    const V = U[W][2], R = U[W + 1][2];
    V.push(R), R.push(V), d.add(V), d.add(R);
  }
  const Z = [];
  let F;
  for (; d.size > 0; ) {
    const W = d.values().next().value;
    let [t, V, R, N, s] = W;
    d.delete(W);
    let n = t, b = V;
    for (F = [t, R], Z.push(F); ; ) {
      let a;
      if (d.has(N))
        a = N;
      else if (d.has(s))
        a = s;
      else
        break;
      d.delete(a), [t, V, R, N, s] = a, n !== t && (F.push(n, b, t, b === V ? V : R), n = t), b = b === V ? R : V;
    }
    F.push(n, b);
  }
  return new Gi(Z, Q(this, sc));
}, Tt = function(l) {
  const U = Q(this, Fd);
  let d = 0, Z = U.length - 1;
  for (; d <= Z; ) {
    const F = d + Z >> 1, W = U[F][0];
    if (W === l)
      return F;
    W < l ? d = F + 1 : Z = F - 1;
  }
  return Z + 1;
}, Fb = function([, l, U]) {
  const d = h(this, nU, Tt).call(this, l);
  Q(this, Fd).splice(d, 0, [l, U]);
}, Wb = function([, l, U]) {
  const d = h(this, nU, Tt).call(this, l);
  for (let Z = d; Z < Q(this, Fd).length; Z++) {
    const [F, W] = Q(this, Fd)[Z];
    if (F !== l)
      break;
    if (F === l && W === U) {
      Q(this, Fd).splice(Z, 1);
      return;
    }
  }
  for (let Z = d - 1; Z >= 0; Z--) {
    const [F, W] = Q(this, Fd)[Z];
    if (F !== l)
      break;
    if (F === l && W === U) {
      Q(this, Fd).splice(Z, 1);
      return;
    }
  }
}, IR = function(l) {
  const [U, d, Z] = l, F = [[U, d, Z]], W = h(this, nU, Tt).call(this, Z);
  for (let t = 0; t < W; t++) {
    const [V, R] = Q(this, Fd)[t];
    for (let N = 0, s = F.length; N < s; N++) {
      const [, n, b] = F[N];
      if (!(R <= n || b <= V)) {
        if (n >= V) {
          if (b > R)
            F[N][1] = R;
          else {
            if (s === 1)
              return [];
            F.splice(N, 1), N--, s--;
          }
          continue;
        }
        F[N][2] = V, b > R && F.push([U, R, b]);
      }
    }
  }
  return F;
};
class Qb {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(l, U) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof CR;
  }
}
var nc, QW;
class Gi extends Qb {
  constructor(U, d) {
    super();
    i(this, nc);
    i(this, QW);
    m(this, QW, U), m(this, nc, d);
  }
  toSVGPath() {
    const U = [];
    for (const d of Q(this, QW)) {
      let [Z, F] = d;
      U.push(`M${Z} ${F}`);
      for (let W = 2; W < d.length; W += 2) {
        const t = d[W], V = d[W + 1];
        t === Z ? (U.push(`V${V}`), F = V) : V === F && (U.push(`H${t}`), Z = t);
      }
      U.push("Z");
    }
    return U.join(" ");
  }
  serialize([U, d, Z, F], W) {
    const t = [], V = Z - U, R = F - d;
    for (const N of Q(this, QW)) {
      const s = new Array(N.length);
      for (let n = 0; n < N.length; n += 2)
        s[n] = U + N[n] * V, s[n + 1] = F - N[n + 1] * R;
      t.push(s);
    }
    return t;
  }
  get box() {
    return Q(this, nc);
  }
}
nc = new WeakMap(), QW = new WeakMap();
var Td, ZZ, cW, tW, Gd, $, rF, KF, bc, ac, VW, RW, jZ, mc, WV, QV, hc, ER;
const wd = class wd {
  constructor({
    x: l,
    y: U
  }, d, Z, F, W, t = 0) {
    i(this, hc);
    i(this, Td);
    i(this, ZZ, []);
    i(this, cW);
    i(this, tW);
    i(this, Gd, []);
    i(this, $, new Float64Array(18));
    i(this, rF);
    i(this, KF);
    i(this, bc);
    i(this, ac);
    i(this, VW);
    i(this, RW);
    i(this, jZ, []);
    m(this, Td, d), m(this, RW, F * Z), m(this, tW, W), Q(this, $).set([NaN, NaN, NaN, NaN, l, U], 6), m(this, cW, t), m(this, ac, Q(wd, mc) * Z), m(this, bc, Q(wd, QV) * Z), m(this, VW, Z), Q(this, jZ).push(l, U);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(Q(this, $)[8]);
  }
  add({
    x: l,
    y: U
  }) {
    var y;
    m(this, rF, l), m(this, KF, U);
    const [d, Z, F, W] = Q(this, Td);
    let [t, V, R, N] = Q(this, $).subarray(8, 12);
    const s = l - R, n = U - N, b = Math.hypot(s, n);
    if (b < Q(this, bc))
      return !1;
    const a = b - Q(this, ac), M = a / b, G = M * s, T = M * n;
    let J = t, Y = V;
    t = R, V = N, R += G, N += T, (y = Q(this, jZ)) == null || y.push(l, U);
    const B = -T / a, S = G / a, X = B * Q(this, RW), e = S * Q(this, RW);
    return Q(this, $).set(Q(this, $).subarray(2, 8), 0), Q(this, $).set([R + X, N + e], 4), Q(this, $).set(Q(this, $).subarray(14, 18), 12), Q(this, $).set([R - X, N - e], 16), isNaN(Q(this, $)[6]) ? (Q(this, Gd).length === 0 && (Q(this, $).set([t + X, V + e], 2), Q(this, Gd).push(NaN, NaN, NaN, NaN, (t + X - d) / F, (V + e - Z) / W), Q(this, $).set([t - X, V - e], 14), Q(this, ZZ).push(NaN, NaN, NaN, NaN, (t - X - d) / F, (V - e - Z) / W)), Q(this, $).set([J, Y, t, V, R, N], 6), !this.isEmpty()) : (Q(this, $).set([J, Y, t, V, R, N], 6), Math.abs(Math.atan2(Y - V, J - t) - Math.atan2(T, G)) < Math.PI / 2 ? ([t, V, R, N] = Q(this, $).subarray(2, 6), Q(this, Gd).push(NaN, NaN, NaN, NaN, ((t + R) / 2 - d) / F, ((V + N) / 2 - Z) / W), [t, V, J, Y] = Q(this, $).subarray(14, 18), Q(this, ZZ).push(NaN, NaN, NaN, NaN, ((J + t) / 2 - d) / F, ((Y + V) / 2 - Z) / W), !0) : ([J, Y, t, V, R, N] = Q(this, $).subarray(0, 6), Q(this, Gd).push(((J + 5 * t) / 6 - d) / F, ((Y + 5 * V) / 6 - Z) / W, ((5 * t + R) / 6 - d) / F, ((5 * V + N) / 6 - Z) / W, ((t + R) / 2 - d) / F, ((V + N) / 2 - Z) / W), [R, N, t, V, J, Y] = Q(this, $).subarray(12, 18), Q(this, ZZ).push(((J + 5 * t) / 6 - d) / F, ((Y + 5 * V) / 6 - Z) / W, ((5 * t + R) / 6 - d) / F, ((5 * V + N) / 6 - Z) / W, ((t + R) / 2 - d) / F, ((V + N) / 2 - Z) / W), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const l = Q(this, Gd), U = Q(this, ZZ), d = Q(this, $).subarray(4, 6), Z = Q(this, $).subarray(16, 18), [F, W, t, V] = Q(this, Td), [R, N, s, n] = h(this, hc, ER).call(this);
    if (isNaN(Q(this, $)[6]) && !this.isEmpty())
      return `M${(Q(this, $)[2] - F) / t} ${(Q(this, $)[3] - W) / V} L${(Q(this, $)[4] - F) / t} ${(Q(this, $)[5] - W) / V} L${R} ${N} L${s} ${n} L${(Q(this, $)[16] - F) / t} ${(Q(this, $)[17] - W) / V} L${(Q(this, $)[14] - F) / t} ${(Q(this, $)[15] - W) / V} Z`;
    const b = [];
    b.push(`M${l[4]} ${l[5]}`);
    for (let a = 6; a < l.length; a += 6)
      isNaN(l[a]) ? b.push(`L${l[a + 4]} ${l[a + 5]}`) : b.push(`C${l[a]} ${l[a + 1]} ${l[a + 2]} ${l[a + 3]} ${l[a + 4]} ${l[a + 5]}`);
    b.push(`L${(d[0] - F) / t} ${(d[1] - W) / V} L${R} ${N} L${s} ${n} L${(Z[0] - F) / t} ${(Z[1] - W) / V}`);
    for (let a = U.length - 6; a >= 6; a -= 6)
      isNaN(U[a]) ? b.push(`L${U[a + 4]} ${U[a + 5]}`) : b.push(`C${U[a]} ${U[a + 1]} ${U[a + 2]} ${U[a + 3]} ${U[a + 4]} ${U[a + 5]}`);
    return b.push(`L${U[4]} ${U[5]} Z`), b.join(" ");
  }
  getOutlines() {
    var T;
    const l = Q(this, Gd), U = Q(this, ZZ), d = Q(this, $), Z = d.subarray(4, 6), F = d.subarray(16, 18), [W, t, V, R] = Q(this, Td), N = new Float64Array((((T = Q(this, jZ)) == null ? void 0 : T.length) ?? 0) + 2);
    for (let J = 0, Y = N.length - 2; J < Y; J += 2)
      N[J] = (Q(this, jZ)[J] - W) / V, N[J + 1] = (Q(this, jZ)[J + 1] - t) / R;
    N[N.length - 2] = (Q(this, rF) - W) / V, N[N.length - 1] = (Q(this, KF) - t) / R;
    const [s, n, b, a] = h(this, hc, ER).call(this);
    if (isNaN(d[6]) && !this.isEmpty()) {
      const J = new Float64Array(36);
      return J.set([NaN, NaN, NaN, NaN, (d[2] - W) / V, (d[3] - t) / R, NaN, NaN, NaN, NaN, (d[4] - W) / V, (d[5] - t) / R, NaN, NaN, NaN, NaN, s, n, NaN, NaN, NaN, NaN, b, a, NaN, NaN, NaN, NaN, (d[16] - W) / V, (d[17] - t) / R, NaN, NaN, NaN, NaN, (d[14] - W) / V, (d[15] - t) / R], 0), new CR(J, N, Q(this, Td), Q(this, VW), Q(this, cW), Q(this, tW));
    }
    const M = new Float64Array(Q(this, Gd).length + 24 + Q(this, ZZ).length);
    let G = l.length;
    for (let J = 0; J < G; J += 2) {
      if (isNaN(l[J])) {
        M[J] = M[J + 1] = NaN;
        continue;
      }
      M[J] = l[J], M[J + 1] = l[J + 1];
    }
    M.set([NaN, NaN, NaN, NaN, (Z[0] - W) / V, (Z[1] - t) / R, NaN, NaN, NaN, NaN, s, n, NaN, NaN, NaN, NaN, b, a, NaN, NaN, NaN, NaN, (F[0] - W) / V, (F[1] - t) / R], G), G += 24;
    for (let J = U.length - 6; J >= 6; J -= 6)
      for (let Y = 0; Y < 6; Y += 2) {
        if (isNaN(U[J + Y])) {
          M[G] = M[G + 1] = NaN, G += 2;
          continue;
        }
        M[G] = U[J + Y], M[G + 1] = U[J + Y + 1], G += 2;
      }
    return M.set([NaN, NaN, NaN, NaN, U[4], U[5]], G), new CR(M, N, Q(this, Td), Q(this, VW), Q(this, cW), Q(this, tW));
  }
};
Td = new WeakMap(), ZZ = new WeakMap(), cW = new WeakMap(), tW = new WeakMap(), Gd = new WeakMap(), $ = new WeakMap(), rF = new WeakMap(), KF = new WeakMap(), bc = new WeakMap(), ac = new WeakMap(), VW = new WeakMap(), RW = new WeakMap(), jZ = new WeakMap(), mc = new WeakMap(), WV = new WeakMap(), QV = new WeakMap(), hc = new WeakSet(), ER = function() {
  const l = Q(this, $).subarray(4, 6), U = Q(this, $).subarray(16, 18), [d, Z, F, W] = Q(this, Td);
  return [(Q(this, rF) + (l[0] - U[0]) / 2 - d) / F, (Q(this, KF) + (l[1] - U[1]) / 2 - Z) / W, (Q(this, rF) + (U[0] - l[0]) / 2 - d) / F, (Q(this, KF) + (U[1] - l[1]) / 2 - Z) / W];
}, i(wd, mc, 8), i(wd, WV, 2), i(wd, QV, Q(wd, mc) + Q(wd, WV));
let xt = wd;
var NW, gF, FZ, ic, zU, Mc, Yl, TU, jW, OW, cb;
class CR extends Qb {
  constructor(U, d, Z, F, W, t) {
    super();
    i(this, TU);
    i(this, NW);
    i(this, gF, null);
    i(this, FZ);
    i(this, ic);
    i(this, zU);
    i(this, Mc);
    i(this, Yl);
    m(this, Yl, U), m(this, zU, d), m(this, NW, Z), m(this, Mc, F), m(this, FZ, W), m(this, ic, t), h(this, TU, cb).call(this, t);
    const {
      x: V,
      y: R,
      width: N,
      height: s
    } = Q(this, gF);
    for (let n = 0, b = U.length; n < b; n += 2)
      U[n] = (U[n] - V) / N, U[n + 1] = (U[n + 1] - R) / s;
    for (let n = 0, b = d.length; n < b; n += 2)
      d[n] = (d[n] - V) / N, d[n + 1] = (d[n + 1] - R) / s;
  }
  toSVGPath() {
    const U = [`M${Q(this, Yl)[4]} ${Q(this, Yl)[5]}`];
    for (let d = 6, Z = Q(this, Yl).length; d < Z; d += 6) {
      if (isNaN(Q(this, Yl)[d])) {
        U.push(`L${Q(this, Yl)[d + 4]} ${Q(this, Yl)[d + 5]}`);
        continue;
      }
      U.push(`C${Q(this, Yl)[d]} ${Q(this, Yl)[d + 1]} ${Q(this, Yl)[d + 2]} ${Q(this, Yl)[d + 3]} ${Q(this, Yl)[d + 4]} ${Q(this, Yl)[d + 5]}`);
    }
    return U.push("Z"), U.join(" ");
  }
  serialize([U, d, Z, F], W) {
    const t = Z - U, V = F - d;
    let R, N;
    switch (W) {
      case 0:
        R = h(this, TU, jW).call(this, Q(this, Yl), U, F, t, -V), N = h(this, TU, jW).call(this, Q(this, zU), U, F, t, -V);
        break;
      case 90:
        R = h(this, TU, OW).call(this, Q(this, Yl), U, d, t, V), N = h(this, TU, OW).call(this, Q(this, zU), U, d, t, V);
        break;
      case 180:
        R = h(this, TU, jW).call(this, Q(this, Yl), Z, d, -t, V), N = h(this, TU, jW).call(this, Q(this, zU), Z, d, -t, V);
        break;
      case 270:
        R = h(this, TU, OW).call(this, Q(this, Yl), Z, F, -t, -V), N = h(this, TU, OW).call(this, Q(this, zU), Z, F, -t, -V);
        break;
    }
    return {
      outline: Array.from(R),
      points: [Array.from(N)]
    };
  }
  get box() {
    return Q(this, gF);
  }
  getNewOutline(U, d) {
    const {
      x: Z,
      y: F,
      width: W,
      height: t
    } = Q(this, gF), [V, R, N, s] = Q(this, NW), n = W * N, b = t * s, a = Z * N + V, M = F * s + R, G = new xt({
      x: Q(this, zU)[0] * n + a,
      y: Q(this, zU)[1] * b + M
    }, Q(this, NW), Q(this, Mc), U, Q(this, ic), d ?? Q(this, FZ));
    for (let T = 2; T < Q(this, zU).length; T += 2)
      G.add({
        x: Q(this, zU)[T] * n + a,
        y: Q(this, zU)[T + 1] * b + M
      });
    return G.getOutlines();
  }
}
NW = new WeakMap(), gF = new WeakMap(), FZ = new WeakMap(), ic = new WeakMap(), zU = new WeakMap(), Mc = new WeakMap(), Yl = new WeakMap(), TU = new WeakSet(), jW = function(U, d, Z, F, W) {
  const t = new Float64Array(U.length);
  for (let V = 0, R = U.length; V < R; V += 2)
    t[V] = d + U[V] * F, t[V + 1] = Z + U[V + 1] * W;
  return t;
}, OW = function(U, d, Z, F, W) {
  const t = new Float64Array(U.length);
  for (let V = 0, R = U.length; V < R; V += 2)
    t[V] = d + U[V + 1] * F, t[V + 1] = Z + U[V] * W;
  return t;
}, cb = function(U) {
  const d = Q(this, Yl);
  let Z = d[4], F = d[5], W = Z, t = F, V = Z, R = F, N = Z, s = F;
  const n = U ? Math.max : Math.min;
  for (let T = 6, J = d.length; T < J; T += 6) {
    if (isNaN(d[T]))
      W = Math.min(W, d[T + 4]), t = Math.min(t, d[T + 5]), V = Math.max(V, d[T + 4]), R = Math.max(R, d[T + 5]), s < d[T + 5] ? (N = d[T + 4], s = d[T + 5]) : s === d[T + 5] && (N = n(N, d[T + 4]));
    else {
      const Y = I.bezierBoundingBox(Z, F, ...d.slice(T, T + 6));
      W = Math.min(W, Y[0]), t = Math.min(t, Y[1]), V = Math.max(V, Y[2]), R = Math.max(R, Y[3]), s < Y[3] ? (N = Y[2], s = Y[3]) : s === Y[3] && (N = n(N, Y[2]));
    }
    Z = d[T + 4], F = d[T + 5];
  }
  const b = W - Q(this, FZ), a = t - Q(this, FZ), M = V - W + 2 * Q(this, FZ), G = R - t + 2 * Q(this, FZ);
  m(this, gF, {
    x: b,
    y: a,
    width: M,
    height: G,
    lastPoint: [N, s]
  });
};
var Tc, Gc, Wd, HF, sW, kl, Jc, nW, Sc, Xc, Qd, bW, ml, wR, xR, tb, WF, Vb, XZ;
const xd = class xd {
  constructor({
    editor: l = null,
    uiManager: U = null
  }) {
    i(this, ml);
    i(this, Tc, h(this, ml, tb).bind(this));
    i(this, Gc, h(this, ml, Vb).bind(this));
    i(this, Wd, null);
    i(this, HF, null);
    i(this, sW);
    i(this, kl, null);
    i(this, Jc, !1);
    i(this, nW, !1);
    i(this, Sc, null);
    i(this, Xc);
    i(this, Qd, null);
    i(this, bW);
    var d;
    l ? (m(this, nW, !1), m(this, bW, g.HIGHLIGHT_COLOR), m(this, Sc, l)) : (m(this, nW, !0), m(this, bW, g.HIGHLIGHT_DEFAULT_COLOR)), m(this, Qd, (l == null ? void 0 : l._uiManager) || U), m(this, Xc, Q(this, Qd)._eventBus), m(this, sW, (l == null ? void 0 : l.color) || ((d = Q(this, Qd)) == null ? void 0 : d.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return Fl(this, "_keyboardManager", new wc([[["Escape", "mac+Escape"], xd.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], xd.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], xd.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], xd.prototype._moveToPrevious], [["Home", "mac+Home"], xd.prototype._moveToBeginning], [["End", "mac+End"], xd.prototype._moveToEnd]]));
  }
  renderButton() {
    const l = m(this, Wd, document.createElement("button"));
    l.className = "colorPicker", l.tabIndex = "0", l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), l.setAttribute("aria-haspopup", !0);
    const U = Q(this, Qd)._signal;
    l.addEventListener("click", h(this, ml, WF).bind(this), {
      signal: U
    }), l.addEventListener("keydown", Q(this, Tc), {
      signal: U
    });
    const d = m(this, HF, document.createElement("span"));
    return d.className = "swatch", d.setAttribute("aria-hidden", !0), d.style.backgroundColor = Q(this, sW), l.append(d), l;
  }
  renderMainDropdown() {
    const l = m(this, kl, h(this, ml, wR).call(this));
    return l.setAttribute("aria-orientation", "horizontal"), l.setAttribute("aria-labelledby", "highlightColorPickerLabel"), l;
  }
  _colorSelectFromKeyboard(l) {
    if (l.target === Q(this, Wd)) {
      h(this, ml, WF).call(this, l);
      return;
    }
    const U = l.target.getAttribute("data-color");
    U && h(this, ml, xR).call(this, U, l);
  }
  _moveToNext(l) {
    var U, d;
    if (!Q(this, ml, XZ)) {
      h(this, ml, WF).call(this, l);
      return;
    }
    if (l.target === Q(this, Wd)) {
      (U = Q(this, kl).firstChild) == null || U.focus();
      return;
    }
    (d = l.target.nextSibling) == null || d.focus();
  }
  _moveToPrevious(l) {
    var U, d;
    if (l.target === ((U = Q(this, kl)) == null ? void 0 : U.firstChild) || l.target === Q(this, Wd)) {
      Q(this, ml, XZ) && this._hideDropdownFromKeyboard();
      return;
    }
    Q(this, ml, XZ) || h(this, ml, WF).call(this, l), (d = l.target.previousSibling) == null || d.focus();
  }
  _moveToBeginning(l) {
    var U;
    if (!Q(this, ml, XZ)) {
      h(this, ml, WF).call(this, l);
      return;
    }
    (U = Q(this, kl).firstChild) == null || U.focus();
  }
  _moveToEnd(l) {
    var U;
    if (!Q(this, ml, XZ)) {
      h(this, ml, WF).call(this, l);
      return;
    }
    (U = Q(this, kl).lastChild) == null || U.focus();
  }
  hideDropdown() {
    var l;
    (l = Q(this, kl)) == null || l.classList.add("hidden"), window.removeEventListener("pointerdown", Q(this, Gc));
  }
  _hideDropdownFromKeyboard() {
    var l;
    if (!Q(this, nW)) {
      if (!Q(this, ml, XZ)) {
        (l = Q(this, Sc)) == null || l.unselect();
        return;
      }
      this.hideDropdown(), Q(this, Wd).focus({
        preventScroll: !0,
        focusVisible: Q(this, Jc)
      });
    }
  }
  updateColor(l) {
    if (Q(this, HF) && (Q(this, HF).style.backgroundColor = l), !Q(this, kl))
      return;
    const U = Q(this, Qd).highlightColors.values();
    for (const d of Q(this, kl).children)
      d.setAttribute("aria-selected", U.next().value === l);
  }
  destroy() {
    var l, U;
    (l = Q(this, Wd)) == null || l.remove(), m(this, Wd, null), m(this, HF, null), (U = Q(this, kl)) == null || U.remove(), m(this, kl, null);
  }
};
Tc = new WeakMap(), Gc = new WeakMap(), Wd = new WeakMap(), HF = new WeakMap(), sW = new WeakMap(), kl = new WeakMap(), Jc = new WeakMap(), nW = new WeakMap(), Sc = new WeakMap(), Xc = new WeakMap(), Qd = new WeakMap(), bW = new WeakMap(), ml = new WeakSet(), wR = function() {
  const l = document.createElement("div"), U = Q(this, Qd)._signal;
  l.addEventListener("contextmenu", GU, {
    signal: U
  }), l.className = "dropdown", l.role = "listbox", l.setAttribute("aria-multiselectable", !1), l.setAttribute("aria-orientation", "vertical"), l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [d, Z] of Q(this, Qd).highlightColors) {
    const F = document.createElement("button");
    F.tabIndex = "0", F.role = "option", F.setAttribute("data-color", Z), F.title = d, F.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${d}`);
    const W = document.createElement("span");
    F.append(W), W.className = "swatch", W.style.backgroundColor = Z, F.setAttribute("aria-selected", Z === Q(this, sW)), F.addEventListener("click", h(this, ml, xR).bind(this, Z), {
      signal: U
    }), l.append(F);
  }
  return l.addEventListener("keydown", Q(this, Tc), {
    signal: U
  }), l;
}, xR = function(l, U) {
  U.stopPropagation(), Q(this, Xc).dispatch("switchannotationeditorparams", {
    source: this,
    type: Q(this, bW),
    value: l
  });
}, tb = function(l) {
  xd._keyboardManager.exec(this, l);
}, WF = function(l) {
  if (Q(this, ml, XZ)) {
    this.hideDropdown();
    return;
  }
  if (m(this, Jc, l.detail === 0), window.addEventListener("pointerdown", Q(this, Gc), {
    signal: Q(this, Qd)._signal
  }), Q(this, kl)) {
    Q(this, kl).classList.remove("hidden");
    return;
  }
  const U = m(this, kl, h(this, ml, wR).call(this));
  Q(this, Wd).append(U);
}, Vb = function(l) {
  var U;
  (U = Q(this, kl)) != null && U.contains(l.target) || this.hideDropdown();
}, XZ = function() {
  return Q(this, kl) && !Q(this, kl).classList.contains("hidden");
};
let jt = xd;
var aW, Yc, OZ, vF, mW, OU, Bc, ec, PF, cd, VU, DU, cV, hW, fF, Il, iW, Jd, uc, _, jR, OR, Rb, Nb, sb, rR, rW, HU, G0, nb, Gt, KW, bb, ab, mb, hb;
const Ql = class Ql extends Rl {
  constructor(U) {
    super({
      ...U,
      name: "highlightEditor"
    });
    i(this, _);
    i(this, aW, null);
    i(this, Yc, 0);
    i(this, OZ);
    i(this, vF, null);
    i(this, mW, null);
    i(this, OU, null);
    i(this, Bc, null);
    i(this, ec, 0);
    i(this, PF, null);
    i(this, cd, null);
    i(this, VU, null);
    i(this, DU, !1);
    i(this, cV, h(this, _, nb).bind(this));
    i(this, hW, null);
    i(this, fF);
    i(this, Il, null);
    i(this, iW, "");
    i(this, Jd);
    i(this, uc, "");
    this.color = U.color || Ql._defaultColor, m(this, Jd, U.thickness || Ql._defaultThickness), m(this, fF, U.opacity || Ql._defaultOpacity), m(this, OZ, U.boxes || null), m(this, uc, U.methodOfCreation || ""), m(this, iW, U.text || ""), this._isDraggable = !1, U.highlightId > -1 ? (m(this, DU, !0), h(this, _, OR).call(this, U), h(this, _, rW).call(this)) : (m(this, aW, U.anchorNode), m(this, Yc, U.anchorOffset), m(this, Bc, U.focusNode), m(this, ec, U.focusOffset), h(this, _, jR).call(this), h(this, _, rW).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const U = Ql.prototype;
    return Fl(this, "_keyboardManager", new wc([[["ArrowLeft", "mac+ArrowLeft"], U._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], U._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], U._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], U._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: Q(this, DU) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: Q(this, Jd),
      methodOfCreation: Q(this, uc)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(U) {
    return {
      numberOfColors: U.get("color").size
    };
  }
  static initialize(U, d) {
    var Z;
    Rl.initialize(U, d), Ql._defaultColor || (Ql._defaultColor = ((Z = d.highlightColors) == null ? void 0 : Z.values().next().value) || "#fff066");
  }
  static updateDefaultParams(U, d) {
    switch (U) {
      case g.HIGHLIGHT_DEFAULT_COLOR:
        Ql._defaultColor = d;
        break;
      case g.HIGHLIGHT_THICKNESS:
        Ql._defaultThickness = d;
        break;
    }
  }
  translateInPage(U, d) {
  }
  get toolbarPosition() {
    return Q(this, hW);
  }
  updateParams(U, d) {
    switch (U) {
      case g.HIGHLIGHT_COLOR:
        h(this, _, Rb).call(this, d);
        break;
      case g.HIGHLIGHT_THICKNESS:
        h(this, _, Nb).call(this, d);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[g.HIGHLIGHT_DEFAULT_COLOR, Ql._defaultColor], [g.HIGHLIGHT_THICKNESS, Ql._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[g.HIGHLIGHT_COLOR, this.color || Ql._defaultColor], [g.HIGHLIGHT_THICKNESS, Q(this, Jd) || Ql._defaultThickness], [g.HIGHLIGHT_FREE, Q(this, DU)]];
  }
  async addEditToolbar() {
    const U = await super.addEditToolbar();
    return U ? (this._uiManager.highlightColors && (m(this, mW, new jt({
      editor: this
    })), U.addColorPicker(Q(this, mW))), U) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(h(this, _, KW).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(U, d) {
    return super.getRect(U, d, h(this, _, KW).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    h(this, _, rR).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (h(this, _, rW).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(U) {
    var Z;
    let d = !1;
    this.parent && !U ? h(this, _, rR).call(this) : U && (h(this, _, rW).call(this, U), d = !this.parent && ((Z = this.div) == null ? void 0 : Z.classList.contains("selectedEditor"))), super.setParent(U), this.show(this._isVisible), d && this.select();
  }
  rotate(U) {
    var F, W, t;
    const {
      drawLayer: d
    } = this.parent;
    let Z;
    Q(this, DU) ? (U = (U - this.rotation + 360) % 360, Z = h(F = Ql, HU, G0).call(F, Q(this, cd).box, U)) : Z = h(W = Ql, HU, G0).call(W, this, U), d.rotate(Q(this, VU), U), d.rotate(Q(this, Il), U), d.updateBox(Q(this, VU), Z), d.updateBox(Q(this, Il), h(t = Ql, HU, G0).call(t, Q(this, OU).box, U));
  }
  render() {
    if (this.div)
      return this.div;
    const U = super.render();
    Q(this, iW) && (U.setAttribute("aria-label", Q(this, iW)), U.setAttribute("role", "mark")), Q(this, DU) ? U.classList.add("free") : this.div.addEventListener("keydown", Q(this, cV), {
      signal: this._uiManager._signal
    });
    const d = m(this, PF, document.createElement("div"));
    U.append(d), d.setAttribute("aria-hidden", "true"), d.className = "internal", d.style.clipPath = Q(this, vF);
    const [Z, F] = this.parentDimensions;
    return this.setDims(this.width * Z, this.height * F), Et(this, Q(this, PF), ["pointerover", "pointerleave"]), this.enableEditing(), U;
  }
  pointerover() {
    this.parent.drawLayer.addClass(Q(this, Il), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(Q(this, Il), "hovered");
  }
  _moveCaret(U) {
    switch (this.parent.unselect(this), U) {
      case 0:
      case 2:
        h(this, _, Gt).call(this, !0);
        break;
      case 1:
      case 3:
        h(this, _, Gt).call(this, !1);
        break;
    }
  }
  select() {
    var U, d;
    super.select(), Q(this, Il) && ((U = this.parent) == null || U.drawLayer.removeClass(Q(this, Il), "hovered"), (d = this.parent) == null || d.drawLayer.addClass(Q(this, Il), "selected"));
  }
  unselect() {
    var U;
    super.unselect(), Q(this, Il) && ((U = this.parent) == null || U.drawLayer.removeClass(Q(this, Il), "selected"), Q(this, DU) || h(this, _, Gt).call(this, !1));
  }
  get _mustFixPosition() {
    return !Q(this, DU);
  }
  show(U = this._isVisible) {
    super.show(U), this.parent && (this.parent.drawLayer.show(Q(this, VU), U), this.parent.drawLayer.show(Q(this, Il), U));
  }
  static startHighlighting(U, d, {
    target: Z,
    x: F,
    y: W
  }) {
    const {
      x: t,
      y: V,
      width: R,
      height: N
    } = Z.getBoundingClientRect(), s = (G) => {
      h(this, HU, mb).call(this, U, G);
    }, n = U._signal, b = {
      capture: !0,
      passive: !1,
      signal: n
    }, a = (G) => {
      G.preventDefault(), G.stopPropagation();
    }, M = (G) => {
      Z.removeEventListener("pointermove", s), window.removeEventListener("blur", M), window.removeEventListener("pointerup", M), window.removeEventListener("pointerdown", a, b), window.removeEventListener("contextmenu", GU), h(this, HU, hb).call(this, U, G);
    };
    window.addEventListener("blur", M, {
      signal: n
    }), window.addEventListener("pointerup", M, {
      signal: n
    }), window.addEventListener("pointerdown", a, b), window.addEventListener("contextmenu", GU, {
      signal: n
    }), Z.addEventListener("pointermove", s, {
      signal: n
    }), this._freeHighlight = new xt({
      x: F,
      y: W
    }, [t, V, R, N], U.scale, this._defaultThickness / 2, d, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = U.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(U, d, Z) {
    var M;
    const F = super.deserialize(U, d, Z), {
      rect: [W, t, V, R],
      color: N,
      quadPoints: s
    } = U;
    F.color = I.makeHexColor(...N), m(F, fF, U.opacity);
    const [n, b] = F.pageDimensions;
    F.width = (V - W) / n, F.height = (R - t) / b;
    const a = m(F, OZ, []);
    for (let G = 0; G < s.length; G += 8)
      a.push({
        x: (s[4] - V) / n,
        y: (R - (1 - s[G + 5])) / b,
        width: (s[G + 2] - s[G]) / n,
        height: (s[G + 5] - s[G + 1]) / b
      });
    return h(M = F, _, jR).call(M), F;
  }
  serialize(U = !1) {
    if (this.isEmpty() || U)
      return null;
    const d = this.getRect(0, 0), Z = Rl._colorManager.convert(this.color);
    return {
      annotationType: Ul.HIGHLIGHT,
      color: Z,
      opacity: Q(this, fF),
      thickness: Q(this, Jd),
      quadPoints: h(this, _, bb).call(this),
      outlines: h(this, _, ab).call(this, d),
      pageIndex: this.pageIndex,
      rect: d,
      rotation: h(this, _, KW).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
aW = new WeakMap(), Yc = new WeakMap(), OZ = new WeakMap(), vF = new WeakMap(), mW = new WeakMap(), OU = new WeakMap(), Bc = new WeakMap(), ec = new WeakMap(), PF = new WeakMap(), cd = new WeakMap(), VU = new WeakMap(), DU = new WeakMap(), cV = new WeakMap(), hW = new WeakMap(), fF = new WeakMap(), Il = new WeakMap(), iW = new WeakMap(), Jd = new WeakMap(), uc = new WeakMap(), _ = new WeakSet(), jR = function() {
  const U = new kR(Q(this, OZ), 1e-3);
  m(this, cd, U.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = Q(this, cd).box;
  const d = new kR(Q(this, OZ), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  m(this, OU, d.getOutlines());
  const {
    lastPoint: Z
  } = Q(this, OU).box;
  m(this, hW, [(Z[0] - this.x) / this.width, (Z[1] - this.y) / this.height]);
}, OR = function({
  highlightOutlines: U,
  highlightId: d,
  clipPathId: Z
}) {
  var s, n;
  if (m(this, cd, U), m(this, OU, U.getNewOutline(Q(this, Jd) / 2 + 1.5, 25e-4)), d >= 0)
    m(this, VU, d), m(this, vF, Z), this.parent.drawLayer.finalizeLine(d, U), m(this, Il, this.parent.drawLayer.highlightOutline(Q(this, OU)));
  else if (this.parent) {
    const b = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(Q(this, VU), U), this.parent.drawLayer.updateBox(Q(this, VU), h(s = Ql, HU, G0).call(s, Q(this, cd).box, (b - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(Q(this, Il), Q(this, OU)), this.parent.drawLayer.updateBox(Q(this, Il), h(n = Ql, HU, G0).call(n, Q(this, OU).box, b));
  }
  const {
    x: W,
    y: t,
    width: V,
    height: R
  } = U.box;
  switch (this.rotation) {
    case 0:
      this.x = W, this.y = t, this.width = V, this.height = R;
      break;
    case 90: {
      const [b, a] = this.parentDimensions;
      this.x = t, this.y = 1 - W, this.width = V * a / b, this.height = R * b / a;
      break;
    }
    case 180:
      this.x = 1 - W, this.y = 1 - t, this.width = V, this.height = R;
      break;
    case 270: {
      const [b, a] = this.parentDimensions;
      this.x = 1 - t, this.y = W, this.width = V * a / b, this.height = R * b / a;
      break;
    }
  }
  const {
    lastPoint: N
  } = Q(this, OU).box;
  m(this, hW, [(N[0] - W) / V, (N[1] - t) / R]);
}, Rb = function(U) {
  const d = (F) => {
    var W, t;
    this.color = F, (W = this.parent) == null || W.drawLayer.changeColor(Q(this, VU), F), (t = Q(this, mW)) == null || t.updateColor(F);
  }, Z = this.color;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(U)
  }, !0);
}, Nb = function(U) {
  const d = Q(this, Jd), Z = (F) => {
    m(this, Jd, F), h(this, _, sb).call(this, F);
  };
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: U
  }, !0);
}, sb = function(U) {
  if (!Q(this, DU))
    return;
  h(this, _, OR).call(this, {
    highlightOutlines: Q(this, cd).getNewOutline(U / 2)
  }), this.fixAndSetPosition();
  const [d, Z] = this.parentDimensions;
  this.setDims(this.width * d, this.height * Z);
}, rR = function() {
  Q(this, VU) === null || !this.parent || (this.parent.drawLayer.remove(Q(this, VU)), m(this, VU, null), this.parent.drawLayer.remove(Q(this, Il)), m(this, Il, null));
}, rW = function(U = this.parent) {
  Q(this, VU) === null && ({
    id: SU(this, VU)._,
    clipPathId: SU(this, vF)._
  } = U.drawLayer.highlight(Q(this, cd), this.color, Q(this, fF)), m(this, Il, U.drawLayer.highlightOutline(Q(this, OU))), Q(this, PF) && (Q(this, PF).style.clipPath = Q(this, vF)));
}, HU = new WeakSet(), G0 = function({
  x: U,
  y: d,
  width: Z,
  height: F
}, W) {
  switch (W) {
    case 90:
      return {
        x: 1 - d - F,
        y: U,
        width: F,
        height: Z
      };
    case 180:
      return {
        x: 1 - U - Z,
        y: 1 - d - F,
        width: Z,
        height: F
      };
    case 270:
      return {
        x: d,
        y: 1 - U - Z,
        width: F,
        height: Z
      };
  }
  return {
    x: U,
    y: d,
    width: Z,
    height: F
  };
}, nb = function(U) {
  Ql._keyboardManager.exec(this, U);
}, Gt = function(U) {
  if (!Q(this, aW))
    return;
  const d = window.getSelection();
  U ? d.setPosition(Q(this, aW), Q(this, Yc)) : d.setPosition(Q(this, Bc), Q(this, ec));
}, KW = function() {
  return Q(this, DU) ? this.rotation : 0;
}, bb = function() {
  if (Q(this, DU))
    return null;
  const [U, d] = this.pageDimensions, Z = Q(this, OZ), F = new Float32Array(Z.length * 8);
  let W = 0;
  for (const {
    x: t,
    y: V,
    width: R,
    height: N
  } of Z) {
    const s = t * U, n = (1 - V - N) * d;
    F[W] = F[W + 4] = s, F[W + 1] = F[W + 3] = n, F[W + 2] = F[W + 6] = s + R * U, F[W + 5] = F[W + 7] = n + N * d, W += 8;
  }
  return F;
}, ab = function(U) {
  return Q(this, cd).serialize(U, h(this, _, KW).call(this));
}, mb = function(U, d) {
  this._freeHighlight.add(d) && U.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, hb = function(U, d) {
  this._freeHighlight.isEmpty() ? U.drawLayer.removeFreeHighlight(this._freeHighlightId) : U.createAndAddNewEditor(d, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, i(Ql, HU), v(Ql, "_defaultColor", null), v(Ql, "_defaultOpacity", 1), v(Ql, "_defaultThickness", 12), v(Ql, "_l10nPromise"), v(Ql, "_type", "highlight"), v(Ql, "_editorType", Ul.HIGHLIGHT), v(Ql, "_freeHighlightId", -1), v(Ql, "_freeHighlight", null), v(Ql, "_freeHighlightClipId", "");
let Ot = Ql;
var AF, _F, pc, yc, Lc, qF, Sd, WZ, rU, $F, l0, QZ, U0, d0, rZ, z, ib, Mb, Tb, Gb, gR, Jb, HR, Sb, Xb, Yb, Bb, eb, QF, vR, Jt, St, J0, PR, Xt, MZ, ub, fR, pb, yb, AR, Yt, gW;
const Gl = class Gl extends Rl {
  constructor(U) {
    super({
      ...U,
      name: "inkEditor"
    });
    i(this, z);
    i(this, AF, 0);
    i(this, _F, 0);
    i(this, pc, this.canvasPointermove.bind(this));
    i(this, yc, this.canvasPointerleave.bind(this));
    i(this, Lc, this.canvasPointerup.bind(this));
    i(this, qF, this.canvasPointerdown.bind(this));
    i(this, Sd, null);
    i(this, WZ, new Path2D());
    i(this, rU, !1);
    i(this, $F, !1);
    i(this, l0, !1);
    i(this, QZ, null);
    i(this, U0, 0);
    i(this, d0, 0);
    i(this, rZ, null);
    this.color = U.color || null, this.thickness = U.thickness || null, this.opacity = U.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(U, d) {
    Rl.initialize(U, d);
  }
  static updateDefaultParams(U, d) {
    switch (U) {
      case g.INK_THICKNESS:
        Gl._defaultThickness = d;
        break;
      case g.INK_COLOR:
        Gl._defaultColor = d;
        break;
      case g.INK_OPACITY:
        Gl._defaultOpacity = d / 100;
        break;
    }
  }
  updateParams(U, d) {
    switch (U) {
      case g.INK_THICKNESS:
        h(this, z, ib).call(this, d);
        break;
      case g.INK_COLOR:
        h(this, z, Mb).call(this, d);
        break;
      case g.INK_OPACITY:
        h(this, z, Tb).call(this, d);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[g.INK_THICKNESS, Gl._defaultThickness], [g.INK_COLOR, Gl._defaultColor || Rl._defaultLineColor], [g.INK_OPACITY, Math.round(Gl._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[g.INK_THICKNESS, this.thickness || Gl._defaultThickness], [g.INK_COLOR, this.color || Gl._defaultColor || Rl._defaultLineColor], [g.INK_OPACITY, Math.round(100 * (this.opacity ?? Gl._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (h(this, z, Jt).call(this), h(this, z, St).call(this)), this.isAttachedToDOM || (this.parent.add(this), h(this, z, J0).call(this)), h(this, z, gW).call(this)));
  }
  remove() {
    var U;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, Q(this, Sd) && (clearTimeout(Q(this, Sd)), m(this, Sd, null)), (U = Q(this, QZ)) == null || U.disconnect(), m(this, QZ, null), super.remove());
  }
  setParent(U) {
    !this.parent && U ? this._uiManager.removeShouldRescale(this) : this.parent && U === null && this._uiManager.addShouldRescale(this), super.setParent(U);
  }
  onScaleChanging() {
    const [U, d] = this.parentDimensions, Z = this.width * U, F = this.height * d;
    this.setDimensions(Z, F);
  }
  enableEditMode() {
    Q(this, rU) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", Q(this, qF), {
      signal: this._uiManager._signal
    }));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", Q(this, qF)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    Q(this, rU) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), m(this, rU, !0), this.div.classList.add("disabled"), h(this, z, gW).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(U) {
    this._focusEventsAllowed && (super.focusin(U), this.enableEditMode());
  }
  canvasPointerdown(U) {
    U.button !== 0 || !this.isInEditMode() || Q(this, rU) || (this.setInForeground(), U.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), h(this, z, Jb).call(this, U.offsetX, U.offsetY));
  }
  canvasPointermove(U) {
    U.preventDefault(), h(this, z, HR).call(this, U.offsetX, U.offsetY);
  }
  canvasPointerup(U) {
    U.preventDefault(), h(this, z, vR).call(this, U);
  }
  canvasPointerleave(U) {
    h(this, z, vR).call(this, U);
  }
  get isResizable() {
    return !this.isEmpty() && Q(this, rU);
  }
  render() {
    if (this.div)
      return this.div;
    let U, d;
    this.width && (U = this.x, d = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [Z, F, W, t] = h(this, z, Gb).call(this);
    if (this.setAt(Z, F, 0, 0), this.setDims(W, t), h(this, z, Jt).call(this), this.width) {
      const [V, R] = this.parentDimensions;
      this.setAspectRatio(this.width * V, this.height * R), this.setAt(U * V, d * R, this.width * V, this.height * R), m(this, l0, !0), h(this, z, J0).call(this), this.setDims(this.width * V, this.height * R), h(this, z, QF).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return h(this, z, St).call(this), this.div;
  }
  setDimensions(U, d) {
    const Z = Math.round(U), F = Math.round(d);
    if (Q(this, U0) === Z && Q(this, d0) === F)
      return;
    m(this, U0, Z), m(this, d0, F), this.canvas.style.visibility = "hidden";
    const [W, t] = this.parentDimensions;
    this.width = U / W, this.height = d / t, this.fixAndSetPosition(), Q(this, rU) && h(this, z, PR).call(this, U, d), h(this, z, J0).call(this), h(this, z, QF).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(U, d, Z) {
    var G, T, J;
    if (U instanceof fn)
      return null;
    const F = super.deserialize(U, d, Z);
    F.thickness = U.thickness, F.color = I.makeHexColor(...U.color), F.opacity = U.opacity;
    const [W, t] = F.pageDimensions, V = F.width * W, R = F.height * t, N = F.parentScale, s = U.thickness / 2;
    m(F, rU, !0), m(F, U0, Math.round(V)), m(F, d0, Math.round(R));
    const {
      paths: n,
      rect: b,
      rotation: a
    } = U;
    for (let {
      bezier: Y
    } of n) {
      Y = h(G = Gl, MZ, pb).call(G, Y, b, a);
      const B = [];
      F.paths.push(B);
      let S = N * (Y[0] - s), X = N * (Y[1] - s);
      for (let p = 2, y = Y.length; p < y; p += 6) {
        const j = N * (Y[p] - s), D = N * (Y[p + 1] - s), ll = N * (Y[p + 2] - s), P = N * (Y[p + 3] - s), q = N * (Y[p + 4] - s), dl = N * (Y[p + 5] - s);
        B.push([[S, X], [j, D], [ll, P], [q, dl]]), S = q, X = dl;
      }
      const e = h(this, MZ, ub).call(this, B);
      F.bezierPath2D.push(e);
    }
    const M = h(T = F, z, AR).call(T);
    return m(F, _F, Math.max(Rl.MIN_SIZE, M[2] - M[0])), m(F, AF, Math.max(Rl.MIN_SIZE, M[3] - M[1])), h(J = F, z, PR).call(J, V, R), F;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const U = this.getRect(0, 0), d = Rl._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: Ul.INK,
      color: d,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: h(this, z, yb).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, U),
      pageIndex: this.pageIndex,
      rect: U,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
AF = new WeakMap(), _F = new WeakMap(), pc = new WeakMap(), yc = new WeakMap(), Lc = new WeakMap(), qF = new WeakMap(), Sd = new WeakMap(), WZ = new WeakMap(), rU = new WeakMap(), $F = new WeakMap(), l0 = new WeakMap(), QZ = new WeakMap(), U0 = new WeakMap(), d0 = new WeakMap(), rZ = new WeakMap(), z = new WeakSet(), ib = function(U) {
  const d = (F) => {
    this.thickness = F, h(this, z, gW).call(this);
  }, Z = this.thickness;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Mb = function(U) {
  const d = (F) => {
    this.color = F, h(this, z, QF).call(this);
  }, Z = this.color;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Tb = function(U) {
  const d = (F) => {
    this.opacity = F, h(this, z, QF).call(this);
  };
  U /= 100;
  const Z = this.opacity;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: g.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Gb = function() {
  const {
    parentRotation: U,
    parentDimensions: [d, Z]
  } = this;
  switch (U) {
    case 90:
      return [0, Z, Z, d];
    case 180:
      return [d, Z, d, Z];
    case 270:
      return [d, 0, Z, d];
    default:
      return [0, 0, d, Z];
  }
}, gR = function() {
  const {
    ctx: U,
    color: d,
    opacity: Z,
    thickness: F,
    parentScale: W,
    scaleFactor: t
  } = this;
  U.lineWidth = F * W / t, U.lineCap = "round", U.lineJoin = "round", U.miterLimit = 10, U.strokeStyle = `${d}${gm(Z)}`;
}, Jb = function(U, d) {
  const Z = this._uiManager._signal;
  this.canvas.addEventListener("contextmenu", GU, {
    signal: Z
  }), this.canvas.addEventListener("pointerleave", Q(this, yc), {
    signal: Z
  }), this.canvas.addEventListener("pointermove", Q(this, pc), {
    signal: Z
  }), this.canvas.addEventListener("pointerup", Q(this, Lc), {
    signal: Z
  }), this.canvas.removeEventListener("pointerdown", Q(this, qF)), this.isEditing = !0, Q(this, l0) || (m(this, l0, !0), h(this, z, J0).call(this), this.thickness || (this.thickness = Gl._defaultThickness), this.color || (this.color = Gl._defaultColor || Rl._defaultLineColor), this.opacity ?? (this.opacity = Gl._defaultOpacity)), this.currentPath.push([U, d]), m(this, $F, !1), h(this, z, gR).call(this), m(this, rZ, () => {
    h(this, z, Yb).call(this), Q(this, rZ) && window.requestAnimationFrame(Q(this, rZ));
  }), window.requestAnimationFrame(Q(this, rZ));
}, HR = function(U, d) {
  const [Z, F] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && U === Z && d === F)
    return;
  const W = this.currentPath;
  let t = Q(this, WZ);
  if (W.push([U, d]), m(this, $F, !0), W.length <= 2) {
    t.moveTo(...W[0]), t.lineTo(U, d);
    return;
  }
  W.length === 3 && (m(this, WZ, t = new Path2D()), t.moveTo(...W[0])), h(this, z, Bb).call(this, t, ...W.at(-3), ...W.at(-2), U, d);
}, Sb = function() {
  if (this.currentPath.length === 0)
    return;
  const U = this.currentPath.at(-1);
  Q(this, WZ).lineTo(...U);
}, Xb = function(U, d) {
  m(this, rZ, null), U = Math.min(Math.max(U, 0), this.canvas.width), d = Math.min(Math.max(d, 0), this.canvas.height), h(this, z, HR).call(this, U, d), h(this, z, Sb).call(this);
  let Z;
  if (this.currentPath.length !== 1)
    Z = h(this, z, eb).call(this);
  else {
    const R = [U, d];
    Z = [[R, R.slice(), R.slice(), R]];
  }
  const F = Q(this, WZ), W = this.currentPath;
  this.currentPath = [], m(this, WZ, new Path2D());
  const t = () => {
    this.allRawPaths.push(W), this.paths.push(Z), this.bezierPath2D.push(F), this._uiManager.rebuild(this);
  }, V = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (h(this, z, Jt).call(this), h(this, z, St).call(this)), h(this, z, gW).call(this));
  };
  this.addCommands({
    cmd: t,
    undo: V,
    mustExec: !0
  });
}, Yb = function() {
  if (!Q(this, $F))
    return;
  m(this, $F, !1);
  const U = Math.ceil(this.thickness * this.parentScale), d = this.currentPath.slice(-3), Z = d.map((t) => t[0]), F = d.map((t) => t[1]);
  Math.min(...Z) - U, Math.max(...Z) + U, Math.min(...F) - U, Math.max(...F) + U;
  const {
    ctx: W
  } = this;
  W.save(), W.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const t of this.bezierPath2D)
    W.stroke(t);
  W.stroke(Q(this, WZ)), W.restore();
}, Bb = function(U, d, Z, F, W, t, V) {
  const R = (d + F) / 2, N = (Z + W) / 2, s = (F + t) / 2, n = (W + V) / 2;
  U.bezierCurveTo(R + 2 * (F - R) / 3, N + 2 * (W - N) / 3, s + 2 * (F - s) / 3, n + 2 * (W - n) / 3, s, n);
}, eb = function() {
  const U = this.currentPath;
  if (U.length <= 2)
    return [[U[0], U[0], U.at(-1), U.at(-1)]];
  const d = [];
  let Z, [F, W] = U[0];
  for (Z = 1; Z < U.length - 2; Z++) {
    const [b, a] = U[Z], [M, G] = U[Z + 1], T = (b + M) / 2, J = (a + G) / 2, Y = [F + 2 * (b - F) / 3, W + 2 * (a - W) / 3], B = [T + 2 * (b - T) / 3, J + 2 * (a - J) / 3];
    d.push([[F, W], Y, B, [T, J]]), [F, W] = [T, J];
  }
  const [t, V] = U[Z], [R, N] = U[Z + 1], s = [F + 2 * (t - F) / 3, W + 2 * (V - W) / 3], n = [R + 2 * (t - R) / 3, N + 2 * (V - N) / 3];
  return d.push([[F, W], s, n, [R, N]]), d;
}, QF = function() {
  if (this.isEmpty()) {
    h(this, z, Xt).call(this);
    return;
  }
  h(this, z, gR).call(this);
  const {
    canvas: U,
    ctx: d
  } = this;
  d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, U.width, U.height), h(this, z, Xt).call(this);
  for (const Z of this.bezierPath2D)
    d.stroke(Z);
}, vR = function(U) {
  this.canvas.removeEventListener("pointerleave", Q(this, yc)), this.canvas.removeEventListener("pointermove", Q(this, pc)), this.canvas.removeEventListener("pointerup", Q(this, Lc)), this.canvas.addEventListener("pointerdown", Q(this, qF), {
    signal: this._uiManager._signal
  }), Q(this, Sd) && clearTimeout(Q(this, Sd)), m(this, Sd, setTimeout(() => {
    m(this, Sd, null), this.canvas.removeEventListener("contextmenu", GU);
  }, 10)), h(this, z, Xb).call(this, U.offsetX, U.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, Jt = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, St = function() {
  m(this, QZ, new ResizeObserver((U) => {
    const d = U[0].contentRect;
    d.width && d.height && this.setDimensions(d.width, d.height);
  })), Q(this, QZ).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var U;
    (U = Q(this, QZ)) == null || U.disconnect(), m(this, QZ, null);
  }, {
    once: !0
  });
}, J0 = function() {
  if (!Q(this, l0))
    return;
  const [U, d] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * U), this.canvas.height = Math.ceil(this.height * d), h(this, z, Xt).call(this);
}, PR = function(U, d) {
  const Z = h(this, z, Yt).call(this), F = (U - Z) / Q(this, _F), W = (d - Z) / Q(this, AF);
  this.scaleFactor = Math.min(F, W);
}, Xt = function() {
  const U = h(this, z, Yt).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + U, this.translationY * this.scaleFactor + U);
}, MZ = new WeakSet(), ub = function(U) {
  const d = new Path2D();
  for (let Z = 0, F = U.length; Z < F; Z++) {
    const [W, t, V, R] = U[Z];
    Z === 0 && d.moveTo(...W), d.bezierCurveTo(t[0], t[1], V[0], V[1], R[0], R[1]);
  }
  return d;
}, fR = function(U, d, Z) {
  const [F, W, t, V] = d;
  switch (Z) {
    case 0:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] += F, U[R + 1] = V - U[R + 1];
      break;
    case 90:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = U[R + 1] + F, U[R + 1] = s + W;
      }
      break;
    case 180:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] = t - U[R], U[R + 1] += W;
      break;
    case 270:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = t - U[R + 1], U[R + 1] = V - s;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, pb = function(U, d, Z) {
  const [F, W, t, V] = d;
  switch (Z) {
    case 0:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] -= F, U[R + 1] = V - U[R + 1];
      break;
    case 90:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = U[R + 1] - W, U[R + 1] = s - F;
      }
      break;
    case 180:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] = t - U[R], U[R + 1] -= W;
      break;
    case 270:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = V - U[R + 1], U[R + 1] = t - s;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, yb = function(U, d, Z, F) {
  var N, s;
  const W = [], t = this.thickness / 2, V = U * d + t, R = U * Z + t;
  for (const n of this.paths) {
    const b = [], a = [];
    for (let M = 0, G = n.length; M < G; M++) {
      const [T, J, Y, B] = n[M];
      if (T[0] === B[0] && T[1] === B[1] && G === 1) {
        const P = U * T[0] + V, q = U * T[1] + R;
        b.push(P, q), a.push(P, q);
        break;
      }
      const S = U * T[0] + V, X = U * T[1] + R, e = U * J[0] + V, p = U * J[1] + R, y = U * Y[0] + V, j = U * Y[1] + R, D = U * B[0] + V, ll = U * B[1] + R;
      M === 0 && (b.push(S, X), a.push(S, X)), b.push(e, p, y, j, D, ll), a.push(e, p), M === G - 1 && a.push(D, ll);
    }
    W.push({
      bezier: h(N = Gl, MZ, fR).call(N, b, F, this.rotation),
      points: h(s = Gl, MZ, fR).call(s, a, F, this.rotation)
    });
  }
  return W;
}, AR = function() {
  let U = 1 / 0, d = -1 / 0, Z = 1 / 0, F = -1 / 0;
  for (const W of this.paths)
    for (const [t, V, R, N] of W) {
      const s = I.bezierBoundingBox(...t, ...V, ...R, ...N);
      U = Math.min(U, s[0]), Z = Math.min(Z, s[1]), d = Math.max(d, s[2]), F = Math.max(F, s[3]);
    }
  return [U, Z, d, F];
}, Yt = function() {
  return Q(this, rU) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, gW = function(U = !1) {
  if (this.isEmpty())
    return;
  if (!Q(this, rU)) {
    h(this, z, QF).call(this);
    return;
  }
  const d = h(this, z, AR).call(this), Z = h(this, z, Yt).call(this);
  m(this, _F, Math.max(Rl.MIN_SIZE, d[2] - d[0])), m(this, AF, Math.max(Rl.MIN_SIZE, d[3] - d[1]));
  const F = Math.ceil(Z + Q(this, _F) * this.scaleFactor), W = Math.ceil(Z + Q(this, AF) * this.scaleFactor), [t, V] = this.parentDimensions;
  this.width = F / t, this.height = W / V, this.setAspectRatio(F, W);
  const R = this.translationX, N = this.translationY;
  this.translationX = -d[0], this.translationY = -d[1], h(this, z, J0).call(this), h(this, z, QF).call(this), m(this, U0, F), m(this, d0, W), this.setDims(F, W);
  const s = U ? Z / this.scaleFactor / 2 : 0;
  this.translate(R - this.translationX - s, N - this.translationY - s);
}, i(Gl, MZ), v(Gl, "_defaultColor", null), v(Gl, "_defaultOpacity", 1), v(Gl, "_defaultThickness", 1), v(Gl, "_type", "ink"), v(Gl, "_editorType", Ul.INK);
let KR = Gl;
var Pl, fl, KZ, cZ, gZ, MW, Xd, tZ, Yd, td, oc, Wl, HW, vW, Bt, qR, Lb, ob, $R, et, zb;
const UQ = class UQ extends Rl {
  constructor(U) {
    super({
      ...U,
      name: "stampEditor"
    });
    i(this, Wl);
    i(this, Pl, null);
    i(this, fl, null);
    i(this, KZ, null);
    i(this, cZ, null);
    i(this, gZ, null);
    i(this, MW, "");
    i(this, Xd, null);
    i(this, tZ, null);
    i(this, Yd, null);
    i(this, td, !1);
    i(this, oc, !1);
    m(this, cZ, U.bitmapUrl), m(this, gZ, U.bitmapFile);
  }
  static initialize(U, d) {
    Rl.initialize(U, d);
  }
  static get supportedTypes() {
    return Fl(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((d) => `image/${d}`));
  }
  static get supportedTypesStr() {
    return Fl(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(U) {
    return this.supportedTypes.includes(U);
  }
  static paste(U, d) {
    d.pasteEditor(Ul.STAMP, {
      bitmapFile: U.getAsFile()
    });
  }
  remove() {
    var U, d;
    Q(this, fl) && (m(this, Pl, null), this._uiManager.imageManager.deleteId(Q(this, fl)), (U = Q(this, Xd)) == null || U.remove(), m(this, Xd, null), (d = Q(this, tZ)) == null || d.disconnect(), m(this, tZ, null), Q(this, Yd) && (clearTimeout(Q(this, Yd)), m(this, Yd, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      Q(this, fl) && h(this, Wl, Bt).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (Q(this, fl) && Q(this, Xd) === null && h(this, Wl, Bt).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(Q(this, KZ) || Q(this, Pl) || Q(this, cZ) || Q(this, gZ) || Q(this, fl));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let U, d;
    if (this.width && (U = this.x, d = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), Q(this, Pl) ? h(this, Wl, qR).call(this) : h(this, Wl, Bt).call(this), this.width) {
      const [Z, F] = this.parentDimensions;
      this.setAt(U * Z, d * F, this.width * Z, this.height * F);
    }
    return this.div;
  }
  getImageForAltText() {
    return Q(this, Xd);
  }
  static deserialize(U, d, Z) {
    if (U instanceof An)
      return null;
    const F = super.deserialize(U, d, Z), {
      rect: W,
      bitmapUrl: t,
      bitmapId: V,
      isSvg: R,
      accessibilityData: N
    } = U;
    V && Z.imageManager.isValidId(V) ? m(F, fl, V) : m(F, cZ, t), m(F, td, R);
    const [s, n] = F.pageDimensions;
    return F.width = (W[2] - W[0]) / s, F.height = (W[3] - W[1]) / n, N && (F.altTextData = N), F;
  }
  serialize(U = !1, d = null) {
    if (this.isEmpty())
      return null;
    const Z = {
      annotationType: Ul.STAMP,
      bitmapId: Q(this, fl),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: Q(this, td),
      structTreeParentId: this._structTreeParentId
    };
    if (U)
      return Z.bitmapUrl = h(this, Wl, et).call(this, !0), Z.accessibilityData = this.altTextData, Z;
    const {
      decorative: F,
      altText: W
    } = this.altTextData;
    if (!F && W && (Z.accessibilityData = {
      type: "Figure",
      alt: W
    }), d === null)
      return Z;
    d.stamps || (d.stamps = /* @__PURE__ */ new Map());
    const t = Q(this, td) ? (Z.rect[2] - Z.rect[0]) * (Z.rect[3] - Z.rect[1]) : null;
    if (!d.stamps.has(Q(this, fl)))
      d.stamps.set(Q(this, fl), {
        area: t,
        serialized: Z
      }), Z.bitmap = h(this, Wl, et).call(this, !1);
    else if (Q(this, td)) {
      const V = d.stamps.get(Q(this, fl));
      t > V.area && (V.area = t, V.serialized.bitmap.close(), V.serialized.bitmap = h(this, Wl, et).call(this, !1));
    }
    return Z;
  }
};
Pl = new WeakMap(), fl = new WeakMap(), KZ = new WeakMap(), cZ = new WeakMap(), gZ = new WeakMap(), MW = new WeakMap(), Xd = new WeakMap(), tZ = new WeakMap(), Yd = new WeakMap(), td = new WeakMap(), oc = new WeakMap(), Wl = new WeakSet(), HW = function(U, d = !1) {
  if (!U) {
    this.remove();
    return;
  }
  m(this, Pl, U.bitmap), d || (m(this, fl, U.id), m(this, td, U.isSvg)), U.file && m(this, MW, U.file.name), h(this, Wl, qR).call(this);
}, vW = function() {
  m(this, KZ, null), this._uiManager.enableWaiting(!1), Q(this, Xd) && this.div.focus();
}, Bt = function() {
  if (Q(this, fl)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(Q(this, fl)).then((Z) => h(this, Wl, HW).call(this, Z, !0)).finally(() => h(this, Wl, vW).call(this));
    return;
  }
  if (Q(this, cZ)) {
    const Z = Q(this, cZ);
    m(this, cZ, null), this._uiManager.enableWaiting(!0), m(this, KZ, this._uiManager.imageManager.getFromUrl(Z).then((F) => h(this, Wl, HW).call(this, F)).finally(() => h(this, Wl, vW).call(this)));
    return;
  }
  if (Q(this, gZ)) {
    const Z = Q(this, gZ);
    m(this, gZ, null), this._uiManager.enableWaiting(!0), m(this, KZ, this._uiManager.imageManager.getFromFile(Z).then((F) => h(this, Wl, HW).call(this, F)).finally(() => h(this, Wl, vW).call(this)));
    return;
  }
  const U = document.createElement("input");
  U.type = "file", U.accept = UQ.supportedTypesStr;
  const d = this._uiManager._signal;
  m(this, KZ, new Promise((Z) => {
    U.addEventListener("change", async () => {
      if (!U.files || U.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const F = await this._uiManager.imageManager.getFromFile(U.files[0]);
        h(this, Wl, HW).call(this, F);
      }
      Z();
    }, {
      signal: d
    }), U.addEventListener("cancel", () => {
      this.remove(), Z();
    }, {
      signal: d
    });
  }).finally(() => h(this, Wl, vW).call(this))), U.click();
}, qR = function() {
  const {
    div: U
  } = this;
  let {
    width: d,
    height: Z
  } = Q(this, Pl);
  const [F, W] = this.pageDimensions, t = 0.75;
  if (this.width)
    d = this.width * F, Z = this.height * W;
  else if (d > t * F || Z > t * W) {
    const s = Math.min(t * F / d, t * W / Z);
    d *= s, Z *= s;
  }
  const [V, R] = this.parentDimensions;
  this.setDims(d * V / F, Z * R / W), this._uiManager.enableWaiting(!1);
  const N = m(this, Xd, document.createElement("canvas"));
  U.append(N), U.hidden = !1, h(this, Wl, $R).call(this, d, Z), h(this, Wl, zb).call(this), Q(this, oc) || (this.parent.addUndoableEditor(this), m(this, oc, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), Q(this, MW) && N.setAttribute("aria-label", Q(this, MW));
}, Lb = function(U, d) {
  var t;
  const [Z, F] = this.parentDimensions;
  this.width = U / Z, this.height = d / F, this.setDims(U, d), (t = this._initialOptions) != null && t.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, Q(this, Yd) !== null && clearTimeout(Q(this, Yd)), m(this, Yd, setTimeout(() => {
    m(this, Yd, null), h(this, Wl, $R).call(this, U, d);
  }, 200));
}, ob = function(U, d) {
  const {
    width: Z,
    height: F
  } = Q(this, Pl);
  let W = Z, t = F, V = Q(this, Pl);
  for (; W > 2 * U || t > 2 * d; ) {
    const R = W, N = t;
    W > 2 * U && (W = W >= 16384 ? Math.floor(W / 2) - 1 : Math.ceil(W / 2)), t > 2 * d && (t = t >= 16384 ? Math.floor(t / 2) - 1 : Math.ceil(t / 2));
    const s = new OffscreenCanvas(W, t);
    s.getContext("2d").drawImage(V, 0, 0, R, N, 0, 0, W, t), V = s.transferToImageBitmap();
  }
  return V;
}, $R = function(U, d) {
  U = Math.ceil(U), d = Math.ceil(d);
  const Z = Q(this, Xd);
  if (!Z || Z.width === U && Z.height === d)
    return;
  Z.width = U, Z.height = d;
  const F = Q(this, td) ? Q(this, Pl) : h(this, Wl, ob).call(this, U, d);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const V = new OffscreenCanvas(U, d).getContext("2d");
    V.drawImage(F, 0, 0, F.width, F.height, 0, 0, U, d), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: V.getImageData(0, 0, U, d).data,
        width: U,
        height: d,
        channels: 4
      }
    }).then((R) => {
      const N = (R == null ? void 0 : R.output) || "";
      this.parent && N && !this.hasAltText() && (this.altTextData = {
        altText: N,
        decorative: !1
      });
    });
  }
  const W = Z.getContext("2d");
  W.filter = this._uiManager.hcmFilter, W.drawImage(F, 0, 0, F.width, F.height, 0, 0, U, d);
}, et = function(U) {
  if (U) {
    if (Q(this, td)) {
      const F = this._uiManager.imageManager.getSvgUrl(Q(this, fl));
      if (F)
        return F;
    }
    const d = document.createElement("canvas");
    return {
      width: d.width,
      height: d.height
    } = Q(this, Pl), d.getContext("2d").drawImage(Q(this, Pl), 0, 0), d.toDataURL();
  }
  if (Q(this, td)) {
    const [d, Z] = this.pageDimensions, F = Math.round(this.width * d * AZ.PDF_TO_CSS_UNITS), W = Math.round(this.height * Z * AZ.PDF_TO_CSS_UNITS), t = new OffscreenCanvas(F, W);
    return t.getContext("2d").drawImage(Q(this, Pl), 0, 0, Q(this, Pl).width, Q(this, Pl).height, 0, 0, F, W), t.transferToImageBitmap();
  }
  return structuredClone(Q(this, Pl));
}, zb = function() {
  this._uiManager._signal && (m(this, tZ, new ResizeObserver((U) => {
    const d = U[0].contentRect;
    d.width && d.height && h(this, Wl, Lb).call(this, d.width, d.height);
  })), Q(this, tZ).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var U;
    (U = Q(this, tZ)) == null || U.disconnect(), m(this, tZ, null);
  }, {
    once: !0
  }));
}, v(UQ, "_type", "stamp"), v(UQ, "_editorType", Ul.STAMP);
let _R = UQ;
var Z0, TW, Bd, F0, VZ, RZ, NZ, kU, HZ, GW, JW, RU, E, vZ, _l, Db, UN, dN, ZN, ut;
const PU = class PU {
  constructor({
    uiManager: l,
    pageIndex: U,
    div: d,
    accessibilityManager: Z,
    annotationLayer: F,
    drawLayer: W,
    textLayer: t,
    viewport: V,
    l10n: R
  }) {
    i(this, _l);
    i(this, Z0);
    i(this, TW, !1);
    i(this, Bd, null);
    i(this, F0, null);
    i(this, VZ, null);
    i(this, RZ, null);
    i(this, NZ, null);
    i(this, kU, /* @__PURE__ */ new Map());
    i(this, HZ, !1);
    i(this, GW, !1);
    i(this, JW, !1);
    i(this, RU, null);
    i(this, E);
    const N = [...Q(PU, vZ).values()];
    if (!PU._initialized) {
      PU._initialized = !0;
      for (const s of N)
        s.initialize(R, l);
    }
    l.registerEditorTypes(N), m(this, E, l), this.pageIndex = U, this.div = d, m(this, Z0, Z), m(this, Bd, F), this.viewport = V, m(this, RU, t), this.drawLayer = W, Q(this, E).addLayer(this);
  }
  get isEmpty() {
    return Q(this, kU).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && Q(this, E).getMode() === Ul.NONE;
  }
  updateToolbar(l) {
    Q(this, E).updateToolbar(l);
  }
  updateMode(l = Q(this, E).getMode()) {
    switch (h(this, _l, ut).call(this), l) {
      case Ul.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case Ul.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case Ul.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: U
    } = this.div;
    for (const d of Q(PU, vZ).values())
      U.toggle(`${d._type}Editing`, l === d._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(l) {
    var U;
    return l === ((U = Q(this, RU)) == null ? void 0 : U.div);
  }
  addInkEditorIfNeeded(l) {
    if (Q(this, E).getMode() !== Ul.INK)
      return;
    if (!l) {
      for (const d of Q(this, kU).values())
        if (d.isEmpty()) {
          d.setInBackground();
          return;
        }
    }
    this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, !1).setInBackground();
  }
  setEditingState(l) {
    Q(this, E).setEditingState(l);
  }
  addCommands(l) {
    Q(this, E).addCommands(l);
  }
  togglePointerEvents(l = !1) {
    this.div.classList.toggle("disabled", !l);
  }
  toggleAnnotationLayerPointerEvents(l = !1) {
    var U;
    (U = Q(this, Bd)) == null || U.div.classList.toggle("disabled", !l);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const l = /* @__PURE__ */ new Set();
    for (const d of Q(this, kU).values())
      d.enableEditing(), d.show(!0), d.annotationElementId && (Q(this, E).removeChangedExistingAnnotation(d), l.add(d.annotationElementId));
    if (!Q(this, Bd))
      return;
    const U = Q(this, Bd).getEditableAnnotations();
    for (const d of U) {
      if (d.hide(), Q(this, E).isDeletedAnnotationElement(d.data.id) || l.has(d.data.id))
        continue;
      const Z = this.deserialize(d);
      Z && (this.addOrRebuild(Z), Z.enableEditing());
    }
  }
  disable() {
    var Z;
    m(this, JW, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const l = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
    for (const F of Q(this, kU).values())
      if (F.disableEditing(), !!F.annotationElementId) {
        if (F.serialize() !== null) {
          l.set(F.annotationElementId, F);
          continue;
        } else
          U.set(F.annotationElementId, F);
        (Z = this.getEditableAnnotation(F.annotationElementId)) == null || Z.show(), F.remove();
      }
    if (Q(this, Bd)) {
      const F = Q(this, Bd).getEditableAnnotations();
      for (const W of F) {
        const {
          id: t
        } = W.data;
        if (Q(this, E).isDeletedAnnotationElement(t))
          continue;
        let V = U.get(t);
        if (V) {
          V.resetAnnotationElement(W), V.show(!1), W.show();
          continue;
        }
        V = l.get(t), V && (Q(this, E).addChangedExistingAnnotation(V), V.renderAnnotationElement(W), V.show(!1)), W.show();
      }
    }
    h(this, _l, ut).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: d
    } = this.div;
    for (const F of Q(PU, vZ).values())
      d.remove(`${F._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), m(this, JW, !1);
  }
  getEditableAnnotation(l) {
    var U;
    return ((U = Q(this, Bd)) == null ? void 0 : U.getEditableAnnotation(l)) || null;
  }
  setActiveEditor(l) {
    Q(this, E).getActive() !== l && Q(this, E).setActiveEditor(l);
  }
  enableTextSelection() {
    var l;
    this.div.tabIndex = -1, (l = Q(this, RU)) != null && l.div && !Q(this, RZ) && (m(this, RZ, h(this, _l, Db).bind(this)), Q(this, RU).div.addEventListener("pointerdown", Q(this, RZ), {
      signal: Q(this, E)._signal
    }), Q(this, RU).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var l;
    this.div.tabIndex = 0, (l = Q(this, RU)) != null && l.div && Q(this, RZ) && (Q(this, RU).div.removeEventListener("pointerdown", Q(this, RZ)), m(this, RZ, null), Q(this, RU).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (Q(this, VZ))
      return;
    const l = Q(this, E)._signal;
    m(this, VZ, this.pointerdown.bind(this)), m(this, F0, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", Q(this, VZ), {
      signal: l
    }), this.div.addEventListener("pointerup", Q(this, F0), {
      signal: l
    });
  }
  disableClick() {
    Q(this, VZ) && (this.div.removeEventListener("pointerdown", Q(this, VZ)), this.div.removeEventListener("pointerup", Q(this, F0)), m(this, VZ, null), m(this, F0, null));
  }
  attach(l) {
    Q(this, kU).set(l.id, l);
    const {
      annotationElementId: U
    } = l;
    U && Q(this, E).isDeletedAnnotationElement(U) && Q(this, E).removeDeletedAnnotationElement(l);
  }
  detach(l) {
    var U;
    Q(this, kU).delete(l.id), (U = Q(this, Z0)) == null || U.removePointerInTextLayer(l.contentDiv), !Q(this, JW) && l.annotationElementId && Q(this, E).addDeletedAnnotationElement(l);
  }
  remove(l) {
    this.detach(l), Q(this, E).removeEditor(l), l.div.remove(), l.isAttachedToDOM = !1, Q(this, GW) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(l) {
    var U;
    l.parent !== this && (l.parent && l.annotationElementId && (Q(this, E).addDeletedAnnotationElement(l.annotationElementId), Rl.deleteAnnotationElement(l), l.annotationElementId = null), this.attach(l), (U = l.parent) == null || U.detach(l), l.setParent(this), l.div && l.isAttachedToDOM && (l.div.remove(), this.div.append(l.div)));
  }
  add(l) {
    if (!(l.parent === this && l.isAttachedToDOM)) {
      if (this.changeParent(l), Q(this, E).addEditor(l), this.attach(l), !l.isAttachedToDOM) {
        const U = l.render();
        this.div.append(U), l.isAttachedToDOM = !0;
      }
      l.fixAndSetPosition(), l.onceAdded(), Q(this, E).addToAnnotationStorage(l), l._reportTelemetry(l.telemetryInitialData);
    }
  }
  moveEditorInDOM(l) {
    var d;
    if (!l.isAttachedToDOM)
      return;
    const {
      activeElement: U
    } = document;
    l.div.contains(U) && !Q(this, NZ) && (l._focusEventsAllowed = !1, m(this, NZ, setTimeout(() => {
      m(this, NZ, null), l.div.contains(document.activeElement) ? l._focusEventsAllowed = !0 : (l.div.addEventListener("focusin", () => {
        l._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: Q(this, E)._signal
      }), U.focus());
    }, 0))), l._structTreeParentId = (d = Q(this, Z0)) == null ? void 0 : d.moveElementInDOM(this.div, l.div, l.contentDiv, !0);
  }
  addOrRebuild(l) {
    l.needsToBeRebuilt() ? (l.parent || (l.parent = this), l.rebuild(), l.show()) : this.add(l);
  }
  addUndoableEditor(l) {
    const U = () => l._uiManager.rebuild(l), d = () => {
      l.remove();
    };
    this.addCommands({
      cmd: U,
      undo: d,
      mustExec: !1
    });
  }
  getNextId() {
    return Q(this, E).getId();
  }
  get _signal() {
    return Q(this, E)._signal;
  }
  canCreateNewEmptyEditor() {
    var l;
    return (l = Q(this, _l, UN)) == null ? void 0 : l.canCreateNewEmptyEditor();
  }
  pasteEditor(l, U) {
    Q(this, E).updateToolbar(l), Q(this, E).updateMode(l);
    const {
      offsetX: d,
      offsetY: Z
    } = h(this, _l, ZN).call(this), F = this.getNextId(), W = h(this, _l, dN).call(this, {
      parent: this,
      id: F,
      x: d,
      y: Z,
      uiManager: Q(this, E),
      isCentered: !0,
      ...U
    });
    W && this.add(W);
  }
  deserialize(l) {
    var U;
    return ((U = Q(PU, vZ).get(l.annotationType ?? l.annotationEditorType)) == null ? void 0 : U.deserialize(l, this, Q(this, E))) || null;
  }
  createAndAddNewEditor(l, U, d = {}) {
    const Z = this.getNextId(), F = h(this, _l, dN).call(this, {
      parent: this,
      id: Z,
      x: l.offsetX,
      y: l.offsetY,
      uiManager: Q(this, E),
      isCentered: U,
      ...d
    });
    return F && this.add(F), F;
  }
  addNewEditor() {
    this.createAndAddNewEditor(h(this, _l, ZN).call(this), !0);
  }
  setSelected(l) {
    Q(this, E).setSelected(l);
  }
  toggleSelected(l) {
    Q(this, E).toggleSelected(l);
  }
  isSelected(l) {
    return Q(this, E).isSelected(l);
  }
  unselect(l) {
    Q(this, E).unselect(l);
  }
  pointerup(l) {
    const {
      isMac: U
    } = MU.platform;
    if (!(l.button !== 0 || l.ctrlKey && U) && l.target === this.div && Q(this, HZ)) {
      if (m(this, HZ, !1), !Q(this, TW)) {
        m(this, TW, !0);
        return;
      }
      if (Q(this, E).getMode() === Ul.STAMP) {
        Q(this, E).unselectAll();
        return;
      }
      this.createAndAddNewEditor(l, !1);
    }
  }
  pointerdown(l) {
    if (Q(this, E).getMode() === Ul.HIGHLIGHT && this.enableTextSelection(), Q(this, HZ)) {
      m(this, HZ, !1);
      return;
    }
    const {
      isMac: U
    } = MU.platform;
    if (l.button !== 0 || l.ctrlKey && U || l.target !== this.div)
      return;
    m(this, HZ, !0);
    const d = Q(this, E).getActive();
    m(this, TW, !d || d.isEmpty());
  }
  findNewParent(l, U, d) {
    const Z = Q(this, E).findParent(U, d);
    return Z === null || Z === this ? !1 : (Z.changeParent(l), !0);
  }
  destroy() {
    var l, U;
    ((l = Q(this, E).getActive()) == null ? void 0 : l.parent) === this && (Q(this, E).commitOrRemove(), Q(this, E).setActiveEditor(null)), Q(this, NZ) && (clearTimeout(Q(this, NZ)), m(this, NZ, null));
    for (const d of Q(this, kU).values())
      (U = Q(this, Z0)) == null || U.removePointerInTextLayer(d.contentDiv), d.setParent(null), d.isAttachedToDOM = !1, d.div.remove();
    this.div = null, Q(this, kU).clear(), Q(this, E).removeLayer(this);
  }
  render({
    viewport: l
  }) {
    this.viewport = l, Q0(this.div, l);
    for (const U of Q(this, E).getEditors(this.pageIndex))
      this.add(U), U.rebuild();
    this.updateMode();
  }
  update({
    viewport: l
  }) {
    Q(this, E).commitOrRemove(), h(this, _l, ut).call(this);
    const U = this.viewport.rotation, d = l.rotation;
    if (this.viewport = l, Q0(this.div, {
      rotation: d
    }), U !== d)
      for (const Z of Q(this, kU).values())
        Z.rotate(d);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const {
      pageWidth: l,
      pageHeight: U
    } = this.viewport.rawDims;
    return [l, U];
  }
  get scale() {
    return Q(this, E).viewParameters.realScale;
  }
};
Z0 = new WeakMap(), TW = new WeakMap(), Bd = new WeakMap(), F0 = new WeakMap(), VZ = new WeakMap(), RZ = new WeakMap(), NZ = new WeakMap(), kU = new WeakMap(), HZ = new WeakMap(), GW = new WeakMap(), JW = new WeakMap(), RU = new WeakMap(), E = new WeakMap(), vZ = new WeakMap(), _l = new WeakSet(), Db = function(l) {
  if (Q(this, E).unselectAll(), l.target === Q(this, RU).div) {
    const {
      isMac: U
    } = MU.platform;
    if (l.button !== 0 || l.ctrlKey && U)
      return;
    Q(this, E).showAllEditors("highlight", !0, !0), Q(this, RU).div.classList.add("free"), Ot.startHighlighting(this, Q(this, E).direction === "ltr", l), Q(this, RU).div.addEventListener("pointerup", () => {
      Q(this, RU).div.classList.remove("free");
    }, {
      once: !0,
      signal: Q(this, E)._signal
    }), l.preventDefault();
  }
}, UN = function() {
  return Q(PU, vZ).get(Q(this, E).getMode());
}, dN = function(l) {
  const U = Q(this, _l, UN);
  return U ? new U.prototype.constructor(l) : null;
}, ZN = function() {
  const {
    x: l,
    y: U,
    width: d,
    height: Z
  } = this.div.getBoundingClientRect(), F = Math.max(0, l), W = Math.max(0, U), t = Math.min(window.innerWidth, l + d), V = Math.min(window.innerHeight, U + Z), R = (F + t) / 2 - l, N = (W + V) / 2 - U, [s, n] = this.viewport.rotation % 180 === 0 ? [R, N] : [N, R];
  return {
    offsetX: s,
    offsetY: n
  };
}, ut = function() {
  m(this, GW, !0);
  for (const l of Q(this, kU).values())
    l.isEmpty() && l.remove();
  m(this, GW, !1);
}, v(PU, "_initialized", !1), i(PU, vZ, new Map([zR, KR, _R, Ot].map((l) => [l._editorType, l])));
let lN = PU;
var ed, zc, El, PZ, Dc, WN, R0, QN, kb;
const rl = class rl {
  constructor({
    pageIndex: l
  }) {
    i(this, R0);
    i(this, ed, null);
    i(this, zc, 0);
    i(this, El, /* @__PURE__ */ new Map());
    i(this, PZ, /* @__PURE__ */ new Map());
    this.pageIndex = l;
  }
  setParent(l) {
    if (!Q(this, ed)) {
      m(this, ed, l);
      return;
    }
    if (Q(this, ed) !== l) {
      if (Q(this, El).size > 0)
        for (const U of Q(this, El).values())
          U.remove(), l.append(U);
      m(this, ed, l);
    }
  }
  static get _svgFactory() {
    return Fl(this, "_svgFactory", new MN());
  }
  highlight(l, U, d, Z = !1) {
    const F = SU(this, zc)._++, W = h(this, R0, QN).call(this, l.box);
    W.classList.add("highlight"), l.free && W.classList.add("free");
    const t = rl._svgFactory.createElement("defs");
    W.append(t);
    const V = rl._svgFactory.createElement("path");
    t.append(V);
    const R = `path_p${this.pageIndex}_${F}`;
    V.setAttribute("id", R), V.setAttribute("d", l.toSVGPath()), Z && Q(this, PZ).set(F, V);
    const N = h(this, R0, kb).call(this, t, R), s = rl._svgFactory.createElement("use");
    return W.append(s), W.setAttribute("fill", U), W.setAttribute("fill-opacity", d), s.setAttribute("href", `#${R}`), Q(this, El).set(F, W), {
      id: F,
      clipPathId: `url(#${N})`
    };
  }
  highlightOutline(l) {
    const U = SU(this, zc)._++, d = h(this, R0, QN).call(this, l.box);
    d.classList.add("highlightOutline");
    const Z = rl._svgFactory.createElement("defs");
    d.append(Z);
    const F = rl._svgFactory.createElement("path");
    Z.append(F);
    const W = `path_p${this.pageIndex}_${U}`;
    F.setAttribute("id", W), F.setAttribute("d", l.toSVGPath()), F.setAttribute("vector-effect", "non-scaling-stroke");
    let t;
    if (l.free) {
      d.classList.add("free");
      const N = rl._svgFactory.createElement("mask");
      Z.append(N), t = `mask_p${this.pageIndex}_${U}`, N.setAttribute("id", t), N.setAttribute("maskUnits", "objectBoundingBox");
      const s = rl._svgFactory.createElement("rect");
      N.append(s), s.setAttribute("width", "1"), s.setAttribute("height", "1"), s.setAttribute("fill", "white");
      const n = rl._svgFactory.createElement("use");
      N.append(n), n.setAttribute("href", `#${W}`), n.setAttribute("stroke", "none"), n.setAttribute("fill", "black"), n.setAttribute("fill-rule", "nonzero"), n.classList.add("mask");
    }
    const V = rl._svgFactory.createElement("use");
    d.append(V), V.setAttribute("href", `#${W}`), t && V.setAttribute("mask", `url(#${t})`);
    const R = V.cloneNode();
    return d.append(R), V.classList.add("mainOutline"), R.classList.add("secondaryOutline"), Q(this, El).set(U, d), U;
  }
  finalizeLine(l, U) {
    const d = Q(this, PZ).get(l);
    Q(this, PZ).delete(l), this.updateBox(l, U.box), d.setAttribute("d", U.toSVGPath());
  }
  updateLine(l, U) {
    Q(this, El).get(l).firstChild.firstChild.setAttribute("d", U.toSVGPath());
  }
  removeFreeHighlight(l) {
    this.remove(l), Q(this, PZ).delete(l);
  }
  updatePath(l, U) {
    Q(this, PZ).get(l).setAttribute("d", U.toSVGPath());
  }
  updateBox(l, U) {
    var d;
    h(d = rl, Dc, WN).call(d, Q(this, El).get(l), U);
  }
  show(l, U) {
    Q(this, El).get(l).classList.toggle("hidden", !U);
  }
  rotate(l, U) {
    Q(this, El).get(l).setAttribute("data-main-rotation", U);
  }
  changeColor(l, U) {
    Q(this, El).get(l).setAttribute("fill", U);
  }
  changeOpacity(l, U) {
    Q(this, El).get(l).setAttribute("fill-opacity", U);
  }
  addClass(l, U) {
    Q(this, El).get(l).classList.add(U);
  }
  removeClass(l, U) {
    Q(this, El).get(l).classList.remove(U);
  }
  remove(l) {
    Q(this, ed) !== null && (Q(this, El).get(l).remove(), Q(this, El).delete(l));
  }
  destroy() {
    m(this, ed, null);
    for (const l of Q(this, El).values())
      l.remove();
    Q(this, El).clear();
  }
};
ed = new WeakMap(), zc = new WeakMap(), El = new WeakMap(), PZ = new WeakMap(), Dc = new WeakSet(), WN = function(l, {
  x: U = 0,
  y: d = 0,
  width: Z = 1,
  height: F = 1
} = {}) {
  const {
    style: W
  } = l;
  W.top = `${100 * d}%`, W.left = `${100 * U}%`, W.width = `${100 * Z}%`, W.height = `${100 * F}%`;
}, R0 = new WeakSet(), QN = function(l) {
  var d;
  const U = rl._svgFactory.create(1, 1, !0);
  return Q(this, ed).append(U), U.setAttribute("aria-hidden", !0), h(d = rl, Dc, WN).call(d, U, l), U;
}, kb = function(l, U) {
  const d = rl._svgFactory.createElement("clipPath");
  l.append(d);
  const Z = `clip_${U}`;
  d.setAttribute("id", Z), d.setAttribute("clipPathUnits", "objectBoundingBox");
  const F = rl._svgFactory.createElement("use");
  return d.append(F), F.setAttribute("href", `#${U}`), F.classList.add("clip"), Z;
}, i(rl, Dc);
let FN = rl;
K.AbortException;
K.AnnotationEditorLayer;
K.AnnotationEditorParamsType;
K.AnnotationEditorType;
K.AnnotationEditorUIManager;
K.AnnotationLayer;
K.AnnotationMode;
K.CMapCompressionType;
K.ColorPicker;
K.DOMSVGFactory;
K.DrawLayer;
K.FeatureTest;
var Ji = K.GlobalWorkerOptions;
K.ImageKind;
K.InvalidPDFException;
K.MissingPDFException;
K.OPS;
K.Outliner;
K.PDFDataRangeTransport;
K.PDFDateString;
K.PDFWorker;
K.PasswordResponses;
K.PermissionFlag;
K.PixelsPerInch;
K.RenderingCancelledException;
var Si = K.TextLayer;
K.UnexpectedResponseException;
K.Util;
K.VerbosityLevel;
K.XfaLayer;
K.build;
K.createValidAbsoluteUrl;
K.fetchData;
var Xi = K.getDocument;
K.getFilenameFromUrl;
K.getPdfFilenameFromUrl;
K.getXfaPageViewport;
K.isDataScheme;
K.isPdfFile;
K.noContextMenu;
K.normalizeUnicode;
K.renderTextLayer;
K.setLayerDimensions;
K.shadow;
K.updateTextLayer;
K.version;
Ji.workerSrc = Yi;
const Bi = async (c) => await Xi(c).promise;
function ei(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Ib = { exports: {} }, Eb = { exports: {} };
(function() {
  var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = {
    // Bit-wise rotation left
    rotl: function(U, d) {
      return U << d | U >>> 32 - d;
    },
    // Bit-wise rotation right
    rotr: function(U, d) {
      return U << 32 - d | U >>> d;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(U) {
      if (U.constructor == Number)
        return l.rotl(U, 8) & 16711935 | l.rotl(U, 24) & 4278255360;
      for (var d = 0; d < U.length; d++)
        U[d] = l.endian(U[d]);
      return U;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(U) {
      for (var d = []; U > 0; U--)
        d.push(Math.floor(Math.random() * 256));
      return d;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(U) {
      for (var d = [], Z = 0, F = 0; Z < U.length; Z++, F += 8)
        d[F >>> 5] |= U[Z] << 24 - F % 32;
      return d;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(U) {
      for (var d = [], Z = 0; Z < U.length * 32; Z += 8)
        d.push(U[Z >>> 5] >>> 24 - Z % 32 & 255);
      return d;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(U) {
      for (var d = [], Z = 0; Z < U.length; Z++)
        d.push((U[Z] >>> 4).toString(16)), d.push((U[Z] & 15).toString(16));
      return d.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(U) {
      for (var d = [], Z = 0; Z < U.length; Z += 2)
        d.push(parseInt(U.substr(Z, 2), 16));
      return d;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(U) {
      for (var d = [], Z = 0; Z < U.length; Z += 3)
        for (var F = U[Z] << 16 | U[Z + 1] << 8 | U[Z + 2], W = 0; W < 4; W++)
          Z * 8 + W * 6 <= U.length * 8 ? d.push(c.charAt(F >>> 6 * (3 - W) & 63)) : d.push("=");
      return d.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(U) {
      U = U.replace(/[^A-Z0-9+\/]/ig, "");
      for (var d = [], Z = 0, F = 0; Z < U.length; F = ++Z % 4)
        F != 0 && d.push((c.indexOf(U.charAt(Z - 1)) & Math.pow(2, -2 * F + 8) - 1) << F * 2 | c.indexOf(U.charAt(Z)) >>> 6 - F * 2);
      return d;
    }
  };
  Eb.exports = l;
})();
var ui = Eb.exports, cN = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(c) {
      return cN.bin.stringToBytes(unescape(encodeURIComponent(c)));
    },
    // Convert a byte array to a string
    bytesToString: function(c) {
      return decodeURIComponent(escape(cN.bin.bytesToString(c)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(c) {
      for (var l = [], U = 0; U < c.length; U++)
        l.push(c.charCodeAt(U) & 255);
      return l;
    },
    // Convert a byte array to a string
    bytesToString: function(c) {
      for (var l = [], U = 0; U < c.length; U++)
        l.push(String.fromCharCode(c[U]));
      return l.join("");
    }
  }
}, bs = cN;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var pi = function(c) {
  return c != null && (Cb(c) || yi(c) || !!c._isBuffer);
};
function Cb(c) {
  return !!c.constructor && typeof c.constructor.isBuffer == "function" && c.constructor.isBuffer(c);
}
function yi(c) {
  return typeof c.readFloatLE == "function" && typeof c.slice == "function" && Cb(c.slice(0, 0));
}
(function() {
  var c = ui, l = bs.utf8, U = pi, d = bs.bin, Z = function(F, W) {
    F.constructor == String ? W && W.encoding === "binary" ? F = d.stringToBytes(F) : F = l.stringToBytes(F) : U(F) ? F = Array.prototype.slice.call(F, 0) : !Array.isArray(F) && F.constructor !== Uint8Array && (F = F.toString());
    for (var t = c.bytesToWords(F), V = F.length * 8, R = 1732584193, N = -271733879, s = -1732584194, n = 271733878, b = 0; b < t.length; b++)
      t[b] = (t[b] << 8 | t[b] >>> 24) & 16711935 | (t[b] << 24 | t[b] >>> 8) & 4278255360;
    t[V >>> 5] |= 128 << V % 32, t[(V + 64 >>> 9 << 4) + 14] = V;
    for (var a = Z._ff, M = Z._gg, G = Z._hh, T = Z._ii, b = 0; b < t.length; b += 16) {
      var J = R, Y = N, B = s, S = n;
      R = a(R, N, s, n, t[b + 0], 7, -680876936), n = a(n, R, N, s, t[b + 1], 12, -389564586), s = a(s, n, R, N, t[b + 2], 17, 606105819), N = a(N, s, n, R, t[b + 3], 22, -1044525330), R = a(R, N, s, n, t[b + 4], 7, -176418897), n = a(n, R, N, s, t[b + 5], 12, 1200080426), s = a(s, n, R, N, t[b + 6], 17, -1473231341), N = a(N, s, n, R, t[b + 7], 22, -45705983), R = a(R, N, s, n, t[b + 8], 7, 1770035416), n = a(n, R, N, s, t[b + 9], 12, -1958414417), s = a(s, n, R, N, t[b + 10], 17, -42063), N = a(N, s, n, R, t[b + 11], 22, -1990404162), R = a(R, N, s, n, t[b + 12], 7, 1804603682), n = a(n, R, N, s, t[b + 13], 12, -40341101), s = a(s, n, R, N, t[b + 14], 17, -1502002290), N = a(N, s, n, R, t[b + 15], 22, 1236535329), R = M(R, N, s, n, t[b + 1], 5, -165796510), n = M(n, R, N, s, t[b + 6], 9, -1069501632), s = M(s, n, R, N, t[b + 11], 14, 643717713), N = M(N, s, n, R, t[b + 0], 20, -373897302), R = M(R, N, s, n, t[b + 5], 5, -701558691), n = M(n, R, N, s, t[b + 10], 9, 38016083), s = M(s, n, R, N, t[b + 15], 14, -660478335), N = M(N, s, n, R, t[b + 4], 20, -405537848), R = M(R, N, s, n, t[b + 9], 5, 568446438), n = M(n, R, N, s, t[b + 14], 9, -1019803690), s = M(s, n, R, N, t[b + 3], 14, -187363961), N = M(N, s, n, R, t[b + 8], 20, 1163531501), R = M(R, N, s, n, t[b + 13], 5, -1444681467), n = M(n, R, N, s, t[b + 2], 9, -51403784), s = M(s, n, R, N, t[b + 7], 14, 1735328473), N = M(N, s, n, R, t[b + 12], 20, -1926607734), R = G(R, N, s, n, t[b + 5], 4, -378558), n = G(n, R, N, s, t[b + 8], 11, -2022574463), s = G(s, n, R, N, t[b + 11], 16, 1839030562), N = G(N, s, n, R, t[b + 14], 23, -35309556), R = G(R, N, s, n, t[b + 1], 4, -1530992060), n = G(n, R, N, s, t[b + 4], 11, 1272893353), s = G(s, n, R, N, t[b + 7], 16, -155497632), N = G(N, s, n, R, t[b + 10], 23, -1094730640), R = G(R, N, s, n, t[b + 13], 4, 681279174), n = G(n, R, N, s, t[b + 0], 11, -358537222), s = G(s, n, R, N, t[b + 3], 16, -722521979), N = G(N, s, n, R, t[b + 6], 23, 76029189), R = G(R, N, s, n, t[b + 9], 4, -640364487), n = G(n, R, N, s, t[b + 12], 11, -421815835), s = G(s, n, R, N, t[b + 15], 16, 530742520), N = G(N, s, n, R, t[b + 2], 23, -995338651), R = T(R, N, s, n, t[b + 0], 6, -198630844), n = T(n, R, N, s, t[b + 7], 10, 1126891415), s = T(s, n, R, N, t[b + 14], 15, -1416354905), N = T(N, s, n, R, t[b + 5], 21, -57434055), R = T(R, N, s, n, t[b + 12], 6, 1700485571), n = T(n, R, N, s, t[b + 3], 10, -1894986606), s = T(s, n, R, N, t[b + 10], 15, -1051523), N = T(N, s, n, R, t[b + 1], 21, -2054922799), R = T(R, N, s, n, t[b + 8], 6, 1873313359), n = T(n, R, N, s, t[b + 15], 10, -30611744), s = T(s, n, R, N, t[b + 6], 15, -1560198380), N = T(N, s, n, R, t[b + 13], 21, 1309151649), R = T(R, N, s, n, t[b + 4], 6, -145523070), n = T(n, R, N, s, t[b + 11], 10, -1120210379), s = T(s, n, R, N, t[b + 2], 15, 718787259), N = T(N, s, n, R, t[b + 9], 21, -343485551), R = R + J >>> 0, N = N + Y >>> 0, s = s + B >>> 0, n = n + S >>> 0;
    }
    return c.endian([R, N, s, n]);
  };
  Z._ff = function(F, W, t, V, R, N, s) {
    var n = F + (W & t | ~W & V) + (R >>> 0) + s;
    return (n << N | n >>> 32 - N) + W;
  }, Z._gg = function(F, W, t, V, R, N, s) {
    var n = F + (W & V | t & ~V) + (R >>> 0) + s;
    return (n << N | n >>> 32 - N) + W;
  }, Z._hh = function(F, W, t, V, R, N, s) {
    var n = F + (W ^ t ^ V) + (R >>> 0) + s;
    return (n << N | n >>> 32 - N) + W;
  }, Z._ii = function(F, W, t, V, R, N, s) {
    var n = F + (t ^ (W | ~V)) + (R >>> 0) + s;
    return (n << N | n >>> 32 - N) + W;
  }, Z._blocksize = 16, Z._digestsize = 16, Ib.exports = function(F, W) {
    if (F == null)
      throw new Error("Illegal argument " + F);
    var t = c.wordsToBytes(Z(F, W));
    return W && W.asBytes ? t : W && W.asString ? d.bytesToString(t) : c.bytesToHex(t);
  };
})();
var Li = Ib.exports;
const oi = /* @__PURE__ */ ei(Li), wb = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIE0wKG0pe3JldHVybiBtJiZtLl9fZXNNb2R1bGUmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtLCJkZWZhdWx0Iik/bS5kZWZhdWx0Om19ZnVuY3Rpb24gQzAobSl7dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZHluYW1pY2FsbHkgcmVxdWlyZSAiJyttKyciLiBQbGVhc2UgY29uZmlndXJlIHRoZSBkeW5hbWljUmVxdWlyZVRhcmdldHMgb3IvYW5kIGlnbm9yZUR5bmFtaWNSZXF1aXJlcyBvcHRpb24gb2YgQHJvbGx1cC9wbHVnaW4tY29tbW9uanMgYXBwcm9wcmlhdGVseSBmb3IgdGhpcyByZXF1aXJlIGNhbGwgdG8gd29yay4nKX12YXIgZDA9e2V4cG9ydHM6e319LEZlPXt9LHMwO2Z1bmN0aW9uIEhlKCl7cmV0dXJuIHMwfHwoczA9MSxmdW5jdGlvbihtKXt2YXIgRz10eXBlb2YgVWludDhBcnJheTwidSImJnR5cGVvZiBVaW50MTZBcnJheTwidSImJnR5cGVvZiBJbnQzMkFycmF5PCJ1IjtmdW5jdGlvbiBZKEkscil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChJLHIpfW0uYXNzaWduPWZ1bmN0aW9uKEkpe2Zvcih2YXIgcj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7ci5sZW5ndGg7KXt2YXIgdD1yLnNoaWZ0KCk7aWYodCl7aWYodHlwZW9mIHQhPSJvYmplY3QiKXRocm93IG5ldyBUeXBlRXJyb3IodCsibXVzdCBiZSBub24tb2JqZWN0Iik7Zm9yKHZhciBpIGluIHQpWSh0LGkpJiYoSVtpXT10W2ldKX19cmV0dXJuIEl9LG0uc2hyaW5rQnVmPWZ1bmN0aW9uKEkscil7cmV0dXJuIEkubGVuZ3RoPT09cj9JOkkuc3ViYXJyYXk/SS5zdWJhcnJheSgwLHIpOihJLmxlbmd0aD1yLEkpfTt2YXIgUj17YXJyYXlTZXQ6ZnVuY3Rpb24oSSxyLHQsaSxiKXtpZihyLnN1YmFycmF5JiZJLnN1YmFycmF5KXtJLnNldChyLnN1YmFycmF5KHQsdCtpKSxiKTtyZXR1cm59Zm9yKHZhciBfPTA7XzxpO18rKylJW2IrX109clt0K19dfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKEkpe3ZhciByLHQsaSxiLF8scztmb3IoaT0wLHI9MCx0PUkubGVuZ3RoO3I8dDtyKyspaSs9SVtyXS5sZW5ndGg7Zm9yKHM9bmV3IFVpbnQ4QXJyYXkoaSksYj0wLHI9MCx0PUkubGVuZ3RoO3I8dDtyKyspXz1JW3JdLHMuc2V0KF8sYiksYis9Xy5sZW5ndGg7cmV0dXJuIHN9fSxrPXthcnJheVNldDpmdW5jdGlvbihJLHIsdCxpLGIpe2Zvcih2YXIgXz0wO188aTtfKyspSVtiK19dPXJbdCtfXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbihJKXtyZXR1cm5bXS5jb25jYXQuYXBwbHkoW10sSSl9fTttLnNldFR5cGVkPWZ1bmN0aW9uKEkpe0k/KG0uQnVmOD1VaW50OEFycmF5LG0uQnVmMTY9VWludDE2QXJyYXksbS5CdWYzMj1JbnQzMkFycmF5LG0uYXNzaWduKG0sUikpOihtLkJ1Zjg9QXJyYXksbS5CdWYxNj1BcnJheSxtLkJ1ZjMyPUFycmF5LG0uYXNzaWduKG0saykpfSxtLnNldFR5cGVkKEcpfShGZSkpLEZlfXZhciBZZT17fSxNZT17fSxKZT17fSxfMDtmdW5jdGlvbiBtMCgpe2lmKF8wKXJldHVybiBKZTtfMD0xO3ZhciBtPUhlKCksRz00LFk9MCxSPTEsaz0yO2Z1bmN0aW9uIEkobCl7Zm9yKHZhciBKPWwubGVuZ3RoOy0tSj49MDspbFtKXT0wfXZhciByPTAsdD0xLGk9MixiPTMsXz0yNTgscz0yOSxoPTI1Nix2PWgrMStzLEU9MzAsZD0xOSx1PTIqdisxLGM9MTUsbz0xNixuPTcsdz0yNTYsZz0xNixwPTE3LFM9MTgsQT1bMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMiwyLDIsMiwzLDMsMywzLDQsNCw0LDQsNSw1LDUsNSwwXSxMPVswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSxEPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDIsMyw3XSxCPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XSxqPTUxMixDPW5ldyBBcnJheSgodisyKSoyKTtJKEMpO3ZhciBIPW5ldyBBcnJheShFKjIpO0koSCk7dmFyIFU9bmV3IEFycmF5KGopO0koVSk7dmFyIFg9bmV3IEFycmF5KF8tYisxKTtJKFgpO3ZhciBUPW5ldyBBcnJheShzKTtJKFQpO3ZhciBQPW5ldyBBcnJheShFKTtJKFApO2Z1bmN0aW9uIFoobCxKLFcsZWUseSl7dGhpcy5zdGF0aWNfdHJlZT1sLHRoaXMuZXh0cmFfYml0cz1KLHRoaXMuZXh0cmFfYmFzZT1XLHRoaXMuZWxlbXM9ZWUsdGhpcy5tYXhfbGVuZ3RoPXksdGhpcy5oYXNfc3RyZWU9bCYmbC5sZW5ndGh9dmFyIGFlLCQsdGU7ZnVuY3Rpb24gVihsLEope3RoaXMuZHluX3RyZWU9bCx0aGlzLm1heF9jb2RlPTAsdGhpcy5zdGF0X2Rlc2M9Sn1mdW5jdGlvbiB1ZShsKXtyZXR1cm4gbDwyNTY/VVtsXTpVWzI1NisobD4+PjcpXX1mdW5jdGlvbiBmZShsLEope2wucGVuZGluZ19idWZbbC5wZW5kaW5nKytdPUomMjU1LGwucGVuZGluZ19idWZbbC5wZW5kaW5nKytdPUo+Pj44JjI1NX1mdW5jdGlvbiBoZShsLEosVyl7bC5iaV92YWxpZD5vLVc/KGwuYmlfYnVmfD1KPDxsLmJpX3ZhbGlkJjY1NTM1LGZlKGwsbC5iaV9idWYpLGwuYmlfYnVmPUo+Pm8tbC5iaV92YWxpZCxsLmJpX3ZhbGlkKz1XLW8pOihsLmJpX2J1Znw9Sjw8bC5iaV92YWxpZCY2NTUzNSxsLmJpX3ZhbGlkKz1XKX1mdW5jdGlvbiBsZShsLEosVyl7aGUobCxXW0oqMl0sV1tKKjIrMV0pfWZ1bmN0aW9uIHNlKGwsSil7dmFyIFc9MDtkbyBXfD1sJjEsbD4+Pj0xLFc8PD0xO3doaWxlKC0tSj4wKTtyZXR1cm4gVz4+PjF9ZnVuY3Rpb24gZ2UobCl7bC5iaV92YWxpZD09PTE2PyhmZShsLGwuYmlfYnVmKSxsLmJpX2J1Zj0wLGwuYmlfdmFsaWQ9MCk6bC5iaV92YWxpZD49OCYmKGwucGVuZGluZ19idWZbbC5wZW5kaW5nKytdPWwuYmlfYnVmJjI1NSxsLmJpX2J1Zj4+PTgsbC5iaV92YWxpZC09OCl9ZnVuY3Rpb24gemUobCxKKXt2YXIgVz1KLmR5bl90cmVlLGVlPUoubWF4X2NvZGUseT1KLnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxNPUouc3RhdF9kZXNjLmhhc19zdHJlZSxhPUouc3RhdF9kZXNjLmV4dHJhX2JpdHMsSz1KLnN0YXRfZGVzYy5leHRyYV9iYXNlLG5lPUouc3RhdF9kZXNjLm1heF9sZW5ndGgsZSxOLE8sZix4LHosaWU9MDtmb3IoZj0wO2Y8PWM7ZisrKWwuYmxfY291bnRbZl09MDtmb3IoV1tsLmhlYXBbbC5oZWFwX21heF0qMisxXT0wLGU9bC5oZWFwX21heCsxO2U8dTtlKyspTj1sLmhlYXBbZV0sZj1XW1dbTioyKzFdKjIrMV0rMSxmPm5lJiYoZj1uZSxpZSsrKSxXW04qMisxXT1mLCEoTj5lZSkmJihsLmJsX2NvdW50W2ZdKysseD0wLE4+PUsmJih4PWFbTi1LXSksej1XW04qMl0sbC5vcHRfbGVuKz16KihmK3gpLE0mJihsLnN0YXRpY19sZW4rPXoqKHlbTioyKzFdK3gpKSk7aWYoaWUhPT0wKXtkb3tmb3IoZj1uZS0xO2wuYmxfY291bnRbZl09PT0wOylmLS07bC5ibF9jb3VudFtmXS0tLGwuYmxfY291bnRbZisxXSs9MixsLmJsX2NvdW50W25lXS0tLGllLT0yfXdoaWxlKGllPjApO2ZvcihmPW5lO2YhPT0wO2YtLSlmb3IoTj1sLmJsX2NvdW50W2ZdO04hPT0wOylPPWwuaGVhcFstLWVdLCEoTz5lZSkmJihXW08qMisxXSE9PWYmJihsLm9wdF9sZW4rPShmLVdbTyoyKzFdKSpXW08qMl0sV1tPKjIrMV09ZiksTi0tKX19ZnVuY3Rpb24geGUobCxKLFcpe3ZhciBlZT1uZXcgQXJyYXkoYysxKSx5PTAsTSxhO2ZvcihNPTE7TTw9YztNKyspZWVbTV09eT15K1dbTS0xXTw8MTtmb3IoYT0wO2E8PUo7YSsrKXt2YXIgSz1sW2EqMisxXTtLIT09MCYmKGxbYSoyXT1zZShlZVtLXSsrLEspKX19ZnVuY3Rpb24gY2UoKXt2YXIgbCxKLFcsZWUseSxNPW5ldyBBcnJheShjKzEpO2ZvcihXPTAsZWU9MDtlZTxzLTE7ZWUrKylmb3IoVFtlZV09VyxsPTA7bDwxPDxBW2VlXTtsKyspWFtXKytdPWVlO2ZvcihYW1ctMV09ZWUseT0wLGVlPTA7ZWU8MTY7ZWUrKylmb3IoUFtlZV09eSxsPTA7bDwxPDxMW2VlXTtsKyspVVt5KytdPWVlO2Zvcih5Pj49NztlZTxFO2VlKyspZm9yKFBbZWVdPXk8PDcsbD0wO2w8MTw8TFtlZV0tNztsKyspVVsyNTYreSsrXT1lZTtmb3IoSj0wO0o8PWM7SisrKU1bSl09MDtmb3IobD0wO2w8PTE0MzspQ1tsKjIrMV09OCxsKyssTVs4XSsrO2Zvcig7bDw9MjU1OylDW2wqMisxXT05LGwrKyxNWzldKys7Zm9yKDtsPD0yNzk7KUNbbCoyKzFdPTcsbCsrLE1bN10rKztmb3IoO2w8PTI4NzspQ1tsKjIrMV09OCxsKyssTVs4XSsrO2Zvcih4ZShDLHYrMSxNKSxsPTA7bDxFO2wrKylIW2wqMisxXT01LEhbbCoyXT1zZShsLDUpO2FlPW5ldyBaKEMsQSxoKzEsdixjKSwkPW5ldyBaKEgsTCwwLEUsYyksdGU9bmV3IFoobmV3IEFycmF5KDApLEQsMCxkLG4pfWZ1bmN0aW9uIFNlKGwpe3ZhciBKO2ZvcihKPTA7Sjx2O0orKylsLmR5bl9sdHJlZVtKKjJdPTA7Zm9yKEo9MDtKPEU7SisrKWwuZHluX2R0cmVlW0oqMl09MDtmb3IoSj0wO0o8ZDtKKyspbC5ibF90cmVlW0oqMl09MDtsLmR5bl9sdHJlZVt3KjJdPTEsbC5vcHRfbGVuPWwuc3RhdGljX2xlbj0wLGwubGFzdF9saXQ9bC5tYXRjaGVzPTB9ZnVuY3Rpb24gbWUobCl7bC5iaV92YWxpZD44P2ZlKGwsbC5iaV9idWYpOmwuYmlfdmFsaWQ+MCYmKGwucGVuZGluZ19idWZbbC5wZW5kaW5nKytdPWwuYmlfYnVmKSxsLmJpX2J1Zj0wLGwuYmlfdmFsaWQ9MH1mdW5jdGlvbiBSZShsLEosVyxlZSl7bWUobCksZmUobCxXKSxmZShsLH5XKSxtLmFycmF5U2V0KGwucGVuZGluZ19idWYsbC53aW5kb3csSixXLGwucGVuZGluZyksbC5wZW5kaW5nKz1XfWZ1bmN0aW9uIG9lKGwsSixXLGVlKXt2YXIgeT1KKjIsTT1XKjI7cmV0dXJuIGxbeV08bFtNXXx8bFt5XT09PWxbTV0mJmVlW0pdPD1lZVtXXX1mdW5jdGlvbiBxKGwsSixXKXtmb3IodmFyIGVlPWwuaGVhcFtXXSx5PVc8PDE7eTw9bC5oZWFwX2xlbiYmKHk8bC5oZWFwX2xlbiYmb2UoSixsLmhlYXBbeSsxXSxsLmhlYXBbeV0sbC5kZXB0aCkmJnkrKywhb2UoSixlZSxsLmhlYXBbeV0sbC5kZXB0aCkpOylsLmhlYXBbV109bC5oZWFwW3ldLFc9eSx5PDw9MTtsLmhlYXBbV109ZWV9ZnVuY3Rpb24gcmUobCxKLFcpe3ZhciBlZSx5LE09MCxhLEs7aWYobC5sYXN0X2xpdCE9PTApZG8gZWU9bC5wZW5kaW5nX2J1ZltsLmRfYnVmK00qMl08PDh8bC5wZW5kaW5nX2J1ZltsLmRfYnVmK00qMisxXSx5PWwucGVuZGluZ19idWZbbC5sX2J1ZitNXSxNKyssZWU9PT0wP2xlKGwseSxKKTooYT1YW3ldLGxlKGwsYStoKzEsSiksSz1BW2FdLEshPT0wJiYoeS09VFthXSxoZShsLHksSykpLGVlLS0sYT11ZShlZSksbGUobCxhLFcpLEs9TFthXSxLIT09MCYmKGVlLT1QW2FdLGhlKGwsZWUsSykpKTt3aGlsZShNPGwubGFzdF9saXQpO2xlKGwsdyxKKX1mdW5jdGlvbiBkZShsLEope3ZhciBXPUouZHluX3RyZWUsZWU9Si5zdGF0X2Rlc2Muc3RhdGljX3RyZWUseT1KLnN0YXRfZGVzYy5oYXNfc3RyZWUsTT1KLnN0YXRfZGVzYy5lbGVtcyxhLEssbmU9LTEsZTtmb3IobC5oZWFwX2xlbj0wLGwuaGVhcF9tYXg9dSxhPTA7YTxNO2ErKylXW2EqMl0hPT0wPyhsLmhlYXBbKytsLmhlYXBfbGVuXT1uZT1hLGwuZGVwdGhbYV09MCk6V1thKjIrMV09MDtmb3IoO2wuaGVhcF9sZW48MjspZT1sLmhlYXBbKytsLmhlYXBfbGVuXT1uZTwyPysrbmU6MCxXW2UqMl09MSxsLmRlcHRoW2VdPTAsbC5vcHRfbGVuLS0seSYmKGwuc3RhdGljX2xlbi09ZWVbZSoyKzFdKTtmb3IoSi5tYXhfY29kZT1uZSxhPWwuaGVhcF9sZW4+PjE7YT49MTthLS0pcShsLFcsYSk7ZT1NO2RvIGE9bC5oZWFwWzFdLGwuaGVhcFsxXT1sLmhlYXBbbC5oZWFwX2xlbi0tXSxxKGwsVywxKSxLPWwuaGVhcFsxXSxsLmhlYXBbLS1sLmhlYXBfbWF4XT1hLGwuaGVhcFstLWwuaGVhcF9tYXhdPUssV1tlKjJdPVdbYSoyXStXW0sqMl0sbC5kZXB0aFtlXT0obC5kZXB0aFthXT49bC5kZXB0aFtLXT9sLmRlcHRoW2FdOmwuZGVwdGhbS10pKzEsV1thKjIrMV09V1tLKjIrMV09ZSxsLmhlYXBbMV09ZSsrLHEobCxXLDEpO3doaWxlKGwuaGVhcF9sZW4+PTIpO2wuaGVhcFstLWwuaGVhcF9tYXhdPWwuaGVhcFsxXSx6ZShsLEopLHhlKFcsbmUsbC5ibF9jb3VudCl9ZnVuY3Rpb24gd2UobCxKLFcpe3ZhciBlZSx5PS0xLE0sYT1KWzAqMisxXSxLPTAsbmU9NyxlPTQ7Zm9yKGE9PT0wJiYobmU9MTM4LGU9MyksSlsoVysxKSoyKzFdPTY1NTM1LGVlPTA7ZWU8PVc7ZWUrKylNPWEsYT1KWyhlZSsxKSoyKzFdLCEoKytLPG5lJiZNPT09YSkmJihLPGU/bC5ibF90cmVlW00qMl0rPUs6TSE9PTA/KE0hPT15JiZsLmJsX3RyZWVbTSoyXSsrLGwuYmxfdHJlZVtnKjJdKyspOks8PTEwP2wuYmxfdHJlZVtwKjJdKys6bC5ibF90cmVlW1MqMl0rKyxLPTAseT1NLGE9PT0wPyhuZT0xMzgsZT0zKTpNPT09YT8obmU9NixlPTMpOihuZT03LGU9NCkpfWZ1bmN0aW9uIGJlKGwsSixXKXt2YXIgZWUseT0tMSxNLGE9SlswKjIrMV0sSz0wLG5lPTcsZT00O2ZvcihhPT09MCYmKG5lPTEzOCxlPTMpLGVlPTA7ZWU8PVc7ZWUrKylpZihNPWEsYT1KWyhlZSsxKSoyKzFdLCEoKytLPG5lJiZNPT09YSkpe2lmKEs8ZSlkbyBsZShsLE0sbC5ibF90cmVlKTt3aGlsZSgtLUshPT0wKTtlbHNlIE0hPT0wPyhNIT09eSYmKGxlKGwsTSxsLmJsX3RyZWUpLEstLSksbGUobCxnLGwuYmxfdHJlZSksaGUobCxLLTMsMikpOks8PTEwPyhsZShsLHAsbC5ibF90cmVlKSxoZShsLEstMywzKSk6KGxlKGwsUyxsLmJsX3RyZWUpLGhlKGwsSy0xMSw3KSk7Sz0wLHk9TSxhPT09MD8obmU9MTM4LGU9Myk6TT09PWE/KG5lPTYsZT0zKToobmU9NyxlPTQpfX1mdW5jdGlvbiBBZShsKXt2YXIgSjtmb3Iod2UobCxsLmR5bl9sdHJlZSxsLmxfZGVzYy5tYXhfY29kZSksd2UobCxsLmR5bl9kdHJlZSxsLmRfZGVzYy5tYXhfY29kZSksZGUobCxsLmJsX2Rlc2MpLEo9ZC0xO0o+PTMmJmwuYmxfdHJlZVtCW0pdKjIrMV09PT0wO0otLSk7cmV0dXJuIGwub3B0X2xlbis9MyooSisxKSs1KzUrNCxKfWZ1bmN0aW9uICRlKGwsSixXLGVlKXt2YXIgeTtmb3IoaGUobCxKLTI1Nyw1KSxoZShsLFctMSw1KSxoZShsLGVlLTQsNCkseT0wO3k8ZWU7eSsrKWhlKGwsbC5ibF90cmVlW0JbeV0qMisxXSwzKTtiZShsLGwuZHluX2x0cmVlLEotMSksYmUobCxsLmR5bl9kdHJlZSxXLTEpfWZ1bmN0aW9uIGplKGwpe3ZhciBKPTQwOTM2MjQ0NDcsVztmb3IoVz0wO1c8PTMxO1crKyxKPj4+PTEpaWYoSiYxJiZsLmR5bl9sdHJlZVtXKjJdIT09MClyZXR1cm4gWTtpZihsLmR5bl9sdHJlZVs5KjJdIT09MHx8bC5keW5fbHRyZWVbMTAqMl0hPT0wfHxsLmR5bl9sdHJlZVsxMyoyXSE9PTApcmV0dXJuIFI7Zm9yKFc9MzI7VzxoO1crKylpZihsLmR5bl9sdHJlZVtXKjJdIT09MClyZXR1cm4gUjtyZXR1cm4gWX12YXIgQ2U9ITE7ZnVuY3Rpb24gWGUobCl7Q2V8fChjZSgpLENlPSEwKSxsLmxfZGVzYz1uZXcgVihsLmR5bl9sdHJlZSxhZSksbC5kX2Rlc2M9bmV3IFYobC5keW5fZHRyZWUsJCksbC5ibF9kZXNjPW5ldyBWKGwuYmxfdHJlZSx0ZSksbC5iaV9idWY9MCxsLmJpX3ZhbGlkPTAsU2UobCl9ZnVuY3Rpb24gVWUobCxKLFcsZWUpe2hlKGwsKHI8PDEpKyhlZT8xOjApLDMpLFJlKGwsSixXKX1mdW5jdGlvbiBEZShsKXtoZShsLHQ8PDEsMyksbGUobCx3LEMpLGdlKGwpfWZ1bmN0aW9uIEllKGwsSixXLGVlKXt2YXIgeSxNLGE9MDtsLmxldmVsPjA/KGwuc3RybS5kYXRhX3R5cGU9PT1rJiYobC5zdHJtLmRhdGFfdHlwZT1qZShsKSksZGUobCxsLmxfZGVzYyksZGUobCxsLmRfZGVzYyksYT1BZShsKSx5PWwub3B0X2xlbiszKzc+Pj4zLE09bC5zdGF0aWNfbGVuKzMrNz4+PjMsTTw9eSYmKHk9TSkpOnk9TT1XKzUsVys0PD15JiZKIT09LTE/VWUobCxKLFcsZWUpOmwuc3RyYXRlZ3k9PT1HfHxNPT09eT8oaGUobCwodDw8MSkrKGVlPzE6MCksMykscmUobCxDLEgpKTooaGUobCwoaTw8MSkrKGVlPzE6MCksMyksJGUobCxsLmxfZGVzYy5tYXhfY29kZSsxLGwuZF9kZXNjLm1heF9jb2RlKzEsYSsxKSxyZShsLGwuZHluX2x0cmVlLGwuZHluX2R0cmVlKSksU2UobCksZWUmJm1lKGwpfWZ1bmN0aW9uIFZlKGwsSixXKXtyZXR1cm4gbC5wZW5kaW5nX2J1ZltsLmRfYnVmK2wubGFzdF9saXQqMl09Sj4+PjgmMjU1LGwucGVuZGluZ19idWZbbC5kX2J1ZitsLmxhc3RfbGl0KjIrMV09SiYyNTUsbC5wZW5kaW5nX2J1ZltsLmxfYnVmK2wubGFzdF9saXRdPVcmMjU1LGwubGFzdF9saXQrKyxKPT09MD9sLmR5bl9sdHJlZVtXKjJdKys6KGwubWF0Y2hlcysrLEotLSxsLmR5bl9sdHJlZVsoWFtXXStoKzEpKjJdKyssbC5keW5fZHRyZWVbdWUoSikqMl0rKyksbC5sYXN0X2xpdD09PWwubGl0X2J1ZnNpemUtMX1yZXR1cm4gSmUuX3RyX2luaXQ9WGUsSmUuX3RyX3N0b3JlZF9ibG9jaz1VZSxKZS5fdHJfZmx1c2hfYmxvY2s9SWUsSmUuX3RyX3RhbGx5PVZlLEplLl90cl9hbGlnbj1EZSxKZX12YXIgZTAsdTA7ZnVuY3Rpb24gdjAoKXtpZih1MClyZXR1cm4gZTA7dTA9MTtmdW5jdGlvbiBtKEcsWSxSLGspe2Zvcih2YXIgST1HJjY1NTM1fDAscj1HPj4+MTYmNjU1MzV8MCx0PTA7UiE9PTA7KXt0PVI+MmUzPzJlMzpSLFItPXQ7ZG8gST1JK1lbaysrXXwwLHI9citJfDA7d2hpbGUoLS10KTtJJT02NTUyMSxyJT02NTUyMX1yZXR1cm4gSXxyPDwxNnwwfXJldHVybiBlMD1tLGUwfXZhciB0MCxjMDtmdW5jdGlvbiB3MCgpe2lmKGMwKXJldHVybiB0MDtjMD0xO2Z1bmN0aW9uIG0oKXtmb3IodmFyIFIsaz1bXSxJPTA7STwyNTY7SSsrKXtSPUk7Zm9yKHZhciByPTA7cjw4O3IrKylSPVImMT8zOTg4MjkyMzg0XlI+Pj4xOlI+Pj4xO2tbSV09Un1yZXR1cm4ga312YXIgRz1tKCk7ZnVuY3Rpb24gWShSLGssSSxyKXt2YXIgdD1HLGk9citJO1JePS0xO2Zvcih2YXIgYj1yO2I8aTtiKyspUj1SPj4+OF50WyhSXmtbYl0pJjI1NV07cmV0dXJuIFJeLTF9cmV0dXJuIHQwPVksdDB9dmFyIHIwLGIwO2Z1bmN0aW9uIGkwKCl7cmV0dXJuIGIwfHwoYjA9MSxyMD17MjoibmVlZCBkaWN0aW9uYXJ5IiwxOiJzdHJlYW0gZW5kIiwwOiIiLCItMSI6ImZpbGUgZXJyb3IiLCItMiI6InN0cmVhbSBlcnJvciIsIi0zIjoiZGF0YSBlcnJvciIsIi00IjoiaW5zdWZmaWNpZW50IG1lbW9yeSIsIi01IjoiYnVmZmVyIGVycm9yIiwiLTYiOiJpbmNvbXBhdGlibGUgdmVyc2lvbiJ9KSxyMH12YXIgZzA7ZnVuY3Rpb24gSTAoKXtpZihnMClyZXR1cm4gTWU7ZzA9MTt2YXIgbT1IZSgpLEc9bTAoKSxZPXYwKCksUj13MCgpLGs9aTAoKSxJPTAscj0xLHQ9MyxpPTQsYj01LF89MCxzPTEsaD0tMix2PS0zLEU9LTUsZD0tMSx1PTEsYz0yLG89MyxuPTQsdz0wLGc9MixwPTgsUz05LEE9MTUsTD04LEQ9MjksQj0yNTYsaj1CKzErRCxDPTMwLEg9MTksVT0yKmorMSxYPTE1LFQ9MyxQPTI1OCxaPVArVCsxLGFlPTMyLCQ9NDIsdGU9NjksVj03Myx1ZT05MSxmZT0xMDMsaGU9MTEzLGxlPTY2NixzZT0xLGdlPTIsemU9Myx4ZT00LGNlPTM7ZnVuY3Rpb24gU2UoZSxOKXtyZXR1cm4gZS5tc2c9a1tOXSxOfWZ1bmN0aW9uIG1lKGUpe3JldHVybihlPDwxKS0oZT40Pzk6MCl9ZnVuY3Rpb24gUmUoZSl7Zm9yKHZhciBOPWUubGVuZ3RoOy0tTj49MDspZVtOXT0wfWZ1bmN0aW9uIG9lKGUpe3ZhciBOPWUuc3RhdGUsTz1OLnBlbmRpbmc7Tz5lLmF2YWlsX291dCYmKE89ZS5hdmFpbF9vdXQpLE8hPT0wJiYobS5hcnJheVNldChlLm91dHB1dCxOLnBlbmRpbmdfYnVmLE4ucGVuZGluZ19vdXQsTyxlLm5leHRfb3V0KSxlLm5leHRfb3V0Kz1PLE4ucGVuZGluZ19vdXQrPU8sZS50b3RhbF9vdXQrPU8sZS5hdmFpbF9vdXQtPU8sTi5wZW5kaW5nLT1PLE4ucGVuZGluZz09PTAmJihOLnBlbmRpbmdfb3V0PTApKX1mdW5jdGlvbiBxKGUsTil7Ry5fdHJfZmx1c2hfYmxvY2soZSxlLmJsb2NrX3N0YXJ0Pj0wP2UuYmxvY2tfc3RhcnQ6LTEsZS5zdHJzdGFydC1lLmJsb2NrX3N0YXJ0LE4pLGUuYmxvY2tfc3RhcnQ9ZS5zdHJzdGFydCxvZShlLnN0cm0pfWZ1bmN0aW9uIHJlKGUsTil7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109Tn1mdW5jdGlvbiBkZShlLE4pe2UucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPU4+Pj44JjI1NSxlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT1OJjI1NX1mdW5jdGlvbiB3ZShlLE4sTyxmKXt2YXIgeD1lLmF2YWlsX2luO3JldHVybiB4PmYmJih4PWYpLHg9PT0wPzA6KGUuYXZhaWxfaW4tPXgsbS5hcnJheVNldChOLGUuaW5wdXQsZS5uZXh0X2luLHgsTyksZS5zdGF0ZS53cmFwPT09MT9lLmFkbGVyPVkoZS5hZGxlcixOLHgsTyk6ZS5zdGF0ZS53cmFwPT09MiYmKGUuYWRsZXI9UihlLmFkbGVyLE4seCxPKSksZS5uZXh0X2luKz14LGUudG90YWxfaW4rPXgseCl9ZnVuY3Rpb24gYmUoZSxOKXt2YXIgTz1lLm1heF9jaGFpbl9sZW5ndGgsZj1lLnN0cnN0YXJ0LHgseixpZT1lLnByZXZfbGVuZ3RoLFE9ZS5uaWNlX21hdGNoLEY9ZS5zdHJzdGFydD5lLndfc2l6ZS1aP2Uuc3Ryc3RhcnQtKGUud19zaXplLVopOjAsX2U9ZS53aW5kb3csR2U9ZS53X21hc2sscGU9ZS5wcmV2LHZlPWUuc3Ryc3RhcnQrUCxFZT1fZVtmK2llLTFdLEJlPV9lW2YraWVdO2UucHJldl9sZW5ndGg+PWUuZ29vZF9tYXRjaCYmKE8+Pj0yKSxRPmUubG9va2FoZWFkJiYoUT1lLmxvb2thaGVhZCk7ZG8gaWYoeD1OLCEoX2VbeCtpZV0hPT1CZXx8X2VbeCtpZS0xXSE9PUVlfHxfZVt4XSE9PV9lW2ZdfHxfZVsrK3hdIT09X2VbZisxXSkpe2YrPTIseCsrO2RvO3doaWxlKF9lWysrZl09PT1fZVsrK3hdJiZfZVsrK2ZdPT09X2VbKyt4XSYmX2VbKytmXT09PV9lWysreF0mJl9lWysrZl09PT1fZVsrK3hdJiZfZVsrK2ZdPT09X2VbKyt4XSYmX2VbKytmXT09PV9lWysreF0mJl9lWysrZl09PT1fZVsrK3hdJiZfZVsrK2ZdPT09X2VbKyt4XSYmZjx2ZSk7aWYoej1QLSh2ZS1mKSxmPXZlLVAsej5pZSl7aWYoZS5tYXRjaF9zdGFydD1OLGllPXosej49USlicmVhaztFZT1fZVtmK2llLTFdLEJlPV9lW2YraWVdfX13aGlsZSgoTj1wZVtOJkdlXSk+RiYmLS1PIT09MCk7cmV0dXJuIGllPD1lLmxvb2thaGVhZD9pZTplLmxvb2thaGVhZH1mdW5jdGlvbiBBZShlKXt2YXIgTj1lLndfc2l6ZSxPLGYseCx6LGllO2Rve2lmKHo9ZS53aW5kb3dfc2l6ZS1lLmxvb2thaGVhZC1lLnN0cnN0YXJ0LGUuc3Ryc3RhcnQ+PU4rKE4tWikpe20uYXJyYXlTZXQoZS53aW5kb3csZS53aW5kb3csTixOLDApLGUubWF0Y2hfc3RhcnQtPU4sZS5zdHJzdGFydC09TixlLmJsb2NrX3N0YXJ0LT1OLGY9ZS5oYXNoX3NpemUsTz1mO2RvIHg9ZS5oZWFkWy0tT10sZS5oZWFkW09dPXg+PU4/eC1OOjA7d2hpbGUoLS1mKTtmPU4sTz1mO2RvIHg9ZS5wcmV2Wy0tT10sZS5wcmV2W09dPXg+PU4/eC1OOjA7d2hpbGUoLS1mKTt6Kz1OfWlmKGUuc3RybS5hdmFpbF9pbj09PTApYnJlYWs7aWYoZj13ZShlLnN0cm0sZS53aW5kb3csZS5zdHJzdGFydCtlLmxvb2thaGVhZCx6KSxlLmxvb2thaGVhZCs9ZixlLmxvb2thaGVhZCtlLmluc2VydD49VClmb3IoaWU9ZS5zdHJzdGFydC1lLmluc2VydCxlLmluc19oPWUud2luZG93W2llXSxlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbaWUrMV0pJmUuaGFzaF9tYXNrO2UuaW5zZXJ0JiYoZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2llK1QtMV0pJmUuaGFzaF9tYXNrLGUucHJldltpZSZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1pZSxpZSsrLGUuaW5zZXJ0LS0sIShlLmxvb2thaGVhZCtlLmluc2VydDxUKSk7KTt9d2hpbGUoZS5sb29rYWhlYWQ8WiYmZS5zdHJtLmF2YWlsX2luIT09MCl9ZnVuY3Rpb24gJGUoZSxOKXt2YXIgTz02NTUzNTtmb3IoTz5lLnBlbmRpbmdfYnVmX3NpemUtNSYmKE89ZS5wZW5kaW5nX2J1Zl9zaXplLTUpOzspe2lmKGUubG9va2FoZWFkPD0xKXtpZihBZShlKSxlLmxvb2thaGVhZD09PTAmJk49PT1JKXJldHVybiBzZTtpZihlLmxvb2thaGVhZD09PTApYnJlYWt9ZS5zdHJzdGFydCs9ZS5sb29rYWhlYWQsZS5sb29rYWhlYWQ9MDt2YXIgZj1lLmJsb2NrX3N0YXJ0K087aWYoKGUuc3Ryc3RhcnQ9PT0wfHxlLnN0cnN0YXJ0Pj1mKSYmKGUubG9va2FoZWFkPWUuc3Ryc3RhcnQtZixlLnN0cnN0YXJ0PWYscShlLCExKSxlLnN0cm0uYXZhaWxfb3V0PT09MCl8fGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydD49ZS53X3NpemUtWiYmKHEoZSwhMSksZS5zdHJtLmF2YWlsX291dD09PTApKXJldHVybiBzZX1yZXR1cm4gZS5pbnNlcnQ9MCxOPT09aT8ocShlLCEwKSxlLnN0cm0uYXZhaWxfb3V0PT09MD96ZTp4ZSk6KGUuc3Ryc3RhcnQ+ZS5ibG9ja19zdGFydCYmKHEoZSwhMSksZS5zdHJtLmF2YWlsX291dD09PTApLHNlKX1mdW5jdGlvbiBqZShlLE4pe2Zvcih2YXIgTyxmOzspe2lmKGUubG9va2FoZWFkPFope2lmKEFlKGUpLGUubG9va2FoZWFkPFomJk49PT1JKXJldHVybiBzZTtpZihlLmxvb2thaGVhZD09PTApYnJlYWt9aWYoTz0wLGUubG9va2FoZWFkPj1UJiYoZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQrVC0xXSkmZS5oYXNoX21hc2ssTz1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0KSxPIT09MCYmZS5zdHJzdGFydC1PPD1lLndfc2l6ZS1aJiYoZS5tYXRjaF9sZW5ndGg9YmUoZSxPKSksZS5tYXRjaF9sZW5ndGg+PVQpaWYoZj1HLl90cl90YWxseShlLGUuc3Ryc3RhcnQtZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aC1UKSxlLmxvb2thaGVhZC09ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg8PWUubWF4X2xhenlfbWF0Y2gmJmUubG9va2FoZWFkPj1UKXtlLm1hdGNoX2xlbmd0aC0tO2RvIGUuc3Ryc3RhcnQrKyxlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCtULTFdKSZlLmhhc2hfbWFzayxPPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQ7d2hpbGUoLS1lLm1hdGNoX2xlbmd0aCE9PTApO2Uuc3Ryc3RhcnQrK31lbHNlIGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTAsZS5pbnNfaD1lLndpbmRvd1tlLnN0cnN0YXJ0XSxlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCsxXSkmZS5oYXNoX21hc2s7ZWxzZSBmPUcuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0Kys7aWYoZiYmKHEoZSwhMSksZS5zdHJtLmF2YWlsX291dD09PTApKXJldHVybiBzZX1yZXR1cm4gZS5pbnNlcnQ9ZS5zdHJzdGFydDxULTE/ZS5zdHJzdGFydDpULTEsTj09PWk/KHEoZSwhMCksZS5zdHJtLmF2YWlsX291dD09PTA/emU6eGUpOmUubGFzdF9saXQmJihxKGUsITEpLGUuc3RybS5hdmFpbF9vdXQ9PT0wKT9zZTpnZX1mdW5jdGlvbiBDZShlLE4pe2Zvcih2YXIgTyxmLHg7Oyl7aWYoZS5sb29rYWhlYWQ8Wil7aWYoQWUoZSksZS5sb29rYWhlYWQ8WiYmTj09PUkpcmV0dXJuIHNlO2lmKGUubG9va2FoZWFkPT09MClicmVha31pZihPPTAsZS5sb29rYWhlYWQ+PVQmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCtULTFdKSZlLmhhc2hfbWFzayxPPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLGUucHJldl9sZW5ndGg9ZS5tYXRjaF9sZW5ndGgsZS5wcmV2X21hdGNoPWUubWF0Y2hfc3RhcnQsZS5tYXRjaF9sZW5ndGg9VC0xLE8hPT0wJiZlLnByZXZfbGVuZ3RoPGUubWF4X2xhenlfbWF0Y2gmJmUuc3Ryc3RhcnQtTzw9ZS53X3NpemUtWiYmKGUubWF0Y2hfbGVuZ3RoPWJlKGUsTyksZS5tYXRjaF9sZW5ndGg8PTUmJihlLnN0cmF0ZWd5PT09dXx8ZS5tYXRjaF9sZW5ndGg9PT1UJiZlLnN0cnN0YXJ0LWUubWF0Y2hfc3RhcnQ+NDA5NikmJihlLm1hdGNoX2xlbmd0aD1ULTEpKSxlLnByZXZfbGVuZ3RoPj1UJiZlLm1hdGNoX2xlbmd0aDw9ZS5wcmV2X2xlbmd0aCl7eD1lLnN0cnN0YXJ0K2UubG9va2FoZWFkLVQsZj1HLl90cl90YWxseShlLGUuc3Ryc3RhcnQtMS1lLnByZXZfbWF0Y2gsZS5wcmV2X2xlbmd0aC1UKSxlLmxvb2thaGVhZC09ZS5wcmV2X2xlbmd0aC0xLGUucHJldl9sZW5ndGgtPTI7ZG8rK2Uuc3Ryc3RhcnQ8PXgmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCtULTFdKSZlLmhhc2hfbWFzayxPPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpO3doaWxlKC0tZS5wcmV2X2xlbmd0aCE9PTApO2lmKGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5tYXRjaF9sZW5ndGg9VC0xLGUuc3Ryc3RhcnQrKyxmJiYocShlLCExKSxlLnN0cm0uYXZhaWxfb3V0PT09MCkpcmV0dXJuIHNlfWVsc2UgaWYoZS5tYXRjaF9hdmFpbGFibGUpe2lmKGY9Ry5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnQtMV0pLGYmJnEoZSwhMSksZS5zdHJzdGFydCsrLGUubG9va2FoZWFkLS0sZS5zdHJtLmF2YWlsX291dD09PTApcmV0dXJuIHNlfWVsc2UgZS5tYXRjaF9hdmFpbGFibGU9MSxlLnN0cnN0YXJ0KyssZS5sb29rYWhlYWQtLX1yZXR1cm4gZS5tYXRjaF9hdmFpbGFibGUmJihmPUcuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0LTFdKSxlLm1hdGNoX2F2YWlsYWJsZT0wKSxlLmluc2VydD1lLnN0cnN0YXJ0PFQtMT9lLnN0cnN0YXJ0OlQtMSxOPT09aT8ocShlLCEwKSxlLnN0cm0uYXZhaWxfb3V0PT09MD96ZTp4ZSk6ZS5sYXN0X2xpdCYmKHEoZSwhMSksZS5zdHJtLmF2YWlsX291dD09PTApP3NlOmdlfWZ1bmN0aW9uIFhlKGUsTil7Zm9yKHZhciBPLGYseCx6LGllPWUud2luZG93Ozspe2lmKGUubG9va2FoZWFkPD1QKXtpZihBZShlKSxlLmxvb2thaGVhZDw9UCYmTj09PUkpcmV0dXJuIHNlO2lmKGUubG9va2FoZWFkPT09MClicmVha31pZihlLm1hdGNoX2xlbmd0aD0wLGUubG9va2FoZWFkPj1UJiZlLnN0cnN0YXJ0PjAmJih4PWUuc3Ryc3RhcnQtMSxmPWllW3hdLGY9PT1pZVsrK3hdJiZmPT09aWVbKyt4XSYmZj09PWllWysreF0pKXt6PWUuc3Ryc3RhcnQrUDtkbzt3aGlsZShmPT09aWVbKyt4XSYmZj09PWllWysreF0mJmY9PT1pZVsrK3hdJiZmPT09aWVbKyt4XSYmZj09PWllWysreF0mJmY9PT1pZVsrK3hdJiZmPT09aWVbKyt4XSYmZj09PWllWysreF0mJng8eik7ZS5tYXRjaF9sZW5ndGg9UC0oei14KSxlLm1hdGNoX2xlbmd0aD5lLmxvb2thaGVhZCYmKGUubWF0Y2hfbGVuZ3RoPWUubG9va2FoZWFkKX1pZihlLm1hdGNoX2xlbmd0aD49VD8oTz1HLl90cl90YWxseShlLDEsZS5tYXRjaF9sZW5ndGgtVCksZS5sb29rYWhlYWQtPWUubWF0Y2hfbGVuZ3RoLGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTApOihPPUcuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyspLE8mJihxKGUsITEpLGUuc3RybS5hdmFpbF9vdXQ9PT0wKSlyZXR1cm4gc2V9cmV0dXJuIGUuaW5zZXJ0PTAsTj09PWk/KHEoZSwhMCksZS5zdHJtLmF2YWlsX291dD09PTA/emU6eGUpOmUubGFzdF9saXQmJihxKGUsITEpLGUuc3RybS5hdmFpbF9vdXQ9PT0wKT9zZTpnZX1mdW5jdGlvbiBVZShlLE4pe2Zvcih2YXIgTzs7KXtpZihlLmxvb2thaGVhZD09PTAmJihBZShlKSxlLmxvb2thaGVhZD09PTApKXtpZihOPT09SSlyZXR1cm4gc2U7YnJlYWt9aWYoZS5tYXRjaF9sZW5ndGg9MCxPPUcuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyssTyYmKHEoZSwhMSksZS5zdHJtLmF2YWlsX291dD09PTApKXJldHVybiBzZX1yZXR1cm4gZS5pbnNlcnQ9MCxOPT09aT8ocShlLCEwKSxlLnN0cm0uYXZhaWxfb3V0PT09MD96ZTp4ZSk6ZS5sYXN0X2xpdCYmKHEoZSwhMSksZS5zdHJtLmF2YWlsX291dD09PTApP3NlOmdlfWZ1bmN0aW9uIERlKGUsTixPLGYseCl7dGhpcy5nb29kX2xlbmd0aD1lLHRoaXMubWF4X2xhenk9Tix0aGlzLm5pY2VfbGVuZ3RoPU8sdGhpcy5tYXhfY2hhaW49Zix0aGlzLmZ1bmM9eH12YXIgSWU7SWU9W25ldyBEZSgwLDAsMCwwLCRlKSxuZXcgRGUoNCw0LDgsNCxqZSksbmV3IERlKDQsNSwxNiw4LGplKSxuZXcgRGUoNCw2LDMyLDMyLGplKSxuZXcgRGUoNCw0LDE2LDE2LENlKSxuZXcgRGUoOCwxNiwzMiwzMixDZSksbmV3IERlKDgsMTYsMTI4LDEyOCxDZSksbmV3IERlKDgsMzIsMTI4LDI1NixDZSksbmV3IERlKDMyLDEyOCwyNTgsMTAyNCxDZSksbmV3IERlKDMyLDI1OCwyNTgsNDA5NixDZSldO2Z1bmN0aW9uIFZlKGUpe2Uud2luZG93X3NpemU9MiplLndfc2l6ZSxSZShlLmhlYWQpLGUubWF4X2xhenlfbWF0Y2g9SWVbZS5sZXZlbF0ubWF4X2xhenksZS5nb29kX21hdGNoPUllW2UubGV2ZWxdLmdvb2RfbGVuZ3RoLGUubmljZV9tYXRjaD1JZVtlLmxldmVsXS5uaWNlX2xlbmd0aCxlLm1heF9jaGFpbl9sZW5ndGg9SWVbZS5sZXZlbF0ubWF4X2NoYWluLGUuc3Ryc3RhcnQ9MCxlLmJsb2NrX3N0YXJ0PTAsZS5sb29rYWhlYWQ9MCxlLmluc2VydD0wLGUubWF0Y2hfbGVuZ3RoPWUucHJldl9sZW5ndGg9VC0xLGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5pbnNfaD0wfWZ1bmN0aW9uIGwoKXt0aGlzLnN0cm09bnVsbCx0aGlzLnN0YXR1cz0wLHRoaXMucGVuZGluZ19idWY9bnVsbCx0aGlzLnBlbmRpbmdfYnVmX3NpemU9MCx0aGlzLnBlbmRpbmdfb3V0PTAsdGhpcy5wZW5kaW5nPTAsdGhpcy53cmFwPTAsdGhpcy5nemhlYWQ9bnVsbCx0aGlzLmd6aW5kZXg9MCx0aGlzLm1ldGhvZD1wLHRoaXMubGFzdF9mbHVzaD0tMSx0aGlzLndfc2l6ZT0wLHRoaXMud19iaXRzPTAsdGhpcy53X21hc2s9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMud2luZG93X3NpemU9MCx0aGlzLnByZXY9bnVsbCx0aGlzLmhlYWQ9bnVsbCx0aGlzLmluc19oPTAsdGhpcy5oYXNoX3NpemU9MCx0aGlzLmhhc2hfYml0cz0wLHRoaXMuaGFzaF9tYXNrPTAsdGhpcy5oYXNoX3NoaWZ0PTAsdGhpcy5ibG9ja19zdGFydD0wLHRoaXMubWF0Y2hfbGVuZ3RoPTAsdGhpcy5wcmV2X21hdGNoPTAsdGhpcy5tYXRjaF9hdmFpbGFibGU9MCx0aGlzLnN0cnN0YXJ0PTAsdGhpcy5tYXRjaF9zdGFydD0wLHRoaXMubG9va2FoZWFkPTAsdGhpcy5wcmV2X2xlbmd0aD0wLHRoaXMubWF4X2NoYWluX2xlbmd0aD0wLHRoaXMubWF4X2xhenlfbWF0Y2g9MCx0aGlzLmxldmVsPTAsdGhpcy5zdHJhdGVneT0wLHRoaXMuZ29vZF9tYXRjaD0wLHRoaXMubmljZV9tYXRjaD0wLHRoaXMuZHluX2x0cmVlPW5ldyBtLkJ1ZjE2KFUqMiksdGhpcy5keW5fZHRyZWU9bmV3IG0uQnVmMTYoKDIqQysxKSoyKSx0aGlzLmJsX3RyZWU9bmV3IG0uQnVmMTYoKDIqSCsxKSoyKSxSZSh0aGlzLmR5bl9sdHJlZSksUmUodGhpcy5keW5fZHRyZWUpLFJlKHRoaXMuYmxfdHJlZSksdGhpcy5sX2Rlc2M9bnVsbCx0aGlzLmRfZGVzYz1udWxsLHRoaXMuYmxfZGVzYz1udWxsLHRoaXMuYmxfY291bnQ9bmV3IG0uQnVmMTYoWCsxKSx0aGlzLmhlYXA9bmV3IG0uQnVmMTYoMipqKzEpLFJlKHRoaXMuaGVhcCksdGhpcy5oZWFwX2xlbj0wLHRoaXMuaGVhcF9tYXg9MCx0aGlzLmRlcHRoPW5ldyBtLkJ1ZjE2KDIqaisxKSxSZSh0aGlzLmRlcHRoKSx0aGlzLmxfYnVmPTAsdGhpcy5saXRfYnVmc2l6ZT0wLHRoaXMubGFzdF9saXQ9MCx0aGlzLmRfYnVmPTAsdGhpcy5vcHRfbGVuPTAsdGhpcy5zdGF0aWNfbGVuPTAsdGhpcy5tYXRjaGVzPTAsdGhpcy5pbnNlcnQ9MCx0aGlzLmJpX2J1Zj0wLHRoaXMuYmlfdmFsaWQ9MH1mdW5jdGlvbiBKKGUpe3ZhciBOO3JldHVybiFlfHwhZS5zdGF0ZT9TZShlLGgpOihlLnRvdGFsX2luPWUudG90YWxfb3V0PTAsZS5kYXRhX3R5cGU9ZyxOPWUuc3RhdGUsTi5wZW5kaW5nPTAsTi5wZW5kaW5nX291dD0wLE4ud3JhcDwwJiYoTi53cmFwPS1OLndyYXApLE4uc3RhdHVzPU4ud3JhcD8kOmhlLGUuYWRsZXI9Ti53cmFwPT09Mj8wOjEsTi5sYXN0X2ZsdXNoPUksRy5fdHJfaW5pdChOKSxfKX1mdW5jdGlvbiBXKGUpe3ZhciBOPUooZSk7cmV0dXJuIE49PT1fJiZWZShlLnN0YXRlKSxOfWZ1bmN0aW9uIGVlKGUsTil7cmV0dXJuIWV8fCFlLnN0YXRlfHxlLnN0YXRlLndyYXAhPT0yP2g6KGUuc3RhdGUuZ3poZWFkPU4sXyl9ZnVuY3Rpb24geShlLE4sTyxmLHgseil7aWYoIWUpcmV0dXJuIGg7dmFyIGllPTE7aWYoTj09PWQmJihOPTYpLGY8MD8oaWU9MCxmPS1mKTpmPjE1JiYoaWU9MixmLT0xNikseDwxfHx4PlN8fE8hPT1wfHxmPDh8fGY+MTV8fE48MHx8Tj45fHx6PDB8fHo+bilyZXR1cm4gU2UoZSxoKTtmPT09OCYmKGY9OSk7dmFyIFE9bmV3IGw7cmV0dXJuIGUuc3RhdGU9USxRLnN0cm09ZSxRLndyYXA9aWUsUS5nemhlYWQ9bnVsbCxRLndfYml0cz1mLFEud19zaXplPTE8PFEud19iaXRzLFEud19tYXNrPVEud19zaXplLTEsUS5oYXNoX2JpdHM9eCs3LFEuaGFzaF9zaXplPTE8PFEuaGFzaF9iaXRzLFEuaGFzaF9tYXNrPVEuaGFzaF9zaXplLTEsUS5oYXNoX3NoaWZ0PX5+KChRLmhhc2hfYml0cytULTEpL1QpLFEud2luZG93PW5ldyBtLkJ1ZjgoUS53X3NpemUqMiksUS5oZWFkPW5ldyBtLkJ1ZjE2KFEuaGFzaF9zaXplKSxRLnByZXY9bmV3IG0uQnVmMTYoUS53X3NpemUpLFEubGl0X2J1ZnNpemU9MTw8eCs2LFEucGVuZGluZ19idWZfc2l6ZT1RLmxpdF9idWZzaXplKjQsUS5wZW5kaW5nX2J1Zj1uZXcgbS5CdWY4KFEucGVuZGluZ19idWZfc2l6ZSksUS5kX2J1Zj0xKlEubGl0X2J1ZnNpemUsUS5sX2J1Zj0zKlEubGl0X2J1ZnNpemUsUS5sZXZlbD1OLFEuc3RyYXRlZ3k9eixRLm1ldGhvZD1PLFcoZSl9ZnVuY3Rpb24gTShlLE4pe3JldHVybiB5KGUsTixwLEEsTCx3KX1mdW5jdGlvbiBhKGUsTil7dmFyIE8sZix4LHo7aWYoIWV8fCFlLnN0YXRlfHxOPmJ8fE48MClyZXR1cm4gZT9TZShlLGgpOmg7aWYoZj1lLnN0YXRlLCFlLm91dHB1dHx8IWUuaW5wdXQmJmUuYXZhaWxfaW4hPT0wfHxmLnN0YXR1cz09PWxlJiZOIT09aSlyZXR1cm4gU2UoZSxlLmF2YWlsX291dD09PTA/RTpoKTtpZihmLnN0cm09ZSxPPWYubGFzdF9mbHVzaCxmLmxhc3RfZmx1c2g9TixmLnN0YXR1cz09PSQpaWYoZi53cmFwPT09MillLmFkbGVyPTAscmUoZiwzMSkscmUoZiwxMzkpLHJlKGYsOCksZi5nemhlYWQ/KHJlKGYsKGYuZ3poZWFkLnRleHQ/MTowKSsoZi5nemhlYWQuaGNyYz8yOjApKyhmLmd6aGVhZC5leHRyYT80OjApKyhmLmd6aGVhZC5uYW1lPzg6MCkrKGYuZ3poZWFkLmNvbW1lbnQ/MTY6MCkpLHJlKGYsZi5nemhlYWQudGltZSYyNTUpLHJlKGYsZi5nemhlYWQudGltZT4+OCYyNTUpLHJlKGYsZi5nemhlYWQudGltZT4+MTYmMjU1KSxyZShmLGYuZ3poZWFkLnRpbWU+PjI0JjI1NSkscmUoZixmLmxldmVsPT09OT8yOmYuc3RyYXRlZ3k+PWN8fGYubGV2ZWw8Mj80OjApLHJlKGYsZi5nemhlYWQub3MmMjU1KSxmLmd6aGVhZC5leHRyYSYmZi5nemhlYWQuZXh0cmEubGVuZ3RoJiYocmUoZixmLmd6aGVhZC5leHRyYS5sZW5ndGgmMjU1KSxyZShmLGYuZ3poZWFkLmV4dHJhLmxlbmd0aD4+OCYyNTUpKSxmLmd6aGVhZC5oY3JjJiYoZS5hZGxlcj1SKGUuYWRsZXIsZi5wZW5kaW5nX2J1ZixmLnBlbmRpbmcsMCkpLGYuZ3ppbmRleD0wLGYuc3RhdHVzPXRlKToocmUoZiwwKSxyZShmLDApLHJlKGYsMCkscmUoZiwwKSxyZShmLDApLHJlKGYsZi5sZXZlbD09PTk/MjpmLnN0cmF0ZWd5Pj1jfHxmLmxldmVsPDI/NDowKSxyZShmLGNlKSxmLnN0YXR1cz1oZSk7ZWxzZXt2YXIgaWU9cCsoZi53X2JpdHMtODw8NCk8PDgsUT0tMTtmLnN0cmF0ZWd5Pj1jfHxmLmxldmVsPDI/UT0wOmYubGV2ZWw8Nj9RPTE6Zi5sZXZlbD09PTY/UT0yOlE9MyxpZXw9UTw8NixmLnN0cnN0YXJ0IT09MCYmKGllfD1hZSksaWUrPTMxLWllJTMxLGYuc3RhdHVzPWhlLGRlKGYsaWUpLGYuc3Ryc3RhcnQhPT0wJiYoZGUoZixlLmFkbGVyPj4+MTYpLGRlKGYsZS5hZGxlciY2NTUzNSkpLGUuYWRsZXI9MX1pZihmLnN0YXR1cz09PXRlKWlmKGYuZ3poZWFkLmV4dHJhKXtmb3IoeD1mLnBlbmRpbmc7Zi5nemluZGV4PChmLmd6aGVhZC5leHRyYS5sZW5ndGgmNjU1MzUpJiYhKGYucGVuZGluZz09PWYucGVuZGluZ19idWZfc2l6ZSYmKGYuZ3poZWFkLmhjcmMmJmYucGVuZGluZz54JiYoZS5hZGxlcj1SKGUuYWRsZXIsZi5wZW5kaW5nX2J1ZixmLnBlbmRpbmcteCx4KSksb2UoZSkseD1mLnBlbmRpbmcsZi5wZW5kaW5nPT09Zi5wZW5kaW5nX2J1Zl9zaXplKSk7KXJlKGYsZi5nemhlYWQuZXh0cmFbZi5nemluZGV4XSYyNTUpLGYuZ3ppbmRleCsrO2YuZ3poZWFkLmhjcmMmJmYucGVuZGluZz54JiYoZS5hZGxlcj1SKGUuYWRsZXIsZi5wZW5kaW5nX2J1ZixmLnBlbmRpbmcteCx4KSksZi5nemluZGV4PT09Zi5nemhlYWQuZXh0cmEubGVuZ3RoJiYoZi5nemluZGV4PTAsZi5zdGF0dXM9Vil9ZWxzZSBmLnN0YXR1cz1WO2lmKGYuc3RhdHVzPT09VilpZihmLmd6aGVhZC5uYW1lKXt4PWYucGVuZGluZztkb3tpZihmLnBlbmRpbmc9PT1mLnBlbmRpbmdfYnVmX3NpemUmJihmLmd6aGVhZC5oY3JjJiZmLnBlbmRpbmc+eCYmKGUuYWRsZXI9UihlLmFkbGVyLGYucGVuZGluZ19idWYsZi5wZW5kaW5nLXgseCkpLG9lKGUpLHg9Zi5wZW5kaW5nLGYucGVuZGluZz09PWYucGVuZGluZ19idWZfc2l6ZSkpe3o9MTticmVha31mLmd6aW5kZXg8Zi5nemhlYWQubmFtZS5sZW5ndGg/ej1mLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQoZi5nemluZGV4KyspJjI1NTp6PTAscmUoZix6KX13aGlsZSh6IT09MCk7Zi5nemhlYWQuaGNyYyYmZi5wZW5kaW5nPngmJihlLmFkbGVyPVIoZS5hZGxlcixmLnBlbmRpbmdfYnVmLGYucGVuZGluZy14LHgpKSx6PT09MCYmKGYuZ3ppbmRleD0wLGYuc3RhdHVzPXVlKX1lbHNlIGYuc3RhdHVzPXVlO2lmKGYuc3RhdHVzPT09dWUpaWYoZi5nemhlYWQuY29tbWVudCl7eD1mLnBlbmRpbmc7ZG97aWYoZi5wZW5kaW5nPT09Zi5wZW5kaW5nX2J1Zl9zaXplJiYoZi5nemhlYWQuaGNyYyYmZi5wZW5kaW5nPngmJihlLmFkbGVyPVIoZS5hZGxlcixmLnBlbmRpbmdfYnVmLGYucGVuZGluZy14LHgpKSxvZShlKSx4PWYucGVuZGluZyxmLnBlbmRpbmc9PT1mLnBlbmRpbmdfYnVmX3NpemUpKXt6PTE7YnJlYWt9Zi5nemluZGV4PGYuZ3poZWFkLmNvbW1lbnQubGVuZ3RoP3o9Zi5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KGYuZ3ppbmRleCsrKSYyNTU6ej0wLHJlKGYseil9d2hpbGUoeiE9PTApO2YuZ3poZWFkLmhjcmMmJmYucGVuZGluZz54JiYoZS5hZGxlcj1SKGUuYWRsZXIsZi5wZW5kaW5nX2J1ZixmLnBlbmRpbmcteCx4KSksej09PTAmJihmLnN0YXR1cz1mZSl9ZWxzZSBmLnN0YXR1cz1mZTtpZihmLnN0YXR1cz09PWZlJiYoZi5nemhlYWQuaGNyYz8oZi5wZW5kaW5nKzI+Zi5wZW5kaW5nX2J1Zl9zaXplJiZvZShlKSxmLnBlbmRpbmcrMjw9Zi5wZW5kaW5nX2J1Zl9zaXplJiYocmUoZixlLmFkbGVyJjI1NSkscmUoZixlLmFkbGVyPj44JjI1NSksZS5hZGxlcj0wLGYuc3RhdHVzPWhlKSk6Zi5zdGF0dXM9aGUpLGYucGVuZGluZyE9PTApe2lmKG9lKGUpLGUuYXZhaWxfb3V0PT09MClyZXR1cm4gZi5sYXN0X2ZsdXNoPS0xLF99ZWxzZSBpZihlLmF2YWlsX2luPT09MCYmbWUoTik8PW1lKE8pJiZOIT09aSlyZXR1cm4gU2UoZSxFKTtpZihmLnN0YXR1cz09PWxlJiZlLmF2YWlsX2luIT09MClyZXR1cm4gU2UoZSxFKTtpZihlLmF2YWlsX2luIT09MHx8Zi5sb29rYWhlYWQhPT0wfHxOIT09SSYmZi5zdGF0dXMhPT1sZSl7dmFyIEY9Zi5zdHJhdGVneT09PWM/VWUoZixOKTpmLnN0cmF0ZWd5PT09bz9YZShmLE4pOkllW2YubGV2ZWxdLmZ1bmMoZixOKTtpZigoRj09PXplfHxGPT09eGUpJiYoZi5zdGF0dXM9bGUpLEY9PT1zZXx8Rj09PXplKXJldHVybiBlLmF2YWlsX291dD09PTAmJihmLmxhc3RfZmx1c2g9LTEpLF87aWYoRj09PWdlJiYoTj09PXI/Ry5fdHJfYWxpZ24oZik6TiE9PWImJihHLl90cl9zdG9yZWRfYmxvY2soZiwwLDAsITEpLE49PT10JiYoUmUoZi5oZWFkKSxmLmxvb2thaGVhZD09PTAmJihmLnN0cnN0YXJ0PTAsZi5ibG9ja19zdGFydD0wLGYuaW5zZXJ0PTApKSksb2UoZSksZS5hdmFpbF9vdXQ9PT0wKSlyZXR1cm4gZi5sYXN0X2ZsdXNoPS0xLF99cmV0dXJuIE4hPT1pP186Zi53cmFwPD0wP3M6KGYud3JhcD09PTI/KHJlKGYsZS5hZGxlciYyNTUpLHJlKGYsZS5hZGxlcj4+OCYyNTUpLHJlKGYsZS5hZGxlcj4+MTYmMjU1KSxyZShmLGUuYWRsZXI+PjI0JjI1NSkscmUoZixlLnRvdGFsX2luJjI1NSkscmUoZixlLnRvdGFsX2luPj44JjI1NSkscmUoZixlLnRvdGFsX2luPj4xNiYyNTUpLHJlKGYsZS50b3RhbF9pbj4+MjQmMjU1KSk6KGRlKGYsZS5hZGxlcj4+PjE2KSxkZShmLGUuYWRsZXImNjU1MzUpKSxvZShlKSxmLndyYXA+MCYmKGYud3JhcD0tZi53cmFwKSxmLnBlbmRpbmchPT0wP186cyl9ZnVuY3Rpb24gSyhlKXt2YXIgTjtyZXR1cm4hZXx8IWUuc3RhdGU/aDooTj1lLnN0YXRlLnN0YXR1cyxOIT09JCYmTiE9PXRlJiZOIT09ViYmTiE9PXVlJiZOIT09ZmUmJk4hPT1oZSYmTiE9PWxlP1NlKGUsaCk6KGUuc3RhdGU9bnVsbCxOPT09aGU/U2UoZSx2KTpfKSl9ZnVuY3Rpb24gbmUoZSxOKXt2YXIgTz1OLmxlbmd0aCxmLHgseixpZSxRLEYsX2UsR2U7aWYoIWV8fCFlLnN0YXRlfHwoZj1lLnN0YXRlLGllPWYud3JhcCxpZT09PTJ8fGllPT09MSYmZi5zdGF0dXMhPT0kfHxmLmxvb2thaGVhZCkpcmV0dXJuIGg7Zm9yKGllPT09MSYmKGUuYWRsZXI9WShlLmFkbGVyLE4sTywwKSksZi53cmFwPTAsTz49Zi53X3NpemUmJihpZT09PTAmJihSZShmLmhlYWQpLGYuc3Ryc3RhcnQ9MCxmLmJsb2NrX3N0YXJ0PTAsZi5pbnNlcnQ9MCksR2U9bmV3IG0uQnVmOChmLndfc2l6ZSksbS5hcnJheVNldChHZSxOLE8tZi53X3NpemUsZi53X3NpemUsMCksTj1HZSxPPWYud19zaXplKSxRPWUuYXZhaWxfaW4sRj1lLm5leHRfaW4sX2U9ZS5pbnB1dCxlLmF2YWlsX2luPU8sZS5uZXh0X2luPTAsZS5pbnB1dD1OLEFlKGYpO2YubG9va2FoZWFkPj1UOyl7eD1mLnN0cnN0YXJ0LHo9Zi5sb29rYWhlYWQtKFQtMSk7ZG8gZi5pbnNfaD0oZi5pbnNfaDw8Zi5oYXNoX3NoaWZ0XmYud2luZG93W3grVC0xXSkmZi5oYXNoX21hc2ssZi5wcmV2W3gmZi53X21hc2tdPWYuaGVhZFtmLmluc19oXSxmLmhlYWRbZi5pbnNfaF09eCx4Kys7d2hpbGUoLS16KTtmLnN0cnN0YXJ0PXgsZi5sb29rYWhlYWQ9VC0xLEFlKGYpfXJldHVybiBmLnN0cnN0YXJ0Kz1mLmxvb2thaGVhZCxmLmJsb2NrX3N0YXJ0PWYuc3Ryc3RhcnQsZi5pbnNlcnQ9Zi5sb29rYWhlYWQsZi5sb29rYWhlYWQ9MCxmLm1hdGNoX2xlbmd0aD1mLnByZXZfbGVuZ3RoPVQtMSxmLm1hdGNoX2F2YWlsYWJsZT0wLGUubmV4dF9pbj1GLGUuaW5wdXQ9X2UsZS5hdmFpbF9pbj1RLGYud3JhcD1pZSxffXJldHVybiBNZS5kZWZsYXRlSW5pdD1NLE1lLmRlZmxhdGVJbml0Mj15LE1lLmRlZmxhdGVSZXNldD1XLE1lLmRlZmxhdGVSZXNldEtlZXA9SixNZS5kZWZsYXRlU2V0SGVhZGVyPWVlLE1lLmRlZmxhdGU9YSxNZS5kZWZsYXRlRW5kPUssTWUuZGVmbGF0ZVNldERpY3Rpb25hcnk9bmUsTWUuZGVmbGF0ZUluZm89InBha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdCkiLE1lfXZhciBLZT17fSxwMDtmdW5jdGlvbiB4MCgpe2lmKHAwKXJldHVybiBLZTtwMD0xO3ZhciBtPUhlKCksRz0hMCxZPSEwO3RyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsWzBdKX1jYXRjaHtHPSExfXRyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpfWNhdGNoe1k9ITF9Zm9yKHZhciBSPW5ldyBtLkJ1ZjgoMjU2KSxrPTA7azwyNTY7aysrKVJba109az49MjUyPzY6az49MjQ4PzU6az49MjQwPzQ6az49MjI0PzM6az49MTkyPzI6MTtSWzI1NF09UlsyNTRdPTEsS2Uuc3RyaW5nMmJ1Zj1mdW5jdGlvbihyKXt2YXIgdCxpLGIsXyxzLGg9ci5sZW5ndGgsdj0wO2ZvcihfPTA7XzxoO18rKylpPXIuY2hhckNvZGVBdChfKSwoaSY2NDUxMik9PT01NTI5NiYmXysxPGgmJihiPXIuY2hhckNvZGVBdChfKzEpLChiJjY0NTEyKT09PTU2MzIwJiYoaT02NTUzNisoaS01NTI5Njw8MTApKyhiLTU2MzIwKSxfKyspKSx2Kz1pPDEyOD8xOmk8MjA0OD8yOmk8NjU1MzY/Mzo0O2Zvcih0PW5ldyBtLkJ1Zjgodikscz0wLF89MDtzPHY7XysrKWk9ci5jaGFyQ29kZUF0KF8pLChpJjY0NTEyKT09PTU1Mjk2JiZfKzE8aCYmKGI9ci5jaGFyQ29kZUF0KF8rMSksKGImNjQ1MTIpPT09NTYzMjAmJihpPTY1NTM2KyhpLTU1Mjk2PDwxMCkrKGItNTYzMjApLF8rKykpLGk8MTI4P3RbcysrXT1pOmk8MjA0OD8odFtzKytdPTE5MnxpPj4+Nix0W3MrK109MTI4fGkmNjMpOmk8NjU1MzY/KHRbcysrXT0yMjR8aT4+PjEyLHRbcysrXT0xMjh8aT4+PjYmNjMsdFtzKytdPTEyOHxpJjYzKToodFtzKytdPTI0MHxpPj4+MTgsdFtzKytdPTEyOHxpPj4+MTImNjMsdFtzKytdPTEyOHxpPj4+NiY2Myx0W3MrK109MTI4fGkmNjMpO3JldHVybiB0fTtmdW5jdGlvbiBJKHIsdCl7aWYodDw2NTUzNCYmKHIuc3ViYXJyYXkmJll8fCFyLnN1YmFycmF5JiZHKSlyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG0uc2hyaW5rQnVmKHIsdCkpO2Zvcih2YXIgaT0iIixiPTA7Yjx0O2IrKylpKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJbYl0pO3JldHVybiBpfXJldHVybiBLZS5idWYyYmluc3RyaW5nPWZ1bmN0aW9uKHIpe3JldHVybiBJKHIsci5sZW5ndGgpfSxLZS5iaW5zdHJpbmcyYnVmPWZ1bmN0aW9uKHIpe2Zvcih2YXIgdD1uZXcgbS5CdWY4KHIubGVuZ3RoKSxpPTAsYj10Lmxlbmd0aDtpPGI7aSsrKXRbaV09ci5jaGFyQ29kZUF0KGkpO3JldHVybiB0fSxLZS5idWYyc3RyaW5nPWZ1bmN0aW9uKHIsdCl7dmFyIGksYixfLHMsaD10fHxyLmxlbmd0aCx2PW5ldyBBcnJheShoKjIpO2ZvcihiPTAsaT0wO2k8aDspe2lmKF89cltpKytdLF88MTI4KXt2W2IrK109Xztjb250aW51ZX1pZihzPVJbX10scz40KXt2W2IrK109NjU1MzMsaSs9cy0xO2NvbnRpbnVlfWZvcihfJj1zPT09Mj8zMTpzPT09Mz8xNTo3O3M+MSYmaTxoOylfPV88PDZ8cltpKytdJjYzLHMtLTtpZihzPjEpe3ZbYisrXT02NTUzMztjb250aW51ZX1fPDY1NTM2P3ZbYisrXT1fOihfLT02NTUzNix2W2IrK109NTUyOTZ8Xz4+MTAmMTAyMyx2W2IrK109NTYzMjB8XyYxMDIzKX1yZXR1cm4gSSh2LGIpfSxLZS51dGY4Ym9yZGVyPWZ1bmN0aW9uKHIsdCl7dmFyIGk7Zm9yKHQ9dHx8ci5sZW5ndGgsdD5yLmxlbmd0aCYmKHQ9ci5sZW5ndGgpLGk9dC0xO2k+PTAmJihyW2ldJjE5Mik9PT0xMjg7KWktLTtyZXR1cm4gaTwwfHxpPT09MD90OmkrUltyW2ldXT50P2k6dH0sS2V9dmFyIGEwLGswO2Z1bmN0aW9uIEUwKCl7aWYoazApcmV0dXJuIGEwO2swPTE7ZnVuY3Rpb24gbSgpe3RoaXMuaW5wdXQ9bnVsbCx0aGlzLm5leHRfaW49MCx0aGlzLmF2YWlsX2luPTAsdGhpcy50b3RhbF9pbj0wLHRoaXMub3V0cHV0PW51bGwsdGhpcy5uZXh0X291dD0wLHRoaXMuYXZhaWxfb3V0PTAsdGhpcy50b3RhbF9vdXQ9MCx0aGlzLm1zZz0iIix0aGlzLnN0YXRlPW51bGwsdGhpcy5kYXRhX3R5cGU9Mix0aGlzLmFkbGVyPTB9cmV0dXJuIGEwPW0sYTB9dmFyIFMwO2Z1bmN0aW9uIFAwKCl7aWYoUzApcmV0dXJuIFllO1MwPTE7dmFyIG09STAoKSxHPUhlKCksWT14MCgpLFI9aTAoKSxrPUUwKCksST1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLHI9MCx0PTQsaT0wLGI9MSxfPTIscz0tMSxoPTAsdj04O2Z1bmN0aW9uIEUobyl7aWYoISh0aGlzIGluc3RhbmNlb2YgRSkpcmV0dXJuIG5ldyBFKG8pO3RoaXMub3B0aW9ucz1HLmFzc2lnbih7bGV2ZWw6cyxtZXRob2Q6dixjaHVua1NpemU6MTYzODQsd2luZG93Qml0czoxNSxtZW1MZXZlbDo4LHN0cmF0ZWd5OmgsdG86IiJ9LG98fHt9KTt2YXIgbj10aGlzLm9wdGlvbnM7bi5yYXcmJm4ud2luZG93Qml0cz4wP24ud2luZG93Qml0cz0tbi53aW5kb3dCaXRzOm4uZ3ppcCYmbi53aW5kb3dCaXRzPjAmJm4ud2luZG93Qml0czwxNiYmKG4ud2luZG93Qml0cys9MTYpLHRoaXMuZXJyPTAsdGhpcy5tc2c9IiIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IGssdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciB3PW0uZGVmbGF0ZUluaXQyKHRoaXMuc3RybSxuLmxldmVsLG4ubWV0aG9kLG4ud2luZG93Qml0cyxuLm1lbUxldmVsLG4uc3RyYXRlZ3kpO2lmKHchPT1pKXRocm93IG5ldyBFcnJvcihSW3ddKTtpZihuLmhlYWRlciYmbS5kZWZsYXRlU2V0SGVhZGVyKHRoaXMuc3RybSxuLmhlYWRlciksbi5kaWN0aW9uYXJ5KXt2YXIgZztpZih0eXBlb2Ygbi5kaWN0aW9uYXJ5PT0ic3RyaW5nIj9nPVkuc3RyaW5nMmJ1ZihuLmRpY3Rpb25hcnkpOkkuY2FsbChuLmRpY3Rpb25hcnkpPT09IltvYmplY3QgQXJyYXlCdWZmZXJdIj9nPW5ldyBVaW50OEFycmF5KG4uZGljdGlvbmFyeSk6Zz1uLmRpY3Rpb25hcnksdz1tLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxnKSx3IT09aSl0aHJvdyBuZXcgRXJyb3IoUlt3XSk7dGhpcy5fZGljdF9zZXQ9ITB9fUUucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24obyxuKXt2YXIgdz10aGlzLnN0cm0sZz10aGlzLm9wdGlvbnMuY2h1bmtTaXplLHAsUztpZih0aGlzLmVuZGVkKXJldHVybiExO1M9bj09PX5+bj9uOm49PT0hMD90OnIsdHlwZW9mIG89PSJzdHJpbmciP3cuaW5wdXQ9WS5zdHJpbmcyYnVmKG8pOkkuY2FsbChvKT09PSJbb2JqZWN0IEFycmF5QnVmZmVyXSI/dy5pbnB1dD1uZXcgVWludDhBcnJheShvKTp3LmlucHV0PW8sdy5uZXh0X2luPTAsdy5hdmFpbF9pbj13LmlucHV0Lmxlbmd0aDtkb3tpZih3LmF2YWlsX291dD09PTAmJih3Lm91dHB1dD1uZXcgRy5CdWY4KGcpLHcubmV4dF9vdXQ9MCx3LmF2YWlsX291dD1nKSxwPW0uZGVmbGF0ZSh3LFMpLHAhPT1iJiZwIT09aSlyZXR1cm4gdGhpcy5vbkVuZChwKSx0aGlzLmVuZGVkPSEwLCExOyh3LmF2YWlsX291dD09PTB8fHcuYXZhaWxfaW49PT0wJiYoUz09PXR8fFM9PT1fKSkmJih0aGlzLm9wdGlvbnMudG89PT0ic3RyaW5nIj90aGlzLm9uRGF0YShZLmJ1ZjJiaW5zdHJpbmcoRy5zaHJpbmtCdWYody5vdXRwdXQsdy5uZXh0X291dCkpKTp0aGlzLm9uRGF0YShHLnNocmlua0J1Zih3Lm91dHB1dCx3Lm5leHRfb3V0KSkpfXdoaWxlKCh3LmF2YWlsX2luPjB8fHcuYXZhaWxfb3V0PT09MCkmJnAhPT1iKTtyZXR1cm4gUz09PXQ/KHA9bS5kZWZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChwKSx0aGlzLmVuZGVkPSEwLHA9PT1pKTooUz09PV8mJih0aGlzLm9uRW5kKGkpLHcuYXZhaWxfb3V0PTApLCEwKX0sRS5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKG8pe3RoaXMuY2h1bmtzLnB1c2gobyl9LEUucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKG8pe289PT1pJiYodGhpcy5vcHRpb25zLnRvPT09InN0cmluZyI/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbigiIik6dGhpcy5yZXN1bHQ9Ry5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9byx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfTtmdW5jdGlvbiBkKG8sbil7dmFyIHc9bmV3IEUobik7aWYody5wdXNoKG8sITApLHcuZXJyKXRocm93IHcubXNnfHxSW3cuZXJyXTtyZXR1cm4gdy5yZXN1bHR9ZnVuY3Rpb24gdShvLG4pe3JldHVybiBuPW58fHt9LG4ucmF3PSEwLGQobyxuKX1mdW5jdGlvbiBjKG8sbil7cmV0dXJuIG49bnx8e30sbi5nemlwPSEwLGQobyxuKX1yZXR1cm4gWWUuRGVmbGF0ZT1FLFllLmRlZmxhdGU9ZCxZZS5kZWZsYXRlUmF3PXUsWWUuZ3ppcD1jLFllfXZhciBXZT17fSxMZT17fSxuMCx5MDtmdW5jdGlvbiBHMCgpe2lmKHkwKXJldHVybiBuMDt5MD0xO3ZhciBtPTMwLEc9MTI7cmV0dXJuIG4wPWZ1bmN0aW9uKFIsayl7dmFyIEkscix0LGksYixfLHMsaCx2LEUsZCx1LGMsbyxuLHcsZyxwLFMsQSxMLEQsQixqLEM7ST1SLnN0YXRlLHI9Ui5uZXh0X2luLGo9Ui5pbnB1dCx0PXIrKFIuYXZhaWxfaW4tNSksaT1SLm5leHRfb3V0LEM9Ui5vdXRwdXQsYj1pLShrLVIuYXZhaWxfb3V0KSxfPWkrKFIuYXZhaWxfb3V0LTI1Nykscz1JLmRtYXgsaD1JLndzaXplLHY9SS53aGF2ZSxFPUkud25leHQsZD1JLndpbmRvdyx1PUkuaG9sZCxjPUkuYml0cyxvPUkubGVuY29kZSxuPUkuZGlzdGNvZGUsdz0oMTw8SS5sZW5iaXRzKS0xLGc9KDE8PEkuZGlzdGJpdHMpLTE7ZTpkb3tjPDE1JiYodSs9altyKytdPDxjLGMrPTgsdSs9altyKytdPDxjLGMrPTgpLHA9b1t1JnddO3Q6Zm9yKDs7KXtpZihTPXA+Pj4yNCx1Pj4+PVMsYy09UyxTPXA+Pj4xNiYyNTUsUz09PTApQ1tpKytdPXAmNjU1MzU7ZWxzZSBpZihTJjE2KXtBPXAmNjU1MzUsUyY9MTUsUyYmKGM8UyYmKHUrPWpbcisrXTw8YyxjKz04KSxBKz11JigxPDxTKS0xLHU+Pj49UyxjLT1TKSxjPDE1JiYodSs9altyKytdPDxjLGMrPTgsdSs9altyKytdPDxjLGMrPTgpLHA9blt1JmddO3I6Zm9yKDs7KXtpZihTPXA+Pj4yNCx1Pj4+PVMsYy09UyxTPXA+Pj4xNiYyNTUsUyYxNil7aWYoTD1wJjY1NTM1LFMmPTE1LGM8UyYmKHUrPWpbcisrXTw8YyxjKz04LGM8UyYmKHUrPWpbcisrXTw8YyxjKz04KSksTCs9dSYoMTw8UyktMSxMPnMpe1IubXNnPSJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayIsSS5tb2RlPW07YnJlYWsgZX1pZih1Pj4+PVMsYy09UyxTPWktYixMPlMpe2lmKFM9TC1TLFM+diYmSS5zYW5lKXtSLm1zZz0iaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2siLEkubW9kZT1tO2JyZWFrIGV9aWYoRD0wLEI9ZCxFPT09MCl7aWYoRCs9aC1TLFM8QSl7QS09UztkbyBDW2krK109ZFtEKytdO3doaWxlKC0tUyk7RD1pLUwsQj1DfX1lbHNlIGlmKEU8Uyl7aWYoRCs9aCtFLVMsUy09RSxTPEEpe0EtPVM7ZG8gQ1tpKytdPWRbRCsrXTt3aGlsZSgtLVMpO2lmKEQ9MCxFPEEpe1M9RSxBLT1TO2RvIENbaSsrXT1kW0QrK107d2hpbGUoLS1TKTtEPWktTCxCPUN9fX1lbHNlIGlmKEQrPUUtUyxTPEEpe0EtPVM7ZG8gQ1tpKytdPWRbRCsrXTt3aGlsZSgtLVMpO0Q9aS1MLEI9Q31mb3IoO0E+MjspQ1tpKytdPUJbRCsrXSxDW2krK109QltEKytdLENbaSsrXT1CW0QrK10sQS09MztBJiYoQ1tpKytdPUJbRCsrXSxBPjEmJihDW2krK109QltEKytdKSl9ZWxzZXtEPWktTDtkbyBDW2krK109Q1tEKytdLENbaSsrXT1DW0QrK10sQ1tpKytdPUNbRCsrXSxBLT0zO3doaWxlKEE+Mik7QSYmKENbaSsrXT1DW0QrK10sQT4xJiYoQ1tpKytdPUNbRCsrXSkpfX1lbHNlIGlmKFMmNjQpe1IubXNnPSJpbnZhbGlkIGRpc3RhbmNlIGNvZGUiLEkubW9kZT1tO2JyZWFrIGV9ZWxzZXtwPW5bKHAmNjU1MzUpKyh1JigxPDxTKS0xKV07Y29udGludWUgcn1icmVha319ZWxzZSBpZihTJjY0KWlmKFMmMzIpe0kubW9kZT1HO2JyZWFrIGV9ZWxzZXtSLm1zZz0iaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlIixJLm1vZGU9bTticmVhayBlfWVsc2V7cD1vWyhwJjY1NTM1KSsodSYoMTw8UyktMSldO2NvbnRpbnVlIHR9YnJlYWt9fXdoaWxlKHI8dCYmaTxfKTtBPWM+PjMsci09QSxjLT1BPDwzLHUmPSgxPDxjKS0xLFIubmV4dF9pbj1yLFIubmV4dF9vdXQ9aSxSLmF2YWlsX2luPXI8dD81Kyh0LXIpOjUtKHItdCksUi5hdmFpbF9vdXQ9aTxfPzI1NysoXy1pKToyNTctKGktXyksSS5ob2xkPXUsSS5iaXRzPWN9LG4wfXZhciBmMCxBMDtmdW5jdGlvbiBaMCgpe2lmKEEwKXJldHVybiBmMDtBMD0xO3ZhciBtPUhlKCksRz0xNSxZPTg1MixSPTU5MixrPTAsST0xLHI9Mix0PVszLDQsNSw2LDcsOCw5LDEwLDExLDEzLDE1LDE3LDE5LDIzLDI3LDMxLDM1LDQzLDUxLDU5LDY3LDgzLDk5LDExNSwxMzEsMTYzLDE5NSwyMjcsMjU4LDAsMF0saT1bMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTcsMTcsMTcsMTcsMTgsMTgsMTgsMTgsMTksMTksMTksMTksMjAsMjAsMjAsMjAsMjEsMjEsMjEsMjEsMTYsNzIsNzhdLGI9WzEsMiwzLDQsNSw3LDksMTMsMTcsMjUsMzMsNDksNjUsOTcsMTI5LDE5MywyNTcsMzg1LDUxMyw3NjksMTAyNSwxNTM3LDIwNDksMzA3Myw0MDk3LDYxNDUsODE5MywxMjI4OSwxNjM4NSwyNDU3NywwLDBdLF89WzE2LDE2LDE2LDE2LDE3LDE3LDE4LDE4LDE5LDE5LDIwLDIwLDIxLDIxLDIyLDIyLDIzLDIzLDI0LDI0LDI1LDI1LDI2LDI2LDI3LDI3LDI4LDI4LDI5LDI5LDY0LDY0XTtyZXR1cm4gZjA9ZnVuY3Rpb24oaCx2LEUsZCx1LGMsbyxuKXt2YXIgdz1uLmJpdHMsZz0wLHA9MCxTPTAsQT0wLEw9MCxEPTAsQj0wLGo9MCxDPTAsSD0wLFUsWCxULFAsWixhZT1udWxsLCQ9MCx0ZSxWPW5ldyBtLkJ1ZjE2KEcrMSksdWU9bmV3IG0uQnVmMTYoRysxKSxmZT1udWxsLGhlPTAsbGUsc2UsZ2U7Zm9yKGc9MDtnPD1HO2crKylWW2ddPTA7Zm9yKHA9MDtwPGQ7cCsrKVZbdltFK3BdXSsrO2ZvcihMPXcsQT1HO0E+PTEmJlZbQV09PT0wO0EtLSk7aWYoTD5BJiYoTD1BKSxBPT09MClyZXR1cm4gdVtjKytdPTE8PDI0fDY0PDwxNnwwLHVbYysrXT0xPDwyNHw2NDw8MTZ8MCxuLmJpdHM9MSwwO2ZvcihTPTE7UzxBJiZWW1NdPT09MDtTKyspO2ZvcihMPFMmJihMPVMpLGo9MSxnPTE7Zzw9RztnKyspaWYoajw8PTEsai09VltnXSxqPDApcmV0dXJuLTE7aWYoaj4wJiYoaD09PWt8fEEhPT0xKSlyZXR1cm4tMTtmb3IodWVbMV09MCxnPTE7ZzxHO2crKyl1ZVtnKzFdPXVlW2ddK1ZbZ107Zm9yKHA9MDtwPGQ7cCsrKXZbRStwXSE9PTAmJihvW3VlW3ZbRStwXV0rK109cCk7aWYoaD09PWs/KGFlPWZlPW8sdGU9MTkpOmg9PT1JPyhhZT10LCQtPTI1NyxmZT1pLGhlLT0yNTcsdGU9MjU2KTooYWU9YixmZT1fLHRlPS0xKSxIPTAscD0wLGc9UyxaPWMsRD1MLEI9MCxUPS0xLEM9MTw8TCxQPUMtMSxoPT09SSYmQz5ZfHxoPT09ciYmQz5SKXJldHVybiAxO2Zvcig7Oyl7bGU9Zy1CLG9bcF08dGU/KHNlPTAsZ2U9b1twXSk6b1twXT50ZT8oc2U9ZmVbaGUrb1twXV0sZ2U9YWVbJCtvW3BdXSk6KHNlPTk2LGdlPTApLFU9MTw8Zy1CLFg9MTw8RCxTPVg7ZG8gWC09VSx1W1orKEg+PkIpK1hdPWxlPDwyNHxzZTw8MTZ8Z2V8MDt3aGlsZShYIT09MCk7Zm9yKFU9MTw8Zy0xO0gmVTspVT4+PTE7aWYoVSE9PTA/KEgmPVUtMSxIKz1VKTpIPTAscCsrLC0tVltnXT09PTApe2lmKGc9PT1BKWJyZWFrO2c9dltFK29bcF1dfWlmKGc+TCYmKEgmUCkhPT1UKXtmb3IoQj09PTAmJihCPUwpLForPVMsRD1nLUIsaj0xPDxEO0QrQjxBJiYoai09VltEK0JdLCEoajw9MCkpOylEKyssajw8PTE7aWYoQys9MTw8RCxoPT09SSYmQz5ZfHxoPT09ciYmQz5SKXJldHVybiAxO1Q9SCZQLHVbVF09TDw8MjR8RDw8MTZ8Wi1jfDB9fXJldHVybiBIIT09MCYmKHVbWitIXT1nLUI8PDI0fDY0PDwxNnwwKSxuLmJpdHM9TCwwfSxmMH12YXIgRDA7ZnVuY3Rpb24gSDAoKXtpZihEMClyZXR1cm4gTGU7RDA9MTt2YXIgbT1IZSgpLEc9djAoKSxZPXcwKCksUj1HMCgpLGs9WjAoKSxJPTAscj0xLHQ9MixpPTQsYj01LF89NixzPTAsaD0xLHY9MixFPS0yLGQ9LTMsdT0tNCxjPS01LG89OCxuPTEsdz0yLGc9MyxwPTQsUz01LEE9NixMPTcsRD04LEI9OSxqPTEwLEM9MTEsSD0xMixVPTEzLFg9MTQsVD0xNSxQPTE2LFo9MTcsYWU9MTgsJD0xOSx0ZT0yMCxWPTIxLHVlPTIyLGZlPTIzLGhlPTI0LGxlPTI1LHNlPTI2LGdlPTI3LHplPTI4LHhlPTI5LGNlPTMwLFNlPTMxLG1lPTMyLFJlPTg1MixvZT01OTIscT0xNSxyZT1xO2Z1bmN0aW9uIGRlKHkpe3JldHVybih5Pj4+MjQmMjU1KSsoeT4+PjgmNjUyODApKygoeSY2NTI4MCk8PDgpKygoeSYyNTUpPDwyNCl9ZnVuY3Rpb24gd2UoKXt0aGlzLm1vZGU9MCx0aGlzLmxhc3Q9ITEsdGhpcy53cmFwPTAsdGhpcy5oYXZlZGljdD0hMSx0aGlzLmZsYWdzPTAsdGhpcy5kbWF4PTAsdGhpcy5jaGVjaz0wLHRoaXMudG90YWw9MCx0aGlzLmhlYWQ9bnVsbCx0aGlzLndiaXRzPTAsdGhpcy53c2l6ZT0wLHRoaXMud2hhdmU9MCx0aGlzLnduZXh0PTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLmhvbGQ9MCx0aGlzLmJpdHM9MCx0aGlzLmxlbmd0aD0wLHRoaXMub2Zmc2V0PTAsdGhpcy5leHRyYT0wLHRoaXMubGVuY29kZT1udWxsLHRoaXMuZGlzdGNvZGU9bnVsbCx0aGlzLmxlbmJpdHM9MCx0aGlzLmRpc3RiaXRzPTAsdGhpcy5uY29kZT0wLHRoaXMubmxlbj0wLHRoaXMubmRpc3Q9MCx0aGlzLmhhdmU9MCx0aGlzLm5leHQ9bnVsbCx0aGlzLmxlbnM9bmV3IG0uQnVmMTYoMzIwKSx0aGlzLndvcms9bmV3IG0uQnVmMTYoMjg4KSx0aGlzLmxlbmR5bj1udWxsLHRoaXMuZGlzdGR5bj1udWxsLHRoaXMuc2FuZT0wLHRoaXMuYmFjaz0wLHRoaXMud2FzPTB9ZnVuY3Rpb24gYmUoeSl7dmFyIE07cmV0dXJuIXl8fCF5LnN0YXRlP0U6KE09eS5zdGF0ZSx5LnRvdGFsX2luPXkudG90YWxfb3V0PU0udG90YWw9MCx5Lm1zZz0iIixNLndyYXAmJih5LmFkbGVyPU0ud3JhcCYxKSxNLm1vZGU9bixNLmxhc3Q9MCxNLmhhdmVkaWN0PTAsTS5kbWF4PTMyNzY4LE0uaGVhZD1udWxsLE0uaG9sZD0wLE0uYml0cz0wLE0ubGVuY29kZT1NLmxlbmR5bj1uZXcgbS5CdWYzMihSZSksTS5kaXN0Y29kZT1NLmRpc3RkeW49bmV3IG0uQnVmMzIob2UpLE0uc2FuZT0xLE0uYmFjaz0tMSxzKX1mdW5jdGlvbiBBZSh5KXt2YXIgTTtyZXR1cm4heXx8IXkuc3RhdGU/RTooTT15LnN0YXRlLE0ud3NpemU9MCxNLndoYXZlPTAsTS53bmV4dD0wLGJlKHkpKX1mdW5jdGlvbiAkZSh5LE0pe3ZhciBhLEs7cmV0dXJuIXl8fCF5LnN0YXRlfHwoSz15LnN0YXRlLE08MD8oYT0wLE09LU0pOihhPShNPj40KSsxLE08NDgmJihNJj0xNSkpLE0mJihNPDh8fE0+MTUpKT9FOihLLndpbmRvdyE9PW51bGwmJksud2JpdHMhPT1NJiYoSy53aW5kb3c9bnVsbCksSy53cmFwPWEsSy53Yml0cz1NLEFlKHkpKX1mdW5jdGlvbiBqZSh5LE0pe3ZhciBhLEs7cmV0dXJuIHk/KEs9bmV3IHdlLHkuc3RhdGU9SyxLLndpbmRvdz1udWxsLGE9JGUoeSxNKSxhIT09cyYmKHkuc3RhdGU9bnVsbCksYSk6RX1mdW5jdGlvbiBDZSh5KXtyZXR1cm4gamUoeSxyZSl9dmFyIFhlPSEwLFVlLERlO2Z1bmN0aW9uIEllKHkpe2lmKFhlKXt2YXIgTTtmb3IoVWU9bmV3IG0uQnVmMzIoNTEyKSxEZT1uZXcgbS5CdWYzMigzMiksTT0wO008MTQ0Oyl5LmxlbnNbTSsrXT04O2Zvcig7TTwyNTY7KXkubGVuc1tNKytdPTk7Zm9yKDtNPDI4MDspeS5sZW5zW00rK109Nztmb3IoO008Mjg4Oyl5LmxlbnNbTSsrXT04O2ZvcihrKHIseS5sZW5zLDAsMjg4LFVlLDAseS53b3JrLHtiaXRzOjl9KSxNPTA7TTwzMjspeS5sZW5zW00rK109NTtrKHQseS5sZW5zLDAsMzIsRGUsMCx5Lndvcmsse2JpdHM6NX0pLFhlPSExfXkubGVuY29kZT1VZSx5LmxlbmJpdHM9OSx5LmRpc3Rjb2RlPURlLHkuZGlzdGJpdHM9NX1mdW5jdGlvbiBWZSh5LE0sYSxLKXt2YXIgbmUsZT15LnN0YXRlO3JldHVybiBlLndpbmRvdz09PW51bGwmJihlLndzaXplPTE8PGUud2JpdHMsZS53bmV4dD0wLGUud2hhdmU9MCxlLndpbmRvdz1uZXcgbS5CdWY4KGUud3NpemUpKSxLPj1lLndzaXplPyhtLmFycmF5U2V0KGUud2luZG93LE0sYS1lLndzaXplLGUud3NpemUsMCksZS53bmV4dD0wLGUud2hhdmU9ZS53c2l6ZSk6KG5lPWUud3NpemUtZS53bmV4dCxuZT5LJiYobmU9SyksbS5hcnJheVNldChlLndpbmRvdyxNLGEtSyxuZSxlLnduZXh0KSxLLT1uZSxLPyhtLmFycmF5U2V0KGUud2luZG93LE0sYS1LLEssMCksZS53bmV4dD1LLGUud2hhdmU9ZS53c2l6ZSk6KGUud25leHQrPW5lLGUud25leHQ9PT1lLndzaXplJiYoZS53bmV4dD0wKSxlLndoYXZlPGUud3NpemUmJihlLndoYXZlKz1uZSkpKSwwfWZ1bmN0aW9uIGwoeSxNKXt2YXIgYSxLLG5lLGUsTixPLGYseCx6LGllLFEsRixfZSxHZSxwZT0wLHZlLEVlLEJlLE5lLFFlLHFlLGtlLE9lLHllPW5ldyBtLkJ1ZjgoNCksWmUsUGUsTzA9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdO2lmKCF5fHwheS5zdGF0ZXx8IXkub3V0cHV0fHwheS5pbnB1dCYmeS5hdmFpbF9pbiE9PTApcmV0dXJuIEU7YT15LnN0YXRlLGEubW9kZT09PUgmJihhLm1vZGU9VSksTj15Lm5leHRfb3V0LG5lPXkub3V0cHV0LGY9eS5hdmFpbF9vdXQsZT15Lm5leHRfaW4sSz15LmlucHV0LE89eS5hdmFpbF9pbix4PWEuaG9sZCx6PWEuYml0cyxpZT1PLFE9ZixPZT1zO2U6Zm9yKDs7KXN3aXRjaChhLm1vZGUpe2Nhc2UgbjppZihhLndyYXA9PT0wKXthLm1vZGU9VTticmVha31mb3IoO3o8MTY7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1pZihhLndyYXAmMiYmeD09PTM1NjE1KXthLmNoZWNrPTAseWVbMF09eCYyNTUseWVbMV09eD4+PjgmMjU1LGEuY2hlY2s9WShhLmNoZWNrLHllLDIsMCkseD0wLHo9MCxhLm1vZGU9dzticmVha31pZihhLmZsYWdzPTAsYS5oZWFkJiYoYS5oZWFkLmRvbmU9ITEpLCEoYS53cmFwJjEpfHwoKCh4JjI1NSk8PDgpKyh4Pj44KSklMzEpe3kubXNnPSJpbmNvcnJlY3QgaGVhZGVyIGNoZWNrIixhLm1vZGU9Y2U7YnJlYWt9aWYoKHgmMTUpIT09byl7eS5tc2c9InVua25vd24gY29tcHJlc3Npb24gbWV0aG9kIixhLm1vZGU9Y2U7YnJlYWt9aWYoeD4+Pj00LHotPTQsa2U9KHgmMTUpKzgsYS53Yml0cz09PTApYS53Yml0cz1rZTtlbHNlIGlmKGtlPmEud2JpdHMpe3kubXNnPSJpbnZhbGlkIHdpbmRvdyBzaXplIixhLm1vZGU9Y2U7YnJlYWt9YS5kbWF4PTE8PGtlLHkuYWRsZXI9YS5jaGVjaz0xLGEubW9kZT14JjUxMj9qOkgseD0wLHo9MDticmVhaztjYXNlIHc6Zm9yKDt6PDE2Oyl7aWYoTz09PTApYnJlYWsgZTtPLS0seCs9S1tlKytdPDx6LHorPTh9aWYoYS5mbGFncz14LChhLmZsYWdzJjI1NSkhPT1vKXt5Lm1zZz0idW5rbm93biBjb21wcmVzc2lvbiBtZXRob2QiLGEubW9kZT1jZTticmVha31pZihhLmZsYWdzJjU3MzQ0KXt5Lm1zZz0idW5rbm93biBoZWFkZXIgZmxhZ3Mgc2V0IixhLm1vZGU9Y2U7YnJlYWt9YS5oZWFkJiYoYS5oZWFkLnRleHQ9eD4+OCYxKSxhLmZsYWdzJjUxMiYmKHllWzBdPXgmMjU1LHllWzFdPXg+Pj44JjI1NSxhLmNoZWNrPVkoYS5jaGVjayx5ZSwyLDApKSx4PTAsej0wLGEubW9kZT1nO2Nhc2UgZzpmb3IoO3o8MzI7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1hLmhlYWQmJihhLmhlYWQudGltZT14KSxhLmZsYWdzJjUxMiYmKHllWzBdPXgmMjU1LHllWzFdPXg+Pj44JjI1NSx5ZVsyXT14Pj4+MTYmMjU1LHllWzNdPXg+Pj4yNCYyNTUsYS5jaGVjaz1ZKGEuY2hlY2sseWUsNCwwKSkseD0wLHo9MCxhLm1vZGU9cDtjYXNlIHA6Zm9yKDt6PDE2Oyl7aWYoTz09PTApYnJlYWsgZTtPLS0seCs9S1tlKytdPDx6LHorPTh9YS5oZWFkJiYoYS5oZWFkLnhmbGFncz14JjI1NSxhLmhlYWQub3M9eD4+OCksYS5mbGFncyY1MTImJih5ZVswXT14JjI1NSx5ZVsxXT14Pj4+OCYyNTUsYS5jaGVjaz1ZKGEuY2hlY2sseWUsMiwwKSkseD0wLHo9MCxhLm1vZGU9UztjYXNlIFM6aWYoYS5mbGFncyYxMDI0KXtmb3IoO3o8MTY7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1hLmxlbmd0aD14LGEuaGVhZCYmKGEuaGVhZC5leHRyYV9sZW49eCksYS5mbGFncyY1MTImJih5ZVswXT14JjI1NSx5ZVsxXT14Pj4+OCYyNTUsYS5jaGVjaz1ZKGEuY2hlY2sseWUsMiwwKSkseD0wLHo9MH1lbHNlIGEuaGVhZCYmKGEuaGVhZC5leHRyYT1udWxsKTthLm1vZGU9QTtjYXNlIEE6aWYoYS5mbGFncyYxMDI0JiYoRj1hLmxlbmd0aCxGPk8mJihGPU8pLEYmJihhLmhlYWQmJihrZT1hLmhlYWQuZXh0cmFfbGVuLWEubGVuZ3RoLGEuaGVhZC5leHRyYXx8KGEuaGVhZC5leHRyYT1uZXcgQXJyYXkoYS5oZWFkLmV4dHJhX2xlbikpLG0uYXJyYXlTZXQoYS5oZWFkLmV4dHJhLEssZSxGLGtlKSksYS5mbGFncyY1MTImJihhLmNoZWNrPVkoYS5jaGVjayxLLEYsZSkpLE8tPUYsZSs9RixhLmxlbmd0aC09RiksYS5sZW5ndGgpKWJyZWFrIGU7YS5sZW5ndGg9MCxhLm1vZGU9TDtjYXNlIEw6aWYoYS5mbGFncyYyMDQ4KXtpZihPPT09MClicmVhayBlO0Y9MDtkbyBrZT1LW2UrRisrXSxhLmhlYWQmJmtlJiZhLmxlbmd0aDw2NTUzNiYmKGEuaGVhZC5uYW1lKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGtlKSk7d2hpbGUoa2UmJkY8Tyk7aWYoYS5mbGFncyY1MTImJihhLmNoZWNrPVkoYS5jaGVjayxLLEYsZSkpLE8tPUYsZSs9RixrZSlicmVhayBlfWVsc2UgYS5oZWFkJiYoYS5oZWFkLm5hbWU9bnVsbCk7YS5sZW5ndGg9MCxhLm1vZGU9RDtjYXNlIEQ6aWYoYS5mbGFncyY0MDk2KXtpZihPPT09MClicmVhayBlO0Y9MDtkbyBrZT1LW2UrRisrXSxhLmhlYWQmJmtlJiZhLmxlbmd0aDw2NTUzNiYmKGEuaGVhZC5jb21tZW50Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGtlKSk7d2hpbGUoa2UmJkY8Tyk7aWYoYS5mbGFncyY1MTImJihhLmNoZWNrPVkoYS5jaGVjayxLLEYsZSkpLE8tPUYsZSs9RixrZSlicmVhayBlfWVsc2UgYS5oZWFkJiYoYS5oZWFkLmNvbW1lbnQ9bnVsbCk7YS5tb2RlPUI7Y2FzZSBCOmlmKGEuZmxhZ3MmNTEyKXtmb3IoO3o8MTY7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1pZih4IT09KGEuY2hlY2smNjU1MzUpKXt5Lm1zZz0iaGVhZGVyIGNyYyBtaXNtYXRjaCIsYS5tb2RlPWNlO2JyZWFrfXg9MCx6PTB9YS5oZWFkJiYoYS5oZWFkLmhjcmM9YS5mbGFncz4+OSYxLGEuaGVhZC5kb25lPSEwKSx5LmFkbGVyPWEuY2hlY2s9MCxhLm1vZGU9SDticmVhaztjYXNlIGo6Zm9yKDt6PDMyOyl7aWYoTz09PTApYnJlYWsgZTtPLS0seCs9S1tlKytdPDx6LHorPTh9eS5hZGxlcj1hLmNoZWNrPWRlKHgpLHg9MCx6PTAsYS5tb2RlPUM7Y2FzZSBDOmlmKGEuaGF2ZWRpY3Q9PT0wKXJldHVybiB5Lm5leHRfb3V0PU4seS5hdmFpbF9vdXQ9Zix5Lm5leHRfaW49ZSx5LmF2YWlsX2luPU8sYS5ob2xkPXgsYS5iaXRzPXosdjt5LmFkbGVyPWEuY2hlY2s9MSxhLm1vZGU9SDtjYXNlIEg6aWYoTT09PWJ8fE09PT1fKWJyZWFrIGU7Y2FzZSBVOmlmKGEubGFzdCl7eD4+Pj16Jjcsei09eiY3LGEubW9kZT1nZTticmVha31mb3IoO3o8Mzspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fXN3aXRjaChhLmxhc3Q9eCYxLHg+Pj49MSx6LT0xLHgmMyl7Y2FzZSAwOmEubW9kZT1YO2JyZWFrO2Nhc2UgMTppZihJZShhKSxhLm1vZGU9dGUsTT09PV8pe3g+Pj49Mix6LT0yO2JyZWFrIGV9YnJlYWs7Y2FzZSAyOmEubW9kZT1aO2JyZWFrO2Nhc2UgMzp5Lm1zZz0iaW52YWxpZCBibG9jayB0eXBlIixhLm1vZGU9Y2V9eD4+Pj0yLHotPTI7YnJlYWs7Y2FzZSBYOmZvcih4Pj4+PXomNyx6LT16Jjc7ejwzMjspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fWlmKCh4JjY1NTM1KSE9PSh4Pj4+MTZeNjU1MzUpKXt5Lm1zZz0iaW52YWxpZCBzdG9yZWQgYmxvY2sgbGVuZ3RocyIsYS5tb2RlPWNlO2JyZWFrfWlmKGEubGVuZ3RoPXgmNjU1MzUseD0wLHo9MCxhLm1vZGU9VCxNPT09XylicmVhayBlO2Nhc2UgVDphLm1vZGU9UDtjYXNlIFA6aWYoRj1hLmxlbmd0aCxGKXtpZihGPk8mJihGPU8pLEY+ZiYmKEY9ZiksRj09PTApYnJlYWsgZTttLmFycmF5U2V0KG5lLEssZSxGLE4pLE8tPUYsZSs9RixmLT1GLE4rPUYsYS5sZW5ndGgtPUY7YnJlYWt9YS5tb2RlPUg7YnJlYWs7Y2FzZSBaOmZvcig7ejwxNDspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fWlmKGEubmxlbj0oeCYzMSkrMjU3LHg+Pj49NSx6LT01LGEubmRpc3Q9KHgmMzEpKzEseD4+Pj01LHotPTUsYS5uY29kZT0oeCYxNSkrNCx4Pj4+PTQsei09NCxhLm5sZW4+Mjg2fHxhLm5kaXN0PjMwKXt5Lm1zZz0idG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHMiLGEubW9kZT1jZTticmVha31hLmhhdmU9MCxhLm1vZGU9YWU7Y2FzZSBhZTpmb3IoO2EuaGF2ZTxhLm5jb2RlOyl7Zm9yKDt6PDM7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1hLmxlbnNbTzBbYS5oYXZlKytdXT14JjcseD4+Pj0zLHotPTN9Zm9yKDthLmhhdmU8MTk7KWEubGVuc1tPMFthLmhhdmUrK11dPTA7aWYoYS5sZW5jb2RlPWEubGVuZHluLGEubGVuYml0cz03LFplPXtiaXRzOmEubGVuYml0c30sT2U9ayhJLGEubGVucywwLDE5LGEubGVuY29kZSwwLGEud29yayxaZSksYS5sZW5iaXRzPVplLmJpdHMsT2Upe3kubXNnPSJpbnZhbGlkIGNvZGUgbGVuZ3RocyBzZXQiLGEubW9kZT1jZTticmVha31hLmhhdmU9MCxhLm1vZGU9JDtjYXNlICQ6Zm9yKDthLmhhdmU8YS5ubGVuK2EubmRpc3Q7KXtmb3IoO3BlPWEubGVuY29kZVt4JigxPDxhLmxlbmJpdHMpLTFdLHZlPXBlPj4+MjQsRWU9cGU+Pj4xNiYyNTUsQmU9cGUmNjU1MzUsISh2ZTw9eik7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1pZihCZTwxNil4Pj4+PXZlLHotPXZlLGEubGVuc1thLmhhdmUrK109QmU7ZWxzZXtpZihCZT09PTE2KXtmb3IoUGU9dmUrMjt6PFBlOyl7aWYoTz09PTApYnJlYWsgZTtPLS0seCs9S1tlKytdPDx6LHorPTh9aWYoeD4+Pj12ZSx6LT12ZSxhLmhhdmU9PT0wKXt5Lm1zZz0iaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCIsYS5tb2RlPWNlO2JyZWFrfWtlPWEubGVuc1thLmhhdmUtMV0sRj0zKyh4JjMpLHg+Pj49Mix6LT0yfWVsc2UgaWYoQmU9PT0xNyl7Zm9yKFBlPXZlKzM7ejxQZTspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fXg+Pj49dmUsei09dmUsa2U9MCxGPTMrKHgmNykseD4+Pj0zLHotPTN9ZWxzZXtmb3IoUGU9dmUrNzt6PFBlOyl7aWYoTz09PTApYnJlYWsgZTtPLS0seCs9S1tlKytdPDx6LHorPTh9eD4+Pj12ZSx6LT12ZSxrZT0wLEY9MTErKHgmMTI3KSx4Pj4+PTcsei09N31pZihhLmhhdmUrRj5hLm5sZW4rYS5uZGlzdCl7eS5tc2c9ImludmFsaWQgYml0IGxlbmd0aCByZXBlYXQiLGEubW9kZT1jZTticmVha31mb3IoO0YtLTspYS5sZW5zW2EuaGF2ZSsrXT1rZX19aWYoYS5tb2RlPT09Y2UpYnJlYWs7aWYoYS5sZW5zWzI1Nl09PT0wKXt5Lm1zZz0iaW52YWxpZCBjb2RlIC0tIG1pc3NpbmcgZW5kLW9mLWJsb2NrIixhLm1vZGU9Y2U7YnJlYWt9aWYoYS5sZW5iaXRzPTksWmU9e2JpdHM6YS5sZW5iaXRzfSxPZT1rKHIsYS5sZW5zLDAsYS5ubGVuLGEubGVuY29kZSwwLGEud29yayxaZSksYS5sZW5iaXRzPVplLmJpdHMsT2Upe3kubXNnPSJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXQiLGEubW9kZT1jZTticmVha31pZihhLmRpc3RiaXRzPTYsYS5kaXN0Y29kZT1hLmRpc3RkeW4sWmU9e2JpdHM6YS5kaXN0Yml0c30sT2U9ayh0LGEubGVucyxhLm5sZW4sYS5uZGlzdCxhLmRpc3Rjb2RlLDAsYS53b3JrLFplKSxhLmRpc3RiaXRzPVplLmJpdHMsT2Upe3kubXNnPSJpbnZhbGlkIGRpc3RhbmNlcyBzZXQiLGEubW9kZT1jZTticmVha31pZihhLm1vZGU9dGUsTT09PV8pYnJlYWsgZTtjYXNlIHRlOmEubW9kZT1WO2Nhc2UgVjppZihPPj02JiZmPj0yNTgpe3kubmV4dF9vdXQ9Tix5LmF2YWlsX291dD1mLHkubmV4dF9pbj1lLHkuYXZhaWxfaW49TyxhLmhvbGQ9eCxhLmJpdHM9eixSKHksUSksTj15Lm5leHRfb3V0LG5lPXkub3V0cHV0LGY9eS5hdmFpbF9vdXQsZT15Lm5leHRfaW4sSz15LmlucHV0LE89eS5hdmFpbF9pbix4PWEuaG9sZCx6PWEuYml0cyxhLm1vZGU9PT1IJiYoYS5iYWNrPS0xKTticmVha31mb3IoYS5iYWNrPTA7cGU9YS5sZW5jb2RlW3gmKDE8PGEubGVuYml0cyktMV0sdmU9cGU+Pj4yNCxFZT1wZT4+PjE2JjI1NSxCZT1wZSY2NTUzNSwhKHZlPD16KTspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fWlmKEVlJiYhKEVlJjI0MCkpe2ZvcihOZT12ZSxRZT1FZSxxZT1CZTtwZT1hLmxlbmNvZGVbcWUrKCh4JigxPDxOZStRZSktMSk+Pk5lKV0sdmU9cGU+Pj4yNCxFZT1wZT4+PjE2JjI1NSxCZT1wZSY2NTUzNSwhKE5lK3ZlPD16KTspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fXg+Pj49TmUsei09TmUsYS5iYWNrKz1OZX1pZih4Pj4+PXZlLHotPXZlLGEuYmFjays9dmUsYS5sZW5ndGg9QmUsRWU9PT0wKXthLm1vZGU9c2U7YnJlYWt9aWYoRWUmMzIpe2EuYmFjaz0tMSxhLm1vZGU9SDticmVha31pZihFZSY2NCl7eS5tc2c9ImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZSIsYS5tb2RlPWNlO2JyZWFrfWEuZXh0cmE9RWUmMTUsYS5tb2RlPXVlO2Nhc2UgdWU6aWYoYS5leHRyYSl7Zm9yKFBlPWEuZXh0cmE7ejxQZTspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fWEubGVuZ3RoKz14JigxPDxhLmV4dHJhKS0xLHg+Pj49YS5leHRyYSx6LT1hLmV4dHJhLGEuYmFjays9YS5leHRyYX1hLndhcz1hLmxlbmd0aCxhLm1vZGU9ZmU7Y2FzZSBmZTpmb3IoO3BlPWEuZGlzdGNvZGVbeCYoMTw8YS5kaXN0Yml0cyktMV0sdmU9cGU+Pj4yNCxFZT1wZT4+PjE2JjI1NSxCZT1wZSY2NTUzNSwhKHZlPD16KTspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fWlmKCEoRWUmMjQwKSl7Zm9yKE5lPXZlLFFlPUVlLHFlPUJlO3BlPWEuZGlzdGNvZGVbcWUrKCh4JigxPDxOZStRZSktMSk+Pk5lKV0sdmU9cGU+Pj4yNCxFZT1wZT4+PjE2JjI1NSxCZT1wZSY2NTUzNSwhKE5lK3ZlPD16KTspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHgrPUtbZSsrXTw8eix6Kz04fXg+Pj49TmUsei09TmUsYS5iYWNrKz1OZX1pZih4Pj4+PXZlLHotPXZlLGEuYmFjays9dmUsRWUmNjQpe3kubXNnPSJpbnZhbGlkIGRpc3RhbmNlIGNvZGUiLGEubW9kZT1jZTticmVha31hLm9mZnNldD1CZSxhLmV4dHJhPUVlJjE1LGEubW9kZT1oZTtjYXNlIGhlOmlmKGEuZXh0cmEpe2ZvcihQZT1hLmV4dHJhO3o8UGU7KXtpZihPPT09MClicmVhayBlO08tLSx4Kz1LW2UrK108PHoseis9OH1hLm9mZnNldCs9eCYoMTw8YS5leHRyYSktMSx4Pj4+PWEuZXh0cmEsei09YS5leHRyYSxhLmJhY2srPWEuZXh0cmF9aWYoYS5vZmZzZXQ+YS5kbWF4KXt5Lm1zZz0iaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2siLGEubW9kZT1jZTticmVha31hLm1vZGU9bGU7Y2FzZSBsZTppZihmPT09MClicmVhayBlO2lmKEY9US1mLGEub2Zmc2V0PkYpe2lmKEY9YS5vZmZzZXQtRixGPmEud2hhdmUmJmEuc2FuZSl7eS5tc2c9ImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrIixhLm1vZGU9Y2U7YnJlYWt9Rj5hLnduZXh0PyhGLT1hLnduZXh0LF9lPWEud3NpemUtRik6X2U9YS53bmV4dC1GLEY+YS5sZW5ndGgmJihGPWEubGVuZ3RoKSxHZT1hLndpbmRvd31lbHNlIEdlPW5lLF9lPU4tYS5vZmZzZXQsRj1hLmxlbmd0aDtGPmYmJihGPWYpLGYtPUYsYS5sZW5ndGgtPUY7ZG8gbmVbTisrXT1HZVtfZSsrXTt3aGlsZSgtLUYpO2EubGVuZ3RoPT09MCYmKGEubW9kZT1WKTticmVhaztjYXNlIHNlOmlmKGY9PT0wKWJyZWFrIGU7bmVbTisrXT1hLmxlbmd0aCxmLS0sYS5tb2RlPVY7YnJlYWs7Y2FzZSBnZTppZihhLndyYXApe2Zvcig7ejwzMjspe2lmKE89PT0wKWJyZWFrIGU7Ty0tLHh8PUtbZSsrXTw8eix6Kz04fWlmKFEtPWYseS50b3RhbF9vdXQrPVEsYS50b3RhbCs9USxRJiYoeS5hZGxlcj1hLmNoZWNrPWEuZmxhZ3M/WShhLmNoZWNrLG5lLFEsTi1RKTpHKGEuY2hlY2ssbmUsUSxOLVEpKSxRPWYsKGEuZmxhZ3M/eDpkZSh4KSkhPT1hLmNoZWNrKXt5Lm1zZz0iaW5jb3JyZWN0IGRhdGEgY2hlY2siLGEubW9kZT1jZTticmVha314PTAsej0wfWEubW9kZT16ZTtjYXNlIHplOmlmKGEud3JhcCYmYS5mbGFncyl7Zm9yKDt6PDMyOyl7aWYoTz09PTApYnJlYWsgZTtPLS0seCs9S1tlKytdPDx6LHorPTh9aWYoeCE9PShhLnRvdGFsJjQyOTQ5NjcyOTUpKXt5Lm1zZz0iaW5jb3JyZWN0IGxlbmd0aCBjaGVjayIsYS5tb2RlPWNlO2JyZWFrfXg9MCx6PTB9YS5tb2RlPXhlO2Nhc2UgeGU6T2U9aDticmVhayBlO2Nhc2UgY2U6T2U9ZDticmVhayBlO2Nhc2UgU2U6cmV0dXJuIHU7Y2FzZSBtZTpkZWZhdWx0OnJldHVybiBFfXJldHVybiB5Lm5leHRfb3V0PU4seS5hdmFpbF9vdXQ9Zix5Lm5leHRfaW49ZSx5LmF2YWlsX2luPU8sYS5ob2xkPXgsYS5iaXRzPXosKGEud3NpemV8fFEhPT15LmF2YWlsX291dCYmYS5tb2RlPGNlJiYoYS5tb2RlPGdlfHxNIT09aSkpJiZWZSh5LHkub3V0cHV0LHkubmV4dF9vdXQsUS15LmF2YWlsX291dCksaWUtPXkuYXZhaWxfaW4sUS09eS5hdmFpbF9vdXQseS50b3RhbF9pbis9aWUseS50b3RhbF9vdXQrPVEsYS50b3RhbCs9USxhLndyYXAmJlEmJih5LmFkbGVyPWEuY2hlY2s9YS5mbGFncz9ZKGEuY2hlY2ssbmUsUSx5Lm5leHRfb3V0LVEpOkcoYS5jaGVjayxuZSxRLHkubmV4dF9vdXQtUSkpLHkuZGF0YV90eXBlPWEuYml0cysoYS5sYXN0PzY0OjApKyhhLm1vZGU9PT1IPzEyODowKSsoYS5tb2RlPT09dGV8fGEubW9kZT09PVQ/MjU2OjApLChpZT09PTAmJlE9PT0wfHxNPT09aSkmJk9lPT09cyYmKE9lPWMpLE9lfWZ1bmN0aW9uIEooeSl7aWYoIXl8fCF5LnN0YXRlKXJldHVybiBFO3ZhciBNPXkuc3RhdGU7cmV0dXJuIE0ud2luZG93JiYoTS53aW5kb3c9bnVsbCkseS5zdGF0ZT1udWxsLHN9ZnVuY3Rpb24gVyh5LE0pe3ZhciBhO3JldHVybiF5fHwheS5zdGF0ZXx8KGE9eS5zdGF0ZSwhKGEud3JhcCYyKSk/RTooYS5oZWFkPU0sTS5kb25lPSExLHMpfWZ1bmN0aW9uIGVlKHksTSl7dmFyIGE9TS5sZW5ndGgsSyxuZSxlO3JldHVybiF5fHwheS5zdGF0ZXx8KEs9eS5zdGF0ZSxLLndyYXAhPT0wJiZLLm1vZGUhPT1DKT9FOksubW9kZT09PUMmJihuZT0xLG5lPUcobmUsTSxhLDApLG5lIT09Sy5jaGVjayk/ZDooZT1WZSh5LE0sYSxhKSxlPyhLLm1vZGU9U2UsdSk6KEsuaGF2ZWRpY3Q9MSxzKSl9cmV0dXJuIExlLmluZmxhdGVSZXNldD1BZSxMZS5pbmZsYXRlUmVzZXQyPSRlLExlLmluZmxhdGVSZXNldEtlZXA9YmUsTGUuaW5mbGF0ZUluaXQ9Q2UsTGUuaW5mbGF0ZUluaXQyPWplLExlLmluZmxhdGU9bCxMZS5pbmZsYXRlRW5kPUosTGUuaW5mbGF0ZUdldEhlYWRlcj1XLExlLmluZmxhdGVTZXREaWN0aW9uYXJ5PWVlLExlLmluZmxhdGVJbmZvPSJwYWtvIGluZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpIixMZX12YXIgaDAsQjA7ZnVuY3Rpb24gejAoKXtyZXR1cm4gQjB8fChCMD0xLGgwPXtaX05PX0ZMVVNIOjAsWl9QQVJUSUFMX0ZMVVNIOjEsWl9TWU5DX0ZMVVNIOjIsWl9GVUxMX0ZMVVNIOjMsWl9GSU5JU0g6NCxaX0JMT0NLOjUsWl9UUkVFUzo2LFpfT0s6MCxaX1NUUkVBTV9FTkQ6MSxaX05FRURfRElDVDoyLFpfRVJSTk86LTEsWl9TVFJFQU1fRVJST1I6LTIsWl9EQVRBX0VSUk9SOi0zLFpfQlVGX0VSUk9SOi01LFpfTk9fQ09NUFJFU1NJT046MCxaX0JFU1RfU1BFRUQ6MSxaX0JFU1RfQ09NUFJFU1NJT046OSxaX0RFRkFVTFRfQ09NUFJFU1NJT046LTEsWl9GSUxURVJFRDoxLFpfSFVGRk1BTl9PTkxZOjIsWl9STEU6MyxaX0ZJWEVEOjQsWl9ERUZBVUxUX1NUUkFURUdZOjAsWl9CSU5BUlk6MCxaX1RFWFQ6MSxaX1VOS05PV046MixaX0RFRkxBVEVEOjh9KSxoMH12YXIgbDAsUjA7ZnVuY3Rpb24gajAoKXtpZihSMClyZXR1cm4gbDA7UjA9MTtmdW5jdGlvbiBtKCl7dGhpcy50ZXh0PTAsdGhpcy50aW1lPTAsdGhpcy54ZmxhZ3M9MCx0aGlzLm9zPTAsdGhpcy5leHRyYT1udWxsLHRoaXMuZXh0cmFfbGVuPTAsdGhpcy5uYW1lPSIiLHRoaXMuY29tbWVudD0iIix0aGlzLmhjcmM9MCx0aGlzLmRvbmU9ITF9cmV0dXJuIGwwPW0sbDB9dmFyIE4wO2Z1bmN0aW9uIFUwKCl7aWYoTjApcmV0dXJuIFdlO04wPTE7dmFyIG09SDAoKSxHPUhlKCksWT14MCgpLFI9ejAoKSxrPWkwKCksST1FMCgpLHI9ajAoKSx0PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7ZnVuY3Rpb24gaShzKXtpZighKHRoaXMgaW5zdGFuY2VvZiBpKSlyZXR1cm4gbmV3IGkocyk7dGhpcy5vcHRpb25zPUcuYXNzaWduKHtjaHVua1NpemU6MTYzODQsd2luZG93Qml0czowLHRvOiIifSxzfHx7fSk7dmFyIGg9dGhpcy5vcHRpb25zO2gucmF3JiZoLndpbmRvd0JpdHM+PTAmJmgud2luZG93Qml0czwxNiYmKGgud2luZG93Qml0cz0taC53aW5kb3dCaXRzLGgud2luZG93Qml0cz09PTAmJihoLndpbmRvd0JpdHM9LTE1KSksaC53aW5kb3dCaXRzPj0wJiZoLndpbmRvd0JpdHM8MTYmJiEocyYmcy53aW5kb3dCaXRzKSYmKGgud2luZG93Qml0cys9MzIpLGgud2luZG93Qml0cz4xNSYmaC53aW5kb3dCaXRzPDQ4JiYoaC53aW5kb3dCaXRzJjE1fHwoaC53aW5kb3dCaXRzfD0xNSkpLHRoaXMuZXJyPTAsdGhpcy5tc2c9IiIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IEksdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciB2PW0uaW5mbGF0ZUluaXQyKHRoaXMuc3RybSxoLndpbmRvd0JpdHMpO2lmKHYhPT1SLlpfT0spdGhyb3cgbmV3IEVycm9yKGtbdl0pO2lmKHRoaXMuaGVhZGVyPW5ldyByLG0uaW5mbGF0ZUdldEhlYWRlcih0aGlzLnN0cm0sdGhpcy5oZWFkZXIpLGguZGljdGlvbmFyeSYmKHR5cGVvZiBoLmRpY3Rpb25hcnk9PSJzdHJpbmciP2guZGljdGlvbmFyeT1ZLnN0cmluZzJidWYoaC5kaWN0aW9uYXJ5KTp0LmNhbGwoaC5kaWN0aW9uYXJ5KT09PSJbb2JqZWN0IEFycmF5QnVmZmVyXSImJihoLmRpY3Rpb25hcnk9bmV3IFVpbnQ4QXJyYXkoaC5kaWN0aW9uYXJ5KSksaC5yYXcmJih2PW0uaW5mbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLGguZGljdGlvbmFyeSksdiE9PVIuWl9PSykpKXRocm93IG5ldyBFcnJvcihrW3ZdKX1pLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHMsaCl7dmFyIHY9dGhpcy5zdHJtLEU9dGhpcy5vcHRpb25zLmNodW5rU2l6ZSxkPXRoaXMub3B0aW9ucy5kaWN0aW9uYXJ5LHUsYyxvLG4sdyxnPSExO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7Yz1oPT09fn5oP2g6aD09PSEwP1IuWl9GSU5JU0g6Ui5aX05PX0ZMVVNILHR5cGVvZiBzPT0ic3RyaW5nIj92LmlucHV0PVkuYmluc3RyaW5nMmJ1ZihzKTp0LmNhbGwocyk9PT0iW29iamVjdCBBcnJheUJ1ZmZlcl0iP3YuaW5wdXQ9bmV3IFVpbnQ4QXJyYXkocyk6di5pbnB1dD1zLHYubmV4dF9pbj0wLHYuYXZhaWxfaW49di5pbnB1dC5sZW5ndGg7ZG97aWYodi5hdmFpbF9vdXQ9PT0wJiYodi5vdXRwdXQ9bmV3IEcuQnVmOChFKSx2Lm5leHRfb3V0PTAsdi5hdmFpbF9vdXQ9RSksdT1tLmluZmxhdGUodixSLlpfTk9fRkxVU0gpLHU9PT1SLlpfTkVFRF9ESUNUJiZkJiYodT1tLmluZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxkKSksdT09PVIuWl9CVUZfRVJST1ImJmc9PT0hMCYmKHU9Ui5aX09LLGc9ITEpLHUhPT1SLlpfU1RSRUFNX0VORCYmdSE9PVIuWl9PSylyZXR1cm4gdGhpcy5vbkVuZCh1KSx0aGlzLmVuZGVkPSEwLCExO3YubmV4dF9vdXQmJih2LmF2YWlsX291dD09PTB8fHU9PT1SLlpfU1RSRUFNX0VORHx8di5hdmFpbF9pbj09PTAmJihjPT09Ui5aX0ZJTklTSHx8Yz09PVIuWl9TWU5DX0ZMVVNIKSkmJih0aGlzLm9wdGlvbnMudG89PT0ic3RyaW5nIj8obz1ZLnV0Zjhib3JkZXIodi5vdXRwdXQsdi5uZXh0X291dCksbj12Lm5leHRfb3V0LW8sdz1ZLmJ1ZjJzdHJpbmcodi5vdXRwdXQsbyksdi5uZXh0X291dD1uLHYuYXZhaWxfb3V0PUUtbixuJiZHLmFycmF5U2V0KHYub3V0cHV0LHYub3V0cHV0LG8sbiwwKSx0aGlzLm9uRGF0YSh3KSk6dGhpcy5vbkRhdGEoRy5zaHJpbmtCdWYodi5vdXRwdXQsdi5uZXh0X291dCkpKSx2LmF2YWlsX2luPT09MCYmdi5hdmFpbF9vdXQ9PT0wJiYoZz0hMCl9d2hpbGUoKHYuYXZhaWxfaW4+MHx8di5hdmFpbF9vdXQ9PT0wKSYmdSE9PVIuWl9TVFJFQU1fRU5EKTtyZXR1cm4gdT09PVIuWl9TVFJFQU1fRU5EJiYoYz1SLlpfRklOSVNIKSxjPT09Ui5aX0ZJTklTSD8odT1tLmluZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHUpLHRoaXMuZW5kZWQ9ITAsdT09PVIuWl9PSyk6KGM9PT1SLlpfU1lOQ19GTFVTSCYmKHRoaXMub25FbmQoUi5aX09LKSx2LmF2YWlsX291dD0wKSwhMCl9LGkucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbihzKXt0aGlzLmNodW5rcy5wdXNoKHMpfSxpLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbihzKXtzPT09Ui5aX09LJiYodGhpcy5vcHRpb25zLnRvPT09InN0cmluZyI/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbigiIik6dGhpcy5yZXN1bHQ9Ry5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9cyx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfTtmdW5jdGlvbiBiKHMsaCl7dmFyIHY9bmV3IGkoaCk7aWYodi5wdXNoKHMsITApLHYuZXJyKXRocm93IHYubXNnfHxrW3YuZXJyXTtyZXR1cm4gdi5yZXN1bHR9ZnVuY3Rpb24gXyhzLGgpe3JldHVybiBoPWh8fHt9LGgucmF3PSEwLGIocyxoKX1yZXR1cm4gV2UuSW5mbGF0ZT1pLFdlLmluZmxhdGU9YixXZS5pbmZsYXRlUmF3PV8sV2UudW5nemlwPWIsV2V9dmFyIG8wLEwwO2Z1bmN0aW9uIEowKCl7aWYoTDApcmV0dXJuIG8wO0wwPTE7dmFyIG09SGUoKS5hc3NpZ24sRz1QMCgpLFk9VTAoKSxSPXowKCksaz17fTtyZXR1cm4gbShrLEcsWSxSKSxvMD1rLG8wfShmdW5jdGlvbihtKXsoZnVuY3Rpb24oKXt2YXIgRz17fTttLmV4cG9ydHM9Rzt2YXIgWTt0eXBlb2YgQzA9PSJmdW5jdGlvbiI/WT1KMCgpOlk9c2VsZi5wYWtvO2Z1bmN0aW9uIFIoKXsodHlwZW9mIHByb2Nlc3M+InUifHxwcm9jZXNzLmVudi5OT0RFX0VOVj09ImRldmVsb3BtZW50IikmJmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsYXJndW1lbnRzKX0oZnVuY3Rpb24oayxJKXsoZnVuY3Rpb24oKXt2YXIgcj10eXBlb2YgU3ltYm9sPT0iZnVuY3Rpb24iJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT0ic3ltYm9sIj9mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIGJ9OmZ1bmN0aW9uKGIpe3JldHVybiBiJiZ0eXBlb2YgU3ltYm9sPT0iZnVuY3Rpb24iJiZiLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZiIT09U3ltYm9sLnByb3RvdHlwZT8ic3ltYm9sIjp0eXBlb2YgYn0sdD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoXyl7dGhpcy5tZXNzYWdlPSJKUEVHIGVycm9yOiAiK199cmV0dXJuIGIucHJvdG90eXBlPUVycm9yKCksYi5wcm90b3R5cGUubmFtZT0iSnBlZ0Vycm9yIixiLmNvbnN0cnVjdG9yPWJ9KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoXyxzKXt0aGlzLm1lc3NhZ2U9Xyx0aGlzLmc9c31yZXR1cm4gYi5wcm90b3R5cGU9RXJyb3IoKSxiLnByb3RvdHlwZS5uYW1lPSJETkxNYXJrZXJFcnJvciIsYi5jb25zdHJ1Y3Rvcj1ifSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXt0aGlzLk09bnVsbCx0aGlzLkI9LTF9ZnVuY3Rpb24gXyhkLHUpe2Zvcih2YXIgYz0wLG89W10sbix3LGc9MTY7MDxnJiYhZFtnLTFdOylnLS07by5wdXNoKHtjaGlsZHJlbjpbXSxpbmRleDowfSk7dmFyIHA9b1swXSxTO2ZvcihuPTA7bjxnO24rKyl7Zm9yKHc9MDt3PGRbbl07dysrKXtmb3IocD1vLnBvcCgpLHAuY2hpbGRyZW5bcC5pbmRleF09dVtjXTswPHAuaW5kZXg7KXA9by5wb3AoKTtmb3IocC5pbmRleCsrLG8ucHVzaChwKTtvLmxlbmd0aDw9bjspby5wdXNoKFM9e2NoaWxkcmVuOltdLGluZGV4OjB9KSxwLmNoaWxkcmVuW3AuaW5kZXhdPVMuY2hpbGRyZW4scD1TO2MrK31uKzE8ZyYmKG8ucHVzaChTPXtjaGlsZHJlbjpbXSxpbmRleDowfSkscC5jaGlsZHJlbltwLmluZGV4XT1TLmNoaWxkcmVuLHA9Uyl9cmV0dXJuIG9bMF0uY2hpbGRyZW59ZnVuY3Rpb24gcyhkLHUsYyxvLG4sdyxnLHAsUyl7ZnVuY3Rpb24gQSgpe2lmKDA8JClyZXR1cm4gJC0tLGFlPj4kJjE7aWYoYWU9ZFt1KytdLGFlPT09MjU1KXt2YXIgcT1kW3UrK107aWYocSl7aWYocT09PTIyMCYmVCl7dSs9Mjt2YXIgcmU9ZFt1KytdPDw4fGRbdSsrXTtpZigwPHJlJiZyZSE9PWMuZyl0aHJvdyBuZXcgaSgiRm91bmQgRE5MIG1hcmtlciAoMHhGRkRDKSB3aGlsZSBwYXJzaW5nIHNjYW4gZGF0YSIscmUpfXRocm93IG5ldyB0KCJ1bmV4cGVjdGVkIG1hcmtlciAiKyhhZTw8OHxxKS50b1N0cmluZygxNikpfX1yZXR1cm4gJD03LGFlPj4+N31mdW5jdGlvbiBMKHEpe2Zvcig7Oyl7aWYocT1xW0EoKV0sdHlwZW9mIHE9PSJudW1iZXIiKXJldHVybiBxO2lmKCh0eXBlb2YgcT4idSI/InVuZGVmaW5lZCI6cihxKSkhPT0ib2JqZWN0Iil0aHJvdyBuZXcgdCgiaW52YWxpZCBodWZmbWFuIHNlcXVlbmNlIil9fWZ1bmN0aW9uIEQocSl7Zm9yKHZhciByZT0wOzA8cTspcmU9cmU8PDF8QSgpLHEtLTtyZXR1cm4gcmV9ZnVuY3Rpb24gQihxKXtpZihxPT09MSlyZXR1cm4gQSgpPT09MT8xOi0xO3ZhciByZT1EKHEpO3JldHVybiByZT49MTw8cS0xP3JlOnJlKygtMTw8cSkrMX1mdW5jdGlvbiBqKHEscmUpe3ZhciBkZT1MKHEuRCk7Zm9yKGRlPWRlPT09MD8wOkIoZGUpLHEuYVtyZV09cS5tKz1kZSxkZT0xOzY0PmRlOyl7dmFyIHdlPUwocS5vKSxiZT13ZSYxNTtpZih3ZT4+PTQsYmU9PT0wKXtpZigxNT53ZSlicmVhaztkZSs9MTZ9ZWxzZSBkZSs9d2UscS5hW3JlK0VbZGVdXT1CKGJlKSxkZSsrfX1mdW5jdGlvbiBDKHEscmUpe3ZhciBkZT1MKHEuRCk7ZGU9ZGU9PT0wPzA6QihkZSk8PFMscS5hW3JlXT1xLm0rPWRlfWZ1bmN0aW9uIEgocSxyZSl7cS5hW3JlXXw9QSgpPDxTfWZ1bmN0aW9uIFUocSxyZSl7aWYoMDx0ZSl0ZS0tO2Vsc2UgZm9yKHZhciBkZT13O2RlPD1nOyl7dmFyIHdlPUwocS5vKSxiZT13ZSYxNTtpZih3ZT4+PTQsYmU9PT0wKXtpZigxNT53ZSl7dGU9RCh3ZSkrKDE8PHdlKS0xO2JyZWFrfWRlKz0xNn1lbHNlIGRlKz13ZSxxLmFbcmUrRVtkZV1dPUIoYmUpKigxPDxTKSxkZSsrfX1mdW5jdGlvbiBYKHEscmUpe2Zvcih2YXIgZGU9dyx3ZT0wLGJlO2RlPD1nOyl7YmU9cmUrRVtkZV07dmFyIEFlPTA+cS5hW2JlXT8tMToxO3N3aXRjaChWKXtjYXNlIDA6aWYod2U9TChxLm8pLGJlPXdlJjE1LHdlPj49NCxiZT09PTApMTU+d2U/KHRlPUQod2UpKygxPDx3ZSksVj00KTood2U9MTYsVj0xKTtlbHNle2lmKGJlIT09MSl0aHJvdyBuZXcgdCgiaW52YWxpZCBBQ24gZW5jb2RpbmciKTt1ZT1CKGJlKSxWPXdlPzI6M31jb250aW51ZTtjYXNlIDE6Y2FzZSAyOnEuYVtiZV0/cS5hW2JlXSs9QWUqKEEoKTw8Uyk6KHdlLS0sd2U9PT0wJiYoVj1WPT09Mj8zOjApKTticmVhaztjYXNlIDM6cS5hW2JlXT9xLmFbYmVdKz1BZSooQSgpPDxTKToocS5hW2JlXT11ZTw8UyxWPTApO2JyZWFrO2Nhc2UgNDpxLmFbYmVdJiYocS5hW2JlXSs9QWUqKEEoKTw8UykpfWRlKyt9Vj09PTQmJih0ZS0tLHRlPT09MCYmKFY9MCkpfWZvcih2YXIgVD05PGFyZ3VtZW50cy5sZW5ndGgmJmFyZ3VtZW50c1s5XSE9PXZvaWQgMD9hcmd1bWVudHNbOV06ITEsUD1jLlAsWj11LGFlPTAsJD0wLHRlPTAsVj0wLHVlLGZlPW8ubGVuZ3RoLGhlLGxlLHNlLGdlLHplPWMuUz93PT09MD9wPT09MD9DOkg6cD09PTA/VTpYOmoseGU9MCxjZT1mZT09PTE/b1swXS5jKm9bMF0ubDpQKmMuTyxTZSxtZTt4ZTxjZTspe3ZhciBSZT1uP01hdGgubWluKGNlLXhlLG4pOmNlO2ZvcihoZT0wO2hlPGZlO2hlKyspb1toZV0ubT0wO2lmKHRlPTAsZmU9PT0xKXt2YXIgb2U9b1swXTtmb3IoZ2U9MDtnZTxSZTtnZSsrKXplKG9lLDY0Kigob2UuYysxKSooeGUvb2UuY3wwKSt4ZSVvZS5jKSkseGUrK31lbHNlIGZvcihnZT0wO2dlPFJlO2dlKyspe2ZvcihoZT0wO2hlPGZlO2hlKyspZm9yKG9lPW9baGVdLFNlPW9lLmgsbWU9b2UuaixsZT0wO2xlPG1lO2xlKyspZm9yKHNlPTA7c2U8U2U7c2UrKyl6ZShvZSw2NCooKG9lLmMrMSkqKCh4ZS9QfDApKm9lLmorbGUpKyh4ZSVQKm9lLmgrc2UpKSk7eGUrK31pZigkPTAsKG9lPXYoZCx1KSkmJm9lLmYmJigoMCxfdXRpbC53YXJuKSgiZGVjb2RlU2NhbiAtIHVuZXhwZWN0ZWQgTUNVIGRhdGEsIGN1cnJlbnQgbWFya2VyIGlzOiAiK29lLmYpLHU9b2Uub2Zmc2V0KSxvZT1vZSYmb2UuRiwhb2V8fDY1MjgwPj1vZSl0aHJvdyBuZXcgdCgibWFya2VyIHdhcyBub3QgZm91bmQiKTtpZig2NTQ4ODw9b2UmJjY1NDk1Pj1vZSl1Kz0yO2Vsc2UgYnJlYWt9cmV0dXJuKG9lPXYoZCx1KSkmJm9lLmYmJigoMCxfdXRpbC53YXJuKSgiZGVjb2RlU2NhbiAtIHVuZXhwZWN0ZWQgU2NhbiBkYXRhLCBjdXJyZW50IG1hcmtlciBpczogIitvZS5mKSx1PW9lLm9mZnNldCksdS1afWZ1bmN0aW9uIGgoZCx1KXtmb3IodmFyIGM9dS5jLG89dS5sLG49bmV3IEludDE2QXJyYXkoNjQpLHc9MDt3PG87dysrKWZvcih2YXIgZz0wO2c8YztnKyspe3ZhciBwPTY0KigodS5jKzEpKncrZyksUz1uLEE9dS5HLEw9dS5hO2lmKCFBKXRocm93IG5ldyB0KCJtaXNzaW5nIHJlcXVpcmVkIFF1YW50aXphdGlvbiBUYWJsZS4iKTtmb3IodmFyIEQ9MDs2ND5EO0QrPTgpe3ZhciBCPUxbcCtEXSxqPUxbcCtEKzFdLEM9TFtwK0QrMl0sSD1MW3ArRCszXSxVPUxbcCtEKzRdLFg9TFtwK0QrNV0sVD1MW3ArRCs2XSxQPUxbcCtEKzddO2lmKEIqPUFbRF0sIShqfEN8SHxVfFh8VHxQKSlCPTU3OTMqQis1MTI+PjEwLFNbRF09QixTW0QrMV09QixTW0QrMl09QixTW0QrM109QixTW0QrNF09QixTW0QrNV09QixTW0QrNl09QixTW0QrN109QjtlbHNle2oqPUFbRCsxXSxDKj1BW0QrMl0sSCo9QVtEKzNdLFUqPUFbRCs0XSxYKj1BW0QrNV0sVCo9QVtEKzZdLFAqPUFbRCs3XTt2YXIgWj01NzkzKkIrMTI4Pj44LGFlPTU3OTMqVSsxMjg+PjgsJD1DLHRlPVQ7VT0yODk2KihqLVApKzEyOD4+OCxQPTI4OTYqKGorUCkrMTI4Pj44LEg8PD00LFg8PD00LFo9WithZSsxPj4xLGFlPVotYWUsQj0zNzg0KiQrMTU2Nyp0ZSsxMjg+PjgsJD0xNTY3KiQtMzc4NCp0ZSsxMjg+PjgsdGU9QixVPVUrWCsxPj4xLFg9VS1YLFA9UCtIKzE+PjEsSD1QLUgsWj1aK3RlKzE+PjEsdGU9Wi10ZSxhZT1hZSskKzE+PjEsJD1hZS0kLEI9MjI3NipVKzM0MDYqUCsyMDQ4Pj4xMixVPTM0MDYqVS0yMjc2KlArMjA0OD4+MTIsUD1CLEI9Nzk5KkgrNDAxNypYKzIwNDg+PjEyLEg9NDAxNypILTc5OSpYKzIwNDg+PjEyLFg9QixTW0RdPVorUCxTW0QrN109Wi1QLFNbRCsxXT1hZStYLFNbRCs2XT1hZS1YLFNbRCsyXT0kK0gsU1tEKzVdPSQtSCxTW0QrM109dGUrVSxTW0QrNF09dGUtVX19Zm9yKEE9MDs4PkE7KytBKUI9U1tBXSxqPVNbQSs4XSxDPVNbQSsxNl0sSD1TW0ErMjRdLFU9U1tBKzMyXSxYPVNbQSs0MF0sVD1TW0ErNDhdLFA9U1tBKzU2XSxqfEN8SHxVfFh8VHxQPyhaPTU3OTMqQisyMDQ4Pj4xMixhZT01NzkzKlUrMjA0OD4+MTIsJD1DLHRlPVQsVT0yODk2KihqLVApKzIwNDg+PjEyLFA9Mjg5NiooaitQKSsyMDQ4Pj4xMixaPShaK2FlKzE+PjEpKzQxMTIsYWU9Wi1hZSxCPTM3ODQqJCsxNTY3KnRlKzIwNDg+PjEyLCQ9MTU2NyokLTM3ODQqdGUrMjA0OD4+MTIsdGU9QixVPVUrWCsxPj4xLFg9VS1YLFA9UCtIKzE+PjEsSD1QLUgsWj1aK3RlKzE+PjEsdGU9Wi10ZSxhZT1hZSskKzE+PjEsJD1hZS0kLEI9MjI3NipVKzM0MDYqUCsyMDQ4Pj4xMixVPTM0MDYqVS0yMjc2KlArMjA0OD4+MTIsUD1CLEI9Nzk5KkgrNDAxNypYKzIwNDg+PjEyLEg9NDAxNypILTc5OSpYKzIwNDg+PjEyLFg9QixCPVorUCxQPVotUCxqPWFlK1gsVD1hZS1YLEM9JCtILFg9JC1ILEg9dGUrVSxVPXRlLVUsQj0xNj5CPzA6NDA4MDw9Qj8yNTU6Qj4+NCxqPTE2Pmo/MDo0MDgwPD1qPzI1NTpqPj40LEM9MTY+Qz8wOjQwODA8PUM/MjU1OkM+PjQsSD0xNj5IPzA6NDA4MDw9SD8yNTU6SD4+NCxVPTE2PlU/MDo0MDgwPD1VPzI1NTpVPj40LFg9MTY+WD8wOjQwODA8PVg/MjU1Olg+PjQsVD0xNj5UPzA6NDA4MDw9VD8yNTU6VD4+NCxQPTE2PlA/MDo0MDgwPD1QPzI1NTpQPj40LExbcCtBXT1CLExbcCtBKzhdPWosTFtwK0ErMTZdPUMsTFtwK0ErMjRdPUgsTFtwK0ErMzJdPVUsTFtwK0ErNDBdPVgsTFtwK0ErNDhdPVQsTFtwK0ErNTZdPVApOihCPTU3OTMqQis4MTkyPj4xNCxCPS0yMDQwPkI/MDoyMDI0PD1CPzI1NTpCKzIwNTY+PjQsTFtwK0FdPUIsTFtwK0ErOF09QixMW3ArQSsxNl09QixMW3ArQSsyNF09QixMW3ArQSszMl09QixMW3ArQSs0MF09QixMW3ArQSs0OF09QixMW3ArQSs1Nl09Qil9cmV0dXJuIHUuYX1mdW5jdGlvbiB2KGQsdSl7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOnUsbz1kLmxlbmd0aC0xO2lmKGM9Yzx1P2M6dSx1Pj1vKXJldHVybiBudWxsO3ZhciBuPWRbdV08PDh8ZFt1KzFdO2lmKDY1NDcyPD1uJiY2NTUzND49bilyZXR1cm57ZjpudWxsLEY6bixvZmZzZXQ6dX07Zm9yKHZhciB3PWRbY108PDh8ZFtjKzFdOyEoNjU0NzI8PXcmJjY1NTM0Pj13KTspe2lmKCsrYz49bylyZXR1cm4gbnVsbDt3PWRbY108PDh8ZFtjKzFdfXJldHVybntmOm4udG9TdHJpbmcoMTYpLEY6dyxvZmZzZXQ6Y319dmFyIEU9bmV3IFVpbnQ4QXJyYXkoWzAsMSw4LDE2LDksMiwzLDEwLDE3LDI0LDMyLDI1LDE4LDExLDQsNSwxMiwxOSwyNiwzMyw0MCw0OCw0MSwzNCwyNywyMCwxMyw2LDcsMTQsMjEsMjgsMzUsNDIsNDksNTYsNTcsNTAsNDMsMzYsMjksMjIsMTUsMjMsMzAsMzcsNDQsNTEsNTgsNTksNTIsNDUsMzgsMzEsMzksNDYsNTMsNjAsNjEsNTQsNDcsNTUsNjIsNjNdKTtiLnByb3RvdHlwZT17cGFyc2U6ZnVuY3Rpb24oZCl7ZnVuY3Rpb24gdSgpe3ZhciAkPWRbZ108PDh8ZFtnKzFdO3JldHVybiBnKz0yLCR9ZnVuY3Rpb24gYygpe3ZhciAkPXUoKTskPWcrJC0yO3ZhciB0ZT12KGQsJCxnKTtyZXR1cm4gdGUmJnRlLmYmJigoMCxfdXRpbC53YXJuKSgicmVhZERhdGFCbG9jayAtIGluY29ycmVjdCBsZW5ndGgsIGN1cnJlbnQgbWFya2VyIGlzOiAiK3RlLmYpLCQ9dGUub2Zmc2V0KSwkPWQuc3ViYXJyYXkoZywkKSxnKz0kLmxlbmd0aCwkfWZ1bmN0aW9uIG8oJCl7Zm9yKHZhciB0ZT1NYXRoLmNlaWwoJC52LzgvJC5zKSxWPU1hdGguY2VpbCgkLmcvOC8kLnUpLHVlPTA7dWU8JC5iLmxlbmd0aDt1ZSsrKXtaPSQuYlt1ZV07dmFyIGZlPU1hdGguY2VpbChNYXRoLmNlaWwoJC52LzgpKlouaC8kLnMpLGhlPU1hdGguY2VpbChNYXRoLmNlaWwoJC5nLzgpKlouai8kLnUpO1ouYT1uZXcgSW50MTZBcnJheSg2NCpWKlouaioodGUqWi5oKzEpKSxaLmM9ZmUsWi5sPWhlfSQuUD10ZSwkLk89Vn12YXIgbj0oMTxhcmd1bWVudHMubGVuZ3RoJiZhcmd1bWVudHNbMV0hPT12b2lkIDA/YXJndW1lbnRzWzFdOnt9KS5OLHc9bj09PXZvaWQgMD9udWxsOm4sZz0wLHA9bnVsbCxTPTA7bj1bXTt2YXIgQT1bXSxMPVtdLEQ9dSgpO2lmKEQhPT02NTQ5Nil0aHJvdyBuZXcgdCgiU09JIG5vdCBmb3VuZCIpO2ZvcihEPXUoKTtEIT09NjU0OTc7KXtzd2l0Y2goRCl7Y2FzZSA2NTUwNDpjYXNlIDY1NTA1OmNhc2UgNjU1MDY6Y2FzZSA2NTUwNzpjYXNlIDY1NTA4OmNhc2UgNjU1MDk6Y2FzZSA2NTUxMDpjYXNlIDY1NTExOmNhc2UgNjU1MTI6Y2FzZSA2NTUxMzpjYXNlIDY1NTE0OmNhc2UgNjU1MTU6Y2FzZSA2NTUxNjpjYXNlIDY1NTE3OmNhc2UgNjU1MTg6Y2FzZSA2NTUxOTpjYXNlIDY1NTM0OnZhciBCPWMoKTtEPT09NjU1MTgmJkJbMF09PT02NSYmQlsxXT09PTEwMCYmQlsyXT09PTExMSYmQlszXT09PTk4JiZCWzRdPT09MTAxJiYocD17dmVyc2lvbjpCWzVdPDw4fEJbNl0sWTpCWzddPDw4fEJbOF0sWjpCWzldPDw4fEJbMTBdLFc6QlsxMV19KTticmVhaztjYXNlIDY1NDk5OkQ9dSgpK2ctMjtmb3IodmFyIGo7ZzxEOyl7dmFyIEM9ZFtnKytdLEg9bmV3IFVpbnQxNkFycmF5KDY0KTtpZihDPj40KWlmKEM+PjQ9PT0xKWZvcihCPTA7NjQ+QjtCKyspaj1FW0JdLEhbal09dSgpO2Vsc2UgdGhyb3cgbmV3IHQoIkRRVCAtIGludmFsaWQgdGFibGUgc3BlYyIpO2Vsc2UgZm9yKEI9MDs2ND5CO0IrKylqPUVbQl0sSFtqXT1kW2crK107bltDJjE1XT1IfWJyZWFrO2Nhc2UgNjU0NzI6Y2FzZSA2NTQ3MzpjYXNlIDY1NDc0OmlmKFUpdGhyb3cgbmV3IHQoIk9ubHkgc2luZ2xlIGZyYW1lIEpQRUdzIHN1cHBvcnRlZCIpO3UoKTt2YXIgVT17fTtmb3IoVS5YPUQ9PT02NTQ3MyxVLlM9RD09PTY1NDc0LFUucHJlY2lzaW9uPWRbZysrXSxEPXUoKSxVLmc9d3x8RCxVLnY9dSgpLFUuYj1bXSxVLkM9e30sQj1kW2crK10sRD1IPUM9MDtEPEI7RCsrKXtqPWRbZ107dmFyIFg9ZFtnKzFdPj40LFQ9ZFtnKzFdJjE1O0M8WCYmKEM9WCksSDxUJiYoSD1UKSxYPVUuYi5wdXNoKHtoOlgsajpULFQ6ZFtnKzJdLEc6bnVsbH0pLFUuQ1tqXT1YLTEsZys9M31VLnM9QyxVLnU9SCxvKFUpO2JyZWFrO2Nhc2UgNjU0NzY6Zm9yKGo9dSgpLEQ9MjtEPGo7KXtmb3IoQz1kW2crK10sSD1uZXcgVWludDhBcnJheSgxNiksQj1YPTA7MTY+QjtCKyssZysrKVgrPUhbQl09ZFtnXTtmb3IoVD1uZXcgVWludDhBcnJheShYKSxCPTA7QjxYO0IrKyxnKyspVFtCXT1kW2ddO0QrPTE3K1gsKEM+PjQ/QTpMKVtDJjE1XT1fKEgsVCl9YnJlYWs7Y2FzZSA2NTUwMTp1KCk7dmFyIFA9dSgpO2JyZWFrO2Nhc2UgNjU0OTg6Zm9yKEI9KytTPT09MSYmIXcsdSgpLEM9ZFtnKytdLGo9W10sRD0wO0Q8QztEKyspe0g9VS5DW2RbZysrXV07dmFyIFo9VS5iW0hdO0g9ZFtnKytdLFouRD1MW0g+PjRdLFoubz1BW0gmMTVdLGoucHVzaChaKX1EPWRbZysrXSxDPWRbZysrXSxIPWRbZysrXTt0cnl7dmFyIGFlPXMoZCxnLFUsaixQLEQsQyxIPj40LEgmMTUsQik7Zys9YWV9Y2F0Y2goJCl7aWYoJCBpbnN0YW5jZW9mIGkpcmV0dXJuKDAsX3V0aWwud2FybikoJ0F0dGVtcHRpbmcgdG8gcmUtcGFyc2UgSlBFRyBpbWFnZSB1c2luZyAic2NhbkxpbmVzIiBwYXJhbWV0ZXIgZm91bmQgaW4gRE5MIG1hcmtlciAoMHhGRkRDKSBzZWdtZW50LicpLHRoaXMucGFyc2UoZCx7TjokLmd9KTt0aHJvdyAkfWJyZWFrO2Nhc2UgNjU1MDA6Zys9NDticmVhaztjYXNlIDY1NTM1OmRbZ10hPT0yNTUmJmctLTticmVhaztkZWZhdWx0OmlmKGRbZy0zXT09PTI1NSYmMTkyPD1kW2ctMl0mJjI1ND49ZFtnLTJdKWctPTM7ZWxzZSBpZigoQj12KGQsZy0yKSkmJkIuZikoMCxfdXRpbC53YXJuKSgiSnBlZ0ltYWdlLnBhcnNlIC0gdW5leHBlY3RlZCBkYXRhLCBjdXJyZW50IG1hcmtlciBpczogIitCLmYpLGc9Qi5vZmZzZXQ7ZWxzZSB0aHJvdyBuZXcgdCgidW5rbm93biBtYXJrZXIgIitELnRvU3RyaW5nKDE2KSl9RD11KCl9Zm9yKHRoaXMud2lkdGg9VS52LHRoaXMuaGVpZ2h0PVUuZyx0aGlzLkE9cCx0aGlzLmI9W10sRD0wO0Q8VS5iLmxlbmd0aDtEKyspWj1VLmJbRF0sKFA9bltaLlRdKSYmKFouRz1QKSx0aGlzLmIucHVzaCh7UjpoKFUsWiksVTpaLmgvVS5zLFY6Wi5qL1UudSxjOlouYyxsOloubH0pO3RoaXMuaT10aGlzLmIubGVuZ3RofSxMOmZ1bmN0aW9uKGQsdSl7dmFyIGM9dGhpcy53aWR0aC9kLG89dGhpcy5oZWlnaHQvdSxuLHcsZz10aGlzLmIubGVuZ3RoLHA9ZCp1KmcsUz1uZXcgVWludDhDbGFtcGVkQXJyYXkocCksQT1uZXcgVWludDMyQXJyYXkoZCk7Zm9yKHc9MDt3PGc7dysrKXt2YXIgTD10aGlzLmJbd10sRD1MLlUqYyxCPUwuVipvLGo9dyxDPUwuUixIPUwuYysxPDwzO2ZvcihuPTA7bjxkO24rKylMPTB8bipELEFbbl09KEwmNDI5NDk2NzI4OCk8PDN8TCY3O2ZvcihEPTA7RDx1O0QrKylmb3IoTD0wfEQqQixMPUgqKEwmNDI5NDk2NzI4OCl8KEwmNyk8PDMsbj0wO248ZDtuKyspU1tqXT1DW0wrQVtuXV0sais9Z31pZihvPXRoaXMuTSlmb3Iodz0wO3c8cDspZm9yKGM9TD0wO0w8ZztMKyssdysrLGMrPTIpU1t3XT0oU1t3XSpvW2NdPj44KStvW2MrMV07cmV0dXJuIFN9LHc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5BPyEhdGhpcy5BLlc6dGhpcy5pPT09Mz90aGlzLkIhPT0wOnRoaXMuQj09PTF9LEk6ZnVuY3Rpb24oZCl7Zm9yKHZhciB1LGMsbyxuPTAsdz1kLmxlbmd0aDtuPHc7bis9Myl1PWRbbl0sYz1kW24rMV0sbz1kW24rMl0sZFtuXT11LTE3OS40NTYrMS40MDIqbyxkW24rMV09dSsxMzUuNDU5LS4zNDQqYy0uNzE0Km8sZFtuKzJdPXUtMjI2LjgxNisxLjc3MipjO3JldHVybiBkfSxLOmZ1bmN0aW9uKGQpe2Zvcih2YXIgdSxjLG8sbix3PTAsZz0wLHA9ZC5sZW5ndGg7ZzxwO2crPTQpdT1kW2ddLGM9ZFtnKzFdLG89ZFtnKzJdLG49ZFtnKzNdLGRbdysrXT0tMTIyLjY3MTk1NDA2ODk0K2MqKC02NjA2MzU2Njk0MjAzNjRlLTE5KmMrLjAwMDQzNzEzMDQ3NTkyNjIzMipvLTU0MDgwNjEwMDY0NTk5ZS0xOCp1Ky4wMDA0ODQ0OTc5NzEyMDI4MSpuLS4xNTQzNjIxNTE4NzExMjYpK28qKC0uMDAwOTU3OTY0Mzc4NDQ1NzczKm8rLjAwMDgxNzA3NjkxMTM0NjYyNSp1LS4wMDQ3NzI3MTQwNTQwODc0NypuKzEuNTMzODAyNTMyMjE3MzQpK3UqKC4wMDA5NjEyNTAxODQxMzA2ODgqdS0uMDAyNjYyNTczMzIyODM5MzMqbisuNDgzNTcwODg0NTEyNjUpK24qKC0uMDAwMzM2MTk3MTc3NjE4Mzk0Km4rLjQ4NDc5MTU2MTQ5MDc3NiksZFt3KytdPTEwNy4yNjgwMzkzOTc3MjQrYyooMjE5OTI3MTA0NTI1NzQxZS0xOSpjLS4wMDA2NDA5OTIwMTgyOTc5NDUqbysuMDAwNjU5Mzk3MDAxMjQ1NTc3KnUrLjAwMDQyNjEwNTY1MjkzODgzNypuLS4xNzY0OTE3OTI0NjI4NzUpK28qKC0uMDAwNzc4MjY5OTQxNTEzNjgzKm8rLjAwMTMwODcyMjYxNDA4Mjc1KnUrLjAwMDc3MDQ4MjYzMTgwMTEzMipuLS4xNTEwNTE0OTI3NzU1NjIpK3UqKC4wMDEyNjkzNTM2ODExNDg0Myp1LS4wMDI2NTA5MDE4OTAxMDg5OCpuKy4yNTgwMjkxMDIwNjg0NSkrbiooLS4wMDAzMTg5MTMxMTc1ODgzMjgqbi0uMjEzNzQyNDAwMzIzNjY1KSxkW3crK109LTIwLjgxMDAxMjU0Njk0NytjKigtLjAwMDU3MDExNTE5Njk3MzY3NypjLTI2MzQwOTA1MTAwNDU4OWUtMTkqbysuMDAyMDc0MTA4ODExNTAxMip1LS4wMDI4ODI2MDIzNjg1MzQ0MipuKy44MTQyNzI5NjgzNTkyOTUpK28qKC0xNTM0OTYwNTc0NDA5NzVlLTE5Km8tLjAwMDEzMjY4OTA0Mzk2MTQ0Nip1Ky4wMDA1NjA4MzM2OTEyNDI4MTIqbi0uMTk1MTUyMDI3NTM0MDQ5KSt1KiguMDAxNzQ0MTgxMzI5Mjc1ODIqdS0uMDAyNTUyNDMzMjE0MzkzNDcqbisuMTE2OTM1MDIwNDY1MTQ1KStuKigtLjAwMDM0MzUzMTk5NjUxMDU1NSpuKy4yNDE2NTI2MDIzMjQwNyk7cmV0dXJuIGQuc3ViYXJyYXkoMCx3KX0sSjpmdW5jdGlvbihkKXtmb3IodmFyIHUsYyxvLG49MCx3PWQubGVuZ3RoO248dztuKz00KXU9ZFtuXSxjPWRbbisxXSxvPWRbbisyXSxkW25dPTQzNC40NTYtdS0xLjQwMipvLGRbbisxXT0xMTkuNTQxLXUrLjM0NCpjKy43MTQqbyxkW24rMl09NDgxLjgxNi11LTEuNzcyKmM7cmV0dXJuIGR9LEg6ZnVuY3Rpb24oZCl7Zm9yKHZhciB1LGMsbyxuLHc9MCxnPTEvMjU1LHA9MCxTPWQubGVuZ3RoO3A8UztwKz00KXU9ZFtwXSpnLGM9ZFtwKzFdKmcsbz1kW3ArMl0qZyxuPWRbcCszXSpnLGRbdysrXT0yNTUrdSooLTQuMzg3MzMyMzg0NjA5OTg4KnUrNTQuNDg2MTUxOTQxODkxNzYqYysxOC44MjI5MDUwMjE2NTMwMipvKzIxMi4yNTY2MjQ1MTYzOTU4NSpuLTI4NS4yMzMxMDI2MTM3MDA0KStjKigxLjcxNDk3NjM0NzczNjIxMzQqYy01LjYwOTY3MzY5MDQwNDczMTUqby0xNy44NzM4NzA4NjE0MTU0NDQqbi01LjQ5NzAwNjQyNzE5NjM2NikrbyooLTIuNTIxNzM0MDEzMTY4MzAzMypvLTIxLjI0ODkyMzMzNzM1MzA3MypuKzE3LjUxMTkyNzA4NDE4MTMpLW4qKDIxLjg2MTIyMTQ3NDYzNjA1Km4rMTg5LjQ4MTgwODM1OTIyNzQ3KSxkW3crK109MjU1K3UqKDguODQxMDQxNDIyMDM2MTQ5KnUrNjAuMTE4MDI3MDQ1NTk3MzY2KmMrNi44NzE0MjU1OTIwNDkwMDcqbyszMS4xNTkxMDAxMzAwNTU5MjIqbi03OS4yOTcwODQ0ODE2NTQ4KStjKigtMTUuMzEwMzYxMzA2OTY3ODE3KmMrMTcuNTc1MjUxMjYxMTA5NDgyKm8rMTMxLjM1MjUwOTEyNDkzOTc2Km4tMTkwLjk0NTMzMDI1ODg5NTEpK28qKDQuNDQ0MzM5MTAyODUyNzM5Km8rOS44NjMyODYxNDkzNDA1Km4tMjQuODY3NDE1ODI1NTU4NzgpLW4qKDIwLjczNzMyNTQ3MTE4MTAzNCpuKzE4Ny44MDQ1MzcwOTcxOTU3OCksZFt3KytdPTI1NSt1KiguODg0MjUyMjQzMDAwMzI5Nip1KzguMDc4Njc3NTAzMTEyOTI4KmMrMzAuODk5NzgzMDk3MDM3Mjkqby0uMjM4ODMyMzg2ODkxNzg5MzQqbi0xNC4xODM1NzY3OTk2NzMyODYpK2MqKDEwLjQ5NTkzMjczNDMyMDcyKmMrNjMuMDIzNzg0OTQ3NTQwNTIqbys1MC42MDY5NTc2NTYzNjA3MzQqbi0xMTIuMjM4ODQyNTM3MTkyNDgpK28qKC4wMzI5NjA0MTExNDg3MzIxNypvKzExNS42MDM4NDQ0OTY0NjY0MSpuLTE5My41ODIwOTM1Njg2MTUwNSktbiooMjIuMzM4MTY4MDczMDk4ODYqbisxODAuMTI2MTM5NzQ3MDgzNjcpO3JldHVybiBkLnN1YmFycmF5KDAsdyl9LGdldERhdGE6ZnVuY3Rpb24oZCx1LGMpe2lmKDQ8dGhpcy5pKXRocm93IG5ldyB0KCJVbnN1cHBvcnRlZCBjb2xvciBtb2RlIik7aWYoZD10aGlzLkwoZCx1KSx0aGlzLmk9PT0xJiZjKXtjPWQubGVuZ3RoLHU9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KDMqYyk7Zm9yKHZhciBvPTAsbj0wO248YztuKyspe3ZhciB3PWRbbl07dVtvKytdPXcsdVtvKytdPXcsdVtvKytdPXd9cmV0dXJuIHV9aWYodGhpcy5pPT09MyYmdGhpcy53KCkpcmV0dXJuIHRoaXMuSShkKTtpZih0aGlzLmk9PT00KXtpZih0aGlzLncoKSlyZXR1cm4gYz90aGlzLksoZCk6dGhpcy5KKGQpO2lmKGMpcmV0dXJuIHRoaXMuSChkKX1yZXR1cm4gZH19LGsuSnBlZ0RlY29kZXI9Yn0pKCl9KSgpLGsuZW5jb2RlSW1hZ2U9ZnVuY3Rpb24ocix0LGksYil7dmFyIF89e3QyNTY6W3RdLHQyNTc6W2ldLHQyNTg6WzgsOCw4LDhdLHQyNTk6WzFdLHQyNjI6WzJdLHQyNzM6WzFlM10sdDI3NzpbNF0sdDI3ODpbaV0sdDI3OTpbdCppKjRdLHQyODI6WzFdLHQyODM6WzFdLHQyODQ6WzFdLHQyODY6WzBdLHQyODc6WzBdLHQyOTY6WzFdLHQzMDU6WyJQaG90b3BlYSAoVVRJRi5qcykiXSx0MzM4OlsxXX07aWYoYilmb3IodmFyIHMgaW4gYilfW3NdPWJbc107Zm9yKHZhciBoPW5ldyBVaW50OEFycmF5KGsuZW5jb2RlKFtfXSkpLHY9bmV3IFVpbnQ4QXJyYXkociksRT1uZXcgVWludDhBcnJheSgxZTMrdCppKjQpLHM9MDtzPGgubGVuZ3RoO3MrKylFW3NdPWhbc107Zm9yKHZhciBzPTA7czx2Lmxlbmd0aDtzKyspRVsxZTMrc109dltzXTtyZXR1cm4gRS5idWZmZXJ9LGsuZW5jb2RlPWZ1bmN0aW9uKHIpe3ZhciB0PW5ldyBVaW50OEFycmF5KDJlNCksaT00LGI9ay5fYmluQkU7dFswXT03Nyx0WzFdPTc3LHRbM109NDI7dmFyIF89ODtiLndyaXRlVWludCh0LGksXyksaSs9NDtmb3IodmFyIHM9MDtzPHIubGVuZ3RoO3MrKyl7dmFyIGg9ay5fd3JpdGVJRkQoYix0LF8scltzXSk7Xz1oWzFdLHM8ci5sZW5ndGgtMSYmYi53cml0ZVVpbnQodCxoWzBdLF8pfXJldHVybiB0LnNsaWNlKDAsXykuYnVmZmVyfSxrLmRlY29kZT1mdW5jdGlvbihyKXtrLmRlY29kZS5fZGVjb2RlRzMuYWxsb3cyRD1udWxsO3ZhciB0PW5ldyBVaW50OEFycmF5KHIpLGk9MCxiPWsuX2JpbkJFLnJlYWRBU0NJSSh0LGksMik7aSs9Mjt2YXIgXz1iPT0iSUkiP2suX2JpbkxFOmsuX2JpbkJFO18ucmVhZFVzaG9ydCh0LGkpLGkrPTI7dmFyIHM9Xy5yZWFkVWludCh0LGkpO2krPTQ7Zm9yKHZhciBoPVtdOzspe3ZhciB2PWsuX3JlYWRJRkQoXyx0LHMsaCwwLCExKTtpZihzPV8ucmVhZFVpbnQodCx2KSxzPT0wKWJyZWFrfXJldHVybiBofSxrLmRlY29kZUltYWdlPWZ1bmN0aW9uKHIsdCxpKXt2YXIgYj1uZXcgVWludDhBcnJheShyKSxfPWsuX2JpbkJFLnJlYWRBU0NJSShiLDAsMik7aWYodC50MjU2IT1udWxsKXt0LmlzTEU9Xz09IklJIix0LndpZHRoPXQudDI1NlswXSx0LmhlaWdodD10LnQyNTdbMF07dmFyIHM9dC50MjU5P3QudDI1OVswXToxLGg9dC50MjY2P3QudDI2NlswXToxO3QudDI4NCYmdC50Mjg0WzBdPT0yJiZSKCJQbGFuYXJDb25maWd1cmF0aW9uIDIgc2hvdWxkIG5vdCBiZSB1c2VkISIpO3ZhciB2O3QudDI1OD92PU1hdGgubWluKDMyLHQudDI1OFswXSkqdC50MjU4Lmxlbmd0aDp2PXQudDI3Nz90LnQyNzdbMF06MSxzPT0xJiZ0LnQyNzkhPW51bGwmJnQudDI3OCYmdC50MjYyWzBdPT0zMjgwMyYmKHY9TWF0aC5yb3VuZCh0LnQyNzlbMF0qOC8odC53aWR0aCp0LnQyNzhbMF0pKSk7dmFyIEU9TWF0aC5jZWlsKHQud2lkdGgqdi84KSo4LGQ9dC50MjczO2Q9PW51bGwmJihkPXQudDMyNCk7dmFyIHU9dC50Mjc5O3M9PTEmJmQubGVuZ3RoPT0xJiYodT1bdC5oZWlnaHQqKEU+Pj4zKV0pLHU9PW51bGwmJih1PXQudDMyNSk7dmFyIGM9bmV3IFVpbnQ4QXJyYXkodC5oZWlnaHQqKEU+Pj4zKSksbz0wO2lmKHQudDMyMiE9bnVsbCl7Zm9yKHZhciBuPXQudDMyMlswXSx3PXQudDMyM1swXSxnPU1hdGguZmxvb3IoKHQud2lkdGgrbi0xKS9uKSxwPU1hdGguZmxvb3IoKHQuaGVpZ2h0K3ctMSkvdyksUz1uZXcgVWludDhBcnJheShNYXRoLmNlaWwobip3KnYvOCl8MCksQT0wO0E8cDtBKyspZm9yKHZhciBMPTA7TDxnO0wrKyl7Zm9yKHZhciBEPUEqZytMLEI9MDtCPFMubGVuZ3RoO0IrKylTW0JdPTA7ay5kZWNvZGUuX2RlY29tcHJlc3ModCxpLGIsZFtEXSx1W0RdLHMsUywwLGgpLHM9PTY/Yz1TOmsuX2NvcHlUaWxlKFMsTWF0aC5jZWlsKG4qdi84KXwwLHcsYyxNYXRoLmNlaWwodC53aWR0aCp2LzgpfDAsdC5oZWlnaHQsTWF0aC5jZWlsKEwqbip2LzgpfDAsQSp3KX1vPWMubGVuZ3RoKjh9ZWxzZXt2YXIgaj10LnQyNzg/dC50Mjc4WzBdOnQuaGVpZ2h0O2o9TWF0aC5taW4oaix0LmhlaWdodCk7Zm9yKHZhciBEPTA7RDxkLmxlbmd0aDtEKyspay5kZWNvZGUuX2RlY29tcHJlc3ModCxpLGIsZFtEXSx1W0RdLHMsYyxNYXRoLmNlaWwoby84KXwwLGgpLG8rPUUqajtvPU1hdGgubWluKG8sYy5sZW5ndGgqOCl9dC5kYXRhPW5ldyBVaW50OEFycmF5KGMuYnVmZmVyLDAsTWF0aC5jZWlsKG8vOCl8MCl9fSxrLmRlY29kZS5fZGVjb21wcmVzcz1mdW5jdGlvbihyLHQsaSxiLF8scyxoLHYsRSl7aWYocz09MXx8Xz09aC5sZW5ndGgmJnMhPTMyNzY3KWZvcih2YXIgZD0wO2Q8XztkKyspaFt2K2RdPWlbYitkXTtlbHNlIGlmKHM9PTMpay5kZWNvZGUuX2RlY29kZUczKGksYixfLGgsdixyLndpZHRoLEUpO2Vsc2UgaWYocz09NClrLmRlY29kZS5fZGVjb2RlRzQoaSxiLF8saCx2LHIud2lkdGgsRSk7ZWxzZSBpZihzPT01KWsuZGVjb2RlLl9kZWNvZGVMWlcoaSxiLGgsdik7ZWxzZSBpZihzPT02KWsuZGVjb2RlLl9kZWNvZGVPbGRKUEVHKHIsaSxiLF8saCx2KTtlbHNlIGlmKHM9PTcpay5kZWNvZGUuX2RlY29kZU5ld0pQRUcocixpLGIsXyxoLHYpO2Vsc2UgaWYocz09OClmb3IodmFyIHU9bmV3IFVpbnQ4QXJyYXkoaS5idWZmZXIsYixfKSxjPUkuaW5mbGF0ZSh1KSxvPTA7bzxjLmxlbmd0aDtvKyspaFt2K29dPWNbb107ZWxzZSBzPT0zMjc2Nz9rLmRlY29kZS5fZGVjb2RlQVJXKHIsaSxiLF8saCx2KTpzPT0zMjc3Mz9rLmRlY29kZS5fZGVjb2RlUGFja0JpdHMoaSxiLF8saCx2KTpzPT0zMjgwOT9rLmRlY29kZS5fZGVjb2RlVGh1bmRlcihpLGIsXyxoLHYpOnM9PTM0NzEzP2suZGVjb2RlLl9kZWNvZGVOaWtvbihyLHQsaSxiLF8saCx2KTpSKCJVbmtub3duIGNvbXByZXNzaW9uIixzKTt2YXIgbj1yLnQyNTg/TWF0aC5taW4oMzIsci50MjU4WzBdKToxLHc9ci50Mjc3P3IudDI3N1swXToxLGc9bip3Pj4+MyxwPXIudDI3OD9yLnQyNzhbMF06ci5oZWlnaHQsUz1NYXRoLmNlaWwobip3KnIud2lkdGgvOCk7aWYobj09MTYmJiFyLmlzTEUmJnIudDMzNDIyPT1udWxsKWZvcih2YXIgQT0wO0E8cDtBKyspZm9yKHZhciBMPXYrQSpTLEQ9MTtEPFM7RCs9Mil7dmFyIEI9aFtMK0RdO2hbTCtEXT1oW0wrRC0xXSxoW0wrRC0xXT1CfWlmKHIudDMxNyYmci50MzE3WzBdPT0yKWZvcih2YXIgQT0wO0E8cDtBKyspe3ZhciBqPXYrQSpTO2lmKG49PTE2KWZvcih2YXIgZD1nO2Q8UztkKz0yKXt2YXIgQz0oaFtqK2QrMV08PDh8aFtqK2RdKSsoaFtqK2QtZysxXTw8OHxoW2orZC1nXSk7aFtqK2RdPUMmMjU1LGhbaitkKzFdPUM+Pj44JjI1NX1lbHNlIGlmKHc9PTMpZm9yKHZhciBkPTM7ZDxTO2QrPTMpaFtqK2RdPWhbaitkXStoW2orZC0zXSYyNTUsaFtqK2QrMV09aFtqK2QrMV0raFtqK2QtMl0mMjU1LGhbaitkKzJdPWhbaitkKzJdK2hbaitkLTFdJjI1NTtlbHNlIGZvcih2YXIgZD1nO2Q8UztkKyspaFtqK2RdPWhbaitkXStoW2orZC1nXSYyNTV9fSxrLmRlY29kZS5fbGpwZWdfZGlmZj1mdW5jdGlvbihyLHQsaSl7dmFyIGI9ay5kZWNvZGUuX2dldGJpdGh1ZmYsXyxzO3JldHVybiBfPWIocix0LGlbMF0saSkscz1iKHIsdCxfLDApLHMmMTw8Xy0xfHwocy09KDE8PF8pLTEpLHN9LGsuZGVjb2RlLl9kZWNvZGVBUlc9ZnVuY3Rpb24ocix0LGksYixfLHMpe3ZhciBoPXIudDI1NlswXSx2PXIudDI1N1swXSxFPXIudDI1OFswXSxkPXIuaXNMRT9rLl9iaW5MRTprLl9iaW5CRSx1PWgqdj09Ynx8aCp2KjEuNT09YjtpZighdSl7dis9ODt2YXIgYz1baSwwLDAsMF0sbz1uZXcgVWludDE2QXJyYXkoMzI3NzApLG49WzM4NTcsMzg1NiwzNTk5LDMzNDIsMzA4NSwyODI4LDI1NzEsMjMxNCwyMDU3LDE4MDAsMTU0MywxMjg2LDEwMjksNzcyLDc3MSw3NjgsNTE0LDUxM10sVix3LGcsVSxILHA9MCxTPWsuZGVjb2RlLl9sanBlZ19kaWZmO2ZvcihvWzBdPTE1LGc9Vj0wO1Y8MTg7VisrKWZvcih2YXIgQT0zMjc2OD4+PihuW1ZdPj4+OCksdz0wO3c8QTt3Kyspb1srK2ddPW5bVl07Zm9yKFU9aDtVLS07KWZvcihIPTA7SDx2KzE7SCs9MilpZihIPT12JiYoSD0xKSxwKz1TKHQsYyxvKSxIPHYpe3ZhciBMPXAmNDA5NTtrLmRlY29kZS5fcHV0c0YoXywoSCpoK1UpKkUsTDw8MTYtRSl9cmV0dXJufWlmKGgqdioxLjU9PWIpe2Zvcih2YXIgVj0wO1Y8YjtWKz0zKXt2YXIgRD10W2krViswXSxCPXRbaStWKzFdLGo9dFtpK1YrMl07X1tzK1ZdPUI8PDR8RD4+PjQsX1tzK1YrMV09RDw8NHxqPj4+NCxfW3MrVisyXT1qPDw0fEI+Pj40fXJldHVybn12YXIgQz1uZXcgVWludDE2QXJyYXkoMTYpLEgsVSxYLFQsUCxaLGFlLCQsdGUsVix1ZSxmZT1uZXcgVWludDhBcnJheShoKzEpO2ZvcihIPTA7SDx2O0grKyl7Zm9yKHZhciBoZT0wO2hlPGg7aGUrKylmZVtoZV09dFtpKytdO2Zvcih1ZT0wLFU9MDtVPGgtMzA7dWUrPTE2KXtmb3IoVD0yMDQ3JihYPWQucmVhZFVpbnQoZmUsdWUpKSxQPTIwNDcmWD4+PjExLFo9MTUmWD4+PjIyLGFlPTE1Jlg+Pj4yNiwkPTA7JDw0JiYxMjg8PCQ8PVQtUDskKyspO2Zvcih0ZT0zMCxWPTA7VjwxNjtWKyspVj09Wj9DW1ZdPVQ6Vj09YWU/Q1tWXT1QOihDW1ZdPSgoZC5yZWFkVXNob3J0KGZlLHVlKyh0ZT4+MykpPj4+KHRlJjcpJjEyNyk8PCQpK1AsQ1tWXT4yMDQ3JiYoQ1tWXT0yMDQ3KSx0ZSs9Nyk7Zm9yKFY9MDtWPDE2O1YrKyxVKz0yKXt2YXIgTD1DW1ZdPDwxO2suZGVjb2RlLl9wdXRzRihfLChIKmgrVSkqRSxMPDwxNi1FKX1VLT1VJjE/MTozMX19fSxrLmRlY29kZS5fZGVjb2RlTmlrb249ZnVuY3Rpb24ocix0LGksYixfLHMsaCl7dmFyIHY9W1swLDAsMSw1LDEsMSwxLDEsMSwxLDIsMCwwLDAsMCwwLDAsNSw0LDMsNiwyLDcsMSwwLDgsOSwxMSwxMCwxMl0sWzAsMCwxLDUsMSwxLDEsMSwxLDEsMiwwLDAsMCwwLDAsMCw1Nyw5MCw1NiwzOSwyMiw1LDQsMywyLDEsMCwxMSwxMiwxMl0sWzAsMCwxLDQsMiwzLDEsMiwwLDAsMCwwLDAsMCwwLDAsMCw1LDQsNiwzLDcsMiw4LDEsOSwwLDEwLDExLDEyXSxbMCwwLDEsNCwzLDEsMSwxLDEsMSwyLDAsMCwwLDAsMCwwLDUsNiw0LDcsOCwzLDksMiwxLDAsMTAsMTEsMTIsMTMsMTRdLFswLDAsMSw1LDEsMSwxLDEsMSwxLDEsMiwwLDAsMCwwLDAsOCw5Miw3NSw1OCw0MSw3LDYsNSw0LDMsMiwxLDAsMTMsMTRdLFswLDAsMSw0LDIsMiwzLDEsMiwwLDAsMCwwLDAsMCwwLDAsNyw2LDgsNSw5LDQsMTAsMywxMSwxMiwyLDAsMSwxMywxNF1dLEU9ci50MjU2WzBdLGQ9ci50MjU3WzBdLHU9ci50MjU4WzBdLGM9MCxvPTAsbj1rLmRlY29kZS5fbWFrZV9kZWNvZGVyLHc9ay5kZWNvZGUuX2dldGJpdGh1ZmYsZz10WzBdLmV4aWZJRkQubWFrZXJOb3RlLHA9Zy50MTUwP2cudDE1MDpnLnQxNDAsUz0wLEE9cFtTKytdLEw9cFtTKytdOyhBPT03M3x8TD09ODgpJiYoUys9MjExMCksQT09NzAmJihjPTIpLHU9PTE0JiYoYys9Myk7Zm9yKHZhciBEPVtbMCwwXSxbMCwwXV0sQj1yLmlzTEU/ay5fYmluTEU6ay5fYmluQkUsWD0wO1g8MjtYKyspZm9yKHZhciBqPTA7ajwyO2orKylEW1hdW2pdPUIucmVhZFNob3J0KHAsUyksUys9Mjt2YXIgQz0xPDx1JjMyNzY3LEg9MCxVPUIucmVhZFNob3J0KHAsUyk7Uys9MixVPjEmJihIPU1hdGguZmxvb3IoQy8oVS0xKSkpLEE9PTY4JiZMPT0zMiYmSD4wJiYobz1CLnJlYWRTaG9ydChwLDU2MikpO3ZhciBYLFQsUCxaLGFlLCQsdGU9WzAsMF0sVj1uKHZbY10pLHVlPVtiLDAsMCwwXTtmb3IoVD0wO1Q8ZDtUKyspZm9yKG8mJlQ9PW8mJihWPW4odltjKzFdKSksUD0wO1A8RTtQKyspe1g9dyhpLHVlLFZbMF0sViksWj1YJjE1LGFlPVg+Pj40LCQ9KHcoaSx1ZSxaLWFlLDApPDwxKSsxPDxhZT4+PjEsJCYxPDxaLTF8fCgkLT0oMTw8WiktKGFlPT0wPzE6MCkpLFA8Mj90ZVtQXT1EW1QmMV1bUF0rPSQ6dGVbUCYxXSs9JDt2YXIgZmU9TWF0aC5taW4oTWF0aC5tYXgodGVbUCYxXSwwKSwoMTw8dSktMSksaGU9KFQqRStQKSp1O2suZGVjb2RlLl9wdXRzRihzLGhlLGZlPDwxNi11KX19LGsuZGVjb2RlLl9wdXRzRj1mdW5jdGlvbihyLHQsaSl7aT1pPDw4LSh0JjcpO3ZhciBiPXQ+Pj4zO3JbYl18PWk+Pj4xNixyW2IrMV18PWk+Pj44LHJbYisyXXw9aX0say5kZWNvZGUuX2dldGJpdGh1ZmY9ZnVuY3Rpb24ocix0LGksYil7dmFyIF89MDtrLmRlY29kZS5fZ2V0X2J5dGU7dmFyIHMsaD10WzBdLHY9dFsxXSxFPXRbMl0sZD10WzNdO2lmKGk9PTB8fEU8MClyZXR1cm4gMDtmb3IoOyFkJiZFPGkmJihzPXJbaCsrXSkhPS0xJiYhKGQ9Xyk7KXY9KHY8PDgpK3MsRSs9ODtpZihzPXY8PDMyLUU+Pj4zMi1pLGI/KEUtPWJbcysxXT4+Pjgscz1iW3MrMV0mMjU1KTpFLT1pLEU8MCl0aHJvdyJlIjtyZXR1cm4gdFswXT1oLHRbMV09dix0WzJdPUUsdFszXT1kLHN9LGsuZGVjb2RlLl9tYWtlX2RlY29kZXI9ZnVuY3Rpb24ocil7dmFyIHQsaSxiLF8scyxoPVtdO2Zvcih0PTE2O3QhPTAmJiFyW3RdO3QtLSk7dmFyIHY9MTc7Zm9yKGhbMF09dCxiPWk9MTtpPD10O2krKylmb3IoXz0wO188cltpXTtfKyssKyt2KWZvcihzPTA7czwxPDx0LWk7cysrKWI8PTE8PHQmJihoW2IrK109aTw8OHxyW3ZdKTtyZXR1cm4gaH0say5kZWNvZGUuX2RlY29kZU5ld0pQRUc9ZnVuY3Rpb24ocix0LGksYixfLHMpe3ZhciBoPXIudDM0Nyx2PWg/aC5sZW5ndGg6MCxFPW5ldyBVaW50OEFycmF5KHYrYik7aWYoaCl7Zm9yKHZhciBkPTIxNix1PTIxNyxjPTAsbz0wO288di0xJiYhKGhbb109PTI1NSYmaFtvKzFdPT11KTtvKyspRVtjKytdPWhbb107dmFyIG49dFtpXSx3PXRbaSsxXTsobiE9MjU1fHx3IT1kKSYmKEVbYysrXT1uLEVbYysrXT13KTtmb3IodmFyIG89MjtvPGI7bysrKUVbYysrXT10W2krb119ZWxzZSBmb3IodmFyIG89MDtvPGI7bysrKUVbb109dFtpK29dO2lmKHIudDI2MlswXT09MzI4MDN8fHIudDI2MlswXT09MzQ4OTIpe3ZhciBnPXIudDI1OFswXSxwPWsuTG9zc2xlc3NKcGVnRGVjb2RlKEUpLFM9cC5sZW5ndGg7aWYoZz09MTYpaWYoci5pc0xFKWZvcih2YXIgbz0wO288UztvKyspX1tzKyhvPDwxKV09cFtvXSYyNTUsX1tzKyhvPDwxKSsxXT1wW29dPj4+ODtlbHNlIGZvcih2YXIgbz0wO288UztvKyspX1tzKyhvPDwxKV09cFtvXT4+PjgsX1tzKyhvPDwxKSsxXT1wW29dJjI1NTtlbHNlIGlmKGc9PTE0fHxnPT0xMilmb3IodmFyIEE9MTYtZyxvPTA7bzxTO28rKylrLmRlY29kZS5fcHV0c0YoXyxvKmcscFtvXTw8QSk7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoInVuc3VwcG9ydGVkIGJpdCBkZXB0aCAiK2cpfWVsc2V7dmFyIEw9bmV3IGsuSnBlZ0RlY29kZXI7TC5wYXJzZShFKTtmb3IodmFyIEQ9TC5nZXREYXRhKEwud2lkdGgsTC5oZWlnaHQpLG89MDtvPEQubGVuZ3RoO28rKylfW3Mrb109RFtvXX1yLnQyNjJbMF09PTYmJihyLnQyNjJbMF09Mil9LGsuZGVjb2RlLl9kZWNvZGVPbGRKUEVHSW5pdD1mdW5jdGlvbihyLHQsaSxiKXt2YXIgXz0yMTYscz0yMTksaD0xOTYsdj0yMjEsRT0xOTIsZD0yMTgsdT0wLGM9MCxvLG4sdz0hMSxnLHAsUyxBPXIudDUxMyxMPUE/QVswXTowLEQ9ci50NTE0LEI9RD9EWzBdOjAsaj1yLnQzMjR8fHIudDI3M3x8QSxDPXIudDUzMCxIPTAsVT0wLFg9ci50Mjc3P3IudDI3N1swXToxLFQ9ci50NTE1O2lmKGomJihjPWpbMF0sdz1qLmxlbmd0aD4xKSwhdyl7aWYodFtpXT09MjU1JiZ0W2krMV09PV8pcmV0dXJue2pwZWdPZmZzZXQ6aX07aWYoQSE9bnVsbCYmKHRbaStMXT09MjU1JiZ0W2krTCsxXT09Xz91PWkrTDpSKCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXQgZG9lcyBub3QgcG9pbnQgdG8gU09JIiksRD09bnVsbD9SKCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGggZmllbGQgaXMgbWlzc2luZyIpOihMPj1jfHxMK0I8PWMpJiZSKCJKUEVHSW50ZXJjaGFuZ2VGb3JtYXRMZW5ndGggZmllbGQgdmFsdWUgaXMgaW52YWxpZCIpLHUhPW51bGwpKXJldHVybntqcGVnT2Zmc2V0OnV9fWlmKEMhPW51bGwmJihIPUNbMF0sVT1DWzFdKSxBIT1udWxsJiZEIT1udWxsKWlmKEI+PTImJkwrQjw9Yyl7Zm9yKHRbaStMK0ItMl09PTI1NSYmdFtpK0wrQi0xXT09Xz9vPW5ldyBVaW50OEFycmF5KEItMik6bz1uZXcgVWludDhBcnJheShCKSxnPTA7ZzxvLmxlbmd0aDtnKyspb1tnXT10W2krTCtnXTtSKCJJbmNvcnJlY3QgSlBFRyBpbnRlcmNoYW5nZSBmb3JtYXQ6IHVzaW5nIEpQRUdJbnRlcmNoYW5nZUZvcm1hdCBvZmZzZXQgdG8gZGVyaXZlIHRhYmxlcyIpfWVsc2UgUigiSlBFR0ludGVyY2hhbmdlRm9ybWF0K0pQRUdJbnRlcmNoYW5nZUZvcm1hdExlbmd0aCA+IG9mZnNldCB0byBmaXJzdCBzdHJpcCBvciB0aWxlIik7aWYobz09bnVsbCl7dmFyIFA9MCxaPVtdO1pbUCsrXT0yNTUsWltQKytdPV87dmFyIGFlPXIudDUxOTtpZihhZT09bnVsbCl0aHJvdyBuZXcgRXJyb3IoIkpQRUdRVGFibGVzIHRhZyBpcyBtaXNzaW5nIik7Zm9yKGc9MDtnPGFlLmxlbmd0aDtnKyspZm9yKFpbUCsrXT0yNTUsWltQKytdPXMsWltQKytdPTAsWltQKytdPTY3LFpbUCsrXT1nLHA9MDtwPDY0O3ArKylaW1ArK109dFtpK2FlW2ddK3BdO2ZvcihTPTA7UzwyO1MrKyl7dmFyICQ9cltTPT0wPyJ0NTIwIjoidDUyMSJdO2lmKCQ9PW51bGwpdGhyb3cgbmV3IEVycm9yKChTPT0wPyJKUEVHRENUYWJsZXMiOiJKUEVHQUNUYWJsZXMiKSsiIHRhZyBpcyBtaXNzaW5nIik7Zm9yKGc9MDtnPCQubGVuZ3RoO2crKyl7WltQKytdPTI1NSxaW1ArK109aDt2YXIgdGU9MTk7Zm9yKHA9MDtwPDE2O3ArKyl0ZSs9dFtpKyRbZ10rcF07Zm9yKFpbUCsrXT10ZT4+PjgsWltQKytdPXRlJjI1NSxaW1ArK109Z3xTPDw0LHA9MDtwPDE2O3ArKylaW1ArK109dFtpKyRbZ10rcF07Zm9yKHA9MDtwPHRlO3ArKylaW1ArK109dFtpKyRbZ10rMTYrcF19fWlmKFpbUCsrXT0yNTUsWltQKytdPUUsWltQKytdPTAsWltQKytdPTgrMypYLFpbUCsrXT04LFpbUCsrXT1yLmhlaWdodD4+PjgmMjU1LFpbUCsrXT1yLmhlaWdodCYyNTUsWltQKytdPXIud2lkdGg+Pj44JjI1NSxaW1ArK109ci53aWR0aCYyNTUsWltQKytdPVgsWD09MSlaW1ArK109MSxaW1ArK109MTcsWltQKytdPTA7ZWxzZSBmb3IoZz0wO2c8MztnKyspWltQKytdPWcrMSxaW1ArK109ZyE9MD8xNzooSCYxNSk8PDR8VSYxNSxaW1ArK109ZztUIT1udWxsJiZUWzBdIT0wJiYoWltQKytdPTI1NSxaW1ArK109dixaW1ArK109MCxaW1ArK109NCxaW1ArK109VFswXT4+PjgmMjU1LFpbUCsrXT1UWzBdJjI1NSksbz1uZXcgVWludDhBcnJheShaKX12YXIgVj0tMTtmb3IoZz0wO2c8by5sZW5ndGgtMTspe2lmKG9bZ109PTI1NSYmb1tnKzFdPT1FKXtWPWc7YnJlYWt9ZysrfWlmKFY9PS0xKXt2YXIgdWU9bmV3IFVpbnQ4QXJyYXkoby5sZW5ndGgrMTArMypYKTt1ZS5zZXQobyk7dmFyIGZlPW8ubGVuZ3RoO2lmKFY9by5sZW5ndGgsbz11ZSxvW2ZlKytdPTI1NSxvW2ZlKytdPUUsb1tmZSsrXT0wLG9bZmUrK109OCszKlgsb1tmZSsrXT04LG9bZmUrK109ci5oZWlnaHQ+Pj44JjI1NSxvW2ZlKytdPXIuaGVpZ2h0JjI1NSxvW2ZlKytdPXIud2lkdGg+Pj44JjI1NSxvW2ZlKytdPXIud2lkdGgmMjU1LG9bZmUrK109WCxYPT0xKW9bZmUrK109MSxvW2ZlKytdPTE3LG9bZmUrK109MDtlbHNlIGZvcihnPTA7ZzwzO2crKylvW2ZlKytdPWcrMSxvW2ZlKytdPWchPTA/MTc6KEgmMTUpPDw0fFUmMTUsb1tmZSsrXT1nfWlmKHRbY109PTI1NSYmdFtjKzFdPT1kKXt2YXIgaGU9dFtjKzJdPDw4fHRbYyszXTtmb3Iobj1uZXcgVWludDhBcnJheShoZSsyKSxuWzBdPXRbY10sblsxXT10W2MrMV0sblsyXT10W2MrMl0sblszXT10W2MrM10sZz0wO2c8aGUtMjtnKyspbltnKzRdPXRbYytnKzRdfWVsc2V7bj1uZXcgVWludDhBcnJheSg4KzIqWCk7dmFyIGxlPTA7aWYobltsZSsrXT0yNTUsbltsZSsrXT1kLG5bbGUrK109MCxuW2xlKytdPTYrMipYLG5bbGUrK109WCxYPT0xKW5bbGUrK109MSxuW2xlKytdPTA7ZWxzZSBmb3IoZz0wO2c8MztnKyspbltsZSsrXT1nKzEsbltsZSsrXT1nPDw0fGc7bltsZSsrXT0wLG5bbGUrK109NjMsbltsZSsrXT0wfXJldHVybntqcGVnT2Zmc2V0OmksdGFibGVzOm8sc29zTWFya2VyOm4sc29mUG9zaXRpb246Vn19LGsuZGVjb2RlLl9kZWNvZGVPbGRKUEVHPWZ1bmN0aW9uKHIsdCxpLGIsXyxzKXt2YXIgaCx2LEUsZCx1LGM9ay5kZWNvZGUuX2RlY29kZU9sZEpQRUdJbml0KHIsdCxpLGIpO2lmKGMuanBlZ09mZnNldCE9bnVsbClmb3Iodj1pK2ItYy5qcGVnT2Zmc2V0LGQ9bmV3IFVpbnQ4QXJyYXkodiksaD0wO2g8djtoKyspZFtoXT10W2MuanBlZ09mZnNldCtoXTtlbHNle2ZvcihFPWMudGFibGVzLmxlbmd0aCxkPW5ldyBVaW50OEFycmF5KEUrYy5zb3NNYXJrZXIubGVuZ3RoK2IrMiksZC5zZXQoYy50YWJsZXMpLHU9RSxkW2Muc29mUG9zaXRpb24rNV09ci5oZWlnaHQ+Pj44JjI1NSxkW2Muc29mUG9zaXRpb24rNl09ci5oZWlnaHQmMjU1LGRbYy5zb2ZQb3NpdGlvbis3XT1yLndpZHRoPj4+OCYyNTUsZFtjLnNvZlBvc2l0aW9uKzhdPXIud2lkdGgmMjU1LCh0W2ldIT0yNTV8fHRbaSsxXSE9U09TKSYmKGQuc2V0KGMuc29zTWFya2VyLHUpLHUrPXNvc01hcmtlci5sZW5ndGgpLGg9MDtoPGI7aCsrKWRbdSsrXT10W2kraF07ZFt1KytdPTI1NSxkW3UrK109RU9JfXZhciBvPW5ldyBrLkpwZWdEZWNvZGVyO28ucGFyc2UoZCk7Zm9yKHZhciBuPW8uZ2V0RGF0YShvLndpZHRoLG8uaGVpZ2h0KSxoPTA7aDxuLmxlbmd0aDtoKyspX1tzK2hdPW5baF07ci50MjYyJiZyLnQyNjJbMF09PTYmJihyLnQyNjJbMF09Mil9LGsuZGVjb2RlLl9kZWNvZGVQYWNrQml0cz1mdW5jdGlvbihyLHQsaSxiLF8pe2Zvcih2YXIgcz1uZXcgSW50OEFycmF5KHIuYnVmZmVyKSxoPW5ldyBJbnQ4QXJyYXkoYi5idWZmZXIpLHY9dCtpO3Q8djspe3ZhciBFPXNbdF07aWYodCsrLEU+PTAmJkU8MTI4KWZvcih2YXIgZD0wO2Q8RSsxO2QrKyloW19dPXNbdF0sXysrLHQrKztpZihFPj0tMTI3JiZFPDApe2Zvcih2YXIgZD0wO2Q8LUUrMTtkKyspaFtfXT1zW3RdLF8rKzt0Kyt9fX0say5kZWNvZGUuX2RlY29kZVRodW5kZXI9ZnVuY3Rpb24ocix0LGksYixfKXtmb3IodmFyIHM9WzAsMSwwLC0xXSxoPVswLDEsMiwzLDAsLTMsLTIsLTFdLHY9dCtpLEU9XyoyLGQ9MDt0PHY7KXt2YXIgdT1yW3RdLGM9dT4+PjYsbz11JjYzO2lmKHQrKyxjPT0zJiYoZD1vJjE1LGJbRT4+PjFdfD1kPDw0KigxLUUmMSksRSsrKSxjPT0wKWZvcih2YXIgbj0wO248bztuKyspYltFPj4+MV18PWQ8PDQqKDEtRSYxKSxFKys7aWYoYz09Milmb3IodmFyIG49MDtuPDI7bisrKXt2YXIgdz1vPj4+MyooMS1uKSY3O3chPTQmJihkKz1oW3ddLGJbRT4+PjFdfD1kPDw0KigxLUUmMSksRSsrKX1pZihjPT0xKWZvcih2YXIgbj0wO248MztuKyspe3ZhciB3PW8+Pj4yKigyLW4pJjM7dyE9MiYmKGQrPXNbd10sYltFPj4+MV18PWQ8PDQqKDEtRSYxKSxFKyspfX19LGsuZGVjb2RlLl9kbWFwPXsxOjAsIjAxMSI6MSwiMDAwMDExIjoyLCIwMDAwMDExIjozLCIwMTAiOi0xLCIwMDAwMTAiOi0yLCIwMDAwMDEwIjotM30say5kZWNvZGUuX2xlbnM9ZnVuY3Rpb24oKXt2YXIgcj1mdW5jdGlvbihFLGQsdSxjKXtmb3IodmFyIG89MDtvPGQubGVuZ3RoO28rKylFW2Rbb11dPXUrbypjfSx0PSIwMDExMDEwMSwwMDAxMTEsMDExMSwxMDAwLDEwMTEsMTEwMCwxMTEwLDExMTEsMTAwMTEsMTAxMDAsMDAxMTEsMDEwMDAsMDAxMDAwLDAwMDAxMSwxMTAxMDAsMTEwMTAxLDEwMTAxMCwxMDEwMTEsMDEwMDExMSwwMDAxMTAwLDAwMDEwMDAsMDAxMDExMSwwMDAwMDExLDAwMDAxMDAsMDEwMTAwMCwwMTAxMDExLDAwMTAwMTEsMDEwMDEwMCwwMDExMDAwLDAwMDAwMDEwLDAwMDAwMDExLDAwMDExMDEwLDAwMDExMDExLDAwMDEwMDEwLDAwMDEwMDExLDAwMDEwMTAwLDAwMDEwMTAxLDAwMDEwMTEwLDAwMDEwMTExLDAwMTAxMDAwLDAwMTAxMDAxLDAwMTAxMDEwLDAwMTAxMDExLDAwMTAxMTAwLDAwMTAxMTAxLDAwMDAwMTAwLDAwMDAwMTAxLDAwMDAxMDEwLDAwMDAxMDExLDAxMDEwMDEwLDAxMDEwMDExLDAxMDEwMTAwLDAxMDEwMTAxLDAwMTAwMTAwLDAwMTAwMTAxLDAxMDExMDAwLDAxMDExMDAxLDAxMDExMDEwLDAxMDExMDExLDAxMDAxMDEwLDAxMDAxMDExLDAwMTEwMDEwLDAwMTEwMDExLDAwMTEwMTAwIixpPSIwMDAwMTEwMTExLDAxMCwxMSwxMCwwMTEsMDAxMSwwMDEwLDAwMDExLDAwMDEwMSwwMDAxMDAsMDAwMDEwMCwwMDAwMTAxLDAwMDAxMTEsMDAwMDAxMDAsMDAwMDAxMTEsMDAwMDExMDAwLDAwMDAwMTAxMTEsMDAwMDAxMTAwMCwwMDAwMDAxMDAwLDAwMDAxMTAwMTExLDAwMDAxMTAxMDAwLDAwMDAxMTAxMTAwLDAwMDAwMTEwMTExLDAwMDAwMTAxMDAwLDAwMDAwMDEwMTExLDAwMDAwMDExMDAwLDAwMDAxMTAwMTAxMCwwMDAwMTEwMDEwMTEsMDAwMDExMDAxMTAwLDAwMDAxMTAwMTEwMSwwMDAwMDExMDEwMDAsMDAwMDAxMTAxMDAxLDAwMDAwMTEwMTAxMCwwMDAwMDExMDEwMTEsMDAwMDExMDEwMDEwLDAwMDAxMTAxMDAxMSwwMDAwMTEwMTAxMDAsMDAwMDExMDEwMTAxLDAwMDAxMTAxMDExMCwwMDAwMTEwMTAxMTEsMDAwMDAxMTAxMTAwLDAwMDAwMTEwMTEwMSwwMDAwMTEwMTEwMTAsMDAwMDExMDExMDExLDAwMDAwMTAxMDEwMCwwMDAwMDEwMTAxMDEsMDAwMDAxMDEwMTEwLDAwMDAwMTAxMDExMSwwMDAwMDExMDAxMDAsMDAwMDAxMTAwMTAxLDAwMDAwMTAxMDAxMCwwMDAwMDEwMTAwMTEsMDAwMDAwMTAwMTAwLDAwMDAwMDExMDExMSwwMDAwMDAxMTEwMDAsMDAwMDAwMTAwMTExLDAwMDAwMDEwMTAwMCwwMDAwMDEwMTEwMDAsMDAwMDAxMDExMDAxLDAwMDAwMDEwMTAxMSwwMDAwMDAxMDExMDAsMDAwMDAxMDExMDEwLDAwMDAwMTEwMDExMCwwMDAwMDExMDAxMTEiLGI9IjExMDExLDEwMDEwLDAxMDExMSwwMTEwMTExLDAwMTEwMTEwLDAwMTEwMTExLDAxMTAwMTAwLDAxMTAwMTAxLDAxMTAxMDAwLDAxMTAwMTExLDAxMTAwMTEwMCwwMTEwMDExMDEsMDExMDEwMDEwLDAxMTAxMDAxMSwwMTEwMTAxMDAsMDExMDEwMTAxLDAxMTAxMDExMCwwMTEwMTAxMTEsMDExMDExMDAwLDAxMTAxMTAwMSwwMTEwMTEwMTAsMDExMDExMDExLDAxMDAxMTAwMCwwMTAwMTEwMDEsMDEwMDExMDEwLDAxMTAwMCwwMTAwMTEwMTEiLF89IjAwMDAwMDExMTEsMDAwMDExMDAxMDAwLDAwMDAxMTAwMTAwMSwwMDAwMDEwMTEwMTEsMDAwMDAwMTEwMDExLDAwMDAwMDExMDEwMCwwMDAwMDAxMTAxMDEsMDAwMDAwMTEwMTEwMCwwMDAwMDAxMTAxMTAxLDAwMDAwMDEwMDEwMTAsMDAwMDAwMTAwMTAxMSwwMDAwMDAxMDAxMTAwLDAwMDAwMDEwMDExMDEsMDAwMDAwMTExMDAxMCwwMDAwMDAxMTEwMDExLDAwMDAwMDExMTAxMDAsMDAwMDAwMTExMDEwMSwwMDAwMDAxMTEwMTEwLDAwMDAwMDExMTAxMTEsMDAwMDAwMTAxMDAxMCwwMDAwMDAxMDEwMDExLDAwMDAwMDEwMTAxMDAsMDAwMDAwMTAxMDEwMSwwMDAwMDAxMDExMDEwLDAwMDAwMDEwMTEwMTEsMDAwMDAwMTEwMDEwMCwwMDAwMDAxMTAwMTAxIixzPSIwMDAwMDAwMTAwMCwwMDAwMDAwMTEwMCwwMDAwMDAwMTEwMSwwMDAwMDAwMTAwMTAsMDAwMDAwMDEwMDExLDAwMDAwMDAxMDEwMCwwMDAwMDAwMTAxMDEsMDAwMDAwMDEwMTEwLDAwMDAwMDAxMDExMSwwMDAwMDAwMTExMDAsMDAwMDAwMDExMTAxLDAwMDAwMDAxMTExMCwwMDAwMDAwMTExMTEiO3Q9dC5zcGxpdCgiLCIpLGk9aS5zcGxpdCgiLCIpLGI9Yi5zcGxpdCgiLCIpLF89Xy5zcGxpdCgiLCIpLHM9cy5zcGxpdCgiLCIpO3ZhciBoPXt9LHY9e307cmV0dXJuIHIoaCx0LDAsMSkscihoLGIsNjQsNjQpLHIoaCxzLDE3OTIsNjQpLHIodixpLDAsMSkscih2LF8sNjQsNjQpLHIodixzLDE3OTIsNjQpLFtoLHZdfSgpLGsuZGVjb2RlLl9kZWNvZGVHND1mdW5jdGlvbihyLHQsaSxiLF8scyxoKXtmb3IodmFyIHY9ay5kZWNvZGUsRT10PDwzLGQ9MCx1PSIiLGM9W10sbz1bXSxuPTA7bjxzO24rKylvLnB1c2goMCk7bz12Ll9tYWtlRGlmZihvKTtmb3IodmFyIHc9MCxnPTAscD0wLFM9MCxBPTAsTD0wLEQ9IiIsQj0wLGo9TWF0aC5jZWlsKHMvOCkqODtFPj4+Mzx0K2k7KXtwPXYuX2ZpbmREaWZmKG8sdysodz09MD8wOjEpLDEtQSksUz12Ll9maW5kRGlmZihvLHAsQSk7dmFyIEM9MDtpZihoPT0xJiYoQz1yW0U+Pj4zXT4+PjctKEUmNykmMSksaD09MiYmKEM9cltFPj4+M10+Pj4oRSY3KSYxKSxFKyssdSs9QyxEPT0iSCIpe2lmKHYuX2xlbnNbQV1bdV0hPW51bGwpe3ZhciBIPXYuX2xlbnNbQV1bdV07dT0iIixkKz1ILEg8NjQmJih2Ll9hZGROdGltZXMoYyxkLEEpLHcrPWQsQT0xLUEsZD0wLEItLSxCPT0wJiYoRD0iIikpfX1lbHNlIHU9PSIwMDAxIiYmKHU9IiIsdi5fYWRkTnRpbWVzKGMsUy13LEEpLHc9UyksdT09IjAwMSImJih1PSIiLEQ9IkgiLEI9Miksdi5fZG1hcFt1XSE9bnVsbCYmKGc9cCt2Ll9kbWFwW3VdLHYuX2FkZE50aW1lcyhjLGctdyxBKSx3PWcsdT0iIixBPTEtQSk7Yy5sZW5ndGg9PXMmJkQ9PSIiJiYodi5fd3JpdGVCaXRzKGMsYixfKjgrTCpqKSxBPTAsTCsrLHc9MCxvPXYuX21ha2VEaWZmKGMpLGM9W10pfX0say5kZWNvZGUuX2ZpbmREaWZmPWZ1bmN0aW9uKHIsdCxpKXtmb3IodmFyIGI9MDtiPHIubGVuZ3RoO2IrPTIpaWYocltiXT49dCYmcltiKzFdPT1pKXJldHVybiByW2JdfSxrLmRlY29kZS5fbWFrZURpZmY9ZnVuY3Rpb24ocil7dmFyIHQ9W107clswXT09MSYmdC5wdXNoKDAsMSk7Zm9yKHZhciBpPTE7aTxyLmxlbmd0aDtpKyspcltpLTFdIT1yW2ldJiZ0LnB1c2goaSxyW2ldKTtyZXR1cm4gdC5wdXNoKHIubGVuZ3RoLDAsci5sZW5ndGgsMSksdH0say5kZWNvZGUuX2RlY29kZUczPWZ1bmN0aW9uKHIsdCxpLGIsXyxzLGgpe2Zvcih2YXIgdj1rLmRlY29kZSxFPXQ8PDMsZD0wLHU9IiIsYz1bXSxvPVtdLG49MDtuPHM7bisrKWMucHVzaCgwKTtmb3IodmFyIHc9MCxnPTAscD0wLFM9MCxBPTAsTD0tMSxEPSIiLEI9MCxqPSExLEM9TWF0aC5jZWlsKHMvOCkqODtFPj4+Mzx0K2k7KXtwPXYuX2ZpbmREaWZmKG8sdysodz09MD8wOjEpLDEtQSksUz12Ll9maW5kRGlmZihvLHAsQSk7dmFyIEg9MDtpZihoPT0xJiYoSD1yW0U+Pj4zXT4+PjctKEUmNykmMSksaD09MiYmKEg9cltFPj4+M10+Pj4oRSY3KSYxKSxFKyssdSs9SCxqKXtpZih2Ll9sZW5zW0FdW3VdIT1udWxsKXt2YXIgVT12Ll9sZW5zW0FdW3VdO3U9IiIsZCs9VSxVPDY0JiYodi5fYWRkTnRpbWVzKGMsZCxBKSxBPTEtQSxkPTApfX1lbHNlIGlmKEQ9PSJIIil7aWYodi5fbGVuc1tBXVt1XSE9bnVsbCl7dmFyIFU9di5fbGVuc1tBXVt1XTt1PSIiLGQrPVUsVTw2NCYmKHYuX2FkZE50aW1lcyhjLGQsQSksdys9ZCxBPTEtQSxkPTAsQi0tLEI9PTAmJihEPSIiKSl9fWVsc2UgdT09IjAwMDEiJiYodT0iIix2Ll9hZGROdGltZXMoYyxTLXcsQSksdz1TKSx1PT0iMDAxIiYmKHU9IiIsRD0iSCIsQj0yKSx2Ll9kbWFwW3VdIT1udWxsJiYoZz1wK3YuX2RtYXBbdV0sdi5fYWRkTnRpbWVzKGMsZy13LEEpLHc9Zyx1PSIiLEE9MS1BKTt1LmVuZHNXaXRoKCIwMDAwMDAwMDAwMDEiKSYmKEw+PTAmJnYuX3dyaXRlQml0cyhjLGIsXyo4K0wqQyksaD09MSYmKGo9KHJbRT4+PjNdPj4+Ny0oRSY3KSYxKT09MSksaD09MiYmKGo9KHJbRT4+PjNdPj4+KEUmNykmMSk9PTEpLEUrKyx2Ll9kZWNvZGVHMy5hbGxvdzJEPT1udWxsJiYodi5fZGVjb2RlRzMuYWxsb3cyRD1qKSx2Ll9kZWNvZGVHMy5hbGxvdzJEfHwoaj0hMCxFLS0pLHU9IiIsQT0wLEwrKyx3PTAsbz12Ll9tYWtlRGlmZihjKSxjPVtdKX1jLmxlbmd0aD09cyYmdi5fd3JpdGVCaXRzKGMsYixfKjgrTCpDKX0say5kZWNvZGUuX2FkZE50aW1lcz1mdW5jdGlvbihyLHQsaSl7Zm9yKHZhciBiPTA7Yjx0O2IrKylyLnB1c2goaSl9LGsuZGVjb2RlLl93cml0ZUJpdHM9ZnVuY3Rpb24ocix0LGkpe2Zvcih2YXIgYj0wO2I8ci5sZW5ndGg7YisrKXRbaStiPj4+M118PXJbYl08PDctKGkrYiY3KX0say5kZWNvZGUuX2RlY29kZUxaVz1mdW5jdGlvbihyLHQsaSxiKXtpZihrLmRlY29kZS5fbHp3VGFiPT1udWxsKXtmb3IodmFyIF89bmV3IFVpbnQzMkFycmF5KDY1NTM1KSxzPW5ldyBVaW50MTZBcnJheSg2NTUzNSksdT1uZXcgVWludDhBcnJheSgyZTYpLGg9MDtoPDI1NjtoKyspdVtoPDwyXT1oLF9baF09aDw8MixzW2hdPTE7ay5kZWNvZGUuX2x6d1RhYj1bXyxzLHVdfWZvcih2YXIgdj1rLmRlY29kZS5fY29weURhdGEsRT1rLmRlY29kZS5fbHp3VGFiWzBdLGQ9ay5kZWNvZGUuX2x6d1RhYlsxXSx1PWsuZGVjb2RlLl9sendUYWJbMl0sYz0yNTgsbz0xMDMyLG49OSx3PXQ8PDMsZz0yNTYscD0yNTcsUz0wLEE9MCxMPTA7Uz1yW3c+Pj4zXTw8MTZ8clt3Kzg+Pj4zXTw8OHxyW3crMTY+Pj4zXSxBPVM+PjI0LSh3JjcpLW4mKDE8PG4pLTEsdys9bixBIT1wOyl7aWYoQT09Zyl7aWYobj05LGM9MjU4LG89MTAzMixTPXJbdz4+PjNdPDwxNnxyW3crOD4+PjNdPDw4fHJbdysxNj4+PjNdLEE9Uz4+MjQtKHcmNyktbiYoMTw8biktMSx3Kz1uLEE9PXApYnJlYWs7aVtiXT1BLGIrK31lbHNlIGlmKEE8Yyl7dmFyIEQ9RVtBXSxCPWRbQV07aWYodih1LEQsaSxiLEIpLGIrPUIsTD49YylFW2NdPW8sdVtFW2NdXT1EWzBdLGRbY109MSxvPW8rMSszJi00LGMrKztlbHNle0VbY109bzt2YXIgaj1FW0xdLEM9ZFtMXTt2KHUsaix1LG8sQyksdVtvK0NdPXVbRF0sQysrLGRbY109QyxjKyssbz1vK0MrMyYtNH1jKzE9PTE8PG4mJm4rK31lbHNle2lmKEw+PWMpRVtjXT1vLGRbY109MCxjKys7ZWxzZXtFW2NdPW87dmFyIGo9RVtMXSxDPWRbTF07dih1LGosdSxvLEMpLHVbbytDXT11W29dLEMrKyxkW2NdPUMsYysrLHYodSxvLGksYixDKSxiKz1DLG89bytDKzMmLTR9YysxPT0xPDxuJiZuKyt9TD1BfX0say5kZWNvZGUuX2NvcHlEYXRhPWZ1bmN0aW9uKHIsdCxpLGIsXyl7Zm9yKHZhciBzPTA7czxfO3MrPTQpaVtiK3NdPXJbdCtzXSxpW2IrcysxXT1yW3QrcysxXSxpW2IrcysyXT1yW3QrcysyXSxpW2IrcyszXT1yW3QrcyszXX0say50YWdzPXt9LGsudHR5cGVzPXsyNTY6MywyNTc6MywyNTg6MywyNTk6MywyNjI6MywyNzM6NCwyNzQ6MywyNzc6MywyNzg6NCwyNzk6NCwyODI6NSwyODM6NSwyODQ6MywyODY6NSwyODc6NSwyOTY6MywzMDU6MiwzMDY6MiwzMzg6Myw1MTM6NCw1MTQ6NCwzNDY2NTo0fSxrLl9yZWFkSUZEPWZ1bmN0aW9uKHIsdCxpLGIsXyxzKXt2YXIgaD1yLnJlYWRVc2hvcnQodCxpKTtpKz0yO3ZhciB2PXt9O2IucHVzaCh2KSxzJiZSKCIgICAiLnJlcGVhdChfKSxiLmxlbmd0aC0xLCI+Pj4tLS0tLS0tLS0tLS0tLS0tIik7Zm9yKHZhciBFPTA7RTxoO0UrKyl7dmFyIGQ9ci5yZWFkVXNob3J0KHQsaSk7aSs9Mjt2YXIgdT1yLnJlYWRVc2hvcnQodCxpKTtpKz0yO3ZhciBjPXIucmVhZFVpbnQodCxpKTtpKz00O3ZhciBvPXIucmVhZFVpbnQodCxpKTtpKz00O3ZhciBuPVtdO2lmKCh1PT0xfHx1PT03KSYmKG49bmV3IFVpbnQ4QXJyYXkodC5idWZmZXIsYzw1P2ktNDpvLGMpKSx1PT0yKXt2YXIgdz1jPDU/aS00Om8sZz10W3ddO2c8MTI4P24ucHVzaChyLnJlYWRBU0NJSSh0LHcsYy0xKSk6bj1uZXcgVWludDhBcnJheSh0LmJ1ZmZlcix3LGMtMSl9aWYodT09Mylmb3IodmFyIHA9MDtwPGM7cCsrKW4ucHVzaChyLnJlYWRVc2hvcnQodCwoYzwzP2ktNDpvKSsyKnApKTtpZih1PT00KWZvcih2YXIgcD0wO3A8YztwKyspbi5wdXNoKHIucmVhZFVpbnQodCwoYzwyP2ktNDpvKSs0KnApKTtpZih1PT01KWZvcih2YXIgcD0wO3A8YztwKyspbi5wdXNoKHIucmVhZFVpbnQodCxvK3AqOCkvci5yZWFkVWludCh0LG8rcCo4KzQpKTtpZih1PT04KWZvcih2YXIgcD0wO3A8YztwKyspbi5wdXNoKHIucmVhZFNob3J0KHQsKGM8Mz9pLTQ6bykrMipwKSk7aWYodT09OSlmb3IodmFyIHA9MDtwPGM7cCsrKW4ucHVzaChyLnJlYWRJbnQodCwoYzwyP2ktNDpvKSs0KnApKTtpZih1PT0xMClmb3IodmFyIHA9MDtwPGM7cCsrKW4ucHVzaChyLnJlYWRJbnQodCxvK3AqOCkvci5yZWFkSW50KHQsbytwKjgrNCkpO2lmKHU9PTExKWZvcih2YXIgcD0wO3A8YztwKyspbi5wdXNoKHIucmVhZEZsb2F0KHQsbytwKjQpKTtpZih1PT0xMilmb3IodmFyIHA9MDtwPGM7cCsrKW4ucHVzaChyLnJlYWREb3VibGUodCxvK3AqOCkpO2lmKHZbInQiK2RdPW4sYyE9MCYmbi5sZW5ndGg9PTAmJlIoInVua25vd24gVElGRiB0YWcgdHlwZTogIix1LCJudW06IixjKSxzJiZSKCIgICAiLnJlcGVhdChfKSxkLHUsay50YWdzW2RdLG4pLCEoZD09MzMwJiZ2LnQyNzImJnYudDI3MlswXT09IkRTTFItQTEwMCIpKXtpZihkPT0zMzB8fGQ9PTM0NjY1fHxkPT01MDc0MCYmci5yZWFkVXNob3J0KHQsci5yZWFkVWludChuLDApKTwzMDApe2Zvcih2YXIgUz1kPT01MDc0MD9bci5yZWFkVWludChuLDApXTpuLEE9W10scD0wO3A8Uy5sZW5ndGg7cCsrKWsuX3JlYWRJRkQocix0LFNbcF0sQSxfKzEscyk7ZD09MzMwJiYodi5zdWJJRkQ9QSksZD09MzQ2NjUmJih2LmV4aWZJRkQ9QVswXSksZD09NTA3NDAmJih2LmRuZ1BydnQ9QVswXSl9fWlmKGQ9PTM3NTAwKXt2YXIgTD1uO2lmKHIucmVhZEFTQ0lJKEwsMCw1KT09Ik5pa29uIil2Lm1ha2VyTm90ZT1rLmRlY29kZShMLnNsaWNlKDEwKS5idWZmZXIpWzBdO2Vsc2UgaWYoci5yZWFkVXNob3J0KHQsbyk8MzAwKXt2YXIgRD1bXTtrLl9yZWFkSUZEKHIsdCxvLEQsXysxLHMpLHYubWFrZXJOb3RlPURbMF19fX1yZXR1cm4gcyYmUigiICAgIi5yZXBlYXQoXyksIjw8PC0tLS0tLS0tLS0tLS0tLSIpLGl9LGsuX3dyaXRlSUZEPWZ1bmN0aW9uKHIsdCxpLGIpe3ZhciBfPU9iamVjdC5rZXlzKGIpO3Iud3JpdGVVc2hvcnQodCxpLF8ubGVuZ3RoKSxpKz0yO2Zvcih2YXIgcz1pK18ubGVuZ3RoKjEyKzQsaD0wO2g8Xy5sZW5ndGg7aCsrKXt2YXIgdj1fW2hdLEU9cGFyc2VJbnQodi5zbGljZSgxKSksZD1rLnR0eXBlc1tFXTtpZihkPT1udWxsKXRocm93IG5ldyBFcnJvcigidW5rbm93biB0eXBlIG9mIHRhZzogIitFKTt2YXIgdT1iW3ZdO2Q9PTImJih1PXVbMF0rIlwwIik7dmFyIGM9dS5sZW5ndGg7ci53cml0ZVVzaG9ydCh0LGksRSksaSs9MixyLndyaXRlVXNob3J0KHQsaSxkKSxpKz0yLHIud3JpdGVVaW50KHQsaSxjKSxpKz00O3ZhciBvPVstMSwxLDEsMiw0LDgsMCwwLDAsMCwwLDAsOF1bZF0qYyxuPWk7aWYobz40JiYoci53cml0ZVVpbnQodCxpLHMpLG49cyksZD09MiYmci53cml0ZUFTQ0lJKHQsbix1KSxkPT0zKWZvcih2YXIgdz0wO3c8Yzt3Kyspci53cml0ZVVzaG9ydCh0LG4rMip3LHVbd10pO2lmKGQ9PTQpZm9yKHZhciB3PTA7dzxjO3crKylyLndyaXRlVWludCh0LG4rNCp3LHVbd10pO2lmKGQ9PTUpZm9yKHZhciB3PTA7dzxjO3crKylyLndyaXRlVWludCh0LG4rOCp3LE1hdGgucm91bmQodVt3XSoxZTQpKSxyLndyaXRlVWludCh0LG4rOCp3KzQsMWU0KTtpZihkPT0xMilmb3IodmFyIHc9MDt3PGM7dysrKXIud3JpdGVEb3VibGUodCxuKzgqdyx1W3ddKTtvPjQmJihvKz1vJjEscys9byksaSs9NH1yZXR1cm5baSxzXX0say50b1JHQkE4PWZ1bmN0aW9uKHIpe3ZhciB0PXIud2lkdGgsaT1yLmhlaWdodCxiPXQqaSxfPWIqNCxzPXIuZGF0YSxoPW5ldyBVaW50OEFycmF5KGIqNCksdj1yLnQyNjI/ci50MjYyWzBdOjIsRT1yLnQyNTg/TWF0aC5taW4oMzIsci50MjU4WzBdKToxO2lmKHY9PTApZm9yKHZhciBkPU1hdGguY2VpbChFKnQvOCksdT0wO3U8aTt1Kyspe3ZhciBjPXUqZCxvPXUqdDtpZihFPT0xKWZvcih2YXIgbj0wO248dDtuKyspe3ZhciB3PW8rbjw8MixnPXNbYysobj4+MyldPj43LShuJjcpJjE7aFt3XT1oW3crMV09aFt3KzJdPSgxLWcpKjI1NSxoW3crM109MjU1fWlmKEU9PTQpZm9yKHZhciBuPTA7bjx0O24rKyl7dmFyIHc9bytuPDwyLGc9c1tjKyhuPj4xKV0+PjQtNCoobiYxKSYxNTtoW3ddPWhbdysxXT1oW3crMl09KDE1LWcpKjE3LGhbdyszXT0yNTV9aWYoRT09OClmb3IodmFyIG49MDtuPHQ7bisrKXt2YXIgdz1vK248PDIsZz1zW2Mrbl07aFt3XT1oW3crMV09aFt3KzJdPTI1NS1nLGhbdyszXT0yNTV9fWVsc2UgaWYodj09MSlmb3IodmFyIGQ9TWF0aC5jZWlsKEUqdC84KSx1PTA7dTxpO3UrKyl7dmFyIGM9dSpkLG89dSp0O2lmKEU9PTEpZm9yKHZhciBuPTA7bjx0O24rKyl7dmFyIHc9bytuPDwyLGc9c1tjKyhuPj4zKV0+PjctKG4mNykmMTtoW3ddPWhbdysxXT1oW3crMl09ZyoyNTUsaFt3KzNdPTI1NX1pZihFPT0yKWZvcih2YXIgbj0wO248dDtuKyspe3ZhciB3PW8rbjw8MixnPXNbYysobj4+MildPj42LTIqKG4mMykmMztoW3ddPWhbdysxXT1oW3crMl09Zyo4NSxoW3crM109MjU1fWlmKEU9PTgpZm9yKHZhciBuPTA7bjx0O24rKyl7dmFyIHc9bytuPDwyLGc9c1tjK25dO2hbd109aFt3KzFdPWhbdysyXT1nLGhbdyszXT0yNTV9aWYoRT09MTYpZm9yKHZhciBuPTA7bjx0O24rKyl7dmFyIHc9bytuPDwyLGc9c1tjKygyKm4rMSldO2hbd109aFt3KzFdPWhbdysyXT1NYXRoLm1pbigyNTUsZyksaFt3KzNdPTI1NX19ZWxzZSBpZih2PT0yKXt2YXIgcD1yLnQyNTg/ci50MjU4Lmxlbmd0aDozO2lmKEU9PTgpe2lmKHA9PTQpZm9yKHZhciBuPTA7bjxfO24rKyloW25dPXNbbl07aWYocD09Mylmb3IodmFyIG49MDtuPGI7bisrKXt2YXIgdz1uPDwyLFM9biozO2hbd109c1tTXSxoW3crMV09c1tTKzFdLGhbdysyXT1zW1MrMl0saFt3KzNdPTI1NX19ZWxzZXtpZihwPT00KWZvcih2YXIgbj0wO248YjtuKyspe3ZhciB3PW48PDIsUz1uKjgrMTtoW3ddPXNbU10saFt3KzFdPXNbUysyXSxoW3crMl09c1tTKzRdLGhbdyszXT1zW1MrNl19aWYocD09Mylmb3IodmFyIG49MDtuPGI7bisrKXt2YXIgdz1uPDwyLFM9bio2KzE7aFt3XT1zW1NdLGhbdysxXT1zW1MrMl0saFt3KzJdPXNbUys0XSxoW3crM109MjU1fX19ZWxzZSBpZih2PT0zKWZvcih2YXIgQT1yLnQzMjAsbj0wO248YjtuKyspe3ZhciB3PW48PDIsTD1zW25dO2hbd109QVtMXT4+OCxoW3crMV09QVsyNTYrTF0+PjgsaFt3KzJdPUFbNTEyK0xdPj44LGhbdyszXT0yNTV9ZWxzZSBpZih2PT01KWZvcih2YXIgcD1yLnQyNTg/ci50MjU4Lmxlbmd0aDo0LEQ9cD40PzE6MCxuPTA7bjxiO24rKyl7dmFyIHc9bjw8MixCPW4qcCxqPTI1NS1zW0JdLEM9MjU1LXNbQisxXSxIPTI1NS1zW0IrMl0sVT0oMjU1LXNbQiszXSkqKDEvMjU1KTtoW3ddPX5+KGoqVSsuNSksaFt3KzFdPX5+KEMqVSsuNSksaFt3KzJdPX5+KEgqVSsuNSksaFt3KzNdPTI1NSooMS1EKStzW0IrNF0qRH1lbHNlIFIoIlVua25vd24gUGhvdG9tZXRyaWMgaW50ZXJwcmV0YXRpb246ICIrdik7cmV0dXJuIGh9LGsucmVwbGFjZUlNRz1mdW5jdGlvbihyKXtyPT1udWxsJiYocj1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaW1nIikpO2Zvcih2YXIgdD1bInRpZiIsInRpZmYiLCJkbmciLCJjcjIiLCJuZWYiXSxpPTA7aTxyLmxlbmd0aDtpKyspe3ZhciBiPXJbaV0sXz1iLmdldEF0dHJpYnV0ZSgic3JjIik7aWYoXyE9bnVsbCl7dmFyIHM9Xy5zcGxpdCgiLiIpLnBvcCgpLnRvTG93ZXJDYXNlKCk7aWYodC5pbmRleE9mKHMpIT0tMSl7dmFyIGg9bmV3IFhNTEh0dHBSZXF1ZXN0O2suX3hocnMucHVzaChoKSxrLl9pbWdzLnB1c2goYiksaC5vcGVuKCJHRVQiLF8pLGgucmVzcG9uc2VUeXBlPSJhcnJheWJ1ZmZlciIsaC5vbmxvYWQ9ay5faW1nTG9hZGVkLGguc2VuZCgpfX19fSxrLl94aHJzPVtdLGsuX2ltZ3M9W10say5faW1nTG9hZGVkPWZ1bmN0aW9uKHIpe3ZhciB0PXIudGFyZ2V0LnJlc3BvbnNlLGk9ay5kZWNvZGUodCksYj1pLF89MCxzPWJbMF07aVswXS5zdWJJRkQmJihiPWIuY29uY2F0KGlbMF0uc3ViSUZEKSk7Zm9yKHZhciBoPTA7aDxiLmxlbmd0aDtoKyspe3ZhciBvPWJbaF07aWYoIShvLnQyNTg9PW51bGx8fG8udDI1OC5sZW5ndGg8Mykpe3ZhciB2PW8udDI1NipvLnQyNTc7dj5fJiYoXz12LHM9byl9fWsuZGVjb2RlSW1hZ2UodCxzLGkpO3ZhciBFPWsudG9SR0JBOChzKSxkPXMud2lkdGgsdT1zLmhlaWdodCxjPWsuX3hocnMuaW5kZXhPZihyLnRhcmdldCksbz1rLl9pbWdzW2NdO2suX3hocnMuc3BsaWNlKGMsMSksay5faW1ncy5zcGxpY2UoYywxKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJjYW52YXMiKTtuLndpZHRoPWQsbi5oZWlnaHQ9dTtmb3IodmFyIHc9bi5nZXRDb250ZXh0KCIyZCIpLGc9dy5jcmVhdGVJbWFnZURhdGEoZCx1KSxoPTA7aDxFLmxlbmd0aDtoKyspZy5kYXRhW2hdPUVbaF07dy5wdXRJbWFnZURhdGEoZywwLDApLG8uc2V0QXR0cmlidXRlKCJzcmMiLG4udG9EYXRhVVJMKCkpfSxrLl9iaW5CRT17bmV4dFplcm86ZnVuY3Rpb24ocix0KXtmb3IoO3JbdF0hPTA7KXQrKztyZXR1cm4gdH0scmVhZFVzaG9ydDpmdW5jdGlvbihyLHQpe3JldHVybiByW3RdPDw4fHJbdCsxXX0scmVhZFNob3J0OmZ1bmN0aW9uKHIsdCl7dmFyIGk9ay5fYmluQkUudWk4O3JldHVybiBpWzBdPXJbdCsxXSxpWzFdPXJbdCswXSxrLl9iaW5CRS5pMTZbMF19LHJlYWRJbnQ6ZnVuY3Rpb24ocix0KXt2YXIgaT1rLl9iaW5CRS51aTg7cmV0dXJuIGlbMF09clt0KzNdLGlbMV09clt0KzJdLGlbMl09clt0KzFdLGlbM109clt0KzBdLGsuX2JpbkJFLmkzMlswXX0scmVhZFVpbnQ6ZnVuY3Rpb24ocix0KXt2YXIgaT1rLl9iaW5CRS51aTg7cmV0dXJuIGlbMF09clt0KzNdLGlbMV09clt0KzJdLGlbMl09clt0KzFdLGlbM109clt0KzBdLGsuX2JpbkJFLnVpMzJbMF19LHJlYWRBU0NJSTpmdW5jdGlvbihyLHQsaSl7Zm9yKHZhciBiPSIiLF89MDtfPGk7XysrKWIrPVN0cmluZy5mcm9tQ2hhckNvZGUoclt0K19dKTtyZXR1cm4gYn0scmVhZEZsb2F0OmZ1bmN0aW9uKHIsdCl7Zm9yKHZhciBpPWsuX2JpbkJFLnVpOCxiPTA7Yjw0O2IrKylpW2JdPXJbdCszLWJdO3JldHVybiBrLl9iaW5CRS5mbDMyWzBdfSxyZWFkRG91YmxlOmZ1bmN0aW9uKHIsdCl7Zm9yKHZhciBpPWsuX2JpbkJFLnVpOCxiPTA7Yjw4O2IrKylpW2JdPXJbdCs3LWJdO3JldHVybiBrLl9iaW5CRS5mbDY0WzBdfSx3cml0ZVVzaG9ydDpmdW5jdGlvbihyLHQsaSl7clt0XT1pPj44JjI1NSxyW3QrMV09aSYyNTV9LHdyaXRlVWludDpmdW5jdGlvbihyLHQsaSl7clt0XT1pPj4yNCYyNTUsclt0KzFdPWk+PjE2JjI1NSxyW3QrMl09aT4+OCYyNTUsclt0KzNdPWk+PjAmMjU1fSx3cml0ZUFTQ0lJOmZ1bmN0aW9uKHIsdCxpKXtmb3IodmFyIGI9MDtiPGkubGVuZ3RoO2IrKylyW3QrYl09aS5jaGFyQ29kZUF0KGIpfSx3cml0ZURvdWJsZTpmdW5jdGlvbihyLHQsaSl7ay5fYmluQkUuZmw2NFswXT1pO2Zvcih2YXIgYj0wO2I8ODtiKyspclt0K2JdPWsuX2JpbkJFLnVpOFs3LWJdfX0say5fYmluQkUudWk4PW5ldyBVaW50OEFycmF5KDgpLGsuX2JpbkJFLmkxNj1uZXcgSW50MTZBcnJheShrLl9iaW5CRS51aTguYnVmZmVyKSxrLl9iaW5CRS5pMzI9bmV3IEludDMyQXJyYXkoay5fYmluQkUudWk4LmJ1ZmZlciksay5fYmluQkUudWkzMj1uZXcgVWludDMyQXJyYXkoay5fYmluQkUudWk4LmJ1ZmZlciksay5fYmluQkUuZmwzMj1uZXcgRmxvYXQzMkFycmF5KGsuX2JpbkJFLnVpOC5idWZmZXIpLGsuX2JpbkJFLmZsNjQ9bmV3IEZsb2F0NjRBcnJheShrLl9iaW5CRS51aTguYnVmZmVyKSxrLl9iaW5MRT17bmV4dFplcm86ay5fYmluQkUubmV4dFplcm8scmVhZFVzaG9ydDpmdW5jdGlvbihyLHQpe3JldHVybiByW3QrMV08PDh8clt0XX0scmVhZFNob3J0OmZ1bmN0aW9uKHIsdCl7dmFyIGk9ay5fYmluQkUudWk4O3JldHVybiBpWzBdPXJbdCswXSxpWzFdPXJbdCsxXSxrLl9iaW5CRS5pMTZbMF19LHJlYWRJbnQ6ZnVuY3Rpb24ocix0KXt2YXIgaT1rLl9iaW5CRS51aTg7cmV0dXJuIGlbMF09clt0KzBdLGlbMV09clt0KzFdLGlbMl09clt0KzJdLGlbM109clt0KzNdLGsuX2JpbkJFLmkzMlswXX0scmVhZFVpbnQ6ZnVuY3Rpb24ocix0KXt2YXIgaT1rLl9iaW5CRS51aTg7cmV0dXJuIGlbMF09clt0KzBdLGlbMV09clt0KzFdLGlbMl09clt0KzJdLGlbM109clt0KzNdLGsuX2JpbkJFLnVpMzJbMF19LHJlYWRBU0NJSTprLl9iaW5CRS5yZWFkQVNDSUkscmVhZEZsb2F0OmZ1bmN0aW9uKHIsdCl7Zm9yKHZhciBpPWsuX2JpbkJFLnVpOCxiPTA7Yjw0O2IrKylpW2JdPXJbdCtiXTtyZXR1cm4gay5fYmluQkUuZmwzMlswXX0scmVhZERvdWJsZTpmdW5jdGlvbihyLHQpe2Zvcih2YXIgaT1rLl9iaW5CRS51aTgsYj0wO2I8ODtiKyspaVtiXT1yW3QrYl07cmV0dXJuIGsuX2JpbkJFLmZsNjRbMF19fSxrLl9jb3B5VGlsZT1mdW5jdGlvbihyLHQsaSxiLF8scyxoLHYpe2Zvcih2YXIgRT1NYXRoLm1pbih0LF8taCksZD1NYXRoLm1pbihpLHMtdiksdT0wO3U8ZDt1KyspZm9yKHZhciBjPSh2K3UpKl8raCxvPXUqdCxuPTA7bjxFO24rKyliW2Mrbl09cltvK25dfSxrLkxvc3NsZXNzSnBlZ0RlY29kZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHIoXyl7dGhpcy53PV8sdGhpcy5OPTAsdGhpcy5fPTAsdGhpcy5HPTB9ci5wcm90b3R5cGU9e3Q6ZnVuY3Rpb24oXyl7dGhpcy5OPU1hdGgubWF4KDAsTWF0aC5taW4odGhpcy53Lmxlbmd0aCxfKSl9LGk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53W3RoaXMuTisrXX0sbDpmdW5jdGlvbigpe3ZhciBfPXRoaXMuTjtyZXR1cm4gdGhpcy5OKz0yLHRoaXMud1tfXTw8OHx0aGlzLndbXysxXX0sSjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl89PTAmJih0aGlzLkc9dGhpcy53W3RoaXMuTl0sdGhpcy5OKz0xKyh0aGlzLkcrMT4+PjgpLHRoaXMuXz04KSx0aGlzLkc+Pj4tLXRoaXMuXyYxfSxaOmZ1bmN0aW9uKF8pe3ZhciBzPXRoaXMuXyxoPXRoaXMuRyx2PU1hdGgubWluKHMsXyk7Xy09dixzLT12O2Zvcih2YXIgRT1oPj4+cyYoMTw8diktMTtfPjA7KWg9dGhpcy53W3RoaXMuTl0sdGhpcy5OKz0xKyhoKzE+Pj44KSx2PU1hdGgubWluKDgsXyksXy09dixzPTgtdixFPDw9dixFfD1oPj4+cyYoMTw8diktMTtyZXR1cm4gdGhpcy5fPXMsdGhpcy5HPWgsRX19O3ZhciB0PXt9O3QuWD1mdW5jdGlvbigpe3JldHVyblswLDAsLTFdfSx0LnM9ZnVuY3Rpb24oXyxzLGgpe19bdC5ZKF8sMCxoKSsyXT1zfSx0Llk9ZnVuY3Rpb24oXyxzLGgpe2lmKF9bcysyXSE9LTEpcmV0dXJuIDA7aWYoaD09MClyZXR1cm4gcztmb3IodmFyIHY9MDt2PDI7disrKXtfW3Mrdl09PTAmJihfW3Mrdl09Xy5sZW5ndGgsXy5wdXNoKDApLF8ucHVzaCgwKSxfLnB1c2goLTEpKTt2YXIgRT10LlkoXyxfW3Mrdl0saC0xKTtpZihFIT0wKXJldHVybiBFfXJldHVybiAwfSx0LkI9ZnVuY3Rpb24oXyxzKXtmb3IodmFyIGg9MCx2PTAsRT0wLGQ9cy5fLHU9cy5HLGM9cy5OOzspaWYoZD09MCYmKHU9cy53W2NdLGMrPTErKHUrMT4+PjgpLGQ9OCksRT11Pj4+LS1kJjEsaD1fW2grRV0sdj1fW2grMl0sdiE9LTEpcmV0dXJuIHMuXz1kLHMuRz11LHMuTj1jLHY7cmV0dXJuLTF9O2Z1bmN0aW9uIGkoXyl7dGhpcy56PW5ldyByKF8pLHRoaXMuRCh0aGlzLnopfWkucHJvdG90eXBlPXskOmZ1bmN0aW9uKF8scyl7dGhpcy5RPV8uaSgpLHRoaXMuRj1fLmwoKSx0aGlzLm89Xy5sKCk7dmFyIGg9dGhpcy5PPV8uaSgpO3RoaXMuTD1bXTtmb3IodmFyIHY9MDt2PGg7disrKXt2YXIgRT1fLmkoKTtfLmkoKSxfLmkoKSx0aGlzLkxbRV09dn1fLnQoXy5OK3MtKDYraCozKSl9LGU6ZnVuY3Rpb24oKXt2YXIgXz0wLHM9dGhpcy56LmkoKTt0aGlzLkg9PW51bGwmJih0aGlzLkg9e30pO2Zvcih2YXIgaD10aGlzLkhbc109dC5YKCksdj1bXSxFPTA7RTwxNjtFKyspdltFXT10aGlzLnouaSgpLF8rPXZbRV07Zm9yKHZhciBFPTA7RTwxNjtFKyspZm9yKHZhciBkPTA7ZDx2W0VdO2QrKyl0LnMoaCx0aGlzLnouaSgpLEUrMSk7cmV0dXJuIF8rMTd9LFc6ZnVuY3Rpb24oXyl7Zm9yKDtfPjA7KV8tPXRoaXMuZSgpfSxwOmZ1bmN0aW9uKF8scyl7dmFyIGg9Xy5pKCk7dGhpcy5VfHwodGhpcy5VPVtdKTtmb3IodmFyIHY9MDt2PGg7disrKXt2YXIgRT1fLmkoKSxkPV8uaSgpO3RoaXMuVVt0aGlzLkxbRV1dPXRoaXMuSFtkPj4+NF19dGhpcy5nPV8uaSgpLF8udChfLk4rcy0oMitoKjIpKX0sRDpmdW5jdGlvbihfKXt2YXIgcz0hMSxoPV8ubCgpO2lmKGg9PT1pLnEpZG97dmFyIGg9Xy5sKCksdj1fLmwoKS0yO3N3aXRjaChoKXtjYXNlIGkubTp0aGlzLiQoXyx2KTticmVhaztjYXNlIGkuSzp0aGlzLlcodik7YnJlYWs7Y2FzZSBpLlY6dGhpcy5wKF8sdikscz0hMDticmVhaztkZWZhdWx0Ol8udChfLk4rdik7YnJlYWt9fXdoaWxlKCFzKX0sSTpmdW5jdGlvbihfLHMpe3ZhciBoPXQuQihzLF8pO2lmKGg9PTE2KXJldHVybi0zMjc2ODt2YXIgdj1fLlooaCk7cmV0dXJuIHYmMTw8aC0xfHwodi09KDE8PGgpLTEpLHZ9LEI6ZnVuY3Rpb24oXyxzKXtmb3IodmFyIGg9dGhpcy56LHY9dGhpcy5PLEU9dGhpcy5GLGQ9dGhpcy5JLHU9dGhpcy5nLGM9dGhpcy5vKnYsbz10aGlzLlUsbj0wO248djtuKyspX1tuXT1kKGgsb1tuXSkrKDE8PHRoaXMuUS0xKTtmb3IodmFyIHc9djt3PGM7dys9dilmb3IodmFyIG49MDtuPHY7bisrKV9bdytuXT1kKGgsb1tuXSkrX1t3K24tdl07Zm9yKHZhciBnPXMscD0xO3A8RTtwKyspe2Zvcih2YXIgbj0wO248djtuKyspX1tnK25dPWQoaCxvW25dKStfW2crbi1zXTtmb3IodmFyIHc9djt3PGM7dys9dilmb3IodmFyIG49MDtuPHY7bisrKXt2YXIgUz1nK3crbixBPV9bUy12XTt1PT02JiYoQT1fW1Mtc10rKEEtX1tTLXYtc10+Pj4xKSksX1tTXT1BK2QoaCxvW25dKX1nKz1zfX19LGkubT02NTQ3NSxpLks9NjU0NzYsaS5xPTY1NDk2LGkuVj02NTQ5ODtmdW5jdGlvbiBiKF8pe3ZhciBzPW5ldyBpKF8pLGg9cy5RPjg/VWludDE2QXJyYXk6VWludDhBcnJheSx2PW5ldyBoKHMubypzLkYqcy5PKSxFPXMubypzLk87cmV0dXJuIHMuQih2LEUpLHZ9cmV0dXJuIGJ9KCl9KShHLFkpfSkoKX0pKGQwKTt2YXIgSzA9ZDAuZXhwb3J0cyxZMD1NMChLMCk7Y2xhc3MgVzB7Y29uc3RydWN0b3IoRyxZKXtpZih0aGlzLnBvcz0wLHRoaXMuYnVmZmVyPW5ldyBEYXRhVmlldyhHKSx0aGlzLmlzX3dpdGhfYWxwaGE9ISFZLHRoaXMuYm90dG9tX3VwPSEwLHRoaXMuZmxhZz10aGlzLnJlYWRTdHJpbmcoMiksdGhpcy5mbGFnIT09IkJNIil0aHJvdyBuZXcgRXJyb3IoIkludmFsaWQgQk1QIEZpbGUiKTt0aGlzLnBhcnNlSGVhZGVyKCksdGhpcy5wYXJzZVJHQkEoKX1yZWFkVUludDgoKXtjb25zdCBHPXRoaXMuYnVmZmVyLmdldFVpbnQ4KHRoaXMucG9zKTtyZXR1cm4gdGhpcy5wb3MrPTEsR31yZWFkVUludDE2TEUoKXtjb25zdCBHPXRoaXMuYnVmZmVyLmdldFVpbnQxNih0aGlzLnBvcywhMCk7cmV0dXJuIHRoaXMucG9zKz0yLEd9cmVhZFVJbnQzMkxFKCl7Y29uc3QgRz10aGlzLmJ1ZmZlci5nZXRVaW50MzIodGhpcy5wb3MsITApO3JldHVybiB0aGlzLnBvcys9NCxHfXJlYWRJbnQzMkxFKCl7Y29uc3QgRz10aGlzLmJ1ZmZlci5nZXRJbnQzMih0aGlzLnBvcywhMCk7cmV0dXJuIHRoaXMucG9zKz00LEd9cmVhZFN0cmluZyhHKXtsZXQgWT0iIjtmb3IobGV0IFI9MDtSPEc7UisrKVkrPVN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5yZWFkVUludDgoKSk7cmV0dXJuIFl9cGFyc2VIZWFkZXIoKXtpZih0aGlzLmZpbGVTaXplPXRoaXMucmVhZFVJbnQzMkxFKCksdGhpcy5yZXNlcnZlZD10aGlzLnJlYWRVSW50MzJMRSgpLHRoaXMub2Zmc2V0PXRoaXMucmVhZFVJbnQzMkxFKCksdGhpcy5oZWFkZXJTaXplPXRoaXMucmVhZFVJbnQzMkxFKCksdGhpcy53aWR0aD10aGlzLnJlYWRVSW50MzJMRSgpLHRoaXMuaGVpZ2h0PXRoaXMucmVhZEludDMyTEUoKSx0aGlzLnBsYW5lcz10aGlzLnJlYWRVSW50MTZMRSgpLHRoaXMuYml0UFA9dGhpcy5yZWFkVUludDE2TEUoKSx0aGlzLmNvbXByZXNzPXRoaXMucmVhZFVJbnQzMkxFKCksdGhpcy5yYXdTaXplPXRoaXMucmVhZFVJbnQzMkxFKCksdGhpcy5ocj10aGlzLnJlYWRVSW50MzJMRSgpLHRoaXMudnI9dGhpcy5yZWFkVUludDMyTEUoKSx0aGlzLmNvbG9ycz10aGlzLnJlYWRVSW50MzJMRSgpLHRoaXMuaW1wb3J0YW50Q29sb3JzPXRoaXMucmVhZFVJbnQzMkxFKCksdGhpcy5iaXRQUD09PTE2JiZ0aGlzLmlzX3dpdGhfYWxwaGEmJih0aGlzLmJpdFBQPTE1KSx0aGlzLmJpdFBQPDE1KXtjb25zdCBHPXRoaXMuY29sb3JzPT09MD8xPDx0aGlzLmJpdFBQOnRoaXMuY29sb3JzO3RoaXMucGFsZXR0ZT1uZXcgQXJyYXkoRyk7Zm9yKGxldCBZPTA7WTxHO1krKyl7Y29uc3QgUj10aGlzLnJlYWRVSW50OCgpLGs9dGhpcy5yZWFkVUludDgoKSxJPXRoaXMucmVhZFVJbnQ4KCkscj10aGlzLnJlYWRVSW50OCgpO3RoaXMucGFsZXR0ZVtZXT17cmVkOkksZ3JlZW46ayxibHVlOlIscXVhZDpyfX19dGhpcy5oZWlnaHQ8MCYmKHRoaXMuaGVpZ2h0Kj0tMSx0aGlzLmJvdHRvbV91cD0hMSl9cGFyc2VSR0JBKCl7Y29uc3QgRz0iYml0Iit0aGlzLmJpdFBQLFk9dGhpcy53aWR0aCp0aGlzLmhlaWdodCo0O3RoaXMuZGF0YT1uZXcgVWludDhDbGFtcGVkQXJyYXkoWSksdGhpc1tHXSgpfXNldFBpeGVsRGF0YShHLFkpe2NvbnN0IFI9dGhpcy5wYWxldHRlW0ddO3RoaXMuZGF0YVtZXT0wLHRoaXMuZGF0YVtZKzFdPVIuYmx1ZSx0aGlzLmRhdGFbWSsyXT1SLmdyZWVuLHRoaXMuZGF0YVtZKzNdPVIucmVkfWJpdDEoKXtjb25zdCBHPU1hdGguY2VpbCh0aGlzLndpZHRoLzgpLFk9RyU0O2ZvcihsZXQgUj10aGlzLmhlaWdodC0xO1I+PTA7Ui0tKXtjb25zdCBrPXRoaXMuYm90dG9tX3VwP1I6dGhpcy5oZWlnaHQtMS1SO2ZvcihsZXQgST0wO0k8RztJKyspe2NvbnN0IHI9dGhpcy5yZWFkVUludDgoKSx0PWsqdGhpcy53aWR0aCo0K0kqOCo0O2ZvcihsZXQgaT0wO2k8OCYmSSo4K2k8dGhpcy53aWR0aDtpKyspe2NvbnN0IGI9dGhpcy5wYWxldHRlW3I+PjctaSYxXTt0aGlzLmRhdGFbdCtpKjRdPTAsdGhpcy5kYXRhW3QraSo0KzFdPWIuYmx1ZSx0aGlzLmRhdGFbdCtpKjQrMl09Yi5ncmVlbix0aGlzLmRhdGFbdCtpKjQrM109Yi5yZWR9fVkhPT0wJiYodGhpcy5wb3MrPTQtWSl9fWJpdDQoKXtjb25zdCBHPU1hdGguY2VpbCh0aGlzLndpZHRoLzIpLFk9RyU0O2ZvcihsZXQgUj10aGlzLmhlaWdodC0xO1I+PTA7Ui0tKXtjb25zdCBrPXRoaXMuYm90dG9tX3VwP1I6dGhpcy5oZWlnaHQtMS1SO2ZvcihsZXQgST0wO0k8RztJKyspe2NvbnN0IHI9dGhpcy5yZWFkVUludDgoKSx0PWsqdGhpcy53aWR0aCo0K0kqMio0LGk9cj4+NCxiPXImMTU7bGV0IF89dGhpcy5wYWxldHRlW2ldO2lmKHRoaXMuZGF0YVt0XT0wLHRoaXMuZGF0YVt0KzFdPV8uYmx1ZSx0aGlzLmRhdGFbdCsyXT1fLmdyZWVuLHRoaXMuZGF0YVt0KzNdPV8ucmVkLEkqMisxPj10aGlzLndpZHRoKWJyZWFrO189dGhpcy5wYWxldHRlW2JdLHRoaXMuZGF0YVt0KzRdPTAsdGhpcy5kYXRhW3QrNCsxXT1fLmJsdWUsdGhpcy5kYXRhW3QrNCsyXT1fLmdyZWVuLHRoaXMuZGF0YVt0KzQrM109Xy5yZWR9WSE9PTAmJih0aGlzLnBvcys9NC1ZKX19Yml0OCgpe2NvbnN0IEc9dGhpcy53aWR0aCU0O2ZvcihsZXQgWT10aGlzLmhlaWdodC0xO1k+PTA7WS0tKXtjb25zdCBSPXRoaXMuYm90dG9tX3VwP1k6dGhpcy5oZWlnaHQtMS1ZO2ZvcihsZXQgaz0wO2s8dGhpcy53aWR0aDtrKyspe2NvbnN0IEk9dGhpcy5yZWFkVUludDgoKSxyPVIqdGhpcy53aWR0aCo0K2sqNCx0PXRoaXMucGFsZXR0ZVtJXXx8e3JlZDoyNTUsZ3JlZW46MjU1LGJsdWU6MjU1fTt0aGlzLmRhdGFbcl09MCx0aGlzLmRhdGFbcisxXT10LmJsdWUsdGhpcy5kYXRhW3IrMl09dC5ncmVlbix0aGlzLmRhdGFbciszXT10LnJlZH1HIT09MCYmKHRoaXMucG9zKz00LUcpfX1iaXQyNCgpe2ZvcihsZXQgRz10aGlzLmhlaWdodC0xO0c+PTA7Ry0tKXtjb25zdCBZPXRoaXMuYm90dG9tX3VwP0c6dGhpcy5oZWlnaHQtMS1HO2ZvcihsZXQgUj0wO1I8dGhpcy53aWR0aDtSKyspe2NvbnN0IGs9dGhpcy5yZWFkVUludDgoKSxJPXRoaXMucmVhZFVJbnQ4KCkscj10aGlzLnJlYWRVSW50OCgpLHQ9WSp0aGlzLndpZHRoKjQrUio0O3RoaXMuZGF0YVt0XT0wLHRoaXMuZGF0YVt0KzFdPWssdGhpcy5kYXRhW3QrMl09SSx0aGlzLmRhdGFbdCszXT1yfXRoaXMucG9zKz10aGlzLndpZHRoJTR9fWJpdDMyKCl7Zm9yKGxldCBHPXRoaXMuaGVpZ2h0LTE7Rz49MDtHLS0pe2NvbnN0IFk9dGhpcy5ib3R0b21fdXA/Rzp0aGlzLmhlaWdodC0xLUc7Zm9yKGxldCBSPTA7Ujx0aGlzLndpZHRoO1IrKyl7Y29uc3Qgaz10aGlzLnJlYWRVSW50OCgpLEk9dGhpcy5yZWFkVUludDgoKSxyPXRoaXMucmVhZFVJbnQ4KCksdD10aGlzLnJlYWRVSW50OCgpLGk9WSp0aGlzLndpZHRoKjQrUio0O3RoaXMuZGF0YVtpXT1rLHRoaXMuZGF0YVtpKzFdPUksdGhpcy5kYXRhW2krMl09cix0aGlzLmRhdGFbaSszXT10fX19Z2V0RGF0YSgpe3JldHVybiB0aGlzLmRhdGF9fWZ1bmN0aW9uIFQwKG0sRyl7Y29uc3QgUj1uZXcgVzAobSkuZ2V0RGF0YSgpO0cuYnVmZmVyPVJ9ZnVuY3Rpb24gJDAobSl7cmV0dXJuIG0uYnVmZmVyfWZ1bmN0aW9uIFgwKG0pe2NvbnN0IEc9bmV3IERhdGFWaWV3KG0pLFk9Ry5nZXRJbnQzMigxOCwhMCksUj1NYXRoLmFicyhHLmdldEludDMyKDIyLCEwKSk7cmV0dXJuW3t3aWR0aDpZLGhlaWdodDpSfV19dmFyIFYwPXtkZWNvZGU6WDAsdG9SR0JBODokMCxkZWNvZGVJbWFnZTpUMH07ZnVuY3Rpb24gUTAobSl7cmV0dXJuIG1bMF09PT0yNTUmJm1bMV09PT0yMTY/ImltYWdlL2pwZWciOm1bMF09PT0xMzcmJm1bMV09PT04MCYmbVsyXT09PTc4JiZtWzNdPT09NzE/ImltYWdlL3BuZyI6bnVsbH1mdW5jdGlvbiBxMChtLEcpe31mdW5jdGlvbiBGMChtKXtyZXR1cm4gbnVsbH1hc3luYyBmdW5jdGlvbiBldChtKXtjb25zdCBHPW5ldyBVaW50OEFycmF5KG0pLFk9bmV3IEJsb2IoW0ddLHt0eXBlOlEwKEcpfSksUj1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChZKSxrPVIud2lkdGgsST1SLmhlaWdodDtyZXR1cm5be2JpdG1hcDpSLHdpZHRoOmssaGVpZ2h0Okl9XX12YXIgdHQ9e2RlY29kZTpldCx0b1JHQkE4OkYwLGRlY29kZUltYWdlOnEwfTtjb25zdCBUZT17fSxydD17ZGVjb2RlOmFzeW5jKHtmaWxlVHlwZTptLGFycmF5QnVmZmVyOkcsdWlkOll9LFIpPT57VGVbWV18fChUZVtZXT17ZmlsZVR5cGU6bSxwYWdlczphd2FpdCBSLmRlY29kZShHKSxhcnJheUJ1ZmZlcjpHfSk7Y29uc3Qgaz1UZVtZXS5wYWdlcy5sZW5ndGg7aWYoIWspdGhyb3cgbmV3IEVycm9yKCLop6PnoIHlpLHotKUiKTtyZXR1cm57dWlkOlksbnVtUGFnZXM6a319LGdldFBhZ2U6KHtwYWdlSW5kZXg6bSx1aWQ6R30sWSk9Pntjb25zdCBSPVRlW0ddO2lmKCFSKXRocm93IG5ldyBFcnJvcigi6K+35YWI6Kej56CB5paH5Lu2Iik7Y29uc3R7cGFnZXM6ayxhcnJheUJ1ZmZlcjpJfT1SLHI9a1ttXTtyZXR1cm4gWS5kZWNvZGVJbWFnZShJLHIpLHt1aWQ6RyxwYWdlSW5kZXg6bSxidWZmZXI6WS50b1JHQkE4KHIpLG5hdHVyYWxXaWR0aDpyLndpZHRoLG5hdHVyYWxIZWlnaHQ6ci5oZWlnaHQsYml0bWFwOnIuYml0bWFwfX19LGl0PSh7dWlkOm19KT0+e2RlbGV0ZSBUZVttXX0sYXQ9e3RpZmY6WTAsYm1wOlYwLGltZzp0dH07b25tZXNzYWdlPWFzeW5jIGZ1bmN0aW9uKG0pe2NvbnN0e2V2ZW50TmFtZTpHLHByb3BzOll9PW0uZGF0YTtpZighR3x8IVkpcmV0dXJuIHBvc3RNZXNzYWdlKCLnvLrlsJHlv4XopoHlj4LmlbAiKTtpZihHPT09ImRlc3Ryb3kiKXJldHVybiBpdChZKSxwb3N0TWVzc2FnZSh7X2V2ZW50TmFtZTpHLF9wcm9wczpZfSk7bGV0IFI9bnVsbCxrPSIiO3RyeXtjb25zdHt1aWQ6SSxmaWxlVHlwZTpyfT1ZLHQ9cnRbR107Uj1hd2FpdCB0KFksYXRbcnx8VGVbSV0uZmlsZVR5cGVdKX1jYXRjaChJKXtrPShJPT1udWxsP3ZvaWQgMDpJLm1lc3NhZ2UpfHxgJHtmaWxlVHlwZX0ud29ya2VyLmpz5Ye66ZSZ5LqGYH1wb3N0TWVzc2FnZSh7X2V2ZW50TmFtZTpHLF9wcm9wczpSLF9lcnJvck1lc3NhZ2U6a30pfX0pKCk7Cg==", zi = (c) => Uint8Array.from(atob(c), (l) => l.charCodeAt(0)), as = typeof window < "u" && window.Blob && new Blob([zi(wb)], { type: "text/javascript;charset=utf-8" });
function Di(c) {
  let l;
  try {
    if (l = as && (window.URL || window.webkitURL).createObjectURL(as), !l) throw "";
    const U = new Worker(l, {
      name: c == null ? void 0 : c.name
    });
    return U.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(l);
    }), U;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + wb,
      {
        name: c == null ? void 0 : c.name
      }
    );
  } finally {
    l && (window.URL || window.webkitURL).revokeObjectURL(l);
  }
}
const xb = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO29ubWVzc2FnZT1yPT57dHJ5e2NvbnN0e2NhbnZhczp0LHBhZ2U6ZSx2aWV3cG9ydDppfT1yLmRhdGEscD10LmdldENvbnRleHQoIjJkIikse2J1ZmZlcjpjLG5hdHVyYWxXaWR0aDpuLG5hdHVyYWxIZWlnaHQ6c309ZTtsZXQgYT1lLmJpdG1hcDtjb25zdHt3aWR0aDpmLGhlaWdodDp1fT1pO2lmKCFhKXtjb25zdCBtPW5ldyBVaW50OENsYW1wZWRBcnJheShjLmJ1ZmZlciksZz1uZXcgSW1hZ2VEYXRhKG0sbixzKSxvPW5ldyBPZmZzY3JlZW5DYW52YXMobixzKTtvLmdldENvbnRleHQoIjJkIikucHV0SW1hZ2VEYXRhKGcsMCwwKSxhPW8udHJhbnNmZXJUb0ltYWdlQml0bWFwKCl9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57cG9zdE1lc3NhZ2UoZS5iaXRtYXA/ITA6YSl9KX1jYXRjaCh0KXtjb25zb2xlLmxvZygiZXJyb3IiLHQsdC5tZXNzYWdlKSxwb3N0TWVzc2FnZShudWxsKX19fSkoKTsK", ki = (c) => Uint8Array.from(atob(c), (l) => l.charCodeAt(0)), ms = typeof window < "u" && window.Blob && new Blob([ki(xb)], { type: "text/javascript;charset=utf-8" });
function Ii(c) {
  let l;
  try {
    if (l = ms && (window.URL || window.webkitURL).createObjectURL(ms), !l) throw "";
    const U = new Worker(l, {
      name: c == null ? void 0 : c.name
    });
    return U.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(l);
    }), U;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + xb,
      {
        name: c == null ? void 0 : c.name
      }
    );
  } finally {
    l && (window.URL || window.webkitURL).revokeObjectURL(l);
  }
}
const MV = new Di({ type: "module" }), Al = {};
async function Ei(c) {
  const l = this, { uid: U } = l, d = c - 1;
  if (!Al[U].processCapabilityArray[d]) {
    const Z = Promise.withResolvers();
    Al[U].processCapabilityArray[d] = Z, MV.postMessage({
      eventName: "getPage",
      props: { uid: U, pageIndex: d }
    });
  }
  return Al[U].processCapabilityArray[d].promise;
}
async function Ci() {
  const c = Promise.withResolvers(), l = this, { uid: U } = l;
  if (Al[U])
    return MV.postMessage({ eventName: "destroy", props: { uid: U } }), Al[U].endCapability = c, Al[U].endCapability.promise;
}
function wi({ scale: c }) {
  const l = this, { uid: U, pageIndex: d } = l, F = Al[U].pages[d];
  if (!F)
    throw new Error(`${l.pageIndex + 1}页没有先执行getPage方法`);
  const { naturalWidth: W, naturalHeight: t } = F, V = [0, 0, W, t];
  return l.view = V, {
    width: Math.round(V[2] * c),
    height: Math.round(V[3] * c),
    scale: c,
    viewBox: V
  };
}
function hs({ canvasContext: c, viewport: l, page: U }) {
  const { naturalWidth: d, naturalHeight: Z, bitmap: F } = U, { width: W, height: t } = l;
  c.drawImage(
    F,
    0,
    0,
    d,
    Z,
    0,
    0,
    W,
    t
  );
}
function xi({ canvasContext: c, viewport: l }) {
  const U = this, { pageIndex: d, uid: Z } = U, F = Al[Z], { pages: W, offscreenArray: t, offscreenWorkerArray: V } = F, R = W[d];
  if (!t[d]) {
    const N = new OffscreenCanvas(
      l.width,
      l.height
    );
    t[d] = N;
  }
  return {
    promise: new Promise((N, s) => {
      if (R.bitmap) {
        requestAnimationFrame(() => {
          hs({ canvasContext: c, viewport: l, page: R }), requestAnimationFrame(() => N(null));
        });
        return;
      }
      if (!V[d]) {
        const n = new Ii();
        V[d] = n, n.onmessage = ({ data: b }) => {
          b ? (b instanceof ImageBitmap && (R.bitmap = b, delete R.buffer, requestAnimationFrame(
            () => hs({ canvasContext: c, viewport: l, page: R })
          )), N(null)) : s(null), n.terminate(), delete V[d];
        }, n.postMessage(
          { canvas: t[d], page: R, viewport: l },
          [t[d]]
        );
      }
    })
  };
}
const ji = {
  decode: ({ uid: c, numPages: l }) => ({ uid: c, numPages: l, getPage: Ei, destroy: Ci }),
  getPage: ({
    uid: c,
    pageIndex: l,
    buffer: U,
    bitmap: d,
    naturalWidth: Z,
    naturalHeight: F
  }) => (Al[c].pages[l] || (Al[c].pages[l] = {
    buffer: U,
    bitmap: d,
    naturalWidth: Z,
    naturalHeight: F
  }), { uid: c, pageIndex: l, render: xi, getViewport: wi }),
  destroy: ({ uid: c }) => {
    delete Al[c];
  }
}, Oi = {
  decode: (c) => {
    var l;
    return (l = Al[c]) == null ? void 0 : l.startCapability;
  },
  getPage: (c, l) => {
    var U;
    return (U = Al[c]) == null ? void 0 : U.processCapabilityArray[l];
  },
  destroy: (c) => {
    var l;
    return (l = Al[c]) == null ? void 0 : l.endCapability;
  }
};
MV.onmessage = (c) => {
  const {
    _eventName: l,
    _errorMessage: U,
    _props: d
  } = c.data, { uid: Z, pageIndex: F } = d, W = Oi[l](Z, F);
  U && (W == null || W.reject(U)), W == null || W.resolve(ji[l](d));
};
const ri = async (c, l) => {
  const U = new Int32Array(l, 0, l.byteLength / 4), d = oi(U);
  if (!Al[d]) {
    const Z = Promise.withResolvers(), F = [], W = [], t = [];
    Al[d] = {
      startCapability: Z,
      processCapabilityArray: F,
      offscreenArray: W,
      pages: [],
      offscreenWorkerArray: t
    }, MV.postMessage({
      eventName: "decode",
      props: { fileType: c, uid: d, arrayBuffer: l }
    });
  }
  return Al[d].startCapability.promise;
}, Ki = (c, l) => {
  switch (c) {
    case "pdf":
      return Bi(l);
    default:
      return ri(c, l);
  }
};
function jb(c, l) {
  const U = Bl(), d = Ts(!1), Z = new IntersectionObserver(
    (F) => {
      c == null || c(F, Z), d.value = !!F.find((W) => W.isIntersecting);
    },
    l
  );
  return RN(() => {
    Z.disconnect();
  }), W0(
    U,
    (F, W) => {
      W && (Z.unobserve(W), d.value = !1), F && Z.observe(F);
    },
    {
      flush: "post"
    }
  ), { intersectionRef: U, isIntersecting: d };
}
const tN = ["rendered", "error"], gi = [
  "instance",
  "devicePixelRatio",
  "pageNum",
  "containerSize",
  "transform",
  ...tN.map(
    (c) => `on${c.replace(/^\S/, (l) => l.toUpperCase())}`
  )
], Hi = kc({
  name: "DViewerPage",
  props: gi,
  emits: [...tN],
  setup(c, { slots: l, emit: U, expose: d }) {
    const Z = tN.reduce((S, X) => {
      const e = `on${X.replace(/^\S/, (p) => p.toUpperCase())}`;
      return S[e] = (...p) => U(X, ...p), S;
    }, {}), F = Bl(0), W = Bl(!1), t = Bl(null), V = Bl(null), R = Bl(null), N = Bl(null);
    let s = null, n = null;
    const b = Bl(null), a = Bl(0), M = Rd(() => {
      const S = b.value ? [
        `round(var(--scale-factor) * ${b.value[2]}px, 1px)`,
        `round(var(--scale-factor) * ${b.value[3]}px, 1px)`
      ] : c.containerSize ? [
        `round(var(--scale-factor) * ${c.containerSize.width}px, 1px)`,
        `round(var(--scale-factor) * ${c.containerSize.height}px, 1px)`
      ] : [], X = {
        transform: c.transform ? `rotate(${c.transform.rotate}deg) rotateX(${c.transform.yFlip ? 0.5 : 0}turn) rotateY(${c.transform.xFlip ? 0.5 : 0}turn)` : ""
      };
      return S.length > 0 ? {
        ...X,
        width: S[0],
        height: S[1]
      } : X;
    }), G = kN((S) => {
      for (const X of S)
        X.isIntersecting && Y();
    }, 500), { intersectionRef: T, isIntersecting: J } = jb(
      G
    ), Y = kN(async () => {
      const S = tU(V), X = tU(R), {
        pageNum: e,
        devicePixelRatio: p,
        transform: { scale: y },
        instance: j
      } = c;
      if (!(F.value === 1 || !y || !S || !X || !j || a.value === y || !J.value)) {
        B();
        try {
          s || (F.value = 1, s = await j.getPage(e));
          const D = s.getViewport({
            scale: y * p
          });
          b.value = s.view, S.width = Math.floor(D.width), S.height = Math.floor(D.height), S.style.width = Math.floor(D.width) + "px", S.style.height = Math.floor(D.height) + "px";
          const P = {
            canvasContext: S.getContext("2d"),
            viewport: D
          };
          await s.render(P).promise, F.value = 2, a.value = y;
          const q = { pageNum: e };
          if (Z.onRendered(q), s.getTextContent && !n) {
            const dl = await s.getTextContent();
            n = new Si({
              textContentSource: dl,
              container: X,
              viewport: D
            }), n.render();
          }
        } catch (D) {
          console.error("error", (D == null ? void 0 : D.message) || D), F.value = 2, W.value = !0, Z.onError({
            eventName: "render",
            message: "页面渲染失败,原因：" + D.message,
            pageNum: e
          });
        }
      }
    }, 500), B = () => {
      const S = V.value;
      S && (S.style.width = "100%", S.style.height = "100%");
    };
    return sN(() => {
      T.value = t.value, W0(
        () => c.transform.scale,
        () => {
          Y();
        },
        {
          immediate: !0
        }
      );
    }), d({
      textLayerRef: R,
      annotationLayerRef: N,
      canvasRef: V,
      renderState: F,
      isRenderError: W
    }), () => {
      var S, X;
      return il("div", { class: "d-page", ref: t }, [
        // renderState.value < 2
        //   ? slots?.placeholder?.()
        //   : isRenderError.value
        //     ? slots?.error?.()
        //     : null,
        il(
          "div",
          {
            class: "absolute a-100 z-index-5",
            style: {
              display: F.value < 2 ? "block" : "none"
            }
          },
          (S = l == null ? void 0 : l.placeholder) == null ? void 0 : S.call(l)
        ),
        il(
          "div",
          {
            class: "absolute a-100 z-index-5",
            style: {
              display: W.value ? "block" : "none"
            }
          },
          (X = l == null ? void 0 : l.error) == null ? void 0 : X.call(l)
        ),
        il("div", { class: "page", style: M.value }, [
          il("div", { class: "canvasWrapper" }, [
            il("canvas", {
              domProps: {
                width: 0,
                height: 0
              },
              ref: V
            })
          ]),
          il("div", { class: "textLayer", ref: R }),
          il("div", { class: "annotationLayer", ref: N })
        ])
      ]);
    };
  }
}), vi = ["modelValue", "color", "indeterminate", "width"], Pi = kc({
  name: "DProgressCircular",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: vi,
  setup(c, { slots: l }) {
    const d = 2 * Math.PI * 20, Z = Bl(), { intersectionRef: F, isIntersecting: W } = jb(), { resizeRef: t, contentRect: V } = nN(), R = Rd(
      () => Math.max(0, Math.min(100, c.modelValue || 0))
    ), N = Rd(() => Number(c.width || 4)), s = Rd(
      () => V.value ? V.value.width : Math.max(N.value, 32)
    ), n = Rd(
      () => 20 / (1 - N.value / s.value) * 2
    ), b = Rd(
      () => N.value / s.value * n.value
    ), a = (G, T = "px") => {
      if (!(G == null || G === ""))
        return isNaN(+G) ? String(G) : isFinite(+G) ? `${Number(G)}${T}` : void 0;
    }, M = Rd(
      () => a((100 - R.value) / 100 * d)
    );
    return _b(() => {
      F.value = Z.value, t.value = Z.value;
    }), () => il(
      "div",
      {
        ref: Z,
        class: [
          "d-progress-circular",
          {
            "d-progress-circular--indeterminate": !!c.indeterminate,
            "d-progress-circular--visible": W.value
          }
        ],
        style: {
          color: c.color || "black",
          width: s.value + "px",
          height: s.value + "px"
        },
        attrs: {
          role: "progressbar",
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-valuenow": c.indeterminate ? void 0 : R.value
        }
      },
      [
        il(
          "svg",
          {
            style: {
              transform: "rotate(-90deg)"
            },
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: `0 0 ${n.value} ${n.value}`
            }
          },
          [
            il("circle", {
              class: ["d-progress-circular__underlay"],
              attrs: {
                fill: "transparent",
                cx: "50%",
                cy: "50%",
                r: 20,
                "stroke-width": b.value,
                "stroke-dasharray": d,
                "stroke-dashoffset": 0
              }
            }),
            il("circle", {
              class: "d-progress-circular__overlay",
              attrs: {
                fill: "transparent",
                cx: "50%",
                cy: "50%",
                r: 20,
                "stroke-width": b.value,
                "stroke-dasharray": d,
                "stroke-dashoffset": M.value
              }
            })
          ]
        ),
        l.default && il("div", { class: "d-progress-circular__content" }, [
          l.default({ value: R.value })
        ])
      ]
    );
  }
}), fi = {
  img: ["image/jpeg", "image/png"],
  tiff: ["image/tiff"],
  bmp: ["image/bmp"],
  pdf: ["application/pdf"]
}, Ai = (c) => {
  const l = Object.entries(fi);
  for (let U = 0; U < l.length; U++) {
    const [d, Z] = l[U];
    if (Z.includes(c)) return d;
  }
}, is = (c) => (c.scale || (c.scale = 1), c.rotate || (c.rotate = 0), c.xFlip || (c.xFlip = !1), c.yFlip || (c.yFlip = !1), c.offsetX || (c.offsetX = 0), c.offsetY || (c.offsetY = 0), c), VN = ["rendered", "error"], _i = [
  "src",
  "transform",
  ...VN.map(
    (c) => `on${c.replace(/^\S/, (l) => l.toUpperCase())}`
  )
], pt = kc({
  name: "DViewer",
  props: _i,
  emits: [...VN],
  setup(c, { slots: l, emit: U, expose: d, attrs: Z }) {
    const F = VN.reduce((L, C) => {
      const tl = `on${C.replace(/^\S/, (WU) => WU.toUpperCase())}`;
      return L[tl] = (...WU) => U(C, ...WU), L;
    }, {}), W = Bl(
      is({ ...c.transform })
    ), t = () => {
      var L;
      return (
        // h('div', { class: 'absolute a-100 z-index-5' }, [
        il("div", { class: "w-100 flex justify-content align-center" }, [
          ((L = l.placeholder) == null ? void 0 : L.call(l)) || il(Pi, { props: { indeterminate: !0 } })
        ])
      );
    }, V = () => {
      var L;
      return (
        // h('div', { class: 'absolute a-100 z-index-5' }, [
        il("div", { class: "w-100 flex justify-content align-center error" }, [
          ((L = l.error) == null ? void 0 : L.call(l)) || [
            il(
              "svg",
              {
                style: "width:32px;",
                domProps: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }
              },
              [
                il("path", {
                  style: "fill:currentColor",
                  domProps: {
                    d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  }
                })
              ]
            ),
            il("em", { style: "color:currentColor" }, "failed to load")
          ]
        ])
      );
    };
    let R = null;
    const N = Bl(0), s = Bl(!1), n = Bl(0), b = Bl(!1), a = window.devicePixelRatio || 1, M = Bl(0), G = Bl(!1), T = Bl([]), J = (L) => {
    }, { resizeRef: Y, contentRect: B } = nN(
      J
    ), S = Bl({ width: 150, height: 300 }), X = () => {
      N.value = 0, s.value = !1, n.value = 0, b.value = !1, R = null, M.value = 0, G.value = !1;
    }, e = async (L) => {
      X(), N.value = 1;
      const C = await za(L);
      if (N.value = 2, !C)
        return s.value = !0, F.onError({
          eventName: "load",
          message: "文件加载失败",
          pageNum: 0
        });
      let { arrayBuffer: tl, mimeType: WU } = C;
      const JU = Ai(WU);
      if (JU)
        n.value = 1, R = await Ki(
          JU,
          tl
        );
      else
        return s.value = !0, F.onError({
          eventName: "load",
          message: "文件格式不支持",
          pageNum: 0
        });
      if (n.value = 2, !(R != null && R.numPages))
        return b.value = !0, F.onError({
          eventName: "load",
          message: "文件处理失败",
          pageNum: 0
        });
      M.value = R.numPages;
    }, p = (L) => {
      L.pageNum === 1 && (G.value = !0), F.onRendered(L);
    }, y = (L) => {
      L.pageNum === 1 && (G.value = !0), F.onError(L);
    }, j = (L = 0.3) => {
      const C = (W.value.scale * 10 + L * 10) / 10;
      Nl(C);
    }, D = (L = 0.3) => {
      const C = (W.value.scale * 10 - L * 10) / 10;
      Nl(C);
    }, ll = (L = 90) => {
      x(W.value.rotate - L);
    }, P = (L = 90) => {
      x(W.value.rotate + L);
    }, q = (L) => {
      let C = !W.value.xFlip;
      L instanceof Boolean && (C = L), W.value.xFlip = C;
    }, dl = (L) => {
      let C = !W.value.yFlip;
      L instanceof Boolean && (C = L), W.value.yFlip = C;
    }, Nl = (L, [C, tl] = [0, 0]) => {
      L < 0.3 || L > 10 || (W.value.scale = L, W.value.offsetX = C, W.value.offsetY = tl);
    }, x = (L) => {
      L %= 360, L < 0 && (L += 360), W.value.rotate !== L && (W.value.rotate = L);
    };
    let w = null;
    const GZ = (L, C) => {
      const tl = T.value[L - 1];
      if (!tl) return;
      const WU = tl.annotationLayerRef;
      if (!C || !WU) return;
      const JU = new Promise((Ob, UM) => {
        const rb = setInterval(() => {
          tl.renderState === 2 && (clearInterval(rb), Ob(null));
        }, 200);
      });
      requestAnimationFrame(async () => {
        await JU, WU.appendChild(C), requestAnimationFrame(() => {
          C.scrollIntoView({
            behavior: "instant",
            block: "center",
            inline: "center"
          });
        });
      });
    }, lF = ([L, C] = [0, 0], [tl, WU] = [0, 0]) => {
      const JU = document.createElement("div");
      return JU.style.position = "absolute", JU.style.left = `round(var(--scale-factor) * ${L}px, 1px)`, JU.style.top = `round(var(--scale-factor) * ${C}px, 1px)`, JU.style.width = `round(var(--scale-factor) * ${tl}px, 1px)`, JU.style.height = `round(var(--scale-factor) * ${WU}px, 1px)`, JU.style.border = "1px dashed red", JU.style.backgroundColor = "transparent", JU;
    }, zd = (L) => {
      const C = T.value[L - 1];
      C && C.$el.scrollIntoView(!0);
    }, ol = (L = [0, 0], C = [10, 10], tl = 0) => {
      w = lF(L, C), GZ(tl, w);
    }, Dd = Gs({
      zoomIn: j,
      zoomOut: D,
      rotateLeft: ll,
      rotateRight: P,
      flipX: q,
      flipY: dl,
      createMagnifyArea: (L = [0, 0], C = [10, 10], tl = 1) => {
        w || (zd(tl), requestAnimationFrame(() => {
          ol(L, C, tl);
        }));
      },
      removeMagnifyArea: () => {
        w && (w.remove(), w = null);
      }
    });
    return d(Dd), sN(() => {
      W0(
        () => c.src,
        (L) => {
          e(L);
        },
        {
          immediate: !0
        }
      ), W0(
        () => c.transform,
        (L) => {
          W.value = is({ ...L });
        },
        {
          immediate: !0,
          deep: !0
        }
      ), W0(
        B,
        (L) => {
          L && (S.value = {
            width: L.width,
            height: L.height
          });
        },
        {
          immediate: !0
        }
      );
    }), RN(async () => {
      var L, C;
      await ((C = (L = R == null ? void 0 : R.destroy) == null ? void 0 : L.call(R)) == null ? void 0 : C.promise);
    }), () => {
      var L;
      return il("div", { class: "d-viewer outerContainer" }, [
        il("div", { class: "mainContainer", ref: Y }, [
          il("div", { class: "viewerContainer" }, [
            // readyState.value < 2
            //   ? slot_placeholder()
            //   : isReadyError.value || isProgressError.value
            //     ? slot_error()
            //     : null,
            il(
              "div",
              {
                class: "absolute a-100 z-index-5",
                style: {
                  display: N.value < 2 ? "block" : "none"
                }
              },
              t()
            ),
            il(
              "div",
              {
                class: "absolute a-100 z-index-5",
                style: {
                  display: s.value || b.value ? "block" : "none"
                }
              },
              V()
            ),
            il(
              "div",
              {
                class: "pdfViewer",
                style: { "--scale-factor": `${(L = W.value) == null ? void 0 : L.scale}` }
              },
              [
                Array.from(
                  {
                    length: M.value ? G.value ? M.value : 1 : 0
                  },
                  (C, tl) => il(Hi, {
                    ref: (WU) => {
                      T.value[tl] = WU;
                    },
                    key: tl,
                    props: {
                      pageNum: tl + 1,
                      instance: R,
                      devicePixelRatio: a,
                      containerSize: S.value,
                      transform: W.value
                    },
                    on: { rendered: p, error: y },
                    scopedSlots: {
                      placeholder: t,
                      error: V
                    }
                  })
                )
              ]
            )
          ])
        ])
      ]);
    };
  }
});
pt.install = (c) => {
  const l = pt.name;
  c.component(l, pt);
};
const qi = ["permission"], FM = kc({
  name: "DAuthority",
  props: qi,
  setup(c, { slots: l }) {
    const U = ea(), d = Rd(() => c.permission ? U ? Array.isArray(c.permission) ? c.permission.every((Z) => U.includes(Z)) : U.includes(c.permission) : !1 : !0);
    return l.default && l.default({ userPermissions: U }), () => d.value && l.default ? VF(l.default) : null;
  }
}), $i = [pt, dt], lM = (c) => ({
  install: (U) => {
    c.forEach((d) => {
      qb ? U.use(d) : d.install(U);
    });
  }
}), WM = lM([...$i]);
export {
  FM as DAuthority,
  dt as DList,
  Pi as DProgressCircular,
  pt as DViewer,
  qi as authorityProps,
  WM as default,
  KV as listEmits,
  Jm as listProps,
  VN as viewerEmits,
  _i as viewerProps
};