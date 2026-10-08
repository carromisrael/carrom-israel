# Carrom Israel — Design System

**Carrom Israel** (קרום ישראל) imports the Indian board game **carrom** into Israel under its own
brand: Indian-made acacia boards, Israeli packaging, Hebrew rules, local warranty and delivery.
The business is at pre-launch stage — the first deliverable is a **Hebrew, RTL landing page /
storefront** for three board models: **Champion** (16mm, tournament), **Pro** (12mm, black frame,
the recommended model) and **Classic** (8mm, blue frame, entry level). Prices in the client's own
mock: ₪990 / ₪790 / ₪590.

The brand signature printed on every board — **"From India with Love"** — is treated here as a
fixed brand line and appears in the footer.

## Sources given (and their status)

| Source | Kind | Used for |
|---|---|---|
| `uploads/לוגו .jpg` → `assets/logo-mark-original.jpg` | client logo, stacked, raster | brand mark, navy + blue + clay palette |
| `uploads/לוגו-אתר.jpeg` → `assets/logo-wordmark-original.jpeg` | client logo, horizontal, raster | site header lockup, `--blue-500` |
| `uploads/דף בית - השראה 1 .jpg` → `reference/inspiration-1.jpg` | **third-party site the client admires** (a restaurant site) | layout & typographic direction only — dark full-bleed hero, centred display serif, flanking uppercase labels, corner review capsule |
| `uploads/השראה-2 .jpg` → `reference/inspiration-2.jpg` | same, second screen | taupe editorial band, flush photo triptych with serif captions |
| `uploads/products.jpeg` → `reference/products-mock.jpeg` | the client's own product-grid mock | `ProductCard`: three-up grid, wood plinth, blue price, blue ring on the featured model |
| `uploads/champion-top.jpeg`, `Classic.jpeg`, `Pro.jpeg` | product photography | board imagery, maple + wood tokens |
| `uploads/bar-carrom.jpeg`, `camping-carrom.png` | lifestyle photography | hero and editorial band imagery |

