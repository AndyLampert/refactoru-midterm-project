var express = require('express');

var app = express();
// this will run the code and put it in the database
var user = require('./models/user.js')
var mongoose = require('mongoose');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/dating-site');


app.get('/', function(req, res) {
	res.render('index');
});

app.get('/profile', function(req, res){
	res.render('profile');
});

var server = app.listen(6694, function() {
	console.log('Express server listening on port ' + server.address().port);
});
