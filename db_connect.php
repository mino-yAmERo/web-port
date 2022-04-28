<?php 
    $DB_SERVER = '127.0.0.1';
    $DB_USERNAME = 'root';
    $DB_PASSWORD = '';
    $DB_NAME = 'user_db';

    $conn = new mysqli ($DB_SERVER, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);

    //CHECK CONNECTION
    if ($conn->connect_errno) {

        die("Connection error: " . $conn->connect_error);

    }
    
?>