var MongoClient = require('mongodb').MongoClient,
  //Grid = mongo.Grid;
   Grid = require('mongodb').Grid;
var Db = require('mongodb').Db;
var GridStore = require('mongodb').GridStore;
var ObjectID = require('mongodb').ObjectID;

/*
var db = new Db('grid', new Server("www.notdol.com", 27018,
 {auto_reconnect: false, poolSize: 4}), {w:0, native_parser: false});
*/

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/grid",function(err, db) {
  if(err) return console.dir(err);

  var grid = new Grid(db, 'fs');
  var fileId = new ObjectID();
  var gridStore = new GridStore(db,fileId,"w");

	gridStore.writeFile( __dirname+'/'+'gridfs.js', function(err,fileInfo) {
		if(err){
			console.log('err:' + err);
			return
		}
		console.log('success');
	});

});
