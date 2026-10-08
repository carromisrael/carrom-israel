import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { Reveal } from "@/components/site/reveal";
import { SpecTable } from "@/components/site/spec-table";
import { Button } from "@/components/ui/button";
import {
  howToPlayFaq,
  howToPlayMistakes,
  howToPlayRuleGroups,
  howToPlaySetupSpecs,
  howToPlaySteps,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "איך משחקים קארום — Carrom Israel",
  description:
    "חמישה שלבים לסבב הראשון, סדר הפתיחה, החוקים המלאים והניקוד — בעברית, על בסיס חוקי הפדרציה הבינלאומית (ICF).",
};

const sectionPadding = "px-[var(--gutter)] py-[var(--section-y)]";
const sectionHeader =
  "mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-3.5 text-center";
const headingDisplay =
  "m-0 font-display text-[clamp(30px,3.2vw,48px)] leading-[1.15] tracking-[-0.015em]";

export default function HowToPlayPage() {
  return (
    <>
      <SiteHeader />

      <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-ink-900 px-[var(--gutter)] py-[clamp(64px,8vw,120px)]">
        <Image
          src="/assets/board-setup.jpeg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/85 via-ink-900/60 to-ink-900/95"
        />
        <Reveal className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center gap-[22px] text-center">
          <h1 className="m-0 max-w-[24ch] font-display text-[clamp(38px,5.4vw,80px)] leading-[1.04] tracking-[-0.015em] text-[#FFFDF8]">
            איך משחקים קארום
          </h1>
          <p className="m-0 max-w-[52ch] font-body text-[clamp(18px,1.9vw,24px)] leading-[1.5] font-light text-sand-50/85">
            חמש דקות ללמוד, סבב של עשרים דקות, ומשם זה כבר עניין של אצבע. כל
            מה שצריך לדעת — מסדר הפתיחה ועד הניקוד הרשמי.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button variant="gold" size="cta-lg" asChild>
              <a href="#quickstart">בקצרה — חמישה שלבים</a>
            </Button>
            <Link
              href="#rules"
              className="carrom-focus inline-flex min-h-14 items-center rounded-pill border border-sand-50/40 px-7 font-ui text-base font-semibold text-sand-50 transition-colors hover:border-sand-50 hover:bg-sand-50/10"
            >
              החוקים המלאים
            </Link>
          </div>
        </Reveal>
      </section>

      <section
        id="quickstart"
        className={`scroll-mt-[var(--nav-h)] bg-sand-50 ${sectionPadding}`}
      >
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(32px,4vw,56px)]">
          <Reveal className={sectionHeader}>
            <h2 className={`${headingDisplay} text-text-display`}>
              הסבב הראשון שלכם
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-[var(--grid-gap)] sm:grid-cols-2 xl:grid-cols-5">
            {howToPlaySteps.map((step, index) => (
              <Reveal
                key={step.num}
                delay={index * 0.06}
                className="flex flex-col gap-3 rounded-lg border border-border-hairline bg-surface-card p-7 shadow-card sm:last:col-span-2 xl:last:col-span-1"
              >
                <span className="font-display text-[34px] leading-none text-blue-500">
                  {step.num}
                </span>
                <h3 className="m-0 font-body text-[19px] font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="m-0 font-body text-[16px] leading-[1.62] font-light text-ink-700">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800 px-[var(--gutter)] py-[var(--section-y)] text-text-body-invert">
        <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1fr_minmax(300px,46%)]">
          <Reveal className="flex flex-col gap-[22px]">
            <h2 className={`${headingDisplay} text-[#FFFDF8]`}>
              איך מסדרים את הדיסקיות
            </h2>
            <p className="m-0 max-w-[48ch] font-body text-[17px] leading-[1.62] font-light text-pretty text-sand-50/85">
              המלכה האדומה במרכז המעגל. סביבה שש דיסקיות במעגל צמוד — לבן ושחור
              בסירוגין. סביבן עוד שתים־עשרה במעגל החיצוני, גם הן בסירוגין, כך
              שכל דיסקייה נוגעת בשכנותיה. לפני הפתיחה מיישרים בעדינות: הסידור
              צריך להיות הדוק, בלי רווחים.
            </p>
            <SpecTable rows={howToPlaySetupSpecs} tone="invert" />
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="m-0 flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden rounded-[var(--radius-md,14px)] border border-border-invert">
                <Image
                  src="/assets/board-setup.jpeg"
                  alt="סידור הדיסקיות בפתיחה"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-ui text-[13px] text-sand-50/60">
                הסידור המלא: מלכה, שש, ושתים־עשרה.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section
        id="rules"
        className={`scroll-mt-[var(--nav-h)] bg-sand-50 ${sectionPadding}`}
      >
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(32px,4vw,56px)]">
          <Reveal className={sectionHeader}>
            <h2 className={`${headingDisplay} text-text-display`}>
              מהתור ועד הניקוד
            </h2>
            <p className="m-0 max-w-[52ch] font-body text-[17px] leading-[1.62] font-light text-ink-700">
              מבוסס על החוקים של הפדרציה הבינלאומית (ICF) — אותם חוקים שלפיהם
              משחקים בטורנירים, בגרסה קצרה ובעברית.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-[var(--grid-gap)] md:grid-cols-2 xl:grid-cols-3">
            {howToPlayRuleGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={(index % 3) * 0.06}
                className="flex flex-col gap-4 rounded-lg border border-border-hairline bg-surface-card p-8 shadow-card"
              >
                <h3 className="m-0 font-display text-[24px] font-normal text-ink-900">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="m-0 border-b border-border-hairline pb-3 font-body text-[16px] leading-[1.62] font-light text-ink-700"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-taupe-300 px-[var(--gutter)] py-[var(--section-y)] text-ink-900">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(28px,3.5vw,48px)]">
          <Reveal className={sectionHeader}>
            <h2 className={`${headingDisplay} text-[clamp(28px,3vw,44px)]`}>
              חמש טעויות של מתחילים
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-[var(--grid-gap)] sm:grid-cols-2 lg:grid-cols-5">
            {howToPlayMistakes.map((mistake, index) => (
              <Reveal
                key={mistake.title}
                delay={index * 0.05}
                className="flex flex-col gap-2.5 border-t border-ink-900/30 pt-[18px]"
              >
                <h3 className="m-0 font-body text-[18px] font-semibold">
                  {mistake.title}
                </h3>
                <p className="m-0 font-body text-[15px] leading-[1.6] font-light text-ink-900/80">
                  {mistake.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-sand-50 ${sectionPadding}`}>
        <div className="mx-auto flex max-w-[900px] flex-col gap-[clamp(24px,3vw,40px)]">
          <Reveal className={sectionHeader}>
            <h2 className={`${headingDisplay} text-text-display`}>
              לפני שמתחילים
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {howToPlayFaq.map((item) => (
              <div
                key={item.q}
                className="flex flex-col gap-2 border-b border-border-hairline py-[22px]"
              >
                <h3 className="m-0 font-body text-[18px] font-semibold text-ink-900">
                  {item.q}
                </h3>
                <p className="m-0 max-w-[64ch] font-body text-[16px] leading-[1.62] font-light text-ink-700">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maple-400 px-[var(--gutter)] py-[clamp(56px,7vw,104px)]">
        <Reveal className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-5 text-center">
          <h2 className="m-0 max-w-[26ch] font-display text-[clamp(28px,3vw,44px)] leading-[1.15] tracking-[-0.015em] text-ink-900">
            עכשיו רק צריך לוח
          </h2>
          <p className="m-0 max-w-[46ch] font-body text-[17px] leading-[1.62] font-light text-ink-700">
            שלושה דגמים, מלאי בישראל, אחריות שנתיים ומשלוח 3 ימי עסקים.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="cta-md" asChild>
              <Link href="/products">בחרו את הדגם שלכם</Link>
            </Button>
            <Link
              href="/products#accessories"
              className="carrom-focus inline-flex min-h-12 items-center rounded-pill border border-ink-900/40 px-6 font-ui text-[15px] font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-sand-50"
            >
              אביזרים וחלפים
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
