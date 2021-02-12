// Dependencies
import mongoose from "mongoose";

// CONSTANT Variables
import * as CONST from "../constants/index.js";

const database = (chalk) => {
  try {
    mongoose
      .connect(process.env.APP_DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
      .then((result) => console.info(chalk.blue(CONST.DB_CONNECTED)))
      .catch((error) => console.error(chalk.red(CONST.DB_ERROR)));
  } catch ({ message }) {
    console.log(message);
  }
};

export default database;
