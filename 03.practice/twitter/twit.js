var twit = require('twit');
var config = require('./config');

var T = new twit(config);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/twitter');

var TwitSchema = new Schema({}, { strict: false });
var twitter = mongoose.model('twit',TwitSchema);

var stream = T.stream('statuses/filter', { track : 'LG' } );
stream.on('tweet', function( tweet ) {
  var t = new twitter(tweet);
  t.save(function(err){
	  console.log('save');
  });
}) ;
//config.js 파일
