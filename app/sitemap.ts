import { MetadataRoute } from "next";
import { getCategories } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ideaabudiperkasa.com";

  // Static routes
  const routes = [
    "",
    "/produk",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic category routes
  try {
    const categories = await getCategories();
    const categoryRoutes = categories.map((cat: any) => ({
      url: `${baseUrl}/produk/${cat.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
    return [...routes, ...categoryRoutes];
  } catch (error) {
    console.error("Error generating sitemap dynamic routes", error);
    return routes;
  }
}
