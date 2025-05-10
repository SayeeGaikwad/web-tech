<?php
    $season =array("Summer","Winter","Spring","autumn");
    echo count($season);
    echo "<br/>";
    sort($season);
    {
        foreach ($season as $s)
        {
            echo "$s<br/>";
        }
        

    }
    ?>