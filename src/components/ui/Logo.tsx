import Image from "next/image";

/*
  KeenForge logo.

  Single source of truth. Renders only the one approved transparent
  brand asset at /public/brand/KeenForge_Logo_Transparent.png.

  No variants, no Link wrapper, no SVG, no live text, no icon-only
  fallback. Sizing is driven entirely by the caller's `className`
  (e.g. `h-10 w-auto md:h-12`). next/image runs `unoptimized` so the
  raw approved PNG is served as-is.

  Cache busting: the src is appended with a version query string so
  the browser, any CDN, and the Next.js image-optimization cache all
  refetch when the asset is updated.
*/

const BRAND_VERSION = "single-transparent-2026-05-02";
const SRC = "/brand/KeenForge_Logo_Transparent.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src={`${SRC}?v=${BRAND_VERSION}`}
      alt="KeenForge logo"
      width={260}
      height={88}
      priority={priority}
      unoptimized
      className={`block h-auto w-auto object-contain ${className}`}
    />
  );
}
