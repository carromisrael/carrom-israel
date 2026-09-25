# Carrom Israel — design.md v2
Updated 2026-09-24. Integration brief for the EXISTING Next.js project.

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

## Remaining page
What is Carrom, model selection, events and testimonials are not visually approved. Reuse shared typography, spacing and button semantics, not compulsory alternating section colors. Charcoal is default; optional other surfaces require review. No fabricated quotes, prices, event dates, review scores, stock counts or best-seller badges.
Chat widget is a future optional channel: see docs/chatbot-addon.md, not implemented in P1.

## Acceptance
Check at 320/390/768/1024/1440px. Centered nav, correct logo, one CTA, real anchor targets, full board outline, focus and keyboard menu, reduced motion, no console errors. Run existing relevant lint/typecheck/build scripts in actual repo. This kit is a starter, not evidence of successful integration into the unseen repo.
