const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CategoryModel = model("Category", CategorySchema);

module.exports = CategoryModel;