var config = require('./config');  
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var database = 'Northwind';

var Faker = require('Faker');
var dataCnt = 1000;
var completeCnt = 0;

mongoose.connect(config.db+database /*, {db : { j : true , w: 1 } } */ ); // w > 1 --> j : true 

var TestSchema = new Schema({
	firstName : String,
	lastName : String,
	address : Object,
	cellNumer : Number,
	email : String, 
	userName : String, 
	company : String
} );
var Test = mongoose.model('test', TestSchema);

console.time('test');

for(var i = 0; i < dataCnt; i++){
	var obj =  new Test( createData() );
	obj.save(function(err){
		if(err) console.log(err);
		
		checkComplete();
		//console.log(arguments);
	});
}
console.log(" insert complete " );

function checkComplete(){
	if(++completeCnt == dataCnt){
		console.timeEnd('test');
	}
}

function createData(){
	return {
		firstName : Faker.Name.firstName(),
		lastName : Faker.Name.lastName(),
		address : {
			zipCode : Faker.Address.zipCode(),
			city : Faker.Address.city(),
			streetName : Faker.Address.streetName(),
			country : Faker.Address.ukCountry(),
		},
		cellNumber : Faker.PhoneNumber.phoneNumber(),
		email : Faker.Internet.email(),
		userName : Faker.Internet.userName(),
		company : Faker.Company.companyName()
	}
}
