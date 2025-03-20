import {
  MultiPath,
  Path,
  color_default,
  drawing_exports,
  exportImage,
  geometry_exports,
  group_default,
  image_default,
  parseColor,
  surface_default
} from "./chunk-FMZKDQ4H.js";
import {
  I as I2
} from "./chunk-M2R6BCBQ.js";
import {
  A2 as A,
  D,
  E,
  E2,
  E3,
  F,
  I,
  J,
  K,
  K3 as K2,
  M2 as M,
  O,
  P,
  P2,
  R,
  T2 as T,
  W,
  a2 as a,
  a3 as a2,
  a4 as a3,
  a5 as a4,
  c,
  cancelIcon,
  caretAltDownIcon,
  caretAltExpandIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltUpIcon,
  checkIcon,
  d,
  dropletSlashIcon,
  dropletSliderIcon,
  e,
  e2,
  e3,
  e4,
  e7 as e5,
  e8 as e6,
  g,
  g2,
  h,
  h2,
  hyperlinkOpenIcon,
  i,
  i2,
  i4 as i3,
  i5 as i4,
  insertBottomIcon,
  insertMiddleIcon,
  insertTopIcon,
  itemIdUtils_exports,
  j,
  j3 as j2,
  l2 as l,
  l3 as l2,
  n,
  n2,
  n3,
  n4,
  n5,
  o3 as o,
  o4 as o2,
  o5 as o3,
  o7 as o4,
  p,
  p3 as p2,
  paletteIcon,
  plusIcon,
  r,
  require_prop_types,
  s10 as s7,
  s2 as s,
  s3 as s2,
  s5 as s3,
  s6 as s4,
  s8 as s5,
  s9 as s6,
  searchIcon,
  starIcon,
  starOutlineIcon,
  t,
  t2,
  t7 as t3,
  te,
  u,
  u2,
  v,
  v2,
  v3,
  w,
  windowIcon,
  windowMinimizeIcon,
  windowRestoreIcon,
  x,
  xIcon,
  y,
  z,
  ze
} from "./chunk-ZRWBHFCZ.js";
import {
  require_react_dom
} from "./chunk-6IW3YP4A.js";
import {
  __toESM,
  require_react
} from "./chunk-N3BBKUNS.js";

// node_modules/@progress/kendo-react-dropdowns/DropDownList/DropDownList.mjs
var i20 = __toESM(require_react(), 1);
var import_prop_types25 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/ListContainer.mjs
var p3 = __toESM(require_react(), 1);
var a5 = (e32) => {
  const { children: o21, width: n27, dir: i24, itemsCount: t25, popupSettings: r16 } = e32;
  return p3.createElement(
    te,
    {
      style: { width: n27, direction: i24 },
      contentKey: t25 && t25.join(),
      ...r16
    },
    o21
  );
};

// node_modules/@progress/kendo-react-dropdowns/common/ListFilter.mjs
var n20 = __toESM(require_react(), 1);
var import_prop_types23 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/colors/ColorInput.mjs
var t6 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-inputs/numerictextbox/NumericTextBox.mjs
var n7 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/messages/index.mjs
var o5 = "numerictextbox.increment";
var e7 = "numerictextbox.decrement";
var t4 = "slider.increment";
var r2 = "slider.decrement";
var a6 = "slider.dragTitle";
var l3 = "colorGradient.r";
var n6 = "colorGradient.g";
var i5 = "colorGradient.b";
var c2 = "colorGradient.a";
var s8 = "colorGradient.hex";
var d2 = "colorGradient.contrastRatio";
var G = "colorGradient.colorGradientAALevel";
var u3 = "colorGradient.colorGradientAAALevel";
var p4 = "colorGradient.colorGradientPass";
var A2 = "colorGradient.colorGradientFail";
var C = "colorGradient.hueSliderLabel";
var P3 = "colorGradient.alphaSliderLabel";
var g3 = "colorGradient.toggleInputsButton";
var k = "flatColorPicker.cancelBtn";
var x2 = "flatColorPicker.applyBtn";
var b = "flatColorPicker.colorGradientBtn";
var m = "flatColorPicker.colorPaletteBtn";
var B = "flatColorPicker.clearBtn";
var h3 = "colorPicker.adaptiveTitle";
var v4 = "checkbox.validation";
var f = "checkbox.optionalText";
var L = "radioButton.validation";
var w2 = "switch.validation";
var T2 = "colorPicker.dropdownButtonAriaLabel";
var D2 = "rating.ariaLabel";
var V = "signature.clear";
var y2 = "signature.maximize";
var z2 = "signature.minimize";
var I3 = {
  [o5]: "Increase value",
  [e7]: "Decrease value",
  [t4]: "Increase",
  [r2]: "Decrease",
  [a6]: "Drag",
  [l3]: "r",
  [n6]: "g",
  [i5]: "b",
  [c2]: "a",
  [s8]: "hex",
  [d2]: "Contrast ratio",
  [G]: "AA",
  [u3]: "AAA",
  [p4]: "Pass",
  [A2]: "Fail",
  [C]: "Hue slider",
  [P3]: "Alpha slider",
  [g3]: "Toggle colorgradient inputs",
  [k]: "Cancel",
  [x2]: "Apply",
  [b]: "Color Gradient view",
  [m]: "Color Palette view",
  [B]: "Clear color value",
  [h3]: "Choose color",
  [v4]: "Please check this box if you want to proceed!",
  [f]: "(Optional)",
  [L]: "Please select option if you want to proceed!",
  [w2]: "Please turn on if you want to proceed!",
  [T2]: "Select",
  [D2]: "Rating",
  [V]: "Clear",
  [y2]: "Maximize",
  [z2]: "Minimize"
};

// node_modules/@progress/kendo-react-inputs/numerictextbox/utils/index.mjs
var M2 = 11111111111111e-7;
var ae = 0.31111111111111117;
var de = 1;
var Y = 1;
var w3 = 0;
var m2 = /\d/;
var ee = 15;
var Ie = () => ({
  eventValue: null,
  prevLooseValue: "",
  currentLooseValue: "",
  focused: false,
  selectionStart: void 0,
  selectionEnd: void 0,
  decimalSelect: false,
  valueIsCorrected: false,
  valueIsOutOfRange: false
});
var Ne = (t25, n27) => t25 !== void 0 ? t25 : n27;
var p5 = (t25, n27, r16) => t25 === null && t25 === void 0 ? "" : typeof t25 == "string" ? t25 : r16.formatNumber(t25, n27);
var J2 = (t25) => (String(t25).split(".")[1] || "").length;
var ne = (t25, n27) => Math.max(J2(t25), J2(n27));
var ge = (t25) => Math.min(t25, ee);
var te2 = (t25, n27) => {
  const r16 = ge(n27);
  return parseFloat(t25.toFixed(r16));
};
var Ce = (t25, n27, r16, e32, u17, o21, a37) => {
  const s26 = ne(t25 || 0, r16 || 0), l16 = re(te2((t25 || 0) + (r16 || 0), s26), e32, u17);
  n27.eventValue = l16, n27.currentLooseValue = p5(l16, o21, a37), n27.selectionStart = n27.selectionEnd = O2(n27.currentLooseValue, m2);
};
var Ee = (t25, n27, r16, e32, u17, o21, a37) => {
  const s26 = ne(t25 || 0, r16 || 0), l16 = re(te2((t25 || 0) - (r16 || 0), s26), e32, u17);
  n27.eventValue = l16, n27.currentLooseValue = p5(l16, o21, a37), n27.selectionStart = n27.selectionEnd = O2(n27.currentLooseValue, m2);
};
var re = (t25, n27, r16) => t25 == null ? t25 : !(t25 > 1 || t25 < 1 || t25 === 1) || r16 !== void 0 && n27 !== void 0 && r16 < n27 ? null : (r16 !== void 0 && t25 > r16 && (t25 = r16), n27 !== void 0 && t25 < n27 && (t25 = n27), t25);
var fe = (t25, n27) => {
  const r16 = n27.findIndex(([u17, o21]) => !!o21 && t25.indexOf(o21) === t25.length - o21.length);
  if (r16 === -1)
    return -1;
  const e32 = n27[r16][1];
  return t25.length - e32.length;
};
var me = (t25, n27) => {
  const r16 = n27.findIndex(([u17, o21]) => !!u17 && t25.indexOf(u17) === 0);
  return r16 === -1 ? -1 : n27[r16][0].length;
};
var Ve = (t25, n27, r16) => {
  const e32 = fe(t25, n27);
  if (e32 !== -1 && r16.selectionStart > e32) {
    r16.selectionStart = r16.selectionEnd = e32;
    return;
  }
  r16.selectionStart > t25.length && (r16.selectionStart = r16.selectionEnd = t25.length);
  const u17 = me(t25, n27);
  u17 !== -1 && r16.selectionStart < u17 && (r16.selectionStart = r16.selectionEnd = u17), r16.selectionStart === -1 && (r16.selectionStart = r16.selectionEnd = 0);
};
var L2 = (t25, n27, r16, e32) => {
  t25.selectionStart = t25.selectionEnd = n27, Ve(r16, e32, t25);
};
var A3 = (t25, n27, r16, e32) => {
  t25.eventValue = e32.parseNumber(t25.prevLooseValue, n27), t25.currentLooseValue = t25.prevLooseValue, t25.valueIsCorrected = true, L2(t25, t25.selectionStart, t25.currentLooseValue, r16);
};
var _ = (t25, n27, r16) => n27.split(t25).length !== r16.split(t25).length && n27.length === r16.length + t25.length;
var pe = (t25, n27) => {
  const r16 = String(t25.currentLooseValue), e32 = String(t25.prevLooseValue);
  return _(n27.minusSign, r16, e32) || _("-", r16, e32) || _("−", r16, e32);
};
var xe = (t25, n27) => {
  const r16 = String(t25.currentLooseValue), e32 = String(t25.prevLooseValue);
  return r16.indexOf(n27.minusSign) === -1 && e32.indexOf(n27.minusSign) !== -1;
};
var Le = (t25, n27) => String(t25.currentLooseValue).split(n27.decimal).length > 2;
var be = (t25, n27) => {
  const r16 = n27.formatNumber(M2, t25), e32 = n27.formatNumber(-M2, t25), u17 = n27.formatNumber(w3, t25), o21 = n27.formatNumber(Y, t25), a37 = D3(r16), s26 = D3(e32), l16 = D3(u17), i24 = D3(o21), N4 = P4(r16), C7 = P4(e32), x8 = P4(u17), b8 = P4(o21);
  return {
    positiveInfo: [a37, N4],
    negativeInfo: [s26, C7],
    zeroInfo: [l16, x8],
    oneInfo: [i24, b8]
  };
};
var he = (t25, n27) => {
  const r16 = n27.formatNumber(M2, t25), e32 = n27.formatNumber(-M2, t25), u17 = n27.formatNumber(w3, t25), o21 = n27.formatNumber(Y, t25), a37 = n27.numberSymbols(), s26 = new RegExp(`[\\d\\${a37.decimal}${a37.group}]`, "g");
  return [r16, e32, u17, o21].map((i24) => i24.replace(s26, "")).join("").split("").filter((i24, N4, C7) => C7.indexOf(i24) === N4).join("");
};
var B2 = (t25, n27) => {
  const r16 = t25.indexOf(n27.decimal);
  return r16 > -1 ? r16 : O2(t25, m2);
};
var T3 = (t25) => t25.split("").reverse().join("");
var O2 = (t25, n27) => t25.length - T3(t25).search(n27);
var D3 = (t25) => t25.split(t25[t25.search(m2)])[0];
var P4 = (t25) => {
  const n27 = T3(t25);
  return T3(n27.split(n27[n27.search(m2)])[0]);
};
var $ = (t25, n27) => t25.search(n27);
var K3 = (t25, n27) => {
  const r16 = t25.indexOf(n27);
  return r16 > -1 ? t25.length - r16 - 1 : 0;
};
var Q = (t25, n27, r16, e32, u17) => {
  const o21 = t25.replace(u17, "")[0] === "0", a37 = n27.replace(u17, "")[0] === "0";
  if (o21 && !a37)
    return r16 - 1;
  if (a37 && e32)
    return r16 + 1;
  let s26 = 0;
  for (let i24 = 0; i24 < r16; i24++)
    m2.test(t25.charAt(i24)) && s26++;
  let l16 = 0;
  for (; s26 > 0 && n27.length > l16; )
    m2.test(n27.charAt(l16)) && s26--, l16++;
  return l16;
};
var Oe = (t25, n27, r16) => {
  const e32 = { ...t25 }, { prevLooseValue: u17 } = e32, o21 = r16.numberSymbols(), a37 = he(n27, r16), s26 = String(e32.currentLooseValue), l16 = String(u17), i24 = new RegExp(`[^\\d\\${o21.decimal}]`, "g"), N4 = new RegExp(`[^\\d\\${o21.decimal}\\${o21.group}]`, "g"), C7 = new RegExp(`[\\d\\${o21.decimal}\\${o21.group}]`), x8 = s26.replace(i24, ""), b8 = $(s26, m2), E8 = b8 === -1 ? -1 : O2(s26, m2), oe = s26.indexOf(o21.decimal), G6 = (s26.substring(0, b8) + s26.substring(b8, E8).replace(N4, "") + s26.substring(E8, s26.length)).split("").filter((V3) => a37.indexOf(V3) !== -1 || V3.search(C7) !== -1).join(""), S5 = r16.formatNumber(ae, n27).replace(i24, ""), U2 = S5.indexOf(o21.decimal), I11 = U2 > -1 ? S5.length - U2 - 1 : 0, j4 = r16.formatNumber(de, n27).replace(i24, ""), X = j4.indexOf(o21.decimal), R5 = X > -1 ? j4.length - X - 1 : 0, { positiveInfo: se5, negativeInfo: ue, zeroInfo: ce, oneInfo: le4 } = be(n27, r16), g9 = [se5, ue, ce, le4], ie3 = g9.findIndex((V3) => V3.findIndex((h16) => !!h16) !== -1) !== 1, v14 = s26.length > 0 && s26.length < l16.length, Z2 = typeof n27 == "string" && n27[0] === "p" && s26 && s26.indexOf(o21.percentSign) === -1;
  if (!e32.isPaste) {
    if (s26 === "")
      return e32.eventValue = null, e32.currentLooseValue = "", e32;
    if (e32.currentLooseValue === o21.minusSign && r16.formatNumber(-0, n27) !== l16)
      return e32.eventValue = -0, e32.currentLooseValue = p5(e32.eventValue, n27, r16), L2(
        e32,
        B2(e32.currentLooseValue, o21),
        e32.currentLooseValue,
        g9
      ), e32;
    if (e32.currentLooseValue === o21.decimal) {
      e32.eventValue = 0;
      const f13 = p5(e32.eventValue, n27, r16);
      if (R5 === 0 && I11 > 0) {
        const c16 = O2(f13, m2);
        e32.currentLooseValue = f13.substring(0, c16) + o21.decimal + f13.substring(c16);
      } else
        e32.currentLooseValue = f13;
      return L2(
        e32,
        B2(e32.currentLooseValue, o21) + 1,
        e32.currentLooseValue,
        g9
      ), e32;
    }
    if (pe(e32, o21)) {
      const f13 = r16.parseNumber(u17, n27);
      e32.eventValue = -(f13 !== null ? f13 : 0), e32.currentLooseValue = p5(e32.eventValue, n27, r16);
      const c16 = $(e32.currentLooseValue, m2), d10 = $(l16, m2);
      return L2(
        e32,
        e32.selectionEnd - 1 + (c16 - d10),
        e32.currentLooseValue,
        g9
      ), e32;
    }
    if (xe(e32, o21))
      return e32.eventValue = r16.parseNumber(e32.currentLooseValue, n27), L2(e32, e32.selectionStart, e32.currentLooseValue, g9), e32;
    if (Le(e32, o21))
      return A3(e32, n27, g9, r16), e32;
    if (Z2)
      return e32.eventValue = r16.parseNumber(s26, n27) / 100, e32.currentLooseValue = p5(e32.eventValue, n27, r16), e32;
    if (String(e32.currentLooseValue).replace(/[^\d]/g, "").length > ee || x8 !== s26 && s26 && ie3 && g9.findIndex(([c16, d10]) => {
      const F8 = s26.indexOf(c16), z5 = s26.indexOf(d10), W4 = F8 === 0, k8 = z5 === s26.length - d10.length, q3 = F8 + c16.length !== b8 && b8 !== -1 && s26[F8 + c16.length] !== o21.decimal, H3 = z5 !== E8 && E8 !== -1 && s26[z5 - 1] !== o21.decimal;
      return c16 && d10 ? q3 || H3 ? false : W4 && k8 : c16 ? q3 ? false : W4 : d10 ? H3 ? false : k8 : false;
    }) === -1)
      return A3(e32, n27, g9, r16), e32;
    if (x8[x8.length - 1] === o21.decimal && I11 > 0)
      return e32.eventValue = r16.parseNumber(s26, n27), e32.currentLooseValue = G6, e32;
    if (e32.currentLooseValue && u17 && (a37 + o21.decimal + o21.group).split("").findIndex((c16) => s26.split("").filter((d10) => d10 === c16).length < l16.split("").filter((d10) => d10 === c16).length && s26.length + 1 === l16.length ? !(c16 === o21.decimal && K3(l16.replace(i24, ""), o21.decimal) === 0) : false) > -1)
      return e32.eventValue = r16.parseNumber(t25.prevLooseValue, n27), e32.currentLooseValue = t25.prevLooseValue, e32;
    const h16 = K3(x8, o21.decimal), y11 = x8[x8.length - 1] === "0";
    if (v14 && y11 && h16 < R5)
      return e32.eventValue = r16.parseNumber(e32.currentLooseValue, n27), e32.currentLooseValue = p5(e32.eventValue, n27, r16), e32;
    if (h16 > 0) {
      const f13 = s26.substring(0, oe);
      if (y11 && (!f13 || l16.indexOf(f13) !== 0)) {
        e32.eventValue = r16.parseNumber(e32.currentLooseValue, n27);
        const c16 = p5(e32.eventValue, n27, r16);
        return L2(
          e32,
          Q(
            s26,
            c16,
            e32.selectionEnd,
            v14,
            i24
          ),
          c16,
          g9
        ), e32.currentLooseValue = c16, e32;
      }
      if (h16 > I11) {
        const c16 = s26.indexOf(o21.decimal), d10 = s26.substring(0, c16) + s26.substring(c16, c16 + 1 + I11) + s26.substring(E8, String(e32.currentLooseValue).length);
        return e32.eventValue = r16.parseNumber(d10, n27), e32.currentLooseValue = d10, L2(e32, e32.selectionStart, d10, g9), e32;
      }
      if (R5 !== I11 && h16 <= I11 && y11)
        return e32.eventValue = r16.parseNumber(e32.currentLooseValue, n27), e32.currentLooseValue = G6, e32;
      if (h16 < R5)
        return e32.eventValue = r16.parseNumber(e32.currentLooseValue, n27), e32.currentLooseValue = p5(e32.eventValue, n27, r16), e32;
    }
  }
  if (e32.eventValue = r16.parseNumber(e32.currentLooseValue, n27), Z2 && (e32.eventValue = e32.eventValue / 100), typeof e32.eventValue == "number") {
    const V3 = p5(e32.eventValue, n27, r16);
    s26.length === 1 ? L2(e32, B2(V3, o21), V3, g9) : L2(
      e32,
      Q(
        s26,
        V3,
        e32.selectionEnd,
        v14,
        i24
      ),
      V3,
      g9
    ), e32.currentLooseValue = V3;
  } else
    e32.currentLooseValue = p5(r16.parseNumber(x8), n27, r16);
  return e32;
};

// node_modules/@progress/kendo-react-inputs/numerictextbox/NumericTextBox.mjs
var it = "Please enter a valid value!";
var ct = a();
var Ee2 = n7.forwardRef(
  (C7, Se) => {
    const G6 = n4(
      ct,
      C7
    ), {
      className: xe2,
      value: b8,
      defaultValue: he3,
      format: l16,
      width: Z2,
      tabIndex: Ie2,
      accessKey: Oe3,
      title: Le3,
      placeholder: ee4,
      min: c16,
      max: d10,
      dir: te5,
      name: j4,
      label: I11,
      id: Pe,
      ariaDescribedBy: Ne3,
      ariaLabelledBy: De,
      ariaLabel: Re2,
      inputType: Fe,
      readOnly: g9,
      validationMessage: _4,
      children: Be,
      // Removed to support direct use in Form Field component
      touched: dt2,
      visited: mt,
      modified: ft,
      style: ne3,
      inputStyle: Me2,
      valid: H3,
      step: v14 = o6.step,
      spinners: Te3 = o6.spinners,
      disabled: u17 = o6.disabled,
      required: O6 = o6.required,
      validityStyles: re3 = o6.validityStyles,
      prefix: ze3 = o6.prefix,
      suffix: qe2 = o6.suffix,
      onChange: E8 = o6.onChange,
      onFocus: ae3 = o6.onFocus,
      onBlur: le4 = o6.onBlur,
      rangeOnEnter: se5 = o6.rangeOnEnter,
      size: K5 = o6.size,
      rounded: w11 = o6.rounded,
      fillMode: L8 = o6.fillMode,
      autoFocus: Ae2 = o6.autoFocus,
      inputAttributes: Ge2,
      ...ue
    } = G6, je = I(), oe = Pe || je, s26 = i3(), P10 = i4(), a37 = n7.useRef(null), N4 = n7.useRef(), [_e, S5] = n7.useState(false), i24 = n7.useRef(Ie()), D8 = n7.useRef(false), U2 = n7.useRef(), x8 = n7.useRef(he3), h16 = p5(
      i24.current.focused && !u17 ? i24.current.currentLooseValue : Ne(b8, x8.current),
      l16,
      s26
    );
    U2.current = h16;
    const [He] = s5(ze3), [Ke] = s5(qe2);
    n7.useEffect(() => {
      a37.current && a37.current.setCustomValidity && a37.current.setCustomValidity(
        B6().valid ? "" : _4 || it
      );
    });
    const ie3 = n7.useCallback(() => {
      a37.current && a37.current.focus();
    }, []), R5 = n7.useCallback(() => N4.current !== void 0 ? N4.current : Ne(b8, x8.current), [b8]), ce = n7.useCallback(() => j4, [j4]), F8 = n7.useCallback(() => O6, [O6]), B6 = n7.useCallback(() => {
      const r16 = _4 !== void 0, e32 = R5(), V3 = H3 !== void 0 ? H3 : !i24.current.valueIsOutOfRange && (!F8() || e32 != null);
      return {
        customError: r16,
        valid: V3,
        valueMissing: e32 == null
      };
    }, [_4, H3, R5, F8]), $6 = n7.useCallback(() => re3, [re3]), de3 = n7.useCallback(() => G6, [G6]), y11 = n7.useCallback(() => {
      const r16 = {
        element: a37.current,
        focus: ie3
      };
      return Object.defineProperty(r16, "name", { get: ce }), Object.defineProperty(r16, "value", { get: R5 }), Object.defineProperty(r16, "validity", { get: B6 }), Object.defineProperty(r16, "validityStyles", { get: $6 }), Object.defineProperty(r16, "required", { get: F8 }), Object.defineProperty(r16, "props", { get: de3 }), r16;
    }, [ce, R5, B6, $6, F8, ie3, de3]);
    n7.useImperativeHandle(Se, y11);
    const f13 = n7.useCallback(() => ({
      eventValue: Ne(b8, x8.current),
      prevLooseValue: U2.current,
      currentLooseValue: a37.current.value,
      selectionStart: a37.current.selectionStart,
      selectionEnd: a37.current.selectionEnd,
      decimalSelect: false,
      valueIsCorrected: false,
      valueIsOutOfRange: false,
      isPaste: D8.current,
      focused: i24.current.focused
    }), [b8]), p18 = n7.useCallback(
      (r16, e32) => {
        if (u17)
          return;
        N4.current = e32.eventValue, x8.current = e32.eventValue;
        const V3 = p5(re(e32.eventValue, c16, d10), l16, s26), m11 = re(s26.parseNumber(V3, l16), c16, d10);
        m11 !== e32.eventValue && (e32.valueIsOutOfRange = true, e32.eventValue = m11, x8.current = m11), b8 !== e32.eventValue && v2(E8, r16, y11(), {
          value: e32.eventValue
        }), N4.current = void 0, i24.current = e32, S5((J3) => !J3);
      },
      [b8, E8, u17, S5, y11]
    ), we = n7.useCallback(
      (r16) => {
        const e32 = f13();
        D8.current = false, p18(r16, Oe(e32, l16, s26));
      },
      [l16, E8, s26, p18, f13]
    ), Ue = n7.useCallback(
      (r16) => {
        let e32 = f13();
        const V3 = s26.parseNumber(String(e32.currentLooseValue), l16);
        if (e32.selectionEnd > e32.selectionStart && e32.selectionEnd - e32.selectionStart === String(e32.currentLooseValue).length) {
          const m11 = s26.numberSymbols(), k8 = m11 && r16.key === m11.minusSign, J3 = m11 && r16.key === m11.decimal;
          D8.current = !k8 && !J3;
          return;
        }
        switch (r16.keyCode) {
          case 38:
            Ce(V3, e32, v14, c16, d10, l16, s26);
            break;
          case 40:
            Ee(V3, e32, v14, c16, d10, l16, s26);
            break;
          case 13: {
            if (se5 === false)
              return;
            const m11 = p5(re(V3, c16, d10), l16, s26), k8 = re(s26.parseNumber(m11, l16), c16, d10);
            e32.eventValue = k8, e32.currentLooseValue = p5(k8, l16, s26), e32.selectionStart = e32.selectionEnd = e32.currentLooseValue.length;
            break;
          }
          case 110: {
            const m11 = a37.current, k8 = s26.numberSymbols();
            m11 && (e32.currentLooseValue = e32.currentLooseValue.slice(0, e32.selectionStart) + k8.decimal + e32.currentLooseValue.slice(e32.selectionEnd), e32.selectionStart = e32.selectionEnd = e32.selectionStart + 1, e32 = Oe(e32, l16, s26));
            break;
          }
          default:
            return;
        }
        r16.preventDefault(), p18(r16, e32);
      },
      [l16, c16, d10, v14, E8, se5, p18, f13]
    ), $e = n7.useCallback(() => {
      D8.current = true;
    }, []), W4 = n7.useCallback(
      (r16) => {
        if (g9 || u17)
          return;
        const e32 = f13();
        Ce(
          s26.parseNumber(String(e32.currentLooseValue), l16),
          e32,
          v14,
          c16,
          d10,
          l16,
          s26
        ), p18(r16, e32);
      },
      [l16, c16, d10, v14, E8, g9, u17, p18, f13]
    ), Y2 = n7.useCallback(
      (r16) => {
        if (g9 || u17)
          return;
        const e32 = f13();
        Ee(
          s26.parseNumber(String(e32.currentLooseValue), l16),
          e32,
          v14,
          c16,
          d10,
          l16,
          s26
        ), p18(r16, e32);
      },
      [l16, c16, d10, v14, E8, g9, u17, p18, f13]
    ), We2 = n7.useCallback(
      (r16) => {
        const e32 = o4(document);
        !document || e32 !== a37.current || !a37.current || g9 || u17 || (r16.nativeEvent.deltaY < 0 && W4(r16), r16.nativeEvent.deltaY > 0 && Y2(r16));
      },
      [W4, Y2, u17, g9]
    ), Ye = n7.useCallback(
      (r16) => {
        i24.current.currentLooseValue = U2.current, i24.current.focused = true, v2(ae3, r16, y11(), {}), S5((e32) => !e32);
      },
      [ae3, S5, y11]
    ), Je = n7.useCallback(
      (r16) => {
        i24.current = Ie(), v2(le4, r16, y11(), {}), S5((e32) => !e32);
      },
      [le4, S5, y11]
    ), Qe = n7.useCallback((r16) => {
      if (document && a37.current) {
        const e32 = o4(document);
        r16.preventDefault(), e32 !== a37.current && a37.current.focus();
      }
    }, []);
    o3(() => {
      a37.current && a37.current.type !== "number" && i24.current.selectionStart !== void 0 && i24.current.selectionEnd !== void 0 && (a37.current.selectionStart = i24.current.selectionStart, a37.current.selectionEnd = i24.current.selectionEnd, i24.current.selectionStart = void 0, i24.current.selectionEnd = void 0);
    }, [_e]);
    const me2 = !$6() || B6().valid, fe2 = n7.createElement(
      "span",
      {
        dir: te5,
        style: I11 ? ne3 : { width: Z2, ...ne3 },
        className: n2(
          "k-input",
          "k-numerictextbox",
          {
            [`k-input-${a4.sizeMap[K5] || K5}`]: K5,
            [`k-input-${L8}`]: L8,
            [`k-rounded-${a4.roundedMap[w11] || w11}`]: w11,
            "k-invalid": !me2,
            "k-required": O6,
            "k-disabled": u17
          },
          xe2
        ),
        "aria-disabled": u17 ? "true" : void 0,
        ...I11 ? {} : ue
      },
      n7.createElement(He, null),
      n7.createElement(
        "input",
        {
          role: "spinbutton",
          value: h16 === null ? "" : h16,
          tabIndex: e4(Ie2, u17),
          accessKey: Oe3,
          disabled: u17,
          title: Le3,
          "aria-disabled": u17 ? "true" : void 0,
          "aria-valuemin": c16,
          "aria-valuemax": d10,
          "aria-label": Re2,
          "aria-labelledby": De,
          "aria-describedby": Ne3,
          "aria-required": O6,
          placeholder: ee4,
          spellCheck: false,
          autoComplete: "off",
          autoCorrect: "off",
          autoFocus: Ae2,
          type: Fe || "tel",
          className: "k-input-inner",
          id: oe,
          name: j4,
          readOnly: g9,
          style: Me2,
          onChange: we,
          onFocus: Ye,
          onBlur: Je,
          onKeyDown: Ue,
          onPaste: $e,
          onWheel: We2,
          ref: a37,
          ...Ge2
        }
      ),
      n7.createElement(Ke, null),
      Be,
      Te3 && n7.createElement("span", { className: "k-input-spinner k-spin-button", onMouseDown: Qe }, n7.createElement(
        M,
        {
          tabIndex: -1,
          type: "button",
          icon: "caret-alt-up",
          svgIcon: caretAltUpIcon,
          rounded: null,
          fillMode: L8,
          className: "k-spinner-increase",
          "aria-label": P10.toLanguageString(
            o5,
            I3[o5]
          ),
          title: P10.toLanguageString(
            o5,
            I3[o5]
          ),
          onClick: W4
        }
      ), n7.createElement(
        M,
        {
          tabIndex: -1,
          type: "button",
          icon: "caret-alt-down",
          svgIcon: caretAltDownIcon,
          rounded: null,
          fillMode: L8,
          className: "k-spinner-decrease",
          "aria-label": P10.toLanguageString(
            e7,
            I3[e7]
          ),
          title: P10.toLanguageString(
            e7,
            I3[e7]
          ),
          onClick: Y2
        }
      ))
    );
    return I11 ? n7.createElement(
      I2,
      {
        label: I11,
        editorId: oe,
        editorValue: h16 === null ? "" : h16,
        editorValid: me2,
        editorDisabled: u17,
        editorPlaceholder: ee4,
        children: fe2,
        style: { width: Z2 },
        dir: te5,
        ...ue
      }
    ) : fe2;
  }
);
Ee2.propTypes = {
  value: import_prop_types.default.number,
  defaultValue: import_prop_types.default.number,
  step: import_prop_types.default.number,
  format: import_prop_types.default.oneOfType([
    import_prop_types.default.string,
    import_prop_types.default.shape({
      style: import_prop_types.default.oneOf(["decimal", "currency", "percent", "scientific", "accounting"]),
      currency: import_prop_types.default.string,
      currencyDisplay: import_prop_types.default.oneOf(["symbol", "code", "name"]),
      useGrouping: import_prop_types.default.bool,
      minimumIntegerDigits: import_prop_types.default.number,
      minimumFractionDigits: import_prop_types.default.number,
      maximumFractionDigits: import_prop_types.default.number
    })
  ]),
  width: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
  tabIndex: import_prop_types.default.number,
  accessKey: import_prop_types.default.string,
  title: import_prop_types.default.string,
  placeholder: import_prop_types.default.string,
  min: import_prop_types.default.number,
  max: import_prop_types.default.number,
  spinners: import_prop_types.default.bool,
  disabled: import_prop_types.default.bool,
  readOnly: import_prop_types.default.bool,
  dir: import_prop_types.default.string,
  name: import_prop_types.default.string,
  label: import_prop_types.default.string,
  validationMessage: import_prop_types.default.string,
  required: import_prop_types.default.bool,
  id: import_prop_types.default.string,
  rangeOnEnter: import_prop_types.default.bool,
  ariaLabelledBy: import_prop_types.default.string,
  ariaDescribedBy: import_prop_types.default.string,
  ariaLabel: import_prop_types.default.string,
  onChange: import_prop_types.default.func,
  onFocus: import_prop_types.default.func,
  onBlur: import_prop_types.default.func,
  size: import_prop_types.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types.default.oneOf([null, "solid", "flat", "outline"]),
  inputAttributes: import_prop_types.default.object
};
var o6 = {
  prefix: (C7) => null,
  suffix: (C7) => null,
  step: 1,
  spinners: true,
  disabled: false,
  required: false,
  validityStyles: true,
  rangeOnEnter: true,
  autoFocus: false,
  onChange: (C7) => {
  },
  onFocus: (C7) => {
  },
  onBlur: (C7) => {
  },
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
Ee2.displayName = "KendoNumericTextBox";

// node_modules/@progress/kendo-react-inputs/colors/HexInput.mjs
var i7 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-inputs/colors/utils/misc.mjs
var u4 = (s26) => s26 != null;
var f2 = (s26, t25, i24) => !u4(s26) || isNaN(s26) || s26 <= t25 ? t25 : s26 >= i24 ? i24 : s26;

// node_modules/@progress/kendo-react-inputs/colors/utils/color-parser.mjs
var B3 = (t25, r16, o21 = true) => {
  if (["hex", "rgba"].indexOf(r16) === -1)
    throw new Error(`Unsupported color output format '${r16}'. The available options are 'hex' or 'rgba'.`);
  if (!u4(t25))
    return;
  const n27 = parseColor(t25.trim(), o21);
  if (u4(n27))
    return r16 === "hex" ? n27.toCss() : n27.toCssRgba();
};
var R2 = (t25, r16 = true) => {
  const o21 = parseColor(t25, r16);
  return u4(o21) ? o21.toHSV() : {};
};
var F2 = (t25, r16 = true) => {
  const o21 = parseColor(t25, r16);
  return u4(o21) ? o21.toBytes() : {};
};
var C2 = (t25) => {
  const r16 = f2(t25.h, 0, 359.9), o21 = f2(t25.s, 0, 1), e32 = f2(t25.v, 0, 1), n27 = f2(t25.a, 0, 1);
  return color_default.fromHSV(r16, o21, e32, n27).toCssRgba();
};
var w4 = (t25) => C2({ h: t25, s: 1, v: 1, a: 1 });
var x3 = (t25) => {
  const r16 = f2(t25.r, 0, 255), o21 = f2(t25.g, 0, 255), e32 = f2(t25.b, 0, 255), n27 = f2(t25.a, 0, 1);
  return color_default.fromBytes(r16, o21, e32, n27).toCssRgba();
};
var p6 = (t25, r16) => {
  const o21 = f2(t25.r, 0, 255), e32 = f2(t25.g, 0, 255), n27 = f2(t25.b, 0, 255), a37 = f2(t25.a, 0, 1), g9 = f2(r16.r, 0, 255), h16 = f2(r16.g, 0, 255), l16 = f2(r16.b, 0, 255);
  return {
    r: Math.round((1 - a37) * g9 + a37 * o21),
    g: Math.round((1 - a37) * h16 + a37 * e32),
    b: Math.round((1 - a37) * l16 + a37 * n27)
  };
};
var i6 = (t25) => {
  const r16 = [t25.r || 0, t25.g || 0, t25.b || 0].map(function(o21) {
    return o21 /= 255, o21 <= 0.03928 ? o21 / 12.92 : Math.pow((o21 + 0.055) / 1.055, 2.4);
  });
  return r16[0] * 0.2126 + r16[1] * 0.7152 + r16[2] * 0.0722;
};
var b2 = (t25, r16) => {
  const o21 = Math.max(t25, r16), e32 = Math.min(t25, r16);
  return (o21 + 0.05) / (e32 + 0.05);
};
var M3 = (t25, r16) => b2(i6(p6(t25, r16)), i6(p6(r16, { r: 0, g: 0, b: 0, a: 1 })));

// node_modules/@progress/kendo-react-inputs/textbox/Textbox.mjs
var e8 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var B4 = e8.forwardRef((t25, F8) => {
  const l16 = e8.useRef(null), s26 = e8.useRef(null), r16 = e8.useRef(), i24 = n5(), a37 = i24 && i24.uTextBox, b8 = e8.useCallback(() => {
    var n27;
    return r16.current !== void 0 ? r16.current : (n27 = l16.current) == null ? void 0 : n27.value;
  }, []);
  e8.useImperativeHandle(s26, () => ({
    get element() {
      return l16.current;
    },
    get name() {
      return l16.current && l16.current.name;
    },
    get value() {
      return b8();
    }
  })), e8.useImperativeHandle(F8, () => s26.current);
  const {
    size: c16 = u5.size,
    fillMode: d10 = u5.fillMode,
    rounded: f13 = u5.rounded,
    autoFocus: y11 = u5.autoFocus,
    inputAttributes: _4,
    className: m11,
    dir: E8,
    style: R5,
    prefix: N4 = u5.prefix,
    suffix: T7 = u5.suffix,
    valid: D8,
    onFocus: p18,
    onBlur: q3,
    // Destruct to avoid warning when used inside a form field
    modified: G6,
    touched: K5,
    visited: U2,
    ...M7
  } = t25, [z5] = s5(N4), [O6] = s5(T7), [v14, x8] = e8.useState(false), S5 = (n27) => {
    x8(true);
  }, A13 = (n27) => {
    x8(false);
  }, I11 = e8.useCallback(
    (n27) => {
      r16.current = n27.target.value, t25.onChange && t25.onChange.call(void 0, {
        syntheticEvent: n27,
        nativeEvent: n27.nativeEvent,
        value: n27.target.value,
        target: s26.current
      }), r16.current = void 0;
    },
    [t25.onChange]
  ), { onFocus: P10, onBlur: j4 } = o2({
    onFocus: S5,
    onBlur: A13,
    onSyncFocus: p18,
    onSyncBlur: q3
  }), k8 = e8.useMemo(
    () => n2(
      E3.wrapper({
        c: a37,
        rounded: f13,
        fillMode: d10,
        size: c16,
        focused: v14,
        required: t25.required,
        disabled: t25.disabled,
        invalid: t25.valid === false
      }),
      m11
    ),
    [m11, d10, v14, t25.disabled, t25.required, t25.valid, f13, c16, a37]
  );
  return e8.createElement("span", { style: R5, dir: E8, className: k8, onFocus: P10, onBlur: j4 }, e8.createElement(z5, null), e8.createElement(
    "input",
    {
      ref: l16,
      className: n2(E3.inputInner({ c: a37 })),
      autoFocus: y11,
      ...Object.assign({}, M7, _4),
      "aria-required": t25.required,
      onChange: I11
    }
  ), e8.createElement(O6, null));
});
var u5 = {
  prefix: (t25) => null,
  suffix: (t25) => null,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: false
};
B4.propTypes = {
  size: import_prop_types2.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types2.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types2.default.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: import_prop_types2.default.bool,
  inputAttributes: import_prop_types2.default.object
};
B4.displayName = "KendoReactTextBoxComponent";

// node_modules/@progress/kendo-react-inputs/colors/HexInput.mjs
var u6 = class extends i7.Component {
  constructor(e32) {
    super(e32), this.onChange = (t25) => {
      const s26 = t25.target.value, r16 = B3(s26, "rgba");
      this.setState({ hex: s26 }), u4(r16) && this.props.onHexChange(s26, r16, t25);
    }, this.onBlur = () => {
      u4(B3(this.state.hex, "rgba")) || this.setState({ hex: this.state.originalHex });
    }, this.state = { hex: this.props.hex, originalHex: this.props.hex };
  }
  render() {
    return i7.createElement(
      B4,
      {
        value: this.state.hex,
        onChange: this.onChange,
        onBlur: this.onBlur,
        disabled: this.props.disabled,
        className: "k-hex-value",
        size: this.props.size,
        fillMode: this.props.fillMode
      }
    );
  }
  static getDerivedStateFromProps(e32, t25) {
    return e32.hex !== t25.originalHex ? { hex: e32.hex, originalHex: e32.hex } : null;
  }
};

// node_modules/@progress/kendo-react-inputs/colors/ColorInput.mjs
var i8 = ["rgba", "rgb", "hex"];
var d3 = class extends t6.Component {
  constructor(e32) {
    super(e32), this.onRgbaRChange = (a37) => {
      this.dispatchRgbaChange({ r: a37.value }, a37);
    }, this.onRgbaGChange = (a37) => {
      this.dispatchRgbaChange({ g: a37.value }, a37);
    }, this.onRgbaBChange = (a37) => {
      this.dispatchRgbaChange({ b: a37.value }, a37);
    }, this.onRgbaAChange = (a37) => {
      this.dispatchRgbaChange({ a: a37.value }, a37);
    }, this.state = { inputMode: e32.defaultInputMode || i8[1] };
  }
  render() {
    const e32 = s(this), a37 = e32.toLanguageString(s8, I3[s8]), s26 = e32.toLanguageString(l3, I3[l3]), m11 = e32.toLanguageString(n6, I3[n6]), b8 = e32.toLanguageString(i5, I3[i5]), f13 = e32.toLanguageString(c2, I3[c2]), u17 = e32.toLanguageString(
      g3,
      I3[g3]
    );
    return t6.createElement("div", { className: "k-colorgradient-inputs k-hstack" }, t6.createElement("div", { className: "k-vstack" }, t6.createElement(
      M,
      {
        "aria-label": u17,
        fillMode: "flat",
        icon: "caret-alt-expand",
        svgIcon: caretAltExpandIcon,
        className: "k-colorgradient-toggle-mode",
        size: this.props.size,
        onClick: this.onToggleModeChange.bind(this)
      }
    )), this.state.inputMode === "hex" && t6.createElement("div", { className: "k-vstack k-flex-1" }, t6.createElement(
      u6,
      {
        hex: this.props.hex,
        onHexChange: this.props.onHexChange,
        disabled: this.props.disabled,
        size: this.props.size,
        fillMode: this.props.fillMode
      }
    ), t6.createElement("label", { className: "k-colorgradient-input-label" }, a37)), (this.state.inputMode === "rgb" || this.state.inputMode === "rgba") && t6.createElement(t6.Fragment, null, t6.createElement("div", { className: "k-vstack" }, t6.createElement(
      Ee2,
      {
        value: this.props.rgba.r,
        ariaLabel: String(this.props.rgba.r),
        min: 0,
        max: 255,
        spinners: false,
        format: "n",
        onChange: this.onRgbaRChange,
        disabled: this.props.disabled,
        size: this.props.size,
        fillMode: this.props.fillMode
      }
    ), t6.createElement("label", { className: "k-colorgradient-input-label" }, s26)), t6.createElement("div", { className: "k-vstack" }, t6.createElement(
      Ee2,
      {
        value: this.props.rgba.g,
        ariaLabel: String(this.props.rgba.g),
        min: 0,
        max: 255,
        spinners: false,
        format: "n",
        onChange: this.onRgbaGChange,
        disabled: this.props.disabled,
        size: this.props.size,
        fillMode: this.props.fillMode
      }
    ), t6.createElement("label", { className: "k-colorgradient-input-label" }, m11)), t6.createElement("div", { className: "k-vstack" }, t6.createElement(
      Ee2,
      {
        value: this.props.rgba.b,
        ariaLabel: String(this.props.rgba.b),
        min: 0,
        max: 255,
        spinners: false,
        format: "n",
        onChange: this.onRgbaBChange,
        disabled: this.props.disabled,
        size: this.props.size,
        fillMode: this.props.fillMode
      }
    ), t6.createElement("label", { className: "k-colorgradient-input-label" }, b8))), this.state.inputMode === "rgba" && t6.createElement("div", { className: "k-vstack" }, this.props.opacity && t6.createElement(
      Ee2,
      {
        value: this.props.rgba.a,
        ariaLabel: String(this.props.rgba.a),
        min: 0,
        max: 1,
        step: 0.01,
        spinners: false,
        format: "n2",
        onChange: this.onRgbaAChange,
        disabled: this.props.disabled,
        size: this.props.size,
        fillMode: this.props.fillMode
      }
    ), this.props.opacity && t6.createElement("label", { className: "k-colorgradient-input-label" }, f13)));
  }
  dispatchRgbaChange(e32, a37) {
    const s26 = { ...this.props.rgba };
    e32.r !== void 0 && (s26.r = e32.r), e32.g !== void 0 && (s26.g = e32.g), e32.b !== void 0 && (s26.b = e32.b), e32.a !== void 0 && (s26.a = e32.a), this.props.onRgbaChange(s26, a37);
  }
  onToggleModeChange() {
    const e32 = i8.length - 1 === i8.indexOf(this.state.inputMode) ? 0 : i8.indexOf(this.state.inputMode) + 1;
    if (this.props.opacity)
      this.setState({ inputMode: i8[e32] });
    else {
      const a37 = i8[e32] === "rgba" ? e32 + 1 : e32;
      this.setState({ inputMode: i8[a37] });
    }
  }
};
p(d3);
v(d3);

// node_modules/@progress/kendo-react-inputs/colors/ColorGradient.mjs
var r4 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/package-metadata.mjs
var e9 = {
  name: "@progress/kendo-react-inputs",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1741695394,
  version: "10.0.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};

// node_modules/@progress/kendo-react-inputs/slider/Slider.mjs
var i9 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/slider/SliderLabel.mjs
var l4 = __toESM(require_react(), 1);
var c3 = "data-slider-label";

// node_modules/@progress/kendo-react-inputs/slider/Slider.mjs
var p7 = class p8 extends i9.Component {
  constructor(s26) {
    super(s26), this.state = {
      value: this.props.defaultValue === void 0 ? this.props.min : this.props.defaultValue,
      focused: false,
      dir: this.props.dir
    }, this._sliderTrack = null, this._element = null, this.buttons = (t25) => {
      if (!t25.enabled)
        return t25.children;
      const e32 = this.state.dir === "rtl" ? this.props.vertical ? caretAltUpIcon : caretAltLeftIcon : this.props.vertical ? caretAltUpIcon : caretAltRightIcon, l16 = this.state.dir === "rtl" ? this.props.vertical ? caretAltDownIcon : caretAltRightIcon : this.props.vertical ? caretAltDownIcon : caretAltLeftIcon, r16 = this.state.dir === "rtl" ? this.props.vertical ? "caret-alt-up" : "caret-alt-left" : this.props.vertical ? "caret-alt-up" : "caret-alt-right", o21 = this.state.dir === "rtl" ? this.props.vertical ? "caret-alt-down" : "caret-alt-right" : this.props.vertical ? "caret-alt-down" : "caret-alt-left";
      return i9.createElement(i9.Fragment, null, i9.createElement(
        M,
        {
          className: "k-button-decrease",
          rounded: "full",
          icon: o21,
          svgIcon: l16,
          title: t25.decrementTitle,
          onClick: t25.decrement
        }
      ), t25.children, i9.createElement(
        M,
        {
          className: "k-button-increase",
          rounded: "full",
          icon: r16,
          svgIcon: e32,
          title: t25.incrementTitle,
          onClick: t25.increment
        }
      ));
    }, this.focus = () => {
      this._element && this._element.focus();
    }, this.isLabel = (t25) => {
      let e32 = t25;
      for (; e32; ) {
        if (e32.getAttribute(c3))
          return true;
        e32 = e32.parentElement;
      }
      return false;
    }, this.onFocus = () => {
      this.setState({ focused: true });
    }, this.onBlur = () => {
      this.setState({ focused: false });
    }, this.onKeyDown = (t25) => {
      let e32;
      t25.keyCode === e2.left || t25.keyCode === e2.down ? e32 = this.state.value - (this.props.step || 0) : t25.keyCode === e2.right || t25.keyCode === e2.up ? e32 = this.state.value + (this.props.step || 0) : t25.keyCode === e2.pageDown ? e32 = this.state.value - (this.props.largeStep || 0) : t25.keyCode === e2.pageUp ? e32 = this.state.value + (this.props.largeStep || 0) : t25.keyCode === e2.home ? e32 = this.props.min : t25.keyCode === e2.end && (e32 = this.props.max), e32 !== void 0 && (t25.preventDefault(), this.change(t25, e32));
    }, this.decrement = (t25) => {
      t25.preventDefault(), this.change(t25, this.state.value - (this.props.step || 0));
    }, this.increment = (t25) => {
      t25.preventDefault(), this.change(t25, this.state.value + (this.props.step || 0));
    }, this.dragStart = (t25) => {
      this.isLabel(t25.event.originalEvent.target) || (t25.event.isTouch && t25.event.originalEvent.preventDefault(), this.drag(t25));
    }, this.dragOver = (t25) => {
      t25.event.originalEvent.preventDefault(), this.drag(t25);
    }, this.drag = (t25) => {
      const e32 = t25.element.getBoundingClientRect(), l16 = this.props.vertical ? e32.bottom - t25.event.clientY : this.state.dir === "rtl" ? e32.right - t25.event.clientX : t25.event.clientX - e32.left, r16 = this.props.vertical ? e32.height : e32.width, o21 = l16 / r16;
      this.change(t25, this.props.min + o21 * (this.props.max - this.props.min));
    };
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(s26, t25) {
    const e32 = s26.value !== void 0 ? s26.value : t25.value, { min: l16, max: r16 } = s26;
    return e32 === void 0 ? null : { value: Math.min(Math.max(e32, l16), r16) };
  }
  /**
   * @hidden
   */
  componentDidMount() {
    if (!this.state.dir && window && this._element) {
      const s26 = window.getComputedStyle(this._element).direction;
      s26 && this.setState({ dir: s26 });
    }
  }
  /**
   * @hidden
   */
  render() {
    const s26 = s(this), t25 = (this.state.value - this.props.min) / (this.props.max - this.props.min) * 100, e32 = this.props.vertical ? { marginTop: "0.5rem", marginBottom: "0.5rem" } : { marginLeft: "0.5rem", marginRight: "0.5rem" }, l16 = this.props.vertical ? { paddingTop: 0, height: "100%" } : {};
    return i9.createElement(
      "div",
      {
        ref: (r16) => this._element = r16,
        dir: this.state.dir,
        id: this.props.id,
        style: { gap: 0, ...this.props.style },
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        className: n2(
          "k-slider",
          {
            "k-focus": this.state.focused,
            "k-disabled": this.props.disabled,
            "k-slider-horizontal": !this.props.vertical,
            "k-slider-vertical": this.props.vertical
          },
          this.props.className
        )
      },
      i9.createElement(
        this.buttons,
        {
          enabled: this.props.buttons,
          decrement: this.decrement,
          increment: this.increment,
          incrementTitle: s26.toLanguageString(t4, I3[t4]),
          decrementTitle: s26.toLanguageString(r2, I3[r2])
        },
        i9.createElement(s6, { onDrag: this.dragOver, onPress: this.dragStart, autoScroll: false }, i9.createElement(
          "div",
          {
            className: "k-slider-track-wrap",
            style: {
              flexGrow: 1,
              position: "relative",
              touchAction: "none",
              ...e32
            }
          },
          this.props.children && i9.createElement("ul", { className: "k-reset k-slider-items", style: { margin: 0, ...l16 } }, i9.Children.map(this.props.children, (r16, o21) => r16 && i9.cloneElement(
            r16,
            {
              position: 100 * (r16.props.position - this.props.min) / (this.props.max - this.props.min),
              vertical: this.props.vertical,
              firstTick: o21 === 0,
              lastTick: o21 === i9.Children.count(this.props.children) - 1
            },
            r16.props.children
          ))),
          i9.createElement(
            "div",
            {
              className: "k-slider-track",
              style: this.props.vertical ? { bottom: 0, height: "100%" } : { [this.state.dir === "rtl" ? "right" : "left"]: 0, width: "100%" },
              ref: (r16) => this._sliderTrack = r16
            },
            i9.createElement(
              "div",
              {
                className: "k-slider-selection",
                style: this.props.vertical ? { height: t25 + "%" } : { width: t25 + "%" }
              }
            ),
            i9.createElement(
              "span",
              {
                role: "slider",
                "aria-valuemin": this.props.min,
                "aria-valuemax": this.props.max,
                "aria-valuenow": this.state.value,
                "aria-valuetext": String(this.state.value),
                "aria-orientation": this.props.vertical ? "vertical" : void 0,
                "aria-disabled": this.props.disabled ? "true" : void 0,
                "aria-labelledby": this.props.ariaLabelledBy,
                "aria-describedby": this.props.ariaDescribedBy,
                "aria-label": this.props.ariaLabel,
                tabIndex: e4(this.props.tabIndex, this.props.disabled, void 0),
                className: "k-draghandle k-draghandle-end",
                title: s26.toLanguageString(a6, I3[a6]),
                style: this.props.vertical ? { bottom: "calc(" + t25 + "%)", zIndex: 1 } : this.state.dir === "rtl" ? { right: "calc(" + t25 + "% - 13px)", zIndex: 1 } : { left: "calc(" + t25 + "%)", zIndex: 1 }
              }
            )
          )
        ))
      )
    );
  }
  /**
   * @hidden
   */
  get sliderTrack() {
    return this._sliderTrack;
  }
  change(s26, t25) {
    t25 = Math.min(Math.max(t25, this.props.min), this.props.max), this.setState({ value: t25 }), v2(this.props.onChange, s26, this, { value: t25 });
  }
};
p7.displayName = "Slider", p7.propTypes = {
  min: import_prop_types3.default.number.isRequired,
  max: import_prop_types3.default.number.isRequired,
  value: import_prop_types3.default.number,
  vertical: import_prop_types3.default.bool,
  id: import_prop_types3.default.string,
  ariaLabelledBy: import_prop_types3.default.string,
  ariaDescribedBy: import_prop_types3.default.string,
  ariaLabel: import_prop_types3.default.string
  // TODO: validation when buttons is set to true, but no step is provided
};
var c4 = p7;
var L3 = a();
var A4 = x(L3, c4);
A4.displayName = "KendoReactSlider";
v(c4);

// node_modules/@progress/kendo-react-inputs/colors/utils/color-cache.mjs
var a8 = {};
function r3(c16, o21, e32) {
  a8[c16] = { value: o21, hsva: e32 };
}
function t7(c16, o21, e32) {
  a8[c16] = { value: o21, rgba: e32 };
}
function n8(c16, o21, e32) {
  a8[c16] = { value: o21, hex: e32 };
}
function h4(c16) {
  delete a8[c16];
}
function i10(c16, o21) {
  if (c16) {
    const e32 = a8[c16];
    return e32 && e32.value === o21 ? e32.hex : void 0;
  }
}
function u7(c16, o21) {
  if (c16) {
    const e32 = a8[c16];
    return e32 && e32.value === o21 ? e32.hsva : void 0;
  }
}
function v5(c16, o21) {
  if (c16) {
    const e32 = a8[c16];
    return e32 && e32.value === o21 ? e32.rgba : void 0;
  }
}

// node_modules/@progress/kendo-react-inputs/colors/ColorContrastLabels.mjs
var e10 = __toESM(require_react(), 1);
var G2 = class extends e10.Component {
  render() {
    const t25 = s(this), x8 = t25.toLanguageString(
      d2,
      I3[d2]
    ), k8 = t25.toLanguageString(
      G,
      I3[G]
    ), v14 = t25.toLanguageString(
      u3,
      I3[u3]
    ), A13 = t25.toLanguageString(p4, I3[p4]), E8 = t25.toLanguageString(A2, I3[A2]), a37 = M3(this.props.rgba, this.props.bgColor), u17 = 4.5.toFixed(1), L8 = 7 .toFixed(1), C7 = `${x8}: ${a37.toFixed(2)}`, f13 = `${k8}: ${u17}`, h16 = `${v14}: ${L8}`, s26 = e10.createElement("span", { className: "k-contrast-validation k-text-success" }, A13, " ", e10.createElement(v3, { name: "check", icon: checkIcon })), c16 = e10.createElement("span", { className: "k-contrast-validation k-text-error" }, E8, " ", e10.createElement(v3, { name: "x", icon: xIcon }));
    return e10.createElement("div", { className: "k-vbox k-colorgradient-color-contrast" }, e10.createElement("div", { className: "k-contrast-ratio" }, e10.createElement("span", { className: "k-contrast-ratio-text" }, C7), a37 >= 4.5 ? e10.createElement("span", { className: "k-contrast-validation k-text-success" }, e10.createElement(v3, { name: "check", icon: checkIcon }), a37 >= 7 && e10.createElement(v3, { name: "check", icon: checkIcon })) : e10.createElement("span", { className: "k-contrast-validation k-text-error" }, e10.createElement(v3, { name: "x", icon: xIcon }))), e10.createElement("div", null, e10.createElement("span", null, f13), a37 >= 4.5 ? s26 : c16), e10.createElement("div", null, e10.createElement("span", null, h16), a37 >= 7 ? s26 : c16));
  }
};
v(G2);

// node_modules/@progress/kendo-react-inputs/colors/ColorContrastSvg.mjs
var h5 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-inputs/colors/utils/svg-calc.mjs
var d4 = (s26, t25) => s26.length === 0 ? "" : `<path d="${s26.reduce(
  (n27, c16, o21, h16) => o21 === 0 ? (
    // if first point
    `M ${c16[0]},${c16[1]}`
  ) : (
    // else
    `${n27} ${t25(c16, o21, h16)}`
  ),
  ""
)}" fill="none" stroke="white" stroke-width="1"/>`;
var u8 = (s26, t25) => {
  const e32 = t25[0] - s26[0], n27 = t25[1] - s26[1];
  return {
    length: Math.sqrt(Math.pow(e32, 2) + Math.pow(n27, 2)),
    angle: Math.atan2(n27, e32)
  };
};
var w5 = (s26) => (t25, e32, n27, c16) => {
  const o21 = e32 || t25, h16 = n27 || t25, l16 = 0.1, a37 = s26(o21, h16), r16 = a37.angle + (c16 ? Math.PI : 0), $6 = a37.length * l16, g9 = t25[0] + Math.cos(r16) * $6, M7 = t25[1] + Math.sin(r16) * $6;
  return [g9, M7];
};
var m3 = (s26) => (t25, e32, n27) => {
  const [c16, o21] = s26(n27[e32 - 1], n27[e32 - 2], t25), [h16, l16] = s26(t25, n27[e32 - 1], n27[e32 + 1], true);
  return `C ${c16},${o21} ${h16},${l16} ${t25[0]},${t25[1]}`;
};

// node_modules/@progress/kendo-react-inputs/colors/ColorContrastSvg.mjs
var C3 = 4.5;
var g4 = 7;
var v6 = 16;
var w6 = class extends h5.Component {
  renderSvgCurveLine() {
    const t25 = this.props.metrics, d10 = (o21, i24, r16, e32, s26) => {
      const a37 = (r16 + e32) / 2, l16 = Object.assign({}, this.props.hsva, {
        s: i24 / t25.width,
        v: 1 - a37 / t25.height
      }), n27 = M3(
        F2(C2(l16)),
        F2(this.props.backgroundColor || "")
      );
      return r16 + 0.5 > e32 ? n27 < o21 + 1 && n27 > o21 - 1 ? a37 : null : s26(n27, o21) ? d10(o21, i24, r16, e32 - (e32 - r16) / 2, s26) : d10(o21, i24, r16 + (e32 - r16) / 2, e32, s26);
    }, u17 = (o21, i24, r16 = false) => {
      const e32 = [];
      for (let s26 = 0; s26 <= t25.width; s26 += t25.width / i24) {
        const a37 = d10(
          o21,
          s26,
          0,
          t25.height,
          r16 ? (l16, n27) => l16 < n27 : (l16, n27) => l16 > n27
        );
        a37 !== null && e32.push([s26, a37]);
      }
      return e32;
    }, c16 = m3(w5(u8));
    return d4(u17(C3, v6), c16) + d4(u17(C3, v6, true), c16) + d4(u17(g4, v6), c16) + d4(u17(g4, v6, true), c16);
  }
  shouldComponentUpdate(t25) {
    return !(t25.hsva.h === this.props.hsva.h && t25.hsva.a === this.props.hsva.a && this.props.backgroundColor === t25.backgroundColor);
  }
  render() {
    return h5.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "k-color-contrast-svg",
        dangerouslySetInnerHTML: { __html: this.renderSvgCurveLine() },
        style: {
          position: "absolute",
          overflow: "visible",
          pointerEvents: "none",
          left: 0,
          top: 0,
          zIndex: 3
        }
      }
    );
  }
};

// node_modules/@progress/kendo-react-inputs/colors/ColorGradient.mjs
var te3 = "rgba";
var H = "rgba(255, 255, 255, 1)";
var g5 = 2;
var v7 = 5;
var h6 = class h7 extends r4.Component {
  constructor(t25) {
    super(t25), this.wrapperRef = r4.createRef(), this.hsvGradientRef = r4.createRef(), this.showLicenseWatermark = false, this.focus = () => {
      this.wrapperRef && this.wrapperRef.current && this.wrapperRef.current.focus();
    }, this.onHexChange = (e32, s26, i24) => {
      if (this.isUncontrolled) {
        const n27 = R2(s26);
        this.setState({ hsva: n27, backgroundColor: w4(n27.h), rgba: F2(s26), hex: e32 });
      } else
        n8(this.state.guid, s26, e32);
      this.dispatchChangeEvent(s26, i24, i24.nativeEvent);
    }, this.onRgbaChange = (e32, s26) => {
      const i24 = x3(e32);
      if (this.isUncontrolled) {
        const n27 = R2(i24), l16 = B3(i24, "hex");
        this.setState({ hsva: n27, backgroundColor: w4(n27.h), rgba: e32, hex: l16 });
      } else
        t7(this.state.guid, i24, e32);
      this.dispatchChangeEvent(i24, s26.syntheticEvent, s26.nativeEvent);
    }, this.onAlphaSliderChange = (e32) => {
      this.handleHsvaChange(
        Object.assign({}, this.state.hsva, { a: e32.value / 100 }),
        e32.syntheticEvent,
        e32.nativeEvent
      );
    }, this.onHueSliderChange = (e32) => {
      this.handleHsvaChange(
        Object.assign({}, this.state.hsva, { h: e32.value }),
        e32.syntheticEvent,
        e32.nativeEvent
      );
    }, this.onDrag = (e32) => {
      this.gradientWrapper.classList.add("k-dragging"), this.changePosition(e32.event);
    }, this.onRelease = () => {
      this.gradientWrapper.classList.remove("k-dragging");
    }, this.onGradientWrapperClick = (e32) => {
      this.changePosition(e32);
    }, this.onHsvGradientKeyDown = (e32) => {
      var s26;
      (s26 = this.hsvNavigation) == null || s26.triggerKeyboardEvent(e32);
    }, this.onHsvGradientValueChange = (e32, s26, i24) => {
      const n27 = parseInt(e32.style.top, 10) + i24, l16 = parseInt(e32.style.left, 10) + s26;
      e32.style.top = `${n27}px`, e32.style.left = `${l16}px`, this.moveDragHandle(l16, n27);
    }, this.changePosition = (e32) => {
      const s26 = this.getGradientRectMetrics(), i24 = e32.clientX - s26.left, n27 = e32.clientY - s26.top;
      this.moveDragHandle(i24, n27);
    }, this.onFocus = (e32) => {
      this.props.onFocus && this.props.onFocus.call(void 0, { nativeEvent: e32, target: this });
    }, this.onKeyDown = (e32) => {
      var s26;
      (s26 = this.navigation) == null || s26.triggerKeyboardEvent(e32);
    }, this.showLicenseWatermark = !h(e9, { component: "ColorGradient" });
    const a37 = t25.value || t25.defaultValue || B3(H, te3);
    this.state = Object.assign({}, h7.getStateFromValue(a37), {
      isFirstRender: true,
      guid: this.props.id
    });
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(t25, a37) {
    return t25.value && !a37.isFirstRender ? h7.getStateFromValue(t25.value, a37.guid) : null;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    if (this.setAlphaSliderBackground(this.state.backgroundColor), this.state.isFirstRender && this.setState({ isFirstRender: false }), this.wrapperRef && this.hsvGradientRef) {
      let t25 = 0, a37 = 0;
      this.hsvNavigation = new l2({
        tabIndex: 0,
        root: this.hsvGradientRef,
        selectors: [".k-hsv-rectangle .k-hsv-draghandle"],
        keyboardEvents: {
          keydown: {
            ArrowDown: (e32, s26, i24) => {
              a37 = i24.shiftKey ? this.props.gradientSliderSmallStep || g5 : this.props.gradientSliderStep || v7, this.onHsvGradientValueChange(e32, 0, a37);
            },
            ArrowUp: (e32, s26, i24) => {
              a37 = i24.shiftKey ? -(this.props.gradientSliderSmallStep || g5) : -(this.props.gradientSliderStep || v7), this.onHsvGradientValueChange(e32, 0, a37);
            },
            ArrowLeft: (e32, s26, i24) => {
              t25 = i24.shiftKey ? -(this.props.gradientSliderSmallStep || g5) : -(this.props.gradientSliderStep || v7), this.onHsvGradientValueChange(e32, t25, 0);
            },
            ArrowRight: (e32, s26, i24) => {
              t25 = i24.shiftKey ? this.props.gradientSliderSmallStep || g5 : this.props.gradientSliderStep || v7, this.onHsvGradientValueChange(e32, t25, 0);
            }
          }
        }
      });
    }
    this.wrapperRef && this.wrapperRef.current && (this.props.isInsidePopup ? this.hsvGradientRef.current && this.hsvGradientRef.current.focus() : this.navigation = new l2({
      tabIndex: 0,
      root: this.wrapperRef,
      selectors: [".k-colorgradient"],
      keyboardEvents: {
        keydown: {
          Tab: (t25, a37, e32) => {
            o4(document) === t25 ? y(t25) : n3(e32, t25, E);
          },
          Enter: (t25, a37, e32) => {
            o4(document) === t25 && (e3(t25), g(t25));
          },
          Escape: (t25, a37, e32) => {
            o4(document) !== t25 && (t25.focus(), y(t25));
          }
        }
      }
    }));
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    h4(this.state.guid);
  }
  /**
   * @hidden
   */
  componentDidUpdate(t25, a37) {
    a37.backgroundColor !== this.state.backgroundColor && this.setAlphaSliderBackground(this.state.backgroundColor);
  }
  /**
   * @hidden
   */
  renderRectangleDragHandle() {
    const t25 = {};
    if (!this.state.isFirstRender) {
      const a37 = this.getGradientRectMetrics(), e32 = (1 - this.state.hsva.v) * a37.height, s26 = this.state.hsva.s * a37.width;
      t25.top = `${e32}px`, t25.left = `${s26}px`;
    }
    return r4.createElement(
      "div",
      {
        ref: this.hsvGradientRef,
        role: "slider",
        tabIndex: e4(this.props.tabIndex, this.props.disabled),
        "aria-valuetext": this.props.ariaValueText,
        "aria-valuenow": parseInt(this.state.hex.substring(1), 16),
        "aria-label": this.props.ariaLabelHSV,
        "aria-orientation": void 0,
        "aria-disabled": this.props.disabled ? "true" : void 0,
        className: "k-hsv-draghandle k-draghandle",
        style: t25,
        onKeyDown: this.onHsvGradientKeyDown
      }
    );
  }
  /**
   * @hidden
   */
  moveDragHandle(t25, a37) {
    const e32 = this.getGradientRectMetrics(), s26 = e32.width, i24 = e32.height, n27 = f2(a37, 0, i24), l16 = f2(t25, 0, s26), L8 = Object.assign({}, this.state.hsva, {
      s: l16 / s26,
      v: 1 - n27 / i24
    });
    this.handleHsvaChange(L8, {}, {});
  }
  /**
   * @hidden
   */
  handleHsvaChange(t25, a37, e32) {
    const s26 = C2(t25), i24 = B3(s26, "hex");
    this.isUncontrolled || r3(this.state.guid, s26, t25), this.setState({ hsva: t25, backgroundColor: w4(t25.h), rgba: F2(s26), hex: i24 }), this.dispatchChangeEvent(s26, a37, e32);
  }
  /**
   * @hidden
   */
  dispatchChangeEvent(t25, a37, e32) {
    this.props.onChange && this.props.onChange.call(void 0, {
      syntheticEvent: a37,
      nativeEvent: e32,
      target: this,
      value: t25
    });
  }
  /**
   * @hidden
   */
  static getStateFromValue(t25, a37) {
    u4(B3(t25, "hex")) || (t25 = H);
    const e32 = u7(a37, t25) || R2(t25), s26 = v5(a37, t25) || F2(t25), i24 = i10(a37, t25) || B3(t25, "hex"), n27 = w4(e32.h);
    return { hsva: e32, backgroundColor: n27, rgba: s26, hex: i24 };
  }
  /**
   * @hidden
   */
  setAlphaSliderBackground(t25) {
    this.props.opacity && this.alphaSlider && this.alphaSlider.sliderTrack && (this.alphaSlider.sliderTrack.style.background = `linear-gradient(to ${this.props._adaptive ? "right" : "top"}, transparent, ${t25})`);
  }
  /**
   * @hidden
   */
  get isUncontrolled() {
    return this.props.value === void 0;
  }
  /**
   * @hidden
   */
  getGradientRectMetrics() {
    return this.gradientWrapper.getBoundingClientRect();
  }
  /**
   * @hidden
   */
  render() {
    const t25 = s(this);
    return r4.createElement(
      "div",
      {
        id: this.props.id,
        role: this.props.role,
        className: n2(
          "k-colorgradient",
          {
            [`k-colorgradient-${a4.sizeMap[this.props.size] || this.props.size}`]: this.props.size,
            "k-disabled": this.props.disabled
          },
          this.props.className
        ),
        "aria-disabled": this.props.disabled ? "true" : void 0,
        style: { position: "relative", ...this.props.style },
        ref: this.wrapperRef,
        tabIndex: e4(this.props.tabIndex, this.props.disabled),
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        onFocus: this.onFocus,
        onKeyDown: this.onKeyDown
      },
      r4.createElement("div", { className: `k-colorgradient-canvas ${this.props._adaptive ? "k-vstack" : "k-hstack"}` }, r4.createElement("div", { className: "k-hsv-rectangle", style: { background: this.state.backgroundColor } }, r4.createElement(
        s6,
        {
          onDrag: this.onDrag,
          onRelease: this.onRelease,
          ref: (a37) => this.gradientWrapper = a37 ? a37.element : void 0
        },
        r4.createElement(
          "div",
          {
            className: "k-hsv-gradient",
            style: { touchAction: "none" },
            onClick: this.onGradientWrapperClick
          },
          this.renderRectangleDragHandle()
        )
      ), this.props.backgroundColor && !this.state.isFirstRender && r4.createElement(
        w6,
        {
          metrics: this.gradientWrapper ? this.getGradientRectMetrics() : void 0,
          hsva: this.state.hsva,
          backgroundColor: this.props.backgroundColor
        }
      )), r4.createElement("div", { className: `k-hsv-controls ${this.props._adaptive ? "k-vstack" : "k-hstack"}` }, r4.createElement(
        A4,
        {
          value: this.state.hsva.h,
          buttons: false,
          vertical: !this.props._adaptive,
          min: 0,
          max: 360,
          step: 5,
          onChange: this.onHueSliderChange,
          className: "k-hue-slider k-colorgradient-slider",
          disabled: this.props.disabled,
          ariaLabel: t25.toLanguageString(
            C,
            I3[C]
          )
        }
      ), this.props.opacity && r4.createElement(
        A4,
        {
          value: u4(this.state.hsva.a) ? this.state.hsva.a * 100 : 100,
          buttons: false,
          vertical: !this.props._adaptive,
          min: 0,
          max: 100,
          step: 1,
          ariaLabel: t25.toLanguageString(
            P3,
            I3[P3]
          ),
          onChange: this.onAlphaSliderChange,
          className: "k-alpha-slider k-colorgradient-slider",
          disabled: this.props.disabled,
          ref: (a37) => this.alphaSlider = a37
        }
      ))),
      r4.createElement(
        d3,
        {
          rgba: this.state.rgba,
          onRgbaChange: this.onRgbaChange,
          hex: this.state.hex,
          onHexChange: this.onHexChange,
          opacity: this.props.opacity,
          disabled: this.props.disabled,
          defaultInputMode: this.props.format,
          size: this.props.size,
          fillMode: this.props.fillMode
        }
      ),
      this.props.backgroundColor && r4.createElement(G2, { bgColor: F2(this.props.backgroundColor), rgba: this.state.rgba }),
      this.showLicenseWatermark && r4.createElement(l, null)
    );
  }
};
h6.displayName = "ColorGradient", h6.propTypes = {
  defaultValue: import_prop_types4.default.string,
  value: import_prop_types4.default.string,
  onChange: import_prop_types4.default.func,
  onFocus: import_prop_types4.default.func,
  opacity: import_prop_types4.default.bool,
  backgroundColor: import_prop_types4.default.string,
  format: import_prop_types4.default.any,
  disabled: import_prop_types4.default.bool,
  style: import_prop_types4.default.any,
  id: import_prop_types4.default.string,
  role: import_prop_types4.default.string,
  ariaLabel: import_prop_types4.default.string,
  ariaLabelledBy: import_prop_types4.default.string,
  ariaDescribedBy: import_prop_types4.default.string,
  className: import_prop_types4.default.string,
  size: import_prop_types4.default.oneOf(["small", "medium", "large", null])
}, h6.defaultProps = {
  opacity: true,
  role: "textbox",
  format: "rgb",
  size: "medium"
};
var m4 = h6;
var se = a();
var ae2 = a2(
  x(
    se,
    m4
  )
);
ae2.displayName = "KendoReactColorGradient";

// node_modules/@progress/kendo-react-inputs/colors/ColorPalette.mjs
var i11 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/colors/utils/color-palette.service.mjs
var f3 = class {
  constructor() {
    this.colorRows = [];
  }
  setColorMatrix(o21, r16) {
    if (this.colorRows = [], !!(u4(o21) && o21.length)) {
      r16 = r16 || o21.length;
      for (let t25 = 0; t25 < o21.length; t25 += r16) {
        const s26 = o21.slice(t25, r16 + t25);
        this.colorRows.push(s26);
      }
    }
  }
  getCellCoordsFor(o21) {
    if (!u4(o21))
      return;
    const r16 = o21 && parseColor(o21, true), t25 = [o21];
    u4(r16) && t25.push(r16.toCss(), r16.toCssRgba());
    for (let s26 = 0; s26 < this.colorRows.length; s26++)
      for (let i24 = 0; i24 < this.colorRows[s26].length; i24++)
        if (t25.some((l16) => l16 === this.colorRows[s26][i24]))
          return { row: s26, col: i24 };
  }
  getColorAt(o21) {
    if (u4(o21) && u4(this.colorRows[o21.row]))
      return this.colorRows[o21.row][o21.col];
  }
  getNextCell(o21, r16, t25) {
    if (!(u4(o21) && u4(o21.row) && u4(o21.col)))
      return { row: 0, col: 0 };
    const s26 = this.clampIndex(o21.row + t25, this.colorRows.length - 1), i24 = this.clampIndex(o21.col + r16, this.colorRows[s26].length - 1);
    return { row: s26, col: i24 };
  }
  clampIndex(o21, r16) {
    return o21 < 0 ? 0 : o21 > r16 ? r16 : o21;
  }
};

// node_modules/@progress/kendo-react-inputs/colors/models/palette-presets.mjs
var f4 = {
  basic: {
    colors: [
      "#000000",
      "#7f7f7f",
      "#880015",
      "#ed1c24",
      "#ff7f27",
      "#fff200",
      "#22b14c",
      "#00a2e8",
      "#3f48cc",
      "#a349a4",
      "#ffffff",
      "#c3c3c3",
      "#b97a57",
      "#ffaec9",
      "#ffc90e",
      "#efe4b0",
      "#b5e61d",
      "#99d9ea",
      "#7092be",
      "#c8bfe7"
    ],
    columns: 10
  },
  office: {
    colors: [
      "#ffffff",
      "#000000",
      "#e6e6e6",
      "#435569",
      "#4371c4",
      "#ed7e32",
      "#a5a4a5",
      "#febf04",
      "#5a9bd5",
      "#71ae48",
      "#f2f2f3",
      "#7f7f7f",
      "#d1cece",
      "#d5dde3",
      "#dae1f4",
      "#fce5d4",
      "#deeded",
      "#fff2cc",
      "#deeaf6",
      "#e1efd9",
      "#d7d8d8",
      "#585959",
      "#aeabab",
      "#adbaca",
      "#b4c5e7",
      "#f6caac",
      "#dbdbdb",
      "#ffe498",
      "#bcd6ee",
      "#c5e0b2",
      "#bfbfc0",
      "#3f3f3f",
      "#767070",
      "#8595b1",
      "#8fabdb",
      "#f5b183",
      "#c9c8c9",
      "#fed965",
      "#9bc4e5",
      "#a8d08d",
      "#a5a5a6",
      "#262625",
      "#393939",
      "#334050",
      "#2e5496",
      "#c45a11",
      "#7b7b7a",
      "#bf9000",
      "#2f75b5",
      "#548235",
      "#7f7f7f",
      "#0b0c0c",
      "#161616",
      "#222a34",
      "#203764",
      "#843d0b",
      "#525252",
      "#7f6000",
      "#1d4d79",
      "#375623"
    ],
    columns: 10
  },
  apex: {
    colors: [
      "#ffffff",
      "#000000",
      "#c9c2d1",
      "#69676d",
      "#ceb966",
      "#9cb084",
      "#6bb1c9",
      "#6585cf",
      "#7e6bc9",
      "#a379bb",
      "#f2f2f2",
      "#7f7f7f",
      "#f4f2f5",
      "#e0e0e2",
      "#f5f1e0",
      "#ebefe6",
      "#e1eff4",
      "#e0e6f5",
      "#e5e1f4",
      "#ece4f1",
      "#d8d8d8",
      "#595959",
      "#e9e6ec",
      "#c2c1c5",
      "#ebe3c1",
      "#d7dfcd",
      "#c3dfe9",
      "#c1ceeb",
      "#cbc3e9",
      "#dac9e3",
      "#bfbfbf",
      "#3f3f3f",
      "#dedae3",
      "#a4a3a8",
      "#e1d5a3",
      "#c3cfb5",
      "#a6d0de",
      "#a2b5e2",
      "#b1a6de",
      "#c7aed6",
      "#a5a5a5",
      "#262626",
      "#9688a5",
      "#4e4d51",
      "#ae9638",
      "#758c5a",
      "#3d8da9",
      "#365bb0",
      "#533da9",
      "#7d4d99",
      "#7f7f7f",
      "#0c0c0c",
      "#635672",
      "#343336",
      "#746425",
      "#4e5d3c",
      "#295e70",
      "#243c75",
      "#372970",
      "#533366"
    ],
    columns: 10
  },
  austin: {
    colors: [
      "#ffffff",
      "#000000",
      "#caf278",
      "#3e3d2d",
      "#94c600",
      "#71685a",
      "#ff6700",
      "#909465",
      "#956b43",
      "#fea022",
      "#f2f2f2",
      "#7f7f7f",
      "#f4fce4",
      "#dddcd0",
      "#efffc0",
      "#e3e1dc",
      "#ffe0cb",
      "#e8e9df",
      "#ece1d6",
      "#feecd2",
      "#d8d8d8",
      "#595959",
      "#e9f9c9",
      "#bbb9a1",
      "#dfff82",
      "#c8c3ba",
      "#ffc299",
      "#d2d4c0",
      "#dac3ad",
      "#fed9a6",
      "#bfbfbf",
      "#3f3f3f",
      "#dff7ae",
      "#ada598",
      "#cfff43",
      "#ada598",
      "#ffa365",
      "#bcbfa1",
      "#c8a585",
      "#fec67a",
      "#a5a5a5",
      "#262626",
      "#a9ea25",
      "#2e2d21",
      "#6f9400",
      "#544e43",
      "#bf4d00",
      "#6c6f4b",
      "#6f5032",
      "#d77b00",
      "#7f7f7f",
      "#0c0c0c",
      "#74a50f",
      "#1f1e16",
      "#4a6300",
      "#38342d",
      "#7f3300",
      "#484a32",
      "#4a3521",
      "#8f5200"
    ],
    columns: 10
  },
  clarity: {
    colors: [
      "#ffffff",
      "#292934",
      "#f3f2dc",
      "#d2533c",
      "#93a299",
      "#ad8f67",
      "#726056",
      "#4c5a6a",
      "#808da0",
      "#79463d",
      "#f2f2f2",
      "#e7e7ec",
      "#e7e5b9",
      "#f6dcd8",
      "#e9ecea",
      "#eee8e0",
      "#e4dedb",
      "#d8dde3",
      "#e5e8ec",
      "#e9d6d3",
      "#d8d8d8",
      "#c4c4d1",
      "#d5d185",
      "#edbab1",
      "#d3d9d6",
      "#ded2c2",
      "#c9beb8",
      "#b2bcc8",
      "#ccd1d9",
      "#d3aea7",
      "#bfbfbf",
      "#8a8aa3",
      "#aca73b",
      "#e4978a",
      "#bec7c1",
      "#cdbba3",
      "#af9e94",
      "#8c9bac",
      "#b2bac6",
      "#bd857c",
      "#a5a5a5",
      "#56566e",
      "#56531d",
      "#a43925",
      "#6b7c72",
      "#866b48",
      "#554840",
      "#39434f",
      "#5c697b",
      "#5a342d",
      "#7f7f7f",
      "#3b3b4b",
      "#22210b",
      "#6d2619",
      "#47534c",
      "#594730",
      "#39302b",
      "#262d35",
      "#3d4652",
      "#3c231e"
    ],
    columns: 10
  },
  slipstream: {
    colors: [
      "#ffffff",
      "#000000",
      "#b4dcfa",
      "#212745",
      "#4e67c8",
      "#5eccf3",
      "#a7ea52",
      "#5dceaf",
      "#ff8021",
      "#f14124",
      "#f2f2f2",
      "#7f7f7f",
      "#8bc9f7",
      "#c7cce4",
      "#dbe0f4",
      "#def4fc",
      "#edfadc",
      "#def5ef",
      "#ffe5d2",
      "#fcd9d3",
      "#d8d8d8",
      "#595959",
      "#4facf3",
      "#909aca",
      "#b8c2e9",
      "#beeafa",
      "#dbf6b9",
      "#beebdf",
      "#ffcca6",
      "#f9b3a7",
      "#bfbfbf",
      "#3f3f3f",
      "#0d78c9",
      "#5967af",
      "#94a3de",
      "#9ee0f7",
      "#caf297",
      "#9de1cf",
      "#ffb279",
      "#f68d7b",
      "#a5a5a5",
      "#262626",
      "#063c64",
      "#181d33",
      "#31479f",
      "#11b2eb",
      "#81d319",
      "#34ac8b",
      "#d85c00",
      "#c3260c",
      "#7f7f7f",
      "#0c0c0c",
      "#021828",
      "#101322",
      "#202f6a",
      "#0b769c",
      "#568c11",
      "#22725c",
      "#903d00",
      "#821908"
    ],
    columns: 10
  },
  metro: {
    colors: [
      "#ffffff",
      "#000000",
      "#d6ecff",
      "#4e5b6f",
      "#7fd13b",
      "#ea157a",
      "#feb80a",
      "#00addc",
      "#738ac8",
      "#1ab39f",
      "#f2f2f2",
      "#7f7f7f",
      "#a7d6ff",
      "#d9dde4",
      "#e5f5d7",
      "#fad0e4",
      "#fef0cd",
      "#c5f2ff",
      "#e2e7f4",
      "#c9f7f1",
      "#d8d8d8",
      "#595959",
      "#60b5ff",
      "#b3bcca",
      "#cbecb0",
      "#f6a1c9",
      "#fee29c",
      "#8be6ff",
      "#c7d0e9",
      "#94efe3",
      "#bfbfbf",
      "#3f3f3f",
      "#007dea",
      "#8d9baf",
      "#b2e389",
      "#f272af",
      "#fed46b",
      "#51d9ff",
      "#aab8de",
      "#5fe7d5",
      "#a5a5a5",
      "#262626",
      "#003e75",
      "#3a4453",
      "#5ea226",
      "#af0f5b",
      "#c58c00",
      "#0081a5",
      "#425ea9",
      "#138677",
      "#7f7f7f",
      "#0c0c0c",
      "#00192e",
      "#272d37",
      "#3f6c19",
      "#750a3d",
      "#835d00",
      "#00566e",
      "#2c3f71",
      "#0c594f"
    ],
    columns: 10
  },
  flow: {
    colors: [
      "#ffffff",
      "#000000",
      "#dbf5f9",
      "#04617b",
      "#0f6fc6",
      "#009dd9",
      "#0bd0d9",
      "#10cf9b",
      "#7cca62",
      "#a5c249",
      "#f2f2f2",
      "#7f7f7f",
      "#b2e9f2",
      "#b4ecfc",
      "#c7e2fa",
      "#c4eeff",
      "#c9fafc",
      "#c9faed",
      "#e4f4df",
      "#edf2da",
      "#d8d8d8",
      "#595959",
      "#76d9e8",
      "#6adafa",
      "#90c6f6",
      "#89deff",
      "#93f5f9",
      "#94f6db",
      "#cae9c0",
      "#dbe6b6",
      "#bfbfbf",
      "#3f3f3f",
      "#21b2c8",
      "#20c8f7",
      "#59a9f2",
      "#4fceff",
      "#5df0f6",
      "#5ff2ca",
      "#b0dfa0",
      "#c9da91",
      "#a5a5a5",
      "#262626",
      "#105964",
      "#02485c",
      "#0b5394",
      "#0075a2",
      "#089ca2",
      "#0b9b74",
      "#54a838",
      "#7e9532",
      "#7f7f7f",
      "#0c0c0c",
      "#062328",
      "#01303d",
      "#073763",
      "#004e6c",
      "#05686c",
      "#07674d",
      "#387025",
      "#546321"
    ],
    columns: 10
  },
  hardcover: {
    colors: [
      "#ffffff",
      "#000000",
      "#ece9c6",
      "#895d1d",
      "#873624",
      "#d6862d",
      "#d0be40",
      "#877f6c",
      "#972109",
      "#aeb795",
      "#f2f2f2",
      "#7f7f7f",
      "#e1dca5",
      "#f2e0c6",
      "#f0d0c9",
      "#f6e6d5",
      "#f5f2d8",
      "#e7e5e1",
      "#fbc7bc",
      "#eef0e9",
      "#d8d8d8",
      "#595959",
      "#d0c974",
      "#e6c28d",
      "#e2a293",
      "#eeceaa",
      "#ece5b2",
      "#cfccc3",
      "#f78f7a",
      "#dee2d4",
      "#bfbfbf",
      "#3f3f3f",
      "#a29a36",
      "#daa454",
      "#d4735e",
      "#e6b681",
      "#e2d88c",
      "#b7b2a5",
      "#f35838",
      "#ced3bf",
      "#a5a5a5",
      "#262626",
      "#514d1b",
      "#664515",
      "#65281a",
      "#a2641f",
      "#a39428",
      "#655f50",
      "#711806",
      "#879464",
      "#7f7f7f",
      "#0c0c0c",
      "#201e0a",
      "#442e0e",
      "#431b11",
      "#6c4315",
      "#6d621a",
      "#433f35",
      "#4b1004",
      "#5a6243"
    ],
    columns: 10
  },
  trek: {
    colors: [
      "#ffffff",
      "#000000",
      "#fbeec9",
      "#4e3b30",
      "#f0a22e",
      "#a5644e",
      "#b58b80",
      "#c3986d",
      "#a19574",
      "#c17529",
      "#f2f2f2",
      "#7f7f7f",
      "#f7e09e",
      "#e1d6cf",
      "#fcecd5",
      "#eddfda",
      "#f0e7e5",
      "#f3eae1",
      "#ece9e3",
      "#f5e3d1",
      "#d8d8d8",
      "#595959",
      "#f3cc5f",
      "#c4ad9f",
      "#f9d9ab",
      "#dcc0b6",
      "#e1d0cc",
      "#e7d5c4",
      "#d9d4c7",
      "#ebc7a3",
      "#bfbfbf",
      "#3f3f3f",
      "#d29f0f",
      "#a78470",
      "#f6c781",
      "#cba092",
      "#d2b9b2",
      "#dbc1a7",
      "#c6bfab",
      "#e1ac76",
      "#a5a5a5",
      "#262626",
      "#694f07",
      "#3a2c24",
      "#c87d0e",
      "#7b4b3a",
      "#926255",
      "#a17242",
      "#7b7153",
      "#90571e",
      "#7f7f7f",
      "#0c0c0c",
      "#2a1f03",
      "#271d18",
      "#855309",
      "#523226",
      "#614138",
      "#6b4c2c",
      "#524b37",
      "#603a14"
    ],
    columns: 10
  },
  verve: {
    colors: [
      "#ffffff",
      "#000000",
      "#d2d2d2",
      "#666666",
      "#ff388c",
      "#e40059",
      "#9c007f",
      "#68007f",
      "#005bd3",
      "#00349e",
      "#f2f2f2",
      "#7f7f7f",
      "#bdbdbd",
      "#e0e0e0",
      "#ffd7e8",
      "#ffc6dc",
      "#ffb8f1",
      "#f1b2ff",
      "#c3dcff",
      "#b8cfff",
      "#d8d8d8",
      "#595959",
      "#9d9d9d",
      "#c1c1c1",
      "#ffafd1",
      "#ff8eba",
      "#ff71e4",
      "#e365ff",
      "#87baff",
      "#72a0ff",
      "#bfbfbf",
      "#3f3f3f",
      "#696969",
      "#a3a3a3",
      "#ff87ba",
      "#ff5597",
      "#ff2ad7",
      "#d519ff",
      "#4b98ff",
      "#2b71ff",
      "#a5a5a5",
      "#262626",
      "#343434",
      "#4c4c4c",
      "#e90062",
      "#ab0042",
      "#75005f",
      "#4e005f",
      "#00449e",
      "#002676",
      "#7f7f7f",
      "#0c0c0c",
      "#151515",
      "#333333",
      "#9b0041",
      "#72002c",
      "#4e003f",
      "#34003f",
      "#002d69",
      "#00194f"
    ],
    columns: 10
  },
  monochrome: {
    colors: [
      "#000000",
      "#1a1a1a",
      "#333333",
      "#4d4d4d",
      "#666666",
      "#808080",
      "#999999",
      "#b3b3b3",
      "#cccccc",
      "#e6e6e6",
      "#f2f2f2",
      "#ffffff"
    ],
    columns: 12
  }
};

// node_modules/@progress/kendo-react-inputs/colors/ColorPalette.mjs
var I4 = 24;
var f5 = 10;
var D4 = "office";
var a9 = class a10 extends i11.Component {
  constructor(t25) {
    super(t25), this.wrapperRef = i11.createRef(), this.paletteService = null, this.focus = () => {
      this.wrapperRef && this.wrapperRef.current && this.wrapperRef.current.focus();
    }, this.onKeyDown = (e32) => {
      switch (e32.key) {
        case t2.down:
          this.handleCellNavigation(0, 1);
          break;
        case t2.up:
          this.handleCellNavigation(0, -1);
          break;
        case t2.right:
          this.handleCellNavigation(1, 0);
          break;
        case t2.left:
          this.handleCellNavigation(-1, 0);
          break;
        case t2.enter:
          this.handleEnter(e32);
          break;
        default:
          return;
      }
      e32.preventDefault();
    }, this.onColorClick = (e32, o21) => {
      this.isUncontrolled ? this.setState({ selectedColor: e32, focusedColor: e32 }) : this.setState({ focusedColor: e32 }), this.dispatchChangeEvent(e32, o21);
    }, this.onFocus = (e32) => {
      this.paletteService && (this.setState({ focusedColor: this.state.selectedColor || this.paletteService.colorRows[0][0] }), this.props.onFocus && this.props.onFocus.call(void 0, e32));
    }, this.onBlur = () => {
      this.setState({ focusedColor: void 0 });
    }, this.state = {
      selectedColor: this.props.value !== void 0 ? this.props.value : this.props.defaultValue ? this.props.defaultValue : void 0,
      isFirstRender: true
    };
  }
  get guid() {
    return this.props.id;
  }
  /**
   * @hidden
   */
  render() {
    const t25 = this.getPaletteInfo(), e32 = this.paletteService = new f3();
    e32.setColorMatrix(t25.colors, t25.columns);
    const o21 = e32.getCellCoordsFor(this.state.selectedColor), r16 = e32.getCellCoordsFor(this.state.focusedColor);
    return t25.colors.length ? i11.createElement(
      "div",
      {
        id: this.props.id,
        role: "grid",
        className: n2(
          "k-colorpalette",
          {
            [`k-colorpalette-${a4.sizeMap[this.props.size] || this.props.size}`]: this.props.size,
            "k-disabled": this.props.disabled
          },
          this.props.className
        ),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        "aria-disabled": this.props.ariaDisabled || (this.props.disabled ? "true" : void 0),
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-describedby": this.props.ariaDescribedBy,
        tabIndex: e4(this.props.tabIndex, this.props.disabled),
        ref: this.wrapperRef
      },
      i11.createElement("table", { className: "k-colorpalette-table", role: "presentation" }, i11.createElement("tbody", { role: "rowgroup" }, this.renderRows(e32.colorRows, o21, r16)))
    ) : "";
  }
  /**
   * @hidden
   */
  static getDerivedStateFromProps(t25, e32) {
    if (!e32.isFirstRender && t25.value !== void 0) {
      if (t25.value === "" && e32.selectedColor !== void 0)
        return { selectedColor: void 0 };
      if (t25.value !== "" && t25.value !== e32.selectedColor)
        return { selectedColor: t25.value };
    } else if (e32.isFirstRender)
      return { isFirstRender: false };
    return null;
  }
  handleCellNavigation(t25, e32) {
    if (this.paletteService)
      if (this.focusedColorCooridanates) {
        const o21 = this.paletteService.getNextCell(
          this.focusedColorCooridanates,
          t25,
          e32
        );
        this.setState({ focusedColor: this.paletteService.getColorAt(o21) });
      } else
        this.setState({ focusedColor: this.paletteService.colorRows[0][0] });
  }
  handleEnter(t25) {
    this.isUncontrolled && this.setState({ selectedColor: this.state.focusedColor }), this.dispatchChangeEvent(this.state.focusedColor, t25);
  }
  dispatchChangeEvent(t25, e32) {
    v2(this.props.onChange, e32, this, { value: t25, rgbaValue: B3(t25, "rgba") });
  }
  get focusedColorCooridanates() {
    return this.state.focusedColor && this.paletteService ? this.paletteService.getCellCoordsFor(this.state.focusedColor) : void 0;
  }
  get isUncontrolled() {
    return this.props.value === void 0;
  }
  getPaletteInfo() {
    if (typeof this.props.palette == "string") {
      const t25 = f4[this.props.palette];
      return u4(t25) ? {
        colors: t25.colors,
        columns: this.props.columns || t25.columns || f5
      } : { colors: [], columns: 0 };
    }
    return { colors: this.props.palette || [], columns: this.props.columns || f5 };
  }
  renderRows(t25, e32, o21) {
    return t25.map((r16, n27) => i11.createElement("tr", { role: "row", key: n27 }, this.renderColumns(r16, n27, e32, o21)));
  }
  renderColumns(t25, e32, o21, r16) {
    const n27 = o21 !== void 0 && o21.row === e32, C7 = o21 && o21.col, m11 = r16 !== void 0 && r16.row === e32, v14 = r16 && r16.col;
    return t25.map((d10, c16) => {
      const h16 = n27 && C7 === c16, g9 = n2("k-colorpalette-tile", {
        "k-selected": h16,
        "k-focus": m11 && v14 === c16
      });
      return i11.createElement(
        "td",
        {
          role: "gridcell",
          className: g9,
          "aria-label": d10,
          "aria-selected": h16 ? true : this.props.disabled ? void 0 : false,
          style: { backgroundColor: d10 },
          onClick: (b8) => this.onColorClick(d10, b8),
          id: this.createCellId({ row: e32, col: c16 }),
          key: c16
        }
      );
    });
  }
  createCellId(t25) {
    return `${this.guid}_${t25.row}_${t25.col}`;
  }
};
a9.displayName = "ColorPalette", a9.propTypes = {
  palette: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string.isRequired), import_prop_types5.default.string]),
  columns: import_prop_types5.default.number,
  tileSize: import_prop_types5.default.any,
  defaultValue: import_prop_types5.default.string,
  value: import_prop_types5.default.string,
  disabled: import_prop_types5.default.bool,
  tabIndex: import_prop_types5.default.number,
  onChange: import_prop_types5.default.func,
  onFocus: import_prop_types5.default.func,
  id: import_prop_types5.default.string,
  ariaLabelledBy: import_prop_types5.default.string,
  ariaDescribedBy: import_prop_types5.default.string,
  className: import_prop_types5.default.string,
  size: import_prop_types5.default.oneOf(["small", "medium", "large", null])
}, a9.defaultProps = {
  palette: D4,
  tileSize: I4,
  size: "medium"
};
var p9 = a9;
var z3 = a();
var L4 = a2(
  x(
    z3,
    p9
  )
);
L4.displayName = "KendoReactColorPalette";

// node_modules/@progress/kendo-react-inputs/colors/ColorPicker.mjs
var t9 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/colors/Picker.mjs
var o9 = __toESM(require_react(), 1);
var m5 = "bottom";
var r5 = "top";
var s10 = (e32) => {
  const n27 = e32.popupSettings || {}, t25 = e32.dir === "rtl" ? "right" : "left", i24 = o9.useMemo(
    () => ({ horizontal: t25, vertical: m5 }),
    [t25]
  ), l16 = o9.useMemo(
    () => ({ horizontal: t25, vertical: r5 }),
    [t25]
  );
  return o9.createElement(o9.Fragment, null, e32.input, e32.button, !e32._mobileMode && o9.createElement(
    te,
    {
      style: {
        ...(n27 || {}).style,
        direction: e32.dir
      },
      ...n27,
      anchor: e32.popupAnchor,
      anchorAlign: i24,
      popupAlign: l16,
      show: e32.open,
      onOpen: e32.onOpen,
      onClose: e32.onClose,
      className: n2(n27.className),
      popupClass: "k-colorpicker-popup"
    },
    e32.content
  ), e32._mobileMode && e32._actionSheet);
};
s10.displayName = "KendoPickerComponent";

// node_modules/@progress/kendo-react-inputs/colors/FlatColorPicker.mjs
var a11 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);
var T4 = a11.forwardRef((e32, D8) => {
  const H3 = !h(e9, { component: "FlatColorPicker" }), f13 = a11.useRef(null), y11 = a11.useRef(null), W4 = a11.useRef(null), {
    defaultValue: b8,
    showButtons: w11 = true,
    showPreview: q3 = true,
    showClearButton: $6 = true,
    view: h16 = e32.views ? void 0 : "ColorGradient",
    views: r16 = h16 ? void 0 : ["gradient", "palette"],
    activeView: P10 = "gradient",
    size: o21 = "medium"
  } = e32, [v14, j4] = a11.useState(
    (h16 || "ColorGradient") === "ColorGradient"
  ), [d10, x8] = a11.useState(
    (r16 != null ? r16 : [])[0] === "gradient" && P10 === "gradient"
  ), [i24, E8] = a11.useState(e32.value || b8 || void 0), [g9, I11] = a11.useState(e32.value || b8 || void 0), B6 = e32.value !== void 0 ? e32.value : void 0;
  a11.useEffect(() => {
    E8(e32.value);
  }, [e32.value]);
  const m11 = i4(), R5 = a11.useCallback(() => {
    f13.current && f13.current.focus();
  }, [f13]);
  a11.useImperativeHandle(
    f13,
    () => ({
      element: y11.current,
      focus: R5,
      props: e32,
      value: B6
    }),
    [B6, R5, e32]
  ), a11.useImperativeHandle(D8, () => f13.current);
  const A13 = a11.useCallback(
    (t25) => {
      (t25 === "ColorGradient" && !v14 || t25 === "ColorPalette" && v14) && j4(!v14);
    },
    [v14]
  ), N4 = a11.useCallback(
    (t25) => {
      t25 === "gradient" && !d10 || t25 === "palette" && d10 || t25 === "palette" && P10 === "gradient" ? x8(!d10) : t25 === "gradient" && P10 === "palette" && x8(true);
    },
    [P10, d10]
  ), J3 = a11.useCallback(
    (t25) => {
      var c16;
      const n27 = b8 || void 0;
      if (E8(n27), I11(n27), (c16 = e32._gradientSettings) != null && c16._adaptive && e32.setAdaptiveModeValue && e32.setAdaptiveModeValue(n27), e32.onPreviewChange) {
        const S5 = {
          value: n27,
          nativeEvent: t25.nativeEvent,
          syntheticEvent: t25
        };
        e32.onPreviewChange.call(void 0, S5);
      }
    },
    [b8, e32.onPreviewChange]
  ), F8 = a11.useCallback(
    (t25) => {
      var n27;
      if (E8(t25.value), e32.onPreviewChange) {
        const c16 = {
          value: t25.value,
          nativeEvent: t25.nativeEvent,
          syntheticEvent: t25.syntheticEvent
        };
        e32.onPreviewChange.call(void 0, c16);
      }
      (n27 = e32._gradientSettings) != null && n27._adaptive && e32.setAdaptiveModeValue && e32.setAdaptiveModeValue(t25.value);
    },
    [e32.onPreviewChange]
  ), Q3 = a11.useCallback(
    (t25) => {
      if (i24 !== void 0 && I11(i24), e32.onChange) {
        const n27 = {
          value: i24,
          nativeEvent: t25.nativeEvent,
          syntheticEvent: t25
        };
        e32.onChange.call(void 0, n27);
      }
    },
    [i24, e32.onChange]
  ), U2 = a11.useCallback(() => {
    E8(g9), e32.setOpen && e32.setOpen(false);
  }, [g9]), X = a11.useCallback(
    (t25) => {
      if (E8(g9), e32.onPreviewChange) {
        const n27 = {
          value: g9,
          nativeEvent: t25.nativeEvent,
          syntheticEvent: t25
        };
        e32.onPreviewChange.call(void 0, n27);
      }
    },
    [g9, e32.onPreviewChange]
  ), Y2 = a11.useCallback(
    (t25) => {
      var c16, S5;
      if ((!t25.relatedTarget || !((c16 = y11.current) != null && c16.contains(t25.relatedTarget))) && !((S5 = e32._gradientSettings) != null && S5._adaptive) && (!w11 && i24 !== void 0 && I11(i24), !w11 && e32.onChange)) {
        const p18 = {
          value: i24,
          nativeEvent: t25.nativeEvent,
          syntheticEvent: t25
        };
        e32.onChange.call(void 0, p18);
      }
    },
    [i24, w11, e32.onChange]
  ), z5 = a11.useMemo(
    () => new l2({
      root: y11,
      selectors: [".k-coloreditor"],
      tabIndex: 0,
      keyboardEvents: {
        keydown: {
          Tab: (t25, n27, c16) => {
            o4(document) === t25 ? y(t25) : n3(c16, t25);
          },
          Enter: (t25, n27, c16) => {
            o4(document) === t25 && (e3(t25), g(t25));
          },
          Escape: (t25, n27, c16) => {
            o4(document) !== t25 && (t25.focus(), y(t25));
          }
        }
      }
    }),
    []
  ), Z2 = a11.useCallback(z5.triggerKeyboardEvent.bind(z5), []);
  return a11.createElement(
    "div",
    {
      id: e32.id,
      role: "textbox",
      "aria-label": e32.ariaLabel,
      "aria-labelledby": e32.ariaLabelledBy,
      "aria-disabled": e32.disabled ? "true" : void 0,
      style: { position: "relative", ...e32.style },
      ref: y11,
      tabIndex: e4(e32.tabIndex, e32.disabled),
      className: n2(
        "k-flatcolorpicker k-coloreditor",
        {
          [`k-coloreditor-${a4.sizeMap[o21] || o21}`]: o21,
          "k-disabled": e32.disabled
        },
        e32.className
      ),
      onBlur: Y2,
      onKeyDown: Z2
    },
    e32.header || a11.createElement("div", { className: "k-coloreditor-header k-hstack" }, a11.createElement("div", { className: "k-coloreditor-header-actions k-hstack" }, r16 && r16[0] === "gradient" && r16[1] === "palette" && a11.createElement(T, { className: "k-button-group-flat" }, a11.createElement(
      M,
      {
        type: "button",
        "aria-label": m11.toLanguageString(
          b,
          I3[b]
        ),
        togglable: true,
        fillMode: "flat",
        size: o21,
        svgIcon: dropletSliderIcon,
        selected: d10,
        onClick: () => N4("gradient")
      }
    ), a11.createElement(
      M,
      {
        type: "button",
        "aria-label": m11.toLanguageString(
          m,
          I3[m]
        ),
        togglable: true,
        fillMode: "flat",
        size: o21,
        svgIcon: paletteIcon,
        selected: !d10,
        onClick: () => N4("palette")
      }
    )), r16 && r16[0] === "palette" && r16[1] === "gradient" && a11.createElement(T, { className: "k-button-group-flat" }, a11.createElement(
      M,
      {
        type: "button",
        "aria-label": m11.toLanguageString(
          m,
          I3[m]
        ),
        togglable: true,
        fillMode: "flat",
        size: o21,
        svgIcon: paletteIcon,
        selected: !d10,
        onClick: () => N4("palette")
      }
    ), a11.createElement(
      M,
      {
        type: "button",
        "aria-label": m11.toLanguageString(
          b,
          I3[b]
        ),
        togglable: true,
        fillMode: "flat",
        size: o21,
        svgIcon: dropletSliderIcon,
        selected: d10,
        onClick: () => N4("gradient")
      }
    )), h16 && a11.createElement(T, { className: "k-button-group-flat" }, a11.createElement(
      M,
      {
        type: "button",
        "aria-label": m11.toLanguageString(
          b,
          I3[b]
        ),
        togglable: true,
        fillMode: "flat",
        size: o21,
        selected: v14,
        onClick: () => A13("ColorGradient"),
        icon: "droplet-slider",
        svgIcon: dropletSliderIcon
      }
    ), a11.createElement(
      M,
      {
        type: "button",
        "aria-label": m11.toLanguageString(
          m,
          I3[m]
        ),
        togglable: true,
        fillMode: "flat",
        size: o21,
        selected: !v14,
        onClick: () => A13("ColorPalette"),
        icon: "palette",
        svgIcon: paletteIcon
      }
    ))), a11.createElement("div", { className: "k-spacer" }), a11.createElement("div", { className: "k-coloreditor-header-actions k-hstack" }, $6 && a11.createElement(
      M,
      {
        type: "button",
        fillMode: "flat",
        size: o21,
        onClick: J3,
        "aria-label": m11.toLanguageString(
          B,
          I3[B]
        ),
        icon: "droplet-slash",
        svgIcon: dropletSlashIcon
      }
    ), q3 && a11.createElement("div", { className: "k-coloreditor-preview k-vstack" }, a11.createElement(
      "span",
      {
        className: n2("k-coloreditor-preview-color", "k-color-preview", {
          "k-no-color": B6 === void 0
        })
      },
      a11.createElement(
        "span",
        {
          className: "k-color-preview-mask",
          style: { background: i24 || void 0 }
        }
      )
    ), a11.createElement(
      "span",
      {
        className: n2("k-coloreditor-current-color", "k-color-preview", {
          "k-no-color": g9 === void 0
        }),
        onClick: X
      },
      a11.createElement(
        "span",
        {
          className: "k-color-preview-mask",
          style: { background: g9 || void 0 }
        }
      )
    ))), H3 && a11.createElement(l, null)),
    a11.createElement("div", { className: "k-coloreditor-views k-vstack" }, (h16 && v14 || r16 && d10) && a11.createElement(
      ae2,
      {
        ref: W4,
        role: "none",
        ariaLabel: void 0,
        value: i24,
        onChange: F8,
        opacity: e32.opacity,
        format: e32.format,
        size: o21,
        _adaptive: e32._gradientSettings ? e32._gradientSettings._adaptive : void 0,
        ...e32._gradientSettings
      }
    ), (h16 && !v14 || r16 && !d10) && a11.createElement(
      L4,
      {
        ariaDisabled: true,
        ariaLabelledBy: "required_label",
        value: i24,
        onChange: F8,
        size: o21
      }
    )),
    w11 && a11.createElement("div", { className: "k-coloreditor-footer k-actions k-actions-end k-actions-horizontal" }, a11.createElement(M, { type: "button", className: "k-coloreditor-cancel", size: o21, onClick: U2 }, I3[k]), a11.createElement(
      M,
      {
        type: "button",
        themeColor: "primary",
        className: "k-coloreditor-apply",
        size: o21,
        onClick: Q3
      },
      I3[x2]
    ))
  );
});
var ke = {
  id: import_prop_types6.default.string,
  style: import_prop_types6.default.any,
  className: import_prop_types6.default.string,
  value: import_prop_types6.default.string,
  defaultValue: import_prop_types6.default.string,
  onPreviewChange: import_prop_types6.default.func,
  onChange: import_prop_types6.default.func,
  opacity: import_prop_types6.default.bool,
  format: import_prop_types6.default.any,
  tabIndex: import_prop_types6.default.number,
  ariaLabel: import_prop_types6.default.string,
  ariaLabelledBy: import_prop_types6.default.string,
  disabled: import_prop_types6.default.bool,
  view: import_prop_types6.default.any,
  header: import_prop_types6.default.any,
  showClearButton: import_prop_types6.default.bool,
  showPreview: import_prop_types6.default.bool,
  showButtons: import_prop_types6.default.bool,
  views: import_prop_types6.default.array,
  size: import_prop_types6.default.oneOf([null, "small", "medium", "large"])
};
T4.displayName = "KendoFlatColorPicker";
T4.propTypes = ke;

// node_modules/@progress/kendo-react-inputs/common/AdaptiveMode.mjs
var t8 = __toESM(require_react(), 1);
var A5 = (i24) => {
  const {
    windowWidth: l16 = 0,
    children: c16,
    navigatable: r16,
    navigatableElements: s26,
    expand: m11,
    animation: p18,
    title: d10,
    subTitle: b8,
    footer: e32,
    onClose: n27
  } = i24, f13 = () => t8.createElement(
    M,
    {
      tabIndex: 0,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      icon: "x",
      svgIcon: xIcon,
      onClick: n27
    }
  ), a37 = n(), h16 = {
    navigatable: r16 || false,
    navigatableElements: s26 || [],
    expand: m11,
    animation: p18,
    actions: f13(),
    onClose: n27,
    animationStyles: a37 && l16 <= a37.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    title: d10,
    subTitle: b8,
    className: "k-adaptive-actionsheet",
    position: a37 && l16 <= a37.small ? "fullscreen" : void 0
  };
  return t8.createElement(K2, { ...h16 }, c16, t8.createElement(e6, { className: "k-actions k-actions-stretched" }, t8.createElement(
    M,
    {
      size: "large",
      className: "k-coloreditor-cancel",
      "aria-label": e32.cancelText,
      onClick: e32.onCancel
    },
    e32.cancelText
  ), t8.createElement(
    M,
    {
      themeColor: "primary",
      size: "large",
      className: "k-coloreditor-apply",
      "aria-label": e32.applyText,
      onClick: e32.onApply
    },
    e32.applyText
  )));
};

// node_modules/@progress/kendo-react-inputs/colors/ColorPicker.mjs
var st = {
  opacity: true
};
var ut = {
  palette: D4,
  tileSize: I4
};
var M4 = (D8) => D8 !== void 0;
var dt = a();
var ge2 = t9.forwardRef((D8, ke4) => {
  var re3, oe;
  const Ce3 = !h(e9, { component: "ColorPicker" }), o21 = n4(dt, D8), b8 = i4(), Z2 = n(), {
    size: u17 = k2.size,
    rounded: L8 = k2.rounded,
    fillMode: S5 = k2.fillMode,
    gradientSettings: C7 = k2.gradientSettings,
    paletteSettings: j4 = k2.paletteSettings,
    flatColorPickerSettings: w11,
    view: d10 = o21.views ? void 0 : k2.view,
    views: c16 = d10 ? void 0 : k2.views,
    activeView: q3,
    popupSettings: m11,
    valid: Ee4,
    disabled: x8,
    tabIndex: be3,
    icon: N4,
    svgIcon: O6,
    iconClassName: P10,
    onChange: F8,
    onFocus: V3,
    onBlur: H3,
    onActiveColorClick: W4,
    className: we,
    adaptive: ye,
    adaptiveTitle: J3 = b8.toLanguageString(h3, I3[h3])
  } = o21, s26 = t9.useRef(null), y11 = t9.useRef(null), T7 = t9.useRef(null), f13 = t9.useRef(null), E8 = t9.useRef(), he3 = t9.useRef(null), [Se, Q3] = t9.useState(false), [Pe, Te3] = t9.useState(o21.defaultValue), [_e, Re2] = t9.useState(false), [_4, Ae2] = t9.useState(), U2 = M4(o21.value), v14 = M4(o21.open), l16 = U2 ? o21.value : Pe, g9 = v14 ? o21.open : _e, X = t9.useRef(l16), Y2 = t9.useCallback(() => {
    s26.current && s26.current.focus();
  }, []);
  t9.useImperativeHandle(
    ke4,
    () => ({
      // we agreed that each element will have focus method exposed
      element: s26.current,
      actionElement: he3.current,
      value: l16,
      focus: Y2
    }),
    [l16, Y2]
  );
  const Ie2 = !!(_4 && Z2 && _4 <= Z2.medium && ye);
  t9.useEffect(() => {
    const e32 = e && window.ResizeObserver && new window.ResizeObserver(Fe.bind(void 0));
    return document != null && document.body && e32 && e32.observe(document.body), () => {
      document != null && document.body && e32 && e32.disconnect();
    };
  }, []);
  const r16 = t9.useCallback(
    (e32, i24) => {
      v14 || (!e32 && !i24 && s26 && s26.current && s26.current.focus(), Re2(e32));
    },
    [v14]
  ), ee4 = t9.useMemo(() => new l2({
    root: s26,
    selectors: [".k-colorpicker", ".k-color-picker-popup"],
    tabIndex: 0,
    keyboardEvents: {
      keydown: {
        Escape: (e32, i24, n27) => {
          r16(false);
        },
        Enter: (e32, i24, n27) => {
          !v14 && e32 === s26.current && (n27.preventDefault(), n27.stopPropagation(), r16(true));
        },
        ArrowDown: (e32, i24, n27) => {
          n27.altKey && (n27.preventDefault(), n27.stopPropagation(), r16(true));
        },
        ArrowUp: (e32, i24, n27) => {
          n27.altKey && (n27.preventDefault(), n27.stopPropagation(), r16(false));
        },
        Tab: (e32, i24, n27) => {
          var h16, le4, ie3;
          if (o4(document) !== s26.current) {
            const ce = (h16 = T7.current) == null ? void 0 : h16.wrapperRef.current, A13 = (le4 = y11.current) == null ? void 0 : le4.wrapperRef.current, se5 = (ie3 = f13.current) == null ? void 0 : ie3.element;
            d10 === "palette" && ce ? n3(n27, ce) : d10 === "gradient" && A13 ? n3(n27, A13) : d10 === "combo" && A13 ? n3(n27, A13.parentElement) : c16 && se5 && n3(n27, se5);
          }
        }
      }
    }
  }), [r16, v14]), ze3 = t9.useCallback(ee4.triggerKeyboardEvent.bind(ee4), []), Be = t9.useCallback(() => {
    v14 || (y11.current && y11.current.wrapperRef.current ? e3(y11.current.wrapperRef.current) : T7.current ? T7.current.focus() : f13.current && f13.current.element && e3(f13.current.element));
  }, [v14]), R5 = (e32) => X.current = e32, te5 = t9.useCallback(
    (e32) => {
      const i24 = {
        value: X.current,
        nativeEvent: e32.nativeEvent,
        syntheticEvent: e32
      };
      p18(i24), r16(!g9, true);
    },
    [g9]
  ), K5 = t9.useCallback(() => {
    r16(false, true);
  }, [r16]), De = t9.useCallback(
    (e32) => {
      W4 && W4.call(void 0, {
        syntheticEvent: e32,
        nativeEvent: e32.nativeEvent,
        value: l16,
        target: {
          element: s26.current,
          value: l16
        }
      });
    },
    [W4, l16]
  ), Le3 = t9.useCallback(
    (e32) => {
      E8.current ? (clearTimeout(E8.current), E8.current = void 0) : Q3(true), V3 && V3.call(void 0, {
        nativeEvent: e32.nativeEvent,
        syntheticEvent: e32
      });
    },
    [V3]
  ), xe2 = t9.useCallback(() => {
    r16(false, true), Q3(false), E8.current = void 0;
  }, []), Ne3 = t9.useCallback(
    (e32) => {
      clearTimeout(E8.current), E8.current = window.setTimeout(xe2), H3 && H3.call(void 0, {
        nativeEvent: e32.nativeEvent,
        syntheticEvent: e32
      });
    },
    [H3]
  ), p18 = t9.useCallback(
    (e32, i24) => {
      var h16;
      const n27 = i24 ? e32.rgbaValue || "" : (h16 = e32.value) != null ? h16 : "";
      U2 || Te3(n27), F8 && F8.call(void 0, {
        value: n27,
        nativeEvent: e32.nativeEvent,
        syntheticEvent: e32.syntheticEvent,
        target: {
          element: s26.current,
          value: n27
        }
      }), r16(false);
    },
    [U2, F8]
  ), ne3 = t9.useCallback(
    (e32) => p18(e32, true),
    [M4, p18]
  ), $6 = t9.useCallback(
    (e32) => t9.createElement(t9.Fragment, null, (d10 === "combo" || d10 === "gradient") && t9.createElement(
      ae2,
      {
        ...C7,
        _adaptive: e32,
        ref: y11,
        isInsidePopup: true,
        size: e32 ? "large" : u17,
        fillMode: S5,
        value: l16,
        onChange: p18
      }
    ), (d10 === "combo" || d10 === "palette") && t9.createElement(
      L4,
      {
        ...j4,
        ref: T7,
        size: e32 ? "large" : u17,
        value: l16,
        onChange: ne3
      }
    ), c16 && c16[0] === "gradient" && c16[1] === "palette" && t9.createElement(
      T4,
      {
        ...w11,
        _gradientSettings: { _adaptive: e32, ...C7 },
        ref: f13,
        size: e32 ? "large" : u17,
        views: ["gradient", "palette"],
        activeView: q3,
        setOpen: r16,
        showButtons: !e32,
        value: l16,
        onChange: p18,
        setAdaptiveModeValue: R5
      }
    ), c16 && c16[0] === "palette" && c16[1] === "gradient" && t9.createElement(
      T4,
      {
        ...w11,
        _gradientSettings: { _adaptive: e32, ...C7 },
        ref: f13,
        size: e32 ? "large" : u17,
        views: ["palette", "gradient"],
        setOpen: r16,
        showButtons: !e32,
        value: l16,
        onChange: p18,
        setAdaptiveModeValue: R5
      }
    ), c16 && c16.includes("gradient") && !c16.includes("palette") && t9.createElement(
      T4,
      {
        ...w11,
        _gradientSettings: { _adaptive: e32, ...C7 },
        ref: f13,
        size: e32 ? "large" : u17,
        views: ["gradient"],
        showButtons: !e32,
        setOpen: r16,
        value: l16,
        onChange: p18,
        setAdaptiveModeValue: R5
      }
    ), c16 && c16.includes("palette") && !c16.includes("gradient") && t9.createElement(
      T4,
      {
        ...w11,
        _gradientSettings: { _adaptive: e32, ...C7 },
        ref: f13,
        size: e32 ? "large" : u17,
        views: ["palette"],
        showButtons: !e32,
        setOpen: r16,
        value: l16,
        onChange: p18,
        setAdaptiveModeValue: R5
      }
    ), Ce3 && t9.createElement(l, null)),
    [
      q3,
      S5,
      w11,
      C7,
      p18,
      ne3,
      j4,
      r16,
      u17,
      l16,
      d10,
      c16
    ]
  ), Oe3 = t9.useCallback(() => {
    var i24;
    const e32 = {
      animation: !!((i24 = m11 == null ? void 0 : m11.animate) == null || i24),
      title: J3,
      expand: g9,
      onClose: K5,
      windowWidth: _4,
      footer: {
        cancelText: b8.toLanguageString(k, I3[k]),
        onCancel: K5,
        applyText: b8.toLanguageString(x2, I3[x2]),
        onApply: te5
      }
    };
    return t9.createElement(A5, { ...e32 }, t9.createElement(t3, { overflowHidden: true }, $6(true)));
  }, [
    m11 == null ? void 0 : m11.animate,
    J3,
    g9,
    K5,
    _4,
    b8,
    te5,
    $6
  ]), Fe = t9.useCallback((e32) => {
    for (const i24 of e32)
      Ae2(i24.target.clientWidth);
  }, []), ae3 = u(s26, o21.dir), Ve2 = Ee4 !== false;
  return t9.createElement(
    "span",
    {
      id: o21.id,
      role: "combobox",
      "aria-label": o21.ariaLabel,
      "aria-labelledby": o21.ariaLabelledBy,
      "aria-describedby": o21.ariaDescribedBy,
      "aria-haspopup": "dialog",
      "aria-expanded": g9,
      "aria-controls": `k-colorpicker-popup-${(re3 = o21.id) != null ? re3 : 0}`,
      "aria-disabled": x8 ? "true" : void 0,
      className: n2("k-colorpicker", "k-picker", "k-icon-picker", {
        [`k-picker-${a4.sizeMap[u17] || u17}`]: u17,
        [`k-picker-${S5}`]: S5,
        [`k-rounded-${a4.roundedMap[L8] || L8}`]: L8,
        "k-invalid": !Ve2,
        "k-disabled": x8,
        "k-focus": Se,
        className: we
      }),
      ref: s26,
      tabIndex: e4(be3, x8),
      title: o21.title,
      onKeyDown: ze3,
      onFocus: Le3,
      onBlur: Ne3,
      dir: ae3
    },
    t9.createElement(
      s10,
      {
        dir: ae3,
        open: g9,
        onOpen: Be,
        popupAnchor: s26.current || void 0,
        popupSettings: { id: `k-colorpicker-popup-${(oe = o21.id) != null ? oe : 0}`, ...m11 },
        input: t9.createElement("span", { onClick: De, className: "k-input-inner" }, t9.createElement(
          "span",
          {
            className: n2("k-value-icon", "k-color-preview", {
              "k-no-color": !l16,
              "k-icon-color-preview": N4 || O6 || P10
            })
          },
          P10 && t9.createElement("span", { className: n2("k-color-preview-icon", P10) }),
          !P10 && (N4 || O6) && t9.createElement(v3, { name: N4, icon: O6 }),
          t9.createElement("span", { className: "k-color-preview-mask", style: { backgroundColor: l16 } })
        )),
        button: t9.createElement(
          M,
          {
            tabIndex: -1,
            type: "button",
            onClick: () => r16(!g9),
            className: "k-input-button",
            rounded: null,
            icon: "caret-alt-down",
            svgIcon: caretAltDownIcon,
            "aria-label": b8.toLanguageString(
              T2,
              I3[T2]
            )
          }
        ),
        content: $6(false),
        _mobileMode: Ie2,
        _actionSheet: Oe3()
      }
    )
  );
});
ge2.propTypes = {
  value: import_prop_types7.default.string,
  defaultValue: import_prop_types7.default.string,
  disabled: import_prop_types7.default.bool,
  view: import_prop_types7.default.oneOf(["gradient", "palette", "combo"]),
  views: import_prop_types7.default.arrayOf(import_prop_types7.default.oneOf(["gradient", "palette"])),
  dir: import_prop_types7.default.string,
  id: import_prop_types7.default.string,
  icon: import_prop_types7.default.string,
  svgIcon: r,
  ariaLabelledBy: import_prop_types7.default.string,
  ariaDescribedBy: import_prop_types7.default.string,
  size: import_prop_types7.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types7.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types7.default.oneOf([null, "solid", "flat", "outline"]),
  className: import_prop_types7.default.string,
  adaptive: import_prop_types7.default.bool,
  adaptiveTitle: import_prop_types7.default.string
};
var k2 = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  view: "palette",
  views: ["gradient", "palette"],
  gradientSettings: st,
  paletteSettings: ut
};
ge2.displayName = "KendoColorPicker";

// node_modules/@progress/kendo-react-inputs/input/Input.mjs
var r6 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);
var C4 = r6.forwardRef((I11, L8) => {
  const M7 = r6.useContext($2).call(void 0, I11), [, P10] = r6.useReducer((t25) => t25, true), n27 = c(M7, ee2), {
    className: x8,
    label: o21,
    labelClassName: E8,
    id: N4,
    validationMessage: p18,
    defaultValue: R5,
    valid: f13,
    unstyled: V3,
    // Removed to support direct use in Form Field component
    visited: ae3,
    touched: re3,
    modified: ne3,
    autoFocus: k8,
    ariaLabelledBy: w11,
    ariaDescribedBy: F8,
    validityStyles: y11,
    style: m11,
    ariaLabel: U2,
    ...B6
  } = n27, D8 = n5(), u17 = V3 || D8, O6 = u17 && u17.uInput, S5 = I(), [T7, q3] = r6.useState({
    value: R5
  }), g9 = N4 || S5, e32 = r6.useRef(null), s26 = r6.useRef(void 0), d10 = r6.useRef(null), A13 = () => {
    e32.current && e32.current.focus();
  }, c16 = () => s26.current !== void 0 ? s26.current : n27.value !== void 0 ? n27.value : T7.value, l16 = () => {
    const t25 = {
      badInput: e32.current ? e32.current.validity.badInput : false,
      patternMismatch: e32.current ? e32.current.validity.patternMismatch : false,
      rangeOverflow: e32.current ? e32.current.validity.rangeOverflow : false,
      rangeUnderflow: e32.current ? e32.current.validity.rangeUnderflow : false,
      stepMismatch: e32.current ? e32.current.validity.stepMismatch : false,
      tooLong: e32.current ? e32.current.validity.tooLong : false,
      typeMismatch: e32.current ? e32.current.validity.typeMismatch : false,
      valueMissing: e32.current ? e32.current.validity.valueMissing : false
    };
    return {
      ...t25,
      customError: p18 !== void 0,
      valid: f13 !== void 0 ? f13 : e32.current ? !G6(t25) : true
    };
  };
  r6.useImperativeHandle(d10, () => ({
    element: e32.current,
    props: n27,
    get value() {
      return c16();
    },
    name: n27.name,
    get validity() {
      return l16();
    },
    focus: A13
  })), r6.useImperativeHandle(L8, () => d10.current);
  const G6 = (t25) => {
    let i24 = false;
    for (const h16 in t25)
      t25.hasOwnProperty(h16) && (i24 = i24 || !!t25[h16]);
    return i24;
  }, v14 = !y11 || l16().valid, H3 = n2(
    x8,
    F.input({
      c: O6,
      invalid: !v14,
      disabled: n27.disabled
    })
  ), K5 = () => {
    e32.current && e32.current.setCustomValidity && (l16().valid || !y11 ? e32.current.classList.remove("k-invalid") : e32.current.classList.add("k-invalid"), e32.current.setCustomValidity(l16().valid ? "" : p18 || ""));
  }, j4 = (t25) => {
    q3({
      value: t25.target.value
    }), s26.current = t25.target.value, n27.onChange && n27.onChange.call(void 0, {
      syntheticEvent: t25,
      nativeEvent: t25.nativeEvent,
      value: t25.target.value,
      target: d10.current
    }), s26.current = void 0;
  }, z5 = (t25) => {
    if (t25.animationName === "autoFillStart") {
      const i24 = t25.target.parentNode;
      i24 && i24.classList.contains("k-empty") && i24.classList.remove("k-empty");
    }
  };
  r6.useEffect(() => {
    P10();
  }, []), r6.useEffect(() => {
    K5();
  });
  const b8 = r6.createElement(
    "input",
    {
      "aria-labelledby": w11,
      "aria-describedby": F8,
      "aria-disabled": n27.disabled || void 0,
      "aria-invalid": !v14 || void 0,
      "aria-label": U2 || void 0,
      ...B6,
      style: o21 ? void 0 : m11,
      value: c16(),
      id: g9,
      autoFocus: k8,
      className: H3,
      onChange: j4,
      onAnimationStart: z5,
      ref: e32
    }
  );
  return o21 ? r6.createElement(
    I2,
    {
      label: o21,
      labelClassName: E8,
      editorId: g9,
      editorValue: String(c16()),
      editorValid: v14,
      editorDisabled: n27.disabled,
      editorPlaceholder: n27.placeholder,
      children: b8,
      style: m11,
      dir: n27.dir,
      unstyled: u17
    }
  ) : b8;
});
var $2 = a();
var ee2 = {
  defaultValue: "",
  required: false,
  validityStyles: true,
  autoFocus: false
};
C4.displayName = "KendoReactInput";
C4.propTypes = {
  label: import_prop_types8.default.string,
  labelClassName: import_prop_types8.default.string,
  validationMessage: import_prop_types8.default.string,
  required: import_prop_types8.default.bool,
  validate: import_prop_types8.default.bool,
  id: import_prop_types8.default.string,
  ariaLabelledBy: import_prop_types8.default.string,
  ariaDescribedBy: import_prop_types8.default.string,
  ariaLabel: import_prop_types8.default.string,
  autoFocus: import_prop_types8.default.bool,
  value: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.number, import_prop_types8.default.array])
};

// node_modules/@progress/kendo-react-inputs/maskedtextbox/MaskedTextBox.mjs
var p10 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/maskedtextbox/parsing/result.mjs
var n9 = ((r16) => (r16[r16.Literal = 0] = "Literal", r16[r16.Mask = 1] = "Mask", r16[r16.Undefined = 2] = "Undefined", r16))(n9 || {});
var a14 = class _a2 {
  constructor(t25, i24, s26 = 2) {
    this.value = t25, this.rest = i24, this.type = s26;
  }
  // map :: Functor f => f a ~> (a -> b) -> f b
  map(t25) {
    return new _a2(t25(this.value), this.rest);
  }
  // chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(t25) {
    return t25(this.value, this.rest);
  }
  fold(t25, i24) {
    return t25(this.value, this.rest);
  }
  concat(t25) {
    return this.map((i24, s26) => t25.chain((e32, h16) => i24.concat([e32])));
  }
  toString() {
    return `Result({ value: '${this.value}', rest: ${this.rest} })`;
  }
};

// node_modules/@progress/kendo-react-inputs/maskedtextbox/parsing/stream.mjs
var s11 = class {
  constructor(t25 = [], r16 = []) {
    this.input = t25, this.control = r16, this.inputCursor = 0, this.controlCursor = 0;
  }
  eof() {
    return this.inputCursor >= this.input.length;
  }
  // Get the first value from the input.
  next() {
    return {
      char: this.input[this.inputCursor++],
      control: this.control[this.controlCursor++]
    };
  }
  peek() {
    return {
      char: this.input[this.inputCursor],
      control: this.control[this.controlCursor]
    };
  }
  // eslint-disable-next-line camelcase
  eat_input() {
    this.inputCursor++;
  }
  // eslint-disable-next-line camelcase
  eat_control() {
    this.controlCursor++;
  }
  eat() {
    this.inputCursor++, this.controlCursor++;
  }
};

// node_modules/@progress/kendo-react-inputs/maskedtextbox/parsing/parsers.mjs
var h8 = (t25) => (t25 || "").split("");
var a15 = "\\";
var o10 = class _o {
  constructor(e32) {
    this.parse = e32;
  }
  run(e32, n27 = "") {
    return e32 instanceof s11 ? this.parse(e32) : this.parse(new s11(h8(e32), h8(n27)));
  }
  // map :: Functor f => f a ~> (a -> b) -> f b
  map(e32) {
    return new _o((n27) => this.parse(n27).map(e32));
  }
  // chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(e32) {
    return new _o((n27) => this.parse(n27).chain((r16, c16) => e32(r16).run(c16)));
  }
  isLiteral(e32) {
    return this.run(e32).type === n9.Literal;
  }
};
var k3 = (t25) => (e32) => new o10((n27) => {
  const { prompt: r16, promptPlaceholder: c16 } = t25;
  for (; !n27.eof(); ) {
    const { char: w11, control: l16 } = n27.peek();
    if (w11 === l16 && l16 === r16)
      return n27.eat(), new a14(r16, n27, n9.Mask);
    if (e32.test(w11))
      return n27.eat(), new a14(w11, n27, n9.Mask);
    if (w11 === c16)
      return n27.eat(), new a14(r16, n27, n9.Mask);
    n27.eat_input();
  }
  return n27.eat(), new a14(r16, n27, n9.Mask);
});
var x4 = (t25) => new o10((e32) => e32.peek().char === t25 ? (e32.eat(), new a14(t25, e32, n9.Literal)) : new a14(t25, e32, n9.Literal));
var L5 = (t25) => (e32) => new o10((n27) => {
  for (; !n27.eof(); ) {
    const { char: r16, control: c16 } = n27.peek();
    if (r16 === t25 && c16 === t25)
      return n27.eat(), new a14(r16, n27);
    if (e32.test(r16))
      return n27.eat(), new a14(r16, n27);
    n27.eat_input();
  }
  return n27.eat(), new a14("", n27);
});
var M5 = (t25) => new o10((e32) => {
  if (e32.eof())
    return new a14("", e32);
  const { char: n27 } = e32.peek();
  return n27 === t25 && e32.eat(), new a14(t25, e32);
});
var A6 = (t25, e32) => new o10((n27) => {
  let { char: r16 } = n27.next();
  const c16 = t25[r16];
  return r16 === a15 ? (r16 = n27.next().char, new a14(e32.literal(r16), n27)) : c16 ? new a14(e32.mask(c16), n27) : new a14(e32.literal(r16), n27);
});
var R3 = (t25) => new o10((e32) => {
  const { prompt: n27, promptPlaceholder: r16 } = t25, { char: c16 } = e32.next();
  return c16 === n27 ? new a14(r16, e32) : new a14(c16, e32);
});
var y3 = (t25) => new o10((e32) => {
  const { char: n27 } = e32.next();
  return t25 ? new a14(n27, e32) : new a14("", e32);
});

// node_modules/@progress/kendo-react-inputs/maskedtextbox/parsing/combinators.mjs
var s12 = (n27) => new o10((e32) => new a14(n27, e32));
var a16 = (n27, e32) => n27.chain((o21) => e32.map((t25) => o21.concat([t25])));
var w7 = (n27) => n27.reduce((e32, o21) => a16(e32, o21), s12([]));
var l6 = (n27) => new o10((e32) => {
  let o21 = new a14([], e32);
  for (; !e32.eof(); )
    o21 = o21.concat(n27.run(e32));
  return o21;
});

// node_modules/@progress/kendo-react-inputs/maskedtextbox/masking.service.mjs
var C5 = class {
  constructor() {
    this.rules = {}, this.prompt = "_", this.mask = "", this.promptPlaceholder = " ", this.includeLiterals = false, this.maskTokens = [], this.unmaskTokens = [], this.rawTokens = [], this.validationTokens = [];
  }
  update({ mask: e32 = "", prompt: s26 = "", promptPlaceholder: t25 = " ", rules: r16 = {}, includeLiterals: n27 = false }) {
    this.mask = e32, this.prompt = s26, this.promptPlaceholder = t25, this.rules = r16, this.includeLiterals = n27, this.tokenize();
  }
  validationValue(e32 = "") {
    let s26 = e32;
    return w7(this.validationTokens).run(e32).fold((t25) => {
      s26 = t25.join("");
    }), s26;
  }
  rawValue(e32 = "") {
    let s26 = e32;
    return this.rawTokens.length && w7(this.rawTokens).run(e32).fold((t25) => {
      s26 = t25.join("");
    }), s26;
  }
  /**
   * @hidden
   */
  maskRaw(e32 = "") {
    let s26 = e32;
    return this.maskTokens.length && w7(this.maskTokens).run(e32).fold((t25) => {
      s26 = t25.join("");
    }), s26;
  }
  maskInput(e32, s26, t25) {
    return e32.length < s26.length ? this.maskRemoved(e32, s26, t25) : this.maskInserted(e32, s26, t25);
  }
  maskInRange(e32, s26, t25, r16) {
    let n27 = "";
    const o21 = r16, a37 = s26.split("").slice(0, t25), l16 = s26.split("").slice(r16);
    return w7(this.maskTokens.slice(t25, r16)).run(e32).fold((h16) => {
      n27 = a37.concat(h16).concat(l16).join("");
    }), {
      selection: o21,
      value: n27
    };
  }
  maskRemoved(e32, s26, t25) {
    let r16 = "", n27 = t25;
    const o21 = e32.split("").slice(t25), a37 = e32.split("").slice(0, t25).join(""), l16 = this.maskTokens.length - (e32.length - t25);
    return w7(this.maskTokens.slice(0, l16)).run(a37, s26).fold((h16) => {
      n27 = this.adjustPosition(h16, n27), r16 = h16.concat(o21).join("");
    }), {
      selection: n27,
      value: r16
    };
  }
  adjustPosition(e32, s26) {
    const t25 = e32[s26];
    return !this.maskTokens[s26].isLiteral(t25) && t25 !== this.prompt ? s26 + 1 : s26;
  }
  maskInserted(e32, s26, t25) {
    let r16 = "", n27 = t25;
    const o21 = e32.slice(0, t25);
    return w7(this.unmaskTokens).run(o21, s26).chain((a37) => {
      n27 = a37.join("").length;
      const l16 = s26.slice(n27);
      return w7(this.maskTokens).run(a37.join("") + l16, s26);
    }).fold((a37) => {
      r16 = a37.join("");
    }), {
      selection: n27,
      value: r16
    };
  }
  get maskTokenCreator() {
    const { prompt: e32, promptPlaceholder: s26 } = this;
    return {
      literal: (t25) => x4(t25),
      mask: (t25) => k3({ prompt: e32, promptPlaceholder: s26 })(t25)
    };
  }
  get unmaskTokenCreator() {
    return {
      literal: (e32) => M5(e32),
      mask: (e32) => L5(this.prompt)(e32)
    };
  }
  get rawTokenCreator() {
    const { prompt: e32, promptPlaceholder: s26, includeLiterals: t25 } = this;
    return {
      literal: (r16) => y3(t25),
      mask: (r16) => R3({ prompt: e32, promptPlaceholder: s26 })
    };
  }
  get validationTokenCreator() {
    const { prompt: e32 } = this;
    return {
      literal: (s26) => y3(false),
      mask: (s26) => R3({ prompt: e32, promptPlaceholder: "" })
    };
  }
  tokenize() {
    l6(A6(this.rules, this.maskTokenCreator)).run(this.mask).fold((e32, s26) => {
      this.maskTokens = e32;
    }), l6(A6(this.rules, this.unmaskTokenCreator)).run(this.mask).fold((e32, s26) => {
      this.unmaskTokens = e32;
    }), l6(A6(this.rules, this.rawTokenCreator)).run(this.mask).fold((e32, s26) => {
      this.rawTokens = e32;
    }), l6(A6(this.rules, this.validationTokenCreator)).run(this.mask).fold((e32, s26) => {
      this.validationTokens = e32;
    });
  }
};

// node_modules/@progress/kendo-react-inputs/maskedtextbox/utils.mjs
var r7 = {
  "#": /[\d\s\+\-]/,
  "&": /[\S]/,
  0: /[\d]/,
  9: /[\d\s]/,
  "?": /[a-zA-Z\s]/,
  A: /[a-zA-Z0-9]/,
  C: /./,
  L: /[a-zA-Z]/,
  a: /[a-zA-Z0-9\s]/
};
var n10 = () => false;
var f6 = (a37, t25) => a37.includeLiterals !== t25.includeLiterals || a37.mask !== t25.mask || a37.prompt !== t25.prompt || a37.promptPlaceholder !== t25.promptPlaceholder || !o11(a37.rules, t25.rules);
var o11 = (a37, t25) => {
  if (!!a37 != !!t25)
    return false;
  if (a37 === t25 || !a37 || !t25)
    return true;
  let e32 = true;
  for (const s26 in a37)
    if (a37[s26] !== t25[s26]) {
      e32 = false;
      break;
    }
  if (e32) {
    for (const s26 in t25)
      if (!a37.hasOwnProperty(s26)) {
        e32 = false;
        break;
      }
  }
  return e32;
};

// node_modules/@progress/kendo-react-inputs/maskedtextbox/MaskedTextBox.mjs
var a17 = class a18 extends p10.Component {
  constructor() {
    super(...arguments), this.state = {}, this._inputId = `k_${this.props.id}`, this._service = new C5(), this._isPasted = false, this._selection = [null, null], this._input = null, this.focus = () => {
      this._input && this._input.focus();
    }, this.pasteHandler = (t25) => {
      const { selectionStart: s26, selectionEnd: i24 } = t25.target;
      i24 !== s26 && (this._isPasted = true, this._selection = [s26 || 0, i24 || 0]);
    }, this.onChangeHandler = (t25) => {
      const s26 = t25.currentTarget, i24 = s26.value, l16 = this._selection[0] || 0, o21 = this._selection[1] || 0;
      if (!this.props.mask) {
        this._isPasted = false, this._selection = [null, null], this.triggerOnChange(i24, t25);
        return;
      }
      const r16 = this.value;
      let n27;
      if (this._isPasted) {
        this._isPasted = false;
        const d10 = r16.length - o21, u17 = i24.length - d10;
        n27 = this._service.maskInRange(i24.slice(l16, u17), r16, l16, o21);
      } else
        n27 = this._service.maskInput(i24, r16, s26.selectionStart || 0);
      this._selection = [n27.selection, n27.selection], this.triggerOnChange(n27.value, t25);
    }, this.focusHandler = (t25) => {
      this.state.focused || (this.setState({ focused: true }), this.props.onFocus && this.props.onFocus.call(void 0, {
        target: this,
        syntheticEvent: t25,
        nativeEvent: t25.nativeEvent
      }));
    }, this.blurHandler = (t25) => {
      this.state.focused && (this.setState({ focused: false }), this.props.onBlur && this.props.onBlur.call(void 0, {
        target: this,
        syntheticEvent: t25,
        nativeEvent: t25.nativeEvent
      }));
    }, this.setValidity = () => {
      this.element && this.element.setCustomValidity(this.validity.valid ? "" : this.props.validationMessage || "");
    };
  }
  /**
   * Gets the element of the MaskedTextBox.
   *
   * @return - An `HTMLInputElement`.
   *
   * @example
   * ```jsx
   * class App extends React.Component {
   *     constructor(props) {
   *         super(props);
   *     }
   *     element = null;
   *     render() {
   *         return (
   *             <div>
   *                 <MaskedTextBox
   *                     ref={(component) =>
   *                         this.element = component ? component.element : null}
   *                 />
   *                 <button onClick={() => console.log(this.element)}>console.log the element</button>
   *             </div>
   *         );
   *     }
   * }
   *
   * ReactDOM.render(
   *     <App />,
   *     document.getElementsByTagName('my-app')[0]
   * );
   * ```
   */
  get element() {
    return this._input;
  }
  /**
   * Gets the value with the mask of the MaskedTextBox.
   */
  get value() {
    return this._valueDuringOnChange !== void 0 ? this._valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value !== void 0 ? this.state.value : this.props.defaultValue !== void 0 ? this.props.defaultValue : "";
  }
  /**
   * Gets the raw value without the mask of the MaskedTextBox.
   */
  get rawValue() {
    return this._service.rawValue(this.value);
  }
  /**
   * Represents the validity state into which the MaskedTextBox is set.
   */
  get validity() {
    const t25 = this.value, s26 = this._service.validationValue(t25), i24 = this.props.validationMessage !== void 0, l16 = this.props.valid !== void 0 ? this.props.valid : (!this.required || !!s26) && (!this.props.maskValidation || !this.props.prompt || t25.indexOf(this.props.prompt) === -1);
    return {
      customError: i24,
      valid: l16,
      valueMissing: !s26
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : a18.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : false;
  }
  /**
   * Gets the `name` property of the MaskedTextBox.
   */
  get name() {
    return this.props.name;
  }
  /**
   * @hidden
   */
  componentDidUpdate(t25, s26) {
    if (this.element && this.state.focused && s26.focused) {
      let [i24, l16] = this._selection;
      const o21 = t25.selection, r16 = this.props.selection;
      (!o21 && r16 || o21 && r16 && (o21.start !== r16.start || o21.end !== r16.end)) && (i24 = r16.start, l16 = r16.end), i24 !== null && l16 !== null && this.element.setSelectionRange(i24, l16);
    }
    f6(t25, this.props) && this.updateService(), this.setValidity();
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.updateService(), this.setValidity();
  }
  /**
   * @hidden
   */
  render() {
    const {
      size: t25 = a18.defaultProps.size,
      fillMode: s26 = a18.defaultProps.fillMode,
      rounded: i24 = a18.defaultProps.rounded,
      autoFocus: l16 = a18.defaultProps.autoFocus,
      prefix: o21 = a18.defaultProps.prefix,
      suffix: r16 = a18.defaultProps.suffix,
      inputAttributes: n27,
      unstyled: d10,
      className: u17
    } = this.props, c16 = this.props.id || this._inputId, f13 = !this.validityStyles || this.validity.valid, v14 = this.props.style || {}, m11 = d10 && d10.uMaskedTextBox, [x8] = s5(o21), [S5] = s5(r16), g9 = p10.createElement(
      "span",
      {
        dir: this.props.dir,
        className: n2(
          D.wrapper({
            c: m11,
            invalid: !f13,
            disabled: this.props.disabled,
            size: t25,
            fillMode: s26,
            rounded: i24
          }),
          u17
        ),
        style: this.props.label ? v14 : { width: this.props.width, ...v14 }
      },
      p10.createElement(x8, null),
      p10.createElement(
        "input",
        {
          type: "text",
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          autoFocus: l16,
          spellCheck: false,
          className: n2(D.inputInner({ c: m11 })),
          value: this.value,
          id: c16,
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-describedby": this.props.ariaDescribedBy,
          "aria-placeholder": this.props.mask,
          "aria-required": this.props.required,
          name: this.props.name,
          tabIndex: e4(this.props.tabIndex, this.props.disabled, true),
          accessKey: this.props.accessKey,
          title: this.props.title,
          disabled: this.props.disabled || void 0,
          readOnly: this.props.readonly || void 0,
          placeholder: this.props.placeholder,
          ref: (E8) => this._input = E8,
          onChange: this.onChangeHandler,
          onPaste: this.pasteHandler,
          onFocus: this.focusHandler,
          onBlur: this.blurHandler,
          onDragStart: n10,
          onDrop: n10,
          ...n27
        }
      ),
      p10.createElement(S5, null)
    );
    return this.props.label ? p10.createElement(
      I2,
      {
        label: this.props.label,
        editorId: c16,
        editorValue: this.value,
        editorValid: f13,
        editorDisabled: this.props.disabled,
        editorPlaceholder: this.props.placeholder,
        children: g9,
        style: { width: this.props.width },
        dir: this.props.dir
      }
    ) : g9;
  }
  triggerOnChange(t25, s26) {
    if (this.setState({
      value: t25
    }), this.props.onChange) {
      this._valueDuringOnChange = t25;
      const i24 = {
        syntheticEvent: s26,
        nativeEvent: s26.nativeEvent,
        selectionStart: this._selection[0],
        selectionEnd: this._selection[1],
        target: this,
        value: this.value
      };
      this.props.onChange.call(void 0, i24), this._valueDuringOnChange = void 0;
    }
  }
  updateService(t25) {
    const s26 = Object.assign(
      {
        includeLiterals: this.props.includeLiterals,
        mask: this.props.mask,
        prompt: this.props.prompt,
        promptPlaceholder: this.props.promptPlaceholder,
        rules: this.rules
      },
      t25
    );
    this._service.update(s26);
  }
  get rules() {
    return Object.assign({}, r7, this.props.rules);
  }
};
a17.displayName = "MaskedTextBox", a17.propTypes = {
  value: import_prop_types9.default.string,
  defaultValue: import_prop_types9.default.string,
  placeholder: import_prop_types9.default.string,
  title: import_prop_types9.default.string,
  dir: import_prop_types9.default.string,
  id: import_prop_types9.default.string,
  style: import_prop_types9.default.object,
  className: import_prop_types9.default.string,
  prefix: import_prop_types9.default.any,
  suffix: import_prop_types9.default.any,
  ariaLabelledBy: import_prop_types9.default.string,
  ariaDescribedBy: import_prop_types9.default.string,
  width: import_prop_types9.default.oneOfType([import_prop_types9.default.string, import_prop_types9.default.number]),
  tabIndex: import_prop_types9.default.number,
  accessKey: import_prop_types9.default.string,
  disabled: import_prop_types9.default.bool,
  readonly: import_prop_types9.default.bool,
  prompt: import_prop_types9.default.string,
  promptPlaceholder: import_prop_types9.default.string,
  includeLiterals: import_prop_types9.default.bool,
  maskValidation: import_prop_types9.default.bool,
  mask: import_prop_types9.default.string,
  rules: function(t25, s26, i24) {
    const l16 = t25.rules;
    return l16 !== void 0 && !Object.entries(l16).some((r16) => typeof r16 != "string" || !(l16[r16] instanceof RegExp)) ? new Error(
      "Invalid prop `" + s26 + "` supplied to `" + i24 + "`. Validation failed."
    ) : null;
  },
  selection: import_prop_types9.default.shape({
    start: import_prop_types9.default.number.isRequired,
    end: import_prop_types9.default.number.isRequired
  }),
  name: import_prop_types9.default.string,
  label: import_prop_types9.default.string,
  validationMessage: import_prop_types9.default.string,
  required: import_prop_types9.default.bool,
  valid: import_prop_types9.default.bool,
  validityStyles: import_prop_types9.default.bool,
  onChange: import_prop_types9.default.func,
  size: import_prop_types9.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types9.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types9.default.oneOf([null, "solid", "flat", "outline"]),
  autoFocus: import_prop_types9.default.bool,
  inputAttributes: import_prop_types9.default.object
}, a17.defaultProps = {
  prompt: "_",
  promptPlaceholder: " ",
  includeLiterals: false,
  maskValidation: true,
  rules: r7,
  validityStyles: true,
  prefix: (t25) => null,
  suffix: (t25) => null,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: false
};
var h9 = a17;
var q = a();
var B5 = a2(
  x(
    q,
    a3(h9)
  )
);
B5.displayName = "KendoReactMaskedTextBox";

// node_modules/@progress/kendo-react-inputs/range-slider/range-raducer.mjs
var l7 = ((e32) => (e32.start = "start", e32.end = "end", e32.min = "min", e32.max = "max", e32.increase = "increase", e32.decrease = "decrease", e32.increaseLarge = "increaseLarge", e32.decreaseLarge = "decreaseLarge", e32))(l7 || {});
var k4 = (e32, r16) => {
  let d10, m11;
  switch (r16.type) {
    case "start":
      if (r16.payload === void 0)
        return e32;
      d10 = {
        start: r16.payload > e32.end ? e32.end : Math.max(r16.payload, r16.min),
        end: e32.end
      };
      break;
    case "end":
      if (r16.payload === void 0)
        return e32;
      d10 = {
        start: e32.start,
        end: r16.payload < e32.start ? e32.start : Math.min(r16.payload, r16.max)
      };
      break;
    case "min":
      r16.key === "start" ? d10 = {
        ...e32,
        start: r16.min
      } : d10 = {
        ...e32,
        end: Math.max(r16.min, e32.start)
      };
      break;
    case "max":
      r16.key === "start" ? d10 = {
        ...e32,
        start: Math.min(r16.max, e32.end)
      } : d10 = {
        ...e32,
        end: r16.max
      };
      break;
    case "increase":
      if (r16.step === void 0 || r16.key === void 0)
        return e32;
      m11 = e32[r16.key] + r16.step, r16.key === "start" ? m11 < r16.min ? d10 = {
        ...e32,
        start: r16.min
      } : d10 = {
        ...e32,
        start: Math.min(m11, e32.end)
      } : m11 > r16.max ? d10 = {
        ...e32,
        end: r16.max
      } : d10 = {
        ...e32,
        end: Math.max(m11, e32.start)
      };
      break;
    case "decrease":
      if (r16.step === void 0 || r16.key === void 0)
        return e32;
      m11 = e32[r16.key] - r16.step, r16.key === "start" ? m11 < r16.min ? d10 = {
        ...e32,
        start: r16.min
      } : d10 = {
        ...e32,
        start: Math.min(m11, e32.end)
      } : m11 > r16.max ? d10 = {
        ...e32,
        end: r16.max
      } : d10 = {
        ...e32,
        end: Math.max(m11, e32.start)
      };
      break;
    case "increaseLarge":
      if (r16.largeStep === void 0 || r16.key === void 0)
        return e32;
      m11 = e32[r16.key] + r16.largeStep, r16.key === "start" ? m11 < r16.min ? d10 = {
        ...e32,
        start: r16.min
      } : d10 = {
        ...e32,
        start: Math.min(m11, e32.end)
      } : m11 > r16.max ? d10 = {
        ...e32,
        end: r16.max
      } : d10 = {
        ...e32,
        end: Math.max(m11, e32.start)
      };
      break;
    case "decreaseLarge":
      if (r16.largeStep === void 0 || r16.key === void 0)
        return e32;
      m11 = e32[r16.key] - r16.largeStep, r16.key === "start" ? m11 < r16.min ? d10 = {
        ...e32,
        start: r16.min
      } : d10 = {
        ...e32,
        start: Math.min(m11, e32.end)
      } : m11 > r16.max ? d10 = {
        ...e32,
        end: r16.max
      } : d10 = {
        ...e32,
        end: Math.max(m11, e32.start)
      };
      break;
    default:
      d10 = e32;
      break;
  }
  return d10;
};

// node_modules/@progress/kendo-react-inputs/range-slider/RangeSlider.mjs
var a19 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);
var ne2 = (n27, s26, p18) => {
  const [c16, e32] = a19.useState(n27), d10 = a19.useCallback(
    (g9) => {
      const S5 = k4(s26.state || c16, { ...g9, ...s26 });
      p18 && p18(S5, g9.event), e32(S5);
    },
    [s26, p18]
  );
  return [c16, d10];
};
var le = a();
var P5 = a19.forwardRef((n27, s26) => {
  const p18 = !h(e9, { component: "RangeSlider" }), c16 = n4(le, n27), e32 = {
    step: y4.step,
    largeStep: y4.largeStep,
    defaultValue: y4.defaultValue,
    vertical: y4.vertical,
    disabled: y4.disabled,
    ...c16
  }, d10 = a19.useRef(null), g9 = a19.useRef(null), S5 = a19.useRef(null), D8 = a19.useRef(null), T7 = a19.useRef(null), K5 = a19.useCallback(() => {
    D8.current && D8.current.focus();
  }, [D8]);
  a19.useImperativeHandle(d10, () => ({
    element: g9.current,
    focus: K5,
    props: e32
  })), a19.useImperativeHandle(s26, () => d10.current);
  const f13 = a19.useMemo(() => e32.min, [e32.min]), k8 = a19.useMemo(() => e32.max, [e32.max]), A13 = a19.useMemo(
    () => e32.step !== void 0 ? e32.step : y4.step,
    [e32.step, y4.step]
  ), H3 = a19.useMemo(
    () => e32.largeStep !== void 0 ? e32.largeStep : y4.largeStep,
    [e32.largeStep, y4.largeStep]
  ), o21 = u(g9, e32.dir), N4 = (t25, u17) => {
    e32.onChange && d10.current && e32.onChange.call(void 0, {
      value: t25,
      target: d10.current,
      syntheticEvent: u17
    });
  }, [E8, L8] = a19.useState(""), [b8, l16] = ne2(
    e32.defaultValue || y4.defaultValue,
    {
      min: f13,
      max: k8,
      step: A13,
      largeStep: H3,
      state: e32.value
    },
    N4
  ), i24 = a19.useMemo(() => e32.value || b8, [e32.value, b8]), O6 = a19.useRef(null), w11 = a19.useRef(null), h16 = a19.useMemo(() => (i24.start - f13) / (k8 - f13) * 100, [i24.start, f13, k8]), x8 = a19.useMemo(() => (i24.end - f13) / (k8 - f13) * 100, [i24.end, f13, k8]), W4 = a19.useMemo(
    () => e32.vertical ? { paddingTop: 0, height: "100%" } : {},
    [e32.vertical]
  ), q3 = a19.useMemo(
    () => e32.vertical ? { marginTop: "0.5rem", marginBottom: "0.5rem" } : { marginLeft: "0.5rem", marginRight: "0.5rem" },
    [e32.vertical]
  ), M7 = i4(), C7 = a19.useCallback(
    (t25) => {
      if (!w11.current)
        return;
      const u17 = w11.current.getBoundingClientRect(), v14 = e32.vertical ? u17.bottom - t25.clientY : o21 === "rtl" ? u17.right - t25.clientX : t25.clientX - u17.left, I11 = e32.vertical ? u17.height : u17.width, F8 = v14 / I11;
      return f13 + F8 * (k8 - f13);
    },
    [
      w11,
      e32.vertical,
      o21,
      f13,
      k8,
      b8.start,
      b8.end,
      e32.value && e32.value.start,
      e32.value && e32.value.end
    ]
  ), B6 = a19.useCallback(
    (t25) => t25 <= i24.start ? "start" : t25 >= i24.end ? "end" : 2 * t25 < i24.end + i24.start ? "start" : "end",
    [b8.start, b8.end, e32.value && e32.value.start, e32.value && e32.value.end]
  ), G6 = a19.useCallback(
    (t25) => {
      switch (t25.keyCode) {
        case e2.right:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.decrease : l7.increase,
            key: "start",
            event: t25
          });
          break;
        case e2.up:
          t25.preventDefault(), l16({ type: l7.increase, key: "start", event: t25 });
          break;
        case e2.left:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.increase : l7.decrease,
            key: "start",
            event: t25
          });
          break;
        case e2.down:
          t25.preventDefault(), l16({ type: l7.decrease, key: "start", event: t25 });
          break;
        case e2.home:
          t25.preventDefault(), l16({ type: l7.min, key: "start", event: t25 });
          break;
        case e2.end:
          t25.preventDefault(), l16({ type: l7.max, key: "start", event: t25 });
          break;
        case e2.pageDown:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.increaseLarge : l7.decreaseLarge,
            key: "start",
            event: t25
          });
          break;
        case e2.pageUp:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.decreaseLarge : l7.increaseLarge,
            key: "start",
            event: t25
          });
          break;
      }
    },
    [l16]
  ), U2 = a19.useCallback(
    (t25) => {
      switch (t25.keyCode) {
        case e2.right:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.decrease : l7.increase,
            key: "end",
            event: t25
          });
          break;
        case e2.up:
          t25.preventDefault(), l16({ type: l7.increase, key: "end", event: t25 });
          break;
        case e2.left:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.increase : l7.decrease,
            key: "end",
            event: t25
          });
          break;
        case e2.down:
          t25.preventDefault(), l16({ type: l7.decrease, key: "end", event: t25 });
          break;
        case e2.home:
          t25.preventDefault(), l16({ type: l7.min, key: "end", event: t25 });
          break;
        case e2.end:
          t25.preventDefault(), l16({ type: l7.max, key: "end", event: t25 });
          break;
        case e2.pageDown:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.increaseLarge : l7.decreaseLarge,
            key: "end",
            event: t25
          });
          break;
        case e2.pageUp:
          t25.preventDefault(), l16({
            type: o21 === "rtl" ? l7.decreaseLarge : l7.increaseLarge,
            key: "end",
            event: t25
          });
          break;
      }
    },
    [l16, o21]
  ), X = a19.useCallback(
    (t25) => {
      const u17 = C7(t25), v14 = B6(u17);
      L8(v14), v14 === "end" ? T7.current.focus() : D8.current.focus();
      const I11 = v14 === "end" ? l7.end : l7.start;
      l16({ type: I11, payload: u17, event: t25 });
    },
    [e32.vertical, f13, k8, l16]
  );
  return ze(
    w11,
    {
      onPress: X,
      onDrag: (t25) => {
        const u17 = C7(t25), v14 = E8 === "end" ? l7.end : l7.start;
        l16({ type: v14, payload: u17, event: t25 });
      },
      onRelease: (t25) => {
        const u17 = C7(t25), v14 = E8 === "end" ? l7.end : l7.start;
        l16({ type: v14, payload: u17, event: t25 }), L8("");
      }
    },
    { autoScroll: false }
  ), a19.createElement(a19.Fragment, null, a19.createElement(
    "div",
    {
      id: e32.id,
      style: e32.style,
      ref: g9,
      dir: o21,
      className: n2(
        "k-slider",
        {
          "k-rtl": o21 === "rtl",
          "k-disabled": e32.disabled,
          "k-slider-vertical": e32.vertical,
          "k-slider-horizontal": !e32.vertical
        },
        e32.className
      )
    },
    a19.createElement(
      "div",
      {
        ref: w11,
        className: "k-slider-track-wrap",
        style: {
          flexGrow: 1,
          position: "relative",
          touchAction: "none",
          ...q3
        }
      },
      e32.children && a19.createElement("ul", { className: "k-reset k-slider-items", style: { ...W4 } }, a19.Children.map(e32.children, (t25, u17) => t25 && a19.cloneElement(
        t25,
        {
          position: 100 * (t25.props.position - e32.min) / (e32.max - e32.min),
          vertical: e32.vertical,
          firstTick: u17 === 0,
          lastTick: u17 === a19.Children.count(e32.children) - 1
        },
        t25.props.children
      ))),
      a19.createElement(
        "div",
        {
          ref: O6,
          className: "k-slider-track",
          style: e32.vertical ? { bottom: 0, height: "100%" } : { [o21 === "rtl" ? "right" : "left"]: 0, width: "100%" }
        },
        h16 !== null && x8 !== null && a19.createElement(
          "div",
          {
            "data-selection": true,
            ref: S5,
            title: `${i24.start} - ${i24.end}`,
            className: "k-slider-selection",
            style: e32.vertical ? { height: x8 - h16 + "%", bottom: h16 + "%" } : {
              [o21 === "rtl" ? "right" : "left"]: h16 + "%",
              width: x8 - h16 + "%"
            }
          }
        ),
        a19.createElement(
          "span",
          {
            ref: D8,
            role: "slider",
            tabIndex: e4(e32.startTabIndex, e32.disabled, void 0),
            "aria-valuemin": f13,
            "aria-valuemax": Math.max(k8, i24.end),
            "aria-valuenow": i24.start,
            "aria-disabled": e32.disabled ? "true" : void 0,
            "aria-valuetext": `${i24.start} - ${i24.end}`,
            className: "k-draghandle k-draghandle-start",
            title: M7.toLanguageString(a6, I3[a6]),
            style: e32.vertical ? { bottom: "calc(" + h16 + "%)", zIndex: 1 } : o21 === "rtl" ? { right: "calc(" + h16 + "% - 13px)", zIndex: 1 } : { left: "calc(" + h16 + "%)", zIndex: 1 },
            onKeyDown: G6
          }
        ),
        a19.createElement(
          "span",
          {
            ref: T7,
            role: "slider",
            tabIndex: e4(e32.endTabIndex, e32.disabled, void 0),
            "aria-valuemin": Math.min(f13, i24.start),
            "aria-valuemax": k8,
            "aria-valuenow": i24.end,
            "aria-disabled": e32.disabled ? "true" : void 0,
            "aria-valuetext": `${i24.start} - ${i24.end}`,
            className: "k-draghandle k-draghandle-end",
            title: M7.toLanguageString(a6, I3[a6]),
            style: e32.vertical ? { bottom: "calc(" + x8 + "%)", zIndex: 1 } : o21 === "rtl" ? { right: "calc(" + x8 + "% - 13px)", zIndex: 1 } : { left: "calc(" + x8 + "%)", zIndex: 1 },
            onKeyDown: U2
          }
        )
      )
    )
  ), p18 && a19.createElement(l, null));
});
var se2 = {
  value: (n27, s26, p18) => {
    if (n27.value) {
      const c16 = n27.value.start, e32 = n27.value.end, d10 = n27.min, g9 = n27.max;
      if (c16 > e32 || c16 > g9 || c16 < d10 || e32 > g9 || e32 < d10 || e32 < c16)
        return new Error(
          `Invalid prop + ${s26} supplied to ${p18}.
                    The { start, end } value must be between the min & max value and { start, end } must be start < end.
                    `
        );
    }
    return null;
  },
  defaultValue: (n27, s26, p18) => {
    if (n27.defaultValue) {
      const c16 = n27.defaultValue.start, e32 = n27.defaultValue.end, d10 = n27.min, g9 = n27.max;
      if (c16 > e32 || c16 > g9 || c16 < d10 || e32 > g9 || e32 < d10 || e32 < c16)
        return new Error(
          `Invalid prop + ${s26} supplied to ${p18}.
                    The { start, end } value must be between the min & max value and { start, end } must be start < end.
                    `
        );
    }
    return null;
  },
  onChange: import_prop_types10.default.func,
  step: import_prop_types10.default.number,
  min: (n27, s26, p18) => {
    const c16 = n27[s26], e32 = n27.min, d10 = n27.max;
    return e32 === void 0 ? new Error(
      `Invalid prop + ${s26} supplied to ${p18}.
                ${s26} value can not be undefined.
                `
    ) : c16 && e32 >= d10 ? new Error(
      `Invalid prop + ${s26} supplied to ${p18}.
                ${s26} value can not be equal to or bigger than the max value.
                `
    ) : null;
  },
  max: (n27, s26, p18) => {
    const c16 = n27[s26], e32 = n27.min, d10 = n27.max;
    return d10 === void 0 ? new Error(
      `Invalid prop + ${s26} supplied to ${p18}.
                ${s26} value can not be undefined.
                `
    ) : c16 && d10 <= e32 ? new Error(
      `Invalid prop + ${s26} supplied to ${p18}.
                ${s26} value can not be equal to or smaller than the min value.
                `
    ) : null;
  },
  vertical: import_prop_types10.default.bool,
  disabled: import_prop_types10.default.bool,
  dir: import_prop_types10.default.oneOf(["ltr", "rtl"])
};
var y4 = {
  step: 1,
  largeStep: 10,
  defaultValue: {
    start: 0,
    end: 0
  },
  vertical: false,
  disabled: false
};
P5.displayName = "KendoReactRangeSlider";
P5.propTypes = se2;

// node_modules/@progress/kendo-react-inputs/switch/Switch.mjs
var s13 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);
var a20 = class a21 extends s13.Component {
  /**
   * @hidden
   */
  constructor(r16) {
    super(r16), this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || this.defaultValidationMessage.toLanguageString(w2, I3[w2])
      );
    }, this.limit = (e32, i24, o21) => {
      const n27 = o21.offsetWidth, l16 = i24.offsetWidth;
      return e32 < 0 ? 0 : e32 > n27 - l16 ? n27 - l16 : e32;
    }, this.toggle = (e32, i24) => {
      this.setState({ checked: e32 }), this.valueDuringOnChange = e32, v2(this.props.onChange, i24, this, { value: e32 }), this.valueDuringOnChange = void 0;
    }, this._element = null, this._wrapper = null, this._input = null, this._id = this.props.id, this.defaultValidationMessage = s(this), this.focus = () => {
      this.actionElement && this.actionElement.focus();
    }, this.dummyInput = (e32) => s13.createElement(
      "input",
      {
        type: "checkbox",
        checked: this.props.checked,
        ref: (i24) => {
          this._input = i24;
        },
        tabIndex: -1,
        "aria-hidden": true,
        value: e32,
        style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" },
        onChange: o,
        name: this.name || void 0
      }
    ), this.handleClick = (e32) => {
      this.eventTimeStamp !== e32.timeStamp && (this.eventTimeStamp = e32.timeStamp, this.toggle(!this.value, e32));
    }, this.handleKeyDown = (e32) => {
      if (this.props.disabled)
        return;
      const { keyCode: i24 } = e32;
      (i24 === e2.space || i24 === e2.enter) && (this.toggle(!this.value, e32), e32.preventDefault());
    }, this.handleWrapperFocus = (e32) => {
      if (this.props.disabled)
        return;
      this.setState({ focused: true });
      const { onFocus: i24 } = this.props;
      i24 && i24.call(void 0, e32);
    }, this.handleWrapperBlur = (e32) => {
      if (this.props.disabled)
        return;
      this.setState({ focused: false });
      const { onBlur: i24 } = this.props;
      i24 && i24.call(void 0, e32);
    }, this.state = {
      checked: r16.defaultChecked || a21.defaultProps.defaultChecked,
      focused: false
    };
  }
  /**
   * Gets the value of the Switch.
   */
  get value() {
    return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.checked !== void 0 ? this.props.checked : this.state.checked;
  }
  get element() {
    return this._element;
  }
  get actionElement() {
    return this._wrapper;
  }
  /**
   * Gets the `name` property of the Switch.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the Switch is set.
   */
  get validity() {
    const r16 = this.props.validationMessage !== void 0, e32 = this.props.valid !== void 0 ? this.props.valid : this.props.required ? !!this.value : true, i24 = this.props.valid !== void 0 ? this.props.valid : e32;
    return {
      customError: r16,
      valid: i24,
      valueMissing: this.value === null
    };
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : a21.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : false;
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.setValidity(), this.forceUpdate();
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.setValidity();
  }
  /**
   * @hidden
   */
  render() {
    const { focused: r16 } = this.state, { dir: e32, disabled: i24, trackRounded: o21, thumbRounded: n27, size: l16, offLabel: u17, onLabel: m11, tabIndex: b8 } = this.props;
    this.dir = e32 || this.element && getComputedStyle(this.element).direction || void 0;
    const y11 = !this.validityStyles || this.validity.valid, k8 = n2(
      "k-switch",
      {
        [`k-switch-${a4.sizeMap[l16] || l16}`]: l16,
        "k-switch-on": this.value,
        "k-switch-off": !this.value,
        "k-focus": r16,
        "k-disabled": i24,
        "k-invalid": !y11
      },
      this.props.className
    ), w11 = {
      "aria-checked": this.value,
      "aria-disabled": i24 || void 0,
      "aria-labelledby": this.props.ariaLabelledBy,
      "aria-describedby": this.props.ariaDescribedBy,
      "aria-label": this.props.ariaLabel,
      "aria-required": this.props.required
    };
    return s13.createElement(
      "span",
      {
        ref: (d10) => {
          this._wrapper = d10;
        },
        role: "switch",
        ...w11,
        className: k8,
        dir: this.dir,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onBlur: this.handleWrapperBlur,
        onFocus: this.handleWrapperFocus,
        tabIndex: e4(b8, i24, void 0),
        accessKey: this.props.accessKey,
        id: this.props.id || this._id
      },
      s13.createElement(
        "span",
        {
          className: n2("k-switch-track", {
            [`k-rounded-${a4.roundedMap[o21] || o21}`]: o21
          }),
          ref: (d10) => {
            this._element = d10;
          }
        },
        this.dummyInput(this.value),
        m11 ? s13.createElement("span", { className: "k-switch-label-on" }, m11) : "",
        u17 ? s13.createElement("span", { className: "k-switch-label-off" }, u17) : ""
      ),
      s13.createElement("span", { className: "k-switch-thumb-wrap" }, s13.createElement("span", { className: n2("k-switch-thumb", { [`k-rounded-${n27}`]: n27 }) }))
    );
  }
};
a20.displayName = "Switch", a20.propTypes = {
  accessKey: import_prop_types11.default.string,
  checked: import_prop_types11.default.bool,
  className: import_prop_types11.default.string,
  disabled: import_prop_types11.default.bool,
  defaultChecked: import_prop_types11.default.bool,
  size: import_prop_types11.default.oneOf([null, "small", "medium", "large"]),
  trackRounded: import_prop_types11.default.oneOf([null, "small", "medium", "large", "full"]),
  thumbRounded: import_prop_types11.default.oneOf([null, "small", "medium", "large", "full"]),
  dir: import_prop_types11.default.string,
  id: import_prop_types11.default.string,
  ariaLabelledBy: import_prop_types11.default.string,
  ariaDescribedBy: import_prop_types11.default.string,
  offLabel: import_prop_types11.default.string,
  required: import_prop_types11.default.bool,
  tabIndex: import_prop_types11.default.number,
  valid: import_prop_types11.default.bool,
  validate: import_prop_types11.default.bool,
  validationMessage: import_prop_types11.default.string,
  onBlur: import_prop_types11.default.any,
  onChange: import_prop_types11.default.any,
  onFocus: import_prop_types11.default.any,
  onLabel: import_prop_types11.default.string
}, a20.defaultProps = {
  disabled: false,
  defaultChecked: false,
  size: "medium",
  trackRounded: "full",
  thumbRounded: "full",
  offLabel: "OFF",
  onBlur: o,
  onFocus: o,
  onLabel: "ON",
  validityStyles: true
};
var c5 = a20;
var M6 = a();
var O3 = a2(
  x(
    M6,
    c5
  )
);
O3.displayName = "KendoReactSwitch";

// node_modules/@progress/kendo-react-inputs/checkbox/Checkbox.mjs
var a22 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);
var ze2 = a();
var A7 = a22.forwardRef((W4, j4) => {
  const P10 = n4(ze2, W4), {
    ariaDescribedBy: G6,
    ariaLabelledBy: J3,
    checked: B6,
    className: Q3,
    labelClassName: X,
    children: Y2,
    defaultChecked: Z2,
    disabled: o21,
    defaultValue: _4,
    id: I11,
    size: b8 = $3.size,
    rounded: m11 = $3.rounded,
    label: F8,
    labelPlacement: N4,
    name: ee4,
    labelOptional: ae3,
    onChange: p18,
    onFocus: k8,
    onBlur: f13,
    tabIndex: te5,
    value: s26,
    required: i24,
    valid: z5,
    validationMessage: M7,
    validityStyles: S5,
    autoFocus: oe,
    // Removed to support direct use in Form Field component
    visited: Me2,
    touched: Se,
    modified: De,
    ...le4
  } = P10, l16 = a22.useRef(null), D8 = a22.useCallback(() => {
    l16.current && l16.current.focus();
  }, []), c16 = a22.useCallback(
    () => ({
      element: l16.current,
      focus: D8,
      get name() {
        return l16.current && l16.current.name;
      }
    }),
    [D8]
  );
  a22.useImperativeHandle(j4, c16);
  const [ne3, se5] = a22.useState(Z2), [ce, re3] = a22.useState(_4), K5 = typeof s26 == "boolean" || s26 === null, h16 = B6 !== void 0, r16 = K5, v14 = r16 ? s26 : ce, C7 = h16 ? B6 : r16 ? void 0 : ne3, T7 = C7 === void 0 && v14, w11 = T7 ? v14 : C7, d10 = T7 || r16 ? s26 === null ? s26 : void 0 : s26 || v14, ie3 = w11 === null || d10 === null, L8 = I(), de3 = i4(), O6 = (t25) => de3.toLanguageString(t25, I3[t25]), q3 = O6(v4), ue = O6(f), g9 = z5 !== void 0 ? z5 : i24 ? !!C7 : true;
  a22.useEffect(() => {
    l16.current && l16.current.setCustomValidity && l16.current.setCustomValidity(g9 ? "" : M7 || q3);
  }, [g9, M7, q3]);
  const u17 = a22.useCallback(
    (t25, n27) => {
      !r16 && !o21 && (re3(n27), !h16 && !o21 && se5(n27)), p18 && !o21 && v2(
        p18,
        t25,
        {
          ...c16(),
          value: n27
        },
        { value: n27 }
      );
    },
    [h16, o21, p18, r16, c16]
  ), be3 = a22.useCallback(
    (t25) => {
      const n27 = t25.target.checked;
      u17(t25, n27);
    },
    [u17, s26]
  ), me2 = a22.useCallback(
    (t25) => {
      if (o21)
        return;
      const { keyCode: n27 } = t25, ge3 = t25.currentTarget.checked;
      n27 === e2.space && (t25.preventDefault(), t25.stopPropagation(), u17(t25, !ge3));
    },
    [o21, u17]
  ), pe3 = a22.useCallback(
    (t25) => {
      if (o21)
        return;
      const { keyCode: n27 } = t25;
      n27 === e2.space && t25.preventDefault();
    },
    [o21]
  ), ke4 = a22.useCallback(
    (t25) => {
      k8 && !o21 && v2(k8, t25, c16(), void 0);
    },
    [k8, o21, c16]
  ), fe2 = a22.useCallback(
    (t25) => {
      f13 && !o21 && v2(f13, t25, c16(), void 0);
    },
    [f13, o21, c16]
  ), he3 = u(l16, P10.dir), ve = n2("k-checkbox-wrap", Q3), R5 = {
    type: "checkbox",
    className: n2("k-checkbox", {
      [`k-checkbox-${a4.sizeMap[b8] || b8}`]: b8,
      [`k-rounded-${a4.roundedMap[m11] || m11}`]: m11,
      "k-indeterminate": ie3,
      "k-disabled": o21,
      "k-invalid k-invalid": !(g9 || S5 !== void 0 || S5 === true)
    }),
    ref: l16,
    name: ee4,
    id: I11 || L8,
    disabled: o21,
    required: i24 !== void 0 ? i24 : false,
    tabIndex: e4(te5, o21),
    role: "checkbox",
    checked: !!w11,
    "aria-describedby": G6,
    "aria-labelledby": J3,
    "aria-disabled": o21 || void 0,
    "aria-required": i24,
    autoFocus: oe,
    ...le4,
    onChange: be3,
    onKeyDown: me2,
    onKeyUp: pe3,
    onFocus: ke4,
    onBlur: fe2
  }, Ce3 = (
    // removing value prop is required due to bug in react where
    // value set to undefined override default submit value
    d10 === void 0 ? a22.createElement("input", { ...R5 }) : a22.createElement("input", { ...R5, value: K5 ? void 0 : d10 === null ? "" : d10 })
  ), y11 = F8 !== void 0 ? a22.createElement(
    "label",
    {
      className: n2("k-checkbox-label", X),
      htmlFor: I11 || L8,
      style: { userSelect: "none" }
    },
    F8,
    ae3 && a22.createElement("span", { className: "k-label-optional" }, ue)
  ) : null, x8 = a22.createElement("span", { className: ve }, Ce3, Y2);
  return a22.createElement(a22.Fragment, null, N4 === "before" ? a22.createElement("div", { dir: "rtl" }, x8, y11) : N4 === "after" ? a22.createElement("div", { dir: "ltr" }, x8, y11) : a22.createElement("div", { dir: he3 }, x8, y11));
});
A7.propTypes = {
  checked: import_prop_types12.default.bool,
  className: import_prop_types12.default.string,
  defaultChecked: import_prop_types12.default.bool,
  defaultValue: import_prop_types12.default.any,
  dir: import_prop_types12.default.string,
  disabled: import_prop_types12.default.bool,
  id: import_prop_types12.default.string,
  size: import_prop_types12.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types12.default.oneOf([null, "small", "medium", "large"]),
  ariaLabelledBy: import_prop_types12.default.string,
  ariaDescribedBy: import_prop_types12.default.string,
  label: import_prop_types12.default.any,
  labelPlacement: import_prop_types12.default.string,
  labelOptional: import_prop_types12.default.bool,
  name: import_prop_types12.default.string,
  tabIndex: import_prop_types12.default.number,
  value: import_prop_types12.default.any,
  validationMessage: import_prop_types12.default.string,
  required: import_prop_types12.default.bool,
  validate: import_prop_types12.default.bool,
  valid: import_prop_types12.default.bool,
  autoFocus: import_prop_types12.default.bool,
  onChange: import_prop_types12.default.func,
  onFocus: import_prop_types12.default.func,
  onBlur: import_prop_types12.default.func
};
var $3 = {
  size: "medium",
  rounded: "medium",
  autoFocus: false
};
A7.displayName = "KendoCheckbox";

// node_modules/@progress/kendo-react-inputs/radiobutton/RadioGroup.mjs
var t11 = __toESM(require_react(), 1);
var import_prop_types14 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/radiobutton/RadioButton.mjs
var e13 = __toESM(require_react(), 1);
var import_prop_types13 = __toESM(require_prop_types(), 1);
var Q2 = a();
var x5 = e13.forwardRef((E8, F8) => {
  const I11 = n4(Q2, E8), {
    ariaDescribedBy: P10,
    checked: p18,
    children: f13,
    className: k8,
    disabled: n27,
    id: g9,
    size: N4 = V2.size,
    label: o21,
    labelPlacement: z5,
    name: T7,
    style: q3,
    tabIndex: w11,
    value: r16,
    valid: D8,
    onChange: h16,
    onFocus: c16,
    onBlur: i24,
    required: H3,
    ...j4
  } = I11, y11 = n5(), u17 = y11 && y11.uRadioButton, l16 = e13.useRef(null), C7 = e13.useCallback(() => {
    l16.current && l16.current.focus();
  }, []), s26 = e13.useCallback(
    () => ({
      element: l16.current,
      focus: C7
    }),
    [C7]
  );
  e13.useImperativeHandle(F8, s26);
  const B6 = I(), K5 = e13.useCallback(
    (t25) => {
      v2(h16, t25, s26(), {
        value: r16
      });
    },
    [h16, r16, n27]
  ), L8 = e13.useCallback(
    (t25) => {
      c16 && !n27 && v2(
        c16,
        t25,
        s26(),
        void 0
      );
    },
    [c16, n27]
  ), O6 = e13.useCallback(
    (t25) => {
      i24 && !n27 && v2(i24, t25, s26(), void 0);
    },
    [i24, n27]
  ), S5 = {
    type: "radio",
    id: g9 || B6,
    name: T7,
    className: n2(
      j2.input({
        c: u17,
        size: N4,
        invalid: D8 === false,
        checked: p18
      }),
      k8
    ),
    ref: l16,
    disabled: n27,
    tabIndex: e4(w11, n27),
    checked: p18,
    style: q3,
    "aria-describedby": P10,
    "aria-required": H3,
    value: r16,
    onChange: K5,
    onFocus: L8,
    onBlur: O6,
    ...j4
  }, v14 = e13.createElement(e13.Fragment, null, o21 !== void 0 ? e13.createElement(
    "label",
    {
      className: n2(j2.label({ c: u17 })),
      htmlFor: g9 || B6,
      style: { userSelect: "none" },
      "aria-label": o21
    },
    o21
  ) : null), R5 = e13.createElement("span", { className: n2(j2.wrap({ c: u17 })) }, e13.createElement("input", { ...S5 }));
  return z5 === "before" ? e13.createElement(e13.Fragment, null, v14, R5, f13) : e13.createElement(e13.Fragment, null, R5, v14, f13);
});
x5.propTypes = {
  ariaDescribedBy: import_prop_types13.default.string,
  checked: import_prop_types13.default.bool,
  className: import_prop_types13.default.string,
  disabled: import_prop_types13.default.bool,
  id: import_prop_types13.default.string,
  size: import_prop_types13.default.oneOf([null, "small", "medium", "large"]),
  label: import_prop_types13.default.string,
  labelPlacement: import_prop_types13.default.string,
  name: import_prop_types13.default.string,
  style: import_prop_types13.default.object,
  tabIndex: import_prop_types13.default.number,
  value: import_prop_types13.default.any,
  valid: import_prop_types13.default.bool,
  onChange: import_prop_types13.default.func,
  onFocus: import_prop_types13.default.func,
  onBlur: import_prop_types13.default.func
};
var V2 = {
  size: "medium"
};
x5.displayName = "KendoRadioButton";

// node_modules/@progress/kendo-react-inputs/radiobutton/RadioGroup.mjs
var _2 = a();
var G3 = t11.forwardRef((r16, I11) => {
  const m11 = n4(_2, r16), {
    id: N4,
    ariaLabelledBy: B6,
    ariaDescribedBy: F8,
    className: x8,
    data: b8,
    defaultValue: V3,
    disabled: s26,
    name: O6,
    labelPlacement: j4,
    layout: n27,
    style: q3,
    value: p18,
    valid: z5,
    item: D8 = $4.item,
    onChange: c16,
    onFocus: d10
  } = m11, f13 = n5(), y11 = f13 && f13.uRadioGroup, o21 = t11.useRef(null), C7 = t11.useCallback(() => {
    o21.current && e3(o21.current);
  }, []), i24 = t11.useCallback(
    () => ({
      element: o21.current,
      focus: C7
    }),
    [C7]
  );
  t11.useImperativeHandle(I11, i24);
  const [H3, h16] = t11.useState(V3), v14 = p18 !== void 0, u17 = v14 ? p18 : H3, L8 = t11.useCallback(
    (a37) => {
      const l16 = a37.value;
      !v14 && !s26 && h16(l16), c16 && !s26 && v2(
        c16,
        a37.syntheticEvent,
        i24(),
        { value: l16 }
      );
    },
    [h16, c16, s26]
  ), S5 = t11.useCallback(
    (a37) => {
      d10 && !s26 && v2(
        d10,
        a37.syntheticEvent,
        i24(),
        void 0
      );
    },
    [d10, s26]
  ), T7 = I(), w11 = n2(
    A.ul({
      c: y11,
      horizontal: n27 === "horizontal",
      vertical: n27 === "vertical" || n27 === void 0
    }),
    x8
  ), K5 = u2(o21, m11.dir), U2 = b8 && b8.map((a37, l16) => {
    const g9 = u17 === a37.value, A13 = u17 == null, R5 = {
      ...a37,
      valid: z5,
      checked: g9,
      disabled: !!(a37.disabled || s26),
      labelPlacement: a37.labelPlacement ? a37.labelPlacement : j4,
      tabIndex: a37.tabIndex ? a37.tabIndex : A13 && l16 === 0 || g9 ? 0 : -1,
      index: l16,
      name: O6 || T7,
      required: a37.required,
      onChange: L8,
      onFocus: S5
    };
    return t11.createElement(
      D8,
      {
        className: n2(
          A.item({
            c: y11,
            disabled: R5.disabled || s26
          })
        ),
        key: l16,
        role: "none"
      },
      t11.createElement(x5, { ...R5 })
    );
  });
  return t11.createElement(
    "ul",
    {
      id: N4,
      role: "radiogroup",
      className: w11,
      ref: o21,
      dir: K5,
      style: q3,
      "aria-labelledby": B6,
      "aria-describedby": F8
    },
    U2
  );
});
var $4 = {
  item: (r16) => t11.createElement("li", { ...r16 })
};
G3.propTypes = {
  ariaLabelledBy: import_prop_types14.default.string,
  ariaDescribedBy: import_prop_types14.default.string,
  className: import_prop_types14.default.string,
  data: import_prop_types14.default.arrayOf(import_prop_types14.default.object),
  defaultValue: import_prop_types14.default.any,
  dir: import_prop_types14.default.string,
  disabled: import_prop_types14.default.bool,
  labelPlacement: import_prop_types14.default.string,
  layout: import_prop_types14.default.string,
  name: import_prop_types14.default.string,
  style: import_prop_types14.default.object,
  value: import_prop_types14.default.any,
  onChange: import_prop_types14.default.func,
  onFocus: import_prop_types14.default.func
};
G3.displayName = "KendoRadioGroup";

// node_modules/@progress/kendo-react-inputs/textarea/TextArea.mjs
var t12 = __toESM(require_react(), 1);
var import_prop_types15 = __toESM(require_prop_types(), 1);
var be2 = a();
var A8 = t12.forwardRef((S5, w11) => {
  const s26 = n4(be2, S5), {
    size: c16 = d5.size,
    rounded: f13 = d5.rounded,
    fillMode: k8 = d5.fillMode,
    autoFocus: N4 = d5.autoFocus,
    prefix: H3 = null,
    suffix: R5 = null,
    ariaDescribedBy: $6,
    ariaLabelledBy: q3,
    autoSize: C7,
    className: D8,
    defaultValue: L8,
    disabled: r16,
    readOnly: j4,
    required: n27,
    rows: K5,
    id: G6,
    name: J3,
    placeholder: Q3,
    style: U2,
    tabIndex: W4,
    value: m11,
    valid: z5,
    validationMessage: I11,
    validityStyles: O6,
    onChange: p18,
    onFocus: b8,
    onBlur: g9,
    // Removed to support direct use in Form Field component
    visited: ge3,
    touched: xe2,
    modified: ve,
    resizable: x8,
    inputAttributes: X,
    ...Y2
  } = s26, a37 = t12.useRef(null), P10 = t12.useCallback(() => {
    a37.current && a37.current.focus();
  }, []), [T7, V3] = t12.useState(L8), [Z2, _4] = s5(H3), [ee4, te5] = s5(R5), l16 = m11 !== void 0, i24 = l16 ? m11 : T7, u17 = t12.useCallback(() => ({
    element: a37,
    focus: P10,
    get value() {
      return i24;
    },
    get name() {
      return a37.current && a37.current.name;
    }
  }), [P10, i24]);
  t12.useImperativeHandle(w11, u17);
  const [ae3, B6] = t12.useState("auto"), re3 = I(), oe = u(a37, s26.dir), v14 = z5 !== void 0 ? z5 : n27 ? !!i24 : true;
  t12.useEffect(() => {
    a37.current && a37.current.setCustomValidity && a37.current.setCustomValidity(v14 ? "" : I11 || "");
  }, [v14, I11]), o3(() => {
    a37.current && B6(`${a37.current.scrollHeight}px`);
  }, [i24]);
  const se5 = t12.useCallback(
    (o21) => {
      const h16 = o21.target.value;
      B6("auto"), !l16 && !r16 && V3(h16), p18 && !r16 && v2(
        p18,
        o21,
        {
          ...u17(),
          value: h16
        },
        { value: h16 }
      );
    },
    [V3, p18, r16, l16]
  ), ne3 = t12.useCallback(
    (o21) => {
      b8 && !r16 && v2(b8, o21, u17(), void 0);
    },
    [b8, r16]
  ), le4 = t12.useCallback(
    (o21) => {
      g9 && !r16 && v2(g9, o21, u17(), void 0);
    },
    [g9, r16]
  ), ie3 = {
    id: G6 || re3,
    role: "textbox",
    name: J3,
    className: n2("k-input-inner", "!k-overflow-auto", { "k-resize": !C7 && x8 !== "none" }),
    ref: a37,
    disabled: r16,
    rows: K5,
    placeholder: Q3,
    readOnly: j4,
    required: n27,
    tabIndex: e4(W4, r16),
    autoFocus: N4,
    style: C7 ? { resize: "none", overflow: "hidden", height: ae3 } : x8 ? { resize: x8 } : {},
    "aria-labelledby": q3,
    "aria-describedby": $6,
    "aria-multiline": true,
    "aria-disabled": r16 || void 0,
    "aria-required": n27,
    value: l16 ? m11 : T7,
    ...Object.assign({}, Y2, X),
    onChange: se5,
    onFocus: ne3,
    onBlur: le4
  };
  return t12.createElement(
    "span",
    {
      className: n2(
        "k-input",
        "k-textarea",
        {
          [`k-input-${a4.sizeMap[c16] || c16}`]: c16,
          [`k-input-${k8}`]: k8,
          [`k-rounded-${a4.roundedMap[f13] || f13}`]: f13,
          "k-invalid": !(v14 || O6 !== void 0 || O6 === true),
          "k-required": n27,
          "k-disabled": r16
        },
        D8
      ),
      style: U2,
      dir: oe
    },
    s26.prefix && t12.createElement(Z2, { ..._4 }),
    t12.createElement("textarea", { ...ie3 }),
    s26.suffix && t12.createElement(ee4, { ...te5 })
  );
});
A8.propTypes = {
  ariaDescribedBy: import_prop_types15.default.string,
  ariaLabelledBy: import_prop_types15.default.string,
  autoSize: import_prop_types15.default.bool,
  className: import_prop_types15.default.string,
  defaultValue: import_prop_types15.default.string,
  dir: import_prop_types15.default.string,
  disabled: import_prop_types15.default.bool,
  readOnly: import_prop_types15.default.bool,
  rows: import_prop_types15.default.number,
  id: import_prop_types15.default.string,
  name: import_prop_types15.default.string,
  placeholder: import_prop_types15.default.string,
  style: import_prop_types15.default.object,
  tabIndex: import_prop_types15.default.number,
  value: import_prop_types15.default.oneOfType([import_prop_types15.default.string, import_prop_types15.default.arrayOf(import_prop_types15.default.string), import_prop_types15.default.number]),
  onChange: import_prop_types15.default.func,
  onFocus: import_prop_types15.default.func,
  onBlur: import_prop_types15.default.func,
  size: import_prop_types15.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types15.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types15.default.oneOf([null, "solid", "flat", "outline"]),
  resizable: import_prop_types15.default.oneOf(["none", "both", "horizontal", "vertical"]),
  autoFocus: import_prop_types15.default.bool
};
var d5 = {
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  autoFocus: false
};
A8.displayName = "KendoTextArea";

// node_modules/@progress/kendo-react-inputs/rating/Rating.mjs
var a24 = __toESM(require_react(), 1);
var import_prop_types17 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-inputs/rating/RatingItem.mjs
var n11 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);
var s14 = n11.forwardRef((c16, u17) => {
  const o21 = n11.useRef(null), a37 = n11.useRef(null), e32 = { dir: b3.dir, ...c16 }, r16 = u(a37, e32.dir);
  n11.useImperativeHandle(o21, () => ({
    element: a37.current,
    props: e32,
    value: e32.value
  })), n11.useImperativeHandle(u17, () => o21.current);
  const i24 = n11.useCallback(
    (t25) => {
      e32.onClick && e32.onClick.call(void 0, {
        value: e32.value,
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onClick, e32.value]
  ), d10 = n11.useCallback(
    (t25) => {
      e32.onKeyDown && e32.onKeyDown.call(void 0, {
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onKeyDown]
  ), v14 = n11.useCallback(
    (t25) => {
      e32.onFocus && e32.onFocus.call(void 0, {
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onFocus]
  ), h16 = n11.useCallback(
    (t25) => {
      e32.onBlur && e32.onBlur.call(void 0, {
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onBlur]
  ), f13 = n11.useCallback(
    (t25) => {
      e32.onMouseMove && e32.onMouseMove.call(void 0, {
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onMouseMove]
  ), M7 = n11.useCallback(
    (t25) => {
      e32.onMouseEnter && e32.onMouseEnter.call(void 0, {
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onMouseEnter]
  ), m11 = n11.useCallback(
    (t25) => {
      e32.onMouseLeave && e32.onMouseLeave.call(void 0, {
        target: o21.current,
        syntheticEvent: t25
      });
    },
    [e32.onMouseLeave]
  );
  return n11.createElement(
    "span",
    {
      id: e32.id,
      ref: a37,
      dir: r16,
      "data-half": e32.half,
      tabIndex: e32.tabIndex,
      title: e32.title,
      style: e32.style,
      className: n2(
        "k-rating-item",
        {
          "k-rtl": r16 === "rtl",
          "k-selected": e32.selected,
          "k-hover": e32.hovered
        },
        e32.className
      ),
      onClick: i24,
      onKeyDown: d10,
      onFocus: v14,
      onBlur: h16,
      onMouseEnter: M7,
      onMouseLeave: m11,
      onMouseMove: f13
    },
    e32.children
  );
});
var k5 = {
  id: import_prop_types16.default.string,
  icon: import_prop_types16.default.any,
  dir: import_prop_types16.default.oneOf(["ltr", "rtl"]),
  title: import_prop_types16.default.string,
  value: import_prop_types16.default.number.isRequired,
  half: import_prop_types16.default.bool,
  selected: import_prop_types16.default.bool,
  hovered: import_prop_types16.default.bool
};
var b3 = {
  dir: "ltr"
};
s14.displayName = "KendoReactRatingItem";
s14.propTypes = k5;

// node_modules/@progress/kendo-react-inputs/rating/utils/index.mjs
var i12 = (t25, r16) => {
  if (t25 % 1) {
    const n27 = Math.pow(10, (r16.toString().split(".")[1] || r16.toString().split(".")[0]).length);
    return Math.round(t25 * n27) / n27;
  }
  return t25;
};
var c6 = (t25, r16) => t25 - r16 * Math.floor(t25 / r16);
var s15 = (t25, r16, n27) => i12(t25 - n27, n27) < r16 && r16 < t25;
var l9 = (t25, r16, n27, o21) => r16 === null ? false : o21 === "continues" ? s15(t25, r16, n27) ? i12(t25 - n27 / 2, n27 / 2) <= r16 : t25 <= r16 : o21 === "single" ? s15(t25, r16, n27) ? i12(t25 - n27 / 2, n27 / 2) === r16 : t25 === r16 : false;
var u9 = (t25, r16, n27) => t25 === "ltr" ? n27 < r16.x + r16.width / 2 : n27 > r16.x + r16.width / 2;
var h10 = (t25, r16, n27, o21) => {
  for (let f13 = t25; f13 <= r16; f13 += n27)
    if (o21 === f13)
      return true;
  return false;
};

// node_modules/@progress/kendo-react-inputs/rating/rating-reducer.mjs
var u10 = ((r16) => (r16.select = "select", r16.deselect = "deselect", r16.increase = "increase", r16.decrease = "decrease", r16.min = "min", r16.max = "max", r16.reset = "reset", r16))(u10 || {});
var p11 = (r16, e32) => {
  switch (e32.type) {
    case "select":
      return e32.payload === void 0 || e32.step === void 0 ? r16 : e32.payload === r16 ? null : e32.payload >= e32.min ? e32.payload < e32.max ? i12(e32.payload, e32.step) : e32.max : e32.min;
    case "deselect":
      return null;
    case "increase":
      return e32.step === void 0 ? r16 : r16 < e32.min ? e32.min : r16 + e32.step < e32.max ? i12(r16 + e32.step, e32.step) : e32.max;
    case "decrease":
      return e32.step === void 0 ? r16 : i12(r16 - e32.step, e32.step) >= e32.min ? i12(r16 - e32.step, e32.step) : e32.min;
    case "min":
      return e32.step === void 0 ? r16 : e32.min;
    case "max":
      return e32.max;
    case "reset":
      return null;
    default:
      return r16;
  }
};

// node_modules/@progress/kendo-react-inputs/rating/Rating.mjs
var q2 = (n27, g9, v14) => {
  const [e32, N4] = a24.useState(n27);
  return [e32, (h16) => {
    const o21 = p11(g9.state || e32, { ...h16, ...g9 });
    v14 && v14(o21, h16.event), N4(o21);
  }];
};
var de2 = a();
var G4 = a24.forwardRef((n27, g9) => {
  const v14 = n4(de2, n27), e32 = {
    dir: s16.dir,
    min: s16.min,
    max: s16.max,
    step: s16.step,
    item: s16.item,
    defaultValue: s16.defaultValue,
    readonly: s16.readonly,
    disabled: s16.disabled,
    selection: s16.selection,
    precision: s16.precision,
    ...v14
  }, N4 = i4(), m11 = a24.useRef(null), h16 = a24.useRef(null), o21 = u(h16, e32.dir);
  a24.useImperativeHandle(m11, () => ({
    element: h16.current,
    props: e32
  })), a24.useImperativeHandle(g9, () => m11.current);
  const W4 = a24.useCallback(
    (t25, l16) => {
      e32.onChange && m11.current && e32.onChange.call(void 0, {
        value: t25,
        target: m11.current,
        syntheticEvent: l16
      });
    },
    [e32.onChange]
  ), I11 = a24.useMemo(() => e32.min !== void 0 ? e32.min : s16.min, [e32.min]), x8 = a24.useMemo(() => e32.max !== void 0 ? e32.max : s16.max, [e32.max]), d10 = a24.useMemo(() => e32.precision || s16.precision, [e32.precision]), i24 = a24.useMemo(() => e32.step !== void 0 ? e32.step : s16.step, [e32.step]), V3 = a24.useMemo(() => e32.readonly || s16.readonly, [e32.readonly]), k8 = a24.useMemo(() => e32.disabled || s16.disabled, [e32.disabled]), _4 = a24.useMemo(() => e32.item || s16.item, [e32.item]), [H3, p18] = q2(
    e32.defaultValue !== void 0 ? e32.defaultValue : s16.defaultValue,
    {
      state: e32.value,
      min: I11,
      max: x8,
      step: d10 === "half" ? i24 / 2 : i24
    },
    W4
  ), [T7, O6] = q2(null, {
    state: e32.value,
    min: I11,
    max: x8,
    step: d10 === "half" ? i24 / 2 : i24,
    precision: d10
  }), u17 = a24.useMemo(
    () => e32.value !== void 0 ? e32.value : H3,
    [e32.value, H3]
  ), C7 = a24.useMemo(() => T7, [T7]), z5 = a24.useMemo(
    () => e32.selection || s16.selection,
    [e32.selection]
  ), E8 = a24.useMemo(() => i24 / (d10 === "half" ? 2 : 1), [i24, d10]), j4 = a24.useCallback(
    (t25) => {
      if (!(!t25.target || !t25.target.element || V3 || k8)) {
        if (d10 === "half") {
          const l16 = t25.target.element.getBoundingClientRect(), M7 = u9(o21 || "ltr", l16, t25.syntheticEvent.clientX) ? i12(t25.target.value - i24 / 2, E8) : t25.target.value;
          p18({ type: u10.select, payload: M7, event: t25.syntheticEvent });
        } else
          p18({
            type: u10.select,
            payload: t25.target.value,
            event: t25.syntheticEvent
          });
        if (e32.onClick) {
          const l16 = {
            value: u17,
            target: m11.current,
            syntheticEvent: t25.syntheticEvent
          };
          e32.onClick.call(void 0, l16);
        }
      }
    },
    [e32.onClick, p18, u17]
  ), J3 = a24.useCallback(
    (t25) => {
      if (!(V3 || k8)) {
        switch (t25.keyCode) {
          case e2.right:
            t25.preventDefault(), p18({
              type: o21 === "rtl" ? u10.decrease : u10.increase,
              event: t25
            });
            break;
          case e2.left:
            t25.preventDefault(), p18({
              type: o21 === "rtl" ? u10.increase : u10.decrease,
              event: t25
            });
            break;
          case e2.home:
            t25.preventDefault(), p18({
              type: o21 === "rtl" ? u10.min : u10.max,
              event: t25
            });
            break;
          case e2.end:
            t25.preventDefault(), p18({
              type: o21 === "rtl" ? u10.max : u10.min,
              event: t25
            });
            break;
          case e2.esc:
            t25.preventDefault(), p18({
              type: u10.deselect,
              event: t25
            });
            break;
        }
        e32.onKeyDown && e32.onKeyDown.call(void 0, {
          value: u17,
          target: m11.current,
          syntheticEvent: t25
        });
      }
    },
    [e32.onKeyDown, p18, u17]
  ), Q3 = a24.useCallback(
    (t25) => {
      if (e32.onFocus) {
        const l16 = {
          target: m11.current,
          syntheticEvent: t25
        };
        e32.onFocus.call(void 0, l16);
      }
    },
    [e32.onFocus]
  ), U2 = a24.useCallback(
    (t25) => {
      if (e32.onBlur) {
        const l16 = {
          target: m11.current,
          syntheticEvent: t25
        };
        e32.onBlur.call(void 0, l16);
      }
    },
    [e32.onBlur]
  ), Y2 = a24.useCallback(
    (t25) => {
      if (!(!t25.target || !t25.target.element))
        if (d10 === "half") {
          const l16 = t25.target.element.getBoundingClientRect(), M7 = u9(o21 || "ltr", l16, t25.syntheticEvent.clientX) ? t25.target.value - i24 / 2 : t25.target.value;
          O6({ type: u10.select, payload: M7, event: t25.syntheticEvent });
        } else
          O6({
            type: u10.select,
            payload: t25.target.value,
            event: t25.syntheticEvent
          });
    },
    [d10, i24, o21]
  ), Z2 = a24.useCallback((t25) => {
    O6({ type: u10.reset, event: t25.syntheticEvent });
  }, []), P10 = [], ee4 = c6(i12(x8 - I11, E8), i24);
  for (let t25 = I11; t25 <= x8; t25 = i12(t25 + i24, E8)) {
    const l16 = i12(t25 + ee4, E8), f13 = d10 === "half" ? s15(l16, C7 !== null ? C7 : u17 !== null ? u17 : 0, i24) : false, M7 = l9(l16, u17, i24, z5), w11 = l9(l16, C7 !== null ? C7 : u17, i24, z5), b8 = l9(l16, C7, i24, z5);
    P10.push(
      a24.createElement(
        _4,
        {
          key: l16,
          value: l16,
          dir: o21,
          title: String(f13 ? i12(l16 - i24 / 2, E8) : l16),
          icon: e32.icon,
          svgIcon: e32.svgIcon,
          half: f13,
          selected: M7 || w11,
          hovered: b8,
          onClick: j4,
          onMouseMove: Y2,
          onMouseLeave: Z2
        },
        f13 && a24.createElement("span", { className: "k-rating-precision-complement" }, !(e32.icon || e32.svgIconOutline) && a24.createElement(
          v3,
          {
            name: "star-outline",
            icon: starOutlineIcon,
            style: { clipPath: `${o21 === "rtl" ? "inset(0 50% 0 0)" : "inset(0 0 0 50%)"}` },
            size: "xlarge"
          }
        ), (e32.icon || e32.svgIconOutline) && a24.createElement(
          v3,
          {
            name: i2(`${e32.icon}-outline`),
            icon: e32.svgIconOutline,
            size: "xlarge"
          }
        )),
        f13 && a24.createElement("span", { className: "k-rating-precision-part" }, !(e32.icon || e32.svgIcon) && a24.createElement(
          v3,
          {
            name: "star",
            icon: starIcon,
            style: { clipPath: `${o21 === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"}` },
            size: "xlarge"
          }
        ), (e32.icon || e32.svgIcon) && a24.createElement(
          v3,
          {
            name: e32.icon ? i2(e32.icon) : void 0,
            icon: e32.svgIcon,
            size: "xlarge"
          }
        )),
        f13 && a24.createElement("span", { style: { width: "24px", height: "24px", display: "block" } }),
        !f13 && !(e32.icon || e32.svgIcon) && (b8 || w11 && !b8) && a24.createElement(v3, { name: "star", icon: starIcon, size: "xlarge" }) || !(e32.icon || e32.svgIcon) && !b8 && !w11 && a24.createElement(v3, { name: "star-outline", icon: starOutlineIcon, size: "xlarge" }) || (e32.icon || e32.svgIcon) && (b8 || w11 && !b8) && a24.createElement(v3, { name: e32.icon, icon: e32.svgIcon, size: "xlarge" }) || (e32.icon || e32.svgIcon) && !b8 && a24.createElement(
          v3,
          {
            name: i2(`${e32.icon}-outline`),
            icon: e32.svgIconOutline,
            size: "xlarge"
          }
        )
      )
    );
  }
  return a24.createElement(
    "span",
    {
      id: e32.id,
      style: e32.style,
      ref: h16,
      role: "slider",
      dir: o21,
      tabIndex: e4(e32.tabIndex, e32.disabled, void 0),
      className: n2(
        "k-rating",
        {
          "k-rtl": o21 === "rtl",
          "k-readonly": V3,
          "k-disabled": k8
        },
        e32.className
      ),
      onKeyDown: J3,
      onFocus: Q3,
      onBlur: U2,
      "aria-valuemin": I11,
      "aria-valuemax": x8,
      "aria-valuenow": u17 !== null ? u17 : void 0,
      "aria-disabled": k8 ? "true" : void 0,
      "aria-label": N4.toLanguageString(D2, I3[D2]),
      "aria-labelledby": e32.ariaLabelledBy,
      "aria-describedby": e32.ariaDescribedBy
    },
    a24.createElement("input", { id: "rating", className: "k-hidden", readOnly: V3, disabled: k8 }),
    a24.createElement("span", { className: "k-rating-container" }, P10),
    e32.label && a24.createElement("span", { className: "k-rating-label" }, e32.label)
  );
});
var pe2 = {
  id: import_prop_types17.default.string,
  dir: import_prop_types17.default.oneOf(["ltr", "rtl"]),
  selection: import_prop_types17.default.oneOf(["continues", "single"]),
  precision: import_prop_types17.default.oneOf(["item", "half"]),
  value: (n27, g9, v14) => n27.value && n27.min && n27.max && n27.step && !(n27.precision === "half" ? h10(n27.min, n27.max, n27.step / 2, n27.value) : h10(n27.min, n27.max, n27.step, n27.value)) && n27.precision === "half" ? new Error(
    `Invalid prop + ${g9} supplied to ${v14}.
                    The value of the { value } property is not correct, please check your values.
                    `
  ) : null,
  defaultValue: import_prop_types17.default.number,
  min: import_prop_types17.default.number,
  max: import_prop_types17.default.number,
  step: (n27, g9, v14) => n27.step !== void 0 && n27.step <= 0 ? new Error(
    `Invalid prop + ${g9} supplied to ${v14}.
                The value of the { step } property is cannot be equal or less than "0", please check your values.
                `
  ) : null,
  hovered: import_prop_types17.default.number,
  label: import_prop_types17.default.string,
  readonly: import_prop_types17.default.bool,
  disabled: import_prop_types17.default.bool,
  half: import_prop_types17.default.bool,
  icon: import_prop_types17.default.string,
  svgIcon: r,
  svgIconOutline: r,
  ariaDescribedBy: import_prop_types17.default.string
};
var s16 = {
  dir: "ltr",
  min: 1,
  max: 5,
  step: 1,
  item: s14,
  defaultValue: null,
  readonly: false,
  disabled: false,
  selection: "continues",
  precision: "item"
};
G4.displayName = "KendoReactRating";
G4.propTypes = pe2;

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/result.js
var ResultType;
(function(ResultType2) {
  ResultType2[ResultType2["Literal"] = 0] = "Literal";
  ResultType2[ResultType2["Mask"] = 1] = "Mask";
  ResultType2[ResultType2["Undefined"] = 2] = "Undefined";
})(ResultType || (ResultType = {}));
var Result = (
  /** @class */
  function() {
    function Result2(value, rest, type) {
      if (type === void 0) {
        type = ResultType.Undefined;
      }
      this.value = value;
      this.rest = rest;
      this.type = type;
    }
    Result2.prototype.map = function(fn) {
      return new Result2(fn(this.value), this.rest);
    };
    Result2.prototype.chain = function(fn) {
      return fn(this.value, this.rest);
    };
    Result2.prototype.fold = function(s26, _4) {
      return s26(this.value, this.rest);
    };
    Result2.prototype.concat = function(r16) {
      return this.map(function(vs, _4) {
        return r16.chain(function(v14, __) {
          return vs.concat([v14]);
        });
      });
    };
    Result2.prototype.toString = function() {
      return "Result({ value: '" + this.value + "', rest: " + this.rest + " })";
    };
    return Result2;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/stream.js
var Stream = (
  /** @class */
  function() {
    function Stream2(input, control) {
      if (input === void 0) {
        input = [];
      }
      if (control === void 0) {
        control = [];
      }
      this.input = input;
      this.control = control;
      this.inputCursor = 0;
      this.controlCursor = 0;
    }
    Stream2.prototype.eof = function() {
      return this.inputCursor >= this.input.length;
    };
    Stream2.prototype.next = function() {
      return {
        char: this.input[this.inputCursor++],
        control: this.control[this.controlCursor++]
      };
    };
    Stream2.prototype.peek = function() {
      return {
        char: this.input[this.inputCursor],
        control: this.control[this.controlCursor]
      };
    };
    Stream2.prototype.eat_input = function() {
      this.inputCursor++;
    };
    Stream2.prototype.eat_control = function() {
      this.controlCursor++;
    };
    Stream2.prototype.eat = function() {
      this.inputCursor++;
      this.controlCursor++;
    };
    return Stream2;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/parsers.js
var toArray = function(value) {
  return (value || "").split("");
};
var ESCAPE_CHARACTER = "\\";
var Parser = (
  /** @class */
  function() {
    function Parser2(parse) {
      this.parse = parse;
    }
    Parser2.prototype.run = function(input, control) {
      if (control === void 0) {
        control = "";
      }
      if (input instanceof Stream) {
        return this.parse(input);
      } else {
        return this.parse(new Stream(toArray(input), toArray(control)));
      }
    };
    Parser2.prototype.map = function(f13) {
      var _this = this;
      return new Parser2(function(stream) {
        return _this.parse(stream).map(f13);
      });
    };
    Parser2.prototype.chain = function(f13) {
      var _this = this;
      return new Parser2(function(stream) {
        return _this.parse(stream).chain(function(v14, s26) {
          return f13(v14).run(s26);
        });
      });
    };
    Parser2.prototype.isLiteral = function(c16) {
      return this.run(c16).type === ResultType.Literal;
    };
    return Parser2;
  }()
);
var mask = function(_a2) {
  var prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
  return function(rule) {
    return new Parser(function(stream) {
      while (!stream.eof()) {
        var _a3 = stream.peek(), char = _a3.char, control = _a3.control;
        if (char === control && control === prompt) {
          stream.eat();
          return new Result(prompt, stream, ResultType.Mask);
        }
        if (rule.test(char)) {
          stream.eat();
          return new Result(char, stream, ResultType.Mask);
        }
        if (char === promptPlaceholder) {
          stream.eat();
          return new Result(prompt, stream, ResultType.Mask);
        }
        stream.eat_input();
      }
      stream.eat();
      return new Result(prompt, stream, ResultType.Mask);
    });
  };
};
var literal = function(_token) {
  return new Parser(function(stream) {
    var char = stream.peek().char;
    if (char === _token) {
      stream.eat();
      return new Result(_token, stream, ResultType.Literal);
    }
    return new Result(_token, stream, ResultType.Literal);
  });
};
var unmask = function(prompt) {
  return function(rule) {
    return new Parser(function(stream) {
      while (!stream.eof()) {
        var _a2 = stream.peek(), char = _a2.char, control = _a2.control;
        if (char === prompt && control === prompt) {
          stream.eat();
          return new Result(char, stream);
        }
        if (rule.test(char)) {
          stream.eat();
          return new Result(char, stream);
        }
        stream.eat_input();
      }
      stream.eat();
      return new Result("", stream);
    });
  };
};
var unliteral = function(_token) {
  return new Parser(function(stream) {
    if (stream.eof()) {
      return new Result("", stream);
    }
    var char = stream.peek().char;
    if (char === _token) {
      stream.eat();
    }
    return new Result(_token, stream);
  });
};
var token = function(rules, creator) {
  return new Parser(function(stream) {
    var char = stream.next().char;
    var rule = rules[char];
    if (char === ESCAPE_CHARACTER) {
      char = stream.next().char;
      return new Result(creator.literal(char), stream);
    }
    if (!rule) {
      return new Result(creator.literal(char), stream);
    }
    return new Result(creator.mask(rule), stream);
  });
};
var rawMask = function(_a2) {
  var prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
  return new Parser(function(stream) {
    var char = stream.next().char;
    if (char === prompt) {
      return new Result(promptPlaceholder, stream);
    }
    return new Result(char, stream);
  });
};
var rawLiteral = function(includeLiterals) {
  return new Parser(function(stream) {
    var char = stream.next().char;
    if (includeLiterals) {
      return new Result(char, stream);
    }
    return new Result("", stream);
  });
};

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/combinators.js
var always = function(value) {
  return new Parser(function(stream) {
    return new Result(value, stream);
  });
};
var append = function(p1, p22) {
  return p1.chain(function(vs) {
    return p22.map(function(v14) {
      return vs.concat([v14]);
    });
  });
};
var sequence = function(list) {
  return list.reduce(function(acc, parser) {
    return append(acc, parser);
  }, always([]));
};
var greedy = function(parser) {
  return new Parser(function(stream) {
    var result = new Result([], stream);
    while (!stream.eof()) {
      result = result.concat(parser.run(stream));
    }
    return result;
  });
};

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/masking.service.js
var MaskingService = (
  /** @class */
  function() {
    function MaskingService2() {
      this.rules = {};
      this.prompt = "_";
      this.mask = "";
      this.promptPlaceholder = " ";
      this.includeLiterals = false;
      this.maskTokens = [];
      this.unmaskTokens = [];
      this.rawTokens = [];
      this.validationTokens = [];
    }
    MaskingService2.prototype.update = function(_a2) {
      var _b = _a2.mask, mask2 = _b === void 0 ? "" : _b, _c = _a2.prompt, prompt = _c === void 0 ? "" : _c, _d = _a2.promptPlaceholder, promptPlaceholder = _d === void 0 ? " " : _d, _e = _a2.rules, rules = _e === void 0 ? {} : _e, _f = _a2.includeLiterals, includeLiterals = _f === void 0 ? false : _f;
      this.mask = mask2;
      this.prompt = prompt;
      this.promptPlaceholder = promptPlaceholder;
      this.rules = rules;
      this.includeLiterals = includeLiterals;
      this.tokenize();
    };
    MaskingService2.prototype.validationValue = function(maskedValue) {
      if (maskedValue === void 0) {
        maskedValue = "";
      }
      var value = maskedValue;
      sequence(this.validationTokens).run(maskedValue).fold(function(unmasked) {
        value = unmasked.join("");
      });
      return value;
    };
    MaskingService2.prototype.rawValue = function(maskedValue) {
      if (maskedValue === void 0) {
        maskedValue = "";
      }
      var value = maskedValue;
      if (!this.rawTokens.length) {
        return value;
      }
      sequence(this.rawTokens).run(maskedValue).fold(function(unmasked) {
        value = unmasked.join("");
      });
      return value;
    };
    MaskingService2.prototype.maskRaw = function(rawValue) {
      if (rawValue === void 0) {
        rawValue = "";
      }
      var value = rawValue;
      if (!this.maskTokens.length) {
        return value;
      }
      sequence(this.maskTokens).run(rawValue).fold(function(masked) {
        value = masked.join("");
      });
      return value;
    };
    MaskingService2.prototype.maskInput = function(input, control, splitPoint) {
      if (input.length < control.length) {
        return this.maskRemoved(input, control, splitPoint);
      }
      return this.maskInserted(input, control, splitPoint);
    };
    MaskingService2.prototype.maskInRange = function(pasted, oldValue, start, end) {
      var value = "";
      var selection = end;
      var beforeChange = oldValue.split("").slice(0, start);
      var afterChange = oldValue.split("").slice(end);
      sequence(this.maskTokens.slice(start, end)).run(pasted).fold(function(masked) {
        value = beforeChange.concat(masked).concat(afterChange).join("");
      });
      return {
        selection,
        value
      };
    };
    MaskingService2.prototype.maskRemoved = function(input, control, splitPoint) {
      var _this = this;
      var value = "";
      var selection = splitPoint;
      var unchanged = input.split("").slice(splitPoint);
      var changed = input.split("").slice(0, splitPoint).join("");
      var take = this.maskTokens.length - (input.length - splitPoint);
      sequence(this.maskTokens.slice(0, take)).run(changed, control).fold(function(masked) {
        selection = _this.adjustPosition(masked, selection);
        value = masked.concat(unchanged).join("");
      });
      return {
        selection,
        value
      };
    };
    MaskingService2.prototype.adjustPosition = function(input, selection) {
      var caretChar = input[selection];
      var isLiteral = this.maskTokens[selection].isLiteral(caretChar);
      if (!isLiteral && caretChar !== this.prompt) {
        return selection + 1;
      }
      return selection;
    };
    MaskingService2.prototype.maskInserted = function(input, control, splitPoint) {
      var _this = this;
      var value = "";
      var selection = splitPoint;
      var changed = input.slice(0, splitPoint);
      sequence(this.unmaskTokens).run(changed, control).chain(function(unmasked) {
        selection = unmasked.join("").length;
        var unchanged = control.slice(selection);
        return sequence(_this.maskTokens).run(unmasked.join("") + unchanged, control);
      }).fold(function(masked) {
        value = masked.join("");
      });
      return {
        selection,
        value
      };
    };
    Object.defineProperty(MaskingService2.prototype, "maskTokenCreator", {
      get: function() {
        var _a2 = this, prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
        return {
          literal: function(rule) {
            return literal(rule);
          },
          mask: function(rule) {
            return mask({ prompt, promptPlaceholder })(rule);
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService2.prototype, "unmaskTokenCreator", {
      get: function() {
        var _this = this;
        return {
          literal: function(rule) {
            return unliteral(rule);
          },
          mask: function(rule) {
            return unmask(_this.prompt)(rule);
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService2.prototype, "rawTokenCreator", {
      get: function() {
        var _a2 = this, prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder, includeLiterals = _a2.includeLiterals;
        return {
          literal: function(_4) {
            return rawLiteral(includeLiterals);
          },
          mask: function(_4) {
            return rawMask({ prompt, promptPlaceholder });
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService2.prototype, "validationTokenCreator", {
      get: function() {
        var prompt = this.prompt;
        return {
          literal: function(_4) {
            return rawLiteral(false);
          },
          mask: function(_4) {
            return rawMask({ prompt, promptPlaceholder: "" });
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MaskingService2.prototype.tokenize = function() {
      var _this = this;
      greedy(token(this.rules, this.maskTokenCreator)).run(this.mask).fold(function(tokens, _4) {
        _this.maskTokens = tokens;
      });
      greedy(token(this.rules, this.unmaskTokenCreator)).run(this.mask).fold(function(tokens, _4) {
        _this.unmaskTokens = tokens;
      });
      greedy(token(this.rules, this.rawTokenCreator)).run(this.mask).fold(function(tokens, _4) {
        _this.rawTokens = tokens;
      });
      greedy(token(this.rules, this.validationTokenCreator)).run(this.mask).fold(function(tokens, _4) {
        _this.validationTokens = tokens;
      });
    };
    return MaskingService2;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/common/drawing-utils.js
var _a = drawing_exports.util;
var elementOffset = _a.elementOffset;
var limitValue = _a.limitValue;

// node_modules/@progress/kendo-inputs-common/dist/es/signature/signature-pad.js
var Point = geometry_exports.Point;
var Rect = geometry_exports.Rect;
var transform = geometry_exports.transform;
var noop = function() {
};
var DECIMAL_DIGITS = 3;
var DEFAULT_COLOR = "#000";
var DEFAULT_BACKGROUND_COLOR = "#fff";
var DEFAULT_PRECISION = 1;
var DEFAULT_SAMPLING_RATE = 200;
var DEFAULT_STROKE_WIDTH = 1;
var DEFAULT_WIDTH = 750;
var DEFAULT_HEIGHT = 250;
var DEFAULT_SCALE = 1;
var DEFAULT_EXPORT_SCALE = 6;
var SignaturePad = (
  /** @class */
  function() {
    function SignaturePad2(element, options) {
      if (options === void 0) {
        options = {};
      }
      this.element = element;
      this.lastMoveTime = 0;
      this.resolveColors(options);
      this.options = Object.assign({
        scale: DEFAULT_SCALE,
        precision: DEFAULT_PRECISION,
        samplingRate: DEFAULT_SAMPLING_RATE,
        smooth: options.smooth !== false,
        color: DEFAULT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH,
        onChange: noop,
        onDraw: noop,
        onDrawEnd: noop
      }, options, {
        color: this.color,
        backgroundColor: this.backgroundColor
      });
      this.pathOptions = {
        stroke: {
          color: this.options.color,
          width: this.options.strokeWidth,
          lineCap: "round",
          lineJoin: "round"
        }
      };
      this.initSurface();
      this.attachEvents();
    }
    SignaturePad2.prototype.destroy = function() {
      this.detachEvents();
    };
    SignaturePad2.prototype.clear = function() {
      this.rootGroup.clear();
      this.path = null;
    };
    SignaturePad2.prototype.readThemeColors = function() {
      var themeColor;
      var themeBackgroundColor;
      if (typeof document !== "undefined") {
        var themeElement = this.element.closest(".k-signature") || this.element;
        var computedStyle = themeElement.ownerDocument.defaultView.getComputedStyle(themeElement);
        themeColor = computedStyle.color;
        themeBackgroundColor = computedStyle.backgroundColor;
      }
      this.themeColor = themeColor || this.themeColor || DEFAULT_COLOR;
      this.themeBackgroundColor = themeBackgroundColor || this.themeBackgroundColor || DEFAULT_BACKGROUND_COLOR;
    };
    SignaturePad2.prototype.resolveColors = function(options) {
      this.readThemeColors();
      this.color = options.color || (this.options || {}).color || this.themeColor;
      this.backgroundColor = options.backgroundColor || (this.options || {}).backgroundColor || this.themeBackgroundColor;
    };
    Object.defineProperty(SignaturePad2.prototype, "isDrawing", {
      get: function() {
        return Boolean(this.points);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SignaturePad2.prototype, "pathData", {
      get: function() {
        var _a2;
        return (_a2 = this.path) === null || _a2 === void 0 ? void 0 : _a2.toString(DECIMAL_DIGITS);
      },
      set: function(value) {
        this.clear();
        this.path = MultiPath.parse(value, this.pathOptions);
        this.rootGroup.append(this.path);
      },
      enumerable: false,
      configurable: true
    });
    SignaturePad2.prototype.loadImage = function(data, size) {
      if (size === void 0) {
        size = [];
      }
      if (!data) {
        this.clear();
        return;
      }
      var _a2 = this.size, width = _a2[0], height = _a2[1];
      var contentWidth = width / this.options.scale;
      var contentHeight = height / this.options.scale;
      var importWidth = size[0] || contentWidth * DEFAULT_EXPORT_SCALE;
      var importHeight = size[1] || contentHeight * DEFAULT_EXPORT_SCALE;
      var scaleX = contentWidth / importWidth;
      var scaleY = contentHeight / importHeight;
      var scale = Math.min(scaleX, scaleY);
      var img = new image_default(data, new geometry_exports.Rect([0, 0], [importWidth, importHeight]));
      img.transform(transform().scale(scale, scale));
      this.clear();
      this.rootGroup.append(img);
    };
    SignaturePad2.prototype.exportImage = function(options) {
      var _a2;
      var _b = this.size, width = _b[0], height = _b[1];
      var contentWidth = width / this.options.scale;
      var contentHeight = height / this.options.scale;
      var exportWidth = (options === null || options === void 0 ? void 0 : options.width) || contentWidth * DEFAULT_EXPORT_SCALE;
      var exportHeight = (options === null || options === void 0 ? void 0 : options.height) || contentHeight * DEFAULT_EXPORT_SCALE;
      var scaleX = exportWidth / contentWidth;
      var scaleY = exportHeight / contentHeight;
      var scale = Math.min(scaleX, scaleY);
      var exportRect = new Rect([0, 0], [exportWidth, exportHeight]);
      var exportGroup = new group_default({
        clip: Path.fromRect(exportRect)
      });
      var contentGroup = new group_default({
        transform: transform().scale(scale, scale)
      });
      var frame = Path.fromRect(exportRect, {
        fill: {
          color: this.options.backgroundColor
        }
      });
      exportGroup.append(frame);
      exportGroup.append(contentGroup);
      (_a2 = contentGroup.children).push.apply(_a2, this.rootGroup.children);
      return exportImage(exportGroup, Object.assign({
        width: exportWidth,
        height: exportHeight
      }, options));
    };
    SignaturePad2.prototype.resize = function() {
      this.surface.resize(true);
    };
    SignaturePad2.prototype.setOptions = function(options) {
      this.resolveColors(options);
      Object.assign(this.options, options, {
        color: this.color,
        backgroundColor: this.backgroundColor
      });
      this.pathOptions.stroke.color = this.options.color;
      this.pathOptions.stroke.width = this.options.strokeWidth;
      if (this.path) {
        this.path.options.set("stroke.color", this.options.color);
        this.path.options.set("stroke.width", this.options.strokeWidth);
      }
      this.background.options.set("fill.color", this.options.backgroundColor);
    };
    SignaturePad2.prototype.initSurface = function() {
      this.surface = surface_default.create(this.element, { type: "canvas" });
      this.element.style.touchAction = "none";
      var scale = this.options.scale;
      this.rootGroup = new group_default({
        transform: transform().scale(scale, scale)
      });
      var width = this.element.offsetWidth || DEFAULT_WIDTH;
      var height = this.element.offsetHeight || DEFAULT_HEIGHT;
      this.size = [width, height];
      this.background = Path.fromRect(new Rect([0, 0], this.size), {
        fill: {
          color: this.options.backgroundColor
        }
      });
      this.surface.draw(this.background);
      this.surface.draw(this.rootGroup);
    };
    SignaturePad2.prototype.attachEvents = function() {
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);
      this.onDragStart = this.onDragStart.bind(this);
      this.element.addEventListener("pointerdown", this.onPointerDown);
      this.element.addEventListener("pointerup", this.onPointerUp);
      this.element.addEventListener("dragstart", this.onDragStart);
    };
    SignaturePad2.prototype.detachEvents = function() {
      this.element.removeEventListener("pointerdown", this.onPointerDown);
      this.detachPointerMove();
      this.element.removeEventListener("pointerup", this.onPointerUp);
      this.element.removeEventListener("dragstart", this.onDragStart);
    };
    SignaturePad2.prototype.attachPointerMove = function() {
      this.element.addEventListener("pointermove", this.onPointerMove);
    };
    SignaturePad2.prototype.detachPointerMove = function() {
      this.element.removeEventListener("pointermove", this.onPointerMove);
    };
    SignaturePad2.prototype.touchPoint = function(e32) {
      var offset = elementOffset(this.element);
      var pageX = e32.pageX;
      var pageY = e32.pageY;
      var scale = 1 / this.options.scale;
      return new Point(pageX - offset.left, pageY - offset.top).scale(scale, scale);
    };
    SignaturePad2.prototype.onDragStart = function(e32) {
      e32.preventDefault();
    };
    SignaturePad2.prototype.onPointerDown = function(e32) {
      if (this.options.readonly || !e32.isPrimary || !isMainButton(e32)) {
        return;
      }
      this.detachPointerMove();
      this.attachPointerMove();
      if (!this.path) {
        this.path = new MultiPath(this.pathOptions);
        this.rootGroup.append(this.path);
      }
      this.options.onDraw();
      this.element.setPointerCapture(e32.pointerId);
      var point = this.touchPoint(e32);
      this.points = [point];
      this.path.moveTo(point);
    };
    SignaturePad2.prototype.onPointerMove = function(e32) {
      if (!this.points || !this.path || !e32.isPrimary) {
        return;
      }
      var now = (/* @__PURE__ */ new Date()).getTime();
      var elapsed = now - this.lastMoveTime;
      var minTimeDelta = 1e3 / limitValue(this.options.samplingRate, 1, 1e4);
      if (elapsed < minTimeDelta) {
        return;
      } else {
        this.lastMoveTime = now;
      }
      var point = this.touchPoint(e32);
      var lastPoint = this.points[this.points.length - 1];
      var minDelta = 1 / limitValue(this.options.precision, 0.01, 100);
      if (point.distanceTo(lastPoint) < minDelta) {
        return;
      }
      this.points.push(point);
      this.path.lineTo(point);
    };
    SignaturePad2.prototype.onPointerUp = function(e32) {
      if (!e32.isPrimary || !this.path || !this.points || this.options.readonly) {
        return;
      }
      this.detachPointerMove();
      if (this.options.smooth) {
        var segments = Path.curveFromPoints(this.points);
        this.path.paths.splice(this.path.paths.length - 1, 1, segments);
      }
      this.points = null;
      this.options.onDrawEnd();
      this.options.onChange(this.pathData);
    };
    return SignaturePad2;
  }()
);
function isMainButton(e32) {
  return typeof e32.button !== "number" || e32.button === 0;
}

// node_modules/@progress/kendo-react-dialogs/Dialog.mjs
var o13 = __toESM(require_react(), 1);
var b4 = __toESM(require_react_dom(), 1);
var import_prop_types19 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dialogs/DialogTitleBar.mjs
var t13 = __toESM(require_react(), 1);
var s17 = ({
  children: e32,
  onCloseButtonClick: a37,
  id: i24,
  closeIcon: l16
}) => t13.createElement("div", { className: "k-window-titlebar k-dialog-titlebar", id: i24 }, t13.createElement("span", { className: "k-window-title k-dialog-title" }, e32), l16 && t13.createElement("div", { className: "k-window-titlebar-actions k-dialog-titlebar-actions" }, t13.createElement(
  M,
  {
    role: "button",
    "aria-label": "Close",
    onClick: a37,
    icon: "x",
    svgIcon: xIcon,
    fillMode: "flat",
    className: "k-window-titlebar-action k-dialog-titlebar-action"
  }
)));

// node_modules/@progress/kendo-react-dialogs/DialogActionsBar.mjs
var n12 = __toESM(require_react(), 1);
var import_prop_types18 = __toESM(require_prop_types(), 1);
var i13 = (s26) => {
  const e32 = {
    layout: "stretched",
    ...s26
  }, { layout: o21, children: a37 } = e32, r16 = n2("k-actions", "k-actions-horizontal", "k-window-actions k-dialog-actions", {
    [`k-actions-${o21}`]: o21
  });
  return n12.createElement("div", { className: r16 }, a37);
};
i13.propTypes = {
  children: import_prop_types18.default.any,
  layout: import_prop_types18.default.oneOf(["start", "center", "end", "stretched"])
};

// node_modules/@progress/kendo-react-dialogs/constants.mjs
var o12 = "data-windowid";
var D5 = 10002;
var n13 = 2;
var t15 = ".k-window:not(.k-dialog), .k-dialog-wrapper";

// node_modules/@progress/kendo-react-dialogs/utils.mjs
var A9 = (n27, t25, o21) => {
  let e32 = n27;
  if (t25 && t25.defaultView) {
    const x8 = t25.querySelectorAll(t15);
    let l16 = false;
    return x8.forEach((d10) => {
      const a37 = t25.defaultView.getComputedStyle(d10, null);
      if (d10.getAttribute(o12) !== o21 && a37.zIndex !== null) {
        const I11 = parseInt(a37.zIndex, 10);
        I11 >= e32 && (e32 = I11, l16 = true);
      }
    }), l16 ? e32 + n13 : e32;
  }
  return e32;
};

// node_modules/@progress/kendo-react-dialogs/Dialog.mjs
var i14 = class i15 extends o13.Component {
  constructor(e32) {
    super(e32), this.context = 0, this.titleId = this.generateTitleId(), this.contentId = this.generateContentId(), this.activeElement = null, this.onCloseDialog = (t25) => {
      t25.preventDefault(), v2(this.props.onClose, t25, this, void 0);
    }, this.onKeyDown = (t25) => {
      t25.keyCode === e2.esc && this.props.onClose && (t25.preventDefault(), this.onCloseDialog(t25)), n3(t25, this.element);
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : D5 : this.state.zIndex > (this.context ? this.context + n13 : 0) ? this.state.zIndex : this.context + n13, this.getDocument = () => this.props.appendTo ? this.props.appendTo.ownerDocument : document, this.activeElement = o4(document);
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    if (this.element) {
      if (this.props.autoFocus && !this.props.autoFocusedElement)
        this.element.focus();
      else if (this.props.autoFocus && this.props.autoFocusedElement)
        this.element.focus();
      else if (!this.props.autoFocus && this.props.autoFocusedElement) {
        const e32 = this.element.querySelector(
          this.props.autoFocusedElement
        );
        e32 && e32.focus();
      } else {
        const e32 = [...s2].map(
          (t25) => t25 + ":not(.k-dialog-titlebar *)"
        );
        e3(this.element, e32);
      }
      this.setState({
        zIndex: A9(this.getCurrentZIndex(), this.getDocument(), this._id)
      });
    }
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    setTimeout(() => {
      var e32;
      !this.element && this.activeElement && document && (document.contains(this.activeElement) ? this.activeElement.focus() : this.activeElement.id && ((e32 = document.getElementById(this.activeElement.id)) == null || e32.focus()));
    });
  }
  /**
   * @hidden
   */
  render() {
    const e32 = this.props.id !== void 0 ? this.props.id : this.titleId, { title: t25, width: h16, height: m11, children: u17, minWidth: g9, dir: y11, style: f13, contentStyle: I11, modal: E8 = true } = this.props, r16 = o13.Children.toArray(u17), D8 = this.getContent(r16), C7 = this.getActionBar(r16), x8 = t25 ? {
      "aria-labelledby": e32
    } : null, v14 = this.props.closeIcon !== void 0 ? this.props.closeIcon : true, l16 = this.getCurrentZIndex(), a37 = o13.createElement(t.Provider, { value: l16 }, o13.createElement(
      "div",
      {
        [o12]: this._id,
        className: "k-dialog-wrapper" + (this.props.className ? " " + this.props.className : ""),
        onKeyDown: this.onKeyDown,
        tabIndex: 0,
        dir: y11,
        style: {
          zIndex: l16,
          ...f13
        },
        ref: (T7) => this.element = T7
      },
      E8 && o13.createElement("div", { className: "k-overlay", style: this.props.overlayStyle }),
      o13.createElement(
        "div",
        {
          ...x8,
          className: n2("k-window k-dialog", {
            [`k-window-${this.props.themeColor}`]: this.props.themeColor
          }),
          role: "dialog",
          "aria-labelledby": e32,
          "aria-modal": true,
          "aria-describedby": this.contentId,
          style: { width: h16, height: m11, minWidth: g9 }
        },
        this.props.title && o13.createElement(s17, { closeIcon: v14, onCloseButtonClick: this.onCloseDialog, id: e32 }, t25),
        o13.createElement("div", { className: "k-window-content k-dialog-content", style: I11, id: this.contentId }, D8),
        C7
      )
    ));
    return e ? this.props.appendTo !== null ? b4.createPortal(a37, this.props.appendTo || document.body) : a37 : null;
  }
  getActionBar(e32) {
    return e32.filter((t25) => t25 && t25.type === i13);
  }
  getContent(e32) {
    return e32.filter((t25) => t25 && t25.type !== i13);
  }
  generateTitleId() {
    return "dialog-title-" + this._id;
  }
  generateContentId() {
    return "dialog-content-" + this._id;
  }
};
i14.displayName = "Dialog", i14.propTypes = {
  title: import_prop_types19.default.any,
  id: import_prop_types19.default.string,
  dir: import_prop_types19.default.string,
  style: import_prop_types19.default.object,
  closeIcon: import_prop_types19.default.bool,
  width: import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string]),
  height: import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string]),
  minWidth: import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string]),
  autoFocus: import_prop_types19.default.bool
}, i14.defaultProps = {
  autoFocus: false
}, i14.contextType = t;
var n14 = i14;
var U = a();
var G5 = a2(
  x(
    U,
    n14
  )
);
G5.displayName = "KendoReactDialog";

// node_modules/@progress/kendo-react-dialogs/Window.mjs
var h11 = __toESM(require_react(), 1);
var A10 = __toESM(require_react_dom(), 1);
var import_prop_types21 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dialogs/WindowTitlebar.mjs
var e16 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-dialogs/StageEnum.mjs
var I5 = ((E8) => (E8.DEFAULT = "DEFAULT", E8.FULLSCREEN = "FULLSCREEN", E8.MINIMIZED = "MINIMIZED", E8))(I5 || {});

// node_modules/@progress/kendo-react-dialogs/messages/index.mjs
var o14 = "dialogs.windowMaximizeButton";
var i16 = "dialogs.windowMinimizeButton";
var t16 = "dialogs.windowRestoreButton";
var n15 = "dialogs.windowCloseButton";
var s19 = {
  [o14]: "maximize",
  [i16]: "minimize",
  [t16]: "restore",
  [n15]: "close"
};

// node_modules/@progress/kendo-react-dialogs/WindowTitlebar.mjs
var v8 = (t25) => {
  const {
    children: o21,
    onCloseButtonClick: r16,
    onMinimizeButtonClick: m11,
    onFullScreenButtonClick: s26,
    onRestoreButtonClick: d10,
    onDoubleClick: f13,
    stage: n27,
    forwardedRef: k8,
    id: C7
  } = t25, i24 = i4(), E8 = t25.minimizeButton ? e16.createElement(t25.minimizeButton, { onClick: m11, stage: n27 }) : e16.createElement(
    M,
    {
      fillMode: "flat",
      icon: "window-minimize",
      svgIcon: windowMinimizeIcon,
      className: "k-window-titlebar-action",
      onClick: m11,
      "aria-label": i24.toLanguageString(
        i16,
        s19[i16]
      )
    }
  ), z5 = t25.maximizeButton ? e16.createElement(t25.maximizeButton, { onClick: s26, stage: n27 }) : e16.createElement(
    M,
    {
      fillMode: "flat",
      icon: "window-maximize",
      svgIcon: windowIcon,
      className: "k-window-titlebar-action",
      onClick: s26,
      "aria-label": i24.toLanguageString(
        o14,
        s19[o14]
      )
    }
  ), b8 = t25.restoreButton ? e16.createElement(t25.restoreButton, { onClick: d10, stage: n27 }) : e16.createElement(
    M,
    {
      fillMode: "flat",
      icon: "window-restore",
      svgIcon: windowRestoreIcon,
      className: "k-window-titlebar-action",
      onClick: d10,
      "aria-label": i24.toLanguageString(t16, s19[t16])
    }
  ), R5 = t25.closeButton ? e16.createElement(t25.closeButton, { onClick: r16, stage: n27 }) : e16.createElement(
    M,
    {
      fillMode: "flat",
      icon: "x",
      svgIcon: xIcon,
      className: "k-window-titlebar-action",
      onClick: r16,
      "aria-label": i24.toLanguageString(n15, s19[n15])
    }
  );
  return e16.createElement(
    "div",
    {
      className: "k-window-titlebar",
      style: { touchAction: "none" },
      ref: k8,
      onDoubleClick: f13
    },
    e16.createElement("span", { className: "k-window-title", id: C7 }, o21 || ""),
    e16.createElement("div", { className: "k-window-titlebar-actions" }, n27 === I5.DEFAULT && E8, n27 === I5.DEFAULT && z5, n27 !== I5.DEFAULT && b8, R5)
  );
};
var F3 = e16.forwardRef((t25, o21) => e16.createElement(v8, { ...t25, forwardedRef: o21 }));

// node_modules/@progress/kendo-react-dialogs/WindowResizeHandlers.mjs
var n16 = __toESM(require_react(), 1);
var o15 = ["n", "e", "s", "w", "se", "sw", "ne", "nw"];
var c7 = class extends n16.Component {
  render() {
    return n16.createElement("div", { className: "k-resize-handles-wrapper" }, " ", o15.map((t25, r16) => n16.createElement(
      s6,
      {
        key: r16,
        onDrag: (s26) => {
          const { event: e32 } = s26;
          e32.originalEvent.preventDefault(), this.props.onResize(e32, { end: false, direction: t25 });
        },
        onRelease: (s26) => {
          const { event: e32 } = s26;
          e32.originalEvent.preventDefault(), this.props.onResize(e32, { end: true, direction: t25 });
        }
      },
      n16.createElement(
        "div",
        {
          className: "k-resize-handle k-resize-" + t25,
          style: { display: "block", touchAction: "none", userSelect: "none" }
        }
      )
    )));
  }
};

// node_modules/@progress/kendo-react-dialogs/MiddleLayerOptimization.mjs
var r9 = __toESM(require_react(), 1);
var n17 = class extends r9.Component {
  shouldComponentUpdate(e32) {
    return e32.shouldUpdateOnDrag || !e32.isDragging;
  }
  render() {
    return this.props.children;
  }
};

// node_modules/@progress/kendo-react-dialogs/WindowActionsBar.mjs
var c8 = __toESM(require_react(), 1);
var import_prop_types20 = __toESM(require_prop_types(), 1);
var i17 = (n27) => {
  const o21 = {
    layout: "end",
    ...n27
  }, { layout: t25, children: s26 } = o21, r16 = n2("k-actions", "k-window-actions", "k-actions-horizontal", "k-hstack", {
    "k-justify-content-start": t25 === "start",
    "k-justify-content-center": t25 === "center",
    "k-justify-content-end": t25 === "end",
    "k-justify-content-stretch": t25 === "stretched"
  });
  return c8.createElement("div", { className: r16 }, s26);
};
i17.propTypes = {
  children: import_prop_types20.default.any,
  layout: import_prop_types20.default.oneOf(["start", "center", "end", "stretched"])
};

// node_modules/@progress/kendo-react-dialogs/Window.mjs
var u11 = 300;
var w8 = 300;
var m6 = 120;
var S = 100;
var d6 = 5;
var f7 = class f8 extends h11.Component {
  constructor(s26) {
    super(s26), this.context = 0, this.draggable = null, this.offSetCoordinates = { x: 0, y: 0 }, this.titleId = this.generateTitleId(), this.mounted = false, this.activeElement = null, this.onKeyDown = (t25) => {
      if (this.props.modal && n3(t25, this.element), t25.target !== t25.currentTarget)
        return;
      const e32 = this.props.minWidth || m6, o21 = this.props.minHeight || S;
      if ((t25.metaKey || t25.ctrlKey) && this.props.resizable) {
        switch (t25.keyCode) {
          case e2.up:
            t25.preventDefault(), o21 <= this.height - d6 && this.setState({ height: this.height - d6 });
            break;
          case e2.down:
            t25.preventDefault(), this.setState({ height: this.height + d6 });
            break;
          case e2.left:
            e32 <= this.width - d6 && this.setState({ width: this.width - d6 });
            break;
          case e2.right:
            this.setState({ width: this.width + d6 });
            break;
          default:
            return;
        }
        this.dispatchMoveEvent(this.props.onResize, t25, false, void 0);
        return;
      }
      if (t25.altKey) {
        switch (t25.keyCode) {
          case e2.up:
            this.windowStage === I5.MINIMIZED ? (this.handleRestore(t25), v2(this.props.onStageChange, t25, this, { state: I5.DEFAULT })) : this.windowStage === I5.DEFAULT && (this.handleFullscreen(t25), v2(this.props.onStageChange, t25, this, { state: I5.FULLSCREEN }));
            break;
          case e2.down:
            this.windowStage === I5.FULLSCREEN ? (this.handleRestore(t25), v2(this.props.onStageChange, t25, this, { state: I5.DEFAULT })) : this.windowStage === I5.DEFAULT && (this.handleMinimize(t25), v2(this.props.onStageChange, t25, this, { state: I5.MINIMIZED }));
            break;
        }
        return;
      }
      if (!t25.ctrlKey)
        switch (t25.keyCode) {
          case e2.esc:
            this.props.onClose && this.handleCloseWindow(t25);
            return;
          case e2.up:
            this.setState((r16) => ({ top: r16.top - d6 }));
            break;
          case e2.down:
            this.setState((r16) => ({ top: r16.top + d6 }));
            break;
          case e2.left:
            this.setState((r16) => ({ left: r16.left - d6 }));
            break;
          case e2.right:
            this.setState((r16) => ({ left: r16.left + d6 }));
            break;
          default:
            return;
        }
      this.dispatchMoveEvent(this.props.onMove, t25, false, void 0);
    }, this.onPress = (t25) => {
      const e32 = t25.event;
      this.windowCoordinatesState.differenceLeft = e32.pageX - this.left, this.windowCoordinatesState.differenceTop = e32.pageY - this.top;
    }, this.onDrag = (t25) => {
      const e32 = t25.event;
      e32.originalEvent.preventDefault(), this.windowStage !== I5.FULLSCREEN && this.props.draggable && (this.setState({
        top: Math.max(e32.pageY - this.windowCoordinatesState.differenceTop, 0),
        left: e32.pageX - this.windowCoordinatesState.differenceLeft,
        isDragging: true
      }), this.props.onMove && this.dispatchMoveEvent(this.props.onMove, e32, true, false));
    }, this.onRelease = (t25) => {
      const e32 = t25.event;
      this.windowStage !== I5.FULLSCREEN && this.props.draggable && this.props.onMove && this.dispatchMoveEvent(this.props.onMove, e32, true, true), this.setState({
        isDragging: false
      });
    }, this.onFocus = () => {
      this._blurTimeout ? (clearTimeout(this._blurTimeout), this._blurTimeout = void 0) : this.setState({
        focused: true,
        zIndex: A9(this.getCurrentZIndex(), this.getDocument(), this._id)
      });
    }, this.onBlur = () => {
      clearTimeout(this._blurTimeout);
      const t25 = this.getWindow();
      t25 && (this._blurTimeout = t25.setTimeout(() => {
        this.mounted && this.setState({ focused: false }), this._blurTimeout = void 0;
      }));
    }, this.getInitialTop = () => {
      if (this.props.top !== void 0)
        return this.props.top;
      if (this.props.initialTop !== void 0)
        return this.props.initialTop;
      let t25 = w8;
      if (this.props.height !== void 0 ? t25 = this.props.height : this.props.initialHeight !== void 0 && (t25 = this.props.initialHeight), this.props.appendTo)
        return this.props.appendTo.offsetHeight / 2 - t25 / 2;
      const e32 = this.getWindow();
      return e32 ? e32.innerHeight / 2 - t25 / 2 : 0;
    }, this.getInitialLeft = () => {
      if (this.props.left !== void 0)
        return this.props.left;
      if (this.props.initialLeft !== void 0)
        return this.props.initialLeft;
      let t25 = u11;
      if (this.props.width !== void 0 ? t25 = this.props.width : this.props.initialWidth !== void 0 && (t25 = this.props.initialWidth), this.props.appendTo)
        return this.props.appendTo.offsetWidth / 2 - t25 / 2;
      const e32 = this.getWindow();
      return e32 ? e32.innerWidth / 2 - t25 / 2 : 0;
    }, this.getInitialWidth = () => {
      let t25 = u11;
      return this.props.width !== void 0 ? t25 = this.props.width : this.props.initialWidth !== void 0 && (t25 = this.props.initialWidth), t25;
    }, this.getInitialHeight = () => {
      let t25 = w8;
      return this.props.height !== void 0 ? t25 = this.props.height : this.props.initialHeight !== void 0 && (t25 = this.props.initialHeight), t25;
    }, this.handleMinimize = (t25) => {
      t25.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height, this.setState({
        stage: I5.MINIMIZED,
        height: 0
      }), v2(this.props.onStageChange, t25, this, { state: I5.MINIMIZED });
    }, this.handleFullscreen = (t25) => {
      t25.preventDefault(), this.windowCoordinatesState.leftBeforeAction = this.left, this.windowCoordinatesState.topBeforeAction = this.top, this.windowCoordinatesState.widthBeforeAction = this.width, this.windowCoordinatesState.heightBeforeAction = this.height;
      const e32 = this.getWindow(), o21 = e32 ? e32.innerWidth : 0, p18 = e32 ? e32.innerHeight : 0;
      this.setState({
        left: 0,
        top: 0,
        width: this.props.appendTo ? this.props.appendTo.offsetWidth : o21,
        height: this.props.appendTo ? this.props.appendTo.offsetHeight : p18,
        stage: I5.FULLSCREEN
      }), v2(this.props.onStageChange, t25, this, { state: I5.FULLSCREEN });
    }, this.handleRestore = (t25) => {
      t25.preventDefault(), this.windowStage === I5.FULLSCREEN ? this.setState({
        stage: I5.DEFAULT,
        left: this.windowCoordinatesState.leftBeforeAction,
        top: this.windowCoordinatesState.topBeforeAction,
        width: this.windowCoordinatesState.widthBeforeAction,
        height: this.windowCoordinatesState.heightBeforeAction
      }) : this.windowStage === I5.MINIMIZED && this.setState({
        stage: I5.DEFAULT,
        height: this.windowCoordinatesState.heightBeforeAction
      }), v2(this.props.onStageChange, t25, this, { state: I5.DEFAULT });
    }, this.handleCloseWindow = (t25) => {
      t25.preventDefault(), v2(this.props.onClose, t25, this, { state: void 0 });
    }, this.handleDoubleClick = (t25) => {
      this.windowStage === I5.FULLSCREEN || this.windowStage === I5.MINIMIZED ? this.handleRestore(t25) : this.handleFullscreen(t25);
    }, this.handleResize = (t25, e32) => {
      const o21 = this.props.appendTo ? t25.pageX - this.offSetCoordinates.x : t25.pageX, p18 = this.props.appendTo ? t25.pageY - this.offSetCoordinates.y : t25.pageY, r16 = this.width, c16 = this.height, C7 = this.props.minWidth || m6, D8 = this.props.minHeight || S, I11 = this.top - p18, T7 = this.left - o21, L8 = o21 - this.left, b8 = p18 - this.top, g9 = Object.assign({}, this.state, { isDragging: !e32.end });
      e32.direction.indexOf("n") >= 0 && D8 - (c16 + I11) < 0 && (this.top > 0 && (g9.height = c16 + I11), g9.top = p18), e32.direction.indexOf("s") >= 0 && D8 - b8 < 0 && (g9.height = b8), e32.direction.indexOf("w") >= 0 && C7 - (r16 + T7) < 0 && (this.left > 0 && (g9.width = r16 + T7), g9.left = o21), e32.direction.indexOf("e") >= 0 && C7 - L8 < 0 && (g9.width = L8), this.setState(g9), this.dispatchMoveEvent(this.props.onResize, t25, true, e32.end);
    }, this.dispatchMoveEvent = (t25, e32, o21, p18) => {
      t25 && t25.call(void 0, {
        nativeEvent: e32.nativeEvent ? e32.nativeEvent : e32.originalEvent,
        drag: o21,
        end: p18,
        target: this,
        left: this.state.left,
        top: this.state.top,
        width: this.state.width,
        hight: this.state.height,
        height: this.state.height
      });
    }, this.handleBrowserWindowResize = () => {
      if (this.windowStage === I5.FULLSCREEN) {
        const t25 = this.getWindow(), e32 = t25 ? t25.innerWidth : 0, o21 = t25 ? t25.innerHeight : 0;
        this.setState({
          width: this.props.appendTo ? this.props.appendTo.offsetWidth : e32,
          height: this.props.appendTo ? this.props.appendTo.offsetHeight : o21
        });
      }
    }, this.getCurrentZIndex = () => !this.state || this.context === void 0 ? this.context ? this.context : D5 : this.state.zIndex > (this.context ? this.context + n13 : 0) ? this.state.zIndex : this.context + n13, this.getDocument = () => this.props.appendTo ? this.props.appendTo.ownerDocument : document, this.getWindow = () => {
      const t25 = this.getDocument();
      return t25 && t25.defaultView;
    }, this.state = {
      stage: this.props.stage || I5.DEFAULT,
      isDragging: false,
      top: 0,
      left: 0,
      width: u11,
      height: w8,
      focused: true,
      zIndex: D5
    }, this.activeElement = document.activeElement;
  }
  get _id() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  componentDidMount() {
    this.element && this.props.autoFocus && this.element.focus({ preventScroll: true });
    const s26 = this.getWindow();
    s26 && s26.addEventListener("resize", this.handleBrowserWindowResize), this.setState({
      stage: this.props.stage || I5.DEFAULT,
      isDragging: false,
      top: this.getInitialTop(),
      left: this.getInitialLeft(),
      width: this.getInitialWidth(),
      height: this.getInitialHeight(),
      focused: true,
      zIndex: A9(this.getCurrentZIndex(), this.getDocument(), this._id)
    }), this.windowCoordinatesState = {
      leftBeforeAction: this.getInitialLeft(),
      topBeforeAction: this.getInitialTop(),
      widthBeforeAction: this.getInitialWidth(),
      heightBeforeAction: this.getInitialHeight()
    };
    const t25 = this.getDocument();
    if (this.props.appendTo && t25) {
      const e32 = this.props.appendTo.getBoundingClientRect(), o21 = t25.body.getBoundingClientRect();
      this.offSetCoordinates.x = e32.left - o21.left, this.offSetCoordinates.y = e32.top - o21.top;
    }
    this.mounted = true;
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    const s26 = this.getWindow();
    s26 && s26.removeEventListener("resize", this.handleBrowserWindowResize), this.mounted = false, setTimeout(() => {
      var t25;
      !this.element && this.activeElement && document && (document.contains(this.activeElement) ? this.activeElement.focus({ preventScroll: true }) : this.activeElement.id && ((t25 = document.getElementById(this.activeElement.id)) == null || t25.focus({ preventScroll: true })));
    });
  }
  /**
   * @hidden
   */
  componentDidUpdate(s26) {
    this.props.left && s26.left !== this.props.left && this.setState({ left: this.props.left }), this.props.top && s26.top !== this.props.top && this.setState({ top: this.props.top });
    const t25 = this.getDocument();
    if (this.props.appendTo && t25) {
      const e32 = this.props.appendTo.getBoundingClientRect(), o21 = t25.body.getBoundingClientRect();
      this.offSetCoordinates.x = e32.left - o21.left, this.offSetCoordinates.y = e32.top - o21.top;
    }
    this.mounted = true;
  }
  /**
   * @hidden
   */
  render() {
    const s26 = h11.Children.toArray(this.props.children), t25 = this.getContent(s26), e32 = this.getActionBar(s26), o21 = this.getCurrentZIndex(), p18 = n2("k-window", this.props.className, {
      [`k-window-${this.props.themeColor}`]: this.props.themeColor,
      "k-window-minimized": this.state.stage === "MINIMIZED",
      "k-focus": this.state.focused
    }), r16 = h11.createElement(t.Provider, { value: o21 }, h11.createElement(h11.Fragment, null, this.props.modal && h11.createElement(
      "div",
      {
        className: "k-overlay",
        style: {
          zIndex: o21,
          ...this.props.overlayStyle
        }
      }
    ), h11.createElement(
      "div",
      {
        id: this.props.id,
        [o12]: this._id,
        tabIndex: 0,
        role: "dialog",
        "aria-labelledby": this.titleId,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        ref: (c16) => {
          this.windowElement = c16, this.element = c16;
        },
        className: p18,
        style: {
          top: this.top,
          left: this.left,
          width: this.width,
          height: this.height || "",
          zIndex: o21,
          ...this.props.style
        }
      },
      h11.createElement(
        n17,
        {
          shouldUpdateOnDrag: this.props.shouldUpdateOnDrag || false,
          isDragging: this.state.isDragging
        },
        h11.createElement(
          s6,
          {
            onPress: this.onPress,
            onDrag: this.onDrag,
            onRelease: this.onRelease,
            autoScroll: false,
            ref: (c16) => this.draggable = c16
          },
          h11.createElement(
            F3,
            {
              stage: this.windowStage,
              onDoubleClick: this.props.doubleClickStageChange ? this.handleDoubleClick : void 0,
              onMinimizeButtonClick: this.handleMinimize,
              onFullScreenButtonClick: this.handleFullscreen,
              onRestoreButtonClick: this.handleRestore,
              onCloseButtonClick: this.handleCloseWindow,
              closeButton: this.props.closeButton,
              minimizeButton: this.props.minimizeButton,
              maximizeButton: this.props.maximizeButton,
              restoreButton: this.props.restoreButton,
              id: this.titleId
            },
            this.props.title
          )
        ),
        this.windowStage !== I5.MINIMIZED ? h11.createElement(h11.Fragment, null, h11.createElement("div", { className: "k-window-content" }, t25), e32) : null,
        this.windowStage === I5.DEFAULT && this.props.resizable ? h11.createElement(c7, { onResize: this.handleResize }) : null
      )
    )));
    return e ? this.props.appendTo !== null ? A10.createPortal(r16, this.props.appendTo || document.body) : r16 : null;
  }
  // Getters
  get top() {
    return this.windowStage !== I5.FULLSCREEN ? Math.max(this.props.top || this.state.top, 0) : 0;
  }
  get left() {
    return this.windowStage !== I5.FULLSCREEN ? Math.max(this.props.left || this.state.left, 0) : 0;
  }
  get width() {
    let s26 = this.props.width || this.state.width;
    if (this.windowStage === I5.FULLSCREEN) {
      if (this.props.appendTo)
        return s26 = this.props.appendTo.offsetWidth, s26;
      const t25 = this.getWindow();
      s26 = t25 ? t25.innerWidth : 0;
    }
    return s26;
  }
  get height() {
    let s26 = this.props.height || this.state.height;
    if (this.windowStage === I5.FULLSCREEN) {
      if (this.props.appendTo)
        return s26 = this.props.appendTo.offsetHeight, s26;
      const t25 = this.getWindow();
      s26 = t25 ? t25.innerHeight : 0;
    } else
      this.windowStage === I5.MINIMIZED && (s26 = 0);
    return s26;
  }
  get windowStage() {
    return this.props.stage || this.state.stage;
  }
  getActionBar(s26) {
    return s26.filter((t25) => t25 && t25.type === i17);
  }
  getContent(s26) {
    return s26.filter((t25) => t25 && t25.type !== i17);
  }
  generateTitleId() {
    return "window-title-" + this._id;
  }
};
f7.displayName = "Window", f7.propTypes = {
  width: import_prop_types21.default.number,
  height: import_prop_types21.default.number,
  left: import_prop_types21.default.number,
  top: import_prop_types21.default.number,
  initialWidth: import_prop_types21.default.number,
  initialHeight: import_prop_types21.default.number,
  initialLeft: import_prop_types21.default.number,
  initialTop: import_prop_types21.default.number,
  minWidth: import_prop_types21.default.number,
  minHeight: import_prop_types21.default.number,
  resizable: import_prop_types21.default.bool,
  draggable: import_prop_types21.default.bool,
  title: import_prop_types21.default.any,
  shouldUpdateOnDrag: import_prop_types21.default.bool,
  stage: import_prop_types21.default.oneOf(["DEFAULT", "MINIMIZED", "FULLSCREEN"]),
  className: import_prop_types21.default.string,
  id: import_prop_types21.default.string,
  style: import_prop_types21.default.object,
  overlayStyle: import_prop_types21.default.object,
  autoFocus: import_prop_types21.default.bool
}, f7.defaultProps = {
  minWidth: m6,
  minHeight: S,
  resizable: true,
  draggable: true,
  modal: false,
  doubleClickStageChange: true,
  autoFocus: true
}, f7.contextType = t;
var E4 = f7;
var P6 = a();
var K4 = a2(
  x(
    P6,
    E4
  )
);
K4.displayName = "KendoReactWindow";

// node_modules/@progress/kendo-react-inputs/signature/Signature.mjs
var import_prop_types22 = __toESM(require_prop_types(), 1);
var o16 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-inputs/signature/utils/index.mjs
function n19(r16, t25) {
  let e32 = r16;
  for (; e32 && e32 !== t25; )
    e32 = e32.parentNode;
  return !!e32;
}

// node_modules/@progress/kendo-react-inputs/signature/Signature.mjs
var Ne2 = 250;
var We = 84;
var ie = 3;
var le2 = 2;
var qe = "#000000";
var Ge = "#ffffff";
var re2 = (d10) => d10 !== void 0;
var Ae = a();
var F4 = o16.forwardRef((d10, se5) => {
  const ce = !h(e9, { component: "Signature" }), _4 = n4(Ae, d10), e32 = o16.useMemo(
    () => ({
      strokeWidth: l10.strokeWidth,
      smooth: l10.smooth,
      popupScale: l10.popupScale,
      exportScale: l10.exportScale,
      maximizable: l10.maximizable,
      disabled: l10.disabled,
      required: l10.required,
      validityStyles: l10.validityStyles,
      onChange: l10.onChange,
      onFocus: l10.onFocus,
      onBlur: l10.onBlur,
      onOpen: l10.onOpen,
      onClose: l10.onClose,
      size: l10.size,
      rounded: l10.rounded,
      fillMode: l10.fillMode,
      ..._4
    }),
    [_4]
  ), z5 = i4(), c16 = o16.useRef(null), g9 = o16.useRef(null), N4 = o16.useRef(null), W4 = o16.useRef(null), S5 = o16.useRef(null), [r16, ue] = o16.useState(), [b8, q3] = o16.useState(false), [E8, G6] = o16.useState(false), [k8, A13] = o16.useState(), [de3, me2] = o16.useState(), V3 = re2(e32.value) ? e32.value : k8, [pe3, fe2] = o16.useState(false), p18 = re2(e32.open), m11 = p18 ? e32.open : pe3, ge3 = e32.maximized || E8 || !e32.maximizable || e32.disabled, be3 = !(e32.maximized && !E8), ke4 = !(!(e32.value || k8) || E8 || e32.readOnly || e32.disabled), j4 = z5.toLanguageString(y2, I3[y2]), U2 = z5.toLanguageString(z2, I3[z2]), H3 = z5.toLanguageString(V, I3[V]), O6 = e32.popupScale || ie, x8 = e32.exportScale || le2, M7 = (t25) => {
    A13(t25), e32.onChange && e32.onChange({ value: t25 });
  }, ye = (t25) => {
    r16 == null || r16.loadImage(t25.value), M7(t25.value);
  };
  o16.useEffect(() => {
    e32.value !== k8 && (A13(e32.value), r16 == null || r16.loadImage(e32.value));
  }, [e32.value]);
  const ve = () => {
    r16 == null || r16.clear(), M7();
  }, y11 = o16.useCallback(
    (t25) => {
      p18 || fe2(t25);
    },
    [p18]
  ), Ce3 = (t25) => {
    var n27, i24;
    Q3(t25), (i24 = ((n27 = S5.current) == null ? void 0 : n27.element) || g9.current) == null || i24.focus();
  }, w11 = o16.useCallback(() => {
    let t25 = qe;
    return !e32.color && typeof document != "undefined" && c16.current && (t25 = getComputedStyle(c16.current).color), e32.color || t25;
  }, [e32.color]), L8 = o16.useCallback(() => {
    let t25 = Ge;
    return !e32.backgroundColor && typeof document != "undefined" && c16.current && (t25 = getComputedStyle(c16.current).backgroundColor), e32.backgroundColor || t25;
  }, [e32.backgroundColor]), $6 = () => ({
    scale: e32.maximized ? e32.popupScale : 1,
    color: w11(),
    backgroundColor: L8(),
    strokeWidth: e32.strokeWidth,
    smooth: e32.smooth,
    readonly: e32.readOnly
  }), K5 = async (t25) => {
    const { width: n27, height: i24 } = t25;
    return await (r16 == null ? void 0 : r16.exportImage({
      width: n27 * x8,
      height: i24 * x8
    }));
  };
  o16.useEffect(() => {
    const t25 = g9.current, n27 = new SignaturePad(t25, $6());
    return V3 && n27.loadImage(V3), ue(n27), () => n27.destroy();
  }, []), o16.useEffect(() => {
    r16 == null || r16.setOptions({
      onChange: async () => M7(await K5(Y2())),
      onDraw: () => G6(true),
      onDrawEnd: () => G6(false)
    });
  }, [r16]), o3(
    () => r16 == null ? void 0 : r16.setOptions($6()),
    [e32.readOnly, e32.color, e32.backgroundColor, e32.strokeWidth, e32.smooth]
  ), o16.useEffect(() => {
    var i24, s26;
    const t25 = (s26 = (i24 = N4.current) == null ? void 0 : i24.element) == null ? void 0 : s26.querySelector(".k-overlay");
    if (!t25)
      return;
    const n27 = () => y11(false);
    return t25.addEventListener("click", n27), () => t25.removeEventListener("click", n27);
  }, [m11]), o16.useEffect(() => {
    if (!m11 || typeof document == "undefined")
      return;
    const t25 = (n27) => {
      var i24, s26;
      n27.key === "Escape" && (y11(false), (s26 = (i24 = S5.current) == null ? void 0 : i24.element) == null || s26.focus());
    };
    return document.addEventListener("keydown", t25), () => document.removeEventListener("keydown", t25);
  }, [m11]), o16.useEffect(() => {
    var t25, n27;
    e32.maximized && ((n27 = (t25 = W4.current) == null ? void 0 : t25.element) == null || n27.focus());
  }, []);
  const I11 = o16.useCallback(() => {
    var t25;
    return (t25 = g9.current) == null ? void 0 : t25.focus();
  }, []), v14 = o16.useCallback(() => e32.value, [e32.value]), X = o16.useCallback(() => e32.name, [e32.name]), C7 = o16.useCallback(() => e32.required, [e32.required]), P10 = o16.useCallback(() => {
    const t25 = e32.validationMessage !== void 0, i24 = !v14(), s26 = e32.valid !== void 0 ? e32.valid : !C7() || !i24;
    return {
      customError: t25,
      valid: s26,
      valueMissing: i24
    };
  }, [e32.validationMessage, e32.valid, v14, C7]), D8 = o16.useCallback(() => e32.validityStyles, [e32.validityStyles]), J3 = o16.useCallback(() => e32, [e32]), u17 = o16.useCallback(() => {
    const t25 = {
      element: c16.current,
      focus: I11
    };
    return Object.defineProperty(t25, "name", { get: X }), Object.defineProperty(t25, "value", { get: v14 }), Object.defineProperty(t25, "validity", { get: P10 }), Object.defineProperty(t25, "validityStyles", { get: D8 }), Object.defineProperty(t25, "required", { get: C7 }), Object.defineProperty(t25, "props", { get: J3 }), Object.defineProperty(t25, "color", { get: w11 }), Object.defineProperty(t25, "backgroundColor", { get: L8 }), t25;
  }, [
    X,
    v14,
    P10,
    D8,
    C7,
    I11,
    J3,
    w11,
    L8
  ]);
  o16.useImperativeHandle(se5, u17);
  const he3 = o16.useCallback(
    (t25) => {
      b8 || e32.maximized || (q3(true), v2(e32.onFocus, t25, u17(), {}));
    },
    [b8, e32.onFocus, u17]
  ), ze3 = o16.useCallback(
    (t25) => {
      n19(t25.relatedTarget, c16.current) || (q3(false), v2(e32.onBlur, t25, u17(), {}));
    },
    [b8, e32.onBlur, u17]
  ), Se = o16.useCallback(
    async (t25) => {
      me2(await K5(Z2())), y11(true), v2(e32.onOpen, t25, u17(), {});
    },
    [m11, p18, e32.onOpen, e32.value, k8, u17]
  ), Q3 = o16.useCallback(
    (t25) => {
      y11(false), v2(e32.onClose, t25, u17(), {});
    },
    [m11, p18, e32.onClose, u17]
  ), Ee4 = () => {
    ve(), I11();
  }, Y2 = () => {
    var i24, s26;
    const t25 = e32.width || ((i24 = c16.current) == null ? void 0 : i24.offsetWidth) || Ne2, n27 = e32.height || ((s26 = c16.current) == null ? void 0 : s26.offsetHeight) || We;
    return {
      width: t25,
      height: n27
    };
  }, Z2 = () => {
    const { width: t25, height: n27 } = Y2();
    return {
      width: t25 * O6,
      height: n27 * O6
    };
  }, Oe3 = !D8() || P10().valid;
  return o16.createElement(
    "div",
    {
      ref: c16,
      dir: e32.dir,
      style: { width: e32.width, height: e32.height, ...e32.style },
      className: n2(
        "k-input",
        "k-signature",
        {
          "k-signature-maximized": e32.maximized,
          [`k-signature-${a4.sizeMap[e32.size] || e32.size}`]: e32.size,
          [`k-signature-${e32.fillMode}`]: e32.fillMode,
          [`k-input-${e32.fillMode}`]: e32.fillMode,
          [`k-rounded-${a4.roundedMap[e32.rounded] || e32.rounded}`]: e32.rounded,
          "k-invalid": !Oe3,
          "k-required": e32.required,
          "k-disabled": e32.disabled,
          "k-focus": b8
        },
        e32.className
      ),
      onFocus: he3,
      onBlur: ze3
    },
    o16.createElement(
      "div",
      {
        className: "k-signature-canvas",
        ref: g9,
        tabIndex: e4(e32.tabIndex, e32.disabled),
        role: "img",
        id: e32.id,
        "aria-label": e32.ariaLabel,
        "aria-labelledby": e32.ariaLabelledBy,
        "aria-describedby": e32.ariaDescribedBy,
        "aria-disabled": e32.disabled ? "true" : void 0
      }
    ),
    o16.createElement("div", { className: "k-signature-actions k-signature-actions-top" }, o16.createElement(
      M,
      {
        type: "button",
        className: n2("k-signature-action", "k-signature-maximize", {
          "k-hidden": e32.disabled || ge3
        }),
        ref: S5,
        icon: "hyperlink-open",
        svgIcon: hyperlinkOpenIcon,
        fillMode: "flat",
        size: e32.size,
        onClick: Se,
        "aria-label": j4,
        title: j4
      }
    ), o16.createElement(
      M,
      {
        type: "button",
        className: n2("k-signature-action", "k-signature-minimize", "k-rotate-180", {
          "k-hidden": e32.disabled || be3
        }),
        ref: W4,
        icon: "hyperlink-open",
        svgIcon: hyperlinkOpenIcon,
        fillMode: "flat",
        size: e32.size,
        onClick: Q3,
        "aria-label": U2,
        title: U2
      }
    )),
    !e32.hideLine && o16.createElement("div", { className: "k-signature-line", style: { zIndex: 2, pointerEvents: "none" } }),
    o16.createElement("div", { className: "k-signature-actions k-signature-actions-bottom" }, ke4 && o16.createElement(
      M,
      {
        type: "button",
        className: "k-signature-action k-signature-clear",
        icon: "x",
        svgIcon: xIcon,
        fillMode: "flat",
        size: e32.size,
        onClick: Ee4,
        "aria-label": H3,
        title: H3
      }
    )),
    m11 && o16.createElement(G5, { ref: N4 }, o16.createElement(
      F4,
      {
        ...e32,
        ...Z2(),
        value: de3,
        maximized: true,
        exportScale: 1 / O6 * x8,
        open: false,
        onChange: ye,
        onClose: Ce3
      }
    )),
    ce && o16.createElement(l, null)
  );
});
F4.propTypes = {
  value: import_prop_types22.default.string,
  width: import_prop_types22.default.number,
  height: import_prop_types22.default.number,
  tabIndex: import_prop_types22.default.number,
  dir: import_prop_types22.default.string,
  ariaDescribedBy: import_prop_types22.default.string,
  ariaLabelledBy: import_prop_types22.default.string,
  ariaLabel: import_prop_types22.default.string,
  readOnly: import_prop_types22.default.bool,
  disabled: import_prop_types22.default.bool,
  validationMessage: import_prop_types22.default.string,
  required: import_prop_types22.default.bool,
  onChange: import_prop_types22.default.func,
  onFocus: import_prop_types22.default.func,
  onBlur: import_prop_types22.default.func,
  onOpen: import_prop_types22.default.func,
  onClose: import_prop_types22.default.func,
  size: import_prop_types22.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types22.default.oneOf([null, "small", "medium", "large"]),
  fillMode: import_prop_types22.default.oneOf([null, "solid", "flat", "outline"])
};
var l10 = {
  strokeWidth: 1,
  smooth: false,
  popupScale: ie,
  exportScale: le2,
  maximizable: true,
  disabled: false,
  required: false,
  validityStyles: true,
  onChange: (d10) => o,
  onFocus: (d10) => o,
  onBlur: (d10) => o,
  onOpen: (d10) => o,
  onClose: (d10) => o,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
F4.displayName = "KendoSignature";

// node_modules/@progress/kendo-react-inputs/input/InputClearValue.mjs
var e18 = __toESM(require_react(), 1);
var p12 = e18.forwardRef((t25, s26) => {
  const a37 = e18.useRef(null), l16 = e18.useRef(null), n27 = n5(), u17 = n27 && n27.uInput, r16 = n2(
    F.clearButton({
      c: u17
    }),
    t25.className
  );
  return e18.useImperativeHandle(a37, () => ({ element: l16.current })), e18.useImperativeHandle(s26, () => a37.current), e18.createElement("span", { ...t25, className: r16 });
});
p12.displayName = "KendoReactInputClearValue";

// node_modules/@progress/kendo-react-inputs/input/InputPrefix.mjs
var e19 = __toESM(require_react(), 1);
var f9 = e19.forwardRef(
  ({ orientation: t25 = "horizontal", ...s26 }, r16) => {
    const a37 = e19.useRef(null), m11 = e19.useRef(null), n27 = n5(), l16 = n27 && n27.uTextBox;
    e19.useImperativeHandle(a37, () => ({ element: m11.current })), e19.useImperativeHandle(r16, () => a37.current);
    const c16 = e19.useMemo(
      () => n2(
        E3.prefix({
          c: l16,
          orientation: t25
        }),
        s26.className
      ),
      [s26.className, l16, t25]
    );
    return e19.createElement("span", { ...s26, className: c16 });
  }
);
f9.displayName = "KendoReactInputPrefix";

// node_modules/@progress/kendo-react-inputs/input/InputSeparator.mjs
var e20 = __toESM(require_react(), 1);
var m7 = e20.forwardRef(
  ({ orientation: r16 = "vertical", ...a37 }, n27) => {
    const t25 = e20.useRef(null), s26 = e20.useRef(null);
    return e20.useImperativeHandle(t25, () => ({ element: s26.current })), e20.useImperativeHandle(n27, () => t25.current), e20.createElement(
      "span",
      {
        ...a37,
        className: n2("k-input-separator", a37.className, `k-input-separator-${r16}`)
      }
    );
  }
);
m7.displayName = "KendoReactInputSeparator";

// node_modules/@progress/kendo-react-inputs/input/InputSuffix.mjs
var e21 = __toESM(require_react(), 1);
var x6 = e21.forwardRef(
  ({ orientation: t25 = "horizontal", ...s26 }, u17) => {
    const a37 = e21.useRef(null), m11 = e21.useRef(null), n27 = n5(), l16 = n27 && n27.uTextBox;
    e21.useImperativeHandle(a37, () => ({ element: m11.current })), e21.useImperativeHandle(u17, () => a37.current);
    const c16 = e21.useMemo(
      () => n2(
        E3.suffix({
          c: l16,
          orientation: t25
        }),
        s26.className
      ),
      [s26.className, l16, t25]
    );
    return e21.createElement("span", { ...s26, className: c16 });
  }
);
x6.displayName = "KendoReactInputSuffix";

// node_modules/@progress/kendo-react-inputs/input/InputValidationIcon.mjs
var t17 = __toESM(require_react(), 1);
var c9 = t17.forwardRef(
  (a37, e32) => t17.createElement(v3, { ref: e32, ...a37, className: n2("k-input-validation-icon", a37.className) })
);
c9.displayName = "KendoReactInputValidationIcon";

// node_modules/@progress/kendo-react-dropdowns/common/ListFilter.mjs
var u12 = n20.forwardRef((r16, c16) => {
  const o21 = n20.useRef(null), { renderListFilterWrapper: m11 = false, renderPrefixSeparator: d10 = false, ...f13 } = r16, s26 = n5(), t25 = s26 && s26.uDropDownsBase;
  n20.useImperativeHandle(c16, () => o21.current);
  const p18 = () => n20.createElement(n20.Fragment, null, n20.createElement(f9, null, n20.createElement(
    v3,
    {
      name: "search",
      icon: searchIcon,
      className: n2(j.inputIcon({ c: t25 }))
    }
  )), d10 && n20.createElement(m7, null)), i24 = n20.createElement(
    B4,
    {
      ...f13,
      ref: o21,
      className: n2(j.searchbox({ c: t25 })),
      value: r16.value || "",
      onChange: r16.onChange,
      onKeyDown: r16.onKeyDown,
      tabIndex: r16.tabIndex,
      onClick: (x8) => x8.stopPropagation(),
      size: r16.size,
      fillMode: r16.fillMode,
      rounded: r16.rounded,
      prefix: p18
    }
  );
  return m11 ? n20.createElement("div", { className: n2(j.listFilter({ c: t25 })) }, " ", i24, " ") : i24;
});
u12.propTypes = {
  value: import_prop_types23.default.oneOfType([import_prop_types23.default.string, import_prop_types23.default.number, import_prop_types23.default.array]),
  tabIndex: import_prop_types23.default.number,
  onChange: import_prop_types23.default.func,
  onKeyDown: import_prop_types23.default.func,
  size: import_prop_types23.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types23.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types23.default.oneOf([null, "solid", "flat", "outline"]),
  renderListFilterWrapper: import_prop_types23.default.bool,
  renderPrefixSeparator: import_prop_types23.default.bool
};
u12.displayName = "KendoReactListFilter";

// node_modules/@progress/kendo-react-dropdowns/common/GroupStickyHeader.mjs
var l11 = __toESM(require_react(), 1);
var u13 = (e32) => {
  const { group: s26, groupMode: n27, render: r16 } = e32, t25 = n5(), a37 = t25 && t25.uDropDownsBase, o21 = l11.createElement("div", { className: n2(j.groupStickyHeader({ c: a37 })) }, n27 === "classic" ? s26 : l11.createElement("div", { className: n2(j.listHeaderText({ c: a37 })) }, s26));
  return r16 !== void 0 ? r16.call(void 0, o21, e32) : o21;
};

// node_modules/@progress/kendo-react-dropdowns/common/ListDefaultItem.mjs
var l13 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/utils.mjs
var l12 = (e32) => e32 != null;
var d7 = (e32, t25) => {
  for (let r16 = 0; r16 < e32.length; r16++)
    if (e32.charAt(r16) !== t25)
      return false;
  return true;
};
var I6 = (e32, t25, r16) => {
  let n27 = e32;
  return r16 && (n27 = [r16].concat(n27)), n27.slice(t25).concat(n27.slice(0, t25));
};
var x7 = (e32, t25, r16) => {
  if (!l12(e32))
    return false;
  let n27 = String(e32);
  return r16 && (n27 = n27.toLowerCase()), n27.indexOf(t25) === 0;
};
var C6 = (e32, t25, r16, n27, o21) => {
  const s26 = e32.offsetHeight, g9 = t25.children.item(r16), f13 = g9.offsetTop + (o21 ? n27 - e32.scrollTop : 0), c16 = g9.offsetHeight;
  if (o21) {
    let u17 = 0;
    f13 + c16 > s26 ? u17 = f13 + c16 - s26 : f13 < 0 && (u17 = f13), u17 !== 0 ? e32.scrollTop += u17 : e32.scrollTop === 0 && n27 !== 0 && (e32.scrollTop = n27);
  } else
    f13 + c16 > s26 + e32.scrollTop ? e32.scrollTop = f13 + c16 - s26 : f13 < e32.scrollTop && (e32.scrollTop -= e32.scrollTop - f13);
};
var h12 = (e32, t25, r16) => {
  let n27 = -1;
  if (t25) {
    t25 = t25.toLowerCase();
    for (let o21 = 0; o21 < e32.length; o21++) {
      const s26 = (i18(e32[o21], r16) || "") + "";
      if (s26 && s26.toLowerCase().startsWith(t25)) {
        n27 = o21;
        break;
      }
    }
  }
  return n27;
};
var T5 = (e32, t25, r16, n27 = false) => {
  const o21 = (s26) => n27 ? s26 : s26.toLowerCase();
  return e32.findIndex((s26) => r16 ? o21(i18(s26, r16)) === o21(t25) : o21(t25) === o21(s26.toString()));
};
var i18 = (e32, t25) => {
  if (t25 && l12(e32)) {
    const r16 = t25.split(".");
    let n27 = e32;
    return r16.forEach((o21) => {
      n27 = n27 ? n27[o21] : void 0;
    }), n27;
  }
  return e32;
};
var D6 = (e32, t25, r16) => {
  if (!e32)
    return;
  const n27 = e32.findIndex((o21) => i18(o21, t25) === r16);
  return e32[n27];
};
var a26 = (e32 = [], t25 = [], r16) => {
  if (e32 === t25)
    return true;
  if (e32.length !== t25.length)
    return false;
  for (let n27 = 0; n27 < e32.length; n27++)
    if (!p13(e32[n27], t25[n27], r16))
      return false;
  return true;
};
var w9 = (e32, t25, r16) => {
  t25.forEach((n27) => {
    const o21 = e32.findIndex((s26) => p13(s26, n27, r16));
    o21 !== -1 && e32.splice(o21, 1);
  });
};
var p13 = (e32, t25, r16) => e32 === t25 || l12(e32) === l12(t25) && i18(e32, r16) === i18(t25, r16);
var L6 = (e32, t25, r16) => {
  if (t25) {
    const n27 = T5(e32, t25, r16, true);
    return n27 !== -1 ? e32[n27] : e32[h12(e32, t25, r16)];
  }
  return e32[0];
};
var H2 = (e32, t25 = [], r16) => {
  let n27 = "";
  if (e32) {
    const o21 = t25[h12(t25, e32, r16)];
    if (o21) {
      const s26 = i18(o21, r16);
      e32.toLowerCase() !== s26.toLowerCase() && (n27 = s26.substring(e32.length));
    }
  }
  return n27;
};
var S2 = (e32) => {
  e32.target.nodeName !== "INPUT" && e32.preventDefault();
};
var y5 = (e32, t25, r16) => !!e32 != !!t25 || e32.text !== t25.text ? false : e32 === t25 || a26(e32.data, t25.data, r16);
var N = (e32) => {
  const t25 = e32.filter(
    (r16, n27) => e32.some((o21, s26) => o21 === r16 && s26 !== n27)
  );
  return Array.from(new Set(t25));
};
var O4 = (e32) => {
  const { data: t25 = [], groupField: r16 } = e32;
  return r16 ? t25.filter((n27) => r16 && n27[r16] !== void 0) : t25;
};

// node_modules/@progress/kendo-react-dropdowns/common/ListDefaultItem.mjs
var i19 = (e32) => e32.preventDefault();
var p14 = (e32) => {
  const { selected: s26, defaultItem: o21, textField: n27 } = e32, t25 = n5(), a37 = t25 && t25.uDropDownsBase;
  return l13.createElement(
    "div",
    {
      onClick: e32.onClick,
      onMouseDown: i19,
      style: { position: "unset" },
      className: n2(j.optionLabel({ c: a37, selected: s26 }))
    },
    i18(o21, n27) || ""
  );
};

// node_modules/@progress/kendo-react-dropdowns/common/List.mjs
var t18 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/ListItem.mjs
var a27 = __toESM(require_react(), 1);
var b5 = (e32) => {
  const { selected: o21, group: t25, dataItem: u17, virtual: v14, groupMode: c16, disabled: n27, id: f13, focused: g9, render: r16 } = e32, d10 = n5(), s26 = d10 && d10.uDropDownsBase, p18 = (x8) => e32.onClick(e32.index, x8), m11 = a27.createElement(
    "li",
    {
      id: f13,
      role: "option",
      "aria-selected": o21,
      "aria-disabled": n27 ? true : void 0,
      className: n2(
        j.li({
          c: s26,
          selected: o21,
          focused: g9,
          first: !!t25 && c16 === "classic",
          disabled: n27
        })
      ),
      onClick: p18,
      style: { position: v14 ? "relative" : "unset" }
    },
    a27.createElement("span", { className: n2(j.itemText({ c: s26 })) }, i18(u17, e32.textField).toString()),
    t25 !== void 0 && c16 === "classic" ? a27.createElement("div", { className: n2(j.itemGroupLabel({ c: s26 })) }, t25) : null
  );
  return r16 !== void 0 ? r16.call(void 0, m11, e32) : m11;
};

// node_modules/@progress/kendo-react-dropdowns/common/ListGroupItem.mjs
var u14 = __toESM(require_react(), 1);
var v9 = (t25) => {
  const { group: c16, virtual: o21, render: e32, isMultiColumn: s26 = false, id: m11 } = t25, r16 = n5(), i24 = r16 && r16.uDropDownsBase, a37 = u14.createElement(
    "li",
    {
      id: m11,
      role: "group",
      className: n2(j.groupLi({ c: i24, isMultiColumn: s26 })),
      style: s26 ? { boxSizing: "inherit", position: o21 ? "relative" : "unset" } : { position: o21 ? "relative" : "unset" }
    },
    u14.createElement(
      "span",
      {
        className: e32 ? void 0 : n2(j.groupItemText({ c: i24, isMultiColumn: s26 }))
      },
      c16
    )
  );
  return e32 !== void 0 ? e32.call(void 0, a37, t25) : a37;
};

// node_modules/@progress/kendo-react-dropdowns/messages/index.mjs
var o17 = "dropdowns.nodata";
var a28 = "dropdowns.clear";
var r10 = "dropdowns.comboArrowBtnAriaLabelExpand";
var n21 = "dropdowns.comboArrowBtnAriaLabelCollapse";
var e23 = "dropdowns.dropDownListArrowBtnAriaLabel";
var d8 = "dropdowns.apply";
var p15 = "dropdowns.cancel";
var s21 = {
  [a28]: "clear",
  [o17]: "NO DATA FOUND.",
  [r10]: "expand combobox",
  [n21]: "collapse combobox",
  [e23]: "select",
  [d8]: "Apply",
  [p15]: "Cancel"
};

// node_modules/@progress/kendo-react-dropdowns/common/List.mjs
var le3 = (e32) => {
  const L8 = i4(), D8 = n5(), d10 = D8 && D8.uDropDownsBase, { id: M7, show: z5, wrapperCssClass: $6, wrapperStyle: x8, listStyle: A13, listRef: F8, wrapperRef: G6, listClassName: V3, ariaSetSize: H3 } = e32, I11 = (() => {
    const {
      textField: s26,
      valueField: a37,
      groupField: c16,
      groupMode: S5,
      isMultiColumn: j4,
      optionsGuid: h16,
      skip: C7 = 0,
      virtual: E8,
      focusedIndex: w11,
      hasDuplicates: q3,
      highlightSelected: J3 = true,
      value: l16,
      data: N4,
      itemRender: K5,
      groupHeaderItemRender: O6
    } = e32, R5 = Array.isArray(l16);
    let u17 = 0;
    return N4.map((r16, o21) => {
      const m11 = C7 + o21, f13 = C7 + o21 + u17, P10 = q3 ? l16 ? w11 === o21 : false : r16.disabled ? false : J3 && (!R5 && p13(r16, l16, a37) || R5 && l16.findIndex((Q3) => p13(Q3, r16, a37)) !== -1);
      let n27, i24, g9;
      o21 > 0 && c16 !== void 0 && (i24 = i18(r16, c16), g9 = i18(N4[o21 - 1], c16), i24 && g9 && i24 !== g9 && (n27 = i24));
      const p18 = n27 !== void 0 && S5 === "modern";
      return p18 ? u17 += 1 : u17 = 0, [
        p18 && t18.createElement(
          v9,
          {
            id: `option-${h16}-${f13}`,
            virtual: E8,
            key: m11 + "-group-item",
            group: n27,
            isMultiColumn: j4,
            render: O6
          }
        ),
        t18.createElement(
          b5,
          {
            id: `option-${h16}-${p18 ? f13 + 1 : f13}`,
            virtual: E8,
            dataItem: r16,
            groupMode: S5,
            selected: P10,
            focused: w11 === o21,
            index: m11,
            key: m11,
            onClick: e32.onClick,
            textField: s26,
            group: n27,
            render: K5,
            disabled: r16.disabled
          }
        )
      ];
    });
  })(), U2 = () => {
    const s26 = e32.noDataRender, a37 = t18.createElement("div", { className: n2(j.noData({ c: d10 })) }, t18.createElement("div", null, L8.toLanguageString(o17, s21[o17])));
    return s26 ? s26.call(void 0, a37) : a37;
  };
  return I11.length ? t18.createElement(
    "div",
    {
      className: $6,
      style: x8,
      ref: G6,
      onMouseDown: e32.onMouseDown,
      onBlur: e32.onBlur,
      onScroll: e32.onScroll,
      unselectable: "on"
    },
    t18.createElement(
      "ul",
      {
        id: M7,
        role: "listbox",
        "aria-hidden": z5 ? void 0 : true,
        "aria-setsize": H3,
        className: V3 || n2(j.ul({ c: d10 })),
        ref: F8,
        style: A13
      },
      I11
    ),
    e32.scroller && t18.createElement("div", { className: n2(j.heightContainer({ c: d10 })) }, e32.scroller)
  ) : U2();
};

// node_modules/@progress/kendo-react-dropdowns/common/DropDownBase.mjs
var m8 = __toESM(require_react(), 1);
var import_prop_types24 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/VirtualScrollStatic.mjs
var p16 = __toESM(require_react(), 1);
var S3 = 17895697;
var r11 = typeof window != "undefined" && /Firefox/.test(window.navigator.userAgent);
var u15 = class {
  constructor() {
    this.table = null, this.total = 0, this.enabled = false, this.skip = 0, this.pageSize = 0, this.PageChange = null, this.scrollElement = null, this.listTransform = "", this.itemHeight = 0, this.containerHeight = 0, this.reactVersion = Number.parseFloat(p16.version), this.scrollSyncing = false, this.lastLoaded = 0, this.firstLoaded = 0, this.lastScrollTop = 0, this.listTranslate = 0, this.list = null, this.container = null, this.calcScrollElementHeight = () => {
      var h16;
      this.scrollSyncing = true;
      let t25 = false;
      this.itemHeight = this.list ? this.list.children[0].offsetHeight : this.itemHeight;
      const i24 = this.itemHeight * this.total - (((h16 = this.list) == null ? void 0 : h16.offsetHeight) || 0);
      this.containerHeight = r11 ? Math.min(S3, i24) : i24;
      const s26 = this.containerHeight;
      return this.scrollElement && (t25 = this.scrollElement.style.height !== s26 + "px", t25 && (this.scrollElement.style.height = s26 + "px")), this.scrollSyncing = false, t25;
    }, this.scrollerRef = (t25) => {
      this.container = t25, t25 && (t25.setAttribute("unselectable", "on"), window.setTimeout(this.calcScrollElementHeight.bind(this), 0));
    }, this.getRowHeightService = s7((t25, i24) => new g2(i24, t25, 0)), this.firstLoaded = this.pageSize, this.lastLoaded = this.skip + this.pageSize, this.scrollHandler = this.scrollHandler.bind(this);
  }
  get translate() {
    return this.listTranslate;
  }
  translateTo(t25, i24) {
    this.listTranslate = t25, this.enabled && this.list && (r11 || this.reactVersion <= 17 || i24 ? this.list.style.transform = "translateY(" + t25 + "px)" : this.listTransform = "translateY(" + t25 + "px)");
  }
  changePage(t25, i24) {
    const s26 = Math.min(Math.max(0, t25), this.total - this.pageSize);
    s26 !== this.skip && this.PageChange && this.PageChange({ skip: s26, take: this.pageSize }, i24);
  }
  reset() {
    this.container && (this.calcScrollElementHeight(), this.container.scrollTop = 0, this.translateTo(0, true));
  }
  scrollToEnd() {
    if (this.container && this.list) {
      this.calcScrollElementHeight();
      const { scrollHeight: t25, offsetHeight: i24 } = this.container;
      this.container.scrollTop = t25, this.translateTo(t25 - i24, true);
    }
  }
  scrollHandler(t25) {
    if (!this.enabled || !this.container || !this.list)
      return;
    if (this.scrollSyncing) {
      this.scrollSyncing = false;
      return;
    }
    this.rowHeightService = this.getRowHeightService(this.itemHeight, this.total);
    const i24 = this.container.scrollTop, s26 = this.lastScrollTop >= i24, h16 = !s26, n27 = Math.abs(i24 - this.lastScrollTop);
    this.lastScrollTop = i24;
    let e32 = this.rowHeightService.index(i24), a37 = this.rowHeightService.offset(e32);
    const { offsetHeight: c16 } = this.container, g9 = this.rowHeightService.index(i24 + c16);
    if (h16 && g9 >= this.lastLoaded && this.lastLoaded < this.total) {
      const l16 = e32 + this.pageSize - this.total;
      l16 > 0 && (e32 = e32 - l16, a37 = this.rowHeightService.offset(e32)), this.firstLoaded = e32, this.translateTo(a37);
      const o21 = this.firstLoaded + this.pageSize;
      this.lastLoaded = Math.min(o21, this.total), this.changePage(this.firstLoaded, t25);
    } else if (s26 && e32 - 1 <= this.firstLoaded) {
      const l16 = n27 === this.itemHeight;
      if (this.skip === 0 && l16)
        this.lastScrollTop = 0, this.firstLoaded = 0, this.lastLoaded = this.pageSize, this.container.scrollTop = 0, this.translateTo(0, true);
      else {
        const o21 = Math.floor(this.pageSize * 0.3);
        this.firstLoaded = Math.max(e32 - o21, 0), this.translateTo(this.rowHeightService.offset(this.firstLoaded)), this.lastLoaded = Math.min(this.firstLoaded + this.pageSize, this.total), this.changePage(this.firstLoaded, t25);
      }
    }
  }
};

// node_modules/@progress/kendo-react-dropdowns/common/Navigation.mjs
var o18 = class {
  navigate(e32) {
    const t25 = e32.keyCode;
    if (t25 === e2.up || t25 === e2.left)
      return this.next({
        current: e32.current,
        min: e32.min,
        max: e32.max,
        step: e32.skipItems ? e32.skipItems : -1
      });
    if (t25 === e2.down || t25 === e2.right)
      return this.next({
        current: e32.current,
        min: e32.min,
        max: e32.max,
        step: e32.skipItems ? e32.skipItems : 1
      });
    if (t25 === e2.home)
      return 0;
    if (t25 === e2.end)
      return e32.max;
  }
  next(e32) {
    return l12(e32.current) ? Math.min(e32.max, Math.max(e32.current + e32.step, e32.min)) : e32.min;
  }
};

// node_modules/@progress/kendo-react-dropdowns/common/DropDownBase.mjs
var a29 = class a30 {
  constructor(s26) {
    this.wrapper = null, this.list = null, this.vs = new u15(), this.navigation = new o18(), this.handleItemClick = (t25, e32) => {
      const i24 = this.initState();
      i24.syntheticEvent = e32, e32.stopPropagation(), this.component.handleItemSelect(t25, i24), this.togglePopup(i24), this.applyState(i24);
    }, this.handleFocus = (t25) => {
      if (!this.component.state.focused) {
        const e32 = this.initState();
        e32.data.focused = true, e32.events.push({ type: "onFocus" }), e32.syntheticEvent = t25, this.applyState(e32);
      }
    }, this.filterChanged = (t25, e32) => {
      const { textField: i24, filterable: o21 } = this.component.props;
      o21 && e32.events.push({
        type: "onFilterChange",
        filter: {
          field: i24,
          operator: "contains",
          ignoreCase: true,
          value: t25
        }
      });
    }, this.togglePopup = (t25) => {
      const e32 = this.component.props, i24 = e32.opened !== void 0 ? e32.opened : this.component.state.opened;
      e32.opened === void 0 && (t25.data.opened = !i24), i24 ? t25.events.push({ type: "onClose" }) : (t25.events.push({ type: "onOpen" }), this.calculatePopupWidth());
    }, this.pageChange = (t25, e32) => {
      const i24 = this.initState();
      i24.syntheticEvent = e32, this.triggerOnPageChange(i24, t25.skip, t25.take), this.applyState(i24);
    }, this.scrollToVirtualItem = (t25, e32) => {
      const i24 = this.vs;
      if (t25.skip === 0)
        i24.reset();
      else {
        let o21 = i24.translate;
        o21 === 0 && (i24.calcScrollElementHeight(), o21 = i24.itemHeight * t25.skip, i24.translateTo(o21, true)), e32 < 0 && o21 > 0 && (o21 += i24.itemHeight * (t25.pageSize / 4)), i24.container && (i24.container.scrollTop = o21), this.scrollToItem(e32, true);
      }
    }, this.scrollPopupByPageSize = (t25) => {
      var r16, l16, h16, c16, u17, d10;
      const e32 = this.vs, i24 = (l16 = (r16 = this.list) == null ? void 0 : r16.parentElement) == null ? void 0 : l16.scrollTop, o21 = e32.enabled && e32.itemHeight ? e32.itemHeight : this.list ? this.list.children[0].offsetHeight : 0, p18 = (c16 = (h16 = this.list) == null ? void 0 : h16.parentElement) == null ? void 0 : c16.offsetHeight;
      i24 !== void 0 && p18 !== void 0 && ((d10 = (u17 = this.list) == null ? void 0 : u17.parentElement) == null || d10.scroll({
        top: i24 + t25 * Math.floor(p18 / o21) * o21
      }));
    }, this.renderScrollElement = () => {
      const t25 = this.vs;
      return t25.enabled && m8.createElement("div", { ref: (e32) => t25.scrollElement = e32, key: "scrollElementKey" });
    }, this.resetGroupStickyHeader = (t25, e32) => {
      t25 !== e32.state.group && e32.setState({ group: t25 });
    }, this.listBoxId = s26.props.id + "list", this.guid = s26.props.id, this.component = s26, this.vs.PageChange = this.pageChange;
  }
  didUpdate() {
    this.vs.listTransform && this.vs.list && (this.vs.list.style.transform = this.vs.listTransform, this.vs.listTransform = "");
  }
  didMount() {
    const s26 = this.component.props, t25 = s26.popupSettings || {}, e32 = s26.style || {}, i24 = t25.width;
    let o21 = s26.opened === true;
    i24 === void 0 && this.calculatePopupWidth(), s26.dir === void 0 && e32.direction === void 0 && (this.calculateDir(), o21 = true), o21 && this.component.forceUpdate();
  }
  calculateDir() {
    const s26 = this.component.element;
    s26 && s26.ownerDocument && s26.ownerDocument.defaultView && (this.dirCalculated = s26.ownerDocument.defaultView.getComputedStyle(s26).direction || void 0);
  }
  calculatePopupWidth() {
    this.wrapper && (this.popupWidth = this.wrapper.offsetWidth + "px");
  }
  scrollToItem(s26, t25, e32) {
    const i24 = this.list || this.vs.list;
    if (!i24 && !e32 && setTimeout(() => {
      this.scrollToItem(s26, t25, true);
    }, 10), s26 === 0 && t25 && this.vs.skip === 0) {
      this.vs.reset();
      return;
    }
    if (i24 && s26 >= 0) {
      const o21 = this.vs, p18 = o21.container || i24.parentNode, r16 = t25 !== void 0 ? t25 : o21.enabled;
      C6(p18, i24, s26, o21.translate, r16);
    }
  }
  updateComponentArgs(s26) {
    for (let t25 in s26)
      Object.hasOwnProperty.call(s26, t25) && (this.component[t25] = s26[t25]);
  }
  initState() {
    return {
      data: {},
      events: [],
      syntheticEvent: void 0
    };
  }
  applyState(s26) {
    Object.keys(s26.data).length > 0 && this.component.setState(s26.data);
    const t25 = {
      syntheticEvent: s26.syntheticEvent,
      nativeEvent: s26.syntheticEvent ? s26.syntheticEvent.nativeEvent : void 0,
      target: this.component,
      value: this.component.value
    };
    s26.events.forEach((e32) => {
      const i24 = e32.type;
      delete e32.type;
      const o21 = i24 && this.component.props[i24];
      o21 && o21.call(void 0, {
        ...t25,
        ...e32
      });
    });
  }
  triggerOnPageChange(s26, t25, e32) {
    const i24 = this.component.props.virtual;
    if (i24) {
      const o21 = Math.min(Math.max(0, t25), Math.max(0, i24.total - e32));
      o21 !== i24.skip && s26.events.push({
        type: "onPageChange",
        page: { skip: o21, take: e32 }
      });
    }
  }
  triggerPageChangeCornerItems(s26, t25) {
    const e32 = this.component.props, { data: i24 = [], dataItemKey: o21, virtual: p18 } = e32, r16 = e32.opened !== void 0 ? e32.opened : this.component.state.opened;
    s26 && p18 && this.vs.enabled && (p18.skip > 0 && p13(s26, i24[0], o21) ? this.triggerOnPageChange(t25, p18.skip - 1, p18.pageSize) : !r16 && p18.skip + p18.pageSize < p18.total && p13(s26, i24[i24.length - 1], o21) && this.triggerOnPageChange(t25, p18.skip + 1, p18.pageSize));
  }
  getPopupSettings() {
    return Object.assign({}, a30.defaultProps.popupSettings, this.component.props.popupSettings);
  }
  getAdaptiveAnimation() {
    const s26 = this.getPopupSettings();
    return s26.animate !== void 0 ? s26.animate : true;
  }
  getGroupedDataModernMode(s26, t25) {
    const e32 = [];
    return s26.forEach((i24, o21) => {
      s26[o21 - 1] && i24[t25] !== s26[o21 - 1][t25] && e32.push({ [t25]: i24[t25] }), e32.push(s26[o21]);
    }), e32;
  }
};
a29.basicPropTypes = {
  opened: import_prop_types24.default.bool,
  disabled: import_prop_types24.default.bool,
  dir: import_prop_types24.default.string,
  tabIndex: import_prop_types24.default.number,
  accessKey: import_prop_types24.default.string,
  data: import_prop_types24.default.array,
  textField: import_prop_types24.default.string,
  className: import_prop_types24.default.string,
  label: import_prop_types24.default.string,
  loading: import_prop_types24.default.bool,
  popupSettings: import_prop_types24.default.shape({
    animate: import_prop_types24.default.oneOfType([
      import_prop_types24.default.bool,
      import_prop_types24.default.shape({
        openDuration: import_prop_types24.default.number,
        closeDuration: import_prop_types24.default.number
      })
    ]),
    popupClass: import_prop_types24.default.string,
    className: import_prop_types24.default.string,
    appendTo: import_prop_types24.default.any,
    width: import_prop_types24.default.oneOfType([import_prop_types24.default.string, import_prop_types24.default.number]),
    height: import_prop_types24.default.oneOfType([import_prop_types24.default.string, import_prop_types24.default.number])
  }),
  onOpen: import_prop_types24.default.func,
  onClose: import_prop_types24.default.func,
  onFocus: import_prop_types24.default.func,
  onBlur: import_prop_types24.default.func,
  onChange: import_prop_types24.default.func,
  itemRender: import_prop_types24.default.func,
  listNoDataRender: import_prop_types24.default.func,
  focusedItemIndex: import_prop_types24.default.func,
  header: import_prop_types24.default.node,
  footer: import_prop_types24.default.node
}, a29.propTypes = {
  ...a29.basicPropTypes,
  value: import_prop_types24.default.any,
  defaultValue: import_prop_types24.default.any,
  filterable: import_prop_types24.default.bool,
  filter: import_prop_types24.default.string,
  virtual: import_prop_types24.default.shape({
    pageSize: import_prop_types24.default.number.isRequired,
    skip: import_prop_types24.default.number.isRequired,
    total: import_prop_types24.default.number.isRequired
  }),
  onFilterChange: import_prop_types24.default.func,
  onPageChange: import_prop_types24.default.func
}, a29.defaultProps = {
  popupSettings: {
    height: "200px"
  },
  required: false,
  validityStyles: true
};
var f10 = a29;

// node_modules/@progress/kendo-react-dropdowns/package-metadata.mjs
var e24 = {
  name: "@progress/kendo-react-dropdowns",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1741695429,
  version: "10.0.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-dropdowns/DropDownList/DropDownList.mjs
var wn = "Please select a value from the list!";
var Te = i20.forwardRef((D8, ut2) => {
  let ze3 = false;
  if (D8.filterable || D8.virtual) {
    const e32 = [];
    D8.filterable && e32.push("filterable"), D8.virtual && e32.push("virtualization"), ze3 = !h(e24, {
      component: "DropDownList",
      features: e32
    });
  }
  const F8 = n5(), ve = I(D8.id), r16 = n4(yn, D8), {
    delay: pt = z4.delay,
    tabIndex: mt = z4.tabIndex,
    ignoreCase: ge3 = z4.ignoreCase,
    size: Q3 = z4.size,
    rounded: Oe3 = z4.rounded,
    fillMode: he3 = z4.fillMode,
    groupMode: xn = z4.groupMode
  } = r16, Ie2 = () => {
    var e32;
    if (e)
      return ((e32 = Z2.current) == null ? void 0 : e32.ownerDocument) || window.document;
  }, ft = () => {
    var e32, n27;
    (e32 = t25 == null ? void 0 : t25.current) != null && e32.wrapper && ((n27 = t25 == null ? void 0 : t25.current) == null || n27.wrapper.focus({ preventScroll: true }));
  }, L8 = () => {
    let e32;
    return H3.current !== void 0 && H3.current !== null ? e32 = H3.current : r16.value !== void 0 ? e32 = r16.value : p18.value !== void 0 && p18.value !== null ? e32 = p18.value : r16.defaultValue !== void 0 && r16.defaultValue !== null && (e32 = r16.defaultValue), !l12(e32) && r16.defaultItem !== void 0 && r16.defaultItem !== null && (e32 = r16.defaultItem), e32;
  }, vt = () => {
    const { dataItemKey: e32 } = r16, n27 = O4(D8), a37 = L8();
    return n27.findIndex((c16) => p13(c16, a37, e32));
  }, we = () => r16.required !== void 0 ? r16.required : z4.required, ye = () => {
    const e32 = r16.validationMessage !== void 0, n27 = L8(), a37 = !we() || n27 !== null && n27 !== "" && n27 !== void 0, c16 = r16.valid !== void 0 ? r16.valid : a37;
    return {
      customError: e32,
      valid: c16,
      valueMissing: n27 === null
    };
  }, gt = () => r16.validityStyles !== void 0 ? r16.validityStyles : z4.validityStyles, oe = (e32) => {
    ie3.current = true, e32.focus(), window.setTimeout(() => ie3.current = false, 30);
  }, xe2 = () => {
    R5.current && oe(R5.current), r16.adaptive && setTimeout(() => {
      R5.current && oe(R5.current);
    }, 300);
  }, ht = i20.useCallback((e32) => {
    for (const n27 of e32)
      zt(n27.target.clientWidth);
  }, []), Ae2 = () => {
    var e32;
    (e32 = Ee4.current) != null && e32.setCustomValidity && Ee4.current.setCustomValidity(
      ye().valid ? "" : r16.validationMessage || wn
    );
  }, q3 = (e32, n27) => {
    const a37 = L8();
    p13(a37, e32, r16.dataItemKey) || (r16.value === void 0 && (n27.data.value = e32), t25.current.updateComponentArgs({ value: e32 }), H3.current = e32, n27.events.push({ type: "onChange" }));
  }, K5 = (e32) => {
    var n27;
    (n27 = t25 == null ? void 0 : t25.current) == null || n27.applyState(e32), H3.current = void 0;
  }, X = (e32, n27) => {
    var s26;
    const { virtual: a37, dataItemKey: c16, defaultItem: u17 } = r16, m11 = O4(D8), v14 = a37 ? a37.skip : 0, f13 = L8(), o21 = e32 === -1 && u17 !== void 0 ? u17 : m11[e32 - v14], d10 = !p13(o21, f13, c16);
    q3(o21, n27), d10 && ((s26 = t25 == null ? void 0 : t25.current) == null || s26.triggerPageChangeCornerItems(o21, n27));
  }, A13 = (e32, n27, a37) => {
    var I11, h16;
    const { defaultItem: c16, dataItemKey: u17, virtual: m11 = { skip: 0, total: 0, pageSize: 0 } } = r16, v14 = L8(), f13 = O4(D8), o21 = (I11 = t25 == null ? void 0 : t25.current) == null ? void 0 : I11.vs, d10 = f13.findIndex((w11) => p13(w11, v14, u17)), s26 = (h16 = t25 == null ? void 0 : t25.current) == null ? void 0 : h16.navigation.navigate({
      current: m11.skip + d10,
      max: (o21 != null && o21.enabled ? m11.total : f13.length) - 1,
      min: c16 !== void 0 ? -1 : 0,
      keyCode: n27,
      skipItems: a37 || void 0
    });
    s26 !== void 0 && X(s26, e32), K5(e32);
  }, It2 = (e32) => {
    Z2.current = e32, t25.current.wrapper = e32;
  }, wt2 = (e32) => i20.createElement(
    "select",
    {
      name: r16.name,
      ref: (n27) => {
        Ee4.current = n27;
      },
      tabIndex: -1,
      "aria-hidden": true,
      title: r16.label,
      style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
    },
    i20.createElement("option", { value: r16.valueMap ? r16.valueMap.call(void 0, e32) : e32 })
  ), De = () => {
    const {
      textField: e32,
      dataItemKey: n27,
      virtual: a37 = { skip: 0 },
      focusedItemIndex: c16 = h12,
      filterable: u17,
      skipDisabledItems: m11 = true
    } = r16, v14 = L8(), f13 = O4(D8), o21 = r16.filter ? r16.filter : p18.text;
    return m11 && e32 && !o21 && !v14 ? f13.findIndex((d10) => !d10.disabled && d10[e32]) : l12(v14) && o21 === void 0 || u17 && o21 === "" ? f13.findIndex((d10) => p13(d10, v14, n27)) : o21 ? ke4.current ? c16(f13, o21, e32) : f13.findIndex((d10) => p13(d10, v14, n27)) : a37.skip === 0 ? 0 : -1;
  }, He = (e32, n27) => n27 !== void 0 && n27 !== -1 && e32 && e32.length > 0 && e32[n27].disabled, Se = () => {
    const e32 = O4(D8), n27 = t25.current.initState(), a37 = De();
    He(e32, a37) && (q3(null, n27), K5(n27));
  }, Ce3 = (e32) => {
    if (e32.isPropagationStopped())
      return;
    const n27 = t25.current.initState();
    n27.syntheticEvent = e32, p18.focused || (n27.data.focused = true), Se(), t25.current.togglePopup(n27), K5(n27);
  }, Ve2 = (e32) => {
    var O6, pe3, _4, me2, j4, nt, rt;
    e32 && e32.target instanceof Element && e32.target.nodeName === "INPUT" && e32.stopPropagation && e32.stopPropagation();
    const {
      filterable: n27,
      disabled: a37,
      defaultItem: c16,
      leftRightKeysNavigation: u17 = true,
      virtual: m11 = { skip: 0, total: 0, pageSize: 0 },
      dataItemKey: v14,
      groupField: f13 = "",
      textField: o21,
      skipDisabledItems: d10 = true
    } = r16, s26 = O4(D8), I11 = L8(), h16 = s26.findIndex((C7) => p13(C7, I11, v14)), w11 = r16.opened !== void 0 ? r16.opened : p18.opened, l16 = e32.keyCode, T7 = l16 === e2.home || l16 === e2.end, M7 = l16 === e2.up || l16 === e2.down, $6 = !w11 && (e32.altKey && l16 === e2.down || l16 === e2.enter || l16 === e2.space), re3 = w11 && (e32.altKey && l16 === e2.up || l16 === e2.esc), ce = u17 && (l16 === e2.left || l16 === e2.right), ue = M7 || ce && !n27 || T7, S5 = t25.current.initState();
    if (S5.syntheticEvent = e32, !a37) {
      if (T7 && ((O6 = t25 == null ? void 0 : t25.current) != null && O6.vs.enabled))
        l16 === e2.home ? m11.skip !== 0 ? ((pe3 = t25 == null ? void 0 : t25.current) == null || pe3.triggerOnPageChange(S5, 0, m11.pageSize), V3.current = true) : q3(s26[0], S5) : m11.skip < m11.total - m11.pageSize ? ((_4 = t25 == null ? void 0 : t25.current) == null || _4.triggerOnPageChange(
          S5,
          m11.total - m11.pageSize,
          m11.pageSize
        ), V3.current = true) : q3(s26[s26.length - 1], S5);
      else if (w11 && l16 === e2.pageUp)
        e32.preventDefault(), (me2 = t25 == null ? void 0 : t25.current) == null || me2.scrollPopupByPageSize(-1);
      else if (w11 && l16 === e2.pageDown)
        e32.preventDefault(), (j4 = t25 == null ? void 0 : t25.current) == null || j4.scrollPopupByPageSize(1);
      else if (w11 && l16 === e2.enter) {
        const C7 = De();
        He(s26, C7) ? (q3(null, S5), K5(S5)) : X(C7, S5), (nt = t25 == null ? void 0 : t25.current) == null || nt.togglePopup(S5), e32.preventDefault();
      } else if ($6 || re3)
        re3 && Se(), (rt = t25 == null ? void 0 : t25.current) == null || rt.togglePopup(S5), e32.preventDefault();
      else if (ue) {
        if (ke4.current = false, f13 !== "" && o21)
          if (!d10 && w11)
            A13(S5, l16);
          else {
            let C7;
            if (l16 === e2.down || l16 === e2.right) {
              const x8 = s26.slice(h16 + 1).find((g9) => !g9.disabled && g9[o21]);
              C7 = x8 && s26.findIndex((g9) => g9[o21] === x8[o21]);
            } else if (l16 === e2.up || l16 === e2.left) {
              let x8;
              if (h16 === 0 && c16)
                C7 = -1;
              else if (h16 === -1)
                x8 = s26, C7 = s26.findIndex((g9) => !g9.disabled && g9[o21]);
              else {
                x8 = s26.slice(0, h16);
                let g9 = x8.pop();
                for (; g9 && g9.disabled; )
                  g9 = x8.pop();
                C7 = g9 && s26.findIndex((Ke) => Ke[o21] === g9[o21]);
              }
            }
            if (C7 !== void 0) {
              const x8 = C7 - h16;
              A13(S5, l16, x8);
            } else
              C7 === void 0 && s26.findIndex((x8) => x8[o21] === I11[o21]) === s26.length - 1 && A13(S5, l16);
          }
        else if (!d10 && w11 || T7)
          A13(S5, l16);
        else if (o21) {
          let C7;
          if (l16 === e2.down || l16 === e2.right) {
            const x8 = s26.slice(h16 + 1).find((g9) => !g9.disabled && g9[o21]);
            C7 = x8 && s26.findIndex((g9) => g9[o21] === x8[o21]);
          } else if (l16 === e2.up || l16 === e2.left) {
            let x8;
            if (h16 === 0 && c16)
              C7 = -1;
            else if (h16 === -1)
              x8 = s26, C7 = s26.find((g9) => !g9.disabled && g9[o21]);
            else {
              x8 = s26.slice(0, h16);
              let g9 = x8.pop();
              for (; g9 && g9.disabled; )
                g9 = x8.pop();
              C7 = g9 && s26.findIndex((Ke) => Ke[o21] === g9[o21]);
            }
          }
          if (C7 !== void 0) {
            const x8 = C7 - h16;
            A13(S5, l16, x8);
          } else
            C7 === void 0 && s26.findIndex((x8) => x8[o21] === I11[o21]) === s26.length - 1 && A13(S5, l16);
        } else
          A13(S5, l16);
        e32.preventDefault();
      }
      K5(S5);
    }
  }, yt2 = (e32) => {
    const n27 = t25.current.initState();
    n27.syntheticEvent = e32.syntheticEvent, r16.filter === void 0 && (n27.data.text = e32.target.value), t25.current.filterChanged(e32.target.value, n27), ke4.current = true, K5(n27), te5({ group: void 0, text: String(e32.target.value) });
  }, Be = () => {
    const e32 = r16.filter !== void 0 ? r16.filter : p18.text;
    return r16.filterable && i20.createElement(
      u12,
      {
        value: e32,
        ref: (n27) => R5.current = n27 && n27.element,
        onChange: yt2,
        onKeyDown: Ve2,
        size: Q3,
        rounded: Oe3,
        fillMode: he3,
        renderListFilterWrapper: true
      }
    );
  }, xt2 = (e32) => {
    var a37;
    const n27 = t25.current.initState();
    n27.syntheticEvent = e32, (a37 = t25 == null ? void 0 : t25.current) == null || a37.togglePopup(n27), q3(r16.defaultItem, n27), K5(n27);
  }, We2 = () => {
    const { textField: e32, defaultItem: n27, dataItemKey: a37 } = r16, c16 = L8();
    return n27 !== void 0 && i20.createElement(
      p14,
      {
        defaultItem: n27,
        textField: e32,
        selected: p13(c16, n27, a37),
        key: "defaultitemkey",
        onClick: xt2
      }
    );
  }, Dt3 = (e32, n27) => {
    var a37;
    (a37 = t25 == null ? void 0 : t25.current) == null || a37.handleItemClick(e32, n27), H3.current = void 0;
  }, St3 = (e32) => {
    const { vs: n27, list: a37 } = t25.current;
    n27.scrollHandler(e32);
    const { groupField: c16 } = r16;
    let u17 = O4(D8);
    if (!(!c16 || !u17.length) && c16) {
      const m11 = Ge2.current = Ge2.current || (n27.enabled ? n27.itemHeight : a37 ? a37.children[0].offsetHeight : 0), f13 = e32.target.scrollTop - n27.skip * m11;
      u17 = t25.current.getGroupedDataModernMode(u17, c16);
      let o21 = u17[0][c16];
      for (let d10 = 1; d10 < u17.length && !(m11 * d10 > f13); d10++)
        u17[d10] && u17[d10][c16] && (o21 = u17[d10][c16]);
      o21 !== p18.group && te5({ group: o21 });
    }
  }, _e = () => {
    var l16;
    const {
      textField: e32,
      dataItemKey: n27,
      virtual: a37 = { skip: 0, total: void 0 },
      groupHeaderItemRender: c16,
      listNoDataRender: u17,
      itemRender: m11
    } = r16, v14 = O4(D8), f13 = F8 && F8.uDropDownList, o21 = t25.current.vs, d10 = a37.skip, s26 = r16.opened !== void 0 ? r16.opened : p18.opened, I11 = t25.current.getPopupSettings(), h16 = `translateY(${o21.translate}px)`, w11 = L8();
    return i20.createElement(
      le3,
      {
        id: be3,
        show: s26,
        data: v14.slice(),
        focusedIndex: De(),
        value: w11,
        textField: e32,
        valueField: n27,
        optionsGuid: je,
        groupField: r16.groupField,
        groupMode: "modern",
        listRef: (T7) => o21.list = t25.current.list = T7,
        wrapperStyle: { maxHeight: I11.height },
        wrapperCssClass: n2(J.listContent({ c: f13 })),
        listStyle: o21.enabled ? { transform: h16 } : void 0,
        key: "listkey",
        skip: d10,
        onClick: Dt3,
        itemRender: m11,
        groupHeaderItemRender: c16,
        noDataRender: u17,
        onScroll: St3,
        wrapperRef: o21.scrollerRef,
        scroller: (l16 = t25 == null ? void 0 : t25.current) == null ? void 0 : l16.renderScrollElement(),
        ariaSetSize: a37.total
      }
    );
  }, Ct2 = () => {
    var h16;
    const { header: e32, footer: n27, adaptiveTitle: a37, groupField: c16, groupStickyHeaderItemRender: u17, list: m11 } = r16, v14 = O4(D8), f13 = r16.opened !== void 0 ? r16.opened : p18.opened, o21 = F8 && F8.uDropDownList, d10 = F8 && F8.uDropDownsActionSheet, s26 = {
      navigatable: false,
      navigatableElements: [],
      expand: f13,
      animation: true,
      onClose: (w11) => Ce3(w11),
      className: n2(
        E2.wrapper({
          c: d10
        }),
        "k-adaptive-actionsheet"
      ),
      animationStyles: G6 && Y2 && G6 <= Y2.small ? { top: 0, width: "100%", height: "100%" } : void 0,
      position: G6 && Y2 && G6 <= Y2.small ? "fullscreen" : void 0
    };
    let { group: I11 } = p18;
    return I11 === void 0 && c16 !== void 0 && (I11 = i18(v14[0], c16)), i20.createElement(K2, { ...s26 }, i20.createElement(e5, { className: n2(E2.header({ c: d10 })) }, i20.createElement("div", { className: n2(E2.titleBar({ c: d10 })) }, i20.createElement("div", { className: n2(E2.title({ c: d10 })) }, i20.createElement("div", null, a37)), i20.createElement("div", { className: n2(E2.actions({ c: d10 })) }, i20.createElement(
      M,
      {
        tabIndex: 0,
        "aria-label": "Cancel",
        "aria-disabled": "false",
        type: "button",
        fillMode: "flat",
        onClick: Ce3,
        icon: "x",
        svgIcon: xIcon
      }
    ))), i20.createElement("div", { className: n2(E2.titleBarGroup({ c: d10 })) }, Be())), i20.createElement(t3, { overflowHidden: true }, e32 && i20.createElement("div", { className: n2(J.listHeader({ c: o21 })) }, e32), i20.createElement(
      "div",
      {
        className: n2(
          J.list({
            c: o21,
            size: Q3,
            virtual: (h16 = t25 == null ? void 0 : t25.current) == null ? void 0 : h16.vs.enabled
          })
        )
      },
      We2(),
      !m11 && I11 && v14.length !== 0 && i20.createElement(
        u13,
        {
          group: I11,
          groupMode: "modern",
          render: u17
        }
      ),
      _e()
    ), n27 && i20.createElement("div", { className: n2(J.listFooter({ c: o21 })) }, n27)));
  }, Et = () => {
    p18.focused && window.setTimeout(() => {
      p18.focused && t25.current.wrapper && oe(t25.current.wrapper);
    });
  }, kt = (e32) => {
    var n27;
    (n27 = r16.popupSettings) != null && n27.onMouseDownOutside && r16.popupSettings.onMouseDownOutside.call(void 0, e32);
  }, Lt = () => {
    const { header: e32, footer: n27, dir: a37, groupField: c16, groupStickyHeaderItemRender: u17, list: m11 } = r16, v14 = O4(D8), f13 = t25.current, o21 = f13.getPopupSettings(), d10 = r16.opened !== void 0 ? r16.opened : p18.opened, s26 = o21.width !== void 0 ? o21.width : f13.popupWidth, I11 = F8 && F8.uDropDownList, h16 = {
      dir: a37 !== void 0 ? a37 : f13.dirCalculated,
      width: s26,
      popupSettings: {
        ...o21,
        popupClass: n2(
          o21.popupClass,
          J.listContainer({
            c: I11
          })
        ),
        anchor: o21.anchor || Z2.current,
        show: d10,
        onOpen: xe2,
        onClose: Et,
        onMouseDownOutside: kt
      },
      itemsCount: [v14.length]
    };
    let { group: w11 } = p18;
    return w11 === void 0 && c16 !== void 0 && (w11 = i18(v14[0], c16)), i20.createElement(a5, { ...h16 }, Be(), e32 && i20.createElement("div", { className: n2(J.listHeader({ c: I11 })) }, e32), i20.createElement(
      "div",
      {
        className: n2(
          J.list({
            c: I11,
            size: Q3,
            virtual: t25.current.vs.enabled
          })
        )
      },
      We2(),
      !m11 && w11 && v14.length !== 0 && i20.createElement(u13, { group: w11, groupMode: "modern", render: u17 }),
      _e()
    ), n27 && i20.createElement("div", { className: n2(J.listFooter({ c: I11 })) }, n27), ze3 && i20.createElement(l, null));
  }, bt = (e32) => {
    const { dataItemKey: n27 } = r16, a37 = O4(D8), c16 = L8();
    let u17 = a37.map((M7, $6) => ({ item: M7, itemIndex: $6 }));
    const m11 = U2.current.word, v14 = U2.current.last, f13 = d7(m11, v14);
    let o21 = u17.length, d10 = Math.max(
      0,
      a37.findIndex((M7) => p13(M7, c16, n27))
    ), s26;
    r16.defaultItem && (s26 = { item: r16.defaultItem, itemIndex: -1 }, o21 += 1, d10 += 1), d10 += f13 ? 1 : 0, u17 = I6(u17, d10, s26);
    let I11, h16, w11, l16 = 0;
    const { textField: T7 } = r16;
    for (; l16 < o21; ) {
      if (I11 = i18(u17[l16].item, T7), h16 = f13 && x7(I11, v14, ge3), w11 = x7(I11, m11, ge3), h16 || w11) {
        l16 = u17[l16].itemIndex;
        break;
      }
      l16++;
    }
    if (l16 !== o21) {
      const M7 = t25.current.initState();
      M7.syntheticEvent = e32, X(l16, M7), K5(M7), H3.current = void 0;
    }
  }, Pt2 = (e32) => {
    clearTimeout(Ue.current), r16.filterable || (Ue.current = window.setTimeout(() => U2.current.word = "", pt), bt(e32));
  }, Mt3 = (e32) => {
    ie3.current || t25.current.handleFocus(e32);
  }, Nt2 = (e32) => {
    if (ie3.current || !p18.focused)
      return;
    const n27 = r16.opened !== void 0 ? r16.opened : p18.opened, a37 = t25.current.initState();
    a37.syntheticEvent = e32, a37.data.focused = false, a37.events.push({ type: "onBlur" }), n27 && Se(), n27 && !Fe && t25.current.togglePopup(a37), K5(a37);
  }, Ft2 = (e32) => {
    if (r16.filterable || e32.which === 0 || e32.keyCode === e2.enter)
      return;
    let n27 = String.fromCharCode(e32.charCode || e32.keyCode);
    ge3 && (n27 = n27.toLowerCase()), n27 === " " && e32.preventDefault(), U2.current = {
      word: U2.current.word + n27,
      last: U2.current.last + n27
    }, Pt2(e32);
  }, Kt = () => {
    const e32 = t25.current.initState();
    e32.data.opened = p18.opened, t25.current.togglePopup(e32), K5(e32);
  }, qe2 = i20.useRef(null), Z2 = i20.useRef(null), Ee4 = i20.useRef(), R5 = i20.useRef(null);
  i20.useImperativeHandle(
    qe2,
    () => ({
      get element() {
        return Z2.current;
      },
      get index() {
        return vt();
      },
      get name() {
        return r16.name;
      },
      get validity() {
        return ye();
      },
      get value() {
        return L8();
      },
      get focused() {
        return p18.focused;
      },
      get opened() {
        return p18.opened;
      },
      focus: ft,
      props: r16,
      togglePopup: Kt
    })
  ), i20.useImperativeHandle(
    ut2,
    () => qe2.current
  );
  const Ue = i20.useRef(null), U2 = i20.useRef({ word: "", last: "" }), ie3 = i20.useRef(false), H3 = i20.useRef(null), V3 = i20.useRef(false), ke4 = i20.useRef(false), B6 = i20.useRef({}), Le3 = i20.useRef({}), t25 = i20.useRef(
    new f10({
      props: D8,
      setState: () => {
      },
      state: {},
      forceUpdate: () => {
      },
      element: null,
      value: null,
      handleItemSelect: () => {
      }
    })
  ), Ge2 = i20.useRef(0), ee4 = i20.useRef(null), [p18, Tt2] = i20.useState({}), [G6, zt] = i20.useState(), [, Ye] = i20.useReducer((e32) => e32, true), Ot = i4(), te5 = (e32) => {
    Tt2({ ...p18, ...e32 });
  };
  i20.useEffect(() => {
    t25.current.updateComponentArgs({
      props: D8,
      setState: te5,
      state: p18,
      forceUpdate: Ye,
      element: Z2.current,
      handleItemSelect: X,
      value: L8()
    });
  }, [te5, p18, Ye, X, L8]), i20.useEffect(() => {
    var d10, s26, I11, h16, w11, l16, T7, M7, $6, re3, ce, ue, S5;
    const { dataItemKey: e32, virtual: n27, groupField: a37 = "", textField: c16 } = r16, u17 = O4(D8), m11 = B6.current.virtual ? B6.current.virtual.total : 0, v14 = r16.opened !== void 0 ? r16.opened : p18.opened, f13 = B6.current.opened !== void 0 ? B6.current.opened : Le3.current.opened, o21 = !f13 && v14;
    if ((d10 = t25 == null ? void 0 : t25.current) == null || d10.didUpdate(), (s26 = t25 == null ? void 0 : t25.current) != null && s26.getPopupSettings().animate || o21 && xe2(), n27 && n27.total !== m11)
      (I11 = t25 == null ? void 0 : t25.current) == null || I11.vs.calcScrollElementHeight(), (h16 = t25 == null ? void 0 : t25.current) == null || h16.vs.reset();
    else {
      const O6 = L8(), pe3 = B6.current.value !== void 0 ? B6.current.value : Le3.current.value;
      let _4 = u17.findIndex((j4) => p13(j4, O6, e32));
      a37 !== "" && O6 && c16 && (_4 = (l16 = (w11 = t25 == null ? void 0 : t25.current) == null ? void 0 : w11.getGroupedDataModernMode(u17, a37)) == null ? void 0 : l16.map((j4) => j4[c16]).indexOf(O6[c16]));
      const me2 = !p13(pe3, O6, e32);
      o21 && n27 ? (T7 = t25 == null ? void 0 : t25.current) == null || T7.scrollToVirtualItem(n27, _4) : o21 && !n27 ? (xe2(), u17 && u17.length !== 0 && ((M7 = t25 == null ? void 0 : t25.current) == null || M7.resetGroupStickyHeader(u17[0][a37], {
        setState: te5,
        group: p18.group,
        state: p18
      })), ($6 = t25 == null ? void 0 : t25.current) == null || $6.scrollToItem(_4)) : v14 && f13 && O6 && me2 && !V3.current ? (ce = t25 == null ? void 0 : t25.current) == null || ce.scrollToItem(_4, (re3 = t25 == null ? void 0 : t25.current) == null ? void 0 : re3.vs.enabled) : v14 && f13 && V3.current && (V3.current && n27 && n27.skip === 0 ? (ue = t25 == null ? void 0 : t25.current) == null || ue.vs.reset() : V3.current && n27 && n27.skip === n27.total - n27.pageSize && ((S5 = t25 == null ? void 0 : t25.current) == null || S5.vs.scrollToEnd()));
    }
    V3.current = false, Le3.current = p18, B6.current = r16, Ae2();
  }), i20.useEffect(() => {
    var e32, n27;
    return ee4.current = e && window.ResizeObserver && new window.ResizeObserver(ht.bind(void 0)), (e32 = t25 == null ? void 0 : t25.current) == null || e32.didMount(), Ae2(), (n27 = Ie2()) != null && n27.body && ee4.current && ee4.current.observe(Ie2().body), () => {
      var a37;
      (a37 = Ie2()) != null && a37.body && ee4.current && ee4.current.disconnect();
    };
  }, []);
  const $e = ve + "-accessibility-id", be3 = ve + "-listbox-id", je = ve + "-guid", At = Ot.toLanguageString(
    e23,
    s21[e23]
  ), {
    style: ae3,
    className: Ht,
    label: Pe,
    dir: Vt,
    virtual: W4,
    adaptive: Dn,
    dataItemKey: Bt,
    disabled: le4,
    loading: Je,
    iconClassName: Qe,
    svgIcon: Xe,
    valueRender: Ze
  } = r16, Me2 = r16.opened !== void 0 ? r16.opened : p18.opened, se5 = L8(), Ne3 = i18(se5, r16.textField), Re2 = !gt() || ye().valid, de3 = t25.current, Wt = de3.vs, ne3 = F8 && F8.uDropDownList;
  Wt.enabled = W4 !== void 0;
  const Y2 = n(), Fe = !!(G6 && Y2 && G6 <= Y2.medium && D8.adaptive);
  W4 !== void 0 && (de3.vs.skip = W4.skip, de3.vs.total = W4.total, de3.vs.pageSize = W4.pageSize);
  const _t = O4(D8), { focused: qt } = p18, Ut = _t.findIndex((e32) => p13(e32, se5, Bt)), et = i20.createElement("span", { id: $e, className: n2(J.inputInner({ c: ne3 })) }, Ne3 && i20.createElement("span", { className: n2(J.inputText({ c: ne3 })) }, Ne3)), Gt = Ze !== void 0 ? Ze.call(void 0, et, se5) : et, tt = i20.createElement(i20.Fragment, null, i20.createElement(
    "span",
    {
      ref: It2,
      className: n2(
        J.wrapper({
          c: ne3,
          size: Q3,
          rounded: Oe3,
          fillMode: he3,
          focused: qt,
          disabled: le4,
          invalid: !Re2,
          loading: Je,
          required: we()
        }),
        Ht
      ),
      style: Pe ? { ...ae3, width: void 0 } : ae3,
      dir: Vt,
      onMouseDown: Me2 ? (e32) => {
        e32.target.nodeName !== "INPUT" && (oe(t25.current.wrapper), e32.preventDefault());
      } : void 0,
      onFocus: Mt3,
      onBlur: Nt2,
      tabIndex: e4(mt, le4),
      accessKey: r16.accessKey,
      onKeyDown: Ve2,
      onKeyPress: Ft2,
      onClick: le4 ? void 0 : Ce3,
      role: "combobox",
      "aria-required": we(),
      "aria-disabled": le4 || void 0,
      "aria-haspopup": "listbox",
      "aria-expanded": Me2 || false,
      "aria-owns": be3,
      "aria-activedescendant": Me2 ? "option-" + je + "-" + (Ut + (W4 ? W4.skip : 0)) : void 0,
      "aria-label": r16.ariaLabel || r16.label,
      "aria-labelledby": r16.ariaLabelledBy,
      "aria-describedby": r16.ariaDescribedBy || $e,
      "aria-controls": be3,
      id: r16.id,
      title: r16.title
    },
    Gt,
    Je && i20.createElement(v3, { className: n2(J.loadingIcon({ c: ne3 })), name: "loading" }),
    i20.createElement(
      M,
      {
        tabIndex: -1,
        type: "button",
        "aria-label": At,
        size: Q3,
        fillMode: he3,
        iconClass: Qe,
        className: n2(J.inputButton({ c: ne3 })),
        rounded: null,
        themeColor: "base",
        icon: Qe ? void 0 : "caret-alt-down",
        svgIcon: Xe || caretAltDownIcon,
        onMouseDown: (e32) => p18.focused && e32.preventDefault()
      }
    ),
    wt2(se5),
    !Fe && Lt()
  ), Fe && Ct2());
  return Pe ? i20.createElement(
    I2,
    {
      label: Pe,
      editorValue: Ne3,
      editorValid: Re2,
      editorDisabled: r16.disabled,
      style: { width: ae3 ? ae3.width : void 0 },
      children: tt
    }
  ) : tt;
});
Te.propTypes = {
  delay: import_prop_types25.default.number,
  ignoreCase: import_prop_types25.default.bool,
  iconClassName: import_prop_types25.default.string,
  svgIcon: r,
  defaultItem: import_prop_types25.default.any,
  valueRender: import_prop_types25.default.func,
  valueMap: import_prop_types25.default.func,
  validationMessage: import_prop_types25.default.string,
  required: import_prop_types25.default.bool,
  id: import_prop_types25.default.string,
  ariaLabelledBy: import_prop_types25.default.string,
  ariaDescribedBy: import_prop_types25.default.string,
  ariaLabel: import_prop_types25.default.string,
  leftRightKeysNavigation: import_prop_types25.default.bool,
  title: import_prop_types25.default.string,
  groupField: import_prop_types25.default.string,
  list: import_prop_types25.default.any,
  skipDisabledItems: import_prop_types25.default.bool
};
var z4 = {
  delay: 500,
  tabIndex: 0,
  ignoreCase: true,
  ...f10.defaultProps,
  required: false,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  groupMode: "modern"
};
Te.displayName = "KendoReactDropDownList";
var yn = a();
Te.displayName = "KendoReactDropDownList";

// node_modules/@progress/kendo-react-dropdowns/common/SearchBar.mjs
var c10 = __toESM(require_react(), 1);
var y6 = class extends c10.Component {
  constructor() {
    super(...arguments), this._input = null;
  }
  /**
   * @hidden
   */
  get input() {
    return this._input;
  }
  componentDidUpdate(a37) {
    const i24 = a37.value, o21 = a37.suggestedText, { value: s26, suggestedText: t25, focused: n27 } = this.props, e32 = this.input, r16 = i24 !== s26 || t25 !== o21, p18 = r16 && i24.startsWith(s26) && !(o21 && t25 && o21.endsWith(t25)), l16 = o4(document);
    n27 && e32 && l16 !== e32 && e32.focus(), t25 && r16 && !p18 && e32 && e32.setSelectionRange(s26.length - t25.length, s26.length);
  }
  render() {
    const {
      expanded: a37 = false,
      disabled: i24,
      role: o21 = "listbox",
      render: s26,
      tabIndex: t25,
      accessKey: n27,
      unstyled: e32,
      inputAttributes: r16
    } = this.props, p18 = e32 && e32.uDropDownsBase, l16 = {
      tabIndex: t25,
      accessKey: n27
    }, d10 = c10.createElement(
      "input",
      {
        autoComplete: "off",
        id: this.props.id,
        type: "text",
        key: "searchbar",
        size: this.props.size,
        placeholder: this.props.placeholder,
        className: n2(j.inputInner({ c: p18 })),
        role: o21,
        name: this.props.name,
        value: this.props.value,
        onChange: this.props.onChange,
        ref: (h16) => this._input = h16,
        onKeyDown: this.props.onKeyDown,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onClick: this.props.onClick,
        "aria-disabled": i24 || void 0,
        disabled: i24 || void 0,
        readOnly: this.props.readOnly || void 0,
        title: this.props.title,
        "aria-haspopup": "listbox",
        "aria-expanded": a37,
        "aria-owns": this.props.owns,
        "aria-activedescendant": a37 ? this.props.activedescendant : void 0,
        "aria-describedby": this.props.ariaDescribedBy,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-label": this.props.ariaLabel,
        "aria-required": this.props.ariaRequired,
        "aria-controls": this.props.ariaControls,
        ...Object.assign({}, l16, r16)
      }
    );
    return s26 ? s26.call(void 0, d10) : d10;
  }
};

// node_modules/@progress/kendo-react-dropdowns/ComboBox/ComboBox.mjs
var c11 = __toESM(require_react(), 1);
var import_prop_types26 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/ClearButton.mjs
var e25 = __toESM(require_react(), 1);
var b6 = (n27) => {
  const a37 = i4(), o21 = n5(), s26 = o21 && o21.uDropDownsBase, r16 = a37.toLanguageString(a28, s21[a28]), c16 = (l16) => l16.preventDefault();
  return e25.createElement(
    "span",
    {
      className: n2(j.clearButton({ c: s26 })),
      role: "button",
      onClick: n27.onClick,
      onMouseDown: c16,
      tabIndex: -1,
      title: r16,
      key: "clearbutton"
    },
    e25.createElement(v3, { name: "x", icon: xIcon })
  );
};

// node_modules/@progress/kendo-react-dropdowns/common/withCustomComponent.mjs
var m9 = s5;

// node_modules/@progress/kendo-react-dropdowns/ComboBox/ComboBox.mjs
var ke2 = "Please enter a valid value!";
var F5 = class F6 extends c11.Component {
  constructor(s26) {
    super(s26), this.state = {}, this.base = new f10(this), this._element = null, this._suggested = "", this._skipBlur = false, this._input = null, this._adaptiveFilterInput = null, this.itemHeight = 0, this.duplicates = [], this.hasDuplicates = false, this.showLicenseWatermark = false, this.focus = () => {
      this._input && this._input.focus();
    }, this.checkForDuplicatePlainTextRecords = () => {
      const e32 = this.props.textField !== void 0, t25 = this.props.dataItemKey !== void 0;
      if (this.props.data && this.props.data.length > 0 && !e32 && !t25) {
        const i24 = this.props.data;
        this.duplicates = N(i24), this.hasDuplicates = this.duplicates.length > 0;
      }
    }, this.handleItemSelect = (e32, t25) => {
      const { virtual: i24, dataItemKey: n27 } = this.props, r16 = O4(this.props), a37 = i24 ? i24.skip : 0, d10 = r16[e32 - a37], l16 = this.hasDuplicates || !p13(d10, this.value, n27);
      this.triggerOnChange(d10, t25), this.state.text !== void 0 && (t25.data.text = void 0), l16 && this.base.triggerPageChangeCornerItems(d10, t25);
    }, this.onPopupOpened = () => {
      setTimeout(() => {
        this.mobileMode && this._adaptiveFilterInput && (this._skipBlur = true, this._adaptiveFilterInput.focus(), this._skipBlur = false);
      }, 300);
    }, this.componentRef = (e32) => {
      this._element = e32, this.base.wrapper = e32;
    }, this.toggleBtnClick = (e32) => {
      const { skipDisabledItems: t25, textField: i24 } = this.props, n27 = O4(this.props), r16 = this.getFocusedIndex(), a37 = this.getCurrentValueDisabledStatus(i24, n27, r16), d10 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, l16 = this.base.initState();
      if (l16.syntheticEvent = e32, !t25 && i24 && a37 && this.clearValueOnToggleBtnClick(e32), this.base.togglePopup(l16), !d10 && this.mobileMode) {
        const o21 = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text || null;
        this.base.filterChanged(o21, l16);
      }
      this.applyState(l16);
    }, this.closeOpenedApplyStateNonMobileMode = (e32, t25) => {
      t25 && !this.mobileMode && this.base.togglePopup(e32);
    }, this.renderMobileListFilter = () => {
      const e32 = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text, t25 = i18(this.value, this.props.textField), i24 = l12(e32) ? e32 : t25;
      return c11.createElement(
        u12,
        {
          value: i24,
          ref: (n27) => this._adaptiveFilterInput = n27 && n27.element,
          onChange: this.handleMobileFilterChange,
          onKeyDown: this.onInputKeyDown,
          size: "large",
          rounded: this.props.rounded,
          fillMode: this.props.fillMode
        }
      );
    }, this.handleMobileFilterChange = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32.syntheticEvent, t25.data.text = e32.target.value, this.base.filterChanged(e32.target.value, t25), this.applyState(t25);
    }, this.onScroll = (e32) => {
      const { vs: t25, list: i24 } = this.base;
      t25.scrollHandler(e32);
      const { groupField: n27 } = this.props;
      let r16 = O4(this.props);
      if (!n27 || !r16.length)
        return;
      const a37 = this.itemHeight = this.itemHeight || (t25.enabled ? t25.itemHeight : i24 ? i24.children[0].offsetHeight : 0), l16 = e32.target.scrollTop - t25.skip * a37;
      this.props.groupMode === "modern" && (r16 = this.base.getGroupedDataModernMode(r16, n27));
      let o21 = r16[0][n27];
      for (let u17 = 1; u17 < r16.length && !(a37 * u17 > l16); u17++)
        r16[u17] && r16[u17][n27] && (o21 = r16[u17][n27]);
      o21 !== this.state.group && (this.setState({
        group: o21
      }), this.props.onGroupScroll && this.props.onGroupScroll.call(void 0, { group: o21 }));
    }, this.handleItemClick = (e32, t25) => {
      this.navigationIndex = e32, this.base.handleItemClick(e32, t25), this._valueDuringOnChange = void 0;
    }, this.handleBlur = (e32) => {
      if (this.state.focused && !this._skipBlur) {
        const t25 = this.base.initState(), { textField: i24 } = this.props, n27 = O4(this.props), r16 = this.getFocusedIndex(), d10 = !(r16 === -1) && this.getCurrentValueDisabledStatus(i24, n27, r16);
        t25.data.focused = false, t25.events.push({ type: "onBlur" }), t25.syntheticEvent = e32, i24 && d10 && this.clearValueOnBlur(e32), this.applyValueOnRejectSuggestions(e32.currentTarget.value, t25);
      }
    }, this.onInputClick = (e32) => {
      const t25 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, i24 = this.props.adaptiveFilter !== void 0 ? this.props.adaptiveFilter : this.state.text || null;
      if (!t25 && this.mobileMode) {
        const n27 = this.base.initState();
        n27.syntheticEvent = e32, this.base.togglePopup(n27), this.base.filterChanged(i24, n27), this.applyState(n27);
      }
    }, this.onInputKeyDown = (e32) => {
      const { skipDisabledItems: t25, textField: i24, dataItemKey: n27, groupField: r16 } = this.props, a37 = O4(this.props), d10 = this.value, l16 = Math.max(
        0,
        a37.findIndex((h16) => p13(h16, d10, n27))
      ), o21 = e32.keyCode, u17 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, p18 = this.base.initState();
      if (p18.syntheticEvent = e32, !e32.altKey && (o21 === e2.up || o21 === e2.down)) {
        if (e32.preventDefault(), r16 !== "" && i24)
          if (!this.props.skipDisabledItems && u17)
            this.onNavigate(p18, o21);
          else {
            let h16 = 0;
            if (o21 === e2.down || o21 === e2.right) {
              const g9 = a37.slice(l16 + 1 < a37.length ? l16 + 1 : l16).find((f13) => !f13.disabled && f13[i24]);
              h16 = g9 && a37.findIndex((f13) => f13[i24] === g9[i24]);
            } else if (o21 === e2.up || o21 === e2.left) {
              let g9;
              if (l16 === 0)
                g9 = a37, h16 = a37.findIndex((f13) => !f13.disabled && f13[i24]);
              else {
                g9 = a37.slice(0, l16);
                let f13 = g9.pop();
                for (; f13 && f13.disabled; )
                  f13 = g9.pop();
                h16 = f13 && a37.findIndex((E8) => E8[i24] === f13[i24]);
              }
            }
            if (h16 !== void 0) {
              const g9 = h16 - l16;
              this.onNavigate(p18, o21, g9);
            } else
              h16 === void 0 && a37.findIndex((g9) => g9[i24] === d10[i24]) === a37.length - 1 && this.onNavigate(p18, o21);
          }
        else if (!this.props.skipDisabledItems && u17)
          this.onNavigate(p18, o21);
        else {
          let h16 = null;
          if (o21 === e2.down || o21 === e2.right)
            h16 = a37.slice(l16 + 1).find((g9) => !g9.disabled);
          else if (o21 === e2.up || o21 === e2.left) {
            const g9 = a37.slice(0, l16);
            for (h16 = g9.pop(); h16 && h16.disabled; )
              h16 = g9.pop();
          }
          if (h16) {
            const g9 = h16.id - l16 - 1;
            this.onNavigate(p18, o21, g9);
          } else
            this.onNavigate(p18, o21);
        }
        this.applyState(p18);
      }
      const y11 = () => {
        e32.preventDefault(), this.base.togglePopup(p18), this.applyState(p18);
      }, b8 = this.getFocusedIndex(), x8 = b8 === -1, m11 = !x8 && this.getCurrentValueDisabledStatus(i24, a37, b8);
      u17 ? o21 === e2.pageUp ? (e32.preventDefault(), this.base.scrollPopupByPageSize(-1)) : o21 === e2.pageDown ? (e32.preventDefault(), this.base.scrollPopupByPageSize(1)) : e32.altKey && o21 === e2.up ? y11() : o21 === e2.enter ? (e32.preventDefault(), (i24 && !x8 && e32.currentTarget.value ? a37[b8][i24] : void 0) ? !t25 && i24 && m11 ? this.clearValueOnEnterOrEsc(e32) : m11 || this.applyValueOnEnter(e32.currentTarget.value, p18) : this.applyValueOnEnter(e32.currentTarget.value, p18)) : o21 === e2.esc && (!t25 && i24 && m11 && this.clearValueOnEnterOrEsc(e32), this.applyValueOnRejectSuggestions(e32.currentTarget.value, p18)) : !u17 && o21 === e2.esc ? this.clearValueOnEnterOrEsc(e32) : e32.altKey && o21 === e2.down && y11();
    }, this.inputOnChange = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32;
      const i24 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, n27 = e32.currentTarget, r16 = n27.value;
      if (this.props.suggest) {
        const a37 = n27.selectionEnd === r16.length;
        let d10 = this.props.filter !== void 0 ? this.props.filter : this.state.text;
        l12(d10) || (d10 = i18(this.value, this.props.textField) || "");
        const l16 = d10 && d10 === r16, o21 = d10 && d10.length > r16.length;
        l16 || o21 || !a37 ? this._suggested = "" : this.suggestValue(r16);
      }
      this.props.filter === void 0 && (t25.data.text = r16), this.state.focusedItem !== void 0 && (t25.data.focusedItem = void 0), i24 || this.base.togglePopup(t25), this.base.filterChanged(r16, t25), this.applyState(t25), this.setState({ group: void 0 });
    }, this.clearButtonClick = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32, e32.stopPropagation(), this.clearValue();
    }, this.clearValueOnEnterOrEsc = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32, e32.stopPropagation(), this.clearValue();
    }, this.clearValueOnBlur = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32, e32.stopPropagation(), this.clearValue();
    }, this.clearValueOnToggleBtnClick = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32, e32.stopPropagation(), this.clearValue();
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || ke2
      );
    }, this.showLicenseWatermark = !h(e24, { component: "ComboBox" });
  }
  get _inputId() {
    return this.props.id;
  }
  get document() {
    if (e)
      return this.element && this.element.ownerDocument || document;
  }
  /** @hidden */
  get element() {
    return this._element;
  }
  /**
   * The mobile mode of the ComboBox.
   */
  get mobileMode() {
    var e32;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((e32 = this.props._adaptiveMode) == null ? void 0 : e32.medium) && this.props.adaptive);
  }
  /**
   * The value of the ComboBox.
   */
  get value() {
    if (this._valueDuringOnChange !== void 0)
      return this._valueDuringOnChange;
    if (this.props.value !== void 0)
      return this.props.value;
    if (this.state.value !== void 0)
      return this.state.value;
    if (this.props.defaultValue !== void 0)
      return this.props.defaultValue;
  }
  /**
   * The index of the selected item.
   */
  get index() {
    const { dataItemKey: s26 } = this.props, e32 = O4(this.props), t25 = this.value;
    return e32.findIndex((i24) => p13(i24, t25, s26));
  }
  /**
   * Gets the `name` property of the ComboBox.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the component is set.
   */
  get validity() {
    const s26 = this.props.validationMessage !== void 0, e32 = !this.required || this.value !== null && this.value !== "" && this.value !== void 0, t25 = this.props.valid !== void 0 ? this.props.valid : e32;
    return {
      customError: s26,
      valid: t25,
      valueMissing: this.value === null
    };
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : F6.defaultProps.validityStyles;
  }
  /** @hidden */
  get required() {
    return this.props.required !== void 0 ? this.props.required : F6.defaultProps.required;
  }
  /** @hidden */
  componentDidUpdate(s26, e32) {
    var y11;
    const { dataItemKey: t25, virtual: i24, groupField: n27 = "", textField: r16 } = this.props, a37 = O4(this.props), d10 = s26.virtual ? s26.virtual.total : 0, l16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, o21 = s26.opened !== void 0 ? s26.opened : e32.opened;
    s26.data !== a37 && this.checkForDuplicatePlainTextRecords();
    const u17 = !o21 && l16, p18 = this.value;
    if (this._valueOnDidUpdate = p18, this.base.didUpdate(), i24 && i24.total !== d10)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      const b8 = s26.value !== void 0 ? s26.value : e32.value;
      let x8 = this.hasDuplicates ? this.navigationIndex || 0 : a37.findIndex((h16) => p13(h16, p18, t25));
      this.props.groupMode === "modern" && r16 && p18 && (x8 = (y11 = this.base.getGroupedDataModernMode(a37, n27)) == null ? void 0 : y11.map((h16) => h16[r16]).indexOf(p18[r16]));
      const m11 = !p13(b8, p18, t25);
      u17 && i24 ? this.base.scrollToVirtualItem(i24, x8) : u17 && !i24 ? (this.onPopupOpened(), a37 && a37.length !== 0 && this.base.resetGroupStickyHeader(a37[0][n27], this), this.base.scrollToItem(x8)) : (this.hasDuplicates || l16 && o21 && p18 && m11) && this.base.scrollToItem(x8);
    }
    u17 && this._input && this._input.focus(), this.setValidity();
  }
  /** @hidden */
  componentDidMount() {
    var s26;
    this.observerResize = e && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (s26 = this.document) != null && s26.body && this.observerResize && this.observerResize.observe(this.document.body), this.checkForDuplicatePlainTextRecords();
  }
  /** @hidden */
  componentWillUnmount() {
    var s26;
    (s26 = this.document) != null && s26.body && this.observerResize && this.observerResize.disconnect();
  }
  /** @hidden */
  render() {
    const s26 = s(this).toLanguageString(
      r10,
      s21[r10]
    ), e32 = s(this).toLanguageString(
      n21,
      s21[n21]
    ), {
      dir: t25,
      disabled: i24,
      clearButton: n27 = F6.defaultProps.clearButton,
      label: r16,
      textField: a37,
      className: d10,
      style: l16,
      loading: o21,
      iconClassName: u17,
      virtual: p18,
      size: y11,
      rounded: b8,
      fillMode: x8,
      opened: m11 = this.state.opened,
      placeholder: h16,
      svgIcon: g9,
      unstyled: f13
    } = this.props, E8 = !this.validityStyles || this.validity.valid, O6 = this.props.filter !== void 0 ? this.props.filter : this.state.text, J3 = i18(this.value, a37), T7 = l12(O6) ? O6 : J3, Q3 = n27 && (!!T7 || l12(this.value)), V3 = this.base.vs, A13 = this.props.id || this._inputId, L8 = this.mobileMode, _4 = f13 && f13.uComboBox;
    V3.enabled = p18 !== void 0, p18 !== void 0 && (V3.skip = p18.skip, V3.total = p18.total, V3.pageSize = p18.pageSize);
    const [X, Z2] = m9(this.props.prefix || c11.Fragment), [ee4, te5] = m9(this.props.suffix || c11.Fragment), R5 = c11.createElement(c11.Fragment, null, c11.createElement(
      "span",
      {
        className: n2(
          K.wrapper({
            c: _4,
            size: y11,
            rounded: b8,
            fillMode: x8,
            disabled: i24,
            invalid: !E8,
            loading: o21,
            required: this.required
          }),
          d10
        ),
        ref: this.componentRef,
        style: r16 ? { ...l16, width: void 0 } : l16,
        dir: t25
      },
      this.props.prefix && c11.createElement(X, { ...Z2 }),
      this.renderSearchBar(T7 || "", A13, h16),
      Q3 && !o21 && c11.createElement(b6, { onClick: this.clearButtonClick, key: "clearbutton" }),
      o21 && c11.createElement(
        v3,
        {
          className: n2(K.loadingIcon({ c: _4 })),
          name: "loading",
          key: "loading"
        }
      ),
      this.props.suffix && c11.createElement(ee4, { ...te5 }),
      c11.createElement(
        M,
        {
          tabIndex: -1,
          type: "button",
          "aria-label": m11 ? e32 : s26,
          icon: u17 ? void 0 : "caret-alt-down",
          svgIcon: g9 || caretAltDownIcon,
          iconClass: u17,
          size: y11,
          fillMode: x8,
          rounded: null,
          themeColor: "base",
          className: n2(K.inputButton({ c: _4 })),
          onClick: this.toggleBtnClick,
          onMouseDown: (se5) => se5.preventDefault()
        }
      ),
      !L8 && this.renderListContainer()
    ), L8 && this.renderAdaptiveListContainer());
    return r16 ? c11.createElement(
      I2,
      {
        label: r16,
        editorId: A13,
        editorValue: T7,
        editorValid: E8,
        editorDisabled: i24,
        style: { width: l16 ? l16.width : void 0 },
        children: R5,
        unstyled: f13
      }
    ) : R5;
  }
  /** @hidden */
  onNavigate(s26, e32, t25) {
    const { virtual: i24 = { skip: 0 } } = this.props, n27 = O4(this.props), r16 = this.props.filter ? this.props.filter : this.state.text;
    let a37 = -1, d10;
    const l16 = this.base.vs, o21 = this.value;
    this._suggested = "";
    const u17 = this.hasDuplicates && this.duplicates.indexOf(o21) !== -1;
    if (a37 = this.getFocusedIndex(u17), a37 !== -1 && !l12(o21))
      this.handleItemSelect(a37, s26);
    else if (r16 === "")
      this.handleItemSelect(0, s26);
    else {
      const p18 = i24.skip + a37;
      d10 = this.base.navigation.navigate({
        keyCode: e32,
        current: p18,
        max: (l16.enabled ? l16.total : n27.length) - 1,
        min: 0,
        skipItems: t25 || void 0
      }), d10 !== void 0 && this.handleItemSelect(d10, s26);
    }
    this.navigationIndex = d10;
  }
  getCurrentValueDisabledStatus(s26, e32, t25) {
    return s26 && e32 && e32[t25] && e32[t25].disabled;
  }
  applyValueOnEnter(s26, e32) {
    const { textField: t25, allowCustom: i24 } = this.props, n27 = O4(this.props), r16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, d10 = i18(this.value, t25) === s26 ? this.index : T5(n27, s26, t25), l16 = d10 !== -1;
    let o21;
    if (this._suggested = "", l16)
      o21 = n27[d10];
    else if (i24)
      o21 = t25 !== void 0 ? { [t25]: s26 } : s26;
    else
      return this.selectFocusedItem(s26, e32);
    this.triggerOnChange(o21, e32), r16 && this.base.togglePopup(e32), this.props.filter === void 0 && this.state.text !== void 0 && (e32.data.text = void 0), this.applyState(e32);
  }
  applyValueOnRejectSuggestions(s26, e32) {
    const { textField: t25, allowCustom: i24 } = this.props, n27 = O4(this.props), r16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, a37 = i18(this.value, t25);
    if (this._suggested = "", s26 === a37 || s26 === "" && !l12(a37))
      return this.closeOpenedApplyStateNonMobileMode(e32, r16), this.applyState(e32);
    const d10 = T5(n27, s26, t25, true), l16 = d10 !== -1;
    let o21 = null;
    l16 ? o21 = n27[d10] : i24 && (o21 = s26 ? t25 ? { [t25]: s26 } : s26 : null), this.triggerOnChange(o21, e32), this.state.text !== void 0 && (e32.data.text = void 0, this.base.filterChanged("", e32)), this.closeOpenedApplyStateNonMobileMode(e32, r16), this.applyState(e32);
  }
  selectFocusedItem(s26, e32) {
    const t25 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { textField: i24, virtual: n27 = { skip: 0 }, focusedItemIndex: r16 = h12 } = this.props, a37 = O4(this.props), d10 = n27.skip, l16 = s26 === "" && d10 === 0 ? 0 : r16(a37, s26, i24);
    return l16 !== -1 ? this.handleItemSelect(l16 + d10, e32) : (this.triggerOnChange(null, e32), this.state.text !== void 0 && (e32.data.text = void 0)), t25 && this.base.togglePopup(e32), this.applyState(e32);
  }
  renderAdaptiveListContainer() {
    const { windowWidth: s26 = 0 } = this.state, {
      header: e32,
      footer: t25,
      size: i24,
      groupField: n27,
      groupMode: r16,
      list: a37,
      virtual: d10,
      adaptiveTitle: l16,
      groupStickyHeaderItemRender: o21,
      unstyled: u17,
      _adaptiveMode: p18
    } = this.props, y11 = O4(this.props), b8 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, x8 = this.base.getAdaptiveAnimation(), m11 = u17 && u17.uComboBox, h16 = u17 && u17.uDropDownsActionSheet;
    let { group: g9 } = this.state;
    g9 === void 0 && n27 !== void 0 && (g9 = i18(y11[0], n27));
    const f13 = {
      navigatable: false,
      navigatableElements: [],
      expand: b8,
      animation: x8,
      onClose: (E8) => this.toggleBtnClick(E8),
      className: n2(
        E2.wrapper({
          c: h16
        }),
        "k-adaptive-actionsheet"
      ),
      animationStyles: s26 && p18 && s26 <= p18.small ? { top: 0, width: "100%", height: "100%" } : void 0,
      position: s26 && p18 && s26 <= p18.small ? "fullscreen" : void 0
    };
    return c11.createElement(K2, { ...f13 }, c11.createElement(e5, null, c11.createElement("div", { className: n2(E2.titleBar({ c: h16 })) }, c11.createElement("div", { className: n2(E2.title({ c: h16 })) }, c11.createElement("div", { className: n2(E2.header({ c: h16 })) }, l16), c11.createElement("div", { className: n2(E2.subtitle({ c: h16 })) })), c11.createElement("div", { className: n2(E2.actions({ c: h16 })) }, c11.createElement(
      M,
      {
        tabIndex: 0,
        "aria-label": "Cancel",
        "aria-disabled": "false",
        type: "button",
        fillMode: "flat",
        themeColor: "base",
        size: "large",
        onClick: this.toggleBtnClick,
        icon: "x",
        svgIcon: xIcon
      }
    ))), c11.createElement("div", { className: n2(E2.titleBarGroup({ c: h16 })) }, this.renderMobileListFilter())), c11.createElement(t3, { overflowHidden: true }, c11.createElement(
      "div",
      {
        className: n2(
          K.listContainer({
            c: m11
          })
        )
      },
      c11.createElement(
        "div",
        {
          className: n2(
            K.list({
              c: m11,
              list: a37,
              size: "large",
              tableSize: i24,
              virtual: d10
            })
          )
        },
        e32 && c11.createElement("div", { className: n2(K.listHeader({ c: m11 })) }, e32),
        !a37 && g9 && y11.length !== 0 && c11.createElement(
          u13,
          {
            group: g9,
            groupMode: r16,
            render: o21
          }
        ),
        this.renderList(),
        t25 && c11.createElement(
          "div",
          {
            className: n2(
              K.listFooter({ c: m11 }),
              this.props.footerClassName
            )
          },
          t25
        )
      )
    )));
  }
  renderListContainer() {
    const s26 = this.base, {
      dir: e32,
      header: t25,
      footer: i24,
      groupField: n27,
      groupMode: r16,
      size: a37,
      list: d10,
      virtual: l16,
      groupStickyHeaderItemRender: o21,
      unstyled: u17
    } = this.props, p18 = O4(this.props), y11 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, b8 = s26.getPopupSettings(), x8 = b8.width !== void 0 ? b8.width : s26.popupWidth, m11 = u17 && u17.uComboBox;
    let { group: h16 } = this.state;
    return h16 === void 0 && n27 !== void 0 && (h16 = i18(p18[0], n27)), c11.createElement(
      a5,
      {
        width: x8,
        popupSettings: {
          ...b8,
          anchor: b8.anchor || this.element,
          show: y11,
          popupClass: n2(
            b8.popupClass,
            K.listContainer({
              c: m11,
              popup: true
            })
          )
        },
        dir: e32 !== void 0 ? e32 : this.base.dirCalculated,
        itemsCount: [p18.length]
      },
      c11.createElement(
        "div",
        {
          className: n2(
            K.list({
              c: m11,
              list: d10,
              size: a37,
              tableSize: a37,
              virtual: l16
            })
          )
        },
        t25 && c11.createElement("div", { className: n2(K.listHeader({ c: m11 })) }, t25),
        !d10 && h16 && p18.length !== 0 && c11.createElement(u13, { group: h16, groupMode: r16, render: o21 }),
        this.renderList(),
        i24 && c11.createElement(
          "div",
          {
            className: n2(
              K.listFooter({ c: m11 }),
              this.props.footerClassName
            )
          },
          i24
        )
      ),
      this.showLicenseWatermark && c11.createElement(l, null)
    );
  }
  renderList() {
    const s26 = this.base, {
      textField: e32,
      dataItemKey: t25,
      listNoDataRender: i24,
      itemRender: n27,
      groupHeaderItemRender: r16,
      virtual: a37 = { skip: 0, total: void 0 },
      unstyled: d10
    } = this.props, l16 = O4(this.props), o21 = s26.getPopupSettings(), u17 = s26.vs, p18 = a37.skip, y11 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, b8 = `translateY(${u17.translate}px)`, x8 = y11 ? this.getFocusedIndex(this.hasDuplicates) : void 0, m11 = this.props.filter !== void 0 ? this.props.filter : this.state.text, h16 = i18(this.value, e32), g9 = l12(m11) && m11 !== h16 ? null : this.value, f13 = this.props.list || le3, E8 = d10 && d10.uComboBox;
    return c11.createElement(
      f13,
      {
        id: s26.listBoxId,
        virtual: !!a37,
        show: y11,
        data: l16,
        focusedIndex: x8,
        value: g9,
        textField: e32,
        valueField: t25,
        groupField: this.props.groupField,
        groupMode: this.props.groupMode,
        isMultiColumn: this.props.isMultiColumn,
        optionsGuid: s26.guid,
        hasDuplicates: this.hasDuplicates,
        listRef: (O6) => {
          u17.list = this.base.list = O6, this.itemHeight = 0;
        },
        wrapperStyle: this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth > this.props._adaptiveMode.medium ? { maxHeight: o21.height } : {},
        wrapperCssClass: n2(
          K.listContent({
            c: E8,
            virtual: a37
          })
        ),
        listStyle: u17.enabled ? { transform: b8 } : void 0,
        key: "listkey",
        skip: p18,
        onClick: this.handleItemClick,
        itemRender: n27,
        groupHeaderItemRender: r16,
        noDataRender: i24,
        onMouseDown: (O6) => O6.preventDefault(),
        onScroll: this.onScroll,
        wrapperRef: u17.scrollerRef,
        scroller: this.base.renderScrollElement(),
        ariaSetSize: a37.total
      }
    );
  }
  renderSearchBar(s26, e32, t25) {
    const {
      tabIndex: i24,
      disabled: n27,
      title: r16,
      ariaLabelledBy: a37,
      ariaDescribedBy: d10,
      dataItemKey: l16,
      virtual: o21 = { skip: 0 },
      accessKey: u17,
      unstyled: p18,
      inputAttributes: y11
    } = this.props, b8 = O4(this.props), x8 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, m11 = this.value, h16 = Math.max(
      0,
      b8.findIndex((g9) => p13(g9, m11, l16))
    );
    return this._suggested && !p13(this._valueOnDidUpdate, m11, l16) && (this._suggested = ""), c11.createElement(
      y6,
      {
        id: e32,
        readOnly: x8 && this.mobileMode,
        placeholder: t25,
        tabIndex: i24,
        title: r16,
        value: s26 + this._suggested,
        suggestedText: this._suggested,
        ref: (g9) => this._input = g9 && g9.input,
        onClick: this.onInputClick,
        onKeyDown: this.onInputKeyDown,
        onChange: this.inputOnChange,
        onFocus: this.base.handleFocus,
        onBlur: this.handleBlur,
        disabled: n27,
        expanded: x8,
        owns: this.base.listBoxId,
        activedescendant: `option-${this.base.guid}-${h16 + o21.skip}`,
        role: "combobox",
        ariaLabelledBy: a37,
        ariaLabel: this.props.ariaLabel,
        ariaDescribedBy: d10,
        ariaRequired: this.required,
        render: this.props.valueRender,
        ariaControls: this.base.listBoxId,
        unstyled: p18,
        inputAttributes: y11
      }
    );
  }
  clearValue() {
    const s26 = this.base.initState();
    this._suggested = "", this.navigationIndex = void 0, this.base.filterChanged("", s26), this.props.filter === void 0 && this.state.text !== void 0 && (s26.data.text = void 0), this.triggerOnChange(null, s26);
    const e32 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, t25 = this.mobileMode;
    e32 && !t25 && this.base.togglePopup(s26), this.applyState(s26);
  }
  triggerOnChange(s26, e32) {
    const t25 = this.value;
    !this.hasDuplicates && (!l12(t25) && !l12(s26) || p13(t25, s26, this.props.dataItemKey)) || (this.props.value === void 0 && (e32.data.value = s26), this._valueDuringOnChange = s26, e32.events.push({ type: "onChange" }));
  }
  getFocusedIndex(s26) {
    const e32 = this.value, {
      textField: t25,
      dataItemKey: i24,
      virtual: n27 = { skip: 0 },
      focusedItemIndex: r16 = h12,
      skipDisabledItems: a37
    } = this.props, d10 = O4(this.props), l16 = this.props.filter ? this.props.filter : this.state.text;
    return s26 && this.navigationIndex !== void 0 ? this.navigationIndex : l12(e32) && l16 === void 0 ? d10.findIndex((o21) => p13(o21, e32, i24)) : l16 ? r16(d10, l16, t25) : a37 && t25 && !l16 && n27.skip === 0 ? d10.findIndex((o21) => !o21.disabled && o21[t25]) : n27.skip === 0 ? 0 : -1;
  }
  suggestValue(s26) {
    const { data: e32, textField: t25 } = this.props;
    this._suggested = H2(s26, e32, t25);
  }
  applyState(s26) {
    this.base.applyState(s26), this._valueDuringOnChange = void 0;
  }
  calculateMedia(s26) {
    for (const e32 of s26)
      this.setState({ windowWidth: e32.target.clientWidth });
  }
};
F5.displayName = "ComboBox", F5.propTypes = {
  ...f10.propTypes,
  size: import_prop_types26.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types26.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types26.default.oneOf([null, "solid", "flat", "outline"]),
  dataItemKey: import_prop_types26.default.string,
  groupField: import_prop_types26.default.string,
  groupMode: import_prop_types26.default.oneOf([void 0, "classic", "modern"]),
  isMultiColumn: import_prop_types26.default.bool,
  suggest: import_prop_types26.default.bool,
  placeholder: import_prop_types26.default.string,
  title: import_prop_types26.default.string,
  allowCustom: import_prop_types26.default.bool,
  clearButton: import_prop_types26.default.bool,
  iconClassName: import_prop_types26.default.string,
  svgIcon: r,
  validationMessage: import_prop_types26.default.string,
  required: import_prop_types26.default.bool,
  id: import_prop_types26.default.string,
  ariaLabelledBy: import_prop_types26.default.string,
  ariaLabel: import_prop_types26.default.string,
  ariaDescribedBy: import_prop_types26.default.string,
  list: import_prop_types26.default.any,
  valueRender: import_prop_types26.default.func,
  skipDisabledItems: import_prop_types26.default.bool,
  inputAttributes: import_prop_types26.default.object
}, F5.defaultProps = {
  ...f10.defaultProps,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  allowCustom: false,
  clearButton: true,
  required: false,
  groupMode: "modern",
  isMultiColumn: false,
  skipDisabledItems: true,
  prefix: void 0,
  suffix: void 0
};
var P7 = F5;
var Ee3 = a();
var Me = a2(
  x(
    Ee3,
    a3(
      p2(P7)
    )
  )
);
Me.displayName = "KendoReactComboBox";

// node_modules/@progress/kendo-react-dropdowns/AutoComplete/AutoComplete.mjs
var c12 = __toESM(require_react(), 1);
var import_prop_types27 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/AdaptiveMode.mjs
var t19 = __toESM(require_react(), 1);
var I7 = (i24) => {
  const {
    footer: e32,
    windowWidth: n27 = 0,
    mobileFilter: r16,
    children: s26,
    navigatable: c16,
    navigatableElements: m11,
    expand: d10,
    animation: p18,
    title: b8,
    subTitle: f13,
    onClose: l16
  } = i24, a37 = n(), x8 = {
    navigatable: c16 || false,
    navigatableElements: m11 || [],
    expand: d10,
    animation: p18 !== false,
    actions: t19.createElement(
      M,
      {
        tabIndex: 0,
        "aria-label": "Cancel",
        "aria-disabled": "false",
        type: "button",
        fillMode: "flat",
        icon: "x",
        svgIcon: xIcon,
        onClick: l16
      }
    ),
    filter: r16,
    onClose: l16,
    animationStyles: a37 && n27 <= a37.small ? { top: 0, width: "100%", height: "100%" } : void 0,
    title: b8,
    subTitle: f13,
    className: "k-adaptive-actionsheet",
    position: a37 && n27 <= a37.small ? "fullscreen" : void 0
  };
  return t19.createElement(K2, { ...x8 }, s26, e32 && t19.createElement(e6, { className: "k-actions k-actions-stretched" }, t19.createElement(
    M,
    {
      size: "large",
      tabIndex: 0,
      "aria-label": e32.cancelText,
      "aria-disabled": "false",
      type: "button",
      onClick: e32.onCancel
    },
    e32.cancelText
  ), t19.createElement(
    M,
    {
      tabIndex: 0,
      themeColor: "primary",
      size: "large",
      "aria-label": e32.applyText,
      "aria-disabled": "false",
      type: "button",
      onClick: e32.onApply
    },
    e32.applyText
  )));
};

// node_modules/@progress/kendo-react-dropdowns/AutoComplete/AutoComplete.mjs
var Z = "Please enter a valid value!";
var { sizeMap: O5, roundedMap: ee3 } = a4;
var I8 = class I9 extends c12.Component {
  constructor() {
    super(...arguments), this.state = {}, this.base = new f10(this), this._element = null, this._suggested = "", this._input = null, this._adaptiveInput = null, this._skipFocusEvent = false, this._isScrolling = false, this.itemHeight = 0, this.focus = () => {
      this._input && this._input.focus();
    }, this.handleItemSelect = (e32, t25) => {
      const s26 = O4(this.props), n27 = i18(s26[e32], this.props.textField);
      this.state.text && !this.mobileMode && (this.state.text && (t25.data.text = ""), this.base.filterChanged("", t25)), this._adaptiveInput && this._adaptiveInput.blur(), this.triggerOnChange(n27, t25);
    }, this.itemFocus = (e32, t25) => {
      const { textField: s26 } = this.props, i24 = O4(this.props)[e32];
      p13(this.state.focusedItem, i24, s26) || (t25.data.focusedItem = i24);
    }, this.togglePopup = (e32) => {
      this.base.togglePopup(e32);
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || Z
      );
    }, this.renderAdaptiveListContainer = () => {
      const { adaptiveTitle: e32 } = this.props, { windowWidth: t25 = 0 } = this.state, s26 = c12.createElement(
        u12,
        {
          value: this.value,
          ref: (i24) => this._adaptiveInput = i24 && i24.element,
          onChange: this.onChangeHandler,
          onKeyDown: this.onInputKeyDown,
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode
        }
      ), n27 = {
        title: e32,
        expand: this.opened,
        onClose: (i24) => this.onCancel(i24),
        windowWidth: t25,
        mobileFilter: s26
      };
      return c12.createElement(I7, { ...n27 }, c12.createElement(t3, { overflowHidden: true }, c12.createElement("div", { className: "k-list-container" }, this.listContainerContent())));
    }, this.onCancel = (e32) => {
      const t25 = this.base.initState();
      t25.syntheticEvent = e32, e32.stopPropagation(), this.opened && this.base.togglePopup(t25), t25.events.push({ type: "onCancel" });
      const s26 = this.state.text;
      l12(s26) && s26 !== "" && this.base.filterChanged("", t25), this.state.text && (t25.data.text = ""), this.applyState(t25);
    }, this.listContainerContent = () => {
      const { header: e32, footer: t25, size: s26, groupStickyHeaderItemRender: n27, groupField: i24, list: a37 } = this.props, d10 = O4(this.props);
      let { group: o21 } = this.state;
      return o21 === void 0 && i24 !== void 0 && (o21 = i18(d10[0], i24)), c12.createElement(c12.Fragment, null, e32 && c12.createElement("div", { className: "k-list-header" }, e32), c12.createElement(
        "div",
        {
          className: n2("k-list", {
            [`k-list-${this.mobileMode ? "lg" : O5[s26] || s26}`]: s26
          })
        },
        !a37 && o21 && d10.length !== 0 && c12.createElement(u13, { group: o21, groupMode: "modern", render: n27 }),
        this.renderList()
      ), t25 && c12.createElement("div", { className: "k-list-footer" }, t25));
    }, this.onScroll = (e32) => {
      this._isScrolling = true;
      const { list: t25 } = this.base, { groupField: s26 } = this.props;
      let n27 = O4(this.props);
      if (!s26 || !n27.length)
        return;
      const i24 = this.itemHeight || (t25 ? t25.children[0].offsetHeight : 0), d10 = e32.target.scrollTop;
      s26 && (n27 = this.base.getGroupedDataModernMode(n27, s26));
      let o21 = n27[0][s26];
      for (let r16 = 1; r16 < n27.length && !(i24 * r16 > d10); r16++)
        n27[r16] && n27[r16][s26] && (o21 = n27[r16][s26]);
      o21 !== this.state.group && this.setState({
        group: o21
      });
    }, this.handleItemClick = (e32, t25) => {
      this.base.handleItemClick(e32, t25), this._valueDuringOnChange = void 0;
    }, this.onChangeHandler = (e32) => {
      const s26 = this.base.initState(), n27 = this.mobileMode ? e32.target.element : e32.currentTarget, i24 = n27.value, a37 = n27.selectionEnd === i24.length;
      s26.syntheticEvent = e32;
      const d10 = this._suggested, o21 = this.value, r16 = o21 && o21.substring(0, o21.length - d10.length), l16 = r16 && r16 === i24, h16 = r16 && r16.length > i24.length, { suggest: v14 } = this.props, p18 = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      if (v14 !== void 0 && v14 !== false) {
        l16 || h16 || !a37 ? this._suggested = "" : this.suggestValue(i24);
        const u17 = i24 + this._suggested, f13 = { userInput: i24, value: this._suggested };
        this.triggerOnChange(u17, s26, { suggestion: f13 });
      } else
        this._suggested = "", this.triggerOnChange(i24, s26);
      (!p18 && i24 || p18 && !i24) && this.togglePopup(s26), s26.data.focusedItem = void 0, this.applyState(s26), this.setState({ group: void 0 });
    }, this.clearButtonClick = (e32) => {
      const s26 = this.base.initState(), n27 = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      s26.syntheticEvent = e32;
      const i24 = "";
      this._suggested = "", this.triggerOnChange(i24, s26), this.state.focusedItem !== void 0 && (s26.data.focusedItem = void 0), n27 && this.togglePopup(s26), this.applyState(s26);
    }, this.onInputKeyDown = (e32) => {
      const { skipDisabledItems: t25, groupField: s26, textField: n27 } = this.props, i24 = O4(this.props);
      this._isScrolling && (this._isScrolling = false);
      const a37 = this.focusedIndex(), d10 = i24[a37], o21 = e32.keyCode, r16 = e32.altKey, l16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, h16 = this.base.initState();
      h16.syntheticEvent = e32;
      const v14 = () => {
        l16 && e32.preventDefault();
      };
      if (r16 && o21 === e2.down)
        this.setState({
          opened: true
        });
      else if (r16 && o21 === e2.up)
        this.setState({
          opened: false
        });
      else if (l16 && o21 === e2.pageUp)
        v14(), this.base.scrollPopupByPageSize(-1);
      else if (l16 && o21 === e2.pageDown)
        v14(), this.base.scrollPopupByPageSize(1);
      else if (l16 && (o21 === e2.enter || o21 === e2.esc))
        v14(), t25 === false && d10 && d10.disabled ? (l16 && this.togglePopup(h16), this.applyState(h16)) : this.applyInputValue(e32.currentTarget.value, h16, e32.keyCode);
      else if (!l16 && o21 === e2.esc) {
        const p18 = "";
        this._suggested = "", this.triggerOnChange(p18, h16), this.state.focusedItem !== void 0 && (h16.data.focusedItem = void 0), this.applyState(h16);
      } else if (o21 === e2.up || o21 === e2.down) {
        if (s26 !== "" && n27)
          if (!this.props.skipDisabledItems && l16)
            this.onNavigate(h16, o21);
          else {
            let p18 = 0;
            if (o21 === e2.down || o21 === e2.right) {
              const u17 = i24.slice(a37 + 1).find((f13) => !f13.disabled && f13[n27]);
              p18 = u17 && i24.findIndex((f13) => f13[n27] === u17[n27]);
            } else if (o21 === e2.up || o21 === e2.left) {
              let u17;
              if (a37 === -1)
                u17 = i24, p18 = i24.findIndex((f13) => !f13.disabled && f13[n27]);
              else {
                u17 = i24.slice(0, a37);
                let f13 = u17.pop();
                for (; f13 && f13.disabled; )
                  f13 = u17.pop();
                p18 = f13 && i24.findIndex((x8) => x8[n27] === f13[n27]);
              }
            }
            if (p18 !== void 0) {
              const u17 = p18 - a37;
              this.onNavigate(h16, o21, u17);
            } else
              p18 === void 0 && i24.findIndex((u17) => u17[n27]) === i24.length - 1 && this.onNavigate(h16, o21);
          }
        else if (!this.props.skipDisabledItems && l16)
          this.onNavigate(h16, o21);
        else {
          let p18 = null;
          if (o21 === e2.down || o21 === e2.right)
            p18 = i24.slice(a37 + 1).find((u17) => !u17.disabled);
          else if (o21 === e2.up || o21 === e2.left) {
            const u17 = i24.slice(0, a37);
            for (p18 = u17.pop(); p18 && p18.disabled; )
              p18 = u17.pop();
          }
          if (p18) {
            const u17 = p18.id - a37 - 1;
            this.onNavigate(h16, o21, u17);
          } else
            this.onNavigate(h16, o21);
        }
        this.applyState(h16), v14();
      }
    }, this.handleFocus = (e32) => {
      this._skipFocusEvent || this.base.handleFocus(e32);
    }, this.handleBlur = (e32) => {
      const t25 = this.base.initState();
      !this.state.focused || this._skipFocusEvent || (t25.syntheticEvent = e32, t25.data.focused = false, t25.events.push({ type: "onBlur" }), this.opened && !this.mobileMode && (this.state.opened && (t25.data.opened = false), t25.events.push({ type: "onClose" })), this.applyState(t25));
    }, this.handleWrapperClick = (e32) => {
      const t25 = this._input;
      !this.opened && t25 && this.focusElement(t25);
      const s26 = this.base.initState();
      s26.syntheticEvent = e32, !this.state.focused && !this.mobileMode && (s26.events.push({ type: "onFocus" }), s26.data.focused = true), this.mobileMode && window.setTimeout(() => this._adaptiveInput && this._adaptiveInput.focus(), 300), this.base.togglePopup(s26), this.applyState(s26);
    };
  }
  get _inputId() {
    return this.props.id + "-accessibility-id";
  }
  get document() {
    if (e)
      return this.element && this.element.ownerDocument || document;
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  /**
   * The value of the AutoComplete.
   */
  get value() {
    return this._valueDuringOnChange !== void 0 ? this._valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value !== void 0 ? this.state.value : this.props.defaultValue !== void 0 ? this.props.defaultValue : "";
  }
  /**
   * Gets the `name` property of the AutoComplete.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the AutoComplete is set.
   */
  get validity() {
    const e32 = this.props.validationMessage !== void 0, t25 = !this.required || this.value !== "", s26 = this.props.valid !== void 0 ? this.props.valid : t25;
    return {
      customError: e32,
      valid: s26,
      valueMissing: this.value === null
    };
  }
  /** @hidden */
  get opened() {
    return !!(this.props.opened !== void 0 ? this.props.opened : this.state.opened);
  }
  /**
   * The mobile mode of the AutoComplete.
   */
  get mobileMode() {
    var t25;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t25 = this.props._adaptiveMode) == null ? void 0 : t25.medium) && this.props.adaptive);
  }
  /**
   * @hidden
   */
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : I9.defaultProps.validityStyles;
  }
  /**
   * @hidden
   */
  get required() {
    return this.props.required !== void 0 ? this.props.required : I9.defaultProps.required;
  }
  /**
   * @hidden
   */
  componentDidUpdate(e32, t25) {
    var p18;
    const { groupField: s26 = "" } = this.props, n27 = O4(this.props), { data: i24 = [] } = e32, a37 = this.focusedIndex(), d10 = n27[a37], o21 = i24 !== n27, r16 = d10 !== void 0 && t25.focusedItem !== d10, l16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, h16 = e32.opened !== void 0 ? e32.opened : t25.opened, v14 = !h16 && l16;
    if (s26 === "")
      (l16 && (r16 || o21) || v14) && this.base.scrollToItem(a37);
    else if (!this._isScrolling) {
      const u17 = (p18 = this.base.getGroupedDataModernMode(n27, s26)) == null ? void 0 : p18.indexOf(d10);
      v14 && (n27 && n27.length !== 0 && this.base.resetGroupStickyHeader(n27[0][s26], this), this.base.scrollToItem(u17)), l16 && h16 && r16 && this.base.scrollToItem(u17);
    }
    this.setValidity();
  }
  /**
   * @hidden
   */
  componentDidMount() {
    var e32;
    this.observerResize = e && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (e32 = this.document) != null && e32.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /**
   * @hidden
   */
  componentWillUnmount() {
    this.observerResize && this.observerResize.disconnect();
  }
  /**
   * @hidden
   */
  render() {
    const { dir: e32, disabled: t25, label: s26, className: n27, style: i24, loading: a37, suggest: d10, size: o21, rounded: r16, fillMode: l16 } = this.props, h16 = !this.validityStyles || this.validity.valid, v14 = this.base, p18 = this.value, u17 = this.props.clearButton !== false && !a37 && !!p18, f13 = this.props.id || this._inputId, x8 = this.state.focused;
    typeof d10 == "string" && (this._suggested = d10);
    const [P10, B6] = m9(this.props.prefix || c12.Fragment), [T7, V3] = m9(this.props.suffix || c12.Fragment), _4 = c12.createElement(c12.Fragment, null, c12.createElement(
      "span",
      {
        className: n2("k-autocomplete k-input", n27, {
          [`k-input-${O5[o21] || o21}`]: o21,
          [`k-rounded-${ee3[r16] || r16}`]: r16,
          [`k-input-${l16}`]: l16,
          "k-invalid": !h16,
          "k-focus": x8 && !t25,
          "k-loading": a37,
          "k-required": this.required,
          "k-disabled": t25
        }),
        ref: (F8) => {
          this._element = F8, v14.wrapper = F8;
        },
        style: s26 ? { ...i24, width: void 0 } : i24,
        dir: e32,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleWrapperClick
      },
      this.props.prefix && c12.createElement(P10, { ...B6 }),
      this.renderSearchBar(p18 || "", f13),
      a37 && c12.createElement(v3, { className: "k-input-loading-icon", name: "loading" }),
      u17 && !a37 && c12.createElement(b6, { onClick: this.clearButtonClick, key: "clearbutton" }),
      this.props.suffix && c12.createElement(T7, { ...V3 }),
      !this.mobileMode && this.renderListContainer()
    ), this.mobileMode && this.renderAdaptiveListContainer());
    return s26 ? c12.createElement(
      I2,
      {
        label: s26,
        editorId: f13,
        editorValue: p18,
        editorValid: h16,
        editorDisabled: t25,
        style: { width: i24 ? i24.width : void 0 },
        children: _4
      }
    ) : _4;
  }
  /**
   * @hidden
   */
  onNavigate(e32, t25, s26) {
    const n27 = this.value, { textField: i24, focusedItemIndex: a37 } = this.props, d10 = O4(this.props), o21 = this.state.focusedItem !== void 0 ? d10.findIndex((l16) => p13(l16, this.state.focusedItem, i24)) : a37 ? a37(d10, n27, i24) : d10.indexOf(L6(d10, n27, i24)), r16 = this.base.navigation.navigate({
      keyCode: t25,
      current: o21,
      max: d10.length - 1,
      min: 0,
      skipItems: s26 || void 0
    });
    r16 !== void 0 && this.itemFocus(r16, e32), this.applyState(e32);
  }
  /**
   * @hidden
   */
  applyInputValue(e32, t25, s26) {
    const n27 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { textField: i24 } = this.props, a37 = O4(this.props), d10 = this.focusedIndex(), o21 = a37[d10];
    if (this._suggested = "", n27 && s26 === e2.enter && o21 && !o21.disabled) {
      const r16 = i18(a37[this.focusedIndex(e32)], i24);
      this.triggerOnChange(r16, t25);
    }
    n27 && this.togglePopup(t25), this.applyState(t25);
  }
  renderSearchBar(e32, t25) {
    const s26 = this.base, { placeholder: n27, tabIndex: i24, disabled: a37, readonly: d10, inputAttributes: o21 } = this.props, { focused: r16 } = this.state, l16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
    return c12.createElement(
      y6,
      {
        id: t25,
        placeholder: n27,
        tabIndex: i24,
        accessKey: this.props.accessKey,
        value: e32,
        suggestedText: this._suggested,
        focused: r16,
        name: this.props.name,
        ref: (h16) => this._input = h16 && h16.input,
        onKeyDown: this.onInputKeyDown,
        onChange: this.onChangeHandler,
        onFocus: s26.handleFocus,
        onBlur: this.handleBlur,
        disabled: a37,
        readOnly: d10,
        expanded: l16,
        owns: s26.listBoxId,
        activedescendant: "option-" + s26.guid + "-" + this.focusedIndex(),
        role: "combobox",
        ariaLabelledBy: this.props.ariaLabelledBy,
        ariaDescribedBy: this.props.ariaDescribedBy,
        ariaRequired: this.required,
        render: this.props.valueRender,
        inputAttributes: o21
      }
    );
  }
  renderListContainer() {
    const e32 = this.base, { dir: t25, groupField: s26 } = this.props, n27 = O4(this.props), i24 = e32.getPopupSettings(), a37 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, d10 = i24.width !== void 0 ? i24.width : e32.popupWidth;
    let { group: o21 } = this.state;
    return o21 === void 0 && s26 !== void 0 && (o21 = i18(n27[0], s26)), c12.createElement(
      a5,
      {
        width: d10,
        popupSettings: {
          ...i24,
          anchor: i24.anchor || this.element,
          show: a37,
          popupClass: n2(i24.popupClass, "k-list-container", "k-autocomplete-popup")
        },
        dir: t25 !== void 0 ? t25 : this.base.dirCalculated,
        itemsCount: [n27.length]
      },
      this.listContainerContent()
    );
  }
  renderList() {
    const e32 = this.base, t25 = e32.getPopupSettings(), { textField: s26, listNoDataRender: n27, itemRender: i24, groupHeaderItemRender: a37 } = this.props, d10 = O4(this.props), o21 = this.value, r16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
    return c12.createElement(
      le3,
      {
        id: e32.listBoxId,
        show: r16,
        data: d10.slice(),
        focusedIndex: this.focusedIndex(),
        value: o21,
        textField: s26,
        valueField: s26,
        highlightSelected: false,
        optionsGuid: e32.guid,
        groupField: this.props.groupField,
        groupMode: "modern",
        listRef: (l16) => e32.list = l16,
        wrapperStyle: this.mobileMode ? {} : { maxHeight: t25.height },
        wrapperCssClass: "k-list-content",
        onClick: this.handleItemClick,
        itemRender: i24,
        groupHeaderItemRender: a37,
        noDataRender: n27,
        onMouseDown: (l16) => l16.preventDefault(),
        onScroll: this.onScroll
      }
    );
  }
  triggerOnChange(e32, t25, s26) {
    this.value === e32 && !s26 || (t25.data.value = e32, this._valueDuringOnChange = e32, t25.events.push({ type: "onChange", ...s26 || {} }));
  }
  focusElement(e32) {
    this._skipFocusEvent = true, e32.focus(), window.setTimeout(() => this._skipFocusEvent = false, 0);
  }
  applyState(e32) {
    this.base.applyState(e32), this._valueDuringOnChange = void 0;
  }
  suggestValue(e32) {
    if (this._suggested = "", e32) {
      const { textField: t25 } = this.props, s26 = O4(this.props), n27 = s26[h12(s26, e32, t25)];
      if (n27) {
        const i24 = i18(n27, t25);
        e32.toLowerCase() !== i24.toLowerCase() && (this._suggested = i24.substring(e32.length));
      }
    }
  }
  focusedIndex(e32) {
    const { textField: t25, focusedItemIndex: s26, skipDisabledItems: n27 } = this.props, i24 = O4(this.props), a37 = e32 !== void 0 ? e32 : this.value;
    if (this.state.focusedItem !== void 0)
      return i24.findIndex((o21) => p13(o21, this.state.focusedItem, t25));
    if (s26)
      return s26(i24, a37, t25);
    const d10 = i24.indexOf(L6(i24, a37, t25));
    return n27 && t25 && d10 === -1 ? i24.findIndex((o21) => !o21.disabled && o21[t25]) : Math.max(0, d10);
  }
  calculateMedia(e32) {
    for (const t25 of e32)
      this.setState({ windowWidth: t25.target.clientWidth });
  }
};
I8.displayName = "AutoComplete", I8.propTypes = {
  ...f10.basicPropTypes,
  size: import_prop_types27.default.oneOf([null, "small", "medium", "large"]),
  rounded: import_prop_types27.default.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: import_prop_types27.default.oneOf([null, "solid", "flat", "outline"]),
  groupField: import_prop_types27.default.string,
  suggest: import_prop_types27.default.oneOfType([import_prop_types27.default.bool, import_prop_types27.default.string]),
  placeholder: import_prop_types27.default.string,
  value: import_prop_types27.default.string,
  defaultValue: import_prop_types27.default.string,
  validationMessage: import_prop_types27.default.string,
  required: import_prop_types27.default.bool,
  readonly: import_prop_types27.default.bool,
  clearButton: import_prop_types27.default.bool,
  valueRender: import_prop_types27.default.func,
  id: import_prop_types27.default.string,
  ariaLabelledBy: import_prop_types27.default.string,
  ariaDescribedBy: import_prop_types27.default.string,
  list: import_prop_types27.default.any,
  adaptive: import_prop_types27.default.bool,
  adaptiveTitle: import_prop_types27.default.string,
  onCancel: import_prop_types27.default.func,
  skipDisabledItems: import_prop_types27.default.bool,
  inputAttributes: import_prop_types27.default.object
}, I8.defaultProps = {
  ...f10.defaultProps,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  skipDisabledItems: true,
  prefix: void 0,
  suffix: void 0
};
var k7 = I8;
var te4 = a();
var se3 = a2(
  x(
    te4,
    p2(k7)
  )
);
se3.displayName = "KendoReactAutoComplete";

// node_modules/@progress/kendo-react-dropdowns/MultiSelect/MultiSelect.mjs
var f12 = __toESM(require_react(), 1);
var import_prop_types28 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dropdowns/MultiSelect/TagList.mjs
var t20 = __toESM(require_react(), 1);
var v11 = (o21) => o21.syntheticEvent.preventDefault();
var f11 = (o21) => o21.syntheticEvent.stopPropagation();
var g7 = class extends t20.Component {
  render() {
    const { data: n27, guid: r16, focused: s26, tagRender: c16, tag: i24, onTagDelete: l16, size: m11 } = this.props;
    return t20.createElement(t20.Fragment, null, n27.map((e32, p18) => {
      const a37 = i24 ? t20.createElement(
        i24,
        {
          key: e32.text + p18,
          tagData: e32,
          guid: r16,
          focusedTag: s26,
          onTagDelete: l16
        }
      ) : t20.createElement(
        z,
        {
          id: `tag-${r16}-${e32.text.replace(/\s+/g, "-")}`,
          "aria-selected": true,
          role: "option",
          "aria-setsize": n27.length,
          key: e32.text + p18,
          text: e32.text,
          removable: true,
          onRemove: (d10) => l16.call(void 0, e32.data, d10.syntheticEvent),
          onMouseDown: v11,
          onClick: f11,
          className: e32 === s26 ? "k-focus" : void 0,
          size: m11
        }
      );
      return c16 ? c16(e32, a37) : a37;
    }), this.props.children);
  }
};

// node_modules/@progress/kendo-react-dropdowns/common/settings.mjs
var r12 = ((p18) => (p18[p18.PopupList = 0] = "PopupList", p18[p18.TagsList = 1] = "TagsList", p18))(r12 || {});

// node_modules/@progress/kendo-react-dropdowns/MultiSelect/MultiSelect.mjs
var { sizeMap: T6, roundedMap: yt } = a4;
var xt = "Please enter a valid value!";
var $5 = (F8) => F8.preventDefault();
var W2 = (F8) => F8 === 2;
var y7 = class y8 extends f12.Component {
  constructor(n27) {
    super(n27), this.state = {
      activedescendant: r12.PopupList,
      currentValue: []
    }, this._element = null, this._valueItemsDuringOnChange = null, this.base = new f10(this), this._tags = [], this._input = null, this._adaptiveInput = null, this._skipFocusEvent = false, this._lastSelectedOrDeslectedItemIndex = null, this.itemHeight = 0, this.scrollToFocused = false, this.localization = null, this.showLicenseWatermark = false, this.focus = () => {
      this._input && this._input.focus();
    }, this.handleItemSelect = (t25, e32) => {
      const { dataItemKey: o21, virtual: s26 } = this.props, a37 = O4(this.props), p18 = s26 ? s26.skip : 0, c16 = a37[t25 - p18], r16 = this.value.findIndex((m11) => p13(m11, c16, o21));
      this._lastSelectedOrDeslectedItemIndex = a37.findIndex((m11) => p13(m11, c16, o21));
      let i24 = [];
      r16 !== -1 ? (i24 = this.value, i24.splice(r16, 1)) : i24 = [...this.value, c16], (this.props.filter !== void 0 ? this.props.filter : this.state.text) && !this.mobileMode && (this.state.text && (e32.data.text = ""), this.base.filterChanged("", e32)), this._adaptiveInput && this._adaptiveInput.blur(), this.state.focusedIndex !== void 0 && (e32.data.focusedIndex = void 0), this.triggerOnChange(i24, e32), this.base.triggerPageChangeCornerItems(c16, e32);
    }, this.onTagDelete = (t25, e32) => {
      const o21 = this.base.initState();
      o21.syntheticEvent = e32, this.opened && this.base.togglePopup(o21), !this.state.focused && !this.mobileMode && (o21.data.focused = true, this.focus());
      const s26 = this.value;
      w9(s26, t25, this.props.dataItemKey), this.triggerOnChange(s26, o21), this.applyState(o21);
    }, this.itemFocus = (t25, e32) => {
      const { allowCustom: o21, virtual: s26 } = this.props, a37 = O4(this.props), p18 = s26 ? s26.skip : 0, c16 = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedIndex: r16 } = this.getFocusedState(), i24 = o21 && c16, l16 = a37[t25 - p18];
      l16 && r16 !== t25 ? this.state.focusedIndex !== t25 && (e32.data.focusedIndex = t25, e32.data.activedescendant = r12.PopupList) : i24 && t25 === -1 && this.state.focusedIndex !== void 0 && (e32.data.focusedIndex = void 0), this.base.triggerPageChangeCornerItems(l16, e32);
    }, this.componentRef = (t25) => {
      this._element = t25, this.base.wrapper = t25;
    }, this.searchbarRef = (t25) => {
      const e32 = this._input = t25 && t25.input;
      e32 && this.state.focused && window.setTimeout(() => e32.focus(), 0);
    }, this.onChangeHandler = (t25) => {
      const e32 = this.base.initState(), o21 = t25.target.value;
      e32.syntheticEvent = t25, this.props.filter === void 0 && (e32.data.text = o21), e32.data.focusedIndex = void 0, this.opened || (this.base.togglePopup(e32), this.setState({ currentValue: this.value })), this.base.filterChanged(o21, e32), this.applyState(e32), this.setState({ group: void 0 });
    }, this.clearButtonClick = (t25) => {
      const e32 = this.base.initState();
      e32.syntheticEvent = t25, t25.stopPropagation(), this.value.length > 0 && this.triggerOnChange([], e32), this.state.focusedIndex !== void 0 && (e32.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e32);
      const o21 = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      l12(o21) && o21 !== "" && this.base.filterChanged("", e32), this.state.text && (e32.data.text = ""), this._lastSelectedOrDeslectedItemIndex = null, this.applyState(e32);
    }, this.onInputKeyDown = (t25) => {
      const { textField: e32, groupField: o21 } = this.props, s26 = O4(this.props), a37 = t25.keyCode, p18 = this.props.filter !== void 0 ? this.props.filter : this.state.text, c16 = this.props.opened !== void 0 ? this.props.opened : this.state.opened, { focusedItem: r16, focusedIndex: i24 } = this.getFocusedState(), l16 = this.base.initState();
      if (l16.syntheticEvent = t25, !p18 && this.value.length > 0 && (a37 === e2.left || a37 === e2.right || a37 === e2.home || a37 === e2.end || a37 === e2.delete || a37 === e2.backspace) && !t25.shiftKey)
        return this.onTagsNavigate(t25, l16);
      const m11 = () => {
        t25.preventDefault(), this.base.togglePopup(l16), this.applyState(l16);
      };
      if (this.opened)
        if (a37 === e2.pageUp)
          t25.preventDefault(), this.base.scrollPopupByPageSize(-1);
        else if (a37 === e2.pageDown)
          t25.preventDefault(), this.base.scrollPopupByPageSize(1);
        else if ((t25.ctrlKey || t25.metaKey) && t25.code === "KeyA") {
          const h16 = (this.state.value && this.state.value.length) === s26.length ? [] : s26;
          this.updateStateOnKeyboardNavigation(h16, l16);
        } else if ((t25.ctrlKey || t25.metaKey) && t25.shiftKey && t25.keyCode === e2.end) {
          const d10 = s26.slice(this.getFocusedState().focusedIndex);
          this.itemFocus(s26.length - 1, l16), this.updateStateOnKeyboardNavigation(d10, l16);
        } else if ((t25.ctrlKey || t25.metaKey) && t25.shiftKey && t25.keyCode === e2.home) {
          const d10 = s26.slice(0, this.getFocusedState().focusedIndex + 1);
          this.itemFocus(0, l16), this.updateStateOnKeyboardNavigation(d10, l16);
        } else if (t25.shiftKey && t25.keyCode === e2.up) {
          let d10;
          const h16 = this.getLastSelectedOrDeselectedIndex(1, i24);
          h16 === null ? d10 = i24 !== 0 ? s26.slice(i24 - 1, i24) : [s26[i24]] : h16 === i24 ? d10 = [s26[h16 - 1]] : i24 >= 0 && (d10 = h16 > i24 ? s26.slice(i24 - 1, h16) : s26.slice(h16 - 1, i24)), d10 && d10.length > 0 && (i24 >= 1 && this.itemFocus(i24 - 1, l16), this.updateStateOnKeyboardNavigation(d10, l16));
        } else if (t25.shiftKey && t25.keyCode === e2.down) {
          let d10;
          const h16 = this.getLastSelectedOrDeselectedIndex(0, i24);
          h16 === null ? d10 = i24 !== s26.length - 1 ? s26.slice(i24, i24 + 1) : [s26[i24]] : h16 === i24 ? d10 = s26.slice(i24, i24 + 2) : i24 >= 0 && (d10 = h16 > i24 ? s26.slice(i24 + 1, h16 + 1) : s26.slice(h16, i24 + 2)), d10 && d10.length >= 1 && (this.itemFocus(i24 + 1, l16), this.updateStateOnKeyboardNavigation(d10, l16));
        } else if (t25.altKey && a37 === e2.up)
          m11();
        else if (a37 === e2.up || a37 === e2.down) {
          if (o21 !== "" && e32)
            if (!this.props.skipDisabledItems && c16)
              this.onNavigate(l16, a37);
            else {
              let d10 = 0;
              if (a37 === e2.down || a37 === e2.right) {
                const h16 = s26.slice(i24 + 1).find((v14) => !v14.disabled && v14[e32]);
                d10 = h16 && s26.findIndex((v14) => v14[e32] === h16[e32]);
              } else if (a37 === e2.up || a37 === e2.left) {
                let h16;
                if (i24 === -1)
                  h16 = s26, d10 = s26.findIndex((v14) => !v14.disabled && v14[e32]);
                else {
                  h16 = s26.slice(0, i24);
                  let v14 = h16.pop();
                  for (; v14 && v14.disabled; )
                    v14 = h16.pop();
                  d10 = v14 && s26.findIndex((x8) => x8[e32] === v14[e32]);
                }
              }
              if (d10) {
                const h16 = d10 - i24;
                this.onNavigate(l16, a37, h16);
              } else
                d10 !== void 0 && this.onNavigate(l16, a37);
            }
          else if (!this.props.skipDisabledItems && c16)
            this.onNavigate(l16, a37);
          else {
            let d10 = null;
            if (a37 === e2.down || a37 === e2.right)
              d10 = s26.slice(i24 + 1).find((h16) => !h16.disabled);
            else if (a37 === e2.up || a37 === e2.left) {
              const h16 = s26.slice(0, i24);
              for (d10 = h16.pop(); d10 && d10.disabled; )
                d10 = h16.pop();
            }
            if (d10) {
              const h16 = d10.id - i24 - 1;
              this.onNavigate(l16, a37, h16);
            } else
              this.onNavigate(l16, a37);
          }
          this.applyState(l16), t25.preventDefault();
        } else
          a37 === e2.enter ? (t25.preventDefault(), this.props.allowCustom && p18 && r16 === null ? this.customItemSelect(t25) : r16 && r16.disabled ? m11() : this.selectFocusedItem(t25)) : a37 === e2.esc && m11();
      else
        t25.altKey && a37 === e2.down ? m11() : a37 === e2.esc && this.clearButtonClick(t25);
    }, this.listContainerContent = () => {
      const { header: t25, footer: e32, allowCustom: o21, size: s26, groupStickyHeaderItemRender: a37, groupField: p18, list: c16 } = this.props, r16 = O4(this.props), i24 = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedType: l16 } = this.getFocusedState(), m11 = o21 && i24 && f12.createElement(
        "div",
        {
          className: n2("k-list", {
            [`k-list-${T6[s26] || s26}`]: s26
          }),
          key: "customitem",
          onClick: this.customItemSelect,
          onMouseDown: $5
        },
        f12.createElement(
          "div",
          {
            className: n2("k-list-item k-custom-item", { "k-focus": W2(l16) }),
            style: { fontStyle: "italic" }
          },
          i24,
          f12.createElement(v3, { name: "plus", icon: plusIcon, style: { position: "absolute", right: "0.5em" } })
        )
      );
      let { group: d10 } = this.state;
      return d10 === void 0 && p18 !== void 0 && (d10 = i18(r16[0], p18)), f12.createElement(f12.Fragment, null, t25 && f12.createElement("div", { className: "k-list-header" }, t25), m11, f12.createElement(
        "div",
        {
          className: n2("k-list", {
            [`k-list-${this.mobileMode ? "lg" : T6[s26] || s26}`]: s26,
            "k-virtual-list": this.base.vs.enabled
          })
        },
        !c16 && d10 && r16.length !== 0 && f12.createElement(u13, { group: d10, groupMode: "modern", render: a37 }),
        this.renderList()
      ), this.showLicenseWatermark && f12.createElement(l, null), e32 && f12.createElement("div", { className: "k-list-footer" }, e32));
    }, this.renderListContainer = () => {
      const t25 = this.base, { dir: e32 } = this.props, o21 = O4(this.props), s26 = this.base.getPopupSettings(), a37 = s26.width !== void 0 ? s26.width : t25.popupWidth, p18 = {
        dir: e32 !== void 0 ? e32 : t25.dirCalculated,
        width: a37,
        popupSettings: {
          ...s26,
          popupClass: n2(s26.popupClass, "k-list-container", "k-multiselect-popup"),
          anchor: s26.anchor || this.element,
          show: this.opened,
          onOpen: this.onPopupOpened,
          onClose: this.onPopupClosed
        },
        itemsCount: [o21.length, this.value.length]
      };
      return f12.createElement(a5, { ...p18 }, this.listContainerContent());
    }, this.renderAdaptiveListContainer = () => {
      const { adaptiveTitle: t25, filterable: e32, filter: o21 } = this.props, { windowWidth: s26 = 0 } = this.state, a37 = o21 !== void 0 ? o21 : this.state.text;
      this.localization = s(this);
      const p18 = e32 ? f12.createElement(
        u12,
        {
          value: a37,
          ref: (r16) => this._adaptiveInput = r16 && r16.element,
          onChange: this.onChangeHandler,
          onKeyDown: this.onInputKeyDown,
          size: this.props.size,
          rounded: this.props.rounded,
          fillMode: this.props.fillMode
        }
      ) : null, c16 = {
        title: t25,
        expand: this.opened,
        onClose: (r16) => this.onCancel(r16),
        windowWidth: s26,
        mobileFilter: p18,
        footer: {
          cancelText: this.localization.toLanguageString(
            p15,
            s21[p15]
          ),
          onCancel: this.onCancel,
          applyText: this.localization.toLanguageString(
            d8,
            s21[d8]
          ),
          onApply: this.closePopup
        }
      };
      return f12.createElement(I7, { ...c16 }, f12.createElement(t3, { overflowHidden: true }, f12.createElement("div", { className: "k-list-container" }, this.listContainerContent())));
    }, this.closePopup = (t25) => {
      const e32 = this.base.initState();
      e32.syntheticEvent = t25, t25.stopPropagation(), this.state.focusedIndex !== void 0 && (e32.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e32), e32.events.push({ type: "onClose" });
      const o21 = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      l12(o21) && o21 !== "" && this.base.filterChanged("", e32), this.state.text && (e32.data.text = ""), this.applyState(e32);
    }, this.onCancel = (t25) => {
      const e32 = this.base.initState();
      e32.syntheticEvent = t25, t25.stopPropagation(), this.state.focusedIndex !== void 0 && (e32.data.focusedIndex = void 0), this.opened && this.base.togglePopup(e32), e32.events.push({ type: "onCancel" });
      const o21 = this.props.filter !== void 0 ? this.props.filter : this.state.text;
      l12(o21) && o21 !== "" && this.base.filterChanged("", e32), this.state.text && (e32.data.text = ""), this.applyState(e32);
    }, this.renderList = () => {
      const {
        textField: t25,
        listNoDataRender: e32,
        itemRender: o21,
        groupHeaderItemRender: s26,
        dataItemKey: a37,
        virtual: p18 = { skip: 0, total: void 0 }
      } = this.props, c16 = O4(this.props), r16 = this.base.vs, { focusedIndex: i24 } = this.getFocusedState(), l16 = this.base.getPopupSettings(), m11 = `translateY(${r16.translate}px)`;
      return f12.createElement(
        le3,
        {
          id: this.base.listBoxId,
          show: this.opened,
          data: c16.slice(),
          focusedIndex: i24 - p18.skip,
          value: this.value,
          textField: t25,
          valueField: a37,
          optionsGuid: this.base.guid,
          groupField: this.props.groupField,
          groupMode: "modern",
          listRef: (d10) => {
            r16.list = this.base.list = d10;
          },
          wrapperStyle: this.mobileMode ? {} : { maxHeight: l16.height },
          wrapperCssClass: "k-list-content",
          listStyle: r16.enabled ? { transform: m11 } : void 0,
          key: "listKey",
          skip: p18.skip,
          onClick: this.handleItemClick,
          itemRender: o21,
          groupHeaderItemRender: s26,
          noDataRender: e32,
          onMouseDown: $5,
          onBlur: this.handleBlur,
          onScroll: this.onScroll,
          wrapperRef: r16.scrollerRef,
          scroller: this.base.renderScrollElement(),
          ariaSetSize: p18.total
        }
      );
    }, this.onScroll = (t25) => {
      const { vs: e32, list: o21 } = this.base;
      e32.scrollHandler(t25);
      const { groupField: s26 } = this.props;
      let a37 = O4(this.props);
      if (!(!s26 || !a37.length) && s26) {
        const p18 = this.itemHeight = this.itemHeight || (e32.enabled ? e32.itemHeight : o21 ? o21.children[0].offsetHeight : 0), r16 = t25.target.scrollTop - e32.skip * p18;
        a37 = this.base.getGroupedDataModernMode(a37, s26);
        let i24 = a37[0][s26];
        for (let l16 = 1; l16 < a37.length && !(p18 * l16 > r16); l16++)
          a37[l16] && a37[l16][s26] && (i24 = a37[l16][s26]);
        i24 !== this.state.group && this.setState({
          group: i24
        });
      }
    }, this.customItemSelect = (t25) => {
      const e32 = this.props.filter !== void 0 ? this.props.filter : this.state.text, { textField: o21 } = this.props;
      if (!e32)
        return;
      const s26 = this.base.initState();
      s26.syntheticEvent = t25;
      const a37 = o21 ? { [o21]: e32 } : e32;
      this.state.text !== void 0 && (s26.data.text = ""), s26.data.focusedIndex = void 0, this.base.filterChanged("", s26);
      const p18 = [...this.value, a37];
      this.triggerOnChange(p18, s26), this.base.togglePopup(s26), this.applyState(s26);
    }, this.handleWrapperClick = (t25) => {
      const e32 = this._input;
      !this.opened && e32 && this.focusElement(e32);
      const o21 = this.base.initState();
      o21.syntheticEvent = t25, !this.state.focused && !this.mobileMode && (o21.events.push({ type: "onFocus" }), o21.data.focused = true), this.mobileMode && (this.setState({ currentValue: this.tagsToRender }), this.mobileMode && window.setTimeout(() => this._adaptiveInput && this._adaptiveInput.focus(), 300)), this.base.togglePopup(o21), this.applyState(o21);
    }, this.handleItemClick = (t25, e32) => {
      const o21 = this.base.initState();
      o21.syntheticEvent = e32, this.handleItemSelect(t25, o21), this.props.autoClose && !this.mobileMode && this.base.togglePopup(o21), e32.stopPropagation(), this.applyState(o21);
    }, this.handleBlur = (t25) => {
      if (!this.state.focused || this._skipFocusEvent)
        return;
      const e32 = this.base.initState(), { allowCustom: o21, filterable: s26 } = this.props;
      e32.syntheticEvent = t25, e32.data.focused = false, e32.events.push({ type: "onBlur" }), this.opened && !this.mobileMode && (this.state.opened && (e32.data.opened = false), e32.events.push({ type: "onClose" })), !o21 && !s26 && this.state.text && (e32.data.text = ""), this.applyState(e32);
    }, this.handleFocus = (t25) => {
      this._skipFocusEvent || this.base.handleFocus(t25);
    }, this.onPopupOpened = () => {
      this._input && this.state.focused && !this.mobileMode && this.focusElement(this._input);
    }, this.onPopupClosed = () => {
      this.state.focused && window.setTimeout(() => {
        this.state.focused && this.focusElement(this._input);
      }, 0);
    }, this.setValidity = () => {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(
        this.validity.valid ? "" : this.props.validationMessage || xt
      );
    }, this.validate(n27);
  }
  get _inputId() {
    return this.props.id;
  }
  get document() {
    if (e)
      return this.element && this.element.ownerDocument || document;
  }
  validate(n27) {
    if (n27.filterable || n27.virtual) {
      const t25 = [];
      n27.filterable && t25.push("filterable"), n27.virtual && t25.push("virtualization"), this.showLicenseWatermark = !h(e24, {
        component: "MultiSelect",
        features: t25
      });
    }
  }
  /** @hidden */
  get element() {
    return this._element;
  }
  /** @hidden */
  get opened() {
    return !!(this.props.opened !== void 0 ? this.props.opened : this.state.opened);
  }
  /** @hidden */
  get tagsToRender() {
    const { tags: n27, textField: t25 } = this.props, e32 = [];
    return n27 === void 0 ? this.value.forEach((o21) => {
      e32.push({ text: i18(o21, t25), data: [o21] });
    }) : e32.push(...n27), e32;
  }
  /**
   * The mobile mode of the MultiSelect.
   */
  get mobileMode() {
    var t25;
    return !!(this.state.windowWidth && this.props._adaptiveMode && this.state.windowWidth <= ((t25 = this.props._adaptiveMode) == null ? void 0 : t25.medium) && this.props.adaptive);
  }
  /**
   * Represents the value of the MultiSelect.
   */
  get value() {
    const n27 = [];
    return this._valueItemsDuringOnChange ? n27.push(...this._valueItemsDuringOnChange) : this.props.value ? n27.push(...this.props.value) : this.state.value ? n27.push(...this.state.value) : this.props.defaultValue && n27.push(...this.props.defaultValue), n27;
  }
  /**
   * Gets the `name` property of the MultiSelect.
   */
  get name() {
    return this.props.name;
  }
  /**
   * Represents the validity state into which the MultiSelect is set.
   */
  get validity() {
    const n27 = this.props.validationMessage !== void 0, t25 = !this.required || this.value !== null && this.value.length > 0 && this.value !== void 0, e32 = this.props.valid !== void 0 ? this.props.valid : t25;
    return {
      customError: n27,
      valid: e32,
      valueMissing: this.value === null
    };
  }
  /** @hidden */
  get required() {
    return this.props.required !== void 0 ? this.props.required : y8.defaultProps.required;
  }
  get validityStyles() {
    return this.props.validityStyles !== void 0 ? this.props.validityStyles : y8.defaultProps.validityStyles;
  }
  /** @hidden */
  componentDidUpdate(n27, t25) {
    var m11;
    const { virtual: e32, groupField: o21 = "" } = this.props, s26 = O4(this.props), a37 = e32 ? e32.skip : 0, p18 = n27.virtual ? n27.virtual.total : 0, c16 = n27.opened !== void 0 ? n27.opened : t25.opened, r16 = !c16 && this.opened, i24 = c16 && !this.opened, l16 = this.base.getPopupSettings();
    if (this.validate(this.props), this.base.didUpdate(), !l16.animate && i24 && this.onPopupClosed(), e32 && e32.total !== p18)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset();
    else {
      let { focusedItem: d10, focusedIndex: h16 } = this.getFocusedState();
      o21 !== "" && (h16 = (m11 = this.base.getGroupedDataModernMode(s26, o21)) == null ? void 0 : m11.indexOf(d10)), r16 && e32 ? this.base.scrollToVirtualItem(e32, h16 - a37) : r16 && !e32 ? (s26 && s26.length !== 0 && this.base.resetGroupStickyHeader(s26[0][o21], this), this.base.scrollToItem(h16)) : this.opened && c16 && d10 && this.scrollToFocused && this.base.scrollToItem(h16 - a37);
    }
    this.scrollToFocused = false, this.setValidity();
  }
  /** @hidden */
  componentDidMount() {
    var n27;
    this.observerResize = e && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this)), this.base.didMount(), this.setValidity(), (n27 = this.document) != null && n27.body && this.observerResize && this.observerResize.observe(this.document.body);
  }
  /** @hidden */
  componentWillUnmount() {
    var n27;
    (n27 = this.document) != null && n27.body && this.observerResize && this.observerResize.disconnect();
  }
  /** @hidden */
  onNavigate(n27, t25, e32) {
    const { allowCustom: o21 } = this.props, s26 = O4(this.props), a37 = this.props.filter !== void 0 ? this.props.filter : this.state.text, { focusedType: p18, focusedIndex: c16 } = this.getFocusedState(), r16 = o21 && a37, i24 = W2(p18), l16 = this.base, m11 = l16.vs;
    if (this.opened && t25 === e2.up && i24)
      this.state.focusedIndex !== void 0 && (n27.data.focusedIndex = void 0);
    else {
      const d10 = l16.navigation.navigate({
        keyCode: t25,
        current: c16,
        max: (m11.enabled ? m11.total : s26.length) - 1,
        min: r16 ? -1 : 0,
        skipItems: e32 || void 0
      });
      d10 !== void 0 && (this.itemFocus(d10, n27), this.scrollToFocused = true);
    }
    this.applyState(n27);
  }
  /** @hidden */
  render() {
    const {
      style: n27,
      className: t25,
      label: e32,
      dir: o21,
      disabled: s26,
      textField: a37,
      dataItemKey: p18,
      virtual: c16,
      size: r16,
      rounded: i24,
      fillMode: l16,
      loading: m11,
      filter: d10
    } = this.props, { text: h16, focused: v14, focusedTag: x8, currentValue: q3 } = this.state, C7 = this.base.vs, _4 = this.props.id || this._inputId;
    C7.enabled = c16 !== void 0, c16 !== void 0 && (C7.skip = c16.skip, C7.total = c16.total, C7.pageSize = c16.pageSize);
    const S5 = this.mobileMode && this.opened ? q3 : this.tagsToRender;
    this.setItems(this.tagsToRender, this._tags);
    const K5 = !this.validityStyles || this.validity.valid, G6 = !!(d10 !== void 0 ? d10 : h16) || S5 && S5.length > 0, [U2, j4] = m9(this.props.prefix || f12.Fragment), [Y2, J3] = m9(this.props.suffix || f12.Fragment), N4 = f12.createElement(f12.Fragment, null, f12.createElement(
      "div",
      {
        ref: this.componentRef,
        className: n2("k-multiselect k-input", t25, {
          [`k-input-${T6[r16] || r16}`]: r16,
          [`k-rounded-${yt[i24] || i24}`]: i24,
          [`k-input-${l16}`]: l16,
          "k-focus": v14 && !s26,
          "k-invalid": !K5,
          "k-disabled": s26,
          "k-loading": m11,
          "k-required": this.required
        }),
        style: e32 ? { ...n27, width: void 0 } : n27,
        dir: o21,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleWrapperClick,
        onMouseDown: S2
      },
      this.props.prefix && f12.createElement(U2, { ...j4 }),
      f12.createElement("div", { className: n2("k-input-values") }, f12.createElement(
        "div",
        {
          className: n2("k-chip-list", { [`k-chip-list-${T6[r16] || r16}`]: r16 }),
          role: "listbox",
          id: "tagslist-" + this.base.guid
        },
        S5 && S5.length > 0 && f12.createElement(
          g7,
          {
            tagRender: this.props.tagRender,
            onTagDelete: this.onTagDelete,
            data: S5,
            guid: this.base.guid,
            focused: x8 ? S5.find((Q3) => y5(Q3, x8, p18)) : void 0,
            size: r16
          }
        )
      ), this.renderSearchBar(_4)),
      m11 && f12.createElement(v3, { className: "k-input-loading-icon", name: "loading" }),
      this.props.suffix && f12.createElement(Y2, { ...J3 }),
      G6 && f12.createElement(b6, { onClick: this.clearButtonClick }),
      !this.mobileMode && this.renderListContainer()
    ), this.mobileMode && this.renderAdaptiveListContainer());
    return e32 ? f12.createElement(
      I2,
      {
        label: e32,
        editorId: _4,
        editorValue: h16 || i18(this.value[0], a37),
        editorValid: K5,
        editorDisabled: s26,
        style: { width: n27 ? n27.width : void 0 },
        children: N4
      }
    ) : N4;
  }
  renderSearchBar(n27) {
    const { activedescendant: t25, focusedTag: e32, currentValue: o21 } = this.state, { disabled: s26, placeholder: a37, ariaDescribedBy: p18, ariaLabelledBy: c16, ariaLabel: r16, inputAttributes: i24 } = this.props, l16 = !this.mobileMode && (this.props.filter !== void 0 ? this.props.filter : this.state.text) || "", { focusedIndex: m11 } = this.getFocusedState(), d10 = this.value.length === 0 && !l16 ? a37 : void 0, h16 = o21 && o21.length > 0 ? void 0 : a37, v14 = t25 === r12.TagsList && e32 !== void 0 ? `tag-${this.base.guid}-${e32.text.replace(/\s+/g, "-")}` : `option-${this.base.guid}-${m11}`, x8 = {
      accessKey: this.props.accessKey,
      tabIndex: this.props.tabIndex
    };
    return f12.createElement(
      y6,
      {
        id: n27,
        size: Math.max((d10 || "").length, l16.length, 1),
        placeholder: this.mobileMode && this.opened ? h16 : d10,
        value: l16,
        onChange: this.onChangeHandler,
        onKeyDown: this.onInputKeyDown,
        ref: this.searchbarRef,
        disabled: s26,
        expanded: this.opened,
        owns: this.base.listBoxId,
        role: "combobox",
        activedescendant: v14,
        ariaDescribedBy: `tagslist-${this.base.guid}${p18 ? " " + p18 : ""}`,
        ariaLabelledBy: c16,
        ariaRequired: this.required,
        ariaLabel: r16,
        inputAttributes: i24,
        ...x8
      }
    );
  }
  onTagsNavigate(n27, t25) {
    const e32 = n27.keyCode, { focusedTag: o21 } = this.state, s26 = this._tags, a37 = this.props.dataItemKey;
    let p18 = o21 ? s26.findIndex((i24) => y5(i24, o21, a37)) : -1, c16;
    const r16 = p18 !== -1;
    if (e32 === e2.left)
      r16 ? p18 = Math.max(0, p18 - 1) : p18 = s26.length - 1, c16 = s26[p18];
    else if (e32 === e2.right)
      p18 === s26.length - 1 ? c16 = void 0 : r16 && (p18 = Math.min(s26.length - 1, p18 + 1), c16 = s26[p18]);
    else if (e32 === e2.home && !n27.shiftKey)
      c16 = s26[0];
    else if (e32 === e2.end && !n27.shiftKey)
      c16 = s26[s26.length - 1];
    else if (e32 === e2.delete) {
      if (r16) {
        const i24 = this.value;
        w9(i24, s26[p18].data, a37), this.triggerOnChange(i24, t25);
      }
    } else if (e32 === e2.backspace) {
      const i24 = this.value;
      if (r16)
        w9(i24, s26[p18].data, a37), this.triggerOnChange(i24, t25);
      else if (!r16 && s26.length) {
        const l16 = s26.pop();
        w9(i24, l16.data, a37), this.triggerOnChange(i24, t25);
      }
    }
    c16 !== o21 && (t25.data.focusedTag = c16, t25.data.activedescendant = r12.TagsList), this.applyState(t25);
  }
  triggerOnChange(n27, t25) {
    this.props.value === void 0 && (t25.data.value = [...n27]), this._valueItemsDuringOnChange = [], this.setItems(n27, this._valueItemsDuringOnChange), t25.events.push({ type: "onChange" });
  }
  selectFocusedItem(n27, t25) {
    const { virtual: e32 } = this.props, o21 = O4(this.props), { focusedIndex: s26 } = t25 || this.getFocusedState(), a37 = e32 ? e32.skip : 0;
    o21[s26 - a37] !== void 0 && this.handleItemClick(s26, n27);
  }
  setItems(n27, t25) {
    t25.length = 0, t25.push(...n27);
  }
  getFocusedState() {
    const { focusedIndex: n27 } = this.state, t25 = this.props.filter !== void 0 ? this.props.filter : this.state.text, {
      allowCustom: e32,
      dataItemKey: o21,
      virtual: s26,
      textField: a37,
      focusedItemIndex: p18 = h12,
      skipDisabledItems: c16
    } = this.props, r16 = O4(this.props), i24 = s26 && s26.skip || 0;
    let l16;
    if (n27 !== void 0)
      return {
        focusedIndex: n27,
        focusedItem: r16[n27 - i24],
        focusedType: 1
        /* ListItem */
      };
    const m11 = this.value;
    if (e32 && t25)
      return {
        focusedItem: null,
        focusedIndex: -1,
        focusedType: 2
        /* CustomItem */
      };
    if (t25)
      return l16 = p18(r16, t25, a37), {
        focusedItem: r16[l16],
        focusedIndex: l16 + i24,
        focusedType: 1
        /* ListItem */
      };
    if (m11.length) {
      const d10 = m11[m11.length - 1];
      return l16 = r16.findIndex((h16) => p13(h16, d10, o21)), r16[l16] !== void 0 ? {
        focusedIndex: l16 + i24,
        focusedItem: r16[l16],
        focusedType: 1
        /* ListItem */
      } : { focusedType: 0, focusedIndex: -1 };
    } else if (c16 && a37 && !t25 && i24 === 0) {
      const d10 = r16.findIndex((h16) => !h16.disabled && h16[a37]);
      return {
        focusedIndex: d10,
        focusedItem: r16[d10 - i24],
        focusedType: 1
        /* ListItem */
      };
    }
    return i24 === 0 ? {
      focusedItem: r16[0],
      focusedIndex: 0,
      focusedType: 1
      /* ListItem */
    } : { focusedType: 0, focusedIndex: -1 };
  }
  focusElement(n27) {
    this._skipFocusEvent = true, n27.focus(), window.setTimeout(() => this._skipFocusEvent = false, 0);
  }
  applyState(n27) {
    this.base.applyState(n27), this._valueItemsDuringOnChange = null;
  }
  calculateMedia(n27) {
    for (const t25 of n27)
      this.setState({ windowWidth: t25.target.clientWidth });
  }
  /**
   * Updates the state of the MultiSelect when the complex keyboard navigation that
   * includes key combinations with the Ctrl/Command, Shift, Home and End keys
   *
   * @param {Array<string | Object>} dataToSet Defines the array of new values that will be applied to the MultiSelect
   * @param {MultiSelectInternalState} state The current state of the MultiSelect
   */
  updateStateOnKeyboardNavigation(n27, t25) {
    this.setState({ value: n27 }), this.triggerOnChange(n27, t25), this.applyState(t25);
  }
  /**
   * Returns the last element that was selected or deselected. Needed for the keyboard navigation specifications
   *
   * @param {number} correction A correction is needed depending on if UP or DOWN key is pressed
   */
  getLastSelectedOrDeselectedIndex(n27, t25) {
    return this._lastSelectedOrDeslectedItemIndex === null && (this._lastSelectedOrDeslectedItemIndex = t25), this._lastSelectedOrDeslectedItemIndex !== null ? this._lastSelectedOrDeslectedItemIndex + n27 : null;
  }
};
y7.displayName = "MultiSelect", y7.propTypes = {
  ...f10.propTypes,
  autoClose: import_prop_types28.default.bool,
  value: import_prop_types28.default.arrayOf(import_prop_types28.default.any),
  defaultValue: import_prop_types28.default.arrayOf(import_prop_types28.default.any),
  dataItemKey: import_prop_types28.default.string,
  placeholder: import_prop_types28.default.string,
  tags: import_prop_types28.default.arrayOf(
    import_prop_types28.default.shape({
      text: import_prop_types28.default.string,
      data: import_prop_types28.default.arrayOf(import_prop_types28.default.any)
    })
  ),
  tagRender: import_prop_types28.default.func,
  id: import_prop_types28.default.string,
  ariaLabelledBy: import_prop_types28.default.string,
  ariaDescribedBy: import_prop_types28.default.string,
  groupField: import_prop_types28.default.string,
  list: import_prop_types28.default.any,
  adaptive: import_prop_types28.default.bool,
  adaptiveTitle: import_prop_types28.default.string,
  onCancel: import_prop_types28.default.func,
  skipDisabledItems: import_prop_types28.default.bool,
  inputAttributes: import_prop_types28.default.object
}, y7.defaultProps = {
  ...f10.defaultProps,
  autoClose: true,
  required: false,
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  groupMode: "modern",
  skipDisabledItems: true,
  prefix: void 0,
  suffix: void 0
};
var P8 = y7;
var St = a();
var Ct = a2(
  x(
    St,
    p2(P8)
  )
);
Ct.displayName = "KendoReactMultiSelect";

// node_modules/@progress/kendo-react-dropdowns/MultiColumnComboBox/MultiColumnComboBox.mjs
var e26 = __toESM(require_react(), 1);
var import_prop_types29 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-dropdowns/common/MultiColumnList.mjs
var l14 = __toESM(require_react(), 1);
var i21 = (t25) => l14.createElement(
  le3,
  {
    ...t25,
    wrapperCssClass: "k-table-body k-table-scroller",
    listClassName: n2("k-table k-table-list", {
      "k-virtual-table": t25.virtual !== void 0
    }),
    listStyle: { ...t25.listStyle }
  }
);

// node_modules/@progress/kendo-react-dropdowns/MultiColumnComboBox/MultiColumnComboBox.mjs
var he2 = (u17, h16) => u17 ? typeof u17 == "number" ? u17 + "px" : u17 : h16;
var Ce2 = a();
var P9 = e26.forwardRef(
  (u17, h16) => {
    const t25 = n4(Ce2, u17), C7 = e26.useRef(null), a37 = e26.useRef(null), y11 = s4(), {
      columns: n27 = s22.columns,
      popupSettings: p18 = s22.popupSettings,
      size: z5 = s22.size,
      rounded: O6 = s22.rounded,
      fillMode: L8 = s22.fillMode,
      className: $6,
      prefix: j4 = void 0,
      suffix: V3 = void 0,
      onOpen: w11,
      onClose: E8,
      onFocus: F8,
      onBlur: H3,
      onChange: N4,
      onFilterChange: S5,
      onPageChange: M7,
      ...A13
    } = t25;
    e26.useImperativeHandle(C7, () => ({
      element: a37.current && a37.current.element,
      focus() {
        a37.current && a37.current.focus();
      },
      get value() {
        return a37.current && a37.current.value;
      },
      get name() {
        return a37.current && a37.current.name;
      },
      props: t25
    })), e26.useImperativeHandle(
      h16,
      () => C7.current
    );
    const c16 = e26.useMemo(() => {
      if (t25.groupField !== void 0 && t25.data)
        return i18(t25.data[0], t25.groupField);
    }, [t25.data, t25.groupField]), [k8, m11] = e26.useState(c16), [R5, B6] = e26.useState(true), [D8] = j4 ? m9(t25.prefix || e26.Fragment) : [], [J3] = V3 ? m9(t25.suffix || e26.Fragment) : [], Q3 = e26.useMemo(() => {
      const r16 = e26.createElement("th", { className: "k-table-th", colSpan: n27.length }, k8);
      return e26.createElement(e26.Fragment, null, t25.header, e26.createElement("div", { className: "k-table-header-wrap" }, e26.createElement("table", { className: "k-table", role: "presentation" }, e26.createElement("colgroup", null, n27.map((o21, i24) => e26.createElement(
        "col",
        {
          key: o21.uniqueKey ? o21.uniqueKey : i24,
          style: { width: o21.width ? o21.width : s22.width }
        }
      ))), e26.createElement("thead", { className: "k-table-thead" }, e26.createElement("tr", { className: "k-table-row" }, n27.map((o21, i24) => e26.createElement("th", { className: "k-table-th", key: o21.uniqueKey ? o21.uniqueKey : i24 }, o21.header || " "))), k8 && R5 && e26.createElement("tr", { className: "k-table-group-row" }, t25.groupStickyHeaderItemRender ? t25.groupStickyHeaderItemRender.call(void 0, r16, {}) : r16)))));
    }, [t25.header, n27, k8, R5]), U2 = e26.useMemo(
      () => (
        // These additional 4px are coming from the child elements side borders (fixes horizontal scrollbar)
        `calc(${n27.map((r16) => he2(r16.width, s22.width)).filter(Boolean).join(" + ")} + ${y11}px + 4px)`
      ),
      [n27, y11]
    ), q3 = t25.virtual ? t25.virtual.skip : 0, X = e26.useCallback(
      (r16, o21) => {
        const i24 = n27.map((d10, le4) => e26.createElement(
          "span",
          {
            className: t25.itemRender ? void 0 : "k-table-td",
            style: t25.itemRender ? void 0 : { width: d10.width ? d10.width : s22.width },
            key: d10.uniqueKey ? d10.uniqueKey : le4
          },
          d10.field ? String(s3(d10.field)(o21.dataItem)) : ""
        ));
        let f13, g9, b8, v14, I11 = t25.data || [];
        const K5 = o21.index - q3;
        t25.groupField !== void 0 && (v14 = s3(t25.groupField), g9 = v14(I11[K5]), b8 = v14(I11[K5 - 1]), g9 && b8 && g9 !== b8 && (f13 = g9)), f13 && t25.groupMode === "classic" && i24.push(
          e26.createElement("div", { key: "group", className: "k-table-td k-table-group-td" }, e26.createElement("span", null, f13))
        );
        const G6 = e26.cloneElement(
          r16,
          {
            ...r16.props,
            className: n2("k-table-row", {
              "k-table-alt-row": o21.index % 2 !== 0,
              "k-focus": o21.focused,
              "k-selected": o21.selected,
              "k-first": !!f13,
              "k-disabled": o21.dataItem.disabled
            })
          },
          i24
        );
        return t25.itemRender ? t25.itemRender.call(void 0, G6, o21) : G6;
      },
      [n27, t25.groupField, t25.itemRender, t25.data, q3]
    ), l16 = e26.useCallback((r16, o21) => {
      r16 && r16.call(void 0, {
        ...o21,
        target: C7.current
      });
    }, []), Y2 = e26.useCallback(
      (r16) => (t25.virtual || m11(c16), l16(w11, r16)),
      [l16, w11, t25.virtual, c16]
    ), Z2 = e26.useCallback((r16) => l16(E8, r16), [E8]), _4 = e26.useCallback((r16) => l16(F8, r16), [F8]), ee4 = e26.useCallback((r16) => l16(H3, r16), [H3]), te5 = e26.useCallback((r16) => l16(N4, r16), [N4]), re3 = e26.useCallback((r16) => l16(M7, r16), [M7]), oe = e26.useCallback(
      (r16) => (m11(c16), l16(S5, {
        ...r16,
        mobileMode: r16.target.mobileMode
      })),
      [S5]
    ), ae3 = e26.useCallback((r16) => {
      m11(r16.group);
    }, []);
    e26.useEffect(() => {
      d();
    }), e26.useEffect(() => {
      const r16 = t25.data;
      m11(c16), r16 && r16.length !== 0 ? B6(true) : B6(false);
    }, [t25.data]);
    const ne3 = e26.useCallback((r16) => e26.createElement(i21, { ...r16 }), []);
    return e26.createElement(
      Me,
      {
        ...A13,
        list: ne3,
        popupSettings: {
          ...p18,
          popupClass: n2("k-dropdowngrid-popup", p18.popupClass),
          width: p18.width || U2,
          className: p18.className
        },
        ref: a37,
        header: Q3,
        itemRender: X,
        groupHeaderItemRender: t25.groupHeaderItemRender,
        size: z5,
        rounded: O6,
        fillMode: L8,
        groupMode: t25.groupMode,
        groupField: t25.groupField,
        isMultiColumn: true,
        onOpen: Y2,
        onClose: Z2,
        onFocus: _4,
        onBlur: ee4,
        onChange: te5,
        onFilterChange: oe,
        onPageChange: re3,
        onGroupScroll: ae3,
        className: n2("k-dropdowngrid", $6),
        required: t25.required,
        adaptive: t25.adaptive,
        adaptiveFilter: t25.adaptiveFilter,
        adaptiveTitle: t25.adaptiveTitle,
        footer: t25.footer,
        footerClassName: "k-table-footer",
        prefix: D8,
        suffix: J3
      }
    );
  }
);
var ke3 = {
  ...P7.propTypes,
  columns: import_prop_types29.default.any.isRequired
};
var s22 = {
  columns: [],
  popupSettings: {},
  width: "200px",
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
P9.displayName = "KendoMultiColumnComboBox";
P9.propTypes = ke3;

// node_modules/@progress/kendo-react-dropdowns/DropDownTree/DropDownTree.mjs
var t23 = __toESM(require_react(), 1);
var import_prop_types31 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-treeview/TreeView.mjs
var l15 = __toESM(require_react(), 1);
var import_prop_types30 = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-treeview/utils/getItemIdUponKeyboardNavigation.mjs
function F7(o21, e32, t25, g9, r16) {
  switch (g9) {
    case e2.left:
      return I11();
    case e2.right:
      return l16();
    case e2.up:
      return y11();
    case e2.down:
      return C7();
    case e2.home:
      return itemIdUtils_exports.ZERO_LEVEL_ZERO_NODE_ID;
    case e2.end:
      return E8();
    default:
      return e32;
  }
  function I11() {
    return itemIdUtils_exports.isIdZeroLevel(e32) || // For expanded disabled items, navigate directly to the parent.
    // Collapse cannot happen because an event is not fired to the client.
    r16.expanded(o21) && W(e32, t25, r16) ? e32 : itemIdUtils_exports.getDirectParentId(e32);
  }
  function l16() {
    return O(o21, r16) ? itemIdUtils_exports.getFirstChildId(e32) : e32;
  }
  function y11() {
    const d10 = Number(itemIdUtils_exports.getShortId(e32)), u17 = itemIdUtils_exports.getDirectParentId(e32);
    return d10 ? i22(itemIdUtils_exports.createId(d10 - 1, u17), t25, r16) : itemIdUtils_exports.isIdZeroLevel(e32) ? e32 : u17;
  }
  function C7() {
    return O(o21, r16) ? itemIdUtils_exports.getFirstChildId(e32) : p17(e32, t25, r16) || e32;
  }
  function E8() {
    let d10 = (t25.length - 1).toString(), u17 = t25[t25.length - 1], h16;
    for (; O(u17, r16); )
      h16 = u17[r16.getChildrenField()], d10 = itemIdUtils_exports.createId(h16.length - 1, d10), u17 = h16[h16.length - 1];
    return d10;
  }
}
function p17(o21, e32, t25) {
  const g9 = itemIdUtils_exports.getDirectParentId(o21), r16 = g9 ? itemIdUtils_exports.getItemById(g9, e32, t25.getChildrenField()) : void 0, I11 = r16 ? r16[t25.getChildrenField()] : e32, l16 = Number(itemIdUtils_exports.getShortId(o21));
  return l16 < I11.length - 1 ? itemIdUtils_exports.createId(l16 + 1, g9) : r16 ? p17(g9, e32, t25) : void 0;
}
function i22(o21, e32, t25) {
  const g9 = itemIdUtils_exports.getItemById(o21, e32, t25.getChildrenField());
  return O(g9, t25) ? i22(
    itemIdUtils_exports.createId(g9[t25.getChildrenField()].length - 1, o21),
    e32,
    t25
  ) : o21;
}

// node_modules/@progress/kendo-react-treeview/utils/utils.mjs
var n23 = (t25, e32) => t25 === e32.length - 1;
var s23 = (t25, e32) => {
  const o21 = n23(t25, e32);
  return t25 === 0 && !o21 ? "top" : o21 ? "bot" : "mid";
};

// node_modules/@progress/kendo-react-treeview/TreeViewItem.mjs
var t22 = __toESM(require_react(), 1);

// node_modules/@progress/kendo-react-treeview/utils/consts.mjs
var E5 = "expanded";
var I10 = "text";
var D7 = "disabled";
var e27 = "items";
var _3 = "hasChildren";
var t21 = "selected";
var n24 = "svgIcon";
var c13 = "checked";
var s24 = "checkIndeterminate";
var o19 = "_kendoItemId";
var L7 = "_kendoTreeViewGuid";

// node_modules/@progress/kendo-react-treeview/TreeViewItem.mjs
var { sizeMap: v12 } = a4;
var S4 = t22.createContext(
  (r16) => r16
);
var h13 = class h14 extends t22.Component {
  constructor() {
    super(...arguments), this.onCheckChange = (e32) => {
      this.props.onCheckChange(e32, this.item, this.itemId);
    }, this.onExpandChange = (e32) => {
      this.props.onExpandChange(e32, this.item, this.itemId);
    }, this.onItemClick = (e32) => {
      this.props.onItemClick(e32, this.item, this.itemId);
    }, this.onPress = (e32) => {
      this.props.onPress(e32.event, this.item, this.itemId);
    }, this.onDrag = (e32) => {
      this.props.onDrag(e32.event, this.item, this.itemId);
    }, this.onRelease = (e32) => {
      this.props.onRelease(e32.event, this.item, this.itemId);
    }, this.onContextMenu = (e32) => {
      this.props.onContextMenu(e32, this.item, this.itemId);
    }, this.assignDraggableMeta = (e32) => {
      e32 && (e32[o19] = this.props.itemId, e32[L7] = this.props.treeGuid);
    };
  }
  render() {
    const e32 = this.renderSubitemsIfApplicable(), i24 = this.renderItemInPart();
    return t22.createElement(
      "li",
      {
        className: n2("k-treeview-item"),
        tabIndex: this.tabIndex,
        role: "treeitem",
        "aria-expanded": this.ariaExpanded,
        "aria-selected": this.ariaSelected,
        "aria-checked": this.ariaChecked,
        "aria-disabled": this.disabled ? true : void 0,
        ref: (s26) => this.itemElement = s26
      },
      t22.createElement("span", { className: `k-treeview-${this.props.position}`, ref: this.assignDraggableMeta }, this.renderExpandIcon(), this.renderCheckbox(), this.props.draggable ? t22.createElement(s6, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease }, i24) : i24),
      e32 && (this.props.animate ? t22.createElement(
        P2,
        {
          transitionEnterDuration: 200,
          transitionExitDuration: 200,
          style: { display: "block" },
          children: e32
        }
      ) : e32)
    );
  }
  componentDidMount() {
    const e32 = this.props.focusedItemId, i24 = this.itemId;
    e32 && e32 === i24 && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement && (this.checkboxElement.indeterminate = this.fieldsSvc.checkIndeterminate(this.item));
  }
  componentDidUpdate(e32) {
    const i24 = this.props.focusedItemId;
    if (i24 && i24 !== e32.focusedItemId && i24 === this.itemId && this.props.onFocusDomElNeeded(this.itemElement), this.checkboxElement) {
      const s26 = this.fieldsSvc.checkIndeterminate(this.item);
      this.checkboxElement.indeterminate !== s26 && (this.checkboxElement.indeterminate = s26);
    }
  }
  renderCheckbox() {
    if (this.props.checkboxes) {
      const e32 = this.props.size;
      return t22.createElement("span", { className: n2("k-checkbox-wrap") }, t22.createElement(
        "input",
        {
          type: "checkbox",
          className: n2("k-checkbox k-rounded-md", {
            [`k-checkbox-${v12[e32] || e32}`]: e32,
            "k-disabled": this.disabled
          }),
          "aria-label": this.item.text,
          checked: !!this.fieldsSvc.checked(this.item),
          id: this.props.id,
          tabIndex: -1,
          onChange: this.onCheckChange,
          ref: (i24) => this.checkboxElement = i24
        }
      ));
    }
  }
  renderExpandIcon() {
    return this.props.expandIcons && // If it is explicitly said that the item has children (even not loaded yet)
    // or if the item actually has children, then render the icon.
    (this.fieldsSvc.hasChildren(this.item) || P(this.item, this.fieldsSvc.getChildrenField())) && // Allowing the toggle-button even with `disabled=true` might be a valid case!
    // Re-evaluate the classes bellow if such scenario occurs
    t22.createElement(
      "span",
      {
        className: n2("k-treeview-toggle", { "k-disabled": this.disabled }),
        onClick: this.onExpandChange
      },
      t22.createElement(v3, { ...this.getIconProps() })
    );
  }
  renderSubitemsIfApplicable() {
    const e32 = this.fieldsSvc.children(this.item);
    return O(this.item, this.fieldsSvc) ? t22.createElement("ul", { className: "k-treeview-group", role: "group" }, e32.map((i24, s26) => t22.createElement(
      c14,
      {
        item: i24,
        position: s23(s26, e32),
        itemId: itemIdUtils_exports.createId(s26, this.itemId),
        treeGuid: this.props.treeGuid,
        animate: this.props.animate,
        focusedItemId: this.props.focusedItemId,
        tabbableItemId: this.props.tabbableItemId,
        fieldsService: this.props.fieldsService,
        itemUI: this.props.itemUI,
        checkboxes: this.props.checkboxes,
        ariaMultiSelectable: this.props.ariaMultiSelectable,
        onItemClick: this.props.onItemClick,
        onFocusDomElNeeded: this.props.onFocusDomElNeeded,
        draggable: this.props.draggable,
        onPress: this.props.onPress,
        onDrag: this.props.onDrag,
        onRelease: this.props.onRelease,
        expandIcons: this.props.expandIcons,
        iconField: this.props.iconField,
        onExpandChange: this.props.onExpandChange,
        onCheckChange: this.props.onCheckChange,
        onContextMenu: this.props.onContextMenu,
        key: s26,
        size: this.props.size,
        disabled: this.disabled,
        isRtl: this.props.isRtl
      }
    ))) : void 0;
  }
  renderItemInPart() {
    const e32 = this.props.iconField, i24 = e32 && this.item[e32];
    return t22.createElement(
      "span",
      {
        className: n2("k-treeview-leaf", {
          "k-focus": this.props.focusedItemId === this.itemId,
          "k-selected": this.fieldsSvc.selected(this.item),
          "k-disabled": this.disabled,
          "k-touch-action-none": this.props.draggable
        }),
        onClick: this.onItemClick,
        onContextMenu: this.onContextMenu
      },
      i24 && t22.createElement(v3, { name: i24.name, icon: i24 }),
      t22.createElement("span", { className: "k-treeview-leaf-text" }, this.props.itemUI ? t22.createElement(this.props.itemUI, { item: this.item, itemHierarchicalIndex: this.itemId }) : this.fieldsSvc.text(this.item))
    );
  }
  get fieldsSvc() {
    return this.props.fieldsService;
  }
  get itemId() {
    return this.props.itemId;
  }
  get item() {
    return this.props.item;
  }
  get tabIndex() {
    return (this.props.focusedItemId || this.props.tabbableItemId) === this.itemId ? 0 : -1;
  }
  get ariaExpanded() {
    return this.fieldsSvc.hasChildren(this.item) || P(this.item, this.fieldsSvc.getChildrenField()) ? !!this.fieldsSvc.expanded(this.item) : void 0;
  }
  get disabled() {
    return this.props.disabled || this.fieldsSvc.disabled(this.item);
  }
  get ariaChecked() {
    if (this.props.checkboxes)
      return this.fieldsSvc.checked(this.item) ? "true" : this.fieldsSvc.checkIndeterminate(this.item) ? "mixed" : "false";
  }
  get ariaSelected() {
    if (this.fieldsSvc.selected(this.item))
      return true;
    if (this.props.ariaMultiSelectable)
      return this.disabled ? void 0 : false;
  }
  getIconProps() {
    const e32 = this.fieldsSvc.expanded(this.item);
    return e32 && !P(this.item, this.fieldsSvc.getChildrenField()) ? { name: "loading" } : e32 ? { name: "caret-alt-down", icon: caretAltDownIcon } : {
      name: this.props.isRtl ? "caret-alt-left" : "caret-alt-right",
      icon: this.props.isRtl ? caretAltLeftIcon : caretAltRightIcon
    };
  }
};
h13.defaultProps = {
  position: "top",
  iconField: "svgIcon"
};
var a31 = h13;
var c14 = a2(
  t22.forwardRef((r16, e32) => {
    const s26 = t22.useContext(S4).call(void 0, r16);
    return t22.createElement(a31, { ref: e32, ...s26 });
  })
);
c14.displayName = "TreeViewItem";

// node_modules/@progress/kendo-react-treeview/package-metadata.mjs
var e28 = {
  name: "@progress/kendo-react-treeview",
  productName: "KendoReact",
  productCode: "KENDOUIREACT",
  productCodes: ["KENDOUIREACT"],
  publishDate: 1741695381,
  version: "10.0.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
};

// node_modules/@progress/kendo-react-treeview/TreeView.mjs
var { sizeMap: N2 } = a4;
var r13 = class r14 extends l15.Component {
  constructor(t25) {
    super(t25), this.state = {
      focusedItemId: void 0,
      focusedItemPublicId: void 0,
      tabbableItemId: itemIdUtils_exports.ZERO_LEVEL_ZERO_NODE_ID
    }, this.fieldsSvc = null, this.allowExplicitFocus = false, this.showLicenseWatermark = false, this._element = null, this.onFocusDomElNeeded = (e32) => {
      this.allowExplicitFocus && this.focusDomItem(e32);
    }, this.onCheckChange = (e32, i24, s26) => {
      this.setFocus(s26), this.dispatchCheckChange(e32, i24, s26);
    }, this.onExpandChange = (e32, i24, s26) => {
      this.setFocus(s26), this.dispatchExpandChange(e32, i24, s26);
    }, this.onPress = (e32, i24, s26) => {
      this.props.onItemDragStart && this.props.onItemDragStart.call(void 0, { target: this, item: i24, itemHierarchicalIndex: s26 });
    }, this.onDrag = (e32, i24, s26) => {
      const { pageX: o21, pageY: n27, clientX: h16, clientY: c16 } = e32;
      this.props.onItemDragOver && this.props.onItemDragOver.call(void 0, {
        target: this,
        item: i24,
        itemHierarchicalIndex: s26,
        pageX: o21,
        pageY: n27,
        clientX: h16,
        clientY: c16
      });
    }, this.onRelease = (e32, i24, s26) => {
      const { pageX: o21, pageY: n27, clientX: h16, clientY: c16 } = e32;
      this.props.onItemDragEnd && this.props.onItemDragEnd.call(void 0, {
        target: this,
        item: i24,
        itemHierarchicalIndex: s26,
        pageX: o21,
        pageY: n27,
        clientX: h16,
        clientY: c16
      });
    }, this.onItemClick = (e32, i24, s26) => {
      this.setFocus(s26), this.dispatchItemClick(e32, i24, s26);
    }, this.onFocus = () => {
      clearTimeout(this.blurRequest), this.state.focusedItemId === void 0 && this.data.length && this.setFocus(this.state.tabbableItemId);
    }, this.onBlur = () => {
      clearTimeout(this.blurRequest), this.blurRequest = window.setTimeout(() => this.setFocus(void 0), 0);
    }, this.onKeyDown = (e32) => {
      const i24 = this.getFocusedItem();
      if (i24 && this.fieldsSvc) {
        const s26 = F7(i24, this.state.focusedItemId, this.data, e32.keyCode, this.fieldsSvc);
        s26 !== this.state.focusedItemId && (e32.preventDefault(), this.allowExplicitFocus = true, this.setFocus(s26)), this.dispatchEventsOnKeyDown(e32, i24);
      }
    }, this.onContextMenu = (e32, i24, s26) => {
      if (this.props.onContextMenu) {
        const o21 = {
          target: this,
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          item: i24,
          itemID: s26
        };
        this.props.onContextMenu.call(void 0, o21);
      }
    }, this.showLicenseWatermark = !h(e28, { component: "TreeView" });
  }
  get treeGuid() {
    return this.props.id + "-accessibility-id";
  }
  /**
   * @hidden
   */
  get element() {
    return this._element;
  }
  /**
   * @hidden
   */
  render() {
    this.fieldsSvc = new h2(this.props);
    const { size: t25, className: e32 } = this.props;
    return l15.createElement(
      "div",
      {
        id: this.props.id,
        style: { position: "relative", ...this.props.style },
        className: n2(
          "k-treeview",
          {
            [`k-treeview-${N2[t25] || t25}`]: t25,
            "k-user-select-none": this.props.draggable,
            "k-rtl": this.props.dir === "rtl"
          },
          e32
        ),
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        role: "tree",
        "aria-multiselectable": this.ariaMultiSelectable ? true : void 0,
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        ref: (i24) => this._element = i24,
        tabIndex: this.props.tabIndex
      },
      l15.createElement("ul", { className: "k-treeview-lines k-treeview-group", role: "group" }, this.data.map((i24, s26) => l15.createElement(
        c14,
        {
          id: this.props.id + "-item-" + s26,
          item: i24,
          position: s23(s26, this.data),
          itemId: s26.toString(),
          treeGuid: this.treeGuid,
          animate: this.props.animate,
          focusedItemId: this.state.focusedItemId,
          tabbableItemId: this.state.tabbableItemId,
          fieldsService: this.fieldsSvc,
          itemUI: this.props.item,
          checkboxes: this.props.checkboxes,
          ariaMultiSelectable: this.ariaMultiSelectable,
          onItemClick: this.onItemClick,
          onFocusDomElNeeded: this.onFocusDomElNeeded,
          draggable: this.props.draggable,
          onPress: this.onPress,
          onDrag: this.onDrag,
          onRelease: this.onRelease,
          expandIcons: this.props.expandIcons,
          iconField: this.props.iconField,
          onExpandChange: this.onExpandChange,
          onCheckChange: this.onCheckChange,
          onContextMenu: this.onContextMenu,
          key: s26,
          size: t25,
          isRtl: this.props.dir === "rtl"
        }
      ))),
      this.showLicenseWatermark && l15.createElement(l, null)
    );
  }
  /**
   * @hidden
   */
  componentDidUpdate() {
    this.allowExplicitFocus = false, this.refocusDueToFocusIdField();
  }
  dispatchEventsOnKeyDown(t25, e32) {
    if (this.fieldsSvc === null)
      return;
    const i24 = () => this.fieldsSvc && W(this.state.focusedItemId, this.data, this.fieldsSvc);
    t25.keyCode === e2.left && this.fieldsSvc.expanded(e32) && i24() ? this.dispatchExpandChange(t25, e32, this.state.focusedItemId) : t25.keyCode === e2.right && !this.fieldsSvc.expanded(e32) && (this.fieldsSvc.hasChildren(e32) || P(e32, this.props.childrenField)) && i24() ? this.dispatchExpandChange(t25, e32, this.state.focusedItemId) : t25.keyCode === e2.enter && i24() ? this.dispatchItemClick(t25, e32, this.state.focusedItemId) : t25.keyCode === e2.space && i24() && (t25.preventDefault(), this.dispatchCheckChange(t25, e32, this.state.focusedItemId));
  }
  setFocus(t25) {
    if (t25 && this.fieldsSvc)
      if (this.fieldsSvc.focusIdField) {
        const e32 = this.getItemById(t25);
        this.setState({ focusedItemId: t25, focusedItemPublicId: this.fieldsSvc.focusId(e32) });
      } else
        this.setState({ focusedItemId: t25 });
    else
      this.setState((e32) => ({
        focusedItemId: void 0,
        focusedItemPublicId: void 0,
        tabbableItemId: e32.focusedItemId
      }));
  }
  getFocusedItem() {
    return this.state.focusedItemId ? this.getItemById(this.state.focusedItemId) : void 0;
  }
  getItemById(t25) {
    return itemIdUtils_exports.getItemById(t25, this.data, this.props.childrenField || e27);
  }
  dispatchCheckChange(t25, e32, i24) {
    v2(this.props.onCheckChange, t25, this, { item: e32, itemHierarchicalIndex: i24 });
  }
  dispatchExpandChange(t25, e32, i24) {
    v2(this.props.onExpandChange, t25, this, { item: e32, itemHierarchicalIndex: i24 });
  }
  dispatchItemClick(t25, e32, i24) {
    v2(this.props.onItemClick, t25, this, { item: e32, itemHierarchicalIndex: i24 });
  }
  refocusDueToFocusIdField() {
    if (this.fieldsSvc && this.fieldsSvc.focusIdField) {
      const t25 = this.state.focusedItemPublicId;
      if (t25) {
        const e32 = this.props.getFocusHierarchicalIndex ? this.props.getFocusHierarchicalIndex(t25) : R(
          t25,
          this.fieldsSvc.focusIdField,
          this.data,
          this.props.childrenField
        );
        e32 !== this.state.focusedItemId && (this.allowExplicitFocus = true, this.setState({ focusedItemId: e32 }));
      }
    }
  }
  get ariaMultiSelectable() {
    return this.props["aria-multiselectable"] === true || this.props["aria-multiselectable"] === "true";
  }
  get data() {
    return this.props.data || [];
  }
  focusDomItem(t25) {
    t25.focus();
  }
  /**
   * Returns the `guid` which is associated with the TreeView.
   */
  get guid() {
    return this.treeGuid;
  }
};
r13.propTypes = {
  data: import_prop_types30.default.arrayOf(import_prop_types30.default.any),
  animate: import_prop_types30.default.bool,
  tabIndex: import_prop_types30.default.number,
  focusIdField: import_prop_types30.default.string,
  getHierarchicalIndexById: import_prop_types30.default.func,
  onExpandChange: import_prop_types30.default.func,
  onItemClick: import_prop_types30.default.func,
  expandField: import_prop_types30.default.string,
  selectField: import_prop_types30.default.string,
  iconField: import_prop_types30.default.string,
  childrenField: import_prop_types30.default.string,
  hasChildrenField: import_prop_types30.default.string,
  textField: import_prop_types30.default.string,
  disableField: import_prop_types30.default.string,
  item: import_prop_types30.default.any,
  "aria-multiselectable": (t25, e32, i24) => t25[e32] !== void 0 && t25[e32] !== true && t25[e32] !== false && t25[e32] !== "true" && t25[e32] !== "false" ? new Error(
    "Invalid prop `" + e32 + "` supplied to `" + i24 + "`. Validation failed."
  ) : null,
  "aria-label": import_prop_types30.default.string,
  "aria-labelledby": import_prop_types30.default.string,
  size: import_prop_types30.default.oneOf([null, "small", "medium", "large"]),
  dir: import_prop_types30.default.string
}, r13.defaultProps = {
  animate: true,
  expandField: E5,
  selectField: t21,
  iconField: n24,
  hasChildrenField: _3,
  childrenField: e27,
  textField: I10,
  disableField: D7,
  checkField: c13,
  checkIndeterminateField: s24,
  size: "medium"
};
var m10 = r13;

// node_modules/@progress/kendo-react-treeview/TreeViewDragClue.mjs
var s25 = __toESM(require_react(), 1);
var e29 = class e30 extends s25.PureComponent {
  constructor() {
    super(...arguments), this.state = {
      visible: false,
      top: 0,
      left: 0,
      text: "",
      operationClassName: "cancel"
    };
  }
  /**
   * @hidden
   */
  render() {
    const t25 = { top: this.state.top + "px", left: this.state.left + "px" };
    return this.state.visible && s25.createElement("div", { className: "k-header k-drag-clue", style: { ...this.props.style, ...t25 } }, s25.createElement(
      v3,
      {
        className: n2("k-drag-status"),
        name: this.state.operationClassName && i2(this.state.operationClassName),
        icon: this.state.operationClassName === "k-i-plus" ? plusIcon : this.state.operationClassName === "k-i-insert-up" ? insertTopIcon : this.state.operationClassName === "k-i-insert-down" ? insertBottomIcon : this.state.operationClassName === "k-i-insert-middle" ? insertMiddleIcon : cancelIcon
      }
    ), this.state.text);
  }
  /**
   * Displays the TreeViewDragClue component.
   *
   * @param top - The `top` CSS position of the component.
   * @param left - The `left` CSS position of the component.
   * @param text - The text of the component.
   * @param operationClassName - The CSS class name which is related to the specific drop operation.
   */
  show(t25, i24, o21, n27) {
    this.setState({ visible: true, top: t25, left: i24, text: o21, operationClassName: n27 });
  }
  /**
   * Hides the TreeViewDragClue component.
   */
  hide() {
    this.setState({ visible: false });
  }
};
e29.defaultProps = { style: { display: "block", position: "absolute", zIndex: 2e4, padding: "4px 6px" } };

// node_modules/@progress/kendo-react-treeview/index.mjs
var o20 = a2(m10);
o20.displayName = "KendoReactTreeView";

// node_modules/@progress/kendo-react-dropdowns/DropDownTree/useDropdownWidth.mjs
var c15 = __toESM(require_react(), 1);
function u16(t25, o21, n27) {
  const [d10, i24] = c15.useState(o21);
  return c15.useEffect(() => {
    d10 !== void 0 && t25.current && i24(t25.current.offsetWidth);
  }, n27), d10;
}
function r15(t25) {
  return typeof t25 == "string" ? Number(t25.replace("px", "")) : t25 || void 0;
}
function W3(t25, o21, n27, d10) {
  const i24 = r15(o21.popupSettings.width), s26 = (n27.width !== void 0 && r15(n27.width)) !== i24, h16 = d10.width !== void 0, p18 = s26 ? n27.width : h16 ? d10.width : i24, e32 = r15(u16(t25, p18));
  return s26 || h16 ? p18 : e32 && i24 && e32 > i24 ? e32 : i24;
}

// node_modules/@progress/kendo-react-dropdowns/DropDownTree/ListNoData.mjs
var e31 = __toESM(require_react(), 1);
var a35 = (t25) => e31.createElement("div", { className: "k-nodata" }, e31.createElement("div", null, t25.children));

// node_modules/@progress/kendo-react-dropdowns/DropDownTree/DropDownTree.mjs
var { sizeMap: wt, roundedMap: Ft } = a4;
var Dt = "Please select a value from the list!";
var It = (E8) => t23.createElement("span", { className: "k-input-value-text" }, E8.children);
var Re = (E8) => E8.split("_").map((D8) => parseInt(D8, 10));
var St2 = (E8, D8) => {
  const { validationMessage: U2, valid: r16, required: a37 } = E8;
  return {
    customError: U2 !== void 0,
    valid: !!(r16 !== void 0 ? r16 : !a37 || D8),
    valueMissing: !D8
  };
};
var ie2 = {
  selectField: "selected",
  subItemsField: "items",
  popupSettings: {
    animate: true,
    width: "200px",
    height: "200px"
  },
  data: [],
  required: false,
  style: {},
  validityStyles: true,
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
var Mt = a();
var Te2 = t23.forwardRef((E8, D8) => {
  const U2 = !h(e24, { component: "DropDownTree" }), r16 = n4(Mt, E8), a37 = {
    ...ie2,
    ...r16
  }, Ne3 = I(), le4 = a37.id || Ne3, {
    data: T7,
    dataItemKey: N4,
    popupSettings: b8 = {},
    style: P10,
    opened: u17,
    disabled: I11,
    onOpen: V3 = o,
    onClose: m11 = o,
    placeholder: J3,
    label: O6,
    name: Pe,
    selectField: z5,
    subItemsField: K5,
    validationMessage: H3,
    valid: Ve2,
    required: Q3,
    validityStyles: Oe3
  } = a37, X = e4(a37.tabIndex, I11), i24 = t23.useRef(null), f13 = t23.useRef(null), S5 = t23.useRef(null), Y2 = t23.useRef(null), $6 = t23.useRef(null), h16 = t23.useRef(null), _4 = t23.useRef(false), [se5, Ke] = t23.useState(void 0), C7 = a37.value !== void 0, v14 = C7 ? a37.value : se5 !== void 0 ? se5 : a37.defaultValue, L8 = l12(v14), Z2 = L8 ? i18(v14, a37.textField) : "", ee4 = St2({ validationMessage: H3, valid: Ve2, required: Q3 }, L8), Le3 = t23.useCallback(() => f13.current && f13.current.focus(), []);
  t23.useImperativeHandle(i24, () => ({
    props: a37,
    element: f13.current,
    focus: Le3
  })), t23.useImperativeHandle(D8, () => i24.current);
  const k8 = u2(f13, a37.dir), We2 = {
    width: W3(
      f13,
      ie2,
      { ...ie2.popupSettings, ...b8 },
      P10
    ),
    ...k8 !== void 0 ? { direction: k8 } : {}
  }, [Be, ce] = t23.useState(false), l16 = u17 !== void 0 ? u17 : Be, [d10, te5] = t23.useState(false), [ne3, qe2] = t23.useState(), [ue, Ae2] = t23.useState(""), de3 = n(), x8 = !!(ne3 && de3 && ne3 <= de3.medium && a37.adaptive), ze3 = t23.useCallback(() => {
    $6.current && $6.current.setCustomValidity && $6.current.setCustomValidity(
      ee4.valid ? "" : H3 === void 0 ? Dt : H3
    );
  }, [H3, ee4]);
  t23.useEffect(ze3), t23.useEffect(() => {
    const e32 = e && window.ResizeObserver && new window.ResizeObserver(Xe.bind(void 0));
    return document != null && document.body && e32 && e32.observe(document.body), () => {
      document != null && document.body && e32 && e32.disconnect();
    };
  }, []);
  const pe3 = t23.useCallback(
    (e32) => {
      if (!l16) {
        if (V3) {
          const o21 = { ...e32 };
          V3.call(void 0, o21);
        }
        u17 === void 0 && ce(true);
      }
    },
    [l16, u17, V3]
  ), w11 = t23.useCallback(
    (e32) => {
      if (l16) {
        if (m11) {
          const o21 = { ...e32 };
          m11.call(void 0, o21);
        }
        u17 === void 0 && (ce(false), x8 && setTimeout(() => {
          var o21;
          g9((o21 = Y2.current) == null ? void 0 : o21.element);
        }, 300));
      }
    },
    [l16, u17, m11, x8]
  ), He = t23.useCallback(
    (e32) => {
      if (!e32.isDefaultPrevented() && i24.current) {
        te5(true);
        const o21 = {
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          target: i24.current
        };
        (l16 ? w11 : pe3)(o21);
      }
    },
    [l16, u17, V3, m11]
  ), M7 = t23.useCallback((e32) => {
    _4.current = true, e32(), window.setTimeout(() => _4.current = false, 0);
  }, []), $e = t23.useCallback(
    (e32) => {
      var F8, xe2;
      const { keyCode: o21, altKey: s26 } = e32, p18 = h16.current && h16.current.element;
      if (!i24.current || e32.isDefaultPrevented() && ((F8 = S5.current) == null ? void 0 : F8.element) === e32.target)
        return;
      const R5 = {
        syntheticEvent: e32,
        nativeEvent: e32.nativeEvent,
        target: i24.current
      };
      if (l16)
        if (o21 === e2.esc || s26 && o21 === e2.up)
          e32.preventDefault(), w11(R5);
        else if (p18 && p18.querySelector(".k-focus") && (o21 === e2.up || o21 === e2.down || o21 === e2.left || o21 === e2.right || o21 === e2.home || o21 === e2.end)) {
          if (o21 === e2.up && ((xe2 = S5.current) != null && xe2.element)) {
            const q3 = Array.from(p18.querySelectorAll(".k-treeview-item")), we = [...q3].reverse().find((A13) => !!(A13 && A13.querySelector(".k-focus")));
            if (we && q3.indexOf(we) === 0)
              return M7(() => {
                var A13;
                g9((A13 = S5.current) == null ? void 0 : A13.element);
              });
          }
          M7(o);
        } else
          o21 === e2.down && M7(() => {
            var q3;
            g9(((q3 = S5.current) == null ? void 0 : q3.element) || p18);
          });
      else
        s26 && o21 === e2.down ? (e32.preventDefault(), pe3(R5)) : l16 || o21 === e2.esc && ge3(e32);
    },
    [l16, u17, V3, m11]
  ), me2 = t23.useCallback((e32) => {
    const { keyCode: o21, altKey: s26 } = e32;
    s26 || o21 !== e2.up && o21 !== e2.down || (e32.preventDefault(), M7(
      o21 === e2.up ? () => {
        g9(f13.current);
      } : () => {
        g9(h16.current && h16.current.element);
      }
    ));
  }, []), g9 = t23.useCallback((e32) => {
    e32 && M7(() => e32.focus());
  }, []), _e = t23.useCallback(() => {
    var e32;
    !d10 && l16 && !u17 ? w11({ target: i24.current }) : r16.filterable ? g9((e32 = S5.current) == null ? void 0 : e32.element) : g9(h16.current && h16.current.element);
  }, [m11, r16.filterable, d10, u17, l16]), je = t23.useCallback(() => {
    d10 && g9(f13.current);
  }, [d10]), Ge2 = t23.useCallback(
    (e32) => {
      if (!d10 && !_4.current && (te5(true), r16.onFocus && i24.current)) {
        const o21 = {
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          target: i24.current
        };
        r16.onFocus.call(void 0, o21);
      }
    },
    [d10, r16.onFocus]
  ), Ue = t23.useCallback(
    (e32) => {
      if (d10 && !_4.current && i24.current) {
        te5(false);
        const o21 = {
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          target: i24.current
        };
        if (r16.onBlur) {
          const s26 = { ...o21 };
          r16.onBlur.call(void 0, s26);
        }
        x8 || w11(o21);
      }
    },
    [d10, r16.onBlur, l16, u17, m11]
  ), Je = t23.useCallback(() => {
    d10 && M7(o), x8 && setTimeout(() => {
      var e32;
      g9((e32 = Y2.current) == null ? void 0 : e32.element);
    }, 300);
  }, [d10, x8]), fe2 = t23.useCallback(
    (e32, o21, s26) => {
      if (r16.onChange) {
        const p18 = {
          value: o21,
          level: s26 ? Re(s26) : [],
          ...e32
        };
        r16.onChange.call(void 0, p18);
      }
      C7 || Ke(o21);
    },
    [r16.onChange, C7]
  ), ve = t23.useCallback(
    (e32) => {
      if (p13(e32.item, v14, N4) || !i24.current)
        return;
      const { item: o21, itemHierarchicalIndex: s26, nativeEvent: p18, syntheticEvent: R5 } = e32, F8 = {
        syntheticEvent: R5,
        nativeEvent: p18,
        target: i24.current
      };
      fe2(F8, o21, s26), w11(F8);
    },
    [C7, v14, r16.onChange, N4, l16, u17, m11]
  ), ge3 = t23.useCallback(
    (e32) => {
      if (!i24.current)
        return;
      const o21 = {
        syntheticEvent: e32,
        nativeEvent: e32.nativeEvent,
        target: i24.current
      };
      fe2(o21, null), w11(o21), e32.preventDefault();
    },
    [C7, r16.onChange, l16, u17, m11]
  ), be3 = t23.useCallback(
    (e32) => {
      if (e32.syntheticEvent.stopPropagation(), r16.onExpandChange && i24.current) {
        const { item: o21, itemHierarchicalIndex: s26, nativeEvent: p18, syntheticEvent: R5 } = e32, F8 = {
          level: Re(s26),
          item: o21,
          nativeEvent: p18,
          syntheticEvent: R5,
          target: i24.current
        };
        r16.onExpandChange.call(void 0, F8);
      }
    },
    [r16.onExpandChange]
  ), he3 = t23.useCallback(
    (e32) => {
      if (r16.onFilterChange && i24.current) {
        const s26 = {
          filter: {
            field: r16.textField,
            operator: "contains",
            value: e32.target.value
          },
          syntheticEvent: e32.syntheticEvent,
          nativeEvent: e32.nativeEvent,
          target: i24.current
        };
        r16.onFilterChange.call(void 0, s26), r16.filter === void 0 && Ae2(e32.target.value);
      }
    },
    [r16.onFilterChange, r16.filter, r16.textField]
  ), Qe = () => {
    const e32 = a37.filterable ? t23.createElement(
      u12,
      {
        value: a37.filter === void 0 ? ue : a37.filter,
        ref: Y2,
        onChange: he3,
        onKeyDown: me2,
        size: y11,
        rounded: W4,
        fillMode: B6
      }
    ) : null, o21 = {
      title: a37.adaptiveTitle,
      expand: l16,
      onClose: (s26) => w11(s26),
      windowWidth: ne3,
      mobileFilter: e32
    };
    return t23.createElement(I7, { ...o21 }, t23.createElement(t3, { overflowHidden: true }, t23.createElement("div", { className: "k-list-container" }, t23.createElement("div", { className: "k-list k-list-lg" }, T7.length > 0 ? t23.createElement(
      o20,
      {
        ref: h16,
        tabIndex: X,
        data: ye,
        focusIdField: N4,
        textField: a37.textField,
        selectField: z5,
        expandField: a37.expandField,
        childrenField: K5,
        expandIcons: true,
        onItemClick: ve,
        onExpandChange: be3,
        size: y11,
        item: a37.item,
        dir: k8,
        animate: b8.animate
      }
    ) : t23.createElement(Ee4, null, oe.toLanguageString(o17, s21[o17]))))));
  }, Xe = t23.useCallback((e32) => {
    for (const o21 of e32)
      qe2(o21.target.clientWidth);
  }, []), ye = t23.useMemo(() => C7 || !L8 ? T7 : i(
    T7,
    K5,
    (e32) => w(e32, K5, { [z5]: p13(e32, v14, N4) })
  ), [T7, v14, C7, L8, z5, K5]), Ee4 = a37.listNoData || a35, Ye = a37.valueHolder || It, oe = i4(), Ce3 = !Oe3 || ee4.valid, { size: y11, rounded: W4, fillMode: B6 } = a37, ke4 = t23.createElement(t23.Fragment, null, t23.createElement(
    "span",
    {
      className: n2("k-dropdowntree k-picker", a37.className, {
        [`k-picker-${wt[y11] || y11}`]: y11,
        [`k-rounded-${Ft[W4] || W4}`]: W4,
        [`k-picker-${B6}`]: B6,
        "k-focus": d10,
        "k-invalid": !Ce3,
        "k-loading": a37.loading,
        "k-required": Q3,
        "k-disabled": a37.disabled
      }),
      tabIndex: X,
      accessKey: a37.accessKey,
      id: le4,
      style: O6 ? { ...P10, width: void 0 } : P10,
      dir: k8,
      ref: f13,
      onKeyDown: I11 ? void 0 : $e,
      onMouseDown: Je,
      onClick: I11 ? void 0 : He,
      onFocus: Ge2,
      onBlur: Ue,
      role: "combobox",
      "aria-haspopup": "tree",
      "aria-expanded": l16,
      "aria-disabled": I11,
      "aria-label": O6,
      "aria-labelledby": a37.ariaLabelledBy,
      "aria-describedby": a37.ariaDescribedBy,
      "aria-required": Q3
    },
    t23.createElement("span", { className: "k-input-inner" }, (Z2 || J3) && t23.createElement(Ye, { item: v14 }, Z2 || J3)),
    a37.loading && t23.createElement(v3, { className: "k-input-loading-icon", name: "loading" }),
    L8 && !I11 && t23.createElement(
      "span",
      {
        onClick: ge3,
        className: "k-clear-value",
        title: oe.toLanguageString(a28, s21[a28]),
        role: "button",
        tabIndex: -1,
        onMouseDown: (e32) => e32.preventDefault()
      },
      t23.createElement(v3, { name: "x", icon: xIcon })
    ),
    t23.createElement(
      M,
      {
        tabIndex: -1,
        type: "button",
        "aria-label": "select",
        className: "k-input-button",
        size: y11,
        fillMode: B6,
        themeColor: "base",
        rounded: null,
        icon: "caret-alt-down",
        svgIcon: caretAltDownIcon
      }
    ),
    t23.createElement(
      "select",
      {
        name: Pe,
        ref: $6,
        tabIndex: -1,
        "aria-hidden": true,
        title: O6,
        style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
      },
      t23.createElement("option", { value: a37.valueMap ? a37.valueMap.call(void 0, v14) : v14 })
    ),
    !x8 && t23.createElement(
      te,
      {
        ...b8,
        className: n2(b8.className, { "k-rtl": k8 === "rtl" }),
        popupClass: n2(b8.popupClass, "k-dropdowntree-popup k-list-container"),
        style: We2,
        anchor: b8.anchor || f13.current,
        show: l16,
        onOpen: _e,
        onClose: je
      },
      a37.filterable && t23.createElement(
        u12,
        {
          value: a37.filter === void 0 ? ue : a37.filter,
          ref: S5,
          onChange: he3,
          onKeyDown: me2,
          size: y11,
          rounded: W4,
          fillMode: B6,
          renderListFilterWrapper: true,
          renderPrefixSeparator: true
        }
      ),
      T7.length > 0 ? t23.createElement(
        o20,
        {
          style: { height: b8.height },
          ref: h16,
          tabIndex: X,
          data: ye,
          focusIdField: N4,
          textField: a37.textField,
          selectField: z5,
          expandField: a37.expandField,
          childrenField: K5,
          expandIcons: true,
          onItemClick: ve,
          onExpandChange: be3,
          size: y11,
          item: a37.item,
          dir: k8,
          animate: b8.animate
        }
      ) : t23.createElement(Ee4, null, oe.toLanguageString(o17, s21[o17])),
      U2 && t23.createElement(l, null)
    )
  ), x8 && Qe());
  return O6 ? t23.createElement(
    I2,
    {
      label: O6,
      editorValue: Z2,
      editorPlaceholder: J3,
      editorValid: Ce3,
      editorDisabled: I11,
      editorId: le4,
      style: { width: P10 ? P10.width : void 0 },
      children: ke4,
      dir: k8
    }
  ) : ke4;
});
var Rt = {
  opened: import_prop_types31.default.bool,
  disabled: import_prop_types31.default.bool,
  dir: import_prop_types31.default.string,
  tabIndex: import_prop_types31.default.number,
  accessKey: import_prop_types31.default.string,
  data: import_prop_types31.default.array,
  value: import_prop_types31.default.any,
  valueMap: import_prop_types31.default.func,
  placeholder: import_prop_types31.default.string,
  dataItemKey: import_prop_types31.default.string.isRequired,
  textField: import_prop_types31.default.string.isRequired,
  selectField: import_prop_types31.default.string,
  expandField: import_prop_types31.default.string,
  subItemsField: import_prop_types31.default.string,
  className: import_prop_types31.default.string,
  style: import_prop_types31.default.object,
  label: import_prop_types31.default.string,
  validationMessage: import_prop_types31.default.string,
  validityStyles: import_prop_types31.default.bool,
  valid: import_prop_types31.default.bool,
  required: import_prop_types31.default.bool,
  name: import_prop_types31.default.string,
  id: import_prop_types31.default.string,
  ariaLabelledBy: import_prop_types31.default.string,
  ariaDescribedBy: import_prop_types31.default.string,
  filterable: import_prop_types31.default.bool,
  filter: import_prop_types31.default.string,
  loading: import_prop_types31.default.bool,
  popupSettings: import_prop_types31.default.shape({
    animate: import_prop_types31.default.oneOfType([
      import_prop_types31.default.bool,
      import_prop_types31.default.shape({
        openDuration: import_prop_types31.default.number,
        closeDuration: import_prop_types31.default.number
      })
    ]),
    popupClass: import_prop_types31.default.string,
    className: import_prop_types31.default.string,
    appendTo: import_prop_types31.default.any,
    width: import_prop_types31.default.oneOfType([import_prop_types31.default.string, import_prop_types31.default.number]),
    height: import_prop_types31.default.oneOfType([import_prop_types31.default.string, import_prop_types31.default.number])
  }),
  onOpen: import_prop_types31.default.func,
  onClose: import_prop_types31.default.func,
  onFocus: import_prop_types31.default.func,
  onBlur: import_prop_types31.default.func,
  onChange: import_prop_types31.default.func,
  onFilterChange: import_prop_types31.default.func,
  onExpandChange: import_prop_types31.default.func,
  item: import_prop_types31.default.func,
  valueHolder: import_prop_types31.default.func,
  listNoData: import_prop_types31.default.func,
  adaptiveTitle: import_prop_types31.default.string,
  adaptive: import_prop_types31.default.bool
};
Te2.displayName = "KendoReactDropDownTree";
Te2.propTypes = Rt;

// node_modules/@progress/kendo-react-dropdowns/MultiSelectTree/MultiSelectTree.mjs
var t24 = __toESM(require_react(), 1);
var import_prop_types32 = __toESM(require_prop_types(), 1);
var Tt = "Please select a value from the list!";
var { sizeMap: Oe2, roundedMap: Dt2 } = a4;
var Mt2 = (P10) => P10.split("_").map((D8) => parseInt(D8, 10));
var Rt2 = (P10, D8) => {
  const { validationMessage: a37, valid: V3, required: ae3 } = P10;
  return {
    customError: a37 !== void 0,
    valid: !!(V3 !== void 0 ? V3 : !ae3 || D8),
    valueMissing: !D8
  };
};
var y10 = {
  checkField: "checkField",
  checkIndeterminateField: "checkIndeterminateField",
  subItemsField: "items",
  popupSettings: {
    animate: true,
    width: "200px",
    height: "200px"
  },
  size: "medium",
  rounded: "medium",
  fillMode: "solid",
  required: false,
  validityStyles: true
};
var Nt = a();
var Le2 = t24.forwardRef(
  (P10, D8) => {
    const a37 = n4(Nt, P10), V3 = !h(e24, { component: "MultiSelectTree" }), ae3 = I(), O6 = a37.id || ae3, {
      data: W4 = [],
      dataItemKey: x8,
      style: L8 = {},
      placeholder: pe3,
      label: B6,
      name: Be,
      validationMessage: q3,
      valid: Ke,
      tags: fe2,
      value: m11,
      opened: S5,
      disabled: k8,
      popupSettings: M7 = y10.popupSettings,
      checkField: me2 = y10.checkField,
      checkIndeterminateField: ge3 = y10.checkIndeterminateField,
      subItemsField: ve = y10.subItemsField,
      size: v14 = y10.size,
      rounded: K5 = y10.rounded,
      fillMode: A13 = y10.fillMode,
      required: he3 = y10.required,
      validityStyles: Ve2 = y10.validityStyles,
      onOpen: re3 = o,
      onClose: z5 = o
    } = a37, H3 = e4(a37.tabIndex, k8), l16 = t24.useRef(null), C7 = t24.useRef(null), w11 = t24.useRef(null), ie3 = t24.useRef(null), $6 = t24.useRef(null), E8 = t24.useRef(null), G6 = t24.useRef(false), _4 = t24.useRef([]), j4 = t24.useRef(null), [R5, We2] = t24.useState(), [qe2, be3] = t24.useState(false), [d10, oe] = t24.useState(false), [le4, Ae2] = t24.useState(), [ze3, He] = t24.useState([]), [ye, $e] = t24.useState(""), s26 = S5 !== void 0 ? S5 : qe2, se5 = !!(Array.isArray(m11) && m11.length), ce = Rt2({ validationMessage: q3, valid: Ke, required: he3 }, se5), I11 = u2(C7, a37.dir), Ge2 = {
      width: W3(C7, y10, M7, L8),
      ...I11 !== void 0 ? { direction: I11 } : {}
    }, _e = t24.useCallback(() => C7.current && C7.current.focus(), []), Ce3 = n(), N4 = !!(le4 && Ce3 && le4 <= Ce3.medium && a37.adaptive);
    _4.current = fe2 === void 0 ? (m11 || []).map((e32) => ({ text: i18(e32, a37.textField), data: [e32] })) : [...fe2], t24.useImperativeHandle(l16, () => ({
      props: a37,
      element: C7.current,
      focus: _e
    })), t24.useImperativeHandle(
      D8,
      () => l16.current
    );
    const je = t24.useCallback(() => {
      $6.current && $6.current.setCustomValidity && $6.current.setCustomValidity(
        ce.valid ? "" : q3 === void 0 ? Tt : q3
      );
    }, [q3, ce]);
    t24.useEffect(je), t24.useEffect(() => {
      const e32 = e && window.ResizeObserver && new window.ResizeObserver(at.bind(void 0));
      return document != null && document.body && e32 && e32.observe(document.body), () => {
        e32 && e32.disconnect();
      };
    }, []), t24.useEffect(() => {
      j4.current && s26 && j4.current.setPosition(j4.current.element);
    }, [m11, s26]);
    const F8 = t24.useCallback(
      (e32, r16, i24) => {
        if (a37.onChange) {
          const b8 = {
            items: r16,
            operation: i24,
            ...e32
          };
          a37.onChange.call(void 0, b8);
        }
      },
      [a37.onChange]
    ), U2 = t24.useCallback(
      (e32) => {
        if (p13(e32.item, m11, x8) || !l16.current)
          return;
        const { item: r16, nativeEvent: i24, syntheticEvent: b8 } = e32, T7 = {
          syntheticEvent: b8,
          nativeEvent: i24,
          target: l16.current
        };
        F8(T7, [r16], "toggle");
      },
      [m11, x8, F8]
    ), J3 = t24.useCallback(
      (e32) => {
        if (!s26) {
          if (re3) {
            const r16 = { ...e32 };
            re3.call(void 0, r16);
          }
          S5 === void 0 && (be3(true), He(m11 || []), N4 && setTimeout(() => {
            var r16;
            u17((r16 = ie3.current) == null ? void 0 : r16.element);
          }, 300));
        }
      },
      [s26, S5, re3, N4, ie3]
    ), g9 = t24.useCallback(
      (e32) => {
        if (s26) {
          if (z5) {
            const r16 = { ...e32 };
            z5.call(void 0, r16);
          }
          S5 === void 0 && be3(false);
        }
      },
      [s26, S5, z5]
    ), h16 = t24.useCallback((e32) => {
      G6.current = true, e32(), window.setTimeout(() => G6.current = false, 0);
    }, []), u17 = t24.useCallback(
      (e32) => {
        e32 && h16(() => e32.focus());
      },
      [h16]
    ), Ue = t24.useCallback(() => {
      var e32;
      !d10 && s26 ? g9({ target: l16.current }) : a37.filterable ? u17((e32 = w11.current) == null ? void 0 : e32.element) : u17(E8.current && E8.current.element);
    }, [d10, s26, u17, g9, a37.filterable]), Je = t24.useCallback(() => {
      d10 && u17(C7.current);
    }, [d10, u17]), Qe = t24.useCallback(
      (e32) => {
        if (!d10 && !G6.current && (oe(true), a37.onFocus && l16.current)) {
          const r16 = {
            syntheticEvent: e32,
            nativeEvent: e32.nativeEvent,
            target: l16.current
          };
          a37.onFocus.call(void 0, r16);
        }
      },
      [d10, a37.onFocus]
    ), Xe = t24.useCallback(
      (e32) => {
        if (d10 && !G6.current && l16.current) {
          oe(false);
          const r16 = {
            syntheticEvent: e32,
            nativeEvent: e32.nativeEvent,
            target: l16.current
          };
          if (a37.onBlur) {
            const i24 = { ...r16 };
            a37.onBlur.call(void 0, i24);
          }
          N4 || g9(r16);
        }
      },
      [d10, a37.onBlur, s26, S5, z5]
    ), Ye = t24.useCallback(() => {
      d10 && h16(o);
    }, [d10, h16]), Ze = t24.useCallback(
      (e32) => {
        if (!e32.isDefaultPrevented() && l16.current) {
          oe(true);
          const r16 = {
            syntheticEvent: e32,
            nativeEvent: e32.nativeEvent,
            target: l16.current
          };
          s26 || J3(r16);
        }
      },
      [s26, J3]
    ), et = t24.useCallback(
      (e32) => {
        var Y2, Te3;
        const { keyCode: r16, altKey: i24 } = e32, b8 = E8.current && E8.current.element;
        if (!l16.current || e32.isDefaultPrevented() && ((Y2 = w11.current) == null ? void 0 : Y2.element) === e32.target)
          return;
        const T7 = {
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          target: l16.current
        };
        if (m11 && m11.length > 0 && (r16 === e2.left || r16 === e2.right || r16 === e2.home || r16 === e2.end || r16 === e2.delete)) {
          const c16 = _4.current;
          let p18 = R5 ? c16.findIndex((rt) => y5(rt, R5, x8)) : -1, f13;
          const de3 = p18 !== -1;
          r16 === e2.left ? (de3 ? p18 = Math.max(0, p18 - 1) : p18 = c16.length - 1, f13 = c16[p18]) : r16 === e2.right ? p18 === c16.length - 1 ? f13 = void 0 : de3 && (p18 = Math.min(c16.length - 1, p18 + 1), f13 = c16[p18]) : r16 === e2.home ? f13 = c16[0] : r16 === e2.end ? f13 = c16[c16.length - 1] : r16 === e2.delete && de3 && F8(T7, c16[p18].data, "delete"), f13 !== R5 && We2(f13);
        }
        if (s26)
          if (r16 === e2.esc || i24 && r16 === e2.up)
            e32.preventDefault(), g9(T7);
          else if (b8 && b8.querySelector(".k-focus") && (r16 === e2.up || r16 === e2.down || r16 === e2.left || r16 === e2.right || r16 === e2.home || r16 === e2.end)) {
            if (r16 === e2.up && ((Te3 = w11.current) != null && Te3.element)) {
              const c16 = Array.from(b8.querySelectorAll(".k-treeview-item")), p18 = [...c16].reverse().find((f13) => !!(f13 && f13.querySelector(".k-focus")));
              if (p18 && c16.indexOf(p18) === 0)
                return h16(() => {
                  var f13;
                  u17((f13 = w11.current) == null ? void 0 : f13.element);
                });
            }
            h16(o);
          } else
            r16 === e2.down && h16(() => {
              var c16;
              u17(((c16 = w11.current) == null ? void 0 : c16.element) || b8);
            });
        else
          i24 && r16 === e2.down && (e32.preventDefault(), J3(T7));
      },
      [s26, g9, u17, h16, J3, R5, x8, m11, F8]
    ), ke4 = t24.useCallback(
      (e32) => {
        const { keyCode: r16, altKey: i24 } = e32;
        i24 || r16 !== e2.up && r16 !== e2.down || (e32.preventDefault(), h16(
          r16 === e2.up ? () => {
            u17(C7.current);
          } : () => {
            u17(E8.current && E8.current.element);
          }
        ));
      },
      [u17, h16]
    ), ue = t24.useCallback(
      (e32) => {
        if (!l16.current)
          return;
        const r16 = {
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          target: l16.current
        };
        F8(r16, [], "clear"), g9(r16), e32.preventDefault();
      },
      [F8, g9]
    ), tt = t24.useCallback(
      (e32, r16) => {
        var i24;
        g9({ target: l16.current }), d10 || u17((i24 = w11.current) == null ? void 0 : i24.element), F8(
          {
            syntheticEvent: r16,
            nativeEvent: r16.nativeEvent,
            target: l16.current
          },
          e32,
          "delete"
        );
      },
      [F8, g9, u17, d10]
    ), Ee4 = t24.useCallback(
      (e32) => {
        if (a37.onExpandChange && l16.current) {
          const { item: r16, itemHierarchicalIndex: i24, nativeEvent: b8, syntheticEvent: T7 } = e32, Y2 = {
            level: Mt2(i24),
            item: r16,
            nativeEvent: b8,
            syntheticEvent: T7,
            target: l16.current
          };
          a37.onExpandChange.call(void 0, Y2);
        }
      },
      [a37.onExpandChange]
    ), Fe = t24.useCallback(
      (e32) => {
        if (a37.onFilterChange && l16.current) {
          const i24 = {
            filter: {
              field: a37.textField,
              operator: "contains",
              value: e32.target.value
            },
            syntheticEvent: e32.syntheticEvent,
            nativeEvent: e32.nativeEvent,
            target: l16.current
          };
          a37.onFilterChange.call(void 0, i24), a37.filter === void 0 && $e(e32.target.value);
        }
      },
      [a37.onFilterChange, a37.filter, a37.textField]
    ), xe2 = t24.useCallback(
      (e32) => {
        if (!l16.current)
          return;
        const r16 = {
          syntheticEvent: e32,
          nativeEvent: e32.nativeEvent,
          target: l16.current
        };
        a37.onCancel && a37.onCancel.call(void 0, r16), g9(r16), e32.preventDefault();
      },
      [a37.onCancel, g9]
    ), nt = () => {
      const e32 = a37.filterable ? t24.createElement(
        u12,
        {
          value: a37.filter === void 0 ? ye : a37.filter,
          ref: ie3,
          onChange: Fe,
          onKeyDown: ke4,
          size: v14,
          rounded: K5,
          fillMode: A13
        }
      ) : null, r16 = {
        title: a37.adaptiveTitle,
        expand: s26,
        onClose: (i24) => a37.onCancel ? xe2(i24) : ue(i24),
        windowWidth: le4,
        mobileFilter: e32,
        footer: {
          cancelText: Q3.toLanguageString(
            p15,
            s21[p15]
          ),
          onCancel: (i24) => a37.onCancel ? xe2(i24) : ue(i24),
          applyText: Q3.toLanguageString(
            d8,
            s21[d8]
          ),
          onApply: (i24) => g9(i24)
        }
      };
      return t24.createElement(I7, { ...r16 }, t24.createElement(t3, { overflowHidden: true }, t24.createElement("div", { className: "k-list-container" }, t24.createElement("div", { className: "k-list k-list-lg" }, W4.length > 0 ? t24.createElement(
        o20,
        {
          ref: E8,
          tabIndex: H3,
          data: W4,
          focusIdField: x8,
          textField: a37.textField,
          checkField: me2,
          checkIndeterminateField: ge3,
          expandField: a37.expandField,
          childrenField: ve,
          expandIcons: true,
          onItemClick: U2,
          onCheckChange: U2,
          onExpandChange: Ee4,
          checkboxes: true,
          size: v14,
          item: a37.item,
          dir: I11
        }
      ) : t24.createElement(Se, null, Q3.toLanguageString(o17, s21[o17]))))));
    }, at = t24.useCallback((e32) => {
      for (const r16 of e32)
        Ae2(r16.target.clientWidth);
    }, []), Se = a37.listNoData || a35, Q3 = i4(), we = !Ve2 || ce.valid, X = N4 && s26 ? ze3 : _4.current, Ie2 = t24.createElement(t24.Fragment, null, t24.createElement(
      "span",
      {
        className: n2("k-multiselecttree k-input", a37.className, {
          [`k-input-${Oe2[v14] || v14}`]: v14,
          [`k-rounded-${Dt2[K5] || K5}`]: K5,
          [`k-input-${A13}`]: A13,
          "k-focus": d10 && !k8,
          "k-invalid": !we,
          "k-disabled": k8,
          "k-loading": a37.loading,
          "k-required": he3
        }),
        tabIndex: H3,
        accessKey: a37.accessKey,
        id: O6,
        style: B6 ? { ...L8, width: void 0 } : L8,
        dir: I11,
        ref: C7,
        onKeyDown: k8 ? void 0 : et,
        onMouseDown: Ye,
        onFocus: Qe,
        onBlur: Xe,
        role: "combobox",
        "aria-haspopup": "tree",
        "aria-expanded": s26,
        "aria-disabled": k8,
        "aria-label": B6,
        "aria-labelledby": a37.ariaLabelledBy,
        "aria-describedby": a37.ariaDescribedBy ? a37.ariaDescribedBy : "tagslist-" + O6,
        "aria-required": a37.required,
        onClick: k8 ? void 0 : Ze
      },
      t24.createElement(
        "div",
        {
          id: "tagslist-" + O6,
          className: n2("k-input-values k-chip-list", {
            [`k-chip-list-${Oe2[v14] || v14}`]: v14
          })
        },
        X.length > 0 && t24.createElement(
          g7,
          {
            tag: a37.tag,
            onTagDelete: tt,
            data: X,
            guid: O6,
            focused: R5 ? _4.current.find(
              (e32) => y5(e32, R5, x8)
            ) : void 0,
            size: v14
          }
        )
      ),
      t24.createElement("span", { className: "k-input-inner" }, X.length === 0 && t24.createElement("span", { className: "k-input-value-text" }, pe3)),
      a37.loading && t24.createElement(v3, { className: "k-input-loading-icon", name: "loading" }),
      se5 && !k8 && X.length > 0 && t24.createElement(b6, { onClick: ue }),
      t24.createElement(
        "select",
        {
          name: Be,
          ref: $6,
          tabIndex: -1,
          "aria-hidden": true,
          title: B6,
          style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" }
        },
        t24.createElement("option", { value: a37.valueMap ? a37.valueMap.call(void 0, m11) : m11 })
      ),
      !N4 && t24.createElement(
        te,
        {
          ...M7,
          popupClass: n2(M7.popupClass, "k-multiselecttree-popup"),
          className: n2(M7.className, { "k-rtl": I11 === "rtl" }),
          style: Ge2,
          anchor: M7.anchor || C7.current,
          show: s26,
          onOpen: Ue,
          onClose: Je,
          ref: j4
        },
        a37.filterable && t24.createElement(
          u12,
          {
            value: a37.filter === void 0 ? ye : a37.filter,
            ref: w11,
            onChange: Fe,
            onKeyDown: ke4,
            tabIndex: H3,
            size: v14,
            rounded: K5,
            fillMode: A13,
            renderListFilterWrapper: true,
            renderPrefixSeparator: true
          }
        ),
        W4.length > 0 ? t24.createElement(
          o20,
          {
            style: { height: M7.height },
            ref: E8,
            tabIndex: H3,
            data: W4,
            focusIdField: x8,
            textField: a37.textField,
            checkField: me2,
            checkIndeterminateField: ge3,
            expandField: a37.expandField,
            childrenField: ve,
            expandIcons: true,
            onItemClick: U2,
            onCheckChange: U2,
            onExpandChange: Ee4,
            checkboxes: true,
            size: v14,
            item: a37.item,
            dir: I11
          }
        ) : t24.createElement(Se, null, Q3.toLanguageString(o17, s21[o17])),
        V3 && t24.createElement(l, null)
      )
    ), N4 && nt());
    return B6 ? t24.createElement(
      I2,
      {
        label: B6,
        editorValue: se5,
        editorPlaceholder: pe3,
        editorValid: we,
        editorDisabled: k8,
        editorId: O6,
        style: { width: L8 ? L8.width : void 0 },
        children: Ie2,
        dir: I11
      }
    ) : Ie2;
  }
);
var Pt = {
  opened: import_prop_types32.default.bool,
  disabled: import_prop_types32.default.bool,
  dir: import_prop_types32.default.string,
  tabIndex: import_prop_types32.default.number,
  accessKey: import_prop_types32.default.string,
  data: import_prop_types32.default.array,
  value: import_prop_types32.default.any,
  valueMap: import_prop_types32.default.func,
  placeholder: import_prop_types32.default.string,
  dataItemKey: import_prop_types32.default.string.isRequired,
  textField: import_prop_types32.default.string.isRequired,
  checkField: import_prop_types32.default.string,
  checkIndeterminateField: import_prop_types32.default.string,
  expandField: import_prop_types32.default.string,
  subItemsField: import_prop_types32.default.string,
  className: import_prop_types32.default.string,
  style: import_prop_types32.default.object,
  label: import_prop_types32.default.string,
  validationMessage: import_prop_types32.default.string,
  validityStyles: import_prop_types32.default.bool,
  valid: import_prop_types32.default.bool,
  required: import_prop_types32.default.bool,
  name: import_prop_types32.default.string,
  id: import_prop_types32.default.string,
  ariaLabelledBy: import_prop_types32.default.string,
  ariaDescribedBy: import_prop_types32.default.string,
  filterable: import_prop_types32.default.bool,
  filter: import_prop_types32.default.string,
  loading: import_prop_types32.default.bool,
  tags: import_prop_types32.default.arrayOf(
    import_prop_types32.default.shape({
      text: import_prop_types32.default.string,
      data: import_prop_types32.default.arrayOf(import_prop_types32.default.any)
    })
  ),
  popupSettings: import_prop_types32.default.shape({
    animate: import_prop_types32.default.oneOfType([
      import_prop_types32.default.bool,
      import_prop_types32.default.shape({
        openDuration: import_prop_types32.default.number,
        closeDuration: import_prop_types32.default.number
      })
    ]),
    popupClass: import_prop_types32.default.string,
    className: import_prop_types32.default.string,
    appendTo: import_prop_types32.default.any,
    width: import_prop_types32.default.oneOfType([import_prop_types32.default.string, import_prop_types32.default.number]),
    height: import_prop_types32.default.oneOfType([import_prop_types32.default.string, import_prop_types32.default.number])
  }),
  onOpen: import_prop_types32.default.func,
  onClose: import_prop_types32.default.func,
  onFocus: import_prop_types32.default.func,
  onBlur: import_prop_types32.default.func,
  onChange: import_prop_types32.default.func,
  onFilterChange: import_prop_types32.default.func,
  onExpandChange: import_prop_types32.default.func,
  onCancel: import_prop_types32.default.func,
  item: import_prop_types32.default.func,
  listNoData: import_prop_types32.default.func,
  adaptiveTitle: import_prop_types32.default.string,
  adaptive: import_prop_types32.default.bool
};
Le2.displayName = "KendoReactMultiSelectTree";
Le2.propTypes = Pt;

// node_modules/@progress/kendo-react-dropdowns/MultiSelectTree/utils.mjs
var a36 = (l16, f13) => {
  const i24 = {};
  return l16 && l16.length && l16.forEach((g9) => {
    i24[f13(g9)] = true;
  }), i24;
};
var E7 = (l16, f13) => {
  const { items: i24, dataItemKey: g9, value: u17, subItemsField: x8 = "items", operation: w11 } = f13, t25 = s3(g9), I11 = a36(u17, t25);
  if (w11 === "clear")
    return [];
  if (w11 === "delete") {
    const n27 = a36(i24, t25);
    return u17.filter((e32) => !n27[t25(e32)]);
  }
  const G6 = i24[0], C7 = t25(G6), d10 = s3(x8), h16 = [...l16], c16 = [];
  let b8 = [], m11;
  for (; h16.length; ) {
    const n27 = h16.pop();
    if (C7 === t25(n27)) {
      b8 = c16.map((e32) => e32.item), m11 = n27;
      break;
    } else {
      c16 && c16.length && c16[c16.length - 1].parentPosition === h16.length && c16.pop();
      const e32 = d10(n27);
      e32 && e32.length && (c16.push({ item: n27, parentPosition: h16.length }), h16.push(...e32));
    }
  }
  const k8 = [...d10(m11) || []], M7 = [];
  for (; k8.length; ) {
    const n27 = k8.pop();
    M7.push(n27);
    const e32 = d10(n27);
    e32 && e32.length && k8.push(...e32);
  }
  const L8 = !I11[C7], o21 = [];
  if (L8) {
    o21.push(...u17), o21.push(m11), o21.push(...M7.filter((s26) => !I11[t25(s26)]));
    const n27 = b8.filter((s26) => !I11[t25(s26)]), e32 = a36(o21, t25);
    for (let s26 = n27.length - 1; s26 > -1; s26--) {
      const p18 = n27[s26], r16 = d10(p18);
      if (r16.filter((P10) => e32[t25(P10)]).length < r16.length)
        break;
      o21.push(p18), e32[t25(p18)] = true;
    }
  } else {
    const n27 = t25(m11), e32 = a36(M7, t25), s26 = a36(b8, t25);
    o21.push(
      ...u17.filter((p18) => {
        const r16 = t25(p18);
        return !e32[r16] && n27 !== r16 && !s26[r16];
      })
    );
  }
  return o21;
};

export {
  Ee2 as Ee,
  B4 as B,
  C4 as C,
  A7 as A,
  f9 as f,
  a5 as a,
  u12 as u,
  C6 as C2,
  i18 as i,
  D6 as D,
  b5 as b,
  o17 as o,
  s21 as s,
  le3 as le,
  Te,
  z4 as z,
  yn,
  y6 as y,
  P7 as P,
  Ee3 as Ee2,
  Me,
  k7 as k,
  te4 as te,
  se3 as se,
  g7 as g,
  P8 as P2,
  St,
  Ct,
  Ce2 as Ce,
  P9 as P3,
  Mt,
  Te2,
  Nt,
  Le2 as Le,
  a36 as a2,
  E7 as E
};
/*! Bundled license information:

@progress/kendo-react-dropdowns/common/ListContainer.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/messages/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/numerictextbox/utils/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/numerictextbox/NumericTextBox.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/utils/misc.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/utils/color-parser.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/textbox/Textbox.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/HexInput.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/ColorInput.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/package-metadata.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/slider/SliderLabel.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/slider/Slider.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/utils/color-cache.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/ColorContrastLabels.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/utils/svg-calc.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/ColorContrastSvg.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/ColorGradient.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/utils/color-palette.service.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/models/palette-presets.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/ColorPalette.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/Picker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/FlatColorPicker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/common/AdaptiveMode.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/colors/ColorPicker.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/input/Input.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/parsing/result.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/parsing/stream.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/parsing/parsers.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/parsing/combinators.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/masking.service.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/maskedtextbox/MaskedTextBox.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/range-slider/range-raducer.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/range-slider/RangeSlider.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/switch/Switch.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/checkbox/Checkbox.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/radiobutton/RadioButton.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/radiobutton/RadioGroup.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/textarea/TextArea.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/rating/RatingItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/rating/utils/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/rating/rating-reducer.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/rating/Rating.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/DialogTitleBar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/DialogActionsBar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/constants.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/Dialog.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/StageEnum.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/messages/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/WindowTitlebar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/WindowResizeHandlers.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/MiddleLayerOptimization.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/WindowActionsBar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/Window.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dialogs/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/signature/utils/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/signature/Signature.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/input/InputClearValue.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/input/InputPrefix.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/input/InputSeparator.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/input/InputSuffix.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/input/InputValidationIcon.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-inputs/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/ListFilter.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/GroupStickyHeader.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/ListDefaultItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/ListItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/ListGroupItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/messages/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/List.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/VirtualScrollStatic.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/Navigation.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/DropDownBase.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/package-metadata.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/DropDownList/DropDownList.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/SearchBar.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/ClearButton.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/withCustomComponent.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/ComboBox/ComboBox.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/AdaptiveMode.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/AutoComplete/AutoComplete.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/MultiSelect/TagList.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/settings.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/MultiSelect/MultiSelect.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/common/MultiColumnList.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/MultiColumnComboBox/MultiColumnComboBox.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/utils/getItemIdUponKeyboardNavigation.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/utils/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/utils/consts.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/TreeViewItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/package-metadata.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/TreeView.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/processTreeViewItems.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/moveTreeViewItem.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/handleTreeViewCheckChange.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/TreeViewDragClue.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/TreeViewDragAnalyzer.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-treeview/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/DropDownTree/useDropdownWidth.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/DropDownTree/ListNoData.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/DropDownTree/DropDownTree.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/MultiSelectTree/MultiSelectTree.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/MultiSelectTree/utils.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-dropdowns/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)
*/
//# sourceMappingURL=chunk-L5MG5CYK.js.map
