import { apiFetch } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { products } = await apiFetch("/api/products");
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = await apiFetch(`/api/products/${slug}`);

  if (!product || product.error) {
    notFound();
  }
  return { title: product ? product.name : "Not found" };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await apiFetch(`/api/products/${slug}`);

  if (!product) notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg mt-2">
            KES {(product.price_cents / 100).toLocaleString()}
          </p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="mt-4">
            {product.in_stock > 0 ? (
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                {product.in_stock} in stock
              </span>
            ) : (
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Out of stock
              </span>
            )}
          </p>
        </div>
      </div>
    </main>
  );
}
