<?php 
    session_start();
    require 'db_connect.php';

    $username = $_POST['user'];
    $password = $_POST['pw'];

    $sql = " SELECT * FROM UserInfo WHERE Username = ? AND Password = ? ";
    $stmt = $conn ->prepare($sql);
    $stmt->bind_param("ss",$username,$password);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($UserID,$Username,$Password,$fname,$lname,$permission);
    $stmt->fetch();
        if ( $stmt-> num_rows > 0) {
            //found this Username and Password
            $data = array(
                'ID' => $UserID,
                'user' => $Username,
                'fname' => $fname,
                'lname' => $lname,
                'permission' => $permission
            );
            $list = array(
                'status' => true,
            );
            // //--- set SESSION ---//
            $_SESSION["Username"] = $data["user"];
            $_SESSION["UserID"] = $data["ID"];
            $_SESSION["Status"] = $data["permission"];
            $_SESSION["Firstname"] = $data["fname"];
            $_SESSION["Lastname"] = $data["lname"];
            //set เวลา นำไปเช็คเพื่อโหลดหน้า animation 
            $_SESSION["start"] = time();
            $_SESSION["expire"] = $_SESSION['start'] + 10*60; // 60วินาที * 10 => 10นาที

        } else {
            //not found
            $list = array(
            'status'=>false,
            'message'=> "Not found this ".$username." user"
            );
        }

    $myJSON = json_encode($list);
    echo $myJSON;
    $stmt->close();
    session_write_close();
    $conn -> close();

        // if($_SESSION["Status"] == 'ADMIN') {
        //     echo "You're an admin "."<br>";
        //     header("location:index.php");
        // }else{
        //     echo "You're a user "."<br>";
        //     header("location:index.php");
        // }

    // $conn -> close();

?>