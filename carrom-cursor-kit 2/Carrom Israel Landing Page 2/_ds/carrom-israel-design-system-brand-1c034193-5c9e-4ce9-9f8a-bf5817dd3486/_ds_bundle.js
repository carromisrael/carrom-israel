/* @ds-bundle: {"format":4,"namespace":"CarromIsraelDesignSystem_1c0341","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"FeatureTile","sourcePath":"components/marketing/FeatureTile.jsx"},{"name":"HeroBanner","sourcePath":"components/marketing/HeroBanner.jsx"},{"name":"ReviewCapsule","sourcePath":"components/marketing/ReviewCapsule.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"PriceTag","sourcePath":"components/product/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"SpecTable","sourcePath":"components/product/SpecTable.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6c3bdb350e26","components/core/Button.jsx":"53cb6cdcc738","components/core/Card.jsx":"cf200cb8065e","components/core/Eyebrow.jsx":"79197402d89e","components/core/Logo.jsx":"412f5cd8c0eb","components/core/SectionHeading.jsx":"99c2b9c1a8d3","components/forms/Checkbox.jsx":"1e23de6d47cf","components/forms/Input.jsx":"d71a41666142","components/forms/QuantityStepper.jsx":"f06563da046c","components/forms/Select.jsx":"6f873a9c10dc","components/marketing/FeatureTile.jsx":"b87b9a8e3474","components/marketing/HeroBanner.jsx":"dd535c2d666f","components/marketing/ReviewCapsule.jsx":"f3d79fb922ac","components/marketing/Testimonial.jsx":"7f5d32e123ba","components/navigation/Footer.jsx":"fa0e67eefa54","components/navigation/NavBar.jsx":"2a5708fb5f7e","components/product/PriceTag.jsx":"25ab55de1ba5","components/product/ProductCard.jsx":"dd280b7a8ff8","components/product/SpecTable.jsx":"9ea29eb6c4a6","ui_kits/site/App.jsx":"3149e7aa514a","ui_kits/site/Screens.jsx":"7d13da48a0d0","ui_kits/site/Sections.jsx":"6567136fac74","ui_kits/site/data.js":"8530976160fe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CarromIsraelDesignSystem_1c0341 = window.CarromIsraelDesignSystem_1c0341 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  champion: {
    background: "var(--sand-50)",
    color: "var(--ink-900)",
    border: "1px solid var(--brand-gold)"
  },
  pro: {
    background: "var(--ink-900)",
    color: "var(--sand-50)",
    border: "1px solid rgba(247,242,232,.35)"
  },
  classic: {
    background: "var(--brand-primary)",
    color: "var(--white)",
    border: "1px solid transparent"
  },
  navy: {
    background: "var(--navy-800)",
    color: "var(--sand-50)",
    border: "1px solid transparent"
  },
  neutral: {
    background: "rgba(16,14,12,.06)",
    color: "var(--ink-700)",
    border: "1px solid var(--border-hairline)"
  },
  accent: {
    background: "var(--brand-accent)",
    color: "var(--white)",
    border: "1px solid transparent"
  },
  onImage: {
    background: "rgba(16,14,12,.55)",
    color: "var(--sand-50)",
    border: "1px solid rgba(247,242,232,.28)",
    backdropFilter: "blur(6px)"
  }
};
function Badge({
  children,
  tone = "neutral",
  size = "md",
  style
}) {
  const s = size === "sm";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-2)",
      padding: s ? "4px 10px" : "7px 16px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-bold)",
      fontSize: s ? "10px" : "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      lineHeight: 1.1,
      ...TONES[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "9px 16px",
    fontSize: "13px",
    minHeight: "36px"
  },
  md: {
    padding: "13px 26px",
    fontSize: "15px",
    minHeight: "46px"
  },
  lg: {
    padding: "17px 38px",
    fontSize: "17px",
    minHeight: "56px"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--brand-primary)",
    color: "var(--text-on-brand)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-sm)"
  },
  deep: {
    background: "var(--brand-deep)",
    color: "var(--text-on-brand)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-sm)"
  },
  gold: {
    background: "var(--brand-gold)",
    color: "var(--ink-900)",
    border: "1px solid transparent",
    boxShadow: "var(--shadow-sm)"
  },
  outline: {
    background: "transparent",
    color: "var(--brand-deep)",
    border: "1px solid var(--border-strong)",
    boxShadow: "none"
  },
  ghost: {
    background: "transparent",
    color: "var(--brand-deep)",
    border: "1px solid transparent",
    boxShadow: "none"
  },
  invert: {
    background: "var(--sand-50)",
    color: "var(--ink-900)",
    border: "1px solid transparent",
    boxShadow: "none"
  },
  invertOutline: {
    background: "transparent",
    color: "var(--sand-50)",
    border: "1px solid var(--border-invert)",
    boxShadow: "none"
  }
};
const HOVER = {
  primary: {
    background: "var(--brand-primary-hover)"
  },
  deep: {
    background: "var(--brand-deep-hover)"
  },
  gold: {
    background: "#C4882F"
  },
  outline: {
    background: "rgba(16,14,12,.05)",
    borderColor: "var(--brand-deep)"
  },
  ghost: {
    background: "rgba(16,14,12,.05)"
  },
  invert: {
    background: "#FFFFFF"
  },
  invertOutline: {
    background: "rgba(247,242,232,.1)",
    borderColor: "rgba(247,242,232,.4)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconStart,
  iconEnd,
  as = "button",
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as === "a" ? "a" : "button";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--sp-2)",
    fontFamily: "var(--font-ui)",
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--ls-button)",
    borderRadius: "var(--r-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    width: fullWidth ? "100%" : "auto",
    transition: "var(--t-control)",
    opacity: disabled ? .45 : 1,
    transform: press && !disabled ? "scale(.975)" : "none",
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === "button" ? type : undefined,
    href: Tag === "a" ? href : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const TONES = {
  light: {
    background: "var(--surface-card)",
    color: "var(--text-body)",
    border: "1px solid var(--border-hairline)"
  },
  sunken: {
    background: "var(--surface-sunken)",
    color: "var(--text-body)",
    border: "1px solid var(--border-hairline)"
  },
  dark: {
    background: "var(--surface-card-dark)",
    color: "var(--text-body-invert)",
    border: "1px solid var(--border-invert)"
  },
  wood: {
    background: "var(--gradient-wood)",
    color: "var(--sand-50)",
    border: "1px solid rgba(74,51,29,.5)"
  }
};
function Card({
  children,
  tone = "light",
  interactive = false,
  selected = false,
  padding = "var(--sp-7)",
  style,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--r-card)",
      padding,
      overflow: "hidden",
      boxShadow: selected ? "var(--shadow-lift),var(--ring-selected)" : interactive && hover ? "var(--shadow-lg)" : "var(--shadow-card)",
      transform: interactive && hover ? "translateY(-4px)" : "none",
      transition: "var(--t-control)",
      cursor: interactive ? "pointer" : "default",
      ...TONES[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = "ink",
  style
}) {
  const color = tone === "invert" ? "var(--text-body-invert)" : tone === "muted" ? "var(--text-muted)" : tone === "brand" ? "var(--brand-primary)" : "var(--ink-700)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color,
      lineHeight: 1.2,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/* The brand supplied raster logo files only (JPEG). assets/logo-wordmark.png and
   assets/logo-mark.png are background-knockout PNGs derived from those files;
   assets/logo-wordmark-light.png is the sand-tinted version for dark surfaces.
   No vector master exists yet — see readme.md. */
