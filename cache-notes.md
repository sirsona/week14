# Cache Notes

## What does `revalidate = 0` mean?

- `revalidate = 0` tells Next.js to **never cache** the page. Every request fetches fresh data from the database.
- Best for constantly changing data, e.g. a CRM leads list.

## When would you NOT want fresh data?

- For **static or infrequently changing content** (e.g. blog posts, product descriptions, About page). Caching reduces database load.

## What is ISR (Incremental Static Regeneration) and when is it the sweet spot?

- ISR generates static pages at build time and revalidates them on a schedule (e.g. `revalidate = 3600`).
