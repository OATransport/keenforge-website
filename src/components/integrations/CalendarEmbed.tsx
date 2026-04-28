"use client";

import { GHL } from "@/lib/integrations";

type Props = {
  height?: number;
  className?: string;
  title?: string;
};

/**
 * Renders the configured booking calendar iframe (URL in
 * src/lib/integrations.ts). When unconfigured, renders a platform neutral
 * placeholder slot.
 *
 * Visible copy on this component is intentionally platform neutral.
 */
export function CalendarEmbed({
  height = 760,
  className,
  title = "Pick a time with KeenForge",
}: Props) {
  if (!GHL.calendarEmbedUrl) {
    return (
      <div
        className={
          className ??
          "rounded-3xl border border-dashed border-rule bg-paper p-8"
        }
        style={{ minHeight: Math.min(height, 380) }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-ember" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            Calendar slot
          </span>
        </div>
        <h4 className="mt-4 text-[18px] font-semibold tracking-tight text-ink">
          Booking calendar renders here
        </h4>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-2">
          Once the calendar URL is set, visitors can pick a time inline without
          leaving the page. See src/lib/integrations.ts for paste markers.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={GHL.calendarEmbedUrl}
      title={title}
      className={className ?? "w-full rounded-3xl border border-rule bg-paper"}
      style={{ height, minHeight: 560 }}
      loading="lazy"
      scrolling="no"
    />
  );
}
