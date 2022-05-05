const mongoose = require('mongoose');


const Transaction=new mongoose.Schema({
    transaction_id:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    appointment_id:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model("transactiondata",Transaction);