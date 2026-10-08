import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UsersIcon, PhoneOffIcon } from "lucide-react";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "הסיפור שלנו — Carrom Israel",
  description:
    "איך משחק קארום ברחוב במומבאי הפך לייבוא של לוחות קארום לישראל. הסיפור של אליה וזיו.",
};

const REASONS = [
  {
    icon: UsersIcon,
    title: "משחק שמחבר בין אנשים, ובין שכבות גיל שונות",
  },
  {
    icon: PhoneOffIcon,
    title: "משחק שמנותק מפלאפונים ומסכים",
  },
] as const;

export default function OurStoryPage() {
  return (
    <>
      <SiteHeader />

      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink-900 px-[var(--gutter)] py-[clamp(56px,8vw,120px)]">
        <Image
          src="/assets/story-kids-night.jpg"
          alt="אליה עם ילדים ברחוב במומבאי"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[center_58%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/95 via-ink-900/55 to-ink-900/15"
        />
        <Reveal className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center text-center">
          <h1 className="m-0 max-w-[26ch] font-display text-[clamp(32px,4.6vw,72px)] leading-[1.1] tracking-[-0.015em] text-[#FFFDF8] [text-shadow:0_2px_24px_rgba(16,14,12,0.65)]">
            הייתי ממש גרוע בפעם הראשונה. הם פרגנו בכל מכה — ושם זה התחיל.
          </h1>
        </Reveal>
      </section>

      <section className="bg-ink-900 px-[var(--gutter)] py-[clamp(56px,7vw,110px)] text-text-body-invert">
        <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
          <Reveal>
            <figure className="m-0 flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md,14px)] border border-border-invert">
                <Image
                  src="/assets/story-kids-street.jpg"
                  alt="אליה עם ילדים ברחוב במומבאי"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
              <figcaption className="font-ui text-[13px] text-sand-50/60">
                מומבאי, אחר צהריים ברחוב.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-[22px]">
            <h2 className="m-0 max-w-[22ch] font-display text-[clamp(28px,3.2vw,48px)] leading-[1.15] tracking-[-0.015em] text-[#FFFDF8]">
              אני אליה, וארבע שנים אני נוסע להודו
            </h2>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-sand-50/85">
              כחלק מהעבודה שלי אני מבקר בהודו בקביעות. עם השנים נהייתי מאמין
              גדול במדינה הזאת ובקשר המיוחד שלנו אליה — גם בזכות המטיילים
              הישראלים שכל כך אוהבים להגיע לשם, וגם בגלל הקשרים הכלכליים
              והביטחוניים שנחשפתי אליהם מקרוב.
            </p>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-sand-50/85">
              לא פעם יצא לי לשבת עם אנשים, להכיר משפחות וילדים ברחוב. פעם אחת
              הזמינו אותי אנשים שלא הכרתי לשחק איתם קארום ברחוב — מיד
              התאהבתי במשחק, ויותר מזה, באווירה. הייתי גרוע לגמרי בפעם
              הראשונה, והם פרגנו לי על כל מכה.
            </p>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-sand-50/85">
              לפני שחזרתי חיפשתי באינטרנט ובמרקטפלייס ולא מצאתי. החלטתי שאני
              קונה לוח כזה ומביא אותו איתי בטיסה חזרה הביתה.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50 px-[var(--gutter)] py-[clamp(56px,7vw,110px)]">
        <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
          <Reveal className="flex flex-col gap-[22px]">
            <h2 className="m-0 max-w-[22ch] font-display text-[clamp(28px,3.2vw,48px)] leading-[1.15] tracking-[-0.015em] text-text-display">
              אז סחבתי אחד איתי בטיסה חזרה
            </h2>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-text-body">
              קניתי לוח, עטפתי אותו בניילון, והעמסתי על ריקשה בתוך הפקקים של
              מומבאי.
            </p>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-text-body">
              כשהגעתי הביתה, הילדים שלי, החברים שלהם והחברים שלי כל כך
              התלהבו שהתחילו לבקש שאביא לוח גם להם. ככה עלה הרעיון לייבא את
              המשחק — וכמו הרבה רעיונות טובים, הוא קצת התמסמס.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="m-0 flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md,14px)] border border-border-hairline shadow-card">
                <Image
                  src="/assets/story-rickshaw.jpg"
                  alt="לוח קארום עטוף על ריקשה בפקק במומבאי"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="font-ui text-[13px] text-text-muted">
                הלוח הראשון שלי, בריקשה במומבאי.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50 px-[var(--gutter)] pb-[clamp(56px,7vw,110px)]">
        <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
          <span aria-hidden className="h-px w-16 bg-brand-gold" />
          <h2 className="m-0 max-w-[26ch] font-display text-[clamp(28px,3.2vw,50px)] leading-[1.1] tracking-[-0.015em] text-text-display">
            ״לא משנה מה — אנחנו עושים את זה״
          </h2>
          <p className="m-0 max-w-[48ch] font-body text-[19px] leading-[1.62] font-light text-pretty text-text-body">
            זיו, חבר טוב שלי, הוא הרוח הפועמת של המיזם הזה. הוא זה שהחליט
            שהרעיון לא נשאר רעיון — ומאותו רגע עשינו את זה יחד.
          </p>
        </Reveal>
      </section>

      <section className="bg-maple-200 px-[var(--gutter)] py-[clamp(56px,7vw,110px)] text-text-body">
        <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] lg:grid-cols-2">
          <Reveal className="flex flex-col gap-[22px]">
            <h2 className="m-0 max-w-[22ch] font-display text-[clamp(28px,3.2vw,48px)] leading-[1.15] tracking-[-0.015em] text-text-display">
              פגשתי את היצרנים הטובים בעולם
            </h2>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-ink-700">
              ידעתי שאם אני מביא את המשחק לישראל, אני מביא את האיכות הכי טובה —
              מהיצרנים הכי טובים והכי מפורסמים בעולם. נכנסתי לבית המלאכה וראיתי
              איך הלוחות נבנים לוח־לוח.
            </p>
            <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.62] font-light text-pretty text-ink-700">
              אין לתאר את כמות המחשבה והעבודה שהושקעה בהתאמת המוצר לקהל
              הישראלי.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="m-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md,14px)] border border-border-hairline shadow-card">
                <Image
                  src="/assets/story-handshake.jpg"
                  alt="לחיצת יד עם היצרן בהודו מעל לוח קארום"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-50 px-[var(--gutter)] py-[clamp(56px,7vw,110px)]">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(40px,5vw,72px)]">
          <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-6 text-center">
            <h2 className="m-0 max-w-[24ch] font-display text-[clamp(28px,3.4vw,52px)] leading-[1.1] tracking-[-0.015em] text-text-display">
              שהמשחק הזה יחבר גם כאן
            </h2>
            <p className="m-0 font-body text-[19px] leading-[1.7] font-light text-pretty text-text-body">
              ליבי תפילה שהמשחק הזה יחבר ויאיר חברויות קיימות בישראל, כשם שהוא
              עושה בהודו. שיחזק את הגאווה והאחדות הישראלית, ושיחזק את הקשר בין
              ישראל להודו.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-[900px]">
            <ul className="m-0 grid list-none grid-cols-1 p-0 md:grid-cols-2">
              {REASONS.map(({ icon: Icon, title }, index) => (
                <li
                  key={title}
                  className={cn(
                    "flex items-center gap-5 py-6 md:px-8 md:py-8",
                    index > 0 && "border-t border-border-hairline md:border-t-0 md:border-s",
                  )}
                >
                  <Icon
                    aria-hidden
                    className="size-9 shrink-0 text-text-display"
                    strokeWidth={1.15}
                  />
                  <h3 className="m-0 font-body text-[18px] leading-snug font-semibold text-text-display">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mx-auto flex flex-col items-center gap-5 text-center">
            <p className="m-0 max-w-[22ch] font-display text-[clamp(22px,2.4vw,34px)] leading-[1.3] text-navy-800">
              משחק מדהים. זה כל הסיפור.
            </p>
            <div className="flex w-full max-w-[320px] flex-col items-center gap-1 border-t border-border-hairline pt-[18px]">
              <span className="font-body text-[17px] font-semibold text-ink-900">
                אליה וזיו
              </span>
              <span className="font-ui text-xs font-semibold tracking-[0.18em] text-text-muted uppercase">
                Carrom Israel
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-maple-400 px-[var(--gutter)] py-[clamp(48px,6vw,96px)]">
        <Reveal className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-[18px] text-center">
          <h2 className="m-0 max-w-[26ch] font-display text-[clamp(26px,2.8vw,42px)] leading-[1.15] tracking-[-0.015em] text-ink-900">
            אותו לוח, עכשיו על השולחן שלכם
          </h2>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="cta-md" asChild>
              <Link href="/products">בחרו את הדגם שלכם</Link>
            </Button>
            <Link
              href="/how-to-play"
              className="carrom-focus inline-flex min-h-11 items-center font-ui text-[15px] font-semibold text-ink-900 underline-offset-4 hover:underline"
            >
              איך משחקים ←
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
