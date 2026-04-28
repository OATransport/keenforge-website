import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { SERVICE_GROUPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Capture, Respond, Organize, Follow Up, and Improve. The connected operating layer KeenForge installs for local and service based businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The Connected System Behind Every Booked Appointment."
        body="We do not sell tools. We install the layer between your marketing and your revenue. Five layers, one journey, and a clear path from inquiry to booked work."
      />

      <Section tone="paper" bordered size="md">
        <Container size="wide">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICE_GROUPS.map((g, i) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="group flex h-full items-center justify-between rounded-2xl border border-steel-rule bg-warm-ivory px-5 py-4 transition-colors hover:border-forge-navy"
                >
                  <span className="flex flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-signal-teal tabular-nums">
                      Layer 0{i + 1}
                    </span>
                    <span className="mt-1 text-[15px] font-medium tracking-tight text-forge-navy">
                      {g.layer}
                    </span>
                  </span>
                  <span className="text-steel-gray transition-colors group-hover:text-signal-teal">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {SERVICE_GROUPS.map((g, gi) => (
        <Section
          key={g.id}
          tone={gi % 2 === 0 ? "bone" : "paper"}
          bordered
          size="md"
          id={g.id}
        >
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-signal-teal tabular-nums">
                  Layer 0{gi + 1} &middot; {g.layer}
                </span>
                <h2 className="display mt-4 text-[32px] sm:text-[40px] lg:text-[44px] text-forge-navy">
                  {g.title}
                </h2>
                <p className="serif-italic mt-5 text-[18px] leading-snug text-signal-teal-deep">
                  {g.promise}
                </p>
                <p className="mt-5 text-[15.5px] leading-relaxed text-deep-charcoal/80">
                  {g.summary}
                </p>
              </div>
              <div className="lg:col-span-8">
                <ul className="grid gap-px overflow-hidden rounded-2xl border border-steel-rule bg-steel-rule sm:grid-cols-2">
                  {g.services.map((s) => (
                    <li
                      key={s.title}
                      className={
                        gi % 2 === 0
                          ? "bg-warm-ivory-2 p-7"
                          : "bg-warm-ivory p-7"
                      }
                    >
                      <h3 className="text-[17px] font-semibold tracking-tight text-forge-navy">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-deep-charcoal/80">
                        {s.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <FAQ title="Common Questions Before Booking a Review." />
      <CTASection />
    </>
  );
}
