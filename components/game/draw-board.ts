import {
  BASELINE_X0,
  BASELINE_X1,
  BASELINE_Y,
  COIN_R,
  POCKET_R,
  STRIKER_R,
  type Piece,
} from "@/lib/carrom";

const NAVY = "#0b2c5e";
const NAVY_DEEP = "#001b3f";
const NAVY_LINE = "#1b4e93";
const MAPLE = "#ebd3a8";
const MAPLE_LIGHT = "#f4e4c4";
const GOLD = "#d79a3c";
const GREEN = "#2c6b4f";
const WHITE = "#fbf3e4";
const BLACK = "#1c1815";
const QUEEN = "#b3341c";
const WOOD = "#4a331d";

export function drawCarromBoard(
  ctx: CanvasRenderingContext2D,
  size: number,
  pieces: Piece[],
  strikerX: number,
) {
  const frame = size * 0.092;
  const inner = size - frame * 2;

  ctx.clearRect(0, 0, size, size);
  drawFrame(ctx, size, frame);
  drawSurface(ctx, frame, inner);
  drawMarkings(ctx, frame, inner);
  drawPockets(ctx, frame, inner);

  for (const piece of pieces) {
    drawCoin(ctx, frame + piece.x * inner, frame + piece.y * inner, COIN_R * inner, piece.kind);
  }

  drawStriker(
    ctx,
    frame + strikerX * inner,
    frame + BASELINE_Y * inner,
    STRIKER_R * inner,
  );
}

