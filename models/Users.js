const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const { genHash } = require("../middleware/hash");

const UserSchema = new Schema({
  email: { type: String, lowercase: true, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  salt: String,
});

UserSchema.pre("save", async function () {
  const saltHash = await genHash(this.password);
  const { salt, hash } = saltHash;

  this.password = hash;
  this.salt = salt;
});

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password)
  return compare
}

const UserModel = model("User", UserSchema);

module.exports = UserModel;