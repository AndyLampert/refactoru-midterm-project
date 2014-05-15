var mongoose = require('mongoose');

var User = mongoose.model("user", {
	name: String,
	location: String,
	likes: String,
	age: {
		min: Number,
		max: Number
	},
	readyFor: String
});

// when the application starts look in the database for users
// if they don't exist, create some fake users
User.find({}, function(err, docs){
	if(docs.length === 0){
		var fakeUser = new User({
			name: "Andy",
			location: "Boulder"
		});
		fakeUser.save();
	}
})

