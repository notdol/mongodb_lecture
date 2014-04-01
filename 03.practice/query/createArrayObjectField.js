var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

mongoose.connect(config.db+database);

var OrderSchema = new Schema({
	OrderID : Number,
	Details : Array
});
var Order = mongoose.model('Order',OrderSchema);

var OrderDetailSchema = new Schema({
	OrderID : Number,
	ProductID : Number
});
var OrderDetail = mongoose.model( 'order-detail', OrderDetailSchema);

var OrderObjectSchema = new Schema({});
var OrderObject = mongoose.model( 'OrderObject', OrderObjectSchema);


Order.find(function(err, docs ){
	if(err) {
		throw new Error(err);
	}

	docs.forEach(function(doc){
		OrderDetail.find( { "OrderID" : doc["OrderID"]}, function(err, ordDtl){
			if(err ) {
				throw new Error(err);
			}
			doc.Details = [];
			ordDtl.forEach(function(od){
				doc.Details.push ( od.toJSON() );
			});
			doc.save(function(err){
				if(err){
					console.log(err);	
				};
			});
		});

	});

});
