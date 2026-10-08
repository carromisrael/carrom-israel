import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { accessories, formatPrice, maintenanceKit } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";

export function AccessoriesSection() {
  return (
    <section
      id="accessories"
      className="scroll-mt-[var(--nav-h)] bg-surface-sunken px-[var(--gutter)] py-[clamp(56px,7vw,104px)]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(28px,3.5vw,48px)]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="m-0 font-display text-[clamp(28px,3vw,44px)] font-normal tracking-[-0.015em] text-text-display">
            החלפים ואביזרים
          </h2>
          <p className="m-0 font-ui text-[13px] text-text-muted">
            מלאי בישראל · משלוח 3 ימי עסקים
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-[var(--grid-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 0.06}>
              <article className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border-hairline bg-white p-6 shadow-card">
                {/* Placeholder tile until product photos exist. */}
                <div className="flex h-36 items-center justify-center rounded-xl bg-sand-100 font-ui text-xs tracking-[0.18em] text-text-muted uppercase">
                  תמונה בקרוב
                </div>
                <span className="font-ui text-xs font-semibold tracking-[0.18em] text-text-muted uppercase">
                  {item.meta}
                </span>
                <h3 className="m-0 font-body text-[20px] font-semibold text-ink-900">
                  {item.name}
                </h3>
                <p className="m-0 flex-1 font-body text-[15px] leading-[1.6] font-light text-ink-700">
                  {item.body}
                </p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <span dir="ltr" className="font-body text-[24px] font-bold text-brand-primary">
                    {formatPrice(item.price)}
                  </span>
                  <Button variant="primary" size="default" asChild>
                    <a
                      href={whatsappLink(`היי, אני רוצה להזמין: ${item.name} (${formatPrice(item.price)})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      לרכישה
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink-900 p-[clamp(24px,3vw,40px)] text-sand-50 md:flex-row md:items-center">
          <div className="flex max-w-[52ch] flex-col gap-3">
            <h3 className="m-0 font-display text-[clamp(22px,2.4vw,32px)] font-normal text-sand-50">
              {maintenanceKit.name}
            </h3>
            <p className="m-0 font-body text-[16px] leading-[1.6] font-light text-sand-50/80">
              {maintenanceKit.body}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span dir="ltr" className="font-body text-[30px] font-bold text-sand-50">
              {formatPrice(maintenanceKit.price)}
            </span>
            <Button variant="gold" size="cta-md" asChild>
              <a
                href={whatsappLink(`היי, אני רוצה להזמין ${maintenanceKit.name} (${formatPrice(maintenanceKit.price)})`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                לרכישת הערכה
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-3 text-center">
          <p className="m-0 font-body text-[17px] font-light text-ink-700">
            לא בטוחים איזה חלף מתאים ללוח שלכם?
          </p>
          <a
            href={whatsappLink("היי, יש לי שאלה על אביזרים")}
            target="_blank"
            rel="noopener noreferrer"
            className="carrom-focus inline-flex min-h-11 items-center font-ui text-[15px] font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            שלחו תמונה של הלוח בוואטסאפ ←
          </a>
        </Reveal>
      </div>
    </section>
  );
}
