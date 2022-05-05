const mongoose = require('mongoose');


const Reviews_doctor=new mongoose.Schema({
    review_id:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    review_score:{
        type:String,
        required:true
    },
    patient_id:{
        type:String,
        required:true
    },
    doctor_id:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model("review_doctordata",Reviews_doctor);