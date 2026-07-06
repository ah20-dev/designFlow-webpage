# DesignFlow — production website

Public GitHub Pages repo: **`ah20-dev/designFlow-webpage`**

Live site: `https://ah20-dev.github.io/designFlow-webpage/`

Portable bundle — copy **everything inside** this `designflow-website/` folder to the public webpage repo root (excluding `scripts/`).

## Repo layout

```
# Optional: .github/workflows/pages.yml exists locally for Actions deploy.
# Branch Pages uses docs/ only — workflow not required.
README.md
docs/                         # GitHub Pages publish folder (branch deploy: main + /docs)
  index.html                  # landing + download page
  config.js
  styles.css
  assets/icon.png
  screenshots/
  legal/
    privacy.html
    terms.html
```

**Not included in git:** DMG installers (attach via GitHub Releases).

## GitHub Pages

**Branch deploy (recommended):** Settings → Pages → Deploy from branch `main` → folder **`/docs`**.

**GitHub Actions (optional):** Settings → Pages → Source: GitHub Actions (workflow deploys `docs/`).

## Publish installers (both Mac DMGs)

### 1. Open the release editor

Go directly to:

**https://github.com/ah20-dev/designFlow-webpage/releases/new**

### 2. Fill in release details

| Field | Value |
|-------|--------|
| **Choose a tag** | `v1.0.0` (create new tag on publish) |
| **Release title** | `DesignFlow 1.0.0` |
| **Description** | Optional — e.g. “First public macOS release.” |

### 3. Attach signed DMGs

Drag both files from your local build (after signing):

```
src-tauri/target/release/bundle/dmg/DesignFlow_1.0.0_aarch64.dmg
src-tauri/target/release/bundle/dmg/DesignFlow_1.0.0_x64.dmg
```

**Filenames must match exactly** — the site links to these names via GitHub’s release download URLs.

### 4. Publish

Click **Publish release** (not “Save draft”).

### 5. Verify

- Releases page lists `v1.0.0` with both assets.
- Test links (replace filename as needed):

```
https://github.com/ah20-dev/designFlow-webpage/releases/latest/download/DesignFlow_1.0.0_aarch64.dmg
https://github.com/ah20-dev/designFlow-webpage/releases/latest/download/DesignFlow_1.0.0_x64.dmg
```

- Open the live site — hero and Download section should show **Mac (Apple Silicon)** and **Mac (Intel)** buttons.

## Legal

- Privacy and Terms live in `docs/legal/`.
- Binary-only distribution — no public source repo linked from the site.
- Update `legal.effectiveDate` in `config.js` when policies change.

## Screenshots

Add PNGs to `docs/screenshots/` (`canvas.png`, `editor.png`).

## Deploy to webpage repo

From PRDSpring root:

```bash
./designflow-website/scripts/deploy-designflow-webpage.sh
```

## Custom domain (optional)

GitHub Pages → Custom domain → e.g. `designflow.app`.
