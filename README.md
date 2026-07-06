# DesignFlow website

Source for `ah20-dev/designFlow-webpage` (GitHub Pages).

Live: https://ah20-dev.github.io/designFlow-webpage/

## Layout

```
docs/           # published via Pages (branch main, folder /docs)
  index.html
  config.js
  styles.css
  assets/icon.png
  screenshots/
  legal/privacy.html
  legal/terms.html
scripts/deploy-designflow-webpage.sh
```

DMGs are not committed — attach them to GitHub Releases.

## Deploy

From `PRDSpring` root:

```bash
./designflow-website/scripts/deploy-designflow-webpage.sh
```

Requires `DESIGNFLOW_WEBPAGE_GITHUB_TOKEN` in `.env.local` (see `.env.example`).

## Publish a release

1. https://github.com/ah20-dev/designFlow-webpage/releases/new
2. Tag `v1.0.0`, attach signed DMGs with filenames matching `config.js`
3. Publish

## Notes

- Pages source: Settings → Pages → Deploy from branch `main` → `/docs`
- Legal pages: `docs/legal/` — update `legal.effectiveDate` in `config.js` when changed
- Screenshots: `docs/screenshots/`
