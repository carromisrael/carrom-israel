"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowLeftIcon,
  MedalIcon,
  TreeDeciduousIcon,
  TrophyIcon,
  TruckIcon,
} from "lucide-react";

const ACCENTS = [
  { id: "gold", label: "זהב" },
  { id: "mixed", label: "מעורב" },
  { id: "blue", label: "כחול" },
] as const;

export type CarromAccent = (typeof ACCENTS)[number]["id"];

const BOARD_WIDTH = 1536;
const BOARD_HEIGHT = 1024;

/** A few flying pieces — left of the board only. */
const FLOATERS = [
  {
    src: "/assets/disc-red.png",
    alt: "",
    x: "1%",
    y: "6%",
    size: 88,
    rotate: -16,
    blur: 0.2,
    delay: "0s",
    z: 2,
  },
  {
    src: "/assets/disc-black.png",
    alt: "",
    x: "0%",
    y: "42%",
    size: 76,
    rotate: 12,
    blur: 0.3,
    delay: "0.35s",
    z: 3,
  },
  {
    src: "/assets/disc-natural.png",
    alt: "",
    x: "9%",
    y: "76%",
    size: 62,
    rotate: 20,
    blur: 0.55,
    delay: "0.7s",
    z: 2,
  },
] as const;

const TRUST = [
  { icon: TruckIcon, label: "משלוח מהיר חינם" },
  { icon: TreeDeciduousIcon, label: "עץ פרימיום מלא" },
  { icon: MedalIcon, label: "תקן רשמי" },
] as const;

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
      <div className="carrom-hero-atmosphere" aria-hidden>
        <div className="carrom-hero-halo" />
        <div className="carrom-hero-floor" />
      </div>

      <div className="carrom-hero-inner">
        <div className="carrom-hero-layout">
          <div className="carrom-hero-copy">
            <p className="carrom-hero-badge">
              <TrophyIcon aria-hidden className="size-4 shrink-0" strokeWidth={1.5} />
              <span>מותג הקארום המוביל בישראל</span>
            </p>
            <h1 id="carrom-hero-title" className="carrom-hero-heading">
              <span className="carrom-hero-heading-line">פחות מסכים.</span>
              <span className="carrom-hero-heading-line carrom-hero-heading-accent">
                יותר חברים.
              </span>
            </h1>
            <p className="carrom-hero-description">
              הכירו את קארום — משחק הלוח הבינלאומי שכבש את העולם. קולעים דיסקיות לפינות
              בעזרת האצבע, ומתחרים עם חברים ומשפחה. הלוחות המקצועיים ביותר.
            </p>
            <a className="carrom-hero-cta" href="#models">
              למציאת הלוח שלכם
              <ArrowLeftIcon aria-hidden className="size-5 shrink-0" />
            </a>
            <ul className="carrom-hero-trust">
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon aria-hidden className="size-[1.15rem] shrink-0" strokeWidth={1.5} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="carrom-hero-art">
            <div className="carrom-hero-floaters" aria-hidden>
              {FLOATERS.map((piece) => (
                <span
                  key={piece.src}
                  className="carrom-floater"
                  style={
                    {
                      left: piece.x,
                      top: piece.y,
                      width: piece.size,
                      height: piece.size,
                      zIndex: piece.z,
                      filter:
                        piece.src.includes("black")
                          ? `blur(${piece.blur}px) drop-shadow(0 12px 16px rgba(0,0,0,0.55)) drop-shadow(0 0 10px rgba(228,182,106,0.22))`
                          : `blur(${piece.blur}px) drop-shadow(0 14px 18px rgba(0,0,0,0.45))`,
                      animationDelay: piece.delay,
                      "--floater-rotate": `${piece.rotate}deg`,
                    } as CSSProperties
                  }
                >
                  <Image
                    src={piece.src}
                    alt=""
                    width={280}
                    height={280}
                    sizes="160px"
                    className="carrom-floater-img"
                    draggable={false}
                  />
                </span>
              ))}
            </div>
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
