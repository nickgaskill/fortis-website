# Fortis Home Solutions website

Public marketing site for Fortis Home Solutions, a construction & remodeling company in Central Texas (Austin, Georgetown, Lakeway), owned by Nick Gaskill. Live via GitHub Pages; every push to `main` republishes the site automatically in about a minute.

## Architecture

Plain static HTML/CSS/JS — no framework, no build step, no dependencies. Six pages (`index`, `services`, `gallery`, `process`, `reviews`, `contact`) share:

- `styles.css` — all styling. The palette and fonts are CSS variables in `:root` at the top (`--forest` green, `--gold`/`--gold-bright`, `--paper` white, `--black`). Change a color there and it changes site-wide.
- `site.js` — the slide-out drawer menu and scroll-reveal animations.
- The header, drawer menu, and footer are **copy-pasted into every page** — if you edit one (e.g. add a page link or change the phone number), make the same edit in all six HTML files.

## Conventions

- Brand voice: plain, direct, confident. Tagline: "Built different. Built Fortis." Kicker: "From the slab to the last coat of paint."
- Business facts: phone (512) 743-9690, email Nick.Gaskill@fortistexas.com, Instagram @fortistexas. The four customer reviews are verbatim quotes — don't reword them.
- Gallery projects use real locations/dates. Photo placeholders are `<div class="proj-ph">` blocks; replace with `<img>` tags as real photos are added (compress images to ~200-400 KB before committing).
- `index.html` carries the JSON-LD LocalBusiness schema and each page has its own meta description — keep these updated when business details change (they matter for Google).
- To preview locally, open any `.html` file directly in a browser — no server needed.
