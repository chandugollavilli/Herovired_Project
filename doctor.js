var express = require("express");
var app = express();
var router = express.Router();
var path = require('path')


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/Medical?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

// calling schemas
const doctordata = require('./models/doctor_schema.js');




app.post("/dashboardmyschedule", function(req,res){
 console.log(req.body);

})



module.exports = router