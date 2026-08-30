import { FlipCard } from "@/components/site/flip-card";
import { formatPrice, products } from "@/lib/data";

export function ModelsSection() {
  return (
    <section
      id="models"
      className="scroll-mt-[var(--nav-h)] bg-maple-400 px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="m-0 font-ui text-[clamp(40px,4.6vw,72px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-display">
            בחרו את הדגם שלכם
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-[var(--grid-gap)] md:grid-cols-3">
          {products.map((product) => (
            <FlipCard
              key={product.id}
              name={product.name}
              kicker={product.kicker}
              priceLabel={formatPrice(product.price)}
              image={product.image}
              imageAlt={product.name}
              imageRotate={product.imageRotate}
              blurb={product.blurb}
              specs={[
                { label: "עובי הלוח", value: product.thickness },
                { label: "מסגרת", value: product.frame },
                { label: "משקל", value: product.weight },
                { label: "מידות", value: product.size },
              ]}
              href={`/products#${product.id}`}
              backClassName={product.backBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
