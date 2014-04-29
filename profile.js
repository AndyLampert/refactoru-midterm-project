$(document).on('ready',function(){
	// event handler for editing profile
	$('.edit-profile-btn').on('click',function(){
		// 1) change the text to "save profile"
		if( $(this).text() === 'Edit Profile'){
			// change to edit
			$(this).text('Save Changes');
		} else {
			$(this).text('Edit Profile');
		}
		// when content = "Save Changes" & click, change to edit profile
		
		// $(this).text('Edit Profile');
		
		$('.ready-for-selector').addClass('hide'); 
	})

});