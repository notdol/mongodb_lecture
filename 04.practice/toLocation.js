var config = require('../config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

mongoose.connect(config.db+database);

var CitySchema = new Schema({
	Latitude : Number,
	Longtitude : Number,
	Loc : Object
});
var City = mongoose.model('citie', CitySchema ) ;
console.log("=== start ===");
City.find({/*Country: 'kr'*/},function(err,docs){
	if(err){
		throw new Error(err);
	}
	console.log(" find complete. The count is : "+docs.length);
	docs.forEach(function(item){
		
		item.Loc = { lng : item.Longtitude, lat : item.Latitude } ;
		checkCnt++;
		console.log(checkCnt);
		item.save(function(err){
			if( err ) throw new Error(err);
			checkCnt--;
		});
	});
});

var checkCnt = 0;
function checkComplete(){
	if(checkCnt == 0 ) console.log("===== data modified complete !! ===");
}


