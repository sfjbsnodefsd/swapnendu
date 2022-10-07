const express = require("express");

const app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const amqp = require("amqplib");
const Product = require("./Product");
const isAuthenticated = require("../isAuthenticated")
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/product-service",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`auth service DB  Connected`);
  }
);

async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();

  await channel.assertQueue("PRODUCT")
}

connect();

//Create New product

//Bye a new product

app.post("/product/create", isAuthenticated, async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({
    name, description, price
  });
  return res.json(newProduct);
});

//User will send a list of product they will be identify by productid

app.post("/product/buy", isAuthenticated, async(req, res) => {
  const [ids] = req.body;
  const products = await Product.find(_id, { $in: ids });
});

app.listen(5001, () => {
  console.log(`Product service at ${PORT}`);
});