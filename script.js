
window.onload = function () {
    // ----------------welcome------------------- //
    const welcome_message = document.getElementById('welcome-message');  
    const welcome = document.getElementById('welcome');
    const main = document.getElementById('main');


    //main function 
    //welcome fade-in
    // setTimeout(fadeIn,6000); // welcome to my website //

    //main function 
    //welcome fade-out and show main webpage
    // setTimeout(fadeOut,8000);

    //----FOR TEST----
    setTimeout(fadeIn,100);
    setTimeout(fadeOut,100);

    // tag p welcome function 
    function fadeIn (){
        setInterval(welcomeText,10); 
    }
    // welcome message
    function welcomeText() {
        let opacity = Number(window.getComputedStyle(welcome_message).getPropertyValue("opacity"));
        if (opacity <= 1) {
            opacity += 0.01;
            welcome_message.style.opacity = opacity;
        }
        if (opacity >= 1) return;
    } 

    // welcome ani fadeout --> webpage
    function fadeOut (){
        setInterval(disr,10);
    }
    

    // welcome disappear && show webpage
    function disr(){
        let opa = Number(window.getComputedStyle(welcome).getPropertyValue("opacity"));
        if (opa > 0) {
            opa -= 0.01;
            welcome.style.opacity = opa; 
            if (opa <= 0) {
                welcome.style.display = 'none';
                main.style.display = 'block';
                return;
            }
        }       
}

    // ----------------------------change icon ------------------------------------//
    const ig_icon = document.getElementById('ig-icon');
    const fb_icon = document.getElementById('fb-icon');
    const line_icon = document.getElementById('line-icon');

    ig_icon.onmouseover = function () {
        setTimeout(function () {
            ig_icon.src = 'icon/ig_normal.png';
        }, 100)
    }
    ig_icon.onmouseout = function () {
        setTimeout(function () {
            ig_icon.src = 'icon/ig_grey.png';   
        }, 100)
    }
    fb_icon.onmouseover = function () {
        setTimeout(function () {
            fb_icon.src = 'icon/fb_normal.png';
        }, 100)
    }
    fb_icon.onmouseout = function () {
        setTimeout(function () {
            fb_icon.src = 'icon/fb_grey.png';   
        }, 100)
    }
    line_icon.onmouseover = function () {
        setTimeout(function () {
            line_icon.src = 'icon/line_normal.png';
        }, 100)
    }
    line_icon.onmouseout = function () {
        setTimeout(function () {
            line_icon.src = 'icon/line_grey.png';   
        }, 100)

    }
}
