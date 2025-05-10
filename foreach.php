<!DOCTYPE html>
<html>
    <head>
        <title>PHP Foreach Example</title>
</head>
<body>
    <h2>Fruits List</h2>
    <ul>
        <?php
        $fruits=["apple","banana","mango","orange"];
        foreach($fruits as $fruit)
        {
            echo "<li>$fruit</li>";
        }
        ?>
        </ul>
    </body>
    </html>
    