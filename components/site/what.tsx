"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeftIcon, HandIcon, TargetIcon, UsersIcon } from "lucide-react";

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

const BOARD_VIDEO = "/assets/WhatsApp%20Video%202026-08-12%20at%2020.41.56.mp4";

function WhatBenefits() {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-0 p-0 md:grid-cols-3 md:items-center">
      {WHAT_CONTENT.benefits.map(({ icon: Icon, title, body }, i) => (
        <li
          key={title}
          className={cn(
            "flex items-center gap-3 py-3 md:px-6 md:py-0",
            i === 0 && "md:ps-0",
            i === WHAT_CONTENT.benefits.length - 1 && "md:pe-0",
            i > 0 &&
              "border-t border-[color:var(--carrom-gold-muted)]/35 md:border-t-0 md:border-s",
          )}
        >
          <Icon
            aria-hidden
            className="size-8 shrink-0 text-[var(--carrom-gold-muted)] md:size-9"
            strokeWidth={1.15}
          />
          <div className="flex min-w-0 flex-col gap-0.5">
            <h3 className="m-0 font-body text-[15px] leading-snug font-bold text-[var(--carrom-text)] md:text-[16px]">
              {title}
            </h3>
            <p className="m-0 font-body text-[13px] leading-snug text-[var(--carrom-muted)]">
              {body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function GuideLink({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <Link
      href={href}
      className="carrom-focus inline-flex min-h-11 w-fit items-center gap-1.5 self-end font-ui text-[17px] font-bold text-[var(--carrom-gold-muted)] transition-colors hover:text-[var(--carrom-gold)]"
    >
      {WHAT_CONTENT.guideLabel}
      <ArrowLeftIcon aria-hidden className="size-4 shrink-0" />
    </Link>
  );
}

function WhatVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="mx-auto mt-6 w-full max-w-[44rem] overflow-hidden rounded-2xl border border-[var(--carrom-gold-muted)]/20 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.65)] md:mt-8">
      <video
        ref={videoRef}
        className="block aspect-video w-full bg-ink-900 object-cover object-[center_38%]"
        src={BOARD_VIDEO}
        poster="/assets/board-setup.jpeg"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label="הדגמה של לוח קארום אמיתי"
      />
    </div>
  );
}

type WhatSectionProps = {
  /** Guide target. The link stays hidden until a real href is passed. */
  guideHref?: string;
};

/** "What is Carrom?" — full-width petrol band, real board video, three benefits. */
export function WhatSection({ guideHref }: WhatSectionProps) {
  return (
    <section
      id="what"
      className="what-petrol scroll-mt-[var(--nav-h)] py-10 md:py-14"
      aria-labelledby="what-title"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center px-[var(--gutter)] text-center">
        <h2
          id="what-title"
          className="m-0 max-w-[18ch] font-body text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.12] font-extrabold tracking-[-0.02em] text-[var(--carrom-text)]"
        >
          {WHAT_CONTENT.title}
        </h2>
        <p className="m-0 mt-3 max-w-[40rem] font-body text-[clamp(15px,1.4vw,18px)] leading-[1.5] font-semibold text-[var(--carrom-text)]">
          {WHAT_CONTENT.lede}
        </p>
        <p className="m-0 mt-2 max-w-[44rem] font-body text-[clamp(13px,1.1vw,15px)] leading-[1.6] text-[var(--carrom-muted)]">
          {WHAT_CONTENT.body}
        </p>

        <WhatVideo />

        <div className="mt-6 flex w-full flex-col gap-2 md:mt-8">
          <WhatBenefits />
          <GuideLink href={guideHref} />
        </div>
      </div>
    </section>
  );
}
