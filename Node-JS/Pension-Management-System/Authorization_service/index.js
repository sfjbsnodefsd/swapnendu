const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const Pensioner = require("./pensioner");
const jwt = require("jsonwebtoken");
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/pension-management",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`auth service DB  Connected`);
  }
);

// register
app.post("/auth/reg", async (req, res) => {
  const { email, password, name } = req.body;

  const pensionerExists = await Pensioner.findOne({ email });
  if (pensionerExists) {
    return res.json({ sucess: 0, message: "Pensioner already exists" });
  } else {
    const newPensioner = new Pensioner({
      name,
      email,
      password,
    });
    newPensioner.save();
    return res.json(newPensioner);
  }
});

// login

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const pensioner = await Pensioner.findOne({ email });
  if (!pensioner) {
    return res.json({ sucess: 0, message: "Pensioner dose not exist" });
  } else {
    if (password !== pensioner.password) {
      return res.json({ sucess: 0, message: "Incorrect password" });
    }
    const payload = {
      email,
      name: pensioner.name,
    };
    jwt.sign(payload, "secret", (err, token) => {
      if (err) console.log(err);
      else {
        return res.json({ token: token });
      }
    });
  }
});


app.listen(PORT, () => {
  console.log(`Auth service at ${PORT}`);
});