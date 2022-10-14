const jwt = require("jsonwebtoken");

module.exports =  async function authenticate(req, res, next) {
    // Bearer <token>
    const token = req.headers["authorization"].split(" ")[1];

    jwt.verify(token, "secret", (err, user) => {
        if (err) {
            return res.json({
                success: 0,
                message: "Unauthorized Access"
            })
        }
        else {
            req.user = user;
            next();
        }
    })
}