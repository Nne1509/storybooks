const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

const errorHandler = require("./middleware/errorHandler");
const storybookRouter = require("./routes/storybookRouter");

//Load config
dotenv.config({ path: "./config/config.env" });

//connectdb
connectDB();

const app = express();

//route middleware
app.use(express.json());
app.use("/", storybookRouter);

//errorHandler middleware
app.use(errorHandler);

//Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
