<?php
    session_start();
    if (isset($_SESSION['check_user']) && ( $_SESSION['check_user'] == $_POST['Username'] ) ) {
        //re-post
        session_unset();
        session_destroy();
        header("location:login.php");
    } else {
        include 'db_connect.php';
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

            if( $stmt->execute()) {
                
            } else {
                die( "error : ".$stmt->error."<br>");
            }
            $_SESSION['check_user'] = $username;
            session_write_close();
            $stmt->close();
            $conn->close();
    }

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
                opacity: 1;
                transition: opacity 0.3s;
                transition: text-decoration 0.5s;

            }
            a:hover {
                opacity: 0.7;
                text-decoration: underline;
            }
            
            .timer-container {
                margin: 30px 0px;
                color: #fff;
                font-size: 22px;
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
            <div class="timer-container">Going back to log-in in
                <span id="timer">10 seconds or </span> 
                <span>
                    <a href="login.php">Click here to login</a></div>
                </span> 
            </div>
            <script>
                let i = 10;
                let timer = document.getElementById('timer');
                let myInterval = setInterval(function () {
                    i--
                    timer.innerHTML = i + " seconds or ";
                    console.log('time '+i);

                    if(i == 0) {
                        clearInterval(myInterval);
                        window.location.replace('login.php');
                    }
                },1000);
            </script>
            <div class="footer">
                <div>
                    <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
                </div>
            </div>
        </div>
    </body>
    </html>