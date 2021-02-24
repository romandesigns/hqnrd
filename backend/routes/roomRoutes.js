// Dependencies
import express from "express";
// Initializing modules
const router = express.Router();
// Controllers
import { getRooms, createRoom, getRoom, updateRoom, deleteRoom } from "../controllers/roomControllers.js";

// Public API
router.get("/rooms", getRooms);
router.post("/room", createRoom);
router.post("/room/:id", getRoom);
router.put("/room/:id", updateRoom);
router.delete("/room/:id", deleteRoom);

// Exporting router module
export default router;
