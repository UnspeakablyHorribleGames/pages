// Site header: typographic wordmark + nav + theme toggle. Uses DS IconButton/Button.
function Header({ view, setView, theme, toggleTheme }) {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const { Button, IconButton } = UHG;
  const nav = [
    { id: "home", label: "Home" },
    { id: "games", label: "Games" },
    { id: "about", label: "About" },
    { id: "team", label: "The Coven" },
  ];
  const moon = "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z";
  const sun = "M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4";
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100, overflow: "hidden",
      background: "var(--bg-page)",
      borderBottom: "1px solid var(--border-gilt)",
    }}>
      <div className="uhg-tx uhg-leather-base"></div>
      <div className="uhg-tx uhg-l-broad"></div>
      <div className="uhg-tx uhg-l-pore"></div>
      <div className="uhg-tx uhg-grit uhg-nfine"></div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-3) var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
        {/* wordmark — "Unspeakably Horrible" leads, "Games" is descriptor */}
        <button onClick={() => setView("home")} style={{ background: "none", border: 0, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1, padding: 0 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 21, color: "var(--text-strong)", lineHeight: 1.0, letterSpacing: 0 }}>Unspeakably <span style={{ color: "var(--text-accent)", textShadow: "var(--glow-sm-absinthe)" }}>Horrible</span></span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".42em", textTransform: "uppercase", color: "var(--brand-gold)", paddingLeft: ".42em", marginTop: 3 }}>Games</span>
        </button>
        <nav style={{ display: "flex", gap: "var(--space-1)", marginLeft: "var(--space-4)" }}>
          {nav.map((n) => (
            <button key={n.id} onClick={() => setView(n.id)} style={{
              background: "none", border: 0, cursor: "pointer",
              fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", fontWeight: 600,
              letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
              color: view === n.id ? "var(--text-strong)" : "var(--text-muted)",
              padding: "var(--space-2) var(--space-3)", position: "relative",
              transition: "color var(--dur-fast) var(--ease-standard)",
            }}>
              {n.label}
              {view === n.id && <span style={{ position: "absolute", left: "var(--space-3)", right: "var(--space-3)", bottom: -2, height: 2, background: "var(--accent)", boxShadow: "var(--glow-sm-absinthe)", borderRadius: 2 }} />}
            </button>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <IconButton label="Toggle theme" variant="outline" onClick={toggleTheme}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={theme === "dark" ? moon : sun} /></svg>
          </IconButton>
          <Button variant="primary" onClick={() => setView("games")}>See Hungry Dark</Button>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
