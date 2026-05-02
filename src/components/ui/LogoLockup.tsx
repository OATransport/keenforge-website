import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  KeenForge logo lockup.

  Single source of truth for rendering the brand mark across the site.
  Always uses the approved brand assets shipped in /public/brand. There is
  no live text, no hand-drawn SVG monogram, and no recreated wordmark.

  Variants and their approved sources:
    primary -> /brand/KeenForge_Primary_Logo_Transparent.png
    dark    -> /brand/KeenForge_Dark_Background_Logo_Transparent.png
    icon    -> /brand/KeenForge_Icon_Only_Transparent.png

  These PNGs are derived from the approved JPG masters by chroma-keying the
  flat brand background to alpha (see scripts/transparent-logos.mjs). The
  artwork itself is unchanged: same mark, same divider, same wordmark, same
  colors, same proportions. Using transparent PNGs lets the lockup sit on
  any brand surface without showing a baked rectangle behind it.

  Cache busting:
    Every src is appended with ?v=approved-transparent-2026-05-02 so the
    browser, any CDN, and the Next.js image-optimization cache must fetch
    a fresh asset. `unoptimized` is also set so next/image bypasses its
    own optimization cache and serves the raw approved file.
*/

const BRAND_VERSION = "approved-transparent-2026-05-02";

type Variant = "primary" | "dark" | "icon";

type LogoLockupProps = {
  className?: string;
  /** Visual height in pixels. Width is derived from the asset's aspect. */
  height?: number;
  variant?: Variant;
  href?: string | null;
  /** Forwarded to next/image for above-the-fold use (header). */
  priority?: boolean;
};

/*
  Intrinsic pixel dimensions of the transparent PNG files in /public/brand.
  These match the trimmed master JPGs exactly. next/image uses them to
  compute layout. Visual size is driven by the `height` prop.
*/
const VARIANT: Record<
  Variant,
  { src: string; w: number; h: number; alt: string }
> = {
  primary: {
    src: "/brand/KeenForge_Primary_Logo_Transparent.png",
    w: 770,
    h: 181,
    alt: "KeenForge logo",
  },
  dark: {
    src: "/brand/KeenForge_Dark_Background_Logo_Transparent.png",
    w: 796,
    h: 184,
    alt: "KeenForge logo for dark backgrounds",
  },
  icon: {
    src: "/brand/KeenForge_Icon_Only_Transparent.png",
    w: 429,
    h: 362,
    alt: "KeenForge icon",
  },
};

function bust(src: string) {
  return `${src}?v=${BRAND_VERSION}`;
}

export function LogoLockup({
  className,
  height = 40,
  variant = "primary",
  href = "/",
  priority = false,
}: LogoLockupProps) {
  const { src, w, h, alt } = VARIANT[variant];
  const aspect = w / h;
  const renderWidth = Math.round(height * aspect);

  const inner = (
    <Image
      src={bust(src)}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
      unoptimized
      sizes={`${renderWidth}px`}
      className={cn("block w-auto object-contain", className)}
      style={{ height, width: renderWidth }}
    />
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      aria-label="KeenForge home"
      className="inline-flex shrink-0 items-center"
    >
      {inner}
    </Link>
  );
}

/*
  Compact icon mark. Renders the icon-only asset at a fixed pixel size.
  Used in tight placements where the full horizontal lockup would not fit.
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
      src={bust("/brand/KeenForge_Icon_Only_Transparent.png")}
      alt="KeenForge icon"
      width={429}
      height={362}
      unoptimized
      className={cn("block object-contain", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}
