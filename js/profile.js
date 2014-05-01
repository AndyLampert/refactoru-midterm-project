$(document).on('ready',function(){

	// dynamically creates age ranges 18-99 on page load in the user edit form
	for (var i = 18; i < 50; i=i+2) {
		$('.user-edit-age-min').append('<option>' + i + '</option>')
	};

	for (var i = 18; i < 50; i++) {
		$('.user-edit-age-max').append('<option>' + i + '</option>')
	};

	// event handler for editing profile
	$('.edit-profile-btn').on('click',function(){

		// SHOW the editable profile container div on edit button click
		$('#editable-profile').removeClass('hide');
		// HIDE the display profile container div on edit button click
		$('#static-profile').addClass('hide');

		// if/else  that changes the button text that is less coupled to page content. If I want to change the button text, just change .text() string value.
		if( $(this).data('state') === 'save'){
			$(this).data('state','edit');
			$(this).text('Edit Profile');
		} else {
			$(this).data('state','save');
			$(this).text('Save Changes');
		}

		// when the click the button (when the text is 'save changes')
		// add the .hide class back to the user-editable-field
		// var saveChanges = $('edit-profile-btn').text()
		if($('.edit-profile-btn').text() !== 'Save Changes'){
			$('#editable-profile').addClass('hide');
			$('#static-profile').removeClass('hide');
		}

		// change the gender icon to a question mark when profile is editable
		$('#likes-gender').removeClass('fa-female fa-male fa-group');
		$('.icon-gender').addClass('fa-question-circle');
		// takes the select likes value and updates the user profile
		var newLikes = $('.user-edit-likes').val();
		$('.set-user-likes').text(newLikes);
		// if user-edit-likes is "Women", add woman icon, etc for men, everyone
		if(newLikes === 'Women'){
			$('#likes-gender').addClass('fa-female');
		} else if(newLikes === 'Men') {
			$('#likes-gender').addClass('fa-male');
		} else {
			$('#likes-gender').addClass('fa-group');
		}

		// newLikes === 'Women' ? newLikes.addClass('fa-female'):newLikes.addClass('fa-male')
			// $('#likes-gender').addClass('fa-female');

		// takes input location value and updates the user profile
		var newLocation = $('.user-edit-location').val();
		// if the '.user-edit-location' is empty, don't update the value
		if( $('.user-edit-location').val() !== '' ){
			$('.set-user-location').text(newLocation);
		}



		// takes the user-edit-age-min and updates the user profile
		var newMinAge = $('.user-edit-age-min').val();
		$('.set-user-age-min').text(newMinAge);

		// takes the user-edit-age-max and updates the user profile
		var newMaxAge = $('.user-edit-age-max').val();
		$('.set-user-age-max').text(newMaxAge);
		
		// takes the user-edit-ready and updates the user profile
		var newReadyFor = $('.user-edit-ready').val(); 
		$('.set-user-ready-for').text(newReadyFor);
	});

});

// default
// 
// all has
// .user-profile-details
//   
// individual classes
// .user-profile-location
// .user-profile-likes
// .user-profile-age
// .user-profile-ready
// 
// 
// editable
// all has
// .user-editable-field
// 
// individual classes
// .user-edit-location
// .user-edit-likes
// .user-edit-age-min
// .user-edit-age-max
// .user-edit-ready



