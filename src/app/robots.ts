import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/sitio";

// Antes era un robots.txt fijo que apuntaba a innhovex.com aunque el sitio
// estuviera en otro dominio; ahora usa la misma dirección que el resto.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
