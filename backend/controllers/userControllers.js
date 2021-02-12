// Dependencies
import mongoose from "mongoose";
// CONSTANT Variables
import * as CONST from "../constants/index.js";
// Models
import UserModel from "../models/UserModel.js";

// Get all admins
export const getUsers = async (req, res) => {
  try {
    let users = await UserModel.find({});
    if (users.length === 0) return res.status(200).json({ message: CONST.CONTENT_NOT_FOUND });
    return res.status(302).json(users);
  } catch ({ message }) {
    return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};

// Create user
export const createUser = async (req, res) => {
  const { name, lastName, email, phone, username, password } = req.body;
  try {
    let user = new UserModel({
      username,
      name,
      lastName,
      email,
      phone,
      role: "huesped",
      password: await UserModel.encodePass(password),
    });
    if (!user) return res.status(400).json({ message: CONST.ACCOUNT_NOT_CREATED });
    await user.save();
    return res.status(201).json(user);
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};

// Update admin
export const updateUser = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.status(400).json({ message: CONST.OBJECT_ID_NOT_VALID });
    let updateUser = await UserModel.findOneAndUpdate(req.params.id, { $set: req.body }, { new: true });
    await updateUser.save();
    return res.status(302).json({ message: CONST.ACCOUNT_UPDATED });
  } catch ({ message }) {
    if (message) return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};

// Remove admin
export const deleteUser = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.status(400).json({ message: CONST.OBJECT_ID_NOT_VALID });
    let deleteUser = await UserModel.findOneAndDelete(req.params.id);
    if (deleteUser) return res.status(200).json({ message: CONST.ACCOUNT_DELETED });
  } catch ({ message }) {
    if (message) return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};
