const pool = require("../../config/database");

module.exports = {
    // if we get error it will pass as data and callback will be null
    // if we got exicution success will have data as null and callback have value
    create: (data, callback) => {
        pool.querry(
            `insert into registration(firstName, lastName, gender, email, password, number)
             values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error)
                    return callback(error);
                return callback(null, results);
            }
        );
    }

}