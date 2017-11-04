//GET TAB DATA
chrome.tabs.getSelected(null, function(tab) {
	//GET URL
	myFunction(tab.url);
});

function myFunction(tablink) {
//ENABLE CLICKS ON LINK IN EXTENSION POPUP
window.addEventListener('click',function(e){
	if(e.target.href!==undefined){
		//CONSTRUCT URL
		chrome.tabs.create({url:e.target.href+"*/"+tablink})
	}
});
}

//GET TAB URL
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    document.getElementById("activated").innerHTML = tabURL;
});

