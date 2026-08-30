# Posting to the devlog

The devlog runs on Jekyll (built automatically by GitHub Pages). You never need a
local checkout or any tooling — **a post is one Markdown file, added from the
GitHub web editor.** There is no mailing list and no CMS; that's on purpose.

## Add a post (from github.com, no install)

1. Open the `pages` repo on GitHub → the **`_posts/`** folder.
2. **Add file → Create new file.**
3. Name it **`YYYY-MM-DD-slug.md`** — the date is the publish date, the slug is a
   short dash-separated title (e.g. `2026-09-14-the-last-wipe.md`).
4. Paste this front matter at the very top, then write the post in Markdown below it:

   ```
   ---
   layout: devlog-post
   title: "Your headline"
   date: 2026-09-14
   tags: [design]
   author: Your Name
   ---

   Write the post here. Markdown: **bold**, _italic_, [links](https://…),
   lists, ## headings, > blockquotes, `code`, images.
   ```

5. Scroll down, write a short commit message, **Commit** — under **your own name**
   (bylines are a feature of a devlog; humans post under their own names).
6. GitHub Pages rebuilds in a minute. The post appears on **/devlog/** and flows
   into the feeds.

*(Tip: press `.` on the repo to open **github.dev**, a full editor in the browser —
still zero install.)*

## Tags

Lowercase, hyphenated, invent them freely — `design`, `art`, `postmortem`, `patch`…
**Two tags are load-bearing and reserved:**

- **`release`** — a normal release. Routes the post into the releases feed.
- **`major-release`** — a big one. Also routes into the releases feed.

Anything tagged `release` or `major-release` shows up in **`/releases.xml`** (the
"notify me when a game ships" feed). Every post — tagged anything — shows up in
**`/devlog.xml`** (everything).

## The feeds

- **`/releases.xml`** — just the ships. This is the one to hand people who ask
  "how do I get told when a game comes out?"
- **`/devlog.xml`** — every post.

Both are linked from the devlog page with a one-line "everything vs. just
releases" note.

## Carrying it outward (by hand — no automation)

The canonical post is the one here. When something's worth broadcasting:

- **Discord `#announcements`** — a couple of sentences + the link to the post.
- **itch devlog** — for `release`-tagged posts, paste the post over so itch's own
  follower notifications fire.

A human on the button beats a firehose. Keep it deliberate.

## Draft / hold a post

Add `published: false` to the front matter to keep a post in the repo without
publishing it. Remove it (or set `true`) when it's ready.

## House rule

This repo is public. Human authors take a **byline** — that's the attribution.
Otherwise everything (posts, commit messages, this file) reads in the studio's
voice: don't name the tools behind a post.
