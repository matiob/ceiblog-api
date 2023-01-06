const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    authorName: { type: Schema.ObjectId, ref: "User" },
    category: [{ type: Schema.ObjectId, ref: "Category" }],
    isPrivate: {
      type: Boolean,
      default: true,
    },
    coments: [{ type: Schema.ObjectId, ref: "Coments" }],
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
