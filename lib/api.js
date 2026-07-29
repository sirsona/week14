const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function apiFetch(path, options = {}) {
  // Ensure path starts with /app/ for the Express server
  const fullPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${API_BASE_URL}${fullPath}`;

  console.log("Fetching from:", url); // Debug log

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request to ${path} failed`);
  }

  return res.json();
}
