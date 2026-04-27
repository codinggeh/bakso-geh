# Bakso Geh

Bakso Geh is a public-facing SvelteKit site for a fictional bakso brand. The site is written like a real restaurant website, while a separate disclaimer page makes it explicit that the project exists for portfolio use.

## Stack

- SvelteKit 2
- Svelte 5
- Tailwind CSS 4
- Bits UI
- Netlify adapter
- Vitest
- Playwright config

## Current Scope

- Indonesian and English content
- Light and dark theme toggle
- Locale switcher with `?lang=id` and `?lang=en`
- Image-first homepage with responsive image delivery
- Disclaimer page for portfolio disclosure
- Dynamic `robots.txt` and `sitemap.xml`
- Netlify-ready build config

## Routes

- `/` homepage
- `/disclaimer` portfolio disclaimer
- `/robots.txt`
- `/sitemap.xml`

## Project Structure

```text
src/
  lib/
    components/
      Footer.svelte
      LocaleSwitcher.svelte
      Nav.svelte
      ResponsiveImage.svelte
      ThemeToggle.svelte
    data/
      en.json
      id.json
    stores/
      theme.ts
    content.ts
    i18n.ts
    site.ts
    utils.ts
  routes/
    +layout.svelte
    +layout.ts
    +page.svelte
    disclaimer/+page.svelte
    robots.txt/+server.ts
    sitemap.xml/+server.ts
  tests/
    content.test.ts
    utils.test.ts

static/
  images/bakso/
```

## Development

```bash
npm install
npm run dev
```

Dev server:

```text
http://localhost:5173
```

## Scripts

- `npm run dev` start development server
- `npm run build` create production build
- `npm run preview` preview production build
- `npm run check` run Svelte and TypeScript checks
- `npm run lint` run ESLint with autofix
- `npm run format` run Prettier
- `npm run test:unit` run Vitest unit tests
- `npm run test:e2e` run Playwright tests

## Netlify

This repo is configured for Netlify through `netlify.toml`.

- Build command: `PUBLIC_SITE_URL=$URL npm run build`
- Publish directory: `build`

## Content

Main content lives in:

- `src/lib/data/id.json`
- `src/lib/data/en.json`

Shared helpers:

- `src/lib/content.ts`
- `src/lib/types/content.ts`

## Images

Bakso images are stored locally under:

- `static/images/bakso`

Responsive variants are generated under:

- `static/images/bakso/responsive`

## Verification

The current working branch has been validated with:

- `npm run lint`
- `npm run check`
- `npm run build`
- `npm run test:unit`

## Repo

- Remote: `origin`
- URL: `https://github.com/codinggeh/bakso.git`
- Active branch used for refactor work: `refactor/public-bakso-site`
