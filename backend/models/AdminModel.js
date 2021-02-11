// Dependencies
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Admin Schema
const AdminSchema = new mongoose.Schema(
  {
    avatar: {
      type: Buffer,
    },
    idcard: {
      type: Buffer,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
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

const AdminModel = mongoose.model("Admin", AdminSchema);

AdminModel.encodePass = async function (password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

AdminModel.decodePass = async function (plainPassword, hashed) {
  const isMatch = await bcrypt.compareSync(plainPassword, hashed);
  return isMatch;
};

export default AdminModel;
