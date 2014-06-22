var MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://192.168.219.5:27017/twitter', function(err, db) {
	if(err) console.log(err);
  var example = db.collection('twits');
 
  var map = function() {
    emit(this.user.time_zone, 1);
  };
 
  var reduce = function(timezone, values) {
	var sum = {};
 
    values.forEach(function(value) {
		sum[value] = 1 ;
    });
 
    return sum;
  };
 
  example.mapReduce(
      map,
      reduce,
      { out: 'mrtemp'},
      function(err, coll) {
        coll.find().toArray(function(err, arr) {
          console.log(arr);
        });
      }
  );
});