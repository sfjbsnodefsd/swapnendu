const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PensionerSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Pensioner = mongoose.model("pensioner", PensionerSchema);