# Active Task

> Lightweight pointer to "what are we doing right now" within the bigger picture.
> For full context (stack, design tokens, site structure, phases) see `Plan.md`.
> Design source of truth: `~/Downloads/carrom-israel-landing-page/project/Carrom Israel Landing Page.dc.html`

**Last updated**: 2026-08-30

## Current Phase
**Phase 2 — Products page UI** — next, after home is complete.

## Doing next
Phase 2: `/products` page (grid + 3 detail sections + shipping info). Do not start until asked.

## Run mode notes (Phase 1, completed this pass)

The remaining home sections were built in one pass (no per-section approval). UI only: no cart, payments, Supabase, or git commit.

---

## Done so far

### Phase 0 — Scaffold (complete)
- Next.js 16.3.3 / React 19.2.8 / Tailwind v4 (`@theme` in `app/globals.css`, no `tailwind.config.js`)
- shadcn/ui (`--rtl`, radix, nova) + `DirectionProvider` (`dir="rtl"` required — not `direction`)
- RTL + fonts in `app/layout.tsx` (Frank Ruhl Libre / Assistant / Cormorant Garamond)
- Handoff assets in `/public/assets`
- GitHub: `github.com/carromisrael/carrom-israel`. Vercel deploy may already be connected (user to confirm).

### Phase 1 — Home page UI (complete)
- [x] `SiteHeader` + `Hero`
- [x] `WhatSection` (`#what`) — copy, circular looping clip, stats, rules link
- [x] Mobile hamburger + shadcn `Sheet` drawer (`components/site/mobile-nav.tsx`)
- [x] `Models` (`#models`) — maple-400, 3 `FlipCard`s (hover desktop / tap mobile, reduced-motion stacks both faces)
- [x] `Story` (`#story`) — numbered copy + `FeatureTile`s
- [x] `Events` (`#events`) — navy-800, stacked rows on mobile
- [x] `Trust` (`#trust`) — CSS marquee, duplicated track, pause on hover, fade mask
- [x] `Footer` (`#contact`)
- [x] Floating WhatsApp

Hardcoded data lives in `lib/data.ts` (products, events, testimonials, story) for Phase 2 reuse.

Verified at ~390px and ~1440px: grids collapse, hamburger opens, `#models` clears sticky nav, marquee animates, event rows stack.

---

## Key files

| Path | Role |
|---|---|
| `Plan.md` | Stack, tokens, site structure |
| `app/page.tsx` | Home composition |
| `app/globals.css` | Tokens + flip/marquee CSS |
| `lib/data.ts` | Products, events, testimonials, story |
| `components/site/*` | Header, Hero, What, Models, Story, Events, Trust, Footer, WhatsApp |
| `components/ui/button.tsx` | Brand `primary` / `gold` + `cta-*` sizes |
| Handoff HTML | `~/Downloads/carrom-israel-landing-page/project/Carrom Israel Landing Page.dc.html` |

Dev server: `npm run dev` (port 3000 if free).

## Out of scope this pass
Products page, how-to-play page, cart, payments, Supabase, commits, Vercel.

## Open questions (do not block)
See `Plan.md` §7 — how-to-play content, real WhatsApp number, payment provider, Instagram URL.
