# AI AUDIT

## Day 1

### app/page.js

- Classification: Server Component
- Reason: Fetches data; no state or event handlers.

### app/components/Counter.jsx

- Classification: Client Component
- Reason: Uses useState and onClick.

### app/layout.js

- Classification: Server Component
- Reason: No interactivity.

### app/about/page.js

- Classification: Server Component
- Reason: Static content only — no state or events

## Day 2

### lib/db.js

- **Classification:** Server-only (runs only on server)
- **Reason:** Uses `pg` database driver with connection pool. Never runs in browser.

### app/leads/page.js

- **Classification:** Server Component
- **Reason:** Queries database directly; no client-side hooks or events.

### app/leads/[id]/page.js

- **Classification:** Server Component
- **Reason:** Queries database directly; uses `notFound()` from `next/navigation`.

### app/leads/loading.js

- **Classification:** Server Component
- **Reason:** Static skeleton UI with no interactivity.

### app/leads/error.js

- **Classification:** Client Component
- **Reason:** Uses `"use client"` to handle error state and `reset` function.

## Day 4

### app/(shop)/layout.js (ShopLayout)

- **Classification:** Server Component
- **Reason:** Renders shared shop layout (header, footer, navigation) with no client-side interactivity. No hooks or event handlers.

### app/(shop)/page.js (Shop Home Page)

- **Classification:** Server Component
- **Reason:** Static home page content with links; no state or event handlers.

### app/(shop)/about/page.js

- **Classification:** Server Component
- **Reason:** Static about page with no interactivity.

### app/(shop)/products/page.js

- **Classification:** Server Component
- **Reason:** Fetches product data via `apiFetch` and renders the product grid. No client-side hooks or events.

### app/(shop)/products/[slug]/page.js

- **Classification:** Server Component
- **Reason:** Fetches product data via `apiFetch`; uses `generateMetadata` and `generateStaticParams` (server-only functions). No client-side interactivity.

### app/(shop)/products/[slug]/not-found.js

- **Classification:** Server Component
- **Reason:** Static not-found page with no interactivity.

### app/leads/layout.js (LeadsLayout)

- **Classification:** Server Component
- **Reason:** Renders shared layout for leads pages (header, footer) with no client-side interactivity.

### app/robots.js

- **Classification:** Server-only
- **Reason:** Generates `robots.txt` dynamically for SEO; runs only on the server.

### app/sitemap.js

- **Classification:** Server-only
- **Reason:** Generates `sitemap.xml` dynamically for SEO; runs only on the server.
