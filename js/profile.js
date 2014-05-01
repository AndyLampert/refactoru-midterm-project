$(document).on('ready',function(){
	// event handler for editing profile
	$('.edit-profile-btn').on('click',function(){

		// SHOW the editable profile container div on edit button click
		$('#editable-profile').removeClass('hide');
		// console.log( $('#editable-profile') );
		// HIDE the display profile container div on edit button click
		$('#static-profile').addClass('hide');
		// console.log( $('#static-profile') );

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



