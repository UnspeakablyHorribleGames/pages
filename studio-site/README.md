# Studio Site — UI Kit

A high-fidelity recreation of the Unspeakably Horrible Games marketing site: the studio's public face. Dark-primary with a working light-theme toggle.

## Screens
- **Home** (`HomeScreen.jsx`) — hero, mission strip, featured game.
- **Games** (`GamesScreen.jsx`) — filterable grid of offerings + newsletter CTA.
- **About** (`AboutScreen.jsx`) — studio story (drop-cap), motto, four values.
- **The Coven** (`TeamScreen.jsx`) — staff cards (monogram avatars) + contributors.

Chrome: `Header.jsx` (sticky nav + theme toggle + wordmark), `Footer.jsx` (link columns + mascot easter egg).

## Composition
Screens compose the design-system primitives from the bundle — `Button`, `Card`, `Badge`, `Tag`, `Tabs`, `Divider`, `IconButton` — via `window.UnspeakablyHorribleGamesDesignSystem_e246c6`. Local helpers live in `Bits.jsx` (`CoverArt`, `Avatar`, `Section`) and content in `Data.jsx`.

## Placeholders (replace with real assets)
- **Cover art** — `CoverArt` renders moody gradient tiles, not real key art.
- **Team** — names, roles, bios, and monogram avatars are fictional stand-ins.
- **Game titles/copy** — believable but invented.
- **Mascot** — `assets/mascot-placeholder.png` (not final art).

## Run
Open `index.html`. Requires the compiled `_ds_bundle.js` at project root (generated automatically).
