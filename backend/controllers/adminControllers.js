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

// Get  Admin
export const getAdmin = async (req, res) => {};

// Get all Admins
export const getAdmins = async (req, res) => {};

// Create Admin
export const createAdmin = async (req, res) => {};

// signIn Admin
export const signInAdmin = async (req, res) => {};

// signOut Admin
export const signOutAdmin = async (req, res) => {};

// Update Admin
export const updateAdmin = async (req, res) => {};

// Remove admin
export const deleteAdmin = async (req, res) => {};

// Verify Admin
export const verifyAdmin = async (req, res) => {};

//  Admin Profile
export const adminProfile = async (req, res) => {};
