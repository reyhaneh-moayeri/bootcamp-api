const express = require("express");
const dotenv = require("dotenv");
// routes
const bootcamps = require("./routes/bootcamps");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
// load env variables
dotenv.config({ path: "./config/config.env" });
const app = express();
// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// mount routes
app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  () => `server running in ${process.env.NODE_ENV} on port ${PORT}`
);
