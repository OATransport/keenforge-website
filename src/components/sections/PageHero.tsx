import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  body,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bone">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 0%, rgba(46,143,138,0.10), transparent 60%)",
        }}
      />
      <Container
        size="wide"
        className="pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-28"
      >
        <div
          className={
            align === "center"
              ? "mx-auto max-w-3xl text-center"
              : "max-w-3xl"
          }
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-tight mt-7 text-[42px] sm:text-[56px] lg:text-[68px] text-ink">
            {title}
          </h1>
          {body ? (
            <p className="mt-7 text-[17.5px] leading-relaxed text-ink-2">
              {body}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
