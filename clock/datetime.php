 <?php
	// SET TIMEZONE
 	date_default_timezone_set('Europe/Helsinki');
	//SET TIME FORMAT
	$time = date('H:i:s');
	//SET DATE FORMAT
	$date = date('d.n.Y');
	//PRINT TIME AND DATE
	print ($time."<br/>");
	print ("<div style='font-size:.3em; text-align:center;'>".$date."</div>");
?>