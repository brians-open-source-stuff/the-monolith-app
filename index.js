require("dotenv").config();
const express = require("express");
const router = express.Router();
const app = express();
const { readdirSync } = require("fs");
const { join } = require("path");

readdirSync(join(__dirname, "routes")).forEach(function(file) {
  require(join(__dirname, "routes", file))(router);
});

require("./server")(app);
