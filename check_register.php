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

    if( $stmt->execute()) {
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
        <link rel="stylesheet" href="css/register.css">
        <title>Register</title>
        <style>
            h3 {
                margin: 20px 10px;
                font-size: 30px;
                text-align: center;
                color: #fff;
            }
            p {
                margin: 5px 0;
                font-size: 25px;
                text-align: center;
                color: #fff;
                letter-spacing: 1px;
            }
            a {
                text-decoration: none;
                color: #fff;
                font-size: 20px;
            }
    
            .login-box{
                margin: 30px 15px;
                background-color: #151515;
                color: #fff;
                padding: 15px 7px; 
                transition: all 0.4s;
                border: 1px solid transparent;
                border-radius: 10px;
            }
            .login-box:hover {
                opacity: 0.7;
            }

        </style>

    </head>
    <body>
        <div class="header">
            <h1>Nutthabhas Thitabhas</h1>
        </div>
        <div class="container">
            <h3> Your Registration is successful</h3>
            <p> Username : <small><?php echo $username;?></small></p>
            <p> Firstname : <small><?php echo $fname;?></small> </p>
            <p> Lastname : <small><?php echo $lname;?></small> </p>
            <div class= "login-box"><a href="login.php">Go back to login</a></div>
            <div class="footer">
                <div>
                    <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
                </div>
            </div>
        </div>
    </body>
    </html>