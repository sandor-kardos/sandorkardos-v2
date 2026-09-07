import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandorkardos.com"),
  title: {
    default: "Sándor Kardos: Product, UX & Service Designer, Edinburgh",
    template: "%s | Sándor Kardos"
  },
  description:
    "End-to-end product and service designer connecting frontstage user experience with backstage operational reality. Based in Edinburgh.",
  authors: [{ name: "Sándor Kardos", url: "https://sandorkardos.com" }],
  creator: "Sándor Kardos",
  publisher: "Sándor Kardos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sandorkardos.com",
    siteName: "Sándor Kardos: Product & Service Designer",
    title: "Sándor Kardos: Product, UX & Service Designer, Edinburgh",
    description:
      "End-to-end product and service designer connecting frontstage user experience with backstage operational reality. Based in Edinburgh.",
    images: [
      {
        url: "/images/portrait.webp",
        width: 1200,
        height: 627,
        alt: "Sándor Kardos: Product, UX and Service Designer in Edinburgh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sándor Kardos: Product, UX & Service Designer, Edinburgh",
    description:
      "End-to-end product and service designer connecting frontstage user experience with backstage operational reality. Based in Edinburgh.",
    images: ["/images/portrait.webp"]
  },
  alternates: {
    canonical: "https://sandorkardos.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" data-theme="dark" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <head>
        <JsonLd type="Person" />
      </head>
      <body>
        <div className="ambient-background-glow" aria-hidden="true" />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
