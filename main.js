//@prepros-prepend nav.js
//@prepros-prepend profile.js
//@prepros-prepend constructor.js
//@prepros-prepend backstretch.js

$(document).ready(function(){

	// constructor stuff
	// (location,likes,agePrefMin,agePrefMax,readyFor)
	var testUserAndy = new User('Andy Lampert','Boulder, CO','Men',25,35,'anything!');
	var testUserRaine = new User('Raine Lourie','Boulder, CO','Women',20,40,'fun!');
	// (when assigning) . always makes something up
	// only works because window is a global object (in the browse)
	// window.t = testUser; // this is ONLY a test
	// t is an instance

	// if likes women (testUser.likes === 'women') add fa-female
	
	// change the ids to data attr data-user-[property name]
	// 	property name has to EXACTLY match what is in the user object (User)
	// replace code in renderUser with a 'for in' loop that loops over each key/value pair in the User object
	// use the key to gen a dynamic jquery selector based on the property name
	// 	ex: $('[data-user-location]')   <--- selector that needs to be dynamically generated
	// 	replace the 'location' part with whichever part the loop is on.
	//  use that selector to select the element and change the text of that element to the value of the property from the User object
	
	var renderUser = function(user){
		// select user location and change text
		$('#user-profile-name').text(user.userName);
		$('#user-location').text(user.location);
		$('#user-likes').text(user.likes);
		$('#user-age-min').text(user.agePrefMin);
		$('#user-age-max').text(user.agePrefMax);
		$('#user-ready-for').text(user.readyFor);

		// if likes both add both icons
		$('#likes-gender').addClass(user.likes === 'Women' ? 'fa-female':'fa-male')
	}
	// calls the function, would typically call on a server call or w/e
	renderUser(testUserRaine);

	// setting images to look like backgrounds using backstretch
	$("#yoga-headstand-legs").backstretch("img/yoga-headstand-legs.jpg");
	$("#snowboard-girl").backstretch("img/snowboard-girl-1.jpg");
	$("#party-girls-1").backstretch("img/party-girls-1.jpg");
	$("#yoga-faraway").backstretch("img/yoga-faraway.jpg");
	// on any window resize event, change the image height relative to the new window height
	$(window).on('resize',function(){
		$('.background-wrapper').height(window.innerHeight+'px');
	});
	$('.background-wrapper').height(window.innerHeight+'px');

	// registration button click event handler
	$(document).on('click','.finish-registration',function(){
		$('.alert-danger, .alert-danger > p').addClass('hide');
		// add .hide to ALL error messages on click
		// reason is it's easier to keep track of what should show up when something happens

		// variable that finds the parent .lightbox
		var lightbox = $(this).closest('.lightbox');
		var userNameLength = $('#user-name').val().length

		// check user name input
		if ($('#user-name').val() === '' || $('#user-name').val() === ' ') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#user-name-error').removeClass('hide');
		}
		// check user name is between 6-18 characters
		else if(userNameLength < 6 || userNameLength > 18){
			lightbox.find('#user-name-length-error').removeClass('hide');
		}
		// check user email input
		if ($ ('#user-email').val() === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#email-empty-error').removeClass('hide');
		}
		// check password input
		if ($ ('#user-password').val() === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-empty-error').removeClass('hide');
		}
		// check password confirm input
		if ($ ('#user-password-check').val() === ''){
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-confirm-error').removeClass('hide');
		}
		// matching passwords check
		if ( $('#user-password').val() !== $('#user-password-check').val()) {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-match-error').removeClass('hide');
		}
	});

	// close registration event handler
	$(document).on('click','.close-lightbox-link',function(){
		// hide the lightbox
		$(this).closest('.lightbox-container').css('display','none');
	});

	// sign up button click event handler
	$(document).on('click','.signup-btn',function(){
		$('.lightbox-container').css('display','inline-block');
	});

	// click through registration click event handler
	$(document).on('click','.finish-registration',function(){
		// get the data from user name
		// get the data from user email
		// get the data from password?
		// 
		// go to homepage.html
	});

}); // close out document ready
