var config = require('./conf/config.db');
var express = require('express');
var app = express();
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

mongoose.connect(config.db)

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('hello world');
});

var UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  provider: { type: String, default: '' },
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' },
  authToken: { type: String, default: '' },
  facebook: {},
  twitter: {},
  github: {},
  google: {},
  linkedin: {}
})

mongoose.model('User', UserSchema);

var User = mongoose.model('User');
var aaa = new UserSchema({name:'notdol'});

aaa.save(function(err){
	console.log(arguments);
})



app.listen(3000);
