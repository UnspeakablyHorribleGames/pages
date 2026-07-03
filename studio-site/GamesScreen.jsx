// Games: filterable grid of the studio's offerings.
function GamesScreen() {
  const UHG = window.UnspeakablyHorribleGamesDesignSystem_e246c6;
  const { Card, Badge, Tag, Button, Tabs } = UHG;
  const { CoverArt, Section } = window;
  const [filter, setFilter] = React.useState("all");
  const filters = [
    { value: "all", label: "All" },
    { value: "In Development", label: "In Development" },
    { value: "In the Cauldron", label: "Someday" },
  ];
  const games = window.GAMES.filter((g) => filter === "all" || g.status === filter);

  return (
    <Section eyebrow="The offerings" title="Games we have inflicted" intro="One game so far, and no hurry to rush the next. Hover for the pitch; wishlist at your own risk.">
      <div style={{ margin: "var(--space-6) 0 var(--space-7)" }}>
        <Tabs variant="pill" tabs={filters} value={filter} onChange={setFilter} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "var(--space-6)" }}>
        {games.map((g) => (
          <Card key={g.title} interactive style={{ overflow: "hidden" }}>
            <CoverArt seed={g.seed} label="cover placeholder" />
            <Card.Body style={{ gap: "var(--space-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Badge tone={g.statusTone} dot={g.statusTone === "absinthe"}>{g.status}</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{g.price}</span>
              </div>
              <Card.Title style={{ fontSize: "var(--text-xl)" }}>{g.title}</Card.Title>
              <Card.Text style={{ fontSize: "var(--text-sm)" }}>{g.blurb}</Card.Text>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                {g.genres.slice(0, 2).map((x) => <Tag key={x}>{x}</Tag>)}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: "var(--space-8)", padding: "var(--space-7)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-gilt)", background: "var(--surface-burgundy)", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", color: "var(--text-strong)", margin: 0 }}>Want to be told when we ship something?</h3>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--text-body)", marginTop: 8 }}>No newsletter yet — just a human at an inbox. Say hello and we'll remember you when there's news.</p>
        <div style={{ marginTop: "var(--space-5)", display: "flex", justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={() => { window.location.href = "mailto:unspeakablyhorrible@gmail.com"; }}>Email the studio</Button>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { GamesScreen });
