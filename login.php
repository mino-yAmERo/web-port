<?php 
    session_start();
    if ( array_key_exists('UserID',$_SESSION) || !(empty($_SESSION['UserID']))) {

        if ($_SESSION['Status'] == 'ADMIN' ){
            header("location:admin.php");
    
        } else {
            header('Location:userPage.php');
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
    <!-- sweetalert -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> 
    <script src="sweetalert2.all.min.js"></script>
</head>
<body >
    <div class="header">
        <h1>Nutthabhas Thitabhas</h1>
    </div>
    <div id="top-nav">
        <div id="left-top-nav">
            <a href="index.php">Home</a>
        </div>
    </div>
    <div class="container">
            <h2>Login</h2>
            <div class="login-box">
                <label for="username">Username</label>
                <input type="text" id="Username" >

                <label for="password">Password</label>
                <input type="password"  id="Password">
                
                <span id="statLog"></span>

                <label>Not a member ? <a href="register.php">Sign up</a>|<a href="#" onclick="guestLogin()">Login as guest</a></label>
                <button type="button" id="Btn" onclick="checkLogin()">Log in</button>
            </div>
        
    </div>
    <div class="footer">
            <div >
                <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
            </div>
    </div>
</body>
    <script src="js/login.js"></script>
</html>