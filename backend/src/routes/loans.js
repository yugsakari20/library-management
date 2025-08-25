import express from "express";
import Loan from "../models/Loan.js";
import Book from "../models/Book.js";
import { requireAuth, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/borrow/:bookId", requireAuth, async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });
  if (book.copies <= 0) return res.status(400).json({ message: "No copies available" });
  const dueDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 2 weeks
  const loan = await Loan.create({ user: req.user._id, book: book._id, dueDate });
  book.copies -= 1;
  await book.save();
  res.status(201).json(loan);
});

router.post("/return/:loanId", requireAuth, async (req, res) => {
  const loan = await Loan.findById(req.params.loanId).populate("book");
  if (!loan) return res.status(404).json({ message: "Loan not found" });
  if (loan.returnedAt) return res.status(400).json({ message: "Already returned" });
  if (loan.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
    return res.status(403).json({ message: "Cannot return others' loan" });
  }
  loan.returnedAt = new Date();
  await loan.save();
  const book = await Book.findById(loan.book._id);
  book.copies += 1;
  await book.save();
  res.json(loan);
});

router.get("/", requireAuth, async (req, res) => {
  const filter = req.user.role === "admin" ? {} : { user: req.user._id };
  const loans = await Loan.find(filter).populate("book").populate("user", "name email role").sort({ createdAt: -1 });
  res.json(loans);
});

export default router;
