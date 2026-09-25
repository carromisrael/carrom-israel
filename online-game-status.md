# Online Carrom Game — Status

> Paused 2026-08-30. Resume from **Next step** below.
> Playable URL: `/online` (nav label **אונליין**).
> This is a local POC. No sign-in, no multiplayer, no backend.

---

## Current state

**Shell only.** The page looks like a match and the striker can be **positioned**. You **cannot shoot**. Coins do not move. Scores stay at 0. The computer does not take a turn.

What works today:

- Nav tab **אונליין** (desktop + mobile drawer) → `/online`
- HUD: **אתה** (white, red avatar) vs **מחשב** (black, blue avatar)
- Canvas board: maple surface, navy frame, gold inlay, Star of David, 19 opening coins, queen, pockets
- Bottom slider moves the striker along the player baseline
- Pause overlay (honest POC copy)
- Layout fills `100dvh` minus site header; game chrome is `dir="ltr"` so physics coords stay left/right later; rest of site stays Hebrew RTL

What does **not** work:

- Aim / pull-back / release
- Physics (collisions, friction, pockets)
- Scoring
- Computer turn
- Sign-in, accounts, real online opponents

---

## Files

| File | Role |
|---|---|
| `app/online/page.tsx` | Route + metadata. Server Component. Renders `SiteHeader` + `CarromShell`. No WhatsApp float, no footer. |
| `components/game/carrom-shell.tsx` | Client HUD: trophy, players, badge, pause, slider, layout. Slider state is `striker` `0–1`. Scores hardcoded `0`. |
| `components/game/carrom-board.tsx` | Client canvas. Redraws on resize + slider change. Pieces are a **static** `openingPieces()` snapshot. |
| `components/game/draw-board.ts` | Canvas paint only (frame, markings, coins, striker). No physics. |
| `lib/carrom.ts` | Unit-space geometry (`0–1` inner board): coin/striker/pocket radii, baseline, opening layout, `strikerXFromSlider`. |
| `lib/nav.ts` | Shared `NAV_LINKS` including `{ href: "/online", label: "אונליין" }`. |
| `components/site/header.tsx` | Uses `NAV_LINKS`. |
| `components/site/desktop-nav.tsx` | Client nav; gold underline when `pathname === "/online"`. |
| `components/site/mobile-nav.tsx` | Same active state in the drawer. |

Brand: Carrom Israel (navy / maple / gold / clay), **not** a clone of the Delhi Lounge reference. Reference was layout + controls only.

---

## Decisions already made

1. **Tab name:** אונליין
2. **Opponent:** computer (`מחשב`), not practice-only and not real multiplayer
3. **Engine (not installed yet):** Matter.js + existing HTML canvas. Phaser was rejected as too heavy for a page embed.
4. **Coords:** unit space on the inner playing surface; `y` grows downward; player baseline is the **bottom** (`BASELINE_Y = 0.885`). Slider is LTR (`0` = left).
5. **You = white, computer = black.** Opening pack: queen center, two hexagonal rings (6 + 12).
6. **No auth** until later.

`matter-js` is **not** in `package.json` yet.

---

## Next step (when resuming)

**Shooting + physics + a simple computer turn.**

Intended control (matches the reference game):

1. Slide the bar to place the striker on the baseline.
2. Press/drag **backward** on the striker on the board → aim + power.
3. Release → flick. Wait until everything stops.
4. Pocketed coins update **אתה** / **מחשב**. Then the computer shoots from the opposite baseline.

Implementation sketch:

- `npm install matter-js` (+ types if needed)
- Keep drawing in `draw-board.ts`; drive positions from Matter bodies each frame instead of the static `PIECES` constant
- Pocket = sensor circle at each corner; on collision remove the coin and add score
- Disable the slider while a shot is in flight
- Computer: pick a striker X + a crude aim at the cluster; no fancy AI
- Skip full tournament rules for this POC (queen cover, all foul types). Simple “pocket your color” is enough.

Do **not** start sign-in or real multiplayer in that step.

---

## How to run

```bash
npm run dev
```

Open http://localhost:3000/online

---

## Out of scope (later)

- Login / profiles
- Live opponents
- Leaderboards / trophy meaning
- Full ICF rules
- Sound
- Stakes / coins (the “50” in the reference screenshot)