function Logo({
  src,
  srcLight,
  variant = "wordmark",
  height = 34,
  invert = false,
  label = "Carrom Israel",
  style
}) {
  const chosen = invert ? srcLight || src : src;
  if (!chosen) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: .92,
        fontFamily: "var(--font-ui)",
        fontWeight: "var(--fw-black)",
        letterSpacing: "0.06em",
        color: invert ? "var(--sand-50)" : "var(--navy-800)",
        fontSize: height * 0.52 + "px",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", null, "CARROM"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.62em",
        letterSpacing: "0.22em",
        fontWeight: "var(--fw-semibold)"
      }
    }, "ISRAEL"));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: chosen,
    alt: label,
    style: {
      height: height + "px",
      width: "auto",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  left,
  right,
  description,
  align = "center",
  tone = "ink",
  level = 2,
  style
}) {
  const invert = tone === "invert";
  const Tag = "h" + level;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-5)",
      flexWrap: "wrap",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, left ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: invert ? "invert" : "muted"
  }, left) : null, /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: "var(--type-display-3)",
      color: invert ? "var(--text-display-invert)" : "var(--text-display)",
      letterSpacing: "var(--ls-display)",
      margin: 0
    }
  }, title), right ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: invert ? "invert" : "muted"
  }, right) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: invert ? "var(--text-body-invert)" : "var(--text-body)",
      maxWidth: "58ch"
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      flex: "0 0 20px",
      borderRadius: "var(--r-xs)",
      display: "grid",
      placeItems: "center",
      transition: "var(--t-control)",
      background: checked ? "var(--brand-primary)" : "var(--white)",
      border: "1px solid " + (checked ? "var(--brand-primary)" : "var(--border-strong)")
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--white)",
      fontSize: "13px",
      lineHeight: 1,
      fontWeight: 700
    }
  }, "\u2713") : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--ink-700)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  required = false,
  multiline = false,
  rows = 4,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? "textarea" : "input";
  const field = {
    width: "100%",
    font: "var(--type-body)",
    color: "var(--ink-800)",
    background: "var(--white)",
    padding: "12px 14px",
    border: "1px solid " + (error ? "var(--red-600)" : focus ? "var(--brand-primary)" : "var(--border-strong)"),
    borderRadius: "var(--r-input)",
    outline: "none",
    boxShadow: focus ? "var(--ring-focus)" : "none",
    transition: "var(--t-control)",
    fontFamily: "var(--font-body)",
    resize: multiline ? "vertical" : undefined
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink-800)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-accent)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement(Tag, {
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    name: name,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: "var(--red-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 9,
  onChange,
  style
}) {
  const btn = {
    width: "38px",
    height: "38px",
    display: "grid",
    placeItems: "center",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "var(--font-ui)",
    fontSize: "18px",
    fontWeight: "var(--fw-semibold)",
    color: "var(--navy-700)",
    transition: "var(--t-control)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--r-pill)",
      background: "var(--white)",
      overflow: "hidden",
      direction: "ltr",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: btn,
    disabled: value <= min,
    onClick: () => onChange && onChange(Math.max(min, value - 1))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: "28px",
      textAlign: "center",
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-bold)",
      color: "var(--ink-900)"
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: btn,
    disabled: value >= max,
    onClick: () => onChange && onChange(Math.min(max, value + 1))
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  name,
  hint,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink-800)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      font: "var(--type-body)",
      fontFamily: "var(--font-body)",
      color: "var(--ink-800)",
      background: "var(--white)",
      padding: "12px 14px",
      appearance: "none",
      border: "1px solid " + (focus ? "var(--brand-primary)" : "var(--border-strong)"),
      borderRadius: "var(--r-input)",
      outline: "none",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      transition: "var(--t-control)"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureTile.jsx
