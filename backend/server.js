import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.js";
import bookRoutes from "./src/routes/books.js";
import loanRoutes from "./src/routes/loans.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || true, credentials: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern_library";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "Library Management API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);


app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
