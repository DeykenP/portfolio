# Deyken Pulido — Portfolio

Personal portfolio site, built to show recruiters real, working software rather than a template.

**Live:** [portfolio-jet-tau-62.vercel.app](https://portfolio-jet-tau-62.vercel.app)

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion for animation (scroll reveals, magnetic buttons, tilt cards, word-mask headings)
- Lucide React icons
- Fully static — no backend, deployable to Vercel/Netlify/GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/data/content.ts` — single source of truth for all copy (profile, skills, projects, experience, education)
- `src/components/` — one component per section
- `src/hooks/` — reduced-motion, active-section scroll spy, touch detection
