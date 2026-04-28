import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SERVICE_GROUPS } from "@/lib/content";

/*
  How leads move from first contact to booked work.

  Five connected stages. Cards laid out as 3 + 2 with the final "Improve"
  card spanning the full second row, so the grid never looks accidentally
  empty. The closing card reads as the loop that makes everything else
  better month over month.
*/
export function ServicesOverview() {
  return (
    <Section tone="paper" bordered id="system">
      <Container size="wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-signal-teal">
              The System
            </span>
            <h2 className="display mt-4 text-[36px] sm:text-[46px] lg:text-[56px] text-forge-navy">
              How Leads Move From First Contact to Booked Work
            </h2>
            <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-deep-charcoal/80">
              Each part has a job. Capture the lead, answer quickly,
              organize the details, follow up until the next step is clear,
              and keep improving what happens after first contact.
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

        {/* 3 + 2 layout: first row holds Capture / Respond / Organize.
            Second row holds Follow Up + Improve, with Improve as the wide
            closing card so the grid never looks accidentally empty. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {SERVICE_GROUPS.map((g, i) => {
            const isFinal = i === SERVICE_GROUPS.length - 1;
            const isFollowUp = i === SERVICE_GROUPS.length - 2;
            const span = isFinal
              ? "lg:col-span-4"
              : isFollowUp
                ? "lg:col-span-2"
                : "lg:col-span-2";
            return (
              <LayerCard
                key={g.id}
                index={i}
                id={g.id}
                title={g.title}
                promise={g.promise}
                services={g.services.map((s) => s.title)}
                wide={isFinal}
                className={span}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function LayerCard({
  index,
  id,
  title,
  promise,
  services,
  wide,
  className,
}: {
  index: number;
  id: string;
  title: string;
  promise: string;
  services: ReadonlyArray<string>;
  wide?: boolean;
  className?: string;
}) {
  const visible = wide ? services : services.slice(0, 4);

  return (
    <Link
      href={`/services#${id}`}
      className={[
        "group relative flex flex-col overflow-hidden rounded-2xl border border-steel-rule bg-warm-ivory transition-all hover:border-forge-navy hover:shadow-[0_30px_60px_-30px_rgba(11,31,51,0.20)]",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-7 pt-7">
        <span className="inline-flex items-center gap-3">
          <span className="serif-italic text-[26px] leading-none text-signal-teal tabular-nums">
            0{index + 1}
          </span>
          <span aria-hidden className="h-px w-7 bg-signal-teal/50" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-steel-gray transition-colors group-hover:text-signal-teal" />
      </div>

      <div className="flex flex-1 flex-col px-7 pt-5 pb-7">
        <h3 className="text-[26px] font-semibold tracking-tight text-forge-navy">
          {title}
        </h3>
        <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-deep-charcoal/80">
          {promise}
        </p>

        <div className="mt-7 flex flex-wrap gap-1.5">
          {visible.map((s) => (
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
}
