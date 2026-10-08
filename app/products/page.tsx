import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { Reveal } from "@/components/site/reveal";
import { ProductTeaserCard } from "@/components/site/product-teaser-card";
import { ProductDetail } from "@/components/site/product-detail";
import { SpecTable } from "@/components/site/spec-table";
import { Button } from "@/components/ui/button";
import { boxContents, products, shippingInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "הלוחות שלנו — Carrom Israel",
  description:
    "שלושה דגמים, אותו משטח מייפל: Classic, Pro ו-Champion. השוו עובי, מסגרת ומחיר ובחרו את הלוח שלכם.",
};

const [classic, pro, champion] = products;

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-ink-900 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2a333d_0%,transparent_70%)] px-[var(--gutter)] py-[clamp(56px,7vw,96px)]">
        <Reveal className="mx-auto flex max-w-[var(--container-max)] flex-col items-center gap-5 text-center">
          <span className="font-ui text-xs font-semibold tracking-[0.18em] text-sand-50/55 uppercase">
            שלושה דגמים · SISCAA
          </span>
          <h1 className="m-0 max-w-[22ch] font-display text-[clamp(38px,5vw,76px)] leading-[1.02] tracking-[-0.015em] text-sand-50">
            אותו משטח מייפל. שלוש מסגרות.
          </h1>
          <p className="m-0 max-w-[52ch] font-body text-[17px] leading-[1.65] text-sand-50/72">
            כל לוח מגיע עם 19 דיסקיות, שני סטרייקרים, אבקת החלקה, הוראות
            בעברית ואחריות שנתיים. מלאי בישראל, משלוח 3 ימי עסקים.
          </p>
        </Reveal>
      </section>

      <section className="bg-ink-900 px-[var(--gutter)] pb-[clamp(56px,7vw,96px)]">
        <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[var(--grid-gap)]">
          {[classic, pro, champion].map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <ProductTeaserCard product={product} featured={product.id === "pro"} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProductDetail product={champion} imageSide="start" />
      <ProductDetail product={pro} imageSide="end" tone="band" />
      <ProductDetail product={classic} imageSide="start" />

      <section className="bg-ink-900 px-[var(--gutter)] py-[clamp(56px,7vw,104px)] text-sand-50">
        <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[clamp(32px,5vw,72px)]">
          <Reveal className="flex flex-col gap-5">
            <span className="font-ui text-xs font-semibold tracking-[0.18em] text-sand-50/55 uppercase">
              מה יש בקופסה
            </span>
            <h2 className="m-0 font-display text-[clamp(28px,2.8vw,42px)] tracking-[-0.015em] text-sand-50">
              הכול בפנים, מהמשלוח הראשון
            </h2>
            <SpecTable rows={boxContents} tone="invert" />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <span className="font-ui text-xs font-semibold tracking-[0.18em] text-sand-50/55 uppercase">
              משלוח ואחריות
            </span>
            <h2 className="m-0 font-display text-[clamp(28px,2.8vw,42px)] tracking-[-0.015em] text-sand-50">
              לפני שמזמינים
            </h2>
            <SpecTable rows={shippingInfo} tone="invert" />
            <div className="mt-2 flex flex-wrap items-center gap-5">
              <Button variant="gold" size="cta-md" asChild>
                <a
                  href="https://wa.me/972000000000?text=%D7%94%D7%99%D7%99%2C%20%D7%99%D7%A9%20%D7%9C%D7%99%20%D7%A9%D7%90%D7%9C%D7%94%20%D7%A2%D7%9C%20%D7%93%D7%92%D7%9D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  שאלה על דגם? כתבו לנו
                </a>
              </Button>
              <Link
                href="/how-to-play"
                className="carrom-focus inline-flex min-h-11 items-center font-ui text-[15px] font-semibold text-sand-50 transition-colors hover:text-brand-gold"
              >
                איך משחקים ←
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
