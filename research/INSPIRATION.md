# Design Inspiration & Direction — JV'S Tuition Center

> Screenshots in `screenshots/` (captured live via webcmd browser, Aug 2026).

## Awwwards education references (captured)

### The Online School — Awwwards Honorable Mention
- **Palette:** `#14263A` (deep ink navy) + `#5819BC` (violet)
- **Live site (theonlineschool.com):** near-black bg, hero type "Education reinvented. For tomorrow's innovators" at **96px**, light mint text `#EBFEE8`, Walsheim sans. Dark base + one bright accent.
- **Why it works:** scroll-driven, editorial, kinetic hero; immersive; high trust.
- **Take for JV'S:** ink-based dark cinematic hero; oversized editorial headline; one saturated accent on dark.

### Babaoo — Awwwards Honorable Mention (kids neuroeducation)
- **Palette:** `#233143` (ink) + `#87DDC1` (mint green)
- **Why it works:** bold flat color blocks, playful-but-premium, huge type, marquee-style motion.
- **Take for JV'S:** ink + **one** bright accent at high contrast; bold flat section colors (no gradients); big type.

### Gagunashvili Chess Academy — Awwwards Honorable Mention (children's academy)
- **Palette:** off-white `#F8F8F8`, near-black text, Inter Tight display (74px)
- **Why it works:** clean, confident, gallery-style layout; teaches kids' academy premium feel.
- **Take for JV'S:** generous whitespace; oversized display type; editorial restraint.

## Shillong competitors (captured — what NOT to copy)

### Inspiral Coaching (inspiralshillong.com)
- Palette: white + black + **gold `#D9AE00` + purple `#AA66CC` + red `#FF0000`** — 3+ clashing accents, dated WordPress feel.
- **Lesson:** JV'S must NOT multi-accent. Single locked accent is the premium differentiator in this market.

### FyneStudy (fynestudy.com/neet/)
- Palette: white + ink `#1A202C` + royal blue `#004AAD` + cyan `#12F0E8` — generic SaaS-blue education look.
- **Lesson:** avoid generic blue-saas; our coral-on-ink reads distinctive vs both local leaders.

## LOCKED DESIGN DIRECTION

| Token | Value | Notes |
|---|---|---|
| **Base / ink** | `#141B2E` | Deep navy-ink (validated against The Online School `#14263A`, Babaoo `#233143`) |
| **Surface-2** | `#1E2940` | Section tint within same family |
| **Accent (ONLY one)** | `#FF4D2E` | Electric coral — the single bold pop (anti-AI color lock) |
| **Text (on ink)** | `#F4F6FB` | Off-white, never pure white |
| **Text (muted)** | `#8A93A8` | Secondary |
| **Type display** | **Syne** 700/800 | Kinetic display (Atlas reuse) |
| **Type body** | **Outfit** 300–600 | Clean humanist |
| **Radius scale** | ONE scale: 12px cards, 999px pills, 6px inputs | Shape-consistency lock |

### Why this palette
- **Ink base** = premium/editorial + validated by 2 award-winning education sites.
- **One electric coral accent** = bright & bold (user req) without the multi-accent slop that every Shillong competitor ships.
- Coral on ink passes WCAG AA for large display + button text (white on coral).

## Section motion plan (GSAP, meaningful scroll)
1. Preloader → brand mark draws in.
2. Hero → Atlas `WorkPageHero` (pin + video pill expands full-bleed), words **JV'S / TUITION / MEGHALAYA**.
3. Scroll progress bar (fixed 2px, `gsap.quickSetter`).
4. **The JV'S Standard** — pinned scrub story: SplitText word reveals + drawing line + accent color shift per beat.
5. Stats count-up (marked mock/confirm).
6. Why JV'S — parallax layered images + staggered reveals (Motion `whileInView`).
7. Subjects — **one** marquee (max-1 rule).
8. Schedule — weekly timetable, scroll-revealed rows, "Reserve slot" → form prefill.
9. Pricing — tier cards, monthly/term toggle, border-beam shine on hover.
10. Inquiry form — animated success state.
11. Testimonials — featured carousel (real Google reviews: 5.0★ · 27 reviews, Douglas Warjri, Sanjay Joshi, Mon Bahadur Sunar).
12. Contact + map embed + footer.