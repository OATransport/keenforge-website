import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ABOUT } from "@/lib/content";

export function FounderPreview() {
  const f = ABOUT.founder;
  return (
    <section className="relative bg-night text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(55% 60% at 80% 0%, rgba(46,143,138,0.20), transparent 60%)",
        }}
      />
      <Container size="wide" className="relative py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow tone="white">Founder</Eyebrow>
            <p className="mt-7 display text-[30px] sm:text-[38px] leading-[1.12] text-white">
              {f.name} built KeenForge from inside the same problems his
              customers face.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <blockquote className="border-l-2 border-ember pl-6">
              <p className="serif-italic text-[20px] sm:text-[22px] leading-[1.45] text-white">
                &ldquo;{f.quote}&rdquo;
              </p>
              <footer className="mt-5 text-[13px] uppercase tracking-[0.16em] text-night-ink-2">
                {f.name} &middot; {f.role}
              </footer>
            </blockquote>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              Read the full story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
