const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const RegisterModel = require('./models/Register.cjs')
const CasesModel = require('./models/Cases_Model.cjs')
const ClientModel = require('./models/Clients_Model.cjs')
const IncomeModel = require('./models/Income_Model.cjs')



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/web-project-login");

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                res.json("Already have an account")
            }
            else {
                RegisterModel.create({ email: email, name: name, password: password })
                    .then(result => res.json("Account created"))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => res.json(err))

})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    RegisterModel.findOne({ email: email, password: password })
        .then((user) => {
            if (user) {
                console.log("yogesh", user)
                res.json("Account Found")
            }
            else {
                res.json("wrong details")
            }
        })
        .catch(err => res.json(err))
})

app.post('/client', (req, res) => {
    const { email, password } = req.body;
    ClientModel.find({ email: email, password: password })
        .then((user) => {
            //console.log(user)
            if (user.length === 0) {
                res.json({ oSy: "No Data" })
            }
            else {
                res.json({ oSy: "Data", Arr: user })
            }
        })
        .catch(err => res.json(err))
})


app.post('/cases', (req, res) => {
    const { email, password } = req.body;
    CasesModel.find({ email: email, password: password })
        .then((user) => {
            if (user.length === 0) {
                res.json({ oSy: "No Data" })
            }
            else {
                res.json({ oSy: "Data", Arr: user })
            }
        })
        .catch(err => res.json(err))
})


app.post('/income', (req, res) => {
    const { email, password } = req.body;
    IncomeModel.find({ email: email, password: password })
        .then((user) => {
            if (user.length === 0) {
                res.json({ oSy: "No Data" })
            }
            else {
                res.json({ oSy: "Data", Arr: user })
            }
        })
        .catch(err => res.json(err))
})


app.post('/addclient', (req, res) => {
    const { email, password, name, mobile } = req.body;
    ClientModel.findOne({ email: email, password: password, clientName: name, MobileNumber: mobile })
        .then((user) => {
            if (user) {
                res.json("Already have an account")
            }
            else {
                ClientModel.create({ email: email, password: password, clientName: name, MobileNumber: mobile })
                    .then(result => res.json("Account created"))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => res.json(err))

})

app.post('/addcase', (req, res) => {
    const { email, password, clientName, caseDetail, courtDetail, petitionerVsRespondent, Sections, Status } = req.body;
    console.log(req.body)
    CasesModel.findOne({ email: email, password: password, ClientName: clientName, CaseDetail: caseDetail, CourtDetail: courtDetail, PetitionervsRespondent: petitionerVsRespondent, Sections: Sections, Status: Status })
        .then((user) => {
            if (user) {
                res.json("Already have an account")
            }
            else {
                CasesModel.create({ email: email, password: password, ClientName: clientName, CaseDetail: caseDetail, CourtDetail: courtDetail, PetitionervsRespondent: petitionerVsRespondent, Sections: Sections, Status: Status })
                    .then(result => res.json("Account created"))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => res.json(err))

})


app.post('/addincome', (req, res) => {
    const { email, password, ClientName, FinalizedFee, FeePaid, FeeToBePaid } = req.body;
    console.log(req.body);
    IncomeModel.findOne({ email: email, password: password, ClientName: ClientName, FinalizedFee: FinalizedFee, FeePaid: FeePaid, FeeToBePaid: FeeToBePaid })
        .then((user) => {
            if (user) {
                res.json("Already have an account")
            }
            else {
                IncomeModel.create({ email: email, password: password, ClientName: ClientName, FinalizedFee: FinalizedFee, FeePaid: FeePaid, FeeToBePaid: FeeToBePaid })
                    .then(result => res.json("Account created"))
                    .catch(err => res.json(err))
            }
        })
        .catch(err => res.json(err))

})
app.post('/dashboard', async (req, res) => {
    let Clients = 0;
    let Cases = 0;
    let Income = 0;
    const { email, password } = req.body;

    try {
        const clients = await ClientModel.find({ email: email, password: password });
        Clients = clients.length;

        const cases = await CasesModel.find({ email: email, password: password });
        Cases = cases.length;

        const incomeList = await IncomeModel.find({ email: email, password: password });
        for (let i = 0; i < incomeList.length; i++) {
            Income += incomeList[i].FeePaid;
        }

        res.json({ oSy: 'Data', Cl: Clients, Ca: Cases, In: Income });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ oSy: 'Error', message: 'Internal server error' });
    }
});





app.listen(3001, () => {
    console.log("Server is Running")
})