/* require dotenv */
require("dotenv").config;

/* Initialize depedencies */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const originalOptionCors = {
  host: `http://localhost:${PORT}`,
};

app.use(cors(originalOptionCors));
app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => console.log("listening on port", PORT));