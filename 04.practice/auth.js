var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

var util = require('util');

var user = 'user',
	password = 'password',
	host = 'localhost',
	database = 'Northwind';

mongoose.connect( util.format('mongodb://%s:%s@%s/%s',user,password,host,database) );

var CustomerSchema = new Schema({});
var Customer = mongoose.model('Customer',CustomerSchema);

Customer.find(function(err){
	console.log(arguments);
});
