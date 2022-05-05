const mongoose = require('mongoose');

const patientData = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
            require:true
        },
        number:{
            type:Number,
        },
        password:{
            type:String,
            require:true,
        }
        
    });

module.exports = mongoose.model("patientData" , patientData);
