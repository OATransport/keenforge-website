/*
  Hero visual: the KeenForge Lead Path.

  An editorial brand asset, not a fake software card. A quietly framed flow
  from inquiry to booked work, with a single moment of action highlighted in
  Signal Teal and a copper detail at the outcome. Microcopy is short on
  purpose so the card reads at a glance.
*/

type Step = {
  n: string;
  title: string;
  body: string;
  highlight?: boolean;
  accent?: "copper";
};

const STEPS: ReadonlyArray<Step> = [
  {
    n: "01",
    title: "New Lead",
    body: "Call, form, chat, or click. Tagged with the source on arrival.",
  },
  {
    n: "02",
    title: "Response Sent",
    body: "Answered in seconds with the right next step.",
    highlight: true,
  },
  {
    n: "03",
    title: "Pipeline Updated",
    body: "Stage moved. Owner notified. Source on record.",
  },
  {
    n: "04",
    title: "Follow Up Running",
    body: "Texts and reminders that do not depend on memory.",
  },
  {
    n: "05",
    title: "Appointment Booked",
    body: "Confirmed time on the calendar. Reminders queued.",
  },
  {
    n: "06",
    title: "Review Requested",
    body: "Customer prompted at the right moment.",
    accent: "copper",
  },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[44px] opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 75% 12%, rgba(46,143,138,0.18), transparent 62%)",
        }}
      />

      <figure className="relative overflow-hidden rounded-[28px] border border-steel-rule bg-warm-ivory-2 shadow-[0_40px_90px_-40px_rgba(11,31,51,0.30)]">
        {/* Editorial header */}
        <div className="border-b border-steel-rule px-8 py-7 sm:px-10">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-signal-teal" />
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-signal-teal">
              The KeenForge Lead Path
            </span>
          </div>
          <p className="serif-italic mt-5 text-[24px] sm:text-[28px] leading-[1.18] text-forge-navy">
            From inquiry to booked work.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative px-8 sm:px-10">
          {/* Single connecting rail behind the dots */}
          <span
            aria-hidden
            className="absolute left-[39px] sm:left-[47px] top-9 bottom-9 w-px bg-steel-rule"
          />

          {STEPS.map((s, i) => {
            const isHighlight = Boolean(s.highlight);
            return (
              <li
                key={s.n}
                className={
                  i < STEPS.length - 1
                    ? "border-b border-steel-rule/60"
                    : ""
                }
              >
                <div className="relative flex items-start gap-5 py-[18px]">
                  <span className="relative z-[1] flex h-7 w-7 shrink-0 items-center justify-center">
                    <Dot accent={s.accent} highlight={isHighlight} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10.5px] font-medium tabular-nums tracking-[0.22em] text-steel-gray">
                        {s.n}
                      </span>
                      <span className="text-[15.5px] font-semibold tracking-tight text-forge-navy">
                        {s.title}
                      </span>
                      {isHighlight ? (
                        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-signal-teal px-2.5 py-[3px] text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-ivory">
                          <span className="h-1 w-1 rounded-full bg-warm-ivory" />
                          Seconds
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-[13px] leading-snug text-steel-gray">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Outcome footer */}
        <div className="border-t border-steel-rule bg-warm-ivory px-8 py-6 sm:px-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-copper" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
                Outcome
              </span>
            </div>
            <span className="text-[12px] uppercase tracking-[0.18em] text-steel-gray tabular-nums">
              6 stages
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-snug text-forge-navy">
            Booked work, with every touch accounted for.
          </p>
        </div>
      </figure>
    </div>
  );
}

function Dot({
  accent,
  highlight,
}: {
  accent?: "copper";
  highlight?: boolean;
}) {
  if (accent === "copper") {
    return (
      <span className="relative">
        <span className="block h-3 w-3 rounded-full bg-copper" />
        <span
          aria-hidden
          className="absolute inset-0 -m-1 rounded-full border border-copper/40"
        />
      </span>
    );
  }
  if (highlight) {
    return (
      <span className="relative">
        <span className="block h-3 w-3 rounded-full bg-signal-teal" />
        <span
          aria-hidden
          className="absolute inset-0 -m-[5px] rounded-full ring-2 ring-signal-teal/30"
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="block h-2.5 w-2.5 rounded-full border border-signal-teal bg-warm-ivory"
    />
  );
}
