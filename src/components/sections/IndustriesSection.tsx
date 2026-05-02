import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { INDUSTRIES } from "@/lib/content";

export function IndustriesSection() {
  return (
    <Section tone="paper" bordered>
      <Container size="wide">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-[36px] sm:text-[46px] lg:text-[54px] text-ink">
              Built for Businesses Where Every Lead Matters
            </h2>
          </div>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-1.5 self-start text-[14px] font-medium text-ink hover:text-ember"
          >
            See all industries
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <article key={ind.slug} className="flex flex-col bg-bone p-7">
              <h3 className="text-[20px] font-semibold tracking-tight text-ink">
                {ind.name}
              </h3>

              <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ember">
                Where it leaks
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">
                {ind.problem}
              </p>

              <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.16em] text-ember">
                Where we help
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink">
                {ind.solution}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
