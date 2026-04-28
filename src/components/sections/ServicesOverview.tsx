import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SERVICE_GROUPS } from "@/lib/content";

/*
  How KeenForge turns interest into booked work.

  Five connected layers presented as premium cards. The numbers stay quiet,
  the verbs read like real business activities, and the included services are
  shown as labelled tags instead of pasted text so each card lands as one
  composition.
*/
export function ServicesOverview() {
  return (
    <Section tone="paper" bordered id="system">
      <Container size="wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-signal-teal">
              How the System Works
            </span>
            <h2 className="display mt-4 text-[36px] sm:text-[46px] lg:text-[56px] text-forge-navy">
              How KeenForge Turns Interest Into Booked Work.
            </h2>
            <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-deep-charcoal/80">
              Each part of the system has a job. Capture the lead, answer
              quickly, organize the details, follow up until the next step is
              clear, and keep improving what happens after first contact.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 self-start text-[14px] font-medium text-forge-navy hover:text-signal-teal"
          >
            See full services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_GROUPS.map((g, i) => {
            const sample = g.services.slice(0, 4).map((s) => s.title);
            return (
              <Link
                href={`/services#${g.id}`}
                key={g.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-steel-rule bg-warm-ivory transition-all hover:border-forge-navy hover:shadow-[0_30px_60px_-30px_rgba(11,31,51,0.20)]"
              >
                {/* Stage marker */}
                <div className="flex items-center justify-between px-7 pt-7">
                  <span className="inline-flex items-center gap-3">
                    <span className="serif-italic text-[26px] leading-none text-signal-teal tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="h-px w-7 bg-signal-teal/50" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-steel-gray transition-colors group-hover:text-signal-teal" />
                </div>

                <div className="flex flex-1 flex-col px-7 pt-5 pb-7">
                  <h3 className="text-[26px] font-semibold tracking-tight text-forge-navy">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-deep-charcoal/80">
                    {g.promise}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {sample.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full border border-steel-rule bg-warm-ivory-2 px-2.5 py-1 text-[12px] text-deep-charcoal/85"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
