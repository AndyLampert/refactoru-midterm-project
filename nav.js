// gets the page name of the current html page
// it splits the pathname string into an array and 
// gets the last item
var fileLocation = window.location.pathname.split('/');
var pageName = fileLocation[(fileLocation.length - 1)];

// added custom data-page attribute to anchor tags in html files

$(document).on('ready',function(){
	// if(pageName === 'profile.html'){
		// add active class to edit/view profile
	// }
	// if the page is profile.html, highlight an item

	$('li[data-page="' + pageName + '"]').addClass('active');

	// add class active to
	// li with the data-page attr = pageName

	// event handler for the nav links
	// $('.nav > li').on('click',function(){
	// 	// remove all classes
	// 	$('.nav > li').removeClass('active');
	// 	// if data-page attr is profile.html
	// 	if($('li[data-page="' + pageName + '"]') === 'profile.html'){
	// 		$('.nav > li').addClass('active');
	// 	}
		
	// 	$(this).addClass('active');
	
	// });
});