# Unspeakably Horrible Games — Website Design Brief

> **Status:** Living document. Studio identity and functional scope are settled. Visual
> execution (color, typography, logo) is deliberately held open as *options to demo*,
> not decisions to lock. Update as items in the Open Questions section resolve.

---

## 1. Studio Identity (Foundation)

**UHG = Unspeakably Horrible Games** — a game **studio**.

- Makes its **own** games. Not a publisher: no third-party titles, now or designed-for-later.
- Released as a **unified studio**, one voice — not a federation of sub-studios.
- A **collective of collaborators**. Participation in a given game (design, code, art, music,
  etc.) earns a share of *that game's* pie. Some contributors are paid; some are credited-only.
  **This distinction is never surfaced on the site** — to a visitor, everyone is simply a contributor.
- **Public-facing.** Launch is gated to when the first game becomes publicly visible.
- **Core job of the site:** the front-end / interface to the studio and the people behind it.

---

## 2. Functional Scope

### Now — present at launch

- **Games showcase.** The first title at minimum. Structured to carry per-game **state**:
  *completed* vs. *in design/coding*.
- **About Us / Team.** A section per contributor with their game contributions listed.
  - Full-time and part-time mixed without visible distinction.
  - **Compensation never shown.** Paid vs. credited-only is invisible.
  - Accomplishments are framed by **value brought to specific projects**, not CV-style résumés.
  - **Optional** outbound profile links, per each person's choice. Identity-flexible:
    real names, pseudonyms, photos, or no photos — all acceptable, contributor's call.
  - Prominence is **modest for now** (a real page, not a hero feature). Revisitable later
    without rework if the team becomes a bigger part of the brand.
- **Studio mission / identity.** Who UHG is and what it believes.
- **Legal baseline.** Copyright, disclaimers, necessary boilerplate.

### Eventually

- **Discord.** The community play, gated to when there's an actual testing / early-access
  audience to manage. Low-friction, near-universal for studios. No mailing list for now.
  No broader social presence unless/until the studio scales.
- **Bug report / support.** GitHub Issues the likely path (see hosting note + Open Questions).
- **Richer per-game credits.** The "everyone gets a piece" ethos rendered properly, beyond
  a flat name list — if/when the team page is elevated.

### Hosting note (constraint, not yet a decision)

A static host like **GitHub Pages** (repo already exists) is very likely sufficient for the
entire "now" column and most of "eventually." Static hosting handles dynamic *content*
(devlog, news, game-state changes) at **build time** — regenerated on publish, not per-visitor.
What it can't do is **request-time / per-user** behavior (logins, accounts, live data).
Nothing in current scope needs that. The line that would push UHG off pure static hosting is
any future need for true server-side behavior.

---

## 3. Aesthetic Direction

### Operating principle (settled)

> **The setting broods; the inhabitants grin.**
> The *world* is dark, gothic, gritty — oily, dirty, messy, genuinely horrible. The
> *characters/mascots* are cute, cuddly, in on the joke. The aesthetic is not a blend of
> the two — it's the **collision**. The cuteness doesn't soften the grime; it's placed
> against it, and the friction is the entire personality. Baby Cthulhu is still Cthulhu,
> cosmic horror fully implied — just rendered as something you'd want to hug.

- **Where the wink lives:** primary logos, typography, and **especially the website copy**.
  The darkness is the stage; the branding and language are what break character. If
  *everything* were uniformly gothic, the joke would be gone — **the discrepancy is the brand.**
- **Tone:** self-deprecating, doesn't take itself too seriously. The studio name is the thesis —
  near-parody of the team's own suspicions about what they might produce, while also pointing
  at the gothic/Lovecraftian aesthetic they love. Earnest underneath: this is a dream, not a
  sure thing, and that humility is part of the brand. *"We make the games we want to play"* —
  by gamers, for a gamer overlap they believe is real but don't presume is universal.
- **Touchstones:** *Cult of the Lamb*, *Don't Starve* — cute-macabre held with **full commitment
  to both halves at once.** This consistency is what keeps the direction from failing into
  either kitsch (too jokey) or joyless spooky (too po-faced). Name these to aim execution
  away from generic "dark gaming website."

### Held open on purpose — to demo, not decide

The author is explicitly **not** the final authority on look/feel. Goal is to **float and demo
options** to the studio's graphics contributors and react to variations, *not* to commit here.

- **Color.** Generate multiple schemas as options, e.g.:
  - Slimy-green / bruised-purple classic Lovecraft
  - Sepia-and-grime old gothic
  - Wet-oily-black with sickly highlights
  - (open to others)
- **Typography.** A couple of directions, not one. Likely split: atmospheric/gothic display
  type for the "world," something friendlier where the voice winks.
- **Logo.** Intended primary mark is the **"baby Cthulhu / Kilroy-was-here"** concept — a cute
  baby Cthulhu peeking over a wall, tentacles hanging down, graffiti-style. Decidedly cute, but
  still Cthulhu with everything that implies. **The original file may be lost** (recovery in
  progress). Treat as: recover if it exists, otherwise recreate from this description; demo a
  few interpretations.

---

## 4. Open Questions / To-Recover

- [ ] **Logo file** — does the original baby-Cthulhu/Kilroy asset still exist? (Messages out to
      the team.) If not → recreate fresh from the description above.
- [ ] **Color / typography / logo direction** — generate options, demo to graphics contributors,
      let them react before anything locks.
- [ ] **Support build-vs-integrate** — *deep-link to a pre-filled GitHub "new issue" page*
      (trivial, static-safe, recommended first answer) vs. *in-site form submitting to the
      Issues API* (needs a serverless function; pushes off pure GitHub Pages). Decide when
      support enters scope.
- [ ] **Hosting stack** — confirm GitHub Pages (or alternative) once content dynamism is known.
- [ ] **Team page prominence** — currently modest; revisit if the team becomes more central
      to the brand.
