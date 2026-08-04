import { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { locales } from "@/lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mhindiatrips.com";

  // Base paths
  const staticPaths = ["", "/destinations", "/food", "/festivals", "/blog"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate localized static entries
  for (const path of staticPaths) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  try {
    // Generate dynamic destinations sitemap entries
    const destinations = await db.destinations.findMany();
    for (const dest of destinations) {
      for (const locale of locales) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/destinations/${dest.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }

    // Generate dynamic blogs sitemap entries
    const blogs = await db.blogs.findMany();
    for (const blog of blogs) {
      for (const locale of locales) {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/blog/${blog.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    }
  } catch (e) {
    console.error("Error generating sitemap dynamic routes:", e);
  }

  return sitemapEntries;
}
