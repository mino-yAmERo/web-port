<?php
    session_start();

    // remove all session variables
    session_unset();

    // destroy the session
    session_destroy();
    header("location:login.php");
    echo '<script type="text/JavaScript"> location.reload(); </script>';
?>