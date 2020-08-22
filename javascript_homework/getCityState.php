<?php

$citySate = array("94112" => "San Francisco, California",
                  "94111" => "Portlan, Oregon",
);

header("Content-Type: text/plain");
$zip = $_GET["zip"];
if (array_key_exists($zip, $cityState))
print $cityState[$zip];
else
print "zip code error";

?>
