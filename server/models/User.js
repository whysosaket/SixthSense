const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalShares: {
    type: Number,
    default: 0,
  },
  walletBalance: {
    type: Number,
    default: 0,
  },
  totalAssets: {
    type: Number,
    default: 0,
  },
  dayCount: {
    type: Number,
    default: 0,
  },
  principle: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("user", userSchema);
