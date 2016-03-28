<!DOCTYPE html>
<html>
<head>	
	<title>Countdown timer</title>
	<meta charset="UTF-8"/>
  	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"/>
	<link href='styles.css' rel='stylesheet' type='text/css'/>
</head>
<body>
<div id="siteContainer">
	<div id="timerContainer">

	<?php
		// SET TIMEZONE
		date_default_timezone_set('Europe/Helsinki');
		
		// SET COUNTDOWN DATE TO FUTURE FOR TESTING PURPOSES
		$date = strtotime("+4 days 5 hours 22 minutes");
		
		// SET COUNDOWN EXACT DATE
		//$date = strtotime("April 2, 2018 12:00");
		
		//COUNTDOWN DATE MINUS CURRENT DATE
		$remaining = $date - time();

		//DAYS
		$days_remaining = floor($remaining / 86400);
		//HOURS
		$hours_remaining = floor(($remaining % 86400) / 3600);
		//MINUTES
		$minutes_remaining = floor(($remaining % 3600) / 60);

		//PRINT STUFF
		print('<div class="timeStamp"> <span class="timeStampNumber">'.$days_remaining.'</span>'.'<br/><span class="timeStampHeadline">Days</span></div>');
		print('<div class="timeStamp"> <span class="timeStampNumber">'.$hours_remaining.'</span>'.'<br/><span class="timeStampHeadline">Hours</span></div>');
		print('<div class="timeStamp"> <span class="timeStampNumber">'.$minutes_remaining.'</span>'.'<br/><span class="timeStampHeadline">Minutes</span></div>');
	?>

	</div>
</div>
</body>
</html>