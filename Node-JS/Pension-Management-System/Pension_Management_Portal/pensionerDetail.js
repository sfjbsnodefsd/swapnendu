const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionerDetailSchema = new Schema({
    Name: String,
    DOB:String,
    PAN:String,
    SalaryEarned:String,
    Allowances:String,
    SelfOrFamily:String,
    BankName:String,
    AccountNumber:String,
    PublicOrPrivate:String,
    Adhara:Number,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Pensioner = mongoose.model("pensionerDetail", PensionerDetailSchema);