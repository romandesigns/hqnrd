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

// Get Guest
export const getGuest = async (req, res) => {};

// Get all Guests
export const getGuests = async (req, res) => {};

// Create Guest
export const createGuest = async (req, res) => {};

// signIn Guest
export const signInGuest = async (req, res) => {};

// signOut Guest
export const signOutGuest = async (req, res) => {};

// Update Guest
export const updateGuest = async (req, res) => {};

// Remove admin
export const deleteGuest = async (req, res) => {};

// Verify Guest
export const verifyGuest = async (req, res) => {};

//  Guest Profile
export const guestProfile = async (req, res) => {};
