// Dependencies
import express from "express";
import { auth } from "../misc/auth.js";
// Initializing modules
const router = express.Router();
// Controllers
import { getGuest, getGuests, createGuest, signInGuest, signOutGuest, updateGuest, deleteGuest, verifyGuest, guestProfile } from "../controllers/guestControllers.js";

// Admin API
router.get("/guest", getGuest);
router.get("/guests", getGuests);
router.post("/create/guest", createGuest);
router.put("/update/guest/:id", updateGuest);
router.delete("/delete/guest/:id", deleteGuest);

router.post("/guest/signin", signInGuest);
router.post("/guest/signout", signOutGuest);

router.get("/verificacion-email", verifyGuest);
router.get("/huesped/profile", auth, guestProfile);

// Exporting router module
export default router;
