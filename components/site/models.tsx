"use client";

import { useState } from "react";

import { FlipCard } from "@/components/site/flip-card";
import { ModelCardsV2 } from "@/components/site/model-cards-v2";
import { ModelSelector } from "@/components/site/model-selector";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { formatPrice, products } from "@/lib/data";

/** Dev-only toggle compares the three layouts; pick one and delete the others. */
const LAYOUT_OPTIONS = [
  { value: "designer", label: "עיצוב מעצב" },
  { value: "selector", label: "בורר" },
  { value: "cards", label: "כרטיסים" },
] as const;

type Layout = (typeof LAYOUT_OPTIONS)[number]["value"];

function ModelCards() {
  return (
    <div className="mx-auto mt-12 grid max-w-[420px] grid-cols-1 gap-10 lg:mt-16 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-[var(--grid-gap)]">
      {products.map((product, index) => (
        <Reveal key={product.id} delay={index * 0.1}>
          <FlipCard
            name={product.name}
            kicker={product.kicker}
            priceLabel={formatPrice(product.price)}
            image={product.image}
            imageAlt={`לוח קארום ${product.name}`}
            blurb={product.blurb}
            specs={[
              { label: "עובי הלוח", value: product.thickness },
              { label: "מסגרת", value: product.frame },
              { label: "משקל", value: product.weight },
              { label: "מידות", value: product.size },
            ]}
            href={`/products#${product.id}`}
            backClassName={product.backBg}
          />
        </Reveal>
      ))}
    </div>
  );
}

export function ModelsSection() {
  const isDev = process.env.NODE_ENV === "development";
  const [layout, setLayout] = useState<Layout>("designer");
  const isDesigner = layout === "designer";

  return (
    <section
      id="models"
      className={cn(
        "scroll-mt-[var(--nav-h)] px-[var(--gutter)] py-[var(--section-y)]",
        isDesigner
          ? "bg-[#1b2128] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2a333d_0%,transparent_70%)]"
          : "bg-ink-800",
      )}
      aria-labelledby="models-title"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <Reveal className="flex flex-col items-center text-center">
          <h2
            id="models-title"
            className="m-0 font-ui text-[clamp(36px,4.6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-sand-50"
          >
            {isDesigner ? "איזה לוח יהיה שלכם?" : "בחרו את הדגם שלכם"}
          </h2>
        </Reveal>
        {isDesigner ? <ModelCardsV2 /> : layout === "selector" ? <ModelSelector /> : <ModelCards />}
      </div>

      {isDev ? (
        <fieldset className="fixed bottom-4 left-1/2 z-[70] m-0 flex -translate-x-1/2 gap-x-3 rounded-[10px] border border-[var(--carrom-border)] bg-[var(--carrom-surface)] px-3 py-2.5 font-body text-[13px] text-[var(--carrom-text)]">
          <legend className="px-1 text-[var(--carrom-muted)]">תצוגת דגמים</legend>
          {LAYOUT_OPTIONS.map(({ value, label }) => (
            <label key={value} className="inline-flex min-h-11 items-center gap-1.5">
              <input
                type="radio"
                name="models-layout"
                value={value}
                checked={layout === value}
                onChange={() => setLayout(value)}
              />
              {label}
            </label>
          ))}
        </fieldset>
      ) : null}
    </section>
  );
}
