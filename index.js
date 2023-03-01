const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const AuthRoute = require("./routes/auth.route");
const UserRoute = require("./routes/user.route");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(`the error is ${error}`);
  });

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);

app.listen(5000, () => {
  console.log("server running....");
});
