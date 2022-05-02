<?php
    session_start();
    // ------ Check ADMIN and Login-Status ------
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
    <meta name="format-detection" content="telephone=no">
    <meta name="author" content="Nutthabhas Thitabhas">
    <meta name="description" content="Personal Portfolio Web">
    <title>Home | Nutthabhas</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
</head>

<body>
<!-- first welcome-animation -->
    <div id="welcome">
        <div>
            <h1 id="h">Hello <?php echo $_SESSION["Username"]?> </h1>
        </div>
        <div>
            <h1 id="n">I'm Nutthabhas</h1>
        </div>
        <div>
            <h1 id="t">Thitabhas</h1>
        </div>
        <div id="welcome-message">
            <h2>Hello! My guests</h2> 
            <p>Welcome to nutthabhas.com</p>
            <hr style="width:auto; color:#ddd;">
        </div>
        
    </div>

<!-- main webpage  -->
    <div id="main">

        <!-- header -->
        <div class="header">
            <h1> Nutthabhas Thitabhas</h1>
        </div>

        <!-- top nav -->
        <div id="top-nav">
            <a href="#main">Home</a>
            <a href="#about-me-container">About me</a>
            <a href="#education-container">Education</a>
            <a href="logout.php" id="logout-btn">Logout</a>
        </div>

        <!-- content -->
        <div class="content-wrapper">
            <div class="flex-container">
                <div class="first-column">
                    <div class="slideshow-container">
                        <div class="myslide fade">
                            <img src="image/myphoto1.jpg">
                        </div>

                        <div class="myslide fade">
                            <img src="image/myphoto2.JPG">
                        </div>
            
                        <!-- <div class="myslide fade">
                            <img src="image/myphoto3.JPEG">
                        </div> -->

                        <!-- <div class="myslide fade">
                            <img src="image/myphoto4.JPG">
                        </div> -->

                        <div class="myslide fade">
                            <img src="image/myphoto5.JPG">
                        </div>

                        <div class="myslide fade">
                            <img src="image/myphoto6.jpg">
                        </div>

                        <div class="myslide fade">
                            <img src="image/myphoto7.JPG">
                        </div>
                        
                        <div style="text-align:center;">
                            <span class="dot" onclick="currentSlide(0)"></span>
                            <span class="dot" onclick="currentSlide(1)"></span>
                            <span class="dot" onclick="currentSlide(2)"></span>
                            <span class="dot" onclick="currentSlide(3)"></span>
                            <span class="dot" onclick="currentSlide(4)"></span>
                            <!-- <span class="dot" onclick="currentSlide(5)"></span> -->
                            <!-- <span class="dot" onclick="currentSlide(6)"></span> -->
                        </div>
                    </div>
                    <div class="contact-tab">
                        <div>
                            <a href='https://www.facebook.com/off.miner' target='_blank' style="position : relative;">
                                <img id="fb-icon" class="icon"
                                    src='icon/facebook.png'>
                                <span class="tooltipText" 
                                    style= "background-image :  linear-gradient(to right, #1976d2 , #3b5998);
                                            border-color: transparent transparent #315f9f transparent;">
                                Facebook : Mi No</span>
                            </a>
                            <a href='http://www.instagram.com/__yamero__' target='_blank' style="position : relative;">
                                <img id="ig-icon" class="icon"
                                    src='icon/instagram.png'>
                                <span class="tooltipText" 
                                style= "background-image: linear-gradient(to right,rgba(255,211,85,1),rgba(255,84,62,1),rgba(200,55,171,1));
                                        border-color: transparent transparent rgba(255,84,62,1) transparent;">
                                Instagram : __yamero__</span>
                            </a>
                            <a href='https://line.me/ti/p/HQsqVZMcMv' target='_blank' style="position : relative;">
                                <img id="line-icon" class="icon"
                                    src='icon/line.png'>
                                <span class="tooltipText" 
                                style= "background-image: linear-gradient(to right,#19D219, #00B900,#00B900);
                                        border-color: transparent transparent #00B900 transparent;">
                                Line : Mino</span>
                            </a>
                            <a href='https://github.com/mino-yAmERo' target='_blank' style="position : relative;">
                                <img id="github-icon" class="icon"
                                    src='icon/github.png'>
                                <span class="tooltipText" 
                                style= "background-image: linear-gradient(to right,#010409,#0d1117);
                                        border-color: transparent transparent #0d1117 transparent;">
                                Github : mino-yAmERo</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id = "about-me-container">
                    <h1 id="about-me">About Me</h1>
                    <p id="hi-myname">
                        Hi! My name is Nutthabhas Thitabhas<br>
                    </p>
                </div>
                <div class = "biocard-container">
                    <div class="column-space-left"></div>
                    <div id="biocard-1">
                        <div>
                            <p>Address</p>
                            <p>Ban Mai Nong Sai<br>
                                Aranyaprathet, Sakaeo</p>
                        </div>
                        <div>
                            <p>Date of Birth</p>
                            <p>31 October 1996</p>
                        </div>
                        <div>
                            <p>Email</p>
                            <p>off1996@icloud.com</p>
                        </div>
                        <div>
                            <p>Phone</p>
                            <p>086 315 4562</p>
                        </div>
                        <div>
                            <p>Language</p>
                            <p>Thai <br>
                                English</p>
                        </div>
                    </div>
                    <div id="biocard-2">
                        <div>
                            <p>Programming skills</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                            <p>PHP</p>
                            <p>SQL</p>
                        </div>
                    </div>
                    <div class="column-space-right"></div>
                </div>
                <div id="codewars-container">
                    <h1>Codewars API</h1>
                    <a href="https://www.codewars.com/users/Mi%20No" target="_blank" >Codewars account : <i>Mi No</i></a>
                    <div id="codewars-card">
                    </div>
                </div>
                <div id= "education-container">
                    <div class= "ed-title">
                        <h1>My Education</h1>
                    </div>
                    <div class= "ed-list">
                        <div class="ed-item no-select">
                            <div class="ed-bg">
                            </div>
                            <div class="ed-year">
                                <hr class="year-line">
                                <p>2009 - 2014</p>
                                <hr class="year-line">
                
                            </div>
                            <div class="ed-content">
                                <p class = "ed-content-hide">
                                    High School Diploma<br><br>
                                    Major | Math-Sci <br>
                                    GPAX | 3.54 <br><br>
                                    Aranyaprathet School | Sakaeo
                                </p>
                            </div>
                            <div class="logo" style="background-image: url('image/logo_ar2.png');"></div>
                        </div>
                        <div class="ed-item no-select">
                            <div class="ed-bg" ></div>
                            <div class="ed-year">
                                <hr class="year-line">
                                <p>2015</p>
                                <hr class="year-line">
                                
                            </div>
                            <div class="ed-content">
                                <p class="ed-content-hide">
                                    Bachelor of Humanities and Social Sciences<br>
                                    (Resigned)<br><br>
                                    Major | English<br>
                                    GPA(1<sup style="font-size: 18px">st</sup> year) | 3.56 <br><br>
                                    Burapha University | Chon Buri
                                </p>
                            </div>
                            <div class="logo" style="background-image: url('image/logo_buu.png');"></div>
                        </div>
                        <div class="ed-item no-select">
                            <div class="ed-bg"></div>
                            <div class="ed-year">
                                <hr class="year-line">
                                <p>2016 - 2019</p>
                                <hr class="year-line">
                                
                            </div>
                            <div class="ed-content">
                                <p class="ed-content-hide">
                                    Bachelor of Engineering <br><br>
                                    Major | Aeronautical Engineering <br>
                                    GPAX | 3.09<br><br>
                                    Suranaree University of Technology | Nakhon Ratchasima 
                                </p> 
                            </div>
                            <div class="logo" style="background-image: url('image/logo_sut.png');"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <div class="footer">
            <div class="footer-contact">
                <h1 style="width: 100%;">Contact me</h1>
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
                <h1>Credit</h1>
                <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Pixel perfect - Flaticon</a><br>
                <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Pixel perfect - Flaticon</a><br>
                <a href="https://www.flaticon.com/free-icons/line" title="line icons">Line icons created by Ruslan Babkin - Flaticon</a><br>
                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Ruslan Babkin - Flaticon</a><br>
            </div>
            <div >
                <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
            </div>
        </div>
    </div>  
</body>
    <script src="script.js"></script>
</html>