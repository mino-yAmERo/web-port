// ----------------welcome------------------- //
const welcome_message = document.getElementById('welcome-message');  
const welcome = document.getElementById('welcome');
const main = document.getElementById('main');
const navbar = document.getElementById('top-nav');
let sticky = navbar.offsetTop;
// console.log('position before main webpage show: '+sticky);

//main function 
//welcome fade-in
let setFadeIn = setTimeout(fadeIn,6000); // welcome to my website //
let setFadeOut = setTimeout(fadeOut,8000); //welcome fade-out and show main webpage

//----FOR MAINTENANCE----//
// setTimeout(fadeIn,100);
// setTimeout(fadeOut,100);


function stopTimeOut() {
    clearTimeout(setFadeIn);
    clearTimeout(setFadeOut);
}
function skipIntro() {
    stopTimeOut();
    document.querySelector('#h ,#n ,#t').style.animation = 'none';
    welcome.style.display = 'none';
    main.style.display = 'block';
    sticky = navbar.offsetTop;
    showSlides();
}
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
                // console.log('position after main webpage show: '+sticky);
                showSlides();
    }},10);  
}
// welcome disappear && show webpage
// show right navbar-item by default | after logging out
const regisBtn = document.getElementById('register-nav-btn');
const loginBtn = document.getElementById('login-nav-btn');
const userBtn = document.getElementById('user-nav-btn');
const logoutBtn = document.getElementById('logout-nav-btn');

function showRightNavItem () {
    regisBtn.style.display = 'block';
    loginBtn.style.display = 'block';
    userBtn.style.display = 'none';
    logoutBtn.style.display = 'none';
}
// hide right navbar-item
function hideRightNavItem () {
    
    regisBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    userBtn.style.display = 'block';
    logoutBtn.style.display = 'block';
}



//---- slide show --- //
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

//--- drop down ---//
const dropdown = document.getElementById('drop-down-list');
const hamburger = document.querySelector('.hamburger');
const resetDropDown = () => {
    dropdown.style.display = "none";
    hamburger.classList.remove("clicked");
}
window.onresize = function(){ 
    const cssObj = window.getComputedStyle(dropdown, null);
    let display = cssObj.getPropertyValue("display");
    w = window.innerWidth;
    if (w > 768) {
        resetDropDown();
        if (display == "none") return;
    }
}


//--- Hide top navbar on scroll ---//
function showDropdown() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('clicked');
    
    const cssObj = window.getComputedStyle(dropdown, null);
    let display = cssObj.getPropertyValue("display");

    if(display == "none"){
        dropdown.style.display = "flex";
    }else{
        dropdown.style.display = "none"
    }
    
    let Scrollpos = window.pageYOffset;
    if (Scrollpos > 110) dropdown.style.top = '57px'; //correct
    if (Scrollpos <= 109) {
        let x = (110 - Scrollpos) + 57;
        // console.log("x : "+x);
        dropdown.style.top = x+"px";
    }

}
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
        if (currentScrollpos > 110) dropdown.style.top = '57px';

        if (currentScrollpos <= 109) {
            if (dropdown.classList.value == 'smooth') dropdown.classList.toggle('smooth');
            dropdown.style.top = x+"px";
        }

    }else{
        // scroll-down
        resetDropDown();
        // add class smooth 
        if (dropdown.classList.value != 'smooth') dropdown.classList.toggle('smooth');
        navbar.style.top ="-60px";
        let x = (110 - currentScrollpos) + 57; /* header height 110px , top nav height 57px */
        if (currentScrollpos >= 110) dropdown.style.top ="-200px";
        if (currentScrollpos < 109) {
            if (dropdown.classList.value == 'smooth') dropdown.classList.toggle('smooth');
            dropdown.style.top =x+"px";
        }
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
//--- BIO function ---//
function readMore() {
        const btn = document.getElementById('bio-btn');
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200){
                document.getElementById('bio-info').innerHTML += this.responseText;
            }
            btn.style.display = "none";
        }
        xhr.open('GET','bio.txt',true);
        xhr.send();

}

//--- Activity && Modal ---//

let modal = document.getElementById('myModal');
let modalIndex = 0;
let modalType ;

function openModal(type) {
    modal.style.display = "block";
    modalIndex = 0;
    if (type === 'sport') {
        sportSlides(modalIndex);
        modalType = 'sport';
    }
    if (type === 'music') {
        musicSlides(modalIndex);
        modalType = 'music';
    }
    if (type === 'student') {
        studentSlides(modalIndex);
        modalType = 'student';
    }
}
function closeModal() {
    modal.style.display = "none";
    modalType = "";
    allSlidesNone();
}

