import {
  L,
  R3 as R,
  g3 as g,
  h3 as h,
  i5 as i,
  n2 as n,
  n5 as n2,
  require_prop_types
} from "./chunk-ZRWBHFCZ.js";
import {
  __toESM,
  require_react
} from "./chunk-N3BBKUNS.js";

// node_modules/@progress/kendo-react-labels/FloatingLabel.mjs
var a = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@progress/kendo-react-labels/messages/index.mjs
var l = "labels.optional";
var o = {
  [l]: "(Optional)"
};

// node_modules/@progress/kendo-react-labels/FloatingLabel.mjs
var I = (l2) => {
  const [o4, i2] = a.useState({
    focused: false
  }), h2 = (v) => {
    i2({ focused: true });
  }, E = (v) => {
    i2({ focused: false });
  }, {
    label: s,
    editorId: n5,
    className: F,
    labelClassName: L2,
    editorValue: r2,
    editorPlaceholder: C,
    editorValid: S,
    editorDisabled: c,
    style: V,
    id: d,
    optional: z,
    unstyled: m,
    ...O
  } = l2, P = i(), b = z ? P.toLanguageString(l, o[l]) : "", u2 = b && a.createElement("span", { className: "k-label-optional" }, b), p = m && m.uFloatingLabel, t3 = !C && !r2 && r2 !== 0, T = n(
    g.wrapper({
      c: p,
      focused: o4.focused,
      empty: t3,
      notEmpty: !t3,
      disabled: c,
      isRtl: l2.dir === "rtl"
    }),
    F
  ), f = n(
    g.label({
      c: p,
      focused: o4.focused,
      empty: t3,
      notEmpty: !t3,
      invalid: S === false,
      disabled: c
    }),
    L2
  );
  return a.createElement(
    "span",
    {
      ...O,
      id: l2.id,
      className: T,
      onFocus: h2,
      onBlur: E,
      style: V,
      dir: l2.dir
    },
    l2.children,
    s ? n5 ? a.createElement("label", { id: d, htmlFor: n5, className: f }, s, u2) : a.createElement("span", { id: d, className: f }, s, u2) : null
  );
};
I.propTypes = {
  label: import_prop_types.default.string,
  editorId: import_prop_types.default.string,
  editorValue: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.bool, import_prop_types.default.number]),
  editorPlaceholder: import_prop_types.default.string,
  editorValid: import_prop_types.default.bool,
  editorDisabled: import_prop_types.default.bool,
  id: import_prop_types.default.string,
  style: import_prop_types.default.object,
  className: import_prop_types.default.string,
  labelClassName: import_prop_types.default.string,
  optional: import_prop_types.default.bool
};

// node_modules/@progress/kendo-react-labels/Label.mjs
var o2 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var u = (b) => {
  const { id: f, editorId: y, editorRef: t3, editorDisabled: l2, children: a2, editorValid: s, style: g2, className: i2, optional: L2 } = b, N = i(), n5 = L2 ? N.toLanguageString(l, o[l]) : "", k = n5 && o2.createElement("span", { className: "k-label-optional" }, n5), r2 = n2(), c = r2 && r2.uLabel, C = o2.useCallback(
    (d) => {
      if (t3 && t3.current && !l2) {
        t3.current.focus && (d.preventDefault(), t3.current.focus());
        const m = t3.current.actionElement;
        m && (d.preventDefault(), m.click());
      }
    },
    [t3]
  ), E = o2.useMemo(
    () => n(
      L.label({
        c,
        empty: !a2,
        invalid: s === false,
        disabled: l2 === true
      }),
      i2
    ),
    [c, a2, s, l2, i2]
  );
  return o2.createElement("label", { id: f, htmlFor: y, onClick: C, style: g2, className: E }, a2, k);
};
u.propTypes = {
  id: import_prop_types2.default.string,
  editorId: import_prop_types2.default.string,
  editorRef: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({ current: import_prop_types2.default.any })]),
  editorValid: import_prop_types2.default.bool,
  editorDisabled: import_prop_types2.default.bool,
  style: import_prop_types2.default.object,
  className: import_prop_types2.default.string,
  optional: import_prop_types2.default.bool
};
u.displayName = "KendoReactLabel";

// node_modules/@progress/kendo-react-labels/Error.mjs
var t = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);
var n3 = (a2) => {
  const e3 = {
    direction: "start",
    ...a2
  }, s = n2(), o4 = s && s.uError, c = t.useMemo(
    () => n(
      h.wrapper({
        c: o4,
        direction: e3.direction
      }),
      e3.className
    ),
    [o4, e3.direction, e3.className]
  );
  return t.createElement("div", { id: e3.id, role: "alert", style: e3.style, className: c }, e3.children);
};
n3.propTypes = {
  id: import_prop_types3.default.string,
  direction: import_prop_types3.default.oneOf(["start", "end"]),
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.element, import_prop_types3.default.node]),
  style: import_prop_types3.default.object,
  className: import_prop_types3.default.string
};
n3.displayName = "KendoReactError";

// node_modules/@progress/kendo-react-labels/Hint.mjs
var o3 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);
var n4 = (r2) => {
  const e3 = {
    direction: "start",
    ...r2
  }, s = n2(), i2 = s && s.uHint, a2 = o3.useMemo(
    () => n(
      R.wrapper({
        c: i2,
        direction: e3.direction,
        disabled: e3.editorDisabled === true
      }),
      e3.className
    ),
    [i2, e3.direction, e3.editorDisabled, e3.className]
  );
  return o3.createElement("div", { id: e3.id, style: e3.style, className: a2 }, e3.children);
};
n4.propTypes = {
  id: import_prop_types4.default.string,
  direction: import_prop_types4.default.oneOf(["start", "end"]),
  children: import_prop_types4.default.oneOfType([import_prop_types4.default.element, import_prop_types4.default.node]),
  style: import_prop_types4.default.object,
  className: import_prop_types4.default.string,
  editorDisabled: import_prop_types4.default.bool
};
n4.displayName = "KendoReactHint";

export {
  I
};
/*! Bundled license information:

@progress/kendo-react-labels/messages/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-labels/FloatingLabel.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-labels/Label.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-labels/Error.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-labels/Hint.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)

@progress/kendo-react-labels/index.mjs:
  (**
   * @license
   *-------------------------------------------------------------------------------------------
   * Copyright © 2025 Progress Software Corporation. All rights reserved.
   * Licensed under commercial license. See LICENSE.md in the package root for more information
   *-------------------------------------------------------------------------------------------
   *)
*/
//# sourceMappingURL=chunk-M2R6BCBQ.js.map
