var config = require('./config');  
var database = 'Northwind';

  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;    

  MongoClient.connect(config.db+database, function(err, db) {
    if(err) throw err;

    db.collection('Order').update({CustomerID: 'ISLAT'}, {$set: {Freight: 4.2}}, {w:1}, function(err) {
      if (err) console.warn(err.message);
      else console.log('successfully updated');
    });

  });
