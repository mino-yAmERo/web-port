<?php 
    session_start();
    require 'db_connect.php';
    $username = $conn -> real_escape_string($_POST['txtUsername']);
    $password = $conn -> real_escape_string($_POST['txtPassword']);
    $sql = "SELECT * FROM UserInfo WHERE Username = '$username' AND Password = '$password' ";
    $result = $conn -> query($sql);
    $row = $result -> fetch_array(MYSQLI_ASSOC);

    if(!$row) 
    {   
        echo "Username and Password Incorrect";
        header("location:login.php");
    }
    else
    {
        
        $_SESSION["Username"] = $row["Username"];
        $_SESSION["UserID"] = $row["UserID"];
        $_SESSION["Status"] = $row["Status"];
        $_SESSION["Firstname"] = $row["Firstname"];
        $_SESSION["Lastname"] = $row["Lastname"];

        // //FETCH CHECKING
        // echo    "<hr>FETCHING DATA FROM DB<hr>";
        // echo    "Username : ".$row["Username"]."<br>".
        //         "Firstname : ".$row["Firstname"]."<br>".
        //         "Lastname : ".$row["Lastname"]."<br>".
        //         "UserID : ".$row["UserID"]."<br>".
        //         "Status : ".$row["Status"]."<hr>";

        // //SESSION CHECKING
        // echo    "<br><hr>ASSIGNING VALUE INTO SESSION<hr>";
        // echo    "Username : ".$_SESSION["Username"]."<br>".
        //         "Firstname : ".$_SESSION["Firstname"]."<br>".
        //         "Lastname : ".$_SESSION["Lastname"]."<br>".
        //         "UserID : ".$_SESSION["UserID"]."<br>".
        //         "Status : ".$_SESSION["Status"]."<br>";

        session_write_close();

        if($_SESSION["Status"] == 'ADMIN') {
            echo "You're an admin "."<br>";
            header("location:index.php");
        }else{
            echo "You're a user "."<br>";
            header("location:index.php");
        }
    }
    $conn -> close();
?>