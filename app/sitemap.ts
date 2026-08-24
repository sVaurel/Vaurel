import type { MetadataRoute } from "next";

const siteUrl = "https://vaurel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/shop", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
