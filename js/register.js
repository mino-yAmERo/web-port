function checkUser(str) {
    let userlog = document.getElementById('userLog');
    if(str == ""){
        userlog.innerHTML = "<small class='invalid'>Please fill username</small>";
    }
    else if(str.length < 8) {
        userlog.innerHTML = "<small class='invalid'>Username must contain at least 8 characters</small>";
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
//     function clearInput(event){
//     const inputs = document.querySelectorAll('#firstname, #lastname , #Username, #Password, #ConfirmPassword');
//     inputs.forEach(e => {
//         e.value= '';
//     });
// }

function validateForm() {
    let xhr = new XMLHttpRequest();
    let userInput = document.getElementById('Username').value;
    xhr.open("GET","checkUser.php?name="+userInput,true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            const myForm = document.getElementById('register-form');
            let myJSON = JSON.parse(xhr.responseText);
            console.table(myJSON);
            
            if (! (myJSON.status) ) {
                // false => not found duplicate
                console.log('status : '+myJSON.status);
                HTMLFormElement.prototype.submit.call(myForm);
            }
            else{
                // true => found duplicate
                alert(userInput + ' has already used');
                document.getElementById('userLog').innerHTML = "<small class='invalid'> "+ userInput +" has already used  </small>";
            }
        }
    }
}

function fnameHandler() {
    const fnameLog = document.getElementById('fnameLog');
    const fnameInputBox = document.getElementById('firstname');
    const input = document.getElementById('firstname').value;
    const pattern = /^[a-z][a-z/D]*$/; 
    const length = /^.{8,15}$/;
    const fname = {
            'pattern' : pattern.test(input),
            'length' : length.test(input)
        }
    
    
    if ( (fname.pattern) && (fname.length)) {
        // pattern true && length true
        
        fnameLog.innerHTML = "";

        if (fnameInputBox.classList.value == "invalid-box") fnameInputBox.classList.replace("invalid-box" , "valid-box")
        else fnameInputBox.classList.add("valid-box");
        return true;
    } else {
        if (fnameInputBox.classList.value == "valid-box") fnameInputBox.classList.replace("valid-box" ,"invalid-box");
        else fnameInputBox.classList.add("invalid-box");

        fnameLog.innerHTML = "";
        if ( !(fname.pattern) ) fnameLog.innerHTML += "<small class='invalid'>- Must contain only english alphabets </small><br>";
        if ( !(fname.length) ) fnameLog.innerHTML += "<small class='invalid'>- Must contain between 8 and 15 letters </small><br>";
        return false;
    }
    
}

function lnameHandler() {
    const lnameLog = document.getElementById('lnameLog');
    const lnameInputBox = document.getElementById('lastname');
    const input = document.getElementById('lastname').value;
    const pattern = /^[a-z][a-z/D]*$/; 
    const length = /^.{8,15}$/;
    // console.log('input : '+input+' = > '+pattern.test(input));
    // console.log('length : '+ length.test(input));
    const lname = {
            'pattern' : pattern.test(input),
            'length' : length.test(input)
        }
    // console.table(inputJSON);
    
    if ( (lname.pattern) && (lname.length)) {
        // pattern true && length true
        lnameLog.innerHTML = "";

        if (lnameInputBox.classList.value == "invalid-box") lnameInputBox.classList.replace("invalid-box" , "valid-box")
        else lnameInputBox.classList.add("valid-box");
        
        return true ;

    } else {
        if (lnameInputBox.classList.value == "valid-box") lnameInputBox.classList.replace("valid-box" ,"invalid-box");
        else lnameInputBox.classList.add("invalid-box");

        lnameLog.innerHTML = "";
        if ( !(lname.pattern) ) lnameLog.innerHTML += "<small class='invalid'>- Must contain only english alphabets </small><br>";
        if ( !(lname.length) ) lnameLog.innerHTML += "<small class='invalid'>- Must contain between 8 and 15 letters </small><br>";

        return false
    }
    
}



function getStat(){
    let fnameCanSave = fnameHandler();
    let lnameCanSave = lnameHandler();
    console.log('fname status : ' +fnameCanSave)
    console.log('lname status : ' +lnameCanSave)

}




    
        
    

