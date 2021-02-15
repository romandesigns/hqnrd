// Dependencies
import mongoose from "mongoose";
import mailer from "@sendgrid/mail";
import jwt from "jsonwebtoken";

// CONSTANT Variables
import * as CONST from "../constants/index.js";
// Models
import UserModel from "../models/UserModel.js";
// Misc
import EMAIL from "../misc/HTML_email_template.js";

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

  let user = await UserModel.findOne({ $or: [{ email: email }, { username: username }] });
  if (user) return res.json({ error: CONST.CREDENTIALS_REGISTEED });

  let token = jwt.sign(req.body, process.env.SECRET_PASSPHRASE, { expiresIn: "20m" });
  let verification_Link = `http://${req.hostname}:3000/verificacion/confirmacion/${token}`;

  mailer.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: "hotelquintonivelrd@gmail.com", // Change to your verified sender
    subject: "Confirme su correo electronico",
    text: "and easy to do anywhere, even with Node.js",
    html: EMAIL(
      CONST.EMAIL_COMFIRM_PREHEADER,
      CONST.EMAIL_TITLE,
      name,
      CONST.EMAIL_VERIFICATION_COPY,
      CONST.EMAIL_BTN_CTA,
      CONST.EMAIL_SIGNATURE,
      CONST.EMAIL_REP_MANAGER_NAME,
      verification_Link
    ),
  };
  mailer
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

// Update admin
export const verifyUser = async (req, res) => {
  console.log(req.params);
  let data = jwt.verify(req.params.token, process.env.SECRET_PASSPHRASE);
  console.log(data);

  // const { name, lastName, email, phone, username, password } = req.body;
  // try {
  //   let user = new UserModel({
  //     username,
  //     name,
  //     lastName,
  //     email,
  //     phone,
  //     role: "huesped",
  //     password: await UserModel.encodePass(password),
  //   });
  //   if (!user) return res.status(400).json({ message: CONST.ACCOUNT_NOT_CREATED });
  //   await user.save();
  //   return res.status(201).json(user);
  // } catch ({ message }) {
  //   return res.status(500).json({ error: message });
  // }
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
