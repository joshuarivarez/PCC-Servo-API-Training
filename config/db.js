const mongoose = require("mongoose");

const dbURL = "mongodb://127.0.0.1:27017/servoDB";

mongoose
  .connect(dbURL)
  .then(() => console.log("Connected"))
  .catch((error) => console.log(error));
