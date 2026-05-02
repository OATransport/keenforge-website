import Image from "next/image";

/*
  KeenForge logo lockup.

  Single source of truth for rendering the brand mark. Renders ONLY the
  approved horizontal lockup (or the icon-only mark) from /public/brand
  as transparent PNGs.

  This component is intentionally dumb and literal: it is a thin wrapper
  around <Image>. There is no Link wrapper, no scaling logic, no live
  text, no SVG fallback, no icon-plus-wordmark composition. Sizing is
  driven entirely by the `className` passed in by the caller (e.g.
  `h-10 w-auto md:h-12`).

  Variants -> approved transparent PNGs in /public/brand:
    primary -> KeenForge_Primary_Logo_Transparent.png
    dark    -> KeenForge_Dark_Background_Logo_Transparent.png
    icon    -> KeenForge_Icon_Only_Transparent.png

  The "icon" variant must not be used in the desktop header or desktop
  footer; it exists only for compact placements where the full lockup
  cannot fit.

  Cache busting:
    Each src is appended with ?v=approved-transparent-2026-05-02 so the
    browser, any CDN, and the Next.js image-optimization cache must
    fetch a fresh asset. `unoptimized` is set so next/image bypasses
    its own pipeline and serves the raw approved file.
*/

const BRAND_VERSION = "approved-transparent-2026-05-02";

type LogoLockupProps = {
  variant?: "primary" | "dark" | "icon";
  className?: string;
  priority?: boolean;
};

export function LogoLockup({
  variant = "primary",
  className = "",
  priority = false,
}: LogoLockupProps) {
  const src =
    variant === "dark"
      ? "/brand/KeenForge_Dark_Background_Logo_Transparent.png"
      : variant === "icon"
        ? "/brand/KeenForge_Icon_Only_Transparent.png"
        : "/brand/KeenForge_Primary_Logo_Transparent.png";

  const alt =
    variant === "dark"
      ? "KeenForge logo for dark backgrounds"
      : variant === "icon"
        ? "KeenForge icon"
        : "KeenForge logo";

  // Intrinsic dimensions reserve layout space. The actual rendered size
  // comes from the caller's className (h-* / w-auto). The image bytes are
  // served unoptimized at their true pixel size, so aspect ratio is
  // preserved by the natural image, not these props.
  const width = variant === "icon" ? 96 : 260;
  const height = variant === "icon" ? 96 : 88;

  return (
    <Image
      src={`${src}?v=${BRAND_VERSION}`}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={`block h-auto w-auto object-contain ${className}`}
    />
  );
}
