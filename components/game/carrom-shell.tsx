"use client";

import { BotIcon, PauseIcon, PlayIcon, TrophyIcon, UserIcon } from "lucide-react";
import { useCallback, useRef, useState, type ReactNode } from "react";

import { CarromBoard } from "@/components/game/carrom-board";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CarromShell() {
  const [striker, setStriker] = useState(0.5);
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative isolate flex h-[calc(100dvh-var(--nav-h))] flex-col overflow-hidden bg-[#071422]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `radial-gradient(circle at 18% 42%, rgba(215,154,60,0.18), transparent 32%),
            radial-gradient(circle at 82% 70%, rgba(62,144,191,0.14), transparent 36%),
            radial-gradient(circle at 50% 0%, rgba(27,78,147,0.35), transparent 48%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -start-24 top-1/4 size-[min(52vw,420px)] rounded-full border border-white/5"
      />

      <div
        dir="ltr"
        className="relative mx-auto flex h-full w-full max-w-lg flex-col px-3 pt-2 pb-3 md:max-w-xl md:px-4"
      >
        <div className="flex items-center justify-center py-1">
          <div className="inline-flex min-h-11 items-center gap-2 rounded-pill bg-white/90 px-4 font-ui text-sm font-bold text-navy-800 shadow-sm">
            <TrophyIcon className="size-4 text-brand-gold" aria-hidden />
            <span>0</span>
          </div>
        </div>

        <header className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 py-2">
          <PlayerCard
            align="start"
            label="אתה"
            score={0}
            piece="white"
            icon={<UserIcon className="size-5 text-white" />}
            avatarClass="bg-clay-500"
          />

          <LoungeBadge />

          <PlayerCard
            align="end"
            label="מחשב"
            score={0}
            piece="black"
            icon={<BotIcon className="size-5 text-white" />}
            avatarClass="bg-navy-600"
          />
        </header>

        <div className="relative flex min-h-0 flex-1 flex-col rounded-[22px] bg-[#1e4d3a] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:p-3">
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            className="absolute top-2 right-2 z-20 size-11 text-white hover:bg-white/10 hover:text-white"
            aria-label={paused ? "המשך" : "השהה"}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? <PlayIcon className="size-5" /> : <PauseIcon className="size-5" />}
          </Button>
          <CarromBoard strikerSlider={striker} />
          {paused ? <PauseOverlay onResume={() => setPaused(false)} /> : null}
        </div>

        <StrikerSlider value={striker} onChange={setStriker} disabled={paused} />

        <p className="mt-1 text-center font-ui text-[12px] text-white/55">
          הזיזו את הסטרייקר — הירייה מול המחשב תגיע בשלב הבא
        </p>
      </div>
    </div>
  );
}

function LoungeBadge() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative flex min-w-[7.5rem] flex-col items-center rounded-[18px] border-2 border-brand-gold bg-gradient-to-b from-navy-700 to-navy-900 px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
        <svg
          viewBox="0 0 64 40"
          className="mb-0.5 h-6 w-10 text-brand-gold"
          aria-hidden
        >
          <polygon
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points="32,4 44,24 20,24"
          />
          <polygon
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points="32,36 44,16 20,16"
          />
        </svg>
        <span className="font-display-latin text-[11px] leading-none font-semibold tracking-[0.12em] text-maple-100">
          CARROM
        </span>
        <span className="font-display-latin text-[11px] leading-none font-semibold tracking-[0.18em] text-brand-gold">
          ISRAEL
        </span>
      </div>
    </div>
  );
}

function PlayerCard({
  align,
  label,
  score,
  piece,
  icon,
  avatarClass,
}: {
  align: "start" | "end";
  label: string;
  score: number;
  piece: "white" | "black";
  icon: ReactNode;
  avatarClass: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        align === "end" && "flex-row-reverse",
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="font-ui text-[10px] font-bold tracking-[0.14em] text-white/80 uppercase">
          {label}
        </span>
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-md shadow-md",
            avatarClass,
          )}
        >
          {icon}
        </div>
        <div className="flex items-center gap-1 font-ui text-sm font-bold text-white">
          <span
            className={cn(
              "size-3.5 rounded-full border border-black/20",
              piece === "white" ? "bg-maple-100" : "bg-ink-800",
            )}
            aria-hidden
          />
          {score}
        </div>
      </div>
    </div>
  );
}

function StrikerSlider({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (next: number) => void;
  disabled: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track || disabled) return;
      const rect = track.getBoundingClientRect();
      const next = (clientX - rect.left) / rect.width;
      onChange(Math.min(1, Math.max(0, next)));
    },
    [disabled, onChange],
  );

  return (
    <div
      ref={trackRef}
      role="slider"
      aria-label="מיקום הסטרייקר"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value * 100)}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        "relative mt-3 h-14 w-full touch-none rounded-pill bg-[#2c6b4f]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
        disabled && "opacity-50",
      )}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        setFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          setFromClientX(event.clientX);
        }
      }}
      onKeyDown={(event) => {
        if (disabled) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
          event.preventDefault();
          onChange(Math.max(0, value - 0.05));
        }
        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
          event.preventDefault();
          onChange(Math.min(1, value + 0.05));
        }
        if (event.key === "Home") onChange(0);
        if (event.key === "End") onChange(1);
      }}
    >
      <div
        className="absolute top-1/2 size-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-gold bg-gradient-to-br from-wood-500 to-wood-800 shadow-md"
        style={{ left: `${value * 100}%` }}
      >
        <span className="absolute inset-[22%] rounded-full border border-brand-gold/70" />
      </div>
    </div>
  );
}

function PauseOverlay({ onResume }: { onResume: () => void }) {
  return (
    <div className="absolute inset-2 z-10 flex flex-col items-center justify-center rounded-[18px] bg-[#071422]/72 px-6 text-center backdrop-blur-[2px]">
      <p className="font-display text-2xl text-maple-100">מושהה</p>
      <p className="mt-2 max-w-[28ch] font-body text-sm text-sand-50/75">
        גרסת ניסיון — הלוח סטטי. בשלב הבא נוסיף ירייה ואת תור המחשב.
      </p>
      <Button type="button" variant="gold" size="cta-md" className="mt-5" onClick={onResume}>
        המשך
      </Button>
    </div>
  );
}
