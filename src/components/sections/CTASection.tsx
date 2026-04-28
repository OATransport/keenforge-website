import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FINAL_CTA } from "@/lib/content";

export function CTASection({
  eyebrow = FINAL_CTA.eyebrow,
  title = FINAL_CTA.title,
  body = FINAL_CTA.body,
  primary = FINAL_CTA.primaryCta,
  secondary = FINAL_CTA.secondaryCta,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(46,143,138,0.24), transparent 60%)",
        }}
      />
      <Container size="wide" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="white">{eyebrow}</Eyebrow>
          <h2 className="display mt-7 text-[38px] sm:text-[52px] lg:text-[64px] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-7 max-w-[640px] text-[17px] leading-relaxed text-night-ink-2">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={primary.href} variant="ember" size="lg">
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="nightOutline" size="lg">
              {secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
