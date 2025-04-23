<?php
$students = array(
    "student1"=>array(
      "name"=>"Aniket",
      "age"=>20,
      "course"=>"CSE" 
    ),
    "student2"=>array(
      "name"=>"Shailesh",
      "age"=>21,
      "course"=>"IT"
    ),
);

echo "Student 1 Name: " . $students["student1"]["name"] . "<br>";
echo "Student 1 Course: " . $students["student1"]["course"] . "<br>";

