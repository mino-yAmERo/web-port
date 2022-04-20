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

