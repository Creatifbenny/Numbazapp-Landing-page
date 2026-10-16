import type { Metadata, Viewport } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

// PROVISIONAL: closest free fonts to the design; real names unknown.
// latin-ext is needed for the naira sign (U+20A6).
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-code-pro",
  display: "swap",
});

const TITLE = "Numbaz | Track your sales, expenses and profit";
const DESCRIPTION =
  "Track your daily sales, expenses, and profit in seconds — so you always know how your business is doing. Join the early access waitlist.";

// The site is served from the Vercel address for now. Set NEXT_PUBLIC_SITE_URL
// to switch it, and change the default to https://numbazapp.com once that
// domain is live.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://numbazapp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Numbaz",
    locale: "en",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  // Same value as --color-background in app/tokens.css.
  themeColor: "#043135",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
