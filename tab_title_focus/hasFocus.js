//Original document title
var documentTitle = document.title;

//Set interval in seconds
var intervalSeconds = 3;

//Define new titles (when tab not active)
var newTitle1 = "Hey, come back to this page!";
var newTitle2 = "You still have a chance!";

//Define modulo variable
var i = 0;

//Set interval to check for change
setInterval(function(){
	//Increment modulo value
	i++;
	//Document in focus
	if ( document.hasFocus() === true ) {
		document.title = documentTitle;
	}
	//Document not in focus
	else {
		//Change title every other time
		if ( i % 2 == 0 ) {
			document.title = newTitle1;
		}
		else {
			document.title = newTitle2;	
		}		
	}
}, intervalSeconds * 1000);