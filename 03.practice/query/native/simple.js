var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server;




app.get('/', function(req,res) {
   db.collection('users').findOne({},function(err,doc){
       if(err) throw err;
       res.send(doc);
   });
});



MongoClient.open(function(err, mongoclient) {
    if(err) throw err;
    console.log('mongo client connected');
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
 
});

