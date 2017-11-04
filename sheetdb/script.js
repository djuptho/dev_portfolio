/* Script.js */

//Define data source
var jsonURL = "https://spreadsheets.google.com/feeds/list/1njavon7Fo63-oMH0hYr-DXdp7L-R6Sx2rgngSuiFpI0/od6/public/values?alt=json";

//Get JSON function
$.getJSON(jsonURL, function(data) {
	//Get each feed entry (cell) of data set
	$(data.feed.entry).each(function(){
		//Define data variables
		var titleField = this.gsx$title.$t;
		var paragraphField = this.gsx$content.$t;
		var imgURL = this.gsx$imageurl.$t;
		var articleURL = this.gsx$articleurl.$t;
		var timeStamp = this.gsx$time.$t;
		var tags = this.gsx$tags.$t;
		//Print content from JSON
			$('#data').prepend('<div class="newsItem"><a href="'+articleURL+'"><img src="'+imgURL+'"><b>'+titleField+'</b></a><p>'+paragraphField+'</p><div class="fader"></div>'+'<div class="meta">Tags: '+tags+'<span>'+timeStamp+'</span></div><div>');
		});
});
