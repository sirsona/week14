import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mctaba Shop",
  description: "Your local online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
