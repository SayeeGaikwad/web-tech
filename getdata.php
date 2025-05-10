<?php
$mysqli=new mysqli("localhost","root","","stud");
if(mysqli_connect_errno())
{
    print("connection failed %s".mysqli_connect_errno());
    exit();
}
else
{
    $sql="select * from be ";
    $res=mysqli_query($mysqli,$sql);
?>
<table border="2">
    <tr>
        <th>rollno</th>
        <th>studName</th>
</tr>

<?php
if($re)
{
    while($newarray=mysqli_fetch_array($res))
    {
        $r=$newarray['roll'];
        $n=$newarray['name'];
    
?>
<tr><td><?php echo "$r";?></td>
    <td><?php echo "$n";?></td>

    </tr>
    <?php
    }
}
?>
</table>
<?php
}
?>