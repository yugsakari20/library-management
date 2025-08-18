import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    dueDate: { type: Date, required: true },
    returnedAt: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.model("Loan", loanSchema);
