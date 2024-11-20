// mongo.js
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Подключение к MongoDB успешно установлено");
});

mongoose.connection.on("error", (err) => {
  console.error("Ошибка подключения к MongoDB:", err);
});

module.exports = mongoose;
