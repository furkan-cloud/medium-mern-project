const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const router = require("./routes/router");
const connectDatabase = require("./helpers/db/connectDb");
const customErrorHandler = require("./middlewares/error/customErrorHandler");

//db Connect
connectDatabase();

// create express app
const app = express();
//cors midd.
app.use(cors());
//Express Body Parser midd.
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
const { PORT, NODE_ENV } = process.env;

app.use("/api", router);
//Error Handler
app.use(customErrorHandler);
//Static Files
app.use(express.static('../build'));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`App started on ${PORT} - ${NODE_ENV}`);
});
