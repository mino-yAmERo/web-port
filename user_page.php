<?php 
    session_start();
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
    <h1>WELCOME <?php echo $_SESSION['Username']."<br>"; ?></h1>
    <h2>This is USER PAGE </h2> 
    <h2>And you're <?php echo $_SESSION["Firstname"]." ".$_SESSION["Lastname"] ?> </h2> 
    <h2>Your ID : <?php echo $_SESSION["UserID"]; ?> </h2>
</body>
</html>