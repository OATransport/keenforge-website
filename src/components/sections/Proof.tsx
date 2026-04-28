import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Check, Minus } from "lucide-react";
import { PROOF } from "@/lib/content";

export function Proof() {
  return (
    <Section tone="paper" bordered>
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-medium uppercase tracking-[0.22em] text-signal-teal">
              Honest Framing
            </span>
            <h2 className="display mt-4 text-[34px] sm:text-[44px] lg:text-[54px] text-forge-navy">
              {PROOF.title}
            </h2>
            <p className="mt-7 max-w-md text-[16.5px] leading-relaxed text-deep-charcoal/85">
              {PROOF.body}
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            <PillarColumn
              tone="is"
              label={PROOF.is.label}
              items={PROOF.is.items}
            />
            <PillarColumn
              tone="isNot"
              label={PROOF.isNot.label}
              items={PROOF.isNot.items}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PillarColumn({
  tone,
  label,
  items,
}: {
  tone: "is" | "isNot";
  label: string;
  items: ReadonlyArray<string>;
}) {
  const isPositive = tone === "is";
  return (
    <div
      className={[
        "rounded-2xl border p-8 sm:p-9",
        isPositive
          ? "border-signal-teal/30 bg-warm-ivory shadow-[0_30px_60px_-40px_rgba(46,143,138,0.35)]"
          : "border-steel-rule bg-warm-ivory-2",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span
          className={[
            "inline-flex h-8 w-8 items-center justify-center rounded-full",
            isPositive
              ? "bg-signal-teal text-warm-ivory"
              : "border border-steel-rule bg-warm-ivory text-steel-gray",
          ].join(" ")}
          aria-hidden
        >
          {isPositive ? (
            <Check className="h-4 w-4" />
          ) : (
            <Minus className="h-4 w-4" />
          )}
        </span>
        <span
          className={[
            "text-[11px] font-semibold uppercase tracking-[0.22em]",
            isPositive ? "text-signal-teal" : "text-steel-gray",
          ].join(" ")}
        >
          {label}
        </span>
      </div>

      <ul className="mt-7 space-y-4">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 text-[15.5px] leading-[1.55] text-forge-navy"
          >
            <span
              aria-hidden
              className={[
                "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full",
                isPositive ? "bg-signal-teal" : "bg-steel-rule",
              ].join(" ")}
            />
            <span
              className={
                isPositive ? "text-forge-navy" : "text-deep-charcoal/75"
              }
            >
              {it}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
