import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "ember" | "ink" | "white";
};

export function Eyebrow({
  className,
  tone = "ember",
  children,
  ...rest
}: EyebrowProps) {
  const tones = {
    ember: "text-ember",
    ink: "text-ink-2",
    white: "text-white/70",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          tone === "ember" && "bg-ember",
          tone === "ink" && "bg-ink-3",
          tone === "white" && "bg-white/40",
        )}
      />
      {children}
    </span>
  );
}
