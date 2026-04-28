import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ABOUT } from "@/lib/content";

export function FounderSection() {
  const f = ABOUT.founder;
  return (
    <section className="relative bg-night text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(55% 60% at 85% 0%, rgba(46,143,138,0.22), transparent 60%)",
        }}
      />
      <Container size="wide" className="relative py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <aside className="lg:col-span-5">
            <Eyebrow tone="white">{f.eyebrow}</Eyebrow>

            <PortraitCard name={f.name} role={f.role} />

            <ul className="mt-10 divide-y divide-night-rule rounded-2xl border border-night-rule bg-night-2">
              {f.credibility.map((c) => (
                <li
                  key={c.label}
                  className="grid gap-2 px-5 py-5 sm:grid-cols-12 sm:gap-6 sm:py-6"
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-night-ink-3 sm:col-span-3">
                    {c.label}
                  </span>
                  <span className="text-[14.5px] leading-snug text-white sm:col-span-9">
                    {c.value}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="lg:col-span-7 self-start">
            <h2 className="display text-[34px] sm:text-[44px] lg:text-[52px] text-white">
              {f.title}
            </h2>

            <blockquote className="mt-10 border-l-2 border-ember pl-6">
              <p className="serif-italic text-[22px] sm:text-[26px] leading-[1.4] text-white">
                &ldquo;{f.quote}&rdquo;
              </p>
              <footer className="mt-5 text-[13px] uppercase tracking-[0.18em] text-night-ink-2">
                {f.name}
              </footer>
            </blockquote>

            <div className="mt-10 space-y-5 text-[16.5px] leading-relaxed text-night-ink-2">
              {f.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/*
  Portrait card placeholder.
  Designed to read as a deliberate portrait card rather than a missing image.
  Replace the inner <span> with <Image src="/founder.jpg" ... /> filling the
  aspect ratio when a real photo is ready.
*/
function PortraitCard({ name, role }: { name: string; role: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div className="mt-9">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-night-rule bg-night-2">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 35%, rgba(46,143,138,0.22), transparent 65%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />

        <span
          aria-hidden
          className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-night-3/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-night-ink-2 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          Founder
        </span>

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden
            className="text-[140px] font-medium leading-none tracking-tighter text-white/[0.08]"
            style={{
              letterSpacing: "-0.07em",
              fontFamily: "var(--font-serif)",
              fontVariationSettings: '"SOFT" 60, "opsz" 144',
            }}
          >
            {initials}
          </span>
        </div>

        <span
          aria-hidden
          className="absolute bottom-5 left-5 h-px w-12 bg-copper"
        />
      </div>

      <div className="mt-6">
        <div className="text-[20px] font-semibold tracking-tight text-white">
          {name}
        </div>
        <div className="mt-1 text-[13px] uppercase tracking-[0.16em] text-night-ink-2">
          {role}
        </div>
      </div>
    </div>
  );
}
