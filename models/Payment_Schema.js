var mongoose = require('mongoose');
// var Schema = mongoose.Schema()

const Payment = new mongoose.Schema({
	cardowner:{type:String},
	cardnumber:{type:Number},
	expirymonth:{type:Number},
	expiryyear:{type:Number},
	cvv:{type:Number},
	// date:{type:String},
	// time:{type:String},
	// description:{type:String}
})

module.exports = mongoose.model('Paymentdata',Payment)