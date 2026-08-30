import Image from "next/image";
import { Button } from "@/components/ui/button";

const HERO_TEXT_SHADOW =
  "0 0 8px rgba(255,251,240,.5), 0 0 34px rgba(255,246,225,.34), 0 0 90px rgba(224,190,130,.22), 0 4px 26px rgba(16,14,12,.55)";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink-900"
    >
      <Image
        src="/assets/lifestyle-bar.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--overlay-scrim)" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-[var(--gutter)] pt-12 pb-14">
        <div className="mb-[clamp(180px,34vh,420px)] flex flex-wrap items-center justify-center gap-6 text-center">
          <h1
            className="max-w-[20ch] font-display text-[clamp(48px,7vw,112px)] leading-[0.98] font-light tracking-[-0.015em] text-[#FFFDF8]"
            style={{ textShadow: HERO_TEXT_SHADOW }}
          >
            <span className="block" dir="ltr">
              Carrom - Israel
            </span>
            <span className="block font-medium">הבית של הקארום בישראל</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-12">
          <div className="flex max-w-[46ch] flex-col gap-6">
            <p className="font-body text-[#E8E1D5]">
              לוחות הקארום הטובים בעולם
              <br />
              עכשיו בישראל!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="cta-lg" asChild>
                <a href="#models">בחרו את הדגם שלכם</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
