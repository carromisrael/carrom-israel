import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { WhatSection } from "@/components/site/what";
import { ModelsSection } from "@/components/site/models";
import { StorySection } from "@/components/site/story";
import { EventsSection } from "@/components/site/events";
import { TrustSection } from "@/components/site/trust";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <SiteHeader overlay />
      <Hero />
      <WhatSection guideHref="/how-to-play" />
      <ModelsSection />
      <StorySection />
      <EventsSection />
      <TrustSection />
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
