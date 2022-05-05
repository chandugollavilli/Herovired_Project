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

const connection = mongoose.connection;

const Doctor = new mongoose.Schema(
    {
        username: {type:String},
        userid: {type:String},
        specialist: {type:String},
        CheckIn: {type:String},
        Mailid: {type:String},
        contact: {type:String},
    }
  );
  
  const DoctorData = connection.model("DoctorData" , Doctor);
  
  router.post("/Doctordata", function(req,res){
    console.log(req.body);
    var insertData = {
        username:req.body.username,
        userid:req.body.userid,
        specialist:req.body.specialist,
        CheckIn:req.body.CheckIn,
        Mailid:req.body.Mailid,
        contact:req.body.contact,
    }
    DoctorData.create(insertData,function(err, result){
                if(err){
                    console.log(err)
                }
                else{
                    res.send(result);
                }
            });
  });
  
  module.exports = router