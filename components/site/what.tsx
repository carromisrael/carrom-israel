import Link from "next/link";
import {
  Backpack,
  HeartHandshake,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { CarromClip } from "@/components/site/carrom-clip";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "2–4", label: "שחקנים" },
  { value: "19", label: "דיסקיות" },
  { value: "20", label: "דקות לסבב" },
  { value: "6+", label: "גיל מומלץ" },
] as const;

const POCKETS = [
  "top-2 start-2",
  "top-2 end-2",
  "bottom-2 start-2",
  "bottom-2 end-2",
] as const;

const FEATURES: {
  title: string;
  body: string;
  icon: LucideIcon;
  tone: "navy" | "blue" | "clay" | "wood";
}[] = [
  {
    title: "משחק חברתי אמיתי",
    body: "שחקו בלי מסכים — מקום לצחוק ולתחרות טובה.",
    icon: HeartHandshake,
    tone: "navy",
  },
  {
    title: "חיבור בין דורות",
    body: "המשחק שמחבר סבא, אבא וילדים סביב אותו לוח.",
    icon: UsersRound,
    tone: "blue",
  },
  {
    title: "קל ללמוד, כיף לשלוט",
    body: "חוקים פשוטים לכל גיל, משחק שמאחד גם מנצחים.",
    icon: Target,
    tone: "clay",
  },
  {
    title: "קומפקטי ונייד",
    body: "מתקפל ונכנס לכל תיק — תמיד בדרך לעוד משחק.",
    icon: Backpack,
    tone: "wood",
  },
];

const TONE: Record<
  (typeof FEATURES)[number]["tone"],
  { well: string; icon: string }
> = {
  navy: { well: "bg-navy-800", icon: "text-amber-500" },
  blue: { well: "bg-blue-100", icon: "text-blue-500" },
  clay: { well: "bg-clay-500/12", icon: "text-clay-500" },
  wood: { well: "bg-maple-200", icon: "text-wood-700" },
};

export function WhatSection() {
  return (
    <section
      id="what"
      className="what-section relative isolate overflow-hidden scroll-mt-[var(--nav-h)] px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -start-28 top-0 size-[min(70vw,520px)] rounded-full bg-maple-200/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -end-20 bottom-0 size-[min(50vw,340px)] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-[var(--container-max)] flex-col gap-10">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-x-12 md:gap-y-6">
          <div className="what-reveal order-1 flex flex-col">
            <p className="m-0 flex items-center gap-3 font-ui text-[13px] font-semibold tracking-[0.18em] text-wood-600">
              <span className="h-px w-7 bg-brand-gold" aria-hidden />
              מה זה קארום
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-medium text-navy-800">
              המשחק שכובש את ישראל
            </h2>
            <p className="mt-5 m-0 font-body text-[17px] leading-[1.75] text-text-body">
              קארום הוא משחק לוח קלאסי שמקורו בהודו, ל־2–4 שחקנים. הכל על הלוח —
              אין אפליקציות, אין מסכים. רק אצבעות, דיסקיות, ורגעים אמיתיים
              שנשארים.
            </p>
            <p className="mt-4 m-0 border-s-[3px] border-brand-gold ps-4 font-body text-[17px] leading-[1.75] text-text-body">
              על לוח עץ מלוטש יושבים סביב האסימונים ומלכת הקארום האדומה.
              משתמשים בסטרייקר ובאצבעות בלבד כדי להכניס אותם לארבעת החורים —
              בזוויות מדויקות.
            </p>
          </div>

          <figure className="what-reveal what-reveal-delay-1 order-2 m-0 mx-auto w-full max-w-md md:row-span-2 md:mx-0 md:max-w-none">
            <div
              className="relative rounded-xl p-[10px] shadow-card"
              style={{
                background:
                  "linear-gradient(145deg, #dcbb86 0%, #a07040 42%, #6b4a2a 100%)",
              }}
            >
              {POCKETS.map((pos) => (
                <span
                  key={pos}
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute z-10 size-4 rounded-full bg-ink-900 ring-[3px] ring-maple-300",
                    pos,
                  )}
                />
              ))}
              <div className="relative aspect-square w-full overflow-hidden rounded-[18px] bg-ink-900">
                <CarromClip />
              </div>
            </div>
          </figure>

          <ul className="what-reveal what-reveal-delay-2 order-3 m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </ul>
        </div>

        <div className="what-reveal what-reveal-delay-3 flex flex-col items-center gap-5">
          <dl className="m-0 grid w-full grid-cols-2 gap-y-5 rounded-xl border border-border-hairline bg-white/70 px-3 py-5 md:flex md:max-w-3xl md:items-stretch md:justify-center md:px-2">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex min-w-0 flex-col items-center gap-1 px-3 md:min-w-[5.5rem] md:flex-1 md:px-4",
                  i > 0 && "md:border-s md:border-border-hairline",
                )}
              >
                <dt className="order-2 font-ui text-xs font-semibold tracking-[0.16em] text-text-muted">
                  {stat.label}
                </dt>
                <dd
                  dir="ltr"
                  className="order-1 m-0 font-display text-[26px] leading-none font-medium text-navy-800 md:text-[30px]"
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/how-to-play"
            className="inline-flex min-h-11 items-center font-ui text-base font-semibold text-brand-primary border-b border-current pb-0.5 transition-colors hover:text-brand-primary-hover"
          >
            חוקי המשחק בעברית ←
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
}: {
  feature: (typeof FEATURES)[number];
}) {
  const Icon = feature.icon;
  const tone = TONE[feature.tone];

  return (
    <li className="flex h-full gap-3.5 rounded-xl border border-border-hairline bg-white/85 p-4 transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-card">
      <div
        className={cn(
          "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md",
          tone.well,
        )}
      >
        <Icon className={cn("size-5", tone.icon)} strokeWidth={1.6} aria-hidden />
      </div>
      <div className="min-w-0">
        <h3 className="m-0 font-display text-[1.05rem] leading-snug font-medium text-navy-800">
          {feature.title}
        </h3>
        <p className="mt-1.5 mb-0 font-body text-[14px] leading-relaxed text-text-body">
          {feature.body}
        </p>
      </div>
    </li>
  );
}
