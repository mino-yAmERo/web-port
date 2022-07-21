<?php 
    session_start();
        if (array_key_exists('hasRegistered',$_SESSION)) {
            if ($_SESSION['hasRegistered']  === true ) {
                unset($_SESSION['hasRegistered']);
                header('Location: login.php');
                exit(0);
            } 
        }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="css/register.css">
    <link rel="stylesheet" href="css/header.css">
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
    <!-- sweetalert -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> 
    <script src="sweetalert2.all.min.js"></script>
</head>
<body>
    <div class="header">
        <h1>Nutthabhas Thitabhas</h1>
    </div>
    <div id="top-nav">
        <div id="left-top-nav">
            <a href="index.php">Home</a>
        </div>
    </div>
    <div class="container">
        <h2>Register</h2>
        <div id = "register-form" >
            <label for="firstname">Firstname</label>
            <input type="text" id="Firstname" 
            placeholder="Enter your firstname.." 
            title="Firstname must contains only English letters" >
            <span class = "log">Firstname must contains only English letters</span>

            <label for="lastname">Lastname</label>
            <input type="text" id="Lastname" 
            placeholder="Enter your lastname.." 
            title="Lastname must contains only English letters" >
            <span class = "log">Lastname must contains only English letters</span>

            <label for="username">Username</label>
            <input type="text" id="Username"
            placeholder="Enter your username.."
            title="Username must be between 8 to 15 characters and contains letters [A-Z , a-z], underscore [ _ ] and numbers." >
            <span class = "log">Username must be between 8 to 15 characters and contains English letters, underscore and numbers. </span>

            <label for="password">Password</label>
            <input type="password" id="Password" 
            placeholder="Enter your password.."
            title="Password must be at least 6 characters and contains letters [A-Z , a-z], underscore [ _ ] and numbers." >
            <span class = "log">Password must be at least 6 characters and contains English letters, underscore and numbers.</span>

            <label for="password">Confirm Password</label>
            <input type="password" id="ConfirmPassword" 
            placeholder="Enter your confirm password.." >
            <span class = "log"></span>

            <label style="margin:10px 0;text-align:center">Already signed up ? <a href="login.php">Sign in here</a></label>

            <button type="button" id="btn" onclick="validateForm()">Submit</button>
            
        </div>
    </div>
    <div class="footer">
            <div >
                <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
            </div>
    </div>
</body>
    <script src="js/register.js"></script>
</html>
