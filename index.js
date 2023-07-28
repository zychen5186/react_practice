const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./models/dataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/reactdata', { useNewUrlParser: true });

app.post('/insert', async(req, res) => {
    const FirstName = req.body.firstName
    const CompanyRole = req.body.companyRole

    const formData = new User({
        name: FirstName,
        role: CompanyRole
    })

    console.log(formData.name)
    console.log(formData.role)
    try {
        await formData.save();
        res.send("inserted data..")
    } catch(err) {
        console.log(err)
    }
});

app.get('/getText', (req, res) => {
    User.find()
        .then(users => {
            console.log(users)
            res.send(users)})
        .catch(err => console.error(err));
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});