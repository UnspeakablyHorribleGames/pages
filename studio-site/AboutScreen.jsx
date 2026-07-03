// About: studio story + mission values.
function AboutScreen() {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const { Divider, Badge } = UHG;
  const { Section } = window;
  const values = [
    { h: "Small on purpose", b: "We make games we can finish. Scope is the real monster." },
    { h: "Cozy, then cursed", b: "Comfort first. The dread should sneak up on you like a cat." },
    { h: "Humble to a fault", b: "We'll tell you what's broken before you find it. Usually." },
    { h: "Kind to players", b: "Fair prices, no dark patterns. The only darkness is thematic." },
  ];
  return (
    <div>
      <Section eyebrow="Who we are" title="A few friends in a dim room.">
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "var(--space-8)", marginTop: "var(--space-6)", alignItems: "start" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-md)", color: "var(--text-body)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <p style={{ margin: 0 }}><span style={{ float: "left", fontFamily: "var(--font-display)", fontSize: 62, lineHeight: 0.8, color: "var(--text-accent)", paddingRight: 12, marginTop: 6 }}>W</span>e started Unspeakably Horrible Games because we love the genre and we are not very good at leaving it alone. The name is a pun — a nod to Lovecraft, and an honest warning about the quality. We're humble. The games might not be great. But they're ours, and we made them with our whole cursed hearts.</p>
            <p style={{ margin: 0 }}>We believe horror is best served cozy: a warm mug, a soft blanket, and something enormous breathing just off-screen. If you finish one of our games feeling a little unsettled and a little comforted, we did our job.</p>
          </div>
          <div style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-gilt)", background: "var(--surface-card)", boxShadow: "var(--ring-gilt)" }}>
            <div style={{ fontFamily: "var(--font-grimoire)", fontStyle: "italic", fontSize: "var(--text-lg)", color: "var(--text-strong)", lineHeight: 1.5 }}>"That is not dead which can eternal lie, and with strange aeons even our roadmap may ship."</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-faint)", marginTop: 12, letterSpacing: ".08em" }}>— studio motto, misremembered</div>
          </div>
        </div>
      </Section>
      <Section eyebrow="What we stand for" title="Our four small commandments" style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-5)", marginTop: "var(--space-6)" }}>
          {values.map((v, i) => (
            <div key={v.h} style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", background: "var(--surface-card)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--brand-gold)", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--text-strong)", margin: "0 0 6px" }}>{v.h}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{v.b}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { AboutScreen });
