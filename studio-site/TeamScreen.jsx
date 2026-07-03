// The Coven: staff + contributors.
function TeamScreen() {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const { Badge, Divider } = UHG;
  const { Avatar, Section } = window;
  return (
    <div>
      <Section eyebrow="Staff & contributors" title="The Coven" intro="Four full-time cultists and a rotating cast of the very patient. Faces are placeholders — real portraits (or, more likely, tasteful monograms) to come.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)", marginTop: "var(--space-7)" }}>
          {window.TEAM.map((m) => (
            <div key={m.name} style={{ padding: "var(--space-6)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", background: "var(--surface-card)", boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <Avatar name={m.name} size={56} tone={m.tone} />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--text-lg)", color: "var(--text-strong)", lineHeight: 1.1 }}>{m.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--brand-gold)", marginTop: 4, letterSpacing: ".04em" }}>{m.role}</div>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="With help from" title="Contributors" style={{ paddingTop: 0 }}>
        <div style={{ marginTop: "var(--space-5)", padding: "var(--space-6)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-gilt)", background: "var(--surface-burgundy)" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3) var(--space-6)" }}>
            {window.CONTRIBUTORS.map((c) => (
              <li key={c} style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--text-body)", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "var(--brand-gold)", fontFamily: "var(--font-display)" }}>❦</span>{c}
              </li>
            ))}
          </ul>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-faint)", marginTop: "var(--space-5)", textAlign: "center" }}>
          Want to join the Coven? We can't pay much, but the dread is free. <a href="mailto:unspeakablyhorrible@gmail.com" style={{ color: "var(--text-link)" }}>Say hello →</a>
        </p>
      </Section>
    </div>
  );
}

Object.assign(window, { TeamScreen });
