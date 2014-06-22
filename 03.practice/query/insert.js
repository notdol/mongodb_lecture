var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

mongoose.connect(config.db+database);

var OrderSchema = new Schema({
	CustomerID: {type: String}
	, OrderDate : { type: Date, default: Date.now }
	, EmployeeID: { type: Number, min: 18 }
	, ShipCity : { type: String, default: 'Seoul' }
});
var Order = mongoose.model('Order',OrderSchema);


var o = new Order({
	CustomerID: 'notdol',
	EmployeeID : 20,
	ShipCity: 'London'
})

o.save(function(err){
	console.log(err);
});