function changeModalIndex(n) {
    // prev n => -1
    // next n => +1
    if (modalType == "sport"){
        sportSlides(modalIndex += n);
    }
    if (modalType == "music"){
        musicSlides(modalIndex += n);
    }
    if (modalType == "student"){
        studentSlides(modalIndex += n);
    }
}

function sportSlides(n) {
    let sport = document.getElementsByClassName('sportSlide');
    let i;
    
    // n = modal index
    // n start 0 1 2 3 4
    
    // sport.length = 5 | 5 slides

    // max of n = 4  return -> modal index 0 (first slide)
    if (n > sport.length-1) { modalIndex = 0; }

    // min of n = 0 return -> modal index 4 (last slide)
    if (n < 0) { modalIndex = sport.length-1; }

    // all slide => "display" : "none"
    for (i = 0; i < sport.length; i++) {
        
        sport[i].style.display = "none" ;
    }

    // modal index => "display" : "block"
    sport[modalIndex].style.display = "block";

}
function musicSlides(n) {
    let music = document.getElementsByClassName('musicSlide');
    let i;
    
    // n = modal index
    // n start 0 1 2 3 4
    
    // music.length = 5 | 5 slides

    // max of n = 4  return -> modal index 0 (first slide)
    if (n > music.length-1) { modalIndex = 0; }

    // min of n = 0 return -> modal index 4 (last slide)
    if (n < 0) { modalIndex = music.length-1; }

    // all slide => "display" : "none"
    for (i = 0; i < music.length; i++) {
        
        music[i].style.display = "none" ;
    }

    // modal index => "display" : "block"
    music[modalIndex].style.display = "block";

}

function studentSlides(n) {
    let student = document.getElementsByClassName('studentSlide');
    let i;
    
    // n = modal index
    // n start 0 1 2 3 4
    
    // music.length = 5 | 5 slides

    // max of n = 4  return -> modal index 0 (first slide)
    if (n > student.length-1) { modalIndex = 0; }

    // min of n = 0 return -> modal index 4 (last slide)
    if (n < 0) { modalIndex = student.length-1; }

    // all slide => "display" : "none"
    for (i = 0; i < student.length; i++) {
        
        student[i].style.display = "none" ;
    }

    // modal index => "display" : "block"
    student[modalIndex].style.display = "block";

}


