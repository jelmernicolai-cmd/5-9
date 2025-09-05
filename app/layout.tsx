import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.pharmgtn.com"),
  title: {
    default: "PharmaGtN — Gross‑to‑Net optimalisatie voor farma",
    template: "%s | PharmaGtN"
  },
  description:
    "PharmaGtN helpt farma-bedrijven hun gross-to-net te optimaliseren via data, dashboards en templates. Doel: €100.000+ extra marge/jaar.",
  keywords: ["gross-to-net", "farma", "kortingen", "parallelimport", "prijsstrategie", "PharmaGtN"],
  openGraph: {
    type: "website",
    title: "PharmaGtN",
    description: "Optimaliseer gross‑to‑net, kortingen en contracten met data.",
    url: "/",
    siteName: "PharmaGtN",
  },
  robots: {
    index: true,
    follow: true
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: { width: "device-width", initialScale: 1 }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PharmaGtN",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.pharmgtn.com",
    "logo": "/favicon.ico",
    "sameAs": []
  };
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">
          Naar inhoud
        </a>
        <Providers>
          <Nav />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
