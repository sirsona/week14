import { Router } from "express";
import { asyncHandler } from "../asyncHandler.js";
import { query } from "../db.js";

export const productRouter = Router();

productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { rows } = await query(
      `SELECT id, slug, name, price_cents, image_url, in_stock, category 
      FROM products
      ORDER BY created_at DESC`,
    );
    res.json({ products: rows });
  }),
);

export async function generateMetadata({ params }) {
  let product;
  try {
    ({ product } = await apiFetch(`/api/products/${params.slug}`));
  } catch {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: `KSh ${(product.price_cents / 100).toLocaleString()} — ${product.description}`,
    },
  };
}

export default productRouter;

// slug endpoint

productRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const { rows } = await query(
      `SELECT id, slug, name, price_cents, image_url, in_stock, category
      FROM products
      where slug = $1`,
      [slug],
    );
    const product = rows[0];
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  }),
);
