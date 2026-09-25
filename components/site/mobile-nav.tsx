"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { isNavActive, type NavLink } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="carrom-focus size-11 text-[var(--carrom-text)] hover:bg-white/10 hover:text-[var(--carrom-text)] focus-visible:ring-0 min-[900px]:hidden"
          aria-label="פתח תפריט"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="border-[var(--carrom-border)] bg-[var(--carrom-surface)] text-[var(--carrom-text)]"
      >
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            className="carrom-focus absolute top-3 end-3 size-11 text-[var(--carrom-text)] hover:bg-white/10 hover:text-[var(--carrom-text)] focus-visible:ring-0"
            aria-label="סגור תפריט"
          >
            <XIcon className="size-5" />
          </Button>
        </SheetClose>
        <SheetHeader className="border-b border-[var(--carrom-border)] pe-12">
          <SheetTitle className="font-ui text-[var(--carrom-text)]">תפריט</SheetTitle>
          <SheetDescription className="sr-only">
            ניווט באתר Carrom Israel
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="ניווט בנייד" className="flex flex-col gap-1 px-4 pb-6">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "carrom-focus flex min-h-11 items-center rounded-sm border-b font-ui text-lg font-semibold transition-colors hover:border-[var(--carrom-gold)] hover:text-[var(--carrom-gold)]",
                  isNavActive(link.href, pathname)
                    ? "border-[var(--carrom-gold)] text-[var(--carrom-text)]"
                    : "border-transparent text-[var(--carrom-text)]/82",
                )}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
