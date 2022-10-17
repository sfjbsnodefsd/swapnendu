const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5001;
const PensionerDetail = require("./pensionerDetail");
const jwt = require("jsonwebtoken");
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/pension-management",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`Management Portal DB  Connected`);
  }
);

app.listen(PORT, () => {
    console.log(`Management Portal at ${PORT}`);
});