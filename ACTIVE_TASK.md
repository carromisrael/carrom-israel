# Active Task

> Lightweight pointer to "what are we doing right now" within the bigger picture.
> For full context (stack, design tokens, site structure, phases) see `Plan.md`.

**Last updated**: 2026-08-30

## Current Phase (per `Plan.md` → Roadmap)
**Phase 1 — Home page UI** (Phase 0 — Scaffold is complete)

## Done so far

### Phase 0 — Scaffold (complete)
- [x] Read & digested the Claude Design handoff (sections, product data, design tokens)
- [x] Wrote `Plan.md` (tech stack, design system, site structure, phased roadmap)
- [x] Confirmed tech stack decisions (npm, pure CSS animations, Next.js/TS/Tailwind/shadcn/Vercel/Supabase-later)
- [x] Scaffolded Next.js app (TypeScript, App Router, Tailwind v4, npm) — verified `next dev` serves `200`
  - Next.js 16.3.3 / React 19.2.8. Tailwind v4 uses CSS-based `@theme` config (no `tailwind.config.js`).
- [x] Initialized shadcn/ui (`--rtl` preset, radix base, nova style) + added `DirectionProvider` (`components/ui/direction.tsx`)
- [x] Wired up RTL (`dir="rtl" lang="he"` on `<html>` + `DirectionProvider`) and fonts (Frank Ruhl Libre / Assistant / Cormorant Garamond via `next/font/google`, hebrew+latin subsets) in `app/layout.tsx`
- [x] Ported full design system into `app/globals.css` `@theme`: brand color scale (navy/blue/clay/maple/wood/ink/stone/taupe/sand/amber/green/red), semantic aliases (`bg-page`, `text-display`, `brand-gold`, etc.), radius scale, and re-themed shadcn's own semantic tokens (primary/secondary/accent/etc.) to match
- [x] Copied handoff assets (`assets/`) into `/public/assets`, removed unused default Next.js placeholder SVGs

### Phase 1 — Home page UI (in progress)
- [x] Built `SiteHeader` (sticky nav, centered links + logo) and `Hero` (full-bleed image, glow headline, primary CTA) — extended shadcn `Button` with brand `primary`/`gold` variants + `cta-sm/md/lg` sizes; verified visually via screenshot

### Git / GitHub / deploy setup (complete)
- [x] Initialized git repo + `.gitignore`, committed all work so far
- [x] Created dedicated SSH deploy key (`~/.ssh/id_ed25519_carrom_israel`) scoped to this repo only via local `git config core.sshCommand` (not global — doesn't touch other projects or your personal GitHub key)
- [x] Deploy key added on GitHub (`carromisrael/carrom-israel`, write access) and verified (`ssh -T` confirms repo identity)
- [x] Pushed `main` to `origin` — repo is live at `github.com/carromisrael/carrom-israel`
- [x] Fixed a production-only build failure: `DirectionProvider` requires its native `dir` prop (shadcn's own docs example was misleading — passed `direction` only, which type-checks fine in dev but fails `next build`'s TS pass, i.e. exactly what Vercel runs). Also re-fixed `package.json`/`package-lock.json` name (shadcn init had silently reverted it to `scaffold-tmp`). Verified locally with `npm run build` + `npm run lint` before pushing.
- [ ] **User to confirm**: new Vercel deployment (triggered by this push) succeeds

## Doing next (pick up in next chat)
- [ ] Build "What is Carrom" section (`#what`) — text + looping video + stat row (see `Plan.md` §4)
- [ ] **Follow-up (found via mobile check)**: `SiteHeader` nav has no mobile pattern — 4 links + logo just get squeezed at ~390px width. Needs a hamburger/drawer menu per `.cursor/rules/responsive-design.mdc`.

## Project rules
- [x] Added `.cursor/rules/responsive-design.mdc` — enforces mobile-first, no-squeeze-to-fit nav bars, fluid tokens, min touch target sizes for all `app/**` and `components/**` work.

## Not started
Everything in `Plan.md` §6 from Phase 1 (remaining sections) onward: Products page UI, how-to-play page, purchase flow, Supabase, deploy.

## Open questions blocking nothing yet
See `Plan.md` §7 (how-to-play content, WhatsApp number, payment provider, Instagram URL).
