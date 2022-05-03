<?php 
    $DB_SERVER = "184.168.102.44";
    $DB_USERNAME = "nutthabhas";
    $DB_PASSWORD = "off11294";
    $DB_NAME = "my_db";

    $conn = new mysqli ($DB_SERVER, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);
    
    //CHECK CONNECTION
    if ($conn->connect_errno) {

        die("Connection error: " . $conn->connect_error);
    }
    
?>
