// Dependencies
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import database from "./databse/index.js";
import * as CONST from "./constants/index.js";

// Dependencies instances
const app = express();

dotenv.config();
database();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "16384kb" }));
app.use(morgan("tiny"));

//  Imported routes
import roomRoutes from "./routes/roomRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Routes
app.use("/", roomRoutes);
app.use("/", adminRoutes);

// App port
const PORT = process.env.APP_PORT || 8080;

// Lunching App
app.listen(PORT, () => console.log(CONST.APP_LISTEN_FEEDBACK + PORT));
