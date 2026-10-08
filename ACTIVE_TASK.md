# Active Task

> Lightweight pointer to "what are we doing right now" within the bigger picture.
> For full context (stack, tokens, site structure, phases) see `Plan.md`.
> Visual rules and confirmed palette decisions: `carrom-cursor-kit 2/design.md`.

**Last updated**: 2026-10-08

## Current Phase

**Phase 2c — Cleanup** (next). Phase 3 (How-to-play page) done 2026-10-08.

## Doing next

1. **Cleanup** (next). Check that the skills look good, and merge everything into **one** `design.md`. Details in Task 3 below.

## Done 2026-10-08

- **`/how-to-play`** built from the friend's `How To Play.dc.html`: hero, 5-step quick start, setup band with photo and specs, six rule groups, five beginner mistakes, FAQ, and a CTA band. Friend's copy unchanged. Added "איך משחקים" to the header nav. Verified at 375px and 1440px. The ICF rule claims and scoring details are **not** verified (see open items).
- **`/products`** built: hero, 3-card grid, per-model detail sections, box/shipping band. Plus an **Accessories** section (`#accessories`): 9-item grid, ₪120 maintenance kit band, WhatsApp "not sure" CTA.
- **`/our-story`** built: full story from the friend's design, restyled to our system (no small kicker labels, light/dark rhythm, two reasons listed under "שהמשחק הזה יחבר גם כאן").
- **Home `#story`**: one-paragraph summary of the story, a link to `/our-story`, and a portrait photo (placeholder, see open items).
- **Home `#events`** rebuilt: dark section with cards (date, title, details). The "הרשמה" button is a placeholder and does nothing for now.
- **Models** hover feedback on `model-cards-v2.tsx` (still uncommitted, toggles still in place).
- **Trust** section ported from the friend's design.

## Open items (carry into later tasks)

- **WhatsApp number**: `lib/whatsapp.ts` now uses the friend's `972524845695` (set 2026-10-08, not yet confirmed). Accessories links read from the helper. Still hardcoded to the old `972000000000` placeholder: the floating WhatsApp button (`whatsapp-float.tsx`), footer, `product-detail.tsx`, and the products-page CTA. Switch them to the helper once the number is confirmed.
- **How-to-play rules and claims** (copied from the friend, not verified): the page says the rules follow ICF and are "the same as tournaments." Also check the scoring details (game ends at 25 points or 8 rounds; queen bonus "only if below 21"), the "at least 90 cm per side" table size, and the "50 g powder bag" (not in our product data).
- **Events dates**: two of the three events in `lib/data.ts` are in the past (12.09.26 and 03.10.26; today is 08.10.26). Replace with real upcoming dates.
- **Story facts**: "ארבע שנים" (four years) and "מהיצרנים הטובים בעולם" (the best makers in the world) come from the friend's copy. Confirm before publishing.
- **Home story photo**: `public/assets/story-handshake.jpg` is a placeholder from the friend's design. Swap in a real photo of Eliya and Ziv (`components/site/story.tsx`).
- **Accessory prices and copy**: friend's placeholders (₪20–₪180). Some claims (e.g. "עץ שיטה", "אבקת בורון") need checking. Photos are missing, so cards show "תמונה בקרוב".
- **Footer nit** (pre-existing): on narrow mobile the "FROM INDIA WITH LOVE" text crowds the fixed WhatsApp button. Fix in a footer pass.
- **Uncommitted**: all work from 2026-09-25 onward is uncommitted. Commit before the cleanup so its diff is easy to review.

## Task 3 — Cleanup (after how-to-play)

- **One design doc.** Merge into a single `design.md` at the repo root: the live rules from `carrom-cursor-kit 2/design.md`, the design system actually in `app/globals.css`, and decisions from this phase. Then remove duplicates and outdated docs, e.g. `carrom-cursor-kit 2/{README,CURSOR_PROMPT,IMPLEMENTATION_CHECKLIST,VALIDATION,ASSETS}.md`, the `_ds/.../readme.md`. Check whether `PRODUCT.md` and `skills/frontend-design/` (duplicate of `.cursor/skills/frontend-design`) are still needed.
- **Skills review.** Check that the project skills in `.cursor/skills/` and `.claude/skills/` are still accurate and not contradicting `design.md` or `AGENTS.md`. Remove or fix duplicates.
- **Design source folder.** Once everything is ported, delete or archive `carrom-cursor-kit 2/` (including `Carrom Israel Landing Page 2/`, `uploads/`, `starter/`, `references/`).
- **Unused code.** Pick one Models section variant and remove the others, plus the on-page dev toggles (models layout, `#what`/hero accent radios). Remove components and data no longer imported: `story.tsx` no longer uses `storyBlocks`/`featureTiles`, so remove them and `feature-tile.tsx` if nothing else uses them.
- **Unused assets.** Remove files in `public/assets/` that nothing references (e.g. WhatsApp-named files, unused Gemini images, old video clips).
- **Docs.** Keep only `Plan.md` + `ACTIVE_TASK.md` (+ `online-game-status.md` if the game continues). Update both.
- Ask before deleting anything. Run `npm run build` + lint after.
- Status: **not started**.

