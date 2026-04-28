import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

export function Container({
  className,
  size = "default",
  ...rest
}: ContainerProps) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  } as const;

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        widths[size],
        className,
      )}
      {...rest}
    />
  );
}