function drawFrame(ctx: CanvasRenderingContext2D, size: number, frame: number) {
  ctx.save();
  roundRect(ctx, 0, 0, size, size, size * 0.018);
  ctx.fillStyle = NAVY_DEEP;
  ctx.fill();

  const grain = ctx.createLinearGradient(0, 0, size, size);
  grain.addColorStop(0, "rgba(255,255,255,0.08)");
  grain.addColorStop(0.5, "rgba(0,0,0,0)");
  grain.addColorStop(1, "rgba(0,0,0,0.25)");
  ctx.fillStyle = grain;
  ctx.fill();

  for (let i = 0; i < 18; i++) {
    ctx.strokeStyle = `rgba(255,255,255,${0.025 + (i % 3) * 0.01})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(size * 0.02, (size / 18) * i);
    ctx.lineTo(size, (size / 18) * i + size * 0.04);
    ctx.stroke();
  }

  ctx.strokeStyle = GOLD;
  ctx.lineWidth = Math.max(2, size * 0.007);
  ctx.strokeRect(frame * 0.42, frame * 0.42, size - frame * 0.84, size - frame * 0.84);

  ctx.strokeStyle = "rgba(215,154,60,0.45)";
  ctx.lineWidth = 1;
  ctx.strokeRect(frame - 3, frame - 3, size - frame * 2 + 6, size - frame * 2 + 6);
  ctx.restore();
}

function drawSurface(ctx: CanvasRenderingContext2D, frame: number, inner: number) {
  ctx.save();
  ctx.fillStyle = MAPLE;
  ctx.fillRect(frame, frame, inner, inner);

  const wash = ctx.createRadialGradient(
    frame + inner * 0.42,
    frame + inner * 0.38,
    inner * 0.1,
    frame + inner * 0.5,
    frame + inner * 0.5,
    inner * 0.75,
  );
  wash.addColorStop(0, MAPLE_LIGHT);
  wash.addColorStop(1, "#dcbb86");
  ctx.fillStyle = wash;
  ctx.fillRect(frame, frame, inner, inner);
  ctx.restore();
}

function drawMarkings(ctx: CanvasRenderingContext2D, frame: number, inner: number) {
  const cx = frame + inner / 2;
  const cy = frame + inner / 2;

  ctx.save();
  ctx.strokeStyle = NAVY_LINE;
  ctx.lineWidth = Math.max(1.2, inner * 0.0045);

  ctx.beginPath();
  ctx.arc(cx, cy, inner * 0.168, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, inner * 0.118, 0, Math.PI * 2);
  ctx.stroke();

  drawStarOfDavid(ctx, cx, cy, inner * 0.078);

  const cornerR = inner * 0.055;
  const inset = inner * 0.155;
  for (const [dx, dy] of [
    [inset, inset],
    [inner - inset, inset],
    [inset, inner - inset],
    [inner - inset, inner - inset],
  ] as const) {
    ctx.beginPath();
    ctx.arc(frame + dx, frame + dy, cornerR, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawBaselines(ctx, frame, inner);
  ctx.restore();
}

function drawStarOfDavid(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
) {
  ctx.save();
  ctx.strokeStyle = NAVY;
  ctx.lineWidth = Math.max(1.5, r * 0.08);
  for (const rot of [-Math.PI / 2, Math.PI / 6]) {
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const a = rot + (i * 2 * Math.PI) / 3;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
}

function drawBaselines(ctx: CanvasRenderingContext2D, frame: number, inner: number) {
  const x0 = frame + BASELINE_X0 * inner;
  const x1 = frame + BASELINE_X1 * inner;
  const yBottom = frame + BASELINE_Y * inner;
  const yTop = frame + (1 - BASELINE_Y) * inner;
  const gap = inner * 0.018;

  ctx.strokeStyle = NAVY_LINE;
  ctx.lineWidth = Math.max(1.2, inner * 0.004);

  for (const y of [yBottom, yBottom - gap, yTop, yTop + gap]) {
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.stroke();
  }

  const y0 = frame + BASELINE_X0 * inner;
  const y1 = frame + BASELINE_X1 * inner;
  const xLeft = frame + (1 - BASELINE_Y) * inner;
  const xRight = frame + BASELINE_Y * inner;

  for (const x of [xLeft, xLeft + gap, xRight, xRight - gap]) {
    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.lineTo(x, y1);
    ctx.stroke();
  }

  drawArrow(ctx, x0 + inner * 0.02, yBottom - gap / 2, 1);
  drawArrow(ctx, x1 - inner * 0.02, yBottom - gap / 2, -1);
  drawArrow(ctx, x0 + inner * 0.02, yTop + gap / 2, 1);
  drawArrow(ctx, x1 - inner * 0.02, yTop + gap / 2, -1);
}

function drawArrow(ctx: CanvasRenderingContext2D, x: number, y: number, dir: 1 | -1) {
  const s = 7;
  ctx.fillStyle = NAVY_LINE;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - dir * s, y - s * 0.55);
  ctx.lineTo(x - dir * s, y + s * 0.55);
  ctx.closePath();
  ctx.fill();
}

function drawPockets(ctx: CanvasRenderingContext2D, frame: number, inner: number) {
  const r = POCKET_R * inner;
  const positions = [
    [frame, frame],
    [frame + inner, frame],
    [frame, frame + inner],
    [frame + inner, frame + inner],
  ] as const;

  for (const [x, y] of positions) {
    ctx.beginPath();
    ctx.arc(x, y, r * 1.18, 0, Math.PI * 2);
    ctx.fillStyle = GREEN;
    ctx.fill();

    const hole = ctx.createRadialGradient(x - r * 0.2, y - r * 0.2, r * 0.1, x, y, r);
    hole.addColorStop(0, "#1a3d30");
    hole.addColorStop(1, "#06110c");
    ctx.beginPath();
    ctx.arc(x, y, r * 0.86, 0, Math.PI * 2);
    ctx.fillStyle = hole;
    ctx.fill();
  }
}

function drawCoin(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  kind: Piece["kind"],
) {
  const fill = kind === "queen" ? QUEEN : kind === "white" ? WHITE : BLACK;
  const rim = kind === "queen" ? GOLD : kind === "white" ? "#cfc8ba" : "#100e0c";

  ctx.save();
  ctx.shadowColor = "rgba(16,14,12,0.4)";
  ctx.shadowBlur = r * 0.45;
  ctx.shadowOffsetY = r * 0.22;

  const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.1, x, y, r);
  g.addColorStop(0, kind === "black" ? "#413931" : kind === "queen" ? "#eb6c50" : "#ffffff");
  g.addColorStop(1, fill);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = rim;
  ctx.lineWidth = Math.max(1, r * 0.12);
  ctx.stroke();

  if (kind === "queen") {
    ctx.beginPath();
    ctx.arc(x, y, r * 0.55, 0, Math.PI * 2);
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = Math.max(1, r * 0.1);
    ctx.stroke();
  }
}

function drawStriker(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.save();
  ctx.shadowColor = "rgba(16,14,12,0.45)";
  ctx.shadowBlur = r * 0.5;
  ctx.shadowOffsetY = r * 0.25;

  const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.15, x, y, r);
  g.addColorStop(0, "#8a6238");
  g.addColorStop(1, WOOD);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = GOLD;
  ctx.lineWidth = Math.max(1.5, r * 0.12);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, r * 0.62, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(215,154,60,0.7)";
  ctx.lineWidth = 1;
  ctx.stroke();

  drawStar(ctx, x, y, r * 0.42, GOLD);
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  color: string,
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 4;
    const rad = i % 2 === 0 ? r : r * 0.42;
    const x = cx + rad * Math.cos(a);
    const y = cy + rad * Math.sin(a);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}
