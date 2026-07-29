import { Router } from "express";
import { asyncHandler } from "../asyncHandler.js";
import { query } from "../db.js";

export const leadsRouter = Router();

// GET all leads
leadsRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log(process.env.DB_PASSWORD);
    const { rows } = await query(
      "SELECT id, name, wa_phone, status, channel FROM leads ORDER BY created_at DESC LIMIT 50",
    );
    res.json(rows);
  }),
);

// GET single lead by ID
leadsRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const { rows } = await query("SELECT * FROM leads WHERE id = $1", [id]);

    const lead = rows[0];

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.json(lead);
  }),
);
