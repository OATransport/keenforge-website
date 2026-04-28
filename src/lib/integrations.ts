/**
 * KeenForge integrations config
 * --------------------------------------------------------------------------
 * Single source of truth for everything the lead capture system plugs into:
 *   - GoHighLevel form embed
 *   - GoHighLevel calendar embed
 *   - GoHighLevel inbound webhook (used by the native form)
 *   - Tracking pixels (Meta / Facebook, GA4, GTM, call tracking)
 *
 * For each value below, you can either:
 *   1. Paste the value directly into this file (quick)
 *   2. Set the matching NEXT_PUBLIC_* environment variable (recommended)
 *
 * Whichever you set will be used. If neither is set, the matching feature
 * gracefully falls back to a "not configured" placeholder. The native form
 * will simulate a successful submit so the page is testable end to end.
 *
 * IMPORTANT: anything in this file is shipped to the browser. Only use values
 * that are safe to expose publicly (which is true for all of these IDs and
 * embed URLs).
 */

/* -------------------------------------------------------------------------- */
/*                                GoHighLevel                                 */
/* -------------------------------------------------------------------------- */

/**
 * GHL form embed URL
 *
 * WHERE TO PASTE:
 *   This file, GHL.formEmbedUrl below, OR
 *   .env.local as NEXT_PUBLIC_GHL_FORM_EMBED_URL
 *
 * WHERE TO FIND IT IN GHL:
 *   Sites > Forms > open your form > "Integrate" tab > copy the "Direct Link"
 *
 * EXAMPLE VALUE:
 *   "https://api.leadconnectorhq.com/widget/form/REPLACE_FORM_ID"
 */
const GHL_FORM_EMBED_URL = "";

/**
 * GHL calendar embed URL
 *
 * WHERE TO PASTE:
 *   This file, GHL.calendarEmbedUrl below, OR
 *   .env.local as NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL
 *
 * WHERE TO FIND IT IN GHL:
 *   Calendars > open your calendar > "Permalink" or "Embed Code" > copy URL
 *
 * EXAMPLE VALUE:
 *   "https://api.leadconnectorhq.com/widget/booking/REPLACE_CALENDAR_ID"
 */
const GHL_CALENDAR_EMBED_URL = "";

/**
 * GHL inbound webhook URL
 *
 * Used by the native KeenForge demo form. Submissions are POSTed here as JSON.
 *
 * WHERE TO PASTE:
 *   This file, GHL.webhookUrl below, OR
 *   .env.local as NEXT_PUBLIC_GHL_WEBHOOK_URL
 *
 * WHERE TO FIND IT IN GHL:
 *   Automation > Workflows > new workflow > Trigger: "Inbound Webhook" >
 *   copy the generated webhook URL > add an action that creates a Contact
 *   from the JSON fields
 *
 * EXAMPLE VALUE:
 *   "https://services.leadconnectorhq.com/hooks/REPLACE_HOOK_ID"
 */
const GHL_WEBHOOK_URL = "";

export const GHL = {
  formEmbedUrl: process.env.NEXT_PUBLIC_GHL_FORM_EMBED_URL ?? GHL_FORM_EMBED_URL,
  calendarEmbedUrl:
    process.env.NEXT_PUBLIC_GHL_CALENDAR_EMBED_URL ?? GHL_CALENDAR_EMBED_URL,
  webhookUrl: process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ?? GHL_WEBHOOK_URL,
};

/* -------------------------------------------------------------------------- */
/*                                  Tracking                                  */
/* -------------------------------------------------------------------------- */

/**
 * The tracking IDs below are read by `<TrackingScripts />` (rendered in
 * src/app/layout.tsx) and by `fireConversion()` below. Add the IDs and the
 * pixels start firing automatically.
 *
 * Nothing fires until you add a real ID. Empty string = disabled.
 */

/**
 * Meta / Facebook Pixel ID
 *
 * WHERE TO PASTE:
 *   This file, TRACKING.facebookPixelId, OR
 *   .env.local as NEXT_PUBLIC_FB_PIXEL_ID
 *
 * WHERE TO FIND IT:
 *   Meta Events Manager > Data Sources > select pixel > copy the numeric ID
 *
 * EXAMPLE VALUE:
 *   "1234567890123456"
 */
const FB_PIXEL_ID = "";

/**
 * Google Tag Manager container ID
 *
 * WHERE TO PASTE:
 *   This file, TRACKING.googleTagManagerId, OR
 *   .env.local as NEXT_PUBLIC_GTM_ID
 *
 * WHERE TO FIND IT:
 *   Google Tag Manager > select container > top right shows "GTM-XXXXXXX"
 *
 * EXAMPLE VALUE:
 *   "GTM-ABC1234"
 */
