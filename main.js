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
   //      $scroll.css({ backgroundPosition: coords });    

   //    }); // end window scroll
   // });  // end parallax section

   // registration button click event handler
   $(document).on('click','.registration-btn',function(){
    	// Validation
    	if ($ ('#user-name').text()  === '') {
    		
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