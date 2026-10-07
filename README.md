# Muhammad Roshaan Portfolio

Dark-first, high-contrast portfolio for Muhammad Roshaan, an AI safety and
systems engineer and final-year CS student at SSUET, Karachi. Research leads:
accepted NeurIPS 2026 workshop papers on LLM tool-calling reliability and agent
security, followed by systems work in concurrency, ETL, and real-time ML.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** design system (`app/globals.css` theme tokens)
- **shadcn/ui** components copied into `components/ui/` (button, card, badge,
  separator, command menu), not installed as a black-box package
- **Framer Motion**: used only for the scroll/storytelling moments (hero
  entrance, the SeatVault and ETL diagrams). No GSAP/Lenis.

## Structure

```
app/
  layout.tsx            Global layout, nav, metadata, fonts
  page.tsx              Landing: hero → research → projects → skills → experience → education → footer
  projects/[slug]/      Case-study pages (one per featured project)
  globals.css           Design tokens (colors, grid backdrop, scrollbar)
components/
  ui/                   shadcn-style primitives (button, card, badge, command menu)
  diagrams/             Framer Motion architecture diagrams (seatvault, etl)
  nav/hero/footer/...   Page sections, including research and education
lib/
  site.ts               Contact + URLs (single source for the site)
  research.ts           Papers, venues, findings, and the reviewer role
  projects.ts           Featured case studies + compact "more on GitHub" list
  education.ts          Degree, semester GPAs, certifications, languages
  skills.ts             Skill groups
public/
  resume/Muhammad_Roshaan_Resume.pdf   Downloadable resume
```

> `legacy-static/` and `Resume/` hold the old static HTML portfolio for reference.

## Resume

The downloadable resume is a plain PDF at
`public/resume/Muhammad_Roshaan_Resume.pdf`. The Hero button, footer, and
`/resume/...` links all point to it. The source LaTeX lives in the career data
repo under `applications/main-resume/`; rebuild there and drop the new PDF into
`public/resume/Muhammad_Roshaan_Resume.pdf`.

## Local dev

```bash
npm install
npm run dev        # http://localhost:3000
```

## Checks

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # production build (static-prerenders all routes)
```

## Deploy (Vercel)

The project auto-deploys to Vercel from `main`; the custom domain is
`m-roshaan.me` (see `CNAME`). Manual deploys use:

```bash
npm run deploy:preview   # preview URL
npm run deploy           # production
```
