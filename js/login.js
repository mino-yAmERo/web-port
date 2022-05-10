function checkLogin() {
    let userInput = document.getElementById('Username').value;
    let pwInput = document.getElementById('Password').value;
    // // xhr.open("GET","check_login.php?i="+jsonData, true);
    // // xhr.setRequestHeader('Content-Type','application/json')
    // let json = {
    //     "Username" : userInput,
    //     "Password" : pwInput
    // }
    // let jsonData = JSON.stringify(json);

    let data = new FormData();
        data.append('user', userInput);
        data.append('pw', pwInput);

    let xhr = new XMLHttpRequest();
    xhr.open("POST","check_login.php" ,true);
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.responseText);
            let myJSON = JSON.parse(xhr.responseText);
            
            if ( myJSON.status ) {
                //true => found username and pw
                document.getElementById('statLog').innerHTML = "";
                alert('login successful');
                window.location.reload();
                
            }
            else{
                alert('Username or password not correct');
                document.getElementById('statLog').innerHTML = "<p><small class='invalid'>Username or password not correct<small></p>";
                document.getElementById('Password').value = '';
            }
        }
    }
    
}