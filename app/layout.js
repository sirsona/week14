import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
