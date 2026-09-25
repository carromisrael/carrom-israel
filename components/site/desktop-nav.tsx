"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { isNavActive, type NavLink } from "@/lib/nav";

export function DesktopNav({ links }: { links: readonly NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="ניווט ראשי"
      className="hidden items-center justify-center gap-10 font-ui text-lg font-semibold whitespace-nowrap min-[900px]:flex"
    >
      {links.map((link) => {
        const active = isNavActive(link.href, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "carrom-focus rounded-sm py-2 text-[var(--carrom-text)] transition-colors hover:text-[var(--carrom-gold)]",
              active && "text-white",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
