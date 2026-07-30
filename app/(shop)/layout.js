import Link from "next/link";

export default function ShopLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Mctaba Shop
          </Link>
          <nav className="space-x-4">
            <Link href="/products" className="hover:underline">
              All Products
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/leads" className="hover:underline">
              Leads
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto p-4 w-full">{children}</main>
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        Mctaba Shop &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
