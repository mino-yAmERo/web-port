<?php 
    require 'db_connect.php';
    if($conn -> connect_error){
        die("Connection failed : ".$conn->connect_error );
    }
    $input = $_GET['name'];

    // ----- WHERE Username == INPUT -----//
    // -- check duplicate username --//
    $sql = "SELECT Username from UserInfo WHERE Username = '$input'";

    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        $list = array(
            'status'=>true // true = found duplicate
        );
    }else{
        $list = array(
            'status'=>false
        );
    }
    
    $myJSON = json_encode($list);
    echo $myJSON;

    
?>