var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'test';

mongoose.connect(config.db+database);

var CustomerSchema = new Schema({
	date : Date
});
var Customer = mongoose.model('interval',CustomerSchema);


setInterval(function(){
	var t = new Customer({date : new Date()});		
	t.save(function(err,doc){
		if(err) {
			console.log(err);
		}
	});
},1000);

