<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="css/register.css">
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
</head>
<body>
    <div class="header">
        <h1>Nutthabhas Thitabhas</h1>
    </div>
    <div class="container">
        <h2>Register</h2>
        <form name ="regis-form" id="register-form" action="check_register.php" method="post" autocomplete="off">
                <label for="firstname">Firstname</label>
                <input type="text" name="Firstname" id="firstname" required >

                <label for="lastname">Lastname</label>
                <input type="text" name="Lastname" id="lastname" required >

                <label for="username">Username</label>
                <input type="text" name="Username" id="Username" onkeyup= "checkUser(this.value)" autocomplete="off" required>
                <span id="userLog"></span>

                <label for="password">Password</label>
                <input type="password" name="Password" id="Password" onkeyup="checkPassword()" autocomplete="off" required>

                <label for="password">Confirm Password</label>
                <input type="password" name="txtPassword" id="ConfirmPassword" onkeyup="checkPassword()"  autocomplete="off" required>
                <span id="passwordLog"></span>

                <label style="margin:10px 0;">Already signed up ? <a href="login.php">Sign in here</a></label>

                <button type="button" id="btn" onclick="validateForm()">Submit</button>

        </form>
        <div class="footer">
            <div >
                <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
            </div>
        </div>
</body>
    <script src="js/register.js"></script>
</html>