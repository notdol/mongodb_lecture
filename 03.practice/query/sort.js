var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

var express = require('express');
var app = express();
app.use( express.bodyParser() );

mongoose.connect(config.db+database);

var CustomerSchema = new Schema({});
var Customer = mongoose.model('Customer',CustomerSchema);

app.use(express.static(__dirname + '/public'));

app.get('/customer/:id', function(req, res){
	Customer.find({CustomerID : req.params.id},function(err,data){
		res.send(data);
	});
	/*
		Customer.find({},{}).sort({}).exec(function(err,data){
			res.send(data);
		});
	*/
});

app.listen(3000);