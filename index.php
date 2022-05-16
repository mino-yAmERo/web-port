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
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Audiowide&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
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
        <div class="skip">
            <span>
                <button onclick="skipIntro()">
                    <p>Skip Intro</p><img src="icon/skip_icon.png" style="width:48px;height:48px">
                </button>
            </span>
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
            <div id="left-top-nav">
                <a href="#main">Home</a>
                <a href="#about-me">About me</a>
                <a href="#codewars-container">Codewars</a>
                <a href="#education-container">Education</a>
            </div>
            <div id="drop-down">
                <div class="square" onclick="showDropdown()">
                    <svg style ="padding: 7px 7px;"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                    </svg>
                </div>        
                
            </div>
            
            <div id="right-top-nav">
                <a href="#" style="font-style:italic;"><u><?php echo $_SESSION["Username"] ?></u></a>
                <a href="logout.php" id="logout-btn">Logout</a>
            </div>
            
        </div>
        <div id="drop-down-list" class="smooth">
                <a href="#main">Home</a>
                <a href="#about-me">About me</a>
                <a href="#codewars-container">Codewars</a>
                <a href="#education-container">Education</a>
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
                <div id = "about-me">
                    <h1>About Me</h1>
                </div>
                <div class = "per-info-container">
                    <div class= "per-info">
                        <div>
                            Address
                            <p>Ban Mai Nong Sai<br>
                                Aranyaprathet, Sakaeo</p>
                        </div>
                        <div>
                            Date of Birth
                            <p>31 October 1996</p>
                        </div>
                        <div>
                            Email
                            <p>off1996@icloud.com</p>
                        </div>
                        <div>
                            Phone
                            <p>086 315 4562</p>
                        </div>
                        <div>
                            Language
                            <p>Thai <br>
                                English <small>(TOEIC score : 780)</small></p>
                        </div>
                    </div>
                    <div>
                        <ul>Programming skills
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <ul>Software and tools
                            <li>Git Version Control</li>
                            <li>Visual Studio Code</li>
                            <li>Microsoft Office</li>
                        </ul>
                    </div>
                </div>
                <div id="story-container">
                    <div id="story-card" class="fade">
                        <img src="image/mino-portrait.png">
                        <h1>Nutthabhas Thitabhas</h1>
                        <h3>Biography</h3>
                        <p id="bio-info">I discovered myself recently,
                        I am a person who likes problem solving and challenges.
                        Programming is what I'm looking for.  So, I'm ready to learn, to grow up and explore new experiences.</p>
                        <button id="bio-btn" onclick="readMore()">Read more</button>    
                    </div>

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
                <a target="_blank" href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Pixel perfect - Flaticon</a><br>
                <a target="_blank" href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Pixel perfect - Flaticon</a><br>
                <a target="_blank" href="https://www.flaticon.com/free-icons/line" title="line icons">Line icons created by Ruslan Babkin - Flaticon</a><br>
                <a target="_blank" href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Ruslan Babkin - Flaticon</a><br>
                <span><a target="_blank" href="https://icons8.com/icon/S5biqohaDgd1/menu-rounded">Menu Rounded</a><a target="_blank" href="https://icons8.com">Icon By Icons8</a><span>
                <br>    
            </div>
            <div >
                <h1>Copyright &copy; 2022. Nutthabhas Thitabhas</h1>
            </div>
        </div>
    </div>  
</body>
    <script src="js/script.js"></script>
    <?php 
        $now = time() ; // check time when main page starts.
        if ($now > $_SESSION["expire"]) {
            echo "<script> skipIntro(); </script>";   
        }
    ?>   
</html>