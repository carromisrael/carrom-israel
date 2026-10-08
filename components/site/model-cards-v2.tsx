import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";

import { formatPrice, products } from "@/lib/data";

export function ModelCardsV2() {
  return (
    <div className="mx-auto mt-10 grid max-w-[420px] grid-cols-1 gap-6 lg:mt-14 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-[var(--grid-gap)]">
      {products.map((product) => (
        <article
          key={product.id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#252d35] transition-[transform,border-color,box-shadow] duration-300 ease-out focus-within:border-brand-gold/50 hover:-translate-y-2 hover:border-brand-gold/50 hover:shadow-[0_0_0_1px_rgba(215,154,60,0.2),0_28px_52px_-24px_rgba(0,0,0,0.65)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <div className="relative aspect-square w-full overflow-hidden bg-ink-900">
            <Image
              src={product.image}
              alt={`לוח קארום ${product.name}`}
              fill
              unoptimized
              sizes="(min-width: 1024px) 33vw, 420px"
              className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          <div className="flex flex-col gap-5 p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="m-0 font-display text-[32px] leading-none text-[var(--carrom-text)] transition-colors duration-300 group-hover:text-[var(--carrom-gold-muted)]">
                {product.name}
              </h3>
              <span dir="ltr" className="font-ui text-[24px] font-bold text-[var(--carrom-gold-muted)]">
                {formatPrice(product.price)}
              </span>
            </div>

            <dl className="m-0 flex flex-col">
              {[
                { label: "עובי הלוח", value: product.thickness },
                { label: "מסגרת", value: product.frame },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between gap-4 border-b border-white/10 py-3 font-ui text-[16px]"
                >
                  <dt className="text-[var(--carrom-muted)]">{spec.label}</dt>
                  <dd className="m-0 text-[var(--carrom-text)]">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href={`/products#${product.id}`}
              className="carrom-focus group/cta inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-[var(--carrom-blue)] px-6 font-ui text-[17px] font-bold text-white transition-colors hover:bg-[var(--carrom-blue-hover)]"
            >
              {`לבחירת ${product.name}`}
              <ArrowLeftIcon
                aria-hidden
                className="size-4 shrink-0 transition-transform duration-300 group-hover/cta:-translate-x-1 motion-reduce:transition-none"
              />
            </Link>

            <details className="group/details">
              <summary className="carrom-focus mx-auto flex min-h-11 w-fit cursor-pointer list-none items-center gap-1.5 rounded-md px-2 font-ui text-[15px] text-[var(--carrom-muted)] transition-colors hover:text-[var(--carrom-text)] [&::-webkit-details-marker]:hidden">
                <ChevronLeftIcon
                  aria-hidden
                  className="size-4 shrink-0 transition-transform duration-200 group-open/details:-rotate-90 motion-reduce:transition-none"
                />
                פרטים נוספים
              </summary>
              <div className="flex flex-col gap-4 pt-3">
                <p className="m-0 font-body text-[16px] leading-[1.65] text-[var(--carrom-muted)]">
                  {product.blurb}
                </p>
                <dl className="m-0 flex flex-col">
                  {[
                    { label: "משקל", value: product.weight },
                    { label: "מידות", value: product.size },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between gap-4 border-b border-white/10 py-3 font-ui text-[16px] last:border-b-0"
                    >
                      <dt className="text-[var(--carrom-muted)]">{spec.label}</dt>
                      <dd className="m-0 text-[var(--carrom-text)]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </details>
          </div>
        </article>
      ))}
    </div>
  );
}
