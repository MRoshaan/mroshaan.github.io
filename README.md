# Muhammad Roshaan — Portfolio
Dark-first, high-contrast portfolio for Muhammad Roshaan, a backend & data
engineer and final-year CS student at SSUET, Karachi.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** design system (`app/globals.css` theme tokens)
- **shadcn/ui** components copied into `components/ui/` (button, card, badge,
  separator, command menu) — not installed as a black-box package
- **Framer Motion** — used only for the scroll/storytelling moments (hero
  entrance, the SeatVault and ETL diagrams). No GSAP/Lenis.

## Structure

```
app/
  layout.tsx            Global layout, nav, metadata, fonts
  page.tsx               Landing: hero → projects → skills → experience → footer
  projects/[slug]/       Case-study pages (one per featured project)
  globals.css            Design tokens (colors, grid backdrop, scrollbar)
components/
  ui/                    shadcn-style primitives (button, card, badge, command menu)
  diagrams/              Framer Motion architecture diagrams (seatvault, etl)
  nav/hero/footer/...    Page sections
lib/
  site.ts                Contact + URLs (single source for the site)
  projects.ts            Project content (problem / approach / outcomes)
  skills.ts              Skill groups
public/
  resume/Muhammad_Roshaan_Resume.pdf   Downloadable resume (see "Resume" below)
```

> `legacy-static/` holds the old static HTML portfolio for reference.

## Resume

The downloadable resume is a plain PDF at
`public/resume/Muhammad_Roshaan_Resume.pdf` (kept in `Resume/`). The Hero
button, footer, and `/resume/...` links all point to it. To update it, drop a
new PDF into `public/resume/Muhammad_Roshaan_Resume.pdf` and rebuild.

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

Two options:

**A. One CLI command (needs a one-time login):**
```bash
npx vercel login           # opens a browser on GitHub — the only manual step
npm run deploy:preview     # first deploy (gets a preview URL + links the project)
npm run deploy             # then deploy to production
```

**B. Auto-deploy on every push (CI):**
A workflow is already in `.github/workflows/deploy.yml`. Enable it by adding
three repo secrets (Settings → Secrets → Actions) and pushing to `main`:

| Secret            | How to get it                                                        |
| ----------------- | -------------------------------------------------------------------- |
| `VERCEL_TOKEN`    | https://vercel.com/account/tokens → create token                     |
| `VERCEL_ORG_ID`   | `vercel link` → `cat .vercel/project.json` (team ID)                 |
| `VERCEL_PROJECT_ID` | `vercel link` → `cat .vercel/project.json` (project ID)           |

After the first deploy, update the `metadataBase` / `openGraph` URLs in
`app/layout.tsx` to the real domain.
