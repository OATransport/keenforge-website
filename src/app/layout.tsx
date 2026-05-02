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
  // Favicon and Apple icon are handled by the Next.js file convention via
  // src/app/icon.jpg and src/app/apple-icon.jpg, which point at the
  // approved KeenForge_Favicon brand asset.
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
