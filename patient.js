var express = require("express");
var app = express();
var router = express.Router();
// app.use(express.static("contents"));
var path = require('path')


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/Medical?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

const patientData = require('./models/patient_schema.js');




module.exports = router;

