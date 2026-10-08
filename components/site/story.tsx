import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";

export function StorySection() {
  return (
    <section
      id="story"
      className="scroll-mt-[var(--nav-h)] bg-maple-200 px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] md:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <h2 className="m-0 max-w-[22ch] font-display text-[clamp(28px,3.4vw,52px)] leading-[1.12] tracking-[-0.015em] text-ink-900">
            איך משחק ברחוב במומבאי הפך לייבוא של לוחות לישראל
          </h2>
          <p className="m-0 max-w-[48ch] font-body text-[18px] leading-[1.68] font-light text-pretty text-ink-700">
            אני אליה, ואני נוסע להודו כבר ארבע שנים. שם, ברחוב במומבאי, שיחקתי
            קארום בפעם הראשונה — הייתי גרוע, והם פרגנו לי על כל מכה. חזרתי
            הביתה עם לוח על ריקשה, וזיו החליט שהרעיון לא נשאר רעיון. היום
            אנחנו מביאים את המשחק הזה לישראל, מהיצרנים הטובים בעולם.
          </p>
          <div>
            <Link
              href="/our-story"
              className="carrom-focus inline-flex min-h-11 items-center font-ui text-[15px] font-semibold text-ink-900 underline-offset-4 hover:underline"
            >
              קראו את הסיפור המלא ←
            </Link>
          </div>
        </Reveal>

        {/* Placeholder photo: replace with a real photo of Eliya and Ziv. */}
        <Reveal delay={0.1}>
          <figure className="m-0 mx-auto flex w-full max-w-[460px] flex-col gap-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-hairline shadow-card">
              <Image
                src="/assets/story-handshake.jpg"
                alt="אליה וזיו"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
