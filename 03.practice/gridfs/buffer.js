
var MongoClient = require('mongodb').MongoClient,
//  Grid = mongo.Grid;
Grid = require('mongodb').Grid;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) return console.dir(err);

  var grid = new Grid(db, 'fs');
  var buffer = new Buffer("Hello world");
  grid.put(buffer, {metadata:{category:'text'}, content_type: 'text'}, function(err, fileInfo) {
    grid.get(fileInfo._id, function(err, data) {
      console.log("Retrieved data: " + data.toString());
      grid.delete(fileInfo._id, function(err, result) {
      });
    });
  });
});

