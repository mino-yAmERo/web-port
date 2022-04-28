<?php

require 'db_connect.php';
$sql = "SELECT * FROM userinfo WHERE Username = 'dota11294' ";
$result = $conn -> query($sql);
$row = $result -> fetch_array(MYSQLI_ASSOC);

echo "Username : ".$row["Username"]."<br>"."Firstname : ".$row["Firstname"]."<br>"."Lastname : ".$row["Lastname"]."<br>"."UserID : ".$row["UserID"]."<br>";

?>