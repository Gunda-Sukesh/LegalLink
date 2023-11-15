const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    email:String,
    password:String,
    ClientName:String,
    FinalizedFee:Number,
    FeePaid:Number,
    FeeToBePaid:Number
})

const IncomeModel = mongoose.model("incomes",IncomeSchema)

module.exports = IncomeModel;