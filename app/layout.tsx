import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://vaurel.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VAUREL — Video Editor",
    template: "%s — VAUREL",
  },
  description: "VAUREL — Creative video editing and visual storytelling.",
  openGraph: {
    title: "VAUREL — Video Editor",
    description: "VAUREL — Creative video editing and visual storytelling.",
    url: siteUrl,
    siteName: "VAUREL",
    images: ["/vaurel-youtube.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAUREL — Video Editor",
    description: "VAUREL — Creative video editing and visual storytelling.",
    images: ["/vaurel-youtube.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
