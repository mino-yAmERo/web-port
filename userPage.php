<?php 
session_start();
if (  (!(array_key_exists('UserID',$_SESSION))) || (empty($_SESSION['UserID'])) )
{
    header("location:login.php");
    exit();
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <meta name="format-detection" content="telephone=no"> -->
    <meta name="author" content="Nutthabhas Thitabhas">
    <meta name="description" content="Personal Portfolio Web">
    <title>User Page | Nutthabhas</title>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/footer.css">

    <!-- animate css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <!-- bootstrap 4.6.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <style>
        :root {
            --animate-duration: 3s;
        }


    </style>
</head>
<body class="bg-dark text-white-50">
    <!-- header -->
    <div class="header">
            <h1> Nutthabhas Thitabhas</h1>
    </div>
    <div id="top-nav">
        <div id="left-top-nav">
            <a href="index.php">Home</a>
        </div>
        <div id="right-top-nav"> 
            <a href="logout.php" >Log Out</a>
        </div>
    </div>

    <!-- content -->

    <div class="container" style="min-height: 800px">
        <div class="row m-0 justify-content-center align-items-center ">
            <div class="col-12 mt-5">
                <h1 class="text-left">User Infomation</h1>
            </div>
            <div class="col-12 mt-5">
                <h1><br></h1>
            </div>
            <div class="col-12 mt-5">
                <h1 class="text-center animate__animated animate__rubberBand animate__repeat-3 animate__delay-2s">Working in progress...</h1>
                
            </div>
        </div>
    </div>





    <!-- footer -->
    <div class="footer">
            <div class="footer-contact">
                <h1 class="text-center">Contact me</h1>
                <div class="contact-me">
                    <a href='https://www.facebook.com/off.miner' target='_blank'>
                        <img class="footer-icon"
                            src='icon/facebook.png'>
                    </a>
                    <a href='http://www.instagram.com/__yamero__' target='_blank'>
                        <img class="footer-icon"
                            src='icon/instagram.png'>
                        
                    </a>
                    <a href='https://line.me/ti/p/HQsqVZMcMv' target='_blank'>
                        <img class="footer-icon"
                            src='icon/line.png'>
                    </a>  
                </div>
                <div style="margin:12px 10px">
                    <p style="font-family:'Akshar', sans-serif;color: rgba(231, 228, 228, 0.931)">
                        <wbr>Email : off1996@icloud.com &nbsp;&nbsp; |<wbr> &nbsp;&nbsp; Phone : 086 315 4562
                    </p>
                </div>
            </div>
            <div class="credit">
                <h1 class="text-center">Credit</h1>
                <a target="_blank" href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Pixel perfect - Flaticon</a><br>
                <a target="_blank" href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Pixel perfect - Flaticon</a><br>
                <a target="_blank" href="https://www.flaticon.com/free-icons/line" title="line icons">Line icons created by Ruslan Babkin - Flaticon</a><br>
                <a target="_blank" href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Ruslan Babkin - Flaticon</a><br>
                </div>
            <div >
                <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
            </div>
        </div>
</body>
<!-- jquery 3.6.0-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- bootstrap 4.6.2 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>


<script src="js/user.js"></script>

<script type="text/javascript">
    $(document).ready(function() {
        let user = "<?php echo $_SESSION['UserID'];  ?> "
        let userID = parseInt(user);
        // console.log(user);
        // console.log(userID)
        // console.log("type : " +typeof userID)
        $.ajax({
            type : "POST",
            url : "getUserInfoByID.php",
            data : {
                userID : userID,
            },
            success: function (res) {
                console.log(res);
                console.log(JSON.parse(res))
            }
        })
    })
</script>
</html>