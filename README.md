# Kawtar Imzilne — Portfolio

Vite + React + Tailwind + framer-motion. Deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
```

## Editing your content (one file)
Everything lives in **`src/data/portfolio.js`**. Each section is an array or object.
- **Add** an item: copy a block inside the array, paste it right after, change the text.
- **Delete** an item: remove its `{ ... },` block. The section adapts (an empty array hides the cards).
- **Reorder**: move blocks up or down.

| What | Where in `portfolio.js` |
|---|---|
| Name, role, links, email, phone | `profile` (email/phone stay hidden while empty) |
| Typing roles in the hero | `heroRoles` |
| Rotating captions under your photo | `heroCaptions` |
| The 4 numbers | `stats` (only real, checkable numbers) |
| Big project cards | `featuredProjects` |
| Small project cards | `otherProjects` (a commented template is inside) |
| Certifications | `certifications` (template inside) |
| Education / journey | `journey`, `education` |
| Skills (`{ name, planned: true }` = dashed chip) | `skillGroups` |

**Case-study pages** (`/projects/<slug>`) live in `src/data/caseStudies.js`. Copy a block, change `slug`, then set `caseStudy: "<slug>"` on the project. Every section inside is optional: delete a field and that section disappears.

## Your photo
Save it as `src/assets/profile.jpg` (or `.jpeg`, `.png`, `.webp`). It is picked up automatically and shown in grayscale like the reference. Without it, your initials are shown.

## Deploy
Push to `main`, then GitHub → Settings → Pages → Source: **GitHub Actions**. The base path is set from the repo name automatically.