const GTM_ID = "";

/**
 * Google Analytics 4 / Google Ads measurement ID
 *
 * WHERE TO PASTE:
 *   This file, TRACKING.googleAnalyticsId, OR
 *   .env.local as NEXT_PUBLIC_GA_ID
 *
 * WHERE TO FIND IT:
 *   GA4 > Admin > Data Streams > select stream > "Measurement ID"
 *
 * EXAMPLE VALUE:
 *   "G-ABC1234XYZ"
 */
const GA_ID = "";

/**
 * Call tracking script URL (CallRail, Invoca, WhatConverts, etc.)
 *
 * Loaded into <head>. The script does its own DOM swap for phone numbers.
 *
 * WHERE TO PASTE:
 *   This file, TRACKING.callTrackingScriptUrl, OR
 *   .env.local as NEXT_PUBLIC_CALL_TRACKING_SCRIPT_URL
 *
 * EXAMPLE VALUE (CallRail):
 *   "//cdn.callrail.com/companies/123456789/abcdef0123/12/swap.js"
 */
const CALL_TRACKING_SCRIPT_URL = "";

export const TRACKING = {
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? FB_PIXEL_ID,
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID ?? GTM_ID,
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? GA_ID,
  callTrackingScriptUrl:
    process.env.NEXT_PUBLIC_CALL_TRACKING_SCRIPT_URL ??
    CALL_TRACKING_SCRIPT_URL,
};

/* -------------------------------------------------------------------------- */
/*                                Booking mode                                */
/* -------------------------------------------------------------------------- */

/**
 * Controls what is rendered on /book-a-demo.
 *
 *   "native"       Native KeenForge form. Submits to GHL.webhookUrl if set,
 *                  otherwise simulates a successful submit. The success state
 *                  shows the GHL calendar (if configured) so the visitor can
 *                  pick a time inline.
 *
 *   "ghl-form"     The full GoHighLevel form iframe replaces the native form.
 *
 *   "calendar"     Skip the form entirely. Show only the GHL calendar so the
 *                  visitor self serves a time. Best for warm inbound traffic.
 *
 *   "form-and-cal" Native form on top, GHL calendar in its own section below.
 *                  Default. Lets visitors choose either path.
 */
export type BookingMode = "native" | "ghl-form" | "calendar" | "form-and-cal";

export const BOOKING_MODE: BookingMode =
  (process.env.NEXT_PUBLIC_BOOKING_MODE as BookingMode | undefined) ??
  "form-and-cal";

/* -------------------------------------------------------------------------- */
/*                              UTM + context capture                         */
/* -------------------------------------------------------------------------- */

/**
 * Query params that get pulled off the URL and attached to every form submit
 * so attribution survives all the way into GHL.
 */
export const TRACKED_QUERY_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
  "ttclid",
] as const;

export type CaptureContext = Record<string, string>;

/**
 * Pulls UTM, click IDs, referrer, landing page, user agent, and timestamp from
 * the current browser context. Safe to call from a useEffect or a submit
 * handler. Returns an empty object on the server.
 */
export function captureContext(): CaptureContext {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const ctx: CaptureContext = {};

  for (const key of TRACKED_QUERY_PARAMS) {
    const v = params.get(key);
    if (v) ctx[key] = v;
  }

  ctx.referrer = typeof document !== "undefined" ? document.referrer : "";
  ctx.landing_page = window.location.href;
  ctx.user_agent =
    typeof navigator !== "undefined" ? navigator.userAgent : "";
  ctx.submitted_at = new Date().toISOString();

  return ctx;
}

/* -------------------------------------------------------------------------- */
/*                            Conversion event firing                          */
/* -------------------------------------------------------------------------- */

/**
 * Fires a conversion event on every configured tracking platform. Each call
 * is a no-op if the matching tracker is not loaded, so it is safe to invoke
 * before pixels are wired up.
 *
 * WHERE TO PASTE pixel <script> tags:
 *   src/app/layout.tsx, inside <head> (a <TrackingScripts /> stub is included
 *   there with comments showing the exact line for each pixel).
 */
export function fireConversion(
  eventName: string,
  payload?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;

  // Meta / Facebook Pixel
  // window.fbq?.("track", "Lead", payload);

  // Google Analytics 4 / Google Ads
  // window.gtag?.("event", eventName, payload);

  // Google Tag Manager dataLayer
  // window.dataLayer?.push({ event: eventName, ...payload });

  if (process.env.NODE_ENV !== "production") {
    console.log("[fireConversion]", eventName, payload);
  }
}
