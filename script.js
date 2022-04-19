// ----------------welcome------------------- //
const welcome_message = document.getElementById('welcome-message');  
const welcome = document.getElementById('welcome');
const main = document.getElementById('main');
const navbar = document.getElementById('top-nav');
let sticky = navbar.offsetTop;
console.log('position before main webpage show: '+sticky);

//main function 
//welcome fade-in
// setTimeout(fadeIn,6000); // welcome to my website //
// setTimeout(fadeOut,8000); //welcome fade-out and show main webpage


     //----FOR TEST----
setTimeout(fadeIn,100);
setTimeout(fadeOut,100);

function fadeIn (){
    let myInterval = setInterval(function() {
        let opacity = Number(window.getComputedStyle(welcome_message).getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity += 0.01;
                welcome_message.style.opacity = opacity;
                
            } else {
                clearInterval(myInterval);
        }
    },10);
}
    // welcome ani fadeout --> webpage

function fadeOut (){
    let myInterval = setInterval(function(){
        let opa = Number(window.getComputedStyle(welcome).getPropertyValue("opacity"));
            if (opa > 0) {
                opa -= 0.01;
                welcome.style.opacity = opa; 
            } else {
                //-- these codes will execute when main webpage is loaded //

                welcome.style.display = 'none';
                main.style.display = 'block';
                clearInterval(myInterval);
                sticky = navbar.offsetTop;
                console.log('position after main webpage show: '+sticky);
                showSlides();
    }},10);  
}
// welcome disappear && show webpage

// ----------------------------change icon ------------------------------------//

//----------------------------- slide show ----------------------------- //
const slide = document.getElementsByClassName('myslide');
const dot = document.getElementsByClassName('dot');
let slideIndex = 0 ;

function showSlides(n) { 
    let slideTimeout = setTimeout(showSlides,3000);
    if (n != undefined) {
        clearTimeout(slideTimeout);
        slideIndex = n;
    }
    let i;
    for (i=0 ; i< slide.length ; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slideIndex++ ;
    if (slideIndex > slide.length) {slideIndex=1} // set SlideIndex = 1
    slide[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active";
    
}
function currentSlide(n){
    showSlides(n);
}
//--- Hide top navbar on scroll ---//
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {  
    myFunction()
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        navbar.style.top ="0";
    }else{
        navbar.style.top ="-60px";
    }
    prevScrollpos = currentScrollpos;
};  

//--- add sticky class at top navbar ---//
function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//--- contact tab show div + message ---//
const ig_icon = document.getElementById('ig-icon');
const fb_icon = document.getElementById('fb-icon');
const line_icon = document.getElementById('line-icon');
const github_icon = document.getElementById('github-icon');
const contactMes = document.getElementById('contact-message');
const fbMes = document.getElementById('fb-message');
const igMes = document.getElementById('ig-message');
const lineMes = document.getElementById('line-message');
const githubMes = document.getElementById('github-message');
//---------------------------GENERAL FUNCTION---------------------------//
let mesStatus;
    contactMes.onmouseover = function () {
        mesStatus = true;
        console.log('mouseover');
        
    };
    contactMes.onmouseout = function () { 
        mesStatus = false;
        console.log('mouseout');
    };

let fadeInTime = 500; // time to change the div 
let fadeOutTime = 200; // delay 
let IntervalTime = 10; 
    //---------------------------FACEBOOK FUNCTION---------------------------//
    fb_icon.addEventListener("mouseover",function() { setTimeout(
        function () {
            contactMes.classList.add("fb");
            fbMes.style.display = 'block';

        },fadeInTime) });

    fb_icon.addEventListener("mouseout",function () { setTimeout(function () {
        let myInterval = setInterval(function (){ 
            if (mesStatus){
                contactMes.classList.add("fb");
                console.log('status : '+mesStatus);
                
            } else {
                contactMes.classList.remove("fb");
                fbMes.style.display = 'none';
                clearInterval(myInterval);
            }
        },IntervalTime);
        
    },fadeOutTime) });
    //---------------------------IG FUNCTION---------------------------//

    ig_icon.addEventListener("mouseover",function () { setTimeout(function () {
        contactMes.classList.add("ig");
        igMes.style.display = 'block';
    },fadeInTime) });

    ig_icon.addEventListener("mouseout",function () { setTimeout(function () {
        let myInterval = setInterval(function (){ 
            if (mesStatus){
                contactMes.classList.add("ig");
                console.log('status : '+mesStatus);
            } else {
                contactMes.classList.remove("ig");
                igMes.style.display = 'none';
                clearInterval(myInterval);
            }
        },IntervalTime);

    },fadeOutTime) });
    //---------------------------LINE FUNCTION---------------------------//
    line_icon.addEventListener("mouseover",function () { setTimeout(function () {
        contactMes.classList.add("line");
        lineMes.style.display = 'block';
    },fadeInTime) });

    line_icon.addEventListener("mouseout",function () { setTimeout(function () {
        let myInterval = setInterval(function (){ 
            if (mesStatus){
                contactMes.classList.add("line");
                console.log('status : '+mesStatus);
            } else {
                lineMes.style.display = 'none';
                contactMes.classList.remove("line");
                clearInterval(myInterval);
            }
        },IntervalTime);

    },fadeOutTime) });


    //---------------------------GITHUB FUNCTION---------------------------//
    github_icon.addEventListener("mouseover",function () { setTimeout(function () {
        contactMes.classList.add("github");
        githubMes.style.display = 'block';

    },fadeInTime) });

    github_icon.addEventListener("mouseout",function () { setTimeout(function () {
        let myInterval = setInterval(function (){ 
            if (mesStatus){
                contactMes.classList.add("github");
                console.log('status : '+mesStatus);
            } else {
                githubMes.style.display = 'none';
                contactMes.classList.remove("github");
                clearInterval(myInterval);
            }
        },IntervalTime);

    },fadeOutTime) });
