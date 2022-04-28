<?php 
    session_start();
    // echo    "Username : ".$_SESSION["Username"]."<br>".
    //         "Firstname : ".$_SESSION["Firstname"]."<br>".
    //         "Lastname : ".$_SESSION["Lastname"]."<br>".
    //         "UserID : ".$_SESSION["UserID"]."<br>".
    //         "Status : ".$_SESSION["Status"]."<br>";
    // print_r($_SESSION);


    // if (array_key_exists('UserID',$_SESSION) && !empty($_SESSION['UserID'])) {
    //     echo 'key UserID in session are set '; 
    // }

    //Check login status and status = admin ?
    if(!(array_key_exists('UserID',$_SESSION)) || (empty($_SESSION['UserID'])) || ($_SESSION["Status"] != "ADMIN"))
    {
        echo "You're not an admin or you're not logged in";
        header("location:login.php");
        exit();
    }
    
    // if (is_null($_SESSION["UserID"]));
    // echo "UserID : ".$_SESSION["UserID"]."<br>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USER | PAGE</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            background-color: #151515;
        }
        h1 , h2{
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>HELLO!! ADMIN <?php echo $_SESSION["Username"]?> </h1>
    <h2>This is ADMIN PAGE </h2> 
    <h2>And you're <?php echo $_SESSION["Firstname"]." ".$_SESSION["Lastname"] ?> </h2> 
    <h2>Your ID : <?php echo $_SESSION["UserID"]; ?> </h2>
</body>
</html>