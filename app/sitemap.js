// app/sitemap.js
import { apiFetch } from "@/lib/api";

export default async function sitemap() {
  const base = "http://localhost:3000";

  let productUrls = [];

  try {
    const { products } = await apiFetch("/api/products");
    productUrls = products.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: new Date(p.created_at || new Date()),
    }));
  } catch {
    // If API fails, return only static pages
  }

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/products`, lastModified: new Date() },
    ...productUrls,
  ];
}
