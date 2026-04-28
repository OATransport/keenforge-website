import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "ember" | "outline" | "ink" | "white";
};

export function Badge({
  className,
  tone = "outline",
  children,
  ...rest
}: BadgeProps) {
  const tones = {
    ember: "bg-ember-tint text-ember-deep border border-transparent",
    outline: "border border-rule text-ink-2 bg-transparent",
    ink: "bg-ink text-bone border border-transparent",
    white: "border border-white/20 text-white/80 bg-white/5",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
