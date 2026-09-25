import { FeatureTile } from "@/components/site/feature-tile";
import { Reveal } from "@/components/site/reveal";
import { featureTiles, storyBlocks } from "@/lib/data";

export function StorySection() {
  return (
    <section
      id="story"
      className="scroll-mt-[var(--nav-h)] bg-maple-200 px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(48px,6vw,80px)]">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <h2 className="m-0 max-w-[24ch] font-display text-[clamp(32px,3.6vw,56px)] font-normal leading-[1.12] tracking-[-0.015em] text-ink-900">
            שלושה מילואימניקים ושיחה על שולחן
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-[clamp(24px,3vw,44px)] gap-y-8 md:grid-cols-3">
          {storyBlocks.map((block, index) => (
            <Reveal
              key={block.num}
              delay={index * 0.1}
              className="flex flex-col gap-5 border-t border-ink-900/12 pt-5"
            >
              <span
                dir="ltr"
                className="inline-flex w-fit items-center self-end rounded-full border border-ink-900/12 bg-white/70 px-2.5 py-1 font-ui text-[11px] font-semibold tracking-[0.14em] text-wood-600"
              >
                {block.num}
              </span>
              <p className="m-0 font-body text-[17px] leading-[1.68] text-ink-700">
                {block.text}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-[clamp(16px,2vw,24px)] md:grid-cols-3">
          {featureTiles.map((tile, index) => (
            <Reveal key={tile.kicker} delay={index * 0.1}>
              <FeatureTile
                image={tile.image}
                kicker={tile.kicker}
                caption={tile.caption}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
