import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  KeenForge logo lockup.

  This is the single source of truth for rendering the brand mark. It always
  uses the approved brand assets shipped in /public/brand. No live text, no
  hand-drawn SVG monograms.

  Variants:
    - "primary"  Horizontal lockup for light surfaces (header, light footer).
                 /brand/KeenForge_Primary_Logo.jpg
    - "dark"     Horizontal lockup for dark surfaces (dark footer, dark CTAs).
                 /brand/KeenForge_Dark_Background_Logo.jpg
    - "icon"     Square icon mark only. For compact placements.
                 /brand/KeenForge_Icon_Only.jpg

  Sizing:
    The brand JPGs include a generous safe area (designer padding) baked in.
    To present the logo at a confident on-screen size without leaving the
    container looking empty, the horizontal lockups are rendered inside an
    overflow-hidden container with object-fit: cover and an aspect ratio
    tuned to the visible glyph bounds. This trims only the empty top/bottom
    margin of the source file. The mark and wordmark are never cropped.
*/

type Variant = "primary" | "dark" | "icon";

type LogoLockupProps = {
  className?: string;
  /**
   * Visual height of the rendered lockup, in pixels.
   * Width is derived from the variant aspect ratio.
   */
  height?: number;
  variant?: Variant;
  href?: string | null;
  /** Forwarded to next/image for above-the-fold use (header). */
  priority?: boolean;
};

/*
  Aspect ratios are tuned to the visible glyph bounds inside each source
  file, NOT the raw canvas. Cover-fitting at this aspect crops only the
  empty top/bottom margin so the wordmark fills the container at a
  confident reading size.
*/
const VARIANT = {
  primary: {
    src: "/brand/KeenForge_Primary_Logo.jpg",
    aspect: 4.0,
    alt: "KeenForge logo",
  },
  dark: {
    src: "/brand/KeenForge_Dark_Background_Logo.jpg",
    aspect: 4.0,
    alt: "KeenForge logo",
  },
  icon: {
    src: "/brand/KeenForge_Icon_Only.jpg",
    aspect: 1,
    alt: "KeenForge logo",
  },
} as const;

export function LogoLockup({
  className,
  height = 40,
  variant = "primary",
  href = "/",
  priority = false,
}: LogoLockupProps) {
  const { src, aspect, alt } = VARIANT[variant];
  const width = Math.round(height * aspect);

  const inner = (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden align-middle",
        className,
      )}
      style={{ height, width }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width}px`}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </span>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      aria-label="KeenForge home"
      className="inline-flex items-center"
    >
      {inner}
    </Link>
  );
}

/*
  Compact icon mark.
  Renders the square icon-only asset. Used in tight placements where the
  full horizontal lockup would not fit.
*/
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
      alt="KeenForge logo"
      width={size}
      height={size}
      className={cn("block rounded-[8px]", className)}
      style={{ width: size, height: size, objectFit: "cover" }}
    />
  );
}
