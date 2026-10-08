"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { formatPrice, products } from "@/lib/data";

const PX_PER_MM = 2.5;

function ThicknessGauge({ selectedMm }: { selectedMm: number }) {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <figcaption className="font-ui text-[15px] text-sand-50/65">עובי הלוח</figcaption>
      <div className="flex items-end gap-3" aria-hidden>
        {products.map(({ id, thicknessMm }) => {
          const active = thicknessMm === selectedMm;
          return (
            <div key={id} className="flex flex-1 flex-col gap-2">
              <div
                className={cn(
                  "w-full rounded-[3px] transition-colors duration-300",
                  active ? "bg-maple-300" : "bg-sand-50/10",
                )}
                style={{ height: thicknessMm * PX_PER_MM }}
              />
              <span
                className={cn(
                  "font-ui text-[14px]",
                  active ? "font-bold text-sand-50" : "text-sand-50/45",
                )}
              >
                {thicknessMm} מ״מ
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

export function ModelSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const product = products[selectedIndex];

  function select(index: number) {
    setSelectedIndex(index);
    tabRefs.current[index]?.focus();
  }

  // RTL: the left arrow moves forward through the tabs.
  function handleKeyDown(event: KeyboardEvent) {
    const last = products.length - 1;
    const keyMap: Record<string, number> = {
      ArrowLeft: selectedIndex === last ? 0 : selectedIndex + 1,
      ArrowRight: selectedIndex === 0 ? last : selectedIndex - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in keyMap)) return;
    event.preventDefault();
    select(keyMap[event.key]);
  }

  const specs = [
    { label: "מסגרת", value: product.frame },
    { label: "משקל", value: product.weight },
    { label: "מידות", value: product.size },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-x-16 lg:gap-y-10">
      <div
        role="tablist"
        aria-label="דגמי הלוח"
        onKeyDown={handleKeyDown}
        className="flex w-full gap-1 rounded-full border border-sand-50/15 p-1 sm:w-fit lg:col-start-1 lg:row-start-1"
      >
        {products.map((item, index) => {
          const active = index === selectedIndex;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`model-tab-${item.id}`}
              aria-selected={active}
              aria-controls="model-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "carrom-focus inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-5 font-ui text-[16px] font-semibold transition-colors sm:flex-none",
                active ? "bg-sand-50 text-ink-900" : "text-sand-50/70 hover:text-sand-50",
              )}
            >
              <span
                aria-hidden
                className="size-3.5 shrink-0 rounded-full ring-1 ring-sand-50/40"
                style={{ backgroundColor: item.frameSwatch }}
              />
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-ink-900 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        {products.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={index === selectedIndex ? `לוח קארום ${item.name}` : ""}
            aria-hidden={index !== selectedIndex}
            fill
            unoptimized
            sizes="(min-width: 1024px) 55vw, 100vw"
            className={cn(
              "object-cover object-[center_35%] transition-opacity duration-500 ease-out motion-reduce:transition-none",
              index === selectedIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      <div
        role="tabpanel"
        id="model-panel"
        aria-labelledby={`model-tab-${product.id}`}
        className="flex flex-col gap-8 lg:col-start-1 lg:row-start-2"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="m-0 font-display text-[clamp(40px,4vw,56px)] leading-none text-sand-50">
              {product.name}
            </h3>
            <span dir="ltr" className="font-ui text-[28px] font-bold text-brand-gold">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="m-0 max-w-[34rem] font-body text-[17px] leading-[1.65] text-sand-50/75">
            {product.blurb}
          </p>
        </div>

        <ThicknessGauge selectedMm={product.thicknessMm} />

        <dl className="m-0 flex flex-col">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between gap-4 border-b border-sand-50/12 py-3 font-ui text-[16px]"
            >
              <dt className="text-sand-50/60">{spec.label}</dt>
              <dd className="m-0 text-sand-50">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <Link
          href={`/products#${product.id}`}
          className="carrom-focus inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-gold px-8 font-ui text-[17px] font-bold text-ink-900 transition-colors hover:brightness-110 sm:w-fit"
        >
          {`הוסיפו את ה־${product.name} לסל`}
        </Link>
      </div>
    </div>
  );
}
