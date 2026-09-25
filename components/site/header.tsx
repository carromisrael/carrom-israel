"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "@/components/site/desktop-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    if (!overlay) return;

    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const update = () => {
      const { bottom } = sentinel.getBoundingClientRect();
      setScrolledPastHero(bottom <= getComputedNavHeight());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [overlay]);

  const solid = !overlay || scrolledPastHero;

  return (
    <header
      className={cn(
        "carrom-header sticky top-0 z-40 border-b border-transparent text-[var(--carrom-text)]",
        solid && "is-solid",
      )}
    >
      <div className="flex h-[var(--nav-h)] w-full items-start justify-between gap-4 px-3 pt-3 min-[900px]:grid min-[900px]:grid-cols-[1fr_auto_1fr] min-[900px]:items-center min-[900px]:px-4 min-[900px]:pt-0">
        <div className="flex min-[900px]:col-start-1 min-[900px]:justify-self-start">
          <Link
            href="/"
            className="carrom-focus flex min-h-11 items-center rounded-sm"
          >
            <Image
              src="/assets/logo-wordmark.png"
              alt="Carrom Israel"
              width={509}
              height={182}
              loading="eager"
              className="h-auto max-h-[56px] w-[clamp(132px,12vw,180px)] object-contain min-[900px]:max-h-[64px]"
              style={{ width: "clamp(132px, 12vw, 180px)", height: "auto" }}
            />
          </Link>
        </div>
        <DesktopNav links={NAV_LINKS} />
        <div className="flex min-[900px]:col-start-3 min-[900px]:justify-self-end">
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}

function getComputedNavHeight() {
  if (typeof window === "undefined") return 78;
  const value = getComputedStyle(document.documentElement).getPropertyValue("--nav-h");
  return Number.parseFloat(value) || 78;
}
