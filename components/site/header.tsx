import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "@/components/site/desktop-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { NAV_LINKS } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-[var(--nav-h)] items-center gap-4 border-b border-border-invert bg-[rgba(11,31,53,0.9)] px-5 backdrop-blur-md md:gap-6 md:px-16">
      <div className="flex flex-1 items-center">
        <MobileNav links={NAV_LINKS} />
      </div>
      <DesktopNav links={NAV_LINKS} />
      <div className="flex flex-1 justify-end">
        <Link href="/" className="flex min-h-11 items-center">
          <Image
            src="/assets/logo-wordmark.png"
            alt="Carrom Israel"
            width={509}
            height={182}
            className="h-[42px] w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
