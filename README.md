# hullymully.github.io

Personal portfolio site for **David Tsykunov** — junior Python / AI Automation developer.
Bilingual: English / Russian.

Live: [hullymully.github.io](https://hullymully.github.io/)

## What's inside

Static site, no frameworks and no build step:

- `index.html` — all content (hero, About, Featured Projects, Tech Stack, Contact); English text is the default markup
- `styles.css` — dark theme, responsive layout, language toggle styles
- `script.js` — vanilla JS: RU/EN language switcher, footer year, subtle scroll reveal

## Language switching

- The EN / RU toggle sits in the header and switches text without a page reload.
- The choice is saved to `localStorage` (key `lang`).
- On first visit the language is picked from `navigator.language`: `ru*` locales get Russian, everything else gets English.
- Translations live in the `I18N` dictionary at the top of `script.js`. Every translatable element in `index.html` has a `data-i18n="key"` attribute; `applyLang()` swaps its text from the dictionary.

## Run locally

```bash
# from the repo root
python3 -m http.server 8000
```

Then open http://localhost:8000. No external dependencies.

## Enable GitHub Pages

For a repo named `<username>.github.io` (like this one), Pages usually deploys automatically from the default branch. To check or set it up:

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Select branch `main` and folder `/ (root)`, then save.
5. The site appears at `https://<username>.github.io/` within a couple of minutes.

## Add a new project

1. In `index.html`, find the `<!-- Featured Projects -->` section and copy an existing `<article class="card">…</article>` block. Edit:
   - project title in `<h3>` (titles stay the same in both languages)
   - English description in `<p class="card-desc" data-i18n="projectN.desc">` — use the next free number for `N`
   - tech tags in `<ul class="card-tech">` (one `<li>` per technology)
   - buttons in `<div class="card-actions">`:
     - real link: `<a href="…" class="btn btn-primary btn-sm" target="_blank" rel="noopener">GitHub</a>`
     - placeholder: `<button class="btn btn-sm" disabled aria-disabled="true" data-i18n="btn.demoVideo">Demo video · Coming soon</button>` (also available: `btn.liveDemo`, `btn.screenshots`)
2. In `script.js`, add `"projectN.desc"` to **both** `I18N.en` and `I18N.ru` with the two descriptions. In Russian text use a plain hyphen "-", not a long dash.
3. When a demo goes live, replace the disabled `<button>` with a real `<a>` link.

The projects grid is responsive automatically — no CSS changes needed for new cards.
