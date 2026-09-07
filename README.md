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
2. Tag `v2.1.1`, attach installers with filenames **exactly matching** `docs/config.js`:
   - `DesignFlow_2.1.1_aarch64.dmg`
   - `DesignFlow_2.1.1_x64.dmg`
   - `DesignFlow_2.1.1_x64-setup.exe`
3. Publish

The local sign script outputs `*-signed.dmg` on Desktop — rename before upload (drop `-signed` from the filename).

`releases/latest/download/<filename>` matches the filename character for character, so a version bump must land in `docs/config.js` and the release assets together.

## Notes

- Pages source: Settings → Pages → Deploy from branch `main` → `/docs`
- Legal pages: `docs/legal/` — update `legal.effectiveDate` in `config.js` when changed
- Screenshots: `docs/screenshots/`
- Demo video: `docs/assets/demo.mp4` (+ `demo-poster.jpg`). Source recordings are H.264 already, so remux rather than re-encode: `ffmpeg -i input.mov -c copy -movflags +faststart docs/assets/demo.mp4`. These are gitignored in the app repo and only ever pushed to `designFlow-webpage`.
