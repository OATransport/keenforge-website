import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/sections/PageHero";
import { FounderSection } from "@/components/sections/FounderSection";
import { CTASection } from "@/components/sections/CTASection";
import { ABOUT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "KeenForge was built by an operator who runs businesses on these same systems today. Practical growth systems for local and service based businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={ABOUT.hero.eyebrow}
        title={ABOUT.hero.title}
        body={ABOUT.hero.body}
      />

      <Section tone="paper" bordered>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Eyebrow>{ABOUT.mission.eyebrow}</Eyebrow>
              <h2 className="display mt-7 text-[36px] sm:text-[46px] lg:text-[54px] text-ink">
                {ABOUT.mission.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-rule">
                {ABOUT.mission.points.map((p, i) => (
                  <li key={p} className="grid gap-4 py-7 sm:grid-cols-12">
                    <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember tabular-nums sm:col-span-2">
                      0{i + 1}
                    </span>
                    <p className="text-[17px] leading-relaxed text-ink sm:col-span-10">
                      {p}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <FounderSection />

      <Section tone="bone" bordered>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Eyebrow>{ABOUT.approach.eyebrow}</Eyebrow>
              <h2 className="display mt-7 text-[36px] sm:text-[46px] lg:text-[54px] text-ink">
                {ABOUT.approach.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[17.5px] leading-relaxed text-ink-2">
                {ABOUT.approach.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Work With Us"
        title="If This Sounds Like the Right Kind of Partner, Let Us Talk."
        body="Book a 30 minute review. We will walk through your business the way a customer would and show you what is leaking, what to fix first, and what we would build."
      />
    </>
  );
}
