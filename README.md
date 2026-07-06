# DesignFlow — production website

Public GitHub Pages repo: **`ah20-dev/designFlow-webpage`**

Live site: `https://ah20-dev.github.io/designFlow-webpage/`

Portable bundle — copy **everything inside** this `productionWebsite/` folder to the website repo root.

## Repo layout

```
.github/workflows/pages.yml   # deploys website/ on push to main
README.md
website/
  index.html                  # landing + download page
  config.js                   # version, DMG filenames, legal metadata
  styles.css
  assets/icon.png
  screenshots/
  legal/
    privacy.html
    terms.html
```

**Not included in git:** DMG installers (attach via GitHub Releases).

## GitHub Pages

Settings → Pages → Source: **GitHub Actions** (workflow included).

## Publish installers (both Mac DMGs)

1. Sign DMGs locally.
2. GitHub → **Releases** → tag `v1.0.0` (match `version` in `config.js`).
3. Attach:
   - `DesignFlow_1.0.0_aarch64.dmg`
   - `DesignFlow_1.0.0_x64.dmg`
4. Publish.

Download buttons resolve to:

```
https://github.com/ah20-dev/designFlow-webpage/releases/latest/download/{filename}
```

## Legal

- Privacy and Terms live in `website/legal/`.
- Binary-only distribution — no public source repo linked from the site.
- Update `legal.effectiveDate` in `config.js` when policies change.

## Screenshots

Add PNGs to `website/screenshots/` (`canvas.png`, `editor.png`).

## Custom domain (optional)

GitHub Pages → Custom domain → e.g. `designflow.app`.
