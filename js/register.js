function checkUser(str) {
    let userlog = document.getElementById('userLog');
    if(str == ""){
        userlog.innerHTML = "<small class='invalid'>Please fuck me</small>";
    }
    else if(str.length < 8) {
        userlog.innerHTML = "<p class='invalid'>Username must contain at least 8 characters</p>";
    }
    else{
        userlog.innerHTML = "";
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
    function clearInput(event){
    const inputs = document.querySelectorAll('#firstname, #lastname , #Username, #Password, #ConfirmPassword');
    inputs.forEach(e => {
        e.value= '';
    });
}





    

function validateForm() {
    let xhr = new XMLHttpRequest();
    let userInput = document.getElementById('Username').value;
    xhr.open("GET","getuser.php?name="+userInput,true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            let myJSON = JSON.parse(xhr.responseText);
            console.table(myJSON);
            if (! (myJSON.status) ) 
                document.getElementById('register-form').submit();
            else
                alert('ไอ่บิวหน้าเหี้ยยยยยยยย');
        }
    }
}
