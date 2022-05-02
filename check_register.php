<?php
    require 'db_connect.php';
    if($conn -> connect_error){
        die("Connection failed : ".$conn->connect_error );
    }
    $sql = "INSERT INTO UserInfo (Username, Password, Firstname, Lastname) VALUES(?, ?, ?, ?)";
    $stmt = $conn ->prepare ($sql);
    $stmt->bind_param("ssss",$username,$password,$fname,$lname);
    $username = $_POST['Username'];
    $password = $_POST['Password'];
    $fname = $_POST['Firstname'];
    $lname = $_POST['Lastname'];

    //error display
        // echo "sql state : ".$stmt->sqlstate."<br>";
        // echo "error : ".$stmt->error."<br>";
        // echo "error code: ".$stmt->errno."<br>";
        // echo "error-list : ";print_r($stmt->error_list);

    if( $stmt->execute() == TRUE) {
        // echo "New record created successfully";
    } else {
        die( "error : ".$stmt->error."<br>");
    }
    $stmt->close();
    $conn->close();
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="loginStyle.css">
        <title>Register</title>
        <style>
            .container h2{
                margin: 10px 10px;
            }
            h3 {
                font-size: 30px;
                text-align: center;
                color: #fff;
            }
            a {
                text-decoration: none;
                color: #fff;
                margin: 15px 15px;
                font-size: 22px;
            }
            a:hover {
                opacity: 0.6;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Nutthabhas Thitabhas</h1>
        </div>
        <div class="container">
            <h2> Your Registration is successful</h2>
            <h3> Username : <?php echo $username;?> </h3>
            <h3> Firstname : <?php echo $fname;?> </h3>
            <h3> Lastname : <?php echo $lname;?> </h3>
            <a href="login.php">Go back to login</a>
        </div>
    </body>
    </html>