import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/*
  KeenForge logo lockup.

  Single source of truth for rendering the brand mark across the site.
  Always uses the approved brand assets shipped in /public/brand. There is
  no live text, no hand-drawn SVG monogram, and no recreated wordmark.

  Variants:
    - "primary"  Horizontal lockup for light surfaces (header, light footer).
                 /brand/KeenForge_Primary_Logo.jpg
    - "dark"     Horizontal lockup for dark surfaces (dark footer, dark CTAs).
                 /brand/KeenForge_Dark_Background_Logo.jpg
    - "icon"     Mark only. For compact placements where the wordmark would
                 not fit (mobile menu, favicons, etc).
                 /brand/KeenForge_Icon_Only.jpg

  The brand JPGs in /public/brand were trimmed once with scripts/trim-logos.mjs
  to remove the empty safe-area padding that ships with the master files. The
  pixel dimensions and aspect ratios below match the trimmed assets exactly,
  so object-contain renders the lockup at its natural size with no cropping
  and no surrounding whitespace.
*/

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

const VARIANT: Record<
  Variant,
  { src: string; w: number; h: number; alt: string }
> = {
  primary: {
    src: "/brand/KeenForge_Primary_Logo.jpg",
    w: 770,
    h: 181,
    alt: "KeenForge logo",
  },
  dark: {
    src: "/brand/KeenForge_Dark_Background_Logo.jpg",
    w: 796,
    h: 184,
    alt: "KeenForge logo for dark backgrounds",
  },
  icon: {
    src: "/brand/KeenForge_Icon_Only.jpg",
    w: 429,
    h: 362,
    alt: "KeenForge icon",
  },
};

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
      src={src}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
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
      className="inline-flex items-center"
    >
      {inner}
    </Link>
  );
}

/*
  Compact icon mark. Renders the square-ish icon-only asset at a fixed
  pixel size. Used in tight placements where the full horizontal lockup
  would not fit.
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
      alt="KeenForge icon"
      width={429}
      height={362}
      className={cn("block object-contain", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}
