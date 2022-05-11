var express = require("express");
var app = express();

// app.use(express.static("contents"));
var path = require('path')
app.path = require("path");
var Doctorrouter = require('./admin/Doctor.js') 
var patientrouter = require('./patient.js')
var webpagerouter = require('./webpage.js')
var doctorrouter = require('./doctor.js')

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"pages")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, '/admin')));


app.use('/Doctor', Doctorrouter)
app.use('/patient',patientrouter)
app.use('/webpage',webpagerouter)
app.use('/doctor', doctorrouter)

//sessions


const session = require('express-session');
app.use(session({secret:'Teja'}));

app.use(express.json());

app.get("/doctordata", function(req,res){
    console.log(req.session)
    if(req.session.visited == false || req.session.visited == undefined)
    {
        // res.sendFile(__dirname+'/webpage/login.html');
        res.sendFile(__dirname+'/doctor/index.html');
    }
    else
    {
        res.sendFile(__dirname+'/webpage/login.html');
    }    
});




//webpage page

app.get('/logout',function(req,res){
    res.session.destroy();
    res.redirect('/login');
});

// admin logout

app.get('/admin/logout',function(req,res){
    res.session.destroy();
    res.redirect('/adminlogin');
});




//////////Admin///////////////////////////
app.get("/admin/dashboard", function(req,res){
    res.sendFile(__dirname + "/pages/admin/index.html");
});
app.get("/admin/doctor", function(req,res){
    res.sendFile(__dirname + "/pages/admin/doctor.html");
});
app.get("/admin/doctor-details", function(req,res){
    res.sendFile(__dirname + "/pages/admin/doctor-details.html");
});

app.get("/admin/Patient", function(req,res){
    res.sendFile(__dirname + "/pages/admin/patient.html");
});

app.get("/admin/Patient-details", function(req,res){
    res.sendFile(__dirname + "/pages/admin/Patient-details.html");
});
app.get("/admin/Appointment", function(req,res){
    res.sendFile(__dirname + "/pages/admin/Appointment-details.html");
});
app.get("/admin/reviews", function(req,res){
    res.sendFile(__dirname + "/pages/admin/reviews.html");
});

////admin login//////
app.get("/admin/login", function(req,res){
    res.sendFile(__dirname + "/admin/page-login.html");
});

app.get("/admin/calendar", function(req,res){
    res.sendFile(__dirname + "/pages/admin/app-calender.html");
});
app.get("/admin/compose", function(req,res){
    res.sendFile(__dirname + "/pages/admin/email-compose.html");
});
app.get("/admin/inbox", function(req,res){
    res.sendFile(__dirname + "/pages/admin/email-inbox.html");
});
app.get("/admin/read", function(req,res){
    res.sendFile(__dirname + "/pages/admin/email-read.html");
});


///////patient//////////
app.get('/patient/Dashboard',function(req,res){
    res.sendFile(__dirname + '/pages/patient/index.html');
});

app.get('/patient/Book_an_Appointment',function(req,res){
    res.sendFile(__dirname + '/pages/patient/forms-validation.html');
});

app.get('/patient/Present_Appointments',function(req,res){
    res.sendFile(__dirname + '/pages/patient/tables-general.html');
});

app.get('/patient/Overall_Appointments',function(req,res){
    res.sendFile(__dirname + '/pages/patient/tables-data.html');
});

app.get('/patient/Prescription',function(req,res){
    res.sendFile(__dirname + '/pages/patient/prescription.html');
});

app.get('/patient/Profile',function(req,res){
    res.sendFile(__dirname + '/pages/patient/users-profile.html');
});

app.get('/patient/Payment',function(req,res){
    res.sendFile(__dirname + '/pages/patient/payment1.html');
});

app.get('/patient/Contact_Us',function(req,res){
    res.sendFile(__dirname + '/pages/patient/pages-contact.html');
});


///////////////webpage////////////////
app.get("/", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/index.html");
});
app.get("/about", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/about.html");
});
app.get("/app", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/appointment.html");
});
app.get("/contact", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/contact.html");
});
app.get("/gallery", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/gallery.html");
});
app.get("/service", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/service.html");
});
app.get("/Doctors", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/team.html");
});
app.get("/patient_login", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/user_login.html");
});
app.get("/patient_register", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/register.html");
});
app.get("/doctor_login", function(req,res){
    res.sendFile(__dirname + "/pages/webpage/login.html");
});


////////////doctor//////////////////////
app.get("/doctor/dashboard", function(req,res){
    res.sendFile(__dirname + "/pages/doctor/index.html");
});

app.get("/doctor/appointments", function(req,res){
    res.sendFile(__dirname+"/pages/doctor/dashboard__appointments.html");
    
});

app.get("/doctor/myschedule", function(req,res){

  res.sendFile(__dirname+"/pages/doctor/dashboard_myschedule.html");
  
});

app.get("/doctor/charts", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__charts.html");
  
});
app.get("/doctor/doctors-add", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__doctors-add.html");
  
});

app.get("/doctor/doctors", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__doctors.html");
  
});
app.get("/doctor/forms", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__forms.html");
  
});
app.get("/doctor/messages", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__messages.html");
  
});

app.get("/doctor/patient-profile", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__patient-profile.html");
  
});
app.get("/doctor/patient", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__patient.html");
  
});
app.get("/doctor/patients-add", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__patients-add.html");
  
});

app.get("/doctor/tables", function(req,res){
  res.sendFile(__dirname+"/pages/doctor/dashboard__tables.html");
  
});







// app.use(express.static(path.join(__dirname, '')));


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/Medical?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

// const connection = mongoose.connection;


// const admindata = connection.model("admindata" , admindata);

//calling all schemas
const Appointment_schema=require('./models/Appointment_schema.js');
const Doctor=require('./models/doctor_schema.js');
const Patient=require('./models/patient_schema.js');
const Reviews_appointments=require('./models/reviews_appointments schema.js');
const Reviews_doctor=require('./models/reviews_doctor schema.js');
const Transaction=require('./models/transaction_schema.js');
const admindatas=require('./admin/schema.js');
const login=require('./models/login_schema.js');
const signup=require('./models/signup_schema.js');
const patientData=require('./models/patient_schema.js')




///////////Admin////////////////
app.post("/admindata",function(req,res){
    console.log(req.body);
    admindatas.findOne({'email':req.body.email,'Password':req.body.password},function(err,docs){
        if(err || docs==null){
            console.log(err)
            res.sendStatus(500);
        }
        else{
            console.log(docs);
            res.send(docs);
            
        }

    });
});



app.listen(8080, ()=> console.log("Successfully Server Started"));












