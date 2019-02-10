$(document).ready(function(){
	//Print JSON content through getJSON function
	$.getJSON('amazon.json', function(data){
		for ( var k = 0; k < data.blogPosts.length; k++ ) {
			$("#container").append("<a class='post' href='" + data.blogPosts[k].link + "'>"+ "<img src='" + data.blogPosts[k].imageURL + "'/><p><b>" + data.blogPosts[k].title + "</b><br/>"+data.blogPosts[k].date + "</p></a>");			
		}});
});