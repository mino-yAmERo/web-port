<?php 
    session_start();
    require 'db_connect.php';

    // $input = $_GET['i'];
    // $json = json_decode($input);
    // echo $json->Username . " " . $json->Password ."<br>";

    $username = $_POST['user'];
    $password = $_POST['pw'];

    $sql = "SELECT * FROM UserInfo WHERE Username = ? AND Password = ? ";
    $stmt = $conn ->prepare ($sql);
    $stmt->bind_param("ss",$username,$password);
    $username = $conn -> real_escape_string($username);
    $password = $conn -> real_escape_string($password);
    if( $stmt->execute()) {
        $result = $stmt->get_result();

        if ( $result-> num_rows> 0) {;
            //found Username and Password
            $row = $result->fetch_assoc();  
            $list = array(
                'status'=>true // true = found username and password
            );

            //--- set SESSION ---//
            $_SESSION["Username"] = $row["Username"];
            $_SESSION["UserID"] = $row["UserID"];
            $_SESSION["Status"] = $row["Status"];
            $_SESSION["Firstname"] = $row["Firstname"];
            $_SESSION["Lastname"] = $row["Lastname"];
            

        } else {
            //not found
            $list = array(
            'status'=>false
            );
        }
    } else {
        die( "error : ".$stmt->error."<br>");
    }
    $myJSON = json_encode($list);
    echo $myJSON;
    $stmt->close();
    session_write_close();
    $conn -> close();

    
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


        // session_write_close();

        // if($_SESSION["Status"] == 'ADMIN') {
        //     echo "You're an admin "."<br>";
        //     header("location:index.php");
        // }else{
        //     echo "You're a user "."<br>";
        //     header("location:index.php");
        // }

    // $conn -> close();
?>