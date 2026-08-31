import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/scratch/"],
      },
    ],
    sitemap: `${SEO_CONFIG.domain}/sitemap.xml`,
    host: SEO_CONFIG.domain,
  };
}
