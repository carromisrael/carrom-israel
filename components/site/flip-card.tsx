"use client";

import { useRef, useState, type MouseEvent, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type FlipCardSpec = {
  label: string;
  value: string;
};

export type FlipCardProps = {
  name: string;
  kicker: string;
  priceLabel: string;
  image: string;
  imageAlt: string;
  imageRotate?: boolean;
  blurb: string;
  specs: FlipCardSpec[];
  href: string;
  backClassName: string;
  featured?: boolean;
};

export function FlipCard({
  name,
  kicker,
  priceLabel,
  image,
  imageAlt,
  imageRotate,
  blurb,
  specs,
  href,
  backClassName,
  featured,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const pointerType = useRef<"mouse" | "touch" | "pen" | "">("");

  function handlePointerDown(event: PointerEvent) {
    pointerType.current =
      event.pointerType === "touch" || event.pointerType === "pen"
        ? event.pointerType
        : "mouse";
  }

  function handleFrontClick(event: MouseEvent) {
    // Mouse users get CSS :hover. Touch/pen and keyboard need a toggle.
    if (pointerType.current === "mouse" && event.detail > 0) return;
    setFlipped((value) => !value);
  }

  return (
    <div
      className="flip-card relative"
      data-flipped={flipped ? "true" : undefined}
    >
      {featured && (
        <span className="pointer-events-none absolute -top-3 start-1/2 z-10 -translate-x-1/2 rounded-full bg-brand-gold px-4 py-1.5 font-ui text-xs font-bold tracking-[0.04em] text-ink-900 shadow-card">
          הכי נמכר
        </span>
      )}
      <div
        className={cn(
          "flip-inner rounded-2xl",
          featured && "ring-2 ring-brand-gold/70 ring-offset-2 ring-offset-maple-400",
        )}
      >
        <button
          type="button"
          className="flip-face wood-grain flex cursor-pointer flex-col overflow-hidden rounded-2xl border-[3px] border-wood-800 p-0 text-start shadow-card"
          aria-expanded={flipped}
          aria-label={`${name}: ${flipped ? "הסתר פרטים" : "הצג פרטים"}`}
          onPointerDown={handlePointerDown}
          onClick={handleFrontClick}
        >
          <div className="h-[340px] w-full shrink-0 p-4 pb-3">
            <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]">
              <div className={cn("absolute inset-0", imageRotate && "rotate-180")}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-wood-800/90 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/20 to-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-6 py-[22px]">
            <span className="font-ui text-xs font-semibold tracking-[0.18em] text-sand-50/60 uppercase">
              {kicker}
            </span>
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-display text-[30px] text-sand-50">
                {name}
              </span>
              <span
                dir="ltr"
                className="font-ui text-[26px] font-bold text-brand-gold"
              >
                {priceLabel}
              </span>
            </div>
            <span className="font-ui text-[13px] text-sand-50/55">
              <span className="md:hidden">לחצו לפרטים</span>
              <span className="hidden md:inline">עברו עם העכבר לפרטים</span>
            </span>
          </div>
        </button>

        <div
          className={cn(
            "flip-face flip-back flex flex-col gap-[18px] overflow-hidden rounded-2xl border border-border-hairline p-[clamp(24px,3vw,34px)] text-[#E8E1D5] shadow-card",
            backClassName,
          )}
          onPointerDown={handlePointerDown}
          onClick={handleFrontClick}
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-ui text-xs font-semibold tracking-[0.18em] text-sand-50/60 uppercase">
              {kicker}
            </span>
            <span className="font-display text-[34px] text-sand-50">{name}</span>
          </div>
          <p className="m-0 font-body text-[17px] leading-[1.62] text-sand-50/80">
            {blurb}
          </p>
          <div className="mt-auto flex flex-col gap-2.5">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-3 border-b border-sand-50/20 pb-2 font-ui text-sm"
              >
                <span className="text-sand-50/60">{spec.label}</span>
                <span className="text-sand-50">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between gap-4">
            <span
              dir="ltr"
              className="font-ui text-2xl font-bold text-brand-gold"
            >
              {priceLabel}
            </span>
            <Link
              href={href}
              className="inline-flex min-h-11 items-center font-ui text-[15px] font-semibold text-sand-50 border-b border-current pb-0.5"
              onClick={(event) => event.stopPropagation()}
            >
              הוסיפו לסל ←
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
