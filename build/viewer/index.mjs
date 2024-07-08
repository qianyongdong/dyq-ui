var ks = Object.defineProperty;
var $R = (t) => {
  throw TypeError(t);
};
var Ds = (t, l, U) => l in t ? ks(t, l, { enumerable: !0, configurable: !0, writable: !0, value: U }) : t[l] = U;
var r = (t, l, U) => Ds(t, typeof l != "symbol" ? l + "" : l, U), cc = (t, l, U) => l.has(t) || $R("Cannot " + U);
var Q = (t, l, U) => (cc(t, l, "read from private field"), U ? U.call(t) : l.get(t)), i = (t, l, U) => l.has(t) ? $R("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(t) : l.set(t, U), a = (t, l, U, Z) => (cc(t, l, "write to private field"), Z ? Z.call(t, U) : l.set(t, U), U), m = (t, l, U) => (cc(t, l, "access private method"), U);
var WU = (t, l, U, Z) => ({
  set _(F) {
    a(t, l, F, U);
  },
  get _() {
    return Q(t, l, Z);
  }
});
import { createVNode as Nl, Fragment as os, createTextVNode as Is, mergeProps as Es } from "vue";
import { shallowRef as Bt, ref as el, onBeforeUnmount as IR, watch as wd, readonly as Cs, defineComponent as ER, computed as BU, toRefs as et, unref as _V, onMounted as ut, watchEffect as ws, reactive as xs } from "vue-demi";
function js(t) {
  if (t && "$el" in t) {
    const l = t.$el;
    return (l == null ? void 0 : l.nodeType) === Node.TEXT_NODE ? l.nextElementSibling : l;
  }
  return t;
}
function Os() {
  const t = Bt(), l = (U) => {
    t.value = U;
  };
  return Object.defineProperty(l, "value", {
    enumerable: !0,
    get: () => t.value,
    set: (U) => t.value = U
  }), Object.defineProperty(l, "el", {
    enumerable: !0,
    get: () => js(t.value)
  }), l;
}
function pt(t, l = "content") {
  const U = Os(), Z = el(), F = new ResizeObserver((d) => {
    t == null || t(d, F), d.length && (l === "content" ? Z.value = d[0].contentRect : Z.value = d[0].target.getBoundingClientRect());
  });
  return IR(() => {
    F.disconnect();
  }), wd(
    () => U.el,
    (d, V) => {
      V && (F.unobserve(V), Z.value = void 0), d && F.observe(d);
    },
    {
      flush: "post"
    }
  ), {
    resizeRef: U,
    contentRect: Cs(Z)
  };
}
var rs = typeof global == "object" && global && global.Object === Object && global, gs = typeof self == "object" && self && self.Object === Object && self, yt = rs || gs || Function("return this")(), XW = yt.Symbol, zt = Object.prototype, Ks = zt.hasOwnProperty, Hs = zt.toString, x0 = XW ? XW.toStringTag : void 0;
function vs(t) {
  var l = Ks.call(t, x0), U = t[x0];
  try {
    t[x0] = void 0;
    var Z = !0;
  } catch {
  }
  var F = Hs.call(t);
  return Z && (l ? t[x0] = U : delete t[x0]), F;
}
var Ps = Object.prototype, As = Ps.toString;
function fs(t) {
  return As.call(t);
}
var _s = "[object Null]", qs = "[object Undefined]", lt = XW ? XW.toStringTag : void 0;
function $s(t) {
  return t == null ? t === void 0 ? qs : _s : lt && lt in Object(t) ? vs(t) : fs(t);
}
function lb(t) {
  return t != null && typeof t == "object";
}
var Ub = "[object Symbol]";
function Zb(t) {
  return typeof t == "symbol" || lb(t) && $s(t) == Ub;
}
var Fb = /\s/;
function db(t) {
  for (var l = t.length; l-- && Fb.test(t.charAt(l)); )
    ;
  return l;
}
var Qb = /^\s+/;
function Vb(t) {
  return t && t.slice(0, db(t) + 1).replace(Qb, "");
}
function hc(t) {
  var l = typeof t;
  return t != null && (l == "object" || l == "function");
}
var Ut = NaN, Wb = /^[-+]0x[0-9a-f]+$/i, cb = /^0b[01]+$/i, Rb = /^0o[0-7]+$/i, tb = parseInt;
function Zt(t) {
  if (typeof t == "number")
    return t;
  if (Zb(t))
    return Ut;
  if (hc(t)) {
    var l = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = hc(l) ? l + "" : l;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Vb(t);
  var U = cb.test(t);
  return U || Rb.test(t) ? tb(t.slice(2), U ? 2 : 8) : Wb.test(t) ? Ut : +t;
}
var Rc = function() {
  return yt.Date.now();
}, Nb = "Expected a function", sb = Math.max, bb = Math.min;
function Ft(t, l, U) {
  var Z, F, d, V, W, c, R = 0, N = !1, s = !1, b = !0;
  if (typeof t != "function")
    throw new TypeError(Nb);
  l = Zt(l) || 0, hc(U) && (N = !!U.leading, s = "maxWait" in U, d = s ? sb(Zt(U.maxWait) || 0, l) : d, b = "trailing" in U ? !!U.trailing : b);
  function n(X) {
    var e = Z, L = F;
    return Z = F = void 0, R = X, V = t.apply(L, e), V;
  }
  function h(X) {
    return R = X, W = setTimeout(J, l), N ? n(X) : V;
  }
  function M(X) {
    var e = X - c, L = X - R, I = l - e;
    return s ? bb(I, d - L) : I;
  }
  function G(X) {
    var e = X - c, L = X - R;
    return c === void 0 || e >= l || e < 0 || s && L >= d;
  }
  function J() {
    var X = Rc();
    if (G(X))
      return T(X);
    W = setTimeout(J, M(X));
  }
  function T(X) {
    return W = void 0, b && Z ? n(X) : (Z = F = void 0, V);
  }
  function S() {
    W !== void 0 && clearTimeout(W), R = 0, Z = c = F = W = void 0;
  }
  function Y() {
    return W === void 0 ? V : T(Rc());
  }
  function B() {
    var X = Rc(), e = G(X);
    if (Z = arguments, F = this, c = X, e) {
      if (W === void 0)
        return h(c);
      if (s)
        return clearTimeout(W), W = setTimeout(J, l), n(c);
    }
    return W === void 0 && (W = setTimeout(J, l)), V;
  }
  return B.cancel = S, B.flush = Y, B;
}
function nb(t) {
  return t.replace(/-(\w)/g, (l, U) => U ? U.toUpperCase() : "");
}
function Lt(t) {
  return Object.keys(t).reduce(
    (l, U) => (typeof t[U] < "u" && (l[nb(U)] = t[U]), l),
    {}
  );
}
const ab = async (t) => {
  try {
    const l = await fetch(t);
    if (!l.ok)
      throw new Error(`Failed to fetch file: ${l.statusText}`);
    const U = l.headers.get("Content-Type");
    return { arrayBuffer: await l.arrayBuffer(), mimeType: U };
  } catch (l) {
    return console.error("Error Processing URL:", l), null;
  }
}, hb = (t) => {
  const l = atob(t), U = new Uint8Array(l.length);
  for (let Z = 0; Z < l.length; Z++)
    U[Z] = l.charCodeAt(Z);
  return U.buffer;
}, mb = (t) => {
  try {
    const l = t.match(/^data:(.+);base64,(.*)$/);
    if (!l)
      return console.error("base64 was not contentType"), null;
    const U = l[1];
    return { arrayBuffer: hb(t), mimeType: U };
  } catch (l) {
    return console.error("Error Processing Base64:", l), null;
  }
}, ib = (t) => new Promise((l, U) => {
  const Z = new FileReader();
  Z.onload = () => l(Z.result), Z.onerror = (F) => U(F), Z.readAsArrayBuffer(t);
}), Mb = async (t) => {
  try {
    const l = await ib(t), U = t.type;
    return { arrayBuffer: l, mimeType: U };
  } catch (l) {
    return console.error("Error reading file as ArrayBuffer:", l), null;
  }
}, Jb = async (t) => typeof t == "string" ? t.startsWith("data:") ? mb(t) : await ab(t) : t instanceof File ? await Mb(t) : null;
var RQ, rd;
class Gb {
  constructor(l) {
    i(this, RQ, []);
    i(this, rd, {});
    a(this, RQ, l), a(this, rd, Object.fromEntries(
      Q(this, RQ).map((U) => [U, /* @__PURE__ */ new Set()])
    ));
  }
  on(l, U) {
    Q(this, rd)[l].add(U);
  }
  emit(l, ...U) {
    Q(this, rd)[l].forEach((Z) => Z(...U));
  }
}
RQ = new WeakMap(), rd = new WeakMap();
var QQ = {};
QQ.d = (t, l) => {
  for (var U in l)
    QQ.o(l, U) && !QQ.o(t, U) && Object.defineProperty(t, U, { enumerable: !0, get: l[U] });
};
QQ.o = (t, l) => Object.prototype.hasOwnProperty.call(t, l);
var j = globalThis.pdfjsLib = {};
QQ.d(j, {
  AbortException: () => (
    /* reexport */
    yd
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    BR
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    O
  ),
  AnnotationEditorType: () => (
    /* reexport */
    f
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    Yd
  ),
  AnnotationLayer: () => (
    /* reexport */
    Ja
  ),
  AnnotationMode: () => (
    /* reexport */
    fZ
  ),
  CMapCompressionType: () => (
    /* reexport */
    ic
  ),
  ColorPicker: () => (
    /* reexport */
    yW
  ),
  DOMSVGFactory: () => (
    /* reexport */
    xR
  ),
  DrawLayer: () => (
    /* reexport */
    yR
  ),
  FeatureTest: () => (
    /* reexport */
    dU
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    jZ
  ),
  ImageKind: () => (
    /* reexport */
    qV
  ),
  InvalidPDFException: () => (
    /* reexport */
    Dt
  ),
  MissingPDFException: () => (
    /* reexport */
    pd
  ),
  OPS: () => (
    /* reexport */
    yU
  ),
  Outliner: () => (
    /* reexport */
    WR
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    pN
  ),
  PDFDateString: () => (
    /* reexport */
    jt
  ),
  PDFWorker: () => (
    /* reexport */
    jd
  ),
  PasswordResponses: () => (
    /* reexport */
    Yb
  ),
  PermissionFlag: () => (
    /* reexport */
    Xb
  ),
  PixelsPerInch: () => (
    /* reexport */
    iF
  ),
  RenderingCancelledException: () => (
    /* reexport */
    jR
  ),
  TextLayer: () => (
    /* reexport */
    w0
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    lc
  ),
  Util: () => (
    /* reexport */
    o
  ),
  VerbosityLevel: () => (
    /* reexport */
    _W
  ),
  XfaLayer: () => (
    /* reexport */
    zN
  ),
  build: () => (
    /* reexport */
    la
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    pb
  ),
  fetchData: () => (
    /* reexport */
    Qc
  ),
  getDocument: () => (
    /* reexport */
    Kn
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    wb
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    xb
  ),
  getXfaPageViewport: () => (
    /* reexport */
    jb
  ),
  isDataScheme: () => (
    /* reexport */
    OR
  ),
  isPdfFile: () => (
    /* reexport */
    rR
  ),
  noContextMenu: () => (
    /* reexport */
    VU
  ),
  normalizeUnicode: () => (
    /* reexport */
    ob
  ),
  renderTextLayer: () => (
    /* reexport */
    In
  ),
  setLayerDimensions: () => (
    /* reexport */
    Xd
  ),
  shadow: () => (
    /* reexport */
    _
  ),
  updateTextLayer: () => (
    /* reexport */
    En
  ),
  version: () => (
    /* reexport */
    $n
  )
});
const vl = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), kt = [1, 0, 0, 1, 0, 0], mc = [1e-3, 0, 0, 1e-3, 0, 0], Tb = 1e7, tc = 1.35, YU = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, fZ = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Sb = "pdfjs_internal_editor_", f = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, O = {
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
}, Xb = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Ol = {
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
}, qV = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Tl = {
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
}, j0 = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, _W = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, ic = {
  NONE: 0,
  BINARY: 1
}, yU = {
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
}, Yb = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let qW = _W.WARNINGS;
function Bb(t) {
  Number.isInteger(t) && (qW = t);
}
function eb() {
  return qW;
}
function $W(t) {
  qW >= _W.INFOS && console.log(`Info: ${t}`);
}
function H(t) {
  qW >= _W.WARNINGS && console.log(`Warning: ${t}`);
}
function Ql(t) {
  throw new Error(t);
}
function ul(t, l) {
  t || Ql(l);
}
function ub(t) {
  switch (t == null ? void 0 : t.protocol) {
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
function pb(t, l = null, U = null) {
  if (!t)
    return null;
  try {
    if (U && typeof t == "string") {
      if (U.addDefaultProtocol && t.startsWith("www.")) {
        const F = t.match(/\./g);
        (F == null ? void 0 : F.length) >= 2 && (t = `http://${t}`);
      }
      if (U.tryConvertEncoding)
        try {
          t = Db(t);
        } catch {
        }
    }
    const Z = l ? new URL(t, l) : new URL(t);
    if (ub(Z))
      return Z;
  } catch {
  }
  return null;
}
function _(t, l, U, Z = !1) {
  return Object.defineProperty(t, l, {
    value: U,
    enumerable: !Z,
    configurable: !0,
    writable: !1
  }), U;
}
const GF = function() {
  function l(U, Z) {
    this.constructor === l && Ql("Cannot initialize BaseException."), this.message = U, this.name = Z;
  }
  return l.prototype = new Error(), l.constructor = l, l;
}();
class Mc extends GF {
  constructor(l, U) {
    super(l, "PasswordException"), this.code = U;
  }
}
class Jc extends GF {
  constructor(l, U) {
    super(l, "UnknownErrorException"), this.details = U;
  }
}
class Dt extends GF {
  constructor(l) {
    super(l, "InvalidPDFException");
  }
}
class pd extends GF {
  constructor(l) {
    super(l, "MissingPDFException");
  }
}
class lc extends GF {
  constructor(l, U) {
    super(l, "UnexpectedResponseException"), this.status = U;
  }
}
class yb extends GF {
  constructor(l) {
    super(l, "FormatError");
  }
}
class yd extends GF {
  constructor(l) {
    super(l, "AbortException");
  }
}
function ot(t) {
  (typeof t != "object" || (t == null ? void 0 : t.length) === void 0) && Ql("Invalid argument for bytesToString");
  const l = t.length, U = 8192;
  if (l < U)
    return String.fromCharCode.apply(null, t);
  const Z = [];
  for (let F = 0; F < l; F += U) {
    const d = Math.min(F + U, l), V = t.subarray(F, d);
    Z.push(String.fromCharCode.apply(null, V));
  }
  return Z.join("");
}
function Uc(t) {
  typeof t != "string" && Ql("Invalid argument for stringToBytes");
  const l = t.length, U = new Uint8Array(l);
  for (let Z = 0; Z < l; ++Z)
    U[Z] = t.charCodeAt(Z) & 255;
  return U;
}
function zb(t) {
  return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255);
}
function CR(t) {
  const l = /* @__PURE__ */ Object.create(null);
  for (const [U, Z] of t)
    l[U] = Z;
  return l;
}
function Lb() {
  const t = new Uint8Array(4);
  return t[0] = 1, new Uint32Array(t.buffer, 0, 1)[0] === 1;
}
function kb() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class dU {
  static get isLittleEndian() {
    return _(this, "isLittleEndian", Lb());
  }
  static get isEvalSupported() {
    return _(this, "isEvalSupported", kb());
  }
  static get isOffscreenCanvasSupported() {
    return _(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? _(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : _(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var l, U;
    return _(this, "isCSSRoundSupported", (U = (l = globalThis.CSS) == null ? void 0 : l.supports) == null ? void 0 : U.call(l, "width: round(1.5px, 1px)"));
  }
}
const Nc = Array.from(Array(256).keys(), (t) => t.toString(16).padStart(2, "0"));
var rZ, $V, Gc;
class o {
  static makeHexColor(l, U, Z) {
    return `#${Nc[l]}${Nc[U]}${Nc[Z]}`;
  }
  static scaleMinMax(l, U) {
    let Z;
    l[0] ? (l[0] < 0 && (Z = U[0], U[0] = U[2], U[2] = Z), U[0] *= l[0], U[2] *= l[0], l[3] < 0 && (Z = U[1], U[1] = U[3], U[3] = Z), U[1] *= l[3], U[3] *= l[3]) : (Z = U[0], U[0] = U[1], U[1] = Z, Z = U[2], U[2] = U[3], U[3] = Z, l[1] < 0 && (Z = U[1], U[1] = U[3], U[3] = Z), U[1] *= l[1], U[3] *= l[1], l[2] < 0 && (Z = U[0], U[0] = U[2], U[2] = Z), U[0] *= l[2], U[2] *= l[2]), U[0] += l[4], U[1] += l[5], U[2] += l[4], U[3] += l[5];
  }
  static transform(l, U) {
    return [l[0] * U[0] + l[2] * U[1], l[1] * U[0] + l[3] * U[1], l[0] * U[2] + l[2] * U[3], l[1] * U[2] + l[3] * U[3], l[0] * U[4] + l[2] * U[5] + l[4], l[1] * U[4] + l[3] * U[5] + l[5]];
  }
  static applyTransform(l, U) {
    const Z = l[0] * U[0] + l[1] * U[2] + U[4], F = l[0] * U[1] + l[1] * U[3] + U[5];
    return [Z, F];
  }
  static applyInverseTransform(l, U) {
    const Z = U[0] * U[3] - U[1] * U[2], F = (l[0] * U[3] - l[1] * U[2] + U[2] * U[5] - U[4] * U[3]) / Z, d = (-l[0] * U[1] + l[1] * U[0] + U[4] * U[1] - U[5] * U[0]) / Z;
    return [F, d];
  }
  static getAxialAlignedBoundingBox(l, U) {
    const Z = this.applyTransform(l, U), F = this.applyTransform(l.slice(2, 4), U), d = this.applyTransform([l[0], l[3]], U), V = this.applyTransform([l[2], l[1]], U);
    return [Math.min(Z[0], F[0], d[0], V[0]), Math.min(Z[1], F[1], d[1], V[1]), Math.max(Z[0], F[0], d[0], V[0]), Math.max(Z[1], F[1], d[1], V[1])];
  }
  static inverseTransform(l) {
    const U = l[0] * l[3] - l[1] * l[2];
    return [l[3] / U, -l[1] / U, -l[2] / U, l[0] / U, (l[2] * l[5] - l[4] * l[3]) / U, (l[4] * l[1] - l[5] * l[0]) / U];
  }
  static singularValueDecompose2dScale(l) {
    const U = [l[0], l[2], l[1], l[3]], Z = l[0] * U[0] + l[1] * U[2], F = l[0] * U[1] + l[1] * U[3], d = l[2] * U[0] + l[3] * U[2], V = l[2] * U[1] + l[3] * U[3], W = (Z + V) / 2, c = Math.sqrt((Z + V) ** 2 - 4 * (Z * V - d * F)) / 2, R = W + c || 1, N = W - c || 1;
    return [Math.sqrt(R), Math.sqrt(N)];
  }
  static normalizeRect(l) {
    const U = l.slice(0);
    return l[0] > l[2] && (U[0] = l[2], U[2] = l[0]), l[1] > l[3] && (U[1] = l[3], U[3] = l[1]), U;
  }
  static intersect(l, U) {
    const Z = Math.max(Math.min(l[0], l[2]), Math.min(U[0], U[2])), F = Math.min(Math.max(l[0], l[2]), Math.max(U[0], U[2]));
    if (Z > F)
      return null;
    const d = Math.max(Math.min(l[1], l[3]), Math.min(U[1], U[3])), V = Math.min(Math.max(l[1], l[3]), Math.max(U[1], U[3]));
    return d > V ? null : [Z, d, F, V];
  }
  static bezierBoundingBox(l, U, Z, F, d, V, W, c, R) {
    return R ? (R[0] = Math.min(R[0], l, W), R[1] = Math.min(R[1], U, c), R[2] = Math.max(R[2], l, W), R[3] = Math.max(R[3], U, c)) : R = [Math.min(l, W), Math.min(U, c), Math.max(l, W), Math.max(U, c)], m(this, rZ, Gc).call(this, l, Z, d, W, U, F, V, c, 3 * (-l + 3 * (Z - d) + W), 6 * (l - 2 * Z + d), 3 * (Z - l), R), m(this, rZ, Gc).call(this, l, Z, d, W, U, F, V, c, 3 * (-U + 3 * (F - V) + c), 6 * (U - 2 * F + V), 3 * (F - U), R), R;
  }
}
rZ = new WeakSet(), $V = function(l, U, Z, F, d, V, W, c, R, N) {
  if (R <= 0 || R >= 1)
    return;
  const s = 1 - R, b = R * R, n = b * R, h = s * (s * (s * l + 3 * R * U) + 3 * b * Z) + n * F, M = s * (s * (s * d + 3 * R * V) + 3 * b * W) + n * c;
  N[0] = Math.min(N[0], h), N[1] = Math.min(N[1], M), N[2] = Math.max(N[2], h), N[3] = Math.max(N[3], M);
}, Gc = function(l, U, Z, F, d, V, W, c, R, N, s, b) {
  if (Math.abs(R) < 1e-12) {
    Math.abs(N) >= 1e-12 && m(this, rZ, $V).call(this, l, U, Z, F, d, V, W, c, -s / N, b);
    return;
  }
  const n = N ** 2 - 4 * s * R;
  if (n < 0)
    return;
  const h = Math.sqrt(n), M = 2 * R;
  m(this, rZ, $V).call(this, l, U, Z, F, d, V, W, c, (-N + h) / M, b), m(this, rZ, $V).call(this, l, U, Z, F, d, V, W, c, (-N - h) / M, b);
}, i(o, rZ);
function Db(t) {
  return decodeURIComponent(escape(t));
}
let sc = null, dt = null;
function ob(t) {
  return sc || (sc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, dt = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), t.replaceAll(sc, (l, U, Z) => U ? U.normalize("NFKC") : dt.get(Z));
}
function Ib() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const t = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(t);
  else
    for (let l = 0; l < 32; l++)
      t[l] = Math.floor(Math.random() * 255);
  return ot(t);
}
const It = "pdfjs_internal_id_", tZ = {
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
class Zc {
  constructor() {
    this.constructor === Zc && Ql("Cannot initialize BaseFilterFactory.");
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
  addHighlightHCMFilter(l, U, Z, F, d) {
    return "none";
  }
  destroy(l = !1) {
  }
}
var tQ;
const PR = class PR {
  constructor({
    enableHWA: l = !1
  } = {}) {
    i(this, tQ, !1);
    this.constructor === PR && Ql("Cannot initialize BaseCanvasFactory."), a(this, tQ, l);
  }
  create(l, U) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid canvas size");
    const Z = this._createCanvas(l, U);
    return {
      canvas: Z,
      context: Z.getContext("2d", {
        willReadFrequently: !Q(this, tQ)
      })
    };
  }
  reset(l, U, Z) {
    if (!l.canvas)
      throw new Error("Canvas is not specified");
    if (U <= 0 || Z <= 0)
      throw new Error("Invalid canvas size");
    l.canvas.width = U, l.canvas.height = Z;
  }
  destroy(l) {
    if (!l.canvas)
      throw new Error("Canvas is not specified");
    l.canvas.width = 0, l.canvas.height = 0, l.canvas = null, l.context = null;
  }
  _createCanvas(l, U) {
    Ql("Abstract method `_createCanvas` called.");
  }
};
tQ = new WeakMap();
let YW = PR;
class Fc {
  constructor({
    baseUrl: l = null,
    isCompressed: U = !0
  }) {
    this.constructor === Fc && Ql("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = l, this.isCompressed = U;
  }
  async fetch({
    name: l
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!l)
      throw new Error("CMap name must be specified.");
    const U = this.baseUrl + l + (this.isCompressed ? ".bcmap" : ""), Z = this.isCompressed ? ic.BINARY : ic.NONE;
    return this._fetchData(U, Z).catch((F) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${U}`);
    });
  }
  _fetchData(l, U) {
    Ql("Abstract method `_fetchData` called.");
  }
}
class dc {
  constructor({
    baseUrl: l = null
  }) {
    this.constructor === dc && Ql("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = l;
  }
  async fetch({
    filename: l
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!l)
      throw new Error("Font filename must be specified.");
    const U = `${this.baseUrl}${l}`;
    return this._fetchData(U).catch((Z) => {
      throw new Error(`Unable to load font data at: ${U}`);
    });
  }
  _fetchData(l) {
    Ql("Abstract method `_fetchData` called.");
  }
}
class wR {
  constructor() {
    this.constructor === wR && Ql("Cannot initialize BaseSVGFactory.");
  }
  create(l, U, Z = !1) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid SVG dimensions");
    const F = this._createSVG("svg:svg");
    return F.setAttribute("version", "1.1"), Z || (F.setAttribute("width", `${l}px`), F.setAttribute("height", `${U}px`)), F.setAttribute("preserveAspectRatio", "none"), F.setAttribute("viewBox", `0 0 ${l} ${U}`), F;
  }
  createElement(l) {
    if (typeof l != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(l);
  }
  _createSVG(l) {
    Ql("Abstract method `_createSVG` called.");
  }
}
const sZ = "http://www.w3.org/2000/svg", eF = class eF {
};
r(eF, "CSS", 96), r(eF, "PDF", 72), r(eF, "PDF_TO_CSS_UNITS", eF.CSS / eF.PDF);
let iF = eF;
var pF, KU, mZ, UU, LW, yF, D, rl, Ld, kd, lW, Et, Tc, Dd, g0, K0, Sc, H0;
class Eb extends Zc {
  constructor({
    docId: U,
    ownerDocument: Z = globalThis.document
  } = {}) {
    super();
    i(this, D);
    i(this, pF);
    i(this, KU);
    i(this, mZ);
    i(this, UU);
    i(this, LW);
    i(this, yF, 0);
    a(this, mZ, U), a(this, UU, Z);
  }
  addFilter(U) {
    if (!U)
      return "none";
    let Z = Q(this, D, rl).get(U);
    if (Z)
      return Z;
    const [F, d, V] = m(this, D, lW).call(this, U), W = U.length === 1 ? F : `${F}${d}${V}`;
    if (Z = Q(this, D, rl).get(W), Z)
      return Q(this, D, rl).set(U, Z), Z;
    const c = `g_${Q(this, mZ)}_transfer_map_${WU(this, yF)._++}`, R = `url(#${c})`;
    Q(this, D, rl).set(U, R), Q(this, D, rl).set(W, R);
    const N = m(this, D, Dd).call(this, c);
    return m(this, D, K0).call(this, F, d, V, N), R;
  }
  addHCMFilter(U, Z) {
    var h;
    const F = `${U}-${Z}`, d = "base";
    let V = Q(this, D, Ld).get(d);
    if ((V == null ? void 0 : V.key) === F || (V ? ((h = V.filter) == null || h.remove(), V.key = F, V.url = "none", V.filter = null) : (V = {
      key: F,
      url: "none",
      filter: null
    }, Q(this, D, Ld).set(d, V)), !U || !Z))
      return V.url;
    const W = m(this, D, H0).call(this, U);
    U = o.makeHexColor(...W);
    const c = m(this, D, H0).call(this, Z);
    if (Z = o.makeHexColor(...c), Q(this, D, kd).style.color = "", U === "#000000" && Z === "#ffffff" || U === Z)
      return V.url;
    const R = new Array(256);
    for (let M = 0; M <= 255; M++) {
      const G = M / 255;
      R[M] = G <= 0.03928 ? G / 12.92 : ((G + 0.055) / 1.055) ** 2.4;
    }
    const N = R.join(","), s = `g_${Q(this, mZ)}_hcm_filter`, b = V.filter = m(this, D, Dd).call(this, s);
    m(this, D, K0).call(this, N, N, N, b), m(this, D, Tc).call(this, b);
    const n = (M, G) => {
      const J = W[M] / 255, T = c[M] / 255, S = new Array(G + 1);
      for (let Y = 0; Y <= G; Y++)
        S[Y] = J + Y / G * (T - J);
      return S.join(",");
    };
    return m(this, D, K0).call(this, n(0, 5), n(1, 5), n(2, 5), b), V.url = `url(#${s})`, V.url;
  }
  addAlphaFilter(U) {
    let Z = Q(this, D, rl).get(U);
    if (Z)
      return Z;
    const [F] = m(this, D, lW).call(this, [U]), d = `alpha_${F}`;
    if (Z = Q(this, D, rl).get(d), Z)
      return Q(this, D, rl).set(U, Z), Z;
    const V = `g_${Q(this, mZ)}_alpha_map_${WU(this, yF)._++}`, W = `url(#${V})`;
    Q(this, D, rl).set(U, W), Q(this, D, rl).set(d, W);
    const c = m(this, D, Dd).call(this, V);
    return m(this, D, Sc).call(this, F, c), W;
  }
  addLuminosityFilter(U) {
    let Z = Q(this, D, rl).get(U || "luminosity");
    if (Z)
      return Z;
    let F, d;
    if (U ? ([F] = m(this, D, lW).call(this, [U]), d = `luminosity_${F}`) : d = "luminosity", Z = Q(this, D, rl).get(d), Z)
      return Q(this, D, rl).set(U, Z), Z;
    const V = `g_${Q(this, mZ)}_luminosity_map_${WU(this, yF)._++}`, W = `url(#${V})`;
    Q(this, D, rl).set(U, W), Q(this, D, rl).set(d, W);
    const c = m(this, D, Dd).call(this, V);
    return m(this, D, Et).call(this, c), U && m(this, D, Sc).call(this, F, c), W;
  }
  addHighlightHCMFilter(U, Z, F, d, V) {
    var T;
    const W = `${Z}-${F}-${d}-${V}`;
    let c = Q(this, D, Ld).get(U);
    if ((c == null ? void 0 : c.key) === W || (c ? ((T = c.filter) == null || T.remove(), c.key = W, c.url = "none", c.filter = null) : (c = {
      key: W,
      url: "none",
      filter: null
    }, Q(this, D, Ld).set(U, c)), !Z || !F))
      return c.url;
    const [R, N] = [Z, F].map(m(this, D, H0).bind(this));
    let s = Math.round(0.2126 * R[0] + 0.7152 * R[1] + 0.0722 * R[2]), b = Math.round(0.2126 * N[0] + 0.7152 * N[1] + 0.0722 * N[2]), [n, h] = [d, V].map(m(this, D, H0).bind(this));
    b < s && ([s, b, n, h] = [b, s, h, n]), Q(this, D, kd).style.color = "";
    const M = (S, Y, B) => {
      const X = new Array(256), e = (b - s) / B, L = S / 255, I = (Y - S) / (255 * B);
      let g = 0;
      for (let w = 0; w <= B; w++) {
        const Wl = Math.round(s + w * e), z = L + w * I;
        for (let C = g; C <= Wl; C++)
          X[C] = z;
        g = Wl + 1;
      }
      for (let w = g; w < 256; w++)
        X[w] = X[g - 1];
      return X.join(",");
    }, G = `g_${Q(this, mZ)}_hcm_${U}_filter`, J = c.filter = m(this, D, Dd).call(this, G);
    return m(this, D, Tc).call(this, J), m(this, D, K0).call(this, M(n[0], h[0], 5), M(n[1], h[1], 5), M(n[2], h[2], 5), J), c.url = `url(#${G})`, c.url;
  }
  destroy(U = !1) {
    U && Q(this, D, Ld).size !== 0 || (Q(this, KU) && (Q(this, KU).parentNode.parentNode.remove(), a(this, KU, null)), Q(this, pF) && (Q(this, pF).clear(), a(this, pF, null)), a(this, yF, 0));
  }
}
pF = new WeakMap(), KU = new WeakMap(), mZ = new WeakMap(), UU = new WeakMap(), LW = new WeakMap(), yF = new WeakMap(), D = new WeakSet(), rl = function() {
  return Q(this, pF) || a(this, pF, /* @__PURE__ */ new Map());
}, Ld = function() {
  return Q(this, LW) || a(this, LW, /* @__PURE__ */ new Map());
}, kd = function() {
  if (!Q(this, KU)) {
    const U = Q(this, UU).createElement("div"), {
      style: Z
    } = U;
    Z.visibility = "hidden", Z.contain = "strict", Z.width = Z.height = 0, Z.position = "absolute", Z.top = Z.left = 0, Z.zIndex = -1;
    const F = Q(this, UU).createElementNS(sZ, "svg");
    F.setAttribute("width", 0), F.setAttribute("height", 0), a(this, KU, Q(this, UU).createElementNS(sZ, "defs")), U.append(F), F.append(Q(this, KU)), Q(this, UU).body.append(U);
  }
  return Q(this, KU);
}, lW = function(U) {
  if (U.length === 1) {
    const R = U[0], N = new Array(256);
    for (let b = 0; b < 256; b++)
      N[b] = R[b] / 255;
    const s = N.join(",");
    return [s, s, s];
  }
  const [Z, F, d] = U, V = new Array(256), W = new Array(256), c = new Array(256);
  for (let R = 0; R < 256; R++)
    V[R] = Z[R] / 255, W[R] = F[R] / 255, c[R] = d[R] / 255;
  return [V.join(","), W.join(","), c.join(",")];
}, Et = function(U) {
  const Z = Q(this, UU).createElementNS(sZ, "feColorMatrix");
  Z.setAttribute("type", "matrix"), Z.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), U.append(Z);
}, Tc = function(U) {
  const Z = Q(this, UU).createElementNS(sZ, "feColorMatrix");
  Z.setAttribute("type", "matrix"), Z.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), U.append(Z);
}, Dd = function(U) {
  const Z = Q(this, UU).createElementNS(sZ, "filter");
  return Z.setAttribute("color-interpolation-filters", "sRGB"), Z.setAttribute("id", U), Q(this, D, kd).append(Z), Z;
}, g0 = function(U, Z, F) {
  const d = Q(this, UU).createElementNS(sZ, Z);
  d.setAttribute("type", "discrete"), d.setAttribute("tableValues", F), U.append(d);
}, K0 = function(U, Z, F, d) {
  const V = Q(this, UU).createElementNS(sZ, "feComponentTransfer");
  d.append(V), m(this, D, g0).call(this, V, "feFuncR", U), m(this, D, g0).call(this, V, "feFuncG", Z), m(this, D, g0).call(this, V, "feFuncB", F);
}, Sc = function(U, Z) {
  const F = Q(this, UU).createElementNS(sZ, "feComponentTransfer");
  Z.append(F), m(this, D, g0).call(this, F, "feFuncA", U);
}, H0 = function(U) {
  return Q(this, D, kd).style.color = U, gR(getComputedStyle(Q(this, D, kd)).getPropertyValue("color"));
};
class Cb extends YW {
  constructor({
    ownerDocument: l = globalThis.document,
    enableHWA: U = !1
  } = {}) {
    super({
      enableHWA: U
    }), this._document = l;
  }
  _createCanvas(l, U) {
    const Z = this._document.createElement("canvas");
    return Z.width = l, Z.height = U, Z;
  }
}
async function Qc(t, l = "text") {
  if (v0(t, document.baseURI)) {
    const U = await fetch(t);
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
  return new Promise((U, Z) => {
    const F = new XMLHttpRequest();
    F.open("GET", t, !0), F.responseType = l, F.onreadystatechange = () => {
      if (F.readyState === XMLHttpRequest.DONE) {
        if (F.status === 200 || F.status === 0) {
          switch (l) {
            case "arraybuffer":
            case "blob":
            case "json":
              U(F.response);
              return;
          }
          U(F.responseText);
          return;
        }
        Z(new Error(F.statusText));
      }
    }, F.send(null);
  });
}
class Ct extends Fc {
  _fetchData(l, U) {
    return Qc(l, this.isCompressed ? "arraybuffer" : "text").then((Z) => ({
      cMapData: Z instanceof ArrayBuffer ? new Uint8Array(Z) : Uc(Z),
      compressionType: U
    }));
  }
}
class wt extends dc {
  _fetchData(l) {
    return Qc(l, "arraybuffer").then((U) => new Uint8Array(U));
  }
}
class xR extends wR {
  _createSVG(l) {
    return document.createElementNS(sZ, l);
  }
}
class OV {
  constructor({
    viewBox: l,
    scale: U,
    rotation: Z,
    offsetX: F = 0,
    offsetY: d = 0,
    dontFlip: V = !1
  }) {
    this.viewBox = l, this.scale = U, this.rotation = Z, this.offsetX = F, this.offsetY = d;
    const W = (l[2] + l[0]) / 2, c = (l[3] + l[1]) / 2;
    let R, N, s, b;
    switch (Z %= 360, Z < 0 && (Z += 360), Z) {
      case 180:
        R = -1, N = 0, s = 0, b = 1;
        break;
      case 90:
        R = 0, N = 1, s = 1, b = 0;
        break;
      case 270:
        R = 0, N = -1, s = -1, b = 0;
        break;
      case 0:
        R = 1, N = 0, s = 0, b = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    V && (s = -s, b = -b);
    let n, h, M, G;
    R === 0 ? (n = Math.abs(c - l[1]) * U + F, h = Math.abs(W - l[0]) * U + d, M = (l[3] - l[1]) * U, G = (l[2] - l[0]) * U) : (n = Math.abs(W - l[0]) * U + F, h = Math.abs(c - l[1]) * U + d, M = (l[2] - l[0]) * U, G = (l[3] - l[1]) * U), this.transform = [R * U, N * U, s * U, b * U, n - R * U * W - s * U * c, h - N * U * W - b * U * c], this.width = M, this.height = G;
  }
  get rawDims() {
    const {
      viewBox: l
    } = this;
    return _(this, "rawDims", {
      pageWidth: l[2] - l[0],
      pageHeight: l[3] - l[1],
      pageX: l[0],
      pageY: l[1]
    });
  }
  clone({
    scale: l = this.scale,
    rotation: U = this.rotation,
    offsetX: Z = this.offsetX,
    offsetY: F = this.offsetY,
    dontFlip: d = !1
  } = {}) {
    return new OV({
      viewBox: this.viewBox.slice(),
      scale: l,
      rotation: U,
      offsetX: Z,
      offsetY: F,
      dontFlip: d
    });
  }
  convertToViewportPoint(l, U) {
    return o.applyTransform([l, U], this.transform);
  }
  convertToViewportRectangle(l) {
    const U = o.applyTransform([l[0], l[1]], this.transform), Z = o.applyTransform([l[2], l[3]], this.transform);
    return [U[0], U[1], Z[0], Z[1]];
  }
  convertToPdfPoint(l, U) {
    return o.applyInverseTransform([l, U], this.transform);
  }
}
class jR extends GF {
  constructor(l, U = 0) {
    super(l, "RenderingCancelledException"), this.extraDelay = U;
  }
}
function OR(t) {
  const l = t.length;
  let U = 0;
  for (; U < l && t[U].trim() === ""; )
    U++;
  return t.substring(U, U + 5).toLowerCase() === "data:";
}
function rR(t) {
  return typeof t == "string" && /\.pdf$/i.test(t);
}
function wb(t) {
  return [t] = t.split(/[#?]/, 1), t.substring(t.lastIndexOf("/") + 1);
}
function xb(t, l = "document.pdf") {
  if (typeof t != "string")
    return l;
  if (OR(t))
    return H('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), l;
  const U = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, Z = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, F = U.exec(t);
  let d = Z.exec(F[1]) || Z.exec(F[2]) || Z.exec(F[3]);
  if (d && (d = d[0], d.includes("%")))
    try {
      d = Z.exec(decodeURIComponent(d))[0];
    } catch {
    }
  return d || l;
}
class Qt {
  constructor() {
    r(this, "started", /* @__PURE__ */ Object.create(null));
    r(this, "times", []);
  }
  time(l) {
    l in this.started && H(`Timer is already running for ${l}`), this.started[l] = Date.now();
  }
  timeEnd(l) {
    l in this.started || H(`Timer has not been started for ${l}`), this.times.push({
      name: l,
      start: this.started[l],
      end: Date.now()
    }), delete this.started[l];
  }
  toString() {
    const l = [];
    let U = 0;
    for (const {
      name: Z
    } of this.times)
      U = Math.max(Z.length, U);
    for (const {
      name: Z,
      start: F,
      end: d
    } of this.times)
      l.push(`${Z.padEnd(U)} ${d - F}ms
`);
    return l.join("");
  }
}
function v0(t, l) {
  try {
    const {
      protocol: U
    } = l ? new URL(t, l) : new URL(t);
    return U === "http:" || U === "https:";
  } catch {
    return !1;
  }
}
function VU(t) {
  t.preventDefault();
}
function xt(t) {
  console.log("Deprecated API usage: " + t);
}
let Vt;
class jt {
  static toDateObject(l) {
    if (!l || typeof l != "string")
      return null;
    Vt || (Vt = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const U = Vt.exec(l);
    if (!U)
      return null;
    const Z = parseInt(U[1], 10);
    let F = parseInt(U[2], 10);
    F = F >= 1 && F <= 12 ? F - 1 : 0;
    let d = parseInt(U[3], 10);
    d = d >= 1 && d <= 31 ? d : 1;
    let V = parseInt(U[4], 10);
    V = V >= 0 && V <= 23 ? V : 0;
    let W = parseInt(U[5], 10);
    W = W >= 0 && W <= 59 ? W : 0;
    let c = parseInt(U[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const R = U[7] || "Z";
    let N = parseInt(U[8], 10);
    N = N >= 0 && N <= 23 ? N : 0;
    let s = parseInt(U[9], 10) || 0;
    return s = s >= 0 && s <= 59 ? s : 0, R === "-" ? (V += N, W += s) : R === "+" && (V -= N, W -= s), new Date(Date.UTC(Z, F, d, V, W, c));
  }
}
function jb(t, {
  scale: l = 1,
  rotation: U = 0
}) {
  const {
    width: Z,
    height: F
  } = t.attributes.style, d = [0, 0, parseInt(Z), parseInt(F)];
  return new OV({
    viewBox: d,
    scale: l,
    rotation: U
  });
}
function gR(t) {
  if (t.startsWith("#")) {
    const l = parseInt(t.slice(1), 16);
    return [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255];
  }
  return t.startsWith("rgb(") ? t.slice(4, -1).split(",").map((l) => parseInt(l)) : t.startsWith("rgba(") ? t.slice(5, -1).split(",").map((l) => parseInt(l)).slice(0, 3) : (H(`Not a valid color format: "${t}"`), [0, 0, 0]);
}
function Ob(t) {
  const l = document.createElement("span");
  l.style.visibility = "hidden", document.body.append(l);
  for (const U of t.keys()) {
    l.style.color = U;
    const Z = window.getComputedStyle(l).color;
    t.set(U, gR(Z));
  }
  l.remove();
}
function nl(t) {
  const {
    a: l,
    b: U,
    c: Z,
    d: F,
    e: d,
    f: V
  } = t.getTransform();
  return [l, U, Z, F, d, V];
}
function NZ(t) {
  const {
    a: l,
    b: U,
    c: Z,
    d: F,
    e: d,
    f: V
  } = t.getTransform().invertSelf();
  return [l, U, Z, F, d, V];
}
function Xd(t, l, U = !1, Z = !0) {
  if (l instanceof OV) {
    const {
      pageWidth: F,
      pageHeight: d
    } = l.rawDims, {
      style: V
    } = t, W = dU.isCSSRoundSupported, c = `var(--scale-factor) * ${F}px`, R = `var(--scale-factor) * ${d}px`, N = W ? `round(${c}, 1px)` : `calc(${c})`, s = W ? `round(${R}, 1px)` : `calc(${R})`;
    !U || l.rotation % 180 === 0 ? (V.width = N, V.height = s) : (V.width = s, V.height = N);
  }
  Z && t.setAttribute("data-main-rotation", l.rotation);
}
var zF, LF, tU, kF, kW, Ot, ql, rt, gt, UW, Kt, Yc;
const DW = class DW {
  constructor(l) {
    i(this, ql);
    i(this, zF, null);
    i(this, LF, null);
    i(this, tU);
    i(this, kF, null);
    a(this, tU, l);
  }
  render() {
    const l = a(this, zF, document.createElement("div"));
    l.className = "editToolbar", l.setAttribute("role", "toolbar");
    const U = Q(this, tU)._uiManager._signal;
    l.addEventListener("contextmenu", VU, {
      signal: U
    }), l.addEventListener("pointerdown", m(DW, kW, Ot), {
      signal: U
    });
    const Z = a(this, kF, document.createElement("div"));
    Z.className = "buttons", l.append(Z);
    const F = Q(this, tU).toolbarPosition;
    if (F) {
      const {
        style: d
      } = l, V = Q(this, tU)._uiManager.direction === "ltr" ? 1 - F[0] : F[0];
      d.insetInlineEnd = `${100 * V}%`, d.top = `calc(${100 * F[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return m(this, ql, Kt).call(this), l;
  }
  hide() {
    var l;
    Q(this, zF).classList.add("hidden"), (l = Q(this, LF)) == null || l.hideDropdown();
  }
  show() {
    Q(this, zF).classList.remove("hidden");
  }
  addAltTextButton(l) {
    m(this, ql, UW).call(this, l), Q(this, kF).prepend(l, Q(this, ql, Yc));
  }
  addColorPicker(l) {
    a(this, LF, l);
    const U = l.renderButton();
    m(this, ql, UW).call(this, U), Q(this, kF).prepend(U, Q(this, ql, Yc));
  }
  remove() {
    var l;
    Q(this, zF).remove(), (l = Q(this, LF)) == null || l.destroy(), a(this, LF, null);
  }
};
zF = new WeakMap(), LF = new WeakMap(), tU = new WeakMap(), kF = new WeakMap(), kW = new WeakSet(), Ot = function(l) {
  l.stopPropagation();
}, ql = new WeakSet(), rt = function(l) {
  Q(this, tU)._focusEventsAllowed = !1, l.preventDefault(), l.stopPropagation();
}, gt = function(l) {
  Q(this, tU)._focusEventsAllowed = !0, l.preventDefault(), l.stopPropagation();
}, UW = function(l) {
  const U = Q(this, tU)._uiManager._signal;
  l.addEventListener("focusin", m(this, ql, rt).bind(this), {
    capture: !0,
    signal: U
  }), l.addEventListener("focusout", m(this, ql, gt).bind(this), {
    capture: !0,
    signal: U
  }), l.addEventListener("contextmenu", VU, {
    signal: U
  });
}, Kt = function() {
  const l = document.createElement("button");
  l.className = "delete", l.tabIndex = 0, l.setAttribute("data-l10n-id", `pdfjs-editor-remove-${Q(this, tU).editorType}-button`), m(this, ql, UW).call(this, l), l.addEventListener("click", (U) => {
    Q(this, tU)._uiManager.delete();
  }, {
    signal: Q(this, tU)._uiManager._signal
  }), Q(this, kF).append(l);
}, Yc = function() {
  const l = document.createElement("div");
  return l.className = "divider", l;
}, i(DW, kW);
let Xc = DW;
var NQ, DF, oF, MF, Ht, vt, Pt;
class rb {
  constructor(l) {
    i(this, MF);
    i(this, NQ, null);
    i(this, DF, null);
    i(this, oF);
    a(this, oF, l);
  }
  show(l, U, Z) {
    const [F, d] = m(this, MF, vt).call(this, U, Z), {
      style: V
    } = Q(this, DF) || a(this, DF, m(this, MF, Ht).call(this));
    l.append(Q(this, DF)), V.insetInlineEnd = `${100 * F}%`, V.top = `calc(${100 * d}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    Q(this, DF).remove();
  }
}
NQ = new WeakMap(), DF = new WeakMap(), oF = new WeakMap(), MF = new WeakSet(), Ht = function() {
  const l = a(this, DF, document.createElement("div"));
  l.className = "editToolbar", l.setAttribute("role", "toolbar"), l.addEventListener("contextmenu", VU, {
    signal: Q(this, oF)._signal
  });
  const U = a(this, NQ, document.createElement("div"));
  return U.className = "buttons", l.append(U), m(this, MF, Pt).call(this), l;
}, vt = function(l, U) {
  let Z = 0, F = 0;
  for (const d of l) {
    const V = d.y + d.height;
    if (V < Z)
      continue;
    const W = d.x + (U ? d.width : 0);
    if (V > Z) {
      F = W, Z = V;
      continue;
    }
    U ? W > F && (F = W) : W < F && (F = W);
  }
  return [U ? 1 - F : F, Z];
}, Pt = function() {
  const l = document.createElement("button");
  l.className = "highlightButton", l.tabIndex = 0, l.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const U = document.createElement("span");
  l.append(U), U.className = "visuallyHidden", U.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const Z = Q(this, oF)._signal;
  l.addEventListener("contextmenu", VU, {
    signal: Z
  }), l.addEventListener("click", () => {
    Q(this, oF).highlightSelection("floating_button");
  }, {
    signal: Z
  }), Q(this, NQ).append(l);
};
function BW(t, l, U) {
  for (const Z of U)
    l.addEventListener(Z, t[Z].bind(t));
}
function gb(t) {
  return Math.round(Math.min(255, Math.max(1, 255 * t))).toString(16).padStart(2, "0");
}
var oW;
class Kb {
  constructor() {
    i(this, oW, 0);
  }
  get id() {
    return `${Sb}${WU(this, oW)._++}`;
  }
}
oW = new WeakMap();
var sQ, IW, GU, bQ, ec;
const AR = class AR {
  constructor() {
    i(this, bQ);
    i(this, sQ, Ib());
    i(this, IW, 0);
    i(this, GU, null);
  }
  static get _isSVGFittingCanvas() {
    const l = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', Z = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), F = new Image();
    F.src = l;
    const d = F.decode().then(() => (Z.drawImage(F, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(Z.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return _(this, "_isSVGFittingCanvas", d);
  }
  async getFromFile(l) {
    const {
      lastModified: U,
      name: Z,
      size: F,
      type: d
    } = l;
    return m(this, bQ, ec).call(this, `${U}_${Z}_${F}_${d}`, l);
  }
  async getFromUrl(l) {
    return m(this, bQ, ec).call(this, l, l);
  }
  async getFromId(l) {
    Q(this, GU) || a(this, GU, /* @__PURE__ */ new Map());
    const U = Q(this, GU).get(l);
    return U ? U.bitmap ? (U.refCounter += 1, U) : U.file ? this.getFromFile(U.file) : this.getFromUrl(U.url) : null;
  }
  getSvgUrl(l) {
    const U = Q(this, GU).get(l);
    return U != null && U.isSvg ? U.svgUrl : null;
  }
  deleteId(l) {
    Q(this, GU) || a(this, GU, /* @__PURE__ */ new Map());
    const U = Q(this, GU).get(l);
    U && (U.refCounter -= 1, U.refCounter === 0 && (U.bitmap = null));
  }
  isValidId(l) {
    return l.startsWith(`image_${Q(this, sQ)}_`);
  }
};
sQ = new WeakMap(), IW = new WeakMap(), GU = new WeakMap(), bQ = new WeakSet(), ec = async function(l, U) {
  Q(this, GU) || a(this, GU, /* @__PURE__ */ new Map());
  let Z = Q(this, GU).get(l);
  if (Z === null)
    return null;
  if (Z != null && Z.bitmap)
    return Z.refCounter += 1, Z;
  try {
    Z || (Z = {
      bitmap: null,
      id: `image_${Q(this, sQ)}_${WU(this, IW)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let F;
    if (typeof U == "string" ? (Z.url = U, F = await Qc(U, "blob")) : F = Z.file = U, F.type === "image/svg+xml") {
      const d = AR._isSVGFittingCanvas, V = new FileReader(), W = new Image(), c = new Promise((R, N) => {
        W.onload = () => {
          Z.bitmap = W, Z.isSvg = !0, R();
        }, V.onload = async () => {
          const s = Z.svgUrl = V.result;
          W.src = await d ? `${s}#svgView(preserveAspectRatio(none))` : s;
        }, W.onerror = V.onerror = N;
      });
      V.readAsDataURL(F), await c;
    } else
      Z.bitmap = await createImageBitmap(F);
    Z.refCounter = 1;
  } catch (F) {
    console.error(F), Z = null;
  }
  return Q(this, GU).set(l, Z), Z && Q(this, GU).set(Z.id, Z), Z;
};
let Bc = AR;
var pl, _Z, nQ, yl;
class Hb {
  constructor(l = 128) {
    i(this, pl, []);
    i(this, _Z, !1);
    i(this, nQ);
    i(this, yl, -1);
    a(this, nQ, l);
  }
  add({
    cmd: l,
    undo: U,
    post: Z,
    mustExec: F,
    type: d = NaN,
    overwriteIfSameType: V = !1,
    keepUndo: W = !1
  }) {
    if (F && l(), Q(this, _Z))
      return;
    const c = {
      cmd: l,
      undo: U,
      post: Z,
      type: d
    };
    if (Q(this, yl) === -1) {
      Q(this, pl).length > 0 && (Q(this, pl).length = 0), a(this, yl, 0), Q(this, pl).push(c);
      return;
    }
    if (V && Q(this, pl)[Q(this, yl)].type === d) {
      W && (c.undo = Q(this, pl)[Q(this, yl)].undo), Q(this, pl)[Q(this, yl)] = c;
      return;
    }
    const R = Q(this, yl) + 1;
    R === Q(this, nQ) ? Q(this, pl).splice(0, 1) : (a(this, yl, R), R < Q(this, pl).length && Q(this, pl).splice(R)), Q(this, pl).push(c);
  }
  undo() {
    if (Q(this, yl) === -1)
      return;
    a(this, _Z, !0);
    const {
      undo: l,
      post: U
    } = Q(this, pl)[Q(this, yl)];
    l(), U == null || U(), a(this, _Z, !1), a(this, yl, Q(this, yl) - 1);
  }
  redo() {
    if (Q(this, yl) < Q(this, pl).length - 1) {
      a(this, yl, Q(this, yl) + 1), a(this, _Z, !0);
      const {
        cmd: l,
        post: U
      } = Q(this, pl)[Q(this, yl)];
      l(), U == null || U(), a(this, _Z, !1);
    }
  }
  hasSomethingToUndo() {
    return Q(this, yl) !== -1;
  }
  hasSomethingToRedo() {
    return Q(this, yl) < Q(this, pl).length - 1;
  }
  destroy() {
    a(this, pl, null);
  }
}
pl = new WeakMap(), _Z = new WeakMap(), nQ = new WeakMap(), yl = new WeakMap();
var EW, At;
class rV {
  constructor(l) {
    i(this, EW);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: U
    } = dU.platform;
    for (const [Z, F, d = {}] of l)
      for (const V of Z) {
        const W = V.startsWith("mac+");
        U && W ? (this.callbacks.set(V.slice(4), {
          callback: F,
          options: d
        }), this.allKeys.add(V.split("+").at(-1))) : !U && !W && (this.callbacks.set(V, {
          callback: F,
          options: d
        }), this.allKeys.add(V.split("+").at(-1)));
      }
  }
  exec(l, U) {
    if (!this.allKeys.has(U.key))
      return;
    const Z = this.callbacks.get(m(this, EW, At).call(this, U));
    if (!Z)
      return;
    const {
      callback: F,
      options: {
        bubbles: d = !1,
        args: V = [],
        checker: W = null
      }
    } = Z;
    W && !W(l, U) || (F.bind(l, ...V, U)(), d || (U.stopPropagation(), U.preventDefault()));
  }
}
EW = new WeakSet(), At = function(l) {
  l.altKey && this.buffer.push("alt"), l.ctrlKey && this.buffer.push("ctrl"), l.metaKey && this.buffer.push("meta"), l.shiftKey && this.buffer.push("shift"), this.buffer.push(l.key);
  const U = this.buffer.join("+");
  return this.buffer.length = 0, U;
};
const CW = class CW {
  get _colors() {
    const l = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return Ob(l), _(this, "_colors", l);
  }
  convert(l) {
    const U = gR(l);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return U;
    for (const [Z, F] of this._colors)
      if (F.every((d, V) => d === U[V]))
        return CW._colorsMapping.get(Z);
    return U;
  }
  getHexCode(l) {
    const U = this._colors.get(l);
    return U ? o.makeHexColor(...U) : l;
  }
};
r(CW, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let uc = CW;
var gd, NU, Sl, Ll, Kd, iZ, Hd, zU, vd, IF, HU, LU, EF, aQ, hQ, vU, Pd, qZ, PU, wW, $Z, mQ, CF, iQ, Ad, kl, Zl, MZ, wF, MQ, JQ, GQ, TQ, SQ, XQ, YQ, BQ, eQ, uQ, pQ, yQ, zQ, lF, AU, JZ, LQ, p, ZW, ft, _t, FW, qt, $t, lN, pc, UN, yc, zc, ZN, Pl, vZ, FN, dN, Lc, QN, P0, kc;
const Cd = class Cd {
  constructor(l, U, Z, F, d, V, W, c, R) {
    i(this, p);
    i(this, gd, new AbortController());
    i(this, NU, null);
    i(this, Sl, /* @__PURE__ */ new Map());
    i(this, Ll, /* @__PURE__ */ new Map());
    i(this, Kd, null);
    i(this, iZ, null);
    i(this, Hd, null);
    i(this, zU, new Hb());
    i(this, vd, 0);
    i(this, IF, /* @__PURE__ */ new Set());
    i(this, HU, null);
    i(this, LU, null);
    i(this, EF, /* @__PURE__ */ new Set());
    i(this, aQ, !1);
    i(this, hQ, null);
    i(this, vU, null);
    i(this, Pd, null);
    i(this, qZ, !1);
    i(this, PU, null);
    i(this, wW, new Kb());
    i(this, $Z, !1);
    i(this, mQ, !1);
    i(this, CF, null);
    i(this, iQ, null);
    i(this, Ad, null);
    i(this, kl, f.NONE);
    i(this, Zl, /* @__PURE__ */ new Set());
    i(this, MZ, null);
    i(this, wF, null);
    i(this, MQ, null);
    i(this, JQ, this.blur.bind(this));
    i(this, GQ, this.focus.bind(this));
    i(this, TQ, this.copy.bind(this));
    i(this, SQ, this.cut.bind(this));
    i(this, XQ, this.paste.bind(this));
    i(this, YQ, this.keydown.bind(this));
    i(this, BQ, this.keyup.bind(this));
    i(this, eQ, this.onEditingAction.bind(this));
    i(this, uQ, this.onPageChanging.bind(this));
    i(this, pQ, this.onScaleChanging.bind(this));
    i(this, yQ, this.onRotationChanging.bind(this));
    i(this, zQ, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    i(this, lF, [0, 0]);
    i(this, AU, null);
    i(this, JZ, null);
    i(this, LQ, null);
    this._signal = Q(this, gd).signal, a(this, JZ, l), a(this, LQ, U), a(this, Kd, Z), this._eventBus = F, this._eventBus._on("editingaction", Q(this, eQ)), this._eventBus._on("pagechanging", Q(this, uQ)), this._eventBus._on("scalechanging", Q(this, pQ)), this._eventBus._on("rotationchanging", Q(this, yQ)), m(this, p, qt).call(this), m(this, p, ZN).call(this), m(this, p, pc).call(this), a(this, iZ, d.annotationStorage), a(this, hQ, d.filterFactory), a(this, wF, V), a(this, Pd, W || null), a(this, aQ, c), a(this, Ad, R || null), this.viewParameters = {
      realScale: iF.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const l = Cd.prototype, U = (V) => Q(V, JZ).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && V.hasSomethingToControl(), Z = (V, {
      target: W
    }) => {
      if (W instanceof HTMLInputElement) {
        const {
          type: c
        } = W;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, F = this.TRANSLATE_SMALL, d = this.TRANSLATE_BIG;
    return _(this, "_keyboardManager", new rV([[["ctrl+a", "mac+meta+a"], l.selectAll, {
      checker: Z
    }], [["ctrl+z", "mac+meta+z"], l.undo, {
      checker: Z
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], l.redo, {
      checker: Z
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], l.delete, {
      checker: Z
    }], [["Enter", "mac+Enter"], l.addNewEditorFromKeyboard, {
      checker: (V, {
        target: W
      }) => !(W instanceof HTMLButtonElement) && Q(V, JZ).contains(W) && !V.isEnterHandled
    }], [[" ", "mac+ "], l.addNewEditorFromKeyboard, {
      checker: (V, {
        target: W
      }) => !(W instanceof HTMLButtonElement) && Q(V, JZ).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], l.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], l.translateSelectedEditors, {
      args: [-F, 0],
      checker: U
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], l.translateSelectedEditors, {
      args: [-d, 0],
      checker: U
    }], [["ArrowRight", "mac+ArrowRight"], l.translateSelectedEditors, {
      args: [F, 0],
      checker: U
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], l.translateSelectedEditors, {
      args: [d, 0],
      checker: U
    }], [["ArrowUp", "mac+ArrowUp"], l.translateSelectedEditors, {
      args: [0, -F],
      checker: U
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], l.translateSelectedEditors, {
      args: [0, -d],
      checker: U
    }], [["ArrowDown", "mac+ArrowDown"], l.translateSelectedEditors, {
      args: [0, F],
      checker: U
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], l.translateSelectedEditors, {
      args: [0, d],
      checker: U
    }]]));
  }
  destroy() {
    var l, U, Z;
    (l = Q(this, gd)) == null || l.abort(), a(this, gd, null), this._signal = null, this._eventBus._off("editingaction", Q(this, eQ)), this._eventBus._off("pagechanging", Q(this, uQ)), this._eventBus._off("scalechanging", Q(this, pQ)), this._eventBus._off("rotationchanging", Q(this, yQ));
    for (const F of Q(this, Ll).values())
      F.destroy();
    Q(this, Ll).clear(), Q(this, Sl).clear(), Q(this, EF).clear(), a(this, NU, null), Q(this, Zl).clear(), Q(this, zU).destroy(), (U = Q(this, Kd)) == null || U.destroy(), (Z = Q(this, PU)) == null || Z.hide(), a(this, PU, null), Q(this, vU) && (clearTimeout(Q(this, vU)), a(this, vU, null)), Q(this, AU) && (clearTimeout(Q(this, AU)), a(this, AU, null));
  }
  async mlGuess(l) {
    var U;
    return ((U = Q(this, Ad)) == null ? void 0 : U.guess(l)) || null;
  }
  get hasMLManager() {
    return !!Q(this, Ad);
  }
  get hcmFilter() {
    return _(this, "hcmFilter", Q(this, wF) ? Q(this, hQ).addHCMFilter(Q(this, wF).foreground, Q(this, wF).background) : "none");
  }
  get direction() {
    return _(this, "direction", getComputedStyle(Q(this, JZ)).direction);
  }
  get highlightColors() {
    return _(this, "highlightColors", Q(this, Pd) ? new Map(Q(this, Pd).split(",").map((l) => l.split("=").map((U) => U.trim()))) : null);
  }
  get highlightColorNames() {
    return _(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (l) => l.reverse())) : null);
  }
  setMainHighlightColorPicker(l) {
    a(this, iQ, l);
  }
  editAltText(l) {
    var U;
    (U = Q(this, Kd)) == null || U.editAltText(this, l);
  }
  onPageChanging({
    pageNumber: l
  }) {
    a(this, vd, l - 1);
  }
  focusMainContainer() {
    Q(this, JZ).focus();
  }
  findParent(l, U) {
    for (const Z of Q(this, Ll).values()) {
      const {
        x: F,
        y: d,
        width: V,
        height: W
      } = Z.div.getBoundingClientRect();
      if (l >= F && l <= F + V && U >= d && U <= d + W)
        return Z;
    }
    return null;
  }
  disableUserSelect(l = !1) {
    Q(this, LQ).classList.toggle("noUserSelect", l);
  }
  addShouldRescale(l) {
    Q(this, EF).add(l);
  }
  removeShouldRescale(l) {
    Q(this, EF).delete(l);
  }
  onScaleChanging({
    scale: l
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = l * iF.PDF_TO_CSS_UNITS;
    for (const U of Q(this, EF))
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
      anchorNode: Z,
      anchorOffset: F,
      focusNode: d,
      focusOffset: V
    } = U, W = U.toString(), R = m(this, p, ZW).call(this, U).closest(".textLayer"), N = this.getSelectionBoxes(R);
    if (N) {
      U.empty(), Q(this, kl) === f.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: f.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const s of Q(this, Ll).values())
        if (s.hasTextLayer(R)) {
          s.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: l,
            boxes: N,
            anchorNode: Z,
            anchorOffset: F,
            focusNode: d,
            focusOffset: V,
            text: W
          });
          break;
        }
    }
  }
  addToAnnotationStorage(l) {
    !l.isEmpty() && Q(this, iZ) && !Q(this, iZ).has(l.id) && Q(this, iZ).setValue(l.id, l);
  }
  blur() {
    if (this.isShiftKeyDown = !1, Q(this, qZ) && (a(this, qZ, !1), m(this, p, FW).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: l
    } = document;
    for (const U of Q(this, Zl))
      if (U.div.contains(l)) {
        a(this, CF, [U, l]), U._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!Q(this, CF))
      return;
    const [l, U] = Q(this, CF);
    a(this, CF, null), U.addEventListener("focusin", () => {
      l._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), U.focus();
  }
  addEditListeners() {
    m(this, p, pc).call(this), m(this, p, yc).call(this);
  }
  removeEditListeners() {
    m(this, p, UN).call(this), m(this, p, zc).call(this);
  }
  dragOver(l) {
    for (const {
      type: U
    } of l.dataTransfer.items)
      for (const Z of Q(this, LU))
        if (Z.isHandlingMimeForPasting(U)) {
          l.dataTransfer.dropEffect = "copy", l.preventDefault();
          return;
        }
  }
  drop(l) {
    for (const U of l.dataTransfer.items)
      for (const Z of Q(this, LU))
        if (Z.isHandlingMimeForPasting(U.type)) {
          Z.paste(U, this.currentLayer), l.preventDefault();
          return;
        }
  }
  copy(l) {
    var Z;
    if (l.preventDefault(), (Z = Q(this, NU)) == null || Z.commitOrRemove(), !this.hasSelection)
      return;
    const U = [];
    for (const F of Q(this, Zl)) {
      const d = F.serialize(!0);
      d && U.push(d);
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
    for (const d of U.items)
      for (const V of Q(this, LU))
        if (V.isHandlingMimeForPasting(d.type)) {
          V.paste(d, this.currentLayer);
          return;
        }
    let Z = U.getData("application/pdfjs");
    if (!Z)
      return;
    try {
      Z = JSON.parse(Z);
    } catch (d) {
      H(`paste: "${d.message}".`);
      return;
    }
    if (!Array.isArray(Z))
      return;
    this.unselectAll();
    const F = this.currentLayer;
    try {
      const d = [];
      for (const c of Z) {
        const R = F.deserialize(c);
        if (!R)
          return;
        d.push(R);
      }
      const V = () => {
        for (const c of d)
          m(this, p, Lc).call(this, c);
        m(this, p, kc).call(this, d);
      }, W = () => {
        for (const c of d)
          c.remove();
      };
      this.addCommands({
        cmd: V,
        undo: W,
        mustExec: !0
      });
    } catch (d) {
      H(`paste: "${d.message}".`);
    }
  }
  keydown(l) {
    !this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !0), Q(this, kl) !== f.NONE && !this.isEditorHandlingKeyboard && Cd._keyboardManager.exec(this, l);
  }
  keyup(l) {
    this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !1, Q(this, qZ) && (a(this, qZ, !1), m(this, p, FW).call(this, "main_toolbar")));
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
    l ? (m(this, p, $t).call(this), m(this, p, yc).call(this), m(this, p, Pl).call(this, {
      isEditing: Q(this, kl) !== f.NONE,
      isEmpty: m(this, p, P0).call(this),
      hasSomethingToUndo: Q(this, zU).hasSomethingToUndo(),
      hasSomethingToRedo: Q(this, zU).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (m(this, p, lN).call(this), m(this, p, zc).call(this), m(this, p, Pl).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(l) {
    if (!Q(this, LU)) {
      a(this, LU, l);
      for (const U of Q(this, LU))
        m(this, p, vZ).call(this, U.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return Q(this, wW).id;
  }
  get currentLayer() {
    return Q(this, Ll).get(Q(this, vd));
  }
  getLayer(l) {
    return Q(this, Ll).get(l);
  }
  get currentPageIndex() {
    return Q(this, vd);
  }
  addLayer(l) {
    Q(this, Ll).set(l.pageIndex, l), Q(this, $Z) ? l.enable() : l.disable();
  }
  removeLayer(l) {
    Q(this, Ll).delete(l.pageIndex);
  }
  updateMode(l, U = null, Z = !1) {
    if (Q(this, kl) !== l) {
      if (a(this, kl, l), l === f.NONE) {
        this.setEditingState(!1), m(this, p, dN).call(this);
        return;
      }
      this.setEditingState(!0), m(this, p, FN).call(this), this.unselectAll();
      for (const F of Q(this, Ll).values())
        F.updateMode(l);
      if (!U && Z) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (U) {
        for (const F of Q(this, Sl).values())
          if (F.annotationElementId === U) {
            this.setSelected(F), F.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(l) {
    l !== Q(this, kl) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: l
    });
  }
  updateParams(l, U) {
    var Z;
    if (Q(this, LU)) {
      switch (l) {
        case O.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case O.HIGHLIGHT_DEFAULT_COLOR:
          (Z = Q(this, iQ)) == null || Z.updateColor(U);
          break;
        case O.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (Q(this, MQ) || a(this, MQ, /* @__PURE__ */ new Map())).set(l, U), this.showAllEditors("highlight", U);
          break;
      }
      for (const F of Q(this, Zl))
        F.updateParams(l, U);
      for (const F of Q(this, LU))
        F.updateDefaultParams(l, U);
    }
  }
  showAllEditors(l, U, Z = !1) {
    var d;
    for (const V of Q(this, Sl).values())
      V.editorType === l && V.show(U);
    (((d = Q(this, MQ)) == null ? void 0 : d.get(O.HIGHLIGHT_SHOW_ALL)) ?? !0) !== U && m(this, p, vZ).call(this, [[O.HIGHLIGHT_SHOW_ALL, U]]);
  }
  enableWaiting(l = !1) {
    if (Q(this, mQ) !== l) {
      a(this, mQ, l);
      for (const U of Q(this, Ll).values())
        l ? U.disableClick() : U.enableClick(), U.div.classList.toggle("waiting", l);
    }
  }
  getEditors(l) {
    const U = [];
    for (const Z of Q(this, Sl).values())
      Z.pageIndex === l && U.push(Z);
    return U;
  }
  getEditor(l) {
    return Q(this, Sl).get(l);
  }
  addEditor(l) {
    Q(this, Sl).set(l.id, l);
  }
  removeEditor(l) {
    var U;
    l.div.contains(document.activeElement) && (Q(this, vU) && clearTimeout(Q(this, vU)), a(this, vU, setTimeout(() => {
      this.focusMainContainer(), a(this, vU, null);
    }, 0))), Q(this, Sl).delete(l.id), this.unselect(l), (!l.annotationElementId || !Q(this, IF).has(l.annotationElementId)) && ((U = Q(this, iZ)) == null || U.remove(l.id));
  }
  addDeletedAnnotationElement(l) {
    Q(this, IF).add(l.annotationElementId), this.addChangedExistingAnnotation(l), l.deleted = !0;
  }
  isDeletedAnnotationElement(l) {
    return Q(this, IF).has(l);
  }
  removeDeletedAnnotationElement(l) {
    Q(this, IF).delete(l.annotationElementId), this.removeChangedExistingAnnotation(l), l.deleted = !1;
  }
  setActiveEditor(l) {
    Q(this, NU) !== l && (a(this, NU, l), l && m(this, p, vZ).call(this, l.propertiesToUpdate));
  }
  updateUI(l) {
    Q(this, p, QN) === l && m(this, p, vZ).call(this, l.propertiesToUpdate);
  }
  toggleSelected(l) {
    if (Q(this, Zl).has(l)) {
      Q(this, Zl).delete(l), l.unselect(), m(this, p, Pl).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    Q(this, Zl).add(l), l.select(), m(this, p, vZ).call(this, l.propertiesToUpdate), m(this, p, Pl).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(l) {
    for (const U of Q(this, Zl))
      U !== l && U.unselect();
    Q(this, Zl).clear(), Q(this, Zl).add(l), l.select(), m(this, p, vZ).call(this, l.propertiesToUpdate), m(this, p, Pl).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(l) {
    return Q(this, Zl).has(l);
  }
  get firstSelectedEditor() {
    return Q(this, Zl).values().next().value;
  }
  unselect(l) {
    l.unselect(), Q(this, Zl).delete(l), m(this, p, Pl).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return Q(this, Zl).size !== 0;
  }
  get isEnterHandled() {
    return Q(this, Zl).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    Q(this, zU).undo(), m(this, p, Pl).call(this, {
      hasSomethingToUndo: Q(this, zU).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: m(this, p, P0).call(this)
    });
  }
  redo() {
    Q(this, zU).redo(), m(this, p, Pl).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: Q(this, zU).hasSomethingToRedo(),
      isEmpty: m(this, p, P0).call(this)
    });
  }
  addCommands(l) {
    Q(this, zU).add(l), m(this, p, Pl).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: m(this, p, P0).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const l = [...Q(this, Zl)], U = () => {
      for (const F of l)
        F.remove();
    }, Z = () => {
      for (const F of l)
        m(this, p, Lc).call(this, F);
    };
    this.addCommands({
      cmd: U,
      undo: Z,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var l;
    (l = Q(this, NU)) == null || l.commitOrRemove();
  }
  hasSomethingToControl() {
    return Q(this, NU) || this.hasSelection;
  }
  selectAll() {
    for (const l of Q(this, Zl))
      l.commit();
    m(this, p, kc).call(this, Q(this, Sl).values());
  }
  unselectAll() {
    if (!(Q(this, NU) && (Q(this, NU).commitOrRemove(), Q(this, kl) !== f.NONE)) && this.hasSelection) {
      for (const l of Q(this, Zl))
        l.unselect();
      Q(this, Zl).clear(), m(this, p, Pl).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(l, U, Z = !1) {
    if (Z || this.commitOrRemove(), !this.hasSelection)
      return;
    Q(this, lF)[0] += l, Q(this, lF)[1] += U;
    const [F, d] = Q(this, lF), V = [...Q(this, Zl)], W = 1e3;
    Q(this, AU) && clearTimeout(Q(this, AU)), a(this, AU, setTimeout(() => {
      a(this, AU, null), Q(this, lF)[0] = Q(this, lF)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of V)
            Q(this, Sl).has(c.id) && c.translateInPage(F, d);
        },
        undo: () => {
          for (const c of V)
            Q(this, Sl).has(c.id) && c.translateInPage(-F, -d);
        },
        mustExec: !1
      });
    }, W));
    for (const c of V)
      c.translateInPage(l, U);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), a(this, HU, /* @__PURE__ */ new Map());
      for (const l of Q(this, Zl))
        Q(this, HU).set(l, {
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
    if (!Q(this, HU))
      return !1;
    this.disableUserSelect(!1);
    const l = Q(this, HU);
    a(this, HU, null);
    let U = !1;
    for (const [{
      x: F,
      y: d,
      pageIndex: V
    }, W] of l)
      W.newX = F, W.newY = d, W.newPageIndex = V, U || (U = F !== W.savedX || d !== W.savedY || V !== W.savedPageIndex);
    if (!U)
      return !1;
    const Z = (F, d, V, W) => {
      if (Q(this, Sl).has(F.id)) {
        const c = Q(this, Ll).get(W);
        c ? F._setParentAndPosition(c, d, V) : (F.pageIndex = W, F.x = d, F.y = V);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [F, {
          newX: d,
          newY: V,
          newPageIndex: W
        }] of l)
          Z(F, d, V, W);
      },
      undo: () => {
        for (const [F, {
          savedX: d,
          savedY: V,
          savedPageIndex: W
        }] of l)
          Z(F, d, V, W);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(l, U) {
    if (Q(this, HU))
      for (const Z of Q(this, HU).keys())
        Z.drag(l, U);
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
    return ((l = this.getActive()) == null ? void 0 : l.shouldGetKeyboardEvents()) || Q(this, Zl).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(l) {
    return Q(this, NU) === l;
  }
  getActive() {
    return Q(this, NU);
  }
  getMode() {
    return Q(this, kl);
  }
  get imageManager() {
    return _(this, "imageManager", new Bc());
  }
  getSelectionBoxes(l) {
    if (!l)
      return null;
    const U = document.getSelection();
    for (let R = 0, N = U.rangeCount; R < N; R++)
      if (!l.contains(U.getRangeAt(R).commonAncestorContainer))
        return null;
    const {
      x: Z,
      y: F,
      width: d,
      height: V
    } = l.getBoundingClientRect();
    let W;
    switch (l.getAttribute("data-main-rotation")) {
      case "90":
        W = (R, N, s, b) => ({
          x: (N - F) / V,
          y: 1 - (R + s - Z) / d,
          width: b / V,
          height: s / d
        });
        break;
      case "180":
        W = (R, N, s, b) => ({
          x: 1 - (R + s - Z) / d,
          y: 1 - (N + b - F) / V,
          width: s / d,
          height: b / V
        });
        break;
      case "270":
        W = (R, N, s, b) => ({
          x: 1 - (N + b - F) / V,
          y: (R - Z) / d,
          width: b / V,
          height: s / d
        });
        break;
      default:
        W = (R, N, s, b) => ({
          x: (R - Z) / d,
          y: (N - F) / V,
          width: s / d,
          height: b / V
        });
        break;
    }
    const c = [];
    for (let R = 0, N = U.rangeCount; R < N; R++) {
      const s = U.getRangeAt(R);
      if (!s.collapsed)
        for (const {
          x: b,
          y: n,
          width: h,
          height: M
        } of s.getClientRects())
          h === 0 || M === 0 || c.push(W(b, n, h, M));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: l,
    id: U
  }) {
    (Q(this, Hd) || a(this, Hd, /* @__PURE__ */ new Map())).set(l, U);
  }
  removeChangedExistingAnnotation({
    annotationElementId: l
  }) {
    var U;
    (U = Q(this, Hd)) == null || U.delete(l);
  }
  renderAnnotationElement(l) {
    var F;
    const U = (F = Q(this, Hd)) == null ? void 0 : F.get(l.data.id);
    if (!U)
      return;
    const Z = Q(this, iZ).getRawValue(U);
    Z && (Q(this, kl) === f.NONE && !Z.hasBeenModified || Z.renderAnnotationElement(l));
  }
};
gd = new WeakMap(), NU = new WeakMap(), Sl = new WeakMap(), Ll = new WeakMap(), Kd = new WeakMap(), iZ = new WeakMap(), Hd = new WeakMap(), zU = new WeakMap(), vd = new WeakMap(), IF = new WeakMap(), HU = new WeakMap(), LU = new WeakMap(), EF = new WeakMap(), aQ = new WeakMap(), hQ = new WeakMap(), vU = new WeakMap(), Pd = new WeakMap(), qZ = new WeakMap(), PU = new WeakMap(), wW = new WeakMap(), $Z = new WeakMap(), mQ = new WeakMap(), CF = new WeakMap(), iQ = new WeakMap(), Ad = new WeakMap(), kl = new WeakMap(), Zl = new WeakMap(), MZ = new WeakMap(), wF = new WeakMap(), MQ = new WeakMap(), JQ = new WeakMap(), GQ = new WeakMap(), TQ = new WeakMap(), SQ = new WeakMap(), XQ = new WeakMap(), YQ = new WeakMap(), BQ = new WeakMap(), eQ = new WeakMap(), uQ = new WeakMap(), pQ = new WeakMap(), yQ = new WeakMap(), zQ = new WeakMap(), lF = new WeakMap(), AU = new WeakMap(), JZ = new WeakMap(), LQ = new WeakMap(), p = new WeakSet(), ZW = function({
  anchorNode: l
}) {
  return l.nodeType === Node.TEXT_NODE ? l.parentElement : l;
}, ft = function() {
  const l = document.getSelection();
  if (!l || l.isCollapsed)
    return;
  const Z = m(this, p, ZW).call(this, l).closest(".textLayer"), F = this.getSelectionBoxes(Z);
  F && (Q(this, PU) || a(this, PU, new rb(this)), Q(this, PU).show(Z, F, this.direction === "ltr"));
}, _t = function() {
  var d, V, W;
  const l = document.getSelection();
  if (!l || l.isCollapsed) {
    Q(this, MZ) && ((d = Q(this, PU)) == null || d.hide(), a(this, MZ, null), m(this, p, Pl).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: U
  } = l;
  if (U === Q(this, MZ))
    return;
  if (!m(this, p, ZW).call(this, l).closest(".textLayer")) {
    Q(this, MZ) && ((V = Q(this, PU)) == null || V.hide(), a(this, MZ, null), m(this, p, Pl).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((W = Q(this, PU)) == null || W.hide(), a(this, MZ, U), m(this, p, Pl).call(this, {
    hasSelectedText: !0
  }), !(Q(this, kl) !== f.HIGHLIGHT && Q(this, kl) !== f.NONE) && (Q(this, kl) === f.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), a(this, qZ, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = this._signal, R = (N) => {
      N.type === "pointerup" && N.button !== 0 || (window.removeEventListener("pointerup", R), window.removeEventListener("blur", R), N.type === "pointerup" && m(this, p, FW).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", R, {
      signal: c
    }), window.addEventListener("blur", R, {
      signal: c
    });
  }
}, FW = function(l = "") {
  Q(this, kl) === f.HIGHLIGHT ? this.highlightSelection(l) : Q(this, aQ) && m(this, p, ft).call(this);
}, qt = function() {
  document.addEventListener("selectionchange", m(this, p, _t).bind(this), {
    signal: this._signal
  });
}, $t = function() {
  const l = this._signal;
  window.addEventListener("focus", Q(this, GQ), {
    signal: l
  }), window.addEventListener("blur", Q(this, JQ), {
    signal: l
  });
}, lN = function() {
  window.removeEventListener("focus", Q(this, GQ)), window.removeEventListener("blur", Q(this, JQ));
}, pc = function() {
  const l = this._signal;
  window.addEventListener("keydown", Q(this, YQ), {
    signal: l
  }), window.addEventListener("keyup", Q(this, BQ), {
    signal: l
  });
}, UN = function() {
  window.removeEventListener("keydown", Q(this, YQ)), window.removeEventListener("keyup", Q(this, BQ));
}, yc = function() {
  const l = this._signal;
  document.addEventListener("copy", Q(this, TQ), {
    signal: l
  }), document.addEventListener("cut", Q(this, SQ), {
    signal: l
  }), document.addEventListener("paste", Q(this, XQ), {
    signal: l
  });
}, zc = function() {
  document.removeEventListener("copy", Q(this, TQ)), document.removeEventListener("cut", Q(this, SQ)), document.removeEventListener("paste", Q(this, XQ));
}, ZN = function() {
  const l = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: l
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: l
  });
}, Pl = function(l) {
  Object.entries(l).some(([Z, F]) => Q(this, zQ)[Z] !== F) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(Q(this, zQ), l)
  }), Q(this, kl) === f.HIGHLIGHT && l.hasSelectedEditor === !1 && m(this, p, vZ).call(this, [[O.HIGHLIGHT_FREE, !0]]));
}, vZ = function(l) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: l
  });
}, FN = function() {
  if (!Q(this, $Z)) {
    a(this, $Z, !0);
    for (const l of Q(this, Ll).values())
      l.enable();
    for (const l of Q(this, Sl).values())
      l.enable();
  }
}, dN = function() {
  if (this.unselectAll(), Q(this, $Z)) {
    a(this, $Z, !1);
    for (const l of Q(this, Ll).values())
      l.disable();
    for (const l of Q(this, Sl).values())
      l.disable();
  }
}, Lc = function(l) {
  const U = Q(this, Ll).get(l.pageIndex);
  U ? U.addOrRebuild(l) : (this.addEditor(l), this.addToAnnotationStorage(l));
}, QN = function() {
  let l = null;
  for (l of Q(this, Zl))
    ;
  return l;
}, P0 = function() {
  if (Q(this, Sl).size === 0)
    return !0;
  if (Q(this, Sl).size === 1)
    for (const l of Q(this, Sl).values())
      return l.isEmpty();
  return !1;
}, kc = function(l) {
  for (const U of Q(this, Zl))
    U.unselect();
  Q(this, Zl).clear();
  for (const U of l)
    U.isEmpty() || (Q(this, Zl).add(U), U.select());
  m(this, p, Pl).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, r(Cd, "TRANSLATE_SMALL", 1), r(Cd, "TRANSLATE_BIG", 10);
let Yd = Cd;
var GZ, TZ, kU, SZ, sU, fd, DU, kQ, Dc;
const bZ = class bZ {
  constructor(l) {
    i(this, kQ);
    i(this, GZ, "");
    i(this, TZ, !1);
    i(this, kU, null);
    i(this, SZ, null);
    i(this, sU, null);
    i(this, fd, !1);
    i(this, DU, null);
    a(this, DU, l);
  }
  static initialize(l) {
    bZ._l10nPromise || (bZ._l10nPromise = l);
  }
  async render() {
    const l = a(this, kU, document.createElement("button"));
    l.className = "altText";
    const U = await bZ._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    l.textContent = U, l.setAttribute("aria-label", U), l.tabIndex = "0";
    const Z = Q(this, DU)._uiManager._signal;
    l.addEventListener("contextmenu", VU, {
      signal: Z
    }), l.addEventListener("pointerdown", (d) => d.stopPropagation(), {
      signal: Z
    });
    const F = (d) => {
      d.preventDefault(), Q(this, DU)._uiManager.editAltText(Q(this, DU));
    };
    return l.addEventListener("click", F, {
      capture: !0,
      signal: Z
    }), l.addEventListener("keydown", (d) => {
      d.target === l && d.key === "Enter" && (a(this, fd, !0), F(d));
    }, {
      signal: Z
    }), await m(this, kQ, Dc).call(this), l;
  }
  finish() {
    Q(this, kU) && (Q(this, kU).focus({
      focusVisible: Q(this, fd)
    }), a(this, fd, !1));
  }
  isEmpty() {
    return !Q(this, GZ) && !Q(this, TZ);
  }
  get data() {
    return {
      altText: Q(this, GZ),
      decorative: Q(this, TZ)
    };
  }
  set data({
    altText: l,
    decorative: U
  }) {
    Q(this, GZ) === l && Q(this, TZ) === U || (a(this, GZ, l), a(this, TZ, U), m(this, kQ, Dc).call(this));
  }
  toggle(l = !1) {
    Q(this, kU) && (!l && Q(this, sU) && (clearTimeout(Q(this, sU)), a(this, sU, null)), Q(this, kU).disabled = !l);
  }
  destroy() {
    var l;
    (l = Q(this, kU)) == null || l.remove(), a(this, kU, null), a(this, SZ, null);
  }
};
GZ = new WeakMap(), TZ = new WeakMap(), kU = new WeakMap(), SZ = new WeakMap(), sU = new WeakMap(), fd = new WeakMap(), DU = new WeakMap(), kQ = new WeakSet(), Dc = async function() {
  var F;
  const l = Q(this, kU);
  if (!l)
    return;
  if (!Q(this, GZ) && !Q(this, TZ)) {
    l.classList.remove("done"), (F = Q(this, SZ)) == null || F.remove();
    return;
  }
  l.classList.add("done"), bZ._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((d) => {
    l.setAttribute("aria-label", d);
  });
  let U = Q(this, SZ);
  if (!U) {
    a(this, SZ, U = document.createElement("span")), U.className = "tooltip", U.setAttribute("role", "tooltip");
    const d = U.id = `alt-text-tooltip-${Q(this, DU).id}`;
    l.setAttribute("aria-describedby", d);
    const V = 100, W = Q(this, DU)._uiManager._signal;
    W.addEventListener("abort", () => {
      clearTimeout(Q(this, sU)), a(this, sU, null);
    }, {
      once: !0
    }), l.addEventListener("mouseenter", () => {
      a(this, sU, setTimeout(() => {
        a(this, sU, null), Q(this, SZ).classList.add("show"), Q(this, DU)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, V));
    }, {
      signal: W
    }), l.addEventListener("mouseleave", () => {
      var c;
      Q(this, sU) && (clearTimeout(Q(this, sU)), a(this, sU, null)), (c = Q(this, SZ)) == null || c.classList.remove("show");
    }, {
      signal: W
    });
  }
  U.innerText = Q(this, TZ) ? await bZ._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : Q(this, GZ), U.parentNode || l.append(U);
  const Z = Q(this, DU).getImageForAltText();
  Z == null || Z.setAttribute("aria-describedby", U.id);
}, r(bZ, "_l10nPromise", null);
let eW = bZ;
var xF, oU, Kl, _d, jF, Dl, OF, qd, $d, Hl, DQ, rF, UF, oQ, gF, XZ, fU, l0, U0, TU, IQ, xW, v, oc, EQ, Ic, Ec, VN, WN, Cc, wc, xc, cN, RN, tN, NN, jc, A0;
const cl = class cl {
  constructor(l) {
    i(this, v);
    i(this, xF, null);
    i(this, oU, null);
    i(this, Kl, null);
    i(this, _d, !1);
    i(this, jF, !1);
    i(this, Dl, null);
    i(this, OF, null);
    i(this, qd, this.focusin.bind(this));
    i(this, $d, this.focusout.bind(this));
    i(this, Hl, null);
    i(this, DQ, "");
    i(this, rF, !1);
    i(this, UF, null);
    i(this, oQ, !1);
    i(this, gF, !1);
    i(this, XZ, !1);
    i(this, fU, null);
    i(this, l0, 0);
    i(this, U0, 0);
    i(this, TU, null);
    r(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    r(this, "_isVisible", !0);
    r(this, "_uiManager", null);
    r(this, "_focusEventsAllowed", !0);
    r(this, "_l10nPromise", null);
    i(this, IQ, !1);
    i(this, xW, cl._zIndex++);
    this.constructor === cl && Ql("Cannot initialize AnnotationEditor."), this.parent = l.parent, this.id = l.id, this.width = this.height = null, this.pageIndex = l.parent.pageIndex, this.name = l.name, this.div = null, this._uiManager = l.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = l.isCentered, this._structTreeParentId = null;
    const {
      rotation: U,
      rawDims: {
        pageWidth: Z,
        pageHeight: F,
        pageX: d,
        pageY: V
      }
    } = this.parent.viewport;
    this.rotation = U, this.pageRotation = (360 + U - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [Z, F], this.pageTranslation = [d, V];
    const [W, c] = this.parentDimensions;
    this.x = l.x / W, this.y = l.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const l = cl.prototype._resizeWithKeyboard, U = Yd.TRANSLATE_SMALL, Z = Yd.TRANSLATE_BIG;
    return _(this, "_resizerKeyboardManager", new rV([[["ArrowLeft", "mac+ArrowLeft"], l, {
      args: [-U, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], l, {
      args: [-Z, 0]
    }], [["ArrowRight", "mac+ArrowRight"], l, {
      args: [U, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], l, {
      args: [Z, 0]
    }], [["ArrowUp", "mac+ArrowUp"], l, {
      args: [0, -U]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], l, {
      args: [0, -Z]
    }], [["ArrowDown", "mac+ArrowDown"], l, {
      args: [0, U]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], l, {
      args: [0, Z]
    }], [["Escape", "mac+Escape"], cl.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return _(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(l) {
    const U = new vb({
      id: l.parent.getNextId(),
      parent: l.parent,
      uiManager: l._uiManager
    });
    U.annotationElementId = l.annotationElementId, U.deleted = !0, U._uiManager.addToAnnotationStorage(U);
  }
  static initialize(l, U, Z) {
    if (cl._l10nPromise || (cl._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((d) => [d, l.get(d.replaceAll(/([A-Z])/g, (V) => `-${V.toLowerCase()}`))]))), Z != null && Z.strings)
      for (const d of Z.strings)
        cl._l10nPromise.set(d, l.get(d));
    if (cl._borderLineWidth !== -1)
      return;
    const F = getComputedStyle(document.documentElement);
    cl._borderLineWidth = parseFloat(F.getPropertyValue("--outline-width")) || 0;
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
    Ql("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return Q(this, IQ);
  }
  set _isDraggable(l) {
    var U;
    a(this, IQ, l), (U = this.div) == null || U.classList.toggle("draggable", l);
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
    this.div.style.zIndex = Q(this, xW);
  }
  setParent(l) {
    l !== null ? (this.pageIndex = l.pageIndex, this.pageDimensions = l.pageDimensions) : m(this, v, A0).call(this), this.parent = l;
  }
  focusin(l) {
    this._focusEventsAllowed && (Q(this, rF) ? a(this, rF, !1) : this.parent.setSelected(this));
  }
  focusout(l) {
    var Z;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const U = l.relatedTarget;
    U != null && U.closest(`#${this.id}`) || (l.preventDefault(), (Z = this.parent) != null && Z.isMultipleSelection || this.commitOrRemove());
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
  setAt(l, U, Z, F) {
    const [d, V] = this.parentDimensions;
    [Z, F] = this.screenToPageTranslation(Z, F), this.x = (l + Z) / d, this.y = (U + F) / V, this.fixAndSetPosition();
  }
  translate(l, U) {
    m(this, v, oc).call(this, this.parentDimensions, l, U);
  }
  translateInPage(l, U) {
    Q(this, UF) || a(this, UF, [this.x, this.y]), m(this, v, oc).call(this, this.pageDimensions, l, U), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(l, U) {
    Q(this, UF) || a(this, UF, [this.x, this.y]);
    const [Z, F] = this.parentDimensions;
    if (this.x += l / Z, this.y += U / F, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: R,
        y: N
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, R, N) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: d,
      y: V
    } = this;
    const [W, c] = this.getBaseTranslation();
    d += W, V += c, this.div.style.left = `${(100 * d).toFixed(2)}%`, this.div.style.top = `${(100 * V).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!Q(this, UF) && (Q(this, UF)[0] !== this.x || Q(this, UF)[1] !== this.y);
  }
  getBaseTranslation() {
    const [l, U] = this.parentDimensions, {
      _borderLineWidth: Z
    } = cl, F = Z / l, d = Z / U;
    switch (this.rotation) {
      case 90:
        return [-F, d];
      case 180:
        return [F, d];
      case 270:
        return [F, -d];
      default:
        return [-F, -d];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(l = this.rotation) {
    const [U, Z] = this.pageDimensions;
    let {
      x: F,
      y: d,
      width: V,
      height: W
    } = this;
    if (V *= U, W *= Z, F *= U, d *= Z, this._mustFixPosition)
      switch (l) {
        case 0:
          F = Math.max(0, Math.min(U - V, F)), d = Math.max(0, Math.min(Z - W, d));
          break;
        case 90:
          F = Math.max(0, Math.min(U - W, F)), d = Math.min(Z, Math.max(V, d));
          break;
        case 180:
          F = Math.min(U, Math.max(V, F)), d = Math.min(Z, Math.max(W, d));
          break;
        case 270:
          F = Math.min(U, Math.max(W, F)), d = Math.max(0, Math.min(Z - V, d));
          break;
      }
    this.x = F /= U, this.y = d /= Z;
    const [c, R] = this.getBaseTranslation();
    F += c, d += R;
    const {
      style: N
    } = this.div;
    N.left = `${(100 * F).toFixed(2)}%`, N.top = `${(100 * d).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(l, U) {
    var Z;
    return m(Z = cl, EQ, Ic).call(Z, l, U, this.parentRotation);
  }
  pageTranslationToScreen(l, U) {
    var Z;
    return m(Z = cl, EQ, Ic).call(Z, l, U, 360 - this.parentRotation);
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
      pageDimensions: [U, Z]
    } = this, F = U * l, d = Z * l;
    return dU.isCSSRoundSupported ? [Math.round(F), Math.round(d)] : [F, d];
  }
  setDims(l, U) {
    const [Z, F] = this.parentDimensions;
    this.div.style.width = `${(100 * l / Z).toFixed(2)}%`, Q(this, jF) || (this.div.style.height = `${(100 * U / F).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: l
    } = this.div, {
      height: U,
      width: Z
    } = l, F = Z.endsWith("%"), d = !Q(this, jF) && U.endsWith("%");
    if (F && d)
      return;
    const [V, W] = this.parentDimensions;
    F || (l.width = `${(100 * parseFloat(Z) / V).toFixed(2)}%`), !Q(this, jF) && !d && (l.height = `${(100 * parseFloat(U) / W).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var l;
    (l = Q(this, Kl)) == null || l.finish();
  }
  async addEditToolbar() {
    return Q(this, Hl) || Q(this, gF) ? Q(this, Hl) : (a(this, Hl, new Xc(this)), this.div.append(Q(this, Hl).render()), Q(this, Kl) && Q(this, Hl).addAltTextButton(await Q(this, Kl).render()), Q(this, Hl));
  }
  removeEditToolbar() {
    var l;
    Q(this, Hl) && (Q(this, Hl).remove(), a(this, Hl, null), (l = Q(this, Kl)) == null || l.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    Q(this, Kl) || (eW.initialize(cl._l10nPromise), a(this, Kl, new eW(this)), Q(this, xF) && (Q(this, Kl).data = Q(this, xF), a(this, xF, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var l;
    return (l = Q(this, Kl)) == null ? void 0 : l.data;
  }
  set altTextData(l) {
    Q(this, Kl) && (Q(this, Kl).data = l);
  }
  hasAltText() {
    var l;
    return !((l = Q(this, Kl)) != null && l.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = Q(this, _d) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground();
    const l = this._uiManager._signal;
    this.div.addEventListener("focusin", Q(this, qd), {
      signal: l
    }), this.div.addEventListener("focusout", Q(this, $d), {
      signal: l
    });
    const [U, Z] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * Z / U).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * U / Z).toFixed(2)}%`);
    const [F, d] = this.getInitialTranslation();
    return this.translate(F, d), BW(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(l) {
    const {
      isMac: U
    } = dU.platform;
    if (l.button !== 0 || l.ctrlKey && U) {
      l.preventDefault();
      return;
    }
    if (a(this, rF, !0), this._isDraggable) {
      m(this, v, cN).call(this, l);
      return;
    }
    m(this, v, xc).call(this, l);
  }
  moveInDOM() {
    Q(this, fU) && clearTimeout(Q(this, fU)), a(this, fU, setTimeout(() => {
      var l;
      a(this, fU, null), (l = this.parent) == null || l.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(l, U, Z) {
    l.changeParent(this), this.x = U, this.y = Z, this.fixAndSetPosition();
  }
  getRect(l, U, Z = this.rotation) {
    const F = this.parentScale, [d, V] = this.pageDimensions, [W, c] = this.pageTranslation, R = l / F, N = U / F, s = this.x * d, b = this.y * V, n = this.width * d, h = this.height * V;
    switch (Z) {
      case 0:
        return [s + R + W, V - b - N - h + c, s + R + n + W, V - b - N + c];
      case 90:
        return [s + N + W, V - b + R + c, s + N + h + W, V - b + R + n + c];
      case 180:
        return [s - R - n + W, V - b + N + c, s - R + W, V - b + N + h + c];
      case 270:
        return [s - N - h + W, V - b - R - n + c, s - N + W, V - b - R + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(l, U) {
    const [Z, F, d, V] = l, W = d - Z, c = V - F;
    switch (this.rotation) {
      case 0:
        return [Z, U - V, W, c];
      case 90:
        return [Z, U - F, c, W];
      case 180:
        return [d, U - F, W, c];
      case 270:
        return [d, U - V, c, W];
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
    a(this, gF, !0);
  }
  disableEditMode() {
    a(this, gF, !1);
  }
  isInEditMode() {
    return Q(this, gF);
  }
  shouldGetKeyboardEvents() {
    return Q(this, XZ);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var U, Z;
    const l = this._uiManager._signal;
    (U = this.div) == null || U.addEventListener("focusin", Q(this, qd), {
      signal: l
    }), (Z = this.div) == null || Z.addEventListener("focusout", Q(this, $d), {
      signal: l
    });
  }
  rotate(l) {
  }
  serialize(l = !1, U = null) {
    Ql("An editor must be serializable");
  }
  static deserialize(l, U, Z) {
    const F = new this.prototype.constructor({
      parent: U,
      id: U.getNextId(),
      uiManager: Z
    });
    F.rotation = l.rotation, a(F, xF, l.accessibilityData);
    const [d, V] = F.pageDimensions, [W, c, R, N] = F.getRectInCurrentCoords(l.rect, V);
    return F.x = W / d, F.y = c / V, F.width = R / d, F.height = N / V, F;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", Q(this, qd)), this.div.removeEventListener("focusout", Q(this, $d)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), Q(this, fU) && (clearTimeout(Q(this, fU)), a(this, fU, null)), m(this, v, A0).call(this), this.removeEditToolbar(), Q(this, TU)) {
      for (const l of Q(this, TU).values())
        clearTimeout(l);
      a(this, TU, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (m(this, v, VN).call(this), Q(this, Dl).classList.remove("hidden"), BW(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(l) {
    if (!this.isResizable || l.target !== this.div || l.key !== "Enter")
      return;
    this._uiManager.setSelected(this), a(this, OF, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const U = Q(this, Dl).children;
    if (!Q(this, oU)) {
      a(this, oU, Array.from(U));
      const V = m(this, v, RN).bind(this), W = m(this, v, tN).bind(this), c = this._uiManager._signal;
      for (const R of Q(this, oU)) {
        const N = R.getAttribute("data-resizer-name");
        R.setAttribute("role", "spinbutton"), R.addEventListener("keydown", V, {
          signal: c
        }), R.addEventListener("blur", W, {
          signal: c
        }), R.addEventListener("focus", m(this, v, NN).bind(this, N), {
          signal: c
        }), cl._l10nPromise.get(`pdfjs-editor-resizer-label-${N}`).then((s) => R.setAttribute("aria-label", s));
      }
    }
    const Z = Q(this, oU)[0];
    let F = 0;
    for (const V of U) {
      if (V === Z)
        break;
      F++;
    }
    const d = (360 - this.rotation + this.parentRotation) % 360 / 90 * (Q(this, oU).length / 4);
    if (d !== F) {
      if (d < F)
        for (let W = 0; W < F - d; W++)
          Q(this, Dl).append(Q(this, Dl).firstChild);
      else if (d > F)
        for (let W = 0; W < d - F; W++)
          Q(this, Dl).firstChild.before(Q(this, Dl).lastChild);
      let V = 0;
      for (const W of U) {
        const R = Q(this, oU)[V++].getAttribute("data-resizer-name");
        cl._l10nPromise.get(`pdfjs-editor-resizer-label-${R}`).then((N) => W.setAttribute("aria-label", N));
      }
    }
    m(this, v, jc).call(this, 0), a(this, XZ, !0), Q(this, Dl).firstChild.focus({
      focusVisible: !0
    }), l.preventDefault(), l.stopImmediatePropagation();
  }
  _resizeWithKeyboard(l, U) {
    Q(this, XZ) && m(this, v, wc).call(this, Q(this, DQ), {
      movementX: l,
      movementY: U
    });
  }
  _stopResizingWithKeyboard() {
    m(this, v, A0).call(this), this.div.focus();
  }
  select() {
    var l, U;
    if (this.makeResizable(), (l = this.div) == null || l.classList.add("selectedEditor"), !Q(this, Hl)) {
      this.addEditToolbar().then(() => {
        var Z, F;
        (Z = this.div) != null && Z.classList.contains("selectedEditor") && ((F = Q(this, Hl)) == null || F.show());
      });
      return;
    }
    (U = Q(this, Hl)) == null || U.show();
  }
  unselect() {
    var l, U, Z, F;
    (l = Q(this, Dl)) == null || l.classList.add("hidden"), (U = this.div) == null || U.classList.remove("selectedEditor"), (Z = this.div) != null && Z.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (F = Q(this, Hl)) == null || F.hide();
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
    return Q(this, oQ);
  }
  set isEditing(l) {
    a(this, oQ, l), this.parent && (l ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(l, U) {
    a(this, jF, !0);
    const Z = l / U, {
      style: F
    } = this.div;
    F.aspectRatio = Z, F.height = "auto";
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
      Q(this, TU) || a(this, TU, /* @__PURE__ */ new Map());
      const {
        action: Z
      } = l;
      let F = Q(this, TU).get(Z);
      F && clearTimeout(F), F = setTimeout(() => {
        this._reportTelemetry(l), Q(this, TU).delete(Z), Q(this, TU).size === 0 && a(this, TU, null);
      }, cl._telemetryTimeout), Q(this, TU).set(Z, F);
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
    this.div && (this.div.tabIndex = 0), a(this, _d, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), a(this, _d, !0);
  }
  renderAnnotationElement(l) {
    let U = l.container.querySelector(".annotationContent");
    if (!U)
      U = document.createElement("div"), U.classList.add("annotationContent", this.editorType), l.container.prepend(U);
    else if (U.nodeName === "CANVAS") {
      const Z = U;
      U = document.createElement("div"), U.classList.add("annotationContent", this.editorType), Z.before(U);
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
xF = new WeakMap(), oU = new WeakMap(), Kl = new WeakMap(), _d = new WeakMap(), jF = new WeakMap(), Dl = new WeakMap(), OF = new WeakMap(), qd = new WeakMap(), $d = new WeakMap(), Hl = new WeakMap(), DQ = new WeakMap(), rF = new WeakMap(), UF = new WeakMap(), oQ = new WeakMap(), gF = new WeakMap(), XZ = new WeakMap(), fU = new WeakMap(), l0 = new WeakMap(), U0 = new WeakMap(), TU = new WeakMap(), IQ = new WeakMap(), xW = new WeakMap(), v = new WeakSet(), oc = function([l, U], Z, F) {
  [Z, F] = this.screenToPageTranslation(Z, F), this.x += Z / l, this.y += F / U, this.fixAndSetPosition();
}, EQ = new WeakSet(), Ic = function(l, U, Z) {
  switch (Z) {
    case 90:
      return [U, -l];
    case 180:
      return [-l, -U];
    case 270:
      return [-U, l];
    default:
      return [l, U];
  }
}, Ec = function(l) {
  switch (l) {
    case 90: {
      const [U, Z] = this.pageDimensions;
      return [0, -U / Z, Z / U, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [U, Z] = this.pageDimensions;
      return [0, U / Z, -Z / U, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, VN = function() {
  if (Q(this, Dl))
    return;
  a(this, Dl, document.createElement("div")), Q(this, Dl).classList.add("resizers");
  const l = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], U = this._uiManager._signal;
  for (const Z of l) {
    const F = document.createElement("div");
    Q(this, Dl).append(F), F.classList.add("resizer", Z), F.setAttribute("data-resizer-name", Z), F.addEventListener("pointerdown", m(this, v, WN).bind(this, Z), {
      signal: U
    }), F.addEventListener("contextmenu", VU, {
      signal: U
    }), F.tabIndex = -1;
  }
  this.div.prepend(Q(this, Dl));
}, WN = function(l, U) {
  var M;
  U.preventDefault();
  const {
    isMac: Z
  } = dU.platform;
  if (U.button !== 0 || U.ctrlKey && Z)
    return;
  (M = Q(this, Kl)) == null || M.toggle(!1);
  const F = m(this, v, wc).bind(this, l), d = this._isDraggable;
  this._isDraggable = !1;
  const V = this._uiManager._signal, W = {
    passive: !0,
    capture: !0,
    signal: V
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", F, W), window.addEventListener("contextmenu", VU, {
    signal: V
  });
  const c = this.x, R = this.y, N = this.width, s = this.height, b = this.parent.div.style.cursor, n = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(U.target).cursor;
  const h = () => {
    var G;
    this.parent.togglePointerEvents(!0), (G = Q(this, Kl)) == null || G.toggle(!0), this._isDraggable = d, window.removeEventListener("pointerup", h), window.removeEventListener("blur", h), window.removeEventListener("pointermove", F, W), window.removeEventListener("contextmenu", VU), this.parent.div.style.cursor = b, this.div.style.cursor = n, m(this, v, Cc).call(this, c, R, N, s);
  };
  window.addEventListener("pointerup", h, {
    signal: V
  }), window.addEventListener("blur", h, {
    signal: V
  });
}, Cc = function(l, U, Z, F) {
  const d = this.x, V = this.y, W = this.width, c = this.height;
  d === l && V === U && W === Z && c === F || this.addCommands({
    cmd: () => {
      this.width = W, this.height = c, this.x = d, this.y = V;
      const [R, N] = this.parentDimensions;
      this.setDims(R * W, N * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = Z, this.height = F, this.x = l, this.y = U;
      const [R, N] = this.parentDimensions;
      this.setDims(R * Z, N * F), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, wc = function(l, U) {
  const [Z, F] = this.parentDimensions, d = this.x, V = this.y, W = this.width, c = this.height, R = cl.MIN_SIZE / Z, N = cl.MIN_SIZE / F, s = (k) => Math.round(k * 1e4) / 1e4, b = m(this, v, Ec).call(this, this.rotation), n = (k, x) => [b[0] * k + b[2] * x, b[1] * k + b[3] * x], h = m(this, v, Ec).call(this, 360 - this.rotation), M = (k, x) => [h[0] * k + h[2] * x, h[1] * k + h[3] * x];
  let G, J, T = !1, S = !1;
  switch (l) {
    case "topLeft":
      T = !0, G = (k, x) => [0, 0], J = (k, x) => [k, x];
      break;
    case "topMiddle":
      G = (k, x) => [k / 2, 0], J = (k, x) => [k / 2, x];
      break;
    case "topRight":
      T = !0, G = (k, x) => [k, 0], J = (k, x) => [0, x];
      break;
    case "middleRight":
      S = !0, G = (k, x) => [k, x / 2], J = (k, x) => [0, x / 2];
      break;
    case "bottomRight":
      T = !0, G = (k, x) => [k, x], J = (k, x) => [0, 0];
      break;
    case "bottomMiddle":
      G = (k, x) => [k / 2, x], J = (k, x) => [k / 2, 0];
      break;
    case "bottomLeft":
      T = !0, G = (k, x) => [0, x], J = (k, x) => [k, 0];
      break;
    case "middleLeft":
      S = !0, G = (k, x) => [0, x / 2], J = (k, x) => [k, x / 2];
      break;
  }
  const Y = G(W, c), B = J(W, c);
  let X = n(...B);
  const e = s(d + X[0]), L = s(V + X[1]);
  let I = 1, g = 1, [w, Wl] = this.screenToPageTranslation(U.movementX, U.movementY);
  if ([w, Wl] = M(w / Z, Wl / F), T) {
    const k = Math.hypot(W, c);
    I = g = Math.max(Math.min(Math.hypot(B[0] - Y[0] - w, B[1] - Y[1] - Wl) / k, 1 / W, 1 / c), R / W, N / c);
  } else S ? I = Math.max(R, Math.min(1, Math.abs(B[0] - Y[0] - w))) / W : g = Math.max(N, Math.min(1, Math.abs(B[1] - Y[1] - Wl))) / c;
  const z = s(W * I), C = s(c * g);
  X = n(...J(z, C));
  const K = e - X[0], Ul = L - X[1];
  this.width = z, this.height = C, this.x = K, this.y = Ul, this.setDims(Z * z, F * C), this.fixAndSetPosition();
}, xc = function(l) {
  const {
    isMac: U
  } = dU.platform;
  l.ctrlKey && !U || l.shiftKey || l.metaKey && U ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, cN = function(l) {
  const U = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let Z, F;
  const d = this._uiManager._signal;
  U && (this.div.classList.add("moving"), Z = {
    passive: !0,
    capture: !0,
    signal: d
  }, a(this, l0, l.clientX), a(this, U0, l.clientY), F = (W) => {
    const {
      clientX: c,
      clientY: R
    } = W, [N, s] = this.screenToPageTranslation(c - Q(this, l0), R - Q(this, U0));
    a(this, l0, c), a(this, U0, R), this._uiManager.dragSelectedEditors(N, s);
  }, window.addEventListener("pointermove", F, Z));
  const V = () => {
    window.removeEventListener("pointerup", V), window.removeEventListener("blur", V), U && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", F, Z)), a(this, rF, !1), this._uiManager.endDragSession() || m(this, v, xc).call(this, l);
  };
  window.addEventListener("pointerup", V, {
    signal: d
  }), window.addEventListener("blur", V, {
    signal: d
  });
}, RN = function(l) {
  cl._resizerKeyboardManager.exec(this, l);
}, tN = function(l) {
  var U;
  Q(this, XZ) && ((U = l.relatedTarget) == null ? void 0 : U.parentNode) !== Q(this, Dl) && m(this, v, A0).call(this);
}, NN = function(l) {
  a(this, DQ, Q(this, XZ) ? l : "");
}, jc = function(l) {
  if (Q(this, oU))
    for (const U of Q(this, oU))
      U.tabIndex = l;
}, A0 = function() {
  if (a(this, XZ, !1), m(this, v, jc).call(this, -1), Q(this, OF)) {
    const {
      savedX: l,
      savedY: U,
      savedWidth: Z,
      savedHeight: F
    } = Q(this, OF);
    m(this, v, Cc).call(this, l, U, Z, F), a(this, OF, null);
  }
}, i(cl, EQ), r(cl, "_borderLineWidth", -1), r(cl, "_colorManager", new uc()), r(cl, "_zIndex", 1), r(cl, "_telemetryTimeout", 1e3);
let Fl = cl;
class vb extends Fl {
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
const Wt = 3285377520, JU = 4294901760, gU = 65535;
class sN {
  constructor(l) {
    this.h1 = l ? l & 4294967295 : Wt, this.h2 = l ? l & 4294967295 : Wt;
  }
  update(l) {
    let U, Z;
    if (typeof l == "string") {
      U = new Uint8Array(l.length * 2), Z = 0;
      for (let M = 0, G = l.length; M < G; M++) {
        const J = l.charCodeAt(M);
        J <= 255 ? U[Z++] = J : (U[Z++] = J >>> 8, U[Z++] = J & 255);
      }
    } else if (ArrayBuffer.isView(l))
      U = l.slice(), Z = U.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const F = Z >> 2, d = Z - F * 4, V = new Uint32Array(U.buffer, 0, F);
    let W = 0, c = 0, R = this.h1, N = this.h2;
    const s = 3432918353, b = 461845907, n = s & gU, h = b & gU;
    for (let M = 0; M < F; M++)
      M & 1 ? (W = V[M], W = W * s & JU | W * n & gU, W = W << 15 | W >>> 17, W = W * b & JU | W * h & gU, R ^= W, R = R << 13 | R >>> 19, R = R * 5 + 3864292196) : (c = V[M], c = c * s & JU | c * n & gU, c = c << 15 | c >>> 17, c = c * b & JU | c * h & gU, N ^= c, N = N << 13 | N >>> 19, N = N * 5 + 3864292196);
    switch (W = 0, d) {
      case 3:
        W ^= U[F * 4 + 2] << 16;
      case 2:
        W ^= U[F * 4 + 1] << 8;
      case 1:
        W ^= U[F * 4], W = W * s & JU | W * n & gU, W = W << 15 | W >>> 17, W = W * b & JU | W * h & gU, F & 1 ? R ^= W : N ^= W;
    }
    this.h1 = R, this.h2 = N;
  }
  hexdigest() {
    let l = this.h1, U = this.h2;
    return l ^= U >>> 1, l = l * 3981806797 & JU | l * 36045 & gU, U = U * 4283543511 & JU | ((U << 16 | l >>> 16) * 2950163797 & JU) >>> 16, l ^= U >>> 1, l = l * 444984403 & JU | l * 60499 & gU, U = U * 3301882366 & JU | ((U << 16 | l >>> 16) * 3120437893 & JU) >>> 16, l ^= U >>> 1, (l >>> 0).toString(16).padStart(8, "0") + (U >>> 0).toString(16).padStart(8, "0");
  }
}
const Oc = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var KF, ol, jW, bN;
class KR {
  constructor() {
    i(this, jW);
    i(this, KF, !1);
    i(this, ol, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(l, U) {
    const Z = Q(this, ol).get(l);
    return Z === void 0 ? U : Object.assign(U, Z);
  }
  getRawValue(l) {
    return Q(this, ol).get(l);
  }
  remove(l) {
    if (Q(this, ol).delete(l), Q(this, ol).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const U of Q(this, ol).values())
        if (U instanceof Fl)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(l, U) {
    const Z = Q(this, ol).get(l);
    let F = !1;
    if (Z !== void 0)
      for (const [d, V] of Object.entries(U))
        Z[d] !== V && (F = !0, Z[d] = V);
    else
      F = !0, Q(this, ol).set(l, U);
    F && m(this, jW, bN).call(this), U instanceof Fl && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(U.constructor._type);
  }
  has(l) {
    return Q(this, ol).has(l);
  }
  getAll() {
    return Q(this, ol).size > 0 ? CR(Q(this, ol)) : null;
  }
  setAll(l) {
    for (const [U, Z] of Object.entries(l))
      this.setValue(U, Z);
  }
  get size() {
    return Q(this, ol).size;
  }
  resetModified() {
    Q(this, KF) && (a(this, KF, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new nN(this);
  }
  get serializable() {
    if (Q(this, ol).size === 0)
      return Oc;
    const l = /* @__PURE__ */ new Map(), U = new sN(), Z = [], F = /* @__PURE__ */ Object.create(null);
    let d = !1;
    for (const [V, W] of Q(this, ol)) {
      const c = W instanceof Fl ? W.serialize(!1, F) : W;
      c && (l.set(V, c), U.update(`${V}:${JSON.stringify(c)}`), d || (d = !!c.bitmap));
    }
    if (d)
      for (const V of l.values())
        V.bitmap && Z.push(V.bitmap);
    return l.size > 0 ? {
      map: l,
      hash: U.hexdigest(),
      transfer: Z
    } : Oc;
  }
  get editorStats() {
    let l = null;
    const U = /* @__PURE__ */ new Map();
    for (const Z of Q(this, ol).values()) {
      if (!(Z instanceof Fl))
        continue;
      const F = Z.telemetryFinalData;
      if (!F)
        continue;
      const {
        type: d
      } = F;
      U.has(d) || U.set(d, Object.getPrototypeOf(Z).constructor), l || (l = /* @__PURE__ */ Object.create(null));
      const V = l[d] || (l[d] = /* @__PURE__ */ new Map());
      for (const [W, c] of Object.entries(F)) {
        if (W === "type")
          continue;
        let R = V.get(W);
        R || (R = /* @__PURE__ */ new Map(), V.set(W, R));
        const N = R.get(c) ?? 0;
        R.set(c, N + 1);
      }
    }
    for (const [Z, F] of U)
      l[Z] = F.computeTelemetryFinalData(l[Z]);
    return l;
  }
}
KF = new WeakMap(), ol = new WeakMap(), jW = new WeakSet(), bN = function() {
  Q(this, KF) || (a(this, KF, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var CQ;
class nN extends KR {
  constructor(U) {
    super();
    i(this, CQ);
    const {
      map: Z,
      hash: F,
      transfer: d
    } = U.serializable, V = structuredClone(Z, d ? {
      transfer: d
    } : null);
    a(this, CQ, {
      map: V,
      hash: F,
      transfer: d
    });
  }
  get print() {
    Ql("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return Q(this, CQ);
  }
}
CQ = new WeakMap();
var Z0;
class Pb {
  constructor({
    ownerDocument: l = globalThis.document,
    styleElement: U = null
  }) {
    i(this, Z0, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), Q(this, Z0).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: l,
    _inspectFont: U
  }) {
    if (!(!l || Q(this, Z0).has(l.loadedName))) {
      if (ul(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: Z,
          src: F,
          style: d
        } = l, V = new FontFace(Z, F, d);
        this.addNativeFontFace(V);
        try {
          await V.load(), Q(this, Z0).add(Z), U == null || U(l);
        } catch {
          H(`Cannot load system font: ${l.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(V);
        }
        return;
      }
      Ql("Not implemented: loadSystemFont without the Font Loading API.");
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
      const Z = l.createNativeFontFace();
      if (Z) {
        this.addNativeFontFace(Z);
        try {
          await Z.loaded;
        } catch (F) {
          throw H(`Failed to load font '${Z.family}': '${F}'.`), l.disableFontFace = !0, F;
        }
      }
      return;
    }
    const U = l.createFontFaceRule();
    if (U) {
      if (this.insertRule(U), this.isSyncFontLoadingSupported)
        return;
      await new Promise((Z) => {
        const F = this._queueLoadingCallback(Z);
        this._prepareFontLoadEvent(l, F);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var U;
    const l = !!((U = this._document) != null && U.fonts);
    return _(this, "isFontLoadingAPISupported", l);
  }
  get isSyncFontLoadingSupported() {
    let l = !1;
    return (vl || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (l = !0), _(this, "isSyncFontLoadingSupported", l);
  }
  _queueLoadingCallback(l) {
    function U() {
      for (ul(!F.done, "completeRequest() cannot be called twice."), F.done = !0; Z.length > 0 && Z[0].done; ) {
        const d = Z.shift();
        setTimeout(d.callback, 0);
      }
    }
    const {
      loadingRequests: Z
    } = this, F = {
      done: !1,
      complete: U,
      callback: l
    };
    return Z.push(F), F;
  }
  get _loadTestFont() {
    const l = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return _(this, "_loadTestFont", l);
  }
  _prepareFontLoadEvent(l, U) {
    function Z(Y, B) {
      return Y.charCodeAt(B) << 24 | Y.charCodeAt(B + 1) << 16 | Y.charCodeAt(B + 2) << 8 | Y.charCodeAt(B + 3) & 255;
    }
    function F(Y, B, X, e) {
      const L = Y.substring(0, B), I = Y.substring(B + X);
      return L + e + I;
    }
    let d, V;
    const W = this._document.createElement("canvas");
    W.width = 1, W.height = 1;
    const c = W.getContext("2d");
    let R = 0;
    function N(Y, B) {
      if (++R > 30) {
        H("Load test font never loaded."), B();
        return;
      }
      if (c.font = "30px " + Y, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        B();
        return;
      }
      setTimeout(N.bind(null, Y, B));
    }
    const s = `lt${Date.now()}${this.loadTestFontId++}`;
    let b = this._loadTestFont;
    b = F(b, 976, s.length, s);
    const h = 16, M = 1482184792;
    let G = Z(b, h);
    for (d = 0, V = s.length - 3; d < V; d += 4)
      G = G - M + Z(s, d) | 0;
    d < s.length && (G = G - M + Z(s + "XXX", d) | 0), b = F(b, h, 4, zb(G));
    const J = `url(data:font/opentype;base64,${btoa(b)});`, T = `@font-face {font-family:"${s}";src:${J}}`;
    this.insertRule(T);
    const S = this._document.createElement("div");
    S.style.visibility = "hidden", S.style.width = S.style.height = "10px", S.style.position = "absolute", S.style.top = S.style.left = "0px";
    for (const Y of [l.loadedName, s]) {
      const B = this._document.createElement("span");
      B.textContent = "Hi", B.style.fontFamily = Y, S.append(B);
    }
    this._document.body.append(S), N(s, () => {
      S.remove(), U.complete();
    });
  }
}
Z0 = new WeakMap();
class Ab {
  constructor(l, {
    disableFontFace: U = !1,
    inspectFont: Z = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const F in l)
      this[F] = l[F];
    this.disableFontFace = U === !0, this._inspectFont = Z;
  }
  createNativeFontFace() {
    var U;
    if (!this.data || this.disableFontFace)
      return null;
    let l;
    if (!this.cssFontInfo)
      l = new FontFace(this.loadedName, this.data, {});
    else {
      const Z = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (Z.style = `oblique ${this.cssFontInfo.italicAngle}deg`), l = new FontFace(this.cssFontInfo.fontFamily, this.data, Z);
    }
    return (U = this._inspectFont) == null || U.call(this, this), l;
  }
  createFontFaceRule() {
    var F;
    if (!this.data || this.disableFontFace)
      return null;
    const l = ot(this.data), U = `url(data:${this.mimetype};base64,${btoa(l)});`;
    let Z;
    if (!this.cssFontInfo)
      Z = `@font-face {font-family:"${this.loadedName}";src:${U}}`;
    else {
      let d = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (d += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), Z = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${d}src:${U}}`;
    }
    return (F = this._inspectFont) == null || F.call(this, this, U), Z;
  }
  getPathGenerator(l, U) {
    if (this.compiledGlyphs[U] !== void 0)
      return this.compiledGlyphs[U];
    let Z;
    try {
      Z = l.get(this.loadedName + "_path_" + U);
    } catch (d) {
      H(`getPathGenerator - ignoring character: "${d}".`);
    }
    if (!Array.isArray(Z) || Z.length === 0)
      return this.compiledGlyphs[U] = function(d, V) {
      };
    const F = [];
    for (let d = 0, V = Z.length; d < V; )
      switch (Z[d++]) {
        case tZ.BEZIER_CURVE_TO:
          {
            const [W, c, R, N, s, b] = Z.slice(d, d + 6);
            F.push((n) => n.bezierCurveTo(W, c, R, N, s, b)), d += 6;
          }
          break;
        case tZ.MOVE_TO:
          {
            const [W, c] = Z.slice(d, d + 2);
            F.push((R) => R.moveTo(W, c)), d += 2;
          }
          break;
        case tZ.LINE_TO:
          {
            const [W, c] = Z.slice(d, d + 2);
            F.push((R) => R.lineTo(W, c)), d += 2;
          }
          break;
        case tZ.QUADRATIC_CURVE_TO:
          {
            const [W, c, R, N] = Z.slice(d, d + 4);
            F.push((s) => s.quadraticCurveTo(W, c, R, N)), d += 4;
          }
          break;
        case tZ.RESTORE:
          F.push((W) => W.restore());
          break;
        case tZ.SAVE:
          F.push((W) => W.save());
          break;
        case tZ.SCALE:
          ul(F.length === 2, "Scale command is only valid at the third position.");
          break;
        case tZ.TRANSFORM:
          {
            const [W, c, R, N, s, b] = Z.slice(d, d + 6);
            F.push((n) => n.transform(W, c, R, N, s, b)), d += 6;
          }
          break;
        case tZ.TRANSLATE:
          {
            const [W, c] = Z.slice(d, d + 2);
            F.push((R) => R.translate(W, c)), d += 2;
          }
          break;
      }
    return this.compiledGlyphs[U] = function(V, W) {
      F[0](V), F[1](V), V.scale(W, -W);
      for (let c = 2, R = F.length; c < R; c++)
        F[c](V);
    };
  }
}
if (vl) {
  var rc = Promise.withResolvers(), VQ = null;
  (async () => {
    const l = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    ), U = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    ), Z = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    ), F = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-DYxpcVy9.mjs"
    );
    let d, V;
    return new Map(Object.entries({
      fs: l,
      http: U,
      https: Z,
      url: F,
      canvas: d,
      path2d: V
    }));
  })().then((l) => {
    VQ = l, rc.resolve();
  }, (l) => {
    H(`loadPackages: ${l}`), VQ = /* @__PURE__ */ new Map(), rc.resolve();
  });
}
class RZ {
  static get promise() {
    return rc.promise;
  }
  static get(l) {
    return VQ == null ? void 0 : VQ.get(l);
  }
}
const aN = function(t) {
  return RZ.get("fs").promises.readFile(t).then((U) => new Uint8Array(U));
};
class fb extends Zc {
}
class _b extends YW {
  _createCanvas(l, U) {
    return RZ.get("canvas").createCanvas(l, U);
  }
}
class qb extends Fc {
  _fetchData(l, U) {
    return aN(l).then((Z) => ({
      cMapData: Z,
      compressionType: U
    }));
  }
}
class $b extends dc {
  _fetchData(l) {
    return aN(l);
  }
}
const _l = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function gc(t, l) {
  if (!l)
    return;
  const U = l[2] - l[0], Z = l[3] - l[1], F = new Path2D();
  F.rect(l[0], l[1], U, Z), t.clip(F);
}
class gV {
  constructor() {
    this.constructor === gV && Ql("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    Ql("Abstract method `getPattern` called.");
  }
}
class ln extends gV {
  constructor(l) {
    super(), this._type = l[1], this._bbox = l[2], this._colorStops = l[3], this._p0 = l[4], this._p1 = l[5], this._r0 = l[6], this._r1 = l[7], this.matrix = null;
  }
  _createGradient(l) {
    let U;
    this._type === "axial" ? U = l.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (U = l.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const Z of this._colorStops)
      U.addColorStop(Z[0], Z[1]);
    return U;
  }
  getPattern(l, U, Z, F) {
    let d;
    if (F === _l.STROKE || F === _l.FILL) {
      const V = U.current.getClippedPathBoundingBox(F, nl(l)) || [0, 0, 0, 0], W = Math.ceil(V[2] - V[0]) || 1, c = Math.ceil(V[3] - V[1]) || 1, R = U.cachedCanvases.getCanvas("pattern", W, c, !0), N = R.context;
      N.clearRect(0, 0, N.canvas.width, N.canvas.height), N.beginPath(), N.rect(0, 0, N.canvas.width, N.canvas.height), N.translate(-V[0], -V[1]), Z = o.transform(Z, [1, 0, 0, 1, V[0], V[1]]), N.transform(...U.baseTransform), this.matrix && N.transform(...this.matrix), gc(N, this._bbox), N.fillStyle = this._createGradient(N), N.fill(), d = l.createPattern(R.canvas, "no-repeat");
      const s = new DOMMatrix(Z);
      d.setTransform(s);
    } else
      gc(l, this._bbox), d = this._createGradient(l);
    return d;
  }
}
function bc(t, l, U, Z, F, d, V, W) {
  const c = l.coords, R = l.colors, N = t.data, s = t.width * 4;
  let b;
  c[U + 1] > c[Z + 1] && (b = U, U = Z, Z = b, b = d, d = V, V = b), c[Z + 1] > c[F + 1] && (b = Z, Z = F, F = b, b = V, V = W, W = b), c[U + 1] > c[Z + 1] && (b = U, U = Z, Z = b, b = d, d = V, V = b);
  const n = (c[U] + l.offsetX) * l.scaleX, h = (c[U + 1] + l.offsetY) * l.scaleY, M = (c[Z] + l.offsetX) * l.scaleX, G = (c[Z + 1] + l.offsetY) * l.scaleY, J = (c[F] + l.offsetX) * l.scaleX, T = (c[F + 1] + l.offsetY) * l.scaleY;
  if (h >= T)
    return;
  const S = R[d], Y = R[d + 1], B = R[d + 2], X = R[V], e = R[V + 1], L = R[V + 2], I = R[W], g = R[W + 1], w = R[W + 2], Wl = Math.round(h), z = Math.round(T);
  let C, K, Ul, k, x, xl, TF, SF;
  for (let Jl = Wl; Jl <= z; Jl++) {
    if (Jl < G) {
      const sl = Jl < h ? 0 : (h - Jl) / (h - G);
      C = n - (n - M) * sl, K = S - (S - X) * sl, Ul = Y - (Y - e) * sl, k = B - (B - L) * sl;
    } else {
      let sl;
      Jl > T ? sl = 1 : G === T ? sl = 0 : sl = (G - Jl) / (G - T), C = M - (M - J) * sl, K = X - (X - I) * sl, Ul = e - (e - g) * sl, k = L - (L - w) * sl;
    }
    let u;
    Jl < h ? u = 0 : Jl > T ? u = 1 : u = (h - Jl) / (h - T), x = n - (n - J) * u, xl = S - (S - I) * u, TF = Y - (Y - g) * u, SF = B - (B - w) * u;
    const q = Math.round(Math.min(C, x)), Gl = Math.round(Math.max(C, x));
    let jl = s * Jl + q * 4;
    for (let sl = q; sl <= Gl; sl++)
      u = (C - sl) / (C - x), u < 0 ? u = 0 : u > 1 && (u = 1), N[jl++] = K - (K - xl) * u | 0, N[jl++] = Ul - (Ul - TF) * u | 0, N[jl++] = k - (k - SF) * u | 0, N[jl++] = 255;
  }
}
function Un(t, l, U) {
  const Z = l.coords, F = l.colors;
  let d, V;
  switch (l.type) {
    case "lattice":
      const W = l.verticesPerRow, c = Math.floor(Z.length / W) - 1, R = W - 1;
      for (d = 0; d < c; d++) {
        let N = d * W;
        for (let s = 0; s < R; s++, N++)
          bc(t, U, Z[N], Z[N + 1], Z[N + W], F[N], F[N + 1], F[N + W]), bc(t, U, Z[N + W + 1], Z[N + 1], Z[N + W], F[N + W + 1], F[N + 1], F[N + W]);
      }
      break;
    case "triangles":
      for (d = 0, V = Z.length; d < V; d += 3)
        bc(t, U, Z[d], Z[d + 1], Z[d + 2], F[d], F[d + 1], F[d + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Zn extends gV {
  constructor(l) {
    super(), this._coords = l[2], this._colors = l[3], this._figures = l[4], this._bounds = l[5], this._bbox = l[7], this._background = l[8], this.matrix = null;
  }
  _createMeshCanvas(l, U, Z) {
    const W = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), R = Math.ceil(this._bounds[2]) - W, N = Math.ceil(this._bounds[3]) - c, s = Math.min(Math.ceil(Math.abs(R * l[0] * 1.1)), 3e3), b = Math.min(Math.ceil(Math.abs(N * l[1] * 1.1)), 3e3), n = R / s, h = N / b, M = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -W,
      offsetY: -c,
      scaleX: 1 / n,
      scaleY: 1 / h
    }, G = s + 2 * 2, J = b + 2 * 2, T = Z.getCanvas("mesh", G, J, !1), S = T.context, Y = S.createImageData(s, b);
    if (U) {
      const X = Y.data;
      for (let e = 0, L = X.length; e < L; e += 4)
        X[e] = U[0], X[e + 1] = U[1], X[e + 2] = U[2], X[e + 3] = 255;
    }
    for (const X of this._figures)
      Un(Y, X, M);
    return S.putImageData(Y, 2, 2), {
      canvas: T.canvas,
      offsetX: W - 2 * n,
      offsetY: c - 2 * h,
      scaleX: n,
      scaleY: h
    };
  }
  getPattern(l, U, Z, F) {
    gc(l, this._bbox);
    let d;
    if (F === _l.SHADING)
      d = o.singularValueDecompose2dScale(nl(l));
    else if (d = o.singularValueDecompose2dScale(U.baseTransform), this.matrix) {
      const W = o.singularValueDecompose2dScale(this.matrix);
      d = [d[0] * W[0], d[1] * W[1]];
    }
    const V = this._createMeshCanvas(d, F === _l.SHADING ? null : this._background, U.cachedCanvases);
    return F !== _l.SHADING && (l.setTransform(...U.baseTransform), this.matrix && l.transform(...this.matrix)), l.translate(V.offsetX, V.offsetY), l.scale(V.scaleX, V.scaleY), l.createPattern(V.canvas, "no-repeat");
  }
}
class Fn extends gV {
  getPattern() {
    return "hotpink";
  }
}
function dn(t) {
  switch (t[0]) {
    case "RadialAxial":
      return new ln(t);
    case "Mesh":
      return new Zn(t);
    case "Dummy":
      return new Fn();
  }
  throw new Error(`Unknown IR type: ${t[0]}`);
}
const ct = {
  COLORED: 1,
  UNCOLORED: 2
}, OW = class OW {
  constructor(l, U, Z, F, d) {
    this.operatorList = l[2], this.matrix = l[3], this.bbox = l[4], this.xstep = l[5], this.ystep = l[6], this.paintType = l[7], this.tilingType = l[8], this.color = U, this.ctx = Z, this.canvasGraphicsFactory = F, this.baseTransform = d;
  }
  createPatternCanvas(l) {
    const U = this.operatorList, Z = this.bbox, F = this.xstep, d = this.ystep, V = this.paintType, W = this.tilingType, c = this.color, R = this.canvasGraphicsFactory;
    $W("TilingType: " + W);
    const N = Z[0], s = Z[1], b = Z[2], n = Z[3], h = o.singularValueDecompose2dScale(this.matrix), M = o.singularValueDecompose2dScale(this.baseTransform), G = [h[0] * M[0], h[1] * M[1]], J = this.getSizeAndScale(F, this.ctx.canvas.width, G[0]), T = this.getSizeAndScale(d, this.ctx.canvas.height, G[1]), S = l.cachedCanvases.getCanvas("pattern", J.size, T.size, !0), Y = S.context, B = R.createCanvasGraphics(Y);
    B.groupLevel = l.groupLevel, this.setFillAndStrokeStyleToContext(B, V, c);
    let X = N, e = s, L = b, I = n;
    return N < 0 && (X = 0, L += Math.abs(N)), s < 0 && (e = 0, I += Math.abs(s)), Y.translate(-(J.scale * X), -(T.scale * e)), B.transform(J.scale, 0, 0, T.scale, 0, 0), Y.save(), this.clipBbox(B, X, e, L, I), B.baseTransform = nl(B.ctx), B.executeOperatorList(U), B.endDrawing(), {
      canvas: S.canvas,
      scaleX: J.scale,
      scaleY: T.scale,
      offsetX: X,
      offsetY: e
    };
  }
  getSizeAndScale(l, U, Z) {
    l = Math.abs(l);
    const F = Math.max(OW.MAX_PATTERN_SIZE, U);
    let d = Math.ceil(l * Z);
    return d >= F ? d = F : Z = d / l, {
      scale: Z,
      size: d
    };
  }
  clipBbox(l, U, Z, F, d) {
    const V = F - U, W = d - Z;
    l.ctx.rect(U, Z, V, W), l.current.updateRectMinMax(nl(l.ctx), [U, Z, F, d]), l.clip(), l.endPath();
  }
  setFillAndStrokeStyleToContext(l, U, Z) {
    const F = l.ctx, d = l.current;
    switch (U) {
      case ct.COLORED:
        const V = this.ctx;
        F.fillStyle = V.fillStyle, F.strokeStyle = V.strokeStyle, d.fillColor = V.fillStyle, d.strokeColor = V.strokeStyle;
        break;
      case ct.UNCOLORED:
        const W = o.makeHexColor(Z[0], Z[1], Z[2]);
        F.fillStyle = W, F.strokeStyle = W, d.fillColor = W, d.strokeColor = W;
        break;
      default:
        throw new yb(`Unsupported paint type: ${U}`);
    }
  }
  getPattern(l, U, Z, F) {
    let d = Z;
    F !== _l.SHADING && (d = o.transform(d, U.baseTransform), this.matrix && (d = o.transform(d, this.matrix)));
    const V = this.createPatternCanvas(U);
    let W = new DOMMatrix(d);
    W = W.translate(V.offsetX, V.offsetY), W = W.scale(1 / V.scaleX, 1 / V.scaleY);
    const c = l.createPattern(V.canvas, "repeat");
    return c.setTransform(W), c;
  }
};
r(OW, "MAX_PATTERN_SIZE", 3e3);
let Kc = OW;
function Qn({
  src: t,
  srcPos: l = 0,
  dest: U,
  width: Z,
  height: F,
  nonBlackColor: d = 4294967295,
  inverseDecode: V = !1
}) {
  const W = dU.isLittleEndian ? 4278190080 : 255, [c, R] = V ? [d, W] : [W, d], N = Z >> 3, s = Z & 7, b = t.length;
  U = new Uint32Array(U.buffer);
  let n = 0;
  for (let h = 0; h < F; h++) {
    for (const G = l + N; l < G; l++) {
      const J = l < b ? t[l] : 255;
      U[n++] = J & 128 ? R : c, U[n++] = J & 64 ? R : c, U[n++] = J & 32 ? R : c, U[n++] = J & 16 ? R : c, U[n++] = J & 8 ? R : c, U[n++] = J & 4 ? R : c, U[n++] = J & 2 ? R : c, U[n++] = J & 1 ? R : c;
    }
    if (s === 0)
      continue;
    const M = l < b ? t[l++] : 255;
    for (let G = 0; G < s; G++)
      U[n++] = M & 1 << 7 - G ? R : c;
  }
  return {
    srcPos: l,
    destPos: n
  };
}
const Rt = 16, tt = 100, Vn = 15, Nt = 10, st = 1e3, FU = 16;
function Wn(t, l) {
  if (t._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  t.__originalSave = t.save, t.__originalRestore = t.restore, t.__originalRotate = t.rotate, t.__originalScale = t.scale, t.__originalTranslate = t.translate, t.__originalTransform = t.transform, t.__originalSetTransform = t.setTransform, t.__originalResetTransform = t.resetTransform, t.__originalClip = t.clip, t.__originalMoveTo = t.moveTo, t.__originalLineTo = t.lineTo, t.__originalBezierCurveTo = t.bezierCurveTo, t.__originalRect = t.rect, t.__originalClosePath = t.closePath, t.__originalBeginPath = t.beginPath, t._removeMirroring = () => {
    t.save = t.__originalSave, t.restore = t.__originalRestore, t.rotate = t.__originalRotate, t.scale = t.__originalScale, t.translate = t.__originalTranslate, t.transform = t.__originalTransform, t.setTransform = t.__originalSetTransform, t.resetTransform = t.__originalResetTransform, t.clip = t.__originalClip, t.moveTo = t.__originalMoveTo, t.lineTo = t.__originalLineTo, t.bezierCurveTo = t.__originalBezierCurveTo, t.rect = t.__originalRect, t.closePath = t.__originalClosePath, t.beginPath = t.__originalBeginPath, delete t._removeMirroring;
  }, t.save = function() {
    l.save(), this.__originalSave();
  }, t.restore = function() {
    l.restore(), this.__originalRestore();
  }, t.translate = function(Z, F) {
    l.translate(Z, F), this.__originalTranslate(Z, F);
  }, t.scale = function(Z, F) {
    l.scale(Z, F), this.__originalScale(Z, F);
  }, t.transform = function(Z, F, d, V, W, c) {
    l.transform(Z, F, d, V, W, c), this.__originalTransform(Z, F, d, V, W, c);
  }, t.setTransform = function(Z, F, d, V, W, c) {
    l.setTransform(Z, F, d, V, W, c), this.__originalSetTransform(Z, F, d, V, W, c);
  }, t.resetTransform = function() {
    l.resetTransform(), this.__originalResetTransform();
  }, t.rotate = function(Z) {
    l.rotate(Z), this.__originalRotate(Z);
  }, t.clip = function(Z) {
    l.clip(Z), this.__originalClip(Z);
  }, t.moveTo = function(U, Z) {
    l.moveTo(U, Z), this.__originalMoveTo(U, Z);
  }, t.lineTo = function(U, Z) {
    l.lineTo(U, Z), this.__originalLineTo(U, Z);
  }, t.bezierCurveTo = function(U, Z, F, d, V, W) {
    l.bezierCurveTo(U, Z, F, d, V, W), this.__originalBezierCurveTo(U, Z, F, d, V, W);
  }, t.rect = function(U, Z, F, d) {
    l.rect(U, Z, F, d), this.__originalRect(U, Z, F, d);
  }, t.closePath = function() {
    l.closePath(), this.__originalClosePath();
  }, t.beginPath = function() {
    l.beginPath(), this.__originalBeginPath();
  };
}
class cn {
  constructor(l) {
    this.canvasFactory = l, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(l, U, Z) {
    let F;
    return this.cache[l] !== void 0 ? (F = this.cache[l], this.canvasFactory.reset(F, U, Z)) : (F = this.canvasFactory.create(U, Z), this.cache[l] = F), F;
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
function HV(t, l, U, Z, F, d, V, W, c, R) {
  const [N, s, b, n, h, M] = nl(t);
  if (s === 0 && b === 0) {
    const T = V * N + h, S = Math.round(T), Y = W * n + M, B = Math.round(Y), X = (V + c) * N + h, e = Math.abs(Math.round(X) - S) || 1, L = (W + R) * n + M, I = Math.abs(Math.round(L) - B) || 1;
    return t.setTransform(Math.sign(N), 0, 0, Math.sign(n), S, B), t.drawImage(l, U, Z, F, d, 0, 0, e, I), t.setTransform(N, s, b, n, h, M), [e, I];
  }
  if (N === 0 && n === 0) {
    const T = W * b + h, S = Math.round(T), Y = V * s + M, B = Math.round(Y), X = (W + R) * b + h, e = Math.abs(Math.round(X) - S) || 1, L = (V + c) * s + M, I = Math.abs(Math.round(L) - B) || 1;
    return t.setTransform(0, Math.sign(s), Math.sign(b), 0, S, B), t.drawImage(l, U, Z, F, d, 0, 0, I, e), t.setTransform(N, s, b, n, h, M), [I, e];
  }
  t.drawImage(l, U, Z, F, d, V, W, c, R);
  const G = Math.hypot(N, s), J = Math.hypot(b, n);
  return [G * c, J * R];
}
function Rn(t) {
  const {
    width: l,
    height: U
  } = t;
  if (l > st || U > st)
    return null;
  const Z = 1e3, F = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), d = l + 1;
  let V = new Uint8Array(d * (U + 1)), W, c, R;
  const N = l + 7 & -8;
  let s = new Uint8Array(N * U), b = 0;
  for (const J of t.data) {
    let T = 128;
    for (; T > 0; )
      s[b++] = J & T ? 0 : 255, T >>= 1;
  }
  let n = 0;
  for (b = 0, s[b] !== 0 && (V[0] = 1, ++n), c = 1; c < l; c++)
    s[b] !== s[b + 1] && (V[c] = s[b] ? 2 : 1, ++n), b++;
  for (s[b] !== 0 && (V[c] = 2, ++n), W = 1; W < U; W++) {
    b = W * N, R = W * d, s[b - N] !== s[b] && (V[R] = s[b] ? 1 : 8, ++n);
    let J = (s[b] ? 4 : 0) + (s[b - N] ? 8 : 0);
    for (c = 1; c < l; c++)
      J = (J >> 2) + (s[b + 1] ? 4 : 0) + (s[b - N + 1] ? 8 : 0), F[J] && (V[R + c] = F[J], ++n), b++;
    if (s[b - N] !== s[b] && (V[R + c] = s[b] ? 2 : 4, ++n), n > Z)
      return null;
  }
  for (b = N * (U - 1), R = W * d, s[b] !== 0 && (V[R] = 8, ++n), c = 1; c < l; c++)
    s[b] !== s[b + 1] && (V[R + c] = s[b] ? 4 : 8, ++n), b++;
  if (s[b] !== 0 && (V[R + c] = 4, ++n), n > Z)
    return null;
  const h = new Int32Array([0, d, -1, 0, -d, 0, 0, 0, 1]), M = new Path2D();
  for (W = 0; n && W <= U; W++) {
    let J = W * d;
    const T = J + l;
    for (; J < T && !V[J]; )
      J++;
    if (J === T)
      continue;
    M.moveTo(J % d, W);
    const S = J;
    let Y = V[J];
    do {
      const B = h[Y];
      do
        J += B;
      while (!V[J]);
      const X = V[J];
      X !== 5 && X !== 10 ? (Y = X, V[J] = 0) : (Y = X & 51 * Y >> 4, V[J] &= Y >> 2 | Y << 2), M.lineTo(J % d, J / d | 0), V[J] || --n;
    } while (S !== J);
    --W;
  }
  return s = null, V = null, function(J) {
    J.save(), J.scale(1 / l, -1 / U), J.translate(0, -U), J.fill(M), J.beginPath(), J.restore();
  };
}
class bt {
  constructor(l, U) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = kt, this.textMatrixScale = 1, this.fontMatrix = mc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = Ol.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, l, U]);
  }
  clone() {
    const l = Object.create(this);
    return l.clipBox = this.clipBox.slice(), l;
  }
  setCurrentPoint(l, U) {
    this.x = l, this.y = U;
  }
  updatePathMinMax(l, U, Z) {
    [U, Z] = o.applyTransform([U, Z], l), this.minX = Math.min(this.minX, U), this.minY = Math.min(this.minY, Z), this.maxX = Math.max(this.maxX, U), this.maxY = Math.max(this.maxY, Z);
  }
  updateRectMinMax(l, U) {
    const Z = o.applyTransform(U, l), F = o.applyTransform(U.slice(2), l), d = o.applyTransform([U[0], U[3]], l), V = o.applyTransform([U[2], U[1]], l);
    this.minX = Math.min(this.minX, Z[0], F[0], d[0], V[0]), this.minY = Math.min(this.minY, Z[1], F[1], d[1], V[1]), this.maxX = Math.max(this.maxX, Z[0], F[0], d[0], V[0]), this.maxY = Math.max(this.maxY, Z[1], F[1], d[1], V[1]);
  }
  updateScalingPathMinMax(l, U) {
    o.scaleMinMax(l, U), this.minX = Math.min(this.minX, U[0]), this.minY = Math.min(this.minY, U[1]), this.maxX = Math.max(this.maxX, U[2]), this.maxY = Math.max(this.maxY, U[3]);
  }
  updateCurvePathMinMax(l, U, Z, F, d, V, W, c, R, N) {
    const s = o.bezierBoundingBox(U, Z, F, d, V, W, c, R, N);
    N || this.updateRectMinMax(l, s);
  }
  getPathBoundingBox(l = _l.FILL, U = null) {
    const Z = [this.minX, this.minY, this.maxX, this.maxY];
    if (l === _l.STROKE) {
      U || Ql("Stroke bounding box must include transform.");
      const F = o.singularValueDecompose2dScale(U), d = F[0] * this.lineWidth / 2, V = F[1] * this.lineWidth / 2;
      Z[0] -= d, Z[1] -= V, Z[2] += d, Z[3] += V;
    }
    return Z;
  }
  updateClipFromPath() {
    const l = o.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(l || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(l) {
    this.clipBox = l, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(l = _l.FILL, U = null) {
    return o.intersect(this.clipBox, this.getPathBoundingBox(l, U));
  }
}
function nt(t, l) {
  if (typeof ImageData < "u" && l instanceof ImageData) {
    t.putImageData(l, 0, 0);
    return;
  }
  const U = l.height, Z = l.width, F = U % FU, d = (U - F) / FU, V = F === 0 ? d : d + 1, W = t.createImageData(Z, FU);
  let c = 0, R;
  const N = l.data, s = W.data;
  let b, n, h, M;
  if (l.kind === qV.GRAYSCALE_1BPP) {
    const G = N.byteLength, J = new Uint32Array(s.buffer, 0, s.byteLength >> 2), T = J.length, S = Z + 7 >> 3, Y = 4294967295, B = dU.isLittleEndian ? 4278190080 : 255;
    for (b = 0; b < V; b++) {
      for (h = b < d ? FU : F, R = 0, n = 0; n < h; n++) {
        const X = G - c;
        let e = 0;
        const L = X > S ? Z : X * 8 - 7, I = L & -8;
        let g = 0, w = 0;
        for (; e < I; e += 8)
          w = N[c++], J[R++] = w & 128 ? Y : B, J[R++] = w & 64 ? Y : B, J[R++] = w & 32 ? Y : B, J[R++] = w & 16 ? Y : B, J[R++] = w & 8 ? Y : B, J[R++] = w & 4 ? Y : B, J[R++] = w & 2 ? Y : B, J[R++] = w & 1 ? Y : B;
        for (; e < L; e++)
          g === 0 && (w = N[c++], g = 128), J[R++] = w & g ? Y : B, g >>= 1;
      }
      for (; R < T; )
        J[R++] = 0;
      t.putImageData(W, 0, b * FU);
    }
  } else if (l.kind === qV.RGBA_32BPP) {
    for (n = 0, M = Z * FU * 4, b = 0; b < d; b++)
      s.set(N.subarray(c, c + M)), c += M, t.putImageData(W, 0, n), n += FU;
    b < V && (M = Z * F * 4, s.set(N.subarray(c, c + M)), t.putImageData(W, 0, n));
  } else if (l.kind === qV.RGB_24BPP)
    for (h = FU, M = Z * h, b = 0; b < V; b++) {
      for (b >= d && (h = F, M = Z * h), R = 0, n = M; n--; )
        s[R++] = N[c++], s[R++] = N[c++], s[R++] = N[c++], s[R++] = 255;
      t.putImageData(W, 0, b * FU);
    }
  else
    throw new Error(`bad image kind: ${l.kind}`);
}
function at(t, l) {
  if (l.bitmap) {
    t.drawImage(l.bitmap, 0, 0);
    return;
  }
  const U = l.height, Z = l.width, F = U % FU, d = (U - F) / FU, V = F === 0 ? d : d + 1, W = t.createImageData(Z, FU);
  let c = 0;
  const R = l.data, N = W.data;
  for (let s = 0; s < V; s++) {
    const b = s < d ? FU : F;
    ({
      srcPos: c
    } = Qn({
      src: R,
      srcPos: c,
      dest: N,
      width: Z,
      height: b,
      nonBlackColor: 0
    })), t.putImageData(W, 0, s * FU);
  }
}
function O0(t, l) {
  const U = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const Z of U)
    t[Z] !== void 0 && (l[Z] = t[Z]);
  t.setLineDash !== void 0 && (l.setLineDash(t.getLineDash()), l.lineDashOffset = t.lineDashOffset);
}
function vV(t) {
  if (t.strokeStyle = t.fillStyle = "#000000", t.fillRule = "nonzero", t.globalAlpha = 1, t.lineWidth = 1, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 10, t.globalCompositeOperation = "source-over", t.font = "10px sans-serif", t.setLineDash !== void 0 && (t.setLineDash([]), t.lineDashOffset = 0), !vl) {
    const {
      filter: l
    } = t;
    l !== "none" && l !== "" && (t.filter = "none");
  }
}
function ht(t, l) {
  if (l)
    return !0;
  const U = o.singularValueDecompose2dScale(t);
  U[0] = Math.fround(U[0]), U[1] = Math.fround(U[1]);
  const Z = Math.fround((globalThis.devicePixelRatio || 1) * iF.PDF_TO_CSS_UNITS);
  return U[0] <= Z && U[1] <= Z;
}
const tn = ["butt", "round", "square"], Nn = ["miter", "round", "bevel"], sn = {}, mt = {};
var JF, Hc, vc;
const fR = class fR {
  constructor(l, U, Z, F, d, {
    optionalContentConfig: V,
    markedContentStack: W = null
  }, c, R) {
    i(this, JF);
    this.ctx = l, this.current = new bt(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = U, this.objs = Z, this.canvasFactory = F, this.filterFactory = d, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = W || [], this.optionalContentConfig = V, this.cachedCanvases = new cn(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = R, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(l, U = null) {
    return typeof l == "string" ? l.startsWith("g_") ? this.commonObjs.get(l) : this.objs.get(l) : U;
  }
  beginDrawing({
    transform: l,
    viewport: U,
    transparency: Z = !1,
    background: F = null
  }) {
    const d = this.ctx.canvas.width, V = this.ctx.canvas.height, W = this.ctx.fillStyle;
    if (this.ctx.fillStyle = F || "#ffffff", this.ctx.fillRect(0, 0, d, V), this.ctx.fillStyle = W, Z) {
      const c = this.cachedCanvases.getCanvas("transparent", d, V);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(...nl(this.compositeCtx));
    }
    this.ctx.save(), vV(this.ctx), l && (this.ctx.transform(...l), this.outputScaleX = l[0], this.outputScaleY = l[0]), this.ctx.transform(...U.transform), this.viewportScale = U.scale, this.baseTransform = nl(this.ctx);
  }
  executeOperatorList(l, U, Z, F) {
    const d = l.argsArray, V = l.fnArray;
    let W = U || 0;
    const c = d.length;
    if (c === W)
      return W;
    const R = c - W > Nt && typeof Z == "function", N = R ? Date.now() + Vn : 0;
    let s = 0;
    const b = this.commonObjs, n = this.objs;
    let h;
    for (; ; ) {
      if (F !== void 0 && W === F.nextBreakPoint)
        return F.breakIt(W, Z), W;
      if (h = V[W], h !== yU.dependency)
        this[h].apply(this, d[W]);
      else
        for (const M of d[W]) {
          const G = M.startsWith("g_") ? b : n;
          if (!G.has(M))
            return G.get(M, Z), W;
        }
      if (W++, W === c)
        return W;
      if (R && ++s > Nt) {
        if (Date.now() > N)
          return Z(), W;
        s = 0;
      }
    }
  }
  endDrawing() {
    m(this, JF, Hc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const l of this._cachedBitmapsMap.values()) {
      for (const U of l.values())
        typeof HTMLCanvasElement < "u" && U instanceof HTMLCanvasElement && (U.width = U.height = 0);
      l.clear();
    }
    this._cachedBitmapsMap.clear(), m(this, JF, vc).call(this);
  }
  _scaleImage(l, U) {
    const Z = l.width, F = l.height;
    let d = Math.max(Math.hypot(U[0], U[1]), 1), V = Math.max(Math.hypot(U[2], U[3]), 1), W = Z, c = F, R = "prescale1", N, s;
    for (; d > 2 && W > 1 || V > 2 && c > 1; ) {
      let b = W, n = c;
      d > 2 && W > 1 && (b = W >= 16384 ? Math.floor(W / 2) - 1 || 1 : Math.ceil(W / 2), d /= W / b), V > 2 && c > 1 && (n = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, V /= c / n), N = this.cachedCanvases.getCanvas(R, b, n), s = N.context, s.clearRect(0, 0, b, n), s.drawImage(l, 0, 0, W, c, 0, 0, b, n), l = N.canvas, W = b, c = n, R = R === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: l,
      paintWidth: W,
      paintHeight: c
    };
  }
  _createMaskCanvas(l) {
    const U = this.ctx, {
      width: Z,
      height: F
    } = l, d = this.current.fillColor, V = this.current.patternFill, W = nl(U);
    let c, R, N, s;
    if ((l.bitmap || l.data) && l.count > 1) {
      const L = l.bitmap || l.data.buffer;
      R = JSON.stringify(V ? W : [W.slice(0, 4), d]), c = this._cachedBitmapsMap.get(L), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(L, c));
      const I = c.get(R);
      if (I && !V) {
        const g = Math.round(Math.min(W[0], W[2]) + W[4]), w = Math.round(Math.min(W[1], W[3]) + W[5]);
        return {
          canvas: I,
          offsetX: g,
          offsetY: w
        };
      }
      N = I;
    }
    N || (s = this.cachedCanvases.getCanvas("maskCanvas", Z, F), at(s.context, l));
    let b = o.transform(W, [1 / Z, 0, 0, -1 / F, 0, 0]);
    b = o.transform(b, [1, 0, 0, 1, 0, -F]);
    const [n, h, M, G] = o.getAxialAlignedBoundingBox([0, 0, Z, F], b), J = Math.round(M - n) || 1, T = Math.round(G - h) || 1, S = this.cachedCanvases.getCanvas("fillCanvas", J, T), Y = S.context, B = n, X = h;
    Y.translate(-B, -X), Y.transform(...b), N || (N = this._scaleImage(s.canvas, NZ(Y)), N = N.img, c && V && c.set(R, N)), Y.imageSmoothingEnabled = ht(nl(Y), l.interpolate), HV(Y, N, 0, 0, N.width, N.height, 0, 0, Z, F), Y.globalCompositeOperation = "source-in";
    const e = o.transform(NZ(Y), [1, 0, 0, 1, -B, -X]);
    return Y.fillStyle = V ? d.getPattern(U, this, e, _l.FILL) : d, Y.fillRect(0, 0, Z, F), c && !V && (this.cachedCanvases.delete("fillCanvas"), c.set(R, S.canvas)), {
      canvas: S.canvas,
      offsetX: Math.round(B),
      offsetY: Math.round(X)
    };
  }
  setLineWidth(l) {
    l !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = l, this.ctx.lineWidth = l;
  }
  setLineCap(l) {
    this.ctx.lineCap = tn[l];
  }
  setLineJoin(l) {
    this.ctx.lineJoin = Nn[l];
  }
  setMiterLimit(l) {
    this.ctx.miterLimit = l;
  }
  setDash(l, U) {
    const Z = this.ctx;
    Z.setLineDash !== void 0 && (Z.setLineDash(l), Z.lineDashOffset = U);
  }
  setRenderingIntent(l) {
  }
  setFlatness(l) {
  }
  setGState(l) {
    for (const [U, Z] of l)
      switch (U) {
        case "LW":
          this.setLineWidth(Z);
          break;
        case "LC":
          this.setLineCap(Z);
          break;
        case "LJ":
          this.setLineJoin(Z);
          break;
        case "ML":
          this.setMiterLimit(Z);
          break;
        case "D":
          this.setDash(Z[0], Z[1]);
          break;
        case "RI":
          this.setRenderingIntent(Z);
          break;
        case "FL":
          this.setFlatness(Z);
          break;
        case "Font":
          this.setFont(Z[0], Z[1]);
          break;
        case "CA":
          this.current.strokeAlpha = Z;
          break;
        case "ca":
          this.current.fillAlpha = Z, this.ctx.globalAlpha = Z;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = Z;
          break;
        case "SMask":
          this.current.activeSMask = Z ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(Z);
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
    const l = this.ctx.canvas.width, U = this.ctx.canvas.height, Z = "smaskGroupAt" + this.groupLevel, F = this.cachedCanvases.getCanvas(Z, l, U);
    this.suspendedCtx = this.ctx, this.ctx = F.context;
    const d = this.ctx;
    d.setTransform(...nl(this.suspendedCtx)), O0(this.suspendedCtx, d), Wn(d, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), O0(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(l) {
    if (!this.current.activeSMask)
      return;
    l ? (l[0] = Math.floor(l[0]), l[1] = Math.floor(l[1]), l[2] = Math.ceil(l[2]), l[3] = Math.ceil(l[3])) : l = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const U = this.current.activeSMask, Z = this.suspendedCtx;
    this.composeSMask(Z, U, this.ctx, l), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(l, U, Z, F) {
    const d = F[0], V = F[1], W = F[2] - d, c = F[3] - V;
    W === 0 || c === 0 || (this.genericComposeSMask(U.context, Z, W, c, U.subtype, U.backdrop, U.transferMap, d, V, U.offsetX, U.offsetY), l.save(), l.globalAlpha = 1, l.globalCompositeOperation = "source-over", l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(Z.canvas, 0, 0), l.restore());
  }
  genericComposeSMask(l, U, Z, F, d, V, W, c, R, N, s) {
    let b = l.canvas, n = c - N, h = R - s;
    if (V) {
      if (n < 0 || h < 0 || n + Z > b.width || h + F > b.height) {
        const G = this.cachedCanvases.getCanvas("maskExtension", Z, F), J = G.context;
        J.drawImage(b, -n, -h), V.some((T) => T !== 0) && (J.globalCompositeOperation = "destination-atop", J.fillStyle = o.makeHexColor(...V), J.fillRect(0, 0, Z, F), J.globalCompositeOperation = "source-over"), b = G.canvas, n = h = 0;
      } else if (V.some((G) => G !== 0)) {
        l.save(), l.globalAlpha = 1, l.setTransform(1, 0, 0, 1, 0, 0);
        const G = new Path2D();
        G.rect(n, h, Z, F), l.clip(G), l.globalCompositeOperation = "destination-atop", l.fillStyle = o.makeHexColor(...V), l.fillRect(n, h, Z, F), l.restore();
      }
    }
    U.save(), U.globalAlpha = 1, U.setTransform(1, 0, 0, 1, 0, 0), d === "Alpha" && W ? U.filter = this.filterFactory.addAlphaFilter(W) : d === "Luminosity" && (U.filter = this.filterFactory.addLuminosityFilter(W));
    const M = new Path2D();
    M.rect(c, R, Z, F), U.clip(M), U.globalCompositeOperation = "destination-in", U.drawImage(b, n, h, Z, F, c, R, Z, F), U.restore();
  }
  save() {
    this.inSMaskMode ? (O0(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const l = this.current;
    this.stateStack.push(l), this.current = l.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), O0(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(l, U, Z, F, d, V) {
    this.ctx.transform(l, U, Z, F, d, V), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(l, U, Z) {
    const F = this.ctx, d = this.current;
    let V = d.x, W = d.y, c, R;
    const N = nl(F), s = N[0] === 0 && N[3] === 0 || N[1] === 0 && N[2] === 0, b = s ? Z.slice(0) : null;
    for (let n = 0, h = 0, M = l.length; n < M; n++)
      switch (l[n] | 0) {
        case yU.rectangle:
          V = U[h++], W = U[h++];
          const G = U[h++], J = U[h++], T = V + G, S = W + J;
          F.moveTo(V, W), G === 0 || J === 0 ? F.lineTo(T, S) : (F.lineTo(T, W), F.lineTo(T, S), F.lineTo(V, S)), s || d.updateRectMinMax(N, [V, W, T, S]), F.closePath();
          break;
        case yU.moveTo:
          V = U[h++], W = U[h++], F.moveTo(V, W), s || d.updatePathMinMax(N, V, W);
          break;
        case yU.lineTo:
          V = U[h++], W = U[h++], F.lineTo(V, W), s || d.updatePathMinMax(N, V, W);
          break;
        case yU.curveTo:
          c = V, R = W, V = U[h + 4], W = U[h + 5], F.bezierCurveTo(U[h], U[h + 1], U[h + 2], U[h + 3], V, W), d.updateCurvePathMinMax(N, c, R, U[h], U[h + 1], U[h + 2], U[h + 3], V, W, b), h += 6;
          break;
        case yU.curveTo2:
          c = V, R = W, F.bezierCurveTo(V, W, U[h], U[h + 1], U[h + 2], U[h + 3]), d.updateCurvePathMinMax(N, c, R, V, W, U[h], U[h + 1], U[h + 2], U[h + 3], b), V = U[h + 2], W = U[h + 3], h += 4;
          break;
        case yU.curveTo3:
          c = V, R = W, V = U[h + 2], W = U[h + 3], F.bezierCurveTo(U[h], U[h + 1], V, W, V, W), d.updateCurvePathMinMax(N, c, R, U[h], U[h + 1], V, W, V, W, b), h += 4;
          break;
        case yU.closePath:
          F.closePath();
          break;
      }
    s && d.updateScalingPathMinMax(N, b), d.setCurrentPoint(V, W);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(l = !0) {
    const U = this.ctx, Z = this.current.strokeColor;
    U.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof Z == "object" && (Z != null && Z.getPattern) ? (U.save(), U.strokeStyle = Z.getPattern(U, this, NZ(U), _l.STROKE), this.rescaleAndStroke(!1), U.restore()) : this.rescaleAndStroke(!0)), l && this.consumePath(this.current.getClippedPathBoundingBox()), U.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(l = !0) {
    const U = this.ctx, Z = this.current.fillColor, F = this.current.patternFill;
    let d = !1;
    F && (U.save(), U.fillStyle = Z.getPattern(U, this, NZ(U), _l.FILL), d = !0);
    const V = this.current.getClippedPathBoundingBox();
    this.contentVisible && V !== null && (this.pendingEOFill ? (U.fill("evenodd"), this.pendingEOFill = !1) : U.fill()), d && U.restore(), l && this.consumePath(V);
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
    this.pendingClip = sn;
  }
  eoClip() {
    this.pendingClip = mt;
  }
  beginText() {
    this.current.textMatrix = kt, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const l = this.pendingTextPaths, U = this.ctx;
    if (l === void 0) {
      U.beginPath();
      return;
    }
    U.save(), U.beginPath();
    for (const Z of l)
      U.setTransform(...Z.transform), U.translate(Z.x, Z.y), Z.addToPath(U, Z.fontSize);
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
    const Z = this.commonObjs.get(l), F = this.current;
    if (!Z)
      throw new Error(`Can't find font for ${l}`);
    if (F.fontMatrix = Z.fontMatrix || mc, (F.fontMatrix[0] === 0 || F.fontMatrix[3] === 0) && H("Invalid font matrix for font " + l), U < 0 ? (U = -U, F.fontDirection = -1) : F.fontDirection = 1, this.current.font = Z, this.current.fontSize = U, Z.isType3Font)
      return;
    const d = Z.loadedName || "sans-serif", V = ((N = Z.systemFontInfo) == null ? void 0 : N.css) || `"${d}", ${Z.fallbackName}`;
    let W = "normal";
    Z.black ? W = "900" : Z.bold && (W = "bold");
    const c = Z.italic ? "italic" : "normal";
    let R = U;
    U < Rt ? R = Rt : U > tt && (R = tt), this.current.fontSizeScale = U / R, this.ctx.font = `${c} ${W} ${R}px ${V}`;
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
  setTextMatrix(l, U, Z, F, d, V) {
    this.current.textMatrix = [l, U, Z, F, d, V], this.current.textMatrixScale = Math.hypot(l, U), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(l, U, Z, F) {
    const d = this.ctx, V = this.current, W = V.font, c = V.textRenderingMode, R = V.fontSize / V.fontSizeScale, N = c & Ol.FILL_STROKE_MASK, s = !!(c & Ol.ADD_TO_PATH_FLAG), b = V.patternFill && !W.missingFile;
    let n;
    (W.disableFontFace || s || b) && (n = W.getPathGenerator(this.commonObjs, l)), W.disableFontFace || b ? (d.save(), d.translate(U, Z), d.beginPath(), n(d, R), F && d.setTransform(...F), (N === Ol.FILL || N === Ol.FILL_STROKE) && d.fill(), (N === Ol.STROKE || N === Ol.FILL_STROKE) && d.stroke(), d.restore()) : ((N === Ol.FILL || N === Ol.FILL_STROKE) && d.fillText(l, U, Z), (N === Ol.STROKE || N === Ol.FILL_STROKE) && d.strokeText(l, U, Z)), s && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: nl(d),
      x: U,
      y: Z,
      fontSize: R,
      addToPath: n
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: l
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    l.scale(1.5, 1), l.fillText("I", 0, 10);
    const U = l.getImageData(0, 0, 10, 10).data;
    let Z = !1;
    for (let F = 3; F < U.length; F += 4)
      if (U[F] > 0 && U[F] < 255) {
        Z = !0;
        break;
      }
    return _(this, "isFontSubpixelAAEnabled", Z);
  }
  showText(l) {
    const U = this.current, Z = U.font;
    if (Z.isType3Font)
      return this.showType3Text(l);
    const F = U.fontSize;
    if (F === 0)
      return;
    const d = this.ctx, V = U.fontSizeScale, W = U.charSpacing, c = U.wordSpacing, R = U.fontDirection, N = U.textHScale * R, s = l.length, b = Z.vertical, n = b ? 1 : -1, h = Z.defaultVMetrics, M = F * U.fontMatrix[0], G = U.textRenderingMode === Ol.FILL && !Z.disableFontFace && !U.patternFill;
    d.save(), d.transform(...U.textMatrix), d.translate(U.x, U.y + U.textRise), R > 0 ? d.scale(N, -1) : d.scale(N, 1);
    let J;
    if (U.patternFill) {
      d.save();
      const X = U.fillColor.getPattern(d, this, NZ(d), _l.FILL);
      J = nl(d), d.restore(), d.fillStyle = X;
    }
    let T = U.lineWidth;
    const S = U.textMatrixScale;
    if (S === 0 || T === 0) {
      const X = U.textRenderingMode & Ol.FILL_STROKE_MASK;
      (X === Ol.STROKE || X === Ol.FILL_STROKE) && (T = this.getSinglePixelWidth());
    } else
      T /= S;
    if (V !== 1 && (d.scale(V, V), T /= V), d.lineWidth = T, Z.isInvalidPDFjsFont) {
      const X = [];
      let e = 0;
      for (const L of l)
        X.push(L.unicode), e += L.width;
      d.fillText(X.join(""), 0, 0), U.x += e * M * N, d.restore(), this.compose();
      return;
    }
    let Y = 0, B;
    for (B = 0; B < s; ++B) {
      const X = l[B];
      if (typeof X == "number") {
        Y += n * X * F / 1e3;
        continue;
      }
      let e = !1;
      const L = (X.isSpace ? c : 0) + W, I = X.fontChar, g = X.accent;
      let w, Wl, z = X.width;
      if (b) {
        const K = X.vmetric || h, Ul = -(X.vmetric ? K[1] : z * 0.5) * M, k = K[2] * M;
        z = K ? -K[0] : z, w = Ul / V, Wl = (Y + k) / V;
      } else
        w = Y / V, Wl = 0;
      if (Z.remeasure && z > 0) {
        const K = d.measureText(I).width * 1e3 / F * V;
        if (z < K && this.isFontSubpixelAAEnabled) {
          const Ul = z / K;
          e = !0, d.save(), d.scale(Ul, 1), w /= Ul;
        } else z !== K && (w += (z - K) / 2e3 * F / V);
      }
      if (this.contentVisible && (X.isInFont || Z.missingFile)) {
        if (G && !g)
          d.fillText(I, w, Wl);
        else if (this.paintChar(I, w, Wl, J), g) {
          const K = w + F * g.offset.x / V, Ul = Wl - F * g.offset.y / V;
          this.paintChar(g.fontChar, K, Ul, J);
        }
      }
      const C = b ? z * M - L * R : z * M + L * R;
      Y += C, e && d.restore();
    }
    b ? U.y -= Y : U.x += Y * N, d.restore(), this.compose();
  }
  showType3Text(l) {
    const U = this.ctx, Z = this.current, F = Z.font, d = Z.fontSize, V = Z.fontDirection, W = F.vertical ? 1 : -1, c = Z.charSpacing, R = Z.wordSpacing, N = Z.textHScale * V, s = Z.fontMatrix || mc, b = l.length, n = Z.textRenderingMode === Ol.INVISIBLE;
    let h, M, G, J;
    if (!(n || d === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, U.save(), U.transform(...Z.textMatrix), U.translate(Z.x, Z.y), U.scale(N, V), h = 0; h < b; ++h) {
        if (M = l[h], typeof M == "number") {
          J = W * M * d / 1e3, this.ctx.translate(J, 0), Z.x += J * N;
          continue;
        }
        const T = (M.isSpace ? R : 0) + c, S = F.charProcOperatorList[M.operatorListId];
        if (!S) {
          H(`Type3 character "${M.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = M, this.save(), U.scale(d, d), U.transform(...s), this.executeOperatorList(S), this.restore()), G = o.applyTransform([M.width, 0], s)[0] * d + T, U.translate(G, 0), Z.x += G * N;
      }
      U.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(l, U) {
  }
  setCharWidthAndBounds(l, U, Z, F, d, V) {
    this.ctx.rect(Z, F, d - Z, V - F), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(l) {
    let U;
    if (l[0] === "TilingPattern") {
      const Z = l[1], F = this.baseTransform || nl(this.ctx), d = {
        createCanvasGraphics: (V) => new fR(V, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      U = new Kc(l, Z, this.ctx, d, F);
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
  setStrokeRGBColor(l, U, Z) {
    const F = o.makeHexColor(l, U, Z);
    this.ctx.strokeStyle = F, this.current.strokeColor = F;
  }
  setFillRGBColor(l, U, Z) {
    const F = o.makeHexColor(l, U, Z);
    this.ctx.fillStyle = F, this.current.fillColor = F, this.current.patternFill = !1;
  }
  _getPattern(l, U = null) {
    let Z;
    return this.cachedPatterns.has(l) ? Z = this.cachedPatterns.get(l) : (Z = dn(this.getObject(l)), this.cachedPatterns.set(l, Z)), U && (Z.matrix = U), Z;
  }
  shadingFill(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx;
    this.save();
    const Z = this._getPattern(l);
    U.fillStyle = Z.getPattern(U, this, NZ(U), _l.SHADING);
    const F = NZ(U);
    if (F) {
      const {
        width: d,
        height: V
      } = U.canvas, [W, c, R, N] = o.getAxialAlignedBoundingBox([0, 0, d, V], F);
      this.ctx.fillRect(W, c, R - W, N - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    Ql("Should not call beginInlineImage");
  }
  beginImageData() {
    Ql("Should not call beginImageData");
  }
  paintFormXObjectBegin(l, U) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), l && this.transform(...l), this.baseTransform = nl(this.ctx), U)) {
      const Z = U[2] - U[0], F = U[3] - U[1];
      this.ctx.rect(U[0], U[1], Z, F), this.current.updateRectMinMax(nl(this.ctx), U), this.clip(), this.endPath();
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
    l.isolated || $W("TODO: Support non-isolated groups."), l.knockout && H("Knockout groups not supported.");
    const Z = nl(U);
    if (l.matrix && U.transform(...l.matrix), !l.bbox)
      throw new Error("Bounding box is required.");
    let F = o.getAxialAlignedBoundingBox(l.bbox, nl(U));
    const d = [0, 0, U.canvas.width, U.canvas.height];
    F = o.intersect(F, d) || [0, 0, 0, 0];
    const V = Math.floor(F[0]), W = Math.floor(F[1]), c = Math.max(Math.ceil(F[2]) - V, 1), R = Math.max(Math.ceil(F[3]) - W, 1);
    this.current.startNewPathAndClipBox([0, 0, c, R]);
    let N = "groupAt" + this.groupLevel;
    l.smask && (N += "_smask_" + this.smaskCounter++ % 2);
    const s = this.cachedCanvases.getCanvas(N, c, R), b = s.context;
    b.translate(-V, -W), b.transform(...Z), l.smask ? this.smaskStack.push({
      canvas: s.canvas,
      context: b,
      offsetX: V,
      offsetY: W,
      subtype: l.smask.subtype,
      backdrop: l.smask.backdrop,
      transferMap: l.smask.transferMap || null,
      startTransformInverse: null
    }) : (U.setTransform(1, 0, 0, 1, 0, 0), U.translate(V, W), U.save()), O0(U, b), this.ctx = b, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(U), this.groupLevel++;
  }
  endGroup(l) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const U = this.ctx, Z = this.groupStack.pop();
    if (this.ctx = Z, this.ctx.imageSmoothingEnabled = !1, l.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const F = nl(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...F);
      const d = o.getAxialAlignedBoundingBox([0, 0, U.canvas.width, U.canvas.height], F);
      this.ctx.drawImage(U.canvas, 0, 0), this.ctx.restore(), this.compose(d);
    }
  }
  beginAnnotation(l, U, Z, F, d) {
    if (m(this, JF, Hc).call(this), vV(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), U) {
      const V = U[2] - U[0], W = U[3] - U[1];
      if (d && this.annotationCanvasMap) {
        Z = Z.slice(), Z[4] -= U[0], Z[5] -= U[1], U = U.slice(), U[0] = U[1] = 0, U[2] = V, U[3] = W;
        const [c, R] = o.singularValueDecompose2dScale(nl(this.ctx)), {
          viewportScale: N
        } = this, s = Math.ceil(V * this.outputScaleX * N), b = Math.ceil(W * this.outputScaleY * N);
        this.annotationCanvas = this.canvasFactory.create(s, b);
        const {
          canvas: n,
          context: h
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(l, n), this.annotationCanvas.savedCtx = this.ctx, this.ctx = h, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -R, 0, W * R), vV(this.ctx);
      } else
        vV(this.ctx), this.ctx.rect(U[0], U[1], V, W), this.ctx.clip(), this.endPath();
    }
    this.current = new bt(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...Z), this.transform(...F);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), m(this, JF, vc).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.count;
    l = this.getObject(l.data, l), l.count = U;
    const Z = this.ctx, F = this.processingType3;
    if (F && (F.compiled === void 0 && (F.compiled = Rn(l)), F.compiled)) {
      F.compiled(Z);
      return;
    }
    const d = this._createMaskCanvas(l), V = d.canvas;
    Z.save(), Z.setTransform(1, 0, 0, 1, 0, 0), Z.drawImage(V, d.offsetX, d.offsetY), Z.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(l, U, Z = 0, F = 0, d, V) {
    if (!this.contentVisible)
      return;
    l = this.getObject(l.data, l);
    const W = this.ctx;
    W.save();
    const c = nl(W);
    W.transform(U, Z, F, d, 0, 0);
    const R = this._createMaskCanvas(l);
    W.setTransform(1, 0, 0, 1, R.offsetX - c[4], R.offsetY - c[5]);
    for (let N = 0, s = V.length; N < s; N += 2) {
      const b = o.transform(c, [U, Z, F, d, V[N], V[N + 1]]), [n, h] = o.applyTransform([0, 0], b);
      W.drawImage(R.canvas, n, h);
    }
    W.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx, Z = this.current.fillColor, F = this.current.patternFill;
    for (const d of l) {
      const {
        data: V,
        width: W,
        height: c,
        transform: R
      } = d, N = this.cachedCanvases.getCanvas("maskCanvas", W, c), s = N.context;
      s.save();
      const b = this.getObject(V, d);
      at(s, b), s.globalCompositeOperation = "source-in", s.fillStyle = F ? Z.getPattern(s, this, NZ(U), _l.FILL) : Z, s.fillRect(0, 0, W, c), s.restore(), U.save(), U.transform(...R), U.scale(1, -1), HV(U, N.canvas, 0, 0, W, c, 0, -1, 1, 1), U.restore();
    }
    this.compose();
  }
  paintImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = this.getObject(l);
    if (!U) {
      H("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(U);
  }
  paintImageXObjectRepeat(l, U, Z, F) {
    if (!this.contentVisible)
      return;
    const d = this.getObject(l);
    if (!d) {
      H("Dependent image isn't ready yet");
      return;
    }
    const V = d.width, W = d.height, c = [];
    for (let R = 0, N = F.length; R < N; R += 2)
      c.push({
        transform: [U, 0, 0, Z, F[R], F[R + 1]],
        x: 0,
        y: 0,
        w: V,
        h: W
      });
    this.paintInlineImageXObjectGroup(d, c);
  }
  applyTransferMapsToCanvas(l) {
    return this.current.transferMaps !== "none" && (l.filter = this.current.transferMaps, l.drawImage(l.canvas, 0, 0), l.filter = "none"), l.canvas;
  }
  applyTransferMapsToBitmap(l) {
    if (this.current.transferMaps === "none")
      return l.bitmap;
    const {
      bitmap: U,
      width: Z,
      height: F
    } = l, d = this.cachedCanvases.getCanvas("inlineImage", Z, F), V = d.context;
    return V.filter = this.current.transferMaps, V.drawImage(U, 0, 0), V.filter = "none", d.canvas;
  }
  paintInlineImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.width, Z = l.height, F = this.ctx;
    if (this.save(), !vl) {
      const {
        filter: W
      } = F;
      W !== "none" && W !== "" && (F.filter = "none");
    }
    F.scale(1 / U, -1 / Z);
    let d;
    if (l.bitmap)
      d = this.applyTransferMapsToBitmap(l);
    else if (typeof HTMLElement == "function" && l instanceof HTMLElement || !l.data)
      d = l;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", U, Z).context;
      nt(c, l), d = this.applyTransferMapsToCanvas(c);
    }
    const V = this._scaleImage(d, NZ(F));
    F.imageSmoothingEnabled = ht(nl(F), l.interpolate), HV(F, V.img, 0, 0, V.paintWidth, V.paintHeight, 0, -Z, U, Z), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(l, U) {
    if (!this.contentVisible)
      return;
    const Z = this.ctx;
    let F;
    if (l.bitmap)
      F = l.bitmap;
    else {
      const d = l.width, V = l.height, c = this.cachedCanvases.getCanvas("inlineImage", d, V).context;
      nt(c, l), F = this.applyTransferMapsToCanvas(c);
    }
    for (const d of U)
      Z.save(), Z.transform(...d.transform), Z.scale(1, -1), HV(Z, F, d.x, d.y, d.w, d.h, 0, -1, 1, 1), Z.restore();
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
    const Z = this.ctx;
    this.pendingClip && (U || (this.pendingClip === mt ? Z.clip("evenodd") : Z.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), Z.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const l = nl(this.ctx);
      if (l[1] === 0 && l[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(l[0]), Math.abs(l[3]));
      else {
        const U = Math.abs(l[0] * l[3] - l[2] * l[1]), Z = Math.hypot(l[0], l[2]), F = Math.hypot(l[1], l[3]);
        this._cachedGetSinglePixelWidth = Math.max(Z, F) / U;
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
        b: Z,
        c: F,
        d
      } = this.ctx.getTransform();
      let V, W;
      if (Z === 0 && F === 0) {
        const c = Math.abs(U), R = Math.abs(d);
        if (c === R)
          if (l === 0)
            V = W = 1 / c;
          else {
            const N = c * l;
            V = W = N < 1 ? 1 / N : 1;
          }
        else if (l === 0)
          V = 1 / c, W = 1 / R;
        else {
          const N = c * l, s = R * l;
          V = N < 1 ? 1 / N : 1, W = s < 1 ? 1 / s : 1;
        }
      } else {
        const c = Math.abs(U * d - Z * F), R = Math.hypot(U, Z), N = Math.hypot(F, d);
        if (l === 0)
          V = N / c, W = R / c;
        else {
          const s = l * c;
          V = N > s ? N / s : 1, W = R > s ? R / s : 1;
        }
      }
      this._cachedScaleForStroking[0] = V, this._cachedScaleForStroking[1] = W;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(l) {
    const {
      ctx: U
    } = this, {
      lineWidth: Z
    } = this.current, [F, d] = this.getScaleForStroking();
    if (U.lineWidth = Z || 1, F === 1 && d === 1) {
      U.stroke();
      return;
    }
    const V = U.getLineDash();
    if (l && U.save(), U.scale(F, d), V.length > 0) {
      const W = Math.max(F, d);
      U.setLineDash(V.map((c) => c / W)), U.lineDashOffset /= W;
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
JF = new WeakSet(), Hc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, vc = function() {
  if (this.pageColors) {
    const l = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (l !== "none") {
      const U = this.ctx.filter;
      this.ctx.filter = l, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = U;
    }
  }
};
let xd = fR;
for (const t in yU)
  xd.prototype[t] !== void 0 && (xd.prototype[yU[t]] = xd.prototype[t]);
var wQ, xQ;
class jZ {
  static get workerPort() {
    return Q(this, wQ);
  }
  static set workerPort(l) {
    if (!(typeof Worker < "u" && l instanceof Worker) && l !== null)
      throw new Error("Invalid `workerPort` type.");
    a(this, wQ, l);
  }
  static get workerSrc() {
    return Q(this, xQ);
  }
  static set workerSrc(l) {
    if (typeof l != "string")
      throw new Error("Invalid `workerSrc` type.");
    a(this, xQ, l);
  }
}
wQ = new WeakMap(), xQ = new WeakMap(), i(jZ, wQ, null), i(jZ, xQ, "");
const PV = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, il = {
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
function cU(t) {
  switch (t instanceof Error || typeof t == "object" && t !== null || Ql('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), t.name) {
    case "AbortException":
      return new yd(t.message);
    case "MissingPDFException":
      return new pd(t.message);
    case "PasswordException":
      return new Mc(t.message, t.code);
    case "UnexpectedResponseException":
      return new lc(t.message, t.status);
    case "UnknownErrorException":
      return new Jc(t.message, t.details);
    default:
      return new Jc(t.message, t.toString());
  }
}
var WZ, hN, mN, dW;
class f0 {
  constructor(l, U, Z) {
    i(this, WZ);
    this.sourceName = l, this.targetName = U, this.comObj = Z, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (F) => {
      const d = F.data;
      if (d.targetName !== this.sourceName)
        return;
      if (d.stream) {
        m(this, WZ, mN).call(this, d);
        return;
      }
      if (d.callback) {
        const W = d.callbackId, c = this.callbackCapabilities[W];
        if (!c)
          throw new Error(`Cannot resolve callback ${W}`);
        if (delete this.callbackCapabilities[W], d.callback === PV.DATA)
          c.resolve(d.data);
        else if (d.callback === PV.ERROR)
          c.reject(cU(d.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const V = this.actionHandler[d.action];
      if (!V)
        throw new Error(`Unknown action from worker: ${d.action}`);
      if (d.callbackId) {
        const W = this.sourceName, c = d.sourceName;
        new Promise(function(R) {
          R(V(d.data));
        }).then(function(R) {
          Z.postMessage({
            sourceName: W,
            targetName: c,
            callback: PV.DATA,
            callbackId: d.callbackId,
            data: R
          });
        }, function(R) {
          Z.postMessage({
            sourceName: W,
            targetName: c,
            callback: PV.ERROR,
            callbackId: d.callbackId,
            reason: cU(R)
          });
        });
        return;
      }
      if (d.streamId) {
        m(this, WZ, hN).call(this, d);
        return;
      }
      V(d.data);
    }, Z.addEventListener("message", this._onComObjOnMessage);
  }
  on(l, U) {
    const Z = this.actionHandler;
    if (Z[l])
      throw new Error(`There is already an actionName called "${l}"`);
    Z[l] = U;
  }
  send(l, U, Z) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: l,
      data: U
    }, Z);
  }
  sendWithPromise(l, U, Z) {
    const F = this.callbackId++, d = Promise.withResolvers();
    this.callbackCapabilities[F] = d;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: l,
        callbackId: F,
        data: U
      }, Z);
    } catch (V) {
      d.reject(V);
    }
    return d.promise;
  }
  sendWithStream(l, U, Z, F) {
    const d = this.streamId++, V = this.sourceName, W = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (R) => {
        const N = Promise.withResolvers();
        return this.streamControllers[d] = {
          controller: R,
          startCall: N,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: V,
          targetName: W,
          action: l,
          streamId: d,
          data: U,
          desiredSize: R.desiredSize
        }, F), N.promise;
      },
      pull: (R) => {
        const N = Promise.withResolvers();
        return this.streamControllers[d].pullCall = N, c.postMessage({
          sourceName: V,
          targetName: W,
          stream: il.PULL,
          streamId: d,
          desiredSize: R.desiredSize
        }), N.promise;
      },
      cancel: (R) => {
        ul(R instanceof Error, "cancel must have a valid reason");
        const N = Promise.withResolvers();
        return this.streamControllers[d].cancelCall = N, this.streamControllers[d].isClosed = !0, c.postMessage({
          sourceName: V,
          targetName: W,
          stream: il.CANCEL,
          streamId: d,
          reason: cU(R)
        }), N.promise;
      }
    }, Z);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
WZ = new WeakSet(), hN = function(l) {
  const U = l.streamId, Z = this.sourceName, F = l.sourceName, d = this.comObj, V = this, W = this.actionHandler[l.action], c = {
    enqueue(R, N = 1, s) {
      if (this.isCancelled)
        return;
      const b = this.desiredSize;
      this.desiredSize -= N, b > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), d.postMessage({
        sourceName: Z,
        targetName: F,
        stream: il.ENQUEUE,
        streamId: U,
        chunk: R
      }, s);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, d.postMessage({
        sourceName: Z,
        targetName: F,
        stream: il.CLOSE,
        streamId: U
      }), delete V.streamSinks[U]);
    },
    error(R) {
      ul(R instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, d.postMessage({
        sourceName: Z,
        targetName: F,
        stream: il.ERROR,
        streamId: U,
        reason: cU(R)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: l.desiredSize,
    ready: null
  };
  c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[U] = c, new Promise(function(R) {
    R(W(l.data, c));
  }).then(function() {
    d.postMessage({
      sourceName: Z,
      targetName: F,
      stream: il.START_COMPLETE,
      streamId: U,
      success: !0
    });
  }, function(R) {
    d.postMessage({
      sourceName: Z,
      targetName: F,
      stream: il.START_COMPLETE,
      streamId: U,
      reason: cU(R)
    });
  });
}, mN = function(l) {
  const U = l.streamId, Z = this.sourceName, F = l.sourceName, d = this.comObj, V = this.streamControllers[U], W = this.streamSinks[U];
  switch (l.stream) {
    case il.START_COMPLETE:
      l.success ? V.startCall.resolve() : V.startCall.reject(cU(l.reason));
      break;
    case il.PULL_COMPLETE:
      l.success ? V.pullCall.resolve() : V.pullCall.reject(cU(l.reason));
      break;
    case il.PULL:
      if (!W) {
        d.postMessage({
          sourceName: Z,
          targetName: F,
          stream: il.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
        break;
      }
      W.desiredSize <= 0 && l.desiredSize > 0 && W.sinkCapability.resolve(), W.desiredSize = l.desiredSize, new Promise(function(c) {
        var R;
        c((R = W.onPull) == null ? void 0 : R.call(W));
      }).then(function() {
        d.postMessage({
          sourceName: Z,
          targetName: F,
          stream: il.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(c) {
        d.postMessage({
          sourceName: Z,
          targetName: F,
          stream: il.PULL_COMPLETE,
          streamId: U,
          reason: cU(c)
        });
      });
      break;
    case il.ENQUEUE:
      if (ul(V, "enqueue should have stream controller"), V.isClosed)
        break;
      V.controller.enqueue(l.chunk);
      break;
    case il.CLOSE:
      if (ul(V, "close should have stream controller"), V.isClosed)
        break;
      V.isClosed = !0, V.controller.close(), m(this, WZ, dW).call(this, V, U);
      break;
    case il.ERROR:
      ul(V, "error should have stream controller"), V.controller.error(cU(l.reason)), m(this, WZ, dW).call(this, V, U);
      break;
    case il.CANCEL_COMPLETE:
      l.success ? V.cancelCall.resolve() : V.cancelCall.reject(cU(l.reason)), m(this, WZ, dW).call(this, V, U);
      break;
    case il.CANCEL:
      if (!W)
        break;
      new Promise(function(c) {
        var R;
        c((R = W.onCancel) == null ? void 0 : R.call(W, cU(l.reason)));
      }).then(function() {
        d.postMessage({
          sourceName: Z,
          targetName: F,
          stream: il.CANCEL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(c) {
        d.postMessage({
          sourceName: Z,
          targetName: F,
          stream: il.CANCEL_COMPLETE,
          streamId: U,
          reason: cU(c)
        });
      }), W.sinkCapability.reject(cU(l.reason)), W.isCancelled = !0, delete this.streamSinks[U];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, dW = async function(l, U) {
  var Z, F, d;
  await Promise.allSettled([(Z = l.startCall) == null ? void 0 : Z.promise, (F = l.pullCall) == null ? void 0 : F.promise, (d = l.cancelCall) == null ? void 0 : d.promise]), delete this.streamControllers[U];
};
var HF, jQ;
class bn {
  constructor({
    parsedData: l,
    rawData: U
  }) {
    i(this, HF);
    i(this, jQ);
    a(this, HF, l), a(this, jQ, U);
  }
  getRaw() {
    return Q(this, jQ);
  }
  get(l) {
    return Q(this, HF).get(l) ?? null;
  }
  getAll() {
    return CR(Q(this, HF));
  }
  has(l) {
    return Q(this, HF).has(l);
  }
}
HF = new WeakMap(), jQ = new WeakMap();
const PZ = Symbol("INTERNAL");
var OQ, rQ, gQ, F0;
class nn {
  constructor(l, {
    name: U,
    intent: Z,
    usage: F
  }) {
    i(this, OQ, !1);
    i(this, rQ, !1);
    i(this, gQ, !1);
    i(this, F0, !0);
    a(this, OQ, !!(l & YU.DISPLAY)), a(this, rQ, !!(l & YU.PRINT)), this.name = U, this.intent = Z, this.usage = F;
  }
  get visible() {
    if (Q(this, gQ))
      return Q(this, F0);
    if (!Q(this, F0))
      return !1;
    const {
      print: l,
      view: U
    } = this.usage;
    return Q(this, OQ) ? (U == null ? void 0 : U.viewState) !== "OFF" : Q(this, rQ) ? (l == null ? void 0 : l.printState) !== "OFF" : !0;
  }
  _setVisible(l, U, Z = !1) {
    l !== PZ && Ql("Internal method `_setVisible` called."), a(this, gQ, Z), a(this, F0, U);
  }
}
OQ = new WeakMap(), rQ = new WeakMap(), gQ = new WeakMap(), F0 = new WeakMap();
var ZF, dl, d0, Q0, KQ, Pc;
class an {
  constructor(l, U = YU.DISPLAY) {
    i(this, KQ);
    i(this, ZF, null);
    i(this, dl, /* @__PURE__ */ new Map());
    i(this, d0, null);
    i(this, Q0, null);
    if (this.renderingIntent = U, this.name = null, this.creator = null, l !== null) {
      this.name = l.name, this.creator = l.creator, a(this, Q0, l.order);
      for (const Z of l.groups)
        Q(this, dl).set(Z.id, new nn(U, Z));
      if (l.baseState === "OFF")
        for (const Z of Q(this, dl).values())
          Z._setVisible(PZ, !1);
      for (const Z of l.on)
        Q(this, dl).get(Z)._setVisible(PZ, !0);
      for (const Z of l.off)
        Q(this, dl).get(Z)._setVisible(PZ, !1);
      a(this, d0, this.getHash());
    }
  }
  isVisible(l) {
    if (Q(this, dl).size === 0)
      return !0;
    if (!l)
      return $W("Optional content group not defined."), !0;
    if (l.type === "OCG")
      return Q(this, dl).has(l.id) ? Q(this, dl).get(l.id).visible : (H(`Optional content group not found: ${l.id}`), !0);
    if (l.type === "OCMD") {
      if (l.expression)
        return m(this, KQ, Pc).call(this, l.expression);
      if (!l.policy || l.policy === "AnyOn") {
        for (const U of l.ids) {
          if (!Q(this, dl).has(U))
            return H(`Optional content group not found: ${U}`), !0;
          if (Q(this, dl).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOn") {
        for (const U of l.ids) {
          if (!Q(this, dl).has(U))
            return H(`Optional content group not found: ${U}`), !0;
          if (!Q(this, dl).get(U).visible)
            return !1;
        }
        return !0;
      } else if (l.policy === "AnyOff") {
        for (const U of l.ids) {
          if (!Q(this, dl).has(U))
            return H(`Optional content group not found: ${U}`), !0;
          if (!Q(this, dl).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOff") {
        for (const U of l.ids) {
          if (!Q(this, dl).has(U))
            return H(`Optional content group not found: ${U}`), !0;
          if (Q(this, dl).get(U).visible)
            return !1;
        }
        return !0;
      }
      return H(`Unknown optional content policy ${l.policy}.`), !0;
    }
    return H(`Unknown group type ${l.type}.`), !0;
  }
  setVisibility(l, U = !0) {
    const Z = Q(this, dl).get(l);
    if (!Z) {
      H(`Optional content group not found: ${l}`);
      return;
    }
    Z._setVisible(PZ, !!U, !0), a(this, ZF, null);
  }
  setOCGState({
    state: l,
    preserveRB: U
  }) {
    let Z;
    for (const F of l) {
      switch (F) {
        case "ON":
        case "OFF":
        case "Toggle":
          Z = F;
          continue;
      }
      const d = Q(this, dl).get(F);
      if (d)
        switch (Z) {
          case "ON":
            d._setVisible(PZ, !0);
            break;
          case "OFF":
            d._setVisible(PZ, !1);
            break;
          case "Toggle":
            d._setVisible(PZ, !d.visible);
            break;
        }
    }
    a(this, ZF, null);
  }
  get hasInitialVisibility() {
    return Q(this, d0) === null || this.getHash() === Q(this, d0);
  }
  getOrder() {
    return Q(this, dl).size ? Q(this, Q0) ? Q(this, Q0).slice() : [...Q(this, dl).keys()] : null;
  }
  getGroups() {
    return Q(this, dl).size > 0 ? CR(Q(this, dl)) : null;
  }
  getGroup(l) {
    return Q(this, dl).get(l) || null;
  }
  getHash() {
    if (Q(this, ZF) !== null)
      return Q(this, ZF);
    const l = new sN();
    for (const [U, Z] of Q(this, dl))
      l.update(`${U}:${Z.visible}`);
    return a(this, ZF, l.hexdigest());
  }
}
ZF = new WeakMap(), dl = new WeakMap(), d0 = new WeakMap(), Q0 = new WeakMap(), KQ = new WeakSet(), Pc = function(l) {
  const U = l.length;
  if (U < 2)
    return !0;
  const Z = l[0];
  for (let F = 1; F < U; F++) {
    const d = l[F];
    let V;
    if (Array.isArray(d))
      V = m(this, KQ, Pc).call(this, d);
    else if (Q(this, dl).has(d))
      V = Q(this, dl).get(d).visible;
    else
      return H(`Optional content group not found: ${d}`), !0;
    switch (Z) {
      case "And":
        if (!V)
          return !1;
        break;
      case "Or":
        if (V)
          return !0;
        break;
      case "Not":
        return !V;
      default:
        return !0;
    }
  }
  return Z === "And";
};
class hn {
  constructor(l, {
    disableRange: U = !1,
    disableStream: Z = !1
  }) {
    ul(l, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: F,
      initialData: d,
      progressiveDone: V,
      contentDispositionFilename: W
    } = l;
    if (this._queuedChunks = [], this._progressiveDone = V, this._contentDispositionFilename = W, (d == null ? void 0 : d.length) > 0) {
      const c = d instanceof Uint8Array && d.byteLength === d.buffer.byteLength ? d.buffer : new Uint8Array(d).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = l, this._isStreamingSupported = !Z, this._isRangeSupported = !U, this._contentLength = F, this._fullRequestReader = null, this._rangeReaders = [], l.addRangeListener((c, R) => {
      this._onReceiveData({
        begin: c,
        chunk: R
      });
    }), l.addProgressListener((c, R) => {
      this._onProgress({
        loaded: c,
        total: R
      });
    }), l.addProgressiveReadListener((c) => {
      this._onReceiveData({
        chunk: c
      });
    }), l.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), l.transportReady();
  }
  _onReceiveData({
    begin: l,
    chunk: U
  }) {
    const Z = U instanceof Uint8Array && U.byteLength === U.buffer.byteLength ? U.buffer : new Uint8Array(U).buffer;
    if (l === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(Z) : this._queuedChunks.push(Z);
    else {
      const F = this._rangeReaders.some(function(d) {
        return d._begin !== l ? !1 : (d._enqueue(Z), !0);
      });
      ul(F, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  _onProgress(l) {
    var U, Z, F, d;
    l.total === void 0 ? (Z = (U = this._rangeReaders[0]) == null ? void 0 : U.onProgress) == null || Z.call(U, {
      loaded: l.loaded
    }) : (d = (F = this._fullRequestReader) == null ? void 0 : F.onProgress) == null || d.call(F, {
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
    ul(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const l = this._queuedChunks;
    return this._queuedChunks = null, new mn(this, l, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const Z = new Mn(this, l, U);
    return this._pdfDataRangeTransport.requestDataRange(l, U), this._rangeReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeReaders.slice(0))
      Z.cancel(l);
    this._pdfDataRangeTransport.abort();
  }
}
class mn {
  constructor(l, U, Z = !1, F = null) {
    this._stream = l, this._done = Z || !1, this._filename = rR(F) ? F : null, this._queuedChunks = U || [], this._loaded = 0;
    for (const d of this._queuedChunks)
      this._loaded += d.byteLength;
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
class Mn {
  constructor(l, U, Z) {
    this._stream = l, this._begin = U, this._end = Z, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
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
        for (const Z of this._requests)
          Z.resolve({
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
function Jn(t) {
  let l = !0, U = Z("filename\\*", "i").exec(t);
  if (U) {
    U = U[1];
    let N = W(U);
    return N = unescape(N), N = c(N), N = R(N), d(N);
  }
  if (U = V(t), U) {
    const N = R(U);
    return d(N);
  }
  if (U = Z("filename", "i").exec(t), U) {
    U = U[1];
    let N = W(U);
    return N = R(N), d(N);
  }
  function Z(N, s) {
    return new RegExp("(?:^|;)\\s*" + N + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', s);
  }
  function F(N, s) {
    if (N) {
      if (!/^[\x00-\xFF]+$/.test(s))
        return s;
      try {
        const b = new TextDecoder(N, {
          fatal: !0
        }), n = Uc(s);
        s = b.decode(n), l = !1;
      } catch {
      }
    }
    return s;
  }
  function d(N) {
    return l && /[\x80-\xff]/.test(N) && (N = F("utf-8", N), l && (N = F("iso-8859-1", N))), N;
  }
  function V(N) {
    const s = [];
    let b;
    const n = Z("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (b = n.exec(N)) !== null; ) {
      let [, M, G, J] = b;
      if (M = parseInt(M, 10), M in s) {
        if (M === 0)
          break;
        continue;
      }
      s[M] = [G, J];
    }
    const h = [];
    for (let M = 0; M < s.length && M in s; ++M) {
      let [G, J] = s[M];
      J = W(J), G && (J = unescape(J), M === 0 && (J = c(J))), h.push(J);
    }
    return h.join("");
  }
  function W(N) {
    if (N.startsWith('"')) {
      const s = N.slice(1).split('\\"');
      for (let b = 0; b < s.length; ++b) {
        const n = s[b].indexOf('"');
        n !== -1 && (s[b] = s[b].slice(0, n), s.length = b + 1), s[b] = s[b].replaceAll(/\\(.)/g, "$1");
      }
      N = s.join('"');
    }
    return N;
  }
  function c(N) {
    const s = N.indexOf("'");
    if (s === -1)
      return N;
    const b = N.slice(0, s), h = N.slice(s + 1).replace(/^[^']*'/, "");
    return F(b, h);
  }
  function R(N) {
    return !N.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(N) ? N : N.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(s, b, n, h) {
      if (n === "q" || n === "Q")
        return h = h.replaceAll("_", " "), h = h.replaceAll(/=([0-9a-fA-F]{2})/g, function(M, G) {
          return String.fromCharCode(parseInt(G, 16));
        }), F(b, h);
      try {
        h = atob(h);
      } catch {
      }
      return F(b, h);
    });
  }
  return "";
}
function HR({
  getResponseHeader: t,
  isHttp: l,
  rangeChunkSize: U,
  disableRange: Z
}) {
  const F = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, d = parseInt(t("Content-Length"), 10);
  return !Number.isInteger(d) || (F.suggestedLength = d, d <= 2 * U) || Z || !l || t("Accept-Ranges") !== "bytes" || (t("Content-Encoding") || "identity") !== "identity" || (F.allowRangeRequests = !0), F;
}
function vR(t) {
  const l = t("Content-Disposition");
  if (l) {
    let U = Jn(l);
    if (U.includes("%"))
      try {
        U = decodeURIComponent(U);
      } catch {
      }
    if (rR(U))
      return U;
  }
  return null;
}
function Vc(t, l) {
  return t === 404 || t === 0 && l.startsWith("file:") ? new pd('Missing PDF "' + l + '".') : new lc(`Unexpected server response (${t}) while retrieving PDF "${l}".`, t);
}
function iN(t) {
  return t === 200 || t === 206;
}
function MN(t, l, U) {
  return {
    method: "GET",
    headers: t,
    signal: U.signal,
    mode: "cors",
    credentials: l ? "include" : "same-origin",
    redirect: "follow"
  };
}
function JN(t) {
  const l = new Headers();
  for (const U in t) {
    const Z = t[U];
    Z !== void 0 && l.append(U, Z);
  }
  return l;
}
function GN(t) {
  return t instanceof Uint8Array ? t.buffer : t instanceof ArrayBuffer ? t : (H(`getArrayBuffer - unexpected data format: ${t}`), new Uint8Array(t).buffer);
}
class it {
  constructor(l) {
    this.source = l, this.isHttp = /^https?:/i.test(l.url), this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return ul(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Gn(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const Z = new Tn(this, l, U);
    return this._rangeRequestReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeRequestReaders.slice(0))
      Z.cancel(l);
  }
}
class Gn {
  constructor(l) {
    this._stream = l, this._reader = null, this._loaded = 0, this._filename = null;
    const U = l.source;
    this._withCredentials = U.withCredentials || !1, this._contentLength = U.length, this._headersCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._headers = JN(this._stream.httpHeaders);
    const Z = U.url;
    fetch(Z, MN(this._headers, this._withCredentials, this._abortController)).then((F) => {
      if (!iN(F.status))
        throw Vc(F.status, Z);
      this._reader = F.body.getReader(), this._headersCapability.resolve();
      const d = (c) => F.headers.get(c), {
        allowRangeRequests: V,
        suggestedLength: W
      } = HR({
        getResponseHeader: d,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = V, this._contentLength = W || this._contentLength, this._filename = vR(d), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new yd("Streaming is disabled."));
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
    var Z;
    await this._headersCapability.promise;
    const {
      value: l,
      done: U
    } = await this._reader.read();
    return U ? {
      value: l,
      done: U
    } : (this._loaded += l.byteLength, (Z = this.onProgress) == null || Z.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: GN(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
class Tn {
  constructor(l, U, Z) {
    this._stream = l, this._reader = null, this._loaded = 0;
    const F = l.source;
    this._withCredentials = F.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !F.disableStream, this._abortController = new AbortController(), this._headers = JN(this._stream.httpHeaders), this._headers.append("Range", `bytes=${U}-${Z - 1}`);
    const d = F.url;
    fetch(d, MN(this._headers, this._withCredentials, this._abortController)).then((V) => {
      if (!iN(V.status))
        throw Vc(V.status, d);
      this._readCapability.resolve(), this._reader = V.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var Z;
    await this._readCapability.promise;
    const {
      value: l,
      done: U
    } = await this._reader.read();
    return U ? {
      value: l,
      done: U
    } : (this._loaded += l.byteLength, (Z = this.onProgress) == null || Z.call(this, {
      loaded: this._loaded
    }), {
      value: GN(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
const nc = 200, ac = 206;
function Sn(t) {
  const l = t.response;
  return typeof l != "string" ? l : Uc(l).buffer;
}
class Xn {
  constructor(l, U = {}) {
    this.url = l, this.isHttp = /^https?:/i.test(l), this.httpHeaders = this.isHttp && U.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = U.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(l, U, Z) {
    const F = {
      begin: l,
      end: U
    };
    for (const d in Z)
      F[d] = Z[d];
    return this.request(F);
  }
  requestFull(l) {
    return this.request(l);
  }
  request(l) {
    const U = new XMLHttpRequest(), Z = this.currXhrId++, F = this.pendingRequests[Z] = {
      xhr: U
    };
    U.open("GET", this.url), U.withCredentials = this.withCredentials;
    for (const d in this.httpHeaders) {
      const V = this.httpHeaders[d];
      V !== void 0 && U.setRequestHeader(d, V);
    }
    return this.isHttp && "begin" in l && "end" in l ? (U.setRequestHeader("Range", `bytes=${l.begin}-${l.end - 1}`), F.expectedStatus = ac) : F.expectedStatus = nc, U.responseType = "arraybuffer", l.onError && (U.onerror = function(d) {
      l.onError(U.status);
    }), U.onreadystatechange = this.onStateChange.bind(this, Z), U.onprogress = this.onProgress.bind(this, Z), F.onHeadersReceived = l.onHeadersReceived, F.onDone = l.onDone, F.onError = l.onError, F.onProgress = l.onProgress, U.send(null), Z;
  }
  onProgress(l, U) {
    var F;
    const Z = this.pendingRequests[l];
    Z && ((F = Z.onProgress) == null || F.call(Z, U));
  }
  onStateChange(l, U) {
    var c, R, N;
    const Z = this.pendingRequests[l];
    if (!Z)
      return;
    const F = Z.xhr;
    if (F.readyState >= 2 && Z.onHeadersReceived && (Z.onHeadersReceived(), delete Z.onHeadersReceived), F.readyState !== 4 || !(l in this.pendingRequests))
      return;
    if (delete this.pendingRequests[l], F.status === 0 && this.isHttp) {
      (c = Z.onError) == null || c.call(Z, F.status);
      return;
    }
    const d = F.status || nc;
    if (!(d === nc && Z.expectedStatus === ac) && d !== Z.expectedStatus) {
      (R = Z.onError) == null || R.call(Z, F.status);
      return;
    }
    const W = Sn(F);
    if (d === ac) {
      const s = F.getResponseHeader("Content-Range"), b = /bytes (\d+)-(\d+)\/(\d+)/.exec(s);
      Z.onDone({
        begin: parseInt(b[1], 10),
        chunk: W
      });
    } else W ? Z.onDone({
      begin: 0,
      chunk: W
    }) : (N = Z.onError) == null || N.call(Z, F.status);
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
class Yn {
  constructor(l) {
    this._source = l, this._manager = new Xn(l.url, {
      httpHeaders: l.httpHeaders,
      withCredentials: l.withCredentials
    }), this._rangeChunkSize = l.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(l) {
    const U = this._rangeRequestReaders.indexOf(l);
    U >= 0 && this._rangeRequestReaders.splice(U, 1);
  }
  getFullReader() {
    return ul(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Bn(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    const Z = new en(this._manager, l, U);
    return Z.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeRequestReaders.slice(0))
      Z.cancel(l);
  }
}
class Bn {
  constructor(l, U) {
    this._manager = l;
    const Z = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = U.url, this._fullRequestId = l.requestFull(Z), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._contentLength = U.length, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const l = this._fullRequestId, U = this._manager.getRequestXhr(l), Z = (V) => U.getResponseHeader(V), {
      allowRangeRequests: F,
      suggestedLength: d
    } = HR({
      getResponseHeader: Z,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    F && (this._isRangeSupported = !0), this._contentLength = d || this._contentLength, this._filename = vR(Z), this._isRangeSupported && this._manager.abortRequest(l), this._headersReceivedCapability.resolve();
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
    this._storedError = Vc(l, this._url), this._headersReceivedCapability.reject(this._storedError);
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
class en {
  constructor(l, U, Z) {
    this._manager = l;
    const F = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = l.url, this._requestId = l.requestRange(U, Z, F), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
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
    for (const Z of this._requests)
      Z.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(l) {
    this._storedError = Vc(l, this._url);
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
const TN = /^file:\/\/\/[a-zA-Z]:\//;
function un(t) {
  const l = RZ.get("url"), U = l.parse(t);
  return U.protocol === "file:" || U.host ? U : /^[a-z]:[/\\]/i.test(t) ? l.parse(`file:///${t}`) : (U.host || (U.protocol = "file:"), U);
}
class pn {
  constructor(l) {
    this.source = l, this.url = un(l.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return ul(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new Ln(this) : new yn(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const Z = this.isFsUrl ? new kn(this, l, U) : new zn(this, l, U);
    return this._rangeRequestReaders.push(Z), Z;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const Z of this._rangeRequestReaders.slice(0))
      Z.cancel(l);
  }
}
class SN {
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
    var Z;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const l = this._readableStream.read();
    return l === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += l.length, (Z = this.onProgress) == null || Z.call(this, {
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new yd("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class XN {
  constructor(l) {
    this._url = l.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const U = l.source;
    this._isStreamingSupported = !U.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var Z;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const l = this._readableStream.read();
    return l === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += l.length, (Z = this.onProgress) == null || Z.call(this, {
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
function uW(t, l) {
  return {
    protocol: t.protocol,
    auth: t.auth,
    host: t.hostname,
    port: t.port,
    path: t.path,
    method: "GET",
    headers: l
  };
}
class yn extends SN {
  constructor(l) {
    super(l);
    const U = (Z) => {
      if (Z.statusCode === 404) {
        const W = new pd(`Missing PDF "${this._url}".`);
        this._storedError = W, this._headersCapability.reject(W);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(Z);
      const F = (W) => this._readableStream.headers[W.toLowerCase()], {
        allowRangeRequests: d,
        suggestedLength: V
      } = HR({
        getResponseHeader: F,
        isHttp: l.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = d, this._contentLength = V || this._contentLength, this._filename = vR(F);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const Z = RZ.get("http");
      this._request = Z.request(uW(this._url, l.httpHeaders), U);
    } else {
      const Z = RZ.get("https");
      this._request = Z.request(uW(this._url, l.httpHeaders), U);
    }
    this._request.on("error", (Z) => {
      this._storedError = Z, this._headersCapability.reject(Z);
    }), this._request.end();
  }
}
class zn extends XN {
  constructor(l, U, Z) {
    super(l), this._httpHeaders = {};
    for (const d in l.httpHeaders) {
      const V = l.httpHeaders[d];
      V !== void 0 && (this._httpHeaders[d] = V);
    }
    this._httpHeaders.Range = `bytes=${U}-${Z - 1}`;
    const F = (d) => {
      if (d.statusCode === 404) {
        const V = new pd(`Missing PDF "${this._url}".`);
        this._storedError = V;
        return;
      }
      this._setReadableStream(d);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const d = RZ.get("http");
      this._request = d.request(uW(this._url, this._httpHeaders), F);
    } else {
      const d = RZ.get("https");
      this._request = d.request(uW(this._url, this._httpHeaders), F);
    }
    this._request.on("error", (d) => {
      this._storedError = d;
    }), this._request.end();
  }
}
class Ln extends SN {
  constructor(l) {
    super(l);
    let U = decodeURIComponent(this._url.path);
    TN.test(this._url.href) && (U = U.replace(/^\//, ""));
    const Z = RZ.get("fs");
    Z.promises.lstat(U).then((F) => {
      this._contentLength = F.size, this._setReadableStream(Z.createReadStream(U)), this._headersCapability.resolve();
    }, (F) => {
      F.code === "ENOENT" && (F = new pd(`Missing PDF "${U}".`)), this._storedError = F, this._headersCapability.reject(F);
    });
  }
}
class kn extends XN {
  constructor(l, U, Z) {
    super(l);
    let F = decodeURIComponent(this._url.path);
    TN.test(this._url.href) && (F = F.replace(/^\//, ""));
    const d = RZ.get("fs");
    this._setReadableStream(d.createReadStream(F, {
      start: U,
      end: Z - 1
    }));
  }
}
const Dn = 1e5, lU = 30, on = 0.8;
var Yt, FF, ZU, HQ, vQ, vF, YZ, PQ, AQ, PF, V0, W0, dF, c0, fQ, R0, AF, _Q, qQ, fF, _F, QF, t0, KZ, YN, BN, Ac, cZ, QW, eN, uN;
const gl = class gl {
  constructor({
    textContentSource: l,
    container: U,
    viewport: Z
  }) {
    i(this, KZ);
    i(this, FF, Promise.withResolvers());
    i(this, ZU, null);
    i(this, HQ, !1);
    i(this, vQ, !!((Yt = globalThis.FontInspector) != null && Yt.enabled));
    i(this, vF, null);
    i(this, YZ, null);
    i(this, PQ, 0);
    i(this, AQ, 0);
    i(this, PF, null);
    i(this, V0, null);
    i(this, W0, 0);
    i(this, dF, 0);
    i(this, c0, /* @__PURE__ */ Object.create(null));
    i(this, fQ, []);
    i(this, R0, null);
    i(this, AF, []);
    i(this, _Q, /* @__PURE__ */ new WeakMap());
    i(this, qQ, null);
    var c;
    if (l instanceof ReadableStream)
      a(this, R0, l);
    else if (typeof l == "object")
      a(this, R0, new ReadableStream({
        start(R) {
          R.enqueue(l), R.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    a(this, ZU, a(this, V0, U)), a(this, dF, Z.scale * (globalThis.devicePixelRatio || 1)), a(this, W0, Z.rotation), a(this, YZ, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: F,
      pageHeight: d,
      pageX: V,
      pageY: W
    } = Z.rawDims;
    a(this, qQ, [1, 0, 0, -1, -V, W + d]), a(this, AQ, F), a(this, PQ, d), m(c = gl, cZ, eN).call(c), Xd(U, Z), Q(this, FF).promise.catch(() => {
    }).then(() => {
      Q(gl, t0).delete(this), a(this, YZ, null), a(this, c0, null);
    });
  }
  render() {
    const l = () => {
      Q(this, PF).read().then(({
        value: U,
        done: Z
      }) => {
        if (Z) {
          Q(this, FF).resolve();
          return;
        }
        Q(this, vF) ?? a(this, vF, U.lang), Object.assign(Q(this, c0), U.styles), m(this, KZ, YN).call(this, U.items), l();
      }, Q(this, FF).reject);
    };
    return a(this, PF, Q(this, R0).getReader()), Q(gl, t0).add(this), l(), Q(this, FF).promise;
  }
  update({
    viewport: l,
    onBefore: U = null
  }) {
    var d;
    const Z = l.scale * (globalThis.devicePixelRatio || 1), F = l.rotation;
    if (F !== Q(this, W0) && (U == null || U(), a(this, W0, F), Xd(Q(this, V0), {
      rotation: F
    })), Z !== Q(this, dF)) {
      U == null || U(), a(this, dF, Z);
      const V = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: m(d = gl, cZ, QW).call(d, Q(this, vF))
      };
      for (const W of Q(this, AF))
        V.properties = Q(this, _Q).get(W), V.div = W, m(this, KZ, Ac).call(this, V);
    }
  }
  cancel() {
    var U;
    const l = new yd("TextLayer task cancelled.");
    (U = Q(this, PF)) == null || U.cancel(l).catch(() => {
    }), a(this, PF, null), Q(this, FF).reject(l);
  }
  get textDivs() {
    return Q(this, AF);
  }
  get textContentItemsStr() {
    return Q(this, fQ);
  }
  static cleanup() {
    if (!(Q(this, t0).size > 0)) {
      Q(this, fF).clear();
      for (const {
        canvas: l
      } of Q(this, _F).values())
        l.remove();
      Q(this, _F).clear();
    }
  }
};
FF = new WeakMap(), ZU = new WeakMap(), HQ = new WeakMap(), vQ = new WeakMap(), vF = new WeakMap(), YZ = new WeakMap(), PQ = new WeakMap(), AQ = new WeakMap(), PF = new WeakMap(), V0 = new WeakMap(), W0 = new WeakMap(), dF = new WeakMap(), c0 = new WeakMap(), fQ = new WeakMap(), R0 = new WeakMap(), AF = new WeakMap(), _Q = new WeakMap(), qQ = new WeakMap(), fF = new WeakMap(), _F = new WeakMap(), QF = new WeakMap(), t0 = new WeakMap(), KZ = new WeakSet(), YN = function(l) {
  var F, d;
  if (Q(this, HQ))
    return;
  (d = Q(this, YZ)).ctx ?? (d.ctx = m(F = gl, cZ, QW).call(F, Q(this, vF)));
  const U = Q(this, AF), Z = Q(this, fQ);
  for (const V of l) {
    if (U.length > Dn) {
      H("Ignoring additional textDivs for performance reasons."), a(this, HQ, !0);
      return;
    }
    if (V.str === void 0) {
      if (V.type === "beginMarkedContentProps" || V.type === "beginMarkedContent") {
        const W = Q(this, ZU);
        a(this, ZU, document.createElement("span")), Q(this, ZU).classList.add("markedContent"), V.id !== null && Q(this, ZU).setAttribute("id", `${V.id}`), W.append(Q(this, ZU));
      } else V.type === "endMarkedContent" && a(this, ZU, Q(this, ZU).parentNode);
      continue;
    }
    Z.push(V.str), m(this, KZ, BN).call(this, V);
  }
}, BN = function(l) {
  var M;
  const U = document.createElement("span"), Z = {
    angle: 0,
    canvasWidth: 0,
    hasText: l.str !== "",
    hasEOL: l.hasEOL,
    fontSize: 0
  };
  Q(this, AF).push(U);
  const F = o.transform(Q(this, qQ), l.transform);
  let d = Math.atan2(F[1], F[0]);
  const V = Q(this, c0)[l.fontName];
  V.vertical && (d += Math.PI / 2);
  const W = Q(this, vQ) && V.fontSubstitution || V.fontFamily, c = Math.hypot(F[2], F[3]), R = c * m(M = gl, cZ, uN).call(M, W, Q(this, vF));
  let N, s;
  d === 0 ? (N = F[4], s = F[5] - R) : (N = F[4] + R * Math.sin(d), s = F[5] - R * Math.cos(d));
  const b = "calc(var(--scale-factor)*", n = U.style;
  Q(this, ZU) === Q(this, V0) ? (n.left = `${(100 * N / Q(this, AQ)).toFixed(2)}%`, n.top = `${(100 * s / Q(this, PQ)).toFixed(2)}%`) : (n.left = `${b}${N.toFixed(2)}px)`, n.top = `${b}${s.toFixed(2)}px)`), n.fontSize = `${b}${(Q(gl, QF) * c).toFixed(2)}px)`, n.fontFamily = W, Z.fontSize = c, U.setAttribute("role", "presentation"), U.textContent = l.str, U.dir = l.dir, Q(this, vQ) && (U.dataset.fontName = V.fontSubstitutionLoadedName || l.fontName), d !== 0 && (Z.angle = d * (180 / Math.PI));
  let h = !1;
  if (l.str.length > 1)
    h = !0;
  else if (l.str !== " " && l.transform[0] !== l.transform[3]) {
    const G = Math.abs(l.transform[0]), J = Math.abs(l.transform[3]);
    G !== J && Math.max(G, J) / Math.min(G, J) > 1.5 && (h = !0);
  }
  if (h && (Z.canvasWidth = V.vertical ? l.height : l.width), Q(this, _Q).set(U, Z), Q(this, YZ).div = U, Q(this, YZ).properties = Z, m(this, KZ, Ac).call(this, Q(this, YZ)), Z.hasText && Q(this, ZU).append(U), Z.hasEOL) {
    const G = document.createElement("br");
    G.setAttribute("role", "presentation"), Q(this, ZU).append(G);
  }
}, Ac = function(l) {
  const {
    div: U,
    properties: Z,
    ctx: F,
    prevFontSize: d,
    prevFontFamily: V
  } = l, {
    style: W
  } = U;
  let c = "";
  if (Q(gl, QF) > 1 && (c = `scale(${1 / Q(gl, QF)})`), Z.canvasWidth !== 0 && Z.hasText) {
    const {
      fontFamily: R
    } = W, {
      canvasWidth: N,
      fontSize: s
    } = Z;
    (d !== s || V !== R) && (F.font = `${s * Q(this, dF)}px ${R}`, l.prevFontSize = s, l.prevFontFamily = R);
    const {
      width: b
    } = F.measureText(U.textContent);
    b > 0 && (c = `scaleX(${N * Q(this, dF) / b}) ${c}`);
  }
  Z.angle !== 0 && (c = `rotate(${Z.angle}deg) ${c}`), c.length > 0 && (W.transform = c);
}, cZ = new WeakSet(), QW = function(l = null) {
  let U = Q(this, _F).get(l || (l = ""));
  if (!U) {
    const Z = document.createElement("canvas");
    Z.className = "hiddenCanvasElement", Z.lang = l, document.body.append(Z), U = Z.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), Q(this, _F).set(l, U);
  }
  return U;
}, eN = function() {
  if (Q(this, QF) !== null)
    return;
  const l = document.createElement("div");
  l.style.opacity = 0, l.style.lineHeight = 1, l.style.fontSize = "1px", l.textContent = "X", document.body.append(l), a(this, QF, l.getBoundingClientRect().height), l.remove();
}, uN = function(l, U) {
  const Z = Q(this, fF).get(l);
  if (Z)
    return Z;
  const F = m(this, cZ, QW).call(this, U), d = F.font;
  F.canvas.width = F.canvas.height = lU, F.font = `${lU}px ${l}`;
  const V = F.measureText("");
  let W = V.fontBoundingBoxAscent, c = Math.abs(V.fontBoundingBoxDescent);
  if (W) {
    const s = W / (W + c);
    return Q(this, fF).set(l, s), F.canvas.width = F.canvas.height = 0, F.font = d, s;
  }
  F.strokeStyle = "red", F.clearRect(0, 0, lU, lU), F.strokeText("g", 0, 0);
  let R = F.getImageData(0, 0, lU, lU).data;
  c = 0;
  for (let s = R.length - 1 - 3; s >= 0; s -= 4)
    if (R[s] > 0) {
      c = Math.ceil(s / 4 / lU);
      break;
    }
  F.clearRect(0, 0, lU, lU), F.strokeText("A", 0, lU), R = F.getImageData(0, 0, lU, lU).data, W = 0;
  for (let s = 0, b = R.length; s < b; s += 4)
    if (R[s] > 0) {
      W = lU - Math.floor(s / 4 / lU);
      break;
    }
  F.canvas.width = F.canvas.height = 0, F.font = d;
  const N = W ? W / (W + c) : on;
  return Q(this, fF).set(l, N), N;
}, i(gl, cZ), i(gl, fF, /* @__PURE__ */ new Map()), i(gl, _F, /* @__PURE__ */ new Map()), i(gl, QF, null), i(gl, t0, /* @__PURE__ */ new Set());
let w0 = gl;
function In() {
  xt("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: t,
    container: l,
    viewport: U,
    ...Z
  } = arguments[0], F = Object.keys(Z);
  F.length > 0 && H("Ignoring `renderTextLayer` parameters: " + F.join(", "));
  const d = new w0({
    textContentSource: t,
    container: l,
    viewport: U
  }), {
    textDivs: V,
    textContentItemsStr: W
  } = d;
  return {
    promise: d.render(),
    textDivs: V,
    textContentItemsStr: W
  };
}
function En() {
  xt("`updateTextLayer`, please use `TextLayer` instead.");
}
class cQ {
  static textContent(l) {
    const U = [], Z = {
      items: U,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function F(d) {
      var c;
      if (!d)
        return;
      let V = null;
      const W = d.name;
      if (W === "#text")
        V = d.value;
      else if (cQ.shouldBuildText(W))
        (c = d == null ? void 0 : d.attributes) != null && c.textContent ? V = d.attributes.textContent : d.value && (V = d.value);
      else return;
      if (V !== null && U.push({
        str: V
      }), !!d.children)
        for (const R of d.children)
          F(R);
    }
    return F(l), Z;
  }
  static shouldBuildText(l) {
    return !(l === "textarea" || l === "input" || l === "option" || l === "select");
  }
}
const Cn = 65536, wn = 100, xn = 5e3, jn = vl ? _b : Cb, On = vl ? qb : Ct, rn = vl ? fb : Eb, gn = vl ? $b : wt;
function Kn(t = {}) {
  typeof t == "string" || t instanceof URL ? t = {
    url: t
  } : (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (t = {
    data: t
  });
  const l = new fc(), {
    docId: U
  } = l, Z = t.url ? Hn(t.url) : null, F = t.data ? vn(t.data) : null, d = t.httpHeaders || null, V = t.withCredentials === !0, W = t.password ?? null, c = t.range instanceof pN ? t.range : null, R = Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0 ? t.rangeChunkSize : Cn;
  let N = t.worker instanceof jd ? t.worker : null;
  const s = t.verbosity, b = typeof t.docBaseUrl == "string" && !OR(t.docBaseUrl) ? t.docBaseUrl : null, n = typeof t.cMapUrl == "string" ? t.cMapUrl : null, h = t.cMapPacked !== !1, M = t.CMapReaderFactory || On, G = typeof t.standardFontDataUrl == "string" ? t.standardFontDataUrl : null, J = t.StandardFontDataFactory || gn, T = t.stopAtErrors !== !0, S = Number.isInteger(t.maxImageSize) && t.maxImageSize > -1 ? t.maxImageSize : -1, Y = t.isEvalSupported !== !1, B = typeof t.isOffscreenCanvasSupported == "boolean" ? t.isOffscreenCanvasSupported : !vl, X = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1, e = typeof t.disableFontFace == "boolean" ? t.disableFontFace : vl, L = t.fontExtraProperties === !0, I = t.enableXfa === !0, g = t.ownerDocument || globalThis.document, w = t.disableRange === !0, Wl = t.disableStream === !0, z = t.disableAutoFetch === !0, C = t.pdfBug === !0, K = t.enableHWA === !0, Ul = c ? c.length : t.length ?? NaN, k = typeof t.useSystemFonts == "boolean" ? t.useSystemFonts : !vl && !e, x = typeof t.useWorkerFetch == "boolean" ? t.useWorkerFetch : M === Ct && J === wt && n && G && v0(n, document.baseURI) && v0(G, document.baseURI), xl = t.canvasFactory || new jn({
    ownerDocument: g,
    enableHWA: K
  }), TF = t.filterFactory || new rn({
    docId: U,
    ownerDocument: g
  }), SF = null;
  Bb(s);
  const Jl = {
    canvasFactory: xl,
    filterFactory: TF
  };
  if (x || (Jl.cMapReaderFactory = new M({
    baseUrl: n,
    isCompressed: h
  }), Jl.standardFontDataFactory = new J({
    baseUrl: G
  })), !N) {
    const Gl = {
      verbosity: s,
      port: jZ.workerPort
    };
    N = Gl.port ? jd.fromPort(Gl) : new jd(Gl), l._worker = N;
  }
  const u = {
    docId: U,
    apiVersion: "4.4.168",
    data: F,
    password: W,
    disableAutoFetch: z,
    rangeChunkSize: R,
    length: Ul,
    docBaseUrl: b,
    enableXfa: I,
    evaluatorOptions: {
      maxImageSize: S,
      disableFontFace: e,
      ignoreErrors: T,
      isEvalSupported: Y,
      isOffscreenCanvasSupported: B,
      canvasMaxAreaInBytes: X,
      fontExtraProperties: L,
      useSystemFonts: k,
      cMapUrl: x ? n : null,
      standardFontDataUrl: x ? G : null
    }
  }, q = {
    disableFontFace: e,
    fontExtraProperties: L,
    ownerDocument: g,
    pdfBug: C,
    styleElement: SF,
    loadingParams: {
      disableAutoFetch: z,
      enableXfa: I
    }
  };
  return N.promise.then(function() {
    if (l.destroyed)
      throw new Error("Loading aborted");
    if (N.destroyed)
      throw new Error("Worker was destroyed");
    const Gl = N.messageHandler.sendWithPromise("GetDocRequest", u, F ? [F.buffer] : null);
    let jl;
    if (c)
      jl = new hn(c, {
        disableRange: w,
        disableStream: Wl
      });
    else if (!F) {
      if (!Z)
        throw new Error("getDocument - no `url` parameter provided.");
      jl = ((MU) => vl ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && v0(MU.url) ? new it(MU) : new pn(MU) : v0(MU.url) ? new it(MU) : new Yn(MU))({
        url: Z,
        length: Ul,
        httpHeaders: d,
        withCredentials: V,
        rangeChunkSize: R,
        disableRange: w,
        disableStream: Wl
      });
    }
    return Gl.then((sl) => {
      if (l.destroyed)
        throw new Error("Loading aborted");
      if (N.destroyed)
        throw new Error("Worker was destroyed");
      const MU = new f0(U, sl, N.port), qR = new _n(MU, l, jl, q, Jl);
      l._transport = qR, MU.send("Ready", null);
    });
  }).catch(l._capability.reject), l;
}
function Hn(t) {
  if (t instanceof URL)
    return t.href;
  try {
    return new URL(t, window.location).href;
  } catch {
    if (vl && typeof t == "string")
      return t;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function vn(t) {
  if (vl && typeof Buffer < "u" && t instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength)
    return t;
  if (typeof t == "string")
    return Uc(t);
  if (t instanceof ArrayBuffer || ArrayBuffer.isView(t) || typeof t == "object" && !isNaN(t == null ? void 0 : t.length))
    return new Uint8Array(t);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function Mt(t) {
  return typeof t == "object" && Number.isInteger(t == null ? void 0 : t.num) && t.num >= 0 && Number.isInteger(t == null ? void 0 : t.gen) && t.gen >= 0;
}
var rW;
const gW = class gW {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${WU(gW, rW)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var l, U, Z;
    this.destroyed = !0;
    try {
      (l = this._worker) != null && l.port && (this._worker._pendingDestroy = !0), await ((U = this._transport) == null ? void 0 : U.destroy());
    } catch (F) {
      throw (Z = this._worker) != null && Z.port && delete this._worker._pendingDestroy, F;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
rW = new WeakMap(), i(gW, rW, 0);
let fc = gW;
class pN {
  constructor(l, U, Z = !1, F = null) {
    this.length = l, this.initialData = U, this.progressiveDone = Z, this.contentDispositionFilename = F, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
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
    for (const Z of this._rangeListeners)
      Z(l, U);
  }
  onDataProgress(l, U) {
    this._readyCapability.promise.then(() => {
      for (const Z of this._progressListeners)
        Z(l, U);
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
    Ql("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Pn {
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
    return _(this, "isPureXfa", !!this._transport._htmlForXfa);
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
var VF, BZ, eU, od, VW;
class An {
  constructor(l, U, Z, F = !1) {
    i(this, eU);
    i(this, VF, null);
    i(this, BZ, !1);
    this._pageIndex = l, this._pageInfo = U, this._transport = Z, this._stats = F ? new Qt() : null, this._pdfBug = F, this.commonObjs = Z.commonObjs, this.objs = new yN(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    offsetX: Z = 0,
    offsetY: F = 0,
    dontFlip: d = !1
  } = {}) {
    return new OV({
      viewBox: this.view,
      scale: l,
      rotation: U,
      offsetX: Z,
      offsetY: F,
      dontFlip: d
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
    return _(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var l;
    return ((l = this._transport._htmlForXfa) == null ? void 0 : l.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: l,
    viewport: U,
    intent: Z = "display",
    annotationMode: F = fZ.ENABLE,
    transform: d = null,
    background: V = null,
    optionalContentConfigPromise: W = null,
    annotationCanvasMap: c = null,
    pageColors: R = null,
    printAnnotationStorage: N = null
  }) {
    var S, Y;
    (S = this._stats) == null || S.time("Overall");
    const s = this._transport.getRenderingIntent(Z, F, N), {
      renderingIntent: b,
      cacheKey: n
    } = s;
    a(this, BZ, !1), m(this, eU, VW).call(this), W || (W = this._transport.getOptionalContentConfig(b));
    let h = this._intentStates.get(n);
    h || (h = /* @__PURE__ */ Object.create(null), this._intentStates.set(n, h)), h.streamReaderCancelTimeout && (clearTimeout(h.streamReaderCancelTimeout), h.streamReaderCancelTimeout = null);
    const M = !!(b & YU.PRINT);
    h.displayReadyCapability || (h.displayReadyCapability = Promise.withResolvers(), h.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (Y = this._stats) == null || Y.time("Page Request"), this._pumpOperatorList(s));
    const G = (B) => {
      var X;
      h.renderTasks.delete(J), (this._maybeCleanupAfterRender || M) && a(this, BZ, !0), m(this, eU, od).call(this, !M), B ? (J.capability.reject(B), this._abortOperatorList({
        intentState: h,
        reason: B instanceof Error ? B : new Error(B)
      })) : J.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (X = globalThis.Stats) != null && X.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, J = new qc({
      callback: G,
      params: {
        canvasContext: l,
        viewport: U,
        transform: d,
        background: V
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: h.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !M,
      pdfBug: this._pdfBug,
      pageColors: R
    });
    (h.renderTasks || (h.renderTasks = /* @__PURE__ */ new Set())).add(J);
    const T = J.task;
    return Promise.all([h.displayReadyCapability.promise, W]).then(([B, X]) => {
      var e;
      if (this.destroyed) {
        G();
        return;
      }
      if ((e = this._stats) == null || e.time("Rendering"), !(X.renderingIntent & b))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      J.initializeGraphics({
        transparency: B,
        optionalContentConfig: X
      }), J.operatorListChanged();
    }).catch(G), T;
  }
  getOperatorList({
    intent: l = "display",
    annotationMode: U = fZ.ENABLE,
    printAnnotationStorage: Z = null
  } = {}) {
    var c;
    function F() {
      V.operatorList.lastChunk && (V.opListReadCapability.resolve(V.operatorList), V.renderTasks.delete(W));
    }
    const d = this._transport.getRenderingIntent(l, U, Z, !0);
    let V = this._intentStates.get(d.cacheKey);
    V || (V = /* @__PURE__ */ Object.create(null), this._intentStates.set(d.cacheKey, V));
    let W;
    return V.opListReadCapability || (W = /* @__PURE__ */ Object.create(null), W.operatorListChanged = F, V.opListReadCapability = Promise.withResolvers(), (V.renderTasks || (V.renderTasks = /* @__PURE__ */ new Set())).add(W), V.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(d)), V.opListReadCapability.promise;
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
      size(F) {
        return F.items.length;
      }
    });
  }
  getTextContent(l = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((Z) => cQ.textContent(Z));
    const U = this.streamTextContent(l);
    return new Promise(function(Z, F) {
      function d() {
        V.read().then(function({
          value: c,
          done: R
        }) {
          if (R) {
            Z(W);
            return;
          }
          W.lang ?? (W.lang = c.lang), Object.assign(W.styles, c.styles), W.items.push(...c.items), d();
        }, F);
      }
      const V = U.getReader(), W = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      d();
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
        for (const Z of U.renderTasks)
          l.push(Z.completed), Z.cancel();
    return this.objs.clear(), a(this, BZ, !1), m(this, eU, VW).call(this), Promise.all(l);
  }
  cleanup(l = !1) {
    a(this, BZ, !0);
    const U = m(this, eU, od).call(this, !1);
    return l && U && this._stats && (this._stats = new Qt()), U;
  }
  _startRenderPage(l, U) {
    var F, d;
    const Z = this._intentStates.get(U);
    Z && ((F = this._stats) == null || F.timeEnd("Page Request"), (d = Z.displayReadyCapability) == null || d.resolve(l));
  }
  _renderPageChunk(l, U) {
    for (let Z = 0, F = l.length; Z < F; Z++)
      U.operatorList.fnArray.push(l.fnArray[Z]), U.operatorList.argsArray.push(l.argsArray[Z]);
    U.operatorList.lastChunk = l.lastChunk, U.operatorList.separateAnnots = l.separateAnnots;
    for (const Z of U.renderTasks)
      Z.operatorListChanged();
    l.lastChunk && m(this, eU, od).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: l,
    cacheKey: U,
    annotationStorageSerializable: Z
  }) {
    const {
      map: F,
      transfer: d
    } = Z, W = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: l,
      cacheKey: U,
      annotationStorage: F
    }, d).getReader(), c = this._intentStates.get(U);
    c.streamReader = W;
    const R = () => {
      W.read().then(({
        value: N,
        done: s
      }) => {
        if (s) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(N, c), R());
      }, (N) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const s of c.renderTasks)
              s.operatorListChanged();
            m(this, eU, od).call(this, !0);
          }
          if (c.displayReadyCapability)
            c.displayReadyCapability.reject(N);
          else if (c.opListReadCapability)
            c.opListReadCapability.reject(N);
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
    force: Z = !1
  }) {
    if (l.streamReader) {
      if (l.streamReaderCancelTimeout && (clearTimeout(l.streamReaderCancelTimeout), l.streamReaderCancelTimeout = null), !Z) {
        if (l.renderTasks.size > 0)
          return;
        if (U instanceof jR) {
          let F = wn;
          U.extraDelay > 0 && U.extraDelay < 1e3 && (F += U.extraDelay), l.streamReaderCancelTimeout = setTimeout(() => {
            l.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: l,
              reason: U,
              force: !0
            });
          }, F);
          return;
        }
      }
      if (l.streamReader.cancel(new yd(U.message)).catch(() => {
      }), l.streamReader = null, !this._transport.destroyed) {
        for (const [F, d] of this._intentStates)
          if (d === l) {
            this._intentStates.delete(F);
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
VF = new WeakMap(), BZ = new WeakMap(), eU = new WeakSet(), od = function(l = !1) {
  if (m(this, eU, VW).call(this), !Q(this, BZ) || this.destroyed)
    return !1;
  if (l)
    return a(this, VF, setTimeout(() => {
      a(this, VF, null), m(this, eU, od).call(this, !1);
    }, xn)), !1;
  for (const {
    renderTasks: U,
    operatorList: Z
  } of this._intentStates.values())
    if (U.size > 0 || !Z.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), a(this, BZ, !1), !0;
}, VW = function() {
  Q(this, VF) && (clearTimeout(Q(this, VF)), a(this, VF, null));
};
var qF, KW;
class fn {
  constructor() {
    i(this, qF, /* @__PURE__ */ new Set());
    i(this, KW, Promise.resolve());
  }
  postMessage(l, U) {
    const Z = {
      data: structuredClone(l, U ? {
        transfer: U
      } : null)
    };
    Q(this, KW).then(() => {
      for (const F of Q(this, qF))
        F.call(this, Z);
    });
  }
  addEventListener(l, U) {
    Q(this, qF).add(U);
  }
  removeEventListener(l, U) {
    Q(this, qF).delete(U);
  }
  terminate() {
    Q(this, qF).clear();
  }
}
qF = new WeakMap(), KW = new WeakMap();
const hZ = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
vl && (hZ.isWorkerDisabled = !0, jZ.workerSrc || (jZ.workerSrc = "./pdf.worker.mjs")), hZ.isSameOrigin = function(t, l) {
  let U;
  try {
    if (U = new URL(t), !U.origin || U.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const Z = new URL(l, U);
  return U.origin === Z.origin;
}, hZ.createCDNWrapper = function(t) {
  const l = `await import("${t}");`;
  return URL.createObjectURL(new Blob([l], {
    type: "text/javascript"
  }));
};
var $F, N0, WW, s0, cW;
const RU = class RU {
  constructor({
    name: l = null,
    port: U = null,
    verbosity: Z = eb()
  } = {}) {
    i(this, N0);
    var F;
    if (this.name = l, this.destroyed = !1, this.verbosity = Z, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, U) {
      if ((F = Q(RU, $F)) != null && F.has(U))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (Q(RU, $F) || a(RU, $F, /* @__PURE__ */ new WeakMap())).set(U, this), this._initializeFromPort(U);
      return;
    }
    this._initialize();
  }
  get promise() {
    return vl ? Promise.all([RZ.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(l) {
    this._port = l, this._messageHandler = new f0("main", "worker", l), this._messageHandler.on("ready", function() {
    }), m(this, N0, WW).call(this);
  }
  _initialize() {
    if (hZ.isWorkerDisabled || Q(RU, s0, cW)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: l
    } = RU;
    try {
      hZ.isSameOrigin(window.location.href, l) || (l = hZ.createCDNWrapper(new URL(l, window.location).href));
      const U = new Worker(l, {
        type: "module"
      }), Z = new f0("main", "worker", U), F = () => {
        d.abort(), Z.destroy(), U.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, d = new AbortController();
      U.addEventListener("error", () => {
        this._webWorker || F();
      }, {
        signal: d.signal
      }), Z.on("test", (W) => {
        if (d.abort(), this.destroyed || !W) {
          F();
          return;
        }
        this._messageHandler = Z, this._port = U, this._webWorker = U, m(this, N0, WW).call(this);
      }), Z.on("ready", (W) => {
        if (d.abort(), this.destroyed) {
          F();
          return;
        }
        try {
          V();
        } catch {
          this._setupFakeWorker();
        }
      });
      const V = () => {
        const W = new Uint8Array();
        Z.send("test", W, [W.buffer]);
      };
      V();
      return;
    } catch {
      $W("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    hZ.isWorkerDisabled || (H("Setting up fake worker."), hZ.isWorkerDisabled = !0), RU._setupFakeWorkerGlobal.then((l) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const U = new fn();
      this._port = U;
      const Z = `fake${hZ.fakeWorkerId++}`, F = new f0(Z + "_worker", Z, U);
      l.setup(F, U), this._messageHandler = new f0(Z, Z + "_worker", U), m(this, N0, WW).call(this);
    }).catch((l) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${l.message}".`));
    });
  }
  destroy() {
    var l;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (l = Q(RU, $F)) == null || l.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(l) {
    var Z;
    if (!(l != null && l.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const U = (Z = Q(this, $F)) == null ? void 0 : Z.get(l.port);
    if (U) {
      if (U._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return U;
    }
    return new RU(l);
  }
  static get workerSrc() {
    if (jZ.workerSrc)
      return jZ.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return _(this, "_setupFakeWorkerGlobal", (async () => Q(this, s0, cW) ? Q(this, s0, cW) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
$F = new WeakMap(), N0 = new WeakSet(), WW = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, s0 = new WeakSet(), cW = function() {
  var l;
  try {
    return ((l = globalThis.pdfjsWorker) == null ? void 0 : l.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, i(RU, s0), i(RU, $F);
let jd = RU;
var eZ, _U, b0, n0, qU, ld, _0;
class _n {
  constructor(l, U, Z, F, d) {
    i(this, ld);
    i(this, eZ, /* @__PURE__ */ new Map());
    i(this, _U, /* @__PURE__ */ new Map());
    i(this, b0, /* @__PURE__ */ new Map());
    i(this, n0, /* @__PURE__ */ new Map());
    i(this, qU, null);
    this.messageHandler = l, this.loadingTask = U, this.commonObjs = new yN(), this.fontLoader = new Pb({
      ownerDocument: F.ownerDocument,
      styleElement: F.styleElement
    }), this.loadingParams = F.loadingParams, this._params = F, this.canvasFactory = d.canvasFactory, this.filterFactory = d.filterFactory, this.cMapReaderFactory = d.cMapReaderFactory, this.standardFontDataFactory = d.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = Z, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return _(this, "annotationStorage", new KR());
  }
  getRenderingIntent(l, U = fZ.ENABLE, Z = null, F = !1) {
    let d = YU.DISPLAY, V = Oc;
    switch (l) {
      case "any":
        d = YU.ANY;
        break;
      case "display":
        break;
      case "print":
        d = YU.PRINT;
        break;
      default:
        H(`getRenderingIntent - invalid intent: ${l}`);
    }
    switch (U) {
      case fZ.DISABLE:
        d += YU.ANNOTATIONS_DISABLE;
        break;
      case fZ.ENABLE:
        break;
      case fZ.ENABLE_FORMS:
        d += YU.ANNOTATIONS_FORMS;
        break;
      case fZ.ENABLE_STORAGE:
        d += YU.ANNOTATIONS_STORAGE, V = (d & YU.PRINT && Z instanceof nN ? Z : this.annotationStorage).serializable;
        break;
      default:
        H(`getRenderingIntent - invalid annotationMode: ${U}`);
    }
    return F && (d += YU.OPLIST), {
      renderingIntent: d,
      cacheKey: `${d}_${V.hash}`,
      annotationStorageSerializable: V
    };
  }
  destroy() {
    var Z;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (Z = Q(this, qU)) == null || Z.reject(new Error("Worker was destroyed during onPassword callback"));
    const l = [];
    for (const F of Q(this, _U).values())
      l.push(F._destroy());
    Q(this, _U).clear(), Q(this, b0).clear(), Q(this, n0).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const U = this.messageHandler.sendWithPromise("Terminate", null);
    return l.push(U), Promise.all(l).then(() => {
      var F;
      this.commonObjs.clear(), this.fontLoader.clear(), Q(this, eZ).clear(), this.filterFactory.destroy(), w0.cleanup(), (F = this._networkStream) == null || F.cancelAllRequests(new yd("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: l,
      loadingTask: U
    } = this;
    l.on("GetReader", (Z, F) => {
      ul(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (d) => {
        this._lastProgress = {
          loaded: d.loaded,
          total: d.total
        };
      }, F.onPull = () => {
        this._fullReader.read().then(function({
          value: d,
          done: V
        }) {
          if (V) {
            F.close();
            return;
          }
          ul(d instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), F.enqueue(new Uint8Array(d), 1, [d]);
        }).catch((d) => {
          F.error(d);
        });
      }, F.onCancel = (d) => {
        this._fullReader.cancel(d), F.ready.catch((V) => {
          if (!this.destroyed)
            throw V;
        });
      };
    }), l.on("ReaderHeadersReady", (Z) => {
      const F = Promise.withResolvers(), d = this._fullReader;
      return d.headersReady.then(() => {
        var V;
        (!d.isStreamingSupported || !d.isRangeSupported) && (this._lastProgress && ((V = U.onProgress) == null || V.call(U, this._lastProgress)), d.onProgress = (W) => {
          var c;
          (c = U.onProgress) == null || c.call(U, {
            loaded: W.loaded,
            total: W.total
          });
        }), F.resolve({
          isStreamingSupported: d.isStreamingSupported,
          isRangeSupported: d.isRangeSupported,
          contentLength: d.contentLength
        });
      }, F.reject), F.promise;
    }), l.on("GetRangeReader", (Z, F) => {
      ul(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const d = this._networkStream.getRangeReader(Z.begin, Z.end);
      if (!d) {
        F.close();
        return;
      }
      F.onPull = () => {
        d.read().then(function({
          value: V,
          done: W
        }) {
          if (W) {
            F.close();
            return;
          }
          ul(V instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), F.enqueue(new Uint8Array(V), 1, [V]);
        }).catch((V) => {
          F.error(V);
        });
      }, F.onCancel = (V) => {
        d.cancel(V), F.ready.catch((W) => {
          if (!this.destroyed)
            throw W;
        });
      };
    }), l.on("GetDoc", ({
      pdfInfo: Z
    }) => {
      this._numPages = Z.numPages, this._htmlForXfa = Z.htmlForXfa, delete Z.htmlForXfa, U._capability.resolve(new Pn(Z, this));
    }), l.on("DocException", function(Z) {
      let F;
      switch (Z.name) {
        case "PasswordException":
          F = new Mc(Z.message, Z.code);
          break;
        case "InvalidPDFException":
          F = new Dt(Z.message);
          break;
        case "MissingPDFException":
          F = new pd(Z.message);
          break;
        case "UnexpectedResponseException":
          F = new lc(Z.message, Z.status);
          break;
        case "UnknownErrorException":
          F = new Jc(Z.message, Z.details);
          break;
        default:
          Ql("DocException - expected a valid Error.");
      }
      U._capability.reject(F);
    }), l.on("PasswordRequest", (Z) => {
      if (a(this, qU, Promise.withResolvers()), U.onPassword) {
        const F = (d) => {
          d instanceof Error ? Q(this, qU).reject(d) : Q(this, qU).resolve({
            password: d
          });
        };
        try {
          U.onPassword(F, Z.code);
        } catch (d) {
          Q(this, qU).reject(d);
        }
      } else
        Q(this, qU).reject(new Mc(Z.message, Z.code));
      return Q(this, qU).promise;
    }), l.on("DataLoaded", (Z) => {
      var F;
      (F = U.onProgress) == null || F.call(U, {
        loaded: Z.length,
        total: Z.length
      }), this.downloadInfoCapability.resolve(Z);
    }), l.on("StartRenderPage", (Z) => {
      if (this.destroyed)
        return;
      Q(this, _U).get(Z.pageIndex)._startRenderPage(Z.transparency, Z.cacheKey);
    }), l.on("commonobj", ([Z, F, d]) => {
      var V;
      if (this.destroyed || this.commonObjs.has(Z))
        return null;
      switch (F) {
        case "Font":
          const {
            disableFontFace: W,
            fontExtraProperties: c,
            pdfBug: R
          } = this._params;
          if ("error" in d) {
            const n = d.error;
            H(`Error during font loading: ${n}`), this.commonObjs.resolve(Z, n);
            break;
          }
          const N = R && ((V = globalThis.FontInspector) != null && V.enabled) ? (n, h) => globalThis.FontInspector.fontAdded(n, h) : null, s = new Ab(d, {
            disableFontFace: W,
            inspectFont: N
          });
          this.fontLoader.bind(s).catch(() => l.sendWithPromise("FontFallback", {
            id: Z
          })).finally(() => {
            !c && s.data && (s.data = null), this.commonObjs.resolve(Z, s);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: b
          } = d;
          ul(b, "The imageRef must be defined.");
          for (const n of Q(this, _U).values())
            for (const [, h] of n.objs)
              if ((h == null ? void 0 : h.ref) === b)
                return h.dataLen ? (this.commonObjs.resolve(Z, structuredClone(h)), h.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(Z, d);
          break;
        default:
          throw new Error(`Got unknown common object type ${F}`);
      }
      return null;
    }), l.on("obj", ([Z, F, d, V]) => {
      var c;
      if (this.destroyed)
        return;
      const W = Q(this, _U).get(F);
      if (!W.objs.has(Z)) {
        if (W._intentStates.size === 0) {
          (c = V == null ? void 0 : V.bitmap) == null || c.close();
          return;
        }
        switch (d) {
          case "Image":
            W.objs.resolve(Z, V), (V == null ? void 0 : V.dataLen) > Tb && (W._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            W.objs.resolve(Z, V);
            break;
          default:
            throw new Error(`Got unknown object type ${d}`);
        }
      }
    }), l.on("DocProgress", (Z) => {
      var F;
      this.destroyed || (F = U.onProgress) == null || F.call(U, {
        loaded: Z.loaded,
        total: Z.total
      });
    }), l.on("FetchBuiltInCMap", (Z) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(Z) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), l.on("FetchStandardFontData", (Z) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(Z) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var Z;
    this.annotationStorage.size <= 0 && H("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: l,
      transfer: U
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: l,
      filename: ((Z = this._fullReader) == null ? void 0 : Z.filename) ?? null
    }, U).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(l) {
    if (!Number.isInteger(l) || l <= 0 || l > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const U = l - 1, Z = Q(this, b0).get(U);
    if (Z)
      return Z;
    const F = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: U
    }).then((d) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      d.refStr && Q(this, n0).set(d.refStr, l);
      const V = new An(U, d, this, this._params.pdfBug);
      return Q(this, _U).set(U, V), V;
    });
    return Q(this, b0).set(U, F), F;
  }
  getPageIndex(l) {
    return Mt(l) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return m(this, ld, _0).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return m(this, ld, _0).call(this, "HasJSActions");
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
    return m(this, ld, _0).call(this, "GetDocJSActions");
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
    return m(this, ld, _0).call(this, "GetOptionalContentConfig").then((U) => new an(U, l));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const l = "GetMetadata", U = Q(this, eZ).get(l);
    if (U)
      return U;
    const Z = this.messageHandler.sendWithPromise(l, null).then((F) => {
      var d, V;
      return {
        info: F[0],
        metadata: F[1] ? new bn(F[1]) : null,
        contentDispositionFilename: ((d = this._fullReader) == null ? void 0 : d.filename) ?? null,
        contentLength: ((V = this._fullReader) == null ? void 0 : V.contentLength) ?? null
      };
    });
    return Q(this, eZ).set(l, Z), Z;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(l = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const U of Q(this, _U).values())
        if (!U.cleanup())
          throw new Error(`startCleanup: Page ${U.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), l || this.fontLoader.clear(), Q(this, eZ).clear(), this.filterFactory.destroy(!0), w0.cleanup();
    }
  }
  cachedPageNumber(l) {
    if (!Mt(l))
      return null;
    const U = l.gen === 0 ? `${l.num}R` : `${l.num}R${l.gen}`;
    return Q(this, n0).get(U) ?? null;
  }
}
eZ = new WeakMap(), _U = new WeakMap(), b0 = new WeakMap(), n0 = new WeakMap(), qU = new WeakMap(), ld = new WeakSet(), _0 = function(l, U = null) {
  const Z = Q(this, eZ).get(l);
  if (Z)
    return Z;
  const F = this.messageHandler.sendWithPromise(l, U);
  return Q(this, eZ).set(l, F), F;
};
const AV = Symbol("INITIAL_DATA");
var IU, $Q, _c;
class yN {
  constructor() {
    i(this, $Q);
    i(this, IU, /* @__PURE__ */ Object.create(null));
  }
  get(l, U = null) {
    if (U) {
      const F = m(this, $Q, _c).call(this, l);
      return F.promise.then(() => U(F.data)), null;
    }
    const Z = Q(this, IU)[l];
    if (!Z || Z.data === AV)
      throw new Error(`Requesting object that isn't resolved yet ${l}.`);
    return Z.data;
  }
  has(l) {
    const U = Q(this, IU)[l];
    return !!U && U.data !== AV;
  }
  resolve(l, U = null) {
    const Z = m(this, $Q, _c).call(this, l);
    Z.data = U, Z.resolve();
  }
  clear() {
    var l;
    for (const U in Q(this, IU)) {
      const {
        data: Z
      } = Q(this, IU)[U];
      (l = Z == null ? void 0 : Z.bitmap) == null || l.close();
    }
    a(this, IU, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const l in Q(this, IU)) {
      const {
        data: U
      } = Q(this, IU)[l];
      U !== AV && (yield [l, U]);
    }
  }
}
IU = new WeakMap(), $Q = new WeakSet(), _c = function(l) {
  var U;
  return (U = Q(this, IU))[l] || (U[l] = {
    ...Promise.withResolvers(),
    data: AV
  });
};
var WF;
class qn {
  constructor(l) {
    i(this, WF, null);
    a(this, WF, l), this.onContinue = null;
  }
  get promise() {
    return Q(this, WF).capability.promise;
  }
  cancel(l = 0) {
    Q(this, WF).cancel(null, l);
  }
  get separateAnnots() {
    const {
      separateAnnots: l
    } = Q(this, WF).operatorList;
    if (!l)
      return !1;
    const {
      annotationCanvasMap: U
    } = Q(this, WF);
    return l.form || l.canvas && (U == null ? void 0 : U.size) > 0;
  }
}
WF = new WeakMap();
var cF, Ud;
const uF = class uF {
  constructor({
    callback: l,
    params: U,
    objs: Z,
    commonObjs: F,
    annotationCanvasMap: d,
    operatorList: V,
    pageIndex: W,
    canvasFactory: c,
    filterFactory: R,
    useRequestAnimationFrame: N = !1,
    pdfBug: s = !1,
    pageColors: b = null
  }) {
    i(this, cF, null);
    this.callback = l, this.params = U, this.objs = Z, this.commonObjs = F, this.annotationCanvasMap = d, this.operatorListIdx = null, this.operatorList = V, this._pageIndex = W, this.canvasFactory = c, this.filterFactory = R, this._pdfBug = s, this.pageColors = b, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = N === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new qn(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = U.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: l = !1,
    optionalContentConfig: U
  }) {
    var W, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (Q(uF, Ud).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      Q(uF, Ud).add(this._canvas);
    }
    this._pdfBug && ((W = globalThis.StepperManager) != null && W.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: Z,
      viewport: F,
      transform: d,
      background: V
    } = this.params;
    this.gfx = new xd(Z, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: U
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: d,
      viewport: F,
      transparency: l,
      background: V
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(l = null, U = 0) {
    var Z;
    this.running = !1, this.cancelled = !0, (Z = this.gfx) == null || Z.endDrawing(), Q(this, cF) && (window.cancelAnimationFrame(Q(this, cF)), a(this, cF, null)), Q(uF, Ud).delete(this._canvas), this.callback(l || new jR(`Rendering cancelled, page ${this._pageIndex + 1}`, U));
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
    this._useRequestAnimationFrame ? a(this, cF, window.requestAnimationFrame(() => {
      a(this, cF, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), Q(uF, Ud).delete(this._canvas), this.callback())));
  }
};
cF = new WeakMap(), Ud = new WeakMap(), i(uF, Ud, /* @__PURE__ */ new WeakSet());
let qc = uF;
const $n = "4.4.168", la = "19fbc8998";
function Jt(t) {
  return Math.floor(Math.max(0, Math.min(1, t)) * 255).toString(16).padStart(2, "0");
}
function r0(t) {
  return Math.max(0, Math.min(255, 255 * t));
}
class Gt {
  static CMYK_G([l, U, Z, F]) {
    return ["G", 1 - Math.min(1, 0.3 * l + 0.59 * Z + 0.11 * U + F)];
  }
  static G_CMYK([l]) {
    return ["CMYK", 0, 0, 0, 1 - l];
  }
  static G_RGB([l]) {
    return ["RGB", l, l, l];
  }
  static G_rgb([l]) {
    return l = r0(l), [l, l, l];
  }
  static G_HTML([l]) {
    const U = Jt(l);
    return `#${U}${U}${U}`;
  }
  static RGB_G([l, U, Z]) {
    return ["G", 0.3 * l + 0.59 * U + 0.11 * Z];
  }
  static RGB_rgb(l) {
    return l.map(r0);
  }
  static RGB_HTML(l) {
    return `#${l.map(Jt).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([l, U, Z, F]) {
    return ["RGB", 1 - Math.min(1, l + F), 1 - Math.min(1, Z + F), 1 - Math.min(1, U + F)];
  }
  static CMYK_rgb([l, U, Z, F]) {
    return [r0(1 - Math.min(1, l + F)), r0(1 - Math.min(1, Z + F)), r0(1 - Math.min(1, U + F))];
  }
  static CMYK_HTML(l) {
    const U = this.CMYK_RGB(l).slice(1);
    return this.RGB_HTML(U);
  }
  static RGB_CMYK([l, U, Z]) {
    const F = 1 - l, d = 1 - U, V = 1 - Z, W = Math.min(F, d, V);
    return ["CMYK", F, d, V, W];
  }
}
class zN {
  static setupStorage(l, U, Z, F, d) {
    const V = F.getValue(U, {
      value: null
    });
    switch (Z.name) {
      case "textarea":
        if (V.value !== null && (l.textContent = V.value), d === "print")
          break;
        l.addEventListener("input", (W) => {
          F.setValue(U, {
            value: W.target.value
          });
        });
        break;
      case "input":
        if (Z.attributes.type === "radio" || Z.attributes.type === "checkbox") {
          if (V.value === Z.attributes.xfaOn ? l.setAttribute("checked", !0) : V.value === Z.attributes.xfaOff && l.removeAttribute("checked"), d === "print")
            break;
          l.addEventListener("change", (W) => {
            F.setValue(U, {
              value: W.target.checked ? W.target.getAttribute("xfaOn") : W.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (V.value !== null && l.setAttribute("value", V.value), d === "print")
            break;
          l.addEventListener("input", (W) => {
            F.setValue(U, {
              value: W.target.value
            });
          });
        }
        break;
      case "select":
        if (V.value !== null) {
          l.setAttribute("value", V.value);
          for (const W of Z.children)
            W.attributes.value === V.value ? W.attributes.selected = !0 : W.attributes.hasOwnProperty("selected") && delete W.attributes.selected;
        }
        l.addEventListener("input", (W) => {
          const c = W.target.options, R = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
          F.setValue(U, {
            value: R
          });
        });
        break;
    }
  }
  static setAttributes({
    html: l,
    element: U,
    storage: Z = null,
    intent: F,
    linkService: d
  }) {
    const {
      attributes: V
    } = U, W = l instanceof HTMLAnchorElement;
    V.type === "radio" && (V.name = `${V.name}-${F}`);
    for (const [c, R] of Object.entries(V))
      if (R != null)
        switch (c) {
          case "class":
            R.length && l.setAttribute(c, R.join(" "));
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
            (!W || c !== "href" && c !== "newWindow") && l.setAttribute(c, R);
        }
    W && d.addLinkAttributes(l, V.href, V.newWindow), Z && V.dataId && this.setupStorage(l, V.dataId, U, Z);
  }
  static render(l) {
    var s, b;
    const U = l.annotationStorage, Z = l.linkService, F = l.xfaHtml, d = l.intent || "display", V = document.createElement(F.name);
    F.attributes && this.setAttributes({
      html: V,
      element: F,
      intent: d,
      linkService: Z
    });
    const W = d !== "richText", c = l.div;
    if (c.append(V), l.viewport) {
      const n = `matrix(${l.viewport.transform.join(",")})`;
      c.style.transform = n;
    }
    W && c.setAttribute("class", "xfaLayer xfaFont");
    const R = [];
    if (F.children.length === 0) {
      if (F.value) {
        const n = document.createTextNode(F.value);
        V.append(n), W && cQ.shouldBuildText(F.name) && R.push(n);
      }
      return {
        textDivs: R
      };
    }
    const N = [[F, -1, V]];
    for (; N.length > 0; ) {
      const [n, h, M] = N.at(-1);
      if (h + 1 === n.children.length) {
        N.pop();
        continue;
      }
      const G = n.children[++N.at(-1)[1]];
      if (G === null)
        continue;
      const {
        name: J
      } = G;
      if (J === "#text") {
        const S = document.createTextNode(G.value);
        R.push(S), M.append(S);
        continue;
      }
      const T = (s = G == null ? void 0 : G.attributes) != null && s.xmlns ? document.createElementNS(G.attributes.xmlns, J) : document.createElement(J);
      if (M.append(T), G.attributes && this.setAttributes({
        html: T,
        element: G,
        storage: U,
        intent: d,
        linkService: Z
      }), ((b = G.children) == null ? void 0 : b.length) > 0)
        N.push([G, -1, T]);
      else if (G.value) {
        const S = document.createTextNode(G.value);
        W && cQ.shouldBuildText(J) && R.push(S), T.append(S);
      }
    }
    for (const n of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      n.setAttribute("readOnly", !0);
    return {
      textDivs: R
    };
  }
  static update(l) {
    const U = `matrix(${l.viewport.transform.join(",")})`;
    l.div.style.transform = U, l.div.hidden = !1;
  }
}
const KV = 1e3, Ua = 9, Bd = /* @__PURE__ */ new WeakSet();
function OZ(t) {
  return {
    width: t[2] - t[0],
    height: t[3] - t[1]
  };
}
class Za {
  static create(l) {
    switch (l.data.annotationType) {
      case Tl.LINK:
        return new LN(l);
      case Tl.TEXT:
        return new Fa(l);
      case Tl.WIDGET:
        switch (l.data.fieldType) {
          case "Tx":
            return new da(l);
          case "Btn":
            return l.data.radioButton ? new oN(l) : l.data.checkBox ? new Va(l) : new Wa(l);
          case "Ch":
            return new ca(l);
          case "Sig":
            return new Qa(l);
        }
        return new zd(l);
      case Tl.POPUP:
        return new lR(l);
      case Tl.FREETEXT:
        return new xN(l);
      case Tl.LINE:
        return new ta(l);
      case Tl.SQUARE:
        return new Na(l);
      case Tl.CIRCLE:
        return new sa(l);
      case Tl.POLYLINE:
        return new jN(l);
      case Tl.CARET:
        return new na(l);
      case Tl.INK:
        return new ON(l);
      case Tl.POLYGON:
        return new ba(l);
      case Tl.HIGHLIGHT:
        return new aa(l);
      case Tl.UNDERLINE:
        return new ha(l);
      case Tl.SQUIGGLY:
        return new ma(l);
      case Tl.STRIKEOUT:
        return new ia(l);
      case Tl.STAMP:
        return new rN(l);
      case Tl.FILEATTACHMENT:
        return new Ma(l);
      default:
        return new ml(l);
    }
  }
}
var Zd, a0, h0, lV, $c;
const _R = class _R {
  constructor(l, {
    isRenderable: U = !1,
    ignoreBorder: Z = !1,
    createQuadrilaterals: F = !1
  } = {}) {
    i(this, lV);
    i(this, Zd, null);
    i(this, a0, !1);
    i(this, h0, null);
    this.isRenderable = U, this.data = l.data, this.layer = l.layer, this.linkService = l.linkService, this.downloadManager = l.downloadManager, this.imageResourcesPath = l.imageResourcesPath, this.renderForms = l.renderForms, this.svgFactory = l.svgFactory, this.annotationStorage = l.annotationStorage, this.enableScripting = l.enableScripting, this.hasJSActions = l.hasJSActions, this._fieldObjects = l.fieldObjects, this.parent = l.parent, U && (this.container = this._createContainer(Z)), F && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: l,
    contentsObj: U,
    richText: Z
  }) {
    return !!(l != null && l.str || U != null && U.str || Z != null && Z.str);
  }
  get hasPopupData() {
    return _R._hasPopupData(this.data);
  }
  updateEdited(l) {
    var Z;
    if (!this.container)
      return;
    Q(this, Zd) || a(this, Zd, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: U
    } = l;
    U && m(this, lV, $c).call(this, U), (Z = Q(this, h0)) == null || Z.popup.updateEdited(l);
  }
  resetEdited() {
    var l;
    Q(this, Zd) && (m(this, lV, $c).call(this, Q(this, Zd).rect), (l = Q(this, h0)) == null || l.popup.resetEdited(), a(this, Zd, null));
  }
  _createContainer(l) {
    const {
      data: U,
      parent: {
        page: Z,
        viewport: F
      }
    } = this, d = document.createElement("section");
    d.setAttribute("data-annotation-id", U.id), this instanceof zd || (d.tabIndex = KV);
    const {
      style: V
    } = d;
    if (V.zIndex = this.parent.zIndex++, U.popupRef && d.setAttribute("aria-haspopup", "dialog"), U.alternativeText && (d.title = U.alternativeText), U.noRotate && d.classList.add("norotate"), !U.rect || this instanceof lR) {
      const {
        rotation: M
      } = U;
      return !U.hasOwnCanvas && M !== 0 && this.setRotation(M, d), d;
    }
    const {
      width: W,
      height: c
    } = OZ(U.rect);
    if (!l && U.borderStyle.width > 0) {
      V.borderWidth = `${U.borderStyle.width}px`;
      const M = U.borderStyle.horizontalCornerRadius, G = U.borderStyle.verticalCornerRadius;
      if (M > 0 || G > 0) {
        const T = `calc(${M}px * var(--scale-factor)) / calc(${G}px * var(--scale-factor))`;
        V.borderRadius = T;
      } else if (this instanceof oN) {
        const T = `calc(${W}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        V.borderRadius = T;
      }
      switch (U.borderStyle.style) {
        case j0.SOLID:
          V.borderStyle = "solid";
          break;
        case j0.DASHED:
          V.borderStyle = "dashed";
          break;
        case j0.BEVELED:
          H("Unimplemented border style: beveled");
          break;
        case j0.INSET:
          H("Unimplemented border style: inset");
          break;
        case j0.UNDERLINE:
          V.borderBottomStyle = "solid";
          break;
      }
      const J = U.borderColor || null;
      J ? (a(this, a0, !0), V.borderColor = o.makeHexColor(J[0] | 0, J[1] | 0, J[2] | 0)) : V.borderWidth = 0;
    }
    const R = o.normalizeRect([U.rect[0], Z.view[3] - U.rect[1] + Z.view[1], U.rect[2], Z.view[3] - U.rect[3] + Z.view[1]]), {
      pageWidth: N,
      pageHeight: s,
      pageX: b,
      pageY: n
    } = F.rawDims;
    V.left = `${100 * (R[0] - b) / N}%`, V.top = `${100 * (R[1] - n) / s}%`;
    const {
      rotation: h
    } = U;
    return U.hasOwnCanvas || h === 0 ? (V.width = `${100 * W / N}%`, V.height = `${100 * c / s}%`) : this.setRotation(h, d), d;
  }
  setRotation(l, U = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: Z,
      pageHeight: F
    } = this.parent.viewport.rawDims, {
      width: d,
      height: V
    } = OZ(this.data.rect);
    let W, c;
    l % 180 === 0 ? (W = 100 * d / Z, c = 100 * V / F) : (W = 100 * V / Z, c = 100 * d / F), U.style.width = `${W}%`, U.style.height = `${c}%`, U.setAttribute("data-main-rotation", (360 - l) % 360);
  }
  get _commonActions() {
    const l = (U, Z, F) => {
      const d = F.detail[U], V = d[0], W = d.slice(1);
      F.target.style[Z] = Gt[`${V}_HTML`](W), this.annotationStorage.setValue(this.data.id, {
        [Z]: Gt[`${V}_rgb`](W)
      });
    };
    return _(this, "_commonActions", {
      display: (U) => {
        const {
          display: Z
        } = U.detail, F = Z % 2 === 1;
        this.container.style.visibility = F ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: F,
          noPrint: Z === 1 || Z === 2
        });
      },
      print: (U) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !U.detail.print
        });
      },
      hidden: (U) => {
        const {
          hidden: Z
        } = U.detail;
        this.container.style.visibility = Z ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: Z,
          noView: Z
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
        const Z = U.detail.rotation;
        this.setRotation(Z), this.annotationStorage.setValue(this.data.id, {
          rotation: Z
        });
      }
    });
  }
  _dispatchEventFromSandbox(l, U) {
    const Z = this._commonActions;
    for (const F of Object.keys(U.detail)) {
      const d = l[F] || Z[F];
      d == null || d(U);
    }
  }
  _setDefaultPropertiesFromJS(l) {
    if (!this.enableScripting)
      return;
    const U = this.annotationStorage.getRawValue(this.data.id);
    if (!U)
      return;
    const Z = this._commonActions;
    for (const [F, d] of Object.entries(U)) {
      const V = Z[F];
      if (V) {
        const W = {
          detail: {
            [F]: d
          },
          target: l
        };
        V(W), delete U[F];
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
    const [U, Z, F, d] = this.data.rect.map((M) => Math.fround(M));
    if (l.length === 8) {
      const [M, G, J, T] = l.subarray(2, 6);
      if (F === M && d === G && U === J && Z === T)
        return;
    }
    const {
      style: V
    } = this.container;
    let W;
    if (Q(this, a0)) {
      const {
        borderColor: M,
        borderWidth: G
      } = V;
      V.borderWidth = 0, W = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${M}" stroke-width="${G}">`], this.container.classList.add("hasBorder");
    }
    const c = F - U, R = d - Z, {
      svgFactory: N
    } = this, s = N.createElement("svg");
    s.classList.add("quadrilateralsContainer"), s.setAttribute("width", 0), s.setAttribute("height", 0);
    const b = N.createElement("defs");
    s.append(b);
    const n = N.createElement("clipPath"), h = `clippath_${this.data.id}`;
    n.setAttribute("id", h), n.setAttribute("clipPathUnits", "objectBoundingBox"), b.append(n);
    for (let M = 2, G = l.length; M < G; M += 8) {
      const J = l[M], T = l[M + 1], S = l[M + 2], Y = l[M + 3], B = N.createElement("rect"), X = (S - U) / c, e = (d - T) / R, L = (J - S) / c, I = (T - Y) / R;
      B.setAttribute("x", X), B.setAttribute("y", e), B.setAttribute("width", L), B.setAttribute("height", I), n.append(B), W == null || W.push(`<rect vector-effect="non-scaling-stroke" x="${X}" y="${e}" width="${L}" height="${I}"/>`);
    }
    Q(this, a0) && (W.push("</g></svg>')"), V.backgroundImage = W.join("")), this.container.append(s), this.container.style.clipPath = `url(#${h})`;
  }
  _createPopup() {
    const {
      container: l,
      data: U
    } = this;
    l.setAttribute("aria-haspopup", "dialog");
    const Z = a(this, h0, new lR({
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
    this.parent.div.append(Z.render());
  }
  render() {
    Ql("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(l, U = null) {
    const Z = [];
    if (this._fieldObjects) {
      const F = this._fieldObjects[l];
      if (F)
        for (const {
          page: d,
          id: V,
          exportValues: W
        } of F) {
          if (d === -1 || V === U)
            continue;
          const c = typeof W == "string" ? W : null, R = document.querySelector(`[data-element-id="${V}"]`);
          if (R && !Bd.has(R)) {
            H(`_getElementsByName - element not allowed: ${V}`);
            continue;
          }
          Z.push({
            id: V,
            exportValue: c,
            domElement: R
          });
        }
      return Z;
    }
    for (const F of document.getElementsByName(l)) {
      const {
        exportValue: d
      } = F, V = F.getAttribute("data-element-id");
      V !== U && Bd.has(F) && Z.push({
        id: V,
        exportValue: d,
        domElement: F
      });
    }
    return Z;
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
      var Z;
      (Z = this.linkService.eventBus) == null || Z.dispatch("switchannotationeditormode", {
        source: this,
        mode: l,
        editId: U
      });
    });
  }
};
Zd = new WeakMap(), a0 = new WeakMap(), h0 = new WeakMap(), lV = new WeakSet(), $c = function(l) {
  const {
    container: {
      style: U
    },
    data: {
      rect: Z,
      rotation: F
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: d,
          pageHeight: V,
          pageX: W,
          pageY: c
        }
      }
    }
  } = this;
  Z == null || Z.splice(0, 4, ...l);
  const {
    width: R,
    height: N
  } = OZ(l);
  U.left = `${100 * (l[0] - W) / d}%`, U.top = `${100 * (V - l[3] + c) / V}%`, F === 0 ? (U.width = `${100 * R / d}%`, U.height = `${100 * N / V}%`) : this.setRotation(F);
};
let ml = _R;
var iU, XF, kN, DN;
class LN extends ml {
  constructor(U, Z = null) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !!(Z != null && Z.ignoreBorder),
      createQuadrilaterals: !0
    });
    i(this, iU);
    this.isTooltipOnly = U.data.isTooltipOnly;
  }
  render() {
    const {
      data: U,
      linkService: Z
    } = this, F = document.createElement("a");
    F.setAttribute("data-element-id", U.id);
    let d = !1;
    return U.url ? (Z.addLinkAttributes(F, U.url, U.newWindow), d = !0) : U.action ? (this._bindNamedAction(F, U.action), d = !0) : U.attachment ? (m(this, iU, kN).call(this, F, U.attachment, U.attachmentDest), d = !0) : U.setOCGState ? (m(this, iU, DN).call(this, F, U.setOCGState), d = !0) : U.dest ? (this._bindLink(F, U.dest), d = !0) : (U.actions && (U.actions.Action || U.actions["Mouse Up"] || U.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(F, U), d = !0), U.resetForm ? (this._bindResetFormAction(F, U.resetForm), d = !0) : this.isTooltipOnly && !d && (this._bindLink(F, ""), d = !0)), this.container.classList.add("linkAnnotation"), d && this.container.append(F), this.container;
  }
  _bindLink(U, Z) {
    U.href = this.linkService.getDestinationHash(Z), U.onclick = () => (Z && this.linkService.goToDestination(Z), !1), (Z || Z === "") && m(this, iU, XF).call(this);
  }
  _bindNamedAction(U, Z) {
    U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeNamedAction(Z), !1), m(this, iU, XF).call(this);
  }
  _bindJSAction(U, Z) {
    U.href = this.linkService.getAnchorUrl("");
    const F = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const d of Object.keys(Z.actions)) {
      const V = F.get(d);
      V && (U[V] = () => {
        var W;
        return (W = this.linkService.eventBus) == null || W.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: Z.id,
            name: d
          }
        }), !1;
      });
    }
    U.onclick || (U.onclick = () => !1), m(this, iU, XF).call(this);
  }
  _bindResetFormAction(U, Z) {
    const F = U.onclick;
    if (F || (U.href = this.linkService.getAnchorUrl("")), m(this, iU, XF).call(this), !this._fieldObjects) {
      H('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), F || (U.onclick = () => !1);
      return;
    }
    U.onclick = () => {
      var s;
      F == null || F();
      const {
        fields: d,
        refs: V,
        include: W
      } = Z, c = [];
      if (d.length !== 0 || V.length !== 0) {
        const b = new Set(V);
        for (const n of d) {
          const h = this._fieldObjects[n] || [];
          for (const {
            id: M
          } of h)
            b.add(M);
        }
        for (const n of Object.values(this._fieldObjects))
          for (const h of n)
            b.has(h.id) === W && c.push(h);
      } else
        for (const b of Object.values(this._fieldObjects))
          c.push(...b);
      const R = this.annotationStorage, N = [];
      for (const b of c) {
        const {
          id: n
        } = b;
        switch (N.push(n), b.type) {
          case "text": {
            const M = b.defaultValue || "";
            R.setValue(n, {
              value: M
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const M = b.defaultValue === b.exportValues;
            R.setValue(n, {
              value: M
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const M = b.defaultValue || "";
            R.setValue(n, {
              value: M
            });
            break;
          }
          default:
            continue;
        }
        const h = document.querySelector(`[data-element-id="${n}"]`);
        if (h) {
          if (!Bd.has(h)) {
            H(`_bindResetFormAction - element not allowed: ${n}`);
            continue;
          }
        } else continue;
        h.dispatchEvent(new Event("resetform"));
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
iU = new WeakSet(), XF = function() {
  this.container.setAttribute("data-internal-link", "");
}, kN = function(U, Z, F = null) {
  U.href = this.linkService.getAnchorUrl(""), Z.description && (U.title = Z.description), U.onclick = () => {
    var d;
    return (d = this.downloadManager) == null || d.openOrDownloadData(Z.content, Z.filename, F), !1;
  }, m(this, iU, XF).call(this);
}, DN = function(U, Z) {
  U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeSetOCGState(Z), !1), m(this, iU, XF).call(this);
};
class Fa extends ml {
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
class zd extends ml {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(l) {
    var U;
    this.data.hasOwnCanvas && (((U = l.previousSibling) == null ? void 0 : U.nodeName) === "CANVAS" && (l.previousSibling.hidden = !0), l.hidden = !1);
  }
  _getKeyModifier(l) {
    return dU.platform.isMac ? l.metaKey : l.ctrlKey;
  }
  _setEventListener(l, U, Z, F, d) {
    Z.includes("mouse") ? l.addEventListener(Z, (V) => {
      var W;
      (W = this.linkService.eventBus) == null || W.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: F,
          value: d(V),
          shift: V.shiftKey,
          modifier: this._getKeyModifier(V)
        }
      });
    }) : l.addEventListener(Z, (V) => {
      var W;
      if (Z === "blur") {
        if (!U.focused || !V.relatedTarget)
          return;
        U.focused = !1;
      } else if (Z === "focus") {
        if (U.focused)
          return;
        U.focused = !0;
      }
      d && ((W = this.linkService.eventBus) == null || W.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: F,
          value: d(V)
        }
      }));
    });
  }
  _setEventListeners(l, U, Z, F) {
    var d, V, W;
    for (const [c, R] of Z)
      (R === "Action" || (d = this.data.actions) != null && d[R]) && ((R === "Focus" || R === "Blur") && (U || (U = {
        focused: !1
      })), this._setEventListener(l, U, c, R, F), R === "Focus" && !((V = this.data.actions) != null && V.Blur) ? this._setEventListener(l, U, "blur", "Blur", null) : R === "Blur" && !((W = this.data.actions) != null && W.Focus) && this._setEventListener(l, U, "focus", "Focus", null));
  }
  _setBackgroundColor(l) {
    const U = this.data.backgroundColor || null;
    l.style.backgroundColor = U === null ? "transparent" : o.makeHexColor(U[0], U[1], U[2]);
  }
  _setTextStyle(l) {
    const U = ["left", "center", "right"], {
      fontColor: Z
    } = this.data.defaultAppearanceData, F = this.data.defaultAppearanceData.fontSize || Ua, d = l.style;
    let V;
    const W = 2, c = (R) => Math.round(10 * R) / 10;
    if (this.data.multiLine) {
      const R = Math.abs(this.data.rect[3] - this.data.rect[1] - W), N = Math.round(R / (tc * F)) || 1, s = R / N;
      V = Math.min(F, c(s / tc));
    } else {
      const R = Math.abs(this.data.rect[3] - this.data.rect[1] - W);
      V = Math.min(F, c(R / tc));
    }
    d.fontSize = `calc(${V}px * var(--scale-factor))`, d.color = o.makeHexColor(Z[0], Z[1], Z[2]), this.data.textAlignment !== null && (d.textAlign = U[this.data.textAlignment]);
  }
  _setRequired(l, U) {
    U ? l.setAttribute("required", !0) : l.removeAttribute("required"), l.setAttribute("aria-required", U);
  }
}
class da extends zd {
  constructor(l) {
    const U = l.renderForms || l.data.hasOwnCanvas || !l.data.hasAppearance && !!l.data.fieldValue;
    super(l, {
      isRenderable: U
    });
  }
  setPropertyOnSiblings(l, U, Z, F) {
    const d = this.annotationStorage;
    for (const V of this._getElementsByName(l.name, l.id))
      V.domElement && (V.domElement[U] = Z), d.setValue(V.id, {
        [F]: Z
      });
  }
  render() {
    var F, d;
    const l = this.annotationStorage, U = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let Z = null;
    if (this.renderForms) {
      const V = l.getValue(U, {
        value: this.data.fieldValue
      });
      let W = V.value || "";
      const c = l.getValue(U, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && W.length > c && (W = W.slice(0, c));
      let R = V.formattedValue || ((F = this.data.textContent) == null ? void 0 : F.join(`
`)) || null;
      R && this.data.comb && (R = R.replaceAll(/\s+/g, ""));
      const N = {
        userValue: W,
        formattedValue: R,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (Z = document.createElement("textarea"), Z.textContent = R ?? W, this.data.doNotScroll && (Z.style.overflowY = "hidden")) : (Z = document.createElement("input"), Z.type = "text", Z.setAttribute("value", R ?? W), this.data.doNotScroll && (Z.style.overflowX = "hidden")), this.data.hasOwnCanvas && (Z.hidden = !0), Bd.add(Z), Z.setAttribute("data-element-id", U), Z.disabled = this.data.readOnly, Z.name = this.data.fieldName, Z.tabIndex = KV, this._setRequired(Z, this.data.required), c && (Z.maxLength = c), Z.addEventListener("input", (b) => {
        l.setValue(U, {
          value: b.target.value
        }), this.setPropertyOnSiblings(Z, "value", b.target.value, "value"), N.formattedValue = null;
      }), Z.addEventListener("resetform", (b) => {
        const n = this.data.defaultFieldValue ?? "";
        Z.value = N.userValue = n, N.formattedValue = null;
      });
      let s = (b) => {
        const {
          formattedValue: n
        } = N;
        n != null && (b.target.value = n), b.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        Z.addEventListener("focus", (n) => {
          var M;
          if (N.focused)
            return;
          const {
            target: h
          } = n;
          N.userValue && (h.value = N.userValue), N.lastCommittedValue = h.value, N.commitKey = 1, (M = this.data.actions) != null && M.Focus || (N.focused = !0);
        }), Z.addEventListener("updatefromsandbox", (n) => {
          this.showElementAndHideCanvas(n.target);
          const h = {
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
              var S;
              const {
                charLimit: G
              } = M.detail, {
                target: J
              } = M;
              if (G === 0) {
                J.removeAttribute("maxLength");
                return;
              }
              J.setAttribute("maxLength", G);
              let T = N.userValue;
              !T || T.length <= G || (T = T.slice(0, G), J.value = N.userValue = T, l.setValue(U, {
                value: T
              }), (S = this.linkService.eventBus) == null || S.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: U,
                  name: "Keystroke",
                  value: T,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: J.selectionStart,
                  selEnd: J.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(h, n);
        }), Z.addEventListener("keydown", (n) => {
          var G;
          N.commitKey = 1;
          let h = -1;
          if (n.key === "Escape" ? h = 0 : n.key === "Enter" && !this.data.multiLine ? h = 2 : n.key === "Tab" && (N.commitKey = 3), h === -1)
            return;
          const {
            value: M
          } = n.target;
          N.lastCommittedValue !== M && (N.lastCommittedValue = M, N.userValue = M, (G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: M,
              willCommit: !0,
              commitKey: h,
              selStart: n.target.selectionStart,
              selEnd: n.target.selectionEnd
            }
          }));
        });
        const b = s;
        s = null, Z.addEventListener("blur", (n) => {
          var M, G;
          if (!N.focused || !n.relatedTarget)
            return;
          (M = this.data.actions) != null && M.Blur || (N.focused = !1);
          const {
            value: h
          } = n.target;
          N.userValue = h, N.lastCommittedValue !== h && ((G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: h,
              willCommit: !0,
              commitKey: N.commitKey,
              selStart: n.target.selectionStart,
              selEnd: n.target.selectionEnd
            }
          })), b(n);
        }), (d = this.data.actions) != null && d.Keystroke && Z.addEventListener("beforeinput", (n) => {
          var B;
          N.lastCommittedValue = null;
          const {
            data: h,
            target: M
          } = n, {
            value: G,
            selectionStart: J,
            selectionEnd: T
          } = M;
          let S = J, Y = T;
          switch (n.inputType) {
            case "deleteWordBackward": {
              const X = G.substring(0, J).match(/\w*[^\w]*$/);
              X && (S -= X[0].length);
              break;
            }
            case "deleteWordForward": {
              const X = G.substring(J).match(/^[^\w]*\w*/);
              X && (Y += X[0].length);
              break;
            }
            case "deleteContentBackward":
              J === T && (S -= 1);
              break;
            case "deleteContentForward":
              J === T && (Y += 1);
              break;
          }
          n.preventDefault(), (B = this.linkService.eventBus) == null || B.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: G,
              change: h || "",
              willCommit: !1,
              selStart: S,
              selEnd: Y
            }
          });
        }), this._setEventListeners(Z, N, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (n) => n.target.value);
      }
      if (s && Z.addEventListener("blur", s), this.data.comb) {
        const n = (this.data.rect[2] - this.data.rect[0]) / c;
        Z.classList.add("comb"), Z.style.letterSpacing = `calc(${n}px * var(--scale-factor) - 1ch)`;
      }
    } else
      Z = document.createElement("div"), Z.textContent = this.data.fieldValue, Z.style.verticalAlign = "middle", Z.style.display = "table-cell", this.data.hasOwnCanvas && (Z.hidden = !0);
    return this._setTextStyle(Z), this._setBackgroundColor(Z), this._setDefaultPropertiesFromJS(Z), this.container.append(Z), this.container;
  }
}
class Qa extends zd {
  constructor(l) {
    super(l, {
      isRenderable: !!l.data.hasOwnCanvas
    });
  }
}
class Va extends zd {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    const l = this.annotationStorage, U = this.data, Z = U.id;
    let F = l.getValue(Z, {
      value: U.exportValue === U.fieldValue
    }).value;
    typeof F == "string" && (F = F !== "Off", l.setValue(Z, {
      value: F
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const d = document.createElement("input");
    return Bd.add(d), d.setAttribute("data-element-id", Z), d.disabled = U.readOnly, this._setRequired(d, this.data.required), d.type = "checkbox", d.name = U.fieldName, F && d.setAttribute("checked", !0), d.setAttribute("exportValue", U.exportValue), d.tabIndex = KV, d.addEventListener("change", (V) => {
      const {
        name: W,
        checked: c
      } = V.target;
      for (const R of this._getElementsByName(W, Z)) {
        const N = c && R.exportValue === U.exportValue;
        R.domElement && (R.domElement.checked = N), l.setValue(R.id, {
          value: N
        });
      }
      l.setValue(Z, {
        value: c
      });
    }), d.addEventListener("resetform", (V) => {
      const W = U.defaultFieldValue || "Off";
      V.target.checked = W === U.exportValue;
    }), this.enableScripting && this.hasJSActions && (d.addEventListener("updatefromsandbox", (V) => {
      const W = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", l.setValue(Z, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(W, V);
    }), this._setEventListeners(d, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (V) => V.target.checked)), this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
  }
}
class oN extends zd {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const l = this.annotationStorage, U = this.data, Z = U.id;
    let F = l.getValue(Z, {
      value: U.fieldValue === U.buttonValue
    }).value;
    if (typeof F == "string" && (F = F !== U.buttonValue, l.setValue(Z, {
      value: F
    })), F)
      for (const V of this._getElementsByName(U.fieldName, Z))
        l.setValue(V.id, {
          value: !1
        });
    const d = document.createElement("input");
    if (Bd.add(d), d.setAttribute("data-element-id", Z), d.disabled = U.readOnly, this._setRequired(d, this.data.required), d.type = "radio", d.name = U.fieldName, F && d.setAttribute("checked", !0), d.tabIndex = KV, d.addEventListener("change", (V) => {
      const {
        name: W,
        checked: c
      } = V.target;
      for (const R of this._getElementsByName(W, Z))
        l.setValue(R.id, {
          value: !1
        });
      l.setValue(Z, {
        value: c
      });
    }), d.addEventListener("resetform", (V) => {
      const W = U.defaultFieldValue;
      V.target.checked = W != null && W === U.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const V = U.buttonValue;
      d.addEventListener("updatefromsandbox", (W) => {
        const c = {
          value: (R) => {
            const N = V === R.detail.value;
            for (const s of this._getElementsByName(R.target.name)) {
              const b = N && s.id === Z;
              s.domElement && (s.domElement.checked = b), l.setValue(s.id, {
                value: b
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, W);
      }), this._setEventListeners(d, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (W) => W.target.checked);
    }
    return this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
  }
}
class Wa extends LN {
  constructor(l) {
    super(l, {
      ignoreBorder: l.data.hasAppearance
    });
  }
  render() {
    const l = super.render();
    l.classList.add("buttonWidgetAnnotation", "pushButton");
    const U = l.lastChild;
    return this.enableScripting && this.hasJSActions && U && (this._setDefaultPropertiesFromJS(U), U.addEventListener("updatefromsandbox", (Z) => {
      this._dispatchEventFromSandbox({}, Z);
    })), l;
  }
}
class ca extends zd {
  constructor(l) {
    super(l, {
      isRenderable: l.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const l = this.annotationStorage, U = this.data.id, Z = l.getValue(U, {
      value: this.data.fieldValue
    }), F = document.createElement("select");
    Bd.add(F), F.setAttribute("data-element-id", U), F.disabled = this.data.readOnly, this._setRequired(F, this.data.required), F.name = this.data.fieldName, F.tabIndex = KV;
    let d = this.data.combo && this.data.options.length > 0;
    this.data.combo || (F.size = this.data.options.length, this.data.multiSelect && (F.multiple = !0)), F.addEventListener("resetform", (N) => {
      const s = this.data.defaultFieldValue;
      for (const b of F.options)
        b.selected = b.value === s;
    });
    for (const N of this.data.options) {
      const s = document.createElement("option");
      s.textContent = N.displayValue, s.value = N.exportValue, Z.value.includes(N.exportValue) && (s.setAttribute("selected", !0), d = !1), F.append(s);
    }
    let V = null;
    if (d) {
      const N = document.createElement("option");
      N.value = " ", N.setAttribute("hidden", !0), N.setAttribute("selected", !0), F.prepend(N), V = () => {
        N.remove(), F.removeEventListener("input", V), V = null;
      }, F.addEventListener("input", V);
    }
    const W = (N) => {
      const s = N ? "value" : "textContent", {
        options: b,
        multiple: n
      } = F;
      return n ? Array.prototype.filter.call(b, (h) => h.selected).map((h) => h[s]) : b.selectedIndex === -1 ? null : b[b.selectedIndex][s];
    };
    let c = W(!1);
    const R = (N) => {
      const s = N.target.options;
      return Array.prototype.map.call(s, (b) => ({
        displayValue: b.textContent,
        exportValue: b.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (F.addEventListener("updatefromsandbox", (N) => {
      const s = {
        value(b) {
          V == null || V();
          const n = b.detail.value, h = new Set(Array.isArray(n) ? n : [n]);
          for (const M of F.options)
            M.selected = h.has(M.value);
          l.setValue(U, {
            value: W(!0)
          }), c = W(!1);
        },
        multipleSelection(b) {
          F.multiple = !0;
        },
        remove(b) {
          const n = F.options, h = b.detail.remove;
          n[h].selected = !1, F.remove(h), n.length > 0 && Array.prototype.findIndex.call(n, (G) => G.selected) === -1 && (n[0].selected = !0), l.setValue(U, {
            value: W(!0),
            items: R(b)
          }), c = W(!1);
        },
        clear(b) {
          for (; F.length !== 0; )
            F.remove(0);
          l.setValue(U, {
            value: null,
            items: []
          }), c = W(!1);
        },
        insert(b) {
          const {
            index: n,
            displayValue: h,
            exportValue: M
          } = b.detail.insert, G = F.children[n], J = document.createElement("option");
          J.textContent = h, J.value = M, G ? G.before(J) : F.append(J), l.setValue(U, {
            value: W(!0),
            items: R(b)
          }), c = W(!1);
        },
        items(b) {
          const {
            items: n
          } = b.detail;
          for (; F.length !== 0; )
            F.remove(0);
          for (const h of n) {
            const {
              displayValue: M,
              exportValue: G
            } = h, J = document.createElement("option");
            J.textContent = M, J.value = G, F.append(J);
          }
          F.options.length > 0 && (F.options[0].selected = !0), l.setValue(U, {
            value: W(!0),
            items: R(b)
          }), c = W(!1);
        },
        indices(b) {
          const n = new Set(b.detail.indices);
          for (const h of b.target.options)
            h.selected = n.has(h.index);
          l.setValue(U, {
            value: W(!0)
          }), c = W(!1);
        },
        editable(b) {
          b.target.disabled = !b.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(s, N);
    }), F.addEventListener("input", (N) => {
      var n;
      const s = W(!0), b = W(!1);
      l.setValue(U, {
        value: s
      }), N.preventDefault(), (n = this.linkService.eventBus) == null || n.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: U,
          name: "Keystroke",
          value: c,
          change: b,
          changeEx: s,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(F, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (N) => N.target.value)) : F.addEventListener("input", function(N) {
      l.setValue(U, {
        value: W(!0)
      });
    }), this.data.combo && this._setTextStyle(F), this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class lR extends ml {
  constructor(l) {
    const {
      data: U,
      elements: Z
    } = l;
    super(l, {
      isRenderable: ml._hasPopupData(U)
    }), this.elements = Z, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const l = this.popup = new Ra({
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
    for (const Z of this.elements)
      Z.popup = l, U.push(Z.data.id), Z.addHighlightArea();
    return this.container.setAttribute("aria-controls", U.map((Z) => `${It}${Z}`).join(",")), this.container;
  }
}
var m0, HW, vW, i0, Fd, al, uZ, dd, UV, ZV, M0, pZ, EU, yZ, FV, zZ, dV, Qd, Vd, Vl, RW, UR, IN, EN, CN, wN, tW, NW, ZR;
class Ra {
  constructor({
    container: l,
    color: U,
    elements: Z,
    titleObj: F,
    modificationDate: d,
    contentsObj: V,
    richText: W,
    parent: c,
    rect: R,
    parentRect: N,
    open: s
  }) {
    i(this, Vl);
    i(this, m0, m(this, Vl, CN).bind(this));
    i(this, HW, m(this, Vl, ZR).bind(this));
    i(this, vW, m(this, Vl, NW).bind(this));
    i(this, i0, m(this, Vl, tW).bind(this));
    i(this, Fd, null);
    i(this, al, null);
    i(this, uZ, null);
    i(this, dd, null);
    i(this, UV, null);
    i(this, ZV, null);
    i(this, M0, null);
    i(this, pZ, !1);
    i(this, EU, null);
    i(this, yZ, null);
    i(this, FV, null);
    i(this, zZ, null);
    i(this, dV, null);
    i(this, Qd, null);
    i(this, Vd, !1);
    var b;
    a(this, al, l), a(this, dV, F), a(this, uZ, V), a(this, zZ, W), a(this, ZV, c), a(this, Fd, U), a(this, FV, R), a(this, M0, N), a(this, UV, Z), a(this, dd, jt.toDateObject(d)), this.trigger = Z.flatMap((n) => n.getElementsToTriggerPopup());
    for (const n of this.trigger)
      n.addEventListener("click", Q(this, i0)), n.addEventListener("mouseenter", Q(this, vW)), n.addEventListener("mouseleave", Q(this, HW)), n.classList.add("popupTriggerArea");
    for (const n of Z)
      (b = n.container) == null || b.addEventListener("keydown", Q(this, m0));
    Q(this, al).hidden = !0, s && m(this, Vl, tW).call(this);
  }
  render() {
    if (Q(this, EU))
      return;
    const l = a(this, EU, document.createElement("div"));
    if (l.className = "popup", Q(this, Fd)) {
      const d = l.style.outlineColor = o.makeHexColor(...Q(this, Fd));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? l.style.backgroundColor = `color-mix(in srgb, ${d} 30%, white)` : l.style.backgroundColor = o.makeHexColor(...Q(this, Fd).map((W) => Math.floor(0.7 * (255 - W) + W)));
    }
    const U = document.createElement("span");
    U.className = "header";
    const Z = document.createElement("h1");
    if (U.append(Z), {
      dir: Z.dir,
      str: Z.textContent
    } = Q(this, dV), l.append(U), Q(this, dd)) {
      const d = document.createElement("span");
      d.classList.add("popupDate"), d.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), d.setAttribute("data-l10n-args", JSON.stringify({
        date: Q(this, dd).toLocaleDateString(),
        time: Q(this, dd).toLocaleTimeString()
      })), U.append(d);
    }
    const F = Q(this, Vl, RW);
    if (F)
      zN.render({
        xfaHtml: F,
        intent: "richText",
        div: l
      }), l.lastChild.classList.add("richText", "popupContent");
    else {
      const d = this._formatContents(Q(this, uZ));
      l.append(d);
    }
    Q(this, al).append(l);
  }
  _formatContents({
    str: l,
    dir: U
  }) {
    const Z = document.createElement("p");
    Z.classList.add("popupContent"), Z.dir = U;
    const F = l.split(/(?:\r\n?|\n)/);
    for (let d = 0, V = F.length; d < V; ++d) {
      const W = F[d];
      Z.append(document.createTextNode(W)), d < V - 1 && Z.append(document.createElement("br"));
    }
    return Z;
  }
  updateEdited({
    rect: l,
    popupContent: U
  }) {
    var Z;
    Q(this, Qd) || a(this, Qd, {
      contentsObj: Q(this, uZ),
      richText: Q(this, zZ)
    }), l && a(this, yZ, null), U && (a(this, zZ, m(this, Vl, EN).call(this, U)), a(this, uZ, null)), (Z = Q(this, EU)) == null || Z.remove(), a(this, EU, null);
  }
  resetEdited() {
    var l;
    Q(this, Qd) && ({
      contentsObj: WU(this, uZ)._,
      richText: WU(this, zZ)._
    } = Q(this, Qd), a(this, Qd, null), (l = Q(this, EU)) == null || l.remove(), a(this, EU, null), a(this, yZ, null));
  }
  forceHide() {
    a(this, Vd, this.isVisible), Q(this, Vd) && (Q(this, al).hidden = !0);
  }
  maybeShow() {
    Q(this, Vd) && (Q(this, EU) || m(this, Vl, NW).call(this), a(this, Vd, !1), Q(this, al).hidden = !1);
  }
  get isVisible() {
    return Q(this, al).hidden === !1;
  }
}
m0 = new WeakMap(), HW = new WeakMap(), vW = new WeakMap(), i0 = new WeakMap(), Fd = new WeakMap(), al = new WeakMap(), uZ = new WeakMap(), dd = new WeakMap(), UV = new WeakMap(), ZV = new WeakMap(), M0 = new WeakMap(), pZ = new WeakMap(), EU = new WeakMap(), yZ = new WeakMap(), FV = new WeakMap(), zZ = new WeakMap(), dV = new WeakMap(), Qd = new WeakMap(), Vd = new WeakMap(), Vl = new WeakSet(), RW = function() {
  const l = Q(this, zZ), U = Q(this, uZ);
  return l != null && l.str && (!(U != null && U.str) || U.str === l.str) && Q(this, zZ).html || null;
}, UR = function() {
  var l, U, Z;
  return ((Z = (U = (l = Q(this, Vl, RW)) == null ? void 0 : l.attributes) == null ? void 0 : U.style) == null ? void 0 : Z.fontSize) || 0;
}, IN = function() {
  var l, U, Z;
  return ((Z = (U = (l = Q(this, Vl, RW)) == null ? void 0 : l.attributes) == null ? void 0 : U.style) == null ? void 0 : Z.color) || null;
}, EN = function(l) {
  const U = [], Z = {
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
  }, F = {
    style: {
      color: Q(this, Vl, IN),
      fontSize: Q(this, Vl, UR) ? `calc(${Q(this, Vl, UR)}px * var(--scale-factor))` : ""
    }
  };
  for (const d of l.split(`
`))
    U.push({
      name: "span",
      value: d,
      attributes: F
    });
  return Z;
}, CN = function(l) {
  l.altKey || l.shiftKey || l.ctrlKey || l.metaKey || (l.key === "Enter" || l.key === "Escape" && Q(this, pZ)) && m(this, Vl, tW).call(this);
}, wN = function() {
  if (Q(this, yZ) !== null)
    return;
  const {
    page: {
      view: l
    },
    viewport: {
      rawDims: {
        pageWidth: U,
        pageHeight: Z,
        pageX: F,
        pageY: d
      }
    }
  } = Q(this, ZV);
  let V = !!Q(this, M0), W = V ? Q(this, M0) : Q(this, FV);
  for (const h of Q(this, UV))
    if (!W || o.intersect(h.data.rect, W) !== null) {
      W = h.data.rect, V = !0;
      break;
    }
  const c = o.normalizeRect([W[0], l[3] - W[1] + l[1], W[2], l[3] - W[3] + l[1]]), N = V ? W[2] - W[0] + 5 : 0, s = c[0] + N, b = c[1];
  a(this, yZ, [100 * (s - F) / U, 100 * (b - d) / Z]);
  const {
    style: n
  } = Q(this, al);
  n.left = `${Q(this, yZ)[0]}%`, n.top = `${Q(this, yZ)[1]}%`;
}, tW = function() {
  a(this, pZ, !Q(this, pZ)), Q(this, pZ) ? (m(this, Vl, NW).call(this), Q(this, al).addEventListener("click", Q(this, i0)), Q(this, al).addEventListener("keydown", Q(this, m0))) : (m(this, Vl, ZR).call(this), Q(this, al).removeEventListener("click", Q(this, i0)), Q(this, al).removeEventListener("keydown", Q(this, m0)));
}, NW = function() {
  Q(this, EU) || this.render(), this.isVisible ? Q(this, pZ) && Q(this, al).classList.add("focused") : (m(this, Vl, wN).call(this), Q(this, al).hidden = !1, Q(this, al).style.zIndex = parseInt(Q(this, al).style.zIndex) + 1e3);
}, ZR = function() {
  Q(this, al).classList.remove("focused"), !(Q(this, pZ) || !this.isVisible) && (Q(this, al).hidden = !0, Q(this, al).style.zIndex = parseInt(Q(this, al).style.zIndex) - 1e3);
};
class xN extends ml {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = l.data.textContent, this.textPosition = l.data.textPosition, this.annotationEditorType = f.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const l = document.createElement("div");
      l.classList.add("annotationTextContent"), l.setAttribute("role", "comment");
      for (const U of this.textContent) {
        const Z = document.createElement("span");
        Z.textContent = U, l.append(Z);
      }
      this.container.append(l);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
  get _isEditable() {
    return this.data.hasOwnCanvas;
  }
}
var QV;
class ta extends ml {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, QV, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const U = this.data, {
      width: Z,
      height: F
    } = OZ(U.rect), d = this.svgFactory.create(Z, F, !0), V = a(this, QV, this.svgFactory.createElement("svg:line"));
    return V.setAttribute("x1", U.rect[2] - U.lineCoordinates[0]), V.setAttribute("y1", U.rect[3] - U.lineCoordinates[1]), V.setAttribute("x2", U.rect[2] - U.lineCoordinates[2]), V.setAttribute("y2", U.rect[3] - U.lineCoordinates[3]), V.setAttribute("stroke-width", U.borderStyle.width || 1), V.setAttribute("stroke", "transparent"), V.setAttribute("fill", "transparent"), d.append(V), this.container.append(d), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, QV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
QV = new WeakMap();
var VV;
class Na extends ml {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, VV, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const U = this.data, {
      width: Z,
      height: F
    } = OZ(U.rect), d = this.svgFactory.create(Z, F, !0), V = U.borderStyle.width, W = a(this, VV, this.svgFactory.createElement("svg:rect"));
    return W.setAttribute("x", V / 2), W.setAttribute("y", V / 2), W.setAttribute("width", Z - V), W.setAttribute("height", F - V), W.setAttribute("stroke-width", V || 1), W.setAttribute("stroke", "transparent"), W.setAttribute("fill", "transparent"), d.append(W), this.container.append(d), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, VV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
VV = new WeakMap();
var WV;
class sa extends ml {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, WV, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const U = this.data, {
      width: Z,
      height: F
    } = OZ(U.rect), d = this.svgFactory.create(Z, F, !0), V = U.borderStyle.width, W = a(this, WV, this.svgFactory.createElement("svg:ellipse"));
    return W.setAttribute("cx", Z / 2), W.setAttribute("cy", F / 2), W.setAttribute("rx", Z / 2 - V / 2), W.setAttribute("ry", F / 2 - V / 2), W.setAttribute("stroke-width", V || 1), W.setAttribute("stroke", "transparent"), W.setAttribute("fill", "transparent"), d.append(W), this.container.append(d), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, WV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
WV = new WeakMap();
var cV;
class jN extends ml {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, cV, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: U,
        vertices: Z,
        borderStyle: F,
        popupRef: d
      }
    } = this;
    if (!Z)
      return this.container;
    const {
      width: V,
      height: W
    } = OZ(U), c = this.svgFactory.create(V, W, !0);
    let R = [];
    for (let s = 0, b = Z.length; s < b; s += 2) {
      const n = Z[s] - U[0], h = U[3] - Z[s + 1];
      R.push(`${n},${h}`);
    }
    R = R.join(" ");
    const N = a(this, cV, this.svgFactory.createElement(this.svgElementName));
    return N.setAttribute("points", R), N.setAttribute("stroke-width", F.width || 1), N.setAttribute("stroke", "transparent"), N.setAttribute("fill", "transparent"), c.append(N), this.container.append(c), !d && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, cV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
cV = new WeakMap();
class ba extends jN {
  constructor(l) {
    super(l), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class na extends ml {
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
var RV;
class ON extends ml {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    i(this, RV, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = f.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: U,
        inkLists: Z,
        borderStyle: F,
        popupRef: d
      }
    } = this, {
      width: V,
      height: W
    } = OZ(U), c = this.svgFactory.create(V, W, !0);
    for (const R of Z) {
      let N = [];
      for (let b = 0, n = R.length; b < n; b += 2) {
        const h = R[b] - U[0], M = U[3] - R[b + 1];
        N.push(`${h},${M}`);
      }
      N = N.join(" ");
      const s = this.svgFactory.createElement(this.svgElementName);
      Q(this, RV).push(s), s.setAttribute("points", N), s.setAttribute("stroke-width", F.width || 1), s.setAttribute("stroke", "transparent"), s.setAttribute("fill", "transparent"), !d && this.hasPopupData && this._createPopup(), c.append(s);
    }
    return this.container.append(c), this.container;
  }
  getElementsToTriggerPopup() {
    return Q(this, RV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
RV = new WeakMap();
class aa extends ml {
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
class ha extends ml {
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
class ma extends ml {
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
class ia extends ml {
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
class rN extends ml {
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
var tV, NV, FR;
class Ma extends ml {
  constructor(U) {
    var F;
    super(U, {
      isRenderable: !0
    });
    i(this, NV);
    i(this, tV, null);
    const {
      file: Z
    } = this.data;
    this.filename = Z.filename, this.content = Z.content, (F = this.linkService.eventBus) == null || F.dispatch("fileattachmentannotation", {
      source: this,
      ...Z
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: U,
      data: Z
    } = this;
    let F;
    Z.hasAppearance || Z.fillAlpha === 0 ? F = document.createElement("div") : (F = document.createElement("img"), F.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(Z.name) ? "paperclip" : "pushpin"}.svg`, Z.fillAlpha && Z.fillAlpha < 1 && (F.style = `filter: opacity(${Math.round(Z.fillAlpha * 100)}%);`)), F.addEventListener("dblclick", m(this, NV, FR).bind(this)), a(this, tV, F);
    const {
      isMac: d
    } = dU.platform;
    return U.addEventListener("keydown", (V) => {
      V.key === "Enter" && (d ? V.metaKey : V.ctrlKey) && m(this, NV, FR).call(this);
    }), !Z.popupRef && this.hasPopupData ? this._createPopup() : F.classList.add("popupTriggerArea"), U.append(F), U;
  }
  getElementsToTriggerPopup() {
    return Q(this, tV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
tV = new WeakMap(), NV = new WeakSet(), FR = function() {
  var U;
  (U = this.downloadManager) == null || U.openOrDownloadData(this.content, this.filename);
};
var sV, Wd, J0, ed, gN, dR;
class Ja {
  constructor({
    div: l,
    accessibilityManager: U,
    annotationCanvasMap: Z,
    annotationEditorUIManager: F,
    page: d,
    viewport: V
  }) {
    i(this, ed);
    i(this, sV, null);
    i(this, Wd, null);
    i(this, J0, /* @__PURE__ */ new Map());
    this.div = l, a(this, sV, U), a(this, Wd, Z), this.page = d, this.viewport = V, this.zIndex = 0, this._annotationEditorUIManager = F;
  }
  async render(l) {
    var V;
    const {
      annotations: U
    } = l, Z = this.div;
    Xd(Z, this.viewport);
    const F = /* @__PURE__ */ new Map(), d = {
      data: null,
      layer: Z,
      linkService: l.linkService,
      downloadManager: l.downloadManager,
      imageResourcesPath: l.imageResourcesPath || "",
      renderForms: l.renderForms !== !1,
      svgFactory: new xR(),
      annotationStorage: l.annotationStorage || new KR(),
      enableScripting: l.enableScripting === !0,
      hasJSActions: l.hasJSActions,
      fieldObjects: l.fieldObjects,
      parent: this,
      elements: null
    };
    for (const W of U) {
      if (W.noHTML)
        continue;
      const c = W.annotationType === Tl.POPUP;
      if (c) {
        const s = F.get(W.id);
        if (!s)
          continue;
        d.elements = s;
      } else {
        const {
          width: s,
          height: b
        } = OZ(W.rect);
        if (s <= 0 || b <= 0)
          continue;
      }
      d.data = W;
      const R = Za.create(d);
      if (!R.isRenderable)
        continue;
      if (!c && W.popupRef) {
        const s = F.get(W.popupRef);
        s ? s.push(R) : F.set(W.popupRef, [R]);
      }
      const N = R.render();
      W.hidden && (N.style.visibility = "hidden"), m(this, ed, gN).call(this, N, W.id), R.annotationEditorType > 0 && (Q(this, J0).set(R.data.id, R), (V = this._annotationEditorUIManager) == null || V.renderAnnotationElement(R));
    }
    m(this, ed, dR).call(this);
  }
  update({
    viewport: l
  }) {
    const U = this.div;
    this.viewport = l, Xd(U, {
      rotation: l.rotation
    }), m(this, ed, dR).call(this), U.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(Q(this, J0).values());
  }
  getEditableAnnotation(l) {
    return Q(this, J0).get(l);
  }
}
sV = new WeakMap(), Wd = new WeakMap(), J0 = new WeakMap(), ed = new WeakSet(), gN = function(l, U) {
  var F;
  const Z = l.firstChild || l;
  Z.id = `${It}${U}`, this.div.append(l), (F = Q(this, sV)) == null || F.moveElementInDOM(this.div, l, Z, !1);
}, dR = function() {
  if (!Q(this, Wd))
    return;
  const l = this.div;
  for (const [U, Z] of Q(this, Wd)) {
    const F = l.querySelector(`[data-annotation-id="${U}"]`);
    if (!F)
      continue;
    Z.className = "annotationContent";
    const {
      firstChild: d
    } = F;
    d ? d.nodeName === "CANVAS" ? d.replaceWith(Z) : d.classList.contains("annotationContent") ? d.after(Z) : d.before(Z) : F.append(Z);
  }
  Q(this, Wd).clear();
};
const fV = /\r\n?|\n/g;
var bV, nV, aV, hV, mV, CU, bU, iV, nU, G0, Ml, KN, HN, vN, sW, gZ, bW, nW, PN, VR, AN;
const tl = class tl extends Fl {
  constructor(U) {
    super({
      ...U,
      name: "freeTextEditor"
    });
    i(this, Ml);
    i(this, bV, this.editorDivBlur.bind(this));
    i(this, nV, this.editorDivFocus.bind(this));
    i(this, aV, this.editorDivInput.bind(this));
    i(this, hV, this.editorDivKeydown.bind(this));
    i(this, mV, this.editorDivPaste.bind(this));
    i(this, CU);
    i(this, bU, "");
    i(this, iV, `${this.id}-editor`);
    i(this, nU);
    i(this, G0, null);
    a(this, CU, U.color || tl._defaultColor || Fl._defaultLineColor), a(this, nU, U.fontSize || tl._defaultFontSize);
  }
  static get _keyboardManager() {
    const U = tl.prototype, Z = (V) => V.isEmpty(), F = Yd.TRANSLATE_SMALL, d = Yd.TRANSLATE_BIG;
    return _(this, "_keyboardManager", new rV([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], U.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], U.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], U._translateEmpty, {
      args: [-F, 0],
      checker: Z
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], U._translateEmpty, {
      args: [-d, 0],
      checker: Z
    }], [["ArrowRight", "mac+ArrowRight"], U._translateEmpty, {
      args: [F, 0],
      checker: Z
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], U._translateEmpty, {
      args: [d, 0],
      checker: Z
    }], [["ArrowUp", "mac+ArrowUp"], U._translateEmpty, {
      args: [0, -F],
      checker: Z
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], U._translateEmpty, {
      args: [0, -d],
      checker: Z
    }], [["ArrowDown", "mac+ArrowDown"], U._translateEmpty, {
      args: [0, F],
      checker: Z
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], U._translateEmpty, {
      args: [0, d],
      checker: Z
    }]]));
  }
  static initialize(U, Z) {
    Fl.initialize(U, Z, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const F = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(F.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(U, Z) {
    switch (U) {
      case O.FREETEXT_SIZE:
        tl._defaultFontSize = Z;
        break;
      case O.FREETEXT_COLOR:
        tl._defaultColor = Z;
        break;
    }
  }
  updateParams(U, Z) {
    switch (U) {
      case O.FREETEXT_SIZE:
        m(this, Ml, KN).call(this, Z);
        break;
      case O.FREETEXT_COLOR:
        m(this, Ml, HN).call(this, Z);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[O.FREETEXT_SIZE, tl._defaultFontSize], [O.FREETEXT_COLOR, tl._defaultColor || Fl._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[O.FREETEXT_SIZE, Q(this, nU)], [O.FREETEXT_COLOR, Q(this, CU)]];
  }
  _translateEmpty(U, Z) {
    this._uiManager.translateSelectedEditors(U, Z, !0);
  }
  getInitialTranslation() {
    const U = this.parentScale;
    return [-tl._internalPadding * U, -(tl._internalPadding + Q(this, nU)) * U];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(f.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant");
    const U = this._uiManager._signal;
    this.editorDiv.addEventListener("keydown", Q(this, hV), {
      signal: U
    }), this.editorDiv.addEventListener("focus", Q(this, nV), {
      signal: U
    }), this.editorDiv.addEventListener("blur", Q(this, bV), {
      signal: U
    }), this.editorDiv.addEventListener("input", Q(this, aV), {
      signal: U
    }), this.editorDiv.addEventListener("paste", Q(this, mV), {
      signal: U
    });
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", Q(this, iV)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", Q(this, hV)), this.editorDiv.removeEventListener("focus", Q(this, nV)), this.editorDiv.removeEventListener("blur", Q(this, bV)), this.editorDiv.removeEventListener("input", Q(this, aV)), this.editorDiv.removeEventListener("paste", Q(this, mV)), this.div.focus({
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
    const U = Q(this, bU), Z = a(this, bU, m(this, Ml, vN).call(this).trimEnd());
    if (U === Z)
      return;
    const F = (d) => {
      if (a(this, bU, d), !d) {
        this.remove();
        return;
      }
      m(this, Ml, nW).call(this), this._uiManager.rebuild(this), m(this, Ml, sW).call(this);
    };
    this.addCommands({
      cmd: () => {
        F(Z);
      },
      undo: () => {
        F(U);
      },
      mustExec: !1
    }), m(this, Ml, sW).call(this);
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
    tl._keyboardManager.exec(this, U);
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
    let U, Z;
    this.width && (U = this.x, Z = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", Q(this, iV)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), Fl._l10nPromise.get("pdfjs-free-text-default-content").then((d) => {
      var V;
      return (V = this.editorDiv) == null ? void 0 : V.setAttribute("default-content", d);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: F
    } = this.editorDiv;
    if (F.fontSize = `calc(${Q(this, nU)}px * var(--scale-factor))`, F.color = Q(this, CU), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), BW(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [d, V] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: W
        } = Q(this, G0);
        let [c, R] = this.getInitialTranslation();
        [c, R] = this.pageTranslationToScreen(c, R);
        const [N, s] = this.pageDimensions, [b, n] = this.pageTranslation;
        let h, M;
        switch (this.rotation) {
          case 0:
            h = U + (W[0] - b) / N, M = Z + this.height - (W[1] - n) / s;
            break;
          case 90:
            h = U + (W[0] - b) / N, M = Z - (W[1] - n) / s, [c, R] = [R, -c];
            break;
          case 180:
            h = U - this.width + (W[0] - b) / N, M = Z - (W[1] - n) / s, [c, R] = [-c, -R];
            break;
          case 270:
            h = U + (W[0] - b - this.height * s) / N, M = Z + (W[1] - n - this.width * N) / s, [c, R] = [-R, c];
            break;
        }
        this.setAt(h * d, M * V, c, R);
      } else
        this.setAt(U * d, Z * V, this.width * d, this.height * V);
      m(this, Ml, nW).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(U) {
    var h, M, G;
    const Z = U.clipboardData || window.clipboardData, {
      types: F
    } = Z;
    if (F.length === 1 && F[0] === "text/plain")
      return;
    U.preventDefault();
    const d = m(h = tl, gZ, VR).call(h, Z.getData("text") || "").replaceAll(fV, `
`);
    if (!d)
      return;
    const V = window.getSelection();
    if (!V.rangeCount)
      return;
    this.editorDiv.normalize(), V.deleteFromDocument();
    const W = V.getRangeAt(0);
    if (!d.includes(`
`)) {
      W.insertNode(document.createTextNode(d)), this.editorDiv.normalize(), V.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: R
    } = W, N = [], s = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const J = c.parentElement;
      if (s.push(c.nodeValue.slice(R).replaceAll(fV, "")), J !== this.editorDiv) {
        let T = N;
        for (const S of this.editorDiv.childNodes) {
          if (S === J) {
            T = s;
            continue;
          }
          T.push(m(M = tl, gZ, bW).call(M, S));
        }
      }
      N.push(c.nodeValue.slice(0, R).replaceAll(fV, ""));
    } else if (c === this.editorDiv) {
      let J = N, T = 0;
      for (const S of this.editorDiv.childNodes)
        T++ === R && (J = s), J.push(m(G = tl, gZ, bW).call(G, S));
    }
    a(this, bU, `${N.join(`
`)}${d}${s.join(`
`)}`), m(this, Ml, nW).call(this);
    const b = new Range();
    let n = N.reduce((J, T) => J + T.length, 0);
    for (const {
      firstChild: J
    } of this.editorDiv.childNodes)
      if (J.nodeType === Node.TEXT_NODE) {
        const T = J.nodeValue.length;
        if (n <= T) {
          b.setStart(J, n), b.setEnd(J, n);
          break;
        }
        n -= T;
      }
    V.removeAllRanges(), V.addRange(b);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(U, Z, F) {
    var W;
    let d = null;
    if (U instanceof xN) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: R
          },
          rect: N,
          rotation: s,
          id: b
        },
        textContent: n,
        textPosition: h,
        parent: {
          page: {
            pageNumber: M
          }
        }
      } = U;
      if (!n || n.length === 0)
        return null;
      d = U = {
        annotationType: f.FREETEXT,
        color: Array.from(R),
        fontSize: c,
        value: n.join(`
`),
        position: h,
        pageIndex: M - 1,
        rect: N.slice(0),
        rotation: s,
        id: b,
        deleted: !1
      };
    }
    const V = super.deserialize(U, Z, F);
    return a(V, nU, U.fontSize), a(V, CU, o.makeHexColor(...U.color)), a(V, bU, m(W = tl, gZ, VR).call(W, U.value)), V.annotationElementId = U.id || null, a(V, G0, d), V;
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
    const Z = tl._internalPadding * this.parentScale, F = this.getRect(Z, Z), d = Fl._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : Q(this, CU)), V = {
      annotationType: f.FREETEXT,
      color: d,
      fontSize: Q(this, nU),
      value: m(this, Ml, PN).call(this),
      pageIndex: this.pageIndex,
      rect: F,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return U ? V : this.annotationElementId && !m(this, Ml, AN).call(this, V) ? null : (V.id = this.annotationElementId, V);
  }
  renderAnnotationElement(U) {
    const Z = super.renderAnnotationElement(U);
    if (this.deleted)
      return Z;
    const {
      style: F
    } = Z;
    F.fontSize = `calc(${Q(this, nU)}px * var(--scale-factor))`, F.color = Q(this, CU), Z.replaceChildren();
    for (const V of Q(this, bU).split(`
`)) {
      const W = document.createElement("div");
      W.append(V ? document.createTextNode(V) : document.createElement("br")), Z.append(W);
    }
    const d = tl._internalPadding * this.parentScale;
    return U.updateEdited({
      rect: this.getRect(d, d),
      popupContent: Q(this, bU)
    }), Z;
  }
  resetAnnotationElement(U) {
    super.resetAnnotationElement(U), U.resetEdited();
  }
};
bV = new WeakMap(), nV = new WeakMap(), aV = new WeakMap(), hV = new WeakMap(), mV = new WeakMap(), CU = new WeakMap(), bU = new WeakMap(), iV = new WeakMap(), nU = new WeakMap(), G0 = new WeakMap(), Ml = new WeakSet(), KN = function(U) {
  const Z = (d) => {
    this.editorDiv.style.fontSize = `calc(${d}px * var(--scale-factor))`, this.translate(0, -(d - Q(this, nU)) * this.parentScale), a(this, nU, d), m(this, Ml, sW).call(this);
  }, F = Q(this, nU);
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, F),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, HN = function(U) {
  const Z = (d) => {
    a(this, CU, this.editorDiv.style.color = d);
  }, F = Q(this, CU);
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, F),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, vN = function() {
  var Z;
  const U = [];
  this.editorDiv.normalize();
  for (const F of this.editorDiv.childNodes)
    U.push(m(Z = tl, gZ, bW).call(Z, F));
  return U.join(`
`);
}, sW = function() {
  const [U, Z] = this.parentDimensions;
  let F;
  if (this.isAttachedToDOM)
    F = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: d,
      div: V
    } = this, W = V.style.display, c = V.classList.contains("hidden");
    V.classList.remove("hidden"), V.style.display = "hidden", d.div.append(this.div), F = V.getBoundingClientRect(), V.remove(), V.style.display = W, V.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = F.width / U, this.height = F.height / Z) : (this.width = F.height / U, this.height = F.width / Z), this.fixAndSetPosition();
}, gZ = new WeakSet(), bW = function(U) {
  return (U.nodeType === Node.TEXT_NODE ? U.nodeValue : U.innerText).replaceAll(fV, "");
}, nW = function() {
  if (this.editorDiv.replaceChildren(), !!Q(this, bU))
    for (const U of Q(this, bU).split(`
`)) {
      const Z = document.createElement("div");
      Z.append(U ? document.createTextNode(U) : document.createElement("br")), this.editorDiv.append(Z);
    }
}, PN = function() {
  return Q(this, bU).replaceAll(" ", " ");
}, VR = function(U) {
  return U.replaceAll(" ", " ");
}, AN = function(U) {
  const {
    value: Z,
    fontSize: F,
    color: d,
    pageIndex: V
  } = Q(this, G0);
  return this._hasBeenMoved || U.value !== Z || U.fontSize !== F || U.color.some((W, c) => W !== d[c]) || U.pageIndex !== V;
}, i(tl, gZ), r(tl, "_freeTextDefaultContent", ""), r(tl, "_internalPadding", 0), r(tl, "_defaultColor", null), r(tl, "_defaultFontSize", 10), r(tl, "_type", "freetext"), r(tl, "_editorType", f.FREETEXT);
let QR = tl;
var MV, RF, wU, $l, fN, aW, _N, qN, cR;
class WR {
  constructor(l, U = 0, Z = 0, F = !0) {
    i(this, $l);
    i(this, MV);
    i(this, RF, []);
    i(this, wU, []);
    let d = 1 / 0, V = -1 / 0, W = 1 / 0, c = -1 / 0;
    const N = 10 ** -4;
    for (const {
      x: J,
      y: T,
      width: S,
      height: Y
    } of l) {
      const B = Math.floor((J - U) / N) * N, X = Math.ceil((J + S + U) / N) * N, e = Math.floor((T - U) / N) * N, L = Math.ceil((T + Y + U) / N) * N, I = [B, e, L, !0], g = [X, e, L, !1];
      Q(this, RF).push(I, g), d = Math.min(d, B), V = Math.max(V, X), W = Math.min(W, e), c = Math.max(c, L);
    }
    const s = V - d + 2 * Z, b = c - W + 2 * Z, n = d - Z, h = W - Z, M = Q(this, RF).at(F ? -1 : -2), G = [M[0], M[2]];
    for (const J of Q(this, RF)) {
      const [T, S, Y] = J;
      J[0] = (T - n) / s, J[1] = (S - h) / b, J[2] = (Y - h) / b;
    }
    a(this, MV, {
      x: n,
      y: h,
      width: s,
      height: b,
      lastPoint: G
    });
  }
  getOutlines() {
    Q(this, RF).sort((U, Z) => U[0] - Z[0] || U[1] - Z[1] || U[2] - Z[2]);
    const l = [];
    for (const U of Q(this, RF))
      U[3] ? (l.push(...m(this, $l, cR).call(this, U)), m(this, $l, _N).call(this, U)) : (m(this, $l, qN).call(this, U), l.push(...m(this, $l, cR).call(this, U)));
    return m(this, $l, fN).call(this, l);
  }
}
MV = new WeakMap(), RF = new WeakMap(), wU = new WeakMap(), $l = new WeakSet(), fN = function(l) {
  const U = [], Z = /* @__PURE__ */ new Set();
  for (const V of l) {
    const [W, c, R] = V;
    U.push([W, c, V], [W, R, V]);
  }
  U.sort((V, W) => V[1] - W[1] || V[0] - W[0]);
  for (let V = 0, W = U.length; V < W; V += 2) {
    const c = U[V][2], R = U[V + 1][2];
    c.push(R), R.push(c), Z.add(c), Z.add(R);
  }
  const F = [];
  let d;
  for (; Z.size > 0; ) {
    const V = Z.values().next().value;
    let [W, c, R, N, s] = V;
    Z.delete(V);
    let b = W, n = c;
    for (d = [W, R], F.push(d); ; ) {
      let h;
      if (Z.has(N))
        h = N;
      else if (Z.has(s))
        h = s;
      else
        break;
      Z.delete(h), [W, c, R, N, s] = h, b !== W && (d.push(b, n, W, n === c ? c : R), b = W), n = n === c ? R : c;
    }
    d.push(b, n);
  }
  return new Ga(F, Q(this, MV));
}, aW = function(l) {
  const U = Q(this, wU);
  let Z = 0, F = U.length - 1;
  for (; Z <= F; ) {
    const d = Z + F >> 1, V = U[d][0];
    if (V === l)
      return d;
    V < l ? Z = d + 1 : F = d - 1;
  }
  return F + 1;
}, _N = function([, l, U]) {
  const Z = m(this, $l, aW).call(this, l);
  Q(this, wU).splice(Z, 0, [l, U]);
}, qN = function([, l, U]) {
  const Z = m(this, $l, aW).call(this, l);
  for (let F = Z; F < Q(this, wU).length; F++) {
    const [d, V] = Q(this, wU)[F];
    if (d !== l)
      break;
    if (d === l && V === U) {
      Q(this, wU).splice(F, 1);
      return;
    }
  }
  for (let F = Z - 1; F >= 0; F--) {
    const [d, V] = Q(this, wU)[F];
    if (d !== l)
      break;
    if (d === l && V === U) {
      Q(this, wU).splice(F, 1);
      return;
    }
  }
}, cR = function(l) {
  const [U, Z, F] = l, d = [[U, Z, F]], V = m(this, $l, aW).call(this, F);
  for (let W = 0; W < V; W++) {
    const [c, R] = Q(this, wU)[W];
    for (let N = 0, s = d.length; N < s; N++) {
      const [, b, n] = d[N];
      if (!(R <= b || n <= c)) {
        if (b >= c) {
          if (n > R)
            d[N][1] = R;
          else {
            if (s === 1)
              return [];
            d.splice(N, 1), N--, s--;
          }
          continue;
        }
        d[N][2] = c, n > R && d.push([U, R, n]);
      }
    }
  }
  return d;
};
class $N {
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
    return this instanceof tR;
  }
}
var JV, T0;
class Ga extends $N {
  constructor(U, Z) {
    super();
    i(this, JV);
    i(this, T0);
    a(this, T0, U), a(this, JV, Z);
  }
  toSVGPath() {
    const U = [];
    for (const Z of Q(this, T0)) {
      let [F, d] = Z;
      U.push(`M${F} ${d}`);
      for (let V = 2; V < Z.length; V += 2) {
        const W = Z[V], c = Z[V + 1];
        W === F ? (U.push(`V${c}`), d = c) : c === d && (U.push(`H${W}`), F = W);
      }
      U.push("Z");
    }
    return U.join(" ");
  }
  serialize([U, Z, F, d], V) {
    const W = [], c = F - U, R = d - Z;
    for (const N of Q(this, T0)) {
      const s = new Array(N.length);
      for (let b = 0; b < N.length; b += 2)
        s[b] = U + N[b] * c, s[b + 1] = d - N[b + 1] * R;
      W.push(s);
    }
    return W;
  }
  get box() {
    return Q(this, JV);
  }
}
JV = new WeakMap(), T0 = new WeakMap();
var $U, LZ, S0, X0, lZ, A, cd, Rd, GV, TV, Y0, B0, tF, SV, PW, AW, XV, RR;
const nZ = class nZ {
  constructor({
    x: l,
    y: U
  }, Z, F, d, V, W = 0) {
    i(this, XV);
    i(this, $U);
    i(this, LZ, []);
    i(this, S0);
    i(this, X0);
    i(this, lZ, []);
    i(this, A, new Float64Array(18));
    i(this, cd);
    i(this, Rd);
    i(this, GV);
    i(this, TV);
    i(this, Y0);
    i(this, B0);
    i(this, tF, []);
    a(this, $U, Z), a(this, B0, d * F), a(this, X0, V), Q(this, A).set([NaN, NaN, NaN, NaN, l, U], 6), a(this, S0, W), a(this, TV, Q(nZ, SV) * F), a(this, GV, Q(nZ, AW) * F), a(this, Y0, F), Q(this, tF).push(l, U);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(Q(this, A)[8]);
  }
  add({
    x: l,
    y: U
  }) {
    var I;
    a(this, cd, l), a(this, Rd, U);
    const [Z, F, d, V] = Q(this, $U);
    let [W, c, R, N] = Q(this, A).subarray(8, 12);
    const s = l - R, b = U - N, n = Math.hypot(s, b);
    if (n < Q(this, GV))
      return !1;
    const h = n - Q(this, TV), M = h / n, G = M * s, J = M * b;
    let T = W, S = c;
    W = R, c = N, R += G, N += J, (I = Q(this, tF)) == null || I.push(l, U);
    const Y = -J / h, B = G / h, X = Y * Q(this, B0), e = B * Q(this, B0);
    return Q(this, A).set(Q(this, A).subarray(2, 8), 0), Q(this, A).set([R + X, N + e], 4), Q(this, A).set(Q(this, A).subarray(14, 18), 12), Q(this, A).set([R - X, N - e], 16), isNaN(Q(this, A)[6]) ? (Q(this, lZ).length === 0 && (Q(this, A).set([W + X, c + e], 2), Q(this, lZ).push(NaN, NaN, NaN, NaN, (W + X - Z) / d, (c + e - F) / V), Q(this, A).set([W - X, c - e], 14), Q(this, LZ).push(NaN, NaN, NaN, NaN, (W - X - Z) / d, (c - e - F) / V)), Q(this, A).set([T, S, W, c, R, N], 6), !this.isEmpty()) : (Q(this, A).set([T, S, W, c, R, N], 6), Math.abs(Math.atan2(S - c, T - W) - Math.atan2(J, G)) < Math.PI / 2 ? ([W, c, R, N] = Q(this, A).subarray(2, 6), Q(this, lZ).push(NaN, NaN, NaN, NaN, ((W + R) / 2 - Z) / d, ((c + N) / 2 - F) / V), [W, c, T, S] = Q(this, A).subarray(14, 18), Q(this, LZ).push(NaN, NaN, NaN, NaN, ((T + W) / 2 - Z) / d, ((S + c) / 2 - F) / V), !0) : ([T, S, W, c, R, N] = Q(this, A).subarray(0, 6), Q(this, lZ).push(((T + 5 * W) / 6 - Z) / d, ((S + 5 * c) / 6 - F) / V, ((5 * W + R) / 6 - Z) / d, ((5 * c + N) / 6 - F) / V, ((W + R) / 2 - Z) / d, ((c + N) / 2 - F) / V), [R, N, W, c, T, S] = Q(this, A).subarray(12, 18), Q(this, LZ).push(((T + 5 * W) / 6 - Z) / d, ((S + 5 * c) / 6 - F) / V, ((5 * W + R) / 6 - Z) / d, ((5 * c + N) / 6 - F) / V, ((W + R) / 2 - Z) / d, ((c + N) / 2 - F) / V), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const l = Q(this, lZ), U = Q(this, LZ), Z = Q(this, A).subarray(4, 6), F = Q(this, A).subarray(16, 18), [d, V, W, c] = Q(this, $U), [R, N, s, b] = m(this, XV, RR).call(this);
    if (isNaN(Q(this, A)[6]) && !this.isEmpty())
      return `M${(Q(this, A)[2] - d) / W} ${(Q(this, A)[3] - V) / c} L${(Q(this, A)[4] - d) / W} ${(Q(this, A)[5] - V) / c} L${R} ${N} L${s} ${b} L${(Q(this, A)[16] - d) / W} ${(Q(this, A)[17] - V) / c} L${(Q(this, A)[14] - d) / W} ${(Q(this, A)[15] - V) / c} Z`;
    const n = [];
    n.push(`M${l[4]} ${l[5]}`);
    for (let h = 6; h < l.length; h += 6)
      isNaN(l[h]) ? n.push(`L${l[h + 4]} ${l[h + 5]}`) : n.push(`C${l[h]} ${l[h + 1]} ${l[h + 2]} ${l[h + 3]} ${l[h + 4]} ${l[h + 5]}`);
    n.push(`L${(Z[0] - d) / W} ${(Z[1] - V) / c} L${R} ${N} L${s} ${b} L${(F[0] - d) / W} ${(F[1] - V) / c}`);
    for (let h = U.length - 6; h >= 6; h -= 6)
      isNaN(U[h]) ? n.push(`L${U[h + 4]} ${U[h + 5]}`) : n.push(`C${U[h]} ${U[h + 1]} ${U[h + 2]} ${U[h + 3]} ${U[h + 4]} ${U[h + 5]}`);
    return n.push(`L${U[4]} ${U[5]} Z`), n.join(" ");
  }
  getOutlines() {
    var J;
    const l = Q(this, lZ), U = Q(this, LZ), Z = Q(this, A), F = Z.subarray(4, 6), d = Z.subarray(16, 18), [V, W, c, R] = Q(this, $U), N = new Float64Array((((J = Q(this, tF)) == null ? void 0 : J.length) ?? 0) + 2);
    for (let T = 0, S = N.length - 2; T < S; T += 2)
      N[T] = (Q(this, tF)[T] - V) / c, N[T + 1] = (Q(this, tF)[T + 1] - W) / R;
    N[N.length - 2] = (Q(this, cd) - V) / c, N[N.length - 1] = (Q(this, Rd) - W) / R;
    const [s, b, n, h] = m(this, XV, RR).call(this);
    if (isNaN(Z[6]) && !this.isEmpty()) {
      const T = new Float64Array(36);
      return T.set([NaN, NaN, NaN, NaN, (Z[2] - V) / c, (Z[3] - W) / R, NaN, NaN, NaN, NaN, (Z[4] - V) / c, (Z[5] - W) / R, NaN, NaN, NaN, NaN, s, b, NaN, NaN, NaN, NaN, n, h, NaN, NaN, NaN, NaN, (Z[16] - V) / c, (Z[17] - W) / R, NaN, NaN, NaN, NaN, (Z[14] - V) / c, (Z[15] - W) / R], 0), new tR(T, N, Q(this, $U), Q(this, Y0), Q(this, S0), Q(this, X0));
    }
    const M = new Float64Array(Q(this, lZ).length + 24 + Q(this, LZ).length);
    let G = l.length;
    for (let T = 0; T < G; T += 2) {
      if (isNaN(l[T])) {
        M[T] = M[T + 1] = NaN;
        continue;
      }
      M[T] = l[T], M[T + 1] = l[T + 1];
    }
    M.set([NaN, NaN, NaN, NaN, (F[0] - V) / c, (F[1] - W) / R, NaN, NaN, NaN, NaN, s, b, NaN, NaN, NaN, NaN, n, h, NaN, NaN, NaN, NaN, (d[0] - V) / c, (d[1] - W) / R], G), G += 24;
    for (let T = U.length - 6; T >= 6; T -= 6)
      for (let S = 0; S < 6; S += 2) {
        if (isNaN(U[T + S])) {
          M[G] = M[G + 1] = NaN, G += 2;
          continue;
        }
        M[G] = U[T + S], M[G + 1] = U[T + S + 1], G += 2;
      }
    return M.set([NaN, NaN, NaN, NaN, U[4], U[5]], G), new tR(M, N, Q(this, $U), Q(this, Y0), Q(this, S0), Q(this, X0));
  }
};
$U = new WeakMap(), LZ = new WeakMap(), S0 = new WeakMap(), X0 = new WeakMap(), lZ = new WeakMap(), A = new WeakMap(), cd = new WeakMap(), Rd = new WeakMap(), GV = new WeakMap(), TV = new WeakMap(), Y0 = new WeakMap(), B0 = new WeakMap(), tF = new WeakMap(), SV = new WeakMap(), PW = new WeakMap(), AW = new WeakMap(), XV = new WeakSet(), RR = function() {
  const l = Q(this, A).subarray(4, 6), U = Q(this, A).subarray(16, 18), [Z, F, d, V] = Q(this, $U);
  return [(Q(this, cd) + (l[0] - U[0]) / 2 - Z) / d, (Q(this, Rd) + (l[1] - U[1]) / 2 - F) / V, (Q(this, cd) + (U[0] - l[0]) / 2 - Z) / d, (Q(this, Rd) + (U[1] - l[1]) / 2 - F) / V];
}, i(nZ, SV, 8), i(nZ, PW, 2), i(nZ, AW, Q(nZ, SV) + Q(nZ, PW));
let pW = nZ;
var e0, td, kZ, YV, aU, BV, hl, QU, q0, $0, ls;
class tR extends $N {
  constructor(U, Z, F, d, V, W) {
    super();
    i(this, QU);
    i(this, e0);
    i(this, td, null);
    i(this, kZ);
    i(this, YV);
    i(this, aU);
    i(this, BV);
    i(this, hl);
    a(this, hl, U), a(this, aU, Z), a(this, e0, F), a(this, BV, d), a(this, kZ, V), a(this, YV, W), m(this, QU, ls).call(this, W);
    const {
      x: c,
      y: R,
      width: N,
      height: s
    } = Q(this, td);
    for (let b = 0, n = U.length; b < n; b += 2)
      U[b] = (U[b] - c) / N, U[b + 1] = (U[b + 1] - R) / s;
    for (let b = 0, n = Z.length; b < n; b += 2)
      Z[b] = (Z[b] - c) / N, Z[b + 1] = (Z[b + 1] - R) / s;
  }
  toSVGPath() {
    const U = [`M${Q(this, hl)[4]} ${Q(this, hl)[5]}`];
    for (let Z = 6, F = Q(this, hl).length; Z < F; Z += 6) {
      if (isNaN(Q(this, hl)[Z])) {
        U.push(`L${Q(this, hl)[Z + 4]} ${Q(this, hl)[Z + 5]}`);
        continue;
      }
      U.push(`C${Q(this, hl)[Z]} ${Q(this, hl)[Z + 1]} ${Q(this, hl)[Z + 2]} ${Q(this, hl)[Z + 3]} ${Q(this, hl)[Z + 4]} ${Q(this, hl)[Z + 5]}`);
    }
    return U.push("Z"), U.join(" ");
  }
  serialize([U, Z, F, d], V) {
    const W = F - U, c = d - Z;
    let R, N;
    switch (V) {
      case 0:
        R = m(this, QU, q0).call(this, Q(this, hl), U, d, W, -c), N = m(this, QU, q0).call(this, Q(this, aU), U, d, W, -c);
        break;
      case 90:
        R = m(this, QU, $0).call(this, Q(this, hl), U, Z, W, c), N = m(this, QU, $0).call(this, Q(this, aU), U, Z, W, c);
        break;
      case 180:
        R = m(this, QU, q0).call(this, Q(this, hl), F, Z, -W, c), N = m(this, QU, q0).call(this, Q(this, aU), F, Z, -W, c);
        break;
      case 270:
        R = m(this, QU, $0).call(this, Q(this, hl), F, d, -W, -c), N = m(this, QU, $0).call(this, Q(this, aU), F, d, -W, -c);
        break;
    }
    return {
      outline: Array.from(R),
      points: [Array.from(N)]
    };
  }
  get box() {
    return Q(this, td);
  }
  getNewOutline(U, Z) {
    const {
      x: F,
      y: d,
      width: V,
      height: W
    } = Q(this, td), [c, R, N, s] = Q(this, e0), b = V * N, n = W * s, h = F * N + c, M = d * s + R, G = new pW({
      x: Q(this, aU)[0] * b + h,
      y: Q(this, aU)[1] * n + M
    }, Q(this, e0), Q(this, BV), U, Q(this, YV), Z ?? Q(this, kZ));
    for (let J = 2; J < Q(this, aU).length; J += 2)
      G.add({
        x: Q(this, aU)[J] * b + h,
        y: Q(this, aU)[J + 1] * n + M
      });
    return G.getOutlines();
  }
}
e0 = new WeakMap(), td = new WeakMap(), kZ = new WeakMap(), YV = new WeakMap(), aU = new WeakMap(), BV = new WeakMap(), hl = new WeakMap(), QU = new WeakSet(), q0 = function(U, Z, F, d, V) {
  const W = new Float64Array(U.length);
  for (let c = 0, R = U.length; c < R; c += 2)
    W[c] = Z + U[c] * d, W[c + 1] = F + U[c + 1] * V;
  return W;
}, $0 = function(U, Z, F, d, V) {
  const W = new Float64Array(U.length);
  for (let c = 0, R = U.length; c < R; c += 2)
    W[c] = Z + U[c + 1] * d, W[c + 1] = F + U[c] * V;
  return W;
}, ls = function(U) {
  const Z = Q(this, hl);
  let F = Z[4], d = Z[5], V = F, W = d, c = F, R = d, N = F, s = d;
  const b = U ? Math.max : Math.min;
  for (let J = 6, T = Z.length; J < T; J += 6) {
    if (isNaN(Z[J]))
      V = Math.min(V, Z[J + 4]), W = Math.min(W, Z[J + 5]), c = Math.max(c, Z[J + 4]), R = Math.max(R, Z[J + 5]), s < Z[J + 5] ? (N = Z[J + 4], s = Z[J + 5]) : s === Z[J + 5] && (N = b(N, Z[J + 4]));
    else {
      const S = o.bezierBoundingBox(F, d, ...Z.slice(J, J + 6));
      V = Math.min(V, S[0]), W = Math.min(W, S[1]), c = Math.max(c, S[2]), R = Math.max(R, S[3]), s < S[3] ? (N = S[2], s = S[3]) : s === S[3] && (N = b(N, S[2]));
    }
    F = Z[J + 4], d = Z[J + 5];
  }
  const n = V - Q(this, kZ), h = W - Q(this, kZ), M = c - V + 2 * Q(this, kZ), G = R - W + 2 * Q(this, kZ);
  a(this, td, {
    x: n,
    y: h,
    width: M,
    height: G,
    lastPoint: [N, s]
  });
};
var eV, uV, xU, Nd, u0, Xl, pV, p0, yV, zV, jU, y0, Rl, NR, sR, Us, YF, Zs, AZ;
const aZ = class aZ {
  constructor({
    editor: l = null,
    uiManager: U = null
  }) {
    i(this, Rl);
    i(this, eV, m(this, Rl, Us).bind(this));
    i(this, uV, m(this, Rl, Zs).bind(this));
    i(this, xU, null);
    i(this, Nd, null);
    i(this, u0);
    i(this, Xl, null);
    i(this, pV, !1);
    i(this, p0, !1);
    i(this, yV, null);
    i(this, zV);
    i(this, jU, null);
    i(this, y0);
    var Z;
    l ? (a(this, p0, !1), a(this, y0, O.HIGHLIGHT_COLOR), a(this, yV, l)) : (a(this, p0, !0), a(this, y0, O.HIGHLIGHT_DEFAULT_COLOR)), a(this, jU, (l == null ? void 0 : l._uiManager) || U), a(this, zV, Q(this, jU)._eventBus), a(this, u0, (l == null ? void 0 : l.color) || ((Z = Q(this, jU)) == null ? void 0 : Z.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return _(this, "_keyboardManager", new rV([[["Escape", "mac+Escape"], aZ.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], aZ.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], aZ.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], aZ.prototype._moveToPrevious], [["Home", "mac+Home"], aZ.prototype._moveToBeginning], [["End", "mac+End"], aZ.prototype._moveToEnd]]));
  }
  renderButton() {
    const l = a(this, xU, document.createElement("button"));
    l.className = "colorPicker", l.tabIndex = "0", l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), l.setAttribute("aria-haspopup", !0);
    const U = Q(this, jU)._signal;
    l.addEventListener("click", m(this, Rl, YF).bind(this), {
      signal: U
    }), l.addEventListener("keydown", Q(this, eV), {
      signal: U
    });
    const Z = a(this, Nd, document.createElement("span"));
    return Z.className = "swatch", Z.setAttribute("aria-hidden", !0), Z.style.backgroundColor = Q(this, u0), l.append(Z), l;
  }
  renderMainDropdown() {
    const l = a(this, Xl, m(this, Rl, NR).call(this));
    return l.setAttribute("aria-orientation", "horizontal"), l.setAttribute("aria-labelledby", "highlightColorPickerLabel"), l;
  }
  _colorSelectFromKeyboard(l) {
    if (l.target === Q(this, xU)) {
      m(this, Rl, YF).call(this, l);
      return;
    }
    const U = l.target.getAttribute("data-color");
    U && m(this, Rl, sR).call(this, U, l);
  }
  _moveToNext(l) {
    var U, Z;
    if (!Q(this, Rl, AZ)) {
      m(this, Rl, YF).call(this, l);
      return;
    }
    if (l.target === Q(this, xU)) {
      (U = Q(this, Xl).firstChild) == null || U.focus();
      return;
    }
    (Z = l.target.nextSibling) == null || Z.focus();
  }
  _moveToPrevious(l) {
    var U, Z;
    if (l.target === ((U = Q(this, Xl)) == null ? void 0 : U.firstChild) || l.target === Q(this, xU)) {
      Q(this, Rl, AZ) && this._hideDropdownFromKeyboard();
      return;
    }
    Q(this, Rl, AZ) || m(this, Rl, YF).call(this, l), (Z = l.target.previousSibling) == null || Z.focus();
  }
  _moveToBeginning(l) {
    var U;
    if (!Q(this, Rl, AZ)) {
      m(this, Rl, YF).call(this, l);
      return;
    }
    (U = Q(this, Xl).firstChild) == null || U.focus();
  }
  _moveToEnd(l) {
    var U;
    if (!Q(this, Rl, AZ)) {
      m(this, Rl, YF).call(this, l);
      return;
    }
    (U = Q(this, Xl).lastChild) == null || U.focus();
  }
  hideDropdown() {
    var l;
    (l = Q(this, Xl)) == null || l.classList.add("hidden"), window.removeEventListener("pointerdown", Q(this, uV));
  }
  _hideDropdownFromKeyboard() {
    var l;
    if (!Q(this, p0)) {
      if (!Q(this, Rl, AZ)) {
        (l = Q(this, yV)) == null || l.unselect();
        return;
      }
      this.hideDropdown(), Q(this, xU).focus({
        preventScroll: !0,
        focusVisible: Q(this, pV)
      });
    }
  }
  updateColor(l) {
    if (Q(this, Nd) && (Q(this, Nd).style.backgroundColor = l), !Q(this, Xl))
      return;
    const U = Q(this, jU).highlightColors.values();
    for (const Z of Q(this, Xl).children)
      Z.setAttribute("aria-selected", U.next().value === l);
  }
  destroy() {
    var l, U;
    (l = Q(this, xU)) == null || l.remove(), a(this, xU, null), a(this, Nd, null), (U = Q(this, Xl)) == null || U.remove(), a(this, Xl, null);
  }
};
eV = new WeakMap(), uV = new WeakMap(), xU = new WeakMap(), Nd = new WeakMap(), u0 = new WeakMap(), Xl = new WeakMap(), pV = new WeakMap(), p0 = new WeakMap(), yV = new WeakMap(), zV = new WeakMap(), jU = new WeakMap(), y0 = new WeakMap(), Rl = new WeakSet(), NR = function() {
  const l = document.createElement("div"), U = Q(this, jU)._signal;
  l.addEventListener("contextmenu", VU, {
    signal: U
  }), l.className = "dropdown", l.role = "listbox", l.setAttribute("aria-multiselectable", !1), l.setAttribute("aria-orientation", "vertical"), l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [Z, F] of Q(this, jU).highlightColors) {
    const d = document.createElement("button");
    d.tabIndex = "0", d.role = "option", d.setAttribute("data-color", F), d.title = Z, d.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${Z}`);
    const V = document.createElement("span");
    d.append(V), V.className = "swatch", V.style.backgroundColor = F, d.setAttribute("aria-selected", F === Q(this, u0)), d.addEventListener("click", m(this, Rl, sR).bind(this, F), {
      signal: U
    }), l.append(d);
  }
  return l.addEventListener("keydown", Q(this, eV), {
    signal: U
  }), l;
}, sR = function(l, U) {
  U.stopPropagation(), Q(this, zV).dispatch("switchannotationeditorparams", {
    source: this,
    type: Q(this, y0),
    value: l
  });
}, Us = function(l) {
  aZ._keyboardManager.exec(this, l);
}, YF = function(l) {
  if (Q(this, Rl, AZ)) {
    this.hideDropdown();
    return;
  }
  if (a(this, pV, l.detail === 0), window.addEventListener("pointerdown", Q(this, uV), {
    signal: Q(this, jU)._signal
  }), Q(this, Xl)) {
    Q(this, Xl).classList.remove("hidden");
    return;
  }
  const U = a(this, Xl, m(this, Rl, NR).call(this));
  Q(this, xU).append(U);
}, Zs = function(l) {
  var U;
  (U = Q(this, Xl)) != null && U.contains(l.target) || this.hideDropdown();
}, AZ = function() {
  return Q(this, Xl) && !Q(this, Xl).classList.contains("hidden");
};
let yW = aZ;
var z0, LV, NF, sd, L0, SU, kV, DV, bd, OU, Al, hU, fW, k0, nd, Yl, D0, UZ, oV, P, bR, nR, Fs, ds, Qs, aR, lQ, uU, Id, Vs, hW, UQ, Ws, cs, Rs, ts;
const ll = class ll extends Fl {
  constructor(U) {
    super({
      ...U,
      name: "highlightEditor"
    });
    i(this, P);
    i(this, z0, null);
    i(this, LV, 0);
    i(this, NF);
    i(this, sd, null);
    i(this, L0, null);
    i(this, SU, null);
    i(this, kV, null);
    i(this, DV, 0);
    i(this, bd, null);
    i(this, OU, null);
    i(this, Al, null);
    i(this, hU, !1);
    i(this, fW, m(this, P, Vs).bind(this));
    i(this, k0, null);
    i(this, nd);
    i(this, Yl, null);
    i(this, D0, "");
    i(this, UZ);
    i(this, oV, "");
    this.color = U.color || ll._defaultColor, a(this, UZ, U.thickness || ll._defaultThickness), a(this, nd, U.opacity || ll._defaultOpacity), a(this, NF, U.boxes || null), a(this, oV, U.methodOfCreation || ""), a(this, D0, U.text || ""), this._isDraggable = !1, U.highlightId > -1 ? (a(this, hU, !0), m(this, P, nR).call(this, U), m(this, P, lQ).call(this)) : (a(this, z0, U.anchorNode), a(this, LV, U.anchorOffset), a(this, kV, U.focusNode), a(this, DV, U.focusOffset), m(this, P, bR).call(this), m(this, P, lQ).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const U = ll.prototype;
    return _(this, "_keyboardManager", new rV([[["ArrowLeft", "mac+ArrowLeft"], U._moveCaret, {
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
      type: Q(this, hU) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: Q(this, UZ),
      methodOfCreation: Q(this, oV)
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
  static initialize(U, Z) {
    var F;
    Fl.initialize(U, Z), ll._defaultColor || (ll._defaultColor = ((F = Z.highlightColors) == null ? void 0 : F.values().next().value) || "#fff066");
  }
  static updateDefaultParams(U, Z) {
    switch (U) {
      case O.HIGHLIGHT_DEFAULT_COLOR:
        ll._defaultColor = Z;
        break;
      case O.HIGHLIGHT_THICKNESS:
        ll._defaultThickness = Z;
        break;
    }
  }
  translateInPage(U, Z) {
  }
  get toolbarPosition() {
    return Q(this, k0);
  }
  updateParams(U, Z) {
    switch (U) {
      case O.HIGHLIGHT_COLOR:
        m(this, P, Fs).call(this, Z);
        break;
      case O.HIGHLIGHT_THICKNESS:
        m(this, P, ds).call(this, Z);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[O.HIGHLIGHT_DEFAULT_COLOR, ll._defaultColor], [O.HIGHLIGHT_THICKNESS, ll._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[O.HIGHLIGHT_COLOR, this.color || ll._defaultColor], [O.HIGHLIGHT_THICKNESS, Q(this, UZ) || ll._defaultThickness], [O.HIGHLIGHT_FREE, Q(this, hU)]];
  }
  async addEditToolbar() {
    const U = await super.addEditToolbar();
    return U ? (this._uiManager.highlightColors && (a(this, L0, new yW({
      editor: this
    })), U.addColorPicker(Q(this, L0))), U) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(m(this, P, UQ).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(U, Z) {
    return super.getRect(U, Z, m(this, P, UQ).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    m(this, P, aR).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (m(this, P, lQ).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(U) {
    var F;
    let Z = !1;
    this.parent && !U ? m(this, P, aR).call(this) : U && (m(this, P, lQ).call(this, U), Z = !this.parent && ((F = this.div) == null ? void 0 : F.classList.contains("selectedEditor"))), super.setParent(U), this.show(this._isVisible), Z && this.select();
  }
  rotate(U) {
    var d, V, W;
    const {
      drawLayer: Z
    } = this.parent;
    let F;
    Q(this, hU) ? (U = (U - this.rotation + 360) % 360, F = m(d = ll, uU, Id).call(d, Q(this, OU).box, U)) : F = m(V = ll, uU, Id).call(V, this, U), Z.rotate(Q(this, Al), U), Z.rotate(Q(this, Yl), U), Z.updateBox(Q(this, Al), F), Z.updateBox(Q(this, Yl), m(W = ll, uU, Id).call(W, Q(this, SU).box, U));
  }
  render() {
    if (this.div)
      return this.div;
    const U = super.render();
    Q(this, D0) && (U.setAttribute("aria-label", Q(this, D0)), U.setAttribute("role", "mark")), Q(this, hU) ? U.classList.add("free") : this.div.addEventListener("keydown", Q(this, fW), {
      signal: this._uiManager._signal
    });
    const Z = a(this, bd, document.createElement("div"));
    U.append(Z), Z.setAttribute("aria-hidden", "true"), Z.className = "internal", Z.style.clipPath = Q(this, sd);
    const [F, d] = this.parentDimensions;
    return this.setDims(this.width * F, this.height * d), BW(this, Q(this, bd), ["pointerover", "pointerleave"]), this.enableEditing(), U;
  }
  pointerover() {
    this.parent.drawLayer.addClass(Q(this, Yl), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(Q(this, Yl), "hovered");
  }
  _moveCaret(U) {
    switch (this.parent.unselect(this), U) {
      case 0:
      case 2:
        m(this, P, hW).call(this, !0);
        break;
      case 1:
      case 3:
        m(this, P, hW).call(this, !1);
        break;
    }
  }
  select() {
    var U, Z;
    super.select(), Q(this, Yl) && ((U = this.parent) == null || U.drawLayer.removeClass(Q(this, Yl), "hovered"), (Z = this.parent) == null || Z.drawLayer.addClass(Q(this, Yl), "selected"));
  }
  unselect() {
    var U;
    super.unselect(), Q(this, Yl) && ((U = this.parent) == null || U.drawLayer.removeClass(Q(this, Yl), "selected"), Q(this, hU) || m(this, P, hW).call(this, !1));
  }
  get _mustFixPosition() {
    return !Q(this, hU);
  }
  show(U = this._isVisible) {
    super.show(U), this.parent && (this.parent.drawLayer.show(Q(this, Al), U), this.parent.drawLayer.show(Q(this, Yl), U));
  }
  static startHighlighting(U, Z, {
    target: F,
    x: d,
    y: V
  }) {
    const {
      x: W,
      y: c,
      width: R,
      height: N
    } = F.getBoundingClientRect(), s = (G) => {
      m(this, uU, Rs).call(this, U, G);
    }, b = U._signal, n = {
      capture: !0,
      passive: !1,
      signal: b
    }, h = (G) => {
      G.preventDefault(), G.stopPropagation();
    }, M = (G) => {
      F.removeEventListener("pointermove", s), window.removeEventListener("blur", M), window.removeEventListener("pointerup", M), window.removeEventListener("pointerdown", h, n), window.removeEventListener("contextmenu", VU), m(this, uU, ts).call(this, U, G);
    };
    window.addEventListener("blur", M, {
      signal: b
    }), window.addEventListener("pointerup", M, {
      signal: b
    }), window.addEventListener("pointerdown", h, n), window.addEventListener("contextmenu", VU, {
      signal: b
    }), F.addEventListener("pointermove", s, {
      signal: b
    }), this._freeHighlight = new pW({
      x: d,
      y: V
    }, [W, c, R, N], U.scale, this._defaultThickness / 2, Z, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = U.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(U, Z, F) {
    var M;
    const d = super.deserialize(U, Z, F), {
      rect: [V, W, c, R],
      color: N,
      quadPoints: s
    } = U;
    d.color = o.makeHexColor(...N), a(d, nd, U.opacity);
    const [b, n] = d.pageDimensions;
    d.width = (c - V) / b, d.height = (R - W) / n;
    const h = a(d, NF, []);
    for (let G = 0; G < s.length; G += 8)
      h.push({
        x: (s[4] - c) / b,
        y: (R - (1 - s[G + 5])) / n,
        width: (s[G + 2] - s[G]) / b,
        height: (s[G + 5] - s[G + 1]) / n
      });
    return m(M = d, P, bR).call(M), d;
  }
  serialize(U = !1) {
    if (this.isEmpty() || U)
      return null;
    const Z = this.getRect(0, 0), F = Fl._colorManager.convert(this.color);
    return {
      annotationType: f.HIGHLIGHT,
      color: F,
      opacity: Q(this, nd),
      thickness: Q(this, UZ),
      quadPoints: m(this, P, Ws).call(this),
      outlines: m(this, P, cs).call(this, Z),
      pageIndex: this.pageIndex,
      rect: Z,
      rotation: m(this, P, UQ).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
z0 = new WeakMap(), LV = new WeakMap(), NF = new WeakMap(), sd = new WeakMap(), L0 = new WeakMap(), SU = new WeakMap(), kV = new WeakMap(), DV = new WeakMap(), bd = new WeakMap(), OU = new WeakMap(), Al = new WeakMap(), hU = new WeakMap(), fW = new WeakMap(), k0 = new WeakMap(), nd = new WeakMap(), Yl = new WeakMap(), D0 = new WeakMap(), UZ = new WeakMap(), oV = new WeakMap(), P = new WeakSet(), bR = function() {
  const U = new WR(Q(this, NF), 1e-3);
  a(this, OU, U.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = Q(this, OU).box;
  const Z = new WR(Q(this, NF), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  a(this, SU, Z.getOutlines());
  const {
    lastPoint: F
  } = Q(this, SU).box;
  a(this, k0, [(F[0] - this.x) / this.width, (F[1] - this.y) / this.height]);
}, nR = function({
  highlightOutlines: U,
  highlightId: Z,
  clipPathId: F
}) {
  var s, b;
  if (a(this, OU, U), a(this, SU, U.getNewOutline(Q(this, UZ) / 2 + 1.5, 25e-4)), Z >= 0)
    a(this, Al, Z), a(this, sd, F), this.parent.drawLayer.finalizeLine(Z, U), a(this, Yl, this.parent.drawLayer.highlightOutline(Q(this, SU)));
  else if (this.parent) {
    const n = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(Q(this, Al), U), this.parent.drawLayer.updateBox(Q(this, Al), m(s = ll, uU, Id).call(s, Q(this, OU).box, (n - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(Q(this, Yl), Q(this, SU)), this.parent.drawLayer.updateBox(Q(this, Yl), m(b = ll, uU, Id).call(b, Q(this, SU).box, n));
  }
  const {
    x: V,
    y: W,
    width: c,
    height: R
  } = U.box;
  switch (this.rotation) {
    case 0:
      this.x = V, this.y = W, this.width = c, this.height = R;
      break;
    case 90: {
      const [n, h] = this.parentDimensions;
      this.x = W, this.y = 1 - V, this.width = c * h / n, this.height = R * n / h;
      break;
    }
    case 180:
      this.x = 1 - V, this.y = 1 - W, this.width = c, this.height = R;
      break;
    case 270: {
      const [n, h] = this.parentDimensions;
      this.x = 1 - W, this.y = V, this.width = c * h / n, this.height = R * n / h;
      break;
    }
  }
  const {
    lastPoint: N
  } = Q(this, SU).box;
  a(this, k0, [(N[0] - V) / c, (N[1] - W) / R]);
}, Fs = function(U) {
  const Z = (d) => {
    var V, W;
    this.color = d, (V = this.parent) == null || V.drawLayer.changeColor(Q(this, Al), d), (W = Q(this, L0)) == null || W.updateColor(d);
  }, F = this.color;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, F),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(U)
  }, !0);
}, ds = function(U) {
  const Z = Q(this, UZ), F = (d) => {
    a(this, UZ, d), m(this, P, Qs).call(this, d);
  };
  this.addCommands({
    cmd: F.bind(this, U),
    undo: F.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: U
  }, !0);
}, Qs = function(U) {
  if (!Q(this, hU))
    return;
  m(this, P, nR).call(this, {
    highlightOutlines: Q(this, OU).getNewOutline(U / 2)
  }), this.fixAndSetPosition();
  const [Z, F] = this.parentDimensions;
  this.setDims(this.width * Z, this.height * F);
}, aR = function() {
  Q(this, Al) === null || !this.parent || (this.parent.drawLayer.remove(Q(this, Al)), a(this, Al, null), this.parent.drawLayer.remove(Q(this, Yl)), a(this, Yl, null));
}, lQ = function(U = this.parent) {
  Q(this, Al) === null && ({
    id: WU(this, Al)._,
    clipPathId: WU(this, sd)._
  } = U.drawLayer.highlight(Q(this, OU), this.color, Q(this, nd)), a(this, Yl, U.drawLayer.highlightOutline(Q(this, SU))), Q(this, bd) && (Q(this, bd).style.clipPath = Q(this, sd)));
}, uU = new WeakSet(), Id = function({
  x: U,
  y: Z,
  width: F,
  height: d
}, V) {
  switch (V) {
    case 90:
      return {
        x: 1 - Z - d,
        y: U,
        width: d,
        height: F
      };
    case 180:
      return {
        x: 1 - U - F,
        y: 1 - Z - d,
        width: F,
        height: d
      };
    case 270:
      return {
        x: Z,
        y: 1 - U - F,
        width: d,
        height: F
      };
  }
  return {
    x: U,
    y: Z,
    width: F,
    height: d
  };
}, Vs = function(U) {
  ll._keyboardManager.exec(this, U);
}, hW = function(U) {
  if (!Q(this, z0))
    return;
  const Z = window.getSelection();
  U ? Z.setPosition(Q(this, z0), Q(this, LV)) : Z.setPosition(Q(this, kV), Q(this, DV));
}, UQ = function() {
  return Q(this, hU) ? this.rotation : 0;
}, Ws = function() {
  if (Q(this, hU))
    return null;
  const [U, Z] = this.pageDimensions, F = Q(this, NF), d = new Float32Array(F.length * 8);
  let V = 0;
  for (const {
    x: W,
    y: c,
    width: R,
    height: N
  } of F) {
    const s = W * U, b = (1 - c - N) * Z;
    d[V] = d[V + 4] = s, d[V + 1] = d[V + 3] = b, d[V + 2] = d[V + 6] = s + R * U, d[V + 5] = d[V + 7] = b + N * Z, V += 8;
  }
  return d;
}, cs = function(U) {
  return Q(this, OU).serialize(U, m(this, P, UQ).call(this));
}, Rs = function(U, Z) {
  this._freeHighlight.add(Z) && U.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, ts = function(U, Z) {
  this._freeHighlight.isEmpty() ? U.drawLayer.removeFreeHighlight(this._freeHighlightId) : U.createAndAddNewEditor(Z, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, i(ll, uU), r(ll, "_defaultColor", null), r(ll, "_defaultOpacity", 1), r(ll, "_defaultThickness", 12), r(ll, "_l10nPromise"), r(ll, "_type", "highlight"), r(ll, "_editorType", f.HIGHLIGHT), r(ll, "_freeHighlightId", -1), r(ll, "_freeHighlight", null), r(ll, "_freeHighlightClipId", "");
let zW = ll;
var ad, hd, IV, EV, CV, md, ZZ, DZ, XU, id, Md, oZ, Jd, Gd, sF, y, Ns, ss, bs, ns, mR, as, iR, hs, ms, is, Ms, Js, BF, MR, mW, iW, Ed, JR, MW, HZ, Gs, GR, Ts, Ss, TR, JW, ZQ;
const bl = class bl extends Fl {
  constructor(U) {
    super({
      ...U,
      name: "inkEditor"
    });
    i(this, y);
    i(this, ad, 0);
    i(this, hd, 0);
    i(this, IV, this.canvasPointermove.bind(this));
    i(this, EV, this.canvasPointerleave.bind(this));
    i(this, CV, this.canvasPointerup.bind(this));
    i(this, md, this.canvasPointerdown.bind(this));
    i(this, ZZ, null);
    i(this, DZ, new Path2D());
    i(this, XU, !1);
    i(this, id, !1);
    i(this, Md, !1);
    i(this, oZ, null);
    i(this, Jd, 0);
    i(this, Gd, 0);
    i(this, sF, null);
    this.color = U.color || null, this.thickness = U.thickness || null, this.opacity = U.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(U, Z) {
    Fl.initialize(U, Z);
  }
  static updateDefaultParams(U, Z) {
    switch (U) {
      case O.INK_THICKNESS:
        bl._defaultThickness = Z;
        break;
      case O.INK_COLOR:
        bl._defaultColor = Z;
        break;
      case O.INK_OPACITY:
        bl._defaultOpacity = Z / 100;
        break;
    }
  }
  updateParams(U, Z) {
    switch (U) {
      case O.INK_THICKNESS:
        m(this, y, Ns).call(this, Z);
        break;
      case O.INK_COLOR:
        m(this, y, ss).call(this, Z);
        break;
      case O.INK_OPACITY:
        m(this, y, bs).call(this, Z);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[O.INK_THICKNESS, bl._defaultThickness], [O.INK_COLOR, bl._defaultColor || Fl._defaultLineColor], [O.INK_OPACITY, Math.round(bl._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[O.INK_THICKNESS, this.thickness || bl._defaultThickness], [O.INK_COLOR, this.color || bl._defaultColor || Fl._defaultLineColor], [O.INK_OPACITY, Math.round(100 * (this.opacity ?? bl._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (m(this, y, mW).call(this), m(this, y, iW).call(this)), this.isAttachedToDOM || (this.parent.add(this), m(this, y, Ed).call(this)), m(this, y, ZQ).call(this)));
  }
  remove() {
    var U;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, Q(this, ZZ) && (clearTimeout(Q(this, ZZ)), a(this, ZZ, null)), (U = Q(this, oZ)) == null || U.disconnect(), a(this, oZ, null), super.remove());
  }
  setParent(U) {
    !this.parent && U ? this._uiManager.removeShouldRescale(this) : this.parent && U === null && this._uiManager.addShouldRescale(this), super.setParent(U);
  }
  onScaleChanging() {
    const [U, Z] = this.parentDimensions, F = this.width * U, d = this.height * Z;
    this.setDimensions(F, d);
  }
  enableEditMode() {
    Q(this, XU) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", Q(this, md), {
      signal: this._uiManager._signal
    }));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", Q(this, md)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    Q(this, XU) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), a(this, XU, !0), this.div.classList.add("disabled"), m(this, y, ZQ).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(U) {
    this._focusEventsAllowed && (super.focusin(U), this.enableEditMode());
  }
  canvasPointerdown(U) {
    U.button !== 0 || !this.isInEditMode() || Q(this, XU) || (this.setInForeground(), U.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), m(this, y, as).call(this, U.offsetX, U.offsetY));
  }
  canvasPointermove(U) {
    U.preventDefault(), m(this, y, iR).call(this, U.offsetX, U.offsetY);
  }
  canvasPointerup(U) {
    U.preventDefault(), m(this, y, MR).call(this, U);
  }
  canvasPointerleave(U) {
    m(this, y, MR).call(this, U);
  }
  get isResizable() {
    return !this.isEmpty() && Q(this, XU);
  }
  render() {
    if (this.div)
      return this.div;
    let U, Z;
    this.width && (U = this.x, Z = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [F, d, V, W] = m(this, y, ns).call(this);
    if (this.setAt(F, d, 0, 0), this.setDims(V, W), m(this, y, mW).call(this), this.width) {
      const [c, R] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * R), this.setAt(U * c, Z * R, this.width * c, this.height * R), a(this, Md, !0), m(this, y, Ed).call(this), this.setDims(this.width * c, this.height * R), m(this, y, BF).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return m(this, y, iW).call(this), this.div;
  }
  setDimensions(U, Z) {
    const F = Math.round(U), d = Math.round(Z);
    if (Q(this, Jd) === F && Q(this, Gd) === d)
      return;
    a(this, Jd, F), a(this, Gd, d), this.canvas.style.visibility = "hidden";
    const [V, W] = this.parentDimensions;
    this.width = U / V, this.height = Z / W, this.fixAndSetPosition(), Q(this, XU) && m(this, y, JR).call(this, U, Z), m(this, y, Ed).call(this), m(this, y, BF).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(U, Z, F) {
    var G, J, T;
    if (U instanceof ON)
      return null;
    const d = super.deserialize(U, Z, F);
    d.thickness = U.thickness, d.color = o.makeHexColor(...U.color), d.opacity = U.opacity;
    const [V, W] = d.pageDimensions, c = d.width * V, R = d.height * W, N = d.parentScale, s = U.thickness / 2;
    a(d, XU, !0), a(d, Jd, Math.round(c)), a(d, Gd, Math.round(R));
    const {
      paths: b,
      rect: n,
      rotation: h
    } = U;
    for (let {
      bezier: S
    } of b) {
      S = m(G = bl, HZ, Ts).call(G, S, n, h);
      const Y = [];
      d.paths.push(Y);
      let B = N * (S[0] - s), X = N * (S[1] - s);
      for (let L = 2, I = S.length; L < I; L += 6) {
        const g = N * (S[L] - s), w = N * (S[L + 1] - s), Wl = N * (S[L + 2] - s), z = N * (S[L + 3] - s), C = N * (S[L + 4] - s), K = N * (S[L + 5] - s);
        Y.push([[B, X], [g, w], [Wl, z], [C, K]]), B = C, X = K;
      }
      const e = m(this, HZ, Gs).call(this, Y);
      d.bezierPath2D.push(e);
    }
    const M = m(J = d, y, TR).call(J);
    return a(d, hd, Math.max(Fl.MIN_SIZE, M[2] - M[0])), a(d, ad, Math.max(Fl.MIN_SIZE, M[3] - M[1])), m(T = d, y, JR).call(T, c, R), d;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const U = this.getRect(0, 0), Z = Fl._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: f.INK,
      color: Z,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: m(this, y, Ss).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, U),
      pageIndex: this.pageIndex,
      rect: U,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
ad = new WeakMap(), hd = new WeakMap(), IV = new WeakMap(), EV = new WeakMap(), CV = new WeakMap(), md = new WeakMap(), ZZ = new WeakMap(), DZ = new WeakMap(), XU = new WeakMap(), id = new WeakMap(), Md = new WeakMap(), oZ = new WeakMap(), Jd = new WeakMap(), Gd = new WeakMap(), sF = new WeakMap(), y = new WeakSet(), Ns = function(U) {
  const Z = (d) => {
    this.thickness = d, m(this, y, ZQ).call(this);
  }, F = this.thickness;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, F),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ss = function(U) {
  const Z = (d) => {
    this.color = d, m(this, y, BF).call(this);
  }, F = this.color;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, F),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, bs = function(U) {
  const Z = (d) => {
    this.opacity = d, m(this, y, BF).call(this);
  };
  U /= 100;
  const F = this.opacity;
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, F),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: O.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ns = function() {
  const {
    parentRotation: U,
    parentDimensions: [Z, F]
  } = this;
  switch (U) {
    case 90:
      return [0, F, F, Z];
    case 180:
      return [Z, F, Z, F];
    case 270:
      return [Z, 0, F, Z];
    default:
      return [0, 0, Z, F];
  }
}, mR = function() {
  const {
    ctx: U,
    color: Z,
    opacity: F,
    thickness: d,
    parentScale: V,
    scaleFactor: W
  } = this;
  U.lineWidth = d * V / W, U.lineCap = "round", U.lineJoin = "round", U.miterLimit = 10, U.strokeStyle = `${Z}${gb(F)}`;
}, as = function(U, Z) {
  const F = this._uiManager._signal;
  this.canvas.addEventListener("contextmenu", VU, {
    signal: F
  }), this.canvas.addEventListener("pointerleave", Q(this, EV), {
    signal: F
  }), this.canvas.addEventListener("pointermove", Q(this, IV), {
    signal: F
  }), this.canvas.addEventListener("pointerup", Q(this, CV), {
    signal: F
  }), this.canvas.removeEventListener("pointerdown", Q(this, md)), this.isEditing = !0, Q(this, Md) || (a(this, Md, !0), m(this, y, Ed).call(this), this.thickness || (this.thickness = bl._defaultThickness), this.color || (this.color = bl._defaultColor || Fl._defaultLineColor), this.opacity ?? (this.opacity = bl._defaultOpacity)), this.currentPath.push([U, Z]), a(this, id, !1), m(this, y, mR).call(this), a(this, sF, () => {
    m(this, y, is).call(this), Q(this, sF) && window.requestAnimationFrame(Q(this, sF));
  }), window.requestAnimationFrame(Q(this, sF));
}, iR = function(U, Z) {
  const [F, d] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && U === F && Z === d)
    return;
  const V = this.currentPath;
  let W = Q(this, DZ);
  if (V.push([U, Z]), a(this, id, !0), V.length <= 2) {
    W.moveTo(...V[0]), W.lineTo(U, Z);
    return;
  }
  V.length === 3 && (a(this, DZ, W = new Path2D()), W.moveTo(...V[0])), m(this, y, Ms).call(this, W, ...V.at(-3), ...V.at(-2), U, Z);
}, hs = function() {
  if (this.currentPath.length === 0)
    return;
  const U = this.currentPath.at(-1);
  Q(this, DZ).lineTo(...U);
}, ms = function(U, Z) {
  a(this, sF, null), U = Math.min(Math.max(U, 0), this.canvas.width), Z = Math.min(Math.max(Z, 0), this.canvas.height), m(this, y, iR).call(this, U, Z), m(this, y, hs).call(this);
  let F;
  if (this.currentPath.length !== 1)
    F = m(this, y, Js).call(this);
  else {
    const R = [U, Z];
    F = [[R, R.slice(), R.slice(), R]];
  }
  const d = Q(this, DZ), V = this.currentPath;
  this.currentPath = [], a(this, DZ, new Path2D());
  const W = () => {
    this.allRawPaths.push(V), this.paths.push(F), this.bezierPath2D.push(d), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (m(this, y, mW).call(this), m(this, y, iW).call(this)), m(this, y, ZQ).call(this));
  };
  this.addCommands({
    cmd: W,
    undo: c,
    mustExec: !0
  });
}, is = function() {
  if (!Q(this, id))
    return;
  a(this, id, !1);
  const U = Math.ceil(this.thickness * this.parentScale), Z = this.currentPath.slice(-3), F = Z.map((W) => W[0]), d = Z.map((W) => W[1]);
  Math.min(...F) - U, Math.max(...F) + U, Math.min(...d) - U, Math.max(...d) + U;
  const {
    ctx: V
  } = this;
  V.save(), V.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const W of this.bezierPath2D)
    V.stroke(W);
  V.stroke(Q(this, DZ)), V.restore();
}, Ms = function(U, Z, F, d, V, W, c) {
  const R = (Z + d) / 2, N = (F + V) / 2, s = (d + W) / 2, b = (V + c) / 2;
  U.bezierCurveTo(R + 2 * (d - R) / 3, N + 2 * (V - N) / 3, s + 2 * (d - s) / 3, b + 2 * (V - b) / 3, s, b);
}, Js = function() {
  const U = this.currentPath;
  if (U.length <= 2)
    return [[U[0], U[0], U.at(-1), U.at(-1)]];
  const Z = [];
  let F, [d, V] = U[0];
  for (F = 1; F < U.length - 2; F++) {
    const [n, h] = U[F], [M, G] = U[F + 1], J = (n + M) / 2, T = (h + G) / 2, S = [d + 2 * (n - d) / 3, V + 2 * (h - V) / 3], Y = [J + 2 * (n - J) / 3, T + 2 * (h - T) / 3];
    Z.push([[d, V], S, Y, [J, T]]), [d, V] = [J, T];
  }
  const [W, c] = U[F], [R, N] = U[F + 1], s = [d + 2 * (W - d) / 3, V + 2 * (c - V) / 3], b = [R + 2 * (W - R) / 3, N + 2 * (c - N) / 3];
  return Z.push([[d, V], s, b, [R, N]]), Z;
}, BF = function() {
  if (this.isEmpty()) {
    m(this, y, MW).call(this);
    return;
  }
  m(this, y, mR).call(this);
  const {
    canvas: U,
    ctx: Z
  } = this;
  Z.setTransform(1, 0, 0, 1, 0, 0), Z.clearRect(0, 0, U.width, U.height), m(this, y, MW).call(this);
  for (const F of this.bezierPath2D)
    Z.stroke(F);
}, MR = function(U) {
  this.canvas.removeEventListener("pointerleave", Q(this, EV)), this.canvas.removeEventListener("pointermove", Q(this, IV)), this.canvas.removeEventListener("pointerup", Q(this, CV)), this.canvas.addEventListener("pointerdown", Q(this, md), {
    signal: this._uiManager._signal
  }), Q(this, ZZ) && clearTimeout(Q(this, ZZ)), a(this, ZZ, setTimeout(() => {
    a(this, ZZ, null), this.canvas.removeEventListener("contextmenu", VU);
  }, 10)), m(this, y, ms).call(this, U.offsetX, U.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, mW = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, iW = function() {
  a(this, oZ, new ResizeObserver((U) => {
    const Z = U[0].contentRect;
    Z.width && Z.height && this.setDimensions(Z.width, Z.height);
  })), Q(this, oZ).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var U;
    (U = Q(this, oZ)) == null || U.disconnect(), a(this, oZ, null);
  }, {
    once: !0
  });
}, Ed = function() {
  if (!Q(this, Md))
    return;
  const [U, Z] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * U), this.canvas.height = Math.ceil(this.height * Z), m(this, y, MW).call(this);
}, JR = function(U, Z) {
  const F = m(this, y, JW).call(this), d = (U - F) / Q(this, hd), V = (Z - F) / Q(this, ad);
  this.scaleFactor = Math.min(d, V);
}, MW = function() {
  const U = m(this, y, JW).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + U, this.translationY * this.scaleFactor + U);
}, HZ = new WeakSet(), Gs = function(U) {
  const Z = new Path2D();
  for (let F = 0, d = U.length; F < d; F++) {
    const [V, W, c, R] = U[F];
    F === 0 && Z.moveTo(...V), Z.bezierCurveTo(W[0], W[1], c[0], c[1], R[0], R[1]);
  }
  return Z;
}, GR = function(U, Z, F) {
  const [d, V, W, c] = Z;
  switch (F) {
    case 0:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] += d, U[R + 1] = c - U[R + 1];
      break;
    case 90:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = U[R + 1] + d, U[R + 1] = s + V;
      }
      break;
    case 180:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] = W - U[R], U[R + 1] += V;
      break;
    case 270:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = W - U[R + 1], U[R + 1] = c - s;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, Ts = function(U, Z, F) {
  const [d, V, W, c] = Z;
  switch (F) {
    case 0:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] -= d, U[R + 1] = c - U[R + 1];
      break;
    case 90:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = U[R + 1] - V, U[R + 1] = s - d;
      }
      break;
    case 180:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] = W - U[R], U[R + 1] -= V;
      break;
    case 270:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const s = U[R];
        U[R] = c - U[R + 1], U[R + 1] = W - s;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, Ss = function(U, Z, F, d) {
  var N, s;
  const V = [], W = this.thickness / 2, c = U * Z + W, R = U * F + W;
  for (const b of this.paths) {
    const n = [], h = [];
    for (let M = 0, G = b.length; M < G; M++) {
      const [J, T, S, Y] = b[M];
      if (J[0] === Y[0] && J[1] === Y[1] && G === 1) {
        const z = U * J[0] + c, C = U * J[1] + R;
        n.push(z, C), h.push(z, C);
        break;
      }
      const B = U * J[0] + c, X = U * J[1] + R, e = U * T[0] + c, L = U * T[1] + R, I = U * S[0] + c, g = U * S[1] + R, w = U * Y[0] + c, Wl = U * Y[1] + R;
      M === 0 && (n.push(B, X), h.push(B, X)), n.push(e, L, I, g, w, Wl), h.push(e, L), M === G - 1 && h.push(w, Wl);
    }
    V.push({
      bezier: m(N = bl, HZ, GR).call(N, n, d, this.rotation),
      points: m(s = bl, HZ, GR).call(s, h, d, this.rotation)
    });
  }
  return V;
}, TR = function() {
  let U = 1 / 0, Z = -1 / 0, F = 1 / 0, d = -1 / 0;
  for (const V of this.paths)
    for (const [W, c, R, N] of V) {
      const s = o.bezierBoundingBox(...W, ...c, ...R, ...N);
      U = Math.min(U, s[0]), F = Math.min(F, s[1]), Z = Math.max(Z, s[2]), d = Math.max(d, s[3]);
    }
  return [U, F, Z, d];
}, JW = function() {
  return Q(this, XU) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, ZQ = function(U = !1) {
  if (this.isEmpty())
    return;
  if (!Q(this, XU)) {
    m(this, y, BF).call(this);
    return;
  }
  const Z = m(this, y, TR).call(this), F = m(this, y, JW).call(this);
  a(this, hd, Math.max(Fl.MIN_SIZE, Z[2] - Z[0])), a(this, ad, Math.max(Fl.MIN_SIZE, Z[3] - Z[1]));
  const d = Math.ceil(F + Q(this, hd) * this.scaleFactor), V = Math.ceil(F + Q(this, ad) * this.scaleFactor), [W, c] = this.parentDimensions;
  this.width = d / W, this.height = V / c, this.setAspectRatio(d, V);
  const R = this.translationX, N = this.translationY;
  this.translationX = -Z[0], this.translationY = -Z[1], m(this, y, Ed).call(this), m(this, y, BF).call(this), a(this, Jd, d), a(this, Gd, V), this.setDims(d, V);
  const s = U ? F / this.scaleFactor / 2 : 0;
  this.translate(R - this.translationX - s, N - this.translationY - s);
}, i(bl, HZ), r(bl, "_defaultColor", null), r(bl, "_defaultOpacity", 1), r(bl, "_defaultThickness", 1), r(bl, "_type", "ink"), r(bl, "_editorType", f.INK);
let hR = bl;
var Il, El, bF, IZ, nF, o0, FZ, EZ, dZ, rU, wV, $, FQ, dQ, GW, XR, Xs, Ys, YR, TW, Bs;
const WQ = class WQ extends Fl {
  constructor(U) {
    super({
      ...U,
      name: "stampEditor"
    });
    i(this, $);
    i(this, Il, null);
    i(this, El, null);
    i(this, bF, null);
    i(this, IZ, null);
    i(this, nF, null);
    i(this, o0, "");
    i(this, FZ, null);
    i(this, EZ, null);
    i(this, dZ, null);
    i(this, rU, !1);
    i(this, wV, !1);
    a(this, IZ, U.bitmapUrl), a(this, nF, U.bitmapFile);
  }
  static initialize(U, Z) {
    Fl.initialize(U, Z);
  }
  static get supportedTypes() {
    return _(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((Z) => `image/${Z}`));
  }
  static get supportedTypesStr() {
    return _(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(U) {
    return this.supportedTypes.includes(U);
  }
  static paste(U, Z) {
    Z.pasteEditor(f.STAMP, {
      bitmapFile: U.getAsFile()
    });
  }
  remove() {
    var U, Z;
    Q(this, El) && (a(this, Il, null), this._uiManager.imageManager.deleteId(Q(this, El)), (U = Q(this, FZ)) == null || U.remove(), a(this, FZ, null), (Z = Q(this, EZ)) == null || Z.disconnect(), a(this, EZ, null), Q(this, dZ) && (clearTimeout(Q(this, dZ)), a(this, dZ, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      Q(this, El) && m(this, $, GW).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (Q(this, El) && Q(this, FZ) === null && m(this, $, GW).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(Q(this, bF) || Q(this, Il) || Q(this, IZ) || Q(this, nF) || Q(this, El));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let U, Z;
    if (this.width && (U = this.x, Z = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), Q(this, Il) ? m(this, $, XR).call(this) : m(this, $, GW).call(this), this.width) {
      const [F, d] = this.parentDimensions;
      this.setAt(U * F, Z * d, this.width * F, this.height * d);
    }
    return this.div;
  }
  getImageForAltText() {
    return Q(this, FZ);
  }
  static deserialize(U, Z, F) {
    if (U instanceof rN)
      return null;
    const d = super.deserialize(U, Z, F), {
      rect: V,
      bitmapUrl: W,
      bitmapId: c,
      isSvg: R,
      accessibilityData: N
    } = U;
    c && F.imageManager.isValidId(c) ? a(d, El, c) : a(d, IZ, W), a(d, rU, R);
    const [s, b] = d.pageDimensions;
    return d.width = (V[2] - V[0]) / s, d.height = (V[3] - V[1]) / b, N && (d.altTextData = N), d;
  }
  serialize(U = !1, Z = null) {
    if (this.isEmpty())
      return null;
    const F = {
      annotationType: f.STAMP,
      bitmapId: Q(this, El),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: Q(this, rU),
      structTreeParentId: this._structTreeParentId
    };
    if (U)
      return F.bitmapUrl = m(this, $, TW).call(this, !0), F.accessibilityData = this.altTextData, F;
    const {
      decorative: d,
      altText: V
    } = this.altTextData;
    if (!d && V && (F.accessibilityData = {
      type: "Figure",
      alt: V
    }), Z === null)
      return F;
    Z.stamps || (Z.stamps = /* @__PURE__ */ new Map());
    const W = Q(this, rU) ? (F.rect[2] - F.rect[0]) * (F.rect[3] - F.rect[1]) : null;
    if (!Z.stamps.has(Q(this, El)))
      Z.stamps.set(Q(this, El), {
        area: W,
        serialized: F
      }), F.bitmap = m(this, $, TW).call(this, !1);
    else if (Q(this, rU)) {
      const c = Z.stamps.get(Q(this, El));
      W > c.area && (c.area = W, c.serialized.bitmap.close(), c.serialized.bitmap = m(this, $, TW).call(this, !1));
    }
    return F;
  }
};
Il = new WeakMap(), El = new WeakMap(), bF = new WeakMap(), IZ = new WeakMap(), nF = new WeakMap(), o0 = new WeakMap(), FZ = new WeakMap(), EZ = new WeakMap(), dZ = new WeakMap(), rU = new WeakMap(), wV = new WeakMap(), $ = new WeakSet(), FQ = function(U, Z = !1) {
  if (!U) {
    this.remove();
    return;
  }
  a(this, Il, U.bitmap), Z || (a(this, El, U.id), a(this, rU, U.isSvg)), U.file && a(this, o0, U.file.name), m(this, $, XR).call(this);
}, dQ = function() {
  a(this, bF, null), this._uiManager.enableWaiting(!1), Q(this, FZ) && this.div.focus();
}, GW = function() {
  if (Q(this, El)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(Q(this, El)).then((F) => m(this, $, FQ).call(this, F, !0)).finally(() => m(this, $, dQ).call(this));
    return;
  }
  if (Q(this, IZ)) {
    const F = Q(this, IZ);
    a(this, IZ, null), this._uiManager.enableWaiting(!0), a(this, bF, this._uiManager.imageManager.getFromUrl(F).then((d) => m(this, $, FQ).call(this, d)).finally(() => m(this, $, dQ).call(this)));
    return;
  }
  if (Q(this, nF)) {
    const F = Q(this, nF);
    a(this, nF, null), this._uiManager.enableWaiting(!0), a(this, bF, this._uiManager.imageManager.getFromFile(F).then((d) => m(this, $, FQ).call(this, d)).finally(() => m(this, $, dQ).call(this)));
    return;
  }
  const U = document.createElement("input");
  U.type = "file", U.accept = WQ.supportedTypesStr;
  const Z = this._uiManager._signal;
  a(this, bF, new Promise((F) => {
    U.addEventListener("change", async () => {
      if (!U.files || U.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const d = await this._uiManager.imageManager.getFromFile(U.files[0]);
        m(this, $, FQ).call(this, d);
      }
      F();
    }, {
      signal: Z
    }), U.addEventListener("cancel", () => {
      this.remove(), F();
    }, {
      signal: Z
    });
  }).finally(() => m(this, $, dQ).call(this))), U.click();
}, XR = function() {
  const {
    div: U
  } = this;
  let {
    width: Z,
    height: F
  } = Q(this, Il);
  const [d, V] = this.pageDimensions, W = 0.75;
  if (this.width)
    Z = this.width * d, F = this.height * V;
  else if (Z > W * d || F > W * V) {
    const s = Math.min(W * d / Z, W * V / F);
    Z *= s, F *= s;
  }
  const [c, R] = this.parentDimensions;
  this.setDims(Z * c / d, F * R / V), this._uiManager.enableWaiting(!1);
  const N = a(this, FZ, document.createElement("canvas"));
  U.append(N), U.hidden = !1, m(this, $, YR).call(this, Z, F), m(this, $, Bs).call(this), Q(this, wV) || (this.parent.addUndoableEditor(this), a(this, wV, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), Q(this, o0) && N.setAttribute("aria-label", Q(this, o0));
}, Xs = function(U, Z) {
  var W;
  const [F, d] = this.parentDimensions;
  this.width = U / F, this.height = Z / d, this.setDims(U, Z), (W = this._initialOptions) != null && W.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, Q(this, dZ) !== null && clearTimeout(Q(this, dZ)), a(this, dZ, setTimeout(() => {
    a(this, dZ, null), m(this, $, YR).call(this, U, Z);
  }, 200));
}, Ys = function(U, Z) {
  const {
    width: F,
    height: d
  } = Q(this, Il);
  let V = F, W = d, c = Q(this, Il);
  for (; V > 2 * U || W > 2 * Z; ) {
    const R = V, N = W;
    V > 2 * U && (V = V >= 16384 ? Math.floor(V / 2) - 1 : Math.ceil(V / 2)), W > 2 * Z && (W = W >= 16384 ? Math.floor(W / 2) - 1 : Math.ceil(W / 2));
    const s = new OffscreenCanvas(V, W);
    s.getContext("2d").drawImage(c, 0, 0, R, N, 0, 0, V, W), c = s.transferToImageBitmap();
  }
  return c;
}, YR = function(U, Z) {
  U = Math.ceil(U), Z = Math.ceil(Z);
  const F = Q(this, FZ);
  if (!F || F.width === U && F.height === Z)
    return;
  F.width = U, F.height = Z;
  const d = Q(this, rU) ? Q(this, Il) : m(this, $, Ys).call(this, U, Z);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const c = new OffscreenCanvas(U, Z).getContext("2d");
    c.drawImage(d, 0, 0, d.width, d.height, 0, 0, U, Z), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: c.getImageData(0, 0, U, Z).data,
        width: U,
        height: Z,
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
  const V = F.getContext("2d");
  V.filter = this._uiManager.hcmFilter, V.drawImage(d, 0, 0, d.width, d.height, 0, 0, U, Z);
}, TW = function(U) {
  if (U) {
    if (Q(this, rU)) {
      const d = this._uiManager.imageManager.getSvgUrl(Q(this, El));
      if (d)
        return d;
    }
    const Z = document.createElement("canvas");
    return {
      width: Z.width,
      height: Z.height
    } = Q(this, Il), Z.getContext("2d").drawImage(Q(this, Il), 0, 0), Z.toDataURL();
  }
  if (Q(this, rU)) {
    const [Z, F] = this.pageDimensions, d = Math.round(this.width * Z * iF.PDF_TO_CSS_UNITS), V = Math.round(this.height * F * iF.PDF_TO_CSS_UNITS), W = new OffscreenCanvas(d, V);
    return W.getContext("2d").drawImage(Q(this, Il), 0, 0, Q(this, Il).width, Q(this, Il).height, 0, 0, d, V), W.transferToImageBitmap();
  }
  return structuredClone(Q(this, Il));
}, Bs = function() {
  this._uiManager._signal && (a(this, EZ, new ResizeObserver((U) => {
    const Z = U[0].contentRect;
    Z.width && Z.height && m(this, $, Xs).call(this, Z.width, Z.height);
  })), Q(this, EZ).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var U;
    (U = Q(this, EZ)) == null || U.disconnect(), a(this, EZ, null);
  }, {
    once: !0
  }));
}, r(WQ, "_type", "stamp"), r(WQ, "_editorType", f.STAMP);
let SR = WQ;
var Td, I0, QZ, Sd, CZ, wZ, xZ, mU, aF, E0, C0, fl, E, hF, wl, es, eR, uR, pR, SW;
const pU = class pU {
  constructor({
    uiManager: l,
    pageIndex: U,
    div: Z,
    accessibilityManager: F,
    annotationLayer: d,
    drawLayer: V,
    textLayer: W,
    viewport: c,
    l10n: R
  }) {
    i(this, wl);
    i(this, Td);
    i(this, I0, !1);
    i(this, QZ, null);
    i(this, Sd, null);
    i(this, CZ, null);
    i(this, wZ, null);
    i(this, xZ, null);
    i(this, mU, /* @__PURE__ */ new Map());
    i(this, aF, !1);
    i(this, E0, !1);
    i(this, C0, !1);
    i(this, fl, null);
    i(this, E);
    const N = [...Q(pU, hF).values()];
    if (!pU._initialized) {
      pU._initialized = !0;
      for (const s of N)
        s.initialize(R, l);
    }
    l.registerEditorTypes(N), a(this, E, l), this.pageIndex = U, this.div = Z, a(this, Td, F), a(this, QZ, d), this.viewport = c, a(this, fl, W), this.drawLayer = V, Q(this, E).addLayer(this);
  }
  get isEmpty() {
    return Q(this, mU).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && Q(this, E).getMode() === f.NONE;
  }
  updateToolbar(l) {
    Q(this, E).updateToolbar(l);
  }
  updateMode(l = Q(this, E).getMode()) {
    switch (m(this, wl, SW).call(this), l) {
      case f.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case f.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case f.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: U
    } = this.div;
    for (const Z of Q(pU, hF).values())
      U.toggle(`${Z._type}Editing`, l === Z._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(l) {
    var U;
    return l === ((U = Q(this, fl)) == null ? void 0 : U.div);
  }
  addInkEditorIfNeeded(l) {
    if (Q(this, E).getMode() !== f.INK)
      return;
    if (!l) {
      for (const Z of Q(this, mU).values())
        if (Z.isEmpty()) {
          Z.setInBackground();
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
    (U = Q(this, QZ)) == null || U.div.classList.toggle("disabled", !l);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const l = /* @__PURE__ */ new Set();
    for (const Z of Q(this, mU).values())
      Z.enableEditing(), Z.show(!0), Z.annotationElementId && (Q(this, E).removeChangedExistingAnnotation(Z), l.add(Z.annotationElementId));
    if (!Q(this, QZ))
      return;
    const U = Q(this, QZ).getEditableAnnotations();
    for (const Z of U) {
      if (Z.hide(), Q(this, E).isDeletedAnnotationElement(Z.data.id) || l.has(Z.data.id))
        continue;
      const F = this.deserialize(Z);
      F && (this.addOrRebuild(F), F.enableEditing());
    }
  }
  disable() {
    var F;
    a(this, C0, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const l = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
    for (const d of Q(this, mU).values())
      if (d.disableEditing(), !!d.annotationElementId) {
        if (d.serialize() !== null) {
          l.set(d.annotationElementId, d);
          continue;
        } else
          U.set(d.annotationElementId, d);
        (F = this.getEditableAnnotation(d.annotationElementId)) == null || F.show(), d.remove();
      }
    if (Q(this, QZ)) {
      const d = Q(this, QZ).getEditableAnnotations();
      for (const V of d) {
        const {
          id: W
        } = V.data;
        if (Q(this, E).isDeletedAnnotationElement(W))
          continue;
        let c = U.get(W);
        if (c) {
          c.resetAnnotationElement(V), c.show(!1), V.show();
          continue;
        }
        c = l.get(W), c && (Q(this, E).addChangedExistingAnnotation(c), c.renderAnnotationElement(V), c.show(!1)), V.show();
      }
    }
    m(this, wl, SW).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: Z
    } = this.div;
    for (const d of Q(pU, hF).values())
      Z.remove(`${d._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), a(this, C0, !1);
  }
  getEditableAnnotation(l) {
    var U;
    return ((U = Q(this, QZ)) == null ? void 0 : U.getEditableAnnotation(l)) || null;
  }
  setActiveEditor(l) {
    Q(this, E).getActive() !== l && Q(this, E).setActiveEditor(l);
  }
  enableTextSelection() {
    var l;
    this.div.tabIndex = -1, (l = Q(this, fl)) != null && l.div && !Q(this, wZ) && (a(this, wZ, m(this, wl, es).bind(this)), Q(this, fl).div.addEventListener("pointerdown", Q(this, wZ), {
      signal: Q(this, E)._signal
    }), Q(this, fl).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var l;
    this.div.tabIndex = 0, (l = Q(this, fl)) != null && l.div && Q(this, wZ) && (Q(this, fl).div.removeEventListener("pointerdown", Q(this, wZ)), a(this, wZ, null), Q(this, fl).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (Q(this, CZ))
      return;
    const l = Q(this, E)._signal;
    a(this, CZ, this.pointerdown.bind(this)), a(this, Sd, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", Q(this, CZ), {
      signal: l
    }), this.div.addEventListener("pointerup", Q(this, Sd), {
      signal: l
    });
  }
  disableClick() {
    Q(this, CZ) && (this.div.removeEventListener("pointerdown", Q(this, CZ)), this.div.removeEventListener("pointerup", Q(this, Sd)), a(this, CZ, null), a(this, Sd, null));
  }
  attach(l) {
    Q(this, mU).set(l.id, l);
    const {
      annotationElementId: U
    } = l;
    U && Q(this, E).isDeletedAnnotationElement(U) && Q(this, E).removeDeletedAnnotationElement(l);
  }
  detach(l) {
    var U;
    Q(this, mU).delete(l.id), (U = Q(this, Td)) == null || U.removePointerInTextLayer(l.contentDiv), !Q(this, C0) && l.annotationElementId && Q(this, E).addDeletedAnnotationElement(l);
  }
  remove(l) {
    this.detach(l), Q(this, E).removeEditor(l), l.div.remove(), l.isAttachedToDOM = !1, Q(this, E0) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(l) {
    var U;
    l.parent !== this && (l.parent && l.annotationElementId && (Q(this, E).addDeletedAnnotationElement(l.annotationElementId), Fl.deleteAnnotationElement(l), l.annotationElementId = null), this.attach(l), (U = l.parent) == null || U.detach(l), l.setParent(this), l.div && l.isAttachedToDOM && (l.div.remove(), this.div.append(l.div)));
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
    var Z;
    if (!l.isAttachedToDOM)
      return;
    const {
      activeElement: U
    } = document;
    l.div.contains(U) && !Q(this, xZ) && (l._focusEventsAllowed = !1, a(this, xZ, setTimeout(() => {
      a(this, xZ, null), l.div.contains(document.activeElement) ? l._focusEventsAllowed = !0 : (l.div.addEventListener("focusin", () => {
        l._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: Q(this, E)._signal
      }), U.focus());
    }, 0))), l._structTreeParentId = (Z = Q(this, Td)) == null ? void 0 : Z.moveElementInDOM(this.div, l.div, l.contentDiv, !0);
  }
  addOrRebuild(l) {
    l.needsToBeRebuilt() ? (l.parent || (l.parent = this), l.rebuild(), l.show()) : this.add(l);
  }
  addUndoableEditor(l) {
    const U = () => l._uiManager.rebuild(l), Z = () => {
      l.remove();
    };
    this.addCommands({
      cmd: U,
      undo: Z,
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
    return (l = Q(this, wl, eR)) == null ? void 0 : l.canCreateNewEmptyEditor();
  }
  pasteEditor(l, U) {
    Q(this, E).updateToolbar(l), Q(this, E).updateMode(l);
    const {
      offsetX: Z,
      offsetY: F
    } = m(this, wl, pR).call(this), d = this.getNextId(), V = m(this, wl, uR).call(this, {
      parent: this,
      id: d,
      x: Z,
      y: F,
      uiManager: Q(this, E),
      isCentered: !0,
      ...U
    });
    V && this.add(V);
  }
  deserialize(l) {
    var U;
    return ((U = Q(pU, hF).get(l.annotationType ?? l.annotationEditorType)) == null ? void 0 : U.deserialize(l, this, Q(this, E))) || null;
  }
  createAndAddNewEditor(l, U, Z = {}) {
    const F = this.getNextId(), d = m(this, wl, uR).call(this, {
      parent: this,
      id: F,
      x: l.offsetX,
      y: l.offsetY,
      uiManager: Q(this, E),
      isCentered: U,
      ...Z
    });
    return d && this.add(d), d;
  }
  addNewEditor() {
    this.createAndAddNewEditor(m(this, wl, pR).call(this), !0);
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
    } = dU.platform;
    if (!(l.button !== 0 || l.ctrlKey && U) && l.target === this.div && Q(this, aF)) {
      if (a(this, aF, !1), !Q(this, I0)) {
        a(this, I0, !0);
        return;
      }
      if (Q(this, E).getMode() === f.STAMP) {
        Q(this, E).unselectAll();
        return;
      }
      this.createAndAddNewEditor(l, !1);
    }
  }
  pointerdown(l) {
    if (Q(this, E).getMode() === f.HIGHLIGHT && this.enableTextSelection(), Q(this, aF)) {
      a(this, aF, !1);
      return;
    }
    const {
      isMac: U
    } = dU.platform;
    if (l.button !== 0 || l.ctrlKey && U || l.target !== this.div)
      return;
    a(this, aF, !0);
    const Z = Q(this, E).getActive();
    a(this, I0, !Z || Z.isEmpty());
  }
  findNewParent(l, U, Z) {
    const F = Q(this, E).findParent(U, Z);
    return F === null || F === this ? !1 : (F.changeParent(l), !0);
  }
  destroy() {
    var l, U;
    ((l = Q(this, E).getActive()) == null ? void 0 : l.parent) === this && (Q(this, E).commitOrRemove(), Q(this, E).setActiveEditor(null)), Q(this, xZ) && (clearTimeout(Q(this, xZ)), a(this, xZ, null));
    for (const Z of Q(this, mU).values())
      (U = Q(this, Td)) == null || U.removePointerInTextLayer(Z.contentDiv), Z.setParent(null), Z.isAttachedToDOM = !1, Z.div.remove();
    this.div = null, Q(this, mU).clear(), Q(this, E).removeLayer(this);
  }
  render({
    viewport: l
  }) {
    this.viewport = l, Xd(this.div, l);
    for (const U of Q(this, E).getEditors(this.pageIndex))
      this.add(U), U.rebuild();
    this.updateMode();
  }
  update({
    viewport: l
  }) {
    Q(this, E).commitOrRemove(), m(this, wl, SW).call(this);
    const U = this.viewport.rotation, Z = l.rotation;
    if (this.viewport = l, Xd(this.div, {
      rotation: Z
    }), U !== Z)
      for (const F of Q(this, mU).values())
        F.rotate(Z);
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
Td = new WeakMap(), I0 = new WeakMap(), QZ = new WeakMap(), Sd = new WeakMap(), CZ = new WeakMap(), wZ = new WeakMap(), xZ = new WeakMap(), mU = new WeakMap(), aF = new WeakMap(), E0 = new WeakMap(), C0 = new WeakMap(), fl = new WeakMap(), E = new WeakMap(), hF = new WeakMap(), wl = new WeakSet(), es = function(l) {
  if (Q(this, E).unselectAll(), l.target === Q(this, fl).div) {
    const {
      isMac: U
    } = dU.platform;
    if (l.button !== 0 || l.ctrlKey && U)
      return;
    Q(this, E).showAllEditors("highlight", !0, !0), Q(this, fl).div.classList.add("free"), zW.startHighlighting(this, Q(this, E).direction === "ltr", l), Q(this, fl).div.addEventListener("pointerup", () => {
      Q(this, fl).div.classList.remove("free");
    }, {
      once: !0,
      signal: Q(this, E)._signal
    }), l.preventDefault();
  }
}, eR = function() {
  return Q(pU, hF).get(Q(this, E).getMode());
}, uR = function(l) {
  const U = Q(this, wl, eR);
  return U ? new U.prototype.constructor(l) : null;
}, pR = function() {
  const {
    x: l,
    y: U,
    width: Z,
    height: F
  } = this.div.getBoundingClientRect(), d = Math.max(0, l), V = Math.max(0, U), W = Math.min(window.innerWidth, l + Z), c = Math.min(window.innerHeight, U + F), R = (d + W) / 2 - l, N = (V + c) / 2 - U, [s, b] = this.viewport.rotation % 180 === 0 ? [R, N] : [N, R];
  return {
    offsetX: s,
    offsetY: b
  };
}, SW = function() {
  a(this, E0, !0);
  for (const l of Q(this, mU).values())
    l.isEmpty() && l.remove();
  a(this, E0, !1);
}, r(pU, "_initialized", !1), i(pU, hF, new Map([QR, hR, SR, zW].map((l) => [l._editorType, l])));
let BR = pU;
var VZ, xV, Bl, mF, jV, zR, ud, LR, us;
const zl = class zl {
  constructor({
    pageIndex: l
  }) {
    i(this, ud);
    i(this, VZ, null);
    i(this, xV, 0);
    i(this, Bl, /* @__PURE__ */ new Map());
    i(this, mF, /* @__PURE__ */ new Map());
    this.pageIndex = l;
  }
  setParent(l) {
    if (!Q(this, VZ)) {
      a(this, VZ, l);
      return;
    }
    if (Q(this, VZ) !== l) {
      if (Q(this, Bl).size > 0)
        for (const U of Q(this, Bl).values())
          U.remove(), l.append(U);
      a(this, VZ, l);
    }
  }
  static get _svgFactory() {
    return _(this, "_svgFactory", new xR());
  }
  highlight(l, U, Z, F = !1) {
    const d = WU(this, xV)._++, V = m(this, ud, LR).call(this, l.box);
    V.classList.add("highlight"), l.free && V.classList.add("free");
    const W = zl._svgFactory.createElement("defs");
    V.append(W);
    const c = zl._svgFactory.createElement("path");
    W.append(c);
    const R = `path_p${this.pageIndex}_${d}`;
    c.setAttribute("id", R), c.setAttribute("d", l.toSVGPath()), F && Q(this, mF).set(d, c);
    const N = m(this, ud, us).call(this, W, R), s = zl._svgFactory.createElement("use");
    return V.append(s), V.setAttribute("fill", U), V.setAttribute("fill-opacity", Z), s.setAttribute("href", `#${R}`), Q(this, Bl).set(d, V), {
      id: d,
      clipPathId: `url(#${N})`
    };
  }
  highlightOutline(l) {
    const U = WU(this, xV)._++, Z = m(this, ud, LR).call(this, l.box);
    Z.classList.add("highlightOutline");
    const F = zl._svgFactory.createElement("defs");
    Z.append(F);
    const d = zl._svgFactory.createElement("path");
    F.append(d);
    const V = `path_p${this.pageIndex}_${U}`;
    d.setAttribute("id", V), d.setAttribute("d", l.toSVGPath()), d.setAttribute("vector-effect", "non-scaling-stroke");
    let W;
    if (l.free) {
      Z.classList.add("free");
      const N = zl._svgFactory.createElement("mask");
      F.append(N), W = `mask_p${this.pageIndex}_${U}`, N.setAttribute("id", W), N.setAttribute("maskUnits", "objectBoundingBox");
      const s = zl._svgFactory.createElement("rect");
      N.append(s), s.setAttribute("width", "1"), s.setAttribute("height", "1"), s.setAttribute("fill", "white");
      const b = zl._svgFactory.createElement("use");
      N.append(b), b.setAttribute("href", `#${V}`), b.setAttribute("stroke", "none"), b.setAttribute("fill", "black"), b.setAttribute("fill-rule", "nonzero"), b.classList.add("mask");
    }
    const c = zl._svgFactory.createElement("use");
    Z.append(c), c.setAttribute("href", `#${V}`), W && c.setAttribute("mask", `url(#${W})`);
    const R = c.cloneNode();
    return Z.append(R), c.classList.add("mainOutline"), R.classList.add("secondaryOutline"), Q(this, Bl).set(U, Z), U;
  }
  finalizeLine(l, U) {
    const Z = Q(this, mF).get(l);
    Q(this, mF).delete(l), this.updateBox(l, U.box), Z.setAttribute("d", U.toSVGPath());
  }
  updateLine(l, U) {
    Q(this, Bl).get(l).firstChild.firstChild.setAttribute("d", U.toSVGPath());
  }
  removeFreeHighlight(l) {
    this.remove(l), Q(this, mF).delete(l);
  }
  updatePath(l, U) {
    Q(this, mF).get(l).setAttribute("d", U.toSVGPath());
  }
  updateBox(l, U) {
    var Z;
    m(Z = zl, jV, zR).call(Z, Q(this, Bl).get(l), U);
  }
  show(l, U) {
    Q(this, Bl).get(l).classList.toggle("hidden", !U);
  }
  rotate(l, U) {
    Q(this, Bl).get(l).setAttribute("data-main-rotation", U);
  }
  changeColor(l, U) {
    Q(this, Bl).get(l).setAttribute("fill", U);
  }
  changeOpacity(l, U) {
    Q(this, Bl).get(l).setAttribute("fill-opacity", U);
  }
  addClass(l, U) {
    Q(this, Bl).get(l).classList.add(U);
  }
  removeClass(l, U) {
    Q(this, Bl).get(l).classList.remove(U);
  }
  remove(l) {
    Q(this, VZ) !== null && (Q(this, Bl).get(l).remove(), Q(this, Bl).delete(l));
  }
  destroy() {
    a(this, VZ, null);
    for (const l of Q(this, Bl).values())
      l.remove();
    Q(this, Bl).clear();
  }
};
VZ = new WeakMap(), xV = new WeakMap(), Bl = new WeakMap(), mF = new WeakMap(), jV = new WeakSet(), zR = function(l, {
  x: U = 0,
  y: Z = 0,
  width: F = 1,
  height: d = 1
} = {}) {
  const {
    style: V
  } = l;
  V.top = `${100 * Z}%`, V.left = `${100 * U}%`, V.width = `${100 * F}%`, V.height = `${100 * d}%`;
}, ud = new WeakSet(), LR = function(l) {
  var Z;
  const U = zl._svgFactory.create(1, 1, !0);
  return Q(this, VZ).append(U), U.setAttribute("aria-hidden", !0), m(Z = zl, jV, zR).call(Z, U, l), U;
}, us = function(l, U) {
  const Z = zl._svgFactory.createElement("clipPath");
  l.append(Z);
  const F = `clip_${U}`;
  Z.setAttribute("id", F), Z.setAttribute("clipPathUnits", "objectBoundingBox");
  const d = zl._svgFactory.createElement("use");
  return Z.append(d), d.setAttribute("href", `#${U}`), d.classList.add("clip"), F;
}, i(zl, jV);
let yR = zl;
j.AbortException;
j.AnnotationEditorLayer;
j.AnnotationEditorParamsType;
j.AnnotationEditorType;
j.AnnotationEditorUIManager;
j.AnnotationLayer;
j.AnnotationMode;
j.CMapCompressionType;
j.ColorPicker;
j.DOMSVGFactory;
j.DrawLayer;
j.FeatureTest;
var Ta = j.GlobalWorkerOptions;
j.ImageKind;
j.InvalidPDFException;
j.MissingPDFException;
j.OPS;
j.Outliner;
j.PDFDataRangeTransport;
j.PDFDateString;
j.PDFWorker;
j.PasswordResponses;
j.PermissionFlag;
j.PixelsPerInch;
j.RenderingCancelledException;
var Sa = j.TextLayer;
j.UnexpectedResponseException;
j.Util;
j.VerbosityLevel;
j.XfaLayer;
j.build;
j.createValidAbsoluteUrl;
j.fetchData;
var Xa = j.getDocument;
j.getFilenameFromUrl;
j.getPdfFilenameFromUrl;
j.getXfaPageViewport;
j.isDataScheme;
j.isPdfFile;
j.noContextMenu;
j.normalizeUnicode;
j.renderTextLayer;
j.setLayerDimensions;
j.shadow;
j.updateTextLayer;
j.version;
Ta.workerSrc = Ya;
const Ba = async (t) => await Xa(t).promise;
function ea(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ps = { exports: {} }, ys = { exports: {} };
(function() {
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = {
    // Bit-wise rotation left
    rotl: function(U, Z) {
      return U << Z | U >>> 32 - Z;
    },
    // Bit-wise rotation right
    rotr: function(U, Z) {
      return U << 32 - Z | U >>> Z;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(U) {
      if (U.constructor == Number)
        return l.rotl(U, 8) & 16711935 | l.rotl(U, 24) & 4278255360;
      for (var Z = 0; Z < U.length; Z++)
        U[Z] = l.endian(U[Z]);
      return U;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(U) {
      for (var Z = []; U > 0; U--)
        Z.push(Math.floor(Math.random() * 256));
      return Z;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(U) {
      for (var Z = [], F = 0, d = 0; F < U.length; F++, d += 8)
        Z[d >>> 5] |= U[F] << 24 - d % 32;
      return Z;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(U) {
      for (var Z = [], F = 0; F < U.length * 32; F += 8)
        Z.push(U[F >>> 5] >>> 24 - F % 32 & 255);
      return Z;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(U) {
      for (var Z = [], F = 0; F < U.length; F++)
        Z.push((U[F] >>> 4).toString(16)), Z.push((U[F] & 15).toString(16));
      return Z.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(U) {
      for (var Z = [], F = 0; F < U.length; F += 2)
        Z.push(parseInt(U.substr(F, 2), 16));
      return Z;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(U) {
      for (var Z = [], F = 0; F < U.length; F += 3)
        for (var d = U[F] << 16 | U[F + 1] << 8 | U[F + 2], V = 0; V < 4; V++)
          F * 8 + V * 6 <= U.length * 8 ? Z.push(t.charAt(d >>> 6 * (3 - V) & 63)) : Z.push("=");
      return Z.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(U) {
      U = U.replace(/[^A-Z0-9+\/]/ig, "");
      for (var Z = [], F = 0, d = 0; F < U.length; d = ++F % 4)
        d != 0 && Z.push((t.indexOf(U.charAt(F - 1)) & Math.pow(2, -2 * d + 8) - 1) << d * 2 | t.indexOf(U.charAt(F)) >>> 6 - d * 2);
      return Z;
    }
  };
  ys.exports = l;
})();
var ua = ys.exports, kR = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(t) {
      return kR.bin.stringToBytes(unescape(encodeURIComponent(t)));
    },
    // Convert a byte array to a string
    bytesToString: function(t) {
      return decodeURIComponent(escape(kR.bin.bytesToString(t)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(t) {
      for (var l = [], U = 0; U < t.length; U++)
        l.push(t.charCodeAt(U) & 255);
      return l;
    },
    // Convert a byte array to a string
    bytesToString: function(t) {
      for (var l = [], U = 0; U < t.length; U++)
        l.push(String.fromCharCode(t[U]));
      return l.join("");
    }
  }
}, Tt = kR;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var pa = function(t) {
  return t != null && (zs(t) || ya(t) || !!t._isBuffer);
};
function zs(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function ya(t) {
  return typeof t.readFloatLE == "function" && typeof t.slice == "function" && zs(t.slice(0, 0));
}
(function() {
  var t = ua, l = Tt.utf8, U = pa, Z = Tt.bin, F = function(d, V) {
    d.constructor == String ? V && V.encoding === "binary" ? d = Z.stringToBytes(d) : d = l.stringToBytes(d) : U(d) ? d = Array.prototype.slice.call(d, 0) : !Array.isArray(d) && d.constructor !== Uint8Array && (d = d.toString());
    for (var W = t.bytesToWords(d), c = d.length * 8, R = 1732584193, N = -271733879, s = -1732584194, b = 271733878, n = 0; n < W.length; n++)
      W[n] = (W[n] << 8 | W[n] >>> 24) & 16711935 | (W[n] << 24 | W[n] >>> 8) & 4278255360;
    W[c >>> 5] |= 128 << c % 32, W[(c + 64 >>> 9 << 4) + 14] = c;
    for (var h = F._ff, M = F._gg, G = F._hh, J = F._ii, n = 0; n < W.length; n += 16) {
      var T = R, S = N, Y = s, B = b;
      R = h(R, N, s, b, W[n + 0], 7, -680876936), b = h(b, R, N, s, W[n + 1], 12, -389564586), s = h(s, b, R, N, W[n + 2], 17, 606105819), N = h(N, s, b, R, W[n + 3], 22, -1044525330), R = h(R, N, s, b, W[n + 4], 7, -176418897), b = h(b, R, N, s, W[n + 5], 12, 1200080426), s = h(s, b, R, N, W[n + 6], 17, -1473231341), N = h(N, s, b, R, W[n + 7], 22, -45705983), R = h(R, N, s, b, W[n + 8], 7, 1770035416), b = h(b, R, N, s, W[n + 9], 12, -1958414417), s = h(s, b, R, N, W[n + 10], 17, -42063), N = h(N, s, b, R, W[n + 11], 22, -1990404162), R = h(R, N, s, b, W[n + 12], 7, 1804603682), b = h(b, R, N, s, W[n + 13], 12, -40341101), s = h(s, b, R, N, W[n + 14], 17, -1502002290), N = h(N, s, b, R, W[n + 15], 22, 1236535329), R = M(R, N, s, b, W[n + 1], 5, -165796510), b = M(b, R, N, s, W[n + 6], 9, -1069501632), s = M(s, b, R, N, W[n + 11], 14, 643717713), N = M(N, s, b, R, W[n + 0], 20, -373897302), R = M(R, N, s, b, W[n + 5], 5, -701558691), b = M(b, R, N, s, W[n + 10], 9, 38016083), s = M(s, b, R, N, W[n + 15], 14, -660478335), N = M(N, s, b, R, W[n + 4], 20, -405537848), R = M(R, N, s, b, W[n + 9], 5, 568446438), b = M(b, R, N, s, W[n + 14], 9, -1019803690), s = M(s, b, R, N, W[n + 3], 14, -187363961), N = M(N, s, b, R, W[n + 8], 20, 1163531501), R = M(R, N, s, b, W[n + 13], 5, -1444681467), b = M(b, R, N, s, W[n + 2], 9, -51403784), s = M(s, b, R, N, W[n + 7], 14, 1735328473), N = M(N, s, b, R, W[n + 12], 20, -1926607734), R = G(R, N, s, b, W[n + 5], 4, -378558), b = G(b, R, N, s, W[n + 8], 11, -2022574463), s = G(s, b, R, N, W[n + 11], 16, 1839030562), N = G(N, s, b, R, W[n + 14], 23, -35309556), R = G(R, N, s, b, W[n + 1], 4, -1530992060), b = G(b, R, N, s, W[n + 4], 11, 1272893353), s = G(s, b, R, N, W[n + 7], 16, -155497632), N = G(N, s, b, R, W[n + 10], 23, -1094730640), R = G(R, N, s, b, W[n + 13], 4, 681279174), b = G(b, R, N, s, W[n + 0], 11, -358537222), s = G(s, b, R, N, W[n + 3], 16, -722521979), N = G(N, s, b, R, W[n + 6], 23, 76029189), R = G(R, N, s, b, W[n + 9], 4, -640364487), b = G(b, R, N, s, W[n + 12], 11, -421815835), s = G(s, b, R, N, W[n + 15], 16, 530742520), N = G(N, s, b, R, W[n + 2], 23, -995338651), R = J(R, N, s, b, W[n + 0], 6, -198630844), b = J(b, R, N, s, W[n + 7], 10, 1126891415), s = J(s, b, R, N, W[n + 14], 15, -1416354905), N = J(N, s, b, R, W[n + 5], 21, -57434055), R = J(R, N, s, b, W[n + 12], 6, 1700485571), b = J(b, R, N, s, W[n + 3], 10, -1894986606), s = J(s, b, R, N, W[n + 10], 15, -1051523), N = J(N, s, b, R, W[n + 1], 21, -2054922799), R = J(R, N, s, b, W[n + 8], 6, 1873313359), b = J(b, R, N, s, W[n + 15], 10, -30611744), s = J(s, b, R, N, W[n + 6], 15, -1560198380), N = J(N, s, b, R, W[n + 13], 21, 1309151649), R = J(R, N, s, b, W[n + 4], 6, -145523070), b = J(b, R, N, s, W[n + 11], 10, -1120210379), s = J(s, b, R, N, W[n + 2], 15, 718787259), N = J(N, s, b, R, W[n + 9], 21, -343485551), R = R + T >>> 0, N = N + S >>> 0, s = s + Y >>> 0, b = b + B >>> 0;
    }
    return t.endian([R, N, s, b]);
  };
  F._ff = function(d, V, W, c, R, N, s) {
    var b = d + (V & W | ~V & c) + (R >>> 0) + s;
    return (b << N | b >>> 32 - N) + V;
  }, F._gg = function(d, V, W, c, R, N, s) {
    var b = d + (V & c | W & ~c) + (R >>> 0) + s;
    return (b << N | b >>> 32 - N) + V;
  }, F._hh = function(d, V, W, c, R, N, s) {
    var b = d + (V ^ W ^ c) + (R >>> 0) + s;
    return (b << N | b >>> 32 - N) + V;
  }, F._ii = function(d, V, W, c, R, N, s) {
    var b = d + (W ^ (V | ~c)) + (R >>> 0) + s;
    return (b << N | b >>> 32 - N) + V;
  }, F._blocksize = 16, F._digestsize = 16, ps.exports = function(d, V) {
    if (d == null)
      throw new Error("Illegal argument " + d);
    var W = t.wordsToBytes(F(d, V));
    return V && V.asBytes ? W : V && V.asString ? Z.bytesToString(W) : t.bytesToHex(W);
  };
})();
var za = ps.exports;
const La = /* @__PURE__ */ ea(za), Wc = new Worker(new URL(
  /* @vite-ignore */
  "/assets/worker-5w0YdYLI.js",
  import.meta.url
)), Cl = {};
async function ka(t) {
  const l = this, { uid: U } = l, Z = t - 1;
  if (!Cl[U].processCapabilityArray[Z]) {
    const F = Promise.withResolvers();
    Cl[U].processCapabilityArray[Z] = F, Wc.postMessage({
      eventName: "getPage",
      props: { uid: U, pageIndex: Z }
    });
  }
  return Cl[U].processCapabilityArray[Z].promise;
}
async function Da() {
  const t = Promise.withResolvers(), l = this, { uid: U } = l;
  if (Cl[U])
    return Wc.postMessage({ eventName: "destroy", props: { uid: U } }), Cl[U].endCapability = t, Cl[U].endCapability.promise;
}
function oa({ scale: t }) {
  const l = this, { uid: U, pageIndex: Z } = l, d = Cl[U].pages[Z];
  if (!d)
    throw new Error(`${l.pageIndex + 1}页没有先执行getPage方法`);
  const { naturalWidth: V, naturalHeight: W } = d, c = [0, 0, V, W];
  return l.view = c, {
    width: Math.round(c[2] * t),
    height: Math.round(c[3] * t),
    scale: t,
    viewBox: c
  };
}
function St({ canvasContext: t, viewport: l, page: U }) {
  const { naturalWidth: Z, naturalHeight: F, bitmap: d } = U, { width: V, height: W } = l;
  t.drawImage(
    d,
    0,
    0,
    Z,
    F,
    0,
    0,
    V,
    W
  );
}
function Ia({ canvasContext: t, viewport: l }) {
  const U = this, { pageIndex: Z, uid: F } = U, d = Cl[F], { pages: V, offscreenArray: W, offscreenWorkerArray: c } = d, R = V[Z];
  if (!W[Z]) {
    const N = new OffscreenCanvas(
      l.width,
      l.height
    );
    W[Z] = N;
  }
  return {
    promise: new Promise((N, s) => {
      if (R.bitmap) {
        requestAnimationFrame(() => {
          St({ canvasContext: t, viewport: l, page: R }), requestAnimationFrame(() => N(null));
        });
        return;
      }
      if (!c[Z]) {
        const b = new Worker(
          new URL(
            /* @vite-ignore */
            "/assets/offscreenCanvas.worker-CVXwY2Ju.js",
            import.meta.url
          )
        );
        c[Z] = b, b.onmessage = ({ data: n }) => {
          console.log("offscreenWorker.onmessage", n), n ? (n instanceof ImageBitmap && (R.bitmap = n, delete R.buffer, requestAnimationFrame(
            () => St({ canvasContext: t, viewport: l, page: R })
          )), N(null)) : s(null), b.terminate(), delete c[Z];
        }, b.postMessage(
          { canvas: W[Z], page: R, viewport: l },
          [W[Z]]
        );
      }
    })
  };
}
const Ea = {
  decode: ({ uid: t, numPages: l }) => ({ uid: t, numPages: l, getPage: ka, destroy: Da }),
  getPage: ({
    uid: t,
    pageIndex: l,
    buffer: U,
    bitmap: Z,
    naturalWidth: F,
    naturalHeight: d
  }) => (Cl[t].pages[l] || (Cl[t].pages[l] = {
    buffer: U,
    bitmap: Z,
    naturalWidth: F,
    naturalHeight: d
  }), { uid: t, pageIndex: l, render: Ia, getViewport: oa }),
  destroy: ({ uid: t }) => {
    delete Cl[t];
  }
}, Ca = {
  decode: (t) => {
    var l;
    return (l = Cl[t]) == null ? void 0 : l.startCapability;
  },
  getPage: (t, l) => {
    var U;
    return (U = Cl[t]) == null ? void 0 : U.processCapabilityArray[l];
  },
  destroy: (t) => {
    var l;
    return (l = Cl[t]) == null ? void 0 : l.endCapability;
  }
};
Wc.onmessage = (t) => {
  const {
    _eventName: l,
    _errorMessage: U,
    _props: Z
  } = t.data;
  console.log(l, U, Z);
  const { uid: F, pageIndex: d } = Z, V = Ca[l](F, d);
  U && (V == null || V.reject(U)), V == null || V.resolve(Ea[l](Z));
};
const wa = async (t, l) => {
  const U = new Int32Array(l, 0, l.byteLength / 4), Z = La(U);
  if (!Cl[Z]) {
    const F = Promise.withResolvers(), d = [], V = [], W = [];
    Cl[Z] = {
      startCapability: F,
      processCapabilityArray: d,
      offscreenArray: V,
      pages: [],
      offscreenWorkerArray: W
    }, Wc.postMessage({
      eventName: "decode",
      props: { fileType: t, uid: Z, arrayBuffer: l }
    });
  }
  return Cl[Z].startCapability.promise;
}, xa = (t, l) => {
  switch (t) {
    case "pdf":
      return Ba(l);
    default:
      return wa(t, l);
  }
}, ja = [
  "PAGE:SCROLL_TO",
  "PAGE:RENDER",
  "PAGE:CREATE_MAGNIFY_AREA",
  "PAGE:REMOVE_MAGNIFY_AREA"
], Od = new Gb(ja);
function Ls(t, l) {
  const U = el(), Z = Bt(!1), F = new IntersectionObserver(
    (d) => {
      t == null || t(d, F), Z.value = !!d.find((V) => V.isIntersecting);
    },
    l
  );
  return IR(() => {
    F.disconnect();
  }), wd(
    U,
    (d, V) => {
      V && (F.unobserve(V), Z.value = !1), d && F.observe(d);
    },
    {
      flush: "post"
    }
  ), { intersectionRef: U, isIntersecting: Z };
}
const DR = ["rendered", "error"], Oa = ["instance", "devicePixelRatio", "pageNum", "containerSize", "transform", ...DR.map((t) => `on${t.replace(/^\S/, (l) => l.toUpperCase())}`)], ra = /* @__PURE__ */ ER({
  name: "DViewerPage",
  props: Oa,
  emits: [...DR],
  setup(t, {
    slots: l,
    emit: U,
    attrs: Z,
    expose: F
  }) {
    const d = DR.reduce((z, C) => {
      const K = `on${C.replace(/^\S/, (Ul) => Ul.toUpperCase())}`;
      return z[K] = (...Ul) => U(C, ...Ul), z;
    }, {}), V = BU(() => {
      const {
        ...z
      } = et(t), C = Object.entries(z).reduce((K, [Ul, k]) => {
        const x = _V(k);
        return x !== void 0 && (K[Ul] = x), K;
      }, {});
      return {
        ...d,
        ...Lt({
          ...Z,
          ...C
        })
      };
    }), W = el(0), c = el(!1), R = el(null), N = el(null), s = el(null), b = el(null);
    let n = null, h = null;
    const M = el(null), G = el(0), J = BU(() => {
      const z = M.value ? [
        `round(var(--scale-factor) * ${M.value[2]}px, 1px)`,
        `round(var(--scale-factor) * ${M.value[3]}px, 1px)`
        // Math.round(options.value.transform.scale * view.value[2]),
        // Math.round(options.value.transform.scale * view.value[3]),
      ] : V.value.containerSize ? [
        `round(var(--scale-factor) * ${V.value.containerSize.width}px, 1px)`,
        `round(var(--scale-factor) * ${V.value.containerSize.height}px, 1px)`
        // Math.round(
        //   options.value.transform.scale * options.value.contentRect.width
        // ),
        // Math.round(
        //   options.value.transform.scale * options.value.contentRect.height
        // ),
      ] : [], C = {
        transform: `rotate(${V.value.transform.rotate}deg) rotateX(${V.value.transform.yFlip ? 0.5 : 0}turn) rotateY(${V.value.transform.xFlip ? 0.5 : 0}turn) `
      };
      return z.length > 0 ? {
        ...C,
        width: z[0],
        height: z[1]
      } : C;
    }), T = Ft((z) => {
      for (const C of z)
        C.isIntersecting && B();
    }, 500), {
      intersectionRef: S,
      isIntersecting: Y
    } = Ls(T), B = Ft(async () => {
      const z = _V(N), C = _V(s), {
        pageNum: K,
        devicePixelRatio: Ul,
        transform: {
          scale: k
        },
        instance: x
      } = V.value;
      if (!(!z || !C || !V.value.instance || G.value === k || !Y.value))
        try {
          n || (W.value = 1, n = await x.getPage(K));
          const xl = n.getViewport({
            scale: k * Ul
          });
          M.value = n.view, z.width = Math.floor(xl.width), z.height = Math.floor(xl.height), z.style.width = Math.floor(xl.width) + "px", z.style.height = Math.floor(xl.height) + "px";
          const TF = {
            canvasContext: z.getContext("2d"),
            viewport: xl
          };
          await n.render(TF).promise, G.value = k, W.value = 2;
          const SF = {
            pageNum: V.value.pageNum
          };
          if (V.value.onRendered(SF), n.getTextContent && !h) {
            const Jl = await n.getTextContent();
            h = new Sa({
              textContentSource: Jl,
              container: C,
              viewport: xl
            }), h.render();
          }
        } catch (xl) {
          console.log(xl.message), W.value = 2, c.value = !0, V.value.onError({
            eventName: "render",
            message: "页面渲染失败,原因：" + xl.message,
            pageNum: V.value.pageNum
          });
        }
    }, 500), X = () => {
      const z = N.value;
      z && (z.style.width = "100%", z.style.height = "100%");
    }, e = (z) => {
      const C = b.value;
      if (!z || !C) return;
      const K = new Promise((Ul, k) => {
        const x = setInterval(() => {
          W.value === 2 && (clearInterval(x), Ul(null));
        }, 200);
      });
      requestAnimationFrame(async () => {
        await K, C.appendChild(z);
      });
    }, L = ([z, C] = [0, 0], [K, Ul] = [0, 0]) => {
      const k = document.createElement("div");
      return k.style.position = "absolute", k.style.left = `round(var(--scale-factor) * ${z}px, 1px)`, k.style.top = `round(var(--scale-factor) * ${C}px, 1px)`, k.style.width = `round(var(--scale-factor) * ${K}px, 1px)`, k.style.height = `round(var(--scale-factor) * ${Ul}px, 1px)`, k.style.border = "1px dashed red", k.style.backgroundColor = "transparent", k;
    };
    let I = null;
    const g = (z) => {
      const C = R.value;
      +z != +t.pageNum || !C || C.scrollIntoView(!0);
    }, w = (z = [0, 0], C = [10, 10], K = 0) => {
      +K != +t.pageNum || I || (I = L(z, C), e(I));
    }, Wl = () => {
      I && (I.remove(), I = null);
    };
    return ut(() => {
      S.value = R.value, wd(() => t.transform.scale, (z) => {
        G.value !== z && (X(), Y.value && B());
      }, {
        immediate: !0
      }), Od.on("PAGE:SCROLL_TO", g), Od.on("PAGE:CREATE_MAGNIFY_AREA", w), Od.on("PAGE:REMOVE_MAGNIFY_AREA", Wl);
    }), () => {
      var z, C;
      return Nl("div", {
        class: "d-page",
        ref: R
      }, [W.value < 2 ? (z = l.placeholder) == null ? void 0 : z.call(l) : c.value && ((C = l.error) == null ? void 0 : C.call(l)), Nl("div", {
        class: "page",
        style: J.value
      }, [Nl("div", {
        class: "canvasWrapper"
      }, [Nl("canvas", {
        width: 0,
        height: 0,
        ref: N
      }, null)]), Nl("div", {
        class: "textLayer",
        ref: s
      }, null), Nl("div", {
        class: "annotationLayer",
        ref: b
      }, null)])]);
    };
  }
}), ga = ["modelValue", "color", "indeterminate", "width"], Ka = /* @__PURE__ */ ER({
  name: "DProgressCircular",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: ga,
  setup(t, {
    slots: l
  }) {
    const Z = 2 * Math.PI * 20, F = el(), {
      intersectionRef: d,
      isIntersecting: V
    } = Ls(), {
      resizeRef: W,
      contentRect: c
    } = pt(), R = BU(() => Math.max(0, Math.min(100, t.modelValue || 0))), N = BU(() => Number(t.width || 4)), s = BU(() => c.value ? c.value.width : Math.max(N.value, 32)), b = BU(() => 20 / (1 - N.value / s.value) * 2), n = BU(() => N.value / s.value * b.value), h = (G, J = "px") => {
      if (!(G == null || G === ""))
        return isNaN(+G) ? String(G) : isFinite(+G) ? `${Number(G)}${J}` : void 0;
    }, M = BU(() => h((100 - R.value) / 100 * Z));
    return ws(() => {
      d.value = F.value, W.value = F.value;
    }), () => Nl("div", {
      ref: F,
      class: ["d-progress-circular", {
        "d-progress-circular--indeterminate": !!t.indeterminate,
        "d-progress-circular--visible": V.value
      }],
      style: {
        color: t.color || "black",
        width: s.value + "px",
        height: s.value + "px"
      },
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": t.indeterminate ? void 0 : R.value
    }, [Nl("svg", {
      style: {
        transform: "rotate(-90deg)"
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${b.value} ${b.value}`
    }, [Nl("circle", {
      class: ["d-progress-circular__underlay"],
      fill: "transparent",
      cx: "50%",
      cy: "50%",
      r: 20,
      "stroke-width": n.value,
      "stroke-dasharray": Z,
      "stroke-dashoffset": 0
    }, null), Nl("circle", {
      class: "d-progress-circular__overlay",
      fill: "transparent",
      cx: "50%",
      cy: "50%",
      r: 20,
      "stroke-width": n.value,
      "stroke-dasharray": Z,
      "stroke-dashoffset": M.value
    }, null)]), l.default && Nl("div", {
      class: "d-progress-circular__content"
    }, [l.default({
      value: R.value
    })])]);
  }
}), Ha = {
  img: ["image/jpeg", "image/png"],
  tiff: ["image/tiff"],
  bmp: ["image/bmp"],
  pdf: ["application/pdf"]
}, va = (t) => {
  const l = Object.entries(Ha);
  for (let U = 0; U < l.length; U++) {
    const [Z, F] = l[U];
    if (F.includes(t)) return Z;
  }
}, Xt = (t) => (t.scale || (t.scale = 1), t.rotate || (t.rotate = 0), t.xFlip || (t.xFlip = !1), t.yFlip || (t.yFlip = !1), t.offsetX || (t.offsetX = 0), t.offsetY || (t.offsetY = 0), t), oR = ["rendered", "error"], Pa = ["src", "transform", ...oR.map((t) => `on${t.replace(/^\S/, (l) => l.toUpperCase())}`)], qa = /* @__PURE__ */ ER({
  name: "DViewer",
  props: Pa,
  emits: [...oR],
  setup(t, {
    slots: l,
    emit: U,
    expose: Z,
    attrs: F
  }) {
    const d = oR.reduce((u, q) => {
      const Gl = `on${q.replace(/^\S/, (jl) => jl.toUpperCase())}`;
      return u[Gl] = (...jl) => U(q, ...jl), u;
    }, {}), V = BU(() => {
      const {
        ...u
      } = et(t), q = Object.entries(u).reduce((Gl, [jl, sl]) => {
        const MU = _V(sl);
        return MU !== void 0 && (Gl[jl] = MU), Gl;
      }, {});
      return {
        ...d,
        ...Lt({
          ...F,
          ...q
        })
      };
    }), W = el(Xt({
      ...t.transform
    })), c = BU(() => {
      var u;
      return Nl("div", {
        class: "absolute a-100 z-index-5"
      }, [Nl("div", {
        class: "w-100 flex justify-content align-center "
      }, [((u = l.placeholder) == null ? void 0 : u.call(l)) || Nl(Ka, {
        indeterminate: !0
      }, null)])]);
    }), R = BU(() => {
      var u;
      return Nl("div", {
        class: "absolute a-100 z-index-5"
      }, [Nl("div", {
        class: "w-100 flex justify-content align-center error "
      }, [((u = l.error) == null ? void 0 : u.call(l)) || Nl(os, null, [Nl("svg", {
        style: "width:32px;",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, [Nl("path", {
        style: "fill:currentColor",
        d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      }, null)]), Nl("em", {
        style: "color:currentColor"
      }, [Is("failed to load")])])])]);
    });
    let N = null;
    const s = el(0), b = el(!1), n = el(0), h = el(!1), M = window.devicePixelRatio || 1, G = el(0), J = el(!1), T = BU(() => Array.from({
      length: G.value ? J.value ? G.value : 1 : 0
    }, (u, q) => ({
      key: q,
      pageNum: q + 1
    }))), S = (u) => {
    }, {
      resizeRef: Y,
      contentRect: B
    } = pt(S), X = el({
      width: 150,
      height: 300
    }), e = () => {
      s.value = 0, b.value = !1, n.value = 0, h.value = !1, N = null, G.value = 0, J.value = !1;
    }, L = async (u) => {
      e(), s.value = 1;
      const q = await Jb(u);
      if (s.value = 2, !q)
        return b.value = !0, d.onError({
          eventName: "load",
          message: "文件加载失败",
          pageNum: 0
        });
      let {
        arrayBuffer: Gl,
        mimeType: jl
      } = q;
      const sl = va(jl);
      if (sl)
        n.value = 1, N = await xa(sl, Gl);
      else
        return b.value = !0, d.onError({
          eventName: "load",
          message: "文件格式不支持",
          pageNum: 0
        });
      if (console.log(N), n.value = 2, !(N != null && N.numPages))
        return h.value = !0, d.onError({
          eventName: "load",
          message: "文件处理失败",
          pageNum: 0
        });
      G.value = N.numPages;
    }, I = (u) => {
      u.pageNum === 1 && (J.value = !0), V.value.onRendered(u);
    }, g = (u) => {
      u.pageNum === 1 && (J.value = !0), V.value.onError(u);
    }, w = (u = 0.3) => {
      const q = (W.value.scale * 10 + u * 10) / 10;
      k(q);
    }, Wl = (u = 0.3) => {
      const q = (W.value.scale * 10 - u * 10) / 10;
      k(q);
    }, z = (u = 90) => {
      x(W.value.rotate - u);
    }, C = (u = 90) => {
      x(W.value.rotate + u);
    }, K = (u) => {
      let q = !W.value.xFlip;
      u instanceof Boolean && (q = u), W.value.xFlip = q;
    }, Ul = (u) => {
      let q = !W.value.yFlip;
      u instanceof Boolean && (q = u), W.value.yFlip = q;
    }, k = (u, [q, Gl] = [0, 0]) => {
      u < 0.3 || u > 10 || (W.value.scale = u, W.value.offsetX = q, W.value.offsetY = Gl);
    }, x = (u) => {
      u %= 360, u < 0 && (u += 360), W.value.rotate !== u && (W.value.rotate = u);
    }, xl = (u) => {
      Od.emit("PAGE:SCROLL_TO", u);
    }, Jl = xs({
      zoomIn: w,
      zoomOut: Wl,
      rotateLeft: z,
      rotateRight: C,
      flipX: K,
      flipY: Ul,
      createMagnifyArea: (u = [0, 0], q = [10, 10], Gl = 1) => {
        xl(Gl), requestAnimationFrame(() => {
          Od.emit("PAGE:CREATE_MAGNIFY_AREA", u, q, Gl);
        });
      },
      removeMagnifyArea: () => {
        Od.emit("PAGE:REMOVE_MAGNIFY_AREA");
      }
    });
    return Z(Jl), ut(() => {
      wd(() => t.src, (u) => {
        L(u);
      }, {
        immediate: !0
      }), wd(() => t.transform, (u) => {
        W.value = Xt({
          ...u
        });
      }, {
        immediate: !0
      }), wd(B, (u) => {
        u && (X.value = {
          width: u.width,
          height: u.height
        });
      }, {
        immediate: !0
      });
    }), IR(async () => {
      var u, q;
      await ((q = (u = N == null ? void 0 : N.destroy) == null ? void 0 : u.call(N)) == null ? void 0 : q.promise);
    }), () => Nl("div", {
      class: "d-viewer outerContainer"
    }, [Nl("div", {
      class: "mainContainer",
      ref: Y
    }, [Nl("div", {
      class: "viewerContainer"
    }, [s.value < 2 && c.value, (b.value || h.value) && R.value, Nl("div", {
      class: "pdfViewer",
      style: {
        "--scale-factor": `${W.value.scale}`
      }
    }, [T.value.map((u) => Nl(ra, Es(u, {
      instance: N,
      devicePixelRatio: M,
      onRendered: I,
      onError: g,
      containerSize: X.value,
      transform: W.value
    }), {
      placeholder: () => c.value,
      error: () => R.value
    }))])])])]);
  }
});
export {
  qa as DViewer,
  oR as viewerEmits,
  Pa as viewerProps
};