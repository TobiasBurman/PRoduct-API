require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/dbConnect");

connectDB();

app.use(cors());

app.use(express.json());

const productsRouter = require("./routes/products");
app.use("/products", productsRouter);








mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port} `);
  });
});