function allSlidesNone() {
    let sport = document.getElementsByClassName('sportSlide');
    for (i = 0; i < sport.length; i++) {
        sport[i].style.display = "none" ;
    }

    let music = document.getElementsByClassName('musicSlide');
    for (i = 0; i < music.length; i++) {
        music[i].style.display = "none" ;
    }

    let student = document.getElementsByClassName('studentSlide');
    for (i = 0; i < student.length; i++) {
        student[i].style.display = "none" ;
    }
}
//--- Codewars API ---//
window.onload= function () {
    //-------- USER API --------//
    const xhttp = new XMLHttpRequest();
    const url = 'https://www.codewars.com/api/v1/users/Mi No';
    xhttp.open('GET',url);
    xhttp.setRequestHeader('Content-Type','application/json');
    let codewars = document.getElementById('codewars-card');

    //-------- GET JSON --------//
    xhttp.onreadystatechange = function () {
        if(this.readyState ==4 & this.status ==200) {
            let myJSON = JSON.parse(this.responseText);
            // console.table(myJSON);
            codewars.innerHTML = '<div>Username : ' + myJSON.username + '</div>';
            codewars.innerHTML += '<div>Leaderboard : ' +myJSON.leaderboardPosition + '</div>';
            codewars.innerHTML += '<div>Total Challenge Complete : ' + myJSON.codeChallenges.totalCompleted + '</div>';
            codewars.innerHTML += '<div id="lang" >Languages : '+ Object.keys(myJSON.ranks.languages).length+
            '<button id="showLangBtn" onclick="showLang()"><span id="arrow" class="arrow-down"></button> </div>';
            
            const Obj = myJSON.ranks.languages;
            codewars.innerHTML += '<div id="langDetail" class="hide"></div>' ;
            for (let x in Obj){
                let text = "";
                if(x.length <= 3) {
                    text += "<div><b>&nbsp;&nbsp;&nbsp;"+x.toUpperCase()+ "</b> : ";
                } else {
                    text += "<div><b>&nbsp;&nbsp;&nbsp;"+x.charAt(0).toUpperCase()+x.slice(1)+ "</b> : ";
                }
                text += "rank : "+Obj[x]['name']+" | score : "+Obj[x]['score'];
                document.getElementById('langDetail').innerHTML += text +"<br></div>";
            }
            document.getElementById('langDetail').innerHTML += '<div id="langShowMore" onclick = "getDataFunction()">Show more...</div>';
            document.getElementById('langShowMore').style = "text-align: center"; 
        }
    };
    xhttp.send();
}
let arrow = false;
function showLang() {
    // console.log("arrowStat b4 : "+arrow);
    arrow = !arrow;
    // console.log("arrowStat after : "+arrow);
    if(arrow){
        //show
        document.getElementById('arrow').classList.replace('arrow-down', 'arrow-up');
        document.getElementById('langDetail').classList.replace('hide','show');
    }else{
        //hide
        document.getElementById('arrow').classList.replace('arrow-up', 'arrow-down'); //replace arrow-down -> arrow up
        document.getElementById('langDetail').classList.replace('show','hide'); // replace show -> hide
    }
};
//--------- Show more ----------//
let dataStatus = false;
function getDataFunction(){
        let data = document.getElementById('dataList');
        // check if data exists ?
        if( typeof(data) != 'undefined' && data != null){
            if (dataStatus === true) {
                //--- hide ---//
                dataStatus = false;
                // console.log('dataStatus = '+dataStatus);
                document.getElementById('dataList').classList.replace('show','hide');
                document.getElementById('langShowMore').innerText = "Show More...";
                return;
            } else {
                //--- show ---//
                dataStatus = true;
                // console.log('dataStatus = '+dataStatus);
                document.getElementById('dataList').classList.replace('hide','show');
                document.getElementById('langShowMore').innerText = "Show Less...";
                return;
            }
        } else {
            const xhr = new XMLHttpRequest();
            const url = 'https://www.codewars.com/api/v1/users/Mi%20No/code-challenges/completed?';
            xhr.open('GET',url);
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onreadystatechange = function() {
                if(this.readyState== 4 && this.status == 200) {
                    let myJSON = JSON.parse(this.responseText);
                    // console.table(myJSON);
                    document.getElementById('langDetail').innerHTML += "<ul id='dataList' class='show'>" ;
                    
                    for (let i = 0; i < myJSON.data.length; i++) {
                        let text = "";
                        text += "<li>"+[(i+1)]+". "+myJSON.data[i].name+"</li>";
                        document.getElementById('dataList').innerHTML += text ;
                    }
                    
                    document.getElementById('dataList').innerHTML += "<li id='lastDatalist'><a href='https://github.com/mino-yAmERo/codewars-practice' target='_blank'>view all my Codewars challanges' source code on Github</a></li> " ;
                    document.getElementById('langDetail').innerHTML += "</ul>" ;

                    //--- DEFINE BORDER-BOTTOM STYLE ON LAST ROWS ELEMENT ---//
                    const liNodeList = document.getElementById('dataList').querySelectorAll('li');
                    let li_count = liNodeList.length-1; // -1 except lastDatalist
                    // console.log("count : "+li_count); 
                    if (li_count % 3 == 1) { // ตารางมี3 คอลัมน์ -> คอลัมน์สุดท้าย เศษ 1 
                        document.getElementById('lastDatalist').style.flexBasis = "66.66%";
                        for (let i=0 ; i < liNodeList.length ; i++) {
                            // console.log('number : '+i); 
                            liNodeList[i].style.borderBottom = "none" ;
        
                            if (i >= liNodeList.length-2){
                                liNodeList[i].style.borderBottom = "1px dashed white";
                            }
                        }


                    } else if (li_count % 3 == 2){ // ตารางมี3 คอลัมน์ -> คอลัมน์สุดท้าย เศษ 2 
                        document.getElementById('lastDatalist').style.flexBasis = "33.33%";
                        for (let i=0 ; i < liNodeList.length ; i++) {
                            // console.log('number : '+i); 
                            liNodeList[i].style.borderBottom = "none" ;
                            if (i >= liNodeList.length-3){
                                liNodeList[i].style.borderBottom = "1px dashed white";
                            }
                        }

                    } else { // ตารางมี3 คอลัมน์ -> คอลัมน์สุดท้าย เศษ 0
                        document.getElementById('lastDatalist').style.flexBasis = "100.00%";
                        for (let i=0 ; i < liNodeList.length ; i++) {
                            // console.log('number : '+i); 
                            liNodeList[i].style.borderBottom = "none" ;
                            if (i >= liNodeList.length-1){
                                liNodeList[i].style.borderBottom = "1px dashed white";
                            }
                        }
                    }     
                    // console.log('dataStatus when data showed = '+dataStatus);
                    document.getElementById('langShowMore').innerText = "Show Less...";    
                }
            }
        xhr.send();
        }
        dataStatus = true;
        document.getElementById('langShowMore').innerText = "Show Less...";  
        
        
};

