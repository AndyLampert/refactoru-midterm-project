$(document).ready(function(){
   // Parallax Code
   // cache the window object
   $window = $(window);
 
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
		if ($ ('#user-name').text()  === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#user-name-error').removeClass('hide');
		}
		// check user email
		if ($ ('#user-email').text() === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#email-empty-error').removeClass('hide');
		}
		// check password
		if ($ ('#user-password').text() === '') {
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-empty-error').removeClass('hide');
		}
		// check password confirm
		if ($ ('#user-password-check').text() === ''){
			lightbox.find('.alert-danger').removeClass('hide');
			lightbox.find('#password-confirm-error').removeClass('hide');
		}
		// matching passwords check
		if ($ ('#user-password-check').text() === '') {
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

	});


}); // close out script (document ready)