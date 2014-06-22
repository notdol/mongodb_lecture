var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient
  , GridStore = mongodb.GridStore
  , format = require('util').format;

var host = "localhost";
var port = 27017

/*
  var gs = new mongodb.GridStore(db, "test.png", "w", {
    "content_type": "image/png",
    "metadata":{
        "author": "Daniel"
    },
    "chunk_size": 1024*4
  });

  gs.open(function(err, gs){
      console.log("this file was uploaded at "+gs.uploadDate);
  });
*/

function dump(db, filename, callback) {
  GridStore.read(db, filename, function(err, data) {
    if(callback != null) callback(null,data);
  }); 
};

function isFileExist(db, filename, callback){
	GridStore.exist(db, filename, callback)
}

MongoClient.connect(format("mongodb://%s:%s/grid?w=1", host, port), function(err, db) {
	console.log(' connect ',err);
  var gridStore = new mongodb.GridStore(db, "foobar3", "w", {'content_type':'text/plain', 
    'metadata':{'a':1}, 'chunk_size': 1024*4, 'root':'fs'}).open(function(err, gridStore) {    
    gridStore.write('hello, world!', function(err, gridStore){
    	console.log(err);
    });
    /*
    gridStore.writeFile('text.txt', function(err, gridStore){
    	console.log(err);
    });
	*/
    gridStore.close(function() {
    	console.log('close');
    });
  });

    setTimeout(function(){
    	dump(db, 'foobar3', function(err,data){
    		console.log( new Buffer(data));
    	})
    },5000)

});

