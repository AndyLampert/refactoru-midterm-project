$(document).on('ready',function(){
	$('.user-editable-field').addClass('hide');
	// event handler for editing profile
	$('.edit-profile-btn').on('click',function(){
		// 1) change the text to "save profile"
		if( $(this).text() === 'Edit Profile'){
			// change to edit
			$(this).text('Save Changes');
		} else {
			$(this).text('Edit Profile');
		}

		// SHOW the editable fields when you click the edit button
		$('.user-editable-field').removeClass('hide'); 
		
		// when the click the button (when the text is 'save changes')
		// add the .hide class back to the user-editable-field
		// var saveChanges = $('edit-profile-btn').text()
		if($('.edit-profile-btn').text() !== 'Save Changes'){
			$('.user-editable-field').addClass('hide');
		}

	});

});