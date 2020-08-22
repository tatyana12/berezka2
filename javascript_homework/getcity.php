<?php

$a[] = "Umuarama";
$a[] = "Kakamigahara";
$a[] = "Kampala";
$a[] = "Genoa";
$a[] = "Gangapur";
$a[] = "Fes";
$a[] = "Fatehgarh";
$a[] = "Ekibastuz";
$a[] = "Jackson";
$a[] = "Jacumba";
$a[] = "Istanbul";
$a[] = "Qatar";
$a[] = "Los Angeles";
$a[] = "Houston";
$a[] = "Phoenix";
$a[] = "Philadelphia";
$a[] = "Ramalla";
$a[] = "San Diego";
$a[] = "Dallas";
$a[] = "Sant Peteburg";
$a[] = "Rum";
$a[] = "Copenhagen";
$a[] = "Bangkok";
$a[] = "Dubai";
$a[] = "Singapore";
$a[] = "New York";
$a[] = "Tokyo";
$a[] = "Seoul";
$a[] = "Antalya";
$a[] = "Phuket";
$a[] = "Mecca";
$a[] = "Hong Kong";
$a[] = "Milan";
$a[] = "Barcelona";
$a[] = "Pattaya";
$a[] = "Osaka";
$a[] = "Bali";
$a[] = "Paris";
$a[] = "Mexiko";
$a[] = "Paris";
$a[] = "Mexiko";
$a[] = "Chicago";
$a[] = "Paris";
$a[] = "Mexiko";
$a[] = "Amman";
$a[] = "London";
$a[] = "Moscow";
$a[] = "Washington";
$a[] = "San Francisco";


// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from ""
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
	$hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values
echo $hint === "" ? "no suggestion" : $hint;
?>

