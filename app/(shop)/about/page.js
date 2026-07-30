// app/(shop)/about/page.js
export const metadata = {
  title: "About",
  description: "Learn more about Mctaba Shop",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Mctaba Shop</h1>
      <p className="text-gray-700">
        Mctaba Shop is your local online store for quality books and more.
      </p>
    </div>
  );
}
