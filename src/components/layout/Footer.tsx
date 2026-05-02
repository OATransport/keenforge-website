import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoLockup } from "@/components/ui/LogoLockup";
import { FOOTER_NAV, PRIMARY_CTA } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forge-navy text-warm-ivory border-t border-forge-navy-rule">
      <Container size="wide" className="py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <LogoLockup variant="dark" height={44} />
            <p className="mt-7 max-w-md text-[15.5px] leading-relaxed text-night-ink-2">
              KeenForge connects your website, calls, CRM, booking, and
              follow up so more of the leads you already earn turn into real
              appointments.
            </p>
            <div className="mt-9">
              <Button href={PRIMARY_CTA.href} variant="primary" size="md">
                {PRIMARY_CTA.label}
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <FooterColumn title="Company" items={FOOTER_NAV.company} />
          </div>
          <div className="md:col-span-2">
            <FooterColumn title="Get started" items={FOOTER_NAV.start} />
          </div>
          <div className="md:col-span-3">
            <FooterColumn title="Legal" items={FOOTER_NAV.legal} />
          </div>
        </div>

        <div className="mt-20 border-t border-forge-navy-rule pt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] text-night-ink-2">
            &copy; {year} KeenForge. All rights reserved.
          </p>
          <p className="text-[12px] uppercase tracking-[0.18em] text-night-ink-3">
            Forged for operators
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-[12px] font-medium uppercase tracking-[0.18em] text-night-ink-3">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="text-[15px] text-warm-ivory/85 hover:text-signal-teal transition-colors"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
