// Dependencies
import mongoose from "mongoose";

// CONSTANT Variables
import * as CONST from "../constants/index.js";

const database = () => {
  try {
    mongoose
      .connect(process.env.APP_DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
      .then((result) => console.info(CONST.DB_CONNECTED))
      .catch((error) => console.error(CONST.DB_ERROR));
  } catch ({ message }) {
    console.log(message);
  }
};

export default database;
