"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, HandIcon, PlayIcon, TargetIcon, UsersIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Benefit = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
};

const WHAT_CONTENT = {
  title: "אז מה זה קארום?",
  lede: "קארום הוא משחק לוח חברתי מהודו, שמשחקים אחד מול אחד או בזוגות.",
  body: "יושבים סביב הלוח ומשתמשים בסטרייקר — הדיסקית הגדולה — כדי להכניס את הדיסקיות לארבעת הכיסים שבפינות. הכול במכת אצבע, עם כיוון, דיוק ומחשבה על המהלך הבא.",
  benefits: [
    {
      icon: HandIcon,
      title: "קל להתחיל",
      body: "מכירים את העיקרון ומנסים את המכה הראשונה.",
    },
    {
      icon: TargetIcon,
      title: "כל מכה היא אתגר חדש",
      body: "בוחרים זווית ומדייקים את העוצמה.",
    },
    {
      icon: UsersIcon,
      title: "כולם סביב אותו לוח",
      body: "עם חברים או משפחה, עם מקום לצחוק ולסיבוב נוסף.",
    },
  ] satisfies Benefit[],
  guideLabel: "איך משחקים?",
} as const;

const BOARD_VIDEO = "/assets/carrom-video-1.mp4";

type Theme = "dark" | "light";

type Dividers = "full" | "desktop" | "none";

