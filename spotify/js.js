//Disable jQuery Mobile Loading DIV 

$ (function () {
	$(document).ready( function() {
    $(".ui-loader").hide();
});
});

//SAVE
$ (function () {
$('button#save').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    $("button#save").css('border','1px solid #646061');
	$("button#save").text('save');
	$("button#save").animate({width:"100px", height:"30px"},500);
  } else {
    $("button#save").css('border','1px solid #1db954');
	$("button#save").text('saved');
	$("button#save").animate({width:"40%", height:"6%"},500);
  }
  $(this).data("clicks", !clicks);
});
});

//GREEN TEXT ON PLAY
$ (function () {
$("img#play, #shufflePlay").click(function(){
    $("span.greenText").css('color', '#1db954');
});
});

$ (function () {
$("img#pause, #shufflePause").click(function(){
    $("span.greenText").css('color', '#FFF');
});
});

//GREEN TEXT ON TAP
$ (function () {
$('#bottomBox').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
	$("#bottomBox span#bottomTitle").on("tap",function(){
		$('span#bottomTitle').css('color', '#FFF');
		$("span.greenText").css('color', '#FFF');
	});
  } else {
	$("#bottomBox span#bottomTitle").on("tap",function(){
		$(this).css('color', '#1db954');
		$("span.greenText").css('color', '#FFF');
	});
  }
  $(this).data("clicks", !clicks);
});
});

//PAUSE AND PLAY ICONS
$ (function () {
$("img#play, #shufflePlay").click(function(){
		$("img#pause").show();
		$("img#play").hide()
		$("#shufflePause").show();;
		$("#shufflePlay").hide();;
});
});

$ (function () {
$("img#pause, #shufflePause").click(function(){
		$("img#play").show();
		$("img#pause").hide();
		$("#shufflePause").hide();
		$("#shufflePlay").show();;
});
});

//SWIPE BETWEEN IMAGES/COVERS
$ (function () {
	$("a img#cover").on("swipeleft",function(){
		$("a img#cover")
		.fadeToggle(200, function() {$("a img#cover").attr('src','oskar.png'); }).fadeToggle(200);
		$("div#topBox a").attr('href','oskar.png');
		$("button#page2").css('background','#FFF');
		$("button#page1").css('background','#5A5B62');
	});
});

$ (function () {
	$('a img#cover').on("swiperight",function(){
		$("a img#cover")
		.fadeToggle(200, function() {$("a img#cover").attr('src','cover.png'); }).fadeToggle(200);
		$("div#topBox a").attr('href','cover.png');
		$("button#page2").css('background','#5A5B62');
		$("button#page1").css('background','#FFF');
	});
});

//CHANGE IMAGES/COVERS ON BUTTON CLICKS
$ (function () {
$("button#page2").click(function(){
    $("a img#cover").attr('src','oskar.png');
	$("div#topBox a").attr('href','oskar.png');
	$("button#page2").css('background','#FFF');
	$("button#page1").css('background','#5A5B62');
});
});

$ (function () {
$("button#page1").click(function(){
    $("a img#cover").attr('src','cover.png');
	$("div#topBox a").attr('href','cover.png');
	$("button#page2").css('background','#5A5B62');
	$("button#page1").css('background','#FFF');
});
});

//AUDIO
$(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'song.mp3');
        audioElement.setAttribute('preload', 'preload');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('img#play').click(function() {
            audioElement.play();
        });
		
		 $('#shufflePlay').click(function() {
            audioElement.play();
        });

        $('img#pause').click(function() {
            audioElement.pause();
        });
		
		$('#shufflePause').click(function() {
            audioElement.pause();
        });
});

//SHOW/HIDE OVERLAY 

$ (function () {
	$("#bottomBox #hitbox").click(function(){
		$("#overlay").slideDown(750);
});	
});

$ (function () {
	$("img#dots").click(function(){
		$("#overlay").slideDown(750);
});	
});

$ (function () {
	$("#overlay #cancel").click(function(){
		$("#overlay").slideUp(550);
});	
});

//OVERLAY HEIGHT
$ (function () {
	$('#overlay').height($(document).height());
});
