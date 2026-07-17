# Fortis Contracting Group — Website

This is the source code for the Fortis Contracting Group website. It's a simple static site — no frameworks, no build step. Edit the files, push, and the live site updates automatically.

## The files

The site has a **"Menu" button that opens a drop-down** (with the Services sub-items under it) and **separate pages** for each section.

| File | What it is |
|---|---|
| `index.html` | Home page (hero + previews of each section) |
| `services.html` | Services overview — three cards linking to the category pages below |
| `interior-remodels.html` | Interior Remodels — a grid of clickable photo tiles |
| `kitchen-remodels.html`, `bathroom-remodels.html`, `custom-cabinetry.html`, `painting.html`, `flooring.html`, `whole-home-renovations.html` | The six Interior Remodels sub-pages (opened by the tiles) |
| `outdoor-living.html` | Outdoor Living — a grid of clickable photo tiles |
| `landscape-design.html`, `landscaping.html`, `hardscaping.html`, `pools.html`, `outdoor-living-spaces.html`, `sport-courts.html` | The six Outdoor Living sub-pages (opened by the tiles) |
| `home-additions-sunrooms.html` | Home Additions & Sunrooms — a grid of clickable photo tiles |
| `sunrooms.html`, `home-additions.html`, `casitas.html`, `patio-extensions.html`, `adus.html` | The five Home Additions sub-pages (opened by the tiles) |
| `new-construction.html` | New Construction — two clickable tiles |
| `residential-construction.html`, `commercial-construction.html` | The two New Construction sub-pages (opened by the tiles) |
| `pool-design-guide.html` | The flip-through pool design brochure (styles, sizes, finishes, equipment) |
| `design-your-pool.html` | Interactive pool estimator — edit the PRICING table in this file to set real prices |
| `portfolio.html` | Project portfolio (incl. before/after sliders) |
| `process.html` | The Discuss / Prepare / Build / Live process |
| `reviews.html` | Customer reviews |
| `about.html` | About the company + meet the owner |
| `blog.html` | Blog index — copy the sample post to write new ones |
| `choosing-your-pool-style.html` | First blog post (pool styles) |
| `contact.html` | Contact info + the consultation form |
| `styles.css` | All colors, fonts, and layout (site-wide) |
| `site.js` | The Menu drop-down and scroll animations |

**Important:** the header (with the Menu drop-down) and footer are copy-pasted at the top and bottom of **every** page. If you change one (e.g. the phone number or a menu link), make the same change in all thirty-four `.html` files.

## How to edit the site (first-time setup)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Install [GitHub Desktop](https://desktop.github.com) (free, no command line needed).
3. In GitHub Desktop: **File → Clone Repository**, pick `fortis-website`. This puts the website files in a folder on your computer.
4. Edit any file with any text editor (TextEdit works; [VS Code](https://code.visualstudio.com) is free and nicer).
5. To preview locally, just double-click `index.html` — it opens in your browser.
6. To publish: in GitHub Desktop, write a short note in the "Summary" box, click **Commit to main**, then click **Push origin**. The live site updates in about a minute.

## Common edits

- **Change wording:** open the page's `.html` file (e.g. `services.html`) and edit the text between the tags.
- **Change colors:** open `styles.css` — every color is defined once at the top under `:root` (e.g. `--navy` is the deep blue, `--gold-bright` is the gold).
- **Add a project to the gallery:** in `portfolio.html`, copy an existing `<article class="proj">...</article>` block, paste it, and change the text.
- **Add or rename a menu item:** edit the menu bar, the drop-down, and the footer in **all six** `.html` files so every page matches.
- **Add photos:** put image files in this folder, then replace a placeholder `<div class="proj-ph">...</div>` with `<img src="your-photo.jpg" alt="describe the photo">`.

## Hosting

The site is hosted free by GitHub Pages from this repository (Settings → Pages → deploy from `main` branch). To use a custom domain like `fortistexas.com`, add it under **Settings → Pages → Custom domain** and point the domain's DNS at GitHub Pages ([instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
