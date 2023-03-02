const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const AuthRoute = require("./routes/auth.route");
const UserRoute = require("./routes/user.route");
const ProductRoute = require("./routes/product.route");
const CartRoute = require("./routes/cart.route");
const OrderRoute = require("./routes/order.route");
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
app.use("/api/products", ProductRoute);
app.use("/api/cart", CartRoute);
app.use("/api/order", OrderRoute);

app.listen(5000, () => {
  console.log("server running....");
});
