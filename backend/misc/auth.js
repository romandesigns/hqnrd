// Dependencies
import jwt from "jsonwebtoken";
// Model
import UserModel from "../models/UserModel.js";

export const auth = async (req, res, next) => {
  try {
    const header = await req.headers["authorization"];
    const bearer = header.split(" ");
    const token = bearer[1];
    if (!token) return res.status(401).json({ error: "Tiene que iniciar session para poder acceder" });
    const { id } = await jwt.verify(token, process.env.SECRET_PASSPHRASE);
    const user = await UserModel.findById({ _id: id });
    if (!user) return res.status(501).json({ error: "A occurrido un error, porfavor contacte soporte technico" });
    req.user = user;
    next();
  } catch ({ message }) {
    console.log(message);
  }
};