No codebase, Figma file, live site, slide deck or font files were provided. Nothing in this system
is copied from the inspiration sites beyond **layout and typographic structure** — all colour,
imagery and copy is Carrom Israel's own.

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`
- `components/` — React primitives, grouped: `core/`, `product/`, `marketing/`, `navigation/`, `forms/`
- `ui_kits/site/` — the click-through RTL storefront recreation (see its README)
- `templates/landing-page/` — a starting-point landing page consumers can copy
- `guidelines/` — the foundation specimen cards shown in the Design System tab
- `assets/` — logos (incl. transparent knockouts) and photography
- `reference/` — the client's inspiration screens and product mock, kept for provenance
- `SKILL.md` — Agent-Skill wrapper for use outside this project

### Components

**core/** `Button`, `Badge`, `Eyebrow`, `SectionHeading`, `Card`, `Logo`
**product/** `ProductCard`, `PriceTag`, `SpecTable`
**marketing/** `HeroBanner`, `FeatureTile`, `ReviewCapsule`, `Testimonial`
**navigation/** `NavBar`, `Footer`
**forms/** `Input`, `Select`, `Checkbox`, `QuantityStepper`

No source defined a component inventory, so this is a from-scratch set sized to one storefront.
**Intentional additions** (things a generic system would have that were added deliberately):
`Eyebrow` and `SectionHeading` exist because the flanking-label heading is the brand's single
strongest borrowed device and must be one component, not ad-hoc markup; `PriceTag` exists because
shekel amounts have to be forced LTR inside RTL copy. **Deliberately absent:** Toast, Tooltip,
Tabs, Avatar, Modal, Accordion-as-component — nothing in the sources uses them (the FAQ accordion
lives inside the UI kit, not as a primitive).

---

## Content fundamentals

**Language.** Hebrew, RTL, everywhere except: model names (`Champion`, `Pro`, `Classic`), spec
markers (`16MM · TOURNAMENT`) and the brand line `From India with Love`. Hebrew never appears
inside a `Badge`.

**Voice — "we" to "you", plural.** The company speaks as **אנחנו** ("מייבאים", "שולחים",
"מתאימים") and addresses the customer as **plural you** — "בחרו את הדגם שלכם", "הוסיפו לסל",
"לפני שמזמינים". Never the singular imperative (בחר), never third person.

**Register.** Warm, plain, slightly dry. Concrete over promotional: the value proposition is a
scene, not an adjective — "המשחק שמחזיק שולחן שלם", "ואף אחד לא מסתכל בטלפון",
"עשרים דקות לסבב". Numbers instead of claims: "3 ימי עסקים", "19 דיסקיות", "אחריות שנתיים".

**Length.** Headlines ≤ 5 Hebrew words. Body paragraphs 2–3 lines, max ~48 characters wide.
Eyebrow labels ≤ 4 words. Button labels 2–3 words, verb-first.

**Casing & punctuation.** Latin micro-copy is UPPERCASE with 0.18em tracking. Hebrew is sentence
case (Hebrew has no case). Use Hebrew geresh/gershayim — `אחריות שנתיים`, `ס״מ`, `מ״מ`, `סה״כ`,
`נועה ל׳` — not straight quotes. Prices: `₪990`, symbol first, no space, no agorot.

**Do / don't.**
- ✅ "מייבאים קרום בורד מהודו, מתאימים אותו לבית הישראלי, ושולחים עד הדלת."
- ❌ "חווית המשחק האולטימטיבית לכל המשפחה!" — no exclamation marks, no superlatives, no
  "מהפכני / חדשני / הטוב בעולם".
- ✅ "הלוח לא צריך חדר משחקים. הוא צריך שולחן וארבעה כיסאות."
- ❌ Emoji. **Emoji are never used** — not in copy, not in UI, not as icons.

---

## Visual foundations

**The idea.** A dark, warm, editorial frame around real wood. The inspiration sites gave the
structure (full-bleed photography, centred display serif, uppercase labels flanking a heading,
taupe bands between dark ones); the boards and the logo gave the colour (navy, blue, maple, clay).
Nothing is bright, nothing is neon, nothing is gradient-purple.

**Colour.** Navy `--navy-800 #002050` is the authority colour (logo, footer-adjacent headings,
secondary CTAs). Blue `--blue-500 #3E90BF` is the *action* colour — buttons, prices, active
underlines, the selection ring — and is used sparingly enough that it always reads as "click me".
Clay `--clay-500 #E0472A` (the queen disc) is an accent for flags and required marks only, never
a surface. Maple/wood tokens come straight from the board photography and are used for plinths and
product backgrounds. Neutrals are the editorial stack: `--ink-900 #100E0C` for dark bands,
`--taupe-300 #B4AEA0` for the mid band, `--sand-50 #F7F2E8` for the page. **Max two background
colours per view** plus imagery.

**Type.** Two families. Display: **Frank Ruhl Libre**, weight 300–400, tracking −1.5%,
line-height 0.98 for the big sizes — the Hebrew analogue of the inspiration's high-contrast serif.
Body/UI: **Assistant** 400/600, line-height 1.62. Micro-labels: Assistant 600, 12px, uppercase,
0.18em tracking. Prices and quantities are Assistant 700, forced LTR. Never a third family.

**Backgrounds.** Full-bleed photography for hero and story bands, always with the standard scrim
(`--overlay-scrim`: dark top, light middle, dark bottom) so centred display type sits in the clear
band. Flat colour bands otherwise. **No gradients as decoration** — the only gradients in the
system are the photographic scrims, the bottom protection gradient, and `--gradient-wood` on
product plinths. No repeating patterns, no paper textures, no hand-drawn illustration, no
decorative SVG.

**Imagery.** Warm tungsten light, real wood grain, shallow depth, people mid-game, slight grain
from the source photos left intact. Never studio-white product cutouts, never cool/blue grading,
never black and white. Board shots are top-down on dark wood at 3:4; lifestyle shots are 1:1 or
4:5 in the bands. Photography in editorial bands is **flush — square corners, zero gap**; imagery
inside a card takes `--r-md` (14px).

**Corner radii.** Controls are pills (`--r-pill`). Cards are 20px (`--r-lg`). Images inside cards
14px. Inputs are 8px (`--r-sm`) — forms are the one place with soft-square corners. Band imagery
and the review capsule's outer shape are 0 and 8px respectively. Radius **never changes on
interaction**.

