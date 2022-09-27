require("dotenv").config();
const express = require('express');
const app = express();

app.get('/api', (req,res) => {
    res.json({
        success:1,
        message: "This rest api is working"
    });
})


app.listen(process.env.APP_PORT, () => {
    console.log("application is running in", process.env.APP_PORT);
});