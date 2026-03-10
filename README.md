# JetBrains Theme Switcher – Internship Project

This repository contains my solution for a JetBrains Frontend internship project. It is a small React app that shows a bundler-based CSS setup with source maps.

## Project overview

The JetBrains Theme Switcher is a single-page app for previewing JetBrains-style editor themes on a code snippet. You can switch between light and dark themes and adjust highlight styles to see the colors update instantly. Styles are written in modular SCSS and design tokens, then bundled into generated CSS with source maps so DevTools can trace final rules back to their sources.

## Running the project

You can either use the hosted version or run it yourself.

- **Hosted** (no sourcemaps): `https://theme-switcher.hrsdimitrov.com/`
- **Local dev** (available sourcemaps):
  ```bash
  npm install
  npm run dev
  ```
- **Docker** (no sourcemaps):
  ```bash
  docker build -t jetbrains-theme-switcher .
  docker run -p 8080:80 jetbrains-theme-switcher
  ```
  Then open `http://localhost:8080`.

## CSS pipeline and source maps

### How CSS is transformed

Styles are authored as SCSS partials (plus design tokens in JavaScript). Vite compiles the SCSS to CSS, applies bundling/optimization, and emits an optimized stylesheet referenced from the built HTML.

Source maps are enabled in the Vite config so DevTools can map compiled styles back to their original sources while developing the app.

### Where to find generated assets

After running `npm run build`, Vite bundles all authored SCSS into a single optimized stylesheet in `dist/assets/` (for example `dist/assets/index-XXXX.css`). The JavaScript bundle and its source map are `dist/assets/index-XXXX.js` and `dist/assets/index-XXXX.js.map`.

## CSS/DevTools report

The write-up for Task #2 (CSS, DevTools, and source-map investigation) is available in `REPORT.md` in the project root.
