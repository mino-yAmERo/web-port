<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="loginStyle.css">
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
    <style>
        .register-form{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
        .register-form > label {
            padding: 7px 0px;
        }
        .register-form > input {
            text-align: center;
            height: 27px;
            margin-bottom: 7px;
            font-size: 18px;
            width: clamp(200px ,10%, 600px);
            transition: all 0.4s ease-in-out;
        }
        .register-form > input:focus {
            width: clamp(250px ,15%, 600px);
        }
        .valid-box {
            background-color: limegreen;
            border: 2px solid transparent;
        }
        .invalid-box {
            background-color: red;
            border: 2px solid transparent;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Nutthabhas Thitabhas</h1>
    </div>
    <div class="container">
        <h2>Register</h2>
        <form class="register-form" action="check_register.php" method="post" onsubmit="return validateForm()" autocomplete="off">
                <label for="firstname">Firstname : </label>
                <input type="text" name="Firstname" id="firstname" required >

                <label for="lastname">Lastname : </label>
                <input type="text" name="Lastname" id="lastname" required >

                <label for="username">Username : </label>
                <input type="text" name="Username" id="Username" onkeyup= "checkUser(this.value)" required>
                <span id="userLog"></span>

                <label for="password">Password : </label>
                <input type="password" name="Password" id="Password" required autocomplete="off">

                <label for="password">Confirm Password : </label>
                <input type="password" name="txtPassword" id="ConfirmPassword" onkeyup="checkPassword()" required autocomplete="off">
                <span id="passwordLog"></span>

                <input type="submit" name="submit" value="Submit" id="submitBtn">
        </form>
</body>
    <script src="register.js"></script>
</html>