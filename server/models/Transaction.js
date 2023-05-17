const mongoose = require("mongoose");

// define enum having values "deposit" and "withdraw"
const transactionTypes = ["deposit", "withdraw"];

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: transactionTypes, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("transaction", transactionSchema);
