"use client";

import { MenuIcon, XIcon } from "lucide-react";

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

type NavLink = {
  href: string;
  label: string;
};

export function MobileNav({ links }: { links: readonly NavLink[] }) {
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
              <a
                href={link.href}
                className="flex min-h-11 items-center border-b border-transparent font-ui text-lg font-semibold text-white/[0.82] transition-colors hover:border-brand-gold hover:text-white"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
