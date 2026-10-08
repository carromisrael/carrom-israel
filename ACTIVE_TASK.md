# Active Task

> Lightweight pointer to "what are we doing right now" within the bigger picture.
> For full context (stack, tokens, site structure, phases) see `Plan.md`.
> Visual rules and confirmed palette decisions: `carrom-cursor-kit 2/design.md`.

**Last updated**: 2026-10-08

## Current Phase
**Phase 1b — Home page redesign, section by section.** The original Phase 1 build is done; we are now reworking each home section, partly by porting sections from the friend's Claude Design handoff.

## Doing next
Task 1 is done. **Task 2 is done (2026-10-08)** — `/our-story` built and the home `#story` now shows a short summary + link. Task 3 (cleanup) is next.

Rule for tasks 1 and 2: take the friend's **layout, flow, content and assets**, but build it with **our design system** (tokens in `app/globals.css`, `components/ui/*`, existing `components/site/*` patterns, fonts, RTL rules). Do not copy his inline styles or his `_ds` tokens.

### Task 1 — Models page (`/products`, "הדגמים")
- Source: `carrom-cursor-kit 2/Carrom Israel Landing Page 2/Products.dc.html` (+ `Model Classic/Pro/Champion.dc.html` for per-model detail).
- His flow: dark hero band ("שלושה דגמים · SISCAA" / "אותו משטח מייפל. שלוש מסגרות." / what's in the box), then the 3-card grid (Champion / Pro featured / Classic), then per-model detail + shipping/warranty.
- Reuse `lib/data.ts` `products`; copy any missing assets into `public/assets/`.
- Header nav should point "הדגמים" at the new page.
- Status: **done** (2026-10-08) — `app/products/page.tsx`, one scrolling page with `id="champion"|"pro"|"classic"` anchors (matches the links the footer and home model cards already used). New components: `components/site/spec-table.tsx`, `product-teaser-card.tsx`, `product-detail.tsx`. New data in `lib/data.ts`: `playArea`/`badgeLabel`/`tagline` per product, `boxContents`, `shippingInfo`. `lib/nav.ts` "הלוחות שלנו" now points to `/products` instead of `/#models`. Visually QA'd with `playwright-cli` at desktop (1440px) and mobile (390px) — hero, 3-card grid, all three alternating detail sections, box/shipping band; no console errors. `npm run build` + `eslint` pass.
  - Known minor nit (pre-existing, not from this page): on narrow mobile the footer's "FROM INDIA WITH LOVE" text visually crowds the fixed WhatsApp button — same on the home page today since both share `SiteFooter`/`WhatsAppFloat`. Fix later as part of a footer pass.
  - Home → models page wiring was already in place before this task (the active `ModelCardsV2` layout already linked each card to `/products#<id>`); confirmed working end to end.

### Task 2 — Our Story page (`/our-story`, "הסיפור שלנו"), then a teaser on home
- Source: `carrom-cursor-kit 2/Carrom Israel Landing Page 2/Our Story.dc.html`. Story of Eliya travelling to India → carried a board home → met the makers → "שהמשחק הזה יחבר גם כאן" → CTA "אותו לוח, עכשיו על השולחן שלכם".
- Assets: `story-kids-night.jpg`, `story-kids-street.jpg`, `story-rickshaw.jpg`, `story-handshake.jpg`, `story-factory.jpg`, `story-kids-ball.jpg`, `story-street-clip.mp4` (in his `assets/`, not yet in `public/assets/`).
- Step 2: replace the current home `#story` (`components/site/story.tsx`, the old "שלושה מילואימניקים" copy) with a short excerpt of the new story + link to `/our-story`. Note: his home page has no story section; this excerpt is our addition. The two founding stories differ (three reservists vs. Eliya) — confirm which is true before publishing.
- Status: **done** (2026-10-08) — `app/our-story/page.tsx` (hero quote, Eliya's trip, rickshaw, Ziv, makers, closing, CTA). Images copied to `public/assets/story-*.jpg`. Home `components/site/story.tsx` now has a one-paragraph summary, a link to `/our-story`, and a **placeholder photo** (`story-handshake.jpg`) to replace with a real photo of Eliya and Ziv. The old `storyBlocks` / `featureTiles` data and `feature-tile.tsx` are no longer used by the home page (remove in task 3).

### Task 3 — Project cleanup (after tasks 1 and 2)
- **One design doc.** Merge into a single `design.md` at the repo root: the live rules from `carrom-cursor-kit 2/design.md` + the design system actually in `app/globals.css` + decisions from this phase. Then remove the duplicates/outdated docs, e.g. `carrom-cursor-kit 2/{README,CURSOR_PROMPT,IMPLEMENTATION_CHECKLIST,VALIDATION,ASSETS}.md`, the `_ds/.../readme.md`, and check whether `PRODUCT.md` and `skills/frontend-design/` (duplicate of `.cursor/skills/frontend-design`) are still needed.
- **Design source folder.** Once everything needed is ported, delete or archive `carrom-cursor-kit 2/` (including `Carrom Israel Landing Page 2/`, `uploads/`, `starter/`, `references/`).
- **Unused code.** Pick one Models section variant and remove the others + the on-page dev toggles (models layout, `#what`/hero accent radios). Remove components no longer imported.
- **Unused assets.** Remove files in `public/assets/` that nothing references (e.g. WhatsApp-named files, unused Gemini images, old video clips).
- **Docs.** Keep only `Plan.md` + `ACTIVE_TASK.md` (+ `online-game-status.md` if the game continues). Update both.
- Ask before deleting anything; run `npm run build` + lint after.
- Status: **not started**.

### Still open on the home page (not scheduled)
Events (`#events`), Footer. Pick one Models section variant (also part of task 3).

## Design sources
| Source | Path | Use |
|---|---|---|
| Friend's Claude Design (current) | `carrom-cursor-kit 2/Carrom Israel Landing Page 2/` | Home (`Carrom Israel Landing Page.dc.html`) plus Products, Model Classic/Pro/Champion, How To Play, Our Story, Accessories pages. Assets in its `assets/` folder. |
| Cursor kit brief | `carrom-cursor-kit 2/design.md` | Locked hero, confirmed petrol `#what`, open palette questions |
| Original handoff (older) | `~/Downloads/carrom-israel-landing-page/` | Superseded by the friend's design |

---

## Home section status

| Section | File | Status |
|---|---|---|
| Header | `header.tsx`, `desktop-nav.tsx`, `mobile-nav.tsx` | Redesigned (centered nav, charcoal). Accent gold/mixed/blue still open. |
| Hero (`#top`) | `hero.tsx` | Redesigned 2026-09-25, **locked** |
| What is Carrom (`#what`) | `what.tsx` | Redesigned 2026-09-27 — petrol bg, static `board-setup.jpeg`, guide link hidden until `guideHref` exists |
| Models (`#models`) | `models.tsx`, `flip-card.tsx`, `model-selector.tsx`, `model-cards-v2.tsx` | In progress — three variants behind an on-page dev toggle (designer / selector / cards), active default is `model-cards-v2.tsx` (designer). 2026-10-08: added real hover feedback to the active variant — card lifts + warm gold border/shadow, board photo zooms, title shifts to gold, CTA arrow slides (all with `motion-reduce` fallbacks). **Uncommitted.** Still need to pick one variant and remove the toggle + unused ones (task 3). |
| Story (`#story`) | `story.tsx`, `feature-tile.tsx` | Original Phase 1 build — to be replaced by the Our Story excerpt (task 2) |
| Events (`#events`) | `events.tsx` | Original Phase 1 build |
| Trust (`#trust`) | `trust.tsx` | Replaced 2026-10-08 with the friend's photo cards (6 reviews, images in `public/assets/review-*`). Endless marquee, moves left. |
| Footer (`#contact`) | `footer.tsx` | Original Phase 1 build |
| Floating WhatsApp | `whatsapp-float.tsx` | Done; real number still missing |

### Log
- **2026-10-08** — Models hover: added lift/glow/zoom/gold-title hover feedback to `model-cards-v2.tsx` (the active home models variant). Verified before/after with `playwright-cli`.
- **2026-10-08** — Models page: built `/products` (task 1), visually QA'd with `playwright-cli` at desktop + mobile. See Task 1 above for details.
- **2026-10-08** — Trust: ported friend's section; data in `lib/data.ts` `testimonials` (now has `image`, `imageAlt`). Fixed RTL marquee bug in `app/globals.css` (`trust-marquee` now `translateX(50%)` → `0`, so cards drift left with no empty gap).
- **2026-10-07** — Models: "choose board" variants (uncommitted).
- **2026-09-27** — `#what` on petrol; palette notes in `design.md`.
- **2026-09-25** — Hero redesign.
- **2026-08-30** — Phase 0 scaffold + Phase 1 home build; `/online` game prototype started.

---

## Other routes
- `/online` — online carrom vs. computer, trial version (`components/game/`). Not in the original plan.
- `/products` — built 2026-10-08 (task 1). `/how-to-play` — not built yet. The friend's design now has pages for both.

## Key files

| Path | Role |
|---|---|
| `Plan.md` | Stack, tokens, site structure, roadmap |
| `app/page.tsx` | Home composition |
| `app/globals.css` | Tokens + flip/marquee CSS |
| `lib/data.ts` | Products, events, testimonials, story |
| `components/site/*` | Home sections |
| `components/ui/button.tsx` | Brand `primary` / `gold` + `cta-*` sizes |

Dev server: `npm run dev` (port 3000).

## Out of scope for now
Cart, payments, Supabase, deploy.

## Open questions (do not block)
- Testimonials: `design.md` says "no fabricated quotes", and the reviews and photos from the friend's design look illustrative (AI images). Replace them with real customer reviews before launch.
- Hero accent: gold / mixed / blue.
- Section rhythm after `#what` (A mostly dark vs. B tonal contrast) — see `design.md`.
- Real WhatsApp number, Instagram URL, payment provider (see `Plan.md` §7).
