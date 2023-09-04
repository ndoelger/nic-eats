const mongoose = require("mongoose");
// Ensure category model is loaded by Mongoose
require("./category");
const itemSchema = require("./itemSchema");

module.exports = mongoose.model("Item", itemSchema);
