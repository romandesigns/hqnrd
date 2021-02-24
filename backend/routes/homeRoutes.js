// Dependencies
import express from "express";
import { auth } from "../misc/auth.js";
// Initializing modules
const router = express.Router();
// Controllers
import { getHome, createHome, updateHome } from "../controllers/homeControllers.js";

// Home API
router.get("/home", getHome);
router.post("/create/home", createHome);
router.put("/update/home", updateHome);

// Exporting router module
export default router;
