import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PROBLEM } from "@/lib/content";

export function ProblemSection() {
  return (
    <Section tone="paper" bordered>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="display text-[36px] sm:text-[46px] lg:text-[56px] text-ink">
              {PROBLEM.title}
            </h2>
            <p className="mt-7 max-w-md text-[16.5px] leading-relaxed text-ink-2">
              {PROBLEM.intro}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-rule">
              {PROBLEM.points.map((p, i) => (
                <li key={p.title} className="grid gap-4 py-7 sm:grid-cols-12">
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember tabular-nums sm:col-span-2">
                    0{i + 1}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="text-[18px] font-semibold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
