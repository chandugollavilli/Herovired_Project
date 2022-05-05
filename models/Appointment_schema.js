const mongoose = require('mongoose');


const Appointment=new mongoose.Schema({
    name:{type:String},
	mailID:{type:String},
	mobile:{type:String},
	speciality:{type:String},
	doctor:{type:String},
	date:{type:String},
	description:{type:String}
});

module.exports=mongoose.model("Appointment",Appointment);