const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isBlocked: { type: Boolean, default: false },
    role: { type: String, required: true, default: public },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
