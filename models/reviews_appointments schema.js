const mongoose = require('mongoose');


const Reviews_appointments=new mongoose.Schema({
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
    appointment_id:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model("review_appointmentsdata",Reviews_appointments);