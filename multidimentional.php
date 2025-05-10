<!DOCTYPE html>
<html>
    <head>
        <title>Multidimentionl Array</title>
</head>
<body>
    <h2>Multidimentional Array</h2>
    <?php 
    $c=array(
       array("name"=>"kirti","age"=>"21"),
       array("name"=>"Aishwarya","age"=>"21")
    );
    echo $c[0] ["name"]."<br/>";
    echo $c[0] ["age"]."<br/>";
    echo $c[1] ["name"]."<br/>";
    echo $c[1] ["age"]. "<br/>";
    ?>
    </body>
    </html>