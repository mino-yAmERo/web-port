window.onload = function() {
    setTimeout(function() {
        Swal.fire({
            title : 'Notice',
            html : 
                '<b>the purpose of this website is for studying and not protected by SSL certificate.<br><br></b>' +
                '<p>To protect your personal information I recommend you to..</p><br>' +
                '<p style="text-align: left">- Avoid using username and password that you often use.</p>' + 
                '<p style="text-align: left">- Use a simple username and password instead.</p>' +
                '<small style=" text-align: left ; margin-left:15px ">e.g. username : abc12345 , password : 123456</small><br>' +
                '<p style="text-align: left">- Use a guest user to login <a href="login.php" style="color:#545454; padding:0;" ><small>Click here</small></a></p>',
            confirmButtonText : 'Ok, I got it !',
            confirmButtonColor: 'limegreen',    
        });
    },1);
}
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
function validateForm() {
    const fname_input = document.getElementById('Firstname').value;
    const lname_input = document.getElementById('Lastname').value;
    const user_input = document.getElementById('Username').value;
    const pwd_input = document.getElementById('Password').value;
    const conpwd_input = document.getElementById('ConfirmPassword').value;

    let data = new FormData();
        data.append('fname', fname_input);
        data.append('lname', lname_input);
        data.append('username', user_input);
        data.append('password', pwd_input);
        data.append('confirmpassword', conpwd_input);
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open("POST" , "checkRegister.php", true);
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(this.responseText);
            let myJSON = JSON.parse(this.responseText);
            console.log(myJSON);
            let log = document.getElementsByClassName('log');


            // check status
            if (myJSON.status.fname.length !== 0 || myJSON.status.lname.length !== 0 
                || myJSON.status.user.length !== 0 || myJSON.status.pwd.length !== 0  ) {
                
                // found Error
                // set default 
                log[0].innerHTML = "";    // firstname log
                log[1].innerHTML = "";    // lastname log
                log[2].innerHTML = "";    // username log 
                log[3].innerHTML = "";    // password log
                log[4].innerHTML = "";    // confirm password log

                //fname error
                if (myJSON.status.fname.fnameErr !== undefined) log[0].innerHTML = myJSON.status.fname.fnameErr;
                // else log[0].innerHTML = "";

                //lname error
                if (myJSON.status.lname.lnameErr !== undefined) log[1].innerHTML = myJSON.status.lname.lnameErr;
                // else log[1].innerHTML = "";

                //user error
                if (myJSON.status.user.userErr !== undefined) log[2].innerHTML = myJSON.status.user.userErr;
                // else log[2].innerHTML = "";
                
                //user duplicated error
                if (myJSON.status.user.userDuplicated !== undefined) log[2].innerHTML += myJSON.status.user.userDuplicated;
                // else log[2].innerHTML = "";

                //password error
                if (myJSON.status.pwd.pwdErr !== undefined) log[3].innerHTML = myJSON.status.pwd.pwdErr;
                // else log[3].innerHTML = "";
                
                //password match error
                if (myJSON.status.pwd.pwdIsMatched !== undefined) log[4].innerHTML = myJSON.status.pwd.pwdIsMatched;
                // else log[4].innerHTML = "";

                isInputValid();
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Your registeration successful',
                    html: '<p>Your infomation is<br></p>'+
                    '<p>Firstname : '+myJSON.info.firstname+'</p>'+
                    '<p>Lastname : '+myJSON.info.lastname+'</p>'+
                    '<p>Username : '+myJSON.info.username+'</p>', 
                    confirmButtonColor: 'limegreen',
                    confirmButtonText: 'Ok, Go to login !',
                }).then( () => {
                        window.location.reload();
                })
            }


        }
    }
}
function isInputValid () {
    const input = document.querySelectorAll('input');
    const log = document.getElementsByClassName('log');
    /*
    [0] => firstname
    [1] => Lastname
    [2] => username
    [3] => Password
    [4] => Confirm Password
    */

    // check if log contains text && add invalid class to input

    for (let i = 0; i < log.length; i++) {
        // remove invalid-box by default
        input[i].classList.remove('invalid-box');
        input[i].classList.remove('valid-box');
        // remove placeholder
        input[i].placeholder = '';

        // check if log contains error text -> invalid-box
        if ( log[i].textContent !== '') {
            input[i].classList.add('invalid-box');
        } else {
            input[i].classList.add('valid-box');
        }

    }

}
function testSwal() {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
    );
}
    
