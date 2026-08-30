"use client";

import { useEffect, useRef } from "react";

import { drawCarromBoard } from "@/components/game/draw-board";
import { openingPieces, strikerXFromSlider } from "@/lib/carrom";

const PIECES = openingPieces();

export function CarromBoard({ strikerSlider }: { strikerSlider: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const paint = () => {
      const rect = wrap.getBoundingClientRect();
      const css = Math.max(1, Math.floor(Math.min(rect.width, rect.height)));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(css * dpr);
      canvas.height = Math.floor(css * dpr);
      canvas.style.width = `${css}px`;
      canvas.style.height = `${css}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawCarromBoard(ctx, css, PIECES, strikerXFromSlider(strikerSlider));
    };

    const ro = new ResizeObserver(paint);
    ro.observe(wrap);
    paint();
    return () => ro.disconnect();
  }, [strikerSlider]);

  return (
    <div
      ref={wrapRef}
      className="flex min-h-0 w-full flex-1 items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="max-h-full max-w-full rounded-lg shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)]"
        aria-label="לוח קארום"
      />
    </div>
  );
}
