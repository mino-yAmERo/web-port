const navbar = document.getElementById('top-nav');
let sticky = navbar.offsetTop;




//--- Hide top navbar on scroll ---//
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {  
    let currentScrollpos = window.pageYOffset;
    stickyFunction();
    if (prevScrollpos > currentScrollpos) {
        // scroll-up
        // console.log('now : '+currentScrollpos);
        navbar.style.top ="0";
        let x = (110 - currentScrollpos) + 57; /* header height 110px , top nav height 57px */
        
    }
    prevScrollpos = currentScrollpos;
};  

//--- add sticky class at top navbar ---//
function stickyFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        
    } else {
        navbar.classList.remove("sticky");
        
    }
}