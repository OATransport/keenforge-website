import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { DemoForm } from "@/components/forms/DemoForm";
import { FAQ } from "@/components/sections/FAQ";
import { FormEmbed } from "@/components/integrations/FormEmbed";
import { CalendarEmbed } from "@/components/integrations/CalendarEmbed";
import { DEMO } from "@/lib/content";
import { BOOKING_MODE } from "@/lib/integrations";
import { CheckCircle2, Clock, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Growth Review",
  description:
    "Book a free 30 minute review of where your business is losing leads. KeenForge walks through your current intake and shows you exactly what to fix first.",
};

/* --------------------------------------------------------------------------
   Driven by BOOKING_MODE in src/lib/integrations.ts. The native form lives
   in DemoForm.tsx and posts to the configured webhook (or simulates a submit
   when no webhook is set, so the UX is testable end to end before launch).
   -------------------------------------------------------------------------- */

export default function BookGrowthReviewPage() {
  return (
    <>
      <PageHero
        eyebrow={DEMO.hero.eyebrow}
        title={DEMO.hero.title}
        body={DEMO.hero.body}
      />

      <TrustStrip />

      <Section tone="paper" bordered size="md">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Aside />
            <div className="lg:col-span-8">
              <BookingExperience />
            </div>
          </div>
        </Container>
      </Section>

      {BOOKING_MODE === "form-and-cal" ? <CalendarBlock /> : null}

      <FAQ
        items={DEMO.faq}
        title="Questions People Ask Before Booking a Review."
      />

      <FinalReassurance />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Sections                                  */
/* -------------------------------------------------------------------------- */

function TrustStrip() {
  return (
    <section className="border-y border-steel-rule bg-warm-ivory">
      <Container size="wide" className="py-7">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
          {DEMO.trustStrip.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[13.5px] tracking-tight text-forge-navy"
            >
              <span
                aria-hidden
                className="inline-flex h-1.5 w-1.5 rounded-full bg-signal-teal"
              />
              {item}
              {i < DEMO.trustStrip.length - 1 ? (
                <span
                  aria-hidden
                  className="ml-7 hidden h-3 w-px bg-steel-rule sm:inline-block"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Aside() {
  return (
    <aside className="lg:col-span-4">
      <div className="lg:sticky lg:top-28 space-y-12">
        <AsideBlock
          number="01"
          title="Who should book"
        >
          <ul className="space-y-4">
            {DEMO.who.map((w) => (
              <li key={w} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-teal" />
                <span className="text-[15px] leading-relaxed text-forge-navy">
                  {w}
                </span>
              </li>
            ))}
          </ul>
        </AsideBlock>

        <AsideBlock
          number="02"
          title="What we review on the call"
        >
          <ol className="space-y-6">
            {DEMO.weReview.map((s, i) => (
              <li key={s.step} className="grid gap-4 sm:grid-cols-12">
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-steel-gray tabular-nums sm:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="text-[15px] font-semibold tracking-tight text-forge-navy">
                    {s.step}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-deep-charcoal/80">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </AsideBlock>

        <AsideBlock
          number="03"
          title="What happens"
        >
          <ol className="space-y-6">
            {DEMO.whatHappens.map((s, i) => (
              <li key={s.step} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forge-navy text-[12px] font-semibold text-warm-ivory tabular-nums">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-forge-navy">
                    {s.step}
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-deep-charcoal/80">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </AsideBlock>

        <div className="rounded-2xl border border-steel-rule bg-warm-ivory-2 p-6">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-px w-8 bg-copper" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-steel-gray">
              Quick facts
            </span>
          </div>
          <ul className="mt-5 space-y-4">
            <FactRow icon={<Clock className="h-4 w-4" />} label="30 minute call" />
            <FactRow
              icon={<ShieldCheck className="h-4 w-4" />}
              label="No pressure to buy"
            />
            <FactRow
              icon={<Mail className="h-4 w-4" />}
              label={
                <>
                  Reply same business day,{" "}
                  <a
                    href="mailto:hello@keenforge.com"
                    className="text-forge-navy hover:text-signal-teal"
                  >
                    hello@keenforge.com
                  </a>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </aside>
  );
}

function AsideBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-signal-teal tabular-nums">
          {number}
        </span>
        <h2 className="text-[14px] font-medium uppercase tracking-[0.2em] text-forge-navy">
          {title}
        </h2>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function FactRow({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-steel-rule bg-warm-ivory text-steel-gray">
        {icon}
      </span>
      <span className="text-[14px] text-deep-charcoal/80">{label}</span>
    </li>
  );
}

function BookingExperience() {
  switch (BOOKING_MODE) {
    case "ghl-form":
      return <FormEmbed height={780} />;

    case "calendar":
      return (
        <div>
          <SectionHeading
            number="01"
            title="Pick a Time That Works"
            body="Use the calendar below. We will email you a short prep note as soon as you confirm."
          />
          <div className="mt-8">
            <CalendarEmbed height={760} />
          </div>
        </div>
      );

    case "native":
    case "form-and-cal":
    default:
      return (
        <div>
          <SectionHeading
            number="01"
            title="Tell Us a Little About Your Business"
            body="We use this to come prepared. None of it is shared. None of it is sold."
          />
          <div className="mt-8">
            <DemoForm />
          </div>
        </div>
      );
  }
}

function CalendarBlock() {
  return (
    <Section tone="bone" bordered size="md">
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionHeading
              number="02"
              title="Or Pick a Time Right Now"
              body="If you would rather skip the form, grab a time on the calendar and we will follow up with the prep note."
            />
          </div>
          <div className="lg:col-span-8">
            <CalendarEmbed height={760} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SectionHeading({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-md">
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-signal-teal tabular-nums">
        {number}
      </span>
      <h2 className="display mt-3 text-[28px] sm:text-[36px] text-forge-navy">
        {title}
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-deep-charcoal/80">
        {body}
      </p>
    </div>
  );
}

function FinalReassurance() {
  return (
    <section className="bg-forge-navy text-warm-ivory">
      <Container size="wide" className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="display text-[34px] sm:text-[44px] lg:text-[52px] text-warm-ivory">
              Worst Case, You Walk Away With a Plan You Can Use Anywhere.
            </h2>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-night-ink-2">
              We do real reviews because we have done the work. If we are not
              the right fit, we say so on the call. The plan still travels with
              you.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-night-ink-3">
              Prefer email
            </p>
            <p className="mt-3 text-[22px] font-medium tracking-tight text-warm-ivory">
              <a
                href="mailto:hello@keenforge.com"
                className="hover:text-signal-teal"
              >
                hello@keenforge.com
              </a>
            </p>
            <p className="mt-3 text-[14px] text-night-ink-2">
              <Link href="/contact" className="hover:text-signal-teal">
                Or send us a note from the contact page.
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
