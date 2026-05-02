import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrackingScripts } from "@/components/integrations/TrackingScripts";
import { SITE } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Fraunces for editorial display headlines. SOFT axis softens the serifs and
// opsz tunes optical sizing for large display sizes.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Growth Systems for Local and Service Based Businesses`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  // Favicon system uses the approved KeenForge_Favicon brand asset.
  // - The Next.js file convention (src/app/icon.jpg and src/app/apple-icon.jpg)
  //   takes precedence and is what most browsers will pick up.
  // - The metadata.icons block below is kept as an explicit, cache-busted
  //   reference to the same approved asset in /public/brand. The version
  //   query string forces browsers and CDNs to refetch when the asset is
  //   updated, even though the filename is reused.
  icons: {
    icon: "/brand/KeenForge_Favicon.jpg?v=approved-2026-05-02",
    shortcut: "/brand/KeenForge_Favicon.jpg?v=approved-2026-05-02",
    apple: "/brand/KeenForge_Favicon.jpg?v=approved-2026-05-02",
  },
  openGraph: {
    title: `${SITE.name} | Growth Systems for Local and Service Based Businesses`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Growth Systems for Local and Service Based Businesses`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-bone text-ink flex flex-col">
        <TrackingScripts />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
