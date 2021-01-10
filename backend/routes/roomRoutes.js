// Dependencies
import express from "express";

// Initializing modules
const router = express.Router();

// Controllers
import { getRooms } from "../controllers/roomControllers.js";

// Public API
router.get("/rooms", getRooms);
// router.post("/room", createRoom);
// router.put("/room/:id", updateRoom);
// router.delete("/room/:id", deleteRoom);

// Exporting router module
export default router;
