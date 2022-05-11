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


// console.log(__dirname,"/models/Appoinment_schema.js")
const patientdata = require('./models/patient_schema.js');

var appointment = require(path.resolve('models/Appointment_schema.js'))

router.post('/checkdata', function(req,res){
    // console.log(req.body)
    var data = new appointment({
        name : req.body.Name,
        mailID : req.body.mailID,
        mobile : req.body.mobile,
        speciality : req.body.speciality,
        doctor : req.body.Doctor,
        date : req.body.Date,
        description : req.body.Description
    })

    data.save(function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.redirect('/patient/Present_Appointments')
        }
    })
})

///patient appointment//////
router.get('/activeAppointments', function(req,res){
    appointment.find({},function(err,docs){
        if(err){
            console.log(err)
        }
        else{
            console.log(docs)
            res.send(docs)
        }
    })
})



//paymentSchema

var payment = require(path.resolve('models/Payment_Schema.js'))

router.post('/paymentdata', function(req,res){
    // console.log(req.body)
    var data = new payment({
        cardowner : req.body.cardowner,
        cardnumber: req.body.cardnumber,
        expirymonth : req.body.expirymonth,
        expiryyear : req.body.expiryyear,
        cvv : req.body.cvv,
        // date : req.body.Date,
        // description : req.body.Description
    })

    data.save(function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            console.log(data);
            res.redirect('/patient/Payment')
        }
    });
});


router.get('/patientpayment', function(req,res){
    patientpayment.find({},function(err,docs){
        if(err){
            console.log(err)
        }
        else{
            console.log(docs)
            res.send(docs)
        }
    });
});

//timing slots

var moment = require('moment');
var startTime = moment().utc().set({hour:11,minute:00});
var endTime = moment().utc().set({hour:23,minute:59});

 var timeStops = [];

while(startTime <= endTime){
    timeStops.push(new moment(startTime).format('HH:mm'));
    startTime.add(15, 'minutes');
}

console.log('timeStops ', timeStops)



module.exports = router