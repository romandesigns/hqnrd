// Dependencies
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Admin Schema
const UserSchema = new mongoose.Schema(
  {
    avatar: {
      type: Buffer,
    },
    idcard: {
      type: Buffer,
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    dob: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: ["manager", "ceo", "guest", "maintnance"],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

UserModel.encodePass = async function (password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

UserModel.decodePass = async function (plainPassword, hashed) {
  const isMatch = await bcrypt.compareSync(plainPassword, hashed);
  return isMatch;
};

export default UserModel;
