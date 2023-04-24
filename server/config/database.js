const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGODB_URL);

// When the connection is established, log a message to the console
mongoose.connection.on("connected", () => {
  console.log("connection is established");
});

// When the connection is terminated, log a message to the console
mongoose.connection.on("disconnected", () => {
  console.log("connection is unestablished");
});

module.exports = {
  connection,
};
