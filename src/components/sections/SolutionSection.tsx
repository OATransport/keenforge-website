import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SOLUTION } from "@/lib/content";

export function SolutionSection() {
  return (
    <Section tone="bone" bordered>
      <Container size="narrow">
        {/* Framed pull quote: the spine of the brand. */}
        <figure className="relative mx-auto max-w-[780px]">
          <div
            aria-hidden
            className="absolute -inset-x-4 -inset-y-6 -z-10 rounded-[28px] border border-steel-rule bg-warm-ivory-2 sm:-inset-x-10 sm:-inset-y-10"
          />

          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-12 bg-copper" />
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-copper">
              The Spine of the Work
            </p>
          </div>

          <blockquote className="mt-6">
            <p className="serif-italic text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.18] text-forge-navy">
              &ldquo;{SOLUTION.pull}&rdquo;
            </p>
          </blockquote>

          <figcaption className="mt-7 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-signal-teal" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-steel-gray">
              The KeenForge thesis
            </span>
          </figcaption>
        </figure>

        <div className="mt-24 text-center">
          <h2 className="display text-[34px] sm:text-[46px] lg:text-[56px] text-forge-navy">
            {SOLUTION.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[640px] text-[17px] leading-relaxed text-deep-charcoal/80">
            {SOLUTION.body}
          </p>
        </div>
      </Container>
    </Section>
  );
}
