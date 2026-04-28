import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  KeenForge logo lockup.

  Built as a code lockup: the brand icon (rendered from the icon JPG) plus
  the wordmark in Fraunces serif. This scales cleanly at any size and avoids
  the JPG compression that the full-image logo shows at small dimensions.

  For the very few dark surfaces that need it (footer, dark hero overlays),
  the wordmark switches to warm ivory and the icon swaps to the dark-bg JPG.
*/

type LogoLockupProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * "ink" - light surface, navy wordmark
   * "white" - dark surface, warm ivory wordmark
   */
  tone?: "ink" | "white";
  href?: string;
};

const SIZES = {
  sm: { icon: 28, text: 18, gap: 10, tracking: "-0.01em" },
  md: { icon: 34, text: 21, gap: 11, tracking: "-0.015em" },
  lg: { icon: 40, text: 25, gap: 12, tracking: "-0.02em" },
  xl: { icon: 48, text: 30, gap: 14, tracking: "-0.025em" },
} as const;

export function LogoLockup({
  className,
  size = "md",
  tone = "ink",
  href = "/",
}: LogoLockupProps) {
  const { icon, text, gap, tracking } = SIZES[size];
  const isWhite = tone === "white";

  const iconSrc = isWhite
    ? "/brand/KeenForge_Dark_Background_Logo.jpg"
    : "/brand/KeenForge_Icon_Only.jpg";

  const inner = (
    <span
      className={cn("inline-flex items-center", className)}
      aria-label="KeenForge"
      style={{ gap }}
    >
      <span
        className="relative inline-block overflow-hidden rounded-[8px]"
        style={{ width: icon, height: icon }}
        aria-hidden
      >
        <Image
          src={iconSrc}
          alt=""
          width={icon * 2}
          height={icon * 2}
          priority
          sizes={`${icon}px`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: isWhite ? "contain" : "cover",
            objectPosition: "center",
            background: isWhite ? "var(--forge-navy)" : "transparent",
          }}
        />
      </span>
      <span
        className="font-serif"
        style={{
          fontSize: text,
          lineHeight: 1,
          letterSpacing: tracking,
          fontVariationSettings: '"SOFT" 60, "opsz" 144',
          fontWeight: 500,
          color: isWhite ? "var(--warm-ivory)" : "var(--forge-navy)",
          paddingTop: 2,
        }}
      >
        KeenForge
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link
      href={href}
      className="inline-flex items-center"
      aria-label="KeenForge home"
    >
      {inner}
    </Link>
  );
}

/* Compact icon mark for badges, mobile drawer headers, empty states. */
export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/brand/KeenForge_Icon_Only.jpg"
      alt="KeenForge icon"
      width={size}
      height={size}
      className={cn("block rounded-[8px]", className)}
      style={{ width: size, height: size, objectFit: "cover" }}
    />
  );
}
