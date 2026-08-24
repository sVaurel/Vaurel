import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Lets Vercel serve responsive, resized AVIF/WebP images instead of
    // shipping the original PNG at every screen size.
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
