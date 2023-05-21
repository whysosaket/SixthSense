const mongoose = require("mongoose");

const graphSchema = new mongoose.Schema({
    date: { type: String },
    price: { type: Number, required: true },
    type: {type: String, default: "N/A"},
    quantity: {type: Number, default: 0},
});

module.exports = mongoose.model("graph", graphSchema);