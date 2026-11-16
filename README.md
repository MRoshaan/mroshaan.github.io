# Muhammad Roshaan portfolio

A research record for Muhammad Roshaan: LLM evaluation, AI safety, and the
backend systems around them. Built as a short technical report rather than a
template landing page. The one rich element is a real figure from the
BitFracture quantization study; the rest stays quiet so it can carry the color.

## Design

- **Direction:** a lab notebook and instrument readout. Paper, ink, figure
  captions, margin annotations. Exact, quiet, a little warm.
- **Palette:** one warm neutral ramp (`--paper`, `--ink`, `--rule`), one pine
  accent for signal, and clay only inside data. No gradients, glows, glass, or
  colored shadows.
- **Type:** Source Serif 4 for the record, IBM Plex Sans for interface text,
  IBM Plex Mono for dates, figures, and file paths.
- **Reference:** the presentation system follows Distill's research template
  (serif display, figure-and-caption blocks, mono metadata) rather than a
  portfolio template. Magic Portfolio and `bchiang7/v4` were considered and
  left out because both reproduce the card-grid portfolio look this design
  avoids.
- **Process:** unslop by Damir Sokolovsky (CC BY 4.0), applied as a redline
  pass.
- **Rules:** square plates for figures, hairline rules for structure, text
  links instead of buttons and chips, one accent used for the accepted status
  and the measured change.

## Stack

- **Next.js 16** (App Router, static prerender) + **TypeScript**
- **Tailwind CSS v4** with tokens in `app/globals.css`
- **Radix Dialog** for the mobile menu
- **Lucide** icons at one size and stroke
- No animation library. One CSS entrance for the hero; everything else is a
  color or surface change.

## Structure

```
app/
  layout.tsx            Global layout, metadata, fonts, theme bootstrap
  page.tsx              Hero → research → work → skills → experience → education → contact
  projects/[slug]/      Case-study pages
  globals.css           Design tokens, base type, motion
components/
  hero.tsx              Positioning, links, and the results figure
  quantization-figure.tsx  BitFracture plot drawn as inline SVG
  research-section.tsx  Paper ledger with findings in native details
  projects-section.tsx  Selected work rows and the GitHub table
  skills-section.tsx    Skill groups as a spec list
  experience-section.tsx  SPAR AI, Turing, 10Pearls
  education-section.tsx   Degree, semester GPAs, certifications
  footer.tsx            Contact
  diagrams/             Static flow figures for the case studies
lib/
  site.ts               Contact + URLs
  research.ts           Papers, venues, results, findings
  projects.ts           Case studies and compact GitHub list
  education.ts          Degree, GPAs, certifications, languages
  skills.ts             Skill groups
public/
  resume/Muhammad_Roshaan_Resume.pdf
  theme.js              Restores the saved theme before paint
```

## Resume

The downloadable resume is a plain PDF at
`public/resume/Muhammad_Roshaan_Resume.pdf`. The Hero and nav CV links point to
it. The source LaTeX lives in the career data repo under
`applications/main-resume/`; rebuild there and drop the new PDF into
`public/resume/`.

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
