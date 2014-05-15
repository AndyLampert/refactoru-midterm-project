// gets the page name of the current html page
// it splits the pathname string into an array and 
// gets the last item
var fileLocation = window.location.pathname.split('/');
var pageName = fileLocation[(fileLocation.length - 1)];

// added custom data-page attribute to anchor tags in html files

$(document).on('ready',function(){
	// adds the class .active to the pageName of the link clicked on
	// needs the data-page attribute to work
	$('li[data-page="' + pageName + '"]').addClass('active');
});