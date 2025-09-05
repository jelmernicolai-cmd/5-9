import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pharmgtn.com";
  const urls = ["", "/features", "/pricing", "/templates", "/about", "/contact", "/login"].map((p) => ({
    url: `${base}${p || "/"}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  return urls;
}
