# Fortis Home Solutions website

Public marketing site for Fortis Home Solutions, a construction & remodeling company in Central Texas (Austin, Georgetown, Lakeway), owned by Nick Gaskill. Live via GitHub Pages; every push to `main` republishes the site automatically in about a minute.

## Architecture

Plain static HTML/CSS/JS — no framework, no build step. Six real pages (`index`, `services`, `gallery`, `process`, `reviews`, `contact`), each a full standalone page.

- **Navigation**: a sticky header with the wordmark, the phone number, a "Free consultation" button, and a single **"Menu" button** that click-toggles a **dropdown panel** (`.menu-panel`, `id="menuPanel"`) listing Home, Services (with New Construction / General Contracting / Interior / Exterior sub-links under `.menu-sub` → anchors on `services.html`), Gallery, Process, Reviews, Contact. `site.js` toggles the panel's `hidden` attribute and closes it on outside-click, Escape, or link-click. Under 560px the phone and "Free consultation" hide so the wordmark and Menu fit.
- The **header, drawer, and footer are copy-pasted into all six pages** — if you edit one (add a page link, change the phone number), make the same edit in every HTML file. The `aria-current="page"` marker is set on the current page's nav links.
- `styles.css` — all styling. The palette and fonts are CSS variables in `:root` at the top (`--navy` deep blue, `--gold`/`--gold-bright`, `--paper` warm cream, `--black`). Change a color there and it changes site-wide. The wordmark uses `--wordmark` (Cinzel), loaded from Google Fonts via a `<link>` in each page's `<head>` — the only external dependency. `section[id],[id].svc{scroll-margin-top}` keeps the sticky header from covering a heading when the Services dropdown jumps to an anchor.
- `site.js` — the Menu dropdown toggle (closes on outside-click, Escape, or link click) and scroll-reveal animations.
- The contact form posts to Formspree (`https://formspree.io/f/mpqgewbv`) and emails submissions to Nick.Gaskill@fortistexas.com.

## Conventions

- Brand voice: plain, direct, confident. Tagline: "Built different. Built Fortis." The home hero opens with the Latin meaning of the name — "for·tis — Latin adj. — strong; steadfast; built to last" (the old "From the slab to the last coat of paint" kicker is retired).
- Business facts: phone (512) 743-9690, email Nick.Gaskill@fortistexas.com, Instagram @fortistexas. The four customer reviews are verbatim quotes — don't reword them.
- Gallery projects use real locations/dates. Photo placeholders are `<div class="proj-ph">` blocks; replace with `<img>` tags as real photos are added (compress images to ~200-400 KB before committing).
- `index.html` carries the JSON-LD LocalBusiness schema and each page has its own meta description — keep these updated when business details change (they matter for Google).
- To preview locally, open any `.html` file directly in a browser — no server needed.
