import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*/admin", "/*/admin/*"], // Disallow crawls on localized Admin paths
    },
    sitemap: "https://mhindiatrips.com/sitemap.xml",
  };
}
