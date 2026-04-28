import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "bone" | "paper" | "night";
  size?: "sm" | "md" | "lg";
  bordered?: boolean;
};

export function Section({
  className,
  tone = "bone",
  size = "lg",
  bordered = false,
  ...rest
}: SectionProps) {
  const tones = {
    bone: "bg-bone text-ink",
    paper: "bg-paper text-ink",
    night: "bg-night text-white",
  } as const;

  const sizes = {
    sm: "py-16 sm:py-20",
    md: "py-20 sm:py-24",
    lg: "py-24 sm:py-32",
  } as const;

  return (
    <section
      className={cn(
        tones[tone],
        sizes[size],
        bordered && tone !== "night" && "border-t border-rule",
        bordered && tone === "night" && "border-t border-night-rule",
        className,
      )}
      {...rest}
    />
  );
}
