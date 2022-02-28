const express = require("express");
const dotenv = require("dotenv");

// routes

const bootcamps = require("./routes/bootcamps");

// load env variables
dotenv.config({ path: "./config/config.env" });
const app = express();

// mount routes

app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  () => `server running in ${process.env.NODE_ENV} on port ${PORT}`
);
