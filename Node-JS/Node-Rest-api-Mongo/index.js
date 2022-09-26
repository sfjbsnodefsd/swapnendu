const express = require("express")
const coursesRouter = require("./routes/courses")
require("dotenv").config();
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());
app.use(coursesRouter);


mongoose.connect(process.env.DB_CONNECTION_URL,() =>{
    console.log("connected to db sucessfully");
})
app.listen(process.env.PORT,() => {
    console.log("server is starting ");
})