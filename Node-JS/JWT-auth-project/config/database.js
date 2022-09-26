const {createpool} = require("mysql");

const pool = createpool({
    port:3306,
    host:'localhost',
    user:'root',
    password:'root',
    database:'test',
    connectionLimit:10
});

module.exports = pool;