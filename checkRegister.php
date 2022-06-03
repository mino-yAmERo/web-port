<?php
    session_start();
    $fname = $_POST['fname']; 
    $lname = $_POST['lname']; 
    $user = $_POST['username']; 
    $pwd = $_POST['password']; 
    $conpwd = $_POST['confirmpassword']; 

    // responseText JSON
    /* 
        [
            [
                firstname => firstname,
                lastname => lastname,
            ],
            [

            ]
        ]
        
    */

    $info = array(
        "firstname" => $fname,
        "lastname" => $lname,
        "username" => $user
    );
    $status = array(
        'fname' => array(),
        'lname' => array(),
        'user' => array(),
        'pwd' => array(),
    );
    //PHP VALIDATION 
    // code here 
    // RegEx
    $fnameStat = $lnameStat = $userStat = $userPat = $pwdPat = $pwdMatch = $userDuplicated = false;
    // $pattern = '/^[a-zA-z]$/'; 

    $pattern = '/^(?=.*[A-Za-z].*[A-Za-z])[{}[\]A-Za-z]*$/';

    //firstname
    if ( !(preg_match($pattern, $fname)) ) {
        $err = array('fnameErr' => 'Invalid firstname');
        $status['fname'] = array_merge($status['fname'], $err);

    } else {
        $fnameStat = true;

    }

    //lastname
    if ( !(preg_match($pattern, $lname)) ) {
        $err = array('lnameErr' => 'Invalid lastname' );
        $status['lname'] = array_merge($status['lname'],$err);

    } else {
        $lnameStat = true;

    }

    //username
    $userPattern = '/^(?=.*[A-Za-z_0-9].*[A-Za-z_0-9])[{}[\]A-Za-z_0-9]{8,15}$/';
    if ( !(preg_match( $userPattern , $user)) ){
        $err = array('userErr' => 'Invalid username');
        $status['user'] = array_merge($status['user'],$err);

    } else {
        $userPat = true;
    }

    //if userPattern == true
    //check username is Duplicated ?
    if ($userPat === true) {
        require 'db_connect.php';
        if ($conn -> connect_error){
            die("Connection failed : ".$conn->connect_error );

        }
        $sql = "SELECT Username from UserInfo WHERE Username = '$user'";
        $result = $conn->query($sql);

        if ( $result->num_rows > 0) {
            $err = array( 'userDuplicated'=> $user." is already used" );// true = found duplicate
            $status['user'] = array_merge($status['user'],$err);

        } else {
            $userDuplicated = true;

        }
        $conn -> close();
    }
    //password
    $pwdPattern = '/^(?=.*[A-Za-z_0-9].*[A-Za-z_0-9])[{}[\]A-Za-z_0-9]{6,}$/';
    if ( !preg_match( $pwdPattern , $pwd)) {
        $err = array('pwdErr' => 'Invalid password');
        $status['pwd'] = array_merge($status['pwd'],$err);

    } else {
        $pwdPat = true;

    }

    //password is matched ?
    if ( ($pwd === $conpwd && $pwdPat === true ) ) {
        $pwdMatch = true ;

    } else if ($pwdPat === false) {
        $err = array('pwdIsMatched' => 'Invalid password');
        $status['pwd'] = array_merge($status['pwd'],$err);

    } else {
        $err = array('pwdIsMatched' => 'Password is not matched');
        $status['pwd'] = array_merge($status['pwd'],$err);
    }

    // check if ALL TRUE
    if (
        $fnameStat === true && 
        $lnameStat === true && 
        $userPat === true && 
        $pwdPat === true && 
        $pwdMatch === true && 
        $userDuplicated === true 
    ){ 
        //INSERT INTO DB
        require 'db_connect.php';
        if ($conn -> connect_error){
            die("Connection failed : ".$conn->connect_error );

        }
        $sql = "INSERT INTO UserInfo (Username, Password, Firstname, Lastname) VALUES(?, ?, ?, ?)";
        $stmt = $conn ->prepare ($sql);
        $stmt->bind_param("ssss",$_username,$_password,$_fname,$_lname);
        $_username = $user; 
        $_password = $pwd; 
        $_fname = $fname;
        $_lname = $lname;

            if( $stmt->execute()) {
                
            } else {
                die( "error : ".$stmt->error."<br>");
            }
            $stmt->close();
            $conn->close();

        //set SESSION 
        $_SESSION['hasRegistered'] = true;
    }
    //conclusion
    $arr = array(
        'info' => $info,
        'status' => $status,
    );
    session_write_close();
    $json = json_encode($arr);
    echo $json;


/* Check if all status are true 
    // INSERT INTO DATABASE 

    // Return : status and input value -> Client
    // REGISTER successful :  using sweetalert to show user infomation
    // Sweetalert : confirm alert 
        // true => login.php 
        // false => clear input value 


*/

/*  if not all status not true 
    // return status false and err message to display in each input <label>

*/

?>