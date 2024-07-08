var ja = Object.defineProperty;
var kN = (W) => {
  throw TypeError(W);
};
var Oa = (W, l, U) => l in W ? ja(W, l, { enumerable: !0, configurable: !0, writable: !0, value: U }) : W[l] = U;
var f = (W, l, U) => Oa(W, typeof l != "symbol" ? l + "" : l, U), Jc = (W, l, U) => l.has(W) || kN("Cannot " + U);
var t = (W, l, U) => (Jc(W, l, "read from private field"), U ? U.call(W) : l.get(W)), m = (W, l, U) => l.has(W) ? kN("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(W) : l.set(W, U), h = (W, l, U, d) => (Jc(W, l, "write to private field"), d ? d.call(W, U) : l.set(W, U), U), i = (W, l, U) => (Jc(W, l, "access private method"), U);
var XU = (W, l, U, d) => ({
  set _(Z) {
    h(W, l, Z, U);
  },
  get _() {
    return t(W, l, d);
  }
});
import { createVNode as cl, Fragment as Tn, createTextVNode as ra, mergeProps as ga } from "vue";
import { shallowRef as Sn, ref as Sl, onBeforeUnmount as NN, watch as Z0, readonly as Ka, defineComponent as YQ, computed as ql, toRefs as tc, unref as rl, onMounted as nN, watchEffect as Ha, reactive as sN, h as va, getCurrentInstance as aN, onUnmounted as Pa, nextTick as fa, isRef as Gc } from "vue-demi";
function Aa(W) {
  if (W && "$el" in W) {
    const l = W.$el;
    return (l == null ? void 0 : l.nodeType) === Node.TEXT_NODE ? l.nextElementSibling : l;
  }
  return W;
}
function _a() {
  const W = Sn(), l = (U) => {
    W.value = U;
  };
  return Object.defineProperty(l, "value", {
    enumerable: !0,
    get: () => W.value,
    set: (U) => W.value = U
  }), Object.defineProperty(l, "el", {
    enumerable: !0,
    get: () => Aa(W.value)
  }), l;
}
function bN(W, l = "content") {
  const U = _a(), d = Sl(), Z = new ResizeObserver((F) => {
    W == null || W(F, Z), F.length && (l === "content" ? d.value = F[0].contentRect : d.value = F[0].target.getBoundingClientRect());
  });
  return NN(() => {
    Z.disconnect();
  }), Z0(
    () => U.el,
    (F, Q) => {
      Q && (Z.unobserve(Q), d.value = void 0), F && Z.observe(F);
    },
    {
      flush: "post"
    }
  ), {
    resizeRef: U,
    contentRect: Ka(d)
  };
}
var qa = typeof global == "object" && global && global.Object === Object && global, $a = typeof self == "object" && self && self.Object === Object && self, Xn = qa || $a || Function("return this")(), uW = Xn.Symbol, Yn = Object.prototype, lb = Yn.hasOwnProperty, Ub = Yn.toString, BQ = uW ? uW.toStringTag : void 0;
function db(W) {
  var l = lb.call(W, BQ), U = W[BQ];
  try {
    W[BQ] = void 0;
    var d = !0;
  } catch {
  }
  var Z = Ub.call(W);
  return d && (l ? W[BQ] = U : delete W[BQ]), Z;
}
var Zb = Object.prototype, Fb = Zb.toString;
function Qb(W) {
  return Fb.call(W);
}
var tb = "[object Null]", Vb = "[object Undefined]", DN = uW ? uW.toStringTag : void 0;
function Wb(W) {
  return W == null ? W === void 0 ? Vb : tb : DN && DN in Object(W) ? db(W) : Qb(W);
}
function cb(W) {
  return W != null && typeof W == "object";
}
var Rb = "[object Symbol]";
function Nb(W) {
  return typeof W == "symbol" || cb(W) && Wb(W) == Rb;
}
var nb = /\s/;
function sb(W) {
  for (var l = W.length; l-- && nb.test(W.charAt(l)); )
    ;
  return l;
}
var ab = /^\s+/;
function bb(W) {
  return W && W.slice(0, sb(W) + 1).replace(ab, "");
}
function wc(W) {
  var l = typeof W;
  return W != null && (l == "object" || l == "function");
}
var IN = NaN, hb = /^[-+]0x[0-9a-f]+$/i, ib = /^0b[01]+$/i, mb = /^0o[0-7]+$/i, Mb = parseInt;
function EN(W) {
  if (typeof W == "number")
    return W;
  if (Nb(W))
    return IN;
  if (wc(W)) {
    var l = typeof W.valueOf == "function" ? W.valueOf() : W;
    W = wc(l) ? l + "" : l;
  }
  if (typeof W != "string")
    return W === 0 ? W : +W;
  W = bb(W);
  var U = ib.test(W);
  return U || mb.test(W) ? Mb(W.slice(2), U ? 2 : 8) : hb.test(W) ? IN : +W;
}
var Tc = function() {
  return Xn.Date.now();
}, Jb = "Expected a function", Gb = Math.max, Tb = Math.min;
function CN(W, l, U) {
  var d, Z, F, Q, V, c, R = 0, N = !1, n = !1, s = !0;
  if (typeof W != "function")
    throw new TypeError(Jb);
  l = EN(l) || 0, wc(U) && (N = !!U.leading, n = "maxWait" in U, F = n ? Gb(EN(U.maxWait) || 0, l) : F, s = "trailing" in U ? !!U.trailing : s);
  function a(X) {
    var e = d, o = Z;
    return d = Z = void 0, R = X, Q = W.apply(o, e), Q;
  }
  function b(X) {
    return R = X, V = setTimeout(J, l), N ? a(X) : Q;
  }
  function M(X) {
    var e = X - c, o = X - R, y = l - e;
    return n ? Tb(y, F - o) : y;
  }
  function G(X) {
    var e = X - c, o = X - R;
    return c === void 0 || e >= l || e < 0 || n && o >= F;
  }
  function J() {
    var X = Tc();
    if (G(X))
      return T(X);
    V = setTimeout(J, M(X));
  }
  function T(X) {
    return V = void 0, s && d ? a(X) : (d = Z = void 0, Q);
  }
  function S() {
    V !== void 0 && clearTimeout(V), R = 0, d = c = Z = V = void 0;
  }
  function B() {
    return V === void 0 ? Q : T(Tc());
  }
  function Y() {
    var X = Tc(), e = G(X);
    if (d = arguments, Z = this, c = X, e) {
      if (V === void 0)
        return b(c);
      if (n)
        return clearTimeout(V), V = setTimeout(J, l), a(c);
    }
    return V === void 0 && (V = setTimeout(J, l)), Q;
  }
  return Y.cancel = S, Y.flush = B, Y;
}
function Sb(W) {
  return W.replace(/-(\w)/g, (l, U) => U ? U.toUpperCase() : "");
}
function Vc(W) {
  return Object.keys(W).reduce(
    (l, U) => (typeof W[U] < "u" && (l[Sb(U)] = W[U]), l),
    {}
  );
}
function Xb(W, l) {
  const U = /(\d+)(px|em|%)/, d = W.match(U);
  if (!d)
    throw new Error("子元素宽度格式无效");
  let Z = parseFloat(d[1]), F = d[2], Q;
  switch (F) {
    case "px":
      Q = Z;
      break;
    case "em":
      Q = Z * 16;
      break;
    case "%":
      Q = Z / 100 * l;
      break;
    default:
      throw new Error("不支持的单位类型");
  }
  return Math.floor(l / Q);
}
function Yb() {
  const W = localStorage.getItem("auth");
  return W ? W.split(",").filter(Boolean) : [];
}
const Bb = async (W) => {
  try {
    const l = await fetch(W);
    if (!l.ok)
      throw new Error(`Failed to fetch file: ${l.statusText}`);
    const U = l.headers.get("Content-Type");
    return { arrayBuffer: await l.arrayBuffer(), mimeType: U };
  } catch (l) {
    return console.error("Error Processing URL:", l), null;
  }
}, eb = (W) => {
  const l = atob(W), U = new Uint8Array(l.length);
  for (let d = 0; d < l.length; d++)
    U[d] = l.charCodeAt(d);
  return U.buffer;
}, ub = (W) => {
  try {
    const l = W.match(/^data:(.+);base64,(.*)$/);
    if (!l)
      return console.error("base64 was not contentType"), null;
    const U = l[1];
    return { arrayBuffer: eb(W), mimeType: U };
  } catch (l) {
    return console.error("Error Processing Base64:", l), null;
  }
}, pb = (W) => new Promise((l, U) => {
  const d = new FileReader();
  d.onload = () => l(d.result), d.onerror = (Z) => U(Z), d.readAsArrayBuffer(W);
}), yb = async (W) => {
  try {
    const l = await pb(W), U = W.type;
    return { arrayBuffer: l, mimeType: U };
  } catch (l) {
    return console.error("Error reading file as ArrayBuffer:", l), null;
  }
}, ob = async (W) => typeof W == "string" ? W.startsWith("data:") ? ub(W) : await Bb(W) : W instanceof File ? await yb(W) : null;
var Zt, e0;
class zb {
  constructor(l) {
    m(this, Zt, []);
    m(this, e0, {});
    h(this, Zt, l), h(this, e0, Object.fromEntries(
      t(this, Zt).map((U) => [U, /* @__PURE__ */ new Set()])
    ));
  }
  on(l, U) {
    t(this, e0)[l].add(U);
  }
  emit(l, ...U) {
    t(this, e0)[l].forEach((d) => d(...U));
  }
}
Zt = new WeakMap(), e0 = new WeakMap();
var PQ = {};
PQ.d = (W, l) => {
  for (var U in l)
    PQ.o(l, U) && !PQ.o(W, U) && Object.defineProperty(W, U, { enumerable: !0, get: l[U] });
};
PQ.o = (W, l) => Object.prototype.hasOwnProperty.call(W, l);
var K = globalThis.pdfjsLib = {};
PQ.d(K, {
  AbortException: () => (
    /* reexport */
    R0
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    fR
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    H
  ),
  AnnotationEditorType: () => (
    /* reexport */
    dl
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    Q0
  ),
  AnnotationLayer: () => (
    /* reexport */
    yi
  ),
  AnnotationMode: () => (
    /* reexport */
    BZ
  ),
  CMapCompressionType: () => (
    /* reexport */
    jc
  ),
  ColorPicker: () => (
    /* reexport */
    kW
  ),
  DOMSVGFactory: () => (
    /* reexport */
    mN
  ),
  DrawLayer: () => (
    /* reexport */
    $R
  ),
  FeatureTest: () => (
    /* reexport */
    GU
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    nZ
  ),
  ImageKind: () => (
    /* reexport */
    _V
  ),
  InvalidPDFException: () => (
    /* reexport */
    en
  ),
  MissingPDFException: () => (
    /* reexport */
    c0
  ),
  OPS: () => (
    /* reexport */
    _U
  ),
  Outliner: () => (
    /* reexport */
    yR
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    Ts
  ),
  PDFDateString: () => (
    /* reexport */
    kn
  ),
  PDFWorker: () => (
    /* reexport */
    X0
  ),
  PasswordResponses: () => (
    /* reexport */
    Ib
  ),
  PermissionFlag: () => (
    /* reexport */
    Db
  ),
  PixelsPerInch: () => (
    /* reexport */
    AZ
  ),
  RenderingCancelledException: () => (
    /* reexport */
    MN
  ),
  TextLayer: () => (
    /* reexport */
    SQ
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    Nc
  ),
  Util: () => (
    /* reexport */
    w
  ),
  VerbosityLevel: () => (
    /* reexport */
    Wc
  ),
  XfaLayer: () => (
    /* reexport */
    Xs
  ),
  build: () => (
    /* reexport */
    Ri
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    xb
  ),
  fetchData: () => (
    /* reexport */
    hc
  ),
  getDocument: () => (
    /* reexport */
    Ui
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    Ab
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    _b
  ),
  getXfaPageViewport: () => (
    /* reexport */
    qb
  ),
  isDataScheme: () => (
    /* reexport */
    JN
  ),
  isPdfFile: () => (
    /* reexport */
    GN
  ),
  noContextMenu: () => (
    /* reexport */
    SU
  ),
  normalizeUnicode: () => (
    /* reexport */
    Hb
  ),
  renderTextLayer: () => (
    /* reexport */
    Hh
  ),
  setLayerDimensions: () => (
    /* reexport */
    F0
  ),
  shadow: () => (
    /* reexport */
    Fl
  ),
  updateTextLayer: () => (
    /* reexport */
    vh
  ),
  version: () => (
    /* reexport */
    ci
  )
});
const WU = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Bn = [1, 0, 0, 1, 0, 0], xc = [1e-3, 0, 0, 1e-3, 0, 0], Lb = 1e7, Sc = 1.35, HU = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, BZ = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, kb = "pdfjs_internal_editor_", dl = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, H = {
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
}, Db = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, ZU = {
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
}, _V = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, kl = {
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
}, eQ = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, Wc = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, jc = {
  NONE: 0,
  BINARY: 1
}, _U = {
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
}, Ib = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let cc = Wc.WARNINGS;
function Eb(W) {
  Number.isInteger(W) && (cc = W);
}
function Cb() {
  return cc;
}
function Rc(W) {
  cc >= Wc.INFOS && console.log(`Info: ${W}`);
}
function _(W) {
  cc >= Wc.WARNINGS && console.log(`Warning: ${W}`);
}
function sl(W) {
  throw new Error(W);
}
function wl(W, l) {
  W || sl(l);
}
function wb(W) {
  switch (W == null ? void 0 : W.protocol) {
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
function xb(W, l = null, U = null) {
  if (!W)
    return null;
  try {
    if (U && typeof W == "string") {
      if (U.addDefaultProtocol && W.startsWith("www.")) {
        const Z = W.match(/\./g);
        (Z == null ? void 0 : Z.length) >= 2 && (W = `http://${W}`);
      }
      if (U.tryConvertEncoding)
        try {
          W = Kb(W);
        } catch {
        }
    }
    const d = l ? new URL(W, l) : new URL(W);
    if (wb(d))
      return d;
  } catch {
  }
  return null;
}
function Fl(W, l, U, d = !1) {
  return Object.defineProperty(W, l, {
    value: U,
    enumerable: !d,
    configurable: !0,
    writable: !1
  }), U;
}
const $Z = function() {
  function l(U, d) {
    this.constructor === l && sl("Cannot initialize BaseException."), this.message = U, this.name = d;
  }
  return l.prototype = new Error(), l.constructor = l, l;
}();
class Oc extends $Z {
  constructor(l, U) {
    super(l, "PasswordException"), this.code = U;
  }
}
class rc extends $Z {
  constructor(l, U) {
    super(l, "UnknownErrorException"), this.details = U;
  }
}
class en extends $Z {
  constructor(l) {
    super(l, "InvalidPDFException");
  }
}
class c0 extends $Z {
  constructor(l) {
    super(l, "MissingPDFException");
  }
}
class Nc extends $Z {
  constructor(l, U) {
    super(l, "UnexpectedResponseException"), this.status = U;
  }
}
class jb extends $Z {
  constructor(l) {
    super(l, "FormatError");
  }
}
class R0 extends $Z {
  constructor(l) {
    super(l, "AbortException");
  }
}
function un(W) {
  (typeof W != "object" || (W == null ? void 0 : W.length) === void 0) && sl("Invalid argument for bytesToString");
  const l = W.length, U = 8192;
  if (l < U)
    return String.fromCharCode.apply(null, W);
  const d = [];
  for (let Z = 0; Z < l; Z += U) {
    const F = Math.min(Z + U, l), Q = W.subarray(Z, F);
    d.push(String.fromCharCode.apply(null, Q));
  }
  return d.join("");
}
function nc(W) {
  typeof W != "string" && sl("Invalid argument for stringToBytes");
  const l = W.length, U = new Uint8Array(l);
  for (let d = 0; d < l; ++d)
    U[d] = W.charCodeAt(d) & 255;
  return U;
}
function Ob(W) {
  return String.fromCharCode(W >> 24 & 255, W >> 16 & 255, W >> 8 & 255, W & 255);
}
function hN(W) {
  const l = /* @__PURE__ */ Object.create(null);
  for (const [U, d] of W)
    l[U] = d;
  return l;
}
function rb() {
  const W = new Uint8Array(4);
  return W[0] = 1, new Uint32Array(W.buffer, 0, 1)[0] === 1;
}
function gb() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class GU {
  static get isLittleEndian() {
    return Fl(this, "isLittleEndian", rb());
  }
  static get isEvalSupported() {
    return Fl(this, "isEvalSupported", gb());
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
const Xc = Array.from(Array(256).keys(), (W) => W.toString(16).padStart(2, "0"));
var bZ, qV, gc;
class w {
  static makeHexColor(l, U, d) {
    return `#${Xc[l]}${Xc[U]}${Xc[d]}`;
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
    const d = this.applyTransform(l, U), Z = this.applyTransform(l.slice(2, 4), U), F = this.applyTransform([l[0], l[3]], U), Q = this.applyTransform([l[2], l[1]], U);
    return [Math.min(d[0], Z[0], F[0], Q[0]), Math.min(d[1], Z[1], F[1], Q[1]), Math.max(d[0], Z[0], F[0], Q[0]), Math.max(d[1], Z[1], F[1], Q[1])];
  }
  static inverseTransform(l) {
    const U = l[0] * l[3] - l[1] * l[2];
    return [l[3] / U, -l[1] / U, -l[2] / U, l[0] / U, (l[2] * l[5] - l[4] * l[3]) / U, (l[4] * l[1] - l[5] * l[0]) / U];
  }
  static singularValueDecompose2dScale(l) {
    const U = [l[0], l[2], l[1], l[3]], d = l[0] * U[0] + l[1] * U[2], Z = l[0] * U[1] + l[1] * U[3], F = l[2] * U[0] + l[3] * U[2], Q = l[2] * U[1] + l[3] * U[3], V = (d + Q) / 2, c = Math.sqrt((d + Q) ** 2 - 4 * (d * Q - F * Z)) / 2, R = V + c || 1, N = V - c || 1;
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
    const F = Math.max(Math.min(l[1], l[3]), Math.min(U[1], U[3])), Q = Math.min(Math.max(l[1], l[3]), Math.max(U[1], U[3]));
    return F > Q ? null : [d, F, Z, Q];
  }
  static bezierBoundingBox(l, U, d, Z, F, Q, V, c, R) {
    return R ? (R[0] = Math.min(R[0], l, V), R[1] = Math.min(R[1], U, c), R[2] = Math.max(R[2], l, V), R[3] = Math.max(R[3], U, c)) : R = [Math.min(l, V), Math.min(U, c), Math.max(l, V), Math.max(U, c)], i(this, bZ, gc).call(this, l, d, F, V, U, Z, Q, c, 3 * (-l + 3 * (d - F) + V), 6 * (l - 2 * d + F), 3 * (d - l), R), i(this, bZ, gc).call(this, l, d, F, V, U, Z, Q, c, 3 * (-U + 3 * (Z - Q) + c), 6 * (U - 2 * Z + Q), 3 * (Z - U), R), R;
  }
}
bZ = new WeakSet(), qV = function(l, U, d, Z, F, Q, V, c, R, N) {
  if (R <= 0 || R >= 1)
    return;
  const n = 1 - R, s = R * R, a = s * R, b = n * (n * (n * l + 3 * R * U) + 3 * s * d) + a * Z, M = n * (n * (n * F + 3 * R * Q) + 3 * s * V) + a * c;
  N[0] = Math.min(N[0], b), N[1] = Math.min(N[1], M), N[2] = Math.max(N[2], b), N[3] = Math.max(N[3], M);
}, gc = function(l, U, d, Z, F, Q, V, c, R, N, n, s) {
  if (Math.abs(R) < 1e-12) {
    Math.abs(N) >= 1e-12 && i(this, bZ, qV).call(this, l, U, d, Z, F, Q, V, c, -n / N, s);
    return;
  }
  const a = N ** 2 - 4 * n * R;
  if (a < 0)
    return;
  const b = Math.sqrt(a), M = 2 * R;
  i(this, bZ, qV).call(this, l, U, d, Z, F, Q, V, c, (-N + b) / M, s), i(this, bZ, qV).call(this, l, U, d, Z, F, Q, V, c, (-N - b) / M, s);
}, m(w, bZ);
function Kb(W) {
  return decodeURIComponent(escape(W));
}
let Yc = null, wN = null;
function Hb(W) {
  return Yc || (Yc = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, wN = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), W.replaceAll(Yc, (l, U, d) => U ? U.normalize("NFKC") : wN.get(d));
}
function vb() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const W = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(W);
  else
    for (let l = 0; l < 32; l++)
      W[l] = Math.floor(Math.random() * 255);
  return un(W);
}
const pn = "pdfjs_internal_id_", Dd = {
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
class sc {
  constructor() {
    this.constructor === sc && sl("Cannot initialize BaseFilterFactory.");
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
var Ft;
const pN = class pN {
  constructor({
    enableHWA: l = !1
  } = {}) {
    m(this, Ft, !1);
    this.constructor === pN && sl("Cannot initialize BaseCanvasFactory."), h(this, Ft, l);
  }
  create(l, U) {
    if (l <= 0 || U <= 0)
      throw new Error("Invalid canvas size");
    const d = this._createCanvas(l, U);
    return {
      canvas: d,
      context: d.getContext("2d", {
        willReadFrequently: !t(this, Ft)
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
    sl("Abstract method `_createCanvas` called.");
  }
};
Ft = new WeakMap();
let pW = pN;
class ac {
  constructor({
    baseUrl: l = null,
    isCompressed: U = !0
  }) {
    this.constructor === ac && sl("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = l, this.isCompressed = U;
  }
  async fetch({
    name: l
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!l)
      throw new Error("CMap name must be specified.");
    const U = this.baseUrl + l + (this.isCompressed ? ".bcmap" : ""), d = this.isCompressed ? jc.BINARY : jc.NONE;
    return this._fetchData(U, d).catch((Z) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${U}`);
    });
  }
  _fetchData(l, U) {
    sl("Abstract method `_fetchData` called.");
  }
}
class bc {
  constructor({
    baseUrl: l = null
  }) {
    this.constructor === bc && sl("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = l;
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
    sl("Abstract method `_fetchData` called.");
  }
}
class iN {
  constructor() {
    this.constructor === iN && sl("Cannot initialize BaseSVGFactory.");
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
    sl("Abstract method `_createSVG` called.");
  }
}
const Ed = "http://www.w3.org/2000/svg", tF = class tF {
};
f(tF, "CSS", 96), f(tF, "PDF", 72), f(tF, "PDF_TO_CSS_UNITS", tF.CSS / tF.PDF);
let AZ = tF;
var WF, ad, Od, mU, jW, cF, I, FU, a0, b0, $V, yn, Kc, h0, yQ, oQ, Hc, zQ;
class Pb extends sc {
  constructor({
    docId: U,
    ownerDocument: d = globalThis.document
  } = {}) {
    super();
    m(this, I);
    m(this, WF);
    m(this, ad);
    m(this, Od);
    m(this, mU);
    m(this, jW);
    m(this, cF, 0);
    h(this, Od, U), h(this, mU, d);
  }
  addFilter(U) {
    if (!U)
      return "none";
    let d = t(this, I, FU).get(U);
    if (d)
      return d;
    const [Z, F, Q] = i(this, I, $V).call(this, U), V = U.length === 1 ? Z : `${Z}${F}${Q}`;
    if (d = t(this, I, FU).get(V), d)
      return t(this, I, FU).set(U, d), d;
    const c = `g_${t(this, Od)}_transfer_map_${XU(this, cF)._++}`, R = `url(#${c})`;
    t(this, I, FU).set(U, R), t(this, I, FU).set(V, R);
    const N = i(this, I, h0).call(this, c);
    return i(this, I, oQ).call(this, Z, F, Q, N), R;
  }
  addHCMFilter(U, d) {
    var b;
    const Z = `${U}-${d}`, F = "base";
    let Q = t(this, I, a0).get(F);
    if ((Q == null ? void 0 : Q.key) === Z || (Q ? ((b = Q.filter) == null || b.remove(), Q.key = Z, Q.url = "none", Q.filter = null) : (Q = {
      key: Z,
      url: "none",
      filter: null
    }, t(this, I, a0).set(F, Q)), !U || !d))
      return Q.url;
    const V = i(this, I, zQ).call(this, U);
    U = w.makeHexColor(...V);
    const c = i(this, I, zQ).call(this, d);
    if (d = w.makeHexColor(...c), t(this, I, b0).style.color = "", U === "#000000" && d === "#ffffff" || U === d)
      return Q.url;
    const R = new Array(256);
    for (let M = 0; M <= 255; M++) {
      const G = M / 255;
      R[M] = G <= 0.03928 ? G / 12.92 : ((G + 0.055) / 1.055) ** 2.4;
    }
    const N = R.join(","), n = `g_${t(this, Od)}_hcm_filter`, s = Q.filter = i(this, I, h0).call(this, n);
    i(this, I, oQ).call(this, N, N, N, s), i(this, I, Kc).call(this, s);
    const a = (M, G) => {
      const J = V[M] / 255, T = c[M] / 255, S = new Array(G + 1);
      for (let B = 0; B <= G; B++)
        S[B] = J + B / G * (T - J);
      return S.join(",");
    };
    return i(this, I, oQ).call(this, a(0, 5), a(1, 5), a(2, 5), s), Q.url = `url(#${n})`, Q.url;
  }
  addAlphaFilter(U) {
    let d = t(this, I, FU).get(U);
    if (d)
      return d;
    const [Z] = i(this, I, $V).call(this, [U]), F = `alpha_${Z}`;
    if (d = t(this, I, FU).get(F), d)
      return t(this, I, FU).set(U, d), d;
    const Q = `g_${t(this, Od)}_alpha_map_${XU(this, cF)._++}`, V = `url(#${Q})`;
    t(this, I, FU).set(U, V), t(this, I, FU).set(F, V);
    const c = i(this, I, h0).call(this, Q);
    return i(this, I, Hc).call(this, Z, c), V;
  }
  addLuminosityFilter(U) {
    let d = t(this, I, FU).get(U || "luminosity");
    if (d)
      return d;
    let Z, F;
    if (U ? ([Z] = i(this, I, $V).call(this, [U]), F = `luminosity_${Z}`) : F = "luminosity", d = t(this, I, FU).get(F), d)
      return t(this, I, FU).set(U, d), d;
    const Q = `g_${t(this, Od)}_luminosity_map_${XU(this, cF)._++}`, V = `url(#${Q})`;
    t(this, I, FU).set(U, V), t(this, I, FU).set(F, V);
    const c = i(this, I, h0).call(this, Q);
    return i(this, I, yn).call(this, c), U && i(this, I, Hc).call(this, Z, c), V;
  }
  addHighlightHCMFilter(U, d, Z, F, Q) {
    var T;
    const V = `${d}-${Z}-${F}-${Q}`;
    let c = t(this, I, a0).get(U);
    if ((c == null ? void 0 : c.key) === V || (c ? ((T = c.filter) == null || T.remove(), c.key = V, c.url = "none", c.filter = null) : (c = {
      key: V,
      url: "none",
      filter: null
    }, t(this, I, a0).set(U, c)), !d || !Z))
      return c.url;
    const [R, N] = [d, Z].map(i(this, I, zQ).bind(this));
    let n = Math.round(0.2126 * R[0] + 0.7152 * R[1] + 0.0722 * R[2]), s = Math.round(0.2126 * N[0] + 0.7152 * N[1] + 0.0722 * N[2]), [a, b] = [F, Q].map(i(this, I, zQ).bind(this));
    s < n && ([n, s, a, b] = [s, n, b, a]), t(this, I, b0).style.color = "";
    const M = (S, B, Y) => {
      const X = new Array(256), e = (s - n) / Y, o = S / 255, y = (B - S) / (255 * Y);
      let O = 0;
      for (let E = 0; E <= Y; E++) {
        const ll = Math.round(n + E * e), z = o + E * y;
        for (let C = O; C <= ll; C++)
          X[C] = z;
        O = ll + 1;
      }
      for (let E = O; E < 256; E++)
        X[E] = X[O - 1];
      return X.join(",");
    }, G = `g_${t(this, Od)}_hcm_${U}_filter`, J = c.filter = i(this, I, h0).call(this, G);
    return i(this, I, Kc).call(this, J), i(this, I, oQ).call(this, M(a[0], b[0], 5), M(a[1], b[1], 5), M(a[2], b[2], 5), J), c.url = `url(#${G})`, c.url;
  }
  destroy(U = !1) {
    U && t(this, I, a0).size !== 0 || (t(this, ad) && (t(this, ad).parentNode.parentNode.remove(), h(this, ad, null)), t(this, WF) && (t(this, WF).clear(), h(this, WF, null)), h(this, cF, 0));
  }
}
WF = new WeakMap(), ad = new WeakMap(), Od = new WeakMap(), mU = new WeakMap(), jW = new WeakMap(), cF = new WeakMap(), I = new WeakSet(), FU = function() {
  return t(this, WF) || h(this, WF, /* @__PURE__ */ new Map());
}, a0 = function() {
  return t(this, jW) || h(this, jW, /* @__PURE__ */ new Map());
}, b0 = function() {
  if (!t(this, ad)) {
    const U = t(this, mU).createElement("div"), {
      style: d
    } = U;
    d.visibility = "hidden", d.contain = "strict", d.width = d.height = 0, d.position = "absolute", d.top = d.left = 0, d.zIndex = -1;
    const Z = t(this, mU).createElementNS(Ed, "svg");
    Z.setAttribute("width", 0), Z.setAttribute("height", 0), h(this, ad, t(this, mU).createElementNS(Ed, "defs")), U.append(Z), Z.append(t(this, ad)), t(this, mU).body.append(U);
  }
  return t(this, ad);
}, $V = function(U) {
  if (U.length === 1) {
    const R = U[0], N = new Array(256);
    for (let s = 0; s < 256; s++)
      N[s] = R[s] / 255;
    const n = N.join(",");
    return [n, n, n];
  }
  const [d, Z, F] = U, Q = new Array(256), V = new Array(256), c = new Array(256);
  for (let R = 0; R < 256; R++)
    Q[R] = d[R] / 255, V[R] = Z[R] / 255, c[R] = F[R] / 255;
  return [Q.join(","), V.join(","), c.join(",")];
}, yn = function(U) {
  const d = t(this, mU).createElementNS(Ed, "feColorMatrix");
  d.setAttribute("type", "matrix"), d.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), U.append(d);
}, Kc = function(U) {
  const d = t(this, mU).createElementNS(Ed, "feColorMatrix");
  d.setAttribute("type", "matrix"), d.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), U.append(d);
}, h0 = function(U) {
  const d = t(this, mU).createElementNS(Ed, "filter");
  return d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("id", U), t(this, I, b0).append(d), d;
}, yQ = function(U, d, Z) {
  const F = t(this, mU).createElementNS(Ed, d);
  F.setAttribute("type", "discrete"), F.setAttribute("tableValues", Z), U.append(F);
}, oQ = function(U, d, Z, F) {
  const Q = t(this, mU).createElementNS(Ed, "feComponentTransfer");
  F.append(Q), i(this, I, yQ).call(this, Q, "feFuncR", U), i(this, I, yQ).call(this, Q, "feFuncG", d), i(this, I, yQ).call(this, Q, "feFuncB", Z);
}, Hc = function(U, d) {
  const Z = t(this, mU).createElementNS(Ed, "feComponentTransfer");
  d.append(Z), i(this, I, yQ).call(this, Z, "feFuncA", U);
}, zQ = function(U) {
  return t(this, I, b0).style.color = U, TN(getComputedStyle(t(this, I, b0)).getPropertyValue("color"));
};
class fb extends pW {
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
async function hc(W, l = "text") {
  if (LQ(W, document.baseURI)) {
    const U = await fetch(W);
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
    Z.open("GET", W, !0), Z.responseType = l, Z.onreadystatechange = () => {
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
class on extends ac {
  _fetchData(l, U) {
    return hc(l, this.isCompressed ? "arraybuffer" : "text").then((d) => ({
      cMapData: d instanceof ArrayBuffer ? new Uint8Array(d) : nc(d),
      compressionType: U
    }));
  }
}
class zn extends bc {
  _fetchData(l) {
    return hc(l, "arraybuffer").then((U) => new Uint8Array(U));
  }
}
class mN extends iN {
  _createSVG(l) {
    return document.createElementNS(Ed, l);
  }
}
class IV {
  constructor({
    viewBox: l,
    scale: U,
    rotation: d,
    offsetX: Z = 0,
    offsetY: F = 0,
    dontFlip: Q = !1
  }) {
    this.viewBox = l, this.scale = U, this.rotation = d, this.offsetX = Z, this.offsetY = F;
    const V = (l[2] + l[0]) / 2, c = (l[3] + l[1]) / 2;
    let R, N, n, s;
    switch (d %= 360, d < 0 && (d += 360), d) {
      case 180:
        R = -1, N = 0, n = 0, s = 1;
        break;
      case 90:
        R = 0, N = 1, n = 1, s = 0;
        break;
      case 270:
        R = 0, N = -1, n = -1, s = 0;
        break;
      case 0:
        R = 1, N = 0, n = 0, s = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    Q && (n = -n, s = -s);
    let a, b, M, G;
    R === 0 ? (a = Math.abs(c - l[1]) * U + Z, b = Math.abs(V - l[0]) * U + F, M = (l[3] - l[1]) * U, G = (l[2] - l[0]) * U) : (a = Math.abs(V - l[0]) * U + Z, b = Math.abs(c - l[1]) * U + F, M = (l[2] - l[0]) * U, G = (l[3] - l[1]) * U), this.transform = [R * U, N * U, n * U, s * U, a - R * U * V - n * U * c, b - N * U * V - s * U * c], this.width = M, this.height = G;
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
    return new IV({
      viewBox: this.viewBox.slice(),
      scale: l,
      rotation: U,
      offsetX: d,
      offsetY: Z,
      dontFlip: F
    });
  }
  convertToViewportPoint(l, U) {
    return w.applyTransform([l, U], this.transform);
  }
  convertToViewportRectangle(l) {
    const U = w.applyTransform([l[0], l[1]], this.transform), d = w.applyTransform([l[2], l[3]], this.transform);
    return [U[0], U[1], d[0], d[1]];
  }
  convertToPdfPoint(l, U) {
    return w.applyInverseTransform([l, U], this.transform);
  }
}
class MN extends $Z {
  constructor(l, U = 0) {
    super(l, "RenderingCancelledException"), this.extraDelay = U;
  }
}
function JN(W) {
  const l = W.length;
  let U = 0;
  for (; U < l && W[U].trim() === ""; )
    U++;
  return W.substring(U, U + 5).toLowerCase() === "data:";
}
function GN(W) {
  return typeof W == "string" && /\.pdf$/i.test(W);
}
function Ab(W) {
  return [W] = W.split(/[#?]/, 1), W.substring(W.lastIndexOf("/") + 1);
}
function _b(W, l = "document.pdf") {
  if (typeof W != "string")
    return l;
  if (JN(W))
    return _('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), l;
  const U = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, d = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, Z = U.exec(W);
  let F = d.exec(Z[1]) || d.exec(Z[2]) || d.exec(Z[3]);
  if (F && (F = F[0], F.includes("%")))
    try {
      F = d.exec(decodeURIComponent(F))[0];
    } catch {
    }
  return F || l;
}
class xN {
  constructor() {
    f(this, "started", /* @__PURE__ */ Object.create(null));
    f(this, "times", []);
  }
  time(l) {
    l in this.started && _(`Timer is already running for ${l}`), this.started[l] = Date.now();
  }
  timeEnd(l) {
    l in this.started || _(`Timer has not been started for ${l}`), this.times.push({
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
function LQ(W, l) {
  try {
    const {
      protocol: U
    } = l ? new URL(W, l) : new URL(W);
    return U === "http:" || U === "https:";
  } catch {
    return !1;
  }
}
function SU(W) {
  W.preventDefault();
}
function Ln(W) {
  console.log("Deprecated API usage: " + W);
}
let jN;
class kn {
  static toDateObject(l) {
    if (!l || typeof l != "string")
      return null;
    jN || (jN = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const U = jN.exec(l);
    if (!U)
      return null;
    const d = parseInt(U[1], 10);
    let Z = parseInt(U[2], 10);
    Z = Z >= 1 && Z <= 12 ? Z - 1 : 0;
    let F = parseInt(U[3], 10);
    F = F >= 1 && F <= 31 ? F : 1;
    let Q = parseInt(U[4], 10);
    Q = Q >= 0 && Q <= 23 ? Q : 0;
    let V = parseInt(U[5], 10);
    V = V >= 0 && V <= 59 ? V : 0;
    let c = parseInt(U[6], 10);
    c = c >= 0 && c <= 59 ? c : 0;
    const R = U[7] || "Z";
    let N = parseInt(U[8], 10);
    N = N >= 0 && N <= 23 ? N : 0;
    let n = parseInt(U[9], 10) || 0;
    return n = n >= 0 && n <= 59 ? n : 0, R === "-" ? (Q += N, V += n) : R === "+" && (Q -= N, V -= n), new Date(Date.UTC(d, Z, F, Q, V, c));
  }
}
function qb(W, {
  scale: l = 1,
  rotation: U = 0
}) {
  const {
    width: d,
    height: Z
  } = W.attributes.style, F = [0, 0, parseInt(d), parseInt(Z)];
  return new IV({
    viewBox: F,
    scale: l,
    rotation: U
  });
}
function TN(W) {
  if (W.startsWith("#")) {
    const l = parseInt(W.slice(1), 16);
    return [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255];
  }
  return W.startsWith("rgb(") ? W.slice(4, -1).split(",").map((l) => parseInt(l)) : W.startsWith("rgba(") ? W.slice(5, -1).split(",").map((l) => parseInt(l)).slice(0, 3) : (_(`Not a valid color format: "${W}"`), [0, 0, 0]);
}
function $b(W) {
  const l = document.createElement("span");
  l.style.visibility = "hidden", document.body.append(l);
  for (const U of W.keys()) {
    l.style.color = U;
    const d = window.getComputedStyle(l).color;
    W.set(U, TN(d));
  }
  l.remove();
}
function Tl(W) {
  const {
    a: l,
    b: U,
    c: d,
    d: Z,
    e: F,
    f: Q
  } = W.getTransform();
  return [l, U, d, Z, F, Q];
}
function Id(W) {
  const {
    a: l,
    b: U,
    c: d,
    d: Z,
    e: F,
    f: Q
  } = W.getTransform().invertSelf();
  return [l, U, d, Z, F, Q];
}
function F0(W, l, U = !1, d = !0) {
  if (l instanceof IV) {
    const {
      pageWidth: Z,
      pageHeight: F
    } = l.rawDims, {
      style: Q
    } = W, V = GU.isCSSRoundSupported, c = `var(--scale-factor) * ${Z}px`, R = `var(--scale-factor) * ${F}px`, N = V ? `round(${c}, 1px)` : `calc(${c})`, n = V ? `round(${R}, 1px)` : `calc(${R})`;
    !U || l.rotation % 180 === 0 ? (Q.width = N, Q.height = n) : (Q.width = n, Q.height = N);
  }
  d && W.setAttribute("data-main-rotation", l.rotation);
}
var RF, NF, pU, nF, OW, Dn, aU, In, En, lW, Cn, Pc;
const rW = class rW {
  constructor(l) {
    m(this, aU);
    m(this, RF, null);
    m(this, NF, null);
    m(this, pU);
    m(this, nF, null);
    h(this, pU, l);
  }
  render() {
    const l = h(this, RF, document.createElement("div"));
    l.className = "editToolbar", l.setAttribute("role", "toolbar");
    const U = t(this, pU)._uiManager._signal;
    l.addEventListener("contextmenu", SU, {
      signal: U
    }), l.addEventListener("pointerdown", i(rW, OW, Dn), {
      signal: U
    });
    const d = h(this, nF, document.createElement("div"));
    d.className = "buttons", l.append(d);
    const Z = t(this, pU).toolbarPosition;
    if (Z) {
      const {
        style: F
      } = l, Q = t(this, pU)._uiManager.direction === "ltr" ? 1 - Z[0] : Z[0];
      F.insetInlineEnd = `${100 * Q}%`, F.top = `calc(${100 * Z[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return i(this, aU, Cn).call(this), l;
  }
  hide() {
    var l;
    t(this, RF).classList.add("hidden"), (l = t(this, NF)) == null || l.hideDropdown();
  }
  show() {
    t(this, RF).classList.remove("hidden");
  }
  addAltTextButton(l) {
    i(this, aU, lW).call(this, l), t(this, nF).prepend(l, t(this, aU, Pc));
  }
  addColorPicker(l) {
    h(this, NF, l);
    const U = l.renderButton();
    i(this, aU, lW).call(this, U), t(this, nF).prepend(U, t(this, aU, Pc));
  }
  remove() {
    var l;
    t(this, RF).remove(), (l = t(this, NF)) == null || l.destroy(), h(this, NF, null);
  }
};
RF = new WeakMap(), NF = new WeakMap(), pU = new WeakMap(), nF = new WeakMap(), OW = new WeakSet(), Dn = function(l) {
  l.stopPropagation();
}, aU = new WeakSet(), In = function(l) {
  t(this, pU)._focusEventsAllowed = !1, l.preventDefault(), l.stopPropagation();
}, En = function(l) {
  t(this, pU)._focusEventsAllowed = !0, l.preventDefault(), l.stopPropagation();
}, lW = function(l) {
  const U = t(this, pU)._uiManager._signal;
  l.addEventListener("focusin", i(this, aU, In).bind(this), {
    capture: !0,
    signal: U
  }), l.addEventListener("focusout", i(this, aU, En).bind(this), {
    capture: !0,
    signal: U
  }), l.addEventListener("contextmenu", SU, {
    signal: U
  });
}, Cn = function() {
  const l = document.createElement("button");
  l.className = "delete", l.tabIndex = 0, l.setAttribute("data-l10n-id", `pdfjs-editor-remove-${t(this, pU).editorType}-button`), i(this, aU, lW).call(this, l), l.addEventListener("click", (U) => {
    t(this, pU)._uiManager.delete();
  }, {
    signal: t(this, pU)._uiManager._signal
  }), t(this, nF).append(l);
}, Pc = function() {
  const l = document.createElement("div");
  return l.className = "divider", l;
}, m(rW, OW);
let vc = rW;
var Qt, sF, aF, _Z, wn, xn, jn;
class lh {
  constructor(l) {
    m(this, _Z);
    m(this, Qt, null);
    m(this, sF, null);
    m(this, aF);
    h(this, aF, l);
  }
  show(l, U, d) {
    const [Z, F] = i(this, _Z, xn).call(this, U, d), {
      style: Q
    } = t(this, sF) || h(this, sF, i(this, _Z, wn).call(this));
    l.append(t(this, sF)), Q.insetInlineEnd = `${100 * Z}%`, Q.top = `calc(${100 * F}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    t(this, sF).remove();
  }
}
Qt = new WeakMap(), sF = new WeakMap(), aF = new WeakMap(), _Z = new WeakSet(), wn = function() {
  const l = h(this, sF, document.createElement("div"));
  l.className = "editToolbar", l.setAttribute("role", "toolbar"), l.addEventListener("contextmenu", SU, {
    signal: t(this, aF)._signal
  });
  const U = h(this, Qt, document.createElement("div"));
  return U.className = "buttons", l.append(U), i(this, _Z, jn).call(this), l;
}, xn = function(l, U) {
  let d = 0, Z = 0;
  for (const F of l) {
    const Q = F.y + F.height;
    if (Q < d)
      continue;
    const V = F.x + (U ? F.width : 0);
    if (Q > d) {
      Z = V, d = Q;
      continue;
    }
    U ? V > Z && (Z = V) : V < Z && (Z = V);
  }
  return [U ? 1 - Z : Z, d];
}, jn = function() {
  const l = document.createElement("button");
  l.className = "highlightButton", l.tabIndex = 0, l.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const U = document.createElement("span");
  l.append(U), U.className = "visuallyHidden", U.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const d = t(this, aF)._signal;
  l.addEventListener("contextmenu", SU, {
    signal: d
  }), l.addEventListener("click", () => {
    t(this, aF).highlightSelection("floating_button");
  }, {
    signal: d
  }), t(this, Qt).append(l);
};
function yW(W, l, U) {
  for (const d of U)
    l.addEventListener(d, W[d].bind(W));
}
function Uh(W) {
  return Math.round(Math.min(255, Math.max(1, 255 * W))).toString(16).padStart(2, "0");
}
var gW;
class dh {
  constructor() {
    m(this, gW, 0);
  }
  get id() {
    return `${kb}${XU(this, gW)._++}`;
  }
}
gW = new WeakMap();
var tt, KW, OU, Vt, Ac;
const yN = class yN {
  constructor() {
    m(this, Vt);
    m(this, tt, vb());
    m(this, KW, 0);
    m(this, OU, null);
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
    return i(this, Vt, Ac).call(this, `${U}_${d}_${Z}_${F}`, l);
  }
  async getFromUrl(l) {
    return i(this, Vt, Ac).call(this, l, l);
  }
  async getFromId(l) {
    t(this, OU) || h(this, OU, /* @__PURE__ */ new Map());
    const U = t(this, OU).get(l);
    return U ? U.bitmap ? (U.refCounter += 1, U) : U.file ? this.getFromFile(U.file) : this.getFromUrl(U.url) : null;
  }
  getSvgUrl(l) {
    const U = t(this, OU).get(l);
    return U != null && U.isSvg ? U.svgUrl : null;
  }
  deleteId(l) {
    t(this, OU) || h(this, OU, /* @__PURE__ */ new Map());
    const U = t(this, OU).get(l);
    U && (U.refCounter -= 1, U.refCounter === 0 && (U.bitmap = null));
  }
  isValidId(l) {
    return l.startsWith(`image_${t(this, tt)}_`);
  }
};
tt = new WeakMap(), KW = new WeakMap(), OU = new WeakMap(), Vt = new WeakSet(), Ac = async function(l, U) {
  t(this, OU) || h(this, OU, /* @__PURE__ */ new Map());
  let d = t(this, OU).get(l);
  if (d === null)
    return null;
  if (d != null && d.bitmap)
    return d.refCounter += 1, d;
  try {
    d || (d = {
      bitmap: null,
      id: `image_${t(this, tt)}_${XU(this, KW)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let Z;
    if (typeof U == "string" ? (d.url = U, Z = await hc(U, "blob")) : Z = d.file = U, Z.type === "image/svg+xml") {
      const F = yN._isSVGFittingCanvas, Q = new FileReader(), V = new Image(), c = new Promise((R, N) => {
        V.onload = () => {
          d.bitmap = V, d.isSvg = !0, R();
        }, Q.onload = async () => {
          const n = d.svgUrl = Q.result;
          V.src = await F ? `${n}#svgView(preserveAspectRatio(none))` : n;
        }, V.onerror = Q.onerror = N;
      });
      Q.readAsDataURL(Z), await c;
    } else
      d.bitmap = await createImageBitmap(Z);
    d.refCounter = 1;
  } catch (Z) {
    console.error(Z), d = null;
  }
  return t(this, OU).set(l, d), d && t(this, OU).set(d.id, d), d;
};
let fc = yN;
var jl, uZ, Wt, Ol;
class Zh {
  constructor(l = 128) {
    m(this, jl, []);
    m(this, uZ, !1);
    m(this, Wt);
    m(this, Ol, -1);
    h(this, Wt, l);
  }
  add({
    cmd: l,
    undo: U,
    post: d,
    mustExec: Z,
    type: F = NaN,
    overwriteIfSameType: Q = !1,
    keepUndo: V = !1
  }) {
    if (Z && l(), t(this, uZ))
      return;
    const c = {
      cmd: l,
      undo: U,
      post: d,
      type: F
    };
    if (t(this, Ol) === -1) {
      t(this, jl).length > 0 && (t(this, jl).length = 0), h(this, Ol, 0), t(this, jl).push(c);
      return;
    }
    if (Q && t(this, jl)[t(this, Ol)].type === F) {
      V && (c.undo = t(this, jl)[t(this, Ol)].undo), t(this, jl)[t(this, Ol)] = c;
      return;
    }
    const R = t(this, Ol) + 1;
    R === t(this, Wt) ? t(this, jl).splice(0, 1) : (h(this, Ol, R), R < t(this, jl).length && t(this, jl).splice(R)), t(this, jl).push(c);
  }
  undo() {
    if (t(this, Ol) === -1)
      return;
    h(this, uZ, !0);
    const {
      undo: l,
      post: U
    } = t(this, jl)[t(this, Ol)];
    l(), U == null || U(), h(this, uZ, !1), h(this, Ol, t(this, Ol) - 1);
  }
  redo() {
    if (t(this, Ol) < t(this, jl).length - 1) {
      h(this, Ol, t(this, Ol) + 1), h(this, uZ, !0);
      const {
        cmd: l,
        post: U
      } = t(this, jl)[t(this, Ol)];
      l(), U == null || U(), h(this, uZ, !1);
    }
  }
  hasSomethingToUndo() {
    return t(this, Ol) !== -1;
  }
  hasSomethingToRedo() {
    return t(this, Ol) < t(this, jl).length - 1;
  }
  destroy() {
    h(this, jl, null);
  }
}
jl = new WeakMap(), uZ = new WeakMap(), Wt = new WeakMap(), Ol = new WeakMap();
var HW, On;
class EV {
  constructor(l) {
    m(this, HW);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: U
    } = GU.platform;
    for (const [d, Z, F = {}] of l)
      for (const Q of d) {
        const V = Q.startsWith("mac+");
        U && V ? (this.callbacks.set(Q.slice(4), {
          callback: Z,
          options: F
        }), this.allKeys.add(Q.split("+").at(-1))) : !U && !V && (this.callbacks.set(Q, {
          callback: Z,
          options: F
        }), this.allKeys.add(Q.split("+").at(-1)));
      }
  }
  exec(l, U) {
    if (!this.allKeys.has(U.key))
      return;
    const d = this.callbacks.get(i(this, HW, On).call(this, U));
    if (!d)
      return;
    const {
      callback: Z,
      options: {
        bubbles: F = !1,
        args: Q = [],
        checker: V = null
      }
    } = d;
    V && !V(l, U) || (Z.bind(l, ...Q, U)(), F || (U.stopPropagation(), U.preventDefault()));
  }
}
HW = new WeakSet(), On = function(l) {
  l.altKey && this.buffer.push("alt"), l.ctrlKey && this.buffer.push("ctrl"), l.metaKey && this.buffer.push("meta"), l.shiftKey && this.buffer.push("shift"), this.buffer.push(l.key);
  const U = this.buffer.join("+");
  return this.buffer.length = 0, U;
};
const vW = class vW {
  get _colors() {
    const l = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return $b(l), Fl(this, "_colors", l);
  }
  convert(l) {
    const U = TN(l);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return U;
    for (const [d, Z] of this._colors)
      if (Z.every((F, Q) => F === U[Q]))
        return vW._colorsMapping.get(d);
    return U;
  }
  getHexCode(l) {
    const U = this._colors.get(l);
    return U ? w.makeHexColor(...U) : l;
  }
};
f(vW, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let _c = vW;
var u0, yU, Dl, Hl, p0, rd, y0, qU, o0, bF, bd, $U, hF, ct, Rt, hd, z0, pZ, id, PW, yZ, Nt, iF, nt, L0, vl, Rl, gd, mF, st, at, bt, ht, it, mt, Mt, Jt, Gt, Tt, St, Xt, Yt, oZ, md, Kd, Bt, L, UW, rn, gn, dW, Kn, Hn, vn, qc, Pn, $c, lR, fn, cU, TZ, An, _n, UR, qn, kQ, dR;
const T0 = class T0 {
  constructor(l, U, d, Z, F, Q, V, c, R) {
    m(this, L);
    m(this, u0, new AbortController());
    m(this, yU, null);
    m(this, Dl, /* @__PURE__ */ new Map());
    m(this, Hl, /* @__PURE__ */ new Map());
    m(this, p0, null);
    m(this, rd, null);
    m(this, y0, null);
    m(this, qU, new Zh());
    m(this, o0, 0);
    m(this, bF, /* @__PURE__ */ new Set());
    m(this, bd, null);
    m(this, $U, null);
    m(this, hF, /* @__PURE__ */ new Set());
    m(this, ct, !1);
    m(this, Rt, null);
    m(this, hd, null);
    m(this, z0, null);
    m(this, pZ, !1);
    m(this, id, null);
    m(this, PW, new dh());
    m(this, yZ, !1);
    m(this, Nt, !1);
    m(this, iF, null);
    m(this, nt, null);
    m(this, L0, null);
    m(this, vl, dl.NONE);
    m(this, Rl, /* @__PURE__ */ new Set());
    m(this, gd, null);
    m(this, mF, null);
    m(this, st, null);
    m(this, at, this.blur.bind(this));
    m(this, bt, this.focus.bind(this));
    m(this, ht, this.copy.bind(this));
    m(this, it, this.cut.bind(this));
    m(this, mt, this.paste.bind(this));
    m(this, Mt, this.keydown.bind(this));
    m(this, Jt, this.keyup.bind(this));
    m(this, Gt, this.onEditingAction.bind(this));
    m(this, Tt, this.onPageChanging.bind(this));
    m(this, St, this.onScaleChanging.bind(this));
    m(this, Xt, this.onRotationChanging.bind(this));
    m(this, Yt, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    m(this, oZ, [0, 0]);
    m(this, md, null);
    m(this, Kd, null);
    m(this, Bt, null);
    this._signal = t(this, u0).signal, h(this, Kd, l), h(this, Bt, U), h(this, p0, d), this._eventBus = Z, this._eventBus._on("editingaction", t(this, Gt)), this._eventBus._on("pagechanging", t(this, Tt)), this._eventBus._on("scalechanging", t(this, St)), this._eventBus._on("rotationchanging", t(this, Xt)), i(this, L, Kn).call(this), i(this, L, fn).call(this), i(this, L, qc).call(this), h(this, rd, F.annotationStorage), h(this, Rt, F.filterFactory), h(this, mF, Q), h(this, z0, V || null), h(this, ct, c), h(this, L0, R || null), this.viewParameters = {
      realScale: AZ.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const l = T0.prototype, U = (Q) => t(Q, Kd).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && Q.hasSomethingToControl(), d = (Q, {
      target: V
    }) => {
      if (V instanceof HTMLInputElement) {
        const {
          type: c
        } = V;
        return c !== "text" && c !== "number";
      }
      return !0;
    }, Z = this.TRANSLATE_SMALL, F = this.TRANSLATE_BIG;
    return Fl(this, "_keyboardManager", new EV([[["ctrl+a", "mac+meta+a"], l.selectAll, {
      checker: d
    }], [["ctrl+z", "mac+meta+z"], l.undo, {
      checker: d
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], l.redo, {
      checker: d
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], l.delete, {
      checker: d
    }], [["Enter", "mac+Enter"], l.addNewEditorFromKeyboard, {
      checker: (Q, {
        target: V
      }) => !(V instanceof HTMLButtonElement) && t(Q, Kd).contains(V) && !Q.isEnterHandled
    }], [[" ", "mac+ "], l.addNewEditorFromKeyboard, {
      checker: (Q, {
        target: V
      }) => !(V instanceof HTMLButtonElement) && t(Q, Kd).contains(document.activeElement)
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
    (l = t(this, u0)) == null || l.abort(), h(this, u0, null), this._signal = null, this._eventBus._off("editingaction", t(this, Gt)), this._eventBus._off("pagechanging", t(this, Tt)), this._eventBus._off("scalechanging", t(this, St)), this._eventBus._off("rotationchanging", t(this, Xt));
    for (const Z of t(this, Hl).values())
      Z.destroy();
    t(this, Hl).clear(), t(this, Dl).clear(), t(this, hF).clear(), h(this, yU, null), t(this, Rl).clear(), t(this, qU).destroy(), (U = t(this, p0)) == null || U.destroy(), (d = t(this, id)) == null || d.hide(), h(this, id, null), t(this, hd) && (clearTimeout(t(this, hd)), h(this, hd, null)), t(this, md) && (clearTimeout(t(this, md)), h(this, md, null));
  }
  async mlGuess(l) {
    var U;
    return ((U = t(this, L0)) == null ? void 0 : U.guess(l)) || null;
  }
  get hasMLManager() {
    return !!t(this, L0);
  }
  get hcmFilter() {
    return Fl(this, "hcmFilter", t(this, mF) ? t(this, Rt).addHCMFilter(t(this, mF).foreground, t(this, mF).background) : "none");
  }
  get direction() {
    return Fl(this, "direction", getComputedStyle(t(this, Kd)).direction);
  }
  get highlightColors() {
    return Fl(this, "highlightColors", t(this, z0) ? new Map(t(this, z0).split(",").map((l) => l.split("=").map((U) => U.trim()))) : null);
  }
  get highlightColorNames() {
    return Fl(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (l) => l.reverse())) : null);
  }
  setMainHighlightColorPicker(l) {
    h(this, nt, l);
  }
  editAltText(l) {
    var U;
    (U = t(this, p0)) == null || U.editAltText(this, l);
  }
  onPageChanging({
    pageNumber: l
  }) {
    h(this, o0, l - 1);
  }
  focusMainContainer() {
    t(this, Kd).focus();
  }
  findParent(l, U) {
    for (const d of t(this, Hl).values()) {
      const {
        x: Z,
        y: F,
        width: Q,
        height: V
      } = d.div.getBoundingClientRect();
      if (l >= Z && l <= Z + Q && U >= F && U <= F + V)
        return d;
    }
    return null;
  }
  disableUserSelect(l = !1) {
    t(this, Bt).classList.toggle("noUserSelect", l);
  }
  addShouldRescale(l) {
    t(this, hF).add(l);
  }
  removeShouldRescale(l) {
    t(this, hF).delete(l);
  }
  onScaleChanging({
    scale: l
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = l * AZ.PDF_TO_CSS_UNITS;
    for (const U of t(this, hF))
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
      focusOffset: Q
    } = U, V = U.toString(), R = i(this, L, UW).call(this, U).closest(".textLayer"), N = this.getSelectionBoxes(R);
    if (N) {
      U.empty(), t(this, vl) === dl.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: dl.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const n of t(this, Hl).values())
        if (n.hasTextLayer(R)) {
          n.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: l,
            boxes: N,
            anchorNode: d,
            anchorOffset: Z,
            focusNode: F,
            focusOffset: Q,
            text: V
          });
          break;
        }
    }
  }
  addToAnnotationStorage(l) {
    !l.isEmpty() && t(this, rd) && !t(this, rd).has(l.id) && t(this, rd).setValue(l.id, l);
  }
  blur() {
    if (this.isShiftKeyDown = !1, t(this, pZ) && (h(this, pZ, !1), i(this, L, dW).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: l
    } = document;
    for (const U of t(this, Rl))
      if (U.div.contains(l)) {
        h(this, iF, [U, l]), U._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!t(this, iF))
      return;
    const [l, U] = t(this, iF);
    h(this, iF, null), U.addEventListener("focusin", () => {
      l._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), U.focus();
  }
  addEditListeners() {
    i(this, L, qc).call(this), i(this, L, $c).call(this);
  }
  removeEditListeners() {
    i(this, L, Pn).call(this), i(this, L, lR).call(this);
  }
  dragOver(l) {
    for (const {
      type: U
    } of l.dataTransfer.items)
      for (const d of t(this, $U))
        if (d.isHandlingMimeForPasting(U)) {
          l.dataTransfer.dropEffect = "copy", l.preventDefault();
          return;
        }
  }
  drop(l) {
    for (const U of l.dataTransfer.items)
      for (const d of t(this, $U))
        if (d.isHandlingMimeForPasting(U.type)) {
          d.paste(U, this.currentLayer), l.preventDefault();
          return;
        }
  }
  copy(l) {
    var d;
    if (l.preventDefault(), (d = t(this, yU)) == null || d.commitOrRemove(), !this.hasSelection)
      return;
    const U = [];
    for (const Z of t(this, Rl)) {
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
      for (const Q of t(this, $U))
        if (Q.isHandlingMimeForPasting(F.type)) {
          Q.paste(F, this.currentLayer);
          return;
        }
    let d = U.getData("application/pdfjs");
    if (!d)
      return;
    try {
      d = JSON.parse(d);
    } catch (F) {
      _(`paste: "${F.message}".`);
      return;
    }
    if (!Array.isArray(d))
      return;
    this.unselectAll();
    const Z = this.currentLayer;
    try {
      const F = [];
      for (const c of d) {
        const R = Z.deserialize(c);
        if (!R)
          return;
        F.push(R);
      }
      const Q = () => {
        for (const c of F)
          i(this, L, UR).call(this, c);
        i(this, L, dR).call(this, F);
      }, V = () => {
        for (const c of F)
          c.remove();
      };
      this.addCommands({
        cmd: Q,
        undo: V,
        mustExec: !0
      });
    } catch (F) {
      _(`paste: "${F.message}".`);
    }
  }
  keydown(l) {
    !this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !0), t(this, vl) !== dl.NONE && !this.isEditorHandlingKeyboard && T0._keyboardManager.exec(this, l);
  }
  keyup(l) {
    this.isShiftKeyDown && l.key === "Shift" && (this.isShiftKeyDown = !1, t(this, pZ) && (h(this, pZ, !1), i(this, L, dW).call(this, "main_toolbar")));
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
    l ? (i(this, L, Hn).call(this), i(this, L, $c).call(this), i(this, L, cU).call(this, {
      isEditing: t(this, vl) !== dl.NONE,
      isEmpty: i(this, L, kQ).call(this),
      hasSomethingToUndo: t(this, qU).hasSomethingToUndo(),
      hasSomethingToRedo: t(this, qU).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (i(this, L, vn).call(this), i(this, L, lR).call(this), i(this, L, cU).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(l) {
    if (!t(this, $U)) {
      h(this, $U, l);
      for (const U of t(this, $U))
        i(this, L, TZ).call(this, U.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return t(this, PW).id;
  }
  get currentLayer() {
    return t(this, Hl).get(t(this, o0));
  }
  getLayer(l) {
    return t(this, Hl).get(l);
  }
  get currentPageIndex() {
    return t(this, o0);
  }
  addLayer(l) {
    t(this, Hl).set(l.pageIndex, l), t(this, yZ) ? l.enable() : l.disable();
  }
  removeLayer(l) {
    t(this, Hl).delete(l.pageIndex);
  }
  updateMode(l, U = null, d = !1) {
    if (t(this, vl) !== l) {
      if (h(this, vl, l), l === dl.NONE) {
        this.setEditingState(!1), i(this, L, _n).call(this);
        return;
      }
      this.setEditingState(!0), i(this, L, An).call(this), this.unselectAll();
      for (const Z of t(this, Hl).values())
        Z.updateMode(l);
      if (!U && d) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (U) {
        for (const Z of t(this, Dl).values())
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
    l !== t(this, vl) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: l
    });
  }
  updateParams(l, U) {
    var d;
    if (t(this, $U)) {
      switch (l) {
        case H.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case H.HIGHLIGHT_DEFAULT_COLOR:
          (d = t(this, nt)) == null || d.updateColor(U);
          break;
        case H.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (t(this, st) || h(this, st, /* @__PURE__ */ new Map())).set(l, U), this.showAllEditors("highlight", U);
          break;
      }
      for (const Z of t(this, Rl))
        Z.updateParams(l, U);
      for (const Z of t(this, $U))
        Z.updateDefaultParams(l, U);
    }
  }
  showAllEditors(l, U, d = !1) {
    var F;
    for (const Q of t(this, Dl).values())
      Q.editorType === l && Q.show(U);
    (((F = t(this, st)) == null ? void 0 : F.get(H.HIGHLIGHT_SHOW_ALL)) ?? !0) !== U && i(this, L, TZ).call(this, [[H.HIGHLIGHT_SHOW_ALL, U]]);
  }
  enableWaiting(l = !1) {
    if (t(this, Nt) !== l) {
      h(this, Nt, l);
      for (const U of t(this, Hl).values())
        l ? U.disableClick() : U.enableClick(), U.div.classList.toggle("waiting", l);
    }
  }
  getEditors(l) {
    const U = [];
    for (const d of t(this, Dl).values())
      d.pageIndex === l && U.push(d);
    return U;
  }
  getEditor(l) {
    return t(this, Dl).get(l);
  }
  addEditor(l) {
    t(this, Dl).set(l.id, l);
  }
  removeEditor(l) {
    var U;
    l.div.contains(document.activeElement) && (t(this, hd) && clearTimeout(t(this, hd)), h(this, hd, setTimeout(() => {
      this.focusMainContainer(), h(this, hd, null);
    }, 0))), t(this, Dl).delete(l.id), this.unselect(l), (!l.annotationElementId || !t(this, bF).has(l.annotationElementId)) && ((U = t(this, rd)) == null || U.remove(l.id));
  }
  addDeletedAnnotationElement(l) {
    t(this, bF).add(l.annotationElementId), this.addChangedExistingAnnotation(l), l.deleted = !0;
  }
  isDeletedAnnotationElement(l) {
    return t(this, bF).has(l);
  }
  removeDeletedAnnotationElement(l) {
    t(this, bF).delete(l.annotationElementId), this.removeChangedExistingAnnotation(l), l.deleted = !1;
  }
  setActiveEditor(l) {
    t(this, yU) !== l && (h(this, yU, l), l && i(this, L, TZ).call(this, l.propertiesToUpdate));
  }
  updateUI(l) {
    t(this, L, qn) === l && i(this, L, TZ).call(this, l.propertiesToUpdate);
  }
  toggleSelected(l) {
    if (t(this, Rl).has(l)) {
      t(this, Rl).delete(l), l.unselect(), i(this, L, cU).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    t(this, Rl).add(l), l.select(), i(this, L, TZ).call(this, l.propertiesToUpdate), i(this, L, cU).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(l) {
    for (const U of t(this, Rl))
      U !== l && U.unselect();
    t(this, Rl).clear(), t(this, Rl).add(l), l.select(), i(this, L, TZ).call(this, l.propertiesToUpdate), i(this, L, cU).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(l) {
    return t(this, Rl).has(l);
  }
  get firstSelectedEditor() {
    return t(this, Rl).values().next().value;
  }
  unselect(l) {
    l.unselect(), t(this, Rl).delete(l), i(this, L, cU).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return t(this, Rl).size !== 0;
  }
  get isEnterHandled() {
    return t(this, Rl).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    t(this, qU).undo(), i(this, L, cU).call(this, {
      hasSomethingToUndo: t(this, qU).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: i(this, L, kQ).call(this)
    });
  }
  redo() {
    t(this, qU).redo(), i(this, L, cU).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: t(this, qU).hasSomethingToRedo(),
      isEmpty: i(this, L, kQ).call(this)
    });
  }
  addCommands(l) {
    t(this, qU).add(l), i(this, L, cU).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: i(this, L, kQ).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const l = [...t(this, Rl)], U = () => {
      for (const Z of l)
        Z.remove();
    }, d = () => {
      for (const Z of l)
        i(this, L, UR).call(this, Z);
    };
    this.addCommands({
      cmd: U,
      undo: d,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var l;
    (l = t(this, yU)) == null || l.commitOrRemove();
  }
  hasSomethingToControl() {
    return t(this, yU) || this.hasSelection;
  }
  selectAll() {
    for (const l of t(this, Rl))
      l.commit();
    i(this, L, dR).call(this, t(this, Dl).values());
  }
  unselectAll() {
    if (!(t(this, yU) && (t(this, yU).commitOrRemove(), t(this, vl) !== dl.NONE)) && this.hasSelection) {
      for (const l of t(this, Rl))
        l.unselect();
      t(this, Rl).clear(), i(this, L, cU).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(l, U, d = !1) {
    if (d || this.commitOrRemove(), !this.hasSelection)
      return;
    t(this, oZ)[0] += l, t(this, oZ)[1] += U;
    const [Z, F] = t(this, oZ), Q = [...t(this, Rl)], V = 1e3;
    t(this, md) && clearTimeout(t(this, md)), h(this, md, setTimeout(() => {
      h(this, md, null), t(this, oZ)[0] = t(this, oZ)[1] = 0, this.addCommands({
        cmd: () => {
          for (const c of Q)
            t(this, Dl).has(c.id) && c.translateInPage(Z, F);
        },
        undo: () => {
          for (const c of Q)
            t(this, Dl).has(c.id) && c.translateInPage(-Z, -F);
        },
        mustExec: !1
      });
    }, V));
    for (const c of Q)
      c.translateInPage(l, U);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), h(this, bd, /* @__PURE__ */ new Map());
      for (const l of t(this, Rl))
        t(this, bd).set(l, {
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
    if (!t(this, bd))
      return !1;
    this.disableUserSelect(!1);
    const l = t(this, bd);
    h(this, bd, null);
    let U = !1;
    for (const [{
      x: Z,
      y: F,
      pageIndex: Q
    }, V] of l)
      V.newX = Z, V.newY = F, V.newPageIndex = Q, U || (U = Z !== V.savedX || F !== V.savedY || Q !== V.savedPageIndex);
    if (!U)
      return !1;
    const d = (Z, F, Q, V) => {
      if (t(this, Dl).has(Z.id)) {
        const c = t(this, Hl).get(V);
        c ? Z._setParentAndPosition(c, F, Q) : (Z.pageIndex = V, Z.x = F, Z.y = Q);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [Z, {
          newX: F,
          newY: Q,
          newPageIndex: V
        }] of l)
          d(Z, F, Q, V);
      },
      undo: () => {
        for (const [Z, {
          savedX: F,
          savedY: Q,
          savedPageIndex: V
        }] of l)
          d(Z, F, Q, V);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(l, U) {
    if (t(this, bd))
      for (const d of t(this, bd).keys())
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
    return ((l = this.getActive()) == null ? void 0 : l.shouldGetKeyboardEvents()) || t(this, Rl).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(l) {
    return t(this, yU) === l;
  }
  getActive() {
    return t(this, yU);
  }
  getMode() {
    return t(this, vl);
  }
  get imageManager() {
    return Fl(this, "imageManager", new fc());
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
      height: Q
    } = l.getBoundingClientRect();
    let V;
    switch (l.getAttribute("data-main-rotation")) {
      case "90":
        V = (R, N, n, s) => ({
          x: (N - Z) / Q,
          y: 1 - (R + n - d) / F,
          width: s / Q,
          height: n / F
        });
        break;
      case "180":
        V = (R, N, n, s) => ({
          x: 1 - (R + n - d) / F,
          y: 1 - (N + s - Z) / Q,
          width: n / F,
          height: s / Q
        });
        break;
      case "270":
        V = (R, N, n, s) => ({
          x: 1 - (N + s - Z) / Q,
          y: (R - d) / F,
          width: s / Q,
          height: n / F
        });
        break;
      default:
        V = (R, N, n, s) => ({
          x: (R - d) / F,
          y: (N - Z) / Q,
          width: n / F,
          height: s / Q
        });
        break;
    }
    const c = [];
    for (let R = 0, N = U.rangeCount; R < N; R++) {
      const n = U.getRangeAt(R);
      if (!n.collapsed)
        for (const {
          x: s,
          y: a,
          width: b,
          height: M
        } of n.getClientRects())
          b === 0 || M === 0 || c.push(V(s, a, b, M));
    }
    return c.length === 0 ? null : c;
  }
  addChangedExistingAnnotation({
    annotationElementId: l,
    id: U
  }) {
    (t(this, y0) || h(this, y0, /* @__PURE__ */ new Map())).set(l, U);
  }
  removeChangedExistingAnnotation({
    annotationElementId: l
  }) {
    var U;
    (U = t(this, y0)) == null || U.delete(l);
  }
  renderAnnotationElement(l) {
    var Z;
    const U = (Z = t(this, y0)) == null ? void 0 : Z.get(l.data.id);
    if (!U)
      return;
    const d = t(this, rd).getRawValue(U);
    d && (t(this, vl) === dl.NONE && !d.hasBeenModified || d.renderAnnotationElement(l));
  }
};
u0 = new WeakMap(), yU = new WeakMap(), Dl = new WeakMap(), Hl = new WeakMap(), p0 = new WeakMap(), rd = new WeakMap(), y0 = new WeakMap(), qU = new WeakMap(), o0 = new WeakMap(), bF = new WeakMap(), bd = new WeakMap(), $U = new WeakMap(), hF = new WeakMap(), ct = new WeakMap(), Rt = new WeakMap(), hd = new WeakMap(), z0 = new WeakMap(), pZ = new WeakMap(), id = new WeakMap(), PW = new WeakMap(), yZ = new WeakMap(), Nt = new WeakMap(), iF = new WeakMap(), nt = new WeakMap(), L0 = new WeakMap(), vl = new WeakMap(), Rl = new WeakMap(), gd = new WeakMap(), mF = new WeakMap(), st = new WeakMap(), at = new WeakMap(), bt = new WeakMap(), ht = new WeakMap(), it = new WeakMap(), mt = new WeakMap(), Mt = new WeakMap(), Jt = new WeakMap(), Gt = new WeakMap(), Tt = new WeakMap(), St = new WeakMap(), Xt = new WeakMap(), Yt = new WeakMap(), oZ = new WeakMap(), md = new WeakMap(), Kd = new WeakMap(), Bt = new WeakMap(), L = new WeakSet(), UW = function({
  anchorNode: l
}) {
  return l.nodeType === Node.TEXT_NODE ? l.parentElement : l;
}, rn = function() {
  const l = document.getSelection();
  if (!l || l.isCollapsed)
    return;
  const d = i(this, L, UW).call(this, l).closest(".textLayer"), Z = this.getSelectionBoxes(d);
  Z && (t(this, id) || h(this, id, new lh(this)), t(this, id).show(d, Z, this.direction === "ltr"));
}, gn = function() {
  var F, Q, V;
  const l = document.getSelection();
  if (!l || l.isCollapsed) {
    t(this, gd) && ((F = t(this, id)) == null || F.hide(), h(this, gd, null), i(this, L, cU).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: U
  } = l;
  if (U === t(this, gd))
    return;
  if (!i(this, L, UW).call(this, l).closest(".textLayer")) {
    t(this, gd) && ((Q = t(this, id)) == null || Q.hide(), h(this, gd, null), i(this, L, cU).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((V = t(this, id)) == null || V.hide(), h(this, gd, U), i(this, L, cU).call(this, {
    hasSelectedText: !0
  }), !(t(this, vl) !== dl.HIGHLIGHT && t(this, vl) !== dl.NONE) && (t(this, vl) === dl.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), h(this, pZ, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const c = this._signal, R = (N) => {
      N.type === "pointerup" && N.button !== 0 || (window.removeEventListener("pointerup", R), window.removeEventListener("blur", R), N.type === "pointerup" && i(this, L, dW).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", R, {
      signal: c
    }), window.addEventListener("blur", R, {
      signal: c
    });
  }
}, dW = function(l = "") {
  t(this, vl) === dl.HIGHLIGHT ? this.highlightSelection(l) : t(this, ct) && i(this, L, rn).call(this);
}, Kn = function() {
  document.addEventListener("selectionchange", i(this, L, gn).bind(this), {
    signal: this._signal
  });
}, Hn = function() {
  const l = this._signal;
  window.addEventListener("focus", t(this, bt), {
    signal: l
  }), window.addEventListener("blur", t(this, at), {
    signal: l
  });
}, vn = function() {
  window.removeEventListener("focus", t(this, bt)), window.removeEventListener("blur", t(this, at));
}, qc = function() {
  const l = this._signal;
  window.addEventListener("keydown", t(this, Mt), {
    signal: l
  }), window.addEventListener("keyup", t(this, Jt), {
    signal: l
  });
}, Pn = function() {
  window.removeEventListener("keydown", t(this, Mt)), window.removeEventListener("keyup", t(this, Jt));
}, $c = function() {
  const l = this._signal;
  document.addEventListener("copy", t(this, ht), {
    signal: l
  }), document.addEventListener("cut", t(this, it), {
    signal: l
  }), document.addEventListener("paste", t(this, mt), {
    signal: l
  });
}, lR = function() {
  document.removeEventListener("copy", t(this, ht)), document.removeEventListener("cut", t(this, it)), document.removeEventListener("paste", t(this, mt));
}, fn = function() {
  const l = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: l
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: l
  });
}, cU = function(l) {
  Object.entries(l).some(([d, Z]) => t(this, Yt)[d] !== Z) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(t(this, Yt), l)
  }), t(this, vl) === dl.HIGHLIGHT && l.hasSelectedEditor === !1 && i(this, L, TZ).call(this, [[H.HIGHLIGHT_FREE, !0]]));
}, TZ = function(l) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: l
  });
}, An = function() {
  if (!t(this, yZ)) {
    h(this, yZ, !0);
    for (const l of t(this, Hl).values())
      l.enable();
    for (const l of t(this, Dl).values())
      l.enable();
  }
}, _n = function() {
  if (this.unselectAll(), t(this, yZ)) {
    h(this, yZ, !1);
    for (const l of t(this, Hl).values())
      l.disable();
    for (const l of t(this, Dl).values())
      l.disable();
  }
}, UR = function(l) {
  const U = t(this, Hl).get(l.pageIndex);
  U ? U.addOrRebuild(l) : (this.addEditor(l), this.addToAnnotationStorage(l));
}, qn = function() {
  let l = null;
  for (l of t(this, Rl))
    ;
  return l;
}, kQ = function() {
  if (t(this, Dl).size === 0)
    return !0;
  if (t(this, Dl).size === 1)
    for (const l of t(this, Dl).values())
      return l.isEmpty();
  return !1;
}, dR = function(l) {
  for (const U of t(this, Rl))
    U.unselect();
  t(this, Rl).clear();
  for (const U of l)
    U.isEmpty() || (t(this, Rl).add(U), U.select());
  i(this, L, cU).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, f(T0, "TRANSLATE_SMALL", 1), f(T0, "TRANSLATE_BIG", 10);
let Q0 = T0;
var Hd, vd, ld, Pd, oU, k0, Ud, et, ZR;
const Cd = class Cd {
  constructor(l) {
    m(this, et);
    m(this, Hd, "");
    m(this, vd, !1);
    m(this, ld, null);
    m(this, Pd, null);
    m(this, oU, null);
    m(this, k0, !1);
    m(this, Ud, null);
    h(this, Ud, l);
  }
  static initialize(l) {
    Cd._l10nPromise || (Cd._l10nPromise = l);
  }
  async render() {
    const l = h(this, ld, document.createElement("button"));
    l.className = "altText";
    const U = await Cd._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    l.textContent = U, l.setAttribute("aria-label", U), l.tabIndex = "0";
    const d = t(this, Ud)._uiManager._signal;
    l.addEventListener("contextmenu", SU, {
      signal: d
    }), l.addEventListener("pointerdown", (F) => F.stopPropagation(), {
      signal: d
    });
    const Z = (F) => {
      F.preventDefault(), t(this, Ud)._uiManager.editAltText(t(this, Ud));
    };
    return l.addEventListener("click", Z, {
      capture: !0,
      signal: d
    }), l.addEventListener("keydown", (F) => {
      F.target === l && F.key === "Enter" && (h(this, k0, !0), Z(F));
    }, {
      signal: d
    }), await i(this, et, ZR).call(this), l;
  }
  finish() {
    t(this, ld) && (t(this, ld).focus({
      focusVisible: t(this, k0)
    }), h(this, k0, !1));
  }
  isEmpty() {
    return !t(this, Hd) && !t(this, vd);
  }
  get data() {
    return {
      altText: t(this, Hd),
      decorative: t(this, vd)
    };
  }
  set data({
    altText: l,
    decorative: U
  }) {
    t(this, Hd) === l && t(this, vd) === U || (h(this, Hd, l), h(this, vd, U), i(this, et, ZR).call(this));
  }
  toggle(l = !1) {
    t(this, ld) && (!l && t(this, oU) && (clearTimeout(t(this, oU)), h(this, oU, null)), t(this, ld).disabled = !l);
  }
  destroy() {
    var l;
    (l = t(this, ld)) == null || l.remove(), h(this, ld, null), h(this, Pd, null);
  }
};
Hd = new WeakMap(), vd = new WeakMap(), ld = new WeakMap(), Pd = new WeakMap(), oU = new WeakMap(), k0 = new WeakMap(), Ud = new WeakMap(), et = new WeakSet(), ZR = async function() {
  var Z;
  const l = t(this, ld);
  if (!l)
    return;
  if (!t(this, Hd) && !t(this, vd)) {
    l.classList.remove("done"), (Z = t(this, Pd)) == null || Z.remove();
    return;
  }
  l.classList.add("done"), Cd._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((F) => {
    l.setAttribute("aria-label", F);
  });
  let U = t(this, Pd);
  if (!U) {
    h(this, Pd, U = document.createElement("span")), U.className = "tooltip", U.setAttribute("role", "tooltip");
    const F = U.id = `alt-text-tooltip-${t(this, Ud).id}`;
    l.setAttribute("aria-describedby", F);
    const Q = 100, V = t(this, Ud)._uiManager._signal;
    V.addEventListener("abort", () => {
      clearTimeout(t(this, oU)), h(this, oU, null);
    }, {
      once: !0
    }), l.addEventListener("mouseenter", () => {
      h(this, oU, setTimeout(() => {
        h(this, oU, null), t(this, Pd).classList.add("show"), t(this, Ud)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, Q));
    }, {
      signal: V
    }), l.addEventListener("mouseleave", () => {
      var c;
      t(this, oU) && (clearTimeout(t(this, oU)), h(this, oU, null)), (c = t(this, Pd)) == null || c.classList.remove("show");
    }, {
      signal: V
    });
  }
  U.innerText = t(this, vd) ? await Cd._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : t(this, Hd), U.parentNode || l.append(U);
  const d = t(this, Ud).getImageForAltText();
  d == null || d.setAttribute("aria-describedby", U.id);
}, f(Cd, "_l10nPromise", null);
let oW = Cd;
var MF, dd, tU, D0, JF, Pl, GF, I0, E0, VU, ut, TF, zZ, pt, SF, fd, Md, C0, w0, rU, yt, fW, q, FR, ot, QR, tR, $n, ls, VR, WR, cR, Us, ds, Zs, Fs, RR, DQ;
const bl = class bl {
  constructor(l) {
    m(this, q);
    m(this, MF, null);
    m(this, dd, null);
    m(this, tU, null);
    m(this, D0, !1);
    m(this, JF, !1);
    m(this, Pl, null);
    m(this, GF, null);
    m(this, I0, this.focusin.bind(this));
    m(this, E0, this.focusout.bind(this));
    m(this, VU, null);
    m(this, ut, "");
    m(this, TF, !1);
    m(this, zZ, null);
    m(this, pt, !1);
    m(this, SF, !1);
    m(this, fd, !1);
    m(this, Md, null);
    m(this, C0, 0);
    m(this, w0, 0);
    m(this, rU, null);
    f(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    f(this, "_isVisible", !0);
    f(this, "_uiManager", null);
    f(this, "_focusEventsAllowed", !0);
    f(this, "_l10nPromise", null);
    m(this, yt, !1);
    m(this, fW, bl._zIndex++);
    this.constructor === bl && sl("Cannot initialize AnnotationEditor."), this.parent = l.parent, this.id = l.id, this.width = this.height = null, this.pageIndex = l.parent.pageIndex, this.name = l.name, this.div = null, this._uiManager = l.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = l.isCentered, this._structTreeParentId = null;
    const {
      rotation: U,
      rawDims: {
        pageWidth: d,
        pageHeight: Z,
        pageX: F,
        pageY: Q
      }
    } = this.parent.viewport;
    this.rotation = U, this.pageRotation = (360 + U - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [d, Z], this.pageTranslation = [F, Q];
    const [V, c] = this.parentDimensions;
    this.x = l.x / V, this.y = l.y / c, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const l = bl.prototype._resizeWithKeyboard, U = Q0.TRANSLATE_SMALL, d = Q0.TRANSLATE_BIG;
    return Fl(this, "_resizerKeyboardManager", new EV([[["ArrowLeft", "mac+ArrowLeft"], l, {
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
    }], [["Escape", "mac+Escape"], bl.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return Fl(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(l) {
    const U = new Fh({
      id: l.parent.getNextId(),
      parent: l.parent,
      uiManager: l._uiManager
    });
    U.annotationElementId = l.annotationElementId, U.deleted = !0, U._uiManager.addToAnnotationStorage(U);
  }
  static initialize(l, U, d) {
    if (bl._l10nPromise || (bl._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((F) => [F, l.get(F.replaceAll(/([A-Z])/g, (Q) => `-${Q.toLowerCase()}`))]))), d != null && d.strings)
      for (const F of d.strings)
        bl._l10nPromise.set(F, l.get(F));
    if (bl._borderLineWidth !== -1)
      return;
    const Z = getComputedStyle(document.documentElement);
    bl._borderLineWidth = parseFloat(Z.getPropertyValue("--outline-width")) || 0;
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
    sl("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return t(this, yt);
  }
  set _isDraggable(l) {
    var U;
    h(this, yt, l), (U = this.div) == null || U.classList.toggle("draggable", l);
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
    this.div.style.zIndex = t(this, fW);
  }
  setParent(l) {
    l !== null ? (this.pageIndex = l.pageIndex, this.pageDimensions = l.pageDimensions) : i(this, q, DQ).call(this), this.parent = l;
  }
  focusin(l) {
    this._focusEventsAllowed && (t(this, TF) ? h(this, TF, !1) : this.parent.setSelected(this));
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
    const [F, Q] = this.parentDimensions;
    [d, Z] = this.screenToPageTranslation(d, Z), this.x = (l + d) / F, this.y = (U + Z) / Q, this.fixAndSetPosition();
  }
  translate(l, U) {
    i(this, q, FR).call(this, this.parentDimensions, l, U);
  }
  translateInPage(l, U) {
    t(this, zZ) || h(this, zZ, [this.x, this.y]), i(this, q, FR).call(this, this.pageDimensions, l, U), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(l, U) {
    t(this, zZ) || h(this, zZ, [this.x, this.y]);
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
      y: Q
    } = this;
    const [V, c] = this.getBaseTranslation();
    F += V, Q += c, this.div.style.left = `${(100 * F).toFixed(2)}%`, this.div.style.top = `${(100 * Q).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!t(this, zZ) && (t(this, zZ)[0] !== this.x || t(this, zZ)[1] !== this.y);
  }
  getBaseTranslation() {
    const [l, U] = this.parentDimensions, {
      _borderLineWidth: d
    } = bl, Z = d / l, F = d / U;
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
      width: Q,
      height: V
    } = this;
    if (Q *= U, V *= d, Z *= U, F *= d, this._mustFixPosition)
      switch (l) {
        case 0:
          Z = Math.max(0, Math.min(U - Q, Z)), F = Math.max(0, Math.min(d - V, F));
          break;
        case 90:
          Z = Math.max(0, Math.min(U - V, Z)), F = Math.min(d, Math.max(Q, F));
          break;
        case 180:
          Z = Math.min(U, Math.max(Q, Z)), F = Math.min(d, Math.max(V, F));
          break;
        case 270:
          Z = Math.min(U, Math.max(V, Z)), F = Math.max(0, Math.min(d - Q, F));
          break;
      }
    this.x = Z /= U, this.y = F /= d;
    const [c, R] = this.getBaseTranslation();
    Z += c, F += R;
    const {
      style: N
    } = this.div;
    N.left = `${(100 * Z).toFixed(2)}%`, N.top = `${(100 * F).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(l, U) {
    var d;
    return i(d = bl, ot, QR).call(d, l, U, this.parentRotation);
  }
  pageTranslationToScreen(l, U) {
    var d;
    return i(d = bl, ot, QR).call(d, l, U, 360 - this.parentRotation);
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
    return GU.isCSSRoundSupported ? [Math.round(Z), Math.round(F)] : [Z, F];
  }
  setDims(l, U) {
    const [d, Z] = this.parentDimensions;
    this.div.style.width = `${(100 * l / d).toFixed(2)}%`, t(this, JF) || (this.div.style.height = `${(100 * U / Z).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: l
    } = this.div, {
      height: U,
      width: d
    } = l, Z = d.endsWith("%"), F = !t(this, JF) && U.endsWith("%");
    if (Z && F)
      return;
    const [Q, V] = this.parentDimensions;
    Z || (l.width = `${(100 * parseFloat(d) / Q).toFixed(2)}%`), !t(this, JF) && !F && (l.height = `${(100 * parseFloat(U) / V).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var l;
    (l = t(this, tU)) == null || l.finish();
  }
  async addEditToolbar() {
    return t(this, VU) || t(this, SF) ? t(this, VU) : (h(this, VU, new vc(this)), this.div.append(t(this, VU).render()), t(this, tU) && t(this, VU).addAltTextButton(await t(this, tU).render()), t(this, VU));
  }
  removeEditToolbar() {
    var l;
    t(this, VU) && (t(this, VU).remove(), h(this, VU, null), (l = t(this, tU)) == null || l.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    t(this, tU) || (oW.initialize(bl._l10nPromise), h(this, tU, new oW(this)), t(this, MF) && (t(this, tU).data = t(this, MF), h(this, MF, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var l;
    return (l = t(this, tU)) == null ? void 0 : l.data;
  }
  set altTextData(l) {
    t(this, tU) && (t(this, tU).data = l);
  }
  hasAltText() {
    var l;
    return !((l = t(this, tU)) != null && l.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = t(this, D0) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground();
    const l = this._uiManager._signal;
    this.div.addEventListener("focusin", t(this, I0), {
      signal: l
    }), this.div.addEventListener("focusout", t(this, E0), {
      signal: l
    });
    const [U, d] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * d / U).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * U / d).toFixed(2)}%`);
    const [Z, F] = this.getInitialTranslation();
    return this.translate(Z, F), yW(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(l) {
    const {
      isMac: U
    } = GU.platform;
    if (l.button !== 0 || l.ctrlKey && U) {
      l.preventDefault();
      return;
    }
    if (h(this, TF, !0), this._isDraggable) {
      i(this, q, Us).call(this, l);
      return;
    }
    i(this, q, cR).call(this, l);
  }
  moveInDOM() {
    t(this, Md) && clearTimeout(t(this, Md)), h(this, Md, setTimeout(() => {
      var l;
      h(this, Md, null), (l = this.parent) == null || l.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(l, U, d) {
    l.changeParent(this), this.x = U, this.y = d, this.fixAndSetPosition();
  }
  getRect(l, U, d = this.rotation) {
    const Z = this.parentScale, [F, Q] = this.pageDimensions, [V, c] = this.pageTranslation, R = l / Z, N = U / Z, n = this.x * F, s = this.y * Q, a = this.width * F, b = this.height * Q;
    switch (d) {
      case 0:
        return [n + R + V, Q - s - N - b + c, n + R + a + V, Q - s - N + c];
      case 90:
        return [n + N + V, Q - s + R + c, n + N + b + V, Q - s + R + a + c];
      case 180:
        return [n - R - a + V, Q - s + N + c, n - R + V, Q - s + N + b + c];
      case 270:
        return [n - N - b + V, Q - s - R - a + c, n - N + V, Q - s - R + c];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(l, U) {
    const [d, Z, F, Q] = l, V = F - d, c = Q - Z;
    switch (this.rotation) {
      case 0:
        return [d, U - Q, V, c];
      case 90:
        return [d, U - Z, c, V];
      case 180:
        return [F, U - Z, V, c];
      case 270:
        return [F, U - Q, c, V];
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
    h(this, SF, !0);
  }
  disableEditMode() {
    h(this, SF, !1);
  }
  isInEditMode() {
    return t(this, SF);
  }
  shouldGetKeyboardEvents() {
    return t(this, fd);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var U, d;
    const l = this._uiManager._signal;
    (U = this.div) == null || U.addEventListener("focusin", t(this, I0), {
      signal: l
    }), (d = this.div) == null || d.addEventListener("focusout", t(this, E0), {
      signal: l
    });
  }
  rotate(l) {
  }
  serialize(l = !1, U = null) {
    sl("An editor must be serializable");
  }
  static deserialize(l, U, d) {
    const Z = new this.prototype.constructor({
      parent: U,
      id: U.getNextId(),
      uiManager: d
    });
    Z.rotation = l.rotation, h(Z, MF, l.accessibilityData);
    const [F, Q] = Z.pageDimensions, [V, c, R, N] = Z.getRectInCurrentCoords(l.rect, Q);
    return Z.x = V / F, Z.y = c / Q, Z.width = R / F, Z.height = N / Q, Z;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", t(this, I0)), this.div.removeEventListener("focusout", t(this, E0)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), t(this, Md) && (clearTimeout(t(this, Md)), h(this, Md, null)), i(this, q, DQ).call(this), this.removeEditToolbar(), t(this, rU)) {
      for (const l of t(this, rU).values())
        clearTimeout(l);
      h(this, rU, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (i(this, q, $n).call(this), t(this, Pl).classList.remove("hidden"), yW(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(l) {
    if (!this.isResizable || l.target !== this.div || l.key !== "Enter")
      return;
    this._uiManager.setSelected(this), h(this, GF, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const U = t(this, Pl).children;
    if (!t(this, dd)) {
      h(this, dd, Array.from(U));
      const Q = i(this, q, ds).bind(this), V = i(this, q, Zs).bind(this), c = this._uiManager._signal;
      for (const R of t(this, dd)) {
        const N = R.getAttribute("data-resizer-name");
        R.setAttribute("role", "spinbutton"), R.addEventListener("keydown", Q, {
          signal: c
        }), R.addEventListener("blur", V, {
          signal: c
        }), R.addEventListener("focus", i(this, q, Fs).bind(this, N), {
          signal: c
        }), bl._l10nPromise.get(`pdfjs-editor-resizer-label-${N}`).then((n) => R.setAttribute("aria-label", n));
      }
    }
    const d = t(this, dd)[0];
    let Z = 0;
    for (const Q of U) {
      if (Q === d)
        break;
      Z++;
    }
    const F = (360 - this.rotation + this.parentRotation) % 360 / 90 * (t(this, dd).length / 4);
    if (F !== Z) {
      if (F < Z)
        for (let V = 0; V < Z - F; V++)
          t(this, Pl).append(t(this, Pl).firstChild);
      else if (F > Z)
        for (let V = 0; V < F - Z; V++)
          t(this, Pl).firstChild.before(t(this, Pl).lastChild);
      let Q = 0;
      for (const V of U) {
        const R = t(this, dd)[Q++].getAttribute("data-resizer-name");
        bl._l10nPromise.get(`pdfjs-editor-resizer-label-${R}`).then((N) => V.setAttribute("aria-label", N));
      }
    }
    i(this, q, RR).call(this, 0), h(this, fd, !0), t(this, Pl).firstChild.focus({
      focusVisible: !0
    }), l.preventDefault(), l.stopImmediatePropagation();
  }
  _resizeWithKeyboard(l, U) {
    t(this, fd) && i(this, q, WR).call(this, t(this, ut), {
      movementX: l,
      movementY: U
    });
  }
  _stopResizingWithKeyboard() {
    i(this, q, DQ).call(this), this.div.focus();
  }
  select() {
    var l, U;
    if (this.makeResizable(), (l = this.div) == null || l.classList.add("selectedEditor"), !t(this, VU)) {
      this.addEditToolbar().then(() => {
        var d, Z;
        (d = this.div) != null && d.classList.contains("selectedEditor") && ((Z = t(this, VU)) == null || Z.show());
      });
      return;
    }
    (U = t(this, VU)) == null || U.show();
  }
  unselect() {
    var l, U, d, Z;
    (l = t(this, Pl)) == null || l.classList.add("hidden"), (U = this.div) == null || U.classList.remove("selectedEditor"), (d = this.div) != null && d.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (Z = t(this, VU)) == null || Z.hide();
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
    return t(this, pt);
  }
  set isEditing(l) {
    h(this, pt, l), this.parent && (l ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(l, U) {
    h(this, JF, !0);
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
      t(this, rU) || h(this, rU, /* @__PURE__ */ new Map());
      const {
        action: d
      } = l;
      let Z = t(this, rU).get(d);
      Z && clearTimeout(Z), Z = setTimeout(() => {
        this._reportTelemetry(l), t(this, rU).delete(d), t(this, rU).size === 0 && h(this, rU, null);
      }, bl._telemetryTimeout), t(this, rU).set(d, Z);
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
    this.div && (this.div.tabIndex = 0), h(this, D0, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), h(this, D0, !0);
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
MF = new WeakMap(), dd = new WeakMap(), tU = new WeakMap(), D0 = new WeakMap(), JF = new WeakMap(), Pl = new WeakMap(), GF = new WeakMap(), I0 = new WeakMap(), E0 = new WeakMap(), VU = new WeakMap(), ut = new WeakMap(), TF = new WeakMap(), zZ = new WeakMap(), pt = new WeakMap(), SF = new WeakMap(), fd = new WeakMap(), Md = new WeakMap(), C0 = new WeakMap(), w0 = new WeakMap(), rU = new WeakMap(), yt = new WeakMap(), fW = new WeakMap(), q = new WeakSet(), FR = function([l, U], d, Z) {
  [d, Z] = this.screenToPageTranslation(d, Z), this.x += d / l, this.y += Z / U, this.fixAndSetPosition();
}, ot = new WeakSet(), QR = function(l, U, d) {
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
}, tR = function(l) {
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
}, $n = function() {
  if (t(this, Pl))
    return;
  h(this, Pl, document.createElement("div")), t(this, Pl).classList.add("resizers");
  const l = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], U = this._uiManager._signal;
  for (const d of l) {
    const Z = document.createElement("div");
    t(this, Pl).append(Z), Z.classList.add("resizer", d), Z.setAttribute("data-resizer-name", d), Z.addEventListener("pointerdown", i(this, q, ls).bind(this, d), {
      signal: U
    }), Z.addEventListener("contextmenu", SU, {
      signal: U
    }), Z.tabIndex = -1;
  }
  this.div.prepend(t(this, Pl));
}, ls = function(l, U) {
  var M;
  U.preventDefault();
  const {
    isMac: d
  } = GU.platform;
  if (U.button !== 0 || U.ctrlKey && d)
    return;
  (M = t(this, tU)) == null || M.toggle(!1);
  const Z = i(this, q, WR).bind(this, l), F = this._isDraggable;
  this._isDraggable = !1;
  const Q = this._uiManager._signal, V = {
    passive: !0,
    capture: !0,
    signal: Q
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", Z, V), window.addEventListener("contextmenu", SU, {
    signal: Q
  });
  const c = this.x, R = this.y, N = this.width, n = this.height, s = this.parent.div.style.cursor, a = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(U.target).cursor;
  const b = () => {
    var G;
    this.parent.togglePointerEvents(!0), (G = t(this, tU)) == null || G.toggle(!0), this._isDraggable = F, window.removeEventListener("pointerup", b), window.removeEventListener("blur", b), window.removeEventListener("pointermove", Z, V), window.removeEventListener("contextmenu", SU), this.parent.div.style.cursor = s, this.div.style.cursor = a, i(this, q, VR).call(this, c, R, N, n);
  };
  window.addEventListener("pointerup", b, {
    signal: Q
  }), window.addEventListener("blur", b, {
    signal: Q
  });
}, VR = function(l, U, d, Z) {
  const F = this.x, Q = this.y, V = this.width, c = this.height;
  F === l && Q === U && V === d && c === Z || this.addCommands({
    cmd: () => {
      this.width = V, this.height = c, this.x = F, this.y = Q;
      const [R, N] = this.parentDimensions;
      this.setDims(R * V, N * c), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = d, this.height = Z, this.x = l, this.y = U;
      const [R, N] = this.parentDimensions;
      this.setDims(R * d, N * Z), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, WR = function(l, U) {
  const [d, Z] = this.parentDimensions, F = this.x, Q = this.y, V = this.width, c = this.height, R = bl.MIN_SIZE / d, N = bl.MIN_SIZE / Z, n = (D) => Math.round(D * 1e4) / 1e4, s = i(this, q, tR).call(this, this.rotation), a = (D, x) => [s[0] * D + s[2] * x, s[1] * D + s[3] * x], b = i(this, q, tR).call(this, 360 - this.rotation), M = (D, x) => [b[0] * D + b[2] * x, b[1] * D + b[3] * x];
  let G, J, T = !1, S = !1;
  switch (l) {
    case "topLeft":
      T = !0, G = (D, x) => [0, 0], J = (D, x) => [D, x];
      break;
    case "topMiddle":
      G = (D, x) => [D / 2, 0], J = (D, x) => [D / 2, x];
      break;
    case "topRight":
      T = !0, G = (D, x) => [D, 0], J = (D, x) => [0, x];
      break;
    case "middleRight":
      S = !0, G = (D, x) => [D, x / 2], J = (D, x) => [0, x / 2];
      break;
    case "bottomRight":
      T = !0, G = (D, x) => [D, x], J = (D, x) => [0, 0];
      break;
    case "bottomMiddle":
      G = (D, x) => [D / 2, x], J = (D, x) => [D / 2, 0];
      break;
    case "bottomLeft":
      T = !0, G = (D, x) => [0, x], J = (D, x) => [D, 0];
      break;
    case "middleLeft":
      S = !0, G = (D, x) => [0, x / 2], J = (D, x) => [D, x / 2];
      break;
  }
  const B = G(V, c), Y = J(V, c);
  let X = a(...Y);
  const e = n(F + X[0]), o = n(Q + X[1]);
  let y = 1, O = 1, [E, ll] = this.screenToPageTranslation(U.movementX, U.movementY);
  if ([E, ll] = M(E / d, ll / Z), T) {
    const D = Math.hypot(V, c);
    y = O = Math.max(Math.min(Math.hypot(Y[0] - B[0] - E, Y[1] - B[1] - ll) / D, 1 / V, 1 / c), R / V, N / c);
  } else S ? y = Math.max(R, Math.min(1, Math.abs(Y[0] - B[0] - E))) / V : O = Math.max(N, Math.min(1, Math.abs(Y[1] - B[1] - ll))) / c;
  const z = n(V * y), C = n(c * O);
  X = a(...J(z, C));
  const v = e - X[0], A = o - X[1];
  this.width = z, this.height = C, this.x = v, this.y = A, this.setDims(d * z, Z * C), this.fixAndSetPosition();
}, cR = function(l) {
  const {
    isMac: U
  } = GU.platform;
  l.ctrlKey && !U || l.shiftKey || l.metaKey && U ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Us = function(l) {
  const U = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let d, Z;
  const F = this._uiManager._signal;
  U && (this.div.classList.add("moving"), d = {
    passive: !0,
    capture: !0,
    signal: F
  }, h(this, C0, l.clientX), h(this, w0, l.clientY), Z = (V) => {
    const {
      clientX: c,
      clientY: R
    } = V, [N, n] = this.screenToPageTranslation(c - t(this, C0), R - t(this, w0));
    h(this, C0, c), h(this, w0, R), this._uiManager.dragSelectedEditors(N, n);
  }, window.addEventListener("pointermove", Z, d));
  const Q = () => {
    window.removeEventListener("pointerup", Q), window.removeEventListener("blur", Q), U && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", Z, d)), h(this, TF, !1), this._uiManager.endDragSession() || i(this, q, cR).call(this, l);
  };
  window.addEventListener("pointerup", Q, {
    signal: F
  }), window.addEventListener("blur", Q, {
    signal: F
  });
}, ds = function(l) {
  bl._resizerKeyboardManager.exec(this, l);
}, Zs = function(l) {
  var U;
  t(this, fd) && ((U = l.relatedTarget) == null ? void 0 : U.parentNode) !== t(this, Pl) && i(this, q, DQ).call(this);
}, Fs = function(l) {
  h(this, ut, t(this, fd) ? l : "");
}, RR = function(l) {
  if (t(this, dd))
    for (const U of t(this, dd))
      U.tabIndex = l;
}, DQ = function() {
  if (h(this, fd, !1), i(this, q, RR).call(this, -1), t(this, GF)) {
    const {
      savedX: l,
      savedY: U,
      savedWidth: d,
      savedHeight: Z
    } = t(this, GF);
    i(this, q, VR).call(this, l, U, d, Z), h(this, GF, null);
  }
}, m(bl, ot), f(bl, "_borderLineWidth", -1), f(bl, "_colorManager", new _c()), f(bl, "_zIndex", 1), f(bl, "_telemetryTimeout", 1e3);
let Nl = bl;
class Fh extends Nl {
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
const ON = 3285377520, xU = 4294901760, sd = 65535;
class Qs {
  constructor(l) {
    this.h1 = l ? l & 4294967295 : ON, this.h2 = l ? l & 4294967295 : ON;
  }
  update(l) {
    let U, d;
    if (typeof l == "string") {
      U = new Uint8Array(l.length * 2), d = 0;
      for (let M = 0, G = l.length; M < G; M++) {
        const J = l.charCodeAt(M);
        J <= 255 ? U[d++] = J : (U[d++] = J >>> 8, U[d++] = J & 255);
      }
    } else if (ArrayBuffer.isView(l))
      U = l.slice(), d = U.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const Z = d >> 2, F = d - Z * 4, Q = new Uint32Array(U.buffer, 0, Z);
    let V = 0, c = 0, R = this.h1, N = this.h2;
    const n = 3432918353, s = 461845907, a = n & sd, b = s & sd;
    for (let M = 0; M < Z; M++)
      M & 1 ? (V = Q[M], V = V * n & xU | V * a & sd, V = V << 15 | V >>> 17, V = V * s & xU | V * b & sd, R ^= V, R = R << 13 | R >>> 19, R = R * 5 + 3864292196) : (c = Q[M], c = c * n & xU | c * a & sd, c = c << 15 | c >>> 17, c = c * s & xU | c * b & sd, N ^= c, N = N << 13 | N >>> 19, N = N * 5 + 3864292196);
    switch (V = 0, F) {
      case 3:
        V ^= U[Z * 4 + 2] << 16;
      case 2:
        V ^= U[Z * 4 + 1] << 8;
      case 1:
        V ^= U[Z * 4], V = V * n & xU | V * a & sd, V = V << 15 | V >>> 17, V = V * s & xU | V * b & sd, Z & 1 ? R ^= V : N ^= V;
    }
    this.h1 = R, this.h2 = N;
  }
  hexdigest() {
    let l = this.h1, U = this.h2;
    return l ^= U >>> 1, l = l * 3981806797 & xU | l * 36045 & sd, U = U * 4283543511 & xU | ((U << 16 | l >>> 16) * 2950163797 & xU) >>> 16, l ^= U >>> 1, l = l * 444984403 & xU | l * 60499 & sd, U = U * 3301882366 & xU | ((U << 16 | l >>> 16) * 3120437893 & xU) >>> 16, l ^= U >>> 1, (l >>> 0).toString(16).padStart(8, "0") + (U >>> 0).toString(16).padStart(8, "0");
  }
}
const NR = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var XF, fl, AW, ts;
class SN {
  constructor() {
    m(this, AW);
    m(this, XF, !1);
    m(this, fl, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(l, U) {
    const d = t(this, fl).get(l);
    return d === void 0 ? U : Object.assign(U, d);
  }
  getRawValue(l) {
    return t(this, fl).get(l);
  }
  remove(l) {
    if (t(this, fl).delete(l), t(this, fl).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const U of t(this, fl).values())
        if (U instanceof Nl)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(l, U) {
    const d = t(this, fl).get(l);
    let Z = !1;
    if (d !== void 0)
      for (const [F, Q] of Object.entries(U))
        d[F] !== Q && (Z = !0, d[F] = Q);
    else
      Z = !0, t(this, fl).set(l, U);
    Z && i(this, AW, ts).call(this), U instanceof Nl && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(U.constructor._type);
  }
  has(l) {
    return t(this, fl).has(l);
  }
  getAll() {
    return t(this, fl).size > 0 ? hN(t(this, fl)) : null;
  }
  setAll(l) {
    for (const [U, d] of Object.entries(l))
      this.setValue(U, d);
  }
  get size() {
    return t(this, fl).size;
  }
  resetModified() {
    t(this, XF) && (h(this, XF, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new Vs(this);
  }
  get serializable() {
    if (t(this, fl).size === 0)
      return NR;
    const l = /* @__PURE__ */ new Map(), U = new Qs(), d = [], Z = /* @__PURE__ */ Object.create(null);
    let F = !1;
    for (const [Q, V] of t(this, fl)) {
      const c = V instanceof Nl ? V.serialize(!1, Z) : V;
      c && (l.set(Q, c), U.update(`${Q}:${JSON.stringify(c)}`), F || (F = !!c.bitmap));
    }
    if (F)
      for (const Q of l.values())
        Q.bitmap && d.push(Q.bitmap);
    return l.size > 0 ? {
      map: l,
      hash: U.hexdigest(),
      transfer: d
    } : NR;
  }
  get editorStats() {
    let l = null;
    const U = /* @__PURE__ */ new Map();
    for (const d of t(this, fl).values()) {
      if (!(d instanceof Nl))
        continue;
      const Z = d.telemetryFinalData;
      if (!Z)
        continue;
      const {
        type: F
      } = Z;
      U.has(F) || U.set(F, Object.getPrototypeOf(d).constructor), l || (l = /* @__PURE__ */ Object.create(null));
      const Q = l[F] || (l[F] = /* @__PURE__ */ new Map());
      for (const [V, c] of Object.entries(Z)) {
        if (V === "type")
          continue;
        let R = Q.get(V);
        R || (R = /* @__PURE__ */ new Map(), Q.set(V, R));
        const N = R.get(c) ?? 0;
        R.set(c, N + 1);
      }
    }
    for (const [d, Z] of U)
      l[d] = Z.computeTelemetryFinalData(l[d]);
    return l;
  }
}
XF = new WeakMap(), fl = new WeakMap(), AW = new WeakSet(), ts = function() {
  t(this, XF) || (h(this, XF, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var zt;
class Vs extends SN {
  constructor(U) {
    super();
    m(this, zt);
    const {
      map: d,
      hash: Z,
      transfer: F
    } = U.serializable, Q = structuredClone(d, F ? {
      transfer: F
    } : null);
    h(this, zt, {
      map: Q,
      hash: Z,
      transfer: F
    });
  }
  get print() {
    sl("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return t(this, zt);
  }
}
zt = new WeakMap();
var x0;
class Qh {
  constructor({
    ownerDocument: l = globalThis.document,
    styleElement: U = null
  }) {
    m(this, x0, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), t(this, x0).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: l,
    _inspectFont: U
  }) {
    if (!(!l || t(this, x0).has(l.loadedName))) {
      if (wl(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: d,
          src: Z,
          style: F
        } = l, Q = new FontFace(d, Z, F);
        this.addNativeFontFace(Q);
        try {
          await Q.load(), t(this, x0).add(d), U == null || U(l);
        } catch {
          _(`Cannot load system font: ${l.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(Q);
        }
        return;
      }
      sl("Not implemented: loadSystemFont without the Font Loading API.");
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
          throw _(`Failed to load font '${d.family}': '${Z}'.`), l.disableFontFace = !0, Z;
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
    return (WU || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (l = !0), Fl(this, "isSyncFontLoadingSupported", l);
  }
  _queueLoadingCallback(l) {
    function U() {
      for (wl(!Z.done, "completeRequest() cannot be called twice."), Z.done = !0; d.length > 0 && d[0].done; ) {
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
    function d(B, Y) {
      return B.charCodeAt(Y) << 24 | B.charCodeAt(Y + 1) << 16 | B.charCodeAt(Y + 2) << 8 | B.charCodeAt(Y + 3) & 255;
    }
    function Z(B, Y, X, e) {
      const o = B.substring(0, Y), y = B.substring(Y + X);
      return o + e + y;
    }
    let F, Q;
    const V = this._document.createElement("canvas");
    V.width = 1, V.height = 1;
    const c = V.getContext("2d");
    let R = 0;
    function N(B, Y) {
      if (++R > 30) {
        _("Load test font never loaded."), Y();
        return;
      }
      if (c.font = "30px " + B, c.fillText(".", 0, 20), c.getImageData(0, 0, 1, 1).data[3] > 0) {
        Y();
        return;
      }
      setTimeout(N.bind(null, B, Y));
    }
    const n = `lt${Date.now()}${this.loadTestFontId++}`;
    let s = this._loadTestFont;
    s = Z(s, 976, n.length, n);
    const b = 16, M = 1482184792;
    let G = d(s, b);
    for (F = 0, Q = n.length - 3; F < Q; F += 4)
      G = G - M + d(n, F) | 0;
    F < n.length && (G = G - M + d(n + "XXX", F) | 0), s = Z(s, b, 4, Ob(G));
    const J = `url(data:font/opentype;base64,${btoa(s)});`, T = `@font-face {font-family:"${n}";src:${J}}`;
    this.insertRule(T);
    const S = this._document.createElement("div");
    S.style.visibility = "hidden", S.style.width = S.style.height = "10px", S.style.position = "absolute", S.style.top = S.style.left = "0px";
    for (const B of [l.loadedName, n]) {
      const Y = this._document.createElement("span");
      Y.textContent = "Hi", Y.style.fontFamily = B, S.append(Y);
    }
    this._document.body.append(S), N(n, () => {
      S.remove(), U.complete();
    });
  }
}
x0 = new WeakMap();
class th {
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
    const l = un(this.data), U = `url(data:${this.mimetype};base64,${btoa(l)});`;
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
      _(`getPathGenerator - ignoring character: "${F}".`);
    }
    if (!Array.isArray(d) || d.length === 0)
      return this.compiledGlyphs[U] = function(F, Q) {
      };
    const Z = [];
    for (let F = 0, Q = d.length; F < Q; )
      switch (d[F++]) {
        case Dd.BEZIER_CURVE_TO:
          {
            const [V, c, R, N, n, s] = d.slice(F, F + 6);
            Z.push((a) => a.bezierCurveTo(V, c, R, N, n, s)), F += 6;
          }
          break;
        case Dd.MOVE_TO:
          {
            const [V, c] = d.slice(F, F + 2);
            Z.push((R) => R.moveTo(V, c)), F += 2;
          }
          break;
        case Dd.LINE_TO:
          {
            const [V, c] = d.slice(F, F + 2);
            Z.push((R) => R.lineTo(V, c)), F += 2;
          }
          break;
        case Dd.QUADRATIC_CURVE_TO:
          {
            const [V, c, R, N] = d.slice(F, F + 4);
            Z.push((n) => n.quadraticCurveTo(V, c, R, N)), F += 4;
          }
          break;
        case Dd.RESTORE:
          Z.push((V) => V.restore());
          break;
        case Dd.SAVE:
          Z.push((V) => V.save());
          break;
        case Dd.SCALE:
          wl(Z.length === 2, "Scale command is only valid at the third position.");
          break;
        case Dd.TRANSFORM:
          {
            const [V, c, R, N, n, s] = d.slice(F, F + 6);
            Z.push((a) => a.transform(V, c, R, N, n, s)), F += 6;
          }
          break;
        case Dd.TRANSLATE:
          {
            const [V, c] = d.slice(F, F + 2);
            Z.push((R) => R.translate(V, c)), F += 2;
          }
          break;
      }
    return this.compiledGlyphs[U] = function(Q, V) {
      Z[0](Q), Z[1](Q), Q.scale(V, -V);
      for (let c = 2, R = Z.length; c < R; c++)
        Z[c](Q);
    };
  }
}
if (WU) {
  var nR = Promise.withResolvers(), fQ = null;
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
    let F, Q;
    return new Map(Object.entries({
      fs: l,
      http: U,
      https: d,
      url: Z,
      canvas: F,
      path2d: Q
    }));
  })().then((l) => {
    fQ = l, nR.resolve();
  }, (l) => {
    _(`loadPackages: ${l}`), fQ = /* @__PURE__ */ new Map(), nR.resolve();
  });
}
class Ld {
  static get promise() {
    return nR.promise;
  }
  static get(l) {
    return fQ == null ? void 0 : fQ.get(l);
  }
}
const Ws = function(W) {
  return Ld.get("fs").promises.readFile(W).then((U) => new Uint8Array(U));
};
class Vh extends sc {
}
class Wh extends pW {
  _createCanvas(l, U) {
    return Ld.get("canvas").createCanvas(l, U);
  }
}
class ch extends ac {
  _fetchData(l, U) {
    return Ws(l).then((d) => ({
      cMapData: d,
      compressionType: U
    }));
  }
}
class Rh extends bc {
  _fetchData(l) {
    return Ws(l);
  }
}
const sU = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function sR(W, l) {
  if (!l)
    return;
  const U = l[2] - l[0], d = l[3] - l[1], Z = new Path2D();
  Z.rect(l[0], l[1], U, d), W.clip(Z);
}
class CV {
  constructor() {
    this.constructor === CV && sl("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    sl("Abstract method `getPattern` called.");
  }
}
class Nh extends CV {
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
    if (Z === sU.STROKE || Z === sU.FILL) {
      const Q = U.current.getClippedPathBoundingBox(Z, Tl(l)) || [0, 0, 0, 0], V = Math.ceil(Q[2] - Q[0]) || 1, c = Math.ceil(Q[3] - Q[1]) || 1, R = U.cachedCanvases.getCanvas("pattern", V, c, !0), N = R.context;
      N.clearRect(0, 0, N.canvas.width, N.canvas.height), N.beginPath(), N.rect(0, 0, N.canvas.width, N.canvas.height), N.translate(-Q[0], -Q[1]), d = w.transform(d, [1, 0, 0, 1, Q[0], Q[1]]), N.transform(...U.baseTransform), this.matrix && N.transform(...this.matrix), sR(N, this._bbox), N.fillStyle = this._createGradient(N), N.fill(), F = l.createPattern(R.canvas, "no-repeat");
      const n = new DOMMatrix(d);
      F.setTransform(n);
    } else
      sR(l, this._bbox), F = this._createGradient(l);
    return F;
  }
}
function Bc(W, l, U, d, Z, F, Q, V) {
  const c = l.coords, R = l.colors, N = W.data, n = W.width * 4;
  let s;
  c[U + 1] > c[d + 1] && (s = U, U = d, d = s, s = F, F = Q, Q = s), c[d + 1] > c[Z + 1] && (s = d, d = Z, Z = s, s = Q, Q = V, V = s), c[U + 1] > c[d + 1] && (s = U, U = d, d = s, s = F, F = Q, Q = s);
  const a = (c[U] + l.offsetX) * l.scaleX, b = (c[U + 1] + l.offsetY) * l.scaleY, M = (c[d] + l.offsetX) * l.scaleX, G = (c[d + 1] + l.offsetY) * l.scaleY, J = (c[Z] + l.offsetX) * l.scaleX, T = (c[Z + 1] + l.offsetY) * l.scaleY;
  if (b >= T)
    return;
  const S = R[F], B = R[F + 1], Y = R[F + 2], X = R[Q], e = R[Q + 1], o = R[Q + 2], y = R[V], O = R[V + 1], E = R[V + 2], ll = Math.round(b), z = Math.round(T);
  let C, v, A, D, x, xl, GZ, nd;
  for (let Bl = ll; Bl <= z; Bl++) {
    if (Bl < G) {
      const ml = Bl < b ? 0 : (b - Bl) / (b - G);
      C = a - (a - M) * ml, v = S - (S - X) * ml, A = B - (B - e) * ml, D = Y - (Y - o) * ml;
    } else {
      let ml;
      Bl > T ? ml = 1 : G === T ? ml = 0 : ml = (G - Bl) / (G - T), C = M - (M - J) * ml, v = X - (X - y) * ml, A = e - (e - O) * ml, D = o - (o - E) * ml;
    }
    let p;
    Bl < b ? p = 0 : Bl > T ? p = 1 : p = (b - Bl) / (b - T), x = a - (a - J) * p, xl = S - (S - y) * p, GZ = B - (B - O) * p, nd = Y - (Y - E) * p;
    const Ql = Math.round(Math.min(C, x)), Ll = Math.round(Math.max(C, x));
    let UU = n * Bl + Ql * 4;
    for (let ml = Ql; ml <= Ll; ml++)
      p = (C - ml) / (C - x), p < 0 ? p = 0 : p > 1 && (p = 1), N[UU++] = v - (v - xl) * p | 0, N[UU++] = A - (A - GZ) * p | 0, N[UU++] = D - (D - nd) * p | 0, N[UU++] = 255;
  }
}
function nh(W, l, U) {
  const d = l.coords, Z = l.colors;
  let F, Q;
  switch (l.type) {
    case "lattice":
      const V = l.verticesPerRow, c = Math.floor(d.length / V) - 1, R = V - 1;
      for (F = 0; F < c; F++) {
        let N = F * V;
        for (let n = 0; n < R; n++, N++)
          Bc(W, U, d[N], d[N + 1], d[N + V], Z[N], Z[N + 1], Z[N + V]), Bc(W, U, d[N + V + 1], d[N + 1], d[N + V], Z[N + V + 1], Z[N + 1], Z[N + V]);
      }
      break;
    case "triangles":
      for (F = 0, Q = d.length; F < Q; F += 3)
        Bc(W, U, d[F], d[F + 1], d[F + 2], Z[F], Z[F + 1], Z[F + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class sh extends CV {
  constructor(l) {
    super(), this._coords = l[2], this._colors = l[3], this._figures = l[4], this._bounds = l[5], this._bbox = l[7], this._background = l[8], this.matrix = null;
  }
  _createMeshCanvas(l, U, d) {
    const V = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), R = Math.ceil(this._bounds[2]) - V, N = Math.ceil(this._bounds[3]) - c, n = Math.min(Math.ceil(Math.abs(R * l[0] * 1.1)), 3e3), s = Math.min(Math.ceil(Math.abs(N * l[1] * 1.1)), 3e3), a = R / n, b = N / s, M = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -V,
      offsetY: -c,
      scaleX: 1 / a,
      scaleY: 1 / b
    }, G = n + 2 * 2, J = s + 2 * 2, T = d.getCanvas("mesh", G, J, !1), S = T.context, B = S.createImageData(n, s);
    if (U) {
      const X = B.data;
      for (let e = 0, o = X.length; e < o; e += 4)
        X[e] = U[0], X[e + 1] = U[1], X[e + 2] = U[2], X[e + 3] = 255;
    }
    for (const X of this._figures)
      nh(B, X, M);
    return S.putImageData(B, 2, 2), {
      canvas: T.canvas,
      offsetX: V - 2 * a,
      offsetY: c - 2 * b,
      scaleX: a,
      scaleY: b
    };
  }
  getPattern(l, U, d, Z) {
    sR(l, this._bbox);
    let F;
    if (Z === sU.SHADING)
      F = w.singularValueDecompose2dScale(Tl(l));
    else if (F = w.singularValueDecompose2dScale(U.baseTransform), this.matrix) {
      const V = w.singularValueDecompose2dScale(this.matrix);
      F = [F[0] * V[0], F[1] * V[1]];
    }
    const Q = this._createMeshCanvas(F, Z === sU.SHADING ? null : this._background, U.cachedCanvases);
    return Z !== sU.SHADING && (l.setTransform(...U.baseTransform), this.matrix && l.transform(...this.matrix)), l.translate(Q.offsetX, Q.offsetY), l.scale(Q.scaleX, Q.scaleY), l.createPattern(Q.canvas, "no-repeat");
  }
}
class ah extends CV {
  getPattern() {
    return "hotpink";
  }
}
function bh(W) {
  switch (W[0]) {
    case "RadialAxial":
      return new Nh(W);
    case "Mesh":
      return new sh(W);
    case "Dummy":
      return new ah();
  }
  throw new Error(`Unknown IR type: ${W[0]}`);
}
const rN = {
  COLORED: 1,
  UNCOLORED: 2
}, _W = class _W {
  constructor(l, U, d, Z, F) {
    this.operatorList = l[2], this.matrix = l[3], this.bbox = l[4], this.xstep = l[5], this.ystep = l[6], this.paintType = l[7], this.tilingType = l[8], this.color = U, this.ctx = d, this.canvasGraphicsFactory = Z, this.baseTransform = F;
  }
  createPatternCanvas(l) {
    const U = this.operatorList, d = this.bbox, Z = this.xstep, F = this.ystep, Q = this.paintType, V = this.tilingType, c = this.color, R = this.canvasGraphicsFactory;
    Rc("TilingType: " + V);
    const N = d[0], n = d[1], s = d[2], a = d[3], b = w.singularValueDecompose2dScale(this.matrix), M = w.singularValueDecompose2dScale(this.baseTransform), G = [b[0] * M[0], b[1] * M[1]], J = this.getSizeAndScale(Z, this.ctx.canvas.width, G[0]), T = this.getSizeAndScale(F, this.ctx.canvas.height, G[1]), S = l.cachedCanvases.getCanvas("pattern", J.size, T.size, !0), B = S.context, Y = R.createCanvasGraphics(B);
    Y.groupLevel = l.groupLevel, this.setFillAndStrokeStyleToContext(Y, Q, c);
    let X = N, e = n, o = s, y = a;
    return N < 0 && (X = 0, o += Math.abs(N)), n < 0 && (e = 0, y += Math.abs(n)), B.translate(-(J.scale * X), -(T.scale * e)), Y.transform(J.scale, 0, 0, T.scale, 0, 0), B.save(), this.clipBbox(Y, X, e, o, y), Y.baseTransform = Tl(Y.ctx), Y.executeOperatorList(U), Y.endDrawing(), {
      canvas: S.canvas,
      scaleX: J.scale,
      scaleY: T.scale,
      offsetX: X,
      offsetY: e
    };
  }
  getSizeAndScale(l, U, d) {
    l = Math.abs(l);
    const Z = Math.max(_W.MAX_PATTERN_SIZE, U);
    let F = Math.ceil(l * d);
    return F >= Z ? F = Z : d = F / l, {
      scale: d,
      size: F
    };
  }
  clipBbox(l, U, d, Z, F) {
    const Q = Z - U, V = F - d;
    l.ctx.rect(U, d, Q, V), l.current.updateRectMinMax(Tl(l.ctx), [U, d, Z, F]), l.clip(), l.endPath();
  }
  setFillAndStrokeStyleToContext(l, U, d) {
    const Z = l.ctx, F = l.current;
    switch (U) {
      case rN.COLORED:
        const Q = this.ctx;
        Z.fillStyle = Q.fillStyle, Z.strokeStyle = Q.strokeStyle, F.fillColor = Q.fillStyle, F.strokeColor = Q.strokeStyle;
        break;
      case rN.UNCOLORED:
        const V = w.makeHexColor(d[0], d[1], d[2]);
        Z.fillStyle = V, Z.strokeStyle = V, F.fillColor = V, F.strokeColor = V;
        break;
      default:
        throw new jb(`Unsupported paint type: ${U}`);
    }
  }
  getPattern(l, U, d, Z) {
    let F = d;
    Z !== sU.SHADING && (F = w.transform(F, U.baseTransform), this.matrix && (F = w.transform(F, this.matrix)));
    const Q = this.createPatternCanvas(U);
    let V = new DOMMatrix(F);
    V = V.translate(Q.offsetX, Q.offsetY), V = V.scale(1 / Q.scaleX, 1 / Q.scaleY);
    const c = l.createPattern(Q.canvas, "repeat");
    return c.setTransform(V), c;
  }
};
f(_W, "MAX_PATTERN_SIZE", 3e3);
let aR = _W;
function hh({
  src: W,
  srcPos: l = 0,
  dest: U,
  width: d,
  height: Z,
  nonBlackColor: F = 4294967295,
  inverseDecode: Q = !1
}) {
  const V = GU.isLittleEndian ? 4278190080 : 255, [c, R] = Q ? [F, V] : [V, F], N = d >> 3, n = d & 7, s = W.length;
  U = new Uint32Array(U.buffer);
  let a = 0;
  for (let b = 0; b < Z; b++) {
    for (const G = l + N; l < G; l++) {
      const J = l < s ? W[l] : 255;
      U[a++] = J & 128 ? R : c, U[a++] = J & 64 ? R : c, U[a++] = J & 32 ? R : c, U[a++] = J & 16 ? R : c, U[a++] = J & 8 ? R : c, U[a++] = J & 4 ? R : c, U[a++] = J & 2 ? R : c, U[a++] = J & 1 ? R : c;
    }
    if (n === 0)
      continue;
    const M = l < s ? W[l++] : 255;
    for (let G = 0; G < n; G++)
      U[a++] = M & 1 << 7 - G ? R : c;
  }
  return {
    srcPos: l,
    destPos: a
  };
}
const gN = 16, KN = 100, ih = 15, HN = 10, vN = 1e3, JU = 16;
function mh(W, l) {
  if (W._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  W.__originalSave = W.save, W.__originalRestore = W.restore, W.__originalRotate = W.rotate, W.__originalScale = W.scale, W.__originalTranslate = W.translate, W.__originalTransform = W.transform, W.__originalSetTransform = W.setTransform, W.__originalResetTransform = W.resetTransform, W.__originalClip = W.clip, W.__originalMoveTo = W.moveTo, W.__originalLineTo = W.lineTo, W.__originalBezierCurveTo = W.bezierCurveTo, W.__originalRect = W.rect, W.__originalClosePath = W.closePath, W.__originalBeginPath = W.beginPath, W._removeMirroring = () => {
    W.save = W.__originalSave, W.restore = W.__originalRestore, W.rotate = W.__originalRotate, W.scale = W.__originalScale, W.translate = W.__originalTranslate, W.transform = W.__originalTransform, W.setTransform = W.__originalSetTransform, W.resetTransform = W.__originalResetTransform, W.clip = W.__originalClip, W.moveTo = W.__originalMoveTo, W.lineTo = W.__originalLineTo, W.bezierCurveTo = W.__originalBezierCurveTo, W.rect = W.__originalRect, W.closePath = W.__originalClosePath, W.beginPath = W.__originalBeginPath, delete W._removeMirroring;
  }, W.save = function() {
    l.save(), this.__originalSave();
  }, W.restore = function() {
    l.restore(), this.__originalRestore();
  }, W.translate = function(d, Z) {
    l.translate(d, Z), this.__originalTranslate(d, Z);
  }, W.scale = function(d, Z) {
    l.scale(d, Z), this.__originalScale(d, Z);
  }, W.transform = function(d, Z, F, Q, V, c) {
    l.transform(d, Z, F, Q, V, c), this.__originalTransform(d, Z, F, Q, V, c);
  }, W.setTransform = function(d, Z, F, Q, V, c) {
    l.setTransform(d, Z, F, Q, V, c), this.__originalSetTransform(d, Z, F, Q, V, c);
  }, W.resetTransform = function() {
    l.resetTransform(), this.__originalResetTransform();
  }, W.rotate = function(d) {
    l.rotate(d), this.__originalRotate(d);
  }, W.clip = function(d) {
    l.clip(d), this.__originalClip(d);
  }, W.moveTo = function(U, d) {
    l.moveTo(U, d), this.__originalMoveTo(U, d);
  }, W.lineTo = function(U, d) {
    l.lineTo(U, d), this.__originalLineTo(U, d);
  }, W.bezierCurveTo = function(U, d, Z, F, Q, V) {
    l.bezierCurveTo(U, d, Z, F, Q, V), this.__originalBezierCurveTo(U, d, Z, F, Q, V);
  }, W.rect = function(U, d, Z, F) {
    l.rect(U, d, Z, F), this.__originalRect(U, d, Z, F);
  }, W.closePath = function() {
    l.closePath(), this.__originalClosePath();
  }, W.beginPath = function() {
    l.beginPath(), this.__originalBeginPath();
  };
}
class Mh {
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
function OV(W, l, U, d, Z, F, Q, V, c, R) {
  const [N, n, s, a, b, M] = Tl(W);
  if (n === 0 && s === 0) {
    const T = Q * N + b, S = Math.round(T), B = V * a + M, Y = Math.round(B), X = (Q + c) * N + b, e = Math.abs(Math.round(X) - S) || 1, o = (V + R) * a + M, y = Math.abs(Math.round(o) - Y) || 1;
    return W.setTransform(Math.sign(N), 0, 0, Math.sign(a), S, Y), W.drawImage(l, U, d, Z, F, 0, 0, e, y), W.setTransform(N, n, s, a, b, M), [e, y];
  }
  if (N === 0 && a === 0) {
    const T = V * s + b, S = Math.round(T), B = Q * n + M, Y = Math.round(B), X = (V + R) * s + b, e = Math.abs(Math.round(X) - S) || 1, o = (Q + c) * n + M, y = Math.abs(Math.round(o) - Y) || 1;
    return W.setTransform(0, Math.sign(n), Math.sign(s), 0, S, Y), W.drawImage(l, U, d, Z, F, 0, 0, y, e), W.setTransform(N, n, s, a, b, M), [y, e];
  }
  W.drawImage(l, U, d, Z, F, Q, V, c, R);
  const G = Math.hypot(N, n), J = Math.hypot(s, a);
  return [G * c, J * R];
}
function Jh(W) {
  const {
    width: l,
    height: U
  } = W;
  if (l > vN || U > vN)
    return null;
  const d = 1e3, Z = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), F = l + 1;
  let Q = new Uint8Array(F * (U + 1)), V, c, R;
  const N = l + 7 & -8;
  let n = new Uint8Array(N * U), s = 0;
  for (const J of W.data) {
    let T = 128;
    for (; T > 0; )
      n[s++] = J & T ? 0 : 255, T >>= 1;
  }
  let a = 0;
  for (s = 0, n[s] !== 0 && (Q[0] = 1, ++a), c = 1; c < l; c++)
    n[s] !== n[s + 1] && (Q[c] = n[s] ? 2 : 1, ++a), s++;
  for (n[s] !== 0 && (Q[c] = 2, ++a), V = 1; V < U; V++) {
    s = V * N, R = V * F, n[s - N] !== n[s] && (Q[R] = n[s] ? 1 : 8, ++a);
    let J = (n[s] ? 4 : 0) + (n[s - N] ? 8 : 0);
    for (c = 1; c < l; c++)
      J = (J >> 2) + (n[s + 1] ? 4 : 0) + (n[s - N + 1] ? 8 : 0), Z[J] && (Q[R + c] = Z[J], ++a), s++;
    if (n[s - N] !== n[s] && (Q[R + c] = n[s] ? 2 : 4, ++a), a > d)
      return null;
  }
  for (s = N * (U - 1), R = V * F, n[s] !== 0 && (Q[R] = 8, ++a), c = 1; c < l; c++)
    n[s] !== n[s + 1] && (Q[R + c] = n[s] ? 4 : 8, ++a), s++;
  if (n[s] !== 0 && (Q[R + c] = 4, ++a), a > d)
    return null;
  const b = new Int32Array([0, F, -1, 0, -F, 0, 0, 0, 1]), M = new Path2D();
  for (V = 0; a && V <= U; V++) {
    let J = V * F;
    const T = J + l;
    for (; J < T && !Q[J]; )
      J++;
    if (J === T)
      continue;
    M.moveTo(J % F, V);
    const S = J;
    let B = Q[J];
    do {
      const Y = b[B];
      do
        J += Y;
      while (!Q[J]);
      const X = Q[J];
      X !== 5 && X !== 10 ? (B = X, Q[J] = 0) : (B = X & 51 * B >> 4, Q[J] &= B >> 2 | B << 2), M.lineTo(J % F, J / F | 0), Q[J] || --a;
    } while (S !== J);
    --V;
  }
  return n = null, Q = null, function(J) {
    J.save(), J.scale(1 / l, -1 / U), J.translate(0, -U), J.fill(M), J.beginPath(), J.restore();
  };
}
class PN {
  constructor(l, U) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Bn, this.textMatrixScale = 1, this.fontMatrix = xc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = ZU.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, l, U]);
  }
  clone() {
    const l = Object.create(this);
    return l.clipBox = this.clipBox.slice(), l;
  }
  setCurrentPoint(l, U) {
    this.x = l, this.y = U;
  }
  updatePathMinMax(l, U, d) {
    [U, d] = w.applyTransform([U, d], l), this.minX = Math.min(this.minX, U), this.minY = Math.min(this.minY, d), this.maxX = Math.max(this.maxX, U), this.maxY = Math.max(this.maxY, d);
  }
  updateRectMinMax(l, U) {
    const d = w.applyTransform(U, l), Z = w.applyTransform(U.slice(2), l), F = w.applyTransform([U[0], U[3]], l), Q = w.applyTransform([U[2], U[1]], l);
    this.minX = Math.min(this.minX, d[0], Z[0], F[0], Q[0]), this.minY = Math.min(this.minY, d[1], Z[1], F[1], Q[1]), this.maxX = Math.max(this.maxX, d[0], Z[0], F[0], Q[0]), this.maxY = Math.max(this.maxY, d[1], Z[1], F[1], Q[1]);
  }
  updateScalingPathMinMax(l, U) {
    w.scaleMinMax(l, U), this.minX = Math.min(this.minX, U[0]), this.minY = Math.min(this.minY, U[1]), this.maxX = Math.max(this.maxX, U[2]), this.maxY = Math.max(this.maxY, U[3]);
  }
  updateCurvePathMinMax(l, U, d, Z, F, Q, V, c, R, N) {
    const n = w.bezierBoundingBox(U, d, Z, F, Q, V, c, R, N);
    N || this.updateRectMinMax(l, n);
  }
  getPathBoundingBox(l = sU.FILL, U = null) {
    const d = [this.minX, this.minY, this.maxX, this.maxY];
    if (l === sU.STROKE) {
      U || sl("Stroke bounding box must include transform.");
      const Z = w.singularValueDecompose2dScale(U), F = Z[0] * this.lineWidth / 2, Q = Z[1] * this.lineWidth / 2;
      d[0] -= F, d[1] -= Q, d[2] += F, d[3] += Q;
    }
    return d;
  }
  updateClipFromPath() {
    const l = w.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(l || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(l) {
    this.clipBox = l, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(l = sU.FILL, U = null) {
    return w.intersect(this.clipBox, this.getPathBoundingBox(l, U));
  }
}
function fN(W, l) {
  if (typeof ImageData < "u" && l instanceof ImageData) {
    W.putImageData(l, 0, 0);
    return;
  }
  const U = l.height, d = l.width, Z = U % JU, F = (U - Z) / JU, Q = Z === 0 ? F : F + 1, V = W.createImageData(d, JU);
  let c = 0, R;
  const N = l.data, n = V.data;
  let s, a, b, M;
  if (l.kind === _V.GRAYSCALE_1BPP) {
    const G = N.byteLength, J = new Uint32Array(n.buffer, 0, n.byteLength >> 2), T = J.length, S = d + 7 >> 3, B = 4294967295, Y = GU.isLittleEndian ? 4278190080 : 255;
    for (s = 0; s < Q; s++) {
      for (b = s < F ? JU : Z, R = 0, a = 0; a < b; a++) {
        const X = G - c;
        let e = 0;
        const o = X > S ? d : X * 8 - 7, y = o & -8;
        let O = 0, E = 0;
        for (; e < y; e += 8)
          E = N[c++], J[R++] = E & 128 ? B : Y, J[R++] = E & 64 ? B : Y, J[R++] = E & 32 ? B : Y, J[R++] = E & 16 ? B : Y, J[R++] = E & 8 ? B : Y, J[R++] = E & 4 ? B : Y, J[R++] = E & 2 ? B : Y, J[R++] = E & 1 ? B : Y;
        for (; e < o; e++)
          O === 0 && (E = N[c++], O = 128), J[R++] = E & O ? B : Y, O >>= 1;
      }
      for (; R < T; )
        J[R++] = 0;
      W.putImageData(V, 0, s * JU);
    }
  } else if (l.kind === _V.RGBA_32BPP) {
    for (a = 0, M = d * JU * 4, s = 0; s < F; s++)
      n.set(N.subarray(c, c + M)), c += M, W.putImageData(V, 0, a), a += JU;
    s < Q && (M = d * Z * 4, n.set(N.subarray(c, c + M)), W.putImageData(V, 0, a));
  } else if (l.kind === _V.RGB_24BPP)
    for (b = JU, M = d * b, s = 0; s < Q; s++) {
      for (s >= F && (b = Z, M = d * b), R = 0, a = M; a--; )
        n[R++] = N[c++], n[R++] = N[c++], n[R++] = N[c++], n[R++] = 255;
      W.putImageData(V, 0, s * JU);
    }
  else
    throw new Error(`bad image kind: ${l.kind}`);
}
function AN(W, l) {
  if (l.bitmap) {
    W.drawImage(l.bitmap, 0, 0);
    return;
  }
  const U = l.height, d = l.width, Z = U % JU, F = (U - Z) / JU, Q = Z === 0 ? F : F + 1, V = W.createImageData(d, JU);
  let c = 0;
  const R = l.data, N = V.data;
  for (let n = 0; n < Q; n++) {
    const s = n < F ? JU : Z;
    ({
      srcPos: c
    } = hh({
      src: R,
      srcPos: c,
      dest: N,
      width: d,
      height: s,
      nonBlackColor: 0
    })), W.putImageData(V, 0, n * JU);
  }
}
function uQ(W, l) {
  const U = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const d of U)
    W[d] !== void 0 && (l[d] = W[d]);
  W.setLineDash !== void 0 && (l.setLineDash(W.getLineDash()), l.lineDashOffset = W.lineDashOffset);
}
function rV(W) {
  if (W.strokeStyle = W.fillStyle = "#000000", W.fillRule = "nonzero", W.globalAlpha = 1, W.lineWidth = 1, W.lineCap = "butt", W.lineJoin = "miter", W.miterLimit = 10, W.globalCompositeOperation = "source-over", W.font = "10px sans-serif", W.setLineDash !== void 0 && (W.setLineDash([]), W.lineDashOffset = 0), !WU) {
    const {
      filter: l
    } = W;
    l !== "none" && l !== "" && (W.filter = "none");
  }
}
function _N(W, l) {
  if (l)
    return !0;
  const U = w.singularValueDecompose2dScale(W);
  U[0] = Math.fround(U[0]), U[1] = Math.fround(U[1]);
  const d = Math.fround((globalThis.devicePixelRatio || 1) * AZ.PDF_TO_CSS_UNITS);
  return U[0] <= d && U[1] <= d;
}
const Gh = ["butt", "round", "square"], Th = ["miter", "round", "bevel"], Sh = {}, qN = {};
var qZ, bR, hR;
const oN = class oN {
  constructor(l, U, d, Z, F, {
    optionalContentConfig: Q,
    markedContentStack: V = null
  }, c, R) {
    m(this, qZ);
    this.ctx = l, this.current = new PN(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = U, this.objs = d, this.canvasFactory = Z, this.filterFactory = F, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = V || [], this.optionalContentConfig = Q, this.cachedCanvases = new Mh(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = c, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = R, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
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
    const F = this.ctx.canvas.width, Q = this.ctx.canvas.height, V = this.ctx.fillStyle;
    if (this.ctx.fillStyle = Z || "#ffffff", this.ctx.fillRect(0, 0, F, Q), this.ctx.fillStyle = V, d) {
      const c = this.cachedCanvases.getCanvas("transparent", F, Q);
      this.compositeCtx = this.ctx, this.transparentCanvas = c.canvas, this.ctx = c.context, this.ctx.save(), this.ctx.transform(...Tl(this.compositeCtx));
    }
    this.ctx.save(), rV(this.ctx), l && (this.ctx.transform(...l), this.outputScaleX = l[0], this.outputScaleY = l[0]), this.ctx.transform(...U.transform), this.viewportScale = U.scale, this.baseTransform = Tl(this.ctx);
  }
  executeOperatorList(l, U, d, Z) {
    const F = l.argsArray, Q = l.fnArray;
    let V = U || 0;
    const c = F.length;
    if (c === V)
      return V;
    const R = c - V > HN && typeof d == "function", N = R ? Date.now() + ih : 0;
    let n = 0;
    const s = this.commonObjs, a = this.objs;
    let b;
    for (; ; ) {
      if (Z !== void 0 && V === Z.nextBreakPoint)
        return Z.breakIt(V, d), V;
      if (b = Q[V], b !== _U.dependency)
        this[b].apply(this, F[V]);
      else
        for (const M of F[V]) {
          const G = M.startsWith("g_") ? s : a;
          if (!G.has(M))
            return G.get(M, d), V;
        }
      if (V++, V === c)
        return V;
      if (R && ++n > HN) {
        if (Date.now() > N)
          return d(), V;
        n = 0;
      }
    }
  }
  endDrawing() {
    i(this, qZ, bR).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const l of this._cachedBitmapsMap.values()) {
      for (const U of l.values())
        typeof HTMLCanvasElement < "u" && U instanceof HTMLCanvasElement && (U.width = U.height = 0);
      l.clear();
    }
    this._cachedBitmapsMap.clear(), i(this, qZ, hR).call(this);
  }
  _scaleImage(l, U) {
    const d = l.width, Z = l.height;
    let F = Math.max(Math.hypot(U[0], U[1]), 1), Q = Math.max(Math.hypot(U[2], U[3]), 1), V = d, c = Z, R = "prescale1", N, n;
    for (; F > 2 && V > 1 || Q > 2 && c > 1; ) {
      let s = V, a = c;
      F > 2 && V > 1 && (s = V >= 16384 ? Math.floor(V / 2) - 1 || 1 : Math.ceil(V / 2), F /= V / s), Q > 2 && c > 1 && (a = c >= 16384 ? Math.floor(c / 2) - 1 || 1 : Math.ceil(c) / 2, Q /= c / a), N = this.cachedCanvases.getCanvas(R, s, a), n = N.context, n.clearRect(0, 0, s, a), n.drawImage(l, 0, 0, V, c, 0, 0, s, a), l = N.canvas, V = s, c = a, R = R === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: l,
      paintWidth: V,
      paintHeight: c
    };
  }
  _createMaskCanvas(l) {
    const U = this.ctx, {
      width: d,
      height: Z
    } = l, F = this.current.fillColor, Q = this.current.patternFill, V = Tl(U);
    let c, R, N, n;
    if ((l.bitmap || l.data) && l.count > 1) {
      const o = l.bitmap || l.data.buffer;
      R = JSON.stringify(Q ? V : [V.slice(0, 4), F]), c = this._cachedBitmapsMap.get(o), c || (c = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(o, c));
      const y = c.get(R);
      if (y && !Q) {
        const O = Math.round(Math.min(V[0], V[2]) + V[4]), E = Math.round(Math.min(V[1], V[3]) + V[5]);
        return {
          canvas: y,
          offsetX: O,
          offsetY: E
        };
      }
      N = y;
    }
    N || (n = this.cachedCanvases.getCanvas("maskCanvas", d, Z), AN(n.context, l));
    let s = w.transform(V, [1 / d, 0, 0, -1 / Z, 0, 0]);
    s = w.transform(s, [1, 0, 0, 1, 0, -Z]);
    const [a, b, M, G] = w.getAxialAlignedBoundingBox([0, 0, d, Z], s), J = Math.round(M - a) || 1, T = Math.round(G - b) || 1, S = this.cachedCanvases.getCanvas("fillCanvas", J, T), B = S.context, Y = a, X = b;
    B.translate(-Y, -X), B.transform(...s), N || (N = this._scaleImage(n.canvas, Id(B)), N = N.img, c && Q && c.set(R, N)), B.imageSmoothingEnabled = _N(Tl(B), l.interpolate), OV(B, N, 0, 0, N.width, N.height, 0, 0, d, Z), B.globalCompositeOperation = "source-in";
    const e = w.transform(Id(B), [1, 0, 0, 1, -Y, -X]);
    return B.fillStyle = Q ? F.getPattern(U, this, e, sU.FILL) : F, B.fillRect(0, 0, d, Z), c && !Q && (this.cachedCanvases.delete("fillCanvas"), c.set(R, S.canvas)), {
      canvas: S.canvas,
      offsetX: Math.round(Y),
      offsetY: Math.round(X)
    };
  }
  setLineWidth(l) {
    l !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = l, this.ctx.lineWidth = l;
  }
  setLineCap(l) {
    this.ctx.lineCap = Gh[l];
  }
  setLineJoin(l) {
    this.ctx.lineJoin = Th[l];
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
    F.setTransform(...Tl(this.suspendedCtx)), uQ(this.suspendedCtx, F), mh(F, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), uQ(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(l) {
    if (!this.current.activeSMask)
      return;
    l ? (l[0] = Math.floor(l[0]), l[1] = Math.floor(l[1]), l[2] = Math.ceil(l[2]), l[3] = Math.ceil(l[3])) : l = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const U = this.current.activeSMask, d = this.suspendedCtx;
    this.composeSMask(d, U, this.ctx, l), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(l, U, d, Z) {
    const F = Z[0], Q = Z[1], V = Z[2] - F, c = Z[3] - Q;
    V === 0 || c === 0 || (this.genericComposeSMask(U.context, d, V, c, U.subtype, U.backdrop, U.transferMap, F, Q, U.offsetX, U.offsetY), l.save(), l.globalAlpha = 1, l.globalCompositeOperation = "source-over", l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(d.canvas, 0, 0), l.restore());
  }
  genericComposeSMask(l, U, d, Z, F, Q, V, c, R, N, n) {
    let s = l.canvas, a = c - N, b = R - n;
    if (Q) {
      if (a < 0 || b < 0 || a + d > s.width || b + Z > s.height) {
        const G = this.cachedCanvases.getCanvas("maskExtension", d, Z), J = G.context;
        J.drawImage(s, -a, -b), Q.some((T) => T !== 0) && (J.globalCompositeOperation = "destination-atop", J.fillStyle = w.makeHexColor(...Q), J.fillRect(0, 0, d, Z), J.globalCompositeOperation = "source-over"), s = G.canvas, a = b = 0;
      } else if (Q.some((G) => G !== 0)) {
        l.save(), l.globalAlpha = 1, l.setTransform(1, 0, 0, 1, 0, 0);
        const G = new Path2D();
        G.rect(a, b, d, Z), l.clip(G), l.globalCompositeOperation = "destination-atop", l.fillStyle = w.makeHexColor(...Q), l.fillRect(a, b, d, Z), l.restore();
      }
    }
    U.save(), U.globalAlpha = 1, U.setTransform(1, 0, 0, 1, 0, 0), F === "Alpha" && V ? U.filter = this.filterFactory.addAlphaFilter(V) : F === "Luminosity" && (U.filter = this.filterFactory.addLuminosityFilter(V));
    const M = new Path2D();
    M.rect(c, R, d, Z), U.clip(M), U.globalCompositeOperation = "destination-in", U.drawImage(s, a, b, d, Z, c, R, d, Z), U.restore();
  }
  save() {
    this.inSMaskMode ? (uQ(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const l = this.current;
    this.stateStack.push(l), this.current = l.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), uQ(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(l, U, d, Z, F, Q) {
    this.ctx.transform(l, U, d, Z, F, Q), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(l, U, d) {
    const Z = this.ctx, F = this.current;
    let Q = F.x, V = F.y, c, R;
    const N = Tl(Z), n = N[0] === 0 && N[3] === 0 || N[1] === 0 && N[2] === 0, s = n ? d.slice(0) : null;
    for (let a = 0, b = 0, M = l.length; a < M; a++)
      switch (l[a] | 0) {
        case _U.rectangle:
          Q = U[b++], V = U[b++];
          const G = U[b++], J = U[b++], T = Q + G, S = V + J;
          Z.moveTo(Q, V), G === 0 || J === 0 ? Z.lineTo(T, S) : (Z.lineTo(T, V), Z.lineTo(T, S), Z.lineTo(Q, S)), n || F.updateRectMinMax(N, [Q, V, T, S]), Z.closePath();
          break;
        case _U.moveTo:
          Q = U[b++], V = U[b++], Z.moveTo(Q, V), n || F.updatePathMinMax(N, Q, V);
          break;
        case _U.lineTo:
          Q = U[b++], V = U[b++], Z.lineTo(Q, V), n || F.updatePathMinMax(N, Q, V);
          break;
        case _U.curveTo:
          c = Q, R = V, Q = U[b + 4], V = U[b + 5], Z.bezierCurveTo(U[b], U[b + 1], U[b + 2], U[b + 3], Q, V), F.updateCurvePathMinMax(N, c, R, U[b], U[b + 1], U[b + 2], U[b + 3], Q, V, s), b += 6;
          break;
        case _U.curveTo2:
          c = Q, R = V, Z.bezierCurveTo(Q, V, U[b], U[b + 1], U[b + 2], U[b + 3]), F.updateCurvePathMinMax(N, c, R, Q, V, U[b], U[b + 1], U[b + 2], U[b + 3], s), Q = U[b + 2], V = U[b + 3], b += 4;
          break;
        case _U.curveTo3:
          c = Q, R = V, Q = U[b + 2], V = U[b + 3], Z.bezierCurveTo(U[b], U[b + 1], Q, V, Q, V), F.updateCurvePathMinMax(N, c, R, U[b], U[b + 1], Q, V, Q, V, s), b += 4;
          break;
        case _U.closePath:
          Z.closePath();
          break;
      }
    n && F.updateScalingPathMinMax(N, s), F.setCurrentPoint(Q, V);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(l = !0) {
    const U = this.ctx, d = this.current.strokeColor;
    U.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof d == "object" && (d != null && d.getPattern) ? (U.save(), U.strokeStyle = d.getPattern(U, this, Id(U), sU.STROKE), this.rescaleAndStroke(!1), U.restore()) : this.rescaleAndStroke(!0)), l && this.consumePath(this.current.getClippedPathBoundingBox()), U.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(l = !0) {
    const U = this.ctx, d = this.current.fillColor, Z = this.current.patternFill;
    let F = !1;
    Z && (U.save(), U.fillStyle = d.getPattern(U, this, Id(U), sU.FILL), F = !0);
    const Q = this.current.getClippedPathBoundingBox();
    this.contentVisible && Q !== null && (this.pendingEOFill ? (U.fill("evenodd"), this.pendingEOFill = !1) : U.fill()), F && U.restore(), l && this.consumePath(Q);
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
    this.pendingClip = Sh;
  }
  eoClip() {
    this.pendingClip = qN;
  }
  beginText() {
    this.current.textMatrix = Bn, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
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
    if (Z.fontMatrix = d.fontMatrix || xc, (Z.fontMatrix[0] === 0 || Z.fontMatrix[3] === 0) && _("Invalid font matrix for font " + l), U < 0 ? (U = -U, Z.fontDirection = -1) : Z.fontDirection = 1, this.current.font = d, this.current.fontSize = U, d.isType3Font)
      return;
    const F = d.loadedName || "sans-serif", Q = ((N = d.systemFontInfo) == null ? void 0 : N.css) || `"${F}", ${d.fallbackName}`;
    let V = "normal";
    d.black ? V = "900" : d.bold && (V = "bold");
    const c = d.italic ? "italic" : "normal";
    let R = U;
    U < gN ? R = gN : U > KN && (R = KN), this.current.fontSizeScale = U / R, this.ctx.font = `${c} ${V} ${R}px ${Q}`;
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
  setTextMatrix(l, U, d, Z, F, Q) {
    this.current.textMatrix = [l, U, d, Z, F, Q], this.current.textMatrixScale = Math.hypot(l, U), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(l, U, d, Z) {
    const F = this.ctx, Q = this.current, V = Q.font, c = Q.textRenderingMode, R = Q.fontSize / Q.fontSizeScale, N = c & ZU.FILL_STROKE_MASK, n = !!(c & ZU.ADD_TO_PATH_FLAG), s = Q.patternFill && !V.missingFile;
    let a;
    (V.disableFontFace || n || s) && (a = V.getPathGenerator(this.commonObjs, l)), V.disableFontFace || s ? (F.save(), F.translate(U, d), F.beginPath(), a(F, R), Z && F.setTransform(...Z), (N === ZU.FILL || N === ZU.FILL_STROKE) && F.fill(), (N === ZU.STROKE || N === ZU.FILL_STROKE) && F.stroke(), F.restore()) : ((N === ZU.FILL || N === ZU.FILL_STROKE) && F.fillText(l, U, d), (N === ZU.STROKE || N === ZU.FILL_STROKE) && F.strokeText(l, U, d)), n && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Tl(F),
      x: U,
      y: d,
      fontSize: R,
      addToPath: a
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
    const F = this.ctx, Q = U.fontSizeScale, V = U.charSpacing, c = U.wordSpacing, R = U.fontDirection, N = U.textHScale * R, n = l.length, s = d.vertical, a = s ? 1 : -1, b = d.defaultVMetrics, M = Z * U.fontMatrix[0], G = U.textRenderingMode === ZU.FILL && !d.disableFontFace && !U.patternFill;
    F.save(), F.transform(...U.textMatrix), F.translate(U.x, U.y + U.textRise), R > 0 ? F.scale(N, -1) : F.scale(N, 1);
    let J;
    if (U.patternFill) {
      F.save();
      const X = U.fillColor.getPattern(F, this, Id(F), sU.FILL);
      J = Tl(F), F.restore(), F.fillStyle = X;
    }
    let T = U.lineWidth;
    const S = U.textMatrixScale;
    if (S === 0 || T === 0) {
      const X = U.textRenderingMode & ZU.FILL_STROKE_MASK;
      (X === ZU.STROKE || X === ZU.FILL_STROKE) && (T = this.getSinglePixelWidth());
    } else
      T /= S;
    if (Q !== 1 && (F.scale(Q, Q), T /= Q), F.lineWidth = T, d.isInvalidPDFjsFont) {
      const X = [];
      let e = 0;
      for (const o of l)
        X.push(o.unicode), e += o.width;
      F.fillText(X.join(""), 0, 0), U.x += e * M * N, F.restore(), this.compose();
      return;
    }
    let B = 0, Y;
    for (Y = 0; Y < n; ++Y) {
      const X = l[Y];
      if (typeof X == "number") {
        B += a * X * Z / 1e3;
        continue;
      }
      let e = !1;
      const o = (X.isSpace ? c : 0) + V, y = X.fontChar, O = X.accent;
      let E, ll, z = X.width;
      if (s) {
        const v = X.vmetric || b, A = -(X.vmetric ? v[1] : z * 0.5) * M, D = v[2] * M;
        z = v ? -v[0] : z, E = A / Q, ll = (B + D) / Q;
      } else
        E = B / Q, ll = 0;
      if (d.remeasure && z > 0) {
        const v = F.measureText(y).width * 1e3 / Z * Q;
        if (z < v && this.isFontSubpixelAAEnabled) {
          const A = z / v;
          e = !0, F.save(), F.scale(A, 1), E /= A;
        } else z !== v && (E += (z - v) / 2e3 * Z / Q);
      }
      if (this.contentVisible && (X.isInFont || d.missingFile)) {
        if (G && !O)
          F.fillText(y, E, ll);
        else if (this.paintChar(y, E, ll, J), O) {
          const v = E + Z * O.offset.x / Q, A = ll - Z * O.offset.y / Q;
          this.paintChar(O.fontChar, v, A, J);
        }
      }
      const C = s ? z * M - o * R : z * M + o * R;
      B += C, e && F.restore();
    }
    s ? U.y -= B : U.x += B * N, F.restore(), this.compose();
  }
  showType3Text(l) {
    const U = this.ctx, d = this.current, Z = d.font, F = d.fontSize, Q = d.fontDirection, V = Z.vertical ? 1 : -1, c = d.charSpacing, R = d.wordSpacing, N = d.textHScale * Q, n = d.fontMatrix || xc, s = l.length, a = d.textRenderingMode === ZU.INVISIBLE;
    let b, M, G, J;
    if (!(a || F === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, U.save(), U.transform(...d.textMatrix), U.translate(d.x, d.y), U.scale(N, Q), b = 0; b < s; ++b) {
        if (M = l[b], typeof M == "number") {
          J = V * M * F / 1e3, this.ctx.translate(J, 0), d.x += J * N;
          continue;
        }
        const T = (M.isSpace ? R : 0) + c, S = Z.charProcOperatorList[M.operatorListId];
        if (!S) {
          _(`Type3 character "${M.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = M, this.save(), U.scale(F, F), U.transform(...n), this.executeOperatorList(S), this.restore()), G = w.applyTransform([M.width, 0], n)[0] * F + T, U.translate(G, 0), d.x += G * N;
      }
      U.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(l, U) {
  }
  setCharWidthAndBounds(l, U, d, Z, F, Q) {
    this.ctx.rect(d, Z, F - d, Q - Z), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(l) {
    let U;
    if (l[0] === "TilingPattern") {
      const d = l[1], Z = this.baseTransform || Tl(this.ctx), F = {
        createCanvasGraphics: (Q) => new oN(Q, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      U = new aR(l, d, this.ctx, F, Z);
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
    const Z = w.makeHexColor(l, U, d);
    this.ctx.strokeStyle = Z, this.current.strokeColor = Z;
  }
  setFillRGBColor(l, U, d) {
    const Z = w.makeHexColor(l, U, d);
    this.ctx.fillStyle = Z, this.current.fillColor = Z, this.current.patternFill = !1;
  }
  _getPattern(l, U = null) {
    let d;
    return this.cachedPatterns.has(l) ? d = this.cachedPatterns.get(l) : (d = bh(this.getObject(l)), this.cachedPatterns.set(l, d)), U && (d.matrix = U), d;
  }
  shadingFill(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx;
    this.save();
    const d = this._getPattern(l);
    U.fillStyle = d.getPattern(U, this, Id(U), sU.SHADING);
    const Z = Id(U);
    if (Z) {
      const {
        width: F,
        height: Q
      } = U.canvas, [V, c, R, N] = w.getAxialAlignedBoundingBox([0, 0, F, Q], Z);
      this.ctx.fillRect(V, c, R - V, N - c);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    sl("Should not call beginInlineImage");
  }
  beginImageData() {
    sl("Should not call beginImageData");
  }
  paintFormXObjectBegin(l, U) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), l && this.transform(...l), this.baseTransform = Tl(this.ctx), U)) {
      const d = U[2] - U[0], Z = U[3] - U[1];
      this.ctx.rect(U[0], U[1], d, Z), this.current.updateRectMinMax(Tl(this.ctx), U), this.clip(), this.endPath();
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
    l.isolated || Rc("TODO: Support non-isolated groups."), l.knockout && _("Knockout groups not supported.");
    const d = Tl(U);
    if (l.matrix && U.transform(...l.matrix), !l.bbox)
      throw new Error("Bounding box is required.");
    let Z = w.getAxialAlignedBoundingBox(l.bbox, Tl(U));
    const F = [0, 0, U.canvas.width, U.canvas.height];
    Z = w.intersect(Z, F) || [0, 0, 0, 0];
    const Q = Math.floor(Z[0]), V = Math.floor(Z[1]), c = Math.max(Math.ceil(Z[2]) - Q, 1), R = Math.max(Math.ceil(Z[3]) - V, 1);
    this.current.startNewPathAndClipBox([0, 0, c, R]);
    let N = "groupAt" + this.groupLevel;
    l.smask && (N += "_smask_" + this.smaskCounter++ % 2);
    const n = this.cachedCanvases.getCanvas(N, c, R), s = n.context;
    s.translate(-Q, -V), s.transform(...d), l.smask ? this.smaskStack.push({
      canvas: n.canvas,
      context: s,
      offsetX: Q,
      offsetY: V,
      subtype: l.smask.subtype,
      backdrop: l.smask.backdrop,
      transferMap: l.smask.transferMap || null,
      startTransformInverse: null
    }) : (U.setTransform(1, 0, 0, 1, 0, 0), U.translate(Q, V), U.save()), uQ(U, s), this.ctx = s, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(U), this.groupLevel++;
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
      const Z = Tl(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...Z);
      const F = w.getAxialAlignedBoundingBox([0, 0, U.canvas.width, U.canvas.height], Z);
      this.ctx.drawImage(U.canvas, 0, 0), this.ctx.restore(), this.compose(F);
    }
  }
  beginAnnotation(l, U, d, Z, F) {
    if (i(this, qZ, bR).call(this), rV(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), U) {
      const Q = U[2] - U[0], V = U[3] - U[1];
      if (F && this.annotationCanvasMap) {
        d = d.slice(), d[4] -= U[0], d[5] -= U[1], U = U.slice(), U[0] = U[1] = 0, U[2] = Q, U[3] = V;
        const [c, R] = w.singularValueDecompose2dScale(Tl(this.ctx)), {
          viewportScale: N
        } = this, n = Math.ceil(Q * this.outputScaleX * N), s = Math.ceil(V * this.outputScaleY * N);
        this.annotationCanvas = this.canvasFactory.create(n, s);
        const {
          canvas: a,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(l, a), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(c, 0, 0, -R, 0, V * R), rV(this.ctx);
      } else
        rV(this.ctx), this.ctx.rect(U[0], U[1], Q, V), this.ctx.clip(), this.endPath();
    }
    this.current = new PN(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...d), this.transform(...Z);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), i(this, qZ, hR).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.count;
    l = this.getObject(l.data, l), l.count = U;
    const d = this.ctx, Z = this.processingType3;
    if (Z && (Z.compiled === void 0 && (Z.compiled = Jh(l)), Z.compiled)) {
      Z.compiled(d);
      return;
    }
    const F = this._createMaskCanvas(l), Q = F.canvas;
    d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.drawImage(Q, F.offsetX, F.offsetY), d.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(l, U, d = 0, Z = 0, F, Q) {
    if (!this.contentVisible)
      return;
    l = this.getObject(l.data, l);
    const V = this.ctx;
    V.save();
    const c = Tl(V);
    V.transform(U, d, Z, F, 0, 0);
    const R = this._createMaskCanvas(l);
    V.setTransform(1, 0, 0, 1, R.offsetX - c[4], R.offsetY - c[5]);
    for (let N = 0, n = Q.length; N < n; N += 2) {
      const s = w.transform(c, [U, d, Z, F, Q[N], Q[N + 1]]), [a, b] = w.applyTransform([0, 0], s);
      V.drawImage(R.canvas, a, b);
    }
    V.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(l) {
    if (!this.contentVisible)
      return;
    const U = this.ctx, d = this.current.fillColor, Z = this.current.patternFill;
    for (const F of l) {
      const {
        data: Q,
        width: V,
        height: c,
        transform: R
      } = F, N = this.cachedCanvases.getCanvas("maskCanvas", V, c), n = N.context;
      n.save();
      const s = this.getObject(Q, F);
      AN(n, s), n.globalCompositeOperation = "source-in", n.fillStyle = Z ? d.getPattern(n, this, Id(U), sU.FILL) : d, n.fillRect(0, 0, V, c), n.restore(), U.save(), U.transform(...R), U.scale(1, -1), OV(U, N.canvas, 0, 0, V, c, 0, -1, 1, 1), U.restore();
    }
    this.compose();
  }
  paintImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = this.getObject(l);
    if (!U) {
      _("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(U);
  }
  paintImageXObjectRepeat(l, U, d, Z) {
    if (!this.contentVisible)
      return;
    const F = this.getObject(l);
    if (!F) {
      _("Dependent image isn't ready yet");
      return;
    }
    const Q = F.width, V = F.height, c = [];
    for (let R = 0, N = Z.length; R < N; R += 2)
      c.push({
        transform: [U, 0, 0, d, Z[R], Z[R + 1]],
        x: 0,
        y: 0,
        w: Q,
        h: V
      });
    this.paintInlineImageXObjectGroup(F, c);
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
    } = l, F = this.cachedCanvases.getCanvas("inlineImage", d, Z), Q = F.context;
    return Q.filter = this.current.transferMaps, Q.drawImage(U, 0, 0), Q.filter = "none", F.canvas;
  }
  paintInlineImageXObject(l) {
    if (!this.contentVisible)
      return;
    const U = l.width, d = l.height, Z = this.ctx;
    if (this.save(), !WU) {
      const {
        filter: V
      } = Z;
      V !== "none" && V !== "" && (Z.filter = "none");
    }
    Z.scale(1 / U, -1 / d);
    let F;
    if (l.bitmap)
      F = this.applyTransferMapsToBitmap(l);
    else if (typeof HTMLElement == "function" && l instanceof HTMLElement || !l.data)
      F = l;
    else {
      const c = this.cachedCanvases.getCanvas("inlineImage", U, d).context;
      fN(c, l), F = this.applyTransferMapsToCanvas(c);
    }
    const Q = this._scaleImage(F, Id(Z));
    Z.imageSmoothingEnabled = _N(Tl(Z), l.interpolate), OV(Z, Q.img, 0, 0, Q.paintWidth, Q.paintHeight, 0, -d, U, d), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(l, U) {
    if (!this.contentVisible)
      return;
    const d = this.ctx;
    let Z;
    if (l.bitmap)
      Z = l.bitmap;
    else {
      const F = l.width, Q = l.height, c = this.cachedCanvases.getCanvas("inlineImage", F, Q).context;
      fN(c, l), Z = this.applyTransferMapsToCanvas(c);
    }
    for (const F of U)
      d.save(), d.transform(...F.transform), d.scale(1, -1), OV(d, Z, F.x, F.y, F.w, F.h, 0, -1, 1, 1), d.restore();
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
    this.pendingClip && (U || (this.pendingClip === qN ? d.clip("evenodd") : d.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), d.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const l = Tl(this.ctx);
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
      let Q, V;
      if (d === 0 && Z === 0) {
        const c = Math.abs(U), R = Math.abs(F);
        if (c === R)
          if (l === 0)
            Q = V = 1 / c;
          else {
            const N = c * l;
            Q = V = N < 1 ? 1 / N : 1;
          }
        else if (l === 0)
          Q = 1 / c, V = 1 / R;
        else {
          const N = c * l, n = R * l;
          Q = N < 1 ? 1 / N : 1, V = n < 1 ? 1 / n : 1;
        }
      } else {
        const c = Math.abs(U * F - d * Z), R = Math.hypot(U, d), N = Math.hypot(Z, F);
        if (l === 0)
          Q = N / c, V = R / c;
        else {
          const n = l * c;
          Q = N > n ? N / n : 1, V = R > n ? R / n : 1;
        }
      }
      this._cachedScaleForStroking[0] = Q, this._cachedScaleForStroking[1] = V;
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
    const Q = U.getLineDash();
    if (l && U.save(), U.scale(Z, F), Q.length > 0) {
      const V = Math.max(Z, F);
      U.setLineDash(Q.map((c) => c / V)), U.lineDashOffset /= V;
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
qZ = new WeakSet(), bR = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, hR = function() {
  if (this.pageColors) {
    const l = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (l !== "none") {
      const U = this.ctx.filter;
      this.ctx.filter = l, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = U;
    }
  }
};
let S0 = oN;
for (const W in _U)
  S0.prototype[W] !== void 0 && (S0.prototype[_U[W]] = S0.prototype[W]);
var Lt, kt;
class nZ {
  static get workerPort() {
    return t(this, Lt);
  }
  static set workerPort(l) {
    if (!(typeof Worker < "u" && l instanceof Worker) && l !== null)
      throw new Error("Invalid `workerPort` type.");
    h(this, Lt, l);
  }
  static get workerSrc() {
    return t(this, kt);
  }
  static set workerSrc(l) {
    if (typeof l != "string")
      throw new Error("Invalid `workerSrc` type.");
    h(this, kt, l);
  }
}
Lt = new WeakMap(), kt = new WeakMap(), m(nZ, Lt, null), m(nZ, kt, "");
const gV = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, pl = {
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
function YU(W) {
  switch (W instanceof Error || typeof W == "object" && W !== null || sl('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), W.name) {
    case "AbortException":
      return new R0(W.message);
    case "MissingPDFException":
      return new c0(W.message);
    case "PasswordException":
      return new Oc(W.message, W.code);
    case "UnexpectedResponseException":
      return new Nc(W.message, W.status);
    case "UnknownErrorException":
      return new rc(W.message, W.details);
    default:
      return new rc(W.message, W.toString());
  }
}
var od, cs, Rs, ZW;
class IQ {
  constructor(l, U, d) {
    m(this, od);
    this.sourceName = l, this.targetName = U, this.comObj = d, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (Z) => {
      const F = Z.data;
      if (F.targetName !== this.sourceName)
        return;
      if (F.stream) {
        i(this, od, Rs).call(this, F);
        return;
      }
      if (F.callback) {
        const V = F.callbackId, c = this.callbackCapabilities[V];
        if (!c)
          throw new Error(`Cannot resolve callback ${V}`);
        if (delete this.callbackCapabilities[V], F.callback === gV.DATA)
          c.resolve(F.data);
        else if (F.callback === gV.ERROR)
          c.reject(YU(F.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const Q = this.actionHandler[F.action];
      if (!Q)
        throw new Error(`Unknown action from worker: ${F.action}`);
      if (F.callbackId) {
        const V = this.sourceName, c = F.sourceName;
        new Promise(function(R) {
          R(Q(F.data));
        }).then(function(R) {
          d.postMessage({
            sourceName: V,
            targetName: c,
            callback: gV.DATA,
            callbackId: F.callbackId,
            data: R
          });
        }, function(R) {
          d.postMessage({
            sourceName: V,
            targetName: c,
            callback: gV.ERROR,
            callbackId: F.callbackId,
            reason: YU(R)
          });
        });
        return;
      }
      if (F.streamId) {
        i(this, od, cs).call(this, F);
        return;
      }
      Q(F.data);
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
    } catch (Q) {
      F.reject(Q);
    }
    return F.promise;
  }
  sendWithStream(l, U, d, Z) {
    const F = this.streamId++, Q = this.sourceName, V = this.targetName, c = this.comObj;
    return new ReadableStream({
      start: (R) => {
        const N = Promise.withResolvers();
        return this.streamControllers[F] = {
          controller: R,
          startCall: N,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, c.postMessage({
          sourceName: Q,
          targetName: V,
          action: l,
          streamId: F,
          data: U,
          desiredSize: R.desiredSize
        }, Z), N.promise;
      },
      pull: (R) => {
        const N = Promise.withResolvers();
        return this.streamControllers[F].pullCall = N, c.postMessage({
          sourceName: Q,
          targetName: V,
          stream: pl.PULL,
          streamId: F,
          desiredSize: R.desiredSize
        }), N.promise;
      },
      cancel: (R) => {
        wl(R instanceof Error, "cancel must have a valid reason");
        const N = Promise.withResolvers();
        return this.streamControllers[F].cancelCall = N, this.streamControllers[F].isClosed = !0, c.postMessage({
          sourceName: Q,
          targetName: V,
          stream: pl.CANCEL,
          streamId: F,
          reason: YU(R)
        }), N.promise;
      }
    }, d);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
od = new WeakSet(), cs = function(l) {
  const U = l.streamId, d = this.sourceName, Z = l.sourceName, F = this.comObj, Q = this, V = this.actionHandler[l.action], c = {
    enqueue(R, N = 1, n) {
      if (this.isCancelled)
        return;
      const s = this.desiredSize;
      this.desiredSize -= N, s > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), F.postMessage({
        sourceName: d,
        targetName: Z,
        stream: pl.ENQUEUE,
        streamId: U,
        chunk: R
      }, n);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, F.postMessage({
        sourceName: d,
        targetName: Z,
        stream: pl.CLOSE,
        streamId: U
      }), delete Q.streamSinks[U]);
    },
    error(R) {
      wl(R instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, F.postMessage({
        sourceName: d,
        targetName: Z,
        stream: pl.ERROR,
        streamId: U,
        reason: YU(R)
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
    R(V(l.data, c));
  }).then(function() {
    F.postMessage({
      sourceName: d,
      targetName: Z,
      stream: pl.START_COMPLETE,
      streamId: U,
      success: !0
    });
  }, function(R) {
    F.postMessage({
      sourceName: d,
      targetName: Z,
      stream: pl.START_COMPLETE,
      streamId: U,
      reason: YU(R)
    });
  });
}, Rs = function(l) {
  const U = l.streamId, d = this.sourceName, Z = l.sourceName, F = this.comObj, Q = this.streamControllers[U], V = this.streamSinks[U];
  switch (l.stream) {
    case pl.START_COMPLETE:
      l.success ? Q.startCall.resolve() : Q.startCall.reject(YU(l.reason));
      break;
    case pl.PULL_COMPLETE:
      l.success ? Q.pullCall.resolve() : Q.pullCall.reject(YU(l.reason));
      break;
    case pl.PULL:
      if (!V) {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: pl.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
        break;
      }
      V.desiredSize <= 0 && l.desiredSize > 0 && V.sinkCapability.resolve(), V.desiredSize = l.desiredSize, new Promise(function(c) {
        var R;
        c((R = V.onPull) == null ? void 0 : R.call(V));
      }).then(function() {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: pl.PULL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(c) {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: pl.PULL_COMPLETE,
          streamId: U,
          reason: YU(c)
        });
      });
      break;
    case pl.ENQUEUE:
      if (wl(Q, "enqueue should have stream controller"), Q.isClosed)
        break;
      Q.controller.enqueue(l.chunk);
      break;
    case pl.CLOSE:
      if (wl(Q, "close should have stream controller"), Q.isClosed)
        break;
      Q.isClosed = !0, Q.controller.close(), i(this, od, ZW).call(this, Q, U);
      break;
    case pl.ERROR:
      wl(Q, "error should have stream controller"), Q.controller.error(YU(l.reason)), i(this, od, ZW).call(this, Q, U);
      break;
    case pl.CANCEL_COMPLETE:
      l.success ? Q.cancelCall.resolve() : Q.cancelCall.reject(YU(l.reason)), i(this, od, ZW).call(this, Q, U);
      break;
    case pl.CANCEL:
      if (!V)
        break;
      new Promise(function(c) {
        var R;
        c((R = V.onCancel) == null ? void 0 : R.call(V, YU(l.reason)));
      }).then(function() {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: pl.CANCEL_COMPLETE,
          streamId: U,
          success: !0
        });
      }, function(c) {
        F.postMessage({
          sourceName: d,
          targetName: Z,
          stream: pl.CANCEL_COMPLETE,
          streamId: U,
          reason: YU(c)
        });
      }), V.sinkCapability.reject(YU(l.reason)), V.isCancelled = !0, delete this.streamSinks[U];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, ZW = async function(l, U) {
  var d, Z, F;
  await Promise.allSettled([(d = l.startCall) == null ? void 0 : d.promise, (Z = l.pullCall) == null ? void 0 : Z.promise, (F = l.cancelCall) == null ? void 0 : F.promise]), delete this.streamControllers[U];
};
var YF, Dt;
class Xh {
  constructor({
    parsedData: l,
    rawData: U
  }) {
    m(this, YF);
    m(this, Dt);
    h(this, YF, l), h(this, Dt, U);
  }
  getRaw() {
    return t(this, Dt);
  }
  get(l) {
    return t(this, YF).get(l) ?? null;
  }
  getAll() {
    return hN(t(this, YF));
  }
  has(l) {
    return t(this, YF).has(l);
  }
}
YF = new WeakMap(), Dt = new WeakMap();
const SZ = Symbol("INTERNAL");
var It, Et, Ct, j0;
class Yh {
  constructor(l, {
    name: U,
    intent: d,
    usage: Z
  }) {
    m(this, It, !1);
    m(this, Et, !1);
    m(this, Ct, !1);
    m(this, j0, !0);
    h(this, It, !!(l & HU.DISPLAY)), h(this, Et, !!(l & HU.PRINT)), this.name = U, this.intent = d, this.usage = Z;
  }
  get visible() {
    if (t(this, Ct))
      return t(this, j0);
    if (!t(this, j0))
      return !1;
    const {
      print: l,
      view: U
    } = this.usage;
    return t(this, It) ? (U == null ? void 0 : U.viewState) !== "OFF" : t(this, Et) ? (l == null ? void 0 : l.printState) !== "OFF" : !0;
  }
  _setVisible(l, U, d = !1) {
    l !== SZ && sl("Internal method `_setVisible` called."), h(this, Ct, d), h(this, j0, U);
  }
}
It = new WeakMap(), Et = new WeakMap(), Ct = new WeakMap(), j0 = new WeakMap();
var LZ, nl, O0, r0, wt, iR;
class Bh {
  constructor(l, U = HU.DISPLAY) {
    m(this, wt);
    m(this, LZ, null);
    m(this, nl, /* @__PURE__ */ new Map());
    m(this, O0, null);
    m(this, r0, null);
    if (this.renderingIntent = U, this.name = null, this.creator = null, l !== null) {
      this.name = l.name, this.creator = l.creator, h(this, r0, l.order);
      for (const d of l.groups)
        t(this, nl).set(d.id, new Yh(U, d));
      if (l.baseState === "OFF")
        for (const d of t(this, nl).values())
          d._setVisible(SZ, !1);
      for (const d of l.on)
        t(this, nl).get(d)._setVisible(SZ, !0);
      for (const d of l.off)
        t(this, nl).get(d)._setVisible(SZ, !1);
      h(this, O0, this.getHash());
    }
  }
  isVisible(l) {
    if (t(this, nl).size === 0)
      return !0;
    if (!l)
      return Rc("Optional content group not defined."), !0;
    if (l.type === "OCG")
      return t(this, nl).has(l.id) ? t(this, nl).get(l.id).visible : (_(`Optional content group not found: ${l.id}`), !0);
    if (l.type === "OCMD") {
      if (l.expression)
        return i(this, wt, iR).call(this, l.expression);
      if (!l.policy || l.policy === "AnyOn") {
        for (const U of l.ids) {
          if (!t(this, nl).has(U))
            return _(`Optional content group not found: ${U}`), !0;
          if (t(this, nl).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOn") {
        for (const U of l.ids) {
          if (!t(this, nl).has(U))
            return _(`Optional content group not found: ${U}`), !0;
          if (!t(this, nl).get(U).visible)
            return !1;
        }
        return !0;
      } else if (l.policy === "AnyOff") {
        for (const U of l.ids) {
          if (!t(this, nl).has(U))
            return _(`Optional content group not found: ${U}`), !0;
          if (!t(this, nl).get(U).visible)
            return !0;
        }
        return !1;
      } else if (l.policy === "AllOff") {
        for (const U of l.ids) {
          if (!t(this, nl).has(U))
            return _(`Optional content group not found: ${U}`), !0;
          if (t(this, nl).get(U).visible)
            return !1;
        }
        return !0;
      }
      return _(`Unknown optional content policy ${l.policy}.`), !0;
    }
    return _(`Unknown group type ${l.type}.`), !0;
  }
  setVisibility(l, U = !0) {
    const d = t(this, nl).get(l);
    if (!d) {
      _(`Optional content group not found: ${l}`);
      return;
    }
    d._setVisible(SZ, !!U, !0), h(this, LZ, null);
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
      const F = t(this, nl).get(Z);
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
    h(this, LZ, null);
  }
  get hasInitialVisibility() {
    return t(this, O0) === null || this.getHash() === t(this, O0);
  }
  getOrder() {
    return t(this, nl).size ? t(this, r0) ? t(this, r0).slice() : [...t(this, nl).keys()] : null;
  }
  getGroups() {
    return t(this, nl).size > 0 ? hN(t(this, nl)) : null;
  }
  getGroup(l) {
    return t(this, nl).get(l) || null;
  }
  getHash() {
    if (t(this, LZ) !== null)
      return t(this, LZ);
    const l = new Qs();
    for (const [U, d] of t(this, nl))
      l.update(`${U}:${d.visible}`);
    return h(this, LZ, l.hexdigest());
  }
}
LZ = new WeakMap(), nl = new WeakMap(), O0 = new WeakMap(), r0 = new WeakMap(), wt = new WeakSet(), iR = function(l) {
  const U = l.length;
  if (U < 2)
    return !0;
  const d = l[0];
  for (let Z = 1; Z < U; Z++) {
    const F = l[Z];
    let Q;
    if (Array.isArray(F))
      Q = i(this, wt, iR).call(this, F);
    else if (t(this, nl).has(F))
      Q = t(this, nl).get(F).visible;
    else
      return _(`Optional content group not found: ${F}`), !0;
    switch (d) {
      case "And":
        if (!Q)
          return !1;
        break;
      case "Or":
        if (Q)
          return !0;
        break;
      case "Not":
        return !Q;
      default:
        return !0;
    }
  }
  return d === "And";
};
class eh {
  constructor(l, {
    disableRange: U = !1,
    disableStream: d = !1
  }) {
    wl(l, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: Z,
      initialData: F,
      progressiveDone: Q,
      contentDispositionFilename: V
    } = l;
    if (this._queuedChunks = [], this._progressiveDone = Q, this._contentDispositionFilename = V, (F == null ? void 0 : F.length) > 0) {
      const c = F instanceof Uint8Array && F.byteLength === F.buffer.byteLength ? F.buffer : new Uint8Array(F).buffer;
      this._queuedChunks.push(c);
    }
    this._pdfDataRangeTransport = l, this._isStreamingSupported = !d, this._isRangeSupported = !U, this._contentLength = Z, this._fullRequestReader = null, this._rangeReaders = [], l.addRangeListener((c, R) => {
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
    const d = U instanceof Uint8Array && U.byteLength === U.buffer.byteLength ? U.buffer : new Uint8Array(U).buffer;
    if (l === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(d) : this._queuedChunks.push(d);
    else {
      const Z = this._rangeReaders.some(function(F) {
        return F._begin !== l ? !1 : (F._enqueue(d), !0);
      });
      wl(Z, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
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
    wl(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const l = this._queuedChunks;
    return this._queuedChunks = null, new uh(this, l, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const d = new ph(this, l, U);
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
class uh {
  constructor(l, U, d = !1, Z = null) {
    this._stream = l, this._done = d || !1, this._filename = GN(Z) ? Z : null, this._queuedChunks = U || [], this._loaded = 0;
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
class ph {
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
function yh(W) {
  let l = !0, U = d("filename\\*", "i").exec(W);
  if (U) {
    U = U[1];
    let N = V(U);
    return N = unescape(N), N = c(N), N = R(N), F(N);
  }
  if (U = Q(W), U) {
    const N = R(U);
    return F(N);
  }
  if (U = d("filename", "i").exec(W), U) {
    U = U[1];
    let N = V(U);
    return N = R(N), F(N);
  }
  function d(N, n) {
    return new RegExp("(?:^|;)\\s*" + N + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', n);
  }
  function Z(N, n) {
    if (N) {
      if (!/^[\x00-\xFF]+$/.test(n))
        return n;
      try {
        const s = new TextDecoder(N, {
          fatal: !0
        }), a = nc(n);
        n = s.decode(a), l = !1;
      } catch {
      }
    }
    return n;
  }
  function F(N) {
    return l && /[\x80-\xff]/.test(N) && (N = Z("utf-8", N), l && (N = Z("iso-8859-1", N))), N;
  }
  function Q(N) {
    const n = [];
    let s;
    const a = d("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (s = a.exec(N)) !== null; ) {
      let [, M, G, J] = s;
      if (M = parseInt(M, 10), M in n) {
        if (M === 0)
          break;
        continue;
      }
      n[M] = [G, J];
    }
    const b = [];
    for (let M = 0; M < n.length && M in n; ++M) {
      let [G, J] = n[M];
      J = V(J), G && (J = unescape(J), M === 0 && (J = c(J))), b.push(J);
    }
    return b.join("");
  }
  function V(N) {
    if (N.startsWith('"')) {
      const n = N.slice(1).split('\\"');
      for (let s = 0; s < n.length; ++s) {
        const a = n[s].indexOf('"');
        a !== -1 && (n[s] = n[s].slice(0, a), n.length = s + 1), n[s] = n[s].replaceAll(/\\(.)/g, "$1");
      }
      N = n.join('"');
    }
    return N;
  }
  function c(N) {
    const n = N.indexOf("'");
    if (n === -1)
      return N;
    const s = N.slice(0, n), b = N.slice(n + 1).replace(/^[^']*'/, "");
    return Z(s, b);
  }
  function R(N) {
    return !N.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(N) ? N : N.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(n, s, a, b) {
      if (a === "q" || a === "Q")
        return b = b.replaceAll("_", " "), b = b.replaceAll(/=([0-9a-fA-F]{2})/g, function(M, G) {
          return String.fromCharCode(parseInt(G, 16));
        }), Z(s, b);
      try {
        b = atob(b);
      } catch {
      }
      return Z(s, b);
    });
  }
  return "";
}
function XN({
  getResponseHeader: W,
  isHttp: l,
  rangeChunkSize: U,
  disableRange: d
}) {
  const Z = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, F = parseInt(W("Content-Length"), 10);
  return !Number.isInteger(F) || (Z.suggestedLength = F, F <= 2 * U) || d || !l || W("Accept-Ranges") !== "bytes" || (W("Content-Encoding") || "identity") !== "identity" || (Z.allowRangeRequests = !0), Z;
}
function YN(W) {
  const l = W("Content-Disposition");
  if (l) {
    let U = yh(l);
    if (U.includes("%"))
      try {
        U = decodeURIComponent(U);
      } catch {
      }
    if (GN(U))
      return U;
  }
  return null;
}
function ic(W, l) {
  return W === 404 || W === 0 && l.startsWith("file:") ? new c0('Missing PDF "' + l + '".') : new Nc(`Unexpected server response (${W}) while retrieving PDF "${l}".`, W);
}
function Ns(W) {
  return W === 200 || W === 206;
}
function ns(W, l, U) {
  return {
    method: "GET",
    headers: W,
    signal: U.signal,
    mode: "cors",
    credentials: l ? "include" : "same-origin",
    redirect: "follow"
  };
}
function ss(W) {
  const l = new Headers();
  for (const U in W) {
    const d = W[U];
    d !== void 0 && l.append(U, d);
  }
  return l;
}
function as(W) {
  return W instanceof Uint8Array ? W.buffer : W instanceof ArrayBuffer ? W : (_(`getArrayBuffer - unexpected data format: ${W}`), new Uint8Array(W).buffer);
}
class $N {
  constructor(l) {
    this.source = l, this.isHttp = /^https?:/i.test(l.url), this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return wl(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new oh(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const d = new zh(this, l, U);
    return this._rangeRequestReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeRequestReaders.slice(0))
      d.cancel(l);
  }
}
class oh {
  constructor(l) {
    this._stream = l, this._reader = null, this._loaded = 0, this._filename = null;
    const U = l.source;
    this._withCredentials = U.withCredentials || !1, this._contentLength = U.length, this._headersCapability = Promise.withResolvers(), this._disableRange = U.disableRange || !1, this._rangeChunkSize = U.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !U.disableStream, this._isRangeSupported = !U.disableRange, this._headers = ss(this._stream.httpHeaders);
    const d = U.url;
    fetch(d, ns(this._headers, this._withCredentials, this._abortController)).then((Z) => {
      if (!Ns(Z.status))
        throw ic(Z.status, d);
      this._reader = Z.body.getReader(), this._headersCapability.resolve();
      const F = (c) => Z.headers.get(c), {
        allowRangeRequests: Q,
        suggestedLength: V
      } = XN({
        getResponseHeader: F,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = Q, this._contentLength = V || this._contentLength, this._filename = YN(F), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new R0("Streaming is disabled."));
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
      value: as(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
class zh {
  constructor(l, U, d) {
    this._stream = l, this._reader = null, this._loaded = 0;
    const Z = l.source;
    this._withCredentials = Z.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !Z.disableStream, this._abortController = new AbortController(), this._headers = ss(this._stream.httpHeaders), this._headers.append("Range", `bytes=${U}-${d - 1}`);
    const F = Z.url;
    fetch(F, ns(this._headers, this._withCredentials, this._abortController)).then((Q) => {
      if (!Ns(Q.status))
        throw ic(Q.status, F);
      this._readCapability.resolve(), this._reader = Q.body.getReader();
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
      value: as(l),
      done: !1
    });
  }
  cancel(l) {
    var U;
    (U = this._reader) == null || U.cancel(l), this._abortController.abort();
  }
}
const ec = 200, uc = 206;
function Lh(W) {
  const l = W.response;
  return typeof l != "string" ? l : nc(l).buffer;
}
class kh {
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
      const Q = this.httpHeaders[F];
      Q !== void 0 && U.setRequestHeader(F, Q);
    }
    return this.isHttp && "begin" in l && "end" in l ? (U.setRequestHeader("Range", `bytes=${l.begin}-${l.end - 1}`), Z.expectedStatus = uc) : Z.expectedStatus = ec, U.responseType = "arraybuffer", l.onError && (U.onerror = function(F) {
      l.onError(U.status);
    }), U.onreadystatechange = this.onStateChange.bind(this, d), U.onprogress = this.onProgress.bind(this, d), Z.onHeadersReceived = l.onHeadersReceived, Z.onDone = l.onDone, Z.onError = l.onError, Z.onProgress = l.onProgress, U.send(null), d;
  }
  onProgress(l, U) {
    var Z;
    const d = this.pendingRequests[l];
    d && ((Z = d.onProgress) == null || Z.call(d, U));
  }
  onStateChange(l, U) {
    var c, R, N;
    const d = this.pendingRequests[l];
    if (!d)
      return;
    const Z = d.xhr;
    if (Z.readyState >= 2 && d.onHeadersReceived && (d.onHeadersReceived(), delete d.onHeadersReceived), Z.readyState !== 4 || !(l in this.pendingRequests))
      return;
    if (delete this.pendingRequests[l], Z.status === 0 && this.isHttp) {
      (c = d.onError) == null || c.call(d, Z.status);
      return;
    }
    const F = Z.status || ec;
    if (!(F === ec && d.expectedStatus === uc) && F !== d.expectedStatus) {
      (R = d.onError) == null || R.call(d, Z.status);
      return;
    }
    const V = Lh(Z);
    if (F === uc) {
      const n = Z.getResponseHeader("Content-Range"), s = /bytes (\d+)-(\d+)\/(\d+)/.exec(n);
      d.onDone({
        begin: parseInt(s[1], 10),
        chunk: V
      });
    } else V ? d.onDone({
      begin: 0,
      chunk: V
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
class Dh {
  constructor(l) {
    this._source = l, this._manager = new kh(l.url, {
      httpHeaders: l.httpHeaders,
      withCredentials: l.withCredentials
    }), this._rangeChunkSize = l.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(l) {
    const U = this._rangeRequestReaders.indexOf(l);
    U >= 0 && this._rangeRequestReaders.splice(U, 1);
  }
  getFullReader() {
    return wl(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Ih(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    const d = new Eh(this._manager, l, U);
    return d.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeRequestReaders.slice(0))
      d.cancel(l);
  }
}
class Ih {
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
    const l = this._fullRequestId, U = this._manager.getRequestXhr(l), d = (Q) => U.getResponseHeader(Q), {
      allowRangeRequests: Z,
      suggestedLength: F
    } = XN({
      getResponseHeader: d,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    Z && (this._isRangeSupported = !0), this._contentLength = F || this._contentLength, this._filename = YN(d), this._isRangeSupported && this._manager.abortRequest(l), this._headersReceivedCapability.resolve();
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
    this._storedError = ic(l, this._url), this._headersReceivedCapability.reject(this._storedError);
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
class Eh {
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
    this._storedError = ic(l, this._url);
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
const bs = /^file:\/\/\/[a-zA-Z]:\//;
function Ch(W) {
  const l = Ld.get("url"), U = l.parse(W);
  return U.protocol === "file:" || U.host ? U : /^[a-z]:[/\\]/i.test(W) ? l.parse(`file:///${W}`) : (U.host || (U.protocol = "file:"), U);
}
class wh {
  constructor(l) {
    this.source = l, this.url = Ch(l.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var l;
    return ((l = this._fullRequestReader) == null ? void 0 : l._loaded) ?? 0;
  }
  getFullReader() {
    return wl(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new Oh(this) : new xh(this), this._fullRequestReader;
  }
  getRangeReader(l, U) {
    if (U <= this._progressiveDataLength)
      return null;
    const d = this.isFsUrl ? new rh(this, l, U) : new jh(this, l, U);
    return this._rangeRequestReaders.push(d), d;
  }
  cancelAllRequests(l) {
    var U;
    (U = this._fullRequestReader) == null || U.cancel(l);
    for (const d of this._rangeRequestReaders.slice(0))
      d.cancel(l);
  }
}
class hs {
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new R0("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class is {
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
function zW(W, l) {
  return {
    protocol: W.protocol,
    auth: W.auth,
    host: W.hostname,
    port: W.port,
    path: W.path,
    method: "GET",
    headers: l
  };
}
class xh extends hs {
  constructor(l) {
    super(l);
    const U = (d) => {
      if (d.statusCode === 404) {
        const V = new c0(`Missing PDF "${this._url}".`);
        this._storedError = V, this._headersCapability.reject(V);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(d);
      const Z = (V) => this._readableStream.headers[V.toLowerCase()], {
        allowRangeRequests: F,
        suggestedLength: Q
      } = XN({
        getResponseHeader: Z,
        isHttp: l.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = F, this._contentLength = Q || this._contentLength, this._filename = YN(Z);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const d = Ld.get("http");
      this._request = d.request(zW(this._url, l.httpHeaders), U);
    } else {
      const d = Ld.get("https");
      this._request = d.request(zW(this._url, l.httpHeaders), U);
    }
    this._request.on("error", (d) => {
      this._storedError = d, this._headersCapability.reject(d);
    }), this._request.end();
  }
}
class jh extends is {
  constructor(l, U, d) {
    super(l), this._httpHeaders = {};
    for (const F in l.httpHeaders) {
      const Q = l.httpHeaders[F];
      Q !== void 0 && (this._httpHeaders[F] = Q);
    }
    this._httpHeaders.Range = `bytes=${U}-${d - 1}`;
    const Z = (F) => {
      if (F.statusCode === 404) {
        const Q = new c0(`Missing PDF "${this._url}".`);
        this._storedError = Q;
        return;
      }
      this._setReadableStream(F);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const F = Ld.get("http");
      this._request = F.request(zW(this._url, this._httpHeaders), Z);
    } else {
      const F = Ld.get("https");
      this._request = F.request(zW(this._url, this._httpHeaders), Z);
    }
    this._request.on("error", (F) => {
      this._storedError = F;
    }), this._request.end();
  }
}
class Oh extends hs {
  constructor(l) {
    super(l);
    let U = decodeURIComponent(this._url.path);
    bs.test(this._url.href) && (U = U.replace(/^\//, ""));
    const d = Ld.get("fs");
    d.promises.lstat(U).then((Z) => {
      this._contentLength = Z.size, this._setReadableStream(d.createReadStream(U)), this._headersCapability.resolve();
    }, (Z) => {
      Z.code === "ENOENT" && (Z = new c0(`Missing PDF "${U}".`)), this._storedError = Z, this._headersCapability.reject(Z);
    });
  }
}
class rh extends is {
  constructor(l, U, d) {
    super(l);
    let Z = decodeURIComponent(this._url.path);
    bs.test(this._url.href) && (Z = Z.replace(/^\//, ""));
    const F = Ld.get("fs");
    this._setReadableStream(F.createReadStream(Z, {
      start: U,
      end: d - 1
    }));
  }
}
const gh = 1e5, hU = 30, Kh = 0.8;
var Gn, kZ, MU, xt, jt, BF, Ad, Ot, rt, eF, g0, K0, DZ, H0, gt, v0, uF, Kt, Ht, pF, yF, IZ, P0, mZ, ms, Ms, mR, zd, FW, Js, Gs;
const QU = class QU {
  constructor({
    textContentSource: l,
    container: U,
    viewport: d
  }) {
    m(this, mZ);
    m(this, kZ, Promise.withResolvers());
    m(this, MU, null);
    m(this, xt, !1);
    m(this, jt, !!((Gn = globalThis.FontInspector) != null && Gn.enabled));
    m(this, BF, null);
    m(this, Ad, null);
    m(this, Ot, 0);
    m(this, rt, 0);
    m(this, eF, null);
    m(this, g0, null);
    m(this, K0, 0);
    m(this, DZ, 0);
    m(this, H0, /* @__PURE__ */ Object.create(null));
    m(this, gt, []);
    m(this, v0, null);
    m(this, uF, []);
    m(this, Kt, /* @__PURE__ */ new WeakMap());
    m(this, Ht, null);
    var c;
    if (l instanceof ReadableStream)
      h(this, v0, l);
    else if (typeof l == "object")
      h(this, v0, new ReadableStream({
        start(R) {
          R.enqueue(l), R.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    h(this, MU, h(this, g0, U)), h(this, DZ, d.scale * (globalThis.devicePixelRatio || 1)), h(this, K0, d.rotation), h(this, Ad, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: Z,
      pageHeight: F,
      pageX: Q,
      pageY: V
    } = d.rawDims;
    h(this, Ht, [1, 0, 0, -1, -Q, V + F]), h(this, rt, Z), h(this, Ot, F), i(c = QU, zd, Js).call(c), F0(U, d), t(this, kZ).promise.catch(() => {
    }).then(() => {
      t(QU, P0).delete(this), h(this, Ad, null), h(this, H0, null);
    });
  }
  render() {
    const l = () => {
      t(this, eF).read().then(({
        value: U,
        done: d
      }) => {
        if (d) {
          t(this, kZ).resolve();
          return;
        }
        t(this, BF) ?? h(this, BF, U.lang), Object.assign(t(this, H0), U.styles), i(this, mZ, ms).call(this, U.items), l();
      }, t(this, kZ).reject);
    };
    return h(this, eF, t(this, v0).getReader()), t(QU, P0).add(this), l(), t(this, kZ).promise;
  }
  update({
    viewport: l,
    onBefore: U = null
  }) {
    var F;
    const d = l.scale * (globalThis.devicePixelRatio || 1), Z = l.rotation;
    if (Z !== t(this, K0) && (U == null || U(), h(this, K0, Z), F0(t(this, g0), {
      rotation: Z
    })), d !== t(this, DZ)) {
      U == null || U(), h(this, DZ, d);
      const Q = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: i(F = QU, zd, FW).call(F, t(this, BF))
      };
      for (const V of t(this, uF))
        Q.properties = t(this, Kt).get(V), Q.div = V, i(this, mZ, mR).call(this, Q);
    }
  }
  cancel() {
    var U;
    const l = new R0("TextLayer task cancelled.");
    (U = t(this, eF)) == null || U.cancel(l).catch(() => {
    }), h(this, eF, null), t(this, kZ).reject(l);
  }
  get textDivs() {
    return t(this, uF);
  }
  get textContentItemsStr() {
    return t(this, gt);
  }
  static cleanup() {
    if (!(t(this, P0).size > 0)) {
      t(this, pF).clear();
      for (const {
        canvas: l
      } of t(this, yF).values())
        l.remove();
      t(this, yF).clear();
    }
  }
};
kZ = new WeakMap(), MU = new WeakMap(), xt = new WeakMap(), jt = new WeakMap(), BF = new WeakMap(), Ad = new WeakMap(), Ot = new WeakMap(), rt = new WeakMap(), eF = new WeakMap(), g0 = new WeakMap(), K0 = new WeakMap(), DZ = new WeakMap(), H0 = new WeakMap(), gt = new WeakMap(), v0 = new WeakMap(), uF = new WeakMap(), Kt = new WeakMap(), Ht = new WeakMap(), pF = new WeakMap(), yF = new WeakMap(), IZ = new WeakMap(), P0 = new WeakMap(), mZ = new WeakSet(), ms = function(l) {
  var Z, F;
  if (t(this, xt))
    return;
  (F = t(this, Ad)).ctx ?? (F.ctx = i(Z = QU, zd, FW).call(Z, t(this, BF)));
  const U = t(this, uF), d = t(this, gt);
  for (const Q of l) {
    if (U.length > gh) {
      _("Ignoring additional textDivs for performance reasons."), h(this, xt, !0);
      return;
    }
    if (Q.str === void 0) {
      if (Q.type === "beginMarkedContentProps" || Q.type === "beginMarkedContent") {
        const V = t(this, MU);
        h(this, MU, document.createElement("span")), t(this, MU).classList.add("markedContent"), Q.id !== null && t(this, MU).setAttribute("id", `${Q.id}`), V.append(t(this, MU));
      } else Q.type === "endMarkedContent" && h(this, MU, t(this, MU).parentNode);
      continue;
    }
    d.push(Q.str), i(this, mZ, Ms).call(this, Q);
  }
}, Ms = function(l) {
  var M;
  const U = document.createElement("span"), d = {
    angle: 0,
    canvasWidth: 0,
    hasText: l.str !== "",
    hasEOL: l.hasEOL,
    fontSize: 0
  };
  t(this, uF).push(U);
  const Z = w.transform(t(this, Ht), l.transform);
  let F = Math.atan2(Z[1], Z[0]);
  const Q = t(this, H0)[l.fontName];
  Q.vertical && (F += Math.PI / 2);
  const V = t(this, jt) && Q.fontSubstitution || Q.fontFamily, c = Math.hypot(Z[2], Z[3]), R = c * i(M = QU, zd, Gs).call(M, V, t(this, BF));
  let N, n;
  F === 0 ? (N = Z[4], n = Z[5] - R) : (N = Z[4] + R * Math.sin(F), n = Z[5] - R * Math.cos(F));
  const s = "calc(var(--scale-factor)*", a = U.style;
  t(this, MU) === t(this, g0) ? (a.left = `${(100 * N / t(this, rt)).toFixed(2)}%`, a.top = `${(100 * n / t(this, Ot)).toFixed(2)}%`) : (a.left = `${s}${N.toFixed(2)}px)`, a.top = `${s}${n.toFixed(2)}px)`), a.fontSize = `${s}${(t(QU, IZ) * c).toFixed(2)}px)`, a.fontFamily = V, d.fontSize = c, U.setAttribute("role", "presentation"), U.textContent = l.str, U.dir = l.dir, t(this, jt) && (U.dataset.fontName = Q.fontSubstitutionLoadedName || l.fontName), F !== 0 && (d.angle = F * (180 / Math.PI));
  let b = !1;
  if (l.str.length > 1)
    b = !0;
  else if (l.str !== " " && l.transform[0] !== l.transform[3]) {
    const G = Math.abs(l.transform[0]), J = Math.abs(l.transform[3]);
    G !== J && Math.max(G, J) / Math.min(G, J) > 1.5 && (b = !0);
  }
  if (b && (d.canvasWidth = Q.vertical ? l.height : l.width), t(this, Kt).set(U, d), t(this, Ad).div = U, t(this, Ad).properties = d, i(this, mZ, mR).call(this, t(this, Ad)), d.hasText && t(this, MU).append(U), d.hasEOL) {
    const G = document.createElement("br");
    G.setAttribute("role", "presentation"), t(this, MU).append(G);
  }
}, mR = function(l) {
  const {
    div: U,
    properties: d,
    ctx: Z,
    prevFontSize: F,
    prevFontFamily: Q
  } = l, {
    style: V
  } = U;
  let c = "";
  if (t(QU, IZ) > 1 && (c = `scale(${1 / t(QU, IZ)})`), d.canvasWidth !== 0 && d.hasText) {
    const {
      fontFamily: R
    } = V, {
      canvasWidth: N,
      fontSize: n
    } = d;
    (F !== n || Q !== R) && (Z.font = `${n * t(this, DZ)}px ${R}`, l.prevFontSize = n, l.prevFontFamily = R);
    const {
      width: s
    } = Z.measureText(U.textContent);
    s > 0 && (c = `scaleX(${N * t(this, DZ) / s}) ${c}`);
  }
  d.angle !== 0 && (c = `rotate(${d.angle}deg) ${c}`), c.length > 0 && (V.transform = c);
}, zd = new WeakSet(), FW = function(l = null) {
  let U = t(this, yF).get(l || (l = ""));
  if (!U) {
    const d = document.createElement("canvas");
    d.className = "hiddenCanvasElement", d.lang = l, document.body.append(d), U = d.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), t(this, yF).set(l, U);
  }
  return U;
}, Js = function() {
  if (t(this, IZ) !== null)
    return;
  const l = document.createElement("div");
  l.style.opacity = 0, l.style.lineHeight = 1, l.style.fontSize = "1px", l.textContent = "X", document.body.append(l), h(this, IZ, l.getBoundingClientRect().height), l.remove();
}, Gs = function(l, U) {
  const d = t(this, pF).get(l);
  if (d)
    return d;
  const Z = i(this, zd, FW).call(this, U), F = Z.font;
  Z.canvas.width = Z.canvas.height = hU, Z.font = `${hU}px ${l}`;
  const Q = Z.measureText("");
  let V = Q.fontBoundingBoxAscent, c = Math.abs(Q.fontBoundingBoxDescent);
  if (V) {
    const n = V / (V + c);
    return t(this, pF).set(l, n), Z.canvas.width = Z.canvas.height = 0, Z.font = F, n;
  }
  Z.strokeStyle = "red", Z.clearRect(0, 0, hU, hU), Z.strokeText("g", 0, 0);
  let R = Z.getImageData(0, 0, hU, hU).data;
  c = 0;
  for (let n = R.length - 1 - 3; n >= 0; n -= 4)
    if (R[n] > 0) {
      c = Math.ceil(n / 4 / hU);
      break;
    }
  Z.clearRect(0, 0, hU, hU), Z.strokeText("A", 0, hU), R = Z.getImageData(0, 0, hU, hU).data, V = 0;
  for (let n = 0, s = R.length; n < s; n += 4)
    if (R[n] > 0) {
      V = hU - Math.floor(n / 4 / hU);
      break;
    }
  Z.canvas.width = Z.canvas.height = 0, Z.font = F;
  const N = V ? V / (V + c) : Kh;
  return t(this, pF).set(l, N), N;
}, m(QU, zd), m(QU, pF, /* @__PURE__ */ new Map()), m(QU, yF, /* @__PURE__ */ new Map()), m(QU, IZ, null), m(QU, P0, /* @__PURE__ */ new Set());
let SQ = QU;
function Hh() {
  Ln("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: W,
    container: l,
    viewport: U,
    ...d
  } = arguments[0], Z = Object.keys(d);
  Z.length > 0 && _("Ignoring `renderTextLayer` parameters: " + Z.join(", "));
  const F = new SQ({
    textContentSource: W,
    container: l,
    viewport: U
  }), {
    textDivs: Q,
    textContentItemsStr: V
  } = F;
  return {
    promise: F.render(),
    textDivs: Q,
    textContentItemsStr: V
  };
}
function vh() {
  Ln("`updateTextLayer`, please use `TextLayer` instead.");
}
class dt {
  static textContent(l) {
    const U = [], d = {
      items: U,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function Z(F) {
      var c;
      if (!F)
        return;
      let Q = null;
      const V = F.name;
      if (V === "#text")
        Q = F.value;
      else if (dt.shouldBuildText(V))
        (c = F == null ? void 0 : F.attributes) != null && c.textContent ? Q = F.attributes.textContent : F.value && (Q = F.value);
      else return;
      if (Q !== null && U.push({
        str: Q
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
const Ph = 65536, fh = 100, Ah = 5e3, _h = WU ? Wh : fb, qh = WU ? ch : on, $h = WU ? Vh : Pb, li = WU ? Rh : zn;
function Ui(W = {}) {
  typeof W == "string" || W instanceof URL ? W = {
    url: W
  } : (W instanceof ArrayBuffer || ArrayBuffer.isView(W)) && (W = {
    data: W
  });
  const l = new MR(), {
    docId: U
  } = l, d = W.url ? di(W.url) : null, Z = W.data ? Zi(W.data) : null, F = W.httpHeaders || null, Q = W.withCredentials === !0, V = W.password ?? null, c = W.range instanceof Ts ? W.range : null, R = Number.isInteger(W.rangeChunkSize) && W.rangeChunkSize > 0 ? W.rangeChunkSize : Ph;
  let N = W.worker instanceof X0 ? W.worker : null;
  const n = W.verbosity, s = typeof W.docBaseUrl == "string" && !JN(W.docBaseUrl) ? W.docBaseUrl : null, a = typeof W.cMapUrl == "string" ? W.cMapUrl : null, b = W.cMapPacked !== !1, M = W.CMapReaderFactory || qh, G = typeof W.standardFontDataUrl == "string" ? W.standardFontDataUrl : null, J = W.StandardFontDataFactory || li, T = W.stopAtErrors !== !0, S = Number.isInteger(W.maxImageSize) && W.maxImageSize > -1 ? W.maxImageSize : -1, B = W.isEvalSupported !== !1, Y = typeof W.isOffscreenCanvasSupported == "boolean" ? W.isOffscreenCanvasSupported : !WU, X = Number.isInteger(W.canvasMaxAreaInBytes) ? W.canvasMaxAreaInBytes : -1, e = typeof W.disableFontFace == "boolean" ? W.disableFontFace : WU, o = W.fontExtraProperties === !0, y = W.enableXfa === !0, O = W.ownerDocument || globalThis.document, E = W.disableRange === !0, ll = W.disableStream === !0, z = W.disableAutoFetch === !0, C = W.pdfBug === !0, v = W.enableHWA === !0, A = c ? c.length : W.length ?? NaN, D = typeof W.useSystemFonts == "boolean" ? W.useSystemFonts : !WU && !e, x = typeof W.useWorkerFetch == "boolean" ? W.useWorkerFetch : M === on && J === zn && a && G && LQ(a, document.baseURI) && LQ(G, document.baseURI), xl = W.canvasFactory || new _h({
    ownerDocument: O,
    enableHWA: v
  }), GZ = W.filterFactory || new $h({
    docId: U,
    ownerDocument: O
  }), nd = null;
  Eb(n);
  const Bl = {
    canvasFactory: xl,
    filterFactory: GZ
  };
  if (x || (Bl.cMapReaderFactory = new M({
    baseUrl: a,
    isCompressed: b
  }), Bl.standardFontDataFactory = new J({
    baseUrl: G
  })), !N) {
    const Ll = {
      verbosity: n,
      port: nZ.workerPort
    };
    N = Ll.port ? X0.fromPort(Ll) : new X0(Ll), l._worker = N;
  }
  const p = {
    docId: U,
    apiVersion: "4.4.168",
    data: Z,
    password: V,
    disableAutoFetch: z,
    rangeChunkSize: R,
    length: A,
    docBaseUrl: s,
    enableXfa: y,
    evaluatorOptions: {
      maxImageSize: S,
      disableFontFace: e,
      ignoreErrors: T,
      isEvalSupported: B,
      isOffscreenCanvasSupported: Y,
      canvasMaxAreaInBytes: X,
      fontExtraProperties: o,
      useSystemFonts: D,
      cMapUrl: x ? a : null,
      standardFontDataUrl: x ? G : null
    }
  }, Ql = {
    disableFontFace: e,
    fontExtraProperties: o,
    ownerDocument: O,
    pdfBug: C,
    styleElement: nd,
    loadingParams: {
      disableAutoFetch: z,
      enableXfa: y
    }
  };
  return N.promise.then(function() {
    if (l.destroyed)
      throw new Error("Loading aborted");
    if (N.destroyed)
      throw new Error("Worker was destroyed");
    const Ll = N.messageHandler.sendWithPromise("GetDocRequest", p, Z ? [Z.buffer] : null);
    let UU;
    if (c)
      UU = new eh(c, {
        disableRange: E,
        disableStream: ll
      });
    else if (!Z) {
      if (!d)
        throw new Error("getDocument - no `url` parameter provided.");
      UU = ((wU) => WU ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && LQ(wU.url) ? new $N(wU) : new wh(wU) : LQ(wU.url) ? new $N(wU) : new Dh(wU))({
        url: d,
        length: A,
        httpHeaders: F,
        withCredentials: Q,
        rangeChunkSize: R,
        disableRange: E,
        disableStream: ll
      });
    }
    return Ll.then((ml) => {
      if (l.destroyed)
        throw new Error("Loading aborted");
      if (N.destroyed)
        throw new Error("Worker was destroyed");
      const wU = new IQ(U, ml, N.port), LN = new Vi(wU, l, UU, Ql, Bl);
      l._transport = LN, wU.send("Ready", null);
    });
  }).catch(l._capability.reject), l;
}
function di(W) {
  if (W instanceof URL)
    return W.href;
  try {
    return new URL(W, window.location).href;
  } catch {
    if (WU && typeof W == "string")
      return W;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function Zi(W) {
  if (WU && typeof Buffer < "u" && W instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (W instanceof Uint8Array && W.byteLength === W.buffer.byteLength)
    return W;
  if (typeof W == "string")
    return nc(W);
  if (W instanceof ArrayBuffer || ArrayBuffer.isView(W) || typeof W == "object" && !isNaN(W == null ? void 0 : W.length))
    return new Uint8Array(W);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function ln(W) {
  return typeof W == "object" && Number.isInteger(W == null ? void 0 : W.num) && W.num >= 0 && Number.isInteger(W == null ? void 0 : W.gen) && W.gen >= 0;
}
var qW;
const $W = class $W {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${XU($W, qW)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
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
qW = new WeakMap(), m($W, qW, 0);
let MR = $W;
class Ts {
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
    sl("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class Fi {
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
var EZ, _d, vU, i0, QW;
class Qi {
  constructor(l, U, d, Z = !1) {
    m(this, vU);
    m(this, EZ, null);
    m(this, _d, !1);
    this._pageIndex = l, this._pageInfo = U, this._transport = d, this._stats = Z ? new xN() : null, this._pdfBug = Z, this.commonObjs = d.commonObjs, this.objs = new Ss(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
    return new IV({
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
    annotationMode: Z = BZ.ENABLE,
    transform: F = null,
    background: Q = null,
    optionalContentConfigPromise: V = null,
    annotationCanvasMap: c = null,
    pageColors: R = null,
    printAnnotationStorage: N = null
  }) {
    var S, B;
    (S = this._stats) == null || S.time("Overall");
    const n = this._transport.getRenderingIntent(d, Z, N), {
      renderingIntent: s,
      cacheKey: a
    } = n;
    h(this, _d, !1), i(this, vU, QW).call(this), V || (V = this._transport.getOptionalContentConfig(s));
    let b = this._intentStates.get(a);
    b || (b = /* @__PURE__ */ Object.create(null), this._intentStates.set(a, b)), b.streamReaderCancelTimeout && (clearTimeout(b.streamReaderCancelTimeout), b.streamReaderCancelTimeout = null);
    const M = !!(s & HU.PRINT);
    b.displayReadyCapability || (b.displayReadyCapability = Promise.withResolvers(), b.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (B = this._stats) == null || B.time("Page Request"), this._pumpOperatorList(n));
    const G = (Y) => {
      var X;
      b.renderTasks.delete(J), (this._maybeCleanupAfterRender || M) && h(this, _d, !0), i(this, vU, i0).call(this, !M), Y ? (J.capability.reject(Y), this._abortOperatorList({
        intentState: b,
        reason: Y instanceof Error ? Y : new Error(Y)
      })) : J.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (X = globalThis.Stats) != null && X.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, J = new GR({
      callback: G,
      params: {
        canvasContext: l,
        viewport: U,
        transform: F,
        background: Q
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: c,
      operatorList: b.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !M,
      pdfBug: this._pdfBug,
      pageColors: R
    });
    (b.renderTasks || (b.renderTasks = /* @__PURE__ */ new Set())).add(J);
    const T = J.task;
    return Promise.all([b.displayReadyCapability.promise, V]).then(([Y, X]) => {
      var e;
      if (this.destroyed) {
        G();
        return;
      }
      if ((e = this._stats) == null || e.time("Rendering"), !(X.renderingIntent & s))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      J.initializeGraphics({
        transparency: Y,
        optionalContentConfig: X
      }), J.operatorListChanged();
    }).catch(G), T;
  }
  getOperatorList({
    intent: l = "display",
    annotationMode: U = BZ.ENABLE,
    printAnnotationStorage: d = null
  } = {}) {
    var c;
    function Z() {
      Q.operatorList.lastChunk && (Q.opListReadCapability.resolve(Q.operatorList), Q.renderTasks.delete(V));
    }
    const F = this._transport.getRenderingIntent(l, U, d, !0);
    let Q = this._intentStates.get(F.cacheKey);
    Q || (Q = /* @__PURE__ */ Object.create(null), this._intentStates.set(F.cacheKey, Q));
    let V;
    return Q.opListReadCapability || (V = /* @__PURE__ */ Object.create(null), V.operatorListChanged = Z, Q.opListReadCapability = Promise.withResolvers(), (Q.renderTasks || (Q.renderTasks = /* @__PURE__ */ new Set())).add(V), Q.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (c = this._stats) == null || c.time("Page Request"), this._pumpOperatorList(F)), Q.opListReadCapability.promise;
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
      return this.getXfa().then((d) => dt.textContent(d));
    const U = this.streamTextContent(l);
    return new Promise(function(d, Z) {
      function F() {
        Q.read().then(function({
          value: c,
          done: R
        }) {
          if (R) {
            d(V);
            return;
          }
          V.lang ?? (V.lang = c.lang), Object.assign(V.styles, c.styles), V.items.push(...c.items), F();
        }, Z);
      }
      const Q = U.getReader(), V = {
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
    return this.objs.clear(), h(this, _d, !1), i(this, vU, QW).call(this), Promise.all(l);
  }
  cleanup(l = !1) {
    h(this, _d, !0);
    const U = i(this, vU, i0).call(this, !1);
    return l && U && this._stats && (this._stats = new xN()), U;
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
    l.lastChunk && i(this, vU, i0).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: l,
    cacheKey: U,
    annotationStorageSerializable: d
  }) {
    const {
      map: Z,
      transfer: F
    } = d, V = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: l,
      cacheKey: U,
      annotationStorage: Z
    }, F).getReader(), c = this._intentStates.get(U);
    c.streamReader = V;
    const R = () => {
      V.read().then(({
        value: N,
        done: n
      }) => {
        if (n) {
          c.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(N, c), R());
      }, (N) => {
        if (c.streamReader = null, !this._transport.destroyed) {
          if (c.operatorList) {
            c.operatorList.lastChunk = !0;
            for (const n of c.renderTasks)
              n.operatorListChanged();
            i(this, vU, i0).call(this, !0);
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
    force: d = !1
  }) {
    if (l.streamReader) {
      if (l.streamReaderCancelTimeout && (clearTimeout(l.streamReaderCancelTimeout), l.streamReaderCancelTimeout = null), !d) {
        if (l.renderTasks.size > 0)
          return;
        if (U instanceof MN) {
          let Z = fh;
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
      if (l.streamReader.cancel(new R0(U.message)).catch(() => {
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
EZ = new WeakMap(), _d = new WeakMap(), vU = new WeakSet(), i0 = function(l = !1) {
  if (i(this, vU, QW).call(this), !t(this, _d) || this.destroyed)
    return !1;
  if (l)
    return h(this, EZ, setTimeout(() => {
      h(this, EZ, null), i(this, vU, i0).call(this, !1);
    }, Ah)), !1;
  for (const {
    renderTasks: U,
    operatorList: d
  } of this._intentStates.values())
    if (U.size > 0 || !d.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), h(this, _d, !1), !0;
}, QW = function() {
  t(this, EZ) && (clearTimeout(t(this, EZ)), h(this, EZ, null));
};
var oF, lc;
class ti {
  constructor() {
    m(this, oF, /* @__PURE__ */ new Set());
    m(this, lc, Promise.resolve());
  }
  postMessage(l, U) {
    const d = {
      data: structuredClone(l, U ? {
        transfer: U
      } : null)
    };
    t(this, lc).then(() => {
      for (const Z of t(this, oF))
        Z.call(this, d);
    });
  }
  addEventListener(l, U) {
    t(this, oF).add(U);
  }
  removeEventListener(l, U) {
    t(this, oF).delete(U);
  }
  terminate() {
    t(this, oF).clear();
  }
}
oF = new WeakMap(), lc = new WeakMap();
const jd = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
WU && (jd.isWorkerDisabled = !0, nZ.workerSrc || (nZ.workerSrc = "./pdf.worker.mjs")), jd.isSameOrigin = function(W, l) {
  let U;
  try {
    if (U = new URL(W), !U.origin || U.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const d = new URL(l, U);
  return U.origin === d.origin;
}, jd.createCDNWrapper = function(W) {
  const l = `await import("${W}");`;
  return URL.createObjectURL(new Blob([l], {
    type: "text/javascript"
  }));
};
var zF, f0, tW, A0, VW;
const uU = class uU {
  constructor({
    name: l = null,
    port: U = null,
    verbosity: d = Cb()
  } = {}) {
    m(this, f0);
    var Z;
    if (this.name = l, this.destroyed = !1, this.verbosity = d, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, U) {
      if ((Z = t(uU, zF)) != null && Z.has(U))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (t(uU, zF) || h(uU, zF, /* @__PURE__ */ new WeakMap())).set(U, this), this._initializeFromPort(U);
      return;
    }
    this._initialize();
  }
  get promise() {
    return WU ? Promise.all([Ld.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(l) {
    this._port = l, this._messageHandler = new IQ("main", "worker", l), this._messageHandler.on("ready", function() {
    }), i(this, f0, tW).call(this);
  }
  _initialize() {
    if (jd.isWorkerDisabled || t(uU, A0, VW)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: l
    } = uU;
    try {
      jd.isSameOrigin(window.location.href, l) || (l = jd.createCDNWrapper(new URL(l, window.location).href));
      const U = new Worker(l, {
        type: "module"
      }), d = new IQ("main", "worker", U), Z = () => {
        F.abort(), d.destroy(), U.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, F = new AbortController();
      U.addEventListener("error", () => {
        this._webWorker || Z();
      }, {
        signal: F.signal
      }), d.on("test", (V) => {
        if (F.abort(), this.destroyed || !V) {
          Z();
          return;
        }
        this._messageHandler = d, this._port = U, this._webWorker = U, i(this, f0, tW).call(this);
      }), d.on("ready", (V) => {
        if (F.abort(), this.destroyed) {
          Z();
          return;
        }
        try {
          Q();
        } catch {
          this._setupFakeWorker();
        }
      });
      const Q = () => {
        const V = new Uint8Array();
        d.send("test", V, [V.buffer]);
      };
      Q();
      return;
    } catch {
      Rc("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    jd.isWorkerDisabled || (_("Setting up fake worker."), jd.isWorkerDisabled = !0), uU._setupFakeWorkerGlobal.then((l) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const U = new ti();
      this._port = U;
      const d = `fake${jd.fakeWorkerId++}`, Z = new IQ(d + "_worker", d, U);
      l.setup(Z, U), this._messageHandler = new IQ(d, d + "_worker", U), i(this, f0, tW).call(this);
    }).catch((l) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${l.message}".`));
    });
  }
  destroy() {
    var l;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (l = t(uU, zF)) == null || l.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(l) {
    var d;
    if (!(l != null && l.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const U = (d = t(this, zF)) == null ? void 0 : d.get(l.port);
    if (U) {
      if (U._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return U;
    }
    return new uU(l);
  }
  static get workerSrc() {
    if (nZ.workerSrc)
      return nZ.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return Fl(this, "_setupFakeWorkerGlobal", (async () => t(this, A0, VW) ? t(this, A0, VW) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
zF = new WeakMap(), f0 = new WeakSet(), tW = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, A0 = new WeakSet(), VW = function() {
  var l;
  try {
    return ((l = globalThis.pdfjsWorker) == null ? void 0 : l.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, m(uU, A0), m(uU, zF);
let X0 = uU;
var qd, Jd, _0, q0, Gd, LF, EQ;
class Vi {
  constructor(l, U, d, Z, F) {
    m(this, LF);
    m(this, qd, /* @__PURE__ */ new Map());
    m(this, Jd, /* @__PURE__ */ new Map());
    m(this, _0, /* @__PURE__ */ new Map());
    m(this, q0, /* @__PURE__ */ new Map());
    m(this, Gd, null);
    this.messageHandler = l, this.loadingTask = U, this.commonObjs = new Ss(), this.fontLoader = new Qh({
      ownerDocument: Z.ownerDocument,
      styleElement: Z.styleElement
    }), this.loadingParams = Z.loadingParams, this._params = Z, this.canvasFactory = F.canvasFactory, this.filterFactory = F.filterFactory, this.cMapReaderFactory = F.cMapReaderFactory, this.standardFontDataFactory = F.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = d, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return Fl(this, "annotationStorage", new SN());
  }
  getRenderingIntent(l, U = BZ.ENABLE, d = null, Z = !1) {
    let F = HU.DISPLAY, Q = NR;
    switch (l) {
      case "any":
        F = HU.ANY;
        break;
      case "display":
        break;
      case "print":
        F = HU.PRINT;
        break;
      default:
        _(`getRenderingIntent - invalid intent: ${l}`);
    }
    switch (U) {
      case BZ.DISABLE:
        F += HU.ANNOTATIONS_DISABLE;
        break;
      case BZ.ENABLE:
        break;
      case BZ.ENABLE_FORMS:
        F += HU.ANNOTATIONS_FORMS;
        break;
      case BZ.ENABLE_STORAGE:
        F += HU.ANNOTATIONS_STORAGE, Q = (F & HU.PRINT && d instanceof Vs ? d : this.annotationStorage).serializable;
        break;
      default:
        _(`getRenderingIntent - invalid annotationMode: ${U}`);
    }
    return Z && (F += HU.OPLIST), {
      renderingIntent: F,
      cacheKey: `${F}_${Q.hash}`,
      annotationStorageSerializable: Q
    };
  }
  destroy() {
    var d;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (d = t(this, Gd)) == null || d.reject(new Error("Worker was destroyed during onPassword callback"));
    const l = [];
    for (const Z of t(this, Jd).values())
      l.push(Z._destroy());
    t(this, Jd).clear(), t(this, _0).clear(), t(this, q0).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const U = this.messageHandler.sendWithPromise("Terminate", null);
    return l.push(U), Promise.all(l).then(() => {
      var Z;
      this.commonObjs.clear(), this.fontLoader.clear(), t(this, qd).clear(), this.filterFactory.destroy(), SQ.cleanup(), (Z = this._networkStream) == null || Z.cancelAllRequests(new R0("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: l,
      loadingTask: U
    } = this;
    l.on("GetReader", (d, Z) => {
      wl(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (F) => {
        this._lastProgress = {
          loaded: F.loaded,
          total: F.total
        };
      }, Z.onPull = () => {
        this._fullReader.read().then(function({
          value: F,
          done: Q
        }) {
          if (Q) {
            Z.close();
            return;
          }
          wl(F instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), Z.enqueue(new Uint8Array(F), 1, [F]);
        }).catch((F) => {
          Z.error(F);
        });
      }, Z.onCancel = (F) => {
        this._fullReader.cancel(F), Z.ready.catch((Q) => {
          if (!this.destroyed)
            throw Q;
        });
      };
    }), l.on("ReaderHeadersReady", (d) => {
      const Z = Promise.withResolvers(), F = this._fullReader;
      return F.headersReady.then(() => {
        var Q;
        (!F.isStreamingSupported || !F.isRangeSupported) && (this._lastProgress && ((Q = U.onProgress) == null || Q.call(U, this._lastProgress)), F.onProgress = (V) => {
          var c;
          (c = U.onProgress) == null || c.call(U, {
            loaded: V.loaded,
            total: V.total
          });
        }), Z.resolve({
          isStreamingSupported: F.isStreamingSupported,
          isRangeSupported: F.isRangeSupported,
          contentLength: F.contentLength
        });
      }, Z.reject), Z.promise;
    }), l.on("GetRangeReader", (d, Z) => {
      wl(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const F = this._networkStream.getRangeReader(d.begin, d.end);
      if (!F) {
        Z.close();
        return;
      }
      Z.onPull = () => {
        F.read().then(function({
          value: Q,
          done: V
        }) {
          if (V) {
            Z.close();
            return;
          }
          wl(Q instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), Z.enqueue(new Uint8Array(Q), 1, [Q]);
        }).catch((Q) => {
          Z.error(Q);
        });
      }, Z.onCancel = (Q) => {
        F.cancel(Q), Z.ready.catch((V) => {
          if (!this.destroyed)
            throw V;
        });
      };
    }), l.on("GetDoc", ({
      pdfInfo: d
    }) => {
      this._numPages = d.numPages, this._htmlForXfa = d.htmlForXfa, delete d.htmlForXfa, U._capability.resolve(new Fi(d, this));
    }), l.on("DocException", function(d) {
      let Z;
      switch (d.name) {
        case "PasswordException":
          Z = new Oc(d.message, d.code);
          break;
        case "InvalidPDFException":
          Z = new en(d.message);
          break;
        case "MissingPDFException":
          Z = new c0(d.message);
          break;
        case "UnexpectedResponseException":
          Z = new Nc(d.message, d.status);
          break;
        case "UnknownErrorException":
          Z = new rc(d.message, d.details);
          break;
        default:
          sl("DocException - expected a valid Error.");
      }
      U._capability.reject(Z);
    }), l.on("PasswordRequest", (d) => {
      if (h(this, Gd, Promise.withResolvers()), U.onPassword) {
        const Z = (F) => {
          F instanceof Error ? t(this, Gd).reject(F) : t(this, Gd).resolve({
            password: F
          });
        };
        try {
          U.onPassword(Z, d.code);
        } catch (F) {
          t(this, Gd).reject(F);
        }
      } else
        t(this, Gd).reject(new Oc(d.message, d.code));
      return t(this, Gd).promise;
    }), l.on("DataLoaded", (d) => {
      var Z;
      (Z = U.onProgress) == null || Z.call(U, {
        loaded: d.length,
        total: d.length
      }), this.downloadInfoCapability.resolve(d);
    }), l.on("StartRenderPage", (d) => {
      if (this.destroyed)
        return;
      t(this, Jd).get(d.pageIndex)._startRenderPage(d.transparency, d.cacheKey);
    }), l.on("commonobj", ([d, Z, F]) => {
      var Q;
      if (this.destroyed || this.commonObjs.has(d))
        return null;
      switch (Z) {
        case "Font":
          const {
            disableFontFace: V,
            fontExtraProperties: c,
            pdfBug: R
          } = this._params;
          if ("error" in F) {
            const a = F.error;
            _(`Error during font loading: ${a}`), this.commonObjs.resolve(d, a);
            break;
          }
          const N = R && ((Q = globalThis.FontInspector) != null && Q.enabled) ? (a, b) => globalThis.FontInspector.fontAdded(a, b) : null, n = new th(F, {
            disableFontFace: V,
            inspectFont: N
          });
          this.fontLoader.bind(n).catch(() => l.sendWithPromise("FontFallback", {
            id: d
          })).finally(() => {
            !c && n.data && (n.data = null), this.commonObjs.resolve(d, n);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: s
          } = F;
          wl(s, "The imageRef must be defined.");
          for (const a of t(this, Jd).values())
            for (const [, b] of a.objs)
              if ((b == null ? void 0 : b.ref) === s)
                return b.dataLen ? (this.commonObjs.resolve(d, structuredClone(b)), b.dataLen) : null;
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
    }), l.on("obj", ([d, Z, F, Q]) => {
      var c;
      if (this.destroyed)
        return;
      const V = t(this, Jd).get(Z);
      if (!V.objs.has(d)) {
        if (V._intentStates.size === 0) {
          (c = Q == null ? void 0 : Q.bitmap) == null || c.close();
          return;
        }
        switch (F) {
          case "Image":
            V.objs.resolve(d, Q), (Q == null ? void 0 : Q.dataLen) > Lb && (V._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            V.objs.resolve(d, Q);
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
    this.annotationStorage.size <= 0 && _("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
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
    const U = l - 1, d = t(this, _0).get(U);
    if (d)
      return d;
    const Z = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: U
    }).then((F) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      F.refStr && t(this, q0).set(F.refStr, l);
      const Q = new Qi(U, F, this, this._params.pdfBug);
      return t(this, Jd).set(U, Q), Q;
    });
    return t(this, _0).set(U, Z), Z;
  }
  getPageIndex(l) {
    return ln(l) ? this.messageHandler.sendWithPromise("GetPageIndex", {
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
    return i(this, LF, EQ).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return i(this, LF, EQ).call(this, "HasJSActions");
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
    return i(this, LF, EQ).call(this, "GetDocJSActions");
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
    return i(this, LF, EQ).call(this, "GetOptionalContentConfig").then((U) => new Bh(U, l));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const l = "GetMetadata", U = t(this, qd).get(l);
    if (U)
      return U;
    const d = this.messageHandler.sendWithPromise(l, null).then((Z) => {
      var F, Q;
      return {
        info: Z[0],
        metadata: Z[1] ? new Xh(Z[1]) : null,
        contentDispositionFilename: ((F = this._fullReader) == null ? void 0 : F.filename) ?? null,
        contentLength: ((Q = this._fullReader) == null ? void 0 : Q.contentLength) ?? null
      };
    });
    return t(this, qd).set(l, d), d;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(l = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const U of t(this, Jd).values())
        if (!U.cleanup())
          throw new Error(`startCleanup: Page ${U.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), l || this.fontLoader.clear(), t(this, qd).clear(), this.filterFactory.destroy(!0), SQ.cleanup();
    }
  }
  cachedPageNumber(l) {
    if (!ln(l))
      return null;
    const U = l.gen === 0 ? `${l.num}R` : `${l.num}R${l.gen}`;
    return t(this, q0).get(U) ?? null;
  }
}
qd = new WeakMap(), Jd = new WeakMap(), _0 = new WeakMap(), q0 = new WeakMap(), Gd = new WeakMap(), LF = new WeakSet(), EQ = function(l, U = null) {
  const d = t(this, qd).get(l);
  if (d)
    return d;
  const Z = this.messageHandler.sendWithPromise(l, U);
  return t(this, qd).set(l, Z), Z;
};
const KV = Symbol("INITIAL_DATA");
var Zd, vt, JR;
class Ss {
  constructor() {
    m(this, vt);
    m(this, Zd, /* @__PURE__ */ Object.create(null));
  }
  get(l, U = null) {
    if (U) {
      const Z = i(this, vt, JR).call(this, l);
      return Z.promise.then(() => U(Z.data)), null;
    }
    const d = t(this, Zd)[l];
    if (!d || d.data === KV)
      throw new Error(`Requesting object that isn't resolved yet ${l}.`);
    return d.data;
  }
  has(l) {
    const U = t(this, Zd)[l];
    return !!U && U.data !== KV;
  }
  resolve(l, U = null) {
    const d = i(this, vt, JR).call(this, l);
    d.data = U, d.resolve();
  }
  clear() {
    var l;
    for (const U in t(this, Zd)) {
      const {
        data: d
      } = t(this, Zd)[U];
      (l = d == null ? void 0 : d.bitmap) == null || l.close();
    }
    h(this, Zd, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const l in t(this, Zd)) {
      const {
        data: U
      } = t(this, Zd)[l];
      U !== KV && (yield [l, U]);
    }
  }
}
Zd = new WeakMap(), vt = new WeakSet(), JR = function(l) {
  var U;
  return (U = t(this, Zd))[l] || (U[l] = {
    ...Promise.withResolvers(),
    data: KV
  });
};
var CZ;
class Wi {
  constructor(l) {
    m(this, CZ, null);
    h(this, CZ, l), this.onContinue = null;
  }
  get promise() {
    return t(this, CZ).capability.promise;
  }
  cancel(l = 0) {
    t(this, CZ).cancel(null, l);
  }
  get separateAnnots() {
    const {
      separateAnnots: l
    } = t(this, CZ).operatorList;
    if (!l)
      return !1;
    const {
      annotationCanvasMap: U
    } = t(this, CZ);
    return l.form || l.canvas && (U == null ? void 0 : U.size) > 0;
  }
}
CZ = new WeakMap();
var wZ, kF;
const VF = class VF {
  constructor({
    callback: l,
    params: U,
    objs: d,
    commonObjs: Z,
    annotationCanvasMap: F,
    operatorList: Q,
    pageIndex: V,
    canvasFactory: c,
    filterFactory: R,
    useRequestAnimationFrame: N = !1,
    pdfBug: n = !1,
    pageColors: s = null
  }) {
    m(this, wZ, null);
    this.callback = l, this.params = U, this.objs = d, this.commonObjs = Z, this.annotationCanvasMap = F, this.operatorListIdx = null, this.operatorList = Q, this._pageIndex = V, this.canvasFactory = c, this.filterFactory = R, this._pdfBug = n, this.pageColors = s, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = N === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Wi(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = U.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: l = !1,
    optionalContentConfig: U
  }) {
    var V, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (t(VF, kF).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      t(VF, kF).add(this._canvas);
    }
    this._pdfBug && ((V = globalThis.StepperManager) != null && V.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: d,
      viewport: Z,
      transform: F,
      background: Q
    } = this.params;
    this.gfx = new S0(d, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: U
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: F,
      viewport: Z,
      transparency: l,
      background: Q
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(l = null, U = 0) {
    var d;
    this.running = !1, this.cancelled = !0, (d = this.gfx) == null || d.endDrawing(), t(this, wZ) && (window.cancelAnimationFrame(t(this, wZ)), h(this, wZ, null)), t(VF, kF).delete(this._canvas), this.callback(l || new MN(`Rendering cancelled, page ${this._pageIndex + 1}`, U));
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
    this._useRequestAnimationFrame ? h(this, wZ, window.requestAnimationFrame(() => {
      h(this, wZ, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), t(VF, kF).delete(this._canvas), this.callback())));
  }
};
wZ = new WeakMap(), kF = new WeakMap(), m(VF, kF, /* @__PURE__ */ new WeakSet());
let GR = VF;
const ci = "4.4.168", Ri = "19fbc8998";
function Un(W) {
  return Math.floor(Math.max(0, Math.min(1, W)) * 255).toString(16).padStart(2, "0");
}
function pQ(W) {
  return Math.max(0, Math.min(255, 255 * W));
}
class dn {
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
    return l = pQ(l), [l, l, l];
  }
  static G_HTML([l]) {
    const U = Un(l);
    return `#${U}${U}${U}`;
  }
  static RGB_G([l, U, d]) {
    return ["G", 0.3 * l + 0.59 * U + 0.11 * d];
  }
  static RGB_rgb(l) {
    return l.map(pQ);
  }
  static RGB_HTML(l) {
    return `#${l.map(Un).join("")}`;
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
    return [pQ(1 - Math.min(1, l + Z)), pQ(1 - Math.min(1, d + Z)), pQ(1 - Math.min(1, U + Z))];
  }
  static CMYK_HTML(l) {
    const U = this.CMYK_RGB(l).slice(1);
    return this.RGB_HTML(U);
  }
  static RGB_CMYK([l, U, d]) {
    const Z = 1 - l, F = 1 - U, Q = 1 - d, V = Math.min(Z, F, Q);
    return ["CMYK", Z, F, Q, V];
  }
}
class Xs {
  static setupStorage(l, U, d, Z, F) {
    const Q = Z.getValue(U, {
      value: null
    });
    switch (d.name) {
      case "textarea":
        if (Q.value !== null && (l.textContent = Q.value), F === "print")
          break;
        l.addEventListener("input", (V) => {
          Z.setValue(U, {
            value: V.target.value
          });
        });
        break;
      case "input":
        if (d.attributes.type === "radio" || d.attributes.type === "checkbox") {
          if (Q.value === d.attributes.xfaOn ? l.setAttribute("checked", !0) : Q.value === d.attributes.xfaOff && l.removeAttribute("checked"), F === "print")
            break;
          l.addEventListener("change", (V) => {
            Z.setValue(U, {
              value: V.target.checked ? V.target.getAttribute("xfaOn") : V.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (Q.value !== null && l.setAttribute("value", Q.value), F === "print")
            break;
          l.addEventListener("input", (V) => {
            Z.setValue(U, {
              value: V.target.value
            });
          });
        }
        break;
      case "select":
        if (Q.value !== null) {
          l.setAttribute("value", Q.value);
          for (const V of d.children)
            V.attributes.value === Q.value ? V.attributes.selected = !0 : V.attributes.hasOwnProperty("selected") && delete V.attributes.selected;
        }
        l.addEventListener("input", (V) => {
          const c = V.target.options, R = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
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
      attributes: Q
    } = U, V = l instanceof HTMLAnchorElement;
    Q.type === "radio" && (Q.name = `${Q.name}-${Z}`);
    for (const [c, R] of Object.entries(Q))
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
            (!V || c !== "href" && c !== "newWindow") && l.setAttribute(c, R);
        }
    V && F.addLinkAttributes(l, Q.href, Q.newWindow), d && Q.dataId && this.setupStorage(l, Q.dataId, U, d);
  }
  static render(l) {
    var n, s;
    const U = l.annotationStorage, d = l.linkService, Z = l.xfaHtml, F = l.intent || "display", Q = document.createElement(Z.name);
    Z.attributes && this.setAttributes({
      html: Q,
      element: Z,
      intent: F,
      linkService: d
    });
    const V = F !== "richText", c = l.div;
    if (c.append(Q), l.viewport) {
      const a = `matrix(${l.viewport.transform.join(",")})`;
      c.style.transform = a;
    }
    V && c.setAttribute("class", "xfaLayer xfaFont");
    const R = [];
    if (Z.children.length === 0) {
      if (Z.value) {
        const a = document.createTextNode(Z.value);
        Q.append(a), V && dt.shouldBuildText(Z.name) && R.push(a);
      }
      return {
        textDivs: R
      };
    }
    const N = [[Z, -1, Q]];
    for (; N.length > 0; ) {
      const [a, b, M] = N.at(-1);
      if (b + 1 === a.children.length) {
        N.pop();
        continue;
      }
      const G = a.children[++N.at(-1)[1]];
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
      const T = (n = G == null ? void 0 : G.attributes) != null && n.xmlns ? document.createElementNS(G.attributes.xmlns, J) : document.createElement(J);
      if (M.append(T), G.attributes && this.setAttributes({
        html: T,
        element: G,
        storage: U,
        intent: F,
        linkService: d
      }), ((s = G.children) == null ? void 0 : s.length) > 0)
        N.push([G, -1, T]);
      else if (G.value) {
        const S = document.createTextNode(G.value);
        V && dt.shouldBuildText(J) && R.push(S), T.append(S);
      }
    }
    for (const a of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      a.setAttribute("readOnly", !0);
    return {
      textDivs: R
    };
  }
  static update(l) {
    const U = `matrix(${l.viewport.transform.join(",")})`;
    l.div.style.transform = U, l.div.hidden = !1;
  }
}
const wV = 1e3, Ni = 9, t0 = /* @__PURE__ */ new WeakSet();
function sZ(W) {
  return {
    width: W[2] - W[0],
    height: W[3] - W[1]
  };
}
class ni {
  static create(l) {
    switch (l.data.annotationType) {
      case kl.LINK:
        return new Ys(l);
      case kl.TEXT:
        return new si(l);
      case kl.WIDGET:
        switch (l.data.fieldType) {
          case "Tx":
            return new ai(l);
          case "Btn":
            return l.data.radioButton ? new us(l) : l.data.checkBox ? new hi(l) : new ii(l);
          case "Ch":
            return new mi(l);
          case "Sig":
            return new bi(l);
        }
        return new N0(l);
      case kl.POPUP:
        return new SR(l);
      case kl.FREETEXT:
        return new Ls(l);
      case kl.LINE:
        return new Ji(l);
      case kl.SQUARE:
        return new Gi(l);
      case kl.CIRCLE:
        return new Ti(l);
      case kl.POLYLINE:
        return new ks(l);
      case kl.CARET:
        return new Xi(l);
      case kl.INK:
        return new Ds(l);
      case kl.POLYGON:
        return new Si(l);
      case kl.HIGHLIGHT:
        return new Yi(l);
      case kl.UNDERLINE:
        return new Bi(l);
      case kl.SQUIGGLY:
        return new ei(l);
      case kl.STRIKEOUT:
        return new ui(l);
      case kl.STAMP:
        return new Is(l);
      case kl.FILEATTACHMENT:
        return new pi(l);
      default:
        return new ul(l);
    }
  }
}
var DF, $0, lQ, Pt, TR;
const zN = class zN {
  constructor(l, {
    isRenderable: U = !1,
    ignoreBorder: d = !1,
    createQuadrilaterals: Z = !1
  } = {}) {
    m(this, Pt);
    m(this, DF, null);
    m(this, $0, !1);
    m(this, lQ, null);
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
    return zN._hasPopupData(this.data);
  }
  updateEdited(l) {
    var d;
    if (!this.container)
      return;
    t(this, DF) || h(this, DF, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: U
    } = l;
    U && i(this, Pt, TR).call(this, U), (d = t(this, lQ)) == null || d.popup.updateEdited(l);
  }
  resetEdited() {
    var l;
    t(this, DF) && (i(this, Pt, TR).call(this, t(this, DF).rect), (l = t(this, lQ)) == null || l.popup.resetEdited(), h(this, DF, null));
  }
  _createContainer(l) {
    const {
      data: U,
      parent: {
        page: d,
        viewport: Z
      }
    } = this, F = document.createElement("section");
    F.setAttribute("data-annotation-id", U.id), this instanceof N0 || (F.tabIndex = wV);
    const {
      style: Q
    } = F;
    if (Q.zIndex = this.parent.zIndex++, U.popupRef && F.setAttribute("aria-haspopup", "dialog"), U.alternativeText && (F.title = U.alternativeText), U.noRotate && F.classList.add("norotate"), !U.rect || this instanceof SR) {
      const {
        rotation: M
      } = U;
      return !U.hasOwnCanvas && M !== 0 && this.setRotation(M, F), F;
    }
    const {
      width: V,
      height: c
    } = sZ(U.rect);
    if (!l && U.borderStyle.width > 0) {
      Q.borderWidth = `${U.borderStyle.width}px`;
      const M = U.borderStyle.horizontalCornerRadius, G = U.borderStyle.verticalCornerRadius;
      if (M > 0 || G > 0) {
        const T = `calc(${M}px * var(--scale-factor)) / calc(${G}px * var(--scale-factor))`;
        Q.borderRadius = T;
      } else if (this instanceof us) {
        const T = `calc(${V}px * var(--scale-factor)) / calc(${c}px * var(--scale-factor))`;
        Q.borderRadius = T;
      }
      switch (U.borderStyle.style) {
        case eQ.SOLID:
          Q.borderStyle = "solid";
          break;
        case eQ.DASHED:
          Q.borderStyle = "dashed";
          break;
        case eQ.BEVELED:
          _("Unimplemented border style: beveled");
          break;
        case eQ.INSET:
          _("Unimplemented border style: inset");
          break;
        case eQ.UNDERLINE:
          Q.borderBottomStyle = "solid";
          break;
      }
      const J = U.borderColor || null;
      J ? (h(this, $0, !0), Q.borderColor = w.makeHexColor(J[0] | 0, J[1] | 0, J[2] | 0)) : Q.borderWidth = 0;
    }
    const R = w.normalizeRect([U.rect[0], d.view[3] - U.rect[1] + d.view[1], U.rect[2], d.view[3] - U.rect[3] + d.view[1]]), {
      pageWidth: N,
      pageHeight: n,
      pageX: s,
      pageY: a
    } = Z.rawDims;
    Q.left = `${100 * (R[0] - s) / N}%`, Q.top = `${100 * (R[1] - a) / n}%`;
    const {
      rotation: b
    } = U;
    return U.hasOwnCanvas || b === 0 ? (Q.width = `${100 * V / N}%`, Q.height = `${100 * c / n}%`) : this.setRotation(b, F), F;
  }
  setRotation(l, U = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: d,
      pageHeight: Z
    } = this.parent.viewport.rawDims, {
      width: F,
      height: Q
    } = sZ(this.data.rect);
    let V, c;
    l % 180 === 0 ? (V = 100 * F / d, c = 100 * Q / Z) : (V = 100 * Q / d, c = 100 * F / Z), U.style.width = `${V}%`, U.style.height = `${c}%`, U.setAttribute("data-main-rotation", (360 - l) % 360);
  }
  get _commonActions() {
    const l = (U, d, Z) => {
      const F = Z.detail[U], Q = F[0], V = F.slice(1);
      Z.target.style[d] = dn[`${Q}_HTML`](V), this.annotationStorage.setValue(this.data.id, {
        [d]: dn[`${Q}_rgb`](V)
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
      const Q = d[Z];
      if (Q) {
        const V = {
          detail: {
            [Z]: F
          },
          target: l
        };
        Q(V), delete U[Z];
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
      const [M, G, J, T] = l.subarray(2, 6);
      if (Z === M && F === G && U === J && d === T)
        return;
    }
    const {
      style: Q
    } = this.container;
    let V;
    if (t(this, $0)) {
      const {
        borderColor: M,
        borderWidth: G
      } = Q;
      Q.borderWidth = 0, V = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${M}" stroke-width="${G}">`], this.container.classList.add("hasBorder");
    }
    const c = Z - U, R = F - d, {
      svgFactory: N
    } = this, n = N.createElement("svg");
    n.classList.add("quadrilateralsContainer"), n.setAttribute("width", 0), n.setAttribute("height", 0);
    const s = N.createElement("defs");
    n.append(s);
    const a = N.createElement("clipPath"), b = `clippath_${this.data.id}`;
    a.setAttribute("id", b), a.setAttribute("clipPathUnits", "objectBoundingBox"), s.append(a);
    for (let M = 2, G = l.length; M < G; M += 8) {
      const J = l[M], T = l[M + 1], S = l[M + 2], B = l[M + 3], Y = N.createElement("rect"), X = (S - U) / c, e = (F - T) / R, o = (J - S) / c, y = (T - B) / R;
      Y.setAttribute("x", X), Y.setAttribute("y", e), Y.setAttribute("width", o), Y.setAttribute("height", y), a.append(Y), V == null || V.push(`<rect vector-effect="non-scaling-stroke" x="${X}" y="${e}" width="${o}" height="${y}"/>`);
    }
    t(this, $0) && (V.push("</g></svg>')"), Q.backgroundImage = V.join("")), this.container.append(n), this.container.style.clipPath = `url(#${b})`;
  }
  _createPopup() {
    const {
      container: l,
      data: U
    } = this;
    l.setAttribute("aria-haspopup", "dialog");
    const d = h(this, lQ, new SR({
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
    sl("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(l, U = null) {
    const d = [];
    if (this._fieldObjects) {
      const Z = this._fieldObjects[l];
      if (Z)
        for (const {
          page: F,
          id: Q,
          exportValues: V
        } of Z) {
          if (F === -1 || Q === U)
            continue;
          const c = typeof V == "string" ? V : null, R = document.querySelector(`[data-element-id="${Q}"]`);
          if (R && !t0.has(R)) {
            _(`_getElementsByName - element not allowed: ${Q}`);
            continue;
          }
          d.push({
            id: Q,
            exportValue: c,
            domElement: R
          });
        }
      return d;
    }
    for (const Z of document.getElementsByName(l)) {
      const {
        exportValue: F
      } = Z, Q = Z.getAttribute("data-element-id");
      Q !== U && t0.has(Z) && d.push({
        id: Q,
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
DF = new WeakMap(), $0 = new WeakMap(), lQ = new WeakMap(), Pt = new WeakSet(), TR = function(l) {
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
          pageHeight: Q,
          pageX: V,
          pageY: c
        }
      }
    }
  } = this;
  d == null || d.splice(0, 4, ...l);
  const {
    width: R,
    height: N
  } = sZ(l);
  U.left = `${100 * (l[0] - V) / F}%`, U.top = `${100 * (Q - l[3] + c) / Q}%`, Z === 0 ? (U.width = `${100 * R / F}%`, U.height = `${100 * N / Q}%`) : this.setRotation(Z);
};
let ul = zN;
var EU, dF, Bs, es;
class Ys extends ul {
  constructor(U, d = null) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !!(d != null && d.ignoreBorder),
      createQuadrilaterals: !0
    });
    m(this, EU);
    this.isTooltipOnly = U.data.isTooltipOnly;
  }
  render() {
    const {
      data: U,
      linkService: d
    } = this, Z = document.createElement("a");
    Z.setAttribute("data-element-id", U.id);
    let F = !1;
    return U.url ? (d.addLinkAttributes(Z, U.url, U.newWindow), F = !0) : U.action ? (this._bindNamedAction(Z, U.action), F = !0) : U.attachment ? (i(this, EU, Bs).call(this, Z, U.attachment, U.attachmentDest), F = !0) : U.setOCGState ? (i(this, EU, es).call(this, Z, U.setOCGState), F = !0) : U.dest ? (this._bindLink(Z, U.dest), F = !0) : (U.actions && (U.actions.Action || U.actions["Mouse Up"] || U.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(Z, U), F = !0), U.resetForm ? (this._bindResetFormAction(Z, U.resetForm), F = !0) : this.isTooltipOnly && !F && (this._bindLink(Z, ""), F = !0)), this.container.classList.add("linkAnnotation"), F && this.container.append(Z), this.container;
  }
  _bindLink(U, d) {
    U.href = this.linkService.getDestinationHash(d), U.onclick = () => (d && this.linkService.goToDestination(d), !1), (d || d === "") && i(this, EU, dF).call(this);
  }
  _bindNamedAction(U, d) {
    U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeNamedAction(d), !1), i(this, EU, dF).call(this);
  }
  _bindJSAction(U, d) {
    U.href = this.linkService.getAnchorUrl("");
    const Z = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const F of Object.keys(d.actions)) {
      const Q = Z.get(F);
      Q && (U[Q] = () => {
        var V;
        return (V = this.linkService.eventBus) == null || V.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: d.id,
            name: F
          }
        }), !1;
      });
    }
    U.onclick || (U.onclick = () => !1), i(this, EU, dF).call(this);
  }
  _bindResetFormAction(U, d) {
    const Z = U.onclick;
    if (Z || (U.href = this.linkService.getAnchorUrl("")), i(this, EU, dF).call(this), !this._fieldObjects) {
      _('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), Z || (U.onclick = () => !1);
      return;
    }
    U.onclick = () => {
      var n;
      Z == null || Z();
      const {
        fields: F,
        refs: Q,
        include: V
      } = d, c = [];
      if (F.length !== 0 || Q.length !== 0) {
        const s = new Set(Q);
        for (const a of F) {
          const b = this._fieldObjects[a] || [];
          for (const {
            id: M
          } of b)
            s.add(M);
        }
        for (const a of Object.values(this._fieldObjects))
          for (const b of a)
            s.has(b.id) === V && c.push(b);
      } else
        for (const s of Object.values(this._fieldObjects))
          c.push(...s);
      const R = this.annotationStorage, N = [];
      for (const s of c) {
        const {
          id: a
        } = s;
        switch (N.push(a), s.type) {
          case "text": {
            const M = s.defaultValue || "";
            R.setValue(a, {
              value: M
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const M = s.defaultValue === s.exportValues;
            R.setValue(a, {
              value: M
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const M = s.defaultValue || "";
            R.setValue(a, {
              value: M
            });
            break;
          }
          default:
            continue;
        }
        const b = document.querySelector(`[data-element-id="${a}"]`);
        if (b) {
          if (!t0.has(b)) {
            _(`_bindResetFormAction - element not allowed: ${a}`);
            continue;
          }
        } else continue;
        b.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((n = this.linkService.eventBus) == null || n.dispatch("dispatcheventinsandbox", {
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
EU = new WeakSet(), dF = function() {
  this.container.setAttribute("data-internal-link", "");
}, Bs = function(U, d, Z = null) {
  U.href = this.linkService.getAnchorUrl(""), d.description && (U.title = d.description), U.onclick = () => {
    var F;
    return (F = this.downloadManager) == null || F.openOrDownloadData(d.content, d.filename, Z), !1;
  }, i(this, EU, dF).call(this);
}, es = function(U, d) {
  U.href = this.linkService.getAnchorUrl(""), U.onclick = () => (this.linkService.executeSetOCGState(d), !1), i(this, EU, dF).call(this);
};
class si extends ul {
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
class N0 extends ul {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(l) {
    var U;
    this.data.hasOwnCanvas && (((U = l.previousSibling) == null ? void 0 : U.nodeName) === "CANVAS" && (l.previousSibling.hidden = !0), l.hidden = !1);
  }
  _getKeyModifier(l) {
    return GU.platform.isMac ? l.metaKey : l.ctrlKey;
  }
  _setEventListener(l, U, d, Z, F) {
    d.includes("mouse") ? l.addEventListener(d, (Q) => {
      var V;
      (V = this.linkService.eventBus) == null || V.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: Z,
          value: F(Q),
          shift: Q.shiftKey,
          modifier: this._getKeyModifier(Q)
        }
      });
    }) : l.addEventListener(d, (Q) => {
      var V;
      if (d === "blur") {
        if (!U.focused || !Q.relatedTarget)
          return;
        U.focused = !1;
      } else if (d === "focus") {
        if (U.focused)
          return;
        U.focused = !0;
      }
      F && ((V = this.linkService.eventBus) == null || V.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: Z,
          value: F(Q)
        }
      }));
    });
  }
  _setEventListeners(l, U, d, Z) {
    var F, Q, V;
    for (const [c, R] of d)
      (R === "Action" || (F = this.data.actions) != null && F[R]) && ((R === "Focus" || R === "Blur") && (U || (U = {
        focused: !1
      })), this._setEventListener(l, U, c, R, Z), R === "Focus" && !((Q = this.data.actions) != null && Q.Blur) ? this._setEventListener(l, U, "blur", "Blur", null) : R === "Blur" && !((V = this.data.actions) != null && V.Focus) && this._setEventListener(l, U, "focus", "Focus", null));
  }
  _setBackgroundColor(l) {
    const U = this.data.backgroundColor || null;
    l.style.backgroundColor = U === null ? "transparent" : w.makeHexColor(U[0], U[1], U[2]);
  }
  _setTextStyle(l) {
    const U = ["left", "center", "right"], {
      fontColor: d
    } = this.data.defaultAppearanceData, Z = this.data.defaultAppearanceData.fontSize || Ni, F = l.style;
    let Q;
    const V = 2, c = (R) => Math.round(10 * R) / 10;
    if (this.data.multiLine) {
      const R = Math.abs(this.data.rect[3] - this.data.rect[1] - V), N = Math.round(R / (Sc * Z)) || 1, n = R / N;
      Q = Math.min(Z, c(n / Sc));
    } else {
      const R = Math.abs(this.data.rect[3] - this.data.rect[1] - V);
      Q = Math.min(Z, c(R / Sc));
    }
    F.fontSize = `calc(${Q}px * var(--scale-factor))`, F.color = w.makeHexColor(d[0], d[1], d[2]), this.data.textAlignment !== null && (F.textAlign = U[this.data.textAlignment]);
  }
  _setRequired(l, U) {
    U ? l.setAttribute("required", !0) : l.removeAttribute("required"), l.setAttribute("aria-required", U);
  }
}
class ai extends N0 {
  constructor(l) {
    const U = l.renderForms || l.data.hasOwnCanvas || !l.data.hasAppearance && !!l.data.fieldValue;
    super(l, {
      isRenderable: U
    });
  }
  setPropertyOnSiblings(l, U, d, Z) {
    const F = this.annotationStorage;
    for (const Q of this._getElementsByName(l.name, l.id))
      Q.domElement && (Q.domElement[U] = d), F.setValue(Q.id, {
        [Z]: d
      });
  }
  render() {
    var Z, F;
    const l = this.annotationStorage, U = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let d = null;
    if (this.renderForms) {
      const Q = l.getValue(U, {
        value: this.data.fieldValue
      });
      let V = Q.value || "";
      const c = l.getValue(U, {
        charLimit: this.data.maxLen
      }).charLimit;
      c && V.length > c && (V = V.slice(0, c));
      let R = Q.formattedValue || ((Z = this.data.textContent) == null ? void 0 : Z.join(`
`)) || null;
      R && this.data.comb && (R = R.replaceAll(/\s+/g, ""));
      const N = {
        userValue: V,
        formattedValue: R,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (d = document.createElement("textarea"), d.textContent = R ?? V, this.data.doNotScroll && (d.style.overflowY = "hidden")) : (d = document.createElement("input"), d.type = "text", d.setAttribute("value", R ?? V), this.data.doNotScroll && (d.style.overflowX = "hidden")), this.data.hasOwnCanvas && (d.hidden = !0), t0.add(d), d.setAttribute("data-element-id", U), d.disabled = this.data.readOnly, d.name = this.data.fieldName, d.tabIndex = wV, this._setRequired(d, this.data.required), c && (d.maxLength = c), d.addEventListener("input", (s) => {
        l.setValue(U, {
          value: s.target.value
        }), this.setPropertyOnSiblings(d, "value", s.target.value, "value"), N.formattedValue = null;
      }), d.addEventListener("resetform", (s) => {
        const a = this.data.defaultFieldValue ?? "";
        d.value = N.userValue = a, N.formattedValue = null;
      });
      let n = (s) => {
        const {
          formattedValue: a
        } = N;
        a != null && (s.target.value = a), s.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        d.addEventListener("focus", (a) => {
          var M;
          if (N.focused)
            return;
          const {
            target: b
          } = a;
          N.userValue && (b.value = N.userValue), N.lastCommittedValue = b.value, N.commitKey = 1, (M = this.data.actions) != null && M.Focus || (N.focused = !0);
        }), d.addEventListener("updatefromsandbox", (a) => {
          this.showElementAndHideCanvas(a.target);
          const b = {
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
          this._dispatchEventFromSandbox(b, a);
        }), d.addEventListener("keydown", (a) => {
          var G;
          N.commitKey = 1;
          let b = -1;
          if (a.key === "Escape" ? b = 0 : a.key === "Enter" && !this.data.multiLine ? b = 2 : a.key === "Tab" && (N.commitKey = 3), b === -1)
            return;
          const {
            value: M
          } = a.target;
          N.lastCommittedValue !== M && (N.lastCommittedValue = M, N.userValue = M, (G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: M,
              willCommit: !0,
              commitKey: b,
              selStart: a.target.selectionStart,
              selEnd: a.target.selectionEnd
            }
          }));
        });
        const s = n;
        n = null, d.addEventListener("blur", (a) => {
          var M, G;
          if (!N.focused || !a.relatedTarget)
            return;
          (M = this.data.actions) != null && M.Blur || (N.focused = !1);
          const {
            value: b
          } = a.target;
          N.userValue = b, N.lastCommittedValue !== b && ((G = this.linkService.eventBus) == null || G.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: b,
              willCommit: !0,
              commitKey: N.commitKey,
              selStart: a.target.selectionStart,
              selEnd: a.target.selectionEnd
            }
          })), s(a);
        }), (F = this.data.actions) != null && F.Keystroke && d.addEventListener("beforeinput", (a) => {
          var Y;
          N.lastCommittedValue = null;
          const {
            data: b,
            target: M
          } = a, {
            value: G,
            selectionStart: J,
            selectionEnd: T
          } = M;
          let S = J, B = T;
          switch (a.inputType) {
            case "deleteWordBackward": {
              const X = G.substring(0, J).match(/\w*[^\w]*$/);
              X && (S -= X[0].length);
              break;
            }
            case "deleteWordForward": {
              const X = G.substring(J).match(/^[^\w]*\w*/);
              X && (B += X[0].length);
              break;
            }
            case "deleteContentBackward":
              J === T && (S -= 1);
              break;
            case "deleteContentForward":
              J === T && (B += 1);
              break;
          }
          a.preventDefault(), (Y = this.linkService.eventBus) == null || Y.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: U,
              name: "Keystroke",
              value: G,
              change: b || "",
              willCommit: !1,
              selStart: S,
              selEnd: B
            }
          });
        }), this._setEventListeners(d, N, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.value);
      }
      if (n && d.addEventListener("blur", n), this.data.comb) {
        const a = (this.data.rect[2] - this.data.rect[0]) / c;
        d.classList.add("comb"), d.style.letterSpacing = `calc(${a}px * var(--scale-factor) - 1ch)`;
      }
    } else
      d = document.createElement("div"), d.textContent = this.data.fieldValue, d.style.verticalAlign = "middle", d.style.display = "table-cell", this.data.hasOwnCanvas && (d.hidden = !0);
    return this._setTextStyle(d), this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
  }
}
class bi extends N0 {
  constructor(l) {
    super(l, {
      isRenderable: !!l.data.hasOwnCanvas
    });
  }
}
class hi extends N0 {
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
    return t0.add(F), F.setAttribute("data-element-id", d), F.disabled = U.readOnly, this._setRequired(F, this.data.required), F.type = "checkbox", F.name = U.fieldName, Z && F.setAttribute("checked", !0), F.setAttribute("exportValue", U.exportValue), F.tabIndex = wV, F.addEventListener("change", (Q) => {
      const {
        name: V,
        checked: c
      } = Q.target;
      for (const R of this._getElementsByName(V, d)) {
        const N = c && R.exportValue === U.exportValue;
        R.domElement && (R.domElement.checked = N), l.setValue(R.id, {
          value: N
        });
      }
      l.setValue(d, {
        value: c
      });
    }), F.addEventListener("resetform", (Q) => {
      const V = U.defaultFieldValue || "Off";
      Q.target.checked = V === U.exportValue;
    }), this.enableScripting && this.hasJSActions && (F.addEventListener("updatefromsandbox", (Q) => {
      const V = {
        value(c) {
          c.target.checked = c.detail.value !== "Off", l.setValue(d, {
            value: c.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(V, Q);
    }), this._setEventListeners(F, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (Q) => Q.target.checked)), this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class us extends N0 {
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
      for (const Q of this._getElementsByName(U.fieldName, d))
        l.setValue(Q.id, {
          value: !1
        });
    const F = document.createElement("input");
    if (t0.add(F), F.setAttribute("data-element-id", d), F.disabled = U.readOnly, this._setRequired(F, this.data.required), F.type = "radio", F.name = U.fieldName, Z && F.setAttribute("checked", !0), F.tabIndex = wV, F.addEventListener("change", (Q) => {
      const {
        name: V,
        checked: c
      } = Q.target;
      for (const R of this._getElementsByName(V, d))
        l.setValue(R.id, {
          value: !1
        });
      l.setValue(d, {
        value: c
      });
    }), F.addEventListener("resetform", (Q) => {
      const V = U.defaultFieldValue;
      Q.target.checked = V != null && V === U.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const Q = U.buttonValue;
      F.addEventListener("updatefromsandbox", (V) => {
        const c = {
          value: (R) => {
            const N = Q === R.detail.value;
            for (const n of this._getElementsByName(R.target.name)) {
              const s = N && n.id === d;
              n.domElement && (n.domElement.checked = s), l.setValue(n.id, {
                value: s
              });
            }
          }
        };
        this._dispatchEventFromSandbox(c, V);
      }), this._setEventListeners(F, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (V) => V.target.checked);
    }
    return this._setBackgroundColor(F), this._setDefaultPropertiesFromJS(F), this.container.append(F), this.container;
  }
}
class ii extends Ys {
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
class mi extends N0 {
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
    t0.add(Z), Z.setAttribute("data-element-id", U), Z.disabled = this.data.readOnly, this._setRequired(Z, this.data.required), Z.name = this.data.fieldName, Z.tabIndex = wV;
    let F = this.data.combo && this.data.options.length > 0;
    this.data.combo || (Z.size = this.data.options.length, this.data.multiSelect && (Z.multiple = !0)), Z.addEventListener("resetform", (N) => {
      const n = this.data.defaultFieldValue;
      for (const s of Z.options)
        s.selected = s.value === n;
    });
    for (const N of this.data.options) {
      const n = document.createElement("option");
      n.textContent = N.displayValue, n.value = N.exportValue, d.value.includes(N.exportValue) && (n.setAttribute("selected", !0), F = !1), Z.append(n);
    }
    let Q = null;
    if (F) {
      const N = document.createElement("option");
      N.value = " ", N.setAttribute("hidden", !0), N.setAttribute("selected", !0), Z.prepend(N), Q = () => {
        N.remove(), Z.removeEventListener("input", Q), Q = null;
      }, Z.addEventListener("input", Q);
    }
    const V = (N) => {
      const n = N ? "value" : "textContent", {
        options: s,
        multiple: a
      } = Z;
      return a ? Array.prototype.filter.call(s, (b) => b.selected).map((b) => b[n]) : s.selectedIndex === -1 ? null : s[s.selectedIndex][n];
    };
    let c = V(!1);
    const R = (N) => {
      const n = N.target.options;
      return Array.prototype.map.call(n, (s) => ({
        displayValue: s.textContent,
        exportValue: s.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (Z.addEventListener("updatefromsandbox", (N) => {
      const n = {
        value(s) {
          Q == null || Q();
          const a = s.detail.value, b = new Set(Array.isArray(a) ? a : [a]);
          for (const M of Z.options)
            M.selected = b.has(M.value);
          l.setValue(U, {
            value: V(!0)
          }), c = V(!1);
        },
        multipleSelection(s) {
          Z.multiple = !0;
        },
        remove(s) {
          const a = Z.options, b = s.detail.remove;
          a[b].selected = !1, Z.remove(b), a.length > 0 && Array.prototype.findIndex.call(a, (G) => G.selected) === -1 && (a[0].selected = !0), l.setValue(U, {
            value: V(!0),
            items: R(s)
          }), c = V(!1);
        },
        clear(s) {
          for (; Z.length !== 0; )
            Z.remove(0);
          l.setValue(U, {
            value: null,
            items: []
          }), c = V(!1);
        },
        insert(s) {
          const {
            index: a,
            displayValue: b,
            exportValue: M
          } = s.detail.insert, G = Z.children[a], J = document.createElement("option");
          J.textContent = b, J.value = M, G ? G.before(J) : Z.append(J), l.setValue(U, {
            value: V(!0),
            items: R(s)
          }), c = V(!1);
        },
        items(s) {
          const {
            items: a
          } = s.detail;
          for (; Z.length !== 0; )
            Z.remove(0);
          for (const b of a) {
            const {
              displayValue: M,
              exportValue: G
            } = b, J = document.createElement("option");
            J.textContent = M, J.value = G, Z.append(J);
          }
          Z.options.length > 0 && (Z.options[0].selected = !0), l.setValue(U, {
            value: V(!0),
            items: R(s)
          }), c = V(!1);
        },
        indices(s) {
          const a = new Set(s.detail.indices);
          for (const b of s.target.options)
            b.selected = a.has(b.index);
          l.setValue(U, {
            value: V(!0)
          }), c = V(!1);
        },
        editable(s) {
          s.target.disabled = !s.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(n, N);
    }), Z.addEventListener("input", (N) => {
      var a;
      const n = V(!0), s = V(!1);
      l.setValue(U, {
        value: n
      }), N.preventDefault(), (a = this.linkService.eventBus) == null || a.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: U,
          name: "Keystroke",
          value: c,
          change: s,
          changeEx: n,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(Z, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (N) => N.target.value)) : Z.addEventListener("input", function(N) {
      l.setValue(U, {
        value: V(!0)
      });
    }), this.data.combo && this._setTextStyle(Z), this._setBackgroundColor(Z), this._setDefaultPropertiesFromJS(Z), this.container.append(Z), this.container;
  }
}
class SR extends ul {
  constructor(l) {
    const {
      data: U,
      elements: d
    } = l;
    super(l, {
      isRenderable: ul._hasPopupData(U)
    }), this.elements = d, this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const l = this.popup = new Mi({
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
    return this.container.setAttribute("aria-controls", U.map((d) => `${pn}${d}`).join(",")), this.container;
  }
}
var UQ, Uc, dc, dQ, IF, Yl, $d, EF, ft, At, ZQ, lZ, Fd, UZ, _t, dZ, qt, CF, wF, al, WW, XR, ps, ys, os, zs, cW, RW, YR;
class Mi {
  constructor({
    container: l,
    color: U,
    elements: d,
    titleObj: Z,
    modificationDate: F,
    contentsObj: Q,
    richText: V,
    parent: c,
    rect: R,
    parentRect: N,
    open: n
  }) {
    m(this, al);
    m(this, UQ, i(this, al, os).bind(this));
    m(this, Uc, i(this, al, YR).bind(this));
    m(this, dc, i(this, al, RW).bind(this));
    m(this, dQ, i(this, al, cW).bind(this));
    m(this, IF, null);
    m(this, Yl, null);
    m(this, $d, null);
    m(this, EF, null);
    m(this, ft, null);
    m(this, At, null);
    m(this, ZQ, null);
    m(this, lZ, !1);
    m(this, Fd, null);
    m(this, UZ, null);
    m(this, _t, null);
    m(this, dZ, null);
    m(this, qt, null);
    m(this, CF, null);
    m(this, wF, !1);
    var s;
    h(this, Yl, l), h(this, qt, Z), h(this, $d, Q), h(this, dZ, V), h(this, At, c), h(this, IF, U), h(this, _t, R), h(this, ZQ, N), h(this, ft, d), h(this, EF, kn.toDateObject(F)), this.trigger = d.flatMap((a) => a.getElementsToTriggerPopup());
    for (const a of this.trigger)
      a.addEventListener("click", t(this, dQ)), a.addEventListener("mouseenter", t(this, dc)), a.addEventListener("mouseleave", t(this, Uc)), a.classList.add("popupTriggerArea");
    for (const a of d)
      (s = a.container) == null || s.addEventListener("keydown", t(this, UQ));
    t(this, Yl).hidden = !0, n && i(this, al, cW).call(this);
  }
  render() {
    if (t(this, Fd))
      return;
    const l = h(this, Fd, document.createElement("div"));
    if (l.className = "popup", t(this, IF)) {
      const F = l.style.outlineColor = w.makeHexColor(...t(this, IF));
      CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? l.style.backgroundColor = `color-mix(in srgb, ${F} 30%, white)` : l.style.backgroundColor = w.makeHexColor(...t(this, IF).map((V) => Math.floor(0.7 * (255 - V) + V)));
    }
    const U = document.createElement("span");
    U.className = "header";
    const d = document.createElement("h1");
    if (U.append(d), {
      dir: d.dir,
      str: d.textContent
    } = t(this, qt), l.append(U), t(this, EF)) {
      const F = document.createElement("span");
      F.classList.add("popupDate"), F.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), F.setAttribute("data-l10n-args", JSON.stringify({
        date: t(this, EF).toLocaleDateString(),
        time: t(this, EF).toLocaleTimeString()
      })), U.append(F);
    }
    const Z = t(this, al, WW);
    if (Z)
      Xs.render({
        xfaHtml: Z,
        intent: "richText",
        div: l
      }), l.lastChild.classList.add("richText", "popupContent");
    else {
      const F = this._formatContents(t(this, $d));
      l.append(F);
    }
    t(this, Yl).append(l);
  }
  _formatContents({
    str: l,
    dir: U
  }) {
    const d = document.createElement("p");
    d.classList.add("popupContent"), d.dir = U;
    const Z = l.split(/(?:\r\n?|\n)/);
    for (let F = 0, Q = Z.length; F < Q; ++F) {
      const V = Z[F];
      d.append(document.createTextNode(V)), F < Q - 1 && d.append(document.createElement("br"));
    }
    return d;
  }
  updateEdited({
    rect: l,
    popupContent: U
  }) {
    var d;
    t(this, CF) || h(this, CF, {
      contentsObj: t(this, $d),
      richText: t(this, dZ)
    }), l && h(this, UZ, null), U && (h(this, dZ, i(this, al, ys).call(this, U)), h(this, $d, null)), (d = t(this, Fd)) == null || d.remove(), h(this, Fd, null);
  }
  resetEdited() {
    var l;
    t(this, CF) && ({
      contentsObj: XU(this, $d)._,
      richText: XU(this, dZ)._
    } = t(this, CF), h(this, CF, null), (l = t(this, Fd)) == null || l.remove(), h(this, Fd, null), h(this, UZ, null));
  }
  forceHide() {
    h(this, wF, this.isVisible), t(this, wF) && (t(this, Yl).hidden = !0);
  }
  maybeShow() {
    t(this, wF) && (t(this, Fd) || i(this, al, RW).call(this), h(this, wF, !1), t(this, Yl).hidden = !1);
  }
  get isVisible() {
    return t(this, Yl).hidden === !1;
  }
}
UQ = new WeakMap(), Uc = new WeakMap(), dc = new WeakMap(), dQ = new WeakMap(), IF = new WeakMap(), Yl = new WeakMap(), $d = new WeakMap(), EF = new WeakMap(), ft = new WeakMap(), At = new WeakMap(), ZQ = new WeakMap(), lZ = new WeakMap(), Fd = new WeakMap(), UZ = new WeakMap(), _t = new WeakMap(), dZ = new WeakMap(), qt = new WeakMap(), CF = new WeakMap(), wF = new WeakMap(), al = new WeakSet(), WW = function() {
  const l = t(this, dZ), U = t(this, $d);
  return l != null && l.str && (!(U != null && U.str) || U.str === l.str) && t(this, dZ).html || null;
}, XR = function() {
  var l, U, d;
  return ((d = (U = (l = t(this, al, WW)) == null ? void 0 : l.attributes) == null ? void 0 : U.style) == null ? void 0 : d.fontSize) || 0;
}, ps = function() {
  var l, U, d;
  return ((d = (U = (l = t(this, al, WW)) == null ? void 0 : l.attributes) == null ? void 0 : U.style) == null ? void 0 : d.color) || null;
}, ys = function(l) {
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
      color: t(this, al, ps),
      fontSize: t(this, al, XR) ? `calc(${t(this, al, XR)}px * var(--scale-factor))` : ""
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
}, os = function(l) {
  l.altKey || l.shiftKey || l.ctrlKey || l.metaKey || (l.key === "Enter" || l.key === "Escape" && t(this, lZ)) && i(this, al, cW).call(this);
}, zs = function() {
  if (t(this, UZ) !== null)
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
  } = t(this, At);
  let Q = !!t(this, ZQ), V = Q ? t(this, ZQ) : t(this, _t);
  for (const b of t(this, ft))
    if (!V || w.intersect(b.data.rect, V) !== null) {
      V = b.data.rect, Q = !0;
      break;
    }
  const c = w.normalizeRect([V[0], l[3] - V[1] + l[1], V[2], l[3] - V[3] + l[1]]), N = Q ? V[2] - V[0] + 5 : 0, n = c[0] + N, s = c[1];
  h(this, UZ, [100 * (n - Z) / U, 100 * (s - F) / d]);
  const {
    style: a
  } = t(this, Yl);
  a.left = `${t(this, UZ)[0]}%`, a.top = `${t(this, UZ)[1]}%`;
}, cW = function() {
  h(this, lZ, !t(this, lZ)), t(this, lZ) ? (i(this, al, RW).call(this), t(this, Yl).addEventListener("click", t(this, dQ)), t(this, Yl).addEventListener("keydown", t(this, UQ))) : (i(this, al, YR).call(this), t(this, Yl).removeEventListener("click", t(this, dQ)), t(this, Yl).removeEventListener("keydown", t(this, UQ)));
}, RW = function() {
  t(this, Fd) || this.render(), this.isVisible ? t(this, lZ) && t(this, Yl).classList.add("focused") : (i(this, al, zs).call(this), t(this, Yl).hidden = !1, t(this, Yl).style.zIndex = parseInt(t(this, Yl).style.zIndex) + 1e3);
}, YR = function() {
  t(this, Yl).classList.remove("focused"), !(t(this, lZ) || !this.isVisible) && (t(this, Yl).hidden = !0, t(this, Yl).style.zIndex = parseInt(t(this, Yl).style.zIndex) - 1e3);
};
class Ls extends ul {
  constructor(l) {
    super(l, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = l.data.textContent, this.textPosition = l.data.textPosition, this.annotationEditorType = dl.FREETEXT;
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
var $t;
class Ji extends ul {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, $t, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const U = this.data, {
      width: d,
      height: Z
    } = sZ(U.rect), F = this.svgFactory.create(d, Z, !0), Q = h(this, $t, this.svgFactory.createElement("svg:line"));
    return Q.setAttribute("x1", U.rect[2] - U.lineCoordinates[0]), Q.setAttribute("y1", U.rect[3] - U.lineCoordinates[1]), Q.setAttribute("x2", U.rect[2] - U.lineCoordinates[2]), Q.setAttribute("y2", U.rect[3] - U.lineCoordinates[3]), Q.setAttribute("stroke-width", U.borderStyle.width || 1), Q.setAttribute("stroke", "transparent"), Q.setAttribute("fill", "transparent"), F.append(Q), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return t(this, $t);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
$t = new WeakMap();
var lV;
class Gi extends ul {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, lV, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const U = this.data, {
      width: d,
      height: Z
    } = sZ(U.rect), F = this.svgFactory.create(d, Z, !0), Q = U.borderStyle.width, V = h(this, lV, this.svgFactory.createElement("svg:rect"));
    return V.setAttribute("x", Q / 2), V.setAttribute("y", Q / 2), V.setAttribute("width", d - Q), V.setAttribute("height", Z - Q), V.setAttribute("stroke-width", Q || 1), V.setAttribute("stroke", "transparent"), V.setAttribute("fill", "transparent"), F.append(V), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return t(this, lV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
lV = new WeakMap();
var UV;
class Ti extends ul {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, UV, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const U = this.data, {
      width: d,
      height: Z
    } = sZ(U.rect), F = this.svgFactory.create(d, Z, !0), Q = U.borderStyle.width, V = h(this, UV, this.svgFactory.createElement("svg:ellipse"));
    return V.setAttribute("cx", d / 2), V.setAttribute("cy", Z / 2), V.setAttribute("rx", d / 2 - Q / 2), V.setAttribute("ry", Z / 2 - Q / 2), V.setAttribute("stroke-width", Q || 1), V.setAttribute("stroke", "transparent"), V.setAttribute("fill", "transparent"), F.append(V), this.container.append(F), !U.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return t(this, UV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
UV = new WeakMap();
var dV;
class ks extends ul {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, dV, null);
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
      width: Q,
      height: V
    } = sZ(U), c = this.svgFactory.create(Q, V, !0);
    let R = [];
    for (let n = 0, s = d.length; n < s; n += 2) {
      const a = d[n] - U[0], b = U[3] - d[n + 1];
      R.push(`${a},${b}`);
    }
    R = R.join(" ");
    const N = h(this, dV, this.svgFactory.createElement(this.svgElementName));
    return N.setAttribute("points", R), N.setAttribute("stroke-width", Z.width || 1), N.setAttribute("stroke", "transparent"), N.setAttribute("fill", "transparent"), c.append(N), this.container.append(c), !F && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return t(this, dV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
dV = new WeakMap();
class Si extends ks {
  constructor(l) {
    super(l), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class Xi extends ul {
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
var ZV;
class Ds extends ul {
  constructor(U) {
    super(U, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    m(this, ZV, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = dl.INK;
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
      width: Q,
      height: V
    } = sZ(U), c = this.svgFactory.create(Q, V, !0);
    for (const R of d) {
      let N = [];
      for (let s = 0, a = R.length; s < a; s += 2) {
        const b = R[s] - U[0], M = U[3] - R[s + 1];
        N.push(`${b},${M}`);
      }
      N = N.join(" ");
      const n = this.svgFactory.createElement(this.svgElementName);
      t(this, ZV).push(n), n.setAttribute("points", N), n.setAttribute("stroke-width", Z.width || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), !F && this.hasPopupData && this._createPopup(), c.append(n);
    }
    return this.container.append(c), this.container;
  }
  getElementsToTriggerPopup() {
    return t(this, ZV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
ZV = new WeakMap();
class Yi extends ul {
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
class Bi extends ul {
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
class ei extends ul {
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
class ui extends ul {
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
class Is extends ul {
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
var FV, QV, BR;
class pi extends ul {
  constructor(U) {
    var Z;
    super(U, {
      isRenderable: !0
    });
    m(this, QV);
    m(this, FV, null);
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
    d.hasAppearance || d.fillAlpha === 0 ? Z = document.createElement("div") : (Z = document.createElement("img"), Z.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(d.name) ? "paperclip" : "pushpin"}.svg`, d.fillAlpha && d.fillAlpha < 1 && (Z.style = `filter: opacity(${Math.round(d.fillAlpha * 100)}%);`)), Z.addEventListener("dblclick", i(this, QV, BR).bind(this)), h(this, FV, Z);
    const {
      isMac: F
    } = GU.platform;
    return U.addEventListener("keydown", (Q) => {
      Q.key === "Enter" && (F ? Q.metaKey : Q.ctrlKey) && i(this, QV, BR).call(this);
    }), !d.popupRef && this.hasPopupData ? this._createPopup() : Z.classList.add("popupTriggerArea"), U.append(Z), U;
  }
  getElementsToTriggerPopup() {
    return t(this, FV);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
FV = new WeakMap(), QV = new WeakSet(), BR = function() {
  var U;
  (U = this.downloadManager) == null || U.openOrDownloadData(this.content, this.filename);
};
var tV, xF, FQ, V0, Es, eR;
class yi {
  constructor({
    div: l,
    accessibilityManager: U,
    annotationCanvasMap: d,
    annotationEditorUIManager: Z,
    page: F,
    viewport: Q
  }) {
    m(this, V0);
    m(this, tV, null);
    m(this, xF, null);
    m(this, FQ, /* @__PURE__ */ new Map());
    this.div = l, h(this, tV, U), h(this, xF, d), this.page = F, this.viewport = Q, this.zIndex = 0, this._annotationEditorUIManager = Z;
  }
  async render(l) {
    var Q;
    const {
      annotations: U
    } = l, d = this.div;
    F0(d, this.viewport);
    const Z = /* @__PURE__ */ new Map(), F = {
      data: null,
      layer: d,
      linkService: l.linkService,
      downloadManager: l.downloadManager,
      imageResourcesPath: l.imageResourcesPath || "",
      renderForms: l.renderForms !== !1,
      svgFactory: new mN(),
      annotationStorage: l.annotationStorage || new SN(),
      enableScripting: l.enableScripting === !0,
      hasJSActions: l.hasJSActions,
      fieldObjects: l.fieldObjects,
      parent: this,
      elements: null
    };
    for (const V of U) {
      if (V.noHTML)
        continue;
      const c = V.annotationType === kl.POPUP;
      if (c) {
        const n = Z.get(V.id);
        if (!n)
          continue;
        F.elements = n;
      } else {
        const {
          width: n,
          height: s
        } = sZ(V.rect);
        if (n <= 0 || s <= 0)
          continue;
      }
      F.data = V;
      const R = ni.create(F);
      if (!R.isRenderable)
        continue;
      if (!c && V.popupRef) {
        const n = Z.get(V.popupRef);
        n ? n.push(R) : Z.set(V.popupRef, [R]);
      }
      const N = R.render();
      V.hidden && (N.style.visibility = "hidden"), i(this, V0, Es).call(this, N, V.id), R.annotationEditorType > 0 && (t(this, FQ).set(R.data.id, R), (Q = this._annotationEditorUIManager) == null || Q.renderAnnotationElement(R));
    }
    i(this, V0, eR).call(this);
  }
  update({
    viewport: l
  }) {
    const U = this.div;
    this.viewport = l, F0(U, {
      rotation: l.rotation
    }), i(this, V0, eR).call(this), U.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(t(this, FQ).values());
  }
  getEditableAnnotation(l) {
    return t(this, FQ).get(l);
  }
}
tV = new WeakMap(), xF = new WeakMap(), FQ = new WeakMap(), V0 = new WeakSet(), Es = function(l, U) {
  var Z;
  const d = l.firstChild || l;
  d.id = `${pn}${U}`, this.div.append(l), (Z = t(this, tV)) == null || Z.moveElementInDOM(this.div, l, d, !1);
}, eR = function() {
  if (!t(this, xF))
    return;
  const l = this.div;
  for (const [U, d] of t(this, xF)) {
    const Z = l.querySelector(`[data-annotation-id="${U}"]`);
    if (!Z)
      continue;
    d.className = "annotationContent";
    const {
      firstChild: F
    } = Z;
    F ? F.nodeName === "CANVAS" ? F.replaceWith(d) : F.classList.contains("annotationContent") ? F.after(d) : F.before(d) : Z.append(d);
  }
  t(this, xF).clear();
};
const HV = /\r\n?|\n/g;
var VV, WV, cV, RV, NV, Qd, zU, nV, LU, QQ, zl, Cs, ws, xs, NW, hZ, nW, sW, js, pR, Os;
const il = class il extends Nl {
  constructor(U) {
    super({
      ...U,
      name: "freeTextEditor"
    });
    m(this, zl);
    m(this, VV, this.editorDivBlur.bind(this));
    m(this, WV, this.editorDivFocus.bind(this));
    m(this, cV, this.editorDivInput.bind(this));
    m(this, RV, this.editorDivKeydown.bind(this));
    m(this, NV, this.editorDivPaste.bind(this));
    m(this, Qd);
    m(this, zU, "");
    m(this, nV, `${this.id}-editor`);
    m(this, LU);
    m(this, QQ, null);
    h(this, Qd, U.color || il._defaultColor || Nl._defaultLineColor), h(this, LU, U.fontSize || il._defaultFontSize);
  }
  static get _keyboardManager() {
    const U = il.prototype, d = (Q) => Q.isEmpty(), Z = Q0.TRANSLATE_SMALL, F = Q0.TRANSLATE_BIG;
    return Fl(this, "_keyboardManager", new EV([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], U.commitOrRemove, {
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
    Nl.initialize(U, d, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const Z = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(Z.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(U, d) {
    switch (U) {
      case H.FREETEXT_SIZE:
        il._defaultFontSize = d;
        break;
      case H.FREETEXT_COLOR:
        il._defaultColor = d;
        break;
    }
  }
  updateParams(U, d) {
    switch (U) {
      case H.FREETEXT_SIZE:
        i(this, zl, Cs).call(this, d);
        break;
      case H.FREETEXT_COLOR:
        i(this, zl, ws).call(this, d);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[H.FREETEXT_SIZE, il._defaultFontSize], [H.FREETEXT_COLOR, il._defaultColor || Nl._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[H.FREETEXT_SIZE, t(this, LU)], [H.FREETEXT_COLOR, t(this, Qd)]];
  }
  _translateEmpty(U, d) {
    this._uiManager.translateSelectedEditors(U, d, !0);
  }
  getInitialTranslation() {
    const U = this.parentScale;
    return [-il._internalPadding * U, -(il._internalPadding + t(this, LU)) * U];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode())
      return;
    this.parent.setEditingState(!1), this.parent.updateToolbar(dl.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant");
    const U = this._uiManager._signal;
    this.editorDiv.addEventListener("keydown", t(this, RV), {
      signal: U
    }), this.editorDiv.addEventListener("focus", t(this, WV), {
      signal: U
    }), this.editorDiv.addEventListener("blur", t(this, VV), {
      signal: U
    }), this.editorDiv.addEventListener("input", t(this, cV), {
      signal: U
    }), this.editorDiv.addEventListener("paste", t(this, NV), {
      signal: U
    });
  }
  disableEditMode() {
    this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", t(this, nV)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", t(this, RV)), this.editorDiv.removeEventListener("focus", t(this, WV)), this.editorDiv.removeEventListener("blur", t(this, VV)), this.editorDiv.removeEventListener("input", t(this, cV)), this.editorDiv.removeEventListener("paste", t(this, NV)), this.div.focus({
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
    const U = t(this, zU), d = h(this, zU, i(this, zl, xs).call(this).trimEnd());
    if (U === d)
      return;
    const Z = (F) => {
      if (h(this, zU, F), !F) {
        this.remove();
        return;
      }
      i(this, zl, sW).call(this), this._uiManager.rebuild(this), i(this, zl, NW).call(this);
    };
    this.addCommands({
      cmd: () => {
        Z(d);
      },
      undo: () => {
        Z(U);
      },
      mustExec: !1
    }), i(this, zl, NW).call(this);
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
    il._keyboardManager.exec(this, U);
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
    this.width && (U = this.x, d = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", t(this, nV)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), Nl._l10nPromise.get("pdfjs-free-text-default-content").then((F) => {
      var Q;
      return (Q = this.editorDiv) == null ? void 0 : Q.setAttribute("default-content", F);
    }), this.editorDiv.contentEditable = !0;
    const {
      style: Z
    } = this.editorDiv;
    if (Z.fontSize = `calc(${t(this, LU)}px * var(--scale-factor))`, Z.color = t(this, Qd), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), yW(this, this.div, ["dblclick", "keydown"]), this.width) {
      const [F, Q] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: V
        } = t(this, QQ);
        let [c, R] = this.getInitialTranslation();
        [c, R] = this.pageTranslationToScreen(c, R);
        const [N, n] = this.pageDimensions, [s, a] = this.pageTranslation;
        let b, M;
        switch (this.rotation) {
          case 0:
            b = U + (V[0] - s) / N, M = d + this.height - (V[1] - a) / n;
            break;
          case 90:
            b = U + (V[0] - s) / N, M = d - (V[1] - a) / n, [c, R] = [R, -c];
            break;
          case 180:
            b = U - this.width + (V[0] - s) / N, M = d - (V[1] - a) / n, [c, R] = [-c, -R];
            break;
          case 270:
            b = U + (V[0] - s - this.height * n) / N, M = d + (V[1] - a - this.width * N) / n, [c, R] = [-R, c];
            break;
        }
        this.setAt(b * F, M * Q, c, R);
      } else
        this.setAt(U * F, d * Q, this.width * F, this.height * Q);
      i(this, zl, sW).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(U) {
    var b, M, G;
    const d = U.clipboardData || window.clipboardData, {
      types: Z
    } = d;
    if (Z.length === 1 && Z[0] === "text/plain")
      return;
    U.preventDefault();
    const F = i(b = il, hZ, pR).call(b, d.getData("text") || "").replaceAll(HV, `
`);
    if (!F)
      return;
    const Q = window.getSelection();
    if (!Q.rangeCount)
      return;
    this.editorDiv.normalize(), Q.deleteFromDocument();
    const V = Q.getRangeAt(0);
    if (!F.includes(`
`)) {
      V.insertNode(document.createTextNode(F)), this.editorDiv.normalize(), Q.collapseToStart();
      return;
    }
    const {
      startContainer: c,
      startOffset: R
    } = V, N = [], n = [];
    if (c.nodeType === Node.TEXT_NODE) {
      const J = c.parentElement;
      if (n.push(c.nodeValue.slice(R).replaceAll(HV, "")), J !== this.editorDiv) {
        let T = N;
        for (const S of this.editorDiv.childNodes) {
          if (S === J) {
            T = n;
            continue;
          }
          T.push(i(M = il, hZ, nW).call(M, S));
        }
      }
      N.push(c.nodeValue.slice(0, R).replaceAll(HV, ""));
    } else if (c === this.editorDiv) {
      let J = N, T = 0;
      for (const S of this.editorDiv.childNodes)
        T++ === R && (J = n), J.push(i(G = il, hZ, nW).call(G, S));
    }
    h(this, zU, `${N.join(`
`)}${F}${n.join(`
`)}`), i(this, zl, sW).call(this);
    const s = new Range();
    let a = N.reduce((J, T) => J + T.length, 0);
    for (const {
      firstChild: J
    } of this.editorDiv.childNodes)
      if (J.nodeType === Node.TEXT_NODE) {
        const T = J.nodeValue.length;
        if (a <= T) {
          s.setStart(J, a), s.setEnd(J, a);
          break;
        }
        a -= T;
      }
    Q.removeAllRanges(), Q.addRange(s);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(U, d, Z) {
    var V;
    let F = null;
    if (U instanceof Ls) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: c,
            fontColor: R
          },
          rect: N,
          rotation: n,
          id: s
        },
        textContent: a,
        textPosition: b,
        parent: {
          page: {
            pageNumber: M
          }
        }
      } = U;
      if (!a || a.length === 0)
        return null;
      F = U = {
        annotationType: dl.FREETEXT,
        color: Array.from(R),
        fontSize: c,
        value: a.join(`
`),
        position: b,
        pageIndex: M - 1,
        rect: N.slice(0),
        rotation: n,
        id: s,
        deleted: !1
      };
    }
    const Q = super.deserialize(U, d, Z);
    return h(Q, LU, U.fontSize), h(Q, Qd, w.makeHexColor(...U.color)), h(Q, zU, i(V = il, hZ, pR).call(V, U.value)), Q.annotationElementId = U.id || null, h(Q, QQ, F), Q;
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
    const d = il._internalPadding * this.parentScale, Z = this.getRect(d, d), F = Nl._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : t(this, Qd)), Q = {
      annotationType: dl.FREETEXT,
      color: F,
      fontSize: t(this, LU),
      value: i(this, zl, js).call(this),
      pageIndex: this.pageIndex,
      rect: Z,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    return U ? Q : this.annotationElementId && !i(this, zl, Os).call(this, Q) ? null : (Q.id = this.annotationElementId, Q);
  }
  renderAnnotationElement(U) {
    const d = super.renderAnnotationElement(U);
    if (this.deleted)
      return d;
    const {
      style: Z
    } = d;
    Z.fontSize = `calc(${t(this, LU)}px * var(--scale-factor))`, Z.color = t(this, Qd), d.replaceChildren();
    for (const Q of t(this, zU).split(`
`)) {
      const V = document.createElement("div");
      V.append(Q ? document.createTextNode(Q) : document.createElement("br")), d.append(V);
    }
    const F = il._internalPadding * this.parentScale;
    return U.updateEdited({
      rect: this.getRect(F, F),
      popupContent: t(this, zU)
    }), d;
  }
  resetAnnotationElement(U) {
    super.resetAnnotationElement(U), U.resetEdited();
  }
};
VV = new WeakMap(), WV = new WeakMap(), cV = new WeakMap(), RV = new WeakMap(), NV = new WeakMap(), Qd = new WeakMap(), zU = new WeakMap(), nV = new WeakMap(), LU = new WeakMap(), QQ = new WeakMap(), zl = new WeakSet(), Cs = function(U) {
  const d = (F) => {
    this.editorDiv.style.fontSize = `calc(${F}px * var(--scale-factor))`, this.translate(0, -(F - t(this, LU)) * this.parentScale), h(this, LU, F), i(this, zl, NW).call(this);
  }, Z = t(this, LU);
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ws = function(U) {
  const d = (F) => {
    h(this, Qd, this.editorDiv.style.color = F);
  }, Z = t(this, Qd);
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, xs = function() {
  var d;
  const U = [];
  this.editorDiv.normalize();
  for (const Z of this.editorDiv.childNodes)
    U.push(i(d = il, hZ, nW).call(d, Z));
  return U.join(`
`);
}, NW = function() {
  const [U, d] = this.parentDimensions;
  let Z;
  if (this.isAttachedToDOM)
    Z = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: F,
      div: Q
    } = this, V = Q.style.display, c = Q.classList.contains("hidden");
    Q.classList.remove("hidden"), Q.style.display = "hidden", F.div.append(this.div), Z = Q.getBoundingClientRect(), Q.remove(), Q.style.display = V, Q.classList.toggle("hidden", c);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = Z.width / U, this.height = Z.height / d) : (this.width = Z.height / U, this.height = Z.width / d), this.fixAndSetPosition();
}, hZ = new WeakSet(), nW = function(U) {
  return (U.nodeType === Node.TEXT_NODE ? U.nodeValue : U.innerText).replaceAll(HV, "");
}, sW = function() {
  if (this.editorDiv.replaceChildren(), !!t(this, zU))
    for (const U of t(this, zU).split(`
`)) {
      const d = document.createElement("div");
      d.append(U ? document.createTextNode(U) : document.createElement("br")), this.editorDiv.append(d);
    }
}, js = function() {
  return t(this, zU).replaceAll(" ", " ");
}, pR = function(U) {
  return U.replaceAll(" ", " ");
}, Os = function(U) {
  const {
    value: d,
    fontSize: Z,
    color: F,
    pageIndex: Q
  } = t(this, QQ);
  return this._hasBeenMoved || U.value !== d || U.fontSize !== Z || U.color.some((V, c) => V !== F[c]) || U.pageIndex !== Q;
}, m(il, hZ), f(il, "_freeTextDefaultContent", ""), f(il, "_internalPadding", 0), f(il, "_defaultColor", null), f(il, "_defaultFontSize", 10), f(il, "_type", "freetext"), f(il, "_editorType", dl.FREETEXT);
let uR = il;
var sV, xZ, td, bU, rs, aW, gs, Ks, oR;
class yR {
  constructor(l, U = 0, d = 0, Z = !0) {
    m(this, bU);
    m(this, sV);
    m(this, xZ, []);
    m(this, td, []);
    let F = 1 / 0, Q = -1 / 0, V = 1 / 0, c = -1 / 0;
    const N = 10 ** -4;
    for (const {
      x: J,
      y: T,
      width: S,
      height: B
    } of l) {
      const Y = Math.floor((J - U) / N) * N, X = Math.ceil((J + S + U) / N) * N, e = Math.floor((T - U) / N) * N, o = Math.ceil((T + B + U) / N) * N, y = [Y, e, o, !0], O = [X, e, o, !1];
      t(this, xZ).push(y, O), F = Math.min(F, Y), Q = Math.max(Q, X), V = Math.min(V, e), c = Math.max(c, o);
    }
    const n = Q - F + 2 * d, s = c - V + 2 * d, a = F - d, b = V - d, M = t(this, xZ).at(Z ? -1 : -2), G = [M[0], M[2]];
    for (const J of t(this, xZ)) {
      const [T, S, B] = J;
      J[0] = (T - a) / n, J[1] = (S - b) / s, J[2] = (B - b) / s;
    }
    h(this, sV, {
      x: a,
      y: b,
      width: n,
      height: s,
      lastPoint: G
    });
  }
  getOutlines() {
    t(this, xZ).sort((U, d) => U[0] - d[0] || U[1] - d[1] || U[2] - d[2]);
    const l = [];
    for (const U of t(this, xZ))
      U[3] ? (l.push(...i(this, bU, oR).call(this, U)), i(this, bU, gs).call(this, U)) : (i(this, bU, Ks).call(this, U), l.push(...i(this, bU, oR).call(this, U)));
    return i(this, bU, rs).call(this, l);
  }
}
sV = new WeakMap(), xZ = new WeakMap(), td = new WeakMap(), bU = new WeakSet(), rs = function(l) {
  const U = [], d = /* @__PURE__ */ new Set();
  for (const Q of l) {
    const [V, c, R] = Q;
    U.push([V, c, Q], [V, R, Q]);
  }
  U.sort((Q, V) => Q[1] - V[1] || Q[0] - V[0]);
  for (let Q = 0, V = U.length; Q < V; Q += 2) {
    const c = U[Q][2], R = U[Q + 1][2];
    c.push(R), R.push(c), d.add(c), d.add(R);
  }
  const Z = [];
  let F;
  for (; d.size > 0; ) {
    const Q = d.values().next().value;
    let [V, c, R, N, n] = Q;
    d.delete(Q);
    let s = V, a = c;
    for (F = [V, R], Z.push(F); ; ) {
      let b;
      if (d.has(N))
        b = N;
      else if (d.has(n))
        b = n;
      else
        break;
      d.delete(b), [V, c, R, N, n] = b, s !== V && (F.push(s, a, V, a === c ? c : R), s = V), a = a === c ? R : c;
    }
    F.push(s, a);
  }
  return new oi(Z, t(this, sV));
}, aW = function(l) {
  const U = t(this, td);
  let d = 0, Z = U.length - 1;
  for (; d <= Z; ) {
    const F = d + Z >> 1, Q = U[F][0];
    if (Q === l)
      return F;
    Q < l ? d = F + 1 : Z = F - 1;
  }
  return Z + 1;
}, gs = function([, l, U]) {
  const d = i(this, bU, aW).call(this, l);
  t(this, td).splice(d, 0, [l, U]);
}, Ks = function([, l, U]) {
  const d = i(this, bU, aW).call(this, l);
  for (let Z = d; Z < t(this, td).length; Z++) {
    const [F, Q] = t(this, td)[Z];
    if (F !== l)
      break;
    if (F === l && Q === U) {
      t(this, td).splice(Z, 1);
      return;
    }
  }
  for (let Z = d - 1; Z >= 0; Z--) {
    const [F, Q] = t(this, td)[Z];
    if (F !== l)
      break;
    if (F === l && Q === U) {
      t(this, td).splice(Z, 1);
      return;
    }
  }
}, oR = function(l) {
  const [U, d, Z] = l, F = [[U, d, Z]], Q = i(this, bU, aW).call(this, Z);
  for (let V = 0; V < Q; V++) {
    const [c, R] = t(this, td)[V];
    for (let N = 0, n = F.length; N < n; N++) {
      const [, s, a] = F[N];
      if (!(R <= s || a <= c)) {
        if (s >= c) {
          if (a > R)
            F[N][1] = R;
          else {
            if (n === 1)
              return [];
            F.splice(N, 1), N--, n--;
          }
          continue;
        }
        F[N][2] = c, a > R && F.push([U, R, a]);
      }
    }
  }
  return F;
};
class Hs {
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
    return this instanceof LR;
  }
}
var aV, tQ;
class oi extends Hs {
  constructor(U, d) {
    super();
    m(this, aV);
    m(this, tQ);
    h(this, tQ, U), h(this, aV, d);
  }
  toSVGPath() {
    const U = [];
    for (const d of t(this, tQ)) {
      let [Z, F] = d;
      U.push(`M${Z} ${F}`);
      for (let Q = 2; Q < d.length; Q += 2) {
        const V = d[Q], c = d[Q + 1];
        V === Z ? (U.push(`V${c}`), F = c) : c === F && (U.push(`H${V}`), Z = V);
      }
      U.push("Z");
    }
    return U.join(" ");
  }
  serialize([U, d, Z, F], Q) {
    const V = [], c = Z - U, R = F - d;
    for (const N of t(this, tQ)) {
      const n = new Array(N.length);
      for (let s = 0; s < N.length; s += 2)
        n[s] = U + N[s] * c, n[s + 1] = F - N[s + 1] * R;
      V.push(n);
    }
    return V;
  }
  get box() {
    return t(this, aV);
  }
}
aV = new WeakMap(), tQ = new WeakMap();
var Td, ZZ, VQ, WQ, Sd, Ul, jF, OF, bV, hV, cQ, RQ, jZ, iV, Zc, Fc, mV, zR;
const wd = class wd {
  constructor({
    x: l,
    y: U
  }, d, Z, F, Q, V = 0) {
    m(this, mV);
    m(this, Td);
    m(this, ZZ, []);
    m(this, VQ);
    m(this, WQ);
    m(this, Sd, []);
    m(this, Ul, new Float64Array(18));
    m(this, jF);
    m(this, OF);
    m(this, bV);
    m(this, hV);
    m(this, cQ);
    m(this, RQ);
    m(this, jZ, []);
    h(this, Td, d), h(this, RQ, F * Z), h(this, WQ, Q), t(this, Ul).set([NaN, NaN, NaN, NaN, l, U], 6), h(this, VQ, V), h(this, hV, t(wd, iV) * Z), h(this, bV, t(wd, Fc) * Z), h(this, cQ, Z), t(this, jZ).push(l, U);
  }
  get free() {
    return !0;
  }
  isEmpty() {
    return isNaN(t(this, Ul)[8]);
  }
  add({
    x: l,
    y: U
  }) {
    var y;
    h(this, jF, l), h(this, OF, U);
    const [d, Z, F, Q] = t(this, Td);
    let [V, c, R, N] = t(this, Ul).subarray(8, 12);
    const n = l - R, s = U - N, a = Math.hypot(n, s);
    if (a < t(this, bV))
      return !1;
    const b = a - t(this, hV), M = b / a, G = M * n, J = M * s;
    let T = V, S = c;
    V = R, c = N, R += G, N += J, (y = t(this, jZ)) == null || y.push(l, U);
    const B = -J / b, Y = G / b, X = B * t(this, RQ), e = Y * t(this, RQ);
    return t(this, Ul).set(t(this, Ul).subarray(2, 8), 0), t(this, Ul).set([R + X, N + e], 4), t(this, Ul).set(t(this, Ul).subarray(14, 18), 12), t(this, Ul).set([R - X, N - e], 16), isNaN(t(this, Ul)[6]) ? (t(this, Sd).length === 0 && (t(this, Ul).set([V + X, c + e], 2), t(this, Sd).push(NaN, NaN, NaN, NaN, (V + X - d) / F, (c + e - Z) / Q), t(this, Ul).set([V - X, c - e], 14), t(this, ZZ).push(NaN, NaN, NaN, NaN, (V - X - d) / F, (c - e - Z) / Q)), t(this, Ul).set([T, S, V, c, R, N], 6), !this.isEmpty()) : (t(this, Ul).set([T, S, V, c, R, N], 6), Math.abs(Math.atan2(S - c, T - V) - Math.atan2(J, G)) < Math.PI / 2 ? ([V, c, R, N] = t(this, Ul).subarray(2, 6), t(this, Sd).push(NaN, NaN, NaN, NaN, ((V + R) / 2 - d) / F, ((c + N) / 2 - Z) / Q), [V, c, T, S] = t(this, Ul).subarray(14, 18), t(this, ZZ).push(NaN, NaN, NaN, NaN, ((T + V) / 2 - d) / F, ((S + c) / 2 - Z) / Q), !0) : ([T, S, V, c, R, N] = t(this, Ul).subarray(0, 6), t(this, Sd).push(((T + 5 * V) / 6 - d) / F, ((S + 5 * c) / 6 - Z) / Q, ((5 * V + R) / 6 - d) / F, ((5 * c + N) / 6 - Z) / Q, ((V + R) / 2 - d) / F, ((c + N) / 2 - Z) / Q), [R, N, V, c, T, S] = t(this, Ul).subarray(12, 18), t(this, ZZ).push(((T + 5 * V) / 6 - d) / F, ((S + 5 * c) / 6 - Z) / Q, ((5 * V + R) / 6 - d) / F, ((5 * c + N) / 6 - Z) / Q, ((V + R) / 2 - d) / F, ((c + N) / 2 - Z) / Q), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const l = t(this, Sd), U = t(this, ZZ), d = t(this, Ul).subarray(4, 6), Z = t(this, Ul).subarray(16, 18), [F, Q, V, c] = t(this, Td), [R, N, n, s] = i(this, mV, zR).call(this);
    if (isNaN(t(this, Ul)[6]) && !this.isEmpty())
      return `M${(t(this, Ul)[2] - F) / V} ${(t(this, Ul)[3] - Q) / c} L${(t(this, Ul)[4] - F) / V} ${(t(this, Ul)[5] - Q) / c} L${R} ${N} L${n} ${s} L${(t(this, Ul)[16] - F) / V} ${(t(this, Ul)[17] - Q) / c} L${(t(this, Ul)[14] - F) / V} ${(t(this, Ul)[15] - Q) / c} Z`;
    const a = [];
    a.push(`M${l[4]} ${l[5]}`);
    for (let b = 6; b < l.length; b += 6)
      isNaN(l[b]) ? a.push(`L${l[b + 4]} ${l[b + 5]}`) : a.push(`C${l[b]} ${l[b + 1]} ${l[b + 2]} ${l[b + 3]} ${l[b + 4]} ${l[b + 5]}`);
    a.push(`L${(d[0] - F) / V} ${(d[1] - Q) / c} L${R} ${N} L${n} ${s} L${(Z[0] - F) / V} ${(Z[1] - Q) / c}`);
    for (let b = U.length - 6; b >= 6; b -= 6)
      isNaN(U[b]) ? a.push(`L${U[b + 4]} ${U[b + 5]}`) : a.push(`C${U[b]} ${U[b + 1]} ${U[b + 2]} ${U[b + 3]} ${U[b + 4]} ${U[b + 5]}`);
    return a.push(`L${U[4]} ${U[5]} Z`), a.join(" ");
  }
  getOutlines() {
    var J;
    const l = t(this, Sd), U = t(this, ZZ), d = t(this, Ul), Z = d.subarray(4, 6), F = d.subarray(16, 18), [Q, V, c, R] = t(this, Td), N = new Float64Array((((J = t(this, jZ)) == null ? void 0 : J.length) ?? 0) + 2);
    for (let T = 0, S = N.length - 2; T < S; T += 2)
      N[T] = (t(this, jZ)[T] - Q) / c, N[T + 1] = (t(this, jZ)[T + 1] - V) / R;
    N[N.length - 2] = (t(this, jF) - Q) / c, N[N.length - 1] = (t(this, OF) - V) / R;
    const [n, s, a, b] = i(this, mV, zR).call(this);
    if (isNaN(d[6]) && !this.isEmpty()) {
      const T = new Float64Array(36);
      return T.set([NaN, NaN, NaN, NaN, (d[2] - Q) / c, (d[3] - V) / R, NaN, NaN, NaN, NaN, (d[4] - Q) / c, (d[5] - V) / R, NaN, NaN, NaN, NaN, n, s, NaN, NaN, NaN, NaN, a, b, NaN, NaN, NaN, NaN, (d[16] - Q) / c, (d[17] - V) / R, NaN, NaN, NaN, NaN, (d[14] - Q) / c, (d[15] - V) / R], 0), new LR(T, N, t(this, Td), t(this, cQ), t(this, VQ), t(this, WQ));
    }
    const M = new Float64Array(t(this, Sd).length + 24 + t(this, ZZ).length);
    let G = l.length;
    for (let T = 0; T < G; T += 2) {
      if (isNaN(l[T])) {
        M[T] = M[T + 1] = NaN;
        continue;
      }
      M[T] = l[T], M[T + 1] = l[T + 1];
    }
    M.set([NaN, NaN, NaN, NaN, (Z[0] - Q) / c, (Z[1] - V) / R, NaN, NaN, NaN, NaN, n, s, NaN, NaN, NaN, NaN, a, b, NaN, NaN, NaN, NaN, (F[0] - Q) / c, (F[1] - V) / R], G), G += 24;
    for (let T = U.length - 6; T >= 6; T -= 6)
      for (let S = 0; S < 6; S += 2) {
        if (isNaN(U[T + S])) {
          M[G] = M[G + 1] = NaN, G += 2;
          continue;
        }
        M[G] = U[T + S], M[G + 1] = U[T + S + 1], G += 2;
      }
    return M.set([NaN, NaN, NaN, NaN, U[4], U[5]], G), new LR(M, N, t(this, Td), t(this, cQ), t(this, VQ), t(this, WQ));
  }
};
Td = new WeakMap(), ZZ = new WeakMap(), VQ = new WeakMap(), WQ = new WeakMap(), Sd = new WeakMap(), Ul = new WeakMap(), jF = new WeakMap(), OF = new WeakMap(), bV = new WeakMap(), hV = new WeakMap(), cQ = new WeakMap(), RQ = new WeakMap(), jZ = new WeakMap(), iV = new WeakMap(), Zc = new WeakMap(), Fc = new WeakMap(), mV = new WeakSet(), zR = function() {
  const l = t(this, Ul).subarray(4, 6), U = t(this, Ul).subarray(16, 18), [d, Z, F, Q] = t(this, Td);
  return [(t(this, jF) + (l[0] - U[0]) / 2 - d) / F, (t(this, OF) + (l[1] - U[1]) / 2 - Z) / Q, (t(this, jF) + (U[0] - l[0]) / 2 - d) / F, (t(this, OF) + (U[1] - l[1]) / 2 - Z) / Q];
}, m(wd, iV, 8), m(wd, Zc, 2), m(wd, Fc, t(wd, iV) + t(wd, Zc));
let LW = wd;
var NQ, rF, FZ, MV, kU, JV, el, TU, CQ, wQ, vs;
class LR extends Hs {
  constructor(U, d, Z, F, Q, V) {
    super();
    m(this, TU);
    m(this, NQ);
    m(this, rF, null);
    m(this, FZ);
    m(this, MV);
    m(this, kU);
    m(this, JV);
    m(this, el);
    h(this, el, U), h(this, kU, d), h(this, NQ, Z), h(this, JV, F), h(this, FZ, Q), h(this, MV, V), i(this, TU, vs).call(this, V);
    const {
      x: c,
      y: R,
      width: N,
      height: n
    } = t(this, rF);
    for (let s = 0, a = U.length; s < a; s += 2)
      U[s] = (U[s] - c) / N, U[s + 1] = (U[s + 1] - R) / n;
    for (let s = 0, a = d.length; s < a; s += 2)
      d[s] = (d[s] - c) / N, d[s + 1] = (d[s + 1] - R) / n;
  }
  toSVGPath() {
    const U = [`M${t(this, el)[4]} ${t(this, el)[5]}`];
    for (let d = 6, Z = t(this, el).length; d < Z; d += 6) {
      if (isNaN(t(this, el)[d])) {
        U.push(`L${t(this, el)[d + 4]} ${t(this, el)[d + 5]}`);
        continue;
      }
      U.push(`C${t(this, el)[d]} ${t(this, el)[d + 1]} ${t(this, el)[d + 2]} ${t(this, el)[d + 3]} ${t(this, el)[d + 4]} ${t(this, el)[d + 5]}`);
    }
    return U.push("Z"), U.join(" ");
  }
  serialize([U, d, Z, F], Q) {
    const V = Z - U, c = F - d;
    let R, N;
    switch (Q) {
      case 0:
        R = i(this, TU, CQ).call(this, t(this, el), U, F, V, -c), N = i(this, TU, CQ).call(this, t(this, kU), U, F, V, -c);
        break;
      case 90:
        R = i(this, TU, wQ).call(this, t(this, el), U, d, V, c), N = i(this, TU, wQ).call(this, t(this, kU), U, d, V, c);
        break;
      case 180:
        R = i(this, TU, CQ).call(this, t(this, el), Z, d, -V, c), N = i(this, TU, CQ).call(this, t(this, kU), Z, d, -V, c);
        break;
      case 270:
        R = i(this, TU, wQ).call(this, t(this, el), Z, F, -V, -c), N = i(this, TU, wQ).call(this, t(this, kU), Z, F, -V, -c);
        break;
    }
    return {
      outline: Array.from(R),
      points: [Array.from(N)]
    };
  }
  get box() {
    return t(this, rF);
  }
  getNewOutline(U, d) {
    const {
      x: Z,
      y: F,
      width: Q,
      height: V
    } = t(this, rF), [c, R, N, n] = t(this, NQ), s = Q * N, a = V * n, b = Z * N + c, M = F * n + R, G = new LW({
      x: t(this, kU)[0] * s + b,
      y: t(this, kU)[1] * a + M
    }, t(this, NQ), t(this, JV), U, t(this, MV), d ?? t(this, FZ));
    for (let J = 2; J < t(this, kU).length; J += 2)
      G.add({
        x: t(this, kU)[J] * s + b,
        y: t(this, kU)[J + 1] * a + M
      });
    return G.getOutlines();
  }
}
NQ = new WeakMap(), rF = new WeakMap(), FZ = new WeakMap(), MV = new WeakMap(), kU = new WeakMap(), JV = new WeakMap(), el = new WeakMap(), TU = new WeakSet(), CQ = function(U, d, Z, F, Q) {
  const V = new Float64Array(U.length);
  for (let c = 0, R = U.length; c < R; c += 2)
    V[c] = d + U[c] * F, V[c + 1] = Z + U[c + 1] * Q;
  return V;
}, wQ = function(U, d, Z, F, Q) {
  const V = new Float64Array(U.length);
  for (let c = 0, R = U.length; c < R; c += 2)
    V[c] = d + U[c + 1] * F, V[c + 1] = Z + U[c] * Q;
  return V;
}, vs = function(U) {
  const d = t(this, el);
  let Z = d[4], F = d[5], Q = Z, V = F, c = Z, R = F, N = Z, n = F;
  const s = U ? Math.max : Math.min;
  for (let J = 6, T = d.length; J < T; J += 6) {
    if (isNaN(d[J]))
      Q = Math.min(Q, d[J + 4]), V = Math.min(V, d[J + 5]), c = Math.max(c, d[J + 4]), R = Math.max(R, d[J + 5]), n < d[J + 5] ? (N = d[J + 4], n = d[J + 5]) : n === d[J + 5] && (N = s(N, d[J + 4]));
    else {
      const S = w.bezierBoundingBox(Z, F, ...d.slice(J, J + 6));
      Q = Math.min(Q, S[0]), V = Math.min(V, S[1]), c = Math.max(c, S[2]), R = Math.max(R, S[3]), n < S[3] ? (N = S[2], n = S[3]) : n === S[3] && (N = s(N, S[2]));
    }
    Z = d[J + 4], F = d[J + 5];
  }
  const a = Q - t(this, FZ), b = V - t(this, FZ), M = c - Q + 2 * t(this, FZ), G = R - V + 2 * t(this, FZ);
  h(this, rF, {
    x: a,
    y: b,
    width: M,
    height: G,
    lastPoint: [N, n]
  });
};
var GV, TV, Vd, gF, nQ, Il, SV, sQ, XV, YV, Wd, aQ, hl, kR, DR, Ps, ZF, fs, XZ;
const xd = class xd {
  constructor({
    editor: l = null,
    uiManager: U = null
  }) {
    m(this, hl);
    m(this, GV, i(this, hl, Ps).bind(this));
    m(this, TV, i(this, hl, fs).bind(this));
    m(this, Vd, null);
    m(this, gF, null);
    m(this, nQ);
    m(this, Il, null);
    m(this, SV, !1);
    m(this, sQ, !1);
    m(this, XV, null);
    m(this, YV);
    m(this, Wd, null);
    m(this, aQ);
    var d;
    l ? (h(this, sQ, !1), h(this, aQ, H.HIGHLIGHT_COLOR), h(this, XV, l)) : (h(this, sQ, !0), h(this, aQ, H.HIGHLIGHT_DEFAULT_COLOR)), h(this, Wd, (l == null ? void 0 : l._uiManager) || U), h(this, YV, t(this, Wd)._eventBus), h(this, nQ, (l == null ? void 0 : l.color) || ((d = t(this, Wd)) == null ? void 0 : d.highlightColors.values().next().value) || "#FFFF98");
  }
  static get _keyboardManager() {
    return Fl(this, "_keyboardManager", new EV([[["Escape", "mac+Escape"], xd.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], xd.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], xd.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], xd.prototype._moveToPrevious], [["Home", "mac+Home"], xd.prototype._moveToBeginning], [["End", "mac+End"], xd.prototype._moveToEnd]]));
  }
  renderButton() {
    const l = h(this, Vd, document.createElement("button"));
    l.className = "colorPicker", l.tabIndex = "0", l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), l.setAttribute("aria-haspopup", !0);
    const U = t(this, Wd)._signal;
    l.addEventListener("click", i(this, hl, ZF).bind(this), {
      signal: U
    }), l.addEventListener("keydown", t(this, GV), {
      signal: U
    });
    const d = h(this, gF, document.createElement("span"));
    return d.className = "swatch", d.setAttribute("aria-hidden", !0), d.style.backgroundColor = t(this, nQ), l.append(d), l;
  }
  renderMainDropdown() {
    const l = h(this, Il, i(this, hl, kR).call(this));
    return l.setAttribute("aria-orientation", "horizontal"), l.setAttribute("aria-labelledby", "highlightColorPickerLabel"), l;
  }
  _colorSelectFromKeyboard(l) {
    if (l.target === t(this, Vd)) {
      i(this, hl, ZF).call(this, l);
      return;
    }
    const U = l.target.getAttribute("data-color");
    U && i(this, hl, DR).call(this, U, l);
  }
  _moveToNext(l) {
    var U, d;
    if (!t(this, hl, XZ)) {
      i(this, hl, ZF).call(this, l);
      return;
    }
    if (l.target === t(this, Vd)) {
      (U = t(this, Il).firstChild) == null || U.focus();
      return;
    }
    (d = l.target.nextSibling) == null || d.focus();
  }
  _moveToPrevious(l) {
    var U, d;
    if (l.target === ((U = t(this, Il)) == null ? void 0 : U.firstChild) || l.target === t(this, Vd)) {
      t(this, hl, XZ) && this._hideDropdownFromKeyboard();
      return;
    }
    t(this, hl, XZ) || i(this, hl, ZF).call(this, l), (d = l.target.previousSibling) == null || d.focus();
  }
  _moveToBeginning(l) {
    var U;
    if (!t(this, hl, XZ)) {
      i(this, hl, ZF).call(this, l);
      return;
    }
    (U = t(this, Il).firstChild) == null || U.focus();
  }
  _moveToEnd(l) {
    var U;
    if (!t(this, hl, XZ)) {
      i(this, hl, ZF).call(this, l);
      return;
    }
    (U = t(this, Il).lastChild) == null || U.focus();
  }
  hideDropdown() {
    var l;
    (l = t(this, Il)) == null || l.classList.add("hidden"), window.removeEventListener("pointerdown", t(this, TV));
  }
  _hideDropdownFromKeyboard() {
    var l;
    if (!t(this, sQ)) {
      if (!t(this, hl, XZ)) {
        (l = t(this, XV)) == null || l.unselect();
        return;
      }
      this.hideDropdown(), t(this, Vd).focus({
        preventScroll: !0,
        focusVisible: t(this, SV)
      });
    }
  }
  updateColor(l) {
    if (t(this, gF) && (t(this, gF).style.backgroundColor = l), !t(this, Il))
      return;
    const U = t(this, Wd).highlightColors.values();
    for (const d of t(this, Il).children)
      d.setAttribute("aria-selected", U.next().value === l);
  }
  destroy() {
    var l, U;
    (l = t(this, Vd)) == null || l.remove(), h(this, Vd, null), h(this, gF, null), (U = t(this, Il)) == null || U.remove(), h(this, Il, null);
  }
};
GV = new WeakMap(), TV = new WeakMap(), Vd = new WeakMap(), gF = new WeakMap(), nQ = new WeakMap(), Il = new WeakMap(), SV = new WeakMap(), sQ = new WeakMap(), XV = new WeakMap(), YV = new WeakMap(), Wd = new WeakMap(), aQ = new WeakMap(), hl = new WeakSet(), kR = function() {
  const l = document.createElement("div"), U = t(this, Wd)._signal;
  l.addEventListener("contextmenu", SU, {
    signal: U
  }), l.className = "dropdown", l.role = "listbox", l.setAttribute("aria-multiselectable", !1), l.setAttribute("aria-orientation", "vertical"), l.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [d, Z] of t(this, Wd).highlightColors) {
    const F = document.createElement("button");
    F.tabIndex = "0", F.role = "option", F.setAttribute("data-color", Z), F.title = d, F.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${d}`);
    const Q = document.createElement("span");
    F.append(Q), Q.className = "swatch", Q.style.backgroundColor = Z, F.setAttribute("aria-selected", Z === t(this, nQ)), F.addEventListener("click", i(this, hl, DR).bind(this, Z), {
      signal: U
    }), l.append(F);
  }
  return l.addEventListener("keydown", t(this, GV), {
    signal: U
  }), l;
}, DR = function(l, U) {
  U.stopPropagation(), t(this, YV).dispatch("switchannotationeditorparams", {
    source: this,
    type: t(this, aQ),
    value: l
  });
}, Ps = function(l) {
  xd._keyboardManager.exec(this, l);
}, ZF = function(l) {
  if (t(this, hl, XZ)) {
    this.hideDropdown();
    return;
  }
  if (h(this, SV, l.detail === 0), window.addEventListener("pointerdown", t(this, TV), {
    signal: t(this, Wd)._signal
  }), t(this, Il)) {
    t(this, Il).classList.remove("hidden");
    return;
  }
  const U = h(this, Il, i(this, hl, kR).call(this));
  t(this, Vd).append(U);
}, fs = function(l) {
  var U;
  (U = t(this, Il)) != null && U.contains(l.target) || this.hideDropdown();
}, XZ = function() {
  return t(this, Il) && !t(this, Il).classList.contains("hidden");
};
let kW = xd;
var bQ, BV, OZ, KF, hQ, gU, eV, uV, HF, cd, NU, DU, Qc, iQ, vF, El, mQ, Xd, pV, $, IR, ER, As, _s, qs, CR, xQ, PU, m0, $s, bW, jQ, la, Ua, da, Za;
const Vl = class Vl extends Nl {
  constructor(U) {
    super({
      ...U,
      name: "highlightEditor"
    });
    m(this, $);
    m(this, bQ, null);
    m(this, BV, 0);
    m(this, OZ);
    m(this, KF, null);
    m(this, hQ, null);
    m(this, gU, null);
    m(this, eV, null);
    m(this, uV, 0);
    m(this, HF, null);
    m(this, cd, null);
    m(this, NU, null);
    m(this, DU, !1);
    m(this, Qc, i(this, $, $s).bind(this));
    m(this, iQ, null);
    m(this, vF);
    m(this, El, null);
    m(this, mQ, "");
    m(this, Xd);
    m(this, pV, "");
    this.color = U.color || Vl._defaultColor, h(this, Xd, U.thickness || Vl._defaultThickness), h(this, vF, U.opacity || Vl._defaultOpacity), h(this, OZ, U.boxes || null), h(this, pV, U.methodOfCreation || ""), h(this, mQ, U.text || ""), this._isDraggable = !1, U.highlightId > -1 ? (h(this, DU, !0), i(this, $, ER).call(this, U), i(this, $, xQ).call(this)) : (h(this, bQ, U.anchorNode), h(this, BV, U.anchorOffset), h(this, eV, U.focusNode), h(this, uV, U.focusOffset), i(this, $, IR).call(this), i(this, $, xQ).call(this), this.rotate(this.rotation));
  }
  static get _keyboardManager() {
    const U = Vl.prototype;
    return Fl(this, "_keyboardManager", new EV([[["ArrowLeft", "mac+ArrowLeft"], U._moveCaret, {
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
      type: t(this, DU) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: t(this, Xd),
      methodOfCreation: t(this, pV)
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
    Nl.initialize(U, d), Vl._defaultColor || (Vl._defaultColor = ((Z = d.highlightColors) == null ? void 0 : Z.values().next().value) || "#fff066");
  }
  static updateDefaultParams(U, d) {
    switch (U) {
      case H.HIGHLIGHT_DEFAULT_COLOR:
        Vl._defaultColor = d;
        break;
      case H.HIGHLIGHT_THICKNESS:
        Vl._defaultThickness = d;
        break;
    }
  }
  translateInPage(U, d) {
  }
  get toolbarPosition() {
    return t(this, iQ);
  }
  updateParams(U, d) {
    switch (U) {
      case H.HIGHLIGHT_COLOR:
        i(this, $, As).call(this, d);
        break;
      case H.HIGHLIGHT_THICKNESS:
        i(this, $, _s).call(this, d);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[H.HIGHLIGHT_DEFAULT_COLOR, Vl._defaultColor], [H.HIGHLIGHT_THICKNESS, Vl._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[H.HIGHLIGHT_COLOR, this.color || Vl._defaultColor], [H.HIGHLIGHT_THICKNESS, t(this, Xd) || Vl._defaultThickness], [H.HIGHLIGHT_FREE, t(this, DU)]];
  }
  async addEditToolbar() {
    const U = await super.addEditToolbar();
    return U ? (this._uiManager.highlightColors && (h(this, hQ, new kW({
      editor: this
    })), U.addColorPicker(t(this, hQ))), U) : null;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(i(this, $, jQ).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(U, d) {
    return super.getRect(U, d, i(this, $, jQ).call(this));
  }
  onceAdded() {
    this.parent.addUndoableEditor(this), this.div.focus();
  }
  remove() {
    i(this, $, CR).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (i(this, $, xQ).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(U) {
    var Z;
    let d = !1;
    this.parent && !U ? i(this, $, CR).call(this) : U && (i(this, $, xQ).call(this, U), d = !this.parent && ((Z = this.div) == null ? void 0 : Z.classList.contains("selectedEditor"))), super.setParent(U), this.show(this._isVisible), d && this.select();
  }
  rotate(U) {
    var F, Q, V;
    const {
      drawLayer: d
    } = this.parent;
    let Z;
    t(this, DU) ? (U = (U - this.rotation + 360) % 360, Z = i(F = Vl, PU, m0).call(F, t(this, cd).box, U)) : Z = i(Q = Vl, PU, m0).call(Q, this, U), d.rotate(t(this, NU), U), d.rotate(t(this, El), U), d.updateBox(t(this, NU), Z), d.updateBox(t(this, El), i(V = Vl, PU, m0).call(V, t(this, gU).box, U));
  }
  render() {
    if (this.div)
      return this.div;
    const U = super.render();
    t(this, mQ) && (U.setAttribute("aria-label", t(this, mQ)), U.setAttribute("role", "mark")), t(this, DU) ? U.classList.add("free") : this.div.addEventListener("keydown", t(this, Qc), {
      signal: this._uiManager._signal
    });
    const d = h(this, HF, document.createElement("div"));
    U.append(d), d.setAttribute("aria-hidden", "true"), d.className = "internal", d.style.clipPath = t(this, KF);
    const [Z, F] = this.parentDimensions;
    return this.setDims(this.width * Z, this.height * F), yW(this, t(this, HF), ["pointerover", "pointerleave"]), this.enableEditing(), U;
  }
  pointerover() {
    this.parent.drawLayer.addClass(t(this, El), "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(t(this, El), "hovered");
  }
  _moveCaret(U) {
    switch (this.parent.unselect(this), U) {
      case 0:
      case 2:
        i(this, $, bW).call(this, !0);
        break;
      case 1:
      case 3:
        i(this, $, bW).call(this, !1);
        break;
    }
  }
  select() {
    var U, d;
    super.select(), t(this, El) && ((U = this.parent) == null || U.drawLayer.removeClass(t(this, El), "hovered"), (d = this.parent) == null || d.drawLayer.addClass(t(this, El), "selected"));
  }
  unselect() {
    var U;
    super.unselect(), t(this, El) && ((U = this.parent) == null || U.drawLayer.removeClass(t(this, El), "selected"), t(this, DU) || i(this, $, bW).call(this, !1));
  }
  get _mustFixPosition() {
    return !t(this, DU);
  }
  show(U = this._isVisible) {
    super.show(U), this.parent && (this.parent.drawLayer.show(t(this, NU), U), this.parent.drawLayer.show(t(this, El), U));
  }
  static startHighlighting(U, d, {
    target: Z,
    x: F,
    y: Q
  }) {
    const {
      x: V,
      y: c,
      width: R,
      height: N
    } = Z.getBoundingClientRect(), n = (G) => {
      i(this, PU, da).call(this, U, G);
    }, s = U._signal, a = {
      capture: !0,
      passive: !1,
      signal: s
    }, b = (G) => {
      G.preventDefault(), G.stopPropagation();
    }, M = (G) => {
      Z.removeEventListener("pointermove", n), window.removeEventListener("blur", M), window.removeEventListener("pointerup", M), window.removeEventListener("pointerdown", b, a), window.removeEventListener("contextmenu", SU), i(this, PU, Za).call(this, U, G);
    };
    window.addEventListener("blur", M, {
      signal: s
    }), window.addEventListener("pointerup", M, {
      signal: s
    }), window.addEventListener("pointerdown", b, a), window.addEventListener("contextmenu", SU, {
      signal: s
    }), Z.addEventListener("pointermove", n, {
      signal: s
    }), this._freeHighlight = new LW({
      x: F,
      y: Q
    }, [V, c, R, N], U.scale, this._defaultThickness / 2, d, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = U.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, !0);
  }
  static deserialize(U, d, Z) {
    var M;
    const F = super.deserialize(U, d, Z), {
      rect: [Q, V, c, R],
      color: N,
      quadPoints: n
    } = U;
    F.color = w.makeHexColor(...N), h(F, vF, U.opacity);
    const [s, a] = F.pageDimensions;
    F.width = (c - Q) / s, F.height = (R - V) / a;
    const b = h(F, OZ, []);
    for (let G = 0; G < n.length; G += 8)
      b.push({
        x: (n[4] - c) / s,
        y: (R - (1 - n[G + 5])) / a,
        width: (n[G + 2] - n[G]) / s,
        height: (n[G + 5] - n[G + 1]) / a
      });
    return i(M = F, $, IR).call(M), F;
  }
  serialize(U = !1) {
    if (this.isEmpty() || U)
      return null;
    const d = this.getRect(0, 0), Z = Nl._colorManager.convert(this.color);
    return {
      annotationType: dl.HIGHLIGHT,
      color: Z,
      opacity: t(this, vF),
      thickness: t(this, Xd),
      quadPoints: i(this, $, la).call(this),
      outlines: i(this, $, Ua).call(this, d),
      pageIndex: this.pageIndex,
      rect: d,
      rotation: i(this, $, jQ).call(this),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
bQ = new WeakMap(), BV = new WeakMap(), OZ = new WeakMap(), KF = new WeakMap(), hQ = new WeakMap(), gU = new WeakMap(), eV = new WeakMap(), uV = new WeakMap(), HF = new WeakMap(), cd = new WeakMap(), NU = new WeakMap(), DU = new WeakMap(), Qc = new WeakMap(), iQ = new WeakMap(), vF = new WeakMap(), El = new WeakMap(), mQ = new WeakMap(), Xd = new WeakMap(), pV = new WeakMap(), $ = new WeakSet(), IR = function() {
  const U = new yR(t(this, OZ), 1e-3);
  h(this, cd, U.getOutlines()), {
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  } = t(this, cd).box;
  const d = new yR(t(this, OZ), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  h(this, gU, d.getOutlines());
  const {
    lastPoint: Z
  } = t(this, gU).box;
  h(this, iQ, [(Z[0] - this.x) / this.width, (Z[1] - this.y) / this.height]);
}, ER = function({
  highlightOutlines: U,
  highlightId: d,
  clipPathId: Z
}) {
  var n, s;
  if (h(this, cd, U), h(this, gU, U.getNewOutline(t(this, Xd) / 2 + 1.5, 25e-4)), d >= 0)
    h(this, NU, d), h(this, KF, Z), this.parent.drawLayer.finalizeLine(d, U), h(this, El, this.parent.drawLayer.highlightOutline(t(this, gU)));
  else if (this.parent) {
    const a = this.parent.viewport.rotation;
    this.parent.drawLayer.updateLine(t(this, NU), U), this.parent.drawLayer.updateBox(t(this, NU), i(n = Vl, PU, m0).call(n, t(this, cd).box, (a - this.rotation + 360) % 360)), this.parent.drawLayer.updateLine(t(this, El), t(this, gU)), this.parent.drawLayer.updateBox(t(this, El), i(s = Vl, PU, m0).call(s, t(this, gU).box, a));
  }
  const {
    x: Q,
    y: V,
    width: c,
    height: R
  } = U.box;
  switch (this.rotation) {
    case 0:
      this.x = Q, this.y = V, this.width = c, this.height = R;
      break;
    case 90: {
      const [a, b] = this.parentDimensions;
      this.x = V, this.y = 1 - Q, this.width = c * b / a, this.height = R * a / b;
      break;
    }
    case 180:
      this.x = 1 - Q, this.y = 1 - V, this.width = c, this.height = R;
      break;
    case 270: {
      const [a, b] = this.parentDimensions;
      this.x = 1 - V, this.y = Q, this.width = c * b / a, this.height = R * a / b;
      break;
    }
  }
  const {
    lastPoint: N
  } = t(this, gU).box;
  h(this, iQ, [(N[0] - Q) / c, (N[1] - V) / R]);
}, As = function(U) {
  const d = (F) => {
    var Q, V;
    this.color = F, (Q = this.parent) == null || Q.drawLayer.changeColor(t(this, NU), F), (V = t(this, hQ)) == null || V.updateColor(F);
  }, Z = this.color;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(U)
  }, !0);
}, _s = function(U) {
  const d = t(this, Xd), Z = (F) => {
    h(this, Xd, F), i(this, $, qs).call(this, F);
  };
  this.addCommands({
    cmd: Z.bind(this, U),
    undo: Z.bind(this, d),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: U
  }, !0);
}, qs = function(U) {
  if (!t(this, DU))
    return;
  i(this, $, ER).call(this, {
    highlightOutlines: t(this, cd).getNewOutline(U / 2)
  }), this.fixAndSetPosition();
  const [d, Z] = this.parentDimensions;
  this.setDims(this.width * d, this.height * Z);
}, CR = function() {
  t(this, NU) === null || !this.parent || (this.parent.drawLayer.remove(t(this, NU)), h(this, NU, null), this.parent.drawLayer.remove(t(this, El)), h(this, El, null));
}, xQ = function(U = this.parent) {
  t(this, NU) === null && ({
    id: XU(this, NU)._,
    clipPathId: XU(this, KF)._
  } = U.drawLayer.highlight(t(this, cd), this.color, t(this, vF)), h(this, El, U.drawLayer.highlightOutline(t(this, gU))), t(this, HF) && (t(this, HF).style.clipPath = t(this, KF)));
}, PU = new WeakSet(), m0 = function({
  x: U,
  y: d,
  width: Z,
  height: F
}, Q) {
  switch (Q) {
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
}, $s = function(U) {
  Vl._keyboardManager.exec(this, U);
}, bW = function(U) {
  if (!t(this, bQ))
    return;
  const d = window.getSelection();
  U ? d.setPosition(t(this, bQ), t(this, BV)) : d.setPosition(t(this, eV), t(this, uV));
}, jQ = function() {
  return t(this, DU) ? this.rotation : 0;
}, la = function() {
  if (t(this, DU))
    return null;
  const [U, d] = this.pageDimensions, Z = t(this, OZ), F = new Float32Array(Z.length * 8);
  let Q = 0;
  for (const {
    x: V,
    y: c,
    width: R,
    height: N
  } of Z) {
    const n = V * U, s = (1 - c - N) * d;
    F[Q] = F[Q + 4] = n, F[Q + 1] = F[Q + 3] = s, F[Q + 2] = F[Q + 6] = n + R * U, F[Q + 5] = F[Q + 7] = s + N * d, Q += 8;
  }
  return F;
}, Ua = function(U) {
  return t(this, cd).serialize(U, i(this, $, jQ).call(this));
}, da = function(U, d) {
  this._freeHighlight.add(d) && U.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
}, Za = function(U, d) {
  this._freeHighlight.isEmpty() ? U.drawLayer.removeFreeHighlight(this._freeHighlightId) : U.createAndAddNewEditor(d, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, m(Vl, PU), f(Vl, "_defaultColor", null), f(Vl, "_defaultOpacity", 1), f(Vl, "_defaultThickness", 12), f(Vl, "_l10nPromise"), f(Vl, "_type", "highlight"), f(Vl, "_editorType", dl.HIGHLIGHT), f(Vl, "_freeHighlightId", -1), f(Vl, "_freeHighlight", null), f(Vl, "_freeHighlightClipId", "");
let DW = Vl;
var PF, fF, yV, oV, zV, AF, Yd, QZ, KU, _F, qF, tZ, $F, l0, rZ, k, Fa, Qa, ta, Va, xR, Wa, jR, ca, Ra, Na, na, sa, FF, OR, hW, iW, M0, rR, mW, MZ, aa, gR, ba, ha, KR, MW, OQ;
const Gl = class Gl extends Nl {
  constructor(U) {
    super({
      ...U,
      name: "inkEditor"
    });
    m(this, k);
    m(this, PF, 0);
    m(this, fF, 0);
    m(this, yV, this.canvasPointermove.bind(this));
    m(this, oV, this.canvasPointerleave.bind(this));
    m(this, zV, this.canvasPointerup.bind(this));
    m(this, AF, this.canvasPointerdown.bind(this));
    m(this, Yd, null);
    m(this, QZ, new Path2D());
    m(this, KU, !1);
    m(this, _F, !1);
    m(this, qF, !1);
    m(this, tZ, null);
    m(this, $F, 0);
    m(this, l0, 0);
    m(this, rZ, null);
    this.color = U.color || null, this.thickness = U.thickness || null, this.opacity = U.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
  }
  static initialize(U, d) {
    Nl.initialize(U, d);
  }
  static updateDefaultParams(U, d) {
    switch (U) {
      case H.INK_THICKNESS:
        Gl._defaultThickness = d;
        break;
      case H.INK_COLOR:
        Gl._defaultColor = d;
        break;
      case H.INK_OPACITY:
        Gl._defaultOpacity = d / 100;
        break;
    }
  }
  updateParams(U, d) {
    switch (U) {
      case H.INK_THICKNESS:
        i(this, k, Fa).call(this, d);
        break;
      case H.INK_COLOR:
        i(this, k, Qa).call(this, d);
        break;
      case H.INK_OPACITY:
        i(this, k, ta).call(this, d);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[H.INK_THICKNESS, Gl._defaultThickness], [H.INK_COLOR, Gl._defaultColor || Nl._defaultLineColor], [H.INK_OPACITY, Math.round(Gl._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[H.INK_THICKNESS, this.thickness || Gl._defaultThickness], [H.INK_COLOR, this.color || Gl._defaultColor || Nl._defaultLineColor], [H.INK_OPACITY, Math.round(100 * (this.opacity ?? Gl._defaultOpacity))]];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.canvas || (i(this, k, hW).call(this), i(this, k, iW).call(this)), this.isAttachedToDOM || (this.parent.add(this), i(this, k, M0).call(this)), i(this, k, OQ).call(this)));
  }
  remove() {
    var U;
    this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, t(this, Yd) && (clearTimeout(t(this, Yd)), h(this, Yd, null)), (U = t(this, tZ)) == null || U.disconnect(), h(this, tZ, null), super.remove());
  }
  setParent(U) {
    !this.parent && U ? this._uiManager.removeShouldRescale(this) : this.parent && U === null && this._uiManager.addShouldRescale(this), super.setParent(U);
  }
  onScaleChanging() {
    const [U, d] = this.parentDimensions, Z = this.width * U, F = this.height * d;
    this.setDimensions(Z, F);
  }
  enableEditMode() {
    t(this, KU) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", t(this, AF), {
      signal: this._uiManager._signal
    }));
  }
  disableEditMode() {
    !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", t(this, AF)));
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  commit() {
    t(this, KU) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), h(this, KU, !0), this.div.classList.add("disabled"), i(this, k, OQ).call(this, !0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
      preventScroll: !0
    }));
  }
  focusin(U) {
    this._focusEventsAllowed && (super.focusin(U), this.enableEditMode());
  }
  canvasPointerdown(U) {
    U.button !== 0 || !this.isInEditMode() || t(this, KU) || (this.setInForeground(), U.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
      preventScroll: !0
    }), i(this, k, Wa).call(this, U.offsetX, U.offsetY));
  }
  canvasPointermove(U) {
    U.preventDefault(), i(this, k, jR).call(this, U.offsetX, U.offsetY);
  }
  canvasPointerup(U) {
    U.preventDefault(), i(this, k, OR).call(this, U);
  }
  canvasPointerleave(U) {
    i(this, k, OR).call(this, U);
  }
  get isResizable() {
    return !this.isEmpty() && t(this, KU);
  }
  render() {
    if (this.div)
      return this.div;
    let U, d;
    this.width && (U = this.x, d = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [Z, F, Q, V] = i(this, k, Va).call(this);
    if (this.setAt(Z, F, 0, 0), this.setDims(Q, V), i(this, k, hW).call(this), this.width) {
      const [c, R] = this.parentDimensions;
      this.setAspectRatio(this.width * c, this.height * R), this.setAt(U * c, d * R, this.width * c, this.height * R), h(this, qF, !0), i(this, k, M0).call(this), this.setDims(this.width * c, this.height * R), i(this, k, FF).call(this), this.div.classList.add("disabled");
    } else
      this.div.classList.add("editing"), this.enableEditMode();
    return i(this, k, iW).call(this), this.div;
  }
  setDimensions(U, d) {
    const Z = Math.round(U), F = Math.round(d);
    if (t(this, $F) === Z && t(this, l0) === F)
      return;
    h(this, $F, Z), h(this, l0, F), this.canvas.style.visibility = "hidden";
    const [Q, V] = this.parentDimensions;
    this.width = U / Q, this.height = d / V, this.fixAndSetPosition(), t(this, KU) && i(this, k, rR).call(this, U, d), i(this, k, M0).call(this), i(this, k, FF).call(this), this.canvas.style.visibility = "visible", this.fixDims();
  }
  static deserialize(U, d, Z) {
    var G, J, T;
    if (U instanceof Ds)
      return null;
    const F = super.deserialize(U, d, Z);
    F.thickness = U.thickness, F.color = w.makeHexColor(...U.color), F.opacity = U.opacity;
    const [Q, V] = F.pageDimensions, c = F.width * Q, R = F.height * V, N = F.parentScale, n = U.thickness / 2;
    h(F, KU, !0), h(F, $F, Math.round(c)), h(F, l0, Math.round(R));
    const {
      paths: s,
      rect: a,
      rotation: b
    } = U;
    for (let {
      bezier: S
    } of s) {
      S = i(G = Gl, MZ, ba).call(G, S, a, b);
      const B = [];
      F.paths.push(B);
      let Y = N * (S[0] - n), X = N * (S[1] - n);
      for (let o = 2, y = S.length; o < y; o += 6) {
        const O = N * (S[o] - n), E = N * (S[o + 1] - n), ll = N * (S[o + 2] - n), z = N * (S[o + 3] - n), C = N * (S[o + 4] - n), v = N * (S[o + 5] - n);
        B.push([[Y, X], [O, E], [ll, z], [C, v]]), Y = C, X = v;
      }
      const e = i(this, MZ, aa).call(this, B);
      F.bezierPath2D.push(e);
    }
    const M = i(J = F, k, KR).call(J);
    return h(F, fF, Math.max(Nl.MIN_SIZE, M[2] - M[0])), h(F, PF, Math.max(Nl.MIN_SIZE, M[3] - M[1])), i(T = F, k, rR).call(T, c, R), F;
  }
  serialize() {
    if (this.isEmpty())
      return null;
    const U = this.getRect(0, 0), d = Nl._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: dl.INK,
      color: d,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: i(this, k, ha).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, U),
      pageIndex: this.pageIndex,
      rect: U,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
PF = new WeakMap(), fF = new WeakMap(), yV = new WeakMap(), oV = new WeakMap(), zV = new WeakMap(), AF = new WeakMap(), Yd = new WeakMap(), QZ = new WeakMap(), KU = new WeakMap(), _F = new WeakMap(), qF = new WeakMap(), tZ = new WeakMap(), $F = new WeakMap(), l0 = new WeakMap(), rZ = new WeakMap(), k = new WeakSet(), Fa = function(U) {
  const d = (F) => {
    this.thickness = F, i(this, k, OQ).call(this);
  }, Z = this.thickness;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Qa = function(U) {
  const d = (F) => {
    this.color = F, i(this, k, FF).call(this);
  }, Z = this.color;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, ta = function(U) {
  const d = (F) => {
    this.opacity = F, i(this, k, FF).call(this);
  };
  U /= 100;
  const Z = this.opacity;
  this.addCommands({
    cmd: d.bind(this, U),
    undo: d.bind(this, Z),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: H.INK_OPACITY,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Va = function() {
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
}, xR = function() {
  const {
    ctx: U,
    color: d,
    opacity: Z,
    thickness: F,
    parentScale: Q,
    scaleFactor: V
  } = this;
  U.lineWidth = F * Q / V, U.lineCap = "round", U.lineJoin = "round", U.miterLimit = 10, U.strokeStyle = `${d}${Uh(Z)}`;
}, Wa = function(U, d) {
  const Z = this._uiManager._signal;
  this.canvas.addEventListener("contextmenu", SU, {
    signal: Z
  }), this.canvas.addEventListener("pointerleave", t(this, oV), {
    signal: Z
  }), this.canvas.addEventListener("pointermove", t(this, yV), {
    signal: Z
  }), this.canvas.addEventListener("pointerup", t(this, zV), {
    signal: Z
  }), this.canvas.removeEventListener("pointerdown", t(this, AF)), this.isEditing = !0, t(this, qF) || (h(this, qF, !0), i(this, k, M0).call(this), this.thickness || (this.thickness = Gl._defaultThickness), this.color || (this.color = Gl._defaultColor || Nl._defaultLineColor), this.opacity ?? (this.opacity = Gl._defaultOpacity)), this.currentPath.push([U, d]), h(this, _F, !1), i(this, k, xR).call(this), h(this, rZ, () => {
    i(this, k, Na).call(this), t(this, rZ) && window.requestAnimationFrame(t(this, rZ));
  }), window.requestAnimationFrame(t(this, rZ));
}, jR = function(U, d) {
  const [Z, F] = this.currentPath.at(-1);
  if (this.currentPath.length > 1 && U === Z && d === F)
    return;
  const Q = this.currentPath;
  let V = t(this, QZ);
  if (Q.push([U, d]), h(this, _F, !0), Q.length <= 2) {
    V.moveTo(...Q[0]), V.lineTo(U, d);
    return;
  }
  Q.length === 3 && (h(this, QZ, V = new Path2D()), V.moveTo(...Q[0])), i(this, k, na).call(this, V, ...Q.at(-3), ...Q.at(-2), U, d);
}, ca = function() {
  if (this.currentPath.length === 0)
    return;
  const U = this.currentPath.at(-1);
  t(this, QZ).lineTo(...U);
}, Ra = function(U, d) {
  h(this, rZ, null), U = Math.min(Math.max(U, 0), this.canvas.width), d = Math.min(Math.max(d, 0), this.canvas.height), i(this, k, jR).call(this, U, d), i(this, k, ca).call(this);
  let Z;
  if (this.currentPath.length !== 1)
    Z = i(this, k, sa).call(this);
  else {
    const R = [U, d];
    Z = [[R, R.slice(), R.slice(), R]];
  }
  const F = t(this, QZ), Q = this.currentPath;
  this.currentPath = [], h(this, QZ, new Path2D());
  const V = () => {
    this.allRawPaths.push(Q), this.paths.push(Z), this.bezierPath2D.push(F), this._uiManager.rebuild(this);
  }, c = () => {
    this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (i(this, k, hW).call(this), i(this, k, iW).call(this)), i(this, k, OQ).call(this));
  };
  this.addCommands({
    cmd: V,
    undo: c,
    mustExec: !0
  });
}, Na = function() {
  if (!t(this, _F))
    return;
  h(this, _F, !1);
  const U = Math.ceil(this.thickness * this.parentScale), d = this.currentPath.slice(-3), Z = d.map((V) => V[0]), F = d.map((V) => V[1]);
  Math.min(...Z) - U, Math.max(...Z) + U, Math.min(...F) - U, Math.max(...F) + U;
  const {
    ctx: Q
  } = this;
  Q.save(), Q.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (const V of this.bezierPath2D)
    Q.stroke(V);
  Q.stroke(t(this, QZ)), Q.restore();
}, na = function(U, d, Z, F, Q, V, c) {
  const R = (d + F) / 2, N = (Z + Q) / 2, n = (F + V) / 2, s = (Q + c) / 2;
  U.bezierCurveTo(R + 2 * (F - R) / 3, N + 2 * (Q - N) / 3, n + 2 * (F - n) / 3, s + 2 * (Q - s) / 3, n, s);
}, sa = function() {
  const U = this.currentPath;
  if (U.length <= 2)
    return [[U[0], U[0], U.at(-1), U.at(-1)]];
  const d = [];
  let Z, [F, Q] = U[0];
  for (Z = 1; Z < U.length - 2; Z++) {
    const [a, b] = U[Z], [M, G] = U[Z + 1], J = (a + M) / 2, T = (b + G) / 2, S = [F + 2 * (a - F) / 3, Q + 2 * (b - Q) / 3], B = [J + 2 * (a - J) / 3, T + 2 * (b - T) / 3];
    d.push([[F, Q], S, B, [J, T]]), [F, Q] = [J, T];
  }
  const [V, c] = U[Z], [R, N] = U[Z + 1], n = [F + 2 * (V - F) / 3, Q + 2 * (c - Q) / 3], s = [R + 2 * (V - R) / 3, N + 2 * (c - N) / 3];
  return d.push([[F, Q], n, s, [R, N]]), d;
}, FF = function() {
  if (this.isEmpty()) {
    i(this, k, mW).call(this);
    return;
  }
  i(this, k, xR).call(this);
  const {
    canvas: U,
    ctx: d
  } = this;
  d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, U.width, U.height), i(this, k, mW).call(this);
  for (const Z of this.bezierPath2D)
    d.stroke(Z);
}, OR = function(U) {
  this.canvas.removeEventListener("pointerleave", t(this, oV)), this.canvas.removeEventListener("pointermove", t(this, yV)), this.canvas.removeEventListener("pointerup", t(this, zV)), this.canvas.addEventListener("pointerdown", t(this, AF), {
    signal: this._uiManager._signal
  }), t(this, Yd) && clearTimeout(t(this, Yd)), h(this, Yd, setTimeout(() => {
    h(this, Yd, null), this.canvas.removeEventListener("contextmenu", SU);
  }, 10)), i(this, k, Ra).call(this, U.offsetX, U.offsetY), this.addToAnnotationStorage(), this.setInBackground();
}, hW = function() {
  this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
}, iW = function() {
  h(this, tZ, new ResizeObserver((U) => {
    const d = U[0].contentRect;
    d.width && d.height && this.setDimensions(d.width, d.height);
  })), t(this, tZ).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var U;
    (U = t(this, tZ)) == null || U.disconnect(), h(this, tZ, null);
  }, {
    once: !0
  });
}, M0 = function() {
  if (!t(this, qF))
    return;
  const [U, d] = this.parentDimensions;
  this.canvas.width = Math.ceil(this.width * U), this.canvas.height = Math.ceil(this.height * d), i(this, k, mW).call(this);
}, rR = function(U, d) {
  const Z = i(this, k, MW).call(this), F = (U - Z) / t(this, fF), Q = (d - Z) / t(this, PF);
  this.scaleFactor = Math.min(F, Q);
}, mW = function() {
  const U = i(this, k, MW).call(this) / 2;
  this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + U, this.translationY * this.scaleFactor + U);
}, MZ = new WeakSet(), aa = function(U) {
  const d = new Path2D();
  for (let Z = 0, F = U.length; Z < F; Z++) {
    const [Q, V, c, R] = U[Z];
    Z === 0 && d.moveTo(...Q), d.bezierCurveTo(V[0], V[1], c[0], c[1], R[0], R[1]);
  }
  return d;
}, gR = function(U, d, Z) {
  const [F, Q, V, c] = d;
  switch (Z) {
    case 0:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] += F, U[R + 1] = c - U[R + 1];
      break;
    case 90:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const n = U[R];
        U[R] = U[R + 1] + F, U[R + 1] = n + Q;
      }
      break;
    case 180:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] = V - U[R], U[R + 1] += Q;
      break;
    case 270:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const n = U[R];
        U[R] = V - U[R + 1], U[R + 1] = c - n;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, ba = function(U, d, Z) {
  const [F, Q, V, c] = d;
  switch (Z) {
    case 0:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] -= F, U[R + 1] = c - U[R + 1];
      break;
    case 90:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const n = U[R];
        U[R] = U[R + 1] - Q, U[R + 1] = n - F;
      }
      break;
    case 180:
      for (let R = 0, N = U.length; R < N; R += 2)
        U[R] = V - U[R], U[R + 1] -= Q;
      break;
    case 270:
      for (let R = 0, N = U.length; R < N; R += 2) {
        const n = U[R];
        U[R] = c - U[R + 1], U[R + 1] = V - n;
      }
      break;
    default:
      throw new Error("Invalid rotation");
  }
  return U;
}, ha = function(U, d, Z, F) {
  var N, n;
  const Q = [], V = this.thickness / 2, c = U * d + V, R = U * Z + V;
  for (const s of this.paths) {
    const a = [], b = [];
    for (let M = 0, G = s.length; M < G; M++) {
      const [J, T, S, B] = s[M];
      if (J[0] === B[0] && J[1] === B[1] && G === 1) {
        const z = U * J[0] + c, C = U * J[1] + R;
        a.push(z, C), b.push(z, C);
        break;
      }
      const Y = U * J[0] + c, X = U * J[1] + R, e = U * T[0] + c, o = U * T[1] + R, y = U * S[0] + c, O = U * S[1] + R, E = U * B[0] + c, ll = U * B[1] + R;
      M === 0 && (a.push(Y, X), b.push(Y, X)), a.push(e, o, y, O, E, ll), b.push(e, o), M === G - 1 && b.push(E, ll);
    }
    Q.push({
      bezier: i(N = Gl, MZ, gR).call(N, a, F, this.rotation),
      points: i(n = Gl, MZ, gR).call(n, b, F, this.rotation)
    });
  }
  return Q;
}, KR = function() {
  let U = 1 / 0, d = -1 / 0, Z = 1 / 0, F = -1 / 0;
  for (const Q of this.paths)
    for (const [V, c, R, N] of Q) {
      const n = w.bezierBoundingBox(...V, ...c, ...R, ...N);
      U = Math.min(U, n[0]), Z = Math.min(Z, n[1]), d = Math.max(d, n[2]), F = Math.max(F, n[3]);
    }
  return [U, Z, d, F];
}, MW = function() {
  return t(this, KU) ? Math.ceil(this.thickness * this.parentScale) : 0;
}, OQ = function(U = !1) {
  if (this.isEmpty())
    return;
  if (!t(this, KU)) {
    i(this, k, FF).call(this);
    return;
  }
  const d = i(this, k, KR).call(this), Z = i(this, k, MW).call(this);
  h(this, fF, Math.max(Nl.MIN_SIZE, d[2] - d[0])), h(this, PF, Math.max(Nl.MIN_SIZE, d[3] - d[1]));
  const F = Math.ceil(Z + t(this, fF) * this.scaleFactor), Q = Math.ceil(Z + t(this, PF) * this.scaleFactor), [V, c] = this.parentDimensions;
  this.width = F / V, this.height = Q / c, this.setAspectRatio(F, Q);
  const R = this.translationX, N = this.translationY;
  this.translationX = -d[0], this.translationY = -d[1], i(this, k, M0).call(this), i(this, k, FF).call(this), h(this, $F, F), h(this, l0, Q), this.setDims(F, Q);
  const n = U ? Z / this.scaleFactor / 2 : 0;
  this.translate(R - this.translationX - n, N - this.translationY - n);
}, m(Gl, MZ), f(Gl, "_defaultColor", null), f(Gl, "_defaultOpacity", 1), f(Gl, "_defaultThickness", 1), f(Gl, "_type", "ink"), f(Gl, "_editorType", dl.INK);
let wR = Gl;
var Al, _l, gZ, VZ, KZ, MQ, Bd, WZ, ed, Rd, LV, tl, rQ, gQ, JW, vR, ia, ma, PR, GW, Ma;
const Ut = class Ut extends Nl {
  constructor(U) {
    super({
      ...U,
      name: "stampEditor"
    });
    m(this, tl);
    m(this, Al, null);
    m(this, _l, null);
    m(this, gZ, null);
    m(this, VZ, null);
    m(this, KZ, null);
    m(this, MQ, "");
    m(this, Bd, null);
    m(this, WZ, null);
    m(this, ed, null);
    m(this, Rd, !1);
    m(this, LV, !1);
    h(this, VZ, U.bitmapUrl), h(this, KZ, U.bitmapFile);
  }
  static initialize(U, d) {
    Nl.initialize(U, d);
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
    d.pasteEditor(dl.STAMP, {
      bitmapFile: U.getAsFile()
    });
  }
  remove() {
    var U, d;
    t(this, _l) && (h(this, Al, null), this._uiManager.imageManager.deleteId(t(this, _l)), (U = t(this, Bd)) == null || U.remove(), h(this, Bd, null), (d = t(this, WZ)) == null || d.disconnect(), h(this, WZ, null), t(this, ed) && (clearTimeout(t(this, ed)), h(this, ed, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      t(this, _l) && i(this, tl, JW).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (t(this, _l) && t(this, Bd) === null && i(this, tl, JW).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded() {
    this._isDraggable = !0, this.div.focus();
  }
  isEmpty() {
    return !(t(this, gZ) || t(this, Al) || t(this, VZ) || t(this, KZ) || t(this, _l));
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let U, d;
    if (this.width && (U = this.x, d = this.y), super.render(), this.div.hidden = !0, this.addAltTextButton(), t(this, Al) ? i(this, tl, vR).call(this) : i(this, tl, JW).call(this), this.width) {
      const [Z, F] = this.parentDimensions;
      this.setAt(U * Z, d * F, this.width * Z, this.height * F);
    }
    return this.div;
  }
  getImageForAltText() {
    return t(this, Bd);
  }
  static deserialize(U, d, Z) {
    if (U instanceof Is)
      return null;
    const F = super.deserialize(U, d, Z), {
      rect: Q,
      bitmapUrl: V,
      bitmapId: c,
      isSvg: R,
      accessibilityData: N
    } = U;
    c && Z.imageManager.isValidId(c) ? h(F, _l, c) : h(F, VZ, V), h(F, Rd, R);
    const [n, s] = F.pageDimensions;
    return F.width = (Q[2] - Q[0]) / n, F.height = (Q[3] - Q[1]) / s, N && (F.altTextData = N), F;
  }
  serialize(U = !1, d = null) {
    if (this.isEmpty())
      return null;
    const Z = {
      annotationType: dl.STAMP,
      bitmapId: t(this, _l),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: t(this, Rd),
      structTreeParentId: this._structTreeParentId
    };
    if (U)
      return Z.bitmapUrl = i(this, tl, GW).call(this, !0), Z.accessibilityData = this.altTextData, Z;
    const {
      decorative: F,
      altText: Q
    } = this.altTextData;
    if (!F && Q && (Z.accessibilityData = {
      type: "Figure",
      alt: Q
    }), d === null)
      return Z;
    d.stamps || (d.stamps = /* @__PURE__ */ new Map());
    const V = t(this, Rd) ? (Z.rect[2] - Z.rect[0]) * (Z.rect[3] - Z.rect[1]) : null;
    if (!d.stamps.has(t(this, _l)))
      d.stamps.set(t(this, _l), {
        area: V,
        serialized: Z
      }), Z.bitmap = i(this, tl, GW).call(this, !1);
    else if (t(this, Rd)) {
      const c = d.stamps.get(t(this, _l));
      V > c.area && (c.area = V, c.serialized.bitmap.close(), c.serialized.bitmap = i(this, tl, GW).call(this, !1));
    }
    return Z;
  }
};
Al = new WeakMap(), _l = new WeakMap(), gZ = new WeakMap(), VZ = new WeakMap(), KZ = new WeakMap(), MQ = new WeakMap(), Bd = new WeakMap(), WZ = new WeakMap(), ed = new WeakMap(), Rd = new WeakMap(), LV = new WeakMap(), tl = new WeakSet(), rQ = function(U, d = !1) {
  if (!U) {
    this.remove();
    return;
  }
  h(this, Al, U.bitmap), d || (h(this, _l, U.id), h(this, Rd, U.isSvg)), U.file && h(this, MQ, U.file.name), i(this, tl, vR).call(this);
}, gQ = function() {
  h(this, gZ, null), this._uiManager.enableWaiting(!1), t(this, Bd) && this.div.focus();
}, JW = function() {
  if (t(this, _l)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(t(this, _l)).then((Z) => i(this, tl, rQ).call(this, Z, !0)).finally(() => i(this, tl, gQ).call(this));
    return;
  }
  if (t(this, VZ)) {
    const Z = t(this, VZ);
    h(this, VZ, null), this._uiManager.enableWaiting(!0), h(this, gZ, this._uiManager.imageManager.getFromUrl(Z).then((F) => i(this, tl, rQ).call(this, F)).finally(() => i(this, tl, gQ).call(this)));
    return;
  }
  if (t(this, KZ)) {
    const Z = t(this, KZ);
    h(this, KZ, null), this._uiManager.enableWaiting(!0), h(this, gZ, this._uiManager.imageManager.getFromFile(Z).then((F) => i(this, tl, rQ).call(this, F)).finally(() => i(this, tl, gQ).call(this)));
    return;
  }
  const U = document.createElement("input");
  U.type = "file", U.accept = Ut.supportedTypesStr;
  const d = this._uiManager._signal;
  h(this, gZ, new Promise((Z) => {
    U.addEventListener("change", async () => {
      if (!U.files || U.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const F = await this._uiManager.imageManager.getFromFile(U.files[0]);
        i(this, tl, rQ).call(this, F);
      }
      Z();
    }, {
      signal: d
    }), U.addEventListener("cancel", () => {
      this.remove(), Z();
    }, {
      signal: d
    });
  }).finally(() => i(this, tl, gQ).call(this))), U.click();
}, vR = function() {
  const {
    div: U
  } = this;
  let {
    width: d,
    height: Z
  } = t(this, Al);
  const [F, Q] = this.pageDimensions, V = 0.75;
  if (this.width)
    d = this.width * F, Z = this.height * Q;
  else if (d > V * F || Z > V * Q) {
    const n = Math.min(V * F / d, V * Q / Z);
    d *= n, Z *= n;
  }
  const [c, R] = this.parentDimensions;
  this.setDims(d * c / F, Z * R / Q), this._uiManager.enableWaiting(!1);
  const N = h(this, Bd, document.createElement("canvas"));
  U.append(N), U.hidden = !1, i(this, tl, PR).call(this, d, Z), i(this, tl, Ma).call(this), t(this, LV) || (this.parent.addUndoableEditor(this), h(this, LV, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), t(this, MQ) && N.setAttribute("aria-label", t(this, MQ));
}, ia = function(U, d) {
  var V;
  const [Z, F] = this.parentDimensions;
  this.width = U / Z, this.height = d / F, this.setDims(U, d), (V = this._initialOptions) != null && V.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, t(this, ed) !== null && clearTimeout(t(this, ed)), h(this, ed, setTimeout(() => {
    h(this, ed, null), i(this, tl, PR).call(this, U, d);
  }, 200));
}, ma = function(U, d) {
  const {
    width: Z,
    height: F
  } = t(this, Al);
  let Q = Z, V = F, c = t(this, Al);
  for (; Q > 2 * U || V > 2 * d; ) {
    const R = Q, N = V;
    Q > 2 * U && (Q = Q >= 16384 ? Math.floor(Q / 2) - 1 : Math.ceil(Q / 2)), V > 2 * d && (V = V >= 16384 ? Math.floor(V / 2) - 1 : Math.ceil(V / 2));
    const n = new OffscreenCanvas(Q, V);
    n.getContext("2d").drawImage(c, 0, 0, R, N, 0, 0, Q, V), c = n.transferToImageBitmap();
  }
  return c;
}, PR = function(U, d) {
  U = Math.ceil(U), d = Math.ceil(d);
  const Z = t(this, Bd);
  if (!Z || Z.width === U && Z.height === d)
    return;
  Z.width = U, Z.height = d;
  const F = t(this, Rd) ? t(this, Al) : i(this, tl, ma).call(this, U, d);
  if (this._uiManager.hasMLManager && !this.hasAltText()) {
    const c = new OffscreenCanvas(U, d).getContext("2d");
    c.drawImage(F, 0, 0, F.width, F.height, 0, 0, U, d), this._uiManager.mlGuess({
      service: "image-to-text",
      request: {
        data: c.getImageData(0, 0, U, d).data,
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
  const Q = Z.getContext("2d");
  Q.filter = this._uiManager.hcmFilter, Q.drawImage(F, 0, 0, F.width, F.height, 0, 0, U, d);
}, GW = function(U) {
  if (U) {
    if (t(this, Rd)) {
      const F = this._uiManager.imageManager.getSvgUrl(t(this, _l));
      if (F)
        return F;
    }
    const d = document.createElement("canvas");
    return {
      width: d.width,
      height: d.height
    } = t(this, Al), d.getContext("2d").drawImage(t(this, Al), 0, 0), d.toDataURL();
  }
  if (t(this, Rd)) {
    const [d, Z] = this.pageDimensions, F = Math.round(this.width * d * AZ.PDF_TO_CSS_UNITS), Q = Math.round(this.height * Z * AZ.PDF_TO_CSS_UNITS), V = new OffscreenCanvas(F, Q);
    return V.getContext("2d").drawImage(t(this, Al), 0, 0, t(this, Al).width, t(this, Al).height, 0, 0, F, Q), V.transferToImageBitmap();
  }
  return structuredClone(t(this, Al));
}, Ma = function() {
  this._uiManager._signal && (h(this, WZ, new ResizeObserver((U) => {
    const d = U[0].contentRect;
    d.width && d.height && i(this, tl, ia).call(this, d.width, d.height);
  })), t(this, WZ).observe(this.div), this._uiManager._signal.addEventListener("abort", () => {
    var U;
    (U = t(this, WZ)) == null || U.disconnect(), h(this, WZ, null);
  }, {
    once: !0
  }));
}, f(Ut, "_type", "stamp"), f(Ut, "_editorType", dl.STAMP);
let HR = Ut;
var U0, JQ, ud, d0, cZ, RZ, NZ, IU, HZ, GQ, TQ, nU, j, vZ, lU, Ja, AR, _R, qR, TW;
const AU = class AU {
  constructor({
    uiManager: l,
    pageIndex: U,
    div: d,
    accessibilityManager: Z,
    annotationLayer: F,
    drawLayer: Q,
    textLayer: V,
    viewport: c,
    l10n: R
  }) {
    m(this, lU);
    m(this, U0);
    m(this, JQ, !1);
    m(this, ud, null);
    m(this, d0, null);
    m(this, cZ, null);
    m(this, RZ, null);
    m(this, NZ, null);
    m(this, IU, /* @__PURE__ */ new Map());
    m(this, HZ, !1);
    m(this, GQ, !1);
    m(this, TQ, !1);
    m(this, nU, null);
    m(this, j);
    const N = [...t(AU, vZ).values()];
    if (!AU._initialized) {
      AU._initialized = !0;
      for (const n of N)
        n.initialize(R, l);
    }
    l.registerEditorTypes(N), h(this, j, l), this.pageIndex = U, this.div = d, h(this, U0, Z), h(this, ud, F), this.viewport = c, h(this, nU, V), this.drawLayer = Q, t(this, j).addLayer(this);
  }
  get isEmpty() {
    return t(this, IU).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && t(this, j).getMode() === dl.NONE;
  }
  updateToolbar(l) {
    t(this, j).updateToolbar(l);
  }
  updateMode(l = t(this, j).getMode()) {
    switch (i(this, lU, TW).call(this), l) {
      case dl.NONE:
        this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case dl.INK:
        this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
        break;
      case dl.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: U
    } = this.div;
    for (const d of t(AU, vZ).values())
      U.toggle(`${d._type}Editing`, l === d._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(l) {
    var U;
    return l === ((U = t(this, nU)) == null ? void 0 : U.div);
  }
  addInkEditorIfNeeded(l) {
    if (t(this, j).getMode() !== dl.INK)
      return;
    if (!l) {
      for (const d of t(this, IU).values())
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
    t(this, j).setEditingState(l);
  }
  addCommands(l) {
    t(this, j).addCommands(l);
  }
  togglePointerEvents(l = !1) {
    this.div.classList.toggle("disabled", !l);
  }
  toggleAnnotationLayerPointerEvents(l = !1) {
    var U;
    (U = t(this, ud)) == null || U.div.classList.toggle("disabled", !l);
  }
  enable() {
    this.div.tabIndex = 0, this.togglePointerEvents(!0);
    const l = /* @__PURE__ */ new Set();
    for (const d of t(this, IU).values())
      d.enableEditing(), d.show(!0), d.annotationElementId && (t(this, j).removeChangedExistingAnnotation(d), l.add(d.annotationElementId));
    if (!t(this, ud))
      return;
    const U = t(this, ud).getEditableAnnotations();
    for (const d of U) {
      if (d.hide(), t(this, j).isDeletedAnnotationElement(d.data.id) || l.has(d.data.id))
        continue;
      const Z = this.deserialize(d);
      Z && (this.addOrRebuild(Z), Z.enableEditing());
    }
  }
  disable() {
    var Z;
    h(this, TQ, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1);
    const l = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
    for (const F of t(this, IU).values())
      if (F.disableEditing(), !!F.annotationElementId) {
        if (F.serialize() !== null) {
          l.set(F.annotationElementId, F);
          continue;
        } else
          U.set(F.annotationElementId, F);
        (Z = this.getEditableAnnotation(F.annotationElementId)) == null || Z.show(), F.remove();
      }
    if (t(this, ud)) {
      const F = t(this, ud).getEditableAnnotations();
      for (const Q of F) {
        const {
          id: V
        } = Q.data;
        if (t(this, j).isDeletedAnnotationElement(V))
          continue;
        let c = U.get(V);
        if (c) {
          c.resetAnnotationElement(Q), c.show(!1), Q.show();
          continue;
        }
        c = l.get(V), c && (t(this, j).addChangedExistingAnnotation(c), c.renderAnnotationElement(Q), c.show(!1)), Q.show();
      }
    }
    i(this, lU, TW).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: d
    } = this.div;
    for (const F of t(AU, vZ).values())
      d.remove(`${F._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), h(this, TQ, !1);
  }
  getEditableAnnotation(l) {
    var U;
    return ((U = t(this, ud)) == null ? void 0 : U.getEditableAnnotation(l)) || null;
  }
  setActiveEditor(l) {
    t(this, j).getActive() !== l && t(this, j).setActiveEditor(l);
  }
  enableTextSelection() {
    var l;
    this.div.tabIndex = -1, (l = t(this, nU)) != null && l.div && !t(this, RZ) && (h(this, RZ, i(this, lU, Ja).bind(this)), t(this, nU).div.addEventListener("pointerdown", t(this, RZ), {
      signal: t(this, j)._signal
    }), t(this, nU).div.classList.add("highlighting"));
  }
  disableTextSelection() {
    var l;
    this.div.tabIndex = 0, (l = t(this, nU)) != null && l.div && t(this, RZ) && (t(this, nU).div.removeEventListener("pointerdown", t(this, RZ)), h(this, RZ, null), t(this, nU).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (t(this, cZ))
      return;
    const l = t(this, j)._signal;
    h(this, cZ, this.pointerdown.bind(this)), h(this, d0, this.pointerup.bind(this)), this.div.addEventListener("pointerdown", t(this, cZ), {
      signal: l
    }), this.div.addEventListener("pointerup", t(this, d0), {
      signal: l
    });
  }
  disableClick() {
    t(this, cZ) && (this.div.removeEventListener("pointerdown", t(this, cZ)), this.div.removeEventListener("pointerup", t(this, d0)), h(this, cZ, null), h(this, d0, null));
  }
  attach(l) {
    t(this, IU).set(l.id, l);
    const {
      annotationElementId: U
    } = l;
    U && t(this, j).isDeletedAnnotationElement(U) && t(this, j).removeDeletedAnnotationElement(l);
  }
  detach(l) {
    var U;
    t(this, IU).delete(l.id), (U = t(this, U0)) == null || U.removePointerInTextLayer(l.contentDiv), !t(this, TQ) && l.annotationElementId && t(this, j).addDeletedAnnotationElement(l);
  }
  remove(l) {
    this.detach(l), t(this, j).removeEditor(l), l.div.remove(), l.isAttachedToDOM = !1, t(this, GQ) || this.addInkEditorIfNeeded(!1);
  }
  changeParent(l) {
    var U;
    l.parent !== this && (l.parent && l.annotationElementId && (t(this, j).addDeletedAnnotationElement(l.annotationElementId), Nl.deleteAnnotationElement(l), l.annotationElementId = null), this.attach(l), (U = l.parent) == null || U.detach(l), l.setParent(this), l.div && l.isAttachedToDOM && (l.div.remove(), this.div.append(l.div)));
  }
  add(l) {
    if (!(l.parent === this && l.isAttachedToDOM)) {
      if (this.changeParent(l), t(this, j).addEditor(l), this.attach(l), !l.isAttachedToDOM) {
        const U = l.render();
        this.div.append(U), l.isAttachedToDOM = !0;
      }
      l.fixAndSetPosition(), l.onceAdded(), t(this, j).addToAnnotationStorage(l), l._reportTelemetry(l.telemetryInitialData);
    }
  }
  moveEditorInDOM(l) {
    var d;
    if (!l.isAttachedToDOM)
      return;
    const {
      activeElement: U
    } = document;
    l.div.contains(U) && !t(this, NZ) && (l._focusEventsAllowed = !1, h(this, NZ, setTimeout(() => {
      h(this, NZ, null), l.div.contains(document.activeElement) ? l._focusEventsAllowed = !0 : (l.div.addEventListener("focusin", () => {
        l._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: t(this, j)._signal
      }), U.focus());
    }, 0))), l._structTreeParentId = (d = t(this, U0)) == null ? void 0 : d.moveElementInDOM(this.div, l.div, l.contentDiv, !0);
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
    return t(this, j).getId();
  }
  get _signal() {
    return t(this, j)._signal;
  }
  canCreateNewEmptyEditor() {
    var l;
    return (l = t(this, lU, AR)) == null ? void 0 : l.canCreateNewEmptyEditor();
  }
  pasteEditor(l, U) {
    t(this, j).updateToolbar(l), t(this, j).updateMode(l);
    const {
      offsetX: d,
      offsetY: Z
    } = i(this, lU, qR).call(this), F = this.getNextId(), Q = i(this, lU, _R).call(this, {
      parent: this,
      id: F,
      x: d,
      y: Z,
      uiManager: t(this, j),
      isCentered: !0,
      ...U
    });
    Q && this.add(Q);
  }
  deserialize(l) {
    var U;
    return ((U = t(AU, vZ).get(l.annotationType ?? l.annotationEditorType)) == null ? void 0 : U.deserialize(l, this, t(this, j))) || null;
  }
  createAndAddNewEditor(l, U, d = {}) {
    const Z = this.getNextId(), F = i(this, lU, _R).call(this, {
      parent: this,
      id: Z,
      x: l.offsetX,
      y: l.offsetY,
      uiManager: t(this, j),
      isCentered: U,
      ...d
    });
    return F && this.add(F), F;
  }
  addNewEditor() {
    this.createAndAddNewEditor(i(this, lU, qR).call(this), !0);
  }
  setSelected(l) {
    t(this, j).setSelected(l);
  }
  toggleSelected(l) {
    t(this, j).toggleSelected(l);
  }
  isSelected(l) {
    return t(this, j).isSelected(l);
  }
  unselect(l) {
    t(this, j).unselect(l);
  }
  pointerup(l) {
    const {
      isMac: U
    } = GU.platform;
    if (!(l.button !== 0 || l.ctrlKey && U) && l.target === this.div && t(this, HZ)) {
      if (h(this, HZ, !1), !t(this, JQ)) {
        h(this, JQ, !0);
        return;
      }
      if (t(this, j).getMode() === dl.STAMP) {
        t(this, j).unselectAll();
        return;
      }
      this.createAndAddNewEditor(l, !1);
    }
  }
  pointerdown(l) {
    if (t(this, j).getMode() === dl.HIGHLIGHT && this.enableTextSelection(), t(this, HZ)) {
      h(this, HZ, !1);
      return;
    }
    const {
      isMac: U
    } = GU.platform;
    if (l.button !== 0 || l.ctrlKey && U || l.target !== this.div)
      return;
    h(this, HZ, !0);
    const d = t(this, j).getActive();
    h(this, JQ, !d || d.isEmpty());
  }
  findNewParent(l, U, d) {
    const Z = t(this, j).findParent(U, d);
    return Z === null || Z === this ? !1 : (Z.changeParent(l), !0);
  }
  destroy() {
    var l, U;
    ((l = t(this, j).getActive()) == null ? void 0 : l.parent) === this && (t(this, j).commitOrRemove(), t(this, j).setActiveEditor(null)), t(this, NZ) && (clearTimeout(t(this, NZ)), h(this, NZ, null));
    for (const d of t(this, IU).values())
      (U = t(this, U0)) == null || U.removePointerInTextLayer(d.contentDiv), d.setParent(null), d.isAttachedToDOM = !1, d.div.remove();
    this.div = null, t(this, IU).clear(), t(this, j).removeLayer(this);
  }
  render({
    viewport: l
  }) {
    this.viewport = l, F0(this.div, l);
    for (const U of t(this, j).getEditors(this.pageIndex))
      this.add(U), U.rebuild();
    this.updateMode();
  }
  update({
    viewport: l
  }) {
    t(this, j).commitOrRemove(), i(this, lU, TW).call(this);
    const U = this.viewport.rotation, d = l.rotation;
    if (this.viewport = l, F0(this.div, {
      rotation: d
    }), U !== d)
      for (const Z of t(this, IU).values())
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
    return t(this, j).viewParameters.realScale;
  }
};
U0 = new WeakMap(), JQ = new WeakMap(), ud = new WeakMap(), d0 = new WeakMap(), cZ = new WeakMap(), RZ = new WeakMap(), NZ = new WeakMap(), IU = new WeakMap(), HZ = new WeakMap(), GQ = new WeakMap(), TQ = new WeakMap(), nU = new WeakMap(), j = new WeakMap(), vZ = new WeakMap(), lU = new WeakSet(), Ja = function(l) {
  if (t(this, j).unselectAll(), l.target === t(this, nU).div) {
    const {
      isMac: U
    } = GU.platform;
    if (l.button !== 0 || l.ctrlKey && U)
      return;
    t(this, j).showAllEditors("highlight", !0, !0), t(this, nU).div.classList.add("free"), DW.startHighlighting(this, t(this, j).direction === "ltr", l), t(this, nU).div.addEventListener("pointerup", () => {
      t(this, nU).div.classList.remove("free");
    }, {
      once: !0,
      signal: t(this, j)._signal
    }), l.preventDefault();
  }
}, AR = function() {
  return t(AU, vZ).get(t(this, j).getMode());
}, _R = function(l) {
  const U = t(this, lU, AR);
  return U ? new U.prototype.constructor(l) : null;
}, qR = function() {
  const {
    x: l,
    y: U,
    width: d,
    height: Z
  } = this.div.getBoundingClientRect(), F = Math.max(0, l), Q = Math.max(0, U), V = Math.min(window.innerWidth, l + d), c = Math.min(window.innerHeight, U + Z), R = (F + V) / 2 - l, N = (Q + c) / 2 - U, [n, s] = this.viewport.rotation % 180 === 0 ? [R, N] : [N, R];
  return {
    offsetX: n,
    offsetY: s
  };
}, TW = function() {
  h(this, GQ, !0);
  for (const l of t(this, IU).values())
    l.isEmpty() && l.remove();
  h(this, GQ, !1);
}, f(AU, "_initialized", !1), m(AU, vZ, new Map([uR, wR, HR, DW].map((l) => [l._editorType, l])));
let fR = AU;
var pd, kV, Cl, PZ, DV, lN, W0, UN, Ga;
const Kl = class Kl {
  constructor({
    pageIndex: l
  }) {
    m(this, W0);
    m(this, pd, null);
    m(this, kV, 0);
    m(this, Cl, /* @__PURE__ */ new Map());
    m(this, PZ, /* @__PURE__ */ new Map());
    this.pageIndex = l;
  }
  setParent(l) {
    if (!t(this, pd)) {
      h(this, pd, l);
      return;
    }
    if (t(this, pd) !== l) {
      if (t(this, Cl).size > 0)
        for (const U of t(this, Cl).values())
          U.remove(), l.append(U);
      h(this, pd, l);
    }
  }
  static get _svgFactory() {
    return Fl(this, "_svgFactory", new mN());
  }
  highlight(l, U, d, Z = !1) {
    const F = XU(this, kV)._++, Q = i(this, W0, UN).call(this, l.box);
    Q.classList.add("highlight"), l.free && Q.classList.add("free");
    const V = Kl._svgFactory.createElement("defs");
    Q.append(V);
    const c = Kl._svgFactory.createElement("path");
    V.append(c);
    const R = `path_p${this.pageIndex}_${F}`;
    c.setAttribute("id", R), c.setAttribute("d", l.toSVGPath()), Z && t(this, PZ).set(F, c);
    const N = i(this, W0, Ga).call(this, V, R), n = Kl._svgFactory.createElement("use");
    return Q.append(n), Q.setAttribute("fill", U), Q.setAttribute("fill-opacity", d), n.setAttribute("href", `#${R}`), t(this, Cl).set(F, Q), {
      id: F,
      clipPathId: `url(#${N})`
    };
  }
  highlightOutline(l) {
    const U = XU(this, kV)._++, d = i(this, W0, UN).call(this, l.box);
    d.classList.add("highlightOutline");
    const Z = Kl._svgFactory.createElement("defs");
    d.append(Z);
    const F = Kl._svgFactory.createElement("path");
    Z.append(F);
    const Q = `path_p${this.pageIndex}_${U}`;
    F.setAttribute("id", Q), F.setAttribute("d", l.toSVGPath()), F.setAttribute("vector-effect", "non-scaling-stroke");
    let V;
    if (l.free) {
      d.classList.add("free");
      const N = Kl._svgFactory.createElement("mask");
      Z.append(N), V = `mask_p${this.pageIndex}_${U}`, N.setAttribute("id", V), N.setAttribute("maskUnits", "objectBoundingBox");
      const n = Kl._svgFactory.createElement("rect");
      N.append(n), n.setAttribute("width", "1"), n.setAttribute("height", "1"), n.setAttribute("fill", "white");
      const s = Kl._svgFactory.createElement("use");
      N.append(s), s.setAttribute("href", `#${Q}`), s.setAttribute("stroke", "none"), s.setAttribute("fill", "black"), s.setAttribute("fill-rule", "nonzero"), s.classList.add("mask");
    }
    const c = Kl._svgFactory.createElement("use");
    d.append(c), c.setAttribute("href", `#${Q}`), V && c.setAttribute("mask", `url(#${V})`);
    const R = c.cloneNode();
    return d.append(R), c.classList.add("mainOutline"), R.classList.add("secondaryOutline"), t(this, Cl).set(U, d), U;
  }
  finalizeLine(l, U) {
    const d = t(this, PZ).get(l);
    t(this, PZ).delete(l), this.updateBox(l, U.box), d.setAttribute("d", U.toSVGPath());
  }
  updateLine(l, U) {
    t(this, Cl).get(l).firstChild.firstChild.setAttribute("d", U.toSVGPath());
  }
  removeFreeHighlight(l) {
    this.remove(l), t(this, PZ).delete(l);
  }
  updatePath(l, U) {
    t(this, PZ).get(l).setAttribute("d", U.toSVGPath());
  }
  updateBox(l, U) {
    var d;
    i(d = Kl, DV, lN).call(d, t(this, Cl).get(l), U);
  }
  show(l, U) {
    t(this, Cl).get(l).classList.toggle("hidden", !U);
  }
  rotate(l, U) {
    t(this, Cl).get(l).setAttribute("data-main-rotation", U);
  }
  changeColor(l, U) {
    t(this, Cl).get(l).setAttribute("fill", U);
  }
  changeOpacity(l, U) {
    t(this, Cl).get(l).setAttribute("fill-opacity", U);
  }
  addClass(l, U) {
    t(this, Cl).get(l).classList.add(U);
  }
  removeClass(l, U) {
    t(this, Cl).get(l).classList.remove(U);
  }
  remove(l) {
    t(this, pd) !== null && (t(this, Cl).get(l).remove(), t(this, Cl).delete(l));
  }
  destroy() {
    h(this, pd, null);
    for (const l of t(this, Cl).values())
      l.remove();
    t(this, Cl).clear();
  }
};
pd = new WeakMap(), kV = new WeakMap(), Cl = new WeakMap(), PZ = new WeakMap(), DV = new WeakSet(), lN = function(l, {
  x: U = 0,
  y: d = 0,
  width: Z = 1,
  height: F = 1
} = {}) {
  const {
    style: Q
  } = l;
  Q.top = `${100 * d}%`, Q.left = `${100 * U}%`, Q.width = `${100 * Z}%`, Q.height = `${100 * F}%`;
}, W0 = new WeakSet(), UN = function(l) {
  var d;
  const U = Kl._svgFactory.create(1, 1, !0);
  return t(this, pd).append(U), U.setAttribute("aria-hidden", !0), i(d = Kl, DV, lN).call(d, U, l), U;
}, Ga = function(l, U) {
  const d = Kl._svgFactory.createElement("clipPath");
  l.append(d);
  const Z = `clip_${U}`;
  d.setAttribute("id", Z), d.setAttribute("clipPathUnits", "objectBoundingBox");
  const F = Kl._svgFactory.createElement("use");
  return d.append(F), F.setAttribute("href", `#${U}`), F.classList.add("clip"), Z;
}, m(Kl, DV);
let $R = Kl;
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
var zi = K.GlobalWorkerOptions;
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
var Li = K.TextLayer;
K.UnexpectedResponseException;
K.Util;
K.VerbosityLevel;
K.XfaLayer;
K.build;
K.createValidAbsoluteUrl;
K.fetchData;
var ki = K.getDocument;
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
zi.workerSrc = Di;
const Ii = async (W) => await ki(W).promise;
function Ei(W) {
  return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W;
}
var Ta = { exports: {} }, Sa = { exports: {} };
(function() {
  var W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = {
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
        for (var F = U[Z] << 16 | U[Z + 1] << 8 | U[Z + 2], Q = 0; Q < 4; Q++)
          Z * 8 + Q * 6 <= U.length * 8 ? d.push(W.charAt(F >>> 6 * (3 - Q) & 63)) : d.push("=");
      return d.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(U) {
      U = U.replace(/[^A-Z0-9+\/]/ig, "");
      for (var d = [], Z = 0, F = 0; Z < U.length; F = ++Z % 4)
        F != 0 && d.push((W.indexOf(U.charAt(Z - 1)) & Math.pow(2, -2 * F + 8) - 1) << F * 2 | W.indexOf(U.charAt(Z)) >>> 6 - F * 2);
      return d;
    }
  };
  Sa.exports = l;
})();
var Ci = Sa.exports, dN = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(W) {
      return dN.bin.stringToBytes(unescape(encodeURIComponent(W)));
    },
    // Convert a byte array to a string
    bytesToString: function(W) {
      return decodeURIComponent(escape(dN.bin.bytesToString(W)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(W) {
      for (var l = [], U = 0; U < W.length; U++)
        l.push(W.charCodeAt(U) & 255);
      return l;
    },
    // Convert a byte array to a string
    bytesToString: function(W) {
      for (var l = [], U = 0; U < W.length; U++)
        l.push(String.fromCharCode(W[U]));
      return l.join("");
    }
  }
}, Zn = dN;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var wi = function(W) {
  return W != null && (Xa(W) || xi(W) || !!W._isBuffer);
};
function Xa(W) {
  return !!W.constructor && typeof W.constructor.isBuffer == "function" && W.constructor.isBuffer(W);
}
function xi(W) {
  return typeof W.readFloatLE == "function" && typeof W.slice == "function" && Xa(W.slice(0, 0));
}
(function() {
  var W = Ci, l = Zn.utf8, U = wi, d = Zn.bin, Z = function(F, Q) {
    F.constructor == String ? Q && Q.encoding === "binary" ? F = d.stringToBytes(F) : F = l.stringToBytes(F) : U(F) ? F = Array.prototype.slice.call(F, 0) : !Array.isArray(F) && F.constructor !== Uint8Array && (F = F.toString());
    for (var V = W.bytesToWords(F), c = F.length * 8, R = 1732584193, N = -271733879, n = -1732584194, s = 271733878, a = 0; a < V.length; a++)
      V[a] = (V[a] << 8 | V[a] >>> 24) & 16711935 | (V[a] << 24 | V[a] >>> 8) & 4278255360;
    V[c >>> 5] |= 128 << c % 32, V[(c + 64 >>> 9 << 4) + 14] = c;
    for (var b = Z._ff, M = Z._gg, G = Z._hh, J = Z._ii, a = 0; a < V.length; a += 16) {
      var T = R, S = N, B = n, Y = s;
      R = b(R, N, n, s, V[a + 0], 7, -680876936), s = b(s, R, N, n, V[a + 1], 12, -389564586), n = b(n, s, R, N, V[a + 2], 17, 606105819), N = b(N, n, s, R, V[a + 3], 22, -1044525330), R = b(R, N, n, s, V[a + 4], 7, -176418897), s = b(s, R, N, n, V[a + 5], 12, 1200080426), n = b(n, s, R, N, V[a + 6], 17, -1473231341), N = b(N, n, s, R, V[a + 7], 22, -45705983), R = b(R, N, n, s, V[a + 8], 7, 1770035416), s = b(s, R, N, n, V[a + 9], 12, -1958414417), n = b(n, s, R, N, V[a + 10], 17, -42063), N = b(N, n, s, R, V[a + 11], 22, -1990404162), R = b(R, N, n, s, V[a + 12], 7, 1804603682), s = b(s, R, N, n, V[a + 13], 12, -40341101), n = b(n, s, R, N, V[a + 14], 17, -1502002290), N = b(N, n, s, R, V[a + 15], 22, 1236535329), R = M(R, N, n, s, V[a + 1], 5, -165796510), s = M(s, R, N, n, V[a + 6], 9, -1069501632), n = M(n, s, R, N, V[a + 11], 14, 643717713), N = M(N, n, s, R, V[a + 0], 20, -373897302), R = M(R, N, n, s, V[a + 5], 5, -701558691), s = M(s, R, N, n, V[a + 10], 9, 38016083), n = M(n, s, R, N, V[a + 15], 14, -660478335), N = M(N, n, s, R, V[a + 4], 20, -405537848), R = M(R, N, n, s, V[a + 9], 5, 568446438), s = M(s, R, N, n, V[a + 14], 9, -1019803690), n = M(n, s, R, N, V[a + 3], 14, -187363961), N = M(N, n, s, R, V[a + 8], 20, 1163531501), R = M(R, N, n, s, V[a + 13], 5, -1444681467), s = M(s, R, N, n, V[a + 2], 9, -51403784), n = M(n, s, R, N, V[a + 7], 14, 1735328473), N = M(N, n, s, R, V[a + 12], 20, -1926607734), R = G(R, N, n, s, V[a + 5], 4, -378558), s = G(s, R, N, n, V[a + 8], 11, -2022574463), n = G(n, s, R, N, V[a + 11], 16, 1839030562), N = G(N, n, s, R, V[a + 14], 23, -35309556), R = G(R, N, n, s, V[a + 1], 4, -1530992060), s = G(s, R, N, n, V[a + 4], 11, 1272893353), n = G(n, s, R, N, V[a + 7], 16, -155497632), N = G(N, n, s, R, V[a + 10], 23, -1094730640), R = G(R, N, n, s, V[a + 13], 4, 681279174), s = G(s, R, N, n, V[a + 0], 11, -358537222), n = G(n, s, R, N, V[a + 3], 16, -722521979), N = G(N, n, s, R, V[a + 6], 23, 76029189), R = G(R, N, n, s, V[a + 9], 4, -640364487), s = G(s, R, N, n, V[a + 12], 11, -421815835), n = G(n, s, R, N, V[a + 15], 16, 530742520), N = G(N, n, s, R, V[a + 2], 23, -995338651), R = J(R, N, n, s, V[a + 0], 6, -198630844), s = J(s, R, N, n, V[a + 7], 10, 1126891415), n = J(n, s, R, N, V[a + 14], 15, -1416354905), N = J(N, n, s, R, V[a + 5], 21, -57434055), R = J(R, N, n, s, V[a + 12], 6, 1700485571), s = J(s, R, N, n, V[a + 3], 10, -1894986606), n = J(n, s, R, N, V[a + 10], 15, -1051523), N = J(N, n, s, R, V[a + 1], 21, -2054922799), R = J(R, N, n, s, V[a + 8], 6, 1873313359), s = J(s, R, N, n, V[a + 15], 10, -30611744), n = J(n, s, R, N, V[a + 6], 15, -1560198380), N = J(N, n, s, R, V[a + 13], 21, 1309151649), R = J(R, N, n, s, V[a + 4], 6, -145523070), s = J(s, R, N, n, V[a + 11], 10, -1120210379), n = J(n, s, R, N, V[a + 2], 15, 718787259), N = J(N, n, s, R, V[a + 9], 21, -343485551), R = R + T >>> 0, N = N + S >>> 0, n = n + B >>> 0, s = s + Y >>> 0;
    }
    return W.endian([R, N, n, s]);
  };
  Z._ff = function(F, Q, V, c, R, N, n) {
    var s = F + (Q & V | ~Q & c) + (R >>> 0) + n;
    return (s << N | s >>> 32 - N) + Q;
  }, Z._gg = function(F, Q, V, c, R, N, n) {
    var s = F + (Q & c | V & ~c) + (R >>> 0) + n;
    return (s << N | s >>> 32 - N) + Q;
  }, Z._hh = function(F, Q, V, c, R, N, n) {
    var s = F + (Q ^ V ^ c) + (R >>> 0) + n;
    return (s << N | s >>> 32 - N) + Q;
  }, Z._ii = function(F, Q, V, c, R, N, n) {
    var s = F + (V ^ (Q | ~c)) + (R >>> 0) + n;
    return (s << N | s >>> 32 - N) + Q;
  }, Z._blocksize = 16, Z._digestsize = 16, Ta.exports = function(F, Q) {
    if (F == null)
      throw new Error("Illegal argument " + F);
    var V = W.wordsToBytes(Z(F, Q));
    return Q && Q.asBytes ? V : Q && Q.asString ? d.bytesToString(V) : W.bytesToHex(V);
  };
})();
var ji = Ta.exports;
const Oi = /* @__PURE__ */ Ei(ji), mc = new Worker(new URL(
  /* @vite-ignore */
  "/assets/worker-5w0YdYLI.js",
  import.meta.url
)), $l = {};
async function ri(W) {
  const l = this, { uid: U } = l, d = W - 1;
  if (!$l[U].processCapabilityArray[d]) {
    const Z = Promise.withResolvers();
    $l[U].processCapabilityArray[d] = Z, mc.postMessage({
      eventName: "getPage",
      props: { uid: U, pageIndex: d }
    });
  }
  return $l[U].processCapabilityArray[d].promise;
}
async function gi() {
  const W = Promise.withResolvers(), l = this, { uid: U } = l;
  if ($l[U])
    return mc.postMessage({ eventName: "destroy", props: { uid: U } }), $l[U].endCapability = W, $l[U].endCapability.promise;
}
function Ki({ scale: W }) {
  const l = this, { uid: U, pageIndex: d } = l, F = $l[U].pages[d];
  if (!F)
    throw new Error(`${l.pageIndex + 1}页没有先执行getPage方法`);
  const { naturalWidth: Q, naturalHeight: V } = F, c = [0, 0, Q, V];
  return l.view = c, {
    width: Math.round(c[2] * W),
    height: Math.round(c[3] * W),
    scale: W,
    viewBox: c
  };
}
function Fn({ canvasContext: W, viewport: l, page: U }) {
  const { naturalWidth: d, naturalHeight: Z, bitmap: F } = U, { width: Q, height: V } = l;
  W.drawImage(
    F,
    0,
    0,
    d,
    Z,
    0,
    0,
    Q,
    V
  );
}
function Hi({ canvasContext: W, viewport: l }) {
  const U = this, { pageIndex: d, uid: Z } = U, F = $l[Z], { pages: Q, offscreenArray: V, offscreenWorkerArray: c } = F, R = Q[d];
  if (!V[d]) {
    const N = new OffscreenCanvas(
      l.width,
      l.height
    );
    V[d] = N;
  }
  return {
    promise: new Promise((N, n) => {
      if (R.bitmap) {
        requestAnimationFrame(() => {
          Fn({ canvasContext: W, viewport: l, page: R }), requestAnimationFrame(() => N(null));
        });
        return;
      }
      if (!c[d]) {
        const s = new Worker(
          new URL(
            /* @vite-ignore */
            "/assets/offscreenCanvas.worker-CVXwY2Ju.js",
            import.meta.url
          )
        );
        c[d] = s, s.onmessage = ({ data: a }) => {
          console.log("offscreenWorker.onmessage", a), a ? (a instanceof ImageBitmap && (R.bitmap = a, delete R.buffer, requestAnimationFrame(
            () => Fn({ canvasContext: W, viewport: l, page: R })
          )), N(null)) : n(null), s.terminate(), delete c[d];
        }, s.postMessage(
          { canvas: V[d], page: R, viewport: l },
          [V[d]]
        );
      }
    })
  };
}
const vi = {
  decode: ({ uid: W, numPages: l }) => ({ uid: W, numPages: l, getPage: ri, destroy: gi }),
  getPage: ({
    uid: W,
    pageIndex: l,
    buffer: U,
    bitmap: d,
    naturalWidth: Z,
    naturalHeight: F
  }) => ($l[W].pages[l] || ($l[W].pages[l] = {
    buffer: U,
    bitmap: d,
    naturalWidth: Z,
    naturalHeight: F
  }), { uid: W, pageIndex: l, render: Hi, getViewport: Ki }),
  destroy: ({ uid: W }) => {
    delete $l[W];
  }
}, Pi = {
  decode: (W) => {
    var l;
    return (l = $l[W]) == null ? void 0 : l.startCapability;
  },
  getPage: (W, l) => {
    var U;
    return (U = $l[W]) == null ? void 0 : U.processCapabilityArray[l];
  },
  destroy: (W) => {
    var l;
    return (l = $l[W]) == null ? void 0 : l.endCapability;
  }
};
mc.onmessage = (W) => {
  const {
    _eventName: l,
    _errorMessage: U,
    _props: d
  } = W.data;
  console.log(l, U, d);
  const { uid: Z, pageIndex: F } = d, Q = Pi[l](Z, F);
  U && (Q == null || Q.reject(U)), Q == null || Q.resolve(vi[l](d));
};
const fi = async (W, l) => {
  const U = new Int32Array(l, 0, l.byteLength / 4), d = Oi(U);
  if (!$l[d]) {
    const Z = Promise.withResolvers(), F = [], Q = [], V = [];
    $l[d] = {
      startCapability: Z,
      processCapabilityArray: F,
      offscreenArray: Q,
      pages: [],
      offscreenWorkerArray: V
    }, mc.postMessage({
      eventName: "decode",
      props: { fileType: W, uid: d, arrayBuffer: l }
    });
  }
  return $l[d].startCapability.promise;
}, Ai = (W, l) => {
  switch (W) {
    case "pdf":
      return Ii(l);
    default:
      return fi(W, l);
  }
}, _i = [
  "PAGE:SCROLL_TO",
  "PAGE:RENDER",
  "PAGE:CREATE_MAGNIFY_AREA",
  "PAGE:REMOVE_MAGNIFY_AREA"
], Y0 = new zb(_i);
function Ya(W, l) {
  const U = Sl(), d = Sn(!1), Z = new IntersectionObserver(
    (F) => {
      W == null || W(F, Z), d.value = !!F.find((Q) => Q.isIntersecting);
    },
    l
  );
  return NN(() => {
    Z.disconnect();
  }), Z0(
    U,
    (F, Q) => {
      Q && (Z.unobserve(Q), d.value = !1), F && Z.observe(F);
    },
    {
      flush: "post"
    }
  ), { intersectionRef: U, isIntersecting: d };
}
const ZN = ["rendered", "error"], qi = ["instance", "devicePixelRatio", "pageNum", "containerSize", "transform", ...ZN.map((W) => `on${W.replace(/^\S/, (l) => l.toUpperCase())}`)], $i = /* @__PURE__ */ YQ({
  name: "DViewerPage",
  props: qi,
  emits: [...ZN],
  setup(W, {
    slots: l,
    emit: U,
    attrs: d,
    expose: Z
  }) {
    const F = ZN.reduce((z, C) => {
      const v = `on${C.replace(/^\S/, (A) => A.toUpperCase())}`;
      return z[v] = (...A) => U(C, ...A), z;
    }, {}), Q = ql(() => {
      const {
        ...z
      } = tc(W), C = Object.entries(z).reduce((v, [A, D]) => {
        const x = rl(D);
        return x !== void 0 && (v[A] = x), v;
      }, {});
      return {
        ...F,
        ...Vc({
          ...d,
          ...C
        })
      };
    }), V = Sl(0), c = Sl(!1), R = Sl(null), N = Sl(null), n = Sl(null), s = Sl(null);
    let a = null, b = null;
    const M = Sl(null), G = Sl(0), J = ql(() => {
      const z = M.value ? [
        `round(var(--scale-factor) * ${M.value[2]}px, 1px)`,
        `round(var(--scale-factor) * ${M.value[3]}px, 1px)`
        // Math.round(options.value.transform.scale * view.value[2]),
        // Math.round(options.value.transform.scale * view.value[3]),
      ] : Q.value.containerSize ? [
        `round(var(--scale-factor) * ${Q.value.containerSize.width}px, 1px)`,
        `round(var(--scale-factor) * ${Q.value.containerSize.height}px, 1px)`
        // Math.round(
        //   options.value.transform.scale * options.value.contentRect.width
        // ),
        // Math.round(
        //   options.value.transform.scale * options.value.contentRect.height
        // ),
      ] : [], C = {
        transform: `rotate(${Q.value.transform.rotate}deg) rotateX(${Q.value.transform.yFlip ? 0.5 : 0}turn) rotateY(${Q.value.transform.xFlip ? 0.5 : 0}turn) `
      };
      return z.length > 0 ? {
        ...C,
        width: z[0],
        height: z[1]
      } : C;
    }), T = CN((z) => {
      for (const C of z)
        C.isIntersecting && Y();
    }, 500), {
      intersectionRef: S,
      isIntersecting: B
    } = Ya(T), Y = CN(async () => {
      const z = rl(N), C = rl(n), {
        pageNum: v,
        devicePixelRatio: A,
        transform: {
          scale: D
        },
        instance: x
      } = Q.value;
      if (!(!z || !C || !Q.value.instance || G.value === D || !B.value))
        try {
          a || (V.value = 1, a = await x.getPage(v));
          const xl = a.getViewport({
            scale: D * A
          });
          M.value = a.view, z.width = Math.floor(xl.width), z.height = Math.floor(xl.height), z.style.width = Math.floor(xl.width) + "px", z.style.height = Math.floor(xl.height) + "px";
          const GZ = {
            canvasContext: z.getContext("2d"),
            viewport: xl
          };
          await a.render(GZ).promise, G.value = D, V.value = 2;
          const nd = {
            pageNum: Q.value.pageNum
          };
          if (Q.value.onRendered(nd), a.getTextContent && !b) {
            const Bl = await a.getTextContent();
            b = new Li({
              textContentSource: Bl,
              container: C,
              viewport: xl
            }), b.render();
          }
        } catch (xl) {
          console.log(xl.message), V.value = 2, c.value = !0, Q.value.onError({
            eventName: "render",
            message: "页面渲染失败,原因：" + xl.message,
            pageNum: Q.value.pageNum
          });
        }
    }, 500), X = () => {
      const z = N.value;
      z && (z.style.width = "100%", z.style.height = "100%");
    }, e = (z) => {
      const C = s.value;
      if (!z || !C) return;
      const v = new Promise((A, D) => {
        const x = setInterval(() => {
          V.value === 2 && (clearInterval(x), A(null));
        }, 200);
      });
      requestAnimationFrame(async () => {
        await v, C.appendChild(z);
      });
    }, o = ([z, C] = [0, 0], [v, A] = [0, 0]) => {
      const D = document.createElement("div");
      return D.style.position = "absolute", D.style.left = `round(var(--scale-factor) * ${z}px, 1px)`, D.style.top = `round(var(--scale-factor) * ${C}px, 1px)`, D.style.width = `round(var(--scale-factor) * ${v}px, 1px)`, D.style.height = `round(var(--scale-factor) * ${A}px, 1px)`, D.style.border = "1px dashed red", D.style.backgroundColor = "transparent", D;
    };
    let y = null;
    const O = (z) => {
      const C = R.value;
      +z != +W.pageNum || !C || C.scrollIntoView(!0);
    }, E = (z = [0, 0], C = [10, 10], v = 0) => {
      +v != +W.pageNum || y || (y = o(z, C), e(y));
    }, ll = () => {
      y && (y.remove(), y = null);
    };
    return nN(() => {
      S.value = R.value, Z0(() => W.transform.scale, (z) => {
        G.value !== z && (X(), B.value && Y());
      }, {
        immediate: !0
      }), Y0.on("PAGE:SCROLL_TO", O), Y0.on("PAGE:CREATE_MAGNIFY_AREA", E), Y0.on("PAGE:REMOVE_MAGNIFY_AREA", ll);
    }), () => {
      var z, C;
      return cl("div", {
        class: "d-page",
        ref: R
      }, [V.value < 2 ? (z = l.placeholder) == null ? void 0 : z.call(l) : c.value && ((C = l.error) == null ? void 0 : C.call(l)), cl("div", {
        class: "page",
        style: J.value
      }, [cl("div", {
        class: "canvasWrapper"
      }, [cl("canvas", {
        width: 0,
        height: 0,
        ref: N
      }, null)]), cl("div", {
        class: "textLayer",
        ref: n
      }, null), cl("div", {
        class: "annotationLayer",
        ref: s
      }, null)])]);
    };
  }
}), lm = ["modelValue", "color", "indeterminate", "width"], Um = /* @__PURE__ */ YQ({
  name: "DProgressCircular",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: lm,
  setup(W, {
    slots: l
  }) {
    const d = 2 * Math.PI * 20, Z = Sl(), {
      intersectionRef: F,
      isIntersecting: Q
    } = Ya(), {
      resizeRef: V,
      contentRect: c
    } = bN(), R = ql(() => Math.max(0, Math.min(100, W.modelValue || 0))), N = ql(() => Number(W.width || 4)), n = ql(() => c.value ? c.value.width : Math.max(N.value, 32)), s = ql(() => 20 / (1 - N.value / n.value) * 2), a = ql(() => N.value / n.value * s.value), b = (G, J = "px") => {
      if (!(G == null || G === ""))
        return isNaN(+G) ? String(G) : isFinite(+G) ? `${Number(G)}${J}` : void 0;
    }, M = ql(() => b((100 - R.value) / 100 * d));
    return Ha(() => {
      F.value = Z.value, V.value = Z.value;
    }), () => cl("div", {
      ref: Z,
      class: ["d-progress-circular", {
        "d-progress-circular--indeterminate": !!W.indeterminate,
        "d-progress-circular--visible": Q.value
      }],
      style: {
        color: W.color || "black",
        width: n.value + "px",
        height: n.value + "px"
      },
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": W.indeterminate ? void 0 : R.value
    }, [cl("svg", {
      style: {
        transform: "rotate(-90deg)"
      },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${s.value} ${s.value}`
    }, [cl("circle", {
      class: ["d-progress-circular__underlay"],
      fill: "transparent",
      cx: "50%",
      cy: "50%",
      r: 20,
      "stroke-width": a.value,
      "stroke-dasharray": d,
      "stroke-dashoffset": 0
    }, null), cl("circle", {
      class: "d-progress-circular__overlay",
      fill: "transparent",
      cx: "50%",
      cy: "50%",
      r: 20,
      "stroke-width": a.value,
      "stroke-dasharray": d,
      "stroke-dashoffset": M.value
    }, null)]), l.default && cl("div", {
      class: "d-progress-circular__content"
    }, [l.default({
      value: R.value
    })])]);
  }
}), dm = {
  img: ["image/jpeg", "image/png"],
  tiff: ["image/tiff"],
  bmp: ["image/bmp"],
  pdf: ["application/pdf"]
}, Zm = (W) => {
  const l = Object.entries(dm);
  for (let U = 0; U < l.length; U++) {
    const [d, Z] = l[U];
    if (Z.includes(W)) return d;
  }
}, Qn = (W) => (W.scale || (W.scale = 1), W.rotate || (W.rotate = 0), W.xFlip || (W.xFlip = !1), W.yFlip || (W.yFlip = !1), W.offsetX || (W.offsetX = 0), W.offsetY || (W.offsetY = 0), W), FN = ["rendered", "error"], Fm = ["src", "transform", ...FN.map((W) => `on${W.replace(/^\S/, (l) => l.toUpperCase())}`)], Am = /* @__PURE__ */ YQ({
  name: "DViewer",
  props: Fm,
  emits: [...FN],
  setup(W, {
    slots: l,
    emit: U,
    expose: d,
    attrs: Z
  }) {
    const F = FN.reduce((p, Ql) => {
      const Ll = `on${Ql.replace(/^\S/, (UU) => UU.toUpperCase())}`;
      return p[Ll] = (...UU) => U(Ql, ...UU), p;
    }, {}), Q = ql(() => {
      const {
        ...p
      } = tc(W), Ql = Object.entries(p).reduce((Ll, [UU, ml]) => {
        const wU = rl(ml);
        return wU !== void 0 && (Ll[UU] = wU), Ll;
      }, {});
      return {
        ...F,
        ...Vc({
          ...Z,
          ...Ql
        })
      };
    }), V = Sl(Qn({
      ...W.transform
    })), c = ql(() => {
      var p;
      return cl("div", {
        class: "absolute a-100 z-index-5"
      }, [cl("div", {
        class: "w-100 flex justify-content align-center "
      }, [((p = l.placeholder) == null ? void 0 : p.call(l)) || cl(Um, {
        indeterminate: !0
      }, null)])]);
    }), R = ql(() => {
      var p;
      return cl("div", {
        class: "absolute a-100 z-index-5"
      }, [cl("div", {
        class: "w-100 flex justify-content align-center error "
      }, [((p = l.error) == null ? void 0 : p.call(l)) || cl(Tn, null, [cl("svg", {
        style: "width:32px;",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, [cl("path", {
        style: "fill:currentColor",
        d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      }, null)]), cl("em", {
        style: "color:currentColor"
      }, [ra("failed to load")])])])]);
    });
    let N = null;
    const n = Sl(0), s = Sl(!1), a = Sl(0), b = Sl(!1), M = window.devicePixelRatio || 1, G = Sl(0), J = Sl(!1), T = ql(() => Array.from({
      length: G.value ? J.value ? G.value : 1 : 0
    }, (p, Ql) => ({
      key: Ql,
      pageNum: Ql + 1
    }))), S = (p) => {
    }, {
      resizeRef: B,
      contentRect: Y
    } = bN(S), X = Sl({
      width: 150,
      height: 300
    }), e = () => {
      n.value = 0, s.value = !1, a.value = 0, b.value = !1, N = null, G.value = 0, J.value = !1;
    }, o = async (p) => {
      e(), n.value = 1;
      const Ql = await ob(p);
      if (n.value = 2, !Ql)
        return s.value = !0, F.onError({
          eventName: "load",
          message: "文件加载失败",
          pageNum: 0
        });
      let {
        arrayBuffer: Ll,
        mimeType: UU
      } = Ql;
      const ml = Zm(UU);
      if (ml)
        a.value = 1, N = await Ai(ml, Ll);
      else
        return s.value = !0, F.onError({
          eventName: "load",
          message: "文件格式不支持",
          pageNum: 0
        });
      if (console.log(N), a.value = 2, !(N != null && N.numPages))
        return b.value = !0, F.onError({
          eventName: "load",
          message: "文件处理失败",
          pageNum: 0
        });
      G.value = N.numPages;
    }, y = (p) => {
      p.pageNum === 1 && (J.value = !0), Q.value.onRendered(p);
    }, O = (p) => {
      p.pageNum === 1 && (J.value = !0), Q.value.onError(p);
    }, E = (p = 0.3) => {
      const Ql = (V.value.scale * 10 + p * 10) / 10;
      D(Ql);
    }, ll = (p = 0.3) => {
      const Ql = (V.value.scale * 10 - p * 10) / 10;
      D(Ql);
    }, z = (p = 90) => {
      x(V.value.rotate - p);
    }, C = (p = 90) => {
      x(V.value.rotate + p);
    }, v = (p) => {
      let Ql = !V.value.xFlip;
      p instanceof Boolean && (Ql = p), V.value.xFlip = Ql;
    }, A = (p) => {
      let Ql = !V.value.yFlip;
      p instanceof Boolean && (Ql = p), V.value.yFlip = Ql;
    }, D = (p, [Ql, Ll] = [0, 0]) => {
      p < 0.3 || p > 10 || (V.value.scale = p, V.value.offsetX = Ql, V.value.offsetY = Ll);
    }, x = (p) => {
      p %= 360, p < 0 && (p += 360), V.value.rotate !== p && (V.value.rotate = p);
    }, xl = (p) => {
      Y0.emit("PAGE:SCROLL_TO", p);
    }, Bl = sN({
      zoomIn: E,
      zoomOut: ll,
      rotateLeft: z,
      rotateRight: C,
      flipX: v,
      flipY: A,
      createMagnifyArea: (p = [0, 0], Ql = [10, 10], Ll = 1) => {
        xl(Ll), requestAnimationFrame(() => {
          Y0.emit("PAGE:CREATE_MAGNIFY_AREA", p, Ql, Ll);
        });
      },
      removeMagnifyArea: () => {
        Y0.emit("PAGE:REMOVE_MAGNIFY_AREA");
      }
    });
    return d(Bl), nN(() => {
      Z0(() => W.src, (p) => {
        o(p);
      }, {
        immediate: !0
      }), Z0(() => W.transform, (p) => {
        V.value = Qn({
          ...p
        });
      }, {
        immediate: !0
      }), Z0(Y, (p) => {
        p && (X.value = {
          width: p.width,
          height: p.height
        });
      }, {
        immediate: !0
      });
    }), NN(async () => {
      var p, Ql;
      await ((Ql = (p = N == null ? void 0 : N.destroy) == null ? void 0 : p.call(N)) == null ? void 0 : Ql.promise);
    }), () => cl("div", {
      class: "d-viewer outerContainer"
    }, [cl("div", {
      class: "mainContainer",
      ref: B
    }, [cl("div", {
      class: "viewerContainer"
    }, [n.value < 2 && c.value, (s.value || b.value) && R.value, cl("div", {
      class: "pdfViewer",
      style: {
        "--scale-factor": `${V.value.scale}`
      }
    }, [T.value.map((p) => cl($i, ga(p, {
      instance: N,
      devicePixelRatio: M,
      onRendered: y,
      onError: O,
      containerSize: X.value,
      transform: V.value
    }), {
      placeholder: () => c.value,
      error: () => R.value
    }))])])])]);
  }
}), QN = ["rendered", "error", "loaded"], Qm = ["src", "aspectRatio", "cover", ...QN.map((W) => `on${W.replace(/^\S/, (l) => l.toUpperCase())}`)], _m = /* @__PURE__ */ YQ({
  name: "DImg",
  props: Qm,
  emits: [...QN],
  setup(W, {
    slots: l,
    emit: U,
    expose: d,
    attrs: Z
  }) {
    const F = QN.reduce((b, M) => {
      const G = `on${M.replace(/^\S/, (J) => J.toUpperCase())}`;
      return b[G] = (...J) => U(M, ...J), b;
    }, {}), Q = ql(() => {
      const {
        ...b
      } = tc(W), M = Object.entries(b).reduce((G, [J, T]) => {
        const S = rl(T);
        return S !== void 0 && (G[J] = S), G;
      }, {});
      return {
        ...F,
        ...Vc({
          ...Z,
          ...M
        })
      };
    });
    console.log(Q);
    const c = sN({
      ...{}
    });
    d(c);
    const R = Sl(null), N = Sl(0), n = Sl(!1), s = () => {
      N.value = 2, Q.value.onLoaded(R.value), Q.value.onRendered({
        pageNum: 1
      });
    }, a = (b) => {
      n.value = !0, Q.value.onError(b);
    };
    return () => {
      var b, M;
      return cl(Tn, null, [N.value < 2 ? (b = l.placeholder) == null ? void 0 : b.call(l) : n.value && ((M = l.error) == null ? void 0 : M.call(l)), cl("img", {
        ref: R,
        class: {
          "d-img": !0,
          cover: !!(Q.value.cover || Q.value.cover === "")
        },
        style: {
          "aspect-ratio": Q.value.aspectRatio || "unset",
          width: Q.value.width || "100%"
        },
        onload: s,
        onerror: a,
        src: Q.value.src
      }, null)]);
    };
  }
}), tm = ["permission"], qm = YQ({
  name: "DAuthority",
  props: tm,
  setup(W, { slots: l }) {
    const U = Yb(), d = ql(() => W.permission ? U ? Array.isArray(W.permission) ? W.permission.every((Z) => U.includes(Z)) : U.includes(W.permission) : !1 : !0);
    return l.default && l.default({ userPermissions: U }), () => d.value && l.default ? va(l.default) : null;
  }
});
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function tn(W, l) {
  var U = Object.keys(W);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(W);
    l && (d = d.filter(function(Z) {
      return Object.getOwnPropertyDescriptor(W, Z).enumerable;
    })), U.push.apply(U, d);
  }
  return U;
}
function kd(W) {
  for (var l = 1; l < arguments.length; l++) {
    var U = arguments[l] != null ? arguments[l] : {};
    l % 2 ? tn(Object(U), !0).forEach(function(d) {
      Vm(W, d, U[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(W, Object.getOwnPropertyDescriptors(U)) : tn(Object(U)).forEach(function(d) {
      Object.defineProperty(W, d, Object.getOwnPropertyDescriptor(U, d));
    });
  }
  return W;
}
function SW(W) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? SW = function(l) {
    return typeof l;
  } : SW = function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, SW(W);
}
function Vm(W, l, U) {
  return l in W ? Object.defineProperty(W, l, {
    value: U,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : W[l] = U, W;
}
function iZ() {
  return iZ = Object.assign || function(W) {
    for (var l = 1; l < arguments.length; l++) {
      var U = arguments[l];
      for (var d in U)
        Object.prototype.hasOwnProperty.call(U, d) && (W[d] = U[d]);
    }
    return W;
  }, iZ.apply(this, arguments);
}
function Wm(W, l) {
  if (W == null) return {};
  var U = {}, d = Object.keys(W), Z, F;
  for (F = 0; F < d.length; F++)
    Z = d[F], !(l.indexOf(Z) >= 0) && (U[Z] = W[Z]);
  return U;
}
function cm(W, l) {
  if (W == null) return {};
  var U = Wm(W, l), d, Z;
  if (Object.getOwnPropertySymbols) {
    var F = Object.getOwnPropertySymbols(W);
    for (Z = 0; Z < F.length; Z++)
      d = F[Z], !(l.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(W, d) && (U[d] = W[d]);
  }
  return U;
}
var Rm = "1.15.2";
function aZ(W) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(W);
}
var JZ = aZ(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), xV = aZ(/Edge/i), Vn = aZ(/firefox/i), AQ = aZ(/safari/i) && !aZ(/chrome/i) && !aZ(/android/i), Ba = aZ(/iP(ad|od|hone)/i), ea = aZ(/chrome/i) && aZ(/android/i), ua = {
  capture: !1,
  passive: !1
};
function Wl(W, l, U) {
  W.addEventListener(l, U, !JZ && ua);
}
function Zl(W, l, U) {
  W.removeEventListener(l, U, !JZ && ua);
}
function IW(W, l) {
  if (l) {
    if (l[0] === ">" && (l = l.substring(1)), W)
      try {
        if (W.matches)
          return W.matches(l);
        if (W.msMatchesSelector)
          return W.msMatchesSelector(l);
        if (W.webkitMatchesSelector)
          return W.webkitMatchesSelector(l);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Nm(W) {
  return W.host && W !== document && W.host.nodeType ? W.host : W.parentNode;
}
function Nd(W, l, U, d) {
  if (W) {
    U = U || document;
    do {
      if (l != null && (l[0] === ">" ? W.parentNode === U && IW(W, l) : IW(W, l)) || d && W === U)
        return W;
      if (W === U) break;
    } while (W = Nm(W));
  }
  return null;
}
var Wn = /\s+/g;
function BU(W, l, U) {
  if (W && l)
    if (W.classList)
      W.classList[U ? "add" : "remove"](l);
    else {
      var d = (" " + W.className + " ").replace(Wn, " ").replace(" " + l + " ", " ");
      W.className = (d + (U ? " " + l : "")).replace(Wn, " ");
    }
}
function r(W, l, U) {
  var d = W && W.style;
  if (d) {
    if (U === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? U = document.defaultView.getComputedStyle(W, "") : W.currentStyle && (U = W.currentStyle), l === void 0 ? U : U[l];
    !(l in d) && l.indexOf("webkit") === -1 && (l = "-webkit-" + l), d[l] = U + (typeof U == "string" ? "" : "px");
  }
}
function B0(W, l) {
  var U = "";
  if (typeof W == "string")
    U = W;
  else
    do {
      var d = r(W, "transform");
      d && d !== "none" && (U = d + " " + U);
    } while (!l && (W = W.parentNode));
  var Z = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return Z && new Z(U);
}
function pa(W, l, U) {
  if (W) {
    var d = W.getElementsByTagName(l), Z = 0, F = d.length;
    if (U)
      for (; Z < F; Z++)
        U(d[Z], Z);
    return d;
  }
  return [];
}
function yd() {
  var W = document.scrollingElement;
  return W || document.documentElement;
}
function ol(W, l, U, d, Z) {
  if (!(!W.getBoundingClientRect && W !== window)) {
    var F, Q, V, c, R, N, n;
    if (W !== window && W.parentNode && W !== yd() ? (F = W.getBoundingClientRect(), Q = F.top, V = F.left, c = F.bottom, R = F.right, N = F.height, n = F.width) : (Q = 0, V = 0, c = window.innerHeight, R = window.innerWidth, N = window.innerHeight, n = window.innerWidth), (l || U) && W !== window && (Z = Z || W.parentNode, !JZ))
      do
        if (Z && Z.getBoundingClientRect && (r(Z, "transform") !== "none" || U && r(Z, "position") !== "static")) {
          var s = Z.getBoundingClientRect();
          Q -= s.top + parseInt(r(Z, "border-top-width")), V -= s.left + parseInt(r(Z, "border-left-width")), c = Q + F.height, R = V + F.width;
          break;
        }
      while (Z = Z.parentNode);
    if (d && W !== window) {
      var a = B0(Z || W), b = a && a.a, M = a && a.d;
      a && (Q /= M, V /= b, n /= b, N /= M, c = Q + N, R = V + n);
    }
    return {
      top: Q,
      left: V,
      bottom: c,
      right: R,
      width: n,
      height: N
    };
  }
}
function cn(W, l, U) {
  for (var d = fZ(W, !0), Z = ol(W)[l]; d; ) {
    var F = ol(d)[U], Q = void 0;
    if (Q = Z >= F, !Q) return d;
    if (d === yd()) break;
    d = fZ(d, !1);
  }
  return !1;
}
function XQ(W, l, U, d) {
  for (var Z = 0, F = 0, Q = W.children; F < Q.length; ) {
    if (Q[F].style.display !== "none" && Q[F] !== g.ghost && (d || Q[F] !== g.dragged) && Nd(Q[F], U.draggable, W, !1)) {
      if (Z === l)
        return Q[F];
      Z++;
    }
    F++;
  }
  return null;
}
function BN(W, l) {
  for (var U = W.lastElementChild; U && (U === g.ghost || r(U, "display") === "none" || l && !IW(U, l)); )
    U = U.previousElementSibling;
  return U || null;
}
function jU(W, l) {
  var U = 0;
  if (!W || !W.parentNode)
    return -1;
  for (; W = W.previousElementSibling; )
    W.nodeName.toUpperCase() !== "TEMPLATE" && W !== g.clone && (!l || IW(W, l)) && U++;
  return U;
}
function Rn(W) {
  var l = 0, U = 0, d = yd();
  if (W)
    do {
      var Z = B0(W), F = Z.a, Q = Z.d;
      l += W.scrollLeft * F, U += W.scrollTop * Q;
    } while (W !== d && (W = W.parentNode));
  return [l, U];
}
function nm(W, l) {
  for (var U in W)
    if (W.hasOwnProperty(U)) {
      for (var d in l)
        if (l.hasOwnProperty(d) && l[d] === W[U][d]) return Number(U);
    }
  return -1;
}
function fZ(W, l) {
  if (!W || !W.getBoundingClientRect) return yd();
  var U = W, d = !1;
  do
    if (U.clientWidth < U.scrollWidth || U.clientHeight < U.scrollHeight) {
      var Z = r(U);
      if (U.clientWidth < U.scrollWidth && (Z.overflowX == "auto" || Z.overflowX == "scroll") || U.clientHeight < U.scrollHeight && (Z.overflowY == "auto" || Z.overflowY == "scroll")) {
        if (!U.getBoundingClientRect || U === document.body) return yd();
        if (d || l) return U;
        d = !0;
      }
    }
  while (U = U.parentNode);
  return yd();
}
function sm(W, l) {
  if (W && l)
    for (var U in l)
      l.hasOwnProperty(U) && (W[U] = l[U]);
  return W;
}
function pc(W, l) {
  return Math.round(W.top) === Math.round(l.top) && Math.round(W.left) === Math.round(l.left) && Math.round(W.height) === Math.round(l.height) && Math.round(W.width) === Math.round(l.width);
}
var _Q;
function ya(W, l) {
  return function() {
    if (!_Q) {
      var U = arguments, d = this;
      U.length === 1 ? W.call(d, U[0]) : W.apply(d, U), _Q = setTimeout(function() {
        _Q = void 0;
      }, l);
    }
  };
}
function am() {
  clearTimeout(_Q), _Q = void 0;
}
function oa(W, l, U) {
  W.scrollLeft += l, W.scrollTop += U;
}
function za(W) {
  var l = window.Polymer, U = window.jQuery || window.Zepto;
  return l && l.dom ? l.dom(W).cloneNode(!0) : U ? U(W).clone(!0)[0] : W.cloneNode(!0);
}
function La(W, l, U) {
  var d = {};
  return Array.from(W.children).forEach(function(Z) {
    var F, Q, V, c;
    if (!(!Nd(Z, l.draggable, W, !1) || Z.animated || Z === U)) {
      var R = ol(Z);
      d.left = Math.min((F = d.left) !== null && F !== void 0 ? F : 1 / 0, R.left), d.top = Math.min((Q = d.top) !== null && Q !== void 0 ? Q : 1 / 0, R.top), d.right = Math.max((V = d.right) !== null && V !== void 0 ? V : -1 / 0, R.right), d.bottom = Math.max((c = d.bottom) !== null && c !== void 0 ? c : -1 / 0, R.bottom);
    }
  }), d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
var CU = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function bm() {
  var W = [], l;
  return {
    captureAnimationState: function() {
      if (W = [], !!this.options.animation) {
        var d = [].slice.call(this.el.children);
        d.forEach(function(Z) {
          if (!(r(Z, "display") === "none" || Z === g.ghost)) {
            W.push({
              target: Z,
              rect: ol(Z)
            });
            var F = kd({}, W[W.length - 1].rect);
            if (Z.thisAnimationDuration) {
              var Q = B0(Z, !0);
              Q && (F.top -= Q.f, F.left -= Q.e);
            }
            Z.fromRect = F;
          }
        });
      }
    },
    addAnimationState: function(d) {
      W.push(d);
    },
    removeAnimationState: function(d) {
      W.splice(nm(W, {
        target: d
      }), 1);
    },
    animateAll: function(d) {
      var Z = this;
      if (!this.options.animation) {
        clearTimeout(l), typeof d == "function" && d();
        return;
      }
      var F = !1, Q = 0;
      W.forEach(function(V) {
        var c = 0, R = V.target, N = R.fromRect, n = ol(R), s = R.prevFromRect, a = R.prevToRect, b = V.rect, M = B0(R, !0);
        M && (n.top -= M.f, n.left -= M.e), R.toRect = n, R.thisAnimationDuration && pc(s, n) && !pc(N, n) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - n.top) / (b.left - n.left) === (N.top - n.top) / (N.left - n.left) && (c = im(b, s, a, Z.options)), pc(n, N) || (R.prevFromRect = N, R.prevToRect = n, c || (c = Z.options.animation), Z.animate(R, b, n, c)), c && (F = !0, Q = Math.max(Q, c), clearTimeout(R.animationResetTimer), R.animationResetTimer = setTimeout(function() {
          R.animationTime = 0, R.prevFromRect = null, R.fromRect = null, R.prevToRect = null, R.thisAnimationDuration = null;
        }, c), R.thisAnimationDuration = c);
      }), clearTimeout(l), F ? l = setTimeout(function() {
        typeof d == "function" && d();
      }, Q) : typeof d == "function" && d(), W = [];
    },
    animate: function(d, Z, F, Q) {
      if (Q) {
        r(d, "transition", ""), r(d, "transform", "");
        var V = B0(this.el), c = V && V.a, R = V && V.d, N = (Z.left - F.left) / (c || 1), n = (Z.top - F.top) / (R || 1);
        d.animatingX = !!N, d.animatingY = !!n, r(d, "transform", "translate3d(" + N + "px," + n + "px,0)"), this.forRepaintDummy = hm(d), r(d, "transition", "transform " + Q + "ms" + (this.options.easing ? " " + this.options.easing : "")), r(d, "transform", "translate3d(0,0,0)"), typeof d.animated == "number" && clearTimeout(d.animated), d.animated = setTimeout(function() {
          r(d, "transition", ""), r(d, "transform", ""), d.animated = !1, d.animatingX = !1, d.animatingY = !1;
        }, Q);
      }
    }
  };
}
function hm(W) {
  return W.offsetWidth;
}
function im(W, l, U, d) {
  return Math.sqrt(Math.pow(l.top - W.top, 2) + Math.pow(l.left - W.left, 2)) / Math.sqrt(Math.pow(l.top - U.top, 2) + Math.pow(l.left - U.left, 2)) * d.animation;
}
var n0 = [], yc = {
  initializeByDefault: !0
}, jV = {
  mount: function(l) {
    for (var U in yc)
      yc.hasOwnProperty(U) && !(U in l) && (l[U] = yc[U]);
    n0.forEach(function(d) {
      if (d.pluginName === l.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(l.pluginName, " more than once");
    }), n0.push(l);
  },
  pluginEvent: function(l, U, d) {
    var Z = this;
    this.eventCanceled = !1, d.cancel = function() {
      Z.eventCanceled = !0;
    };
    var F = l + "Global";
    n0.forEach(function(Q) {
      U[Q.pluginName] && (U[Q.pluginName][F] && U[Q.pluginName][F](kd({
        sortable: U
      }, d)), U.options[Q.pluginName] && U[Q.pluginName][l] && U[Q.pluginName][l](kd({
        sortable: U
      }, d)));
    });
  },
  initializePlugins: function(l, U, d, Z) {
    n0.forEach(function(V) {
      var c = V.pluginName;
      if (!(!l.options[c] && !V.initializeByDefault)) {
        var R = new V(l, U, l.options);
        R.sortable = l, R.options = l.options, l[c] = R, iZ(d, R.defaults);
      }
    });
    for (var F in l.options)
      if (l.options.hasOwnProperty(F)) {
        var Q = this.modifyOption(l, F, l.options[F]);
        typeof Q < "u" && (l.options[F] = Q);
      }
  },
  getEventProperties: function(l, U) {
    var d = {};
    return n0.forEach(function(Z) {
      typeof Z.eventProperties == "function" && iZ(d, Z.eventProperties.call(U[Z.pluginName], l));
    }), d;
  },
  modifyOption: function(l, U, d) {
    var Z;
    return n0.forEach(function(F) {
      l[F.pluginName] && F.optionListeners && typeof F.optionListeners[U] == "function" && (Z = F.optionListeners[U].call(l[F.pluginName], d));
    }), Z;
  }
};
function mm(W) {
  var l = W.sortable, U = W.rootEl, d = W.name, Z = W.targetEl, F = W.cloneEl, Q = W.toEl, V = W.fromEl, c = W.oldIndex, R = W.newIndex, N = W.oldDraggableIndex, n = W.newDraggableIndex, s = W.originalEvent, a = W.putSortable, b = W.extraEventProperties;
  if (l = l || U && U[CU], !!l) {
    var M, G = l.options, J = "on" + d.charAt(0).toUpperCase() + d.substr(1);
    window.CustomEvent && !JZ && !xV ? M = new CustomEvent(d, {
      bubbles: !0,
      cancelable: !0
    }) : (M = document.createEvent("Event"), M.initEvent(d, !0, !0)), M.to = Q || U, M.from = V || U, M.item = Z || U, M.clone = F, M.oldIndex = c, M.newIndex = R, M.oldDraggableIndex = N, M.newDraggableIndex = n, M.originalEvent = s, M.pullMode = a ? a.lastPutMode : void 0;
    var T = kd(kd({}, b), jV.getEventProperties(d, l));
    for (var S in T)
      M[S] = T[S];
    U && U.dispatchEvent(M), G[J] && G[J].call(l, M);
  }
}
var Mm = ["evt"], iU = function(l, U) {
  var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Z = d.evt, F = cm(d, Mm);
  jV.pluginEvent.bind(g)(l, U, kd({
    dragEl: u,
    parentEl: Xl,
    ghostEl: P,
    rootEl: Ml,
    nextEl: QF,
    lastDownEl: XW,
    cloneEl: Jl,
    cloneHidden: eZ,
    dragStarted: KQ,
    putSortable: gl,
    activeSortable: g.active,
    originalEvent: Z,
    oldIndex: G0,
    oldDraggableIndex: qQ,
    newIndex: eU,
    newDraggableIndex: YZ,
    hideGhostForTarget: Ea,
    unhideGhostForTarget: Ca,
    cloneNowHidden: function() {
      eZ = !0;
    },
    cloneNowShown: function() {
      eZ = !1;
    },
    dispatchSortableEvent: function(V) {
      RU({
        sortable: U,
        name: V,
        originalEvent: Z
      });
    }
  }, F));
};
function RU(W) {
  mm(kd({
    putSortable: gl,
    cloneEl: Jl,
    targetEl: u,
    rootEl: Ml,
    oldIndex: G0,
    oldDraggableIndex: qQ,
    newIndex: eU,
    newDraggableIndex: YZ
  }, W));
}
var u, Xl, P, Ml, QF, XW, Jl, eZ, G0, eU, qQ, YZ, vV, gl, J0 = !1, EW = !1, CW = [], lF, fU, oc, zc, Nn, nn, KQ, s0, $Q, lt = !1, PV = !1, YW, dU, Lc = [], tN = !1, wW = [], Mc = typeof document < "u", fV = Ba, sn = xV || JZ ? "cssFloat" : "float", Jm = Mc && !ea && !Ba && "draggable" in document.createElement("div"), ka = function() {
  if (Mc) {
    if (JZ)
      return !1;
    var W = document.createElement("x");
    return W.style.cssText = "pointer-events:auto", W.style.pointerEvents === "auto";
  }
}(), Da = function(l, U) {
  var d = r(l), Z = parseInt(d.width) - parseInt(d.paddingLeft) - parseInt(d.paddingRight) - parseInt(d.borderLeftWidth) - parseInt(d.borderRightWidth), F = XQ(l, 0, U), Q = XQ(l, 1, U), V = F && r(F), c = Q && r(Q), R = V && parseInt(V.marginLeft) + parseInt(V.marginRight) + ol(F).width, N = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + ol(Q).width;
  if (d.display === "flex")
    return d.flexDirection === "column" || d.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (d.display === "grid")
    return d.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (F && V.float && V.float !== "none") {
    var n = V.float === "left" ? "left" : "right";
    return Q && (c.clear === "both" || c.clear === n) ? "vertical" : "horizontal";
  }
  return F && (V.display === "block" || V.display === "flex" || V.display === "table" || V.display === "grid" || R >= Z && d[sn] === "none" || Q && d[sn] === "none" && R + N > Z) ? "vertical" : "horizontal";
}, Gm = function(l, U, d) {
  var Z = d ? l.left : l.top, F = d ? l.right : l.bottom, Q = d ? l.width : l.height, V = d ? U.left : U.top, c = d ? U.right : U.bottom, R = d ? U.width : U.height;
  return Z === V || F === c || Z + Q / 2 === V + R / 2;
}, Tm = function(l, U) {
  var d;
  return CW.some(function(Z) {
    var F = Z[CU].options.emptyInsertThreshold;
    if (!(!F || BN(Z))) {
      var Q = ol(Z), V = l >= Q.left - F && l <= Q.right + F, c = U >= Q.top - F && U <= Q.bottom + F;
      if (V && c)
        return d = Z;
    }
  }), d;
}, Ia = function(l) {
  function U(F, Q) {
    return function(V, c, R, N) {
      var n = V.options.group.name && c.options.group.name && V.options.group.name === c.options.group.name;
      if (F == null && (Q || n))
        return !0;
      if (F == null || F === !1)
        return !1;
      if (Q && F === "clone")
        return F;
      if (typeof F == "function")
        return U(F(V, c, R, N), Q)(V, c, R, N);
      var s = (Q ? V : c).options.group.name;
      return F === !0 || typeof F == "string" && F === s || F.join && F.indexOf(s) > -1;
    };
  }
  var d = {}, Z = l.group;
  (!Z || SW(Z) != "object") && (Z = {
    name: Z
  }), d.name = Z.name, d.checkPull = U(Z.pull, !0), d.checkPut = U(Z.put), d.revertClone = Z.revertClone, l.group = d;
}, Ea = function() {
  !ka && P && r(P, "display", "none");
}, Ca = function() {
  !ka && P && r(P, "display", "");
};
Mc && !ea && document.addEventListener("click", function(W) {
  if (EW)
    return W.preventDefault(), W.stopPropagation && W.stopPropagation(), W.stopImmediatePropagation && W.stopImmediatePropagation(), EW = !1, !1;
}, !0);
var UF = function(l) {
  if (u) {
    l = l.touches ? l.touches[0] : l;
    var U = Tm(l.clientX, l.clientY);
    if (U) {
      var d = {};
      for (var Z in l)
        l.hasOwnProperty(Z) && (d[Z] = l[Z]);
      d.target = d.rootEl = U, d.preventDefault = void 0, d.stopPropagation = void 0, U[CU]._onDragOver(d);
    }
  }
}, Sm = function(l) {
  u && u.parentNode[CU]._isOutsideThisEl(l.target);
};
function g(W, l) {
  if (!(W && W.nodeType && W.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(W));
  this.el = W, this.options = l = iZ({}, l), W[CU] = this;
  var U = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(W.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Da(W, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(Q, V) {
      Q.setData("Text", V.textContent);
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
    supportPointer: g.supportPointer !== !1 && "PointerEvent" in window && !AQ,
    emptyInsertThreshold: 5
  };
  jV.initializePlugins(this, W, U);
  for (var d in U)
    !(d in l) && (l[d] = U[d]);
  Ia(l);
  for (var Z in this)
    Z.charAt(0) === "_" && typeof this[Z] == "function" && (this[Z] = this[Z].bind(this));
  this.nativeDraggable = l.forceFallback ? !1 : Jm, this.nativeDraggable && (this.options.touchStartThreshold = 1), l.supportPointer ? Wl(W, "pointerdown", this._onTapStart) : (Wl(W, "mousedown", this._onTapStart), Wl(W, "touchstart", this._onTapStart)), this.nativeDraggable && (Wl(W, "dragover", this), Wl(W, "dragenter", this)), CW.push(this.el), l.store && l.store.get && this.sort(l.store.get(this) || []), iZ(this, bm());
}
g.prototype = /** @lends Sortable.prototype */
{
  constructor: g,
  _isOutsideThisEl: function(l) {
    !this.el.contains(l) && l !== this.el && (s0 = null);
  },
  _getDirection: function(l, U) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, l, U, u) : this.options.direction;
  },
  _onTapStart: function(l) {
    if (l.cancelable) {
      var U = this, d = this.el, Z = this.options, F = Z.preventOnFilter, Q = l.type, V = l.touches && l.touches[0] || l.pointerType && l.pointerType === "touch" && l, c = (V || l).target, R = l.target.shadowRoot && (l.path && l.path[0] || l.composedPath && l.composedPath()[0]) || c, N = Z.filter;
      if (om(d), !u && !(/mousedown|pointerdown/.test(Q) && l.button !== 0 || Z.disabled) && !R.isContentEditable && !(!this.nativeDraggable && AQ && c && c.tagName.toUpperCase() === "SELECT") && (c = Nd(c, Z.draggable, d, !1), !(c && c.animated) && XW !== c)) {
        if (G0 = jU(c), qQ = jU(c, Z.draggable), typeof N == "function") {
          if (N.call(this, l, c, this)) {
            RU({
              sortable: U,
              rootEl: R,
              name: "filter",
              targetEl: c,
              toEl: d,
              fromEl: d
            }), iU("filter", U, {
              evt: l
            }), F && l.cancelable && l.preventDefault();
            return;
          }
        } else if (N && (N = N.split(",").some(function(n) {
          if (n = Nd(R, n.trim(), d, !1), n)
            return RU({
              sortable: U,
              rootEl: n,
              name: "filter",
              targetEl: c,
              fromEl: d,
              toEl: d
            }), iU("filter", U, {
              evt: l
            }), !0;
        }), N)) {
          F && l.cancelable && l.preventDefault();
          return;
        }
        Z.handle && !Nd(R, Z.handle, d, !1) || this._prepareDragStart(l, V, c);
      }
    }
  },
  _prepareDragStart: function(l, U, d) {
    var Z = this, F = Z.el, Q = Z.options, V = F.ownerDocument, c;
    if (d && !u && d.parentNode === F) {
      var R = ol(d);
      if (Ml = F, u = d, Xl = u.parentNode, QF = u.nextSibling, XW = d, vV = Q.group, g.dragged = u, lF = {
        target: u,
        clientX: (U || l).clientX,
        clientY: (U || l).clientY
      }, Nn = lF.clientX - R.left, nn = lF.clientY - R.top, this._lastX = (U || l).clientX, this._lastY = (U || l).clientY, u.style["will-change"] = "all", c = function() {
        if (iU("delayEnded", Z, {
          evt: l
        }), g.eventCanceled) {
          Z._onDrop();
          return;
        }
        Z._disableDelayedDragEvents(), !Vn && Z.nativeDraggable && (u.draggable = !0), Z._triggerDragStart(l, U), RU({
          sortable: Z,
          name: "choose",
          originalEvent: l
        }), BU(u, Q.chosenClass, !0);
      }, Q.ignore.split(",").forEach(function(N) {
        pa(u, N.trim(), kc);
      }), Wl(V, "dragover", UF), Wl(V, "mousemove", UF), Wl(V, "touchmove", UF), Wl(V, "mouseup", Z._onDrop), Wl(V, "touchend", Z._onDrop), Wl(V, "touchcancel", Z._onDrop), Vn && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), iU("delayStart", this, {
        evt: l
      }), Q.delay && (!Q.delayOnTouchOnly || U) && (!this.nativeDraggable || !(xV || JZ))) {
        if (g.eventCanceled) {
          this._onDrop();
          return;
        }
        Wl(V, "mouseup", Z._disableDelayedDrag), Wl(V, "touchend", Z._disableDelayedDrag), Wl(V, "touchcancel", Z._disableDelayedDrag), Wl(V, "mousemove", Z._delayedDragTouchMoveHandler), Wl(V, "touchmove", Z._delayedDragTouchMoveHandler), Q.supportPointer && Wl(V, "pointermove", Z._delayedDragTouchMoveHandler), Z._dragStartTimer = setTimeout(c, Q.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(l) {
    var U = l.touches ? l.touches[0] : l;
    Math.max(Math.abs(U.clientX - this._lastX), Math.abs(U.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && kc(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var l = this.el.ownerDocument;
    Zl(l, "mouseup", this._disableDelayedDrag), Zl(l, "touchend", this._disableDelayedDrag), Zl(l, "touchcancel", this._disableDelayedDrag), Zl(l, "mousemove", this._delayedDragTouchMoveHandler), Zl(l, "touchmove", this._delayedDragTouchMoveHandler), Zl(l, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(l, U) {
    U = U || l.pointerType == "touch" && l, !this.nativeDraggable || U ? this.options.supportPointer ? Wl(document, "pointermove", this._onTouchMove) : U ? Wl(document, "touchmove", this._onTouchMove) : Wl(document, "mousemove", this._onTouchMove) : (Wl(u, "dragend", this), Wl(Ml, "dragstart", this._onDragStart));
    try {
      document.selection ? BW(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(l, U) {
    if (J0 = !1, Ml && u) {
      iU("dragStarted", this, {
        evt: U
      }), this.nativeDraggable && Wl(document, "dragover", Sm);
      var d = this.options;
      !l && BU(u, d.dragClass, !1), BU(u, d.ghostClass, !0), g.active = this, l && this._appendGhost(), RU({
        sortable: this,
        name: "start",
        originalEvent: U
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (fU) {
      this._lastX = fU.clientX, this._lastY = fU.clientY, Ea();
      for (var l = document.elementFromPoint(fU.clientX, fU.clientY), U = l; l && l.shadowRoot && (l = l.shadowRoot.elementFromPoint(fU.clientX, fU.clientY), l !== U); )
        U = l;
      if (u.parentNode[CU]._isOutsideThisEl(l), U)
        do {
          if (U[CU]) {
            var d = void 0;
            if (d = U[CU]._onDragOver({
              clientX: fU.clientX,
              clientY: fU.clientY,
              target: l,
              rootEl: U
            }), d && !this.options.dragoverBubble)
              break;
          }
          l = U;
        } while (U = U.parentNode);
      Ca();
    }
  },
  _onTouchMove: function(l) {
    if (lF) {
      var U = this.options, d = U.fallbackTolerance, Z = U.fallbackOffset, F = l.touches ? l.touches[0] : l, Q = P && B0(P, !0), V = P && Q && Q.a, c = P && Q && Q.d, R = fV && dU && Rn(dU), N = (F.clientX - lF.clientX + Z.x) / (V || 1) + (R ? R[0] - Lc[0] : 0) / (V || 1), n = (F.clientY - lF.clientY + Z.y) / (c || 1) + (R ? R[1] - Lc[1] : 0) / (c || 1);
      if (!g.active && !J0) {
        if (d && Math.max(Math.abs(F.clientX - this._lastX), Math.abs(F.clientY - this._lastY)) < d)
          return;
        this._onDragStart(l, !0);
      }
      if (P) {
        Q ? (Q.e += N - (oc || 0), Q.f += n - (zc || 0)) : Q = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: N,
          f: n
        };
        var s = "matrix(".concat(Q.a, ",").concat(Q.b, ",").concat(Q.c, ",").concat(Q.d, ",").concat(Q.e, ",").concat(Q.f, ")");
        r(P, "webkitTransform", s), r(P, "mozTransform", s), r(P, "msTransform", s), r(P, "transform", s), oc = N, zc = n, fU = F;
      }
      l.cancelable && l.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!P) {
      var l = this.options.fallbackOnBody ? document.body : Ml, U = ol(u, !0, fV, !0, l), d = this.options;
      if (fV) {
        for (dU = l; r(dU, "position") === "static" && r(dU, "transform") === "none" && dU !== document; )
          dU = dU.parentNode;
        dU !== document.body && dU !== document.documentElement ? (dU === document && (dU = yd()), U.top += dU.scrollTop, U.left += dU.scrollLeft) : dU = yd(), Lc = Rn(dU);
      }
      P = u.cloneNode(!0), BU(P, d.ghostClass, !1), BU(P, d.fallbackClass, !0), BU(P, d.dragClass, !0), r(P, "transition", ""), r(P, "transform", ""), r(P, "box-sizing", "border-box"), r(P, "margin", 0), r(P, "top", U.top), r(P, "left", U.left), r(P, "width", U.width), r(P, "height", U.height), r(P, "opacity", "0.8"), r(P, "position", fV ? "absolute" : "fixed"), r(P, "zIndex", "100000"), r(P, "pointerEvents", "none"), g.ghost = P, l.appendChild(P), r(P, "transform-origin", Nn / parseInt(P.style.width) * 100 + "% " + nn / parseInt(P.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(l, U) {
    var d = this, Z = l.dataTransfer, F = d.options;
    if (iU("dragStart", this, {
      evt: l
    }), g.eventCanceled) {
      this._onDrop();
      return;
    }
    iU("setupClone", this), g.eventCanceled || (Jl = za(u), Jl.removeAttribute("id"), Jl.draggable = !1, Jl.style["will-change"] = "", this._hideClone(), BU(Jl, this.options.chosenClass, !1), g.clone = Jl), d.cloneId = BW(function() {
      iU("clone", d), !g.eventCanceled && (d.options.removeCloneOnHide || Ml.insertBefore(Jl, u), d._hideClone(), RU({
        sortable: d,
        name: "clone"
      }));
    }), !U && BU(u, F.dragClass, !0), U ? (EW = !0, d._loopId = setInterval(d._emulateDragOver, 50)) : (Zl(document, "mouseup", d._onDrop), Zl(document, "touchend", d._onDrop), Zl(document, "touchcancel", d._onDrop), Z && (Z.effectAllowed = "move", F.setData && F.setData.call(d, Z, u)), Wl(document, "drop", d), r(u, "transform", "translateZ(0)")), J0 = !0, d._dragStartId = BW(d._dragStarted.bind(d, U, l)), Wl(document, "selectstart", d), KQ = !0, AQ && r(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(l) {
    var U = this.el, d = l.target, Z, F, Q, V = this.options, c = V.group, R = g.active, N = vV === c, n = V.sort, s = gl || R, a, b = this, M = !1;
    if (tN) return;
    function G(x, xl) {
      iU(x, b, kd({
        evt: l,
        isOwner: N,
        axis: a ? "vertical" : "horizontal",
        revert: Q,
        dragRect: Z,
        targetRect: F,
        canSort: n,
        fromSortable: s,
        target: d,
        completed: T,
        onMove: function(nd, Bl) {
          return AV(Ml, U, u, Z, nd, ol(nd), l, Bl);
        },
        changed: S
      }, xl));
    }
    function J() {
      G("dragOverAnimationCapture"), b.captureAnimationState(), b !== s && s.captureAnimationState();
    }
    function T(x) {
      return G("dragOverCompleted", {
        insertion: x
      }), x && (N ? R._hideClone() : R._showClone(b), b !== s && (BU(u, gl ? gl.options.ghostClass : R.options.ghostClass, !1), BU(u, V.ghostClass, !0)), gl !== b && b !== g.active ? gl = b : b === g.active && gl && (gl = null), s === b && (b._ignoreWhileAnimating = d), b.animateAll(function() {
        G("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== s && (s.animateAll(), s._ignoreWhileAnimating = null)), (d === u && !u.animated || d === U && !d.animated) && (s0 = null), !V.dragoverBubble && !l.rootEl && d !== document && (u.parentNode[CU]._isOutsideThisEl(l.target), !x && UF(l)), !V.dragoverBubble && l.stopPropagation && l.stopPropagation(), M = !0;
    }
    function S() {
      eU = jU(u), YZ = jU(u, V.draggable), RU({
        sortable: b,
        name: "change",
        toEl: U,
        newIndex: eU,
        newDraggableIndex: YZ,
        originalEvent: l
      });
    }
    if (l.preventDefault !== void 0 && l.cancelable && l.preventDefault(), d = Nd(d, V.draggable, U, !0), G("dragOver"), g.eventCanceled) return M;
    if (u.contains(l.target) || d.animated && d.animatingX && d.animatingY || b._ignoreWhileAnimating === d)
      return T(!1);
    if (EW = !1, R && !V.disabled && (N ? n || (Q = Xl !== Ml) : gl === this || (this.lastPutMode = vV.checkPull(this, R, u, l)) && c.checkPut(this, R, u, l))) {
      if (a = this._getDirection(l, d) === "vertical", Z = ol(u), G("dragOverValid"), g.eventCanceled) return M;
      if (Q)
        return Xl = Ml, J(), this._hideClone(), G("revert"), g.eventCanceled || (QF ? Ml.insertBefore(u, QF) : Ml.appendChild(u)), T(!0);
      var B = BN(U, V.draggable);
      if (!B || em(l, a, this) && !B.animated) {
        if (B === u)
          return T(!1);
        if (B && U === l.target && (d = B), d && (F = ol(d)), AV(Ml, U, u, Z, d, F, l, !!d) !== !1)
          return J(), B && B.nextSibling ? U.insertBefore(u, B.nextSibling) : U.appendChild(u), Xl = U, S(), T(!0);
      } else if (B && Bm(l, a, this)) {
        var Y = XQ(U, 0, V, !0);
        if (Y === u)
          return T(!1);
        if (d = Y, F = ol(d), AV(Ml, U, u, Z, d, F, l, !1) !== !1)
          return J(), U.insertBefore(u, Y), Xl = U, S(), T(!0);
      } else if (d.parentNode === U) {
        F = ol(d);
        var X = 0, e, o = u.parentNode !== U, y = !Gm(u.animated && u.toRect || Z, d.animated && d.toRect || F, a), O = a ? "top" : "left", E = cn(d, "top", "top") || cn(u, "top", "top"), ll = E ? E.scrollTop : void 0;
        s0 !== d && (e = F[O], lt = !1, PV = !y && V.invertSwap || o), X = um(l, d, F, a, y ? 1 : V.swapThreshold, V.invertedSwapThreshold == null ? V.swapThreshold : V.invertedSwapThreshold, PV, s0 === d);
        var z;
        if (X !== 0) {
          var C = jU(u);
          do
            C -= X, z = Xl.children[C];
          while (z && (r(z, "display") === "none" || z === P));
        }
        if (X === 0 || z === d)
          return T(!1);
        s0 = d, $Q = X;
        var v = d.nextElementSibling, A = !1;
        A = X === 1;
        var D = AV(Ml, U, u, Z, d, F, l, A);
        if (D !== !1)
          return (D === 1 || D === -1) && (A = D === 1), tN = !0, setTimeout(Ym, 30), J(), A && !v ? U.appendChild(u) : d.parentNode.insertBefore(u, A ? v : d), E && oa(E, 0, ll - E.scrollTop), Xl = u.parentNode, e !== void 0 && !PV && (YW = Math.abs(e - ol(d)[O])), S(), T(!0);
      }
      if (U.contains(u))
        return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Zl(document, "mousemove", this._onTouchMove), Zl(document, "touchmove", this._onTouchMove), Zl(document, "pointermove", this._onTouchMove), Zl(document, "dragover", UF), Zl(document, "mousemove", UF), Zl(document, "touchmove", UF);
  },
  _offUpEvents: function() {
    var l = this.el.ownerDocument;
    Zl(l, "mouseup", this._onDrop), Zl(l, "touchend", this._onDrop), Zl(l, "pointerup", this._onDrop), Zl(l, "touchcancel", this._onDrop), Zl(document, "selectstart", this);
  },
  _onDrop: function(l) {
    var U = this.el, d = this.options;
    if (eU = jU(u), YZ = jU(u, d.draggable), iU("drop", this, {
      evt: l
    }), Xl = u && u.parentNode, eU = jU(u), YZ = jU(u, d.draggable), g.eventCanceled) {
      this._nulling();
      return;
    }
    J0 = !1, PV = !1, lt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), VN(this.cloneId), VN(this._dragStartId), this.nativeDraggable && (Zl(document, "drop", this), Zl(U, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), AQ && r(document.body, "user-select", ""), r(u, "transform", ""), l && (KQ && (l.cancelable && l.preventDefault(), !d.dropBubble && l.stopPropagation()), P && P.parentNode && P.parentNode.removeChild(P), (Ml === Xl || gl && gl.lastPutMode !== "clone") && Jl && Jl.parentNode && Jl.parentNode.removeChild(Jl), u && (this.nativeDraggable && Zl(u, "dragend", this), kc(u), u.style["will-change"] = "", KQ && !J0 && BU(u, gl ? gl.options.ghostClass : this.options.ghostClass, !1), BU(u, this.options.chosenClass, !1), RU({
      sortable: this,
      name: "unchoose",
      toEl: Xl,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: l
    }), Ml !== Xl ? (eU >= 0 && (RU({
      rootEl: Xl,
      name: "add",
      toEl: Xl,
      fromEl: Ml,
      originalEvent: l
    }), RU({
      sortable: this,
      name: "remove",
      toEl: Xl,
      originalEvent: l
    }), RU({
      rootEl: Xl,
      name: "sort",
      toEl: Xl,
      fromEl: Ml,
      originalEvent: l
    }), RU({
      sortable: this,
      name: "sort",
      toEl: Xl,
      originalEvent: l
    })), gl && gl.save()) : eU !== G0 && eU >= 0 && (RU({
      sortable: this,
      name: "update",
      toEl: Xl,
      originalEvent: l
    }), RU({
      sortable: this,
      name: "sort",
      toEl: Xl,
      originalEvent: l
    })), g.active && ((eU == null || eU === -1) && (eU = G0, YZ = qQ), RU({
      sortable: this,
      name: "end",
      toEl: Xl,
      originalEvent: l
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    iU("nulling", this), Ml = u = Xl = P = QF = Jl = XW = eZ = lF = fU = KQ = eU = YZ = G0 = qQ = s0 = $Q = gl = vV = g.dragged = g.ghost = g.clone = g.active = null, wW.forEach(function(l) {
      l.checked = !0;
    }), wW.length = oc = zc = 0;
  },
  handleEvent: function(l) {
    switch (l.type) {
      case "drop":
      case "dragend":
        this._onDrop(l);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(l), Xm(l));
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
    for (var l = [], U, d = this.el.children, Z = 0, F = d.length, Q = this.options; Z < F; Z++)
      U = d[Z], Nd(U, Q.draggable, this.el, !1) && l.push(U.getAttribute(Q.dataIdAttr) || ym(U));
    return l;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(l, U) {
    var d = {}, Z = this.el;
    this.toArray().forEach(function(F, Q) {
      var V = Z.children[Q];
      Nd(V, this.options.draggable, Z, !1) && (d[F] = V);
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
    return Nd(l, U || this.options.draggable, this.el, !1);
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
    var Z = jV.modifyOption(this, l, U);
    typeof Z < "u" ? d[l] = Z : d[l] = U, l === "group" && Ia(d);
  },
  /**
   * Destroy
   */
  destroy: function() {
    iU("destroy", this);
    var l = this.el;
    l[CU] = null, Zl(l, "mousedown", this._onTapStart), Zl(l, "touchstart", this._onTapStart), Zl(l, "pointerdown", this._onTapStart), this.nativeDraggable && (Zl(l, "dragover", this), Zl(l, "dragenter", this)), Array.prototype.forEach.call(l.querySelectorAll("[draggable]"), function(U) {
      U.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), CW.splice(CW.indexOf(this.el), 1), this.el = l = null;
  },
  _hideClone: function() {
    if (!eZ) {
      if (iU("hideClone", this), g.eventCanceled) return;
      r(Jl, "display", "none"), this.options.removeCloneOnHide && Jl.parentNode && Jl.parentNode.removeChild(Jl), eZ = !0;
    }
  },
  _showClone: function(l) {
    if (l.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (eZ) {
      if (iU("showClone", this), g.eventCanceled) return;
      u.parentNode == Ml && !this.options.group.revertClone ? Ml.insertBefore(Jl, u) : QF ? Ml.insertBefore(Jl, QF) : Ml.appendChild(Jl), this.options.group.revertClone && this.animate(u, Jl), r(Jl, "display", ""), eZ = !1;
    }
  }
};
function Xm(W) {
  W.dataTransfer && (W.dataTransfer.dropEffect = "move"), W.cancelable && W.preventDefault();
}
function AV(W, l, U, d, Z, F, Q, V) {
  var c, R = W[CU], N = R.options.onMove, n;
  return window.CustomEvent && !JZ && !xV ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = l, c.from = W, c.dragged = U, c.draggedRect = d, c.related = Z || l, c.relatedRect = F || ol(l), c.willInsertAfter = V, c.originalEvent = Q, W.dispatchEvent(c), N && (n = N.call(R, c, Q)), n;
}
function kc(W) {
  W.draggable = !1;
}
function Ym() {
  tN = !1;
}
function Bm(W, l, U) {
  var d = ol(XQ(U.el, 0, U.options, !0)), Z = La(U.el, U.options, P), F = 10;
  return l ? W.clientX < Z.left - F || W.clientY < d.top && W.clientX < d.right : W.clientY < Z.top - F || W.clientY < d.bottom && W.clientX < d.left;
}
function em(W, l, U) {
  var d = ol(BN(U.el, U.options.draggable)), Z = La(U.el, U.options, P), F = 10;
  return l ? W.clientX > Z.right + F || W.clientY > d.bottom && W.clientX > d.left : W.clientY > Z.bottom + F || W.clientX > d.right && W.clientY > d.top;
}
function um(W, l, U, d, Z, F, Q, V) {
  var c = d ? W.clientY : W.clientX, R = d ? U.height : U.width, N = d ? U.top : U.left, n = d ? U.bottom : U.right, s = !1;
  if (!Q) {
    if (V && YW < R * Z) {
      if (!lt && ($Q === 1 ? c > N + R * F / 2 : c < n - R * F / 2) && (lt = !0), lt)
        s = !0;
      else if ($Q === 1 ? c < N + YW : c > n - YW)
        return -$Q;
    } else if (c > N + R * (1 - Z) / 2 && c < n - R * (1 - Z) / 2)
      return pm(l);
  }
  return s = s || Q, s && (c < N + R * F / 2 || c > n - R * F / 2) ? c > N + R / 2 ? 1 : -1 : 0;
}
function pm(W) {
  return jU(u) < jU(W) ? 1 : -1;
}
function ym(W) {
  for (var l = W.tagName + W.className + W.src + W.href + W.textContent, U = l.length, d = 0; U--; )
    d += l.charCodeAt(U);
  return d.toString(36);
}
function om(W) {
  wW.length = 0;
  for (var l = W.getElementsByTagName("input"), U = l.length; U--; ) {
    var d = l[U];
    d.checked && wW.push(d);
  }
}
function BW(W) {
  return setTimeout(W, 0);
}
function VN(W) {
  return clearTimeout(W);
}
Mc && Wl(document, "touchmove", function(W) {
  (g.active || J0) && W.cancelable && W.preventDefault();
});
g.utils = {
  on: Wl,
  off: Zl,
  css: r,
  find: pa,
  is: function(l, U) {
    return !!Nd(l, U, l, !1);
  },
  extend: sm,
  throttle: ya,
  closest: Nd,
  toggleClass: BU,
  clone: za,
  index: jU,
  nextTick: BW,
  cancelNextTick: VN,
  detectDirection: Da,
  getChild: XQ
};
g.get = function(W) {
  return W[CU];
};
g.mount = function() {
  for (var W = arguments.length, l = new Array(W), U = 0; U < W; U++)
    l[U] = arguments[U];
  l[0].constructor === Array && (l = l[0]), l.forEach(function(d) {
    if (!d.prototype || !d.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(d));
    d.utils && (g.utils = kd(kd({}, g.utils), d.utils)), jV.mount(d);
  });
};
g.create = function(W, l) {
  return new g(W, l);
};
g.version = Rm;
var yl = [], HQ, WN, cN = !1, Dc, Ic, xW, vQ;
function zm() {
  function W() {
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
  return W.prototype = {
    dragStarted: function(U) {
      var d = U.originalEvent;
      this.sortable.nativeDraggable ? Wl(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Wl(document, "pointermove", this._handleFallbackAutoScroll) : d.touches ? Wl(document, "touchmove", this._handleFallbackAutoScroll) : Wl(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(U) {
      var d = U.originalEvent;
      !this.options.dragOverBubble && !d.rootEl && this._handleAutoScroll(d);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Zl(document, "dragover", this._handleAutoScroll) : (Zl(document, "pointermove", this._handleFallbackAutoScroll), Zl(document, "touchmove", this._handleFallbackAutoScroll), Zl(document, "mousemove", this._handleFallbackAutoScroll)), an(), eW(), am();
    },
    nulling: function() {
      xW = WN = HQ = cN = vQ = Dc = Ic = null, yl.length = 0;
    },
    _handleFallbackAutoScroll: function(U) {
      this._handleAutoScroll(U, !0);
    },
    _handleAutoScroll: function(U, d) {
      var Z = this, F = (U.touches ? U.touches[0] : U).clientX, Q = (U.touches ? U.touches[0] : U).clientY, V = document.elementFromPoint(F, Q);
      if (xW = U, d || this.options.forceAutoScrollFallback || xV || JZ || AQ) {
        Ec(U, this.options, V, d);
        var c = fZ(V, !0);
        cN && (!vQ || F !== Dc || Q !== Ic) && (vQ && an(), vQ = setInterval(function() {
          var R = fZ(document.elementFromPoint(F, Q), !0);
          R !== c && (c = R, eW()), Ec(U, Z.options, R, d);
        }, 10), Dc = F, Ic = Q);
      } else {
        if (!this.options.bubbleScroll || fZ(V, !0) === yd()) {
          eW();
          return;
        }
        Ec(U, this.options, fZ(V, !1), !1);
      }
    }
  }, iZ(W, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function eW() {
  yl.forEach(function(W) {
    clearInterval(W.pid);
  }), yl = [];
}
function an() {
  clearInterval(vQ);
}
var Ec = ya(function(W, l, U, d) {
  if (l.scroll) {
    var Z = (W.touches ? W.touches[0] : W).clientX, F = (W.touches ? W.touches[0] : W).clientY, Q = l.scrollSensitivity, V = l.scrollSpeed, c = yd(), R = !1, N;
    WN !== U && (WN = U, eW(), HQ = l.scroll, N = l.scrollFn, HQ === !0 && (HQ = fZ(U, !0)));
    var n = 0, s = HQ;
    do {
      var a = s, b = ol(a), M = b.top, G = b.bottom, J = b.left, T = b.right, S = b.width, B = b.height, Y = void 0, X = void 0, e = a.scrollWidth, o = a.scrollHeight, y = r(a), O = a.scrollLeft, E = a.scrollTop;
      a === c ? (Y = S < e && (y.overflowX === "auto" || y.overflowX === "scroll" || y.overflowX === "visible"), X = B < o && (y.overflowY === "auto" || y.overflowY === "scroll" || y.overflowY === "visible")) : (Y = S < e && (y.overflowX === "auto" || y.overflowX === "scroll"), X = B < o && (y.overflowY === "auto" || y.overflowY === "scroll"));
      var ll = Y && (Math.abs(T - Z) <= Q && O + S < e) - (Math.abs(J - Z) <= Q && !!O), z = X && (Math.abs(G - F) <= Q && E + B < o) - (Math.abs(M - F) <= Q && !!E);
      if (!yl[n])
        for (var C = 0; C <= n; C++)
          yl[C] || (yl[C] = {});
      (yl[n].vx != ll || yl[n].vy != z || yl[n].el !== a) && (yl[n].el = a, yl[n].vx = ll, yl[n].vy = z, clearInterval(yl[n].pid), (ll != 0 || z != 0) && (R = !0, yl[n].pid = setInterval((function() {
        d && this.layer === 0 && g.active._onTouchMove(xW);
        var v = yl[this.layer].vy ? yl[this.layer].vy * V : 0, A = yl[this.layer].vx ? yl[this.layer].vx * V : 0;
        typeof N == "function" && N.call(g.dragged.parentNode[CU], A, v, W, xW, yl[this.layer].el) !== "continue" || oa(yl[this.layer].el, A, v);
      }).bind({
        layer: n
      }), 24))), n++;
    } while (l.bubbleScroll && s !== c && (s = fZ(s, !1)));
    cN = R;
  }
}, 30), wa = function(l) {
  var U = l.originalEvent, d = l.putSortable, Z = l.dragEl, F = l.activeSortable, Q = l.dispatchSortableEvent, V = l.hideGhostForTarget, c = l.unhideGhostForTarget;
  if (U) {
    var R = d || F;
    V();
    var N = U.changedTouches && U.changedTouches.length ? U.changedTouches[0] : U, n = document.elementFromPoint(N.clientX, N.clientY);
    c(), R && !R.el.contains(n) && (Q("spill"), this.onSpill({
      dragEl: Z,
      putSortable: d
    }));
  }
};
function eN() {
}
eN.prototype = {
  startIndex: null,
  dragStart: function(l) {
    var U = l.oldDraggableIndex;
    this.startIndex = U;
  },
  onSpill: function(l) {
    var U = l.dragEl, d = l.putSortable;
    this.sortable.captureAnimationState(), d && d.captureAnimationState();
    var Z = XQ(this.sortable.el, this.startIndex, this.options);
    Z ? this.sortable.el.insertBefore(U, Z) : this.sortable.el.appendChild(U), this.sortable.animateAll(), d && d.animateAll();
  },
  drop: wa
};
iZ(eN, {
  pluginName: "revertOnSpill"
});
function uN() {
}
uN.prototype = {
  onSpill: function(l) {
    var U = l.dragEl, d = l.putSortable, Z = d || this.sortable;
    Z.captureAnimationState(), U.parentNode && U.parentNode.removeChild(U), Z.animateAll();
  },
  drop: wa
};
iZ(uN, {
  pluginName: "removeOnSpill"
});
g.mount(new zm());
g.mount(uN, eN);
const xa = "[vue-draggable-plus]: ";
function Lm(W) {
  console.warn(xa + W);
}
function km(W) {
  console.error(xa + W);
}
function bn(W, l, U) {
  return U >= 0 && U < W.length && W.splice(U, 0, W.splice(l, 1)[0]), W;
}
function hn(W, l) {
  return Array.isArray(W) && W.splice(l, 1), W;
}
function mn(W, l, U) {
  return Array.isArray(W) && W.splice(l, 0, U), W;
}
function Dm(W) {
  return typeof W > "u";
}
function Im(W) {
  return typeof W == "string";
}
function Mn(W, l, U) {
  const d = W.children[U];
  W.insertBefore(l, d);
}
function Cc(W) {
  W.parentNode && W.parentNode.removeChild(W);
}
function Em(W, l = document) {
  var d;
  let U = null;
  return typeof (l == null ? void 0 : l.querySelector) == "function" ? U = (d = l == null ? void 0 : l.querySelector) == null ? void 0 : d.call(l, W) : U = document.querySelector(W), U || Lm(`Element not found: ${W}`), U;
}
function Cm(W, l, U = null) {
  return function(...d) {
    return W.apply(U, d), l.apply(U, d);
  };
}
function wm(W, l) {
  const U = { ...W };
  return Object.keys(l).forEach((d) => {
    U[d] ? U[d] = Cm(W[d], l[d]) : U[d] = l[d];
  }), U;
}
function xm(W) {
  return W instanceof HTMLElement;
}
function jm(W, l) {
  Object.keys(W).forEach((U) => {
    l(U, W[U]);
  });
}
function Om(W) {
  return W == null ? W : JSON.parse(JSON.stringify(W));
}
function rm(W) {
  aN() && Pa(W);
}
function gm(W) {
  aN() ? nN(W) : fa(W);
}
const Jn = Symbol("cloneElement");
function Km(...W) {
  var B;
  const l = (B = aN()) == null ? void 0 : B.proxy, U = W[0];
  let [, d, Z] = W;
  Array.isArray(rl(d)) || (Z = d, d = null);
  let F = null;
  const {
    immediate: Q = !0,
    clone: V = Om,
    customUpdate: c
  } = rl(Z) ?? {};
  function R(Y) {
    var X;
    Y.item[Jn] = V(rl((X = rl(d)) == null ? void 0 : X[Y.oldIndex]));
  }
  function N(Y) {
    const X = Y.item[Jn];
    if (!Dm(X)) {
      if (Cc(Y.item), Gc(d)) {
        const e = [...rl(d)];
        d.value = mn(e, Y.newDraggableIndex, X);
        return;
      }
      mn(rl(d), Y.newDraggableIndex, X);
    }
  }
  function n(Y) {
    const { from: X, item: e, oldIndex: o, oldDraggableIndex: y, pullMode: O, clone: E } = Y;
    if (Mn(X, e, o), O === "clone") {
      Cc(E);
      return;
    }
    if (Gc(d)) {
      const ll = [...rl(d)];
      d.value = hn(ll, y);
      return;
    }
    hn(rl(d), y);
  }
  function s(Y) {
    if (c) {
      c(Y);
      return;
    }
    const { from: X, item: e, oldIndex: o, newIndex: y } = Y;
    if (Cc(e), Mn(X, e, o), Gc(d)) {
      const O = [...rl(d)];
      d.value = bn(O, o, y);
      return;
    }
    bn(rl(d), o, y);
  }
  const a = {
    onUpdate: s,
    onStart: R,
    onAdd: N,
    onRemove: n
  };
  function b(Y) {
    const X = rl(U);
    return Y || (Y = Im(X) ? Em(X, l == null ? void 0 : l.$el) : X), Y && !xm(Y) && (Y = Y.$el), Y || km("Root element not found"), Y;
  }
  function M() {
    const { immediate: Y, clone: X, ...e } = rl(Z) ?? {};
    return wm(
      d === null ? {} : a,
      e
    );
  }
  const G = (Y) => {
    Y = b(Y), F && J.destroy(), F = new g(Y, M());
  };
  Z0(
    () => Z,
    () => {
      F && jm(M(), (Y, X) => {
        F == null || F.option(Y, X);
      });
    },
    { deep: !0 }
  );
  const J = {
    option: (Y, X) => F == null ? void 0 : F.option(Y, X),
    destroy: () => {
      F == null || F.destroy(), F = null;
    },
    save: () => F == null ? void 0 : F.save(),
    toArray: () => F == null ? void 0 : F.toArray(),
    closest: (...Y) => F == null ? void 0 : F.closest(...Y)
  }, T = () => J == null ? void 0 : J.option("disabled", !0), S = () => J == null ? void 0 : J.option("disabled", !1);
  return gm(() => {
    Q && G();
  }), rm(J.destroy), { start: G, pause: T, resume: S, ...J };
}
const RN = ["update", "start", "add", "remove", "choose", "unchoose", "end", "sort", "filter", "clone", "move", "change"], Hm = ["modelValue", "column", "row", "gap", "itemHeight", "itemWidth", "disabled", ...RN.map((W) => `on${W.replace(/^\S/, (l) => l.toUpperCase())}`)], $m = /* @__PURE__ */ YQ({
  name: "DList",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Hm,
  emits: ["update:modelValue", ...RN],
  setup(W, {
    slots: l,
    emit: U,
    expose: d,
    attrs: Z
  }) {
    const F = RN.reduce((a, b) => {
      const M = `on${b.replace(/^\S/, (G) => G.toUpperCase())}`;
      return a[M] = (...G) => U(b, ...G), a;
    }, {}), Q = ql(() => {
      const {
        modelValue: a,
        ...b
      } = tc(W), M = Object.entries(b).reduce((G, [J, T]) => {
        const S = rl(T);
        return S !== void 0 && (G[J] = J === "disabled" && S === "" ? !0 : S), G;
      }, {});
      return {
        ...F,
        ...Vc({
          ...Z,
          ...M
        })
      };
    });
    console.log(Q);
    const {
      resizeRef: V,
      contentRect: c
    } = bN(), R = ql({
      get: () => W.modelValue,
      set: (a) => U("update:modelValue", a)
    }), N = ql(() => {
      var G;
      const a = [Q.value.itemWidth ? Xb(Q.value.itemWidth, ((G = c.value) == null ? void 0 : G.width) || 400) : Q.value.column || 4, Q.value.itemWidth ? Q.value.itemWidth : "1fr"], b = Q.value.itemHeight || Q.value.row ? (100 / Q.value.row).toFixed(2) + "%" : "25%", M = Q.value.gap || 0;
      return {
        "grid-template-columns": `repeat(${a[0]},${a[1]})`,
        "grid-auto-rows": b,
        gap: M
      };
    }), n = Sl(), s = sN(Km(n, R, Q));
    return d(s), () => cl("div", {
      ref: V,
      class: "d-list"
    }, [cl("div", {
      class: "d-list__content",
      style: N.value,
      ref: n
    }, [R.value.map((a, b) => {
      var M;
      return cl("div", {
        class: {
          move: !Q.value.disabled
        }
      }, [((M = l.default) == null ? void 0 : M.call(l, {
        item: a,
        index: b
      })) || cl("div", {
        class: "list__content__item"
      }, [a])]);
    })])]);
  }
});
export {
  qm as DAuthority,
  _m as DImg,
  $m as DList,
  Am as DViewer,
  tm as authorityProps,
  QN as imgEmits,
  Qm as imgProps,
  RN as listEmits,
  Hm as listProps,
  FN as viewerEmits,
  Fm as viewerProps
};