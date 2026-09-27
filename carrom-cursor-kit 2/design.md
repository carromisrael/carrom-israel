# Carrom Israel — design.md v2
Updated 2026-09-27. Integration brief for the EXISTING Next.js project.

## Decision status and precedence
Latest user instructions override this file. This file governs visual implementation; docs/carrom-sales-platform-spec.md governs the business roadmap. That earlier specification is preserved as a historical planning document; its design wording does not override v2.

The recommended implementation baseline is the single wooden board hero, based on the latest exchange. The three-board fan remains an alternative reference, not a rotating carousel. Header navigation is centered on the page; logo stays on the right. Background stays CHARCOAL. The user's latest blue question concerns the CTA and highlighted headline, NOT the background.

Accent decision remains OPEN. Preserve gold as the screenshot baseline. Provide three DEV-PREVIEW choices:
- gold: gold CTA + gold second headline (baseline).
- mixed: muted deep blue CTA + gold second headline (designer recommendation for comparison).
- blue: muted deep blue CTA + lighter desaturated blue second headline.
Do not silently treat the recommendation as user approval. Do not expose theme controls on the production page.

## Scope
P1 is PRIVATE UI + real WhatsApp links when a verified number exists. No public deployment, checkout, database, CRM, login, live analytics or agent implementation in this task. Preserve existing unrelated functionality. Only header/hero composition is ready for implementation; remaining sections need deliberate design and real content.

## Visual references
- references/hero-single-charcoal.png: primary composition reference, gold baseline.
- references/hero-fan-charcoal.png: alternative three-board composition.
- motion-reference.html: live HTML/CSS integration preview with accent comparison; not a screenshot-cropping demo.
Raster reference is never used as a full-page background with embedded text/buttons. Build real DOM text, CSS gradient, and separate product image.

## Character and palette
Premium, tactile, friendly. Wood brings warmth, cyan logo supplies branding. Avoid casino/neon style, furniture, people, gold mist, reflective floor, auto-playing carousels and perpetual floating.

| Token | Value | Purpose |
| --- | --- | --- |
| bg | #111214 | charcoal base |
| bg-deep | #0D0E10 | right edge |
| graphite | #383A3D | broad quiet light behind board |
| surface | #1D2024 | mobile menu |
| text | #F5F3EE | primary ivory |
| muted | #CCCAC5 | paragraph |
| gold | #E4B66A | warm headline |
| gold-light | #F4D187 | gold CTA gradient start |
| blue | #28588F | muted blue CTA, white text |
| blue-hover | #214C7D | hover |
| blue-text | #89ACD5 | readable lighter blue headline |
| focus | #A5C9F3 | visible focus ring |

Values are implementation starting points, not exact raster sampling. Use starter/tokens.css as the token source. Gold headline uses a solid color; restrained gradient is allowed on gold CTA only. Blue CTA is solid. Do not use the dark button blue for headline text against charcoal. Preserve original logo cyan; do not recolor the entire brand to match the CTA.

## Layout
Desktop: copy physically RIGHT ~40%, board physically LEFT ~60%, a clear 32–64px gap. Content width max 1440px, outer padding 24–56px. Header uses equal side tracks with nav in center and logo right. No divider or extra header CTA. Links: הלוחות שלנו / מה זה קארום / אירועים. Reuse real existing section IDs.

Single wooden board: full frame visible, reclining oblique pose, discs visible, no stand legs. Center within left column. Image should not overlap copy or CTA. Existing asset already includes perspective: do not apply another large CSS rotation/skew.

Hero should fit content naturally, without a compulsory 100vh and dead space below. Use the preview for implementation proportions; tune after checking the real site font.

Mobile proposal, not a signed-off screenshot: logo and accessible disclosure menu, headline/body/CTA, then large board. 20px horizontal padding, no horizontal overflow from 320px upward. Reuse existing accessible menu where possible. Avoid duplicated desktop/mobile content for SEO or accessibility.

## Typography and exact copy
Prefer existing appropriate Hebrew font. Heebo is a suggested candidate, not the identified screenshot font. Reuse project font loading; no duplicate font import. Desktop heading 48–76px, weight 800–900, line-height 1.12; mobile 36–48px. Body 17–20px, line-height 1.65. CTA 17–20px, weight 700; pill radius matches latest screenshot. Touch targets at least 44px.

Heading line 1: פחות מסכים.
Heading line 2: יותר חברים.
Body: הכירו את קארום — קולעים דיסקיות לפינות בעזרת האצבע, ומתחרים עם חברים ומשפחה.
CTA: למציאת הלוח שלכם

Exactly one hero CTA, left arrow. It goes to models, where verified WhatsApp links can continue the P1 flow. Do not silently replace hero CTA with a payment link or invent a phone number.

## Motion
One entry then still. CSS is enough; use existing library only if already installed.
Board: translateY(30px), rotate(-2deg), scale(.965), opacity 0 → identity/opacity 1, 1150ms.
Heading/body/CTA: y15px/opacity0 → final, 650ms, delays 220/360/500ms.
Easing cubic-bezier(.16,1,.3,1). Mobile board y18px, rotation -1deg.
Reduced motion: all final states visible immediately. Header never animates. No scroll hijack, loop, auto model switching or persistent will-change. Reserve image dimensions. If loading causes an empty animation, coordinate image readiness without hiding all content. Check LCP after integration; reduce opacity animation if it materially hurts initial display.

## Asset truth
assets/champion-hero.png and .webp are NEW transparent AI-generated illustrations based on the chosen single-board reference, not exact original product photography. Markings and wood grain differ from stock; compare with assets/originals before release. They are suitable for private UI development. Replace via boardSrc later without changing layout. Do not infer product specifications from generated images.
assets/logo-original.jpg is authentic supplied logo reference WITH A WHITE BACKGROUND. Prefer the authentic transparent/SVG logo already in the project. Do not use a generated or typed approximation as final branding. Preview uses an explicitly labeled text stand-in until logoSrc is supplied.

