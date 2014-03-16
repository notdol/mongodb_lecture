var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

mongoose.connect(config.db+database);

var OrderSchema = new Schema({OrderDate :Date});

var Orders = mongoose.model('Orders',OrderSchema);

Orders.find(function(err, data){
	if(err){
		console.log(err);
		return;
	}
	data.forEach(function(p){
	Orders.findByIdAndUpdate( p._id ,{OrderDate : new Date(p.OrderDate)},function(err, p ){
			console.log(arguments);
		})
	})

});
