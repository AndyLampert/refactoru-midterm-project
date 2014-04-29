$(document).ready(function(){
	// Parallax Code
	// cache the window object
	$window = $(window);
 
	// Code from Raine
	$(window).on('scroll', function() {
		var y = $(window).scrollTop();
		$([parallaxImage]).css({
			top: -y
		})
	});

	// code from the site
	// $('section[data-type="background"]').each(function(){
	//   // declare the variable to affect the defined data-type
	//   var $scroll = $(this);
					 
	//    $(window).scroll(function() {
	//      // HTML5 proves useful for helping with creating JS functions!
	//      // also, negative value because we're scrolling upwards                          
		
	//      // not going to use the 'speed'??
	//      var yPos = -($window.scrollTop() / $scroll.data('speed')); 
		 
	//      // background position
	//      var coords = '50% '+ yPos + 'px';
 
	//      // move the background
	//     	 $scroll.css({ backgroundPosition: coords });    

	//    }); // end window scroll
	// });  // end parallax section

	// registration button click event handler
	$(document).on('click','.finish-registration',function(){
		// variable that finds the parent .lightbox
		var lightbox = $(this).closest('.lightbox');
		// Validation
		// Check username
		if ($ ('#user-name').val()  === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#user-name-error').removeClass('hide');
		} 
		else if(true) {}
			// username is more than 4 characters
		
		// check user email
		if ($ ('#user-email').val() === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#email-empty-error').removeClass('hide');
		}
		// check password
		if ($ ('#user-password').val() === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-empty-error').removeClass('hide');
		} 
		// else if() {}
			// password is at least 6 characters
		
		// check password confirm
		if ($ ('#user-password-check').val() === ''){
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-confirm-error').removeClass('hide');
		}
		// matching passwords check
		if ($ ('#user-password-check').val() === '') {
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