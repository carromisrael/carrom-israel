# Carrom Israel — Project Plan

> Landing page + purchase flow for importing Carrom boards (SISCAA, India) to Israel.
> Source of truth for scope, stack, structure, and phasing. Update this file as decisions change.

---

## 1. Project Summary

- **Product**: Carrom boards (3 models: Classic / Pro / Champion), imported from India, sold to Israeli customers.
- **Site type**: Hebrew-only (RTL), single-brand e-commerce-style landing site.
- **Current goal (this phase)**: Build the **UI only** — no backend, no payments, no DB. Static/local data.
- **Design source**: Claude Design handoff bundle at `~/Downloads/carrom-israel-landing-page/` (HTML/CSS prototypes — not production code, ours to rebuild in React).

---

## 2. Tech Stack & Why

| Tech | Purpose | Why |
|---|---|---|
| **Next.js (App Router)** | Framework | SEO-friendly, file-based routing matches our 3 pages, Vercel-native. |
| **TypeScript** | Language | Catches prop/type mistakes early, especially useful once we model products/cart. |
| **Tailwind CSS** | Styling | Utility classes map directly to the design tokens (colors/spacing/radius) extracted below. |
| **shadcn/ui** | Component primitives | Copy-in components (Button, Badge, Card, etc.) built on Tailwind + Radix — we customize them to match the handoff instead of fighting a fixed theme. |
| **Vercel** | Hosting | Zero-config Next.js deploys, preview URLs per PR. |
| **Supabase** | DB (future phase) | Postgres for orders/leads/events RSVPs — added when we build checkout, not now. |
| **npm** | Package manager | Simplest, most universal — no need for pnpm/yarn on a project this size. |
| **Pure CSS** (no animation library) | Flip cards, marquee, hover states | The prototype already implements all of this in plain CSS/keyframes — reusing that approach avoids an extra dependency (e.g. Motion/Framer Motion) while matching the design exactly. |
| **`next/image`** | Image optimization | Built into Next.js — replaces raw `<img>` tags from the prototype for free performance (lazy loading, responsive sizes). |
| **Next.js Metadata API** | SEO (title/OG tags) | Built-in, per-page metadata exports — no extra package needed. |

