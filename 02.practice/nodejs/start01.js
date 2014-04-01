var express = require('express');
var app = express();

// GET /javascripts/jquery.js
// GET /style.css
// GET /favicon.ico
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3001);
