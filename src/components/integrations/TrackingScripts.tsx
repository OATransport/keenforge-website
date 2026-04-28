import Script from "next/script";
import { TRACKING } from "@/lib/integrations";

/**
 * TrackingScripts
 *
 * Renders the script tags for any tracking platform whose ID has been
 * configured in src/lib/integrations.ts (or via NEXT_PUBLIC_* env vars).
 *
 * Nothing renders if nothing is configured. This file is intentionally light
 * on the actual pixel snippets so it cannot accidentally fire fake hits.
 *
 * WHERE TO PASTE THE OFFICIAL VENDOR SNIPPETS:
 *   When you are ready to go live, replace each commented block below with
 *   the official snippet from the vendor's docs. The TRACKING.* IDs are
 *   already plumbed in for you to drop into the snippet placeholders.
 */
export function TrackingScripts() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/*  Google Tag Manager                                              */}
      {/*  Paste the official GTM snippet from                              */}
      {/*  https://support.google.com/tagmanager/answer/6103696             */}
      {/*  using TRACKING.googleTagManagerId in place of the GTM-XXXX id.   */}
      {/* ---------------------------------------------------------------- */}
      {TRACKING.googleTagManagerId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`/* paste official Google Tag Manager script here, using "${TRACKING.googleTagManagerId}" */`}
        </Script>
      ) : null}

      {/* ---------------------------------------------------------------- */}
      {/*  Google Analytics 4                                              */}
      {/*  Paste the official gtag.js snippet from                          */}
      {/*  https://support.google.com/analytics/answer/9304153              */}
      {/*  using TRACKING.googleAnalyticsId in place of the G-XXXX id.      */}
      {/* ---------------------------------------------------------------- */}
      {TRACKING.googleAnalyticsId ? (
        <Script id="ga4-init" strategy="afterInteractive">
          {`/* paste official gtag.js init script here, using "${TRACKING.googleAnalyticsId}" */`}
        </Script>
      ) : null}

      {/* ---------------------------------------------------------------- */}
      {/*  Meta / Facebook Pixel                                           */}
      {/*  Paste the official pixel base code from                          */}
      {/*  https://www.facebook.com/business/help/952192354843755           */}
      {/*  using TRACKING.facebookPixelId in place of the numeric id.       */}
      {/* ---------------------------------------------------------------- */}
      {TRACKING.facebookPixelId ? (
        <Script id="fbq-init" strategy="afterInteractive">
          {`/* paste official Meta Pixel base code here, using "${TRACKING.facebookPixelId}" */`}
        </Script>
      ) : null}

      {/* ---------------------------------------------------------------- */}
      {/*  Call tracking (CallRail, Invoca, WhatConverts, etc.)            */}
      {/*  Most vendors give you a single <script src="..."> tag.           */}
      {/* ---------------------------------------------------------------- */}
      {TRACKING.callTrackingScriptUrl ? (
        <Script
          id="call-tracking"
          src={TRACKING.callTrackingScriptUrl}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
