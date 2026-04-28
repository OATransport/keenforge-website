import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { INDUSTRIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "KeenForge works with home services, med spas and clinics, legal and professional offices, automotive, real estate teams, and other local appointment based businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for Businesses That Run on Calls, Forms, and Appointments."
        body="Home services are a strong fit. So are clinics, legal offices, repair shops, real estate teams, and any business where speed and follow up move the calendar. If a missed lead costs you real money, this works."
      />

      <Section tone="paper" bordered size="md">
        <Container size="wide">
          <div className="space-y-px overflow-hidden rounded-2xl border border-rule bg-rule">
            {INDUSTRIES.map((ind) => (
              <article
                key={ind.slug}
                className="grid gap-8 bg-bone p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
              >
                <div className="lg:col-span-4">
                  <h2 className="text-[26px] font-semibold tracking-tight text-ink">
                    {ind.name}
                  </h2>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-ink-2">
                    {ind.examples}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember">
                    Where opportunities are usually lost
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {ind.problem}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember">
                    How KeenForge helps
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {ind.solution}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.bestFit.map((b) => (
                      <Badge key={b} tone="outline">
                        {b}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Built for Your Kind of Business"
        title="See What This Looks Like Inside Your Shop, Clinic, or Team."
        body="Book a 30 minute review. We will walk through your current intake the way a real customer experiences it and show you what to fix first."
      />
    </>
  );
}
