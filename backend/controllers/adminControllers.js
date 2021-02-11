// Dependencies
import mongoose from "mongoose";
// CONSTANT Variables
import * as CONST from "../constants/index.js";
// Models
import AdminModel from "../models/AdminModel.js";

// Get all admins
export const getAdmins = async (req, res) => {
  try {
    let admins = await AdminModel.find({});
    if (admins.length === 0) return res.status(200).json({ message: CONST.CONTENT_NOT_FOUND });
    return res.status(302).json(admins);
  } catch ({ message }) {
    return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};

// Create admin
export const createAdmin = async (req, res) => {
  console.log(req.body);
  const { firstname, lastname, dob, email, phone, password } = req.body;

  try {
    let admin = new AdminModel({
      firstname,
      lastname,
      dob,
      email,
      phone,
      password: await AdminModel.encodePass(password),
    });
    // if (!admin) return res.status(400).json({ message: CONST.ACCOUNT_NOT_CREATED });
    // await admin.save();
    // return res.status(201).json(admin);
  } catch ({ message }) {
    return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};

// Update admin
export const updateAdmin = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.status(400).json({ message: CONST.OBJECT_ID_NOT_VALID });
    let updatedAdmin = await AdminModel.findOneAndUpdate(req.params.id, { $set: req.body }, { new: true });
    await updatedAdmin.save();
    return res.status(302).json({ message: CONST.ACCOUNT_UPDATED });
  } catch ({ message }) {
    if (message) return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};

// Remove admin
export const deleteAdmin = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.status(400).json({ message: CONST.OBJECT_ID_NOT_VALID });
    let updatedAdmin = await AdminModel.findOneAndDelete(req.params.id);
    if (updatedAdmin) return res.status(200).json({ message: CONST.ACCOUNT_DELETED });
  } catch ({ message }) {
    if (message) return res.status(500).json({ error: CONST.INTERNAL_PROBLEM_FOUND });
  }
};
