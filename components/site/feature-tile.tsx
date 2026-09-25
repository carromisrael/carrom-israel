import Image from "next/image";

type FeatureTileProps = {
  image: string;
  kicker: string;
  caption: string;
};

export function FeatureTile({ image, kicker, caption }: FeatureTileProps) {
  return (
    <figure className="group m-0 flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink-800 shadow-[0_1px_0_rgba(16,14,12,0.06)] transition-shadow duration-500 group-hover:shadow-card">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <figcaption className="flex flex-col items-center gap-1.5 text-center">
        <span className="flex items-center gap-2 font-ui text-xs tracking-[0.18em] text-text-muted uppercase">
          <span className="h-px w-4 bg-brand-gold" aria-hidden />
          {kicker}
          <span className="h-px w-4 bg-brand-gold" aria-hidden />
        </span>
        <span className="font-display text-[22px] font-normal text-text-display">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
