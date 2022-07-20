<?php

    session_start();

    // unset the session variable 

    // EXCEPT!!  first time login && expire
    unset($_SESSION["Username"]);
    unset($_SESSION["UserID"]);
    unset($_SESSION["Status"]);
    unset($_SESSION["Firstname"]);
    unset($_SESSION["Lastname"]);
    unset($_SESSION['hasRegistered']);
    
    header("location:index.php");
    // remove all session variables
        // session_unset();

    // destroy the session
    
        // session_destroy();

    
    
?>