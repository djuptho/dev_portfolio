<!DOCTYPE HTML>
<html>
<head>
	<title>COPY IP</title>
	<meta charset="UTF-8">	
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, content="minimal-ui">
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="clipboard.js-master/dist/clipboard.min.js"></script>
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<script src="custom.js" type="text/javascript"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<body>

<?php
	$myIP = $_SERVER['REMOTE_ADDR'];
	echo '<span id="header">Your IP address is:</div>';
	echo '<button class="btn" data-clipboard-text="'.$myIP.'">'.$myIP.'</button>';
	echo '<span id="disclaimer">(click the address above to copy)</div>';
	echo '<textarea id="paste"></textarea>';
?>

<script>
	var clipboard = new Clipboard('.btn');
</script>


</body>
</html>