try { (() => {
function FeatureTile({
  image,
  imageAlt = "",
  caption,
  kicker,
  ratio = "4/5",
  captionPlacement = "below",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const over = captionPlacement === "over";
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--ink-800)",
      borderRadius: over ? "var(--r-image)" : 0
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.04)" : "none",
      transition: "var(--t-media)"
    }
  }) : null, over ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-protect-bottom)"
    }
  }) : null, over ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      insetInline: "var(--sp-6)",
      bottom: "var(--sp-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "rgba(247,242,232,.78)"
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title)",
      fontWeight: "var(--fw-regular)",
      color: "var(--sand-50)",
      letterSpacing: 0
    }
  }, caption)) : null), !over ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-1)",
      textAlign: "center"
    }
  }, kicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-subtitle)",
      color: "var(--text-display)",
      fontWeight: "var(--fw-regular)"
    }
  }, caption)) : null);
}
Object.assign(__ds_scope, { FeatureTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureTile.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroBanner.jsx
try { (() => {
function HeroBanner({
  image,
  title,
  left,
  right,
  body,
  actions,
  corner,
  minHeight = "88vh",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight,
      overflow: "hidden",
      background: "var(--ink-900)",
      display: "flex",
      alignItems: "flex-end",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-scrim)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--sp-11) var(--gutter) var(--sp-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--sp-7)",
      flexWrap: "wrap",
      textAlign: "center",
      marginBottom: "var(--sp-9)"
    }
  }, left ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "invert"
  }, left) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-1)",
      color: "var(--text-display-invert)",
      letterSpacing: "var(--ls-display)",
      maxWidth: "18ch"
    }
  }, title), right ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "invert"
  }, right) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--sp-9)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)",
      maxWidth: "46ch"
    }
  }, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body-invert)"
    }
  }, body) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      flexWrap: "wrap"
    }
  }, actions) : null), corner)));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ReviewCapsule.jsx
try { (() => {
function ReviewCapsule({
  score = 4.9,
  outOf = 5,
  count,
  label = "מעולה",
  source,
  style
}) {
  const stars = Math.round(score);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-6)",
      background: "var(--sand-100)",
      padding: "var(--sp-5) var(--sp-6)",
      borderRadius: "var(--r-sm)",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "2px",
      color: "var(--brand-gold)",
      fontSize: "15px",
      letterSpacing: "2px"
    }
  }, "★".repeat(stars), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--taupe-200)"
    }
  }, "★".repeat(outOf - stars))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "2px",
      direction: "ltr"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-bold)",
      fontSize: "38px",
      lineHeight: 1,
      color: "var(--ink-900)"
    }
  }, score), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, "/", outOf))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--ink-800)"
    }
  }, label), count ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, count) : null, source ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, source) : null));
}
Object.assign(__ds_scope, { ReviewCapsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ReviewCapsule.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function Testimonial({
  quote,
  author,
  role,
  tone = "light",
  style
}) {
  const invert = tone === "invert";
  return /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-subtitle)",
      lineHeight: 1.42,
      fontWeight: "var(--fw-regular)",
      color: invert ? "var(--sand-50)" : "var(--text-display)"
    }
  }, quote), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)",
      color: invert ? "var(--sand-50)" : "var(--ink-800)"
    }
  }, author), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: invert ? "rgba(247,242,232,.7)" : "var(--text-muted)"
    }
  }, role) : null));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc,
  logoSrcLight,
  columns = [],
  note,
  legal,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--text-body-invert)",
      padding: "var(--sp-11) var(--gutter) var(--sp-7)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      gap: "var(--sp-10)",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      maxWidth: "34ch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    srcLight: logoSrcLight,
    height: 32,
    invert: true
  }), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "rgba(247,242,232,.72)"
    }
  }, note) : null), columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "rgba(247,242,232,.55)"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, c.links.map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href || "#",
    style: {
      font: "var(--type-body)",
      color: "var(--sand-50)"
    }
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--sp-10) auto 0",
      paddingTop: "var(--sp-5)",
      borderTop: "1px solid var(--border-invert)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--sp-5)",
      flexWrap: "wrap",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: "rgba(247,242,232,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "From India with Love")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logoSrc,
  logoSrcLight,
  items = [],
  activeId,
  onNavigate,
  cartCount = 0,
  onCart,
  tone = "onImage",
  cta,
  style
}) {
  const dark = tone === "onImage";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      height: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-8)",
      padding: "0 var(--gutter)",
      background: dark ? "rgba(16,14,12,.78)" : "var(--sand-50)",
      backdropFilter: dark ? "blur(14px)" : "none",
      borderBottom: "1px solid " + (dark ? "var(--border-invert)" : "var(--border-hairline)"),
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    src: logoSrc,
    srcLight: logoSrcLight,
    height: 30,
    invert: dark
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-6)",
      flex: 1
    }
  }, items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id);
      },
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-semibold)",
        color: dark ? active ? "var(--white)" : "rgba(247,242,232,.82)" : active ? "var(--navy-800)" : "var(--ink-700)",
        paddingBottom: "3px",
        borderBottom: "1px solid " + (active ? dark ? "var(--brand-gold)" : "var(--brand-primary)" : "transparent")
      }
    }, it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)"
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "gold" : "primary",
    size: "sm",
    onClick: onCart
  }, "\u05E1\u05DC ", cartCount > 0 ? "(" + cartCount + ")" : "")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/product/PriceTag.jsx
