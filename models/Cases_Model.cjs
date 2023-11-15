const mongoose = require('mongoose')

const CaseSchema = new mongoose.Schema({
    email:String,
    password:String,
    ClientName:String,
    CaseDetail:String,
    CourtDetail:String,
    PetitionervsRespondent:String,
    Sections:String,
    Status:String
})

const CasesModel = mongoose.model("cases",CaseSchema)

module.exports = CasesModel;