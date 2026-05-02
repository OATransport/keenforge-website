import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-ivory">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 50% at 88% 0%, rgba(46,143,138,0.10), transparent 60%)",
        }}
      />

      <Container
        size="wide"
        className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20 xl:gap-24">
          <div className="lg:col-span-7">
            <h1 className="display-tight max-w-[14ch] text-[44px] leading-[1.04] sm:text-[58px] lg:text-[66px] xl:text-[74px] text-forge-navy">
              {HERO.headline}
            </h1>

            <p className="mt-7 max-w-[560px] text-[17.5px] leading-[1.62] text-deep-charcoal/85">
              {HERO.subhead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={HERO.primaryCta.href} variant="primary" size="lg">
                {HERO.primaryCta.label}
              </Button>
              <Button href={HERO.secondaryCta.href} variant="outline" size="lg">
                {HERO.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-deep-charcoal/80">
              {HERO.trustChips.map((chip, i) => (
                <li key={chip} className="flex items-center gap-2">
                  {i > 0 ? (
                    <span
                      aria-hidden
                      className="hidden h-3 w-px bg-steel-rule sm:inline-block"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className="inline-flex h-1.5 w-1.5 rounded-full bg-signal-teal"
                  />
                  <span>{chip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
