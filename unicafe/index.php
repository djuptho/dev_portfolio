<?php
  //Unicafe API
  $url = "https://hyy-lounastyokalu-production.herokuapp.com/publicapi/restaurant/39";
  //Get contents
  $json = file_get_contents($url);
  //Decode to neat JSON
  $json_data = json_decode($json, true);

  //Empty array for all lunch data
  $dataArray = [];
  //Empty array for today's lunch
  $lunchToday = [];

  //Get restaurant name
  $restaurantName = $json_data['information']['restaurant'];

  //Loop through menu list
  for ($x = 0; $x <=13; $x++) {
    //If not weekend
    $weekends = $x !== 5 && $x !== 6 && $x !== 12 && $x !== 13;
    if ( $weekends ) {
      //Push dates to array
      array_push($dataArray, $json_data['data'][$x]['date']);
    }
    for ($z = 0; $z <=5; $z++) {
      //Push lunch options for a specific date
      array_push($dataArray, $json_data['data'][$x]['data'][$z]['name']);
    }
  }

  //Pretty print all API data
  //print_r($dataArray);

  //Today's name of day, e.g. "Monday"
  $weekDay = date('l');
  //Truncate weekday to two letters => e.g. "Mo"
  $weekDay = substr($weekDay, 0, 2);
  //Translate English weekdays to Finnish
  if ($weekDay == "Mo") { $weekDay = "Ma"; }
  if ($weekDay == "Tu") { $weekDay = "Ti"; }
  if ($weekDay == "We") { $weekDay = "Ke"; }
  if ($weekDay == "Th") { $weekDay = "To"; }
  if ($weekDay == "Fr") { $weekDay = "Pe"; }
  //Concatenate weekday letters with day and month in format l d.m => e.g. "Ma 22.07"
  $formattedDate = $weekDay.date(' d.m');

  //Set date for testing purposes
  //$formattedDate = "Ke 24.07";

  //Get index of today's date in full set of API data
  $dateIndex = array_search($formattedDate,$dataArray);

  for ( $y = 1; $y <=6; $y++ ) {
    //Push lunch options 1-5 to array
    array_push($lunchToday,$dataArray[$dateIndex+$y]);
  }

  //Pretty print today's lunch data
  //print_r($lunchToday);

  //Mail header configurations
  //Replace $to variable with desired Microsoft Teams Channel email address
  $to = "example@domain.com";
  $subject = $restaurantName." – ".$formattedDate;
//Replace with desired "From" email address
  $headers = "From: example@domain.com" . "\r\n";
  $headers .= "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  //Prettify array data
  $message = implode("<br/>",$lunchToday);
  //Send mail
  mail($to,$subject,$message,$headers);
?>