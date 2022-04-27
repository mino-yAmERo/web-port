// ----------------welcome------------------- //
const welcome_message = document.getElementById('welcome-message');  
const welcome = document.getElementById('welcome');
const main = document.getElementById('main');
const navbar = document.getElementById('top-nav');
let sticky = navbar.offsetTop;
console.log('position before main webpage show: '+sticky);

//main function 
//welcome fade-in
setTimeout(fadeIn,6000); // welcome to my website //
setTimeout(fadeOut,8000); //welcome fade-out and show main webpage

//----FOR MAINTENANCE----//
// setTimeout(fadeIn,100);
// setTimeout(fadeOut,100);

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
//--- Hide top navbar on scroll ---//
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {  
    stickyFunction()
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        navbar.style.top ="0";
    }else{
        navbar.style.top ="-60px";
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
            console.table(myJSON);
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
    console.log("arrowStat b4 : "+arrow);
    arrow = !arrow;
    console.log("arrowStat after : "+arrow);
    if(arrow){
        //show
        document.getElementById('arrow').classList.replace('arrow-down', 'arrow-up');
        document.getElementById('langDetail').classList.replace('hide','show');
    }else{
        //hide
        document.getElementById('arrow').classList.replace('arrow-up', 'arrow-down'); //replace arrow-down -> arrow up
        document.getElementById('langDetail').classList.replace('show','hide'); // replace hide -> show
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
                console.log('dataStatus = '+dataStatus);
                document.getElementById('dataList').classList.replace('show','hide');
                document.getElementById('langShowMore').innerText = "Show More...";
                return;
            } else {
                //--- show ---//
                dataStatus = true;
                console.log('dataStatus = '+dataStatus);
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
                    console.log("count : "+li_count); 
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
                            console.log('number : '+i); 
                            liNodeList[i].style.borderBottom = "none" ;
                            if (i >= liNodeList.length-3){
                                liNodeList[i].style.borderBottom = "1px dashed white";
                            }
                        }

                    } else { // ตารางมี3 คอลัมน์ -> คอลัมน์สุดท้าย เศษ 0
                        document.getElementById('lastDatalist').style.flexBasis = "100.00%";
                        for (let i=0 ; i < liNodeList.length ; i++) {
                            console.log('number : '+i); 
                            liNodeList[i].style.borderBottom = "none" ;
                            if (i >= liNodeList.length-1){
                                liNodeList[i].style.borderBottom = "1px dashed white";
                            }
                        }
                    }     
                    console.log('dataStatus when data showed = '+dataStatus);
                    document.getElementById('langShowMore').innerText = "Show Less...";    
                }
            }
        xhr.send();
        }
        dataStatus = true;
        document.getElementById('langShowMore').innerText = "Show Less...";  
        
        
};

