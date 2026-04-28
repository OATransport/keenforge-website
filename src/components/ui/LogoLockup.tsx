import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  KeenForge logo lockup.

  Built as a code lockup so it scales sharply at any size and never carries
  the JPG margins / compression of the brand presentation files.

  - Mark: a custom SVG monogram in a rounded square. Forge Navy on light
    surfaces, Warm Ivory on dark surfaces.
  - Wordmark: live text in Fraunces serif, weight 500.

  The brand JPGs in /public/brand are still available for places that want
  the full presentation logo (e.g. social og images, footer mark).
*/

type LogoLockupProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * "ink" - light surface (default). Navy mark, navy wordmark.
   * "white" - dark surface. Ivory mark, ivory wordmark.
   */
  tone?: "ink" | "white";
  href?: string;
};

const SIZES = {
  sm: { mark: 28, text: 18, gap: 9, tracking: "-0.012em" },
  md: { mark: 34, text: 21, gap: 10, tracking: "-0.015em" },
  lg: { mark: 40, text: 25, gap: 12, tracking: "-0.02em" },
  xl: { mark: 46, text: 29, gap: 13, tracking: "-0.025em" },
} as const;

export function LogoLockup({
  className,
  size = "md",
  tone = "ink",
  href = "/",
}: LogoLockupProps) {
  const { mark, text, gap, tracking } = SIZES[size];
  const isWhite = tone === "white";

  const inner = (
    <span
      className={cn("inline-flex items-center", className)}
      aria-label="KeenForge"
      style={{ gap }}
    >
      <BrandMark size={mark} tone={tone} />
      <span
        className="font-serif"
        style={{
          fontSize: text,
          lineHeight: 1,
          letterSpacing: tracking,
          fontVariationSettings: '"SOFT" 60, "opsz" 144',
          fontWeight: 500,
          color: isWhite ? "var(--warm-ivory)" : "var(--forge-navy)",
          paddingTop: 1,
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

/*
  Custom mark.
  A rounded square frame with a sharp K monogram.
  Sharp angles for "Keen", a steady base for "Forge".
*/
function BrandMark({
  size,
  tone,
}: {
  size: number;
  tone: "ink" | "white";
}) {
  const isWhite = tone === "white";
  const bg = isWhite ? "var(--warm-ivory)" : "var(--forge-navy)";
  const fg = isWhite ? "var(--forge-navy)" : "var(--warm-ivory)";
  const accent = "var(--signal-teal)";
  const radius = Math.round(size * 0.22);

  return (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        style={{ display: "block", borderRadius: radius, background: bg }}
      >
        {/* K monogram: vertical stem, upper diagonal, lower diagonal */}
        <path
          d="M10.5 7 V25"
          stroke={fg}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M10.5 16 L21.5 7"
          stroke={fg}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M14 16 L22 25"
          stroke={fg}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Single teal spark at the join, signature accent */}
        <circle cx="13.2" cy="16" r="1.6" fill={accent} />
      </svg>
    </span>
  );
}

/* Compact image mark for places that need a flat asset (footer, og tiles). */
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
