// Dependencies
import express from "express";

// Initializing modules
const router = express.Router();

// Controllers
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/userControllers.js";

// Admin API
router.get("/admins", getUsers);
router.post("/create/admin", createUser);
router.put("/admin/update/:id", updateUser);
router.delete("/admin/delete/:id", deleteUser);

// Exporting router module
export default router;
