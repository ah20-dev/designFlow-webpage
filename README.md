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
2. Tag `v1.0.0`, attach DMGs with filenames **exactly matching** `docs/config.js`:
   - `DesignFlow_1.0.0_aarch64.dmg`
   - `DesignFlow_1.0.0_x64.dmg`
3. Publish

The local sign script outputs `*-signed.dmg` on Desktop — rename before upload (drop `-signed` from the filename).

## Notes

- Pages source: Settings → Pages → Deploy from branch `main` → `/docs`
- Legal pages: `docs/legal/` — update `legal.effectiveDate` in `config.js` when changed
- Screenshots: `docs/screenshots/`
