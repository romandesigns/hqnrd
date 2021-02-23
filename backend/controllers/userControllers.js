// Dependencies
import mongoose from "mongoose";
import mailer from "@sendgrid/mail";
import jwt from "jsonwebtoken";
import Joi from "joi";

// CONSTANT Variables
import * as CONST from "../constants/index.js";
// Models
import UserModel from "../models/UserModel.js";
// Misc
import EMAIL from "../misc/HTML_email_template.js";

// Get all users
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
  let verification_Link = `http://${req.headers.host}/verificacion-email?token=${token}`;
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
      CONST.EMAIL_BODY,
      CONST.EMAIL_BTN_CTA,
      CONST.EMAIL_SIGNATURE,
      CONST.EMAIL_REP_MANAGER_NAME,
      verification_Link
    ),
  };
  mailer
    .send(msg)
    .then(() => {
      return res.json({ message: "Email sent" });
    })
    .catch(({ message }) => {
      console.error(message);
      return res.json({ error: message });
    });
};

// signIn user
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ email: email });
  if (!user) return res.json({ error: CONST.SIGN_IN_EMAIL });
  let token = jwt.sign({ _id: user._id }, process.env.SECRET_PASSPHRASE, { expiresIn: "1h" });
  let data = {
    created: new Date(user.createdAt).toUTCString(),
    updated: new Date(user.updatedAt).toUTCString(),
    username: user.username,
    name: user.name,
    lastname: user.lastName,
    email: user.email,
    phone: user.phone,
    validated: user.validated,
  };
  return res.json({ token, data });
};

// Update admin
export const verifyUser = async (req, res) => {
  try {
    let data = jwt.verify(req.query.token, process.env.SECRET_PASSPHRASE);
    const { name, lastName, email, phone, username, password } = data;
    let user = new UserModel({
      username,
      name,
      lastName,
      email,
      phone,
      role: "huesped",
      validated: true,
      password: await UserModel.encodePass(password),
    });
    if (!user) return res.status(400).json({ message: CONST.ACCOUNT_NOT_CREATED });
    await user.save();
    if (user) return res.redirect(`${process.env.CLIENT_HOST}/huesped/iniciar-session`);
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

// Remove admin
export const guestProfile = async (req, res) => {
  console.log(req.user);
};
