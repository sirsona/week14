import cors from "cors";
import "dotenv/config";
import express from "express";
import { leadsRouter } from "./routes/leads.js";
import { productRouter } from "./routes/products.js";

const app = express();

const allowedOrigin = process.env.SHOP_URL || "http://localhost:3000";
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/leads", leadsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Shop API listening on http://localhost:${port}`);
});
