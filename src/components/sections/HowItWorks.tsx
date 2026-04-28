import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HOW_IT_WORKS } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section tone="bone" bordered>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-signal-teal">
              The Build
            </p>
            <h2 className="display mt-4 text-[36px] sm:text-[46px] lg:text-[54px] text-forge-navy">
              How the Build Works
            </h2>
            <p className="mt-7 max-w-md text-[16.5px] leading-relaxed text-deep-charcoal/80">
              The build moves fast without breaking the business. We start
              with what you have, fix what is leaking first, and ship the
              rest in a sequence the team can absorb.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative">
              {/* Connecting path from milestone to milestone */}
              <span
                aria-hidden
                className="absolute left-[26px] top-9 bottom-9 w-px bg-steel-rule"
              />

              {HOW_IT_WORKS.map((s, i) => (
                <li
                  key={s.step}
                  className={
                    i < HOW_IT_WORKS.length - 1
                      ? "border-b border-steel-rule"
                      : ""
                  }
                >
                  <div className="flex items-start gap-6 py-8">
                    <span className="relative z-[1] inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-steel-rule bg-warm-ivory-2 text-[12px] font-semibold tabular-nums text-signal-teal">
                      {s.step}
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="text-[24px] font-semibold tracking-tight text-forge-navy">
                        {s.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-deep-charcoal/80">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
