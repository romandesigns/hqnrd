// Dependencies
import express from "express";

// Initializing modules
const router = express.Router();

// Controllers
import { getUsers, createUser, updateUser, deleteUser, verifyUser } from "../controllers/userControllers.js";

// Admin API
router.get("/users", getUsers);
router.post("/create/admin", createUser);
router.put("/admin/update/:id", updateUser);
router.get("/verificacion/confirmacion/:token", verifyUser);
router.delete("/admin/delete/:id", deleteUser);

// Exporting router module
export default router;