## Page palette (2026-09-27)

Documentation only. Do not apply these decisions in `app/globals.css` or in section components until a later implementation pass. The scroll-preview HTML files are palette and scrolling references. Their hero is a placeholder. Their later sections, copy, product illustrations, icons, and imagery are not approved production designs. Do not import that CSS or overwrite existing tokens with its placeholder styling.

Reference files (outside the repo):

- `~/Downloads/carrom-scroll-preview.html` — exploratory rhythm A
- `~/Downloads/carrom-scroll-preview-b.html` — exploratory rhythm B

Both files share the same root swatches: coal `#14191F`, petrol `#2D5053`, gold `#D3AF72`, ink `#F4F0E8`. Those names are the preview’s. Project tokens keep the `--carrom-*` names already used in `app/globals.css`.

### Confirmed

**Hero is temporarily locked.** Preserve the current hero background, gradient, typography, assets, and layout. The preview hero (radial `#38434E` over `#11151A`) does not replace it. The existing hero charcoal stays `--carrom-bg` `#111214` and `--carrom-bg-deep` `#0D0E10`. The open gold / mixed / blue hero-accent comparison above is unchanged.

**“What is Carrom?” (`#what`), the section immediately after the hero.** Background is muted petrol.

| Token | Value | Role |
| --- | --- | --- |
| `--carrom-petrol` | `#2D5053` | Confirmed background for `#what`. Proposed name only — not added to CSS yet. |
| `--carrom-text` | `#F5F3EE` | Reuse for warm off-white text on petrol. |
| `--carrom-muted` | `#CCCAC5` | Reuse for secondary text on petrol. |
| `--carrom-gold-muted` | `#D3AF72` | Proposed restrained warm-gold accent. Not added to CSS yet. |

`--carrom-text` is the close match for the reference ink `#F4F0E8` (a few RGB steps apart) and is about 7.9:1 on `#2D5053`, which is enough for body text. Do not add a second off-white token.

Do not reuse `--carrom-gold` (`#E4B66A`) for this accent. That token stays the locked hero gold. It is brighter than the restrained reference `#D3AF72`. `--carrom-gold-muted` on petrol is about 4.3:1: enough for large type and for icon strokes (3:1), short of 4.5:1 for small body text. Body copy stays on `--carrom-text` or `--carrom-muted`.

**Feel.** Warm and premium: charcoal, petrol, natural wood, and subtle gold. Existing wood and maple tokens stay as they are. This note does not retint them.

**Rejected.** A near-white or ivory section field (the earlier sand page background, `#F7F2E8` / `sand-50`) felt too white. It is not the direction for `#what`.

**Hebrew RTL, when `#what` is built.** Right-align the text. Place each leading benefit icon on the physical right of its text — the start side in RTL. Do not hang those icons on the physical left.

### Exploratory — neither rhythm is approved

Video placement, final section layout, and copy after the hero are still open. Only the hero (locked) and the petrol introduction are confirmed. Do not treat charcoal-as-default, or any alternating band sequence, as decided.

**A. Mostly dark** (`carrom-scroll-preview.html`): charcoal hero → petrol introduction → charcoal products (`#1B2128`, cards `#252D35`) → gray-green social (`#465956`) → dark FAQ (`#242C33`).

**B. Greater tonal contrast** (`carrom-scroll-preview-b.html`): charcoal hero → petrol introduction → warm taupe products (`#ADA08D`, text `#192129`, cards `#BFB3A0`) → charcoal social (`#171E24` with a `#303B41` glow) → petrol-toned FAQ (`#31494B`).

Proposed names if a rhythm is approved later. Do not add them to CSS now. Option A’s product charcoal `#1B2128` is close to the existing `--carrom-surface` `#1D2024`; prefer reusing `--carrom-bg` / `--carrom-surface` if A is chosen, unless a separate bluer charcoal is explicitly wanted.

| Proposed token | Value | Would mean, only if that option is chosen |
| --- | --- | --- |
| `--carrom-sage` | `#465956` | A: gray-green social band |
| `--carrom-faq-dark` | `#242C33` | A: dark FAQ band |
| `--carrom-taupe` | `#ADA08D` | B: warm taupe product band |
| `--carrom-ink-deep` | `#192129` | B: text on taupe |
| `--carrom-taupe-raised` | `#BFB3A0` | B: product cards on taupe |
| `--carrom-petrol-deep` | `#31494B` | B: petrol-toned FAQ |

Option B’s social field can stay on the existing charcoal tokens plus a quiet `#303B41` glow. It does not need its own token unless that glow becomes a repeated surface.

### Still open

- Rhythm A versus rhythm B for products, social, and FAQ.
- Video placement inside “What is Carrom?”.
- Final layout and real copy for every section after the hero.
- Whether any preview icons, product art, or photography is used.
- Hero accent (gold / mixed / blue) stays the separate open comparison above.

## Remaining page
Model selection, events, and testimonials are not visually approved. “What is Carrom?” has a confirmed petrol background and text pairing only; its layout, video, icons, and copy are not approved. No fabricated quotes, prices, event dates, review scores, stock counts, or best-seller badges.
Chat widget is a future optional channel: see docs/chatbot-addon.md, not implemented in P1.

## Acceptance
Check at 320/390/768/1024/1440px. Centered nav, correct logo, one CTA, real anchor targets, full board outline, focus and keyboard menu, reduced motion, no console errors. Run existing relevant lint/typecheck/build scripts in actual repo. This kit is a starter, not evidence of successful integration into the unseen repo.
