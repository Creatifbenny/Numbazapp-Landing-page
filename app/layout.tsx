import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numbaz",
  description: "Numbaz landing page (scaffold only).",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
