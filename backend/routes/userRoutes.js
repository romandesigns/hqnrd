// Dependencies
import express from "express";
import { auth } from "../misc/auth.js";

// Initializing modules
const router = express.Router();

// Controllers
import { getUsers, guestProfile, createUser, signIn, updateUser, deleteUser, verifyUser } from "../controllers/userControllers.js";

// Admin API
router.get("/users", getUsers);
router.post("/create/user", createUser);
router.post("/sigin/user", signIn);
router.put("/admin/update/:id", updateUser);
router.get("/verificacion-email", verifyUser);
router.delete("/admin/delete/:id", deleteUser);
router.get("/huesped/profile", auth, guestProfile);

// Exporting router module
export default router;
