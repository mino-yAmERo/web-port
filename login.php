<?php 
    session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="loginStyle.css">
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
    <style>
        #login-form{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
        #login-form > label {
            padding: 7px 0px;
        }
        #login-form > input {
            text-align: center;
            height: 27px;
            margin-bottom: 7px;
            font-size: 18px;
        }
        a:hover {
            opacity: 0.6;
            cursor: pointer;
        }
    </style>
</head>
<body >
    <div class="header">
        <h1>Nutthabhas Thitabhas</h1>
    </div>
    <div class="container">
        <h2>Login</h2>
        <form class="show" id="login-form" method="post" action="check_login.php">
            <label for="username">Username : </label>
            <input type="text" name="txtUsername" id="txtUsername" >

            <label for="password">Password : </label>
            <input type="password" name="txtPassword" id="txtPassword">


            <input type="submit" name="submit" value="Login" id="submitBtn">
        </form>
        
        <?php 
            // echo '<script type="text/javascript">';
            // echo 'function showDIV() {
            //     document.getElementsByClassName("log").innerHTML = "YOU RE NOT LOGGED IN YET. ";
            //     document.getElementById("login-form").classList.replace("hide","show");
            //     document.getElementById("logout").classList.replace("show","hide");
                
            // }';
            // echo 'function hideDIV() {
            //     document.getElementsByClassName("log").innerHTML = "Hi,&nbsp; ';echo $_SESSION["Firstname"]; echo' "; 
            //     document.getElementById("login-form").classList.replace("show","hide");
            //     document.getElementById("logout").classList.replace("hide","show");
            // }';
            
            // echo '</script>';
            // if(!(array_key_exists('UserID',$_SESSION)) || (empty($_SESSION['UserID'])))
            // {
            //     echo '<body onload = "showDIV()">';
            // }else{
            //     echo '<body onload = "hideDIV()">';
            // }
        ?> 
        
    </div>
</body>
</html>