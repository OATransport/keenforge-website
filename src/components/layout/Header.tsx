"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NAV, PRIMARY_CTA } from "@/lib/content";
import { cn } from "@/lib/utils";

/*
  Sticky header with a compact scrolled state.

  - Always sticky at top of viewport (z-50).
  - Compact mode kicks in after a short scroll: tighter padding so the menu
    button and CTA stay visible without dominating the viewport.
  - Mobile drawer is full-viewport, scroll locked, closes on:
      route change, Escape key, backdrop click, or link click.
*/

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // Close the mobile drawer whenever the route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-warm-ivory transition-shadow duration-300",
        scrolled
          ? "border-b border-steel-rule shadow-[0_2px_24px_-14px_rgba(11,31,51,0.18)]"
          : "border-b border-transparent",
      )}
    >
      <Container
        size="wide"
        className={cn(
          "transition-[padding] duration-300",
          scrolled ? "py-2.5" : "py-3.5 sm:py-4",
        )}
      >
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="KeenForge home"
            className="inline-flex shrink-0 items-center"
          >
            <Logo priority className="h-10 md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-[15px] tracking-tight rounded-full transition-colors",
                    active
                      ? "text-forge-navy"
                      : "text-steel-gray hover:text-forge-navy",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="ghost" size="md">
              Contact
            </Button>
            <Button href={PRIMARY_CTA.href} variant="primary" size="md">
              {PRIMARY_CTA.label}
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel-rule bg-warm-ivory text-forge-navy hover:bg-signal-teal-tint transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <MobileDrawer
        open={open}
        pathname={pathname}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}

function MobileDrawer({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  return (
    <div
      id="mobile-drawer"
      className={cn(
        "lg:hidden fixed inset-0 z-40 transition-opacity duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop, clickable to close. Sits behind the panel. */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-forge-navy/40 backdrop-blur-sm"
      />

      {/*
        Panel covers the full viewport. Header (z-50) sits on top of the
        drawer (z-40), so the menu button is still tappable to close. We pad
        the top of the inner container to clear the largest header height in
        either compact or expanded state.
      */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute inset-0 overflow-y-auto bg-warm-ivory"
      >
        <Container className="pt-24 pb-12">
          <nav className="flex flex-col">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "py-4 border-b border-steel-rule text-2xl tracking-tight",
                    active ? "text-forge-navy" : "text-steel-gray",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={onClose}
              className="py-4 border-b border-steel-rule text-2xl tracking-tight text-steel-gray"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-8">
            <Button
              href={PRIMARY_CTA.href}
              variant="primary"
              size="lg"
              className="w-full"
              onClick={onClose}
            >
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
