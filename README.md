# Fortis Home Solutions — Website

This is the source code for the Fortis Home Solutions website. It's a simple static site — no frameworks, no build step. Edit the files, push, and the live site updates automatically.

## The files

| File | What it is |
|---|---|
| `index.html` | Home page (hero, service preview, gallery preview, reviews preview) |
| `services.html` | Full services list |
| `gallery.html` | Project gallery |
| `process.html` | The 4-step process |
| `reviews.html` | Customer reviews |
| `contact.html` | Contact info |
| `styles.css` | All colors, fonts, and layout (site-wide) |
| `site.js` | The slide-out menu and scroll animations |

## How to edit the site (first-time setup)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Install [GitHub Desktop](https://desktop.github.com) (free, no command line needed).
3. In GitHub Desktop: **File → Clone Repository**, pick `fortis-website`. This puts the website files in a folder on your computer.
4. Edit any file with any text editor (TextEdit works; [VS Code](https://code.visualstudio.com) is free and nicer).
5. To preview locally, just double-click `index.html` — it opens in your browser.
6. To publish: in GitHub Desktop, write a short note in the "Summary" box, click **Commit to main**, then click **Push origin**. The live site updates in about a minute.

## Common edits

- **Change wording:** open the page's `.html` file and edit the text between the tags.
- **Change colors:** open `styles.css` — every color is defined once at the top under `:root` (e.g. `--forest` is the green, `--gold-bright` is the gold).
- **Add a project to the gallery:** in `gallery.html`, copy an existing `<article class="proj">...</article>` block, paste it, and change the text.
- **Add photos:** put image files in this folder, then replace a placeholder `<div class="proj-ph">...</div>` with `<img src="your-photo.jpg" alt="describe the photo">`.

## Hosting

The site is hosted free by GitHub Pages from this repository (Settings → Pages → deploy from `main` branch). To use a custom domain like `fortistexas.com`, add it under **Settings → Pages → Custom domain** and point the domain's DNS at GitHub Pages ([instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
