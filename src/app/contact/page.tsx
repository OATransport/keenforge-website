import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT, PRIMARY_CTA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Real questions get real answers. Send KeenForge a note about your project, partnership, or question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={CONTACT.hero.eyebrow}
        title={CONTACT.hero.title}
        body={CONTACT.hero.body}
      />

      <Section tone="paper" bordered>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <aside className="lg:col-span-5">
              <Eyebrow>Direct</Eyebrow>
              <p className="mt-7 text-[18px] leading-relaxed text-ink">
                Short questions are easier to answer by email. If you are
                ready for a real working session, the form on the right gives
                us what we need to come prepared.
              </p>

              <dl className="mt-12 space-y-7">
                <div>
                  <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember">
                    Email
                  </dt>
                  <dd className="mt-1.5 text-[18px] font-medium tracking-tight text-ink">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="hover:text-ember"
                    >
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember">
                    Want a working session
                  </dt>
                  <dd className="mt-3">
                    <Button href={PRIMARY_CTA.href} variant="primary" size="md">
                      {PRIMARY_CTA.label}
                    </Button>
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
