const mongoose = require('mongoose');
const Medical = mongoose.Schema;

const doctordata= new mongoose.Schema(
    {
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true,
        },
        
    });

module.exports = mongoose.model("doctordata" , doctordata);
