import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-teal",
  {
    variants: {
      variant: {
        // Primary CTA: Signal Teal on Warm Ivory text. Premium hover deepens.
        primary:
          "bg-signal-teal text-warm-ivory hover:bg-signal-teal-deep active:bg-signal-teal-deep shadow-[0_1px_0_0_rgba(11,31,51,0.08)]",
        // Solid teal (alias retained for places that asked for "ember")
        ember:
          "bg-signal-teal text-warm-ivory hover:bg-signal-teal-deep active:bg-signal-teal-deep",
        // Secondary on light: navy outline, fills navy on hover
        outline:
          "border border-forge-navy text-forge-navy hover:bg-forge-navy hover:text-warm-ivory bg-transparent",
        ghost:
          "text-forge-navy hover:text-signal-teal bg-transparent",
        light:
          "bg-warm-ivory text-forge-navy hover:bg-signal-teal-tint border border-steel-rule",
        // On dark backgrounds: ivory pill that hovers to teal
        nightPrimary:
          "bg-warm-ivory text-forge-navy hover:bg-signal-teal hover:text-warm-ivory",
        nightOutline:
          "border border-warm-ivory/35 text-warm-ivory hover:bg-warm-ivory hover:text-forge-navy",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-5 text-[15px] rounded-full",
        lg: "h-12 px-6 text-[15px] rounded-full",
        xl: "h-14 px-7 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type CommonProps = VariantProps<typeof button> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant, size, className } = props;
  const classes = cn(button({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, children, ...rest } = props as ButtonAsLink;
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