try { (() => {
function PriceTag({
  amount,
  currency = "₪",
  compare,
  size = "md",
  tone = "brand",
  style
}) {
  const fs = size === "lg" ? "38px" : size === "sm" ? "20px" : "28px";
  const color = tone === "invert" ? "var(--sand-50)" : tone === "ink" ? "var(--ink-900)" : "var(--navy-700)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "var(--sp-3)",
      direction: "ltr",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: "var(--fw-bold)",
      fontSize: fs,
      lineHeight: 1,
      color
    }
  }, currency, amount), compare ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      textDecoration: "line-through"
    }
  }, currency, compare) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  badge,
  badgeTone = "neutral",
  image,
  imageAlt = "",
  meta,
  price,
  compare,
  ctaLabel = "הוסיפו לסל",
  featured = false,
  onAdd,
  onOpen,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--r-card)",
      overflow: "hidden",
      background: "var(--surface-card)",
      boxShadow: featured ? "var(--shadow-lift),var(--ring-selected)" : hover ? "var(--shadow-lg)" : "var(--shadow-card)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "var(--t-control)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      position: "relative",
      background: "var(--wood-800)",
      cursor: onOpen ? "pointer" : "default",
      aspectRatio: "3/4",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.035)" : "none",
      transition: "var(--t-media)"
    }
  }) : null, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--sp-5)",
      insetInlineEnd: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    size: "sm"
  }, badge)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-wood)",
      padding: "var(--sp-7) var(--sp-6) var(--sp-6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--sp-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-title)",
      color: "var(--sand-50)",
      letterSpacing: 0
    }
  }, name), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "rgba(247,242,232,.72)"
    }
  }, meta) : null, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    compare: compare,
    size: "md",
    tone: "invert",
    style: {
      marginTop: "var(--sp-2)"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: onAdd,
    style: {
      marginTop: "var(--sp-3)"
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/product/SpecTable.jsx
try { (() => {
function SpecTable({
  rows = [],
  tone = "light",
  style
}) {
  const invert = tone === "invert";
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid",
      gap: 0,
      ...style
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--sp-5)",
      padding: "var(--sp-4) 0",
      borderBottom: "1px solid " + (invert ? "var(--border-invert)" : "var(--border-hairline)")
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-body)",
      color: invert ? "var(--text-body-invert)" : "var(--text-muted)"
    }
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      fontWeight: "var(--fw-semibold)",
      color: invert ? "var(--sand-50)" : "var(--ink-800)"
    }
  }, r.value))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SpecTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/App.jsx
try { (() => {
const {
  NavBar,
  Footer,
  Button
} = window.CarromIsraelDesignSystem_1c0341;
const {
  HomeScreen,
  ProductScreen,
  CartScreen,
  CheckoutScreen
} = window;
const DATA = window.CARROM_DATA;
const LOGO = "../../assets/logo-wordmark.png",
  LOGO_LIGHT = "../../assets/logo-wordmark-light.png";
function App() {
  const [view, setView] = React.useState("home");
  const [model, setModel] = React.useState(DATA.models[1]);
  const [cart, setCart] = React.useState([]);
  const [flash, setFlash] = React.useState(null);
  const go = v => {
    setView(v);
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  const add = (m, qty = 1) => {
    setCart(c => {
      const i = c.findIndex(l => l.id === m.id);
      if (i > -1) {
        const n = [...c];
        n[i] = {
          ...n[i],
          qty: n[i].qty + qty
        };
        return n;
      }
      return [...c, {
        id: m.id,
        name: m.name,
        meta: m.meta,
        price: m.price,
        image: m.image,
        qty
      }];
    });
    setFlash("קרום " + m.name + " נוסף לסל");
    setTimeout(() => setFlash(null), 2200);
  };
  const open = m => {
    setModel(m);
    go("product");
  };
  const count = cart.reduce((s, l) => s + l.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    dir: "rtl"
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: LOGO,
    logoSrcLight: LOGO_LIGHT,
    items: DATA.nav,
    activeId: view === "home" ? "home" : "models",
    tone: view === "home" ? "onImage" : "solid",
    onNavigate: id => id === "home" ? go("home") : go("home"),
    cartCount: count,
    onCart: () => go("cart")
  }), view === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    data: DATA,
    onAdd: add,
    onOpen: open,
    go: go
  }), view === "product" && /*#__PURE__*/React.createElement(ProductScreen, {
    model: model,
    onAdd: add,
    go: go
  }), view === "cart" && /*#__PURE__*/React.createElement(CartScreen, {
    cart: cart,
    go: go,
    onQty: (id, n) => setCart(c => c.map(l => l.id === id ? {
      ...l,
      qty: n
    } : l)),
    onRemove: id => setCart(c => c.filter(l => l.id !== id))
  }), view === "checkout" && /*#__PURE__*/React.createElement(CheckoutScreen, {
    cart: cart,
    go: go
  }), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: LOGO,
    logoSrcLight: LOGO_LIGHT,
    note: "\u05DE\u05D9\u05D9\u05D1\u05D0\u05D9\u05DD \u05E7\u05E8\u05D5\u05DD \u05D1\u05D5\u05E8\u05D3 \u05DE\u05D4\u05D5\u05D3\u05D5, \u05DE\u05EA\u05D0\u05D9\u05DE\u05D9\u05DD \u05D0\u05D5\u05EA\u05D5 \u05DC\u05D1\u05D9\u05EA \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9, \u05D5\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05E2\u05D3 \u05D4\u05D3\u05DC\u05EA.",
    legal: "\xA9 2026 Carrom Israel \xB7 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA",
    columns: [{
      title: "חנות",
      links: [{
        label: "Champion"
      }, {
        label: "Pro"
      }, {
        label: "Classic"
      }, {
        label: "אביזרים"
      }]
    }, {
      title: "מידע",
      links: [{
        label: "חוקי המשחק"
      }, {
        label: "משלוחים והחזרות"
      }, {
        label: "אחריות"
      }, {
        label: "שאלות נפוצות"
      }]
    }, {
      title: "קשר",
      links: [{
        label: "050-000-0000"
      }, {
        label: "hello@carrom.co.il"
      }, {
        label: "אינסטגרם"
      }]
    }]
  }), flash ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      insetInlineStart: "var(--gutter)",
      bottom: "var(--sp-6)",
      zIndex: 60,
      background: "var(--ink-900)",
      color: "var(--sand-50)",
      padding: "14px 22px",
      borderRadius: "var(--r-pill)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)"
    }
  }, flash) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Screens.jsx
