function guestLogin() {
    // text = `
    // ** If you don't want to create account to login to my website. **\n
    //     Use this username and password to explore my website.\n
    //     username : guest1234 
    //     password : 1234\n
    //     Do you want to continue ?`
        
    // if ( confirm(text)) {
    // document.getElementById('Username').value = 'guest1234';
    // document.getElementById('Password').value = '1234'
    // checkLogin();
    // } else {
    //     return;
    // }
    Swal.fire({
        icon: 'question',
        title: 'Are you sure?',
        text: 'You are going to login as a guest',
        showCancelButton: true,
        confirmButtonColor: 'limegreen',
        cancelButtonColor: 'rgb(200, 15, 15)',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then( (result) => {
        if (result.isConfirmed) {
            document.getElementById('Username').value = 'guest1234';
            document.getElementById('Password').value = '1234'
            checkLogin();
        } else {
            return;
        }
    });
}
function checkLogin() {
    let userInput = document.getElementById('Username').value;
    let pwInput = document.getElementById('Password').value;

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
            // console.log(myJSON);

            if ( myJSON.status ) {
                //true => found username and pw
                document.getElementById('statLog').innerHTML = "";
                Swal.fire({
                    title : 'Login Completed!',
                    text : 'Login successful',
                    icon : 'success',
                }).then(() => {
                    window.location.reload();
                })      
            }
            else{
                Swal.fire({
                    title : 'Username or password incorrect!',
                    text : 'Please try again.',
                    icon :'error',
                });
                document.getElementById('statLog').innerHTML = "<p><small class='invalid'>Username or password not correct<small></p>";
                document.getElementById('Password').value = '';
            }
        }
    }  
}
