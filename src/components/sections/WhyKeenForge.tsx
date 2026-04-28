import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { WHY } from "@/lib/content";

export function WhyKeenForge() {
  return (
    <Section tone="bone" bordered>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="display text-[36px] sm:text-[46px] lg:text-[54px] text-ink">
              Most Agencies Sell Tools.{" "}
              <span className="serif-italic text-ember">
                We Build the System Behind Them.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-rule">
              {WHY.map((w, i) => (
                <li key={w.title} className="grid gap-6 py-7 sm:grid-cols-12">
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ember tabular-nums sm:col-span-2">
                    0{i + 1}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="text-[20px] font-semibold tracking-tight text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-ink-2">
                      {w.body}
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
