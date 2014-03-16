var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

mongoose.connect(config.db+database);

var CustomerSchema = new Schema({});
var Customer = mongoose.model('Customer',CustomerSchema);

Customer.find(function(err){
	console.log(arguments);
});
