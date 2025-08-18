import express from "express";
import Book from "../models/Book.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// Public: list and search
router.get("/", async (req, res) => {
  const { q } = req.query;
  const query = q
    ? { $or: [{ title: new RegExp(q, "i") }, { author: new RegExp(q, "i") }, { isbn: new RegExp(q, "i") }] }
    : {};
  const books = await Book.find(query).sort({ createdAt: -1 });
  res.json(books);
});

// Admin: create
router.post("/", requireAuth, requireAdmin, async (req, res) => {
  const { title, author, isbn, copies } = req.body;
  if (!title || !author) return res.status(400).json({ message: "Title and author required" });
  const book = await Book.create({ title, author, isbn, copies: Number.isFinite(copies) ? copies : 1 });
  res.status(201).json(book);
});

// Admin: update
router.put("/:id", requireAuth, requireAdmin, async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// Admin: delete
router.delete("/:id", requireAuth, requireAdmin, async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Deleted" });
});

export default router;
