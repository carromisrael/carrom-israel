# Active Task

> Lightweight pointer to "what are we doing right now" within the bigger picture.
> For full context (stack, design tokens, site structure, phases) see `Plan.md`.

**Last updated**: 2026-08-30

## Current Phase (per `Plan.md` → Roadmap)
**Phase 0 — Scaffold**

## Done so far
- [x] Read & digested the Claude Design handoff (sections, product data, design tokens)
- [x] Wrote `Plan.md` (tech stack, design system, site structure, phased roadmap)
- [x] Confirmed tech stack decisions (npm, pure CSS animations, Next.js/TS/Tailwind/shadcn/Vercel/Supabase-later)
- [x] Initialized git repo + `.gitignore`
- [x] Scaffolded Next.js app (TypeScript, App Router, Tailwind v4, npm) — verified `next dev` serves `200`
  - Next.js 16.3.3 / React 19.2.8. Tailwind v4 uses CSS-based `@theme` config (no `tailwind.config.js`) — noted for the theme-setup step.
- [x] Initialized shadcn/ui (`--rtl` preset, radix base, nova style) + added `DirectionProvider` (`components/ui/direction.tsx`)
- [x] Wired up RTL (`dir="rtl" lang="he"` on `<html>` + `DirectionProvider`) and fonts (Frank Ruhl Libre / Assistant / Cormorant Garamond via `next/font/google`, hebrew+latin subsets) in `app/layout.tsx`
- [x] Ported full design system into `app/globals.css` `@theme`: brand color scale (navy/blue/clay/maple/wood/ink/stone/taupe/sand/amber/green/red), semantic aliases (`bg-page`, `text-display`, `brand-gold`, etc.), radius scale, and re-themed shadcn's own semantic tokens (primary/secondary/accent/etc.) to match
- [x] Copied handoff assets (`assets/`) into `/public/assets`, removed unused default Next.js placeholder SVGs
- [x] Replaced default starter `app/page.tsx` with a sanity-check placeholder — visually verified fonts/colors/RTL render correctly via screenshot

- [x] Built `SiteHeader` (sticky nav, centered links + logo) and `Hero` (full-bleed image, glow headline, primary CTA) — extended shadcn `Button` with brand `primary`/`gold` variants + `cta-sm/md/lg` sizes; verified visually via screenshot

## Doing next
- [ ] Build "What is Carrom" section (`#what`) — text + looping video + stat row (see `Plan.md` §4)
- [ ] **Follow-up (found via mobile check)**: `SiteHeader` nav has no mobile pattern — 4 links + logo just get squeezed at ~390px width. Needs a hamburger/drawer menu per the new `.cursor/rules/responsive-design.mdc`.

## Project rules
- [x] Added `.cursor/rules/responsive-design.mdc` — enforces mobile-first, no-squeeze-to-fit nav bars, fluid tokens, min touch target sizes for all `app/**` and `components/**` work.

## Not started
Everything in `Plan.md` §6 from Phase 1 onward (Home page UI, Products page UI, how-to-play page, purchase flow, Supabase, deploy).

## Open questions blocking nothing yet
See `Plan.md` §7 (how-to-play content, WhatsApp number, payment provider, Instagram URL).
