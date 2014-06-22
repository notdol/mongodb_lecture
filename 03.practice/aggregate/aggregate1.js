var config = require('./config');
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

mongoose.connect(config.db+database);

var OrderSchema = new Schema({});
var Order = mongoose.model('Order',OrderSchema);



//db.orders.aggregate( { $project : {'CustomerID' : 1} } , { $group : {_id : '$CustomerID', 'count' : {$sum : 1} } } , { $sort : { count : -1 } } ,  { $limit : 5 } )


    Order.aggregate([
			{ $project : {'CustomerID' : 1} },
			{ $group : {_id : '$CustomerID', 'count' : {$sum : 1} } },
			{ $sort : { count : -1 } },
			{ $limit : 5 }
    	], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });

