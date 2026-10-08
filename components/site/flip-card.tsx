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
  blurb: string;
  specs: FlipCardSpec[];
  href: string;
  backClassName: string;
};

export function FlipCard({
  name,
  kicker,
  priceLabel,
  image,
  imageAlt,
  blurb,
  specs,
  href,
  backClassName,
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
      <div className="flip-inner rounded-2xl">
        <button
          type="button"
          className="group flip-face wood-grain flex cursor-pointer flex-col overflow-hidden rounded-2xl border-[3px] border-wood-800 p-0 text-start shadow-card"
          aria-expanded={flipped}
          aria-label={`${name}: ${flipped ? "הסתר פרטים" : "הצג פרטים"}`}
          onPointerDown={handlePointerDown}
          onClick={handleFrontClick}
        >
          <div className="w-full shrink-0 p-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-ink-900 ring-1 ring-black/30">
              {/* Source photos are portrait (569×759) with the board sitting slightly above centre. */}
              <Image
                src={image}
                alt={imageAlt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 420px, 100vw"
                className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 px-6 pt-3 pb-6">
            <span className="font-ui text-[13px] font-semibold tracking-[0.04em] text-sand-50/65">
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
            <span className="mt-auto pt-1 font-ui text-[13px] text-sand-50/55">
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
            <span className="font-ui text-[13px] font-semibold tracking-[0.04em] text-sand-50/65">
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
