const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
// routes
const bootcamps = require("./routes/bootcamps");
// const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");
// load env variables
dotenv.config({ path: "./config/config.env" });
// connect to database
connectDB();
const app = express();
// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// mount routes
app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

// handle rejections
process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
