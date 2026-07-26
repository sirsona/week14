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
