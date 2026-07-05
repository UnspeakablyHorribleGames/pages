/* @ds-bundle: {"format":3,"namespace":"UnspeakablyHorribleGamesDesignSystem_e246c6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Divider","sourcePath":"components/data/Divider.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"30c7ac6f0009","components/actions/IconButton.jsx":"3838a40ba58f","components/data/Badge.jsx":"c8294e80749d","components/data/Card.jsx":"5a033a59cbf1","components/data/Divider.jsx":"7236dbb4819d","components/data/Tag.jsx":"f0f625721bd7","components/feedback/Dialog.jsx":"5031a4b15fd0","components/feedback/Toast.jsx":"652bb526c902","components/feedback/Tooltip.jsx":"8de2fc5f2ce4","components/forms/Checkbox.jsx":"7a143bc911c7","components/forms/Input.jsx":"2faf18379063","components/forms/Radio.jsx":"2321678cb20e","components/forms/Select.jsx":"d2bf7811ae9e","components/forms/Switch.jsx":"88ec739af4fa","components/forms/Textarea.jsx":"5abaf58e7473","components/navigation/Tabs.jsx":"fe68ca8037c1","ui_kits/studio-site/AboutScreen.jsx":"972394b21256","ui_kits/studio-site/Bits.jsx":"8156e01e12e7","ui_kits/studio-site/Data.jsx":"4b4e4a295a32","ui_kits/studio-site/Footer.jsx":"8a95528699c8","ui_kits/studio-site/GamesScreen.jsx":"7d59c1eeff45","ui_kits/studio-site/Header.jsx":"4db50e206e06","ui_kits/studio-site/HomeScreen.jsx":"21a7e243b962","ui_kits/studio-site/TeamScreen.jsx":"ed25ea56176e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UnspeakablyHorribleGamesDesignSystem_e246c6 = window.UnspeakablyHorribleGamesDesignSystem_e246c6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Injects the component's CSS once. Class names are prefixed `uhg-` to avoid
 * collisions in the shared bundle.
 */
function useButtonStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-button-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-button-styles";
    el.textContent = `
      .uhg-btn {
        appearance: none; -webkit-appearance: none;
        display: inline-flex; align-items: center; justify-content: center;
        gap: var(--space-2);
        font-family: var(--font-ui); font-weight: var(--weight-semibold);
        letter-spacing: var(--tracking-wide);
        text-transform: uppercase; font-size: var(--text-sm);
        line-height: 1; white-space: nowrap; text-decoration: none;
        border: var(--border-thin) solid transparent;
        background: var(--surface-card); color: var(--absinthe-400);
        border-radius: var(--radius-control);
        height: var(--control-h-md); padding: 0 var(--space-5);
        cursor: pointer; user-select: none;
        transition: background var(--dur-fast) var(--ease-standard),
                    box-shadow var(--dur-base) var(--ease-out),
                    color var(--dur-fast) var(--ease-standard),
                    border-color var(--dur-fast) var(--ease-standard),
                    transform var(--dur-fast) var(--ease-standard);
      }
      .uhg-btn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
      .uhg-btn:active { transform: translateY(1px); }
      .uhg-btn[disabled] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
      .uhg-btn--sm { height: var(--control-h-sm); padding: 0 var(--space-4); font-size: var(--text-xs); }
      .uhg-btn--lg { height: var(--control-h-lg); padding: 0 var(--space-6); font-size: var(--text-base); }
      .uhg-btn--block { display: flex; width: 100%; }

      /* primary — deep burgundy fill (workhorse CTA) */
      .uhg-btn--primary { background: var(--btn-primary); color: var(--parchment); border-color: transparent; }
      .uhg-btn--primary:hover { background: var(--btn-primary-hover); }
      .uhg-btn--primary:active { background: var(--btn-primary-press); }

      /* loud — STAGED (paused from use): cosmic-violet from the mascot wing, glowing edge */
      .uhg-btn--loud { background: var(--btn-loud); color: var(--parchment); border-color: var(--btn-loud-edge); box-shadow: 0 0 16px -4px rgba(151,82,148,0.55); }
      .uhg-btn--loud:hover { background: var(--btn-loud); box-shadow: 0 0 24px -2px rgba(151,82,148,0.8); }
      .uhg-btn--loud:active { background: var(--btn-loud-press); }

      /* secondary — dark chip, absinthe hairline + text, blooms on hover (restrained accent) */
      .uhg-btn--secondary { background: var(--surface-card); color: var(--absinthe-400); border-color: rgba(159,190,59,0.5); }
      .uhg-btn--secondary:hover { border-color: var(--accent); color: var(--absinthe-300); box-shadow: var(--glow-sm-absinthe); }
      .uhg-btn--secondary:active { background: var(--surface-raised); }
      [data-theme="light"] .uhg-btn--secondary, .theme-light .uhg-btn--secondary {
        background: var(--accent-soft); color: var(--accent); border-color: rgba(110,139,46,0.55);
      }
      [data-theme="light"] .uhg-btn--secondary:hover, .theme-light .uhg-btn--secondary:hover {
        background: rgba(110,139,46,0.22); color: var(--accent-press); border-color: var(--accent); box-shadow: none;
      }

      /* gilt — gilded outline, transparent fill */
      .uhg-btn--gilt { background: transparent; color: var(--brand-gold); border-color: var(--brand-gold); }
      .uhg-btn--gilt:hover { background: rgba(200,162,76,0.12); box-shadow: var(--glow-gold-soft); }

      /* ghost — quiet */
      .uhg-btn--ghost { background: transparent; color: var(--text-body); border-color: transparent; }
      .uhg-btn--ghost:hover { background: var(--surface-raised); color: var(--text-strong); }

      /* verdigris — oxidized copper outline */
      .uhg-btn--verd { background: linear-gradient(150deg,#1d2b26,#131c18); color:#9fd8c4; border-color: rgba(90,150,130,.55); }
      .uhg-btn--verd:hover { border-color:#7fc4ac; color:#c6efe0; box-shadow: 0 0 16px -6px rgba(90,150,130,.6); }
      .uhg-btn--verd:active { background: linear-gradient(150deg,#17231f,#0f1613); }

      /* danger */
      .uhg-btn--danger { background: var(--danger); color: var(--danger-fg); border-color: transparent; }
      .uhg-btn--danger:hover { background: var(--blood-400); }
    `;
    document.head.appendChild(el);
  }, []);
}
function Button({
  variant = "primary",
  size = "md",
  block = false,
  type = "button",
  as: Tag = "button",
  className = "",
  children,
  ...rest
}) {
  useButtonStyles();
  const cls = ["uhg-btn", `uhg-btn--${variant}`, size !== "md" ? `uhg-btn--${size}` : "", block ? "uhg-btn--block" : "", className].filter(Boolean).join(" ");
  const props = Tag === "button" ? {
    type
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, props, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useIconButtonStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-iconbutton-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-iconbutton-styles";
    el.textContent = `
      .uhg-iconbtn {
        appearance: none; -webkit-appearance: none;
        display: inline-flex; align-items: center; justify-content: center;
        width: var(--control-h-md); height: var(--control-h-md);
        border-radius: var(--radius-control);
        border: var(--border-thin) solid transparent;
        background: transparent; color: var(--text-body);
        cursor: pointer;
        transition: background var(--dur-fast) var(--ease-standard),
                    color var(--dur-fast) var(--ease-standard),
                    border-color var(--dur-fast) var(--ease-standard),
                    box-shadow var(--dur-base) var(--ease-out);
      }
      .uhg-iconbtn svg { width: 1.15em; height: 1.15em; display: block; }
      .uhg-iconbtn:hover { background: var(--surface-raised); color: var(--text-strong); }
      .uhg-iconbtn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
      .uhg-iconbtn:active { transform: translateY(1px); }
      .uhg-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
      .uhg-iconbtn--sm { width: var(--control-h-sm); height: var(--control-h-sm); font-size: var(--text-sm); }
      .uhg-iconbtn--lg { width: var(--control-h-lg); height: var(--control-h-lg); font-size: var(--text-lg); }
      .uhg-iconbtn--solid { background: var(--accent); color: var(--text-on-accent); }
      .uhg-iconbtn--solid:hover { background: var(--accent-hover); box-shadow: var(--glow-sm-absinthe); color: var(--text-on-accent); }
      .uhg-iconbtn--outline { border-color: var(--border-strong); }
      .uhg-iconbtn--outline:hover { border-color: var(--brand-gold); color: var(--brand-gold); }
    `;
    document.head.appendChild(el);
  }, []);
}
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  useIconButtonStyles();
  const cls = ["uhg-iconbtn", variant !== "ghost" ? `uhg-iconbtn--${variant}` : "", size !== "md" ? `uhg-iconbtn--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useBadgeStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-badge-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-badge-styles";
    el.textContent = `
      .uhg-badge {
        display: inline-flex; align-items: center; gap: var(--space-1);
        font-family: var(--font-mono); font-size: var(--text-2xs);
        font-weight: var(--weight-medium); letter-spacing: var(--tracking-wider);
        text-transform: uppercase; line-height: 1;
        padding: 4px 8px; border-radius: var(--radius-xs);
        border: var(--border-hair) solid transparent; white-space: nowrap;
      }
      .uhg-badge--absinthe { background: var(--accent-soft); color: var(--absinthe-400); border-color: rgba(159,190,59,0.3); }
      .uhg-badge--burgundy { background: rgba(138,36,57,0.18); color: var(--oxblood-400); border-color: rgba(138,36,57,0.4); }
      .uhg-badge--gilt { background: rgba(200,162,76,0.14); color: var(--gilt-400); border-color: var(--border-gilt); }
      .uhg-badge--violet { background: rgba(110,74,134,0.2); color: var(--violet-400); border-color: rgba(110,74,134,0.4); }
      .uhg-badge--neutral { background: var(--surface-raised); color: var(--text-muted); border-color: var(--border-subtle); }
      .uhg-badge--solid { background: var(--accent); color: var(--text-on-accent); border-color: transparent; }
      .uhg-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
      /* light theme: bright accent text is illegible on cream — darken the ink */
      [data-theme="light"] .uhg-badge--absinthe, .theme-light .uhg-badge--absinthe { color: var(--accent); border-color: rgba(110,139,46,0.45); }
      [data-theme="light"] .uhg-badge--burgundy, .theme-light .uhg-badge--burgundy { color: var(--oxblood-700); border-color: rgba(138,36,57,0.5); }
      [data-theme="light"] .uhg-badge--gilt, .theme-light .uhg-badge--gilt { color: var(--gilt-700); }
      [data-theme="light"] .uhg-badge--violet, .theme-light .uhg-badge--violet { color: #4A2E63; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Badge({
  tone = "absinthe",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  useBadgeStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["uhg-badge", `uhg-badge--${tone}`, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "uhg-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCardStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-card-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-card-styles";
    el.textContent = `
      .uhg-card {
        position: relative; display: flex; flex-direction: column;
        background: var(--surface-card);
        border: var(--border-hair) solid var(--border-subtle);
        border-radius: var(--radius-card);
        box-shadow: var(--shadow-md);
        overflow: hidden;
        transition: transform var(--dur-base) var(--ease-out),
                    box-shadow var(--dur-base) var(--ease-out),
                    border-color var(--dur-base) var(--ease-standard);
      }
      .uhg-card--gilt { border-color: var(--border-gilt); box-shadow: var(--shadow-md), var(--ring-gilt); }
      .uhg-card--burgundy { background: var(--surface-burgundy); border-color: rgba(138,36,57,0.4); }
      .uhg-card--pad { padding: var(--space-6); }
      .uhg-card--interactive { cursor: pointer; }
      .uhg-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: var(--accent); }
      .uhg-card__media { display: block; width: 100%; aspect-ratio: 16/9; object-fit: cover; background: var(--surface-sunken); }
      .uhg-card__body { padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); }
      .uhg-card__title { font-family: var(--font-display); font-weight: var(--weight-regular);
        font-size: var(--text-xl); color: var(--text-strong); line-height: var(--leading-snug); margin: 0; }
      .uhg-card__text { font-family: var(--font-body); font-size: var(--text-base);
        color: var(--text-body); line-height: var(--leading-relaxed); margin: 0; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Card({
  variant = "default",
  padded = false,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  useCardStyles();
  const cls = ["uhg-card", variant !== "default" ? `uhg-card--${variant}` : "", padded ? "uhg-card--pad" : "", interactive ? "uhg-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Card.Media = function CardMedia({
  src,
  alt = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    className: "uhg-card__media",
    src: src,
    alt: alt
  }, rest));
};
Card.Body = function CardBody({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uhg-card__body", className].filter(Boolean).join(" ")
  }, rest), children);
};
Card.Title = function CardTitle({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: ["uhg-card__title", className].filter(Boolean).join(" ")
  }, rest), children);
};
Card.Text = function CardText({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: ["uhg-card__text", className].filter(Boolean).join(" ")
  }, rest), children);
};
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useDividerStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-divider-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-divider-styles";
    el.textContent = `
      .uhg-divider { border: 0; height: 1px; width: 100%; background: var(--border-subtle); margin: var(--space-5) 0; }
      .uhg-divider--gilt { background: linear-gradient(90deg, transparent, var(--border-gilt), transparent); }
      .uhg-divider--ornament {
        display: flex; align-items: center; gap: var(--space-4); border: 0; height: auto;
        color: var(--brand-gold); margin: var(--space-6) 0;
      }
      .uhg-divider--ornament::before, .uhg-divider--ornament::after {
        content: ""; flex: 1; height: 1px;
        background: linear-gradient(90deg, transparent, var(--border-gilt));
      }
      .uhg-divider--ornament::after { background: linear-gradient(90deg, var(--border-gilt), transparent); }
      .uhg-divider__glyph { font-family: var(--font-display); font-size: var(--text-lg); line-height: 1; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Divider({
  variant = "plain",
  glyph = "❦",
  className = "",
  ...rest
}) {
  useDividerStyles();
  if (variant === "ornament") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["uhg-divider--ornament", className].filter(Boolean).join(" "),
      role: "separator"
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "uhg-divider__glyph",
      "aria-hidden": "true"
    }, glyph));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ["uhg-divider", variant === "gilt" ? "uhg-divider--gilt" : "", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useTagStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-tag-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-tag-styles";
    el.textContent = `
      .uhg-tag {
        display: inline-flex; align-items: center; gap: var(--space-2);
        font-family: var(--font-ui); font-size: var(--text-xs); font-weight: var(--weight-medium);
        color: var(--text-body); background: var(--surface-raised);
        border: var(--border-hair) solid var(--border-subtle);
        padding: 5px 12px; border-radius: var(--radius-pill); line-height: 1;
        transition: border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard);
      }
      .uhg-tag--interactive { cursor: pointer; }
      .uhg-tag--interactive:hover { border-color: var(--accent); color: var(--text-strong); }
      .uhg-tag--selected { background: var(--accent-soft); border-color: var(--accent); color: var(--absinthe-300); }
      [data-theme="light"] .uhg-tag--selected, .theme-light .uhg-tag--selected { color: var(--accent-press); border-color: var(--accent); }
      .uhg-tag__x {
        display: inline-grid; place-items: center; width: 15px; height: 15px;
        border-radius: 50%; margin-right: -4px; cursor: pointer; color: var(--text-faint);
      }
      .uhg-tag__x:hover { color: var(--danger); }
      .uhg-tag__x svg { width: 11px; height: 11px; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Tag({
  selected,
  interactive,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  useTagStyles();
  const cls = ["uhg-tag", interactive || onRemove ? "uhg-tag--interactive" : "", selected ? "uhg-tag--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "uhg-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function useDialogStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-dialog-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-dialog-styles";
    el.textContent = `
      .uhg-dialog__scrim {
        position: fixed; inset: 0; z-index: var(--z-modal);
        background: var(--surface-overlay); backdrop-filter: blur(3px);
        display: grid; place-items: center; padding: var(--space-5);
        opacity: 1;
      }
      .uhg-dialog {
        position: relative; width: 100%; max-width: 520px; max-height: 88vh; overflow: auto;
        background: var(--surface-card);
        border: var(--border-hair) solid var(--border-gilt);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl), var(--ring-gilt);
        opacity: 1;
      }
      @media (prefers-reduced-motion: no-preference) {
        .uhg-dialog__scrim { animation: uhg-dialog-in var(--dur-base) var(--ease-out); }
        .uhg-dialog { animation: uhg-dialog-rise var(--dur-slow) var(--ease-out); }
      }
      .uhg-dialog__topline { height: 3px; background: linear-gradient(90deg, transparent, var(--brand-gold), transparent); }
      .uhg-dialog__head { display: flex; align-items: flex-start; justify-content: space-between;
        gap: var(--space-4); padding: var(--space-6) var(--space-6) var(--space-3); }
      .uhg-dialog__title { font-family: var(--font-display); font-weight: var(--weight-regular);
        font-size: var(--text-2xl); color: var(--text-strong); line-height: var(--leading-snug); margin: 0; }
      .uhg-dialog__body { padding: 0 var(--space-6) var(--space-5); font-family: var(--font-body);
        font-size: var(--text-base); color: var(--text-body); line-height: var(--leading-relaxed); }
      .uhg-dialog__foot { display: flex; justify-content: flex-end; gap: var(--space-3);
        padding: var(--space-4) var(--space-6) var(--space-6); }
      .uhg-dialog__x { flex: none; background: none; border: 0; cursor: pointer; color: var(--text-faint);
        width: 32px; height: 32px; border-radius: var(--radius-sm); display: grid; place-items: center; }
      .uhg-dialog__x:hover { color: var(--text-strong); background: var(--surface-raised); }
      .uhg-dialog__x svg { width: 18px; height: 18px; }
      @keyframes uhg-dialog-in { from { opacity: 0; } to { opacity: 1; } }
      @keyframes uhg-dialog-rise { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: none; } }
    `;
    document.head.appendChild(el);
  }, []);
}
function Dialog({
  open,
  onClose,
  title,
  footer,
  children,
  className = ""
}) {
  useDialogStyles();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "uhg-dialog__scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: ["uhg-dialog", className].filter(Boolean).join(" "),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "uhg-dialog__topline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "uhg-dialog__head"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "uhg-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uhg-dialog__x",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "uhg-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "uhg-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useToastStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-toast-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-toast-styles";
    el.textContent = `
      .uhg-toast {
        display: flex; align-items: flex-start; gap: var(--space-3);
        width: 340px; max-width: 90vw;
        background: var(--surface-raised);
        border: var(--border-hair) solid var(--border-subtle);
        border-left: 3px solid var(--accent);
        border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
        padding: var(--space-4); position: relative;
        opacity: 1;
      }
      @media (prefers-reduced-motion: no-preference) {
        .uhg-toast { animation: uhg-toast-in var(--dur-slow) var(--ease-out); }
      }
      .uhg-toast--success { border-left-color: var(--success); }
      .uhg-toast--danger  { border-left-color: var(--danger); }
      .uhg-toast--warning { border-left-color: var(--warning); }
      .uhg-toast--info    { border-left-color: var(--info); }
      .uhg-toast__icon { flex: none; width: 20px; height: 20px; margin-top: 1px; color: var(--accent); }
      .uhg-toast--success .uhg-toast__icon { color: var(--success); }
      .uhg-toast--danger  .uhg-toast__icon { color: var(--danger); }
      .uhg-toast--warning .uhg-toast__icon { color: var(--warning); }
      .uhg-toast--info    .uhg-toast__icon { color: var(--info); }
      .uhg-toast__icon svg { width: 100%; height: 100%; }
      .uhg-toast__content { flex: 1; min-width: 0; }
      .uhg-toast__title { font-family: var(--font-ui); font-size: var(--text-sm); font-weight: var(--weight-semibold);
        color: var(--text-strong); margin: 0 0 2px; }
      .uhg-toast__msg { font-family: var(--font-body); font-size: var(--text-sm); color: var(--text-body);
        line-height: var(--leading-normal); margin: 0; }
      .uhg-toast__x { flex: none; background: none; border: 0; cursor: pointer; color: var(--text-faint);
        width: 22px; height: 22px; border-radius: var(--radius-xs); display: grid; place-items: center; }
      .uhg-toast__x:hover { color: var(--text-strong); }
      .uhg-toast__x svg { width: 14px; height: 14px; }
      .uhg-toast-stack { position: fixed; z-index: var(--z-toast); bottom: var(--space-5); right: var(--space-5);
        display: flex; flex-direction: column; gap: var(--space-3); }
      @keyframes uhg-toast-in { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: none; } }
    `;
    document.head.appendChild(el);
  }, []);
}
const ICONS = {
  default: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 5v6m0 4h.01",
  success: "M20 6L9 17l-5-5",
  danger: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 6v5m0 4h.01",
  warning: "M12 3l9 16H3l9-16zm0 6v4m0 4h.01",
  info: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 7v6m0-9h.01"
};
function Toast({
  tone = "default",
  title,
  children,
  onClose,
  className = "",
  ...rest
}) {
  useToastStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uhg-toast", tone !== "default" ? `uhg-toast--${tone}` : "", className].filter(Boolean).join(" "),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "uhg-toast__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[tone] || ICONS.default
  }))), /*#__PURE__*/React.createElement("div", {
    className: "uhg-toast__content"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "uhg-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "uhg-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "uhg-toast__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}

/** Fixed bottom-right stack container for Toasts. */
function ToastStack({
  children,
  ...rest
}) {
  useToastStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "uhg-toast-stack"
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useTooltipStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-tooltip-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-tooltip-styles";
    el.textContent = `
      .uhg-tt { position: relative; display: inline-flex; }
      .uhg-tt__bubble {
        position: absolute; z-index: var(--z-tooltip); left: 50%; transform: translateX(-50%) translateY(4px);
        bottom: calc(100% + 8px); white-space: nowrap; pointer-events: none;
        font-family: var(--font-ui); font-size: var(--text-xs); font-weight: var(--weight-medium);
        color: var(--parchment); background: var(--ink-900);
        border: var(--border-hair) solid var(--border-gilt);
        padding: 6px 10px; border-radius: var(--radius-sm); box-shadow: var(--shadow-lg);
        opacity: 0; transition: opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-out);
      }
      .uhg-tt__bubble::after {
        content: ""; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
        border: 5px solid transparent; border-top-color: var(--ink-900);
      }
      .uhg-tt:hover .uhg-tt__bubble, .uhg-tt:focus-within .uhg-tt__bubble { opacity: 1; transform: translateX(-50%) translateY(0); }
      .uhg-tt--bottom .uhg-tt__bubble { bottom: auto; top: calc(100% + 8px); }
      .uhg-tt--bottom .uhg-tt__bubble::after { top: auto; bottom: 100%; border-top-color: transparent; border-bottom-color: var(--ink-900); }
    `;
    document.head.appendChild(el);
  }, []);
}
function Tooltip({
  label,
  side = "top",
  className = "",
  children,
  ...rest
}) {
  useTooltipStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["uhg-tt", side === "bottom" ? "uhg-tt--bottom" : "", className].filter(Boolean).join(" ")
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "uhg-tt__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCheckStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-check-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-check-styles";
    el.textContent = `
      .uhg-check { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer;
        font-family: var(--font-ui); font-size: var(--text-sm); color: var(--text-body); }
      .uhg-check input { position: absolute; opacity: 0; width: 0; height: 0; }
      .uhg-check__box {
        flex: none; width: 20px; height: 20px; margin-top: 1px;
        border: var(--border-thin) solid var(--border-strong);
        border-radius: var(--radius-xs); background: var(--surface-sunken);
        display: grid; place-items: center; color: var(--text-on-accent);
        transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-out);
      }
      .uhg-check__box svg { width: 13px; height: 13px; opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out); }
      .uhg-check:hover .uhg-check__box { border-color: var(--accent); }
      .uhg-check input:focus-visible + .uhg-check__box { box-shadow: var(--ring-focus); }
      .uhg-check input:checked + .uhg-check__box { background: var(--accent); border-color: var(--accent); }
      .uhg-check input:checked + .uhg-check__box svg { opacity: 1; transform: scale(1); }
      .uhg-check input:disabled ~ * { opacity: 0.45; }
      .uhg-check--disabled { cursor: not-allowed; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Checkbox({
  label,
  id,
  disabled,
  className = "",
  children,
  ...rest
}) {
  useCheckStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["uhg-check", disabled ? "uhg-check--disabled" : "", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uhg-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L19 7"
  }))), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useFieldStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-field-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-field-styles";
    el.textContent = `
      .uhg-field { display: flex; flex-direction: column; gap: var(--space-2); }
      .uhg-field__label {
        font-family: var(--font-ui); font-size: var(--text-xs);
        font-weight: var(--weight-semibold); letter-spacing: var(--tracking-wider);
        text-transform: uppercase; color: var(--text-muted);
      }
      .uhg-field__req { color: var(--brand-burgundy); margin-left: 2px; }
      .uhg-field__hint { font-family: var(--font-ui); font-size: var(--text-xs); color: var(--text-faint); }
      .uhg-field__err { font-family: var(--font-ui); font-size: var(--text-xs); color: var(--danger); }
      .uhg-input, .uhg-textarea {
        font-family: var(--font-ui); font-size: var(--text-sm); color: var(--text-strong);
        background: var(--surface-sunken);
        border: var(--border-thin) solid var(--border-subtle);
        border-radius: var(--radius-control);
        padding: 0 var(--space-4); height: var(--control-h-md);
        width: 100%; box-shadow: var(--shadow-inset);
        transition: border-color var(--dur-fast) var(--ease-standard),
                    box-shadow var(--dur-base) var(--ease-out);
      }
      .uhg-textarea { height: auto; padding: var(--space-3) var(--space-4); line-height: var(--leading-normal); resize: vertical; min-height: 96px; }
      .uhg-input::placeholder, .uhg-textarea::placeholder { color: var(--text-faint); }
      .uhg-input:hover, .uhg-textarea:hover { border-color: var(--border-strong); }
      .uhg-input:focus, .uhg-textarea:focus {
        outline: none; border-color: var(--border-focus);
        box-shadow: var(--ring-focus), var(--shadow-inset);
      }
      .uhg-input[aria-invalid="true"], .uhg-textarea[aria-invalid="true"] { border-color: var(--danger); }
      .uhg-input[disabled], .uhg-textarea[disabled] { opacity: 0.5; cursor: not-allowed; }
      .uhg-input--sm { height: var(--control-h-sm); font-size: var(--text-xs); }
      .uhg-input--lg { height: var(--control-h-lg); font-size: var(--text-base); }
    `;
    document.head.appendChild(el);
  }, []);
}
function Field({
  label,
  required,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "uhg-field",
    htmlFor: htmlFor
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "uhg-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "uhg-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "uhg-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "uhg-field__hint"
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  size = "md",
  id,
  className = "",
  ...rest
}) {
  useFieldStyles();
  const cls = ["uhg-input", size !== "md" ? `uhg-input--${size}` : "", className].filter(Boolean).join(" ");
  const input = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: cls,
    "aria-invalid": error ? "true" : undefined,
    required: required
  }, rest));
  if (!label && !hint && !error) return input;
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: id
  }, input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useRadioStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-radio-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-radio-styles";
    el.textContent = `
      .uhg-radio { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer;
        font-family: var(--font-ui); font-size: var(--text-sm); color: var(--text-body); }
      .uhg-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
      .uhg-radio__dot {
        flex: none; width: 20px; height: 20px; margin-top: 1px; border-radius: 50%;
        border: var(--border-thin) solid var(--border-strong); background: var(--surface-sunken);
        display: grid; place-items: center;
        transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-out);
      }
      .uhg-radio__dot::after {
        content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);
        transform: scale(0); transition: transform var(--dur-fast) var(--ease-out);
        box-shadow: var(--glow-sm-absinthe);
      }
      .uhg-radio:hover .uhg-radio__dot { border-color: var(--accent); }
      .uhg-radio input:focus-visible + .uhg-radio__dot { box-shadow: var(--ring-focus); }
      .uhg-radio input:checked + .uhg-radio__dot { border-color: var(--accent); }
      .uhg-radio input:checked + .uhg-radio__dot::after { transform: scale(1); }
      .uhg-radio input:disabled ~ * { opacity: 0.45; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Radio({
  label,
  id,
  name,
  className = "",
  children,
  ...rest
}) {
  useRadioStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["uhg-radio", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: id,
    name: name
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uhg-radio__dot",
    "aria-hidden": "true"
  }), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSelectStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-select-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-select-styles";
    el.textContent = `
      .uhg-select-field { display: flex; flex-direction: column; gap: var(--space-2); }
      .uhg-select-field__label {
        font-family: var(--font-ui); font-size: var(--text-xs);
        font-weight: var(--weight-semibold); letter-spacing: var(--tracking-wider);
        text-transform: uppercase; color: var(--text-muted);
      }
      .uhg-select-wrap { position: relative; display: block; }
      .uhg-select {
        appearance: none; -webkit-appearance: none;
        font-family: var(--font-ui); font-size: var(--text-sm); color: var(--text-strong);
        background: var(--surface-sunken);
        border: var(--border-thin) solid var(--border-subtle);
        border-radius: var(--radius-control);
        padding: 0 var(--space-7) 0 var(--space-4);
        height: var(--control-h-md); width: 100%; cursor: pointer;
        box-shadow: var(--shadow-inset);
        transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-out);
      }
      .uhg-select:hover { border-color: var(--border-strong); }
      .uhg-select:focus { outline: none; border-color: var(--border-focus); box-shadow: var(--ring-focus), var(--shadow-inset); }
      .uhg-select[disabled] { opacity: 0.5; cursor: not-allowed; }
      .uhg-select option { background: var(--surface-card); color: var(--text-strong); }
      .uhg-select-caret {
        position: absolute; right: var(--space-4); top: 50%; transform: translateY(-50%);
        pointer-events: none; color: var(--brand-gold); width: 14px; height: 14px;
      }
    `;
    document.head.appendChild(el);
  }, []);
}
function Select({
  label,
  id,
  options = [],
  placeholder,
  className = "",
  children,
  ...rest
}) {
  useSelectStyles();
  const select = /*#__PURE__*/React.createElement("span", {
    className: "uhg-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: ["uhg-select", className].filter(Boolean).join(" ")
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }), children), /*#__PURE__*/React.createElement("svg", {
    className: "uhg-select-caret",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })));
  if (!label) return select;
  return /*#__PURE__*/React.createElement("label", {
    className: "uhg-select-field",
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "uhg-select-field__label"
  }, label), select);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useSwitchStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-switch-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-switch-styles";
    el.textContent = `
      .uhg-switch { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer;
        font-family: var(--font-ui); font-size: var(--text-sm); color: var(--text-body); }
      .uhg-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
      .uhg-switch__track {
        flex: none; width: 44px; height: 24px; border-radius: var(--radius-pill);
        background: var(--surface-sunken); border: var(--border-thin) solid var(--border-strong);
        position: relative; transition: background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard);
      }
      .uhg-switch__thumb {
        position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%;
        background: var(--bone-300); box-shadow: var(--shadow-sm);
        transition: transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-standard);
      }
      .uhg-switch:hover .uhg-switch__track { border-color: var(--accent); }
      .uhg-switch input:focus-visible + .uhg-switch__track { box-shadow: var(--ring-focus); }
      .uhg-switch input:checked + .uhg-switch__track { background: var(--accent); border-color: var(--accent); }
      .uhg-switch input:checked + .uhg-switch__track .uhg-switch__thumb { transform: translateX(20px); background: var(--void); }
      .uhg-switch input:disabled ~ * { opacity: 0.45; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Switch({
  label,
  id,
  className = "",
  children,
  ...rest
}) {
  useSwitchStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["uhg-switch", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "uhg-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uhg-switch__thumb"
  })), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useTextareaStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-textarea-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-textarea-styles";
    el.textContent = `
      .uhg-ta-field { display: flex; flex-direction: column; gap: var(--space-2); }
      .uhg-ta-field__label {
        font-family: var(--font-ui); font-size: var(--text-xs);
        font-weight: var(--weight-semibold); letter-spacing: var(--tracking-wider);
        text-transform: uppercase; color: var(--text-muted);
      }
      .uhg-ta-field__req { color: var(--brand-burgundy); margin-left: 2px; }
      .uhg-ta-field__hint { font-family: var(--font-ui); font-size: var(--text-xs); color: var(--text-faint); }
      .uhg-ta-field__err { font-family: var(--font-ui); font-size: var(--text-xs); color: var(--danger); }
      .uhg-ta {
        font-family: var(--font-ui); font-size: var(--text-sm); color: var(--text-strong);
        background: var(--surface-sunken);
        border: var(--border-thin) solid var(--border-subtle);
        border-radius: var(--radius-control);
        padding: var(--space-3) var(--space-4); width: 100%;
        line-height: var(--leading-normal); resize: vertical; min-height: 96px;
        box-shadow: var(--shadow-inset);
        transition: border-color var(--dur-fast) var(--ease-standard),
                    box-shadow var(--dur-base) var(--ease-out);
      }
      .uhg-ta::placeholder { color: var(--text-faint); }
      .uhg-ta:hover { border-color: var(--border-strong); }
      .uhg-ta:focus { outline: none; border-color: var(--border-focus); box-shadow: var(--ring-focus), var(--shadow-inset); }
      .uhg-ta[aria-invalid="true"] { border-color: var(--danger); }
      .uhg-ta[disabled] { opacity: 0.5; cursor: not-allowed; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Textarea({
  label,
  hint,
  error,
  required,
  id,
  className = "",
  ...rest
}) {
  useTextareaStyles();
  const cls = ["uhg-ta", className].filter(Boolean).join(" ");
  const ta = /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    className: cls,
    "aria-invalid": error ? "true" : undefined,
    required: required
  }, rest));
  if (!label && !hint && !error) return ta;
  return /*#__PURE__*/React.createElement("label", {
    className: "uhg-ta-field",
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "uhg-ta-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "uhg-ta-field__req"
  }, "*")), ta, error ? /*#__PURE__*/React.createElement("span", {
    className: "uhg-ta-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "uhg-ta-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useTabsStyles() {
  React.useEffect(() => {
    if (document.getElementById("uhg-tabs-styles")) return;
    const el = document.createElement("style");
    el.id = "uhg-tabs-styles";
    el.textContent = `
      .uhg-tabs { display: flex; gap: var(--space-1); border-bottom: var(--border-hair) solid var(--border-subtle); }
      .uhg-tab {
        position: relative; appearance: none; background: none; border: 0; cursor: pointer;
        font-family: var(--font-ui); font-size: var(--text-sm); font-weight: var(--weight-semibold);
        letter-spacing: var(--tracking-wide); text-transform: uppercase;
        color: var(--text-muted); padding: var(--space-3) var(--space-4);
        white-space: nowrap;
        transition: color var(--dur-fast) var(--ease-standard);
      }
      .uhg-tab::after {
        content: ""; position: absolute; left: var(--space-4); right: var(--space-4); bottom: -1px;
        height: 2px; background: var(--accent); border-radius: 2px;
        transform: scaleX(0); transform-origin: center;
        transition: transform var(--dur-base) var(--ease-out);
        box-shadow: var(--glow-sm-absinthe);
      }
      .uhg-tab:hover { color: var(--text-strong); }
      .uhg-tab:focus-visible { outline: none; color: var(--text-strong); box-shadow: var(--ring-focus); border-radius: var(--radius-xs); }
      .uhg-tab[aria-selected="true"] { color: var(--text-strong); }
      .uhg-tab[aria-selected="true"]::after { transform: scaleX(1); }
      .uhg-tab[disabled] { opacity: 0.4; cursor: not-allowed; }
      .uhg-tabs--pill { border: 0; gap: var(--space-2); background: var(--surface-sunken);
        padding: var(--space-1); border-radius: var(--radius-pill); display: inline-flex; }
      .uhg-tabs--pill .uhg-tab { border-radius: var(--radius-pill); padding: var(--space-2) var(--space-5); border: var(--border-hair) solid transparent; }
      .uhg-tabs--pill .uhg-tab::after { display: none; }
      .uhg-tabs--pill .uhg-tab[aria-selected="true"] { background: var(--surface-raised); color: var(--absinthe-400); border-color: rgba(159,190,59,0.4); box-shadow: var(--glow-sm-absinthe); }
      [data-theme="light"] .uhg-tabs--pill .uhg-tab[aria-selected="true"], .theme-light .uhg-tabs--pill .uhg-tab[aria-selected="true"] { color: var(--accent); border-color: rgba(110,139,46,0.5); box-shadow: none; }
    `;
    document.head.appendChild(el);
  }, []);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  className = "",
  ...rest
}) {
  useTabsStyles();
  const first = tabs[0] && (typeof tabs[0] === "string" ? tabs[0] : tabs[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["uhg-tabs", variant === "pill" ? "uhg-tabs--pill" : "", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      type: "button",
      role: "tab",
      className: "uhg-tab",
      "aria-selected": active === tab.value,
      disabled: tab.disabled,
      onClick: () => select(tab.value)
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/AboutScreen.jsx
try { (() => {
// About: studio story + mission values.
function AboutScreen() {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const {
    Divider,
    Badge
  } = UHG;
  const {
    Section
  } = window;
  const values = [{
    h: "Small on purpose",
    b: "We make games we can finish. Scope is the real monster."
  }, {
    h: "Cozy, then cursed",
    b: "Comfort first. The dread should sneak up on you like a cat."
  }, {
    h: "Humble to a fault",
    b: "We'll tell you what's broken before you find it. Usually."
  }, {
    h: "Kind to players",
    b: "Fair prices, no dark patterns. The only darkness is thematic."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Who we are",
    title: "A few friends in a dim room."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--space-8)",
      marginTop: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      color: "var(--text-body)",
      lineHeight: 1.75,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      float: "left",
      fontFamily: "var(--font-display)",
      fontSize: 62,
      lineHeight: 0.8,
      color: "var(--text-accent)",
      paddingRight: 12,
      marginTop: 6
    }
  }, "W"), "e started Unspeakably Horrible Games because we love the genre and we are not very good at leaving it alone. The name is a pun \u2014 a nod to Lovecraft, and an honest warning about the quality. We're humble. The games might not be great. But they're ours, and we made them with our whole cursed hearts."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We believe horror is best served cozy: a warm mug, a soft blanket, and something enormous breathing just off-screen. If you finish one of our games feeling a little unsettled and a little comforted, we did our job.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-gilt)",
      background: "var(--surface-card)",
      boxShadow: "var(--ring-gilt)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-grimoire)",
      fontStyle: "italic",
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      lineHeight: 1.5
    }
  }, "\"That is not dead which can eternal lie, and with strange aeons even our roadmap may ship.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)",
      marginTop: 12,
      letterSpacing: ".08em"
    }
  }, "\u2014 studio motto, misremembered")))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "What we stand for",
    title: "Our four small commandments",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-6)"
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.h,
    style: {
      padding: "var(--space-5)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--brand-gold)",
      marginBottom: 10
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, v.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.6,
      margin: 0
    }
  }, v.b))))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Bits.jsx
try { (() => {
/* Shared placeholder art + small helpers for the studio-site UI kit.
   These are cosmetic stand-ins — real key art / photos drop in later. */

// Placeholder cover art: a moody gradient tile with genre + fleuron. No fake photos.
function CoverArt({
  seed = 0,
  label,
  ratio = "3 / 4"
}) {
  const themes = [{
    a: "#26310F",
    b: "#0A0608",
    ink: "var(--absinthe-400)"
  }, {
    a: "#2A0C13",
    b: "#0A0608",
    ink: "var(--oxblood-400)"
  }, {
    a: "#3D2A57",
    b: "#0A0608",
    ink: "var(--violet-400)"
  }, {
    a: "#12241F",
    b: "#0A0608",
    ink: "var(--teal-400)"
  }];
  const t = themes[seed % themes.length];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: "100%",
      borderRadius: "inherit",
      background: `radial-gradient(120% 90% at 30% 20%, ${t.a}, ${t.b} 78%)`,
      position: "relative",
      overflow: "hidden",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-grain)",
      opacity: 0.28,
      mixBlendMode: "overlay"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--vignette)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      color: t.ink,
      opacity: 0.85,
      textShadow: "0 2px 20px rgba(0,0,0,.6)"
    }
  }, "\u2766"), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 14,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--bone-500)"
    }
  }, label));
}

// Monogram avatar (no real faces)
function Avatar({
  name,
  size = 52,
  tone = "absinthe"
}) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const tones = {
    absinthe: ["var(--absinthe-900)", "var(--absinthe-400)"],
    burgundy: ["var(--oxblood-900)", "var(--oxblood-400)"],
    violet: ["var(--violet-700)", "var(--violet-400)"],
    gilt: ["rgba(138,106,36,0.25)", "var(--gilt-400)"]
  };
  const [bg, fg] = tones[tone] || tones.absinthe;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      flex: "none",
      background: bg,
      color: fg,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: size * 0.4,
      border: "1px solid var(--border-gilt)"
    }
  }, initials);
}

// Section wrapper with mono eyebrow + display title
function Section({
  eyebrow,
  title,
  intro,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6)",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--brand-gold)",
      marginBottom: "var(--space-3)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-3xl)",
      color: "var(--text-strong)",
      lineHeight: "var(--leading-snug)",
      margin: 0,
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "58ch",
      marginTop: "var(--space-4)"
    }
  }, intro), children);
}
Object.assign(window, {
  CoverArt,
  Avatar,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Bits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Data.jsx
try { (() => {
// Shared placeholder content for the studio-site kit. Copy is on-brand;
// titles/people are fictional stand-ins to be replaced with the real roster.
const GAMES = [{
  title: "Hungry Dark",
  seed: 0,
  status: "In Development",
  statusTone: "violet",
  genres: ["Roguelike", "Reverse Dungeon", "Ooze 'em up"],
  blurb: "You're not the hero — you're the thing in the dark that eats them. Play a hungry ooze: consume the dungeon, sprout new organs, and learn what you probably shouldn't.",
  price: "Wishlist now"
}, {
  title: "Salt & Sextant",
  seed: 3,
  status: "Early Access",
  statusTone: "burgundy",
  genres: ["Sailing", "Lovecraftian", "Survival"],
  blurb: "Chart an ocean that charts you back. Every port remembers. Every fathom is a mistake.",
  price: "$19.99"
}, {
  title: "Tea for the Old Ones",
  seed: 2,
  status: "Wishlist",
  statusTone: "violet",
  genres: ["Visual Novel", "Café Sim", "Cute"],
  blurb: "Run a tiny tea house at the edge of reality. Your regulars are ancient and thirsty. Don't run out of oolong.",
  price: "Coming 2026"
}, {
  title: "The Very Small Apocalypse",
  seed: 1,
  status: "Demo",
  statusTone: "absinthe",
  genres: ["Bullet Heaven", "Chibi", "Arcade"],
  blurb: "A pocket-sized end of the world. Waves of adorable doom. It is, against all odds, quite short.",
  price: "Free Demo"
}];
const TEAM = [{
  name: "Wren Ashcombe",
  role: "Founder · Everything, apparently",
  tone: "absinthe",
  bio: "Started this in a basement. Still in the basement."
}, {
  name: "Ophelia Marsh",
  role: "Art & Unspeakable Vibes",
  tone: "burgundy",
  bio: "Draws the cute ones and the cursed ones. Often the same one."
}, {
  name: "Cassius Vane",
  role: "Code & Cursed Physics",
  tone: "violet",
  bio: "Makes the tentacles move. Regrets making the tentacles move."
}, {
  name: "Juniper Okonkwo",
  role: "Sound & Dread",
  tone: "gilt",
  bio: "That noise you heard? On purpose. Probably."
}];
const CONTRIBUTORS = ["Additional writing — M. Corvid", "Localization — The Babel Collective", "Playtesting — everyone's very patient friends", "Community — the Discord regulars"];
Object.assign(window, {
  GAMES,
  TEAM,
  CONTRIBUTORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Footer.jsx
try { (() => {
// Site footer with the mascot easter-egg peeking in.
function Footer({
  setView
}) {
  const cols = [{
    h: "Games",
    items: ["Hungry Dark", "Salt & Sextant", "Tea for the Old Ones", "The Very Small Apocalypse"]
  }, {
    h: "Studio",
    items: ["About", "The Coven", "Devlog", "Press kit"]
  }, {
    h: "Lurk with us",
    items: ["Newsletter", "Discord", "Bluesky", "itch.io"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-sunken)",
      marginTop: "var(--space-9)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-placeholder.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 36,
      bottom: -14,
      width: 96,
      opacity: 0.9,
      filter: "drop-shadow(0 6px 14px rgba(0,0,0,.5))",
      animation: "uhg-drift 7s var(--ease-standard) infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 22,
      color: "var(--text-strong)"
    }
  }, "Unspeakably Horrible Games"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.6,
      marginTop: 8,
      maxWidth: "32ch"
    }
  }, "Small games about enormous horrors. Made by a few friends in a dim room. Probably fine.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--brand-gold)",
      marginBottom: 12
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--space-4) var(--space-6)",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-faint)",
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, "\xA9 ", new Date().getFullYear(), " Unspeakably Horrible Games \xB7 No eldritch entities were harmed. A few were mildly inconvenienced."));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/GamesScreen.jsx
try { (() => {
// Games: filterable grid of the studio's offerings.
function GamesScreen() {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const {
    Card,
    Badge,
    Tag,
    Button,
    Tabs
  } = UHG;
  const {
    CoverArt,
    Section
  } = window;
  const [filter, setFilter] = React.useState("all");
  const filters = [{
    value: "all",
    label: "All"
  }, {
    value: "Available Now",
    label: "Released"
  }, {
    value: "Early Access",
    label: "Early Access"
  }, {
    value: "Wishlist",
    label: "Upcoming"
  }];
  const games = window.GAMES.filter(g => filter === "all" || g.status === filter);
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "The offerings",
    title: "Games we have inflicted",
    intro: "Four small games, each a little cursed. Hover for the pitch; wishlist at your own risk."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-6) 0 var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    tabs: filters,
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "var(--space-6)"
    }
  }, games.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.title,
    interactive: true,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(CoverArt, {
    seed: g.seed,
    label: "cover placeholder"
  }), /*#__PURE__*/React.createElement(Card.Body, {
    style: {
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: g.statusTone,
    dot: g.statusTone === "absinthe"
  }, g.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, g.price)), /*#__PURE__*/React.createElement(Card.Title, {
    style: {
      fontSize: "var(--text-xl)"
    }
  }, g.title), /*#__PURE__*/React.createElement(Card.Text, {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, g.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginTop: 4
    }
  }, g.genres.slice(0, 2).map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x
  }, x))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      padding: "var(--space-7)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-gilt)",
      background: "var(--surface-burgundy)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Want to be told when we ship something?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--text-body)",
      marginTop: 8
    }
  }, "We send perhaps four emails a year. All of them slightly ominous."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Join the newsletter"))));
}
Object.assign(window, {
  GamesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/GamesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/Header.jsx
try { (() => {
// Site header: typographic wordmark + nav + theme toggle. Uses DS IconButton/Button.
function Header({
  view,
  setView,
  theme,
  toggleTheme
}) {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const {
    Button,
    IconButton
  } = UHG;
  const nav = [{
    id: "home",
    label: "Home"
  }, {
    id: "games",
    label: "Games"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "team",
    label: "The Coven"
  }];
  const moon = "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z";
  const sun = "M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "color-mix(in srgb, var(--bg-page) 82%, transparent)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "var(--space-3) var(--space-6)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView("home"),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      lineHeight: 1,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 21,
      color: "var(--text-strong)",
      lineHeight: 1.0,
      letterSpacing: 0
    }
  }, "Unspeakably ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)",
      textShadow: "var(--glow-sm-absinthe)"
    }
  }, "Horrible")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 8.5,
      letterSpacing: ".42em",
      textTransform: "uppercase",
      color: "var(--brand-gold)",
      paddingLeft: ".42em",
      marginTop: 3
    }
  }, "Games")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-1)",
      marginLeft: "var(--space-4)"
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => setView(n.id),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: view === n.id ? "var(--text-strong)" : "var(--text-muted)",
      padding: "var(--space-2) var(--space-3)",
      position: "relative",
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, n.label, view === n.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      right: "var(--space-3)",
      bottom: -2,
      height: 2,
      background: "var(--accent)",
      boxShadow: "var(--glow-sm-absinthe)",
      borderRadius: 2
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Toggle theme",
    variant: "outline",
    onClick: toggleTheme
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: theme === "dark" ? moon : sun
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setView("games")
  }, "Play a demo"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/HomeScreen.jsx
try { (() => {
// Home: hero + mission statement + featured game.
function HomeScreen({
  setView
}) {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const {
    Button,
    Badge,
    Card,
    Tag,
    Divider
  } = UHG;
  const {
    CoverArt,
    Section
  } = window;
  const featured = window.GAMES[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(80% 120% at 50% -10%, rgba(159,190,59,0.10), transparent 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--texture-grain)",
      opacity: 0.2,
      mixBlendMode: "overlay"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-6) var(--space-9)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--brand-gold)",
      marginBottom: "var(--space-5)"
    }
  }, "An independent game studio \xB7 est. in a dim room"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "clamp(48px, 8vw, 92px)",
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Small games about", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "normal",
      color: "var(--text-accent)",
      textShadow: "var(--glow-sm-absinthe)"
    }
  }, "enormous horrors.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lg)",
      color: "var(--text-muted)",
      lineHeight: 1.6,
      maxWidth: "48ch",
      margin: "var(--space-5) auto 0"
    }
  }, "We are a few friends who make cozy, cursed little games. Cosmic terror, gentle jokes, and a mascot who means well. It's probably fine."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "center",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "loud",
    size: "lg",
    onClick: () => setView("games")
  }, "Browse the games"), /*#__PURE__*/React.createElement(Button, {
    variant: "gilt",
    size: "lg",
    onClick: () => setView("about")
  }, "Our mission")))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "The mission, such as it is",
    title: "Make the horror cozy.",
    style: {
      paddingBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-grimoire)",
      fontStyle: "italic",
      fontSize: "var(--text-2xl)",
      lineHeight: 1.4,
      color: "var(--text-body)",
      maxWidth: "24ch",
      margin: "var(--space-4) 0 0"
    }
  }, "\"Dread should feel like a warm blanket that is also, somehow, watching you.\"")), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Our debut",
    title: `Featured: ${featured.title}`,
    style: {
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "gilt",
    style: {
      marginTop: "var(--space-6)",
      display: "grid",
      gridTemplateColumns: "300px 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 0
    }
  }, /*#__PURE__*/React.createElement(CoverArt, {
    seed: featured.seed,
    label: "Key art placeholder",
    ratio: "1 / 1"
  })), /*#__PURE__*/React.createElement(Card.Body, {
    style: {
      padding: "var(--space-7)",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: featured.statusTone,
    dot: featured.statusTone === "absinthe"
  }, featured.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, featured.price)), /*#__PURE__*/React.createElement(Card.Title, {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, featured.title), /*#__PURE__*/React.createElement(Card.Text, null, featured.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 4
    }
  }, featured.genres.map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g
  }, g))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Wishlist on Steam"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setView("games")
  }, "See all games"))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-site/TeamScreen.jsx
try { (() => {
// The Coven: staff + contributors.
function TeamScreen() {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const {
    Badge,
    Divider
  } = UHG;
  const {
    Avatar,
    Section
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Staff & contributors",
    title: "The Coven",
    intro: "Four full-time cultists and a rotating cast of the very patient. Faces are placeholders \u2014 real portraits (or, more likely, tasteful monograms) to come."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-7)"
    }
  }, window.TEAM.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    size: 56,
    tone: m.tone
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      lineHeight: 1.1
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--brand-gold)",
      marginTop: 4,
      letterSpacing: ".04em"
    }
  }, m.role))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.6,
      margin: 0
    }
  }, m.bio))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "With help from",
    title: "Contributors",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)",
      padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-gilt)",
      background: "var(--surface-burgundy)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3) var(--space-6)"
    }
  }, window.CONTRIBUTORS.map(c => /*#__PURE__*/React.createElement("li", {
    key: c,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-gold)",
      fontFamily: "var(--font-display)"
    }
  }, "\u2766"), c)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-faint)",
      marginTop: "var(--space-5)",
      textAlign: "center"
    }
  }, "Want to join the Coven? We can't pay much, but the dread is free. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-link)"
    }
  }, "Say hello \u2192"))));
}
Object.assign(window, {
  TeamScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-site/TeamScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