**Deferred, not decided yet**: `react-hook-form` + `zod` (forms, needed once we build contact/checkout), Vercel Analytics/Speed Insights (optional, post-deploy), automated testing (skip until there's real business logic like cart/checkout to protect).

---

## 3. Design System (extracted from handoff tokens)

### Fonts (Google Fonts, loaded via `next/font/google`)
- **Display**: `Frank Ruhl Libre` (serif, headlines) — fallback `Cormorant Garamond`
- **Body / UI**: `Assistant` (Hebrew + Latin sans)

### Color palette → Tailwind theme extension
```
navy:   900 #001B3F, 800 #002050, 700 #0B2C5E, 600 #104080, 500 #1B4E93
blue:   500 #3E90BF, 400 #5AA3CC, 300 #8DC1DC, 200 #C2DDEB, 100 #E3EFF6
clay:   600 #C63C1E, 500 #E0472A, 400 #EB6C50
maple:  100 #FBF3E4, 200 #F4E4C4, 300 #EBD3A8, 400 #DCBB86
wood:   500 #A07040, 600 #8A6238, 700 #6B4A2A, 800 #4A331D
ink:    900 #100E0C, 800 #1C1815, 700 #2A241F, 600 #413931
stone:  500 #7C736A, 400 #A29A90
taupe:  300 #B4AEA0, 200 #CFC8BA
sand:   100 #EDE6D8, 50 #F7F2E8
amber:  500 #D79A3C   (gold accent / stars)
green:  600 #2C6B4F
red:    600 #B3341C
```
**Semantic roles**: page bg = `sand-50`, dark sections = `ink-900` / `navy-800`, brand accent = `blue-500`, gold accent (CTAs/prices) = `amber-500`, wood texture = `wood-700/800`.

### Spacing / radius (map to Tailwind `theme.extend`)
- Container max-width: `1360px`, gutter: `clamp(20px,5vw,64px)`
- Section vertical padding: `clamp(64px,9vw,136px)`
- Radius: `sm=8px, md=14px, lg=20px, xl=28px, pill=999px`

### RTL
Entire site is `dir="rtl"`. Set on `<html>` in root layout. Use Tailwind logical properties (`ps-`, `pe-`, `ms-`, `me-`) instead of `pl-`/`pr-`/`ml-`/`mr-` wherever left/right matters.

---

## 4. Site Structure (pages & sections, from handoff)

### `/` — Home (`Carrom Israel Landing Page.dc.html`)
1. **Header** — sticky, logo (centered via flex trick), nav: הדגמים / איך משחקים / אירועים / צרו קשר
2. **Hero** (`#top`) — full-bleed bg video/image, "Carrom - Israel" headline, CTA button
3. **What is Carrom** (`#what`) — 2-col text + looping video, stat row (2–4 players / 19 coins / 20 min / 6+ age)
4. **Models** (`#models`) — 3 flip cards (Classic ₪590 / Pro ₪790 / Champion ₪990), flips on hover to show specs + "add to cart"
5. **Story** (`#story`) — brand story (3 reservists founding story) + 3 lifestyle feature tiles (camping/beach/bar)
6. **Events** (`#events`) — dark section, list of upcoming meetups/tournaments + "host an event" CTA
7. **Trust** (`#trust`) — infinite marquee of testimonials
8. **Footer** (`#contact`) — logo, shop links, info links, contact (email/WhatsApp/Instagram)
9. **Floating WhatsApp button** — fixed bottom-start

### `/products` (`Products.dc.html`)
1. Header (variant with "סל"/cart button instead of hero CTA)
2. Hero band — "אותו משטח מייפל. שלוש מסגרות."
3. 3-card product grid (Champion / Pro / Classic, Pro marked "featured")
4. Per-model detail sections (image + spec table + price + "add to cart") × 3
5. "What's in the box" + "Shipping & warranty" spec tables (dark section)
6. Footer

### `/how-to-play` — **not yet designed** in the handoff (linked as `How To Play.dc.html` but file doesn't exist). We'll stub this as a simple placeholder page for now and flesh it out once you have that design, or write it ourselves — **needs your decision, see open questions**.

### Product data (hardcoded for now, no DB)
| Model | Thickness | Frame | Price | Weight | Size |
|---|---|---|---|---|---|
| Classic | 8mm | Blue-painted wood | ₪590 | ~8kg | 86×86cm |
| Pro (featured) | 12mm | Black-painted wood | ₪790 | ~11kg | 88×88cm |
| Champion | 16mm | Solid teak, oil finish | ₪990 | ~14kg | 89×89cm |

Every board ships with: 19 coins (9+9+queen), 2 strikers, powder, Hebrew instructions, pocket nets. Warranty 2 years, returns 14 days, delivery 3 business days.

---

## 5. Component Inventory (handoff's custom components → our build)

| Handoff component | Our implementation |
|---|---|
| `Button` (variant: primary/gold/sm/md/lg) | shadcn `Button` + custom variants for `gold` |
| `Badge` (tone: champion/pro/classic) | shadcn `Badge` + custom tones |
| `ProductCard` | Custom component (image, badge, meta, price, featured ring) |
| `FlipCard` (3D flip on hover) | Custom component, CSS `transform-style: preserve-3d` + `rotateY` |
| `SpecTable` (label/value rows) | Custom simple component |
| `PriceTag` | Custom component (₪ formatting) |
| `Testimonial` | Custom card + marquee wrapper (CSS keyframe animation) |
| `FeatureTile` | Custom image+caption tile |
| WhatsApp floating button | Custom fixed-position link/icon |

---

## 6. Phased Roadmap

- [ ] **Phase 0 — Scaffold**: `create-next-app` (TS, App Router, Tailwind), install & init shadcn/ui, configure fonts + color/spacing theme tokens, copy handoff assets into `/public`.
- [ ] **Phase 1 — Home page UI**: build all 8 sections above as static components, no interactivity beyond hover/flip/marquee.
- [ ] **Phase 2 — Products page UI**: product grid + 3 detail sections + shipping info.
- [ ] **Phase 3 — How-to-play page**: placeholder or real design (pending your input).
- [ ] **Phase 4 — Purchase flow**: cart state, checkout page, pick + integrate a payment provider (Stripe / Cardcom / Tranzila / PayPlus).
- [ ] **Phase 5 — Supabase**: orders table, maybe events RSVP + contact form storage.
- [ ] **Phase 6 — Deploy**: connect repo to Vercel, env vars, custom domain.

**We are starting Phase 0 → Phase 1 → Phase 2 now (UI only), per your request.**

---

## 7. Open Questions / Decisions Needed

1. `/how-to-play` page has no design yet — stub it with placeholder content, or do you have rules/content to give me now?
2. Real phone number for WhatsApp link (currently placeholder `972000000000` in the handoff)?
3. Payment provider for Phase 4 (Stripe now supports Israel, or a local one like Cardcom/Tranzila/PayPlus)?
4. Real Instagram URL for footer (currently a placeholder link)?

---

## 8. Repo Conventions
- `app/` — routes (`app/page.tsx`, `app/products/page.tsx`, `app/how-to-play/page.tsx`)
- `components/ui/` — shadcn primitives
- `components/` — custom site components (Hero, ModelsSection, ProductCard, etc.)
- `lib/data.ts` — hardcoded product/testimonial/event data (until Supabase)
- `public/` — images/video copied from handoff `assets/`
