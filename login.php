<?php 
    session_start();
    if ( array_key_exists('UserID',$_SESSION) || !(empty($_SESSION['UserID']))) {
        header('Location:index.php');
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
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
</head>
<body >
    <div class="header">
        <h1>Nutthabhas Thitabhas</h1>
    </div>
    <div class="container">
            <h2>Login</h2>
            <div class="login-box">
                <label for="username">Username</label>
                <input type="text" id="Username" >

                <label for="password">Password</label>
                <input type="password"  id="Password">
                
                <span id="statLog"></span>

                <label style="margin:10px ;">Not a member ? <a href="register.php">Create account</a> or <a href="#" onclick="guestLogin()">login as guest</a></label>
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