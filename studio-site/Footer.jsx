// Site footer with the mascot easter-egg peeking in.
function Footer({ setView }) {
  const cols = [
    { h: "Games", items: ["Hungry Dark", "In the cauldron"] },
    { h: "Studio", items: ["About", "The Coven"] },
    { h: "Lurk with us", items: ["Email us", "Discord · soon"] },
  ];
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--surface-sunken)", marginTop: "var(--space-9)", position: "relative", overflow: "hidden" }}>
      {/* mascot easter egg, peeking from the bottom-right */}
      <img src={window.__MASCOT_SRC || "../assets/mascot-placeholder.png"} alt="" aria-hidden="true" style={{
        position: "absolute", right: 36, bottom: -14, width: 96, opacity: 0.9,
        filter: "drop-shadow(0 6px 14px rgba(0,0,0,.5))",
        animation: "uhg-drift 7s var(--ease-standard) infinite",
      }} />
      <div style={{ maxWidth: "var(--container-xl)", margin: "0 auto", padding: "var(--space-8) var(--space-6) var(--space-6)", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "var(--space-6)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, color: "var(--text-strong)" }}>Unspeakably Horrible Games</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, marginTop: 8, maxWidth: "32ch" }}>
            Small games about enormous horrors. Made by a few friends in a dim room. Probably fine.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--brand-gold)", marginBottom: 12 }}>{c.h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {c.items.map((i) => (
                <li key={i}><a href={i === "Email us" ? "mailto:unspeakablyhorrible@gmail.com" : "#"} onClick={(e) => { if (i !== "Email us") e.preventDefault(); }} style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--text-body)", textDecoration: "none" }}>{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "var(--space-4) var(--space-6)", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", maxWidth: "var(--container-xl)", margin: "0 auto" }}>
        © {new Date().getFullYear()} Unspeakably Horrible Games · No eldritch entities were harmed. A few were mildly inconvenienced.
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
