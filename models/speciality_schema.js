const mongoose = require('mongoose');

const Speciality = new mongoose.Schema(
    {
        spl_id:{
            type:String,
            require:true
      
        },
        spl_name:{
            type:String,
            require:true
        },
    });

module.exports = mongoose.model("specialityData" , Speciality);
