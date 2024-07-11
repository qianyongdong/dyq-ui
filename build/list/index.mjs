import { createVNode as xe } from "vue";
import { shallowRef as Vt, ref as At, onBeforeUnmount as qt, watch as xt, readonly as Kt, getCurrentInstance as ct, unref as L, onUnmounted as Jt, onMounted as Zt, nextTick as Qt, isRef as $e, defineComponent as en, computed as Ue, toRefs as tn, reactive as nn } from "vue-demi";
function on(t) {
  return t.replace(/-(\w)/g, (e, n) => n ? n.toUpperCase() : "");
}
function rn(t) {
  return Object.keys(t).reduce(
    (e, n) => (typeof t[n] < "u" && (e[on(n)] = t[n]), e),
    {}
  );
}
function an(t, e) {
  const n = /(\d+)(px|em|%)/, o = t.match(n);
  if (!o)
    throw new Error("子元素宽度格式无效");
  let i = parseFloat(o[1]), r = o[2], a;
  switch (r) {
    case "px":
      a = i;
      break;
    case "em":
      a = i * 16;
      break;
    case "%":
      a = i / 100 * e;
      break;
    default:
      throw new Error("不支持的单位类型");
  }
  return Math.floor(e / a);
}
function ln(t) {
  if (t && "$el" in t) {
    const e = t.$el;
    return (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE ? e.nextElementSibling : e;
  }
  return t;
}
function sn() {
  const t = Vt(), e = (n) => {
    t.value = n;
  };
  return Object.defineProperty(e, "value", {
    enumerable: !0,
    get: () => t.value,
    set: (n) => t.value = n
  }), Object.defineProperty(e, "el", {
    enumerable: !0,
    get: () => ln(t.value)
  }), e;
}
function un(t, e = "content") {
  const n = sn(), o = At(), i = new ResizeObserver((r) => {
    r.length && (e === "content" ? o.value = r[0].contentRect : o.value = r[0].target.getBoundingClientRect());
  });
  return qt(() => {
    i.disconnect();
  }), xt(
    () => n.el,
    (r, a) => {
      a && (i.unobserve(a), o.value = void 0), r && i.observe(r);
    },
    {
      flush: "post"
    }
  ), {
    resizeRef: n,
    contentRect: Kt(o)
  };
}
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function gt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function K(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gt(Object(n), !0).forEach(function(o) {
      cn(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Fe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fe = function(e) {
    return typeof e;
  } : Fe = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fe(t);
}
function cn(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ee() {
  return ee = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, ee.apply(this, arguments);
}
function fn(t, e) {
  if (t == null) return {};
  var n = {}, o = Object.keys(t), i, r;
  for (r = 0; r < o.length; r++)
    i = o[r], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function dn(t, e) {
  if (t == null) return {};
  var n = fn(t, e), o, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    for (i = 0; i < r.length; i++)
      o = r[i], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var hn = "1.15.2";
function Q(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var te = Q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ce = Q(/Edge/i), mt = Q(/firefox/i), _e = Q(/safari/i) && !Q(/chrome/i) && !Q(/android/i), Nt = Q(/iP(ad|od|hone)/i), Pt = Q(/chrome/i) && Q(/android/i), Mt = {
  capture: !1,
  passive: !1
};
function _(t, e, n) {
  t.addEventListener(e, n, !te && Mt);
}
function y(t, e, n) {
  t.removeEventListener(e, n, !te && Mt);
}
function Le(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function pn(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function U(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Le(t, e) : Le(t, e)) || o && t === n)
        return t;
      if (t === n) break;
    } while (t = pn(t));
  }
  return null;
}
var vt = /\s+/g;
function H(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace(vt, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(vt, " ");
    }
}
function h(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), o[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function ge(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var o = h(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(n);
}
function Rt(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e), i = 0, r = o.length;
    if (n)
      for (; i < r; i++)
        n(o[i], i);
    return o;
  }
  return [];
}
function q() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function x(t, e, n, o, i) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var r, a, l, s, u, d, f;
    if (t !== window && t.parentNode && t !== q() ? (r = t.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, d = r.height, f = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !te))
      do
        if (i && i.getBoundingClientRect && (h(i, "transform") !== "none" || n && h(i, "position") !== "static")) {
          var E = i.getBoundingClientRect();
          a -= E.top + parseInt(h(i, "border-top-width")), l -= E.left + parseInt(h(i, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (i = i.parentNode);
    if (o && t !== window) {
      var v = ge(i || t), g = v && v.a, b = v && v.d;
      v && (a /= b, l /= g, f /= g, d /= b, s = a + d, u = l + f);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: f,
      height: d
    };
  }
}
function bt(t, e, n) {
  for (var o = re(t, !0), i = x(t)[e]; o; ) {
    var r = x(o)[n], a = void 0;
    if (a = i >= r, !a) return o;
    if (o === q()) break;
    o = re(o, !1);
  }
  return !1;
}
function me(t, e, n, o) {
  for (var i = 0, r = 0, a = t.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== p.ghost && (o || a[r] !== p.dragged) && U(a[r], n.draggable, t, !1)) {
      if (i === e)
        return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function ft(t, e) {
  for (var n = t.lastElementChild; n && (n === p.ghost || h(n, "display") === "none" || e && !Le(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function G(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== p.clone && (!e || Le(t, e)) && n++;
  return n;
}
function wt(t) {
  var e = 0, n = 0, o = q();
  if (t)
    do {
      var i = ge(t), r = i.a, a = i.d;
      e += t.scrollLeft * r, n += t.scrollTop * a;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function gn(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
    }
  return -1;
}
function re(t, e) {
  if (!t || !t.getBoundingClientRect) return q();
  var n = t, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var i = h(n);
      if (n.clientWidth < n.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return q();
        if (o || e) return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return q();
}
function mn(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Ve(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Se;
function Ft(t, e) {
  return function() {
    if (!Se) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), Se = setTimeout(function() {
        Se = void 0;
      }, e);
    }
  };
}
function vn() {
  clearTimeout(Se), Se = void 0;
}
function Xt(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function Yt(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function Bt(t, e, n) {
  var o = {};
  return Array.from(t.children).forEach(function(i) {
    var r, a, l, s;
    if (!(!U(i, e.draggable, t, !1) || i.animated || i === n)) {
      var u = x(i);
      o.left = Math.min((r = o.left) !== null && r !== void 0 ? r : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var z = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function bn() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(i) {
          if (!(h(i, "display") === "none" || i === p.ghost)) {
            t.push({
              target: i,
              rect: x(i)
            });
            var r = K({}, t[t.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = ge(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(o) {
      t.push(o);
    },
    removeAnimationState: function(o) {
      t.splice(gn(t, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var r = !1, a = 0;
      t.forEach(function(l) {
        var s = 0, u = l.target, d = u.fromRect, f = x(u), E = u.prevFromRect, v = u.prevToRect, g = l.rect, b = ge(u, !0);
        b && (f.top -= b.f, f.left -= b.e), u.toRect = f, u.thisAnimationDuration && Ve(E, f) && !Ve(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (g.top - f.top) / (g.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = En(g, E, v, i.options)), Ve(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = i.options.animation), i.animate(u, g, f, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, i, r, a) {
      if (a) {
        h(o, "transition", ""), h(o, "transform", "");
        var l = ge(this.el), s = l && l.a, u = l && l.d, d = (i.left - r.left) / (s || 1), f = (i.top - r.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!f, h(o, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = wn(o), h(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          h(o, "transition", ""), h(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function wn(t) {
  return t.offsetWidth;
}
function En(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var fe = [], qe = {
  initializeByDefault: !0
}, Ie = {
  mount: function(e) {
    for (var n in qe)
      qe.hasOwnProperty(n) && !(n in e) && (e[n] = qe[n]);
    fe.forEach(function(o) {
      if (o.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), fe.push(e);
  },
  pluginEvent: function(e, n, o) {
    var i = this;
    this.eventCanceled = !1, o.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = e + "Global";
    fe.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](K({
        sortable: n
      }, o)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](K({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(e, n, o, i) {
    fe.forEach(function(l) {
      var s = l.pluginName;
      if (!(!e.options[s] && !l.initializeByDefault)) {
        var u = new l(e, n, e.options);
        u.sortable = e, u.options = e.options, e[s] = u, ee(o, u.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        typeof a < "u" && (e.options[r] = a);
      }
  },
  getEventProperties: function(e, n) {
    var o = {};
    return fe.forEach(function(i) {
      typeof i.eventProperties == "function" && ee(o, i.eventProperties.call(n[i.pluginName], e));
    }), o;
  },
  modifyOption: function(e, n, o) {
    var i;
    return fe.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (i = r.optionListeners[n].call(e[r.pluginName], o));
    }), i;
  }
};
function yn(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, i = t.targetEl, r = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, u = t.newIndex, d = t.oldDraggableIndex, f = t.newDraggableIndex, E = t.originalEvent, v = t.putSortable, g = t.extraEventProperties;
  if (e = e || n && n[z], !!e) {
    var b, D = e.options, C = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !te && !Ce ? b = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (b = document.createEvent("Event"), b.initEvent(o, !0, !0)), b.to = a || n, b.from = l || n, b.item = i || n, b.clone = r, b.oldIndex = s, b.newIndex = u, b.oldDraggableIndex = d, b.newDraggableIndex = f, b.originalEvent = E, b.pullMode = v ? v.lastPutMode : void 0;
    var N = K(K({}, g), Ie.getEventProperties(o, e));
    for (var M in N)
      b[M] = N[M];
    n && n.dispatchEvent(b), D[C] && D[C].call(e, b);
  }
}
var _n = ["evt"], k = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = o.evt, r = dn(o, _n);
  Ie.pluginEvent.bind(p)(e, n, K({
    dragEl: c,
    parentEl: I,
    ghostEl: m,
    rootEl: T,
    nextEl: ce,
    lastDownEl: Xe,
    cloneEl: O,
    cloneHidden: ie,
    dragStarted: we,
    putSortable: R,
    activeSortable: p.active,
    originalEvent: i,
    oldIndex: pe,
    oldDraggableIndex: De,
    newIndex: W,
    newDraggableIndex: oe,
    hideGhostForTarget: Wt,
    unhideGhostForTarget: zt,
    cloneNowHidden: function() {
      ie = !0;
    },
    cloneNowShown: function() {
      ie = !1;
    },
    dispatchSortableEvent: function(l) {
      B({
        sortable: n,
        name: l,
        originalEvent: i
      });
    }
  }, r));
};
function B(t) {
  yn(K({
    putSortable: R,
    cloneEl: O,
    targetEl: c,
    rootEl: T,
    oldIndex: pe,
    oldDraggableIndex: De,
    newIndex: W,
    newDraggableIndex: oe
  }, t));
}
var c, I, m, T, ce, Xe, O, ie, pe, W, De, oe, Ne, R, he = !1, He = !1, We = [], se, $, Ke, Je, Et, yt, we, de, Te, Oe = !1, Pe = !1, Ye, Y, Ze = [], rt = !1, ze = [], je = typeof document < "u", Me = Nt, _t = Ce || te ? "cssFloat" : "float", Sn = je && !Pt && !Nt && "draggable" in document.createElement("div"), kt = function() {
  if (je) {
    if (te)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), Lt = function(e, n) {
  var o = h(e), i = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), r = me(e, 0, n), a = me(e, 1, n), l = r && h(r), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + x(r).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + x(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var f = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= i && o[_t] === "none" || a && o[_t] === "none" && u + d > i) ? "vertical" : "horizontal";
}, Dn = function(e, n, o) {
  var i = o ? e.left : e.top, r = o ? e.right : e.bottom, a = o ? e.width : e.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return i === l || r === s || i + a / 2 === l + u / 2;
}, Tn = function(e, n) {
  var o;
  return We.some(function(i) {
    var r = i[z].options.emptyInsertThreshold;
    if (!(!r || ft(i))) {
      var a = x(i), l = e >= a.left - r && e <= a.right + r, s = n >= a.top - r && n <= a.bottom + r;
      if (l && s)
        return o = i;
    }
  }), o;
}, Ht = function(e) {
  function n(r, a) {
    return function(l, s, u, d) {
      var f = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || f))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(l, s, u, d), a)(l, s, u, d);
      var E = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === E || r.join && r.indexOf(E) > -1;
    };
  }
  var o = {}, i = e.group;
  (!i || Fe(i) != "object") && (i = {
    name: i
  }), o.name = i.name, o.checkPull = n(i.pull, !0), o.checkPut = n(i.put), o.revertClone = i.revertClone, e.group = o;
}, Wt = function() {
  !kt && m && h(m, "display", "none");
}, zt = function() {
  !kt && m && h(m, "display", "");
};
je && !Pt && document.addEventListener("click", function(t) {
  if (He)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), He = !1, !1;
}, !0);
var ue = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = Tn(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var i in e)
        e.hasOwnProperty(i) && (o[i] = e[i]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[z]._onDragOver(o);
    }
  }
}, On = function(e) {
  c && c.parentNode[z]._isOutsideThisEl(e.target);
};
function p(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = ee({}, e), t[z] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Lt(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
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
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !_e,
    emptyInsertThreshold: 5
  };
  Ie.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  Ht(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Sn, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? _(t, "pointerdown", this._onTapStart) : (_(t, "mousedown", this._onTapStart), _(t, "touchstart", this._onTapStart)), this.nativeDraggable && (_(t, "dragover", this), _(t, "dragenter", this)), We.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ee(this, bn());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (de = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, i = this.options, r = i.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, d = i.filter;
      if (Rn(o), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && _e && s && s.tagName.toUpperCase() === "SELECT") && (s = U(s, i.draggable, o, !1), !(s && s.animated) && Xe !== s)) {
        if (pe = G(s), De = G(s, i.draggable), typeof d == "function") {
          if (d.call(this, e, s, this)) {
            B({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), k("filter", n, {
              evt: e
            }), r && e.cancelable && e.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
          if (f = U(u, f.trim(), o, !1), f)
            return B({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), k("filter", n, {
              evt: e
            }), !0;
        }), d)) {
          r && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !U(u, i.handle, o, !1) || this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function(e, n, o) {
    var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
    if (o && !c && o.parentNode === r) {
      var u = x(o);
      if (T = r, c = o, I = c.parentNode, ce = c.nextSibling, Xe = o, Ne = a.group, p.dragged = c, se = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Et = se.clientX - u.left, yt = se.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if (k("delayEnded", i, {
          evt: e
        }), p.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !mt && i.nativeDraggable && (c.draggable = !0), i._triggerDragStart(e, n), B({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), H(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Rt(c, d.trim(), Qe);
      }), _(l, "dragover", ue), _(l, "mousemove", ue), _(l, "touchmove", ue), _(l, "mouseup", i._onDrop), _(l, "touchend", i._onDrop), _(l, "touchcancel", i._onDrop), mt && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), k("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ce || te))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        _(l, "mouseup", i._disableDelayedDrag), _(l, "touchend", i._disableDelayedDrag), _(l, "touchcancel", i._disableDelayedDrag), _(l, "mousemove", i._delayedDragTouchMoveHandler), _(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && _(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && Qe(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    y(e, "mouseup", this._disableDelayedDrag), y(e, "touchend", this._disableDelayedDrag), y(e, "touchcancel", this._disableDelayedDrag), y(e, "mousemove", this._delayedDragTouchMoveHandler), y(e, "touchmove", this._delayedDragTouchMoveHandler), y(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? _(document, "pointermove", this._onTouchMove) : n ? _(document, "touchmove", this._onTouchMove) : _(document, "mousemove", this._onTouchMove) : (_(c, "dragend", this), _(T, "dragstart", this._onDragStart));
    try {
      document.selection ? Be(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (he = !1, T && c) {
      k("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && _(document, "dragover", On);
      var o = this.options;
      !e && H(c, o.dragClass, !1), H(c, o.ghostClass, !0), p.active = this, e && this._appendGhost(), B({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if ($) {
      this._lastX = $.clientX, this._lastY = $.clientY, Wt();
      for (var e = document.elementFromPoint($.clientX, $.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint($.clientX, $.clientY), e !== n); )
        n = e;
      if (c.parentNode[z]._isOutsideThisEl(e), n)
        do {
          if (n[z]) {
            var o = void 0;
            if (o = n[z]._onDragOver({
              clientX: $.clientX,
              clientY: $.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      zt();
    }
  },
  _onTouchMove: function(e) {
    if (se) {
      var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, a = m && ge(m, !0), l = m && a && a.a, s = m && a && a.d, u = Me && Y && wt(Y), d = (r.clientX - se.clientX + i.x) / (l || 1) + (u ? u[0] - Ze[0] : 0) / (l || 1), f = (r.clientY - se.clientY + i.y) / (s || 1) + (u ? u[1] - Ze[1] : 0) / (s || 1);
      if (!p.active && !he) {
        if (o && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (m) {
        a ? (a.e += d - (Ke || 0), a.f += f - (Je || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var E = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(m, "webkitTransform", E), h(m, "mozTransform", E), h(m, "msTransform", E), h(m, "transform", E), Ke = d, Je = f, $ = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!m) {
      var e = this.options.fallbackOnBody ? document.body : T, n = x(c, !0, Me, !0, e), o = this.options;
      if (Me) {
        for (Y = e; h(Y, "position") === "static" && h(Y, "transform") === "none" && Y !== document; )
          Y = Y.parentNode;
        Y !== document.body && Y !== document.documentElement ? (Y === document && (Y = q()), n.top += Y.scrollTop, n.left += Y.scrollLeft) : Y = q(), Ze = wt(Y);
      }
      m = c.cloneNode(!0), H(m, o.ghostClass, !1), H(m, o.fallbackClass, !0), H(m, o.dragClass, !0), h(m, "transition", ""), h(m, "transform", ""), h(m, "box-sizing", "border-box"), h(m, "margin", 0), h(m, "top", n.top), h(m, "left", n.left), h(m, "width", n.width), h(m, "height", n.height), h(m, "opacity", "0.8"), h(m, "position", Me ? "absolute" : "fixed"), h(m, "zIndex", "100000"), h(m, "pointerEvents", "none"), p.ghost = m, e.appendChild(m), h(m, "transform-origin", Et / parseInt(m.style.width) * 100 + "% " + yt / parseInt(m.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, i = e.dataTransfer, r = o.options;
    if (k("dragStart", this, {
      evt: e
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    k("setupClone", this), p.eventCanceled || (O = Yt(c), O.removeAttribute("id"), O.draggable = !1, O.style["will-change"] = "", this._hideClone(), H(O, this.options.chosenClass, !1), p.clone = O), o.cloneId = Be(function() {
      k("clone", o), !p.eventCanceled && (o.options.removeCloneOnHide || T.insertBefore(O, c), o._hideClone(), B({
        sortable: o,
        name: "clone"
      }));
    }), !n && H(c, r.dragClass, !0), n ? (He = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (y(document, "mouseup", o._onDrop), y(document, "touchend", o._onDrop), y(document, "touchcancel", o._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(o, i, c)), _(document, "drop", o), h(c, "transform", "translateZ(0)")), he = !0, o._dragStartId = Be(o._dragStarted.bind(o, n, e)), _(document, "selectstart", o), we = !0, _e && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, i, r, a, l = this.options, s = l.group, u = p.active, d = Ne === s, f = l.sort, E = R || u, v, g = this, b = !1;
    if (rt) return;
    function D(be, $t) {
      k(be, g, K({
        evt: e,
        isOwner: d,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: f,
        fromSortable: E,
        target: o,
        completed: N,
        onMove: function(pt, Ut) {
          return Re(T, n, c, i, pt, x(pt), e, Ut);
        },
        changed: M
      }, $t));
    }
    function C() {
      D("dragOverAnimationCapture"), g.captureAnimationState(), g !== E && E.captureAnimationState();
    }
    function N(be) {
      return D("dragOverCompleted", {
        insertion: be
      }), be && (d ? u._hideClone() : u._showClone(g), g !== E && (H(c, R ? R.options.ghostClass : u.options.ghostClass, !1), H(c, l.ghostClass, !0)), R !== g && g !== p.active ? R = g : g === p.active && R && (R = null), E === g && (g._ignoreWhileAnimating = o), g.animateAll(function() {
        D("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== E && (E.animateAll(), E._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (de = null), !l.dragoverBubble && !e.rootEl && o !== document && (c.parentNode[z]._isOutsideThisEl(e.target), !be && ue(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), b = !0;
    }
    function M() {
      W = G(c), oe = G(c, l.draggable), B({
        sortable: g,
        name: "change",
        toEl: n,
        newIndex: W,
        newDraggableIndex: oe,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = U(o, l.draggable, n, !0), D("dragOver"), p.eventCanceled) return b;
    if (c.contains(e.target) || o.animated && o.animatingX && o.animatingY || g._ignoreWhileAnimating === o)
      return N(!1);
    if (He = !1, u && !l.disabled && (d ? f || (a = I !== T) : R === this || (this.lastPutMode = Ne.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))) {
      if (v = this._getDirection(e, o) === "vertical", i = x(c), D("dragOverValid"), p.eventCanceled) return b;
      if (a)
        return I = T, C(), this._hideClone(), D("revert"), p.eventCanceled || (ce ? T.insertBefore(c, ce) : T.appendChild(c)), N(!0);
      var F = ft(n, l.draggable);
      if (!F || xn(e, v, this) && !F.animated) {
        if (F === c)
          return N(!1);
        if (F && n === e.target && (o = F), o && (r = x(o)), Re(T, n, c, i, o, r, e, !!o) !== !1)
          return C(), F && F.nextSibling ? n.insertBefore(c, F.nextSibling) : n.appendChild(c), I = n, M(), N(!0);
      } else if (F && An(e, v, this)) {
        var w = me(n, 0, l, !0);
        if (w === c)
          return N(!1);
        if (o = w, r = x(o), Re(T, n, c, i, o, r, e, !1) !== !1)
          return C(), n.insertBefore(c, w), I = n, M(), N(!0);
      } else if (o.parentNode === n) {
        r = x(o);
        var S = 0, X, j = c.parentNode !== n, P = !Dn(c.animated && c.toRect || i, o.animated && o.toRect || r, v), J = v ? "top" : "left", V = bt(o, "top", "top") || bt(c, "top", "top"), ae = V ? V.scrollTop : void 0;
        de !== o && (X = r[J], Oe = !1, Pe = !P && l.invertSwap || j), S = Nn(e, o, r, v, P ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Pe, de === o);
        var Z;
        if (S !== 0) {
          var le = G(c);
          do
            le -= S, Z = I.children[le];
          while (Z && (h(Z, "display") === "none" || Z === m));
        }
        if (S === 0 || Z === o)
          return N(!1);
        de = o, Te = S;
        var ve = o.nextElementSibling, ne = !1;
        ne = S === 1;
        var Ae = Re(T, n, c, i, o, r, e, ne);
        if (Ae !== !1)
          return (Ae === 1 || Ae === -1) && (ne = Ae === 1), rt = !0, setTimeout(In, 30), C(), ne && !ve ? n.appendChild(c) : o.parentNode.insertBefore(c, ne ? ve : o), V && Xt(V, 0, ae - V.scrollTop), I = c.parentNode, X !== void 0 && !Pe && (Ye = Math.abs(X - x(o)[J])), M(), N(!0);
      }
      if (n.contains(c))
        return N(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    y(document, "mousemove", this._onTouchMove), y(document, "touchmove", this._onTouchMove), y(document, "pointermove", this._onTouchMove), y(document, "dragover", ue), y(document, "mousemove", ue), y(document, "touchmove", ue);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    y(e, "mouseup", this._onDrop), y(e, "touchend", this._onDrop), y(e, "pointerup", this._onDrop), y(e, "touchcancel", this._onDrop), y(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if (W = G(c), oe = G(c, o.draggable), k("drop", this, {
      evt: e
    }), I = c && c.parentNode, W = G(c), oe = G(c, o.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    he = !1, Pe = !1, Oe = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), at(this.cloneId), at(this._dragStartId), this.nativeDraggable && (y(document, "drop", this), y(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), _e && h(document.body, "user-select", ""), h(c, "transform", ""), e && (we && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), m && m.parentNode && m.parentNode.removeChild(m), (T === I || R && R.lastPutMode !== "clone") && O && O.parentNode && O.parentNode.removeChild(O), c && (this.nativeDraggable && y(c, "dragend", this), Qe(c), c.style["will-change"] = "", we && !he && H(c, R ? R.options.ghostClass : this.options.ghostClass, !1), H(c, this.options.chosenClass, !1), B({
      sortable: this,
      name: "unchoose",
      toEl: I,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), T !== I ? (W >= 0 && (B({
      rootEl: I,
      name: "add",
      toEl: I,
      fromEl: T,
      originalEvent: e
    }), B({
      sortable: this,
      name: "remove",
      toEl: I,
      originalEvent: e
    }), B({
      rootEl: I,
      name: "sort",
      toEl: I,
      fromEl: T,
      originalEvent: e
    }), B({
      sortable: this,
      name: "sort",
      toEl: I,
      originalEvent: e
    })), R && R.save()) : W !== pe && W >= 0 && (B({
      sortable: this,
      name: "update",
      toEl: I,
      originalEvent: e
    }), B({
      sortable: this,
      name: "sort",
      toEl: I,
      originalEvent: e
    })), p.active && ((W == null || W === -1) && (W = pe, oe = De), B({
      sortable: this,
      name: "end",
      toEl: I,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    k("nulling", this), T = c = I = m = ce = O = Xe = ie = se = $ = we = W = oe = pe = De = de = Te = R = Ne = p.dragged = p.ghost = p.clone = p.active = null, ze.forEach(function(e) {
      e.checked = !0;
    }), ze.length = Ke = Je = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), Cn(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, o = this.el.children, i = 0, r = o.length, a = this.options; i < r; i++)
      n = o[i], U(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Mn(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var o = {}, i = this.el;
    this.toArray().forEach(function(r, a) {
      var l = i.children[a];
      U(l, this.options.draggable, i, !1) && (o[r] = l);
    }, this), n && this.captureAnimationState(), e.forEach(function(r) {
      o[r] && (i.removeChild(o[r]), i.appendChild(o[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return U(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var o = this.options;
    if (n === void 0)
      return o[e];
    var i = Ie.modifyOption(this, e, n);
    typeof i < "u" ? o[e] = i : o[e] = n, e === "group" && Ht(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    k("destroy", this);
    var e = this.el;
    e[z] = null, y(e, "mousedown", this._onTapStart), y(e, "touchstart", this._onTapStart), y(e, "pointerdown", this._onTapStart), this.nativeDraggable && (y(e, "dragover", this), y(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), We.splice(We.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ie) {
      if (k("hideClone", this), p.eventCanceled) return;
      h(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), ie = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ie) {
      if (k("showClone", this), p.eventCanceled) return;
      c.parentNode == T && !this.options.group.revertClone ? T.insertBefore(O, c) : ce ? T.insertBefore(O, ce) : T.appendChild(O), this.options.group.revertClone && this.animate(c, O), h(O, "display", ""), ie = !1;
    }
  }
};
function Cn(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Re(t, e, n, o, i, r, a, l) {
  var s, u = t[z], d = u.options.onMove, f;
  return window.CustomEvent && !te && !Ce ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || x(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function Qe(t) {
  t.draggable = !1;
}
function In() {
  rt = !1;
}
function An(t, e, n) {
  var o = x(me(n.el, 0, n.options, !0)), i = Bt(n.el, n.options, m), r = 10;
  return e ? t.clientX < i.left - r || t.clientY < o.top && t.clientX < o.right : t.clientY < i.top - r || t.clientY < o.bottom && t.clientX < o.left;
}
function xn(t, e, n) {
  var o = x(ft(n.el, n.options.draggable)), i = Bt(n.el, n.options, m), r = 10;
  return e ? t.clientX > i.right + r || t.clientY > o.bottom && t.clientX > o.left : t.clientY > i.bottom + r || t.clientX > o.right && t.clientY > o.top;
}
function Nn(t, e, n, o, i, r, a, l) {
  var s = o ? t.clientY : t.clientX, u = o ? n.height : n.width, d = o ? n.top : n.left, f = o ? n.bottom : n.right, E = !1;
  if (!a) {
    if (l && Ye < u * i) {
      if (!Oe && (Te === 1 ? s > d + u * r / 2 : s < f - u * r / 2) && (Oe = !0), Oe)
        E = !0;
      else if (Te === 1 ? s < d + Ye : s > f - Ye)
        return -Te;
    } else if (s > d + u * (1 - i) / 2 && s < f - u * (1 - i) / 2)
      return Pn(e);
  }
  return E = E || a, E && (s < d + u * r / 2 || s > f - u * r / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function Pn(t) {
  return G(c) < G(t) ? 1 : -1;
}
function Mn(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function Rn(t) {
  ze.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && ze.push(o);
  }
}
function Be(t) {
  return setTimeout(t, 0);
}
function at(t) {
  return clearTimeout(t);
}
je && _(document, "touchmove", function(t) {
  (p.active || he) && t.cancelable && t.preventDefault();
});
p.utils = {
  on: _,
  off: y,
  css: h,
  find: Rt,
  is: function(e, n) {
    return !!U(e, n, e, !1);
  },
  extend: mn,
  throttle: Ft,
  closest: U,
  toggleClass: H,
  clone: Yt,
  index: G,
  nextTick: Be,
  cancelNextTick: at,
  detectDirection: Lt,
  getChild: me
};
p.get = function(t) {
  return t[z];
};
p.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (p.utils = K(K({}, p.utils), o.utils)), Ie.mount(o);
  });
};
p.create = function(t, e) {
  return new p(t, e);
};
p.version = hn;
var A = [], Ee, lt, st = !1, et, tt, Ge, ye;
function Fn() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? _(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? _(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? _(document, "touchmove", this._handleFallbackAutoScroll) : _(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? y(document, "dragover", this._handleAutoScroll) : (y(document, "pointermove", this._handleFallbackAutoScroll), y(document, "touchmove", this._handleFallbackAutoScroll), y(document, "mousemove", this._handleFallbackAutoScroll)), St(), ke(), vn();
    },
    nulling: function() {
      Ge = lt = Ee = st = ye = et = tt = null, A.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var i = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(r, a);
      if (Ge = n, o || this.options.forceAutoScrollFallback || Ce || te || _e) {
        nt(n, this.options, l, o);
        var s = re(l, !0);
        st && (!ye || r !== et || a !== tt) && (ye && St(), ye = setInterval(function() {
          var u = re(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, ke()), nt(n, i.options, u, o);
        }, 10), et = r, tt = a);
      } else {
        if (!this.options.bubbleScroll || re(l, !0) === q()) {
          ke();
          return;
        }
        nt(n, this.options, re(l, !1), !1);
      }
    }
  }, ee(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ke() {
  A.forEach(function(t) {
    clearInterval(t.pid);
  }), A = [];
}
function St() {
  clearInterval(ye);
}
var nt = Ft(function(t, e, n, o) {
  if (e.scroll) {
    var i = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = q(), u = !1, d;
    lt !== n && (lt = n, ke(), Ee = e.scroll, d = e.scrollFn, Ee === !0 && (Ee = re(n, !0)));
    var f = 0, E = Ee;
    do {
      var v = E, g = x(v), b = g.top, D = g.bottom, C = g.left, N = g.right, M = g.width, F = g.height, w = void 0, S = void 0, X = v.scrollWidth, j = v.scrollHeight, P = h(v), J = v.scrollLeft, V = v.scrollTop;
      v === s ? (w = M < X && (P.overflowX === "auto" || P.overflowX === "scroll" || P.overflowX === "visible"), S = F < j && (P.overflowY === "auto" || P.overflowY === "scroll" || P.overflowY === "visible")) : (w = M < X && (P.overflowX === "auto" || P.overflowX === "scroll"), S = F < j && (P.overflowY === "auto" || P.overflowY === "scroll"));
      var ae = w && (Math.abs(N - i) <= a && J + M < X) - (Math.abs(C - i) <= a && !!J), Z = S && (Math.abs(D - r) <= a && V + F < j) - (Math.abs(b - r) <= a && !!V);
      if (!A[f])
        for (var le = 0; le <= f; le++)
          A[le] || (A[le] = {});
      (A[f].vx != ae || A[f].vy != Z || A[f].el !== v) && (A[f].el = v, A[f].vx = ae, A[f].vy = Z, clearInterval(A[f].pid), (ae != 0 || Z != 0) && (u = !0, A[f].pid = setInterval((function() {
        o && this.layer === 0 && p.active._onTouchMove(Ge);
        var ve = A[this.layer].vy ? A[this.layer].vy * l : 0, ne = A[this.layer].vx ? A[this.layer].vx * l : 0;
        typeof d == "function" && d.call(p.dragged.parentNode[z], ne, ve, t, Ge, A[this.layer].el) !== "continue" || Xt(A[this.layer].el, ne, ve);
      }).bind({
        layer: f
      }), 24))), f++;
    } while (e.bubbleScroll && E !== s && (E = re(E, !1)));
    st = u;
  }
}, 30), Gt = function(e) {
  var n = e.originalEvent, o = e.putSortable, i = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var u = o || r;
    l();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: o
    }));
  }
};
function dt() {
}
dt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var i = me(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(n, i) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Gt
};
ee(dt, {
  pluginName: "revertOnSpill"
});
function ht() {
}
ht.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, i = o || this.sortable;
    i.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), i.animateAll();
  },
  drop: Gt
};
ee(ht, {
  pluginName: "removeOnSpill"
});
p.mount(new Fn());
p.mount(ht, dt);
const jt = "[vue-draggable-plus]: ";
function Xn(t) {
  console.warn(jt + t);
}
function Yn(t) {
  console.error(jt + t);
}
function Dt(t, e, n) {
  return n >= 0 && n < t.length && t.splice(n, 0, t.splice(e, 1)[0]), t;
}
function Tt(t, e) {
  return Array.isArray(t) && t.splice(e, 1), t;
}
function Ot(t, e, n) {
  return Array.isArray(t) && t.splice(e, 0, n), t;
}
function Bn(t) {
  return typeof t > "u";
}
function kn(t) {
  return typeof t == "string";
}
function Ct(t, e, n) {
  const o = t.children[n];
  t.insertBefore(e, o);
}
function ot(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ln(t, e = document) {
  var o;
  let n = null;
  return typeof (e == null ? void 0 : e.querySelector) == "function" ? n = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, t) : n = document.querySelector(t), n || Xn(`Element not found: ${t}`), n;
}
function Hn(t, e, n = null) {
  return function(...o) {
    return t.apply(n, o), e.apply(n, o);
  };
}
function Wn(t, e) {
  const n = { ...t };
  return Object.keys(e).forEach((o) => {
    n[o] ? n[o] = Hn(t[o], e[o]) : n[o] = e[o];
  }), n;
}
function zn(t) {
  return t instanceof HTMLElement;
}
function Gn(t, e) {
  Object.keys(t).forEach((n) => {
    e(n, t[n]);
  });
}
function jn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function $n(t) {
  ct() && Jt(t);
}
function Un(t) {
  ct() ? Zt(t) : Qt(t);
}
const It = Symbol("cloneElement");
function Vn(...t) {
  var F;
  const e = (F = ct()) == null ? void 0 : F.proxy, n = t[0];
  let [, o, i] = t;
  Array.isArray(L(o)) || (i = o, o = null);
  let r = null;
  const {
    immediate: a = !0,
    clone: l = jn,
    customUpdate: s
  } = L(i) ?? {};
  function u(w) {
    var S;
    w.item[It] = l(L((S = L(o)) == null ? void 0 : S[w.oldIndex]));
  }
  function d(w) {
    const S = w.item[It];
    if (!Bn(S)) {
      if (ot(w.item), $e(o)) {
        const X = [...L(o)];
        o.value = Ot(X, w.newDraggableIndex, S);
        return;
      }
      Ot(L(o), w.newDraggableIndex, S);
    }
  }
  function f(w) {
    const { from: S, item: X, oldIndex: j, oldDraggableIndex: P, pullMode: J, clone: V } = w;
    if (Ct(S, X, j), J === "clone") {
      ot(V);
      return;
    }
    if ($e(o)) {
      const ae = [...L(o)];
      o.value = Tt(ae, P);
      return;
    }
    Tt(L(o), P);
  }
  function E(w) {
    if (s) {
      s(w);
      return;
    }
    const { from: S, item: X, oldIndex: j, newIndex: P } = w;
    if (ot(X), Ct(S, X, j), $e(o)) {
      const J = [...L(o)];
      o.value = Dt(J, j, P);
      return;
    }
    Dt(L(o), j, P);
  }
  const v = {
    onUpdate: E,
    onStart: u,
    onAdd: d,
    onRemove: f
  };
  function g(w) {
    const S = L(n);
    return w || (w = kn(S) ? Ln(S, e == null ? void 0 : e.$el) : S), w && !zn(w) && (w = w.$el), w || Yn("Root element not found"), w;
  }
  function b() {
    const { immediate: w, clone: S, ...X } = L(i) ?? {};
    return Wn(
      o === null ? {} : v,
      X
    );
  }
  const D = (w) => {
    w = g(w), r && C.destroy(), r = new p(w, b());
  };
  xt(
    () => i,
    () => {
      r && Gn(b(), (w, S) => {
        r == null || r.option(w, S);
      });
    },
    { deep: !0 }
  );
  const C = {
    option: (w, S) => r == null ? void 0 : r.option(w, S),
    destroy: () => {
      r == null || r.destroy(), r = null;
    },
    save: () => r == null ? void 0 : r.save(),
    toArray: () => r == null ? void 0 : r.toArray(),
    closest: (...w) => r == null ? void 0 : r.closest(...w)
  }, N = () => C == null ? void 0 : C.option("disabled", !0), M = () => C == null ? void 0 : C.option("disabled", !1);
  return Un(() => {
    a && D();
  }), $n(C.destroy), { start: D, pause: N, resume: M, ...C };
}
const ut = ["update", "start", "add", "remove", "choose", "unchoose", "end", "sort", "filter", "clone", "move", "change"], qn = ["modelValue", "column", "row", "gap", "itemHeight", "itemWidth", "disabled", ...ut.map((t) => `on${t.replace(/^\S/, (e) => e.toUpperCase())}`)], it = /* @__PURE__ */ en({
  name: "DList",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: qn,
  emits: ["update:modelValue", ...ut],
  setup(t, {
    slots: e,
    emit: n,
    expose: o,
    attrs: i
  }) {
    const r = ut.reduce((v, g) => {
      const b = `on${g.replace(/^\S/, (D) => D.toUpperCase())}`;
      return v[b] = (...D) => n(g, ...D), v;
    }, {}), a = Ue(() => {
      const {
        modelValue: v,
        ...g
      } = tn(t), b = Object.entries(g).reduce((D, [C, N]) => {
        const M = L(N);
        return M !== void 0 && (D[C] = C === "disabled" && M === "" ? !0 : M), D;
      }, {});
      return {
        ...r,
        ...rn({
          ...i,
          ...b
        })
      };
    });
    console.log(a);
    const {
      resizeRef: l,
      contentRect: s
    } = un(), u = Ue({
      get: () => t.modelValue,
      set: (v) => n("update:modelValue", v)
    }), d = Ue(() => {
      var D;
      const v = [a.value.itemWidth ? an(a.value.itemWidth, ((D = s.value) == null ? void 0 : D.width) || 400) : a.value.column || 4, a.value.itemWidth ? a.value.itemWidth : "1fr"], g = a.value.itemHeight || a.value.row ? (100 / a.value.row).toFixed(2) + "%" : "25%", b = a.value.gap || 0;
      return {
        "grid-template-columns": `repeat(${v[0]},${v[1]})`,
        "grid-auto-rows": g,
        gap: b
      };
    }), f = At(), E = nn(Vn(f, u, a));
    return o(E), () => xe("div", {
      ref: l,
      class: "d-list"
    }, [xe("div", {
      class: "d-list__content",
      style: d.value,
      ref: f
    }, [u.value.map((v, g) => {
      var b;
      return xe("div", {
        class: {
          move: !a.value.disabled
        }
      }, [((b = e.default) == null ? void 0 : b.call(e, {
        item: v,
        index: g
      })) || xe("div", {
        class: "list__content__item"
      }, [v])]);
    })])]);
  }
});
it.install = (t) => {
  const e = it.name;
  t.component(e, it);
};
export {
  it as DList,
  ut as listEmits,
  qn as listProps
};
