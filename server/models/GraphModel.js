const mongoose = require("mongoose");

const graphSchema = new mongoose.Schema({
    date: { type: String },
    price: { type: Number, required: true },
    type: {type: String, default: "N/A"}
});

module.exports = mongoose.model("graph", graphSchema);