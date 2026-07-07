# Fortis Home Solutions website

Public marketing site for Fortis Home Solutions, a construction & remodeling company in Central Texas (Austin, Georgetown, Lakeway), owned by Nick Gaskill. Live via GitHub Pages; every push to `main` republishes the site automatically in about a minute.

## Architecture

Plain static HTML/CSS/JS — no framework, no build step, no dependencies. The site is a **single scrolling page**: all content lives in `index.html` as anchored sections (`#top` hero, `#services`, `#gallery`, `#process`, `#reviews`, `#contact`). The drawer menu, the header "Contact us" button, and the footer link to these anchors and smooth-scroll to them.

- `styles.css` — all styling. The palette and fonts are CSS variables in `:root` at the top (`--navy` deep blue, `--gold`/`--gold-bright`, `--paper` warm cream, `--black`). Change a color there and it changes site-wide. `section[id]{scroll-margin-top}` keeps the sticky header from covering a section heading on jump.
- `site.js` — the slide-out drawer menu (closes on link click), and scroll-reveal animations.
- `services.html`, `gallery.html`, `process.html`, `reviews.html`, `contact.html` are **redirect stubs** — each forwards to the matching `index.html#section` (so old bookmarked URLs still work). Don't add content to them; edit the section in `index.html` instead.
- The contact form posts to Formspree (`https://formspree.io/f/mpqgewbv`) and emails submissions to Nick.Gaskill@fortistexas.com.

## Conventions

- Brand voice: plain, direct, confident. Tagline: "Built different. Built Fortis." Kicker: "From the slab to the last coat of paint."
- Business facts: phone (512) 743-9690, email Nick.Gaskill@fortistexas.com, Instagram @fortistexas. The four customer reviews are verbatim quotes — don't reword them.
- Gallery projects use real locations/dates. Photo placeholders are `<div class="proj-ph">` blocks; replace with `<img>` tags as real photos are added (compress images to ~200-400 KB before committing).
- `index.html` carries the JSON-LD LocalBusiness schema and each page has its own meta description — keep these updated when business details change (they matter for Google).
- To preview locally, open any `.html` file directly in a browser — no server needed.
