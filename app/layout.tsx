import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | sysTROL Engineering & Consultancy",
    default: "sysTROL Engineering & Consultancy | Industrial Automation & Trading",
  },
  description:
    "Bengaluru-based industrial engineering firm specializing in Level-2 (L2) automation systems (C#) for steel rolling mills, process plants, and high-precision imported machinery trading.",
  keywords: [
    "sysTROL",
    "Level-2 Automation",
    "L2 Systems",
    "Steel Rolling Mills",
    "Process Automation",
    "C# Automation Software",
    "Steel Mill Spares",
    "Industrial Consultancy",
    "Bengaluru Automation Engineering",
  ],
  authors: [{ name: "sysTROL Engineering & Consultancy Pvt. Ltd." }],
  metadataBase: new URL("https://sys-trol.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sys-trol.com",
    title: "sysTROL Engineering & Consultancy | Engineering Redefined",
    description:
      "Specialists in Level-2 Automation software for steel rolling mills and imported machinery trading.",
    siteName: "sysTROL Engineering & Consultancy Pvt. Ltd.",
    images: [
      {
        url: "/images/systrol-logo.jpeg",
        width: 800,
        height: 800,
        alt: "sysTROL Engineering & Consultancy Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
