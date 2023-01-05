const { Schema, model } = require("mongoose");

const ComentSchema = new Schema({
  userName: { type: String, required: false },
  vote: { type: Number },
  coment: { type: String },
});

const ComentModel = model("Coment", ComentSchema);

module.exports = ComentModel;
