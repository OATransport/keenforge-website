"use client";

import { GHL } from "@/lib/integrations";

type Props = {
  /** Pixel height of the iframe. Default: 720. */
  height?: number;
  /** Optional class for the wrapping element. */
  className?: string;
  /** Visible title for accessibility. */
  title?: string;
};

/**
 * Renders the configured booking form iframe (the URL lives in
 * src/lib/integrations.ts). When no URL is configured, renders a clearly
 * marked, platform neutral placeholder slot.
 *
 * Visible copy on this component is intentionally platform neutral.
 */
export function FormEmbed({
  height = 720,
  className,
  title = "KeenForge growth review request",
}: Props) {
  if (!GHL.formEmbedUrl) {
    return (
      <PlaceholderSlot
        label="Booking form"
        height={height}
        className={className}
      />
    );
  }

  return (
    <iframe
      src={GHL.formEmbedUrl}
      title={title}
      className={className ?? "w-full rounded-3xl border border-rule bg-paper"}
      style={{ height, minHeight: 480 }}
      loading="lazy"
    />
  );
}

function PlaceholderSlot({
  label,
  height,
  className,
}: {
  label: string;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={
        className ?? "rounded-3xl border border-dashed border-rule bg-paper p-8"
      }
      style={{ minHeight: Math.min(height, 360) }}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-2 w-2 rounded-full bg-ember" />
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
          Embed slot
        </span>
      </div>
      <h4 className="mt-4 text-[18px] font-semibold tracking-tight text-ink">
        {label} renders here
      </h4>
      <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-2">
        Wire the embed URL into your config and this slot becomes the live
        iframe automatically. See src/lib/integrations.ts for paste markers.
      </p>
    </div>
  );
}
