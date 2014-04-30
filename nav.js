// gets the page name of the current html page
// it splits the pathname string into an array and 
// gets the last item
var fileLocation = window.location.pathname.split('/');
var pageName = fileLocation[(fileLocation.length - 1)];

// added custom data-page attribute to anchor tags in html files

$(document).on('ready',function(){
	if(pageName === 'profile.html'){
		// add active class to edit/view profile
	}
	// if the page is profile.html, highlight an item
	if($('li[data-page="' + pageName + '"]') === 'profile.html'){
		$('.nav > li').addClass('active');
	}

// if ''
// 
	// event handler for the nav links
	$('.nav > li').on('click',function(){
		$('.nav > li').removeClass('active');
		$(this).addClass('active');
	});
		
	// when you click on any link, remove the .active class from all links
	// add the active class to the one you clicked on
});