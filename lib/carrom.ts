export type PieceKind = "white" | "black" | "queen";

export type Piece = {
  id: string;
  kind: PieceKind;
  x: number;
  y: number;
};

/** Radii as a fraction of the inner playing surface. */
export const COIN_R = 0.0216;
export const STRIKER_R = 0.0285;
export const POCKET_R = 0.048;

/** Bottom baseline (player side) in unit space, y grows downward. */
export const BASELINE_Y = 0.885;
export const BASELINE_X0 = 0.22;
export const BASELINE_X1 = 0.78;

export function strikerXFromSlider(slider: number) {
  return BASELINE_X0 + (BASELINE_X1 - BASELINE_X0) * slider;
}

/** Official 19-coin opening: queen in the centre, two hexagonal rings. */
export function openingPieces(): Piece[] {
  const pieces: Piece[] = [{ id: "queen", kind: "queen", x: 0.5, y: 0.5 }];
  let n = 0;

  for (let ring = 1; ring <= 2; ring++) {
    const count = ring * 6;
    const dist = ring * 2 * COIN_R * 1.02;
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / count;
      const kind: PieceKind = (ring + i) % 2 === 0 ? "white" : "black";
      pieces.push({
        id: `${kind}-${n++}`,
        kind,
        x: 0.5 + dist * Math.cos(angle),
        y: 0.5 + dist * Math.sin(angle),
      });
    }
  }

  return pieces;
}
