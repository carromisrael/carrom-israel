import Image from "next/image";

type FeatureTileProps = {
  image: string;
  kicker: string;
  caption: string;
};

export function FeatureTile({ image, kicker, caption }: FeatureTileProps) {
  return (
    <figure className="group m-0 flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden bg-ink-800">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.07]"
        />
      </div>
      <figcaption className="flex flex-col gap-1 text-center">
        <span className="font-ui text-xs tracking-[0.18em] text-text-muted uppercase">
          {kicker}
        </span>
        <span className="font-display text-[22px] font-normal text-text-display">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
