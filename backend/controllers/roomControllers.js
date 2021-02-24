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

// Get all rooms
export const getRooms = async (req, res) => {};

// Get room
export const getRoom = async (req, res) => {};

// Create room
export const createRoom = async (req, res) => {};

// Update Room
export const updateRoom = async (req, res) => {};

// Delete Room
export const deleteRoom = async (req, res) => {};
