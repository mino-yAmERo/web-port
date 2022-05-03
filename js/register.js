function checkUser(str) {
    let userInput = document.getElementById('Username');
    let userlog = document.getElementById('userLog');
    let string = str.trim();
    if(string.length == ""){
        userlog.innerHTML = "";
    }
    else if(string.length < 8) {
        userlog.innerHTML = "<p class='invalid'>Username must contain at least 8 characters</p>";
        return;
    } else {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                userlog.innerHTML = this.responseText;
            }
        }
        xhr.open('GET',"getuser.php?str="+string, true);
        xhr.send();
        
    }
}
// ------- CHECK PASSWORD AND CONFIRM PASSWORD ------- //
function checkPassword() {
    let pw = document.getElementById('Password');
    let confirmPw = document.getElementById('ConfirmPassword');

    if(confirmPw.value == "") return;
    if(pw.value != confirmPw.value){
        document.getElementById('passwordLog').innerHTML = "<p class='invalid'>Password is not matched</p>";

        if(pw.classList.value == "" && confirmPw.classList.value == ""){
            pw.classList.add('invalid-box');
            confirmPw.classList.add('invalid-box');
        } else {
        pw.classList.replace('valid-box','invalid-box');
        confirmPw.classList.replace('valid-box','invalid-box');
        }


    }else{
        document.getElementById('passwordLog').innerHTML = "<p class='valid'>Password is correct</p>";
        document.getElementById('Password').classList.replace('invalid-box','valid-box');
        document.getElementById('ConfirmPassword').classList.replace('invalid-box','valid-box');
    }

}
function validateForm() {
    let userlog = document.getElementById('userLog').querySelector('p');
    let pwLog = document.getElementById('passwordLog').querySelector('p');
    //--- username ---//
    if (userlog.classList.value === 'invalid'){
        console.log('Please enter a valid');
        alert('Please enter a valid');
        return false;
    };

    //--- password ---//
    if (pwLog.classList.value === 'invalid'){

        alert('Password is not correct');
        return false;
    };
}