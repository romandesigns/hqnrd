// Dependencies
import express from "express";

// Initializing modules
const router = express.Router();

// Controllers
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from "../controllers/adminControllers.js";

// Admin API
router.get("/admins", getAdmins);
router.post("/create/admin", createAdmin);
router.put("/admin/update/:id", updateAdmin);
router.delete("/admin/delete/:id", deleteAdmin);

// Exporting router module
export default router;
