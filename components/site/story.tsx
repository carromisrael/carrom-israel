import { FeatureTile } from "@/components/site/feature-tile";
import { featureTiles, storyBlocks } from "@/lib/data";

export function StorySection() {
  return (
    <section
      id="story"
      className="scroll-mt-[var(--nav-h)] bg-maple-200 px-[var(--gutter)] py-[var(--section-y)]"
    >
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[clamp(40px,5vw,64px)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="m-0 max-w-[24ch] font-display text-[clamp(32px,3.6vw,56px)] font-normal leading-[1.12] tracking-[-0.015em] text-ink-900">
            שלושה מילואימניקים ושיחה על שולחן
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[clamp(20px,3vw,44px)] md:grid-cols-3">
          {storyBlocks.map((block) => (
            <div key={block.num} className="flex flex-col gap-3">
              <span
                dir="ltr"
                className="text-end font-ui text-xs font-semibold tracking-[0.18em] text-ink-700 uppercase"
              >
                {block.num}
              </span>
              <p className="m-0 font-body text-[17px] leading-[1.62] text-ink-700">
                {block.text}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-[clamp(12px,1.4vw,20px)] md:grid-cols-3">
          {featureTiles.map((tile) => (
            <FeatureTile
              key={tile.kicker}
              image={tile.image}
              kicker={tile.kicker}
              caption={tile.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