try { (() => {
const {
  Button,
  Badge,
  Eyebrow,
  SectionHeading,
  Card,
  PriceTag,
  SpecTable,
  ProductCard,
  ReviewCapsule,
  HeroBanner,
  Input,
  Select,
  Checkbox,
  QuantityStepper
} = window.CarromIsraelDesignSystem_1c0341;
const {
  Section,
  ModelGrid,
  TileBand,
  StoryBand,
  Quotes,
  Faq
} = window;
const HomeScreen = ({
  data,
  onAdd,
  onOpen,
  go
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBanner, {
  image: "../../assets/lifestyle-bar.jpeg",
  left: "\u05DE\u05D9\u05D5\u05E6\u05E8 \u05D1\u05D4\u05D5\u05D3\u05D5",
  right: "\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05D9\u05E9\u05E8\u05D0\u05DC",
  title: "\u05D4\u05DE\u05E9\u05D7\u05E7 \u05E9\u05DE\u05D7\u05D6\u05D9\u05E7 \u05E9\u05D5\u05DC\u05D7\u05DF \u05E9\u05DC\u05DD",
  body: "\u05E7\u05E8\u05D5\u05DD \u05D1\u05D5\u05E8\u05D3 \u2014 \u05DC\u05D5\u05D7 \u05E2\u05E5 \u05D0\u05D7\u05D3, \u05D0\u05E8\u05D1\u05E2\u05D4 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD, \u05D5\u05D0\u05E3 \u05D0\u05D7\u05D3 \u05DC\u05D0 \u05DE\u05E1\u05EA\u05DB\u05DC \u05D1\u05D8\u05DC\u05E4\u05D5\u05DF. \u05DE\u05D9\u05D9\u05D1\u05D0\u05D9\u05DD \u05DC\u05D9\u05E9\u05E8\u05D0\u05DC, \u05E2\u05DD \u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9\u05EA.",
  actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("models")
  }, "\u05D1\u05D7\u05E8\u05D5 \u05D3\u05D2\u05DD"), /*#__PURE__*/React.createElement(Button, {
    variant: "invertOutline",
    size: "lg",
    onClick: () => go("how")
  }, "\u05D0\u05D9\u05DA \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD")),
  corner: /*#__PURE__*/React.createElement(ReviewCapsule, {
    score: 4.9,
    count: "\u05DE\u05D1\u05D5\u05E1\u05E1 \u05E2\u05DC 312 \u05D1\u05D9\u05E7\u05D5\u05E8\u05D5\u05EA",
    label: "\u05DE\u05E2\u05D5\u05DC\u05D4",
    source: "Google"
  })
}), /*#__PURE__*/React.createElement(Section, {
  id: "models"
}, /*#__PURE__*/React.createElement(SectionHeading, {
  left: "\u05E9\u05DC\u05D5\u05E9\u05D4 \u05D3\u05D2\u05DE\u05D9\u05DD",
  title: "\u05D1\u05D7\u05E8\u05D5 \u05D0\u05EA \u05D4\u05D3\u05D2\u05DD \u05E9\u05DC\u05DB\u05DD",
  right: "\u05DE\u05DC\u05D0\u05D9 \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC",
  description: "\u05D0\u05D5\u05EA\u05D5 \u05DE\u05E9\u05D8\u05D7 \u05DE\u05D9\u05D9\u05E4\u05DC \u05D1\u05DB\u05DC \u05D4\u05D3\u05D2\u05DE\u05D9\u05DD. \u05D4\u05D4\u05D1\u05D3\u05DC \u05D4\u05D5\u05D0 \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u2014 \u05DB\u05DE\u05D4 \u05D4\u05D9\u05D0 \u05E2\u05D1\u05D4, \u05D5\u05DB\u05DE\u05D4 \u05D4\u05D9\u05D0 \u05DB\u05D1\u05D3\u05D4."
}), /*#__PURE__*/React.createElement(ModelGrid, {
  models: data.models,
  onAdd: onAdd,
  onOpen: onOpen
})), /*#__PURE__*/React.createElement(TileBand, {
  tiles: data.tiles,
  left: "\u05D0\u05D9\u05E4\u05D4 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD",
  title: "\u05D4\u05D3\u05E8\u05DA \u05E9\u05DC \u05E7\u05E8\u05D5\u05DD",
  right: "\u05D1\u05DB\u05DC \u05DE\u05E7\u05D5\u05DD",
  description: "\u05D4\u05DC\u05D5\u05D7 \u05DC\u05D0 \u05E6\u05E8\u05D9\u05DA \u05D7\u05D3\u05E8 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD. \u05D4\u05D5\u05D0 \u05E6\u05E8\u05D9\u05DA \u05E9\u05D5\u05DC\u05D7\u05DF, \u05D0\u05E8\u05D1\u05E2\u05D4 \u05DB\u05D9\u05E1\u05D0\u05D5\u05EA, \u05D5\u05E9\u05E2\u05D4 \u05E4\u05E0\u05D5\u05D9\u05D4."
}), /*#__PURE__*/React.createElement(StoryBand, {
  image: "../../assets/board-champion-top.jpeg"
}), /*#__PURE__*/React.createElement(Quotes, {
  items: data.testimonials
}), /*#__PURE__*/React.createElement(Faq, {
  items: data.faq
}));
const ProductScreen = ({
  model,
  onAdd,
  go
}) => {
  const [qty, setQty] = React.useState(1);
  const [powder, setPowder] = React.useState(true);
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--sp-9)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)",
      padding: 0,
      marginBottom: "var(--sp-6)"
    }
  }, "\u2190 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05DB\u05DC \u05D4\u05D3\u05D2\u05DE\u05D9\u05DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "var(--sp-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--r-md)",
      overflow: "hidden",
      background: "var(--wood-800)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: model.image,
    alt: model.name,
    style: {
      width: "100%",
      aspectRatio: "3/4",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: model.badgeTone
  }, model.badge), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-3)",
      color: "var(--text-display)"
    }
  }, "\u05E7\u05E8\u05D5\u05DD ", model.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "48ch"
    }
  }, model.blurb), /*#__PURE__*/React.createElement(PriceTag, {
    amount: model.price,
    size: "lg"
  }), /*#__PURE__*/React.createElement(SpecTable, {
    rows: model.specs
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D0\u05D1\u05E7\u05EA \u05D4\u05D7\u05DC\u05E7\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA (\u20AA39)",
    checked: powder,
    onChange: () => setPowder(!powder)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      marginTop: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onAdd(model, qty)
  }, "\u05D4\u05D5\u05E1\u05D9\u05E4\u05D5 \u05DC\u05E1\u05DC")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D7\u05D9\u05E0\u05DD \u05DC\u05DB\u05DC \u05D4\u05D0\u05E8\u05E5 \xB7 3 \u05D9\u05DE\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD \xB7 \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05E9\u05E0\u05EA\u05D9\u05D9\u05DD"))));
};
const CartScreen = ({
  cart,
  onQty,
  onRemove,
  go
}) => {
  const total = cart.reduce((s, l) => s + l.price * l.qty, 0);
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--sp-9)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "start",
    left: "\u05E9\u05DC\u05D1 1 \u05DE-2",
    title: "\u05D4\u05E1\u05DC \u05E9\u05DC\u05DB\u05DD"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 0.7fr",
      gap: "var(--sp-10)",
      marginTop: "var(--sp-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, cart.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)"
    }
  }, "\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }, "\u05D7\u05D6\u05E8\u05D5 \u05DC\u05D3\u05D2\u05DE\u05D9\u05DD")) : cart.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: "flex",
      gap: "var(--sp-5)",
      alignItems: "center",
      padding: "var(--sp-5) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.image,
    alt: "",
    style: {
      width: "88px",
      height: "110px",
      objectFit: "cover",
      borderRadius: "var(--r-sm)",
      background: "var(--wood-800)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title)",
      fontSize: "var(--fs-subtitle)",
      fontFamily: "var(--font-display)",
      color: "var(--text-display)"
    }
  }, "\u05E7\u05E8\u05D5\u05DD ", l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, l.meta)), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: l.qty,
    onChange: n => onQty(l.id, n)
  }), /*#__PURE__*/React.createElement(PriceTag, {
    amount: l.price * l.qty
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(l.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--fs-caption)"
    }
  }, "\u05D4\u05E1\u05E8\u05D4")))), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    padding: "var(--sp-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "\u05E1\u05D9\u05DB\u05D5\u05DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: total,
    size: "sm",
    tone: "ink"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u05DE\u05E9\u05DC\u05D5\u05D7"), /*#__PURE__*/React.createElement("span", null, "\u05D7\u05D9\u05E0\u05DD")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontWeight: "var(--fw-semibold)"
    }
  }, "\u05E1\u05D4\u05F4\u05DB"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: total,
    size: "md"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "deep",
    size: "lg",
    fullWidth: true,
    disabled: cart.length === 0,
    onClick: () => go("checkout")
  }, "\u05D4\u05DE\u05E9\u05DA \u05DC\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7")))));
};
const CheckoutScreen = ({
  cart,
  go
}) => {
  const [done, setDone] = React.useState(false);
  const total = cart.reduce((s, l) => s + l.price * l.qty, 0);
  if (done) return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--sp-11)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "\u05D4\u05D6\u05DE\u05E0\u05D4 #4821"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-2)",
      color: "var(--text-display)"
    }
  }, "\u05D4\u05DC\u05D5\u05D7 \u05D1\u05D3\u05E8\u05DA \u05D0\u05DC\u05D9\u05DB\u05DD"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      maxWidth: "44ch"
    }
  }, "\u05E9\u05DC\u05D7\u05E0\u05D5 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05DC-SMS. \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D9\u05D2\u05D9\u05E2 \u05EA\u05D5\u05DA \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D9\u05DE\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD, \u05D5\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05E2\u05D3\u05DB\u05DF \u05D1\u05D9\u05D5\u05DD \u05E2\u05E6\u05DE\u05D5."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    onClick: () => go("home")
  }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D0\u05EA\u05E8")));
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "var(--sp-9)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "start",
    left: "\u05E9\u05DC\u05D1 2 \u05DE-2",
    title: "\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 0.7fr",
      gap: "var(--sp-10)",
      marginTop: "var(--sp-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u05E9\u05DD \u05DE\u05DC\u05D0",
    required: true,
    placeholder: "\u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u05D8\u05DC\u05E4\u05D5\u05DF",
    type: "tel",
    required: true,
    placeholder: "050-0000000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
    type: "email",
    placeholder: "you@example.com",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8",
    required: true,
    placeholder: "\u05D4\u05E8\u05E6\u05DC 12",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u05E2\u05D9\u05E8",
    options: [{
      value: "tlv",
      label: "תל אביב-יפו"
    }, {
      value: "jlm",
      label: "ירושלים"
    }, {
      value: "hfa",
      label: "חיפה"
    }, {
      value: "bsh",
      label: "באר שבע"
    }, {
      value: "other",
      label: "אחר"
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u05DE\u05D9\u05E7\u05D5\u05D3",
    placeholder: "6100000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u05D4\u05E2\u05E8\u05D5\u05EA \u05DC\u05E9\u05DC\u05D9\u05D7",
    multiline: true,
    rows: 3,
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u05D0\u05E9\u05DE\u05D7 \u05DC\u05E7\u05D1\u05DC \u05E2\u05D3\u05DB\u05D5\u05E0\u05D9\u05DD \u05E2\u05DC \u05D8\u05D5\u05E8\u05E0\u05D9\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD",
    checked: true,
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      gridColumn: "span 2"
    }
  }, "\u05E9\u05DC\u05D9\u05D7\u05EA \u05D4\u05D6\u05DE\u05E0\u05D4")), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    padding: "var(--sp-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, "\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4"), cart.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u05E7\u05E8\u05D5\u05DD ", l.name, " \xD7 ", l.qty), /*#__PURE__*/React.createElement(PriceTag, {
    amount: l.price * l.qty,
    size: "sm",
    tone: "ink"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontWeight: "var(--fw-semibold)"
    }
  }, "\u05E1\u05D4\u05F4\u05DB"), /*#__PURE__*/React.createElement(PriceTag, {
    amount: total,
    size: "md"
  }))))));
};
Object.assign(window, {
  HomeScreen,
  ProductScreen,
  CartScreen,
  CheckoutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Sections.jsx
try { (() => {
const {
  Button,
  Badge,
  Eyebrow,
  SectionHeading,
  Card,
  PriceTag,
  SpecTable,
  ProductCard,
  FeatureTile,
  ReviewCapsule,
  Testimonial,
  HeroBanner,
  Input,
  Select,
  Checkbox,
  QuantityStepper
} = window.CarromIsraelDesignSystem_1c0341;
const Section = ({
  children,
  bg = "var(--bg-page)",
  id,
  style
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    background: bg,
    padding: "var(--section-y) var(--gutter)",
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto"
  }
}, children));
const ModelGrid = ({
  models,
  onAdd,
  onOpen
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "var(--grid-gap)",
    marginTop: "var(--sp-9)"
  }
}, models.map(m => /*#__PURE__*/React.createElement(ProductCard, {
  key: m.id,
  name: m.name,
  badge: m.badge,
  badgeTone: m.badgeTone,
  meta: m.meta,
  price: m.price,
  image: m.image,
  featured: m.featured,
  onAdd: () => onAdd(m),
  onOpen: () => onOpen(m)
})));
const TileBand = ({
  tiles,
  title,
  left,
  right,
  description
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: "var(--bg-band)",
    paddingTop: "var(--band-y)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--gutter) var(--sp-9)"
  }
}, /*#__PURE__*/React.createElement(SectionHeading, {
  left: left,
  title: title,
  right: right,
  description: description
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 0
  }
}, tiles.map((t, i) => /*#__PURE__*/React.createElement(FeatureTile, {
  key: i,
  image: t.image,
  kicker: t.kicker,
  caption: t.caption,
  ratio: "1/1"
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    height: "var(--band-y)"
  }
}));
const StoryBand = ({
  image
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    position: "relative",
    background: "var(--bg-page-dark)",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: image,
  alt: "",
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: .5
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "var(--overlay-scrim)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "var(--section-y) var(--gutter)",
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "var(--sp-10)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-6)"
  }
}, /*#__PURE__*/React.createElement(Eyebrow, {
  tone: "invert"
}, "\u05DE\u05D0\u05D4 \u05E9\u05E0\u05D4 \u05E9\u05DC \u05DE\u05E9\u05D7\u05E7"), /*#__PURE__*/React.createElement("h2", {
  style: {
    font: "var(--type-display-2)",
    color: "var(--text-display-invert)"
  }
}, "\u05DE\u05D4\u05D5\u05D3\u05D5, \u05E2\u05DD \u05D0\u05D4\u05D1\u05D4"), /*#__PURE__*/React.createElement("p", {
  style: {
    font: "var(--type-body-lg)",
    color: "var(--text-body-invert)",
    maxWidth: "46ch"
  }
}, "\u05E7\u05E8\u05D5\u05DD \u05E0\u05D5\u05DC\u05D3 \u05D1\u05D4\u05D5\u05D3\u05D5 \u05D5\u05DE\u05E9\u05D5\u05D7\u05E7 \u05E9\u05DD \u05D1\u05DB\u05DC \u05D1\u05D9\u05EA \u05E7\u05E4\u05D4, \u05D1\u05DB\u05DC \u05D7\u05E6\u05E8, \u05D1\u05DB\u05DC \u05D7\u05EA\u05D5\u05E0\u05D4. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D1\u05D9\u05D0\u05D9\u05DD \u05D0\u05EA \u05D0\u05D5\u05EA\u05DD \u05DC\u05D5\u05D7\u05D5\u05EA \u05DE\u05D4\u05E1\u05D3\u05E0\u05D4 \u05E9\u05D1\u05D4 \u05D4\u05DD \u05E0\u05E2\u05E9\u05D9\u05DD \u05D1\u05D9\u05D3 \u2014 \u05D5\u05DE\u05D5\u05E1\u05D9\u05E4\u05D9\u05DD \u05E8\u05E7 \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA \u05DB\u05D3\u05D9 \u05E9\u05D4\u05DD \u05D9\u05E2\u05D1\u05D3\u05D5 \u05DB\u05D0\u05DF: \u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA, \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9\u05EA, \u05D5\u05DE\u05E9\u05DC\u05D5\u05D7 \u05E2\u05D3 \u05D4\u05D3\u05DC\u05EA."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: "var(--sp-3)"
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "invert",
  size: "md"
}, "\u05D7\u05D5\u05E7\u05D9 \u05D4\u05DE\u05E9\u05D7\u05E7 \u05D1-3 \u05D3\u05E7\u05D5\u05EA"), /*#__PURE__*/React.createElement(Button, {
  variant: "invertOutline",
  size: "md"
}, "\u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05E0\u05D5"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: "var(--sp-6)",
    alignContent: "center"
  }
}, [["19", "דיסקיות בסט"], ["4", "שחקנים סביב שולחן"], ["3", "ימי עסקים למשלוח"], ["2", "שנות אחריות"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    display: "flex",
    alignItems: "baseline",
    gap: "var(--sp-5)",
    borderBottom: "1px solid var(--border-invert)",
    paddingBottom: "var(--sp-4)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-display)",
    fontWeight: 300,
    fontSize: "52px",
    lineHeight: 1,
    color: "var(--sand-50)"
  }
}, n), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-ui)",
    fontSize: "var(--fs-body-sm)",
    letterSpacing: "var(--ls-eyebrow)",
    textTransform: "uppercase",
    color: "rgba(247,242,232,.72)"
  }
}, l))))));
const Quotes = ({
  items
}) => /*#__PURE__*/React.createElement(Section, {
  bg: "var(--sand-100)"
}, /*#__PURE__*/React.createElement(SectionHeading, {
  left: "4.9 \u05DE\u05EA\u05D5\u05DA 5",
  title: "\u05DE\u05D4 \u05D0\u05D5\u05DE\u05E8\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9 \u05E1\u05D1\u05D1",
  right: "312 \u05D1\u05D9\u05E7\u05D5\u05E8\u05D5\u05EA"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "var(--grid-gap)",
    marginTop: "var(--sp-9)"
  }
}, items.map((t, i) => /*#__PURE__*/React.createElement(Card, {
  key: i,
  tone: "light",
  padding: "var(--sp-7)"
}, /*#__PURE__*/React.createElement(Testimonial, t)))));
const Faq = ({
  items
}) => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-page)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "var(--sp-10)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "start",
    left: "\u05E9\u05D0\u05DC\u05D5\u05EA",
    title: "\u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD"
  }), /*#__PURE__*/React.createElement("div", null, items.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--sp-5)",
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "start",
      padding: "var(--sp-5) 0",
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-subtitle)",
      color: "var(--text-display)"
    }
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-primary)",
      fontFamily: "var(--font-ui)",
      fontSize: "22px",
      transition: "transform var(--dur-base) var(--ease-standard)",
      transform: open === i ? "rotate(45deg)" : "none"
    }
  }, "+")), open === i ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      paddingBottom: "var(--sp-6)",
      maxWidth: "62ch"
    }
  }, f.a) : null)))));
};
Object.assign(window, {
  Section,
  ModelGrid,
  TileBand,
  StoryBand,
  Quotes,
  Faq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/data.js
try { (() => {
window.CARROM_DATA = {
  nav: [{
    id: "home",
    label: "בית"
  }, {
    id: "models",
    label: "הדגמים"
  }, {
    id: "how",
    label: "איך משחקים"
  }, {
    id: "about",
    label: "עלינו"
  }, {
    id: "contact",
    label: "צרו קשר"
  }],
  models: [{
    id: "champion",
    name: "Champion",
    badge: "CHAMPION",
    badgeTone: "champion",
    meta: "16MM · TOURNAMENT",
    price: 990,
    image: "../../assets/board-champion-top.jpeg",
    blurb: "מסגרת שיטה מלאה בעובי 16 מ״מ — הלוח שמשמש בטורנירים. כבד, שקט, ומחזיק דורות.",
    specs: [{
      label: "עובי מסגרת",
      value: "16 מ״מ"
    }, {
      label: "מידות משטח",
      value: "74×74 ס״מ"
    }, {
      label: "עץ",
      value: "שיטה הודית מלאה"
    }, {
      label: "משקל",
      value: "14 ק״ג"
    }, {
      label: "כולל",
      value: "19 דיסקיות, מלכה, 2 סטרייקרים, אבקה"
    }]
  }, {
    id: "pro",
    name: "Pro",
    badge: "PRO",
    badgeTone: "pro",
    meta: "12MM",
    price: 790,
    featured: true,
    image: "../../assets/board-pro.jpeg",
    blurb: "האיזון בין רצינות לבית. מסגרת שחורה 12 מ״מ, אותו משטח מייפל, קצת יותר קל להזיז.",
    specs: [{
      label: "עובי מסגרת",
      value: "12 מ״מ"
    }, {
      label: "מידות משטח",
      value: "74×74 ס״מ"
    }, {
      label: "עץ",
      value: "שיטה, גימור שחור"
    }, {
      label: "משקל",
      value: "11 ק״ג"
    }, {
      label: "כולל",
      value: "19 דיסקיות, מלכה, סטרייקר, אבקה"
    }]
  }, {
    id: "classic",
    name: "Classic",
    badge: "CLASSIC",
    badgeTone: "classic",
    meta: "8MM",
    price: 590,
    image: "../../assets/board-classic.jpeg",
    blurb: "הכניסה למשחק. מסגרת כחולה 8 מ״מ, קלה לנשיאה — לחצר, לקמפינג, לכיתה.",
    specs: [{
      label: "עובי מסגרת",
      value: "8 מ״מ"
    }, {
      label: "מידות משטח",
      value: "70×70 ס״מ"
    }, {
      label: "עץ",
      value: "שיטה, מסגרת צבועה"
    }, {
      label: "משקל",
      value: "8 ק״ג"
    }, {
      label: "כולל",
      value: "19 דיסקיות, מלכה, סטרייקר, אבקה"
    }]
  }],
  tiles: [{
    image: "../../assets/lifestyle-bar.jpeg",
    kicker: "בבר",
    caption: "ערב שלם על שולחן אחד"
  }, {
    image: "../../assets/lifestyle-camping.png",
    kicker: "בשטח",
    caption: "נכנס לרכב, יוצא בכל מקום"
  }, {
    image: "../../assets/board-champion-top.jpeg",
    kicker: "בבית",
    caption: "עשרים דקות לסבב"
  }],
  testimonials: [{
    quote: "קנינו את ה-Pro לסלון. שבוע אחרי אף אחד בבית לא נוגע בשלט.",
    author: "נועה ל׳",
    role: "תל אביב"
  }, {
    quote: "שיחקתי קרום בילדות בבומביי. הלוח הזה הוא בדיוק מה שזכרתי, רק שהוא הגיע עד הדלת.",
    author: "אבי מ׳",
    role: "רעננה"
  }, {
    quote: "הבאנו לוח למסבאה. הוא לא זז מהשולחן מאז.",
    author: "בר ״שכונה״",
    role: "חיפה"
  }],
  faq: [{
    q: "כמה זמן לוקח משלוח?",
    a: "שלושה ימי עסקים לכל הארץ. איסוף עצמי מהמחסן בפתח תקווה בתיאום מראש."
  }, {
    q: "צריך רגליים או שולחן מיוחד?",
    a: "לא. הלוח יושב על כל שולחן. אפשר להוסיף סט רגליים מתקפלות בנפרד."
  }, {
    q: "מה זה אבקת החלקה?",
    a: "אבקה עדינה שמפזרים על המשטח לפני המשחק כדי שהדיסקיות יחליקו. סט קטן מגיע עם כל לוח."
  }, {
    q: "יש אחריות?",
    a: "שנתיים על המסגרת והמשטח, כולל תיקון או החלפה."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FeatureTile = __ds_scope.FeatureTile;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.ReviewCapsule = __ds_scope.ReviewCapsule;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecTable = __ds_scope.SpecTable;

})();
