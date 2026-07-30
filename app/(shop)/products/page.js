// app/(shop)/products/page.js
import { apiFetch } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "All Products",
  description: "Browse our collection of quality books",
  openGraph: {
    title: "All Products",
    description: "Browse our collection of quality books",
    type: "website",
  },
};

export default async function ProductsPage() {
  const { products } = await apiFetch("/api/products");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            className="group block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-gray-100 relative">
              <Image
                src={p.image_url}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                loading="eager"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-gray-900 group-hover:text-gray-600 transition">
                {p.name}
              </h2>
              <p className="text-gray-600">
                KES {(p.price_cents / 100).toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
