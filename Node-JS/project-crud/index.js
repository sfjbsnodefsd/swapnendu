const mysql = require("mysql");
const express = require("express");

var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeedb"
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("successful connection");
    }
    else console.log("DB connection failed " + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log("Express server running at port 3000"));

app.get('/getemployees', (res, req) => {
    mysqlConnection.query('select * from employee', (err, rows, feilds) => {
        if (!err) {
            console.log(rows);
        }
        else console.log(err);
    });
});

//get employee by id

app.get('/getemployee/:id', (req, res) => {
    mysqlConnection.query('select * from employee where EmpID = ?', [req.params.id], (err, rows, feilds) => {
        if (!err) {
            console.log(rows);
        }
        else console.log(err);
    });
});


//get employee by id

app.delete('/deleteemployee/:id', (req, res) => {
    mysqlConnection.query('Delete from employee where EmpID = ?', [req.params.id], (err, rows, feilds) => {
        if (!err) {
            res.send("Deleted successfull for id: "+ req.params.id);
        }
        else console.log(err);
    });
});