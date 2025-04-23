<?php

$fruits = array("Apple", "Banana", "Mango", "Orange");

$fruits[] = "Pineapple";

echo "List of Fruits:\n";
foreach ($fruits as $fruit) 
{
    echo $fruit . "\n";
}

$prices = array(
    "Apple" => 100,
    "Mango" => 120,
    "Orange" => 80
);

$prices["Pineapple"] = 150;

echo "\nFruit Prices:\n";
foreach ($prices as $fruit => $price) {
    echo $fruit . ": ₹" . $price . "\n";
}
?>