// Dependencies
import express from "express";
import { auth } from "../misc/auth.js";
// Initializing modules
const router = express.Router();
// Controllers
import { getAdmin, getAdmins, updateAdmin, deleteAdmin, signInAdmin, signOutAdmin, adminProfile, verifyAdmin } from "../controllers/adminControllers.js";

// Admin API
router.get("/admin/:id", getAdmin);
router.get("/admins", getAdmins);
router.put("/admin/update/:id", updateAdmin);
router.get("/admin/delete", deleteAdmin);

router.post("/admin/sigin", signInAdmin);
router.post("/admin/sigup", signOutAdmin);

router.get("/admin/profile", adminProfile);
router.get("/verificacion-email", verifyAdmin);

// Exporting router module
export default router;
