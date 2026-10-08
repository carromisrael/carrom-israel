import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { SpecTable } from "@/components/site/spec-table";
import { formatPrice, type Product } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductDetail({
  product,
  imageSide = "start",
  tone = "default",
}: {
  product: Product;
  /** Which side the photo sits on, in reading order (RTL-aware via logical props). */
  imageSide?: "start" | "end";
  tone?: "default" | "band";
}) {
  const specs = [
    { label: "עובי הלוח", value: product.thickness },
    { label: "מסגרת", value: product.frame },
    { label: "מידות חוץ", value: product.size },
    { label: "שטח משחק", value: product.playArea },
    { label: "משקל", value: product.weight },
  ];

  const message = encodeURIComponent(`היי, מעוניין/ת בלוח ${product.name}`);

  return (
    <section
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className={cn(
        "scroll-mt-[var(--nav-h)] px-[var(--gutter)] py-[var(--band-y)]",
        tone === "band" && "bg-surface-sunken",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[var(--container-max)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[clamp(32px,5vw,72px)]",
        )}
      >
        <Reveal
          className={cn(
            "overflow-hidden rounded-[var(--radius-lg)] border border-border-hairline shadow-card",
            imageSide === "end" && "lg:order-2",
          )}
        >
          <div className="relative aspect-[3/4] w-full bg-ink-900">
            <Image
              src={product.image}
              alt={`לוח קארום ${product.name}`}
              fill
              unoptimized
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className={cn(
            "flex flex-col gap-5",
            imageSide === "end" && "lg:order-1",
          )}
        >
          <span className="font-ui text-xs font-semibold tracking-[0.18em] text-text-muted uppercase">
            {product.badgeLabel}
          </span>
          <h2
            id={`${product.id}-title`}
            className="m-0 font-display text-[clamp(32px,3.4vw,52px)] leading-[1.08] tracking-[-0.015em] text-text-display"
          >
            {product.name}
          </h2>
          <p className="m-0 max-w-[48ch] font-body text-[17px] leading-[1.65] text-text-body">
            {product.blurb}
          </p>

          <SpecTable rows={specs} className="max-w-[48ch]" />

          <div className="mt-1 flex flex-wrap items-center gap-5">
            <span dir="ltr" className="font-ui text-3xl font-bold text-brand-gold">
              {formatPrice(product.price)}
            </span>
            <Button variant="primary" size="cta-lg" asChild>
              <a
                href={`https://wa.me/972000000000?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`הזמינו ${product.name}`}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}