import { testimonials } from "@/lib/data";

function TestimonialCard({
  quote,
  author,
  role,
  hiddenFromA11y = false,
}: {
  quote: string;
  author: string;
  role: string;
  hiddenFromA11y?: boolean;
}) {
  return (
    <div
      className="flex w-[clamp(300px,26vw,400px)] shrink-0 flex-col gap-5 rounded-lg border border-border-hairline bg-white p-[clamp(24px,3vw,36px)] shadow-card"
      aria-hidden={hiddenFromA11y || undefined}
    >
      <span className="font-ui text-base tracking-[0.12em] text-amber-500">
        ★★★★★
      </span>
      <blockquote className="m-0 flex flex-col gap-5">
        <p className="m-0 font-display text-[22px] leading-[1.42] font-normal text-text-display">
          {quote}
        </p>
        <footer className="flex flex-col gap-0.5">
          <span className="font-ui text-[15px] font-semibold text-ink-800">
            {author}
          </span>
          <span className="font-ui text-[13px] tracking-[0.18em] text-text-muted uppercase">
            {role}
          </span>
        </footer>
      </blockquote>
    </div>
  );
}

export function TrustSection() {
  return (
    <section
      id="trust"
      className="scroll-mt-[var(--nav-h)] px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(32px,4vw,56px)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="m-0 font-display text-[clamp(30px,3.2vw,48px)] font-normal tracking-[-0.015em] text-text-display">
            מה אומרים עלינו
          </h2>
          <span className="font-ui text-xl tracking-[0.12em] text-amber-500">
            ★★★★★
          </span>
        </div>
        <div className="marquee-mask -mx-[var(--gutter)] overflow-hidden px-[var(--gutter)]">
          <div className="marquee-track flex w-max items-stretch gap-[var(--grid-gap)]">
            {testimonials.map((item) => (
              <TestimonialCard key={item.author} {...item} />
            ))}
            {testimonials.map((item) => (
              <TestimonialCard
                key={`${item.author}-dup`}
                {...item}
                hiddenFromA11y
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
