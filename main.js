$(document).ready(function(){

	// Code from Raine
	// $(window).on('scroll', function() {
	// 	var y = $(window).scrollTop();
	// 	$([parallaxImage]).css({
	// 		top: -y
	// 	})
	// });

	// code from Mike
	// $(window).on('resize',function(){
	// 	$('div').height(window.innerHeight+'px');
	// 	});

	// 	$('div').height(window.innerHeight+'px');

	// registration button click event handler
	$(document).on('click','.finish-registration',function(){
		$('.alert-danger, .alert-danger > p').addClass('hide');
		// add .hide to ALL error messages on click
		// reason is it's easier to keep track of what should show up when something happens

		// variable that finds the parent .lightbox
		var lightbox = $(this).closest('.lightbox');
		var userNameLength = $('#user-name').val().length
		// Validation
		// Check username
		// 
		// if user name = space or nothing
		// add error (remove hide class)
		// 
		// if username != 6-18 characters
		// add error (add hide class)

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
	$(document).on('click','.accept-registration',function(){
		// go to homepage.html
	});


}); // close out script (document ready)