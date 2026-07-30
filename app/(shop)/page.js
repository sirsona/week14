// app/(shop)/page.js
import Link from "next/link";

export const metadata = {
  title: "Mctaba Shop",
  description: "Your local online store",
  openGraph: {
    title: "Mctaba Shop",
    description: "Your local online store",
    type: "website",
  },
};
export default function HomePage() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Mctaba Shop</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your local online store for quality books and more.
      </p>
      <Link
        href="/products"
        className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        Browse Products
      </Link>
    </div>
  );
}
