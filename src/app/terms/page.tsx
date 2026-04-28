import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "KeenForge terms of service placeholder. Review with counsel before launch.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service."
        body="The rules around using this website. Service engagements are governed by separate signed agreements."
      />

      <Section tone="paper" bordered>
        <Container size="narrow">
          <Badge tone="ember">Placeholder. Review before launch.</Badge>

          <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-ink-2">
            <p>
              This page is a working placeholder. Final terms should be reviewed
              and approved by qualified legal counsel before going live.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">
              Use of this site
            </h2>
            <p>
              You may use keenforge.com for personal and business research, to
              learn about our services, and to contact us. You may not use it
              to misrepresent your identity, harm the site, or violate
              applicable law.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">
              Content and ownership
            </h2>
            <p>
              All content on this site, including text, graphics, layout, and
              code, is owned by KeenForge unless otherwise noted. You may not
              copy or reuse it without permission.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">
              No warranty
            </h2>
            <p>
              The site is provided as is. KeenForge does not guarantee that the
              site will always be available or free of errors. Service
              engagements with KeenForge are governed by their own signed
              agreements, not by this page.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">Changes</h2>
            <p>
              We may update these terms at any time. The updated version will
              be posted here with a new effective date.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">Contact</h2>
            <p>
              Questions can be sent to hello@keenforge.com.
            </p>

            <p className="text-[13px] text-ink-3">
              Last updated: placeholder. Replace with actual effective date on
              launch.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
