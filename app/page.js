import Counter from "@/app/components/Counter";

export default async function HomePage() {
  let posts = [];
  let error = null;

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    posts = await res.json();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <main>
        <h1>Shop</h1>
        <p style={{ color: "red" }}>Failed to load posts: {error}</p>
        <Counter />
      </main>
    );
  }

  return (
    <main>
      <h1>Shop</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <Counter />
    </main>
  );
}
