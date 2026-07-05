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

const TEAM = [
  { name: "Wren Ashcombe", role: "Founder · Everything, apparently", tone: "absinthe", bio: "Started this in a basement. Still in the basement." },
  { name: "Ophelia Marsh", role: "Art & Unspeakable Vibes", tone: "burgundy", bio: "Draws the cute ones and the cursed ones. Often the same one." },
  { name: "Cassius Vane", role: "Code & Cursed Physics", tone: "violet", bio: "Makes the tentacles move. Regrets making the tentacles move." },
  { name: "Juniper Okonkwo", role: "Sound & Dread", tone: "gilt", bio: "That noise you heard? On purpose. Probably." },
];

const CONTRIBUTORS = [
  "Additional writing — M. Corvid",
  "Localization — The Babel Collective",
  "Playtesting — everyone's very patient friends",
  "Community — the Discord regulars",
];

Object.assign(window, { GAMES, TEAM, CONTRIBUTORS });
