import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { testimonials } from "@/lib/data";

function TestimonialCard({
  quote,
  author,
  role,
  image,
  imageAlt,
  hiddenFromA11y = false,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
  hiddenFromA11y?: boolean;
}) {
  return (
    <div
      className="flex w-[clamp(280px,26vw,380px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border-hairline bg-white shadow-card transition-transform duration-300 hover:-translate-y-1"
      aria-hidden={hiddenFromA11y || undefined}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={hiddenFromA11y ? "" : imageAlt}
          fill
          sizes="(min-width: 768px) 380px, 280px"
          className="object-cover"
        />
      </div>
      <blockquote className="m-0 flex flex-1 flex-col gap-3.5 p-[clamp(20px,2.4vw,28px)]">
        <p className="m-0 flex-1 font-body text-base leading-[1.62] font-light text-pretty text-ink-700">
          {quote}
        </p>
        <footer className="flex flex-col gap-0.5 border-t border-border-hairline pt-3">
          <span className="font-body text-base font-semibold text-ink-900">
            {author}
          </span>
          <span className="font-ui text-[13px] text-text-muted">{role}</span>
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
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(24px,3vw,40px)]">
        <Reveal className="text-center">
          <h2 className="m-0 font-display text-[clamp(30px,3.2vw,48px)] font-normal tracking-[-0.015em] text-text-display">
            מה אומרים עלינו
          </h2>
        </Reveal>
        <Reveal
          delay={0.15}
          className="marquee-mask -mx-[var(--gutter)] overflow-hidden px-[var(--gutter)]"
        >
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
        </Reveal>
      </div>
    </section>
  );
}
