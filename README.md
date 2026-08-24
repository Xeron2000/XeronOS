# XeronOS

Terminal-style personal homepage — single-file `index.html` (vanilla HTML/CSS/JS), zero framework, zero build, zero dependencies.

> Previously `Next.js + React + Tailwind`, rewritten for instant load and free static hosting. Open `index.html` directly in any browser.

![static](https://img.shields.io/badge/stack-vanilla_html-1e1e2e) ![size](https://img.shields.io/badge/size-11KB-cba6f7) ![build](https://img.shields.io/badge/build-none-a6e3a1)

## Preview

`index.html` → `fastfetch` terminal card + Arch ASCII + live `Asia/Shanghai` clock.

## Edit

All content is in one file:

- **System info / links / colors** → `:root` CSS variables (Catppuccin Mocha) and HTML in `index.html`
- **No build step** — edit and refresh

## Deploy

Any static host works. No `npm install`, no `next build`:

- **Vercel** — Framework Preset → `Other`, Build Command empty, Output `.` (already set in `vercel.json`)
- **Cloudflare Pages / Netlify / GitHub Pages** — upload `index.html`

## Stack

`HTML + CSS + 30 lines JS` — typewriter + `Intl.DateTimeFormat` clock. No React, no bundler.
