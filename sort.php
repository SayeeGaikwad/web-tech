<!DOCTYPE html>
<html>
<head>
    <title>PHP Sort() Function example</title>
</head>
<body>

<h2>Sorted Array</h2>
<?php
$numbers=[5,2,9,1,3];

echo "<strong>Original Array:<strong><br>";
foreach($numbers as $num){
    echo $num ." ";
}

sort($numbers);
echo "<br><br><strong>Sorted Array(Ascending):</strong><br>";
foreach($numbers as $num)
{
    echo $num ." ";
}
?>
</body>
</html>