function WhatBenefits({
  theme,
  dividers = "full",
  layout = "grid",
}: {
  theme: Theme;
  dividers?: Dividers;
  layout?: "grid" | "list";
}) {
  const isLight = theme === "light";
  const isList = layout === "list";
  const dividerColor = isLight
    ? "border-[color:var(--color-navy-800)]/15"
    : "border-[color:var(--carrom-gold-muted)]/35";

  return (
    <ul
      className={cn(
        "m-0 grid list-none gap-0 p-0",
        isList ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3 md:items-center",
      )}
    >
      {WHAT_CONTENT.benefits.map(({ icon: Icon, title, body }, i) => (
        <li
          key={title}
          className={cn(
            "flex items-center",
            isList ? "gap-4 py-4 md:py-5" : "gap-3 py-3 md:px-6 md:py-0",
            !isList && i === 0 && "md:ps-0",
            !isList && i === WHAT_CONTENT.benefits.length - 1 && "md:pe-0",
            i > 0 &&
              dividers !== "none" &&
              cn(
                isList
                  ? "border-t"
                  : dividers === "full"
                    ? "border-t md:border-t-0 md:border-s"
                    : "md:border-s",
                dividerColor,
              ),
          )}
        >
          <Icon
            aria-hidden
            className={cn(
              "size-8 shrink-0 md:size-9",
              isLight ? "text-text-display" : "text-[var(--carrom-gold-muted)]",
            )}
            strokeWidth={1.15}
          />
          <div className="flex min-w-0 flex-col gap-1">
            <h3
              className={cn(
                "m-0 font-body text-[17px] leading-snug font-bold md:text-[18px]",
                isLight ? "text-text-display" : "text-[var(--carrom-text)]",
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "m-0 font-body text-[16px] leading-[1.6]",
                isLight ? "text-text-body" : "text-[var(--carrom-text)]/85",
              )}
            >
              {body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Stays hidden until a real guideHref is supplied — no placeholder "#" targets. */
function GuideLink({ href, theme }: { href?: string; theme: Theme }) {
  if (!href) return null;
  const isLight = theme === "light";

  return (
    <Link
      href={href}
      className={cn(
        "carrom-focus inline-flex min-h-11 w-fit items-center gap-1.5 self-start font-ui text-[17px] font-bold transition-colors",
        isLight
          ? "text-text-display hover:text-navy-900"
          : "text-[var(--carrom-gold-muted)] hover:text-[var(--carrom-gold)]",
      )}
    >
      {WHAT_CONTENT.guideLabel}
      <ArrowLeftIcon aria-hidden className="size-4 shrink-0" />
    </Link>
  );
}

function WhatVideo({
  theme,
  playOnClick = false,
  fill = false,
}: {
  theme: Theme;
  playOnClick?: boolean;
  /** Fills the height of its grid cell (matched to the text column) instead of using its own 16:9 aspect ratio. */
  fill?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (playOnClick) return;
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            video.pause();
            continue;
          }
          void video.play().catch(() => {});
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [playOnClick]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    void video.play();
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border",
        fill ? "h-full w-full" : "mx-auto mt-6 w-full max-w-[44rem] md:mt-8",
        theme === "light"
          ? "border-[color:var(--color-navy-800)]/15 shadow-card"
          : "border-[var(--carrom-gold-muted)]/20 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.65)]",
      )}
    >
      <video
        ref={videoRef}
        className={cn(
          "block h-full w-full bg-ink-900 object-cover object-[center_38%]",
          !fill && "aspect-video",
        )}
        src={BOARD_VIDEO}
        poster="/assets/carrom-video-1-poster.jpg"
        muted={!playOnClick}
        loop
        playsInline
        autoPlay={!playOnClick}
        controls={playOnClick && isPlaying}
        preload="metadata"
        aria-label="הדגמה של לוח קארום אמיתי"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {playOnClick && !isPlaying ? (
        <button
          type="button"
          onClick={handlePlayClick}
          aria-label="הפעל את הסרטון"
          className="carrom-focus absolute inset-0 flex items-center justify-center"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-black/50 text-white ring-1 ring-white/40 backdrop-blur-sm transition-transform hover:scale-105">
            <PlayIcon aria-hidden className="size-7 translate-x-[2px]" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      ) : null}
    </div>
  );
}

type WhatSectionProps = {
  /** Guide target. The link stays hidden until a real href is passed. */
  guideHref?: string;
};

/** Option A — centered: text, video, benefits all stacked on one column. */
function WhatStackLayout({ guideHref, theme }: WhatSectionProps & { theme: Theme }) {
  const isLight = theme === "light";
  return (
    <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center px-[var(--gutter)] text-center">
      <h2
        id="what-title"
        className={cn(
          "m-0 max-w-[18ch] font-body text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12] font-extrabold tracking-[-0.02em]",
          isLight ? "text-text-display" : "text-[var(--carrom-text)]",
        )}
      >
        {WHAT_CONTENT.title}
      </h2>
      <p
        className={cn(
          "m-0 mt-3 max-w-[40rem] font-body text-[clamp(15px,1.4vw,18px)] leading-[1.5] font-semibold",
          isLight ? "text-text-display" : "text-[var(--carrom-text)]",
        )}
      >
        {WHAT_CONTENT.lede}
      </p>
      <p
        className={cn(
          "m-0 mt-3 max-w-[44rem] font-body text-[clamp(16px,2.2vw,18px)] leading-[1.6]",
          isLight ? "text-text-body" : "text-[var(--carrom-text)]/85",
        )}
      >
        {WHAT_CONTENT.body}
      </p>

      <WhatVideo theme={theme} />

      <div className="mt-6 flex w-full flex-col gap-6 md:mt-8 md:gap-8">
        <WhatBenefits theme={theme} dividers="none" />
        <GuideLink href={guideHref} theme={theme} />
      </div>
    </div>
  );
}

/** Options B and C — video beside the copy; benefits sit as a divided list under the text, in
 *  the same column, not a full-width row. Grid placement (not DOM order) puts the video first
 *  on desktop, so mobile can keep its own natural order: heading → video → benefits → link.
 *  The video stretches to match the text column's height (row-span-2 + stretch alignment). */
function WhatSplitLayout({ guideHref, theme }: WhatSectionProps & { theme: Theme }) {
  const isLight = theme === "light";
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="flex flex-col text-start md:col-start-2 md:row-start-1">
          <h2
            id="what-title"
            className={cn(
              "m-0 max-w-[18ch] font-body text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.02em]",
              isLight ? "text-text-display" : "text-[var(--carrom-text)]",
            )}
          >
            {WHAT_CONTENT.title}
          </h2>
          <p
            className={cn(
              "m-0 mt-4 max-w-[34rem] font-body text-[clamp(16px,1.5vw,19px)] leading-[1.5] font-semibold",
              isLight ? "text-text-display" : "text-[var(--carrom-text)]",
            )}
          >
            {WHAT_CONTENT.lede}
          </p>
          <p
            className={cn(
              "m-0 mt-3 max-w-[34rem] font-body text-[clamp(16px,1.3vw,18px)] leading-[1.6]",
              isLight ? "text-text-body" : "text-[var(--carrom-text)]/85",
            )}
          >
            {WHAT_CONTENT.body}
          </p>
        </div>

        <div className="md:col-start-1 md:row-start-1 md:row-span-2 md:self-stretch">
          <WhatVideo theme={theme} playOnClick fill />
        </div>

        <div className="flex flex-col md:col-start-2 md:row-start-2 md:mt-2">
          <WhatBenefits theme={theme} layout="list" dividers="full" />
          <div className="mt-8">
            <GuideLink href={guideHref} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** "What is Carrom?" — full-width petrol band, real board video, three benefits.
 *  Dev-only toggles preview structure × theme combinations; pick one and delete the rest. */
const STRUCTURE_OPTIONS = [
  { value: "stack", label: "מוערם" },
  { value: "split", label: "מפוצל" },
] as const;

const THEME_OPTIONS = [
  { value: "dark", label: "כהה" },
  { value: "light", label: "בהיר" },
] as const;

type Structure = (typeof STRUCTURE_OPTIONS)[number]["value"];

export function WhatSection({ guideHref }: WhatSectionProps) {
  const isDev = process.env.NODE_ENV === "development";
  const [structure, setStructure] = useState<Structure>("stack");
  const [theme, setTheme] = useState<Theme>("light");
  const isLight = theme === "light";

  return (
    <section
      id="what"
      className={cn(
        "scroll-mt-[var(--nav-h)] py-10 md:py-14",
        isLight ? "bg-maple-400" : "what-petrol",
      )}
      aria-labelledby="what-title"
    >
      {structure === "split" ? (
        <WhatSplitLayout guideHref={guideHref} theme={theme} />
      ) : (
        <WhatStackLayout guideHref={guideHref} theme={theme} />
      )}

      {isDev ? (
        <fieldset className="fixed inset-inline-start-4 bottom-4 z-[70] m-0 flex max-w-[240px] flex-wrap gap-x-3 gap-y-2 rounded-[10px] border border-[var(--carrom-border)] bg-[var(--carrom-surface)] px-3 py-2.5 font-body text-[13px] text-[var(--carrom-text)]">
          <legend className="px-1 text-[var(--carrom-muted)]">מבנה &quot;מה זה קארום&quot;</legend>
          {STRUCTURE_OPTIONS.map(({ value, label }) => (
            <label key={value} className="inline-flex min-h-11 items-center gap-1.5">
              <input
                type="radio"
                name="what-structure"
                value={value}
                checked={structure === value}
                onChange={() => setStructure(value)}
              />
              {label}
            </label>
          ))}
          <span className="mx-1 self-stretch border-s border-[var(--carrom-border)]" aria-hidden />
          {THEME_OPTIONS.map(({ value, label }) => (
            <label key={value} className="inline-flex min-h-11 items-center gap-1.5">
              <input
                type="radio"
                name="what-theme"
                value={value}
                checked={theme === value}
                onChange={() => setTheme(value)}
              />
              {label}
            </label>
          ))}
        </fieldset>
      ) : null}
    </section>
  );
}
