import Link from "next/link";

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

const FACTS = [
  {
    title: "משחק חברתי אמיתי",
    body: "שחקו בלי מסכים — מקום לצחוק ולתחרות טובה.",
  },
  {
    title: "חיבור בין דורות",
    body: "המשחק שמחבר סבא, אבא וילדים סביב אותו לוח.",
  },
  {
    title: "קל ללמוד, כיף לשלוט",
    body: "חוקים פשוטים לכל גיל, משחק שמאחד גם מנצחים.",
  },
  {
    title: "קומפקטי ונייד",
    body: "מתקפל ונכנס לכל תיק — תמיד בדרך לעוד משחק.",
  },
] as const;

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

      <div className="relative z-10 mx-auto flex max-w-[var(--container-max)] flex-col gap-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-x-16">
          <div className="what-reveal flex flex-col">
            <p className="m-0 flex items-center gap-3 font-ui text-[13px] font-semibold tracking-[0.18em] text-wood-600">
              <span className="h-px w-7 bg-brand-gold" aria-hidden />
              מה זה קארום
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,3rem)] leading-[1.15] font-medium text-navy-800">
              המשחק שכובש את ישראל
            </h2>
            <p className="pull-quote mt-6 m-0 ps-2 font-display text-[clamp(19px,2.1vw,23px)] leading-[1.55] font-light text-navy-800">
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

          <figure className="what-reveal what-reveal-delay-1 relative mx-auto w-full max-w-[420px] md:mx-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-5 -z-10 rounded-[28px] bg-gradient-to-br from-blue-200/50 via-transparent to-brand-gold/25 opacity-70 blur-2xl"
            />
            <div
              className="relative -rotate-1 rounded-md p-[10px] shadow-card transition-transform duration-500 ease-out hover:rotate-0"
              style={{
                background:
                  "linear-gradient(145deg, #dcbb86 0%, #a07040 42%, #6b4a2a 100%)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[10px] rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
              />
              {POCKETS.map((pos) => (
                <span
                  key={pos}
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute z-10 size-3.5 rounded-full bg-ink-900 shadow-[inset_0_2px_3px_rgba(0,0,0,0.75)] ring-[3px] ring-maple-300",
                    pos,
                  )}
                />
              ))}
              <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-ink-900">
                <CarromClip />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/18 to-transparent"
                />
              </div>
            </div>
          </figure>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border-hairline pt-10 sm:grid-cols-4">
          {FACTS.map((fact, i) => (
            <div
              key={fact.title}
              className="what-reveal flex flex-col gap-2.5"
              style={{ animationDelay: `${200 + i * 90}ms` }}
            >
              <span
                dir="ltr"
                className="inline-flex w-fit items-center rounded-full border border-border-hairline bg-white/70 px-2.5 py-1 font-ui text-[11px] font-semibold tracking-[0.14em] text-wood-600"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[1.05rem] leading-snug font-medium text-navy-800">
                {fact.title}
              </h3>
              <p className="m-0 font-body text-[14px] leading-relaxed text-text-body">
                {fact.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5">
          <dl className="m-0 grid w-full grid-cols-2 gap-y-5 rounded-xl border border-border-hairline bg-white/70 px-3 py-5 md:flex md:max-w-3xl md:items-stretch md:justify-center md:px-2">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "what-reveal flex min-w-0 flex-col items-center gap-1 px-3 md:min-w-[5.5rem] md:flex-1 md:px-4",
                  i > 0 && "md:border-s md:border-border-hairline",
                )}
                style={{ animationDelay: `${560 + i * 70}ms` }}
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
            className="what-reveal inline-flex min-h-11 items-center font-ui text-base font-semibold text-brand-primary border-b border-current pb-0.5 transition-colors hover:text-brand-primary-hover"
            style={{ animationDelay: "900ms" }}
          >
            חוקי המשחק בעברית ←
          </Link>
        </div>
      </div>
    </section>
  );
}
