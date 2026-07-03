// Home: hero + mission statement + featured game.
function HomeScreen({ setView }) {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const { Button, Badge, Card, Tag, Divider } = UHG;
  const { CoverArt, Section } = window;
  const featured = window.GAMES[0];

  return (
    <div>
      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 120% at 50% -10%, rgba(159,190,59,0.10), transparent 55%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "var(--texture-grain)", opacity: 0.2, mixBlendMode: "overlay" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-lg)", margin: "0 auto", padding: "var(--space-10) var(--space-6) var(--space-9)", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: "var(--space-5)" }}>An independent game studio · est. in a dim room</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(48px, 8vw, 92px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: "var(--text-strong)", margin: 0 }}>
            Small games about<br /><em style={{ fontStyle: "normal", color: "var(--text-accent)", textShadow: "var(--glow-sm-absinthe)" }}>enormous horrors.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "48ch", margin: "var(--space-5) auto 0" }}>
            We are a few friends who make cozy, cursed little games. Cosmic terror, gentle jokes, and a mascot who means well. It's probably fine.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", marginTop: "var(--space-7)" }}>
            <Button variant="loud" size="lg" onClick={() => setView("games")}>Browse the games</Button>
            <Button variant="gilt" size="lg" onClick={() => setView("about")}>Our mission</Button>
          </div>
        </div>
      </div>

      {/* MISSION strip */}
      <Section eyebrow="The mission, such as it is" title="Make the horror cozy." style={{ paddingBottom: "var(--space-7)" }}>
        <p style={{ fontFamily: "var(--font-grimoire)", fontStyle: "italic", fontSize: "var(--text-2xl)", lineHeight: 1.4, color: "var(--text-body)", maxWidth: "24ch", margin: "var(--space-4) 0 0" }}>
          "Dread should feel like a warm blanket that is also, somehow, watching you."
        </p>
      </Section>

      {/* FEATURED */}
      <Section eyebrow="Our debut" title={`Featured: ${featured.title}`} style={{ paddingTop: "var(--space-5)" }}>
        <Card variant="gilt" style={{ marginTop: "var(--space-6)", display: "grid", gridTemplateColumns: "300px 1fr" }}>
          <div style={{ borderRadius: 0 }}><CoverArt seed={featured.seed} label="Key art placeholder" ratio="1 / 1" /></div>
          <Card.Body style={{ padding: "var(--space-7)", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
              <Badge tone={featured.statusTone} dot={featured.statusTone === "absinthe"}>{featured.status}</Badge>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{featured.price}</span>
            </div>
            <Card.Title style={{ fontSize: "var(--text-2xl)" }}>{featured.title}</Card.Title>
            <Card.Text>{featured.blurb}</Card.Text>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
              {featured.genres.map((g) => <Tag key={g}>{g}</Tag>)}
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-5)" }}>
              <Button variant="primary">Wishlist on Steam</Button>
              <Button variant="ghost" onClick={() => setView("games")}>See all games</Button>
            </div>
          </Card.Body>
        </Card>
      </Section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