### Still open on the home page (not scheduled)

Footer (`#contact`). Pick one Models section variant (also part of task 3).

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
| Models (`#models`) | `models.tsx`, `flip-card.tsx`, `model-selector.tsx`, `model-cards-v2.tsx` | In progress — three variants behind an on-page dev toggle (designer / selector / cards), active default is `model-cards-v2.tsx`. Hover feedback added 2026-10-08. **Uncommitted.** Pick one variant and remove the toggle + unused ones (task 3). |
| Story (`#story`) | `story.tsx` | Excerpt + link to `/our-story` (2026-10-08). Placeholder photo. |
| Events (`#events`) | `events.tsx` | Rebuilt 2026-10-08: cards, sign-in placeholder. Dates need updating. |
| Trust (`#trust`) | `trust.tsx` | Friend's photo cards (6 reviews, `public/assets/review-*`). Endless marquee. |
| Footer (`#contact`) | `footer.tsx` | Original Phase 1 build. Next in line for a pass. |
| Floating WhatsApp | `whatsapp-float.tsx` | Done; real number still missing |

### Log

- **2026-10-08** — How-to-play page (`/how-to-play`) built; nav gained "איך משחקים".
- **2026-10-08** — Our Story page (`/our-story`) built and reworked. Home story excerpt + placeholder photo (portrait 4:5).
- **2026-10-08** — Events rebuilt as cards with a sign-in placeholder.
- **2026-10-08** — Accessories section added to `/products`. Shared WhatsApp helper in `lib/whatsapp.ts`.
- **2026-10-08** — Models hover: added lift/glow/zoom/gold-title hover feedback to `model-cards-v2.tsx`.
- **2026-10-08** — Models page: built `/products` (task 1).
- **2026-10-08** — Trust: ported friend's section; data in `lib/data.ts` `testimonials`.
- **2026-10-07** — Models: "choose board" variants (uncommitted).
- **2026-09-27** — `#what` on petrol; palette notes in `design.md`.
- **2026-09-25** — Hero redesign.
- **2026-08-30** — Phase 0 scaffold + Phase 1 home build; `/online` game prototype started.

---

## Other routes

- `/online` — online carrom vs. computer, trial version (`components/game/`). Not in the original plan.
- `/products` — built 2026-10-08, with accessories section.
- `/our-story` — built 2026-10-08.
- `/how-to-play` — built 2026-10-08 from the friend's `How To Play.dc.html`.

## Key files

| Path | Role |
|---|---|
| `Plan.md` | Stack, tokens, site structure, roadmap |
| `app/page.tsx` | Home composition |
| `app/globals.css` | Tokens + flip/marquee CSS |
| `app/products/page.tsx` | Boards + accessories page |
| `app/our-story/page.tsx` | Our Story page |
| `app/how-to-play/page.tsx` | How-to-play page (content in `lib/data.ts`, `howToPlay*`) |
| `lib/data.ts` | Products, accessories, events, testimonials, story |
| `lib/whatsapp.ts` | WhatsApp number + link helper (placeholder number) |
| `components/site/*` | Home sections and shared site components |
| `components/ui/button.tsx` | Brand `primary` / `gold` + `cta-*` sizes |

Dev server: `npm run dev` (port 3000).

## Out of scope for now

Cart, payments, Supabase, deploy.

## Open questions (do not block)

- Testimonials: `design.md` says "no fabricated quotes", and the reviews and photos from the friend's design look illustrative (AI images). Replace them with real customer reviews before launch.
- Hero accent: gold / mixed / blue.
- Section rhythm after `#what` (A mostly dark vs. B tonal contrast) — see `design.md`.
- Real WhatsApp number, Instagram URL, payment provider (see `Plan.md` §7).
