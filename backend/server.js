// Dependencies
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";
import passport from "passport";
import dataBase from "./databse/index.js";
import * as CONST from "./constants/index.js";
// Instances
const app = express();

dotenv.config();
dataBase(chalk);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "16384kb" }));
app.use(morgan("dev"));
app.use(cors());

//  Imported routes
import roomRoutes from "./routes/roomRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Routes
app.use("/", roomRoutes);
app.use("/", userRoutes);

// App port
const PORT = process.env.PORT || 8080;

// Lunching App
app.listen(PORT, () => console.log(chalk.yellow(CONST.APP_LISTEN_FEEDBACK + PORT)));
