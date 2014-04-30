// Create user object (super class constructor)
var User = function(location,likes,agePref,readyFor){
	this.location = location;
	this.likes = likes;
	this.agePref = agePref;
	this.readyFor = readyFor;
}

// Creating profile items
var userLocation = new User('');
var userLikes = new User('');
var userAgePref = new User('');
var userReadyFor =new User('');