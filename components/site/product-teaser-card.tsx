import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";

import { formatPrice, type Product } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProductTeaserCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <Link
      href={`#${product.id}`}
      className={cn(
        "carrom-focus group flex flex-col overflow-hidden rounded-2xl border bg-surface-card-dark transition-all duration-300 hover:-translate-y-1",
        featured
          ? "border-brand-gold/60 shadow-[0_0_0_1px_rgba(215,154,60,0.25),0_24px_48px_-20px_rgba(16,14,12,0.6)]"
          : "border-white/10 hover:border-white/30",
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
        <Image
          src={product.image}
          alt={`לוח קארום ${product.name}`}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span
          className={cn(
            "absolute top-4 start-4 inline-flex items-center whitespace-nowrap rounded-pill px-3 py-1 font-ui text-[11px] font-bold tracking-[0.08em] uppercase",
            featured
              ? "bg-brand-gold text-ink-900"
              : "bg-ink-900/80 text-sand-50",
          )}
        >
          {product.badgeLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="m-0 font-display text-[28px] leading-none text-sand-50">
            {product.name}
          </h3>
          <span dir="ltr" className="font-ui text-[22px] font-bold text-brand-gold">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="m-0 font-ui text-[14px] text-sand-50/60">
          {product.kicker}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 font-ui text-[15px] font-semibold text-sand-50/85 transition-colors group-hover:text-brand-gold">
          לפרטי הדגם
          <ArrowDownIcon
            aria-hidden
            className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
