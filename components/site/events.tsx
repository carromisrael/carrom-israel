import { Reveal } from "@/components/site/reveal";
import { events } from "@/lib/data";

export function EventsSection() {
  return (
    <section
      id="events"
      className="scroll-mt-[var(--nav-h)] bg-ink-900 px-[var(--gutter)] py-[var(--section-y)] text-text-body-invert"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(40px,5vw,64px)]">
        <Reveal className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
          <h2 className="m-0 font-display text-[clamp(30px,3.2vw,48px)] font-normal tracking-[-0.015em] text-sand-50">
            בואו לשחק איתנו
          </h2>
          <p className="m-0 font-body text-[17px] leading-[1.62] font-light text-pretty text-sand-50/75">
            אנחנו מביאים לוחות לערבי משחק, טורנירים פתוחים וימי משפחה. הכניסה
            חופשית, הלוחות עלינו.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[var(--grid-gap)] md:grid-cols-3">
          {events.map((event, index) => (
            <Reveal key={event.date} delay={index * 0.08}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-border-invert bg-surface-card-dark p-[clamp(24px,2.4vw,32px)]">
                <span dir="ltr" className="font-body text-sm font-bold text-brand-gold">
                  {event.date}
                </span>
                <h3 className="m-0 font-display text-[clamp(22px,2vw,26px)] leading-[1.2] font-normal text-sand-50">
                  {event.title}
                </h3>
                <p className="m-0 flex-1 font-body text-[16px] leading-[1.6] font-light text-sand-50/75">
                  {event.detail}
                </p>
                {/* Placeholder: sign-in is not wired yet, so this does nothing. */}
                <button
                  type="button"
                  className="carrom-focus mt-2 inline-flex min-h-11 w-fit items-center rounded-pill border border-sand-50/40 px-5 font-ui text-sm font-semibold text-sand-50 transition-colors hover:border-sand-50"
                >
                  הרשמה
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
