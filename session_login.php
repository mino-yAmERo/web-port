<?php
    $sql = "SELECT * FROM userinfo WHERE UserID = ' ".$_SESSION["UserID"]."' ";
    $result = $conn -> query($sql);
    $row = $result -> fetch_array(MYSQLI_ASSOC);

    $row['UserID'] = $_SESSION['UserID'];
    $row['Username'] = $_SESSION['Username'] ;
    $row['Firstname'] =  $_SESSION['Firstname'];
    $row['Lastname'] = $_SESSION['Lastname'];

?>