/* JS VALIDATION (NOT USED)  
    function fnameHandler() {
    const fname_log = document.getElementById('fnameLog');
    const fname_input = document.getElementById('Firstname');
    const input = fname_input.value;
    const pattern = /^[a-z][A-Z/D]*$/i; 
    const length = /^.{0,64}$/;

    let fname = {
            'pattern' : pattern.test(input),
            'length' : length.test(input)
        }
    
    if ( (fname.pattern) && (fname.length)) {
        // pattern true && length true
         //text log
        fname_log.innerHTML = "";

        //style
        if (fname_input.classList.value == "invalid-box") fname_input.classList.replace("invalid-box" , "valid-box")
        else fname_input.classList.add("valid-box");
        

    } else {
        //style
        if (fname_input.classList.value == "valid-box") fname_input.classList.replace("valid-box" ,"invalid-box");
        else fname_input.classList.add("invalid-box");

         //text log
        fname_log.innerHTML = "";
        if ( !(fname.pattern) ) fname_log.innerHTML += "<small class='invalid'>- Must contain only English alphabets </small><br>";
        if ( !(fname.length) ) fname_log.innerHTML += "<small class='invalid'>- Must not exceed 64 characters</small><br>";
        // return false;
    }
    return fname;
}

function lnameHandler() {
    const lname_log = document.getElementById('lnameLog');
    const lname_input = document.getElementById('Lastname');
    const input = lname_input.value;
    const pattern = /^[a-z][a-z/D]*$/i; 
    const length = /^.{0,64}$/;
    

    let lname = {
            'pattern' : pattern.test(input),
            'length' : length.test(input)
        }
    
    if ( (lname.pattern) && (lname.length)) {
        // pattern true && length true
         //text log
        lname_log.innerHTML = "";

        //style
        if (lname_input.classList.value == "invalid-box") lname_input.classList.replace("invalid-box" , "valid-box")
        else lname_input.classList.add("valid-box");
        

    } else {
        //style
        if (lname_input.classList.value == "valid-box") lname_input.classList.replace("valid-box" ,"invalid-box");
        else lname_input.classList.add("invalid-box");

         //text log
        lname_log.innerHTML = "";
        if ( !(lname.pattern) ) lname_log.innerHTML += "<small class='invalid'>- Must contain only English alphabets </small><br>";
        if ( !(lname.length) ) lname_log.innerHTML += "<small class='invalid'>- Must not exceed 64 characters</small><br>";
        // return false
    }
    return lname;
}

function userHandler() {
    const user_log = document.getElementById('userLog');
    const user_input = document.getElementById('Username');
    const input = user_input.value;
    const startwith = /^[a-z].*$/i;
    const pattern = /^[a-z0-9]*$/i; 
    const length = /^.{8,15}$/;

    let user = {
        'startwith' : startwith.test(input),
        'pattern' : pattern.test(input),
        'length' : length.test(input)
    }
    if ( (user.pattern) && (user.length) && ((user.startwith)) ) {
        // pattern true && length true
        
        //text log
        user_log.innerHTML = "";

        //style
        if (user_input.classList.value == "invalid-box") user_input.classList.replace("invalid-box" , "valid-box")
        else user_input.classList.add("valid-box");

    } else {
        //style
        if (user_input.classList.value == "valid-box") user_input.classList.replace("valid-box" ,"invalid-box");
        else user_input.classList.add("invalid-box");

         //text log
        user_log.innerHTML = "";
        if ( !(user.pattern) ) user_log.innerHTML += "<small class='invalid'>- Must contain only English and numeric characters</small><br>";
        if ( !(user.startwith) ) user_log.innerHTML += "<small class='invalid'>- Must start with English alphabets </small><br>";
        if ( !(user.length) ) user_log.innerHTML += "<small class='invalid'>- Must contain between 8 and 15 letters </small><br>";
        
    }
    return user;
}

function pwdHandler() {
    const pwd_log = document.getElementById('passwordLog');
    const pwd_input = document.getElementById('Password');
    const input = pwd_input.value;
    const pattern = /^[a-z0-9]*$/; 
    const length = /^.{4,}$/;

    let pwd = {
        'pattern' : pattern.test(input),
        'length' : length.test(input)
    }

    if( pwd.pattern && pwd.length) {
         //text log
        pwd_log.innerHTML = "";

        //style
        if (pwd_input.classList.value == "invalid-box") pwd_input.classList.replace("invalid-box" , "valid-box")
        else pwd_input.classList.add("valid-box");

    } else {
        // style
        if (pwd_input.classList.value == "valid-box") pwd_input.classList.replace("valid-box" ,"invalid-box");
        else pwd_input.classList.add("invalid-box");

         //text log
        pwd_log.innerHTML = "";
        if ( !(pwd.pattern) ) pwd_log.innerHTML += "<small class='invalid'>- Must contain only English and numeric characters</small><br>";
        if ( !(pwd.length) ) pwd_log.innerHTML += "<small class='invalid'>- Must contain at least 4 characters</small><br>";
    }
    
    return pwd ;
}

function pwdMatch() {
    const pwd = document.getElementById('Password').value;
    const conPwd_log = document.getElementById('confirmpasswordLog');
    const conPwd_input = document.getElementById('ConfirmPassword');
    const conPwd = conPwd_input.value;
    let confirmPwd = {
        'isMatched' : false //default
    }
    if (conPwd == "") return confirmPwd;
    if (pwd === conPwd)  {
        confirmPwd.isMatched = true ;

        //text log
        conPwd_log.innerHTML = "<small class='valid'>Password is matched</small>";

        // style
        if (conPwd_input.classList.value == "invalid-box") conPwd_input.classList.replace("invalid-box" , "valid-box");
        else conPwd_input.classList.add("valid-box");

    } else {
        confirmPwd.isMatched = false ;

        //text log
        conPwd_log.innerHTML = "<small class='invalid'>Password is not matched</small>";

        // style
        if (conPwd_input.classList.value == "valid-box") conPwd_input.classList.replace("valid-box" ,"invalid-box");
        else conPwd_input.classList.add("invalid-box");
    }
    return confirmPwd
    
}
// validation test function
function getStat(){
    let fname_isCanSave = fnameHandler();
    let lname_isCanSave = lnameHandler();
    let user_isCanSave = userHandler();
    let pwd_isCanSave = pwdHandler();
    let confirmPwd_isCanSave = pwdMatch();

    // console.log('fname pattern : ' +fname_isCanSave.pattern);
    // console.log('fname length : ' +fname_isCanSave.length);
    // console.log('------------------------------------------------');
    // console.log('lname pattern : ' +lname_isCanSave.pattern);
    // console.log('lname length : ' +lname_isCanSave.length);
    // console.log('------------------------------------------------');
    // console.log('username pattern : ' +user_isCanSave.pattern);
    // console.log('username length : ' +user_isCanSave.length);
    // console.log('username startwith : ' +user_isCanSave.startwith);
    // console.log('------------------------------------------------');
    // console.log('password pattern : ' +pwd_isCanSave.pattern);
    // console.log('password length : ' +pwd_isCanSave.length);
    // console.log('------------------------------------------------');
    // console.log('password match : ' + confirmPwd_isCanSave.isMatched);
    // console.log('------------------------------------------------');

}

function validateForm() {
    const user_input = document.getElementById('Username');
    let username = user_input.value;

    let fname = fnameHandler();
    let lname = lnameHandler();
    let user = userHandler();
    let pwd = pwdHandler();
    let conpwd = pwdMatch();

    // let json = {
    //     fname,
    //     lname,
    //     user,
    //     pwd,
    //     conpwd,
    // }
    // console.table(json);

    // AJAX -> CHECK DUPLICATE
    const xhr = new XMLHttpRequest();
    xhr.open("GET","checkUser.php?name="+username,true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            const user_log = document.getElementById('userLog');
            const myForm = document.getElementById('register-form');
            let res =  JSON.parse(xhr.responseText)
            let isDuplicated = res.status;
            

            if ( !fname.pattern )  {
                alert('Firstname must contain only English alphabets');
                return;
            }
            else if ( !fname.length ) 
            {
                alert('Firstname must not exceeed 64 characters');
                return;
            }
            else if ( !lname.pattern )  {
                alert('Lastname must contain only English alphabets');
                return;
            }
            else if ( !lname.length )  {
                alert('Lastname must not exceeed 64 characters');
                return;
            }
            else if ( !user.pattern ) {
                alert('Username must contain only English and numeric characters');
                return;
            }
            else if ( !user.length )  {
                alert('Username mustcontain between 8 and 15 letters');
                return;
            }
            else if ( !user.startwith ) {
                alert('Username must start with English alphabets');
                return;
            }
            else if ( !pwd.pattern ) {
                alert('Password must contain only English and numeric characters');
                return;
            }
            else if ( !pwd.length ) {
                alert('Password must contain at least 4 characters');
                return;
            }
            else if ( !conpwd.isMatched) {
                alert('Password is not matched');
                return;
            }
            //check duplicate
            else if ( isDuplicated ) {
                // true => found duplicate

                // text log
                user_log.innerHTML = "<small class='invalid'>"+username+" have already used</small>"
        
                // style
                if (user_input.classList.value == "valid-box") user_input.classList.replace("valid-box" ,"invalid-box");
                else user_input.classList.add("invalid-box");
                
                return;

            } else if ( !(isDuplicated) ){
                // false => not found duplicate
                
                // text log
                user_log.innerHTML = "<small class='valid'>"+username+" is available</small>";

                // style
                if (user_input.classList.value == "invalid-box") user_input.classList.replace("invalid-box" , "valid-box")
                else user_input.classList.add("valid-box");

                // all input => valid
                let text = "Confirm register? ";
                if ( confirm(text) === true ) {
                    HTMLFormElement.prototype.submit.call(myForm); 
                } else {
                    return;
                }
                
            }
    
        }
    }
}

*/

