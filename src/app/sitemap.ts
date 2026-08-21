import { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { locales } from "@/lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mhindiatrips.com";

  // Base paths (excluding dynamic or special localized destination roots)
  const staticPaths = ["", "/food", "/festivals", "/blog"];
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
    // 1. Generate localized destination landing pages sitemap entries
    for (const locale of locales) {
      const rootPath = locale === "es" ? "destinos-en-india" : locale === "pt" ? "destinos-na-india" : "destinations-in-india";
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${rootPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    // 2. Generate dynamic destinations states sitemap entries
    const states = await db.states.findMany();
    for (const state of states) {
      for (const locale of locales) {
        const rootPath = locale === "es" ? "destinos-en-india" : locale === "pt" ? "destinos-na-india" : "destinations-in-india";
        const lang = (locale === "es" || locale === "pt") ? locale : "en";
        const stateSlug = state.slug?.[lang] || state.slug?.en || state.id;
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/${rootPath}/${stateSlug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }

    // 3. Generate dynamic destinations cities sitemap entries
    const cities = await db.cities.findMany();
    for (const city of cities) {
      const parentState = states.find((s: any) => s.id === city.stateId);
      if (!parentState) continue;
      for (const locale of locales) {
        const rootPath = locale === "es" ? "destinos-en-india" : locale === "pt" ? "destinos-na-india" : "destinations-in-india";
        const lang = (locale === "es" || locale === "pt") ? locale : "en";
        const stateSlug = parentState.slug?.[lang] || parentState.slug?.en || parentState.id;
        const citySlug = city.slug?.[lang] || city.slug?.en || city.id;
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/${rootPath}/${stateSlug}/${citySlug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
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
