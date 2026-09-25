"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";

const ACCENTS = [
  { id: "gold", label: "זהב" },
  { id: "mixed", label: "מעורב" },
  { id: "blue", label: "כחול" },
] as const;

export type CarromAccent = (typeof ACCENTS)[number]["id"];

const BOARD_WIDTH = 1536;
const BOARD_HEIGHT = 1024;

type HeroProps = {
  /** Gold is the public baseline. Mixed and blue are development comparisons. */
  accent?: CarromAccent;
  /** Swap the development illustration without changing layout. */
  boardSrc?: string;
};

export function Hero({
  accent = "gold",
  boardSrc = "/assets/champion-hero.webp",
}: HeroProps) {
  const isDev = process.env.NODE_ENV === "development";
  const [previewAccent, setPreviewAccent] = useState<CarromAccent | null>(null);
  const active = isDev && previewAccent ? previewAccent : accent;

  return (
    <section
      id="top"
      data-accent={active}
      className="carrom-hero"
      aria-labelledby="carrom-hero-title"
    >
      <div className="carrom-hero-inner">
        <div className="carrom-hero-layout">
          <div className="carrom-hero-copy">
            <h1 id="carrom-hero-title" className="carrom-hero-heading">
              <span className="carrom-hero-heading-line">פחות מסכים.</span>
              <span className="carrom-hero-heading-line">יותר חברים.</span>
            </h1>
            <p className="carrom-hero-description">
              הכירו את קארום — קולעים דיסקיות לפינות בעזרת האצבע, ומתחרים עם חברים ומשפחה.
            </p>
            <a className="carrom-hero-cta" href="#models">
              למציאת הלוח שלכם
              <ArrowLeftIcon aria-hidden className="size-5 shrink-0" />
            </a>
          </div>
          <div className="carrom-hero-art">
            <Image
              className="carrom-hero-board"
              src={boardSrc}
              alt="לוח קארום Champion מעץ עם דיסקיות משחק"
              width={BOARD_WIDTH}
              height={BOARD_HEIGHT}
              preload
              sizes="(max-width: 899px) 100vw, 64vw"
              style={{ width: "auto", maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div id="hero-sentinel" aria-hidden className="absolute inset-x-0 bottom-0 h-px" />
      {isDev ? (
        <fieldset className="carrom-accent-preview">
          <legend>תצוגת פיתוח</legend>
          {ACCENTS.map((item) => (
            <label key={item.id}>
              <input
                type="radio"
                name="carrom-accent"
                value={item.id}
                checked={active === item.id}
                onChange={() => setPreviewAccent(item.id)}
              />
              {item.label}
            </label>
          ))}
        </fieldset>
      ) : null}
    </section>
  );
}
