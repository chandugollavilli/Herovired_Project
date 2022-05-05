const mongoose = require('mongoose');
const Medical = mongoose.Schema;

const admindata= new mongoose.Schema(
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

module.exports = mongoose.model("admindata" , admindata);