**Cards.** White (or sand-100 when sitting on white), 1px hairline border
`rgba(16,14,12,.12)`, and one soft downward shadow `--shadow-card` = `0 10px 30px -12px rgba(16,14,12,.22)`.
No coloured left-border accents, no double borders, no glow. A featured card gets
`--shadow-lift` (navy-tinted) plus a 2px blue ring — that ring is the *only* coloured outline in
the system.

**Shadows.** Downward and soft only, six steps xs→lift. Inner shadow exists once —
`--shadow-inset-board` — for the recessed playing-surface effect. No coloured shadows except
`--shadow-lift`. Focus is a 3px 42%-opacity blue ring (`--ring-focus`), never an outline.

**Borders.** Hairlines carry structure: spec rows, FAQ rows, footer legal row, nav underline are
all 1px at 12% ink (18% sand on dark). Nothing in the system uses a 2px+ border except the
featured selection ring.

**Transparency & blur.** Exactly two uses: the sticky header over hero photography
(`rgba(16,14,12,.78)` + 14px backdrop blur) and `Badge tone="onImage"` (55% ink + 6px blur).
Everything else is opaque. Text over photography is protected by a scrim or a protection
gradient — **never** by lowering text opacity.

**Motion.** Fast and small. 220ms `cubic-bezier(.2,.6,.2,1)` is the default; 120ms for colour
changes, 420ms for image scale, 720ms reserved for scroll reveals. Hover on a card =
`translateY(-4px)` + shadow step up; hover on an image = `scale(1.035–1.04)`; hover on a button =
darker background (never lighter, never opacity). Press = `scale(.975)`. No bounce, no spring,
no parallax, no autoplay carousels, no entrance animation on text.

**Layout.** 1360px max container, gutter `clamp(20px,5vw,64px)`, section rhythm
`clamp(64px,9vw,136px)`, grid gap `clamp(16px,2vw,28px)`. Three-column grids for models and
tiles; two-column 1.3/0.7 for cart and checkout. One fixed element only: the 78px sticky header
(z-index 40). The toast pill is fixed bottom-start (z-index 60). Copy columns cap at ~48ch.

---

## Iconography

**There is no icon set.** The sources contain no icon font, no SVG sprite, no PNG icon set — the
client's own product mock and both inspiration screens use plain type for every affordance. This
system follows that literally:

- The header cart is a **labelled button** ("סל (2)"), not a glyph.
- The FAQ toggle is a typographic **`+`** that rotates 45° to close.
- Back navigation is a typographic **`←`**; the quantity stepper uses **`−` / `+`** (U+2212 minus,
  not a hyphen).
- Ratings use the **`★`** character in `--amber-500`, matching the inspiration's star row.
- Required fields are marked with a clay-coloured **`*`**.
- **No emoji, ever.** No hand-rolled SVG icons were drawn for this system.

**If icons become necessary** (e.g. a real cart or account surface): use **Lucide** from CDN at
1.5px stroke, 20px, `currentColor` — it matches the geometric, slightly rounded feel of the
wordmark. Treat that as a **substitution to confirm with the client**, and add the chosen set to
`assets/` rather than linking a CDN in production.

**Logo.** Only raster files were supplied (JPEG). `assets/logo-wordmark.png`,
`assets/logo-wordmark-light.png` and `assets/logo-mark.png` are background-knockout PNGs derived
programmatically from those files — the mark itself has not been redrawn or reconstructed.
**A vector master (SVG/AI) is still needed.** `Logo` falls back to type-set CARROM / ISRAEL when
no file is passed.

---

## Fonts — substitution flag

No font binaries were supplied. Both families are **Google Fonts substitutions**, loaded from the
Google CDN in `tokens/fonts.css`:

| Role | Chosen | Why |
|---|---|---|
| Display | **Frank Ruhl Libre** 300–400 | high-contrast Hebrew serif, the closest Hebrew equivalent to the inspiration's Latin display serif; covers Latin too |
| Body / UI | **Assistant** 400–700 | neutral Hebrew grotesque, the tone of the logo's letterforms |
| Latin display alt | **Cormorant Garamond** | for Latin-only display lines where more contrast is wanted |

**Please confirm or replace these**, and send licensed binaries if the brand has real fonts — we
will drop them into `assets/fonts/` and swap the CDN import for local `@font-face` rules.
