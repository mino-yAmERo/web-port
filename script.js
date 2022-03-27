
window.onload = function () {
    //welcome
    const hint_message = document.getElementById('welcome-message');  
    const welcome = document.getElementById('welcome');
    const main = document.getElementById('main');


    //welcome fade-in
    setTimeout(fadeIn,6000);
    setTimeout(fadeOut,7500);


    // tag p welcome function 
    function fadeIn (){
        setInterval(welcome,10);

    }
    // welcome ani fadeout --> webpage
    function fadeOut (){
        setInterval(disr,10);
    }
    


    function disr(){
        let opa = Number(window.getComputedStyle(welcome).getPropertyValue("opacity"));
        if (opa >= 0) {
            opa -= 0.01;
            if (opa==0) {
                welcome.style.display = 'none';
                return;
            }
            welcome.style.opacity = opa;
            
        }
        showWebPage();       
    }
    function showWebPage() {
        main.style.display = 'block';
        setInterval(webFadeIn,10);
        
    }

    //main webpage fadein
    function webFadeIn() {
        let opa = Number(window.getComputedStyle(main).getPropertyValue("opacity"));
        if (opa <=1){
        opa += 0.1;
        main.style.opacity = opa;
        }
        if (opa >= 1)  return;

}
    // welcome message
    function welcome() {
        let opacity = Number(window.getComputedStyle(hint_message).getPropertyValue("opacity"));
        if (opacity <= 1) {
            opacity += 0.01;
            hint_message.style.opacity = opacity;
        }
    } 

    // change icon
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
