import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAUREL — Video Editor",
  description: "VAUREL — Creative video editing and visual storytelling."
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
