const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");

const __filename = fileURLToPath(__filename);
const __dirname = path.dirname(__filename);

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

const logger = morgan("combined", { stream: accessLogStream });

module.exports = logger;
