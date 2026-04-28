import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "KeenForge privacy policy placeholder. Review with counsel before launch.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy."
        body="A short version of how KeenForge handles information collected through this website."
      />

      <Section tone="paper" bordered>
        <Container size="narrow">
          <Badge tone="ember">Placeholder. Review before launch.</Badge>

          <div className="prose-keenforge mt-8 space-y-6 text-[16px] leading-relaxed text-ink-2">
            <p>
              This page is a working placeholder. Final terms should be
              reviewed and approved by qualified legal counsel before going
              live.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">
              What we collect
            </h2>
            <p>
              When you submit a form on keenforge.com, we collect the
              information you provide, such as your name, email, phone, and
              business details. We may also collect basic technical data such
              as IP address, browser type, and pages visited, along with UTM
              parameters from inbound links.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">
              How we use it
            </h2>
            <p>
              We use this information to respond to your request, schedule
              calls, and communicate about KeenForge services. We do not sell
              your information to third parties.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">
              Cookies and analytics
            </h2>
            <p>
              KeenForge may use cookies and analytics tools to understand how
              the site is used and to improve it. You can disable cookies in
              your browser if you prefer.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">Your rights</h2>
            <p>
              You can ask us at any time what information we have about you,
              update it, or request that we delete it. Email
              hello@keenforge.com to make a request.
            </p>

            <h2 className="display text-[26px] text-ink mt-10">Contact</h2>
            <p>
              Questions about this policy can be sent to
              hello@keenforge.com.
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
