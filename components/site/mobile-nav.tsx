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
          className="size-11 text-white hover:bg-white/10 hover:text-white md:hidden"
          aria-label="פתח תפריט"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="border-border-invert bg-[rgba(11,31,53,0.97)] text-white"
      >
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute top-3 end-3 size-11 text-white hover:bg-white/10 hover:text-white"
            aria-label="סגור תפריט"
          >
            <XIcon className="size-5" />
          </Button>
        </SheetClose>
        <SheetHeader className="border-b border-border-invert pe-12">
          <SheetTitle className="font-ui text-white">תפריט</SheetTitle>
          <SheetDescription className="sr-only">
            ניווט באתר Carrom Israel
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 pb-6">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex min-h-11 items-center border-b font-ui text-lg font-semibold transition-colors hover:border-brand-gold hover:text-white",
                  isNavActive(link.href, pathname)
                    ? "border-brand-gold text-white"
                    : "border-transparent text-white/[0.82]",
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
