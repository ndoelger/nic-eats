const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    emoji: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = itemSchema;
