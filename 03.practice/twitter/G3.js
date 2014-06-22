var twit = require('twit');
var config = require('./config');

var T = new twit(config);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27100/twitter');

var TwitSchema = new Schema({}, { strict: false });
var twitter = mongoose.model('G3',TwitSchema);


/*
T.verifyCredentials(function(err, data){
	console.log('credential');
	console.log(err);
	console.log(data);
});
var stream = T.stream('statuses/filter', { track : 'samsung' }, function(response){
	console.log("==== response");
	response.on('data', function(chunk){
		console.log("tweet" + chunk);
	});

	response.on('end', function(){
		console.log('disconnected');
	});

} );

*/
/*
var stream = T.stream('statuses/sample')

stream.on('tweet', function (tweet) {
  console.log(tweet)
})
*/

var stream = T.stream('statuses/filter', { track : 'G3' });

stream.on('tweet', function( tweet ) {
 // console.log(tweet);
  
  var t = new twitter(tweet);
  t.save(function(err){
	  console.log('save');
  });

}) ;

/*

T.stream('statuses/sample', function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data));
    });
});
*/
//config.js 파일
