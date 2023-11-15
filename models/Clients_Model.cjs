const mongoose = require('mongoose')



const ClientSchema = new mongoose.Schema({
    email:String,
    password:String,
    clientName:String,
    MobileNumber:String
})

const ClientModel = mongoose.model("clients",ClientSchema)

module.exports = ClientModel;