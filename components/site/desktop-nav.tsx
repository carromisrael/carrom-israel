"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { isNavActive, type NavLink } from "@/lib/nav";

export function DesktopNav({ links }: { links: readonly NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center justify-center gap-4 font-ui text-[14px] font-semibold lg:gap-6 lg:text-[15px] md:flex">
      {links.map((link) => {
        const active = isNavActive(link.href, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "border-b pb-[3px] transition-colors hover:border-brand-gold hover:text-white",
              active
                ? "border-brand-gold text-white"
                : "border-transparent text-white/[0.82]",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
