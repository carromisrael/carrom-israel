import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { events } from "@/lib/data";

export function EventsSection() {
  return (
    <section
      id="events"
      className="scroll-mt-[var(--nav-h)] bg-navy-800 px-[var(--gutter)] py-[var(--section-y)] text-[#E8E1D5]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(32px,4vw,56px)]">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-ui text-xs font-semibold tracking-[0.18em] text-sand-50/55 uppercase">
              אירועים קרובים
            </span>
            <h2 className="m-0 font-display text-[clamp(30px,3.2vw,48px)] font-normal tracking-[-0.015em] text-sand-50">
              בואו לשחק איתנו
            </h2>
            <p className="m-0 max-w-[46ch] font-body text-[17px] leading-[1.62] text-sand-50/72">
              אנחנו מביאים לוחות לערבי משחק, טורנירים פתוחים וימי משפחה. הכניסה
              חופשית, הלוחות עלינו.
            </p>
          </div>
          <Button variant="gold" size="cta-md" asChild>
            <a href="#contact">הזמינו אירוע אצלכם</a>
          </Button>
        </Reveal>
        <div className="flex flex-col">
          {events.map((event, index) => (
            <Reveal key={event.date} delay={index * 0.08}>
              <div
                className={`group grid grid-cols-1 items-start gap-2 border-t border-sand-50/18 px-3 py-[26px] -mx-3 transition-colors duration-300 hover:bg-sand-50/[0.05] md:grid-cols-[120px_1.4fr_1fr_auto] md:items-center md:gap-[clamp(16px,3vw,40px)] ${
                  index === events.length - 1 ? "border-b" : ""
                }`}
              >
                <span
                  dir="ltr"
                  className="text-end font-ui text-[15px] font-bold text-brand-gold"
                >
                  {event.date}
                </span>
                <span className="font-display text-[clamp(20px,2vw,28px)] text-sand-50">
                  {event.title}
                </span>
                <span className="font-body text-[17px] leading-[1.62] text-sand-50/72">
                  {event.detail}
                </span>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center whitespace-nowrap font-ui text-sm font-semibold text-sand-50"
                >
                  הרשמה
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
