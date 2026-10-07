import { FlipCard } from "@/components/site/flip-card";
import { Reveal } from "@/components/site/reveal";
import { formatPrice, products } from "@/lib/data";

export function ModelsSection() {
  return (
    <section
      id="models"
      className="scroll-mt-[var(--nav-h)] bg-ink-800 px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="h-px w-12 bg-brand-gold" aria-hidden />
          <h2 className="m-0 font-ui text-[clamp(36px,4.6vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-sand-50">
            בחרו את הדגם שלכם
          </h2>
          <p className="m-0 max-w-[36rem] font-body text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-sand-50/70">
            שלושה לוחות, אותו משטח מייפל. ההבדל הוא בעובי, במשקל ובמסגרת.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-[420px] grid-cols-1 gap-10 lg:mt-16 lg:gap-[var(--grid-gap)] lg:max-w-none lg:grid-cols-3 lg:items-start">
          {products.map((product, index) => (
            <div key={product.id} className={index === 1 ? "lg:-translate-y-6" : undefined}>
              <Reveal delay={index * 0.1}>
                <FlipCard
                  name={product.name}
                  kicker={product.kicker}
                  priceLabel={formatPrice(product.price)}
                  image={product.image}
                  imageAlt={`לוח קארום ${product.name}`}
                  blurb={product.blurb}
                  specs={[
                    { label: "עובי הלוח", value: product.thickness },
                    { label: "מסגרת", value: product.frame },
                    { label: "משקל", value: product.weight },
                    { label: "מידות", value: product.size },
                  ]}
                  href={`/products#${product.id}`}
                  backClassName={product.backBg}
                  featured={index === 1}
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
