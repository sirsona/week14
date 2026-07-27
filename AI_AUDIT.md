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
