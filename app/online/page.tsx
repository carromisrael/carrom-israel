import type { Metadata } from "next";

import { CarromShell } from "@/components/game/carrom-shell";
import { SiteHeader } from "@/components/site/header";

export const metadata: Metadata = {
  title: "אונליין — Carrom Israel",
  description: "שחק קארום אונליין מול המחשב. גרסת ניסיון.",
};

export default function OnlinePage() {
  return (
    <>
      <SiteHeader />
      <CarromShell />
    </>
  );
}
