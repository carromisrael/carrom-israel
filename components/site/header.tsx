import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/site/mobile-nav";

const NAV_LINKS = [
  { href: "/#models", label: "הדגמים" },
  { href: "/#how", label: "איך משחקים" },
  { href: "/#events", label: "אירועים" },
  { href: "/#contact", label: "צרו קשר" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-[var(--nav-h)] items-center gap-4 border-b border-border-invert bg-[rgba(11,31,53,0.9)] px-5 backdrop-blur-md md:gap-6 md:px-16">
      <div className="flex flex-1 items-center">
        <MobileNav links={NAV_LINKS} />
      </div>
      <nav className="hidden items-center justify-center gap-6 font-ui text-[15px] font-semibold md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border-b border-transparent pb-[3px] text-white/[0.82] transition-colors hover:border-brand-gold hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
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
