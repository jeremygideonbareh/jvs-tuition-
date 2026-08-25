# JV'S Tuition Center — Website

Premium, animation-driven website for **JV'S Tuition Center** — a 5.0★-rated coaching centre in Law-U-Sib, Shillong, Meghalaya (Maths · Science · JEE · Banking & all competitive exams).

## Stack

- **Vite 8 + React 19 + TypeScript**
- **Tailwind CSS v3** — ink `#141B2E` base + single electric-coral `#FF4D2E` accent
- **GSAP** (ScrollTrigger, pin/scrub) + **Lenis** smooth scroll (single RAF loop)
- **Framer Motion** — entrance reveals, carousel, price toggle
- Fonts: **Syne** (display) + **Outfit** (body)
- Deployed to **GitHub Pages** via Actions (base path `/jvs-tuition-/`)

## Sections

1. **Cinematic hero** — cloned `WorkPageHero` (video pill expands full-bleed on scroll) + kinetic words JV'S / TUITION / MEGHALAYA
2. **Stats** — count-up on scroll (5.0★, 27 reviews)
3. **The JV'S Standard** — pinned, scrubbed story (Rigorous / Personal / Exam-ready / Proven)
4. **Why JV'S** — bento with real classroom photography
5. **Subjects** — marquee + class levels
6. **Schedule** — interactive weekly timetable with "Reserve slot" → pre-fills enquiry
7. **Pricing** — 3 tiers, monthly/term toggle
8. **Reviews** — carousel of real Google reviews
9. **Enquiry form** — FormSubmit.io (client email is a placeholder) + mailto fallback
10. **Contact** — Google Maps embed + details

## Local dev

```bash
npm install
npm run dev        # http://localhost:5173/jvs-tuition-/
npm run build      # tsc + vite build → dist/
npm run preview
```

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and deploys to
`https://jeremygideonbareh.github.io/jvs-tuition-/`.

## ⚠️ Client-confirmation placeholders

Pricing, weekly schedule, hours, and the enquiry email are marked
`[CONFIRM]` in `src/lib/site-data.ts` — confirm with the centre before launch.

## Research

- `research/CLIENT-RESEARCH.md` — Google Maps scrape (address, phone, reviews, hours)
- `research/INSPIRATION.md` — Awwwards references, locked palette + motion plan
- `research/screenshots/` — captured reference + verification screenshots