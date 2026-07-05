// Shared content for the studio-site. Hungry Dark is the real debut;
// the rest are honest placeholders until there's something to announce.
const GAMES = [
  {
    title: "Hungry Dark", seed: 0, status: "In Development", statusTone: "violet", texture: "sky",
    genres: ["Roguelike", "Reverse Dungeon", "Ooze 'em up"],
    blurb: "You're not the hero — you're the thing in the dark that eats them. Play a hungry ooze: consume the dungeon, sprout new organs, and learn what you probably shouldn't.",
    price: "Wishlist soon",
  },
  {
    title: "Untitled Second Thing", seed: 2, status: "In the Cauldron", statusTone: "absinthe", texture: "verd",
    genres: ["Unannounced"],
    blurb: "Something is bubbling. We're not ready to say what, and saying so early has burned us before. It will be small, and it will be a little wrong.",
    price: "Someday",
  },
  {
    title: "A Glint in Someone's Eye", seed: 3, status: "In the Cauldron", statusTone: "burgundy", texture: "leather",
    genres: ["Unannounced"],
    blurb: "Barely a game yet — a mood, a mechanic, and an argument we keep having at the whiteboard. Filed here so we don't forget it exists.",
    price: "Someday",
  },
];

// PRIMARY: founder + the people carrying outsized load right now.
// Names are real handles; roles/bios are editable placeholders (no permanent copy yet).
const TEAM = [
  { name: "Zhinjio", role: "Founder", tone: "absinthe", bio: "Code monkey, AI wrangler, and resident basement denizen. Started this; can't stop.", lead: true },
  { name: "Zasifras", role: "Co-founder", tone: "violet", bio: "Art and code — and the one who keeps the rest of us honest." },
  { name: "Coyote", role: "Co-founder", tone: "gilt", bio: "Design, code, and a licensed chaos agent. Results may vary." },
];

const CONTRIBUTORS = [
  "Kaelten — design & review",
  "Basil — art & design ideas",
  "Rimwolf — sound design",
  "Momerathus — design & the science-honesty desk",
];

Object.assign(window, { GAMES, TEAM, CONTRIBUTORS });
