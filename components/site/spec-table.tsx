import { cn } from "@/lib/utils";

export type SpecRow = {
  label: string;
  value: string;
};

export function SpecTable({
  rows,
  tone = "default",
  className,
}: {
  rows: readonly SpecRow[];
  tone?: "default" | "invert";
  className?: string;
}) {
  return (
    <dl className={cn("m-0 flex flex-col", className)}>
      {rows.map((row) => (
        <div
          key={row.label}
          className={cn(
            "flex items-baseline justify-between gap-4 border-b py-3 font-ui text-[16px] last:border-b-0",
            tone === "invert"
              ? "border-sand-50/18"
              : "border-border-hairline",
          )}
        >
          <dt
            className={cn(
              tone === "invert" ? "text-sand-50/60" : "text-text-muted",
            )}
          >
            {row.label}
          </dt>
          <dd
            className={cn(
              "m-0 text-end font-semibold",
              tone === "invert" ? "text-sand-50" : "text-text-display",
            )}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
