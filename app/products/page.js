import { apiFetch } from "@/lib/api";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductsPage() {
  // const { rows: products } = await pool.query(
  //   "SELECT id, slug, name, price_cents, image_url FROM products ORDER BY name",
  // );
  const { products } = await apiFetch("/api/products");
  if (!products) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.slug}`}
            className="block border rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={p.image_url}
              alt={p.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="font-semibold text-gray-800">{p.name}</h2>
            <p className="text-gray-600">
              KES {(p.price_cents / 100).toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
