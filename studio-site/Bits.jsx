/* Shared placeholder art + small helpers for the studio-site UI kit.
   These are cosmetic stand-ins — real key art / photos drop in later. */

// Tracks the active theme (dark/light) and re-renders on toggle.
function useTheme() {
  const read = () => document.documentElement.getAttribute("data-theme") || "dark";
  const [theme, setTheme] = React.useState(read);
  React.useEffect(() => {
    const obs = new MutationObserver(() => setTheme(read()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });
    return () => obs.disconnect();
  }, []);
  return theme;
}

// Placeholder cover art: a moody gradient tile with genre + fleuron. No fake photos.
function CoverArt({ seed = 0, label, ratio = "3 / 4" }) {
  const theme = useTheme();
  const dark = [
    { a: "#26310F", b: "#0A0608", ink: "var(--absinthe-400)" },
    { a: "#2A0C13", b: "#0A0608", ink: "var(--oxblood-400)" },
    { a: "#3D2A57", b: "#0A0608", ink: "var(--violet-400)" },
    { a: "#12241F", b: "#0A0608", ink: "var(--teal-400)" },
  ];
  // light: aged-parchment tints of the same hues, deeper ink for contrast
  const light = [
    { a: "#c3cda6", b: "#e8e0cc", ink: "var(--absinthe-700)" },
    { a: "#d8b3ac", b: "#ece2d2", ink: "var(--oxblood-600)" },
    { a: "#c3b0d6", b: "#e6ddd0", ink: "var(--violet-700)" },
    { a: "#a9c6ba", b: "#e4ddce", ink: "var(--teal-700)" },
  ];
  const themes = theme === "light" ? light : dark;
  const t = themes[seed % themes.length];
  const isLight = theme === "light";
  return (
    <div style={{
      aspectRatio: ratio, width: "100%", borderRadius: "inherit",
      background: `radial-gradient(120% 90% at 30% 20%, ${t.a}, ${t.b} 78%)`,
      position: "relative", overflow: "hidden", display: "grid", placeItems: "center",
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--texture-grain)", opacity: isLight ? 0.06 : 0.09, mixBlendMode: "soft-light" }} />
      <div style={{ position: "absolute", inset: 0, background: isLight ? "radial-gradient(120% 90% at 50% 120%, rgba(90,60,40,.14), transparent 70%)" : "var(--vignette)" }} />
      <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: t.ink, opacity: isLight ? 0.6 : 0.85, textShadow: isLight ? "none" : "0 2px 20px rgba(0,0,0,.6)" }}>❦</div>
      {label && <div style={{ position: "absolute", bottom: 12, left: 14, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: isLight ? "var(--text-muted)" : "var(--bone-500)" }}>{label}</div>}
    </div>
  );
}

// Monogram avatar (no real faces)
function Avatar({ name, size = 52, tone = "absinthe" }) {
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const tones = {
    absinthe: ["var(--absinthe-900)", "var(--absinthe-400)"],
    burgundy: ["var(--oxblood-900)", "var(--oxblood-400)"],
    violet: ["var(--violet-700)", "var(--violet-400)"],
    gilt: ["rgba(138,106,36,0.25)", "var(--gilt-400)"],
  };
  const [bg, fg] = tones[tone] || tones.absinthe;
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%", flex: "none",
      background: bg, color: fg, display: "grid", placeItems: "center",
      fontFamily: "var(--font-display)", fontWeight: 400, fontSize: size * 0.4,
      border: "1px solid var(--border-gilt)",
    }}>{initials}</div>
  );
}

// Section wrapper with mono eyebrow + display title
function Section({ eyebrow, title, intro, children, style }) {
  return (
    <section style={{ maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-9) var(--space-6)", ...style }}>
      {eyebrow && <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: "var(--space-3)" }}>{eyebrow}</div>}
      {title && <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--text-3xl)", color: "var(--text-strong)", lineHeight: "var(--leading-snug)", margin: 0, letterSpacing: "var(--tracking-tight)" }}>{title}</h2>}
      {intro && <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-md)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)", maxWidth: "58ch", marginTop: "var(--space-4)" }}>{intro}</p>}
      {children}
    </section>
  );
}

Object.assign(window, { CoverArt, Avatar, Section });
