<?php 
    require 'db_connect.php';
    if($conn -> connect_error){
        die("Connection failed : ".$conn->connect_error );
    }
    $input = $_GET['name'];
    $sql = "SELECT Username from UserInfo WHERE Username = '$input'";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        $list = array(
            'status'=>true
        );
    }else{
        $list = array(
            'status'=>false
        );
    }
    // print_r($arr);
    $myJSON = json_encode($list);
    echo $myJSON;

    // echo $myJSON."<br>";
    // $str = "dota11294";
    // if($_SERVER['REQUEST_METHOD'] == "GET") {
    //     if(!(isset($_REQUEST["q"]))) return;
    //     $str = $_REQUEST["q"];
    //     $response = "";
    //     foreach ($arr as $username){
    //         if ($str == $username) {
    //             $response = "<p class='invalid'>".$str." is already taken.</p>";
    //             break;
    //         } else {
    //             $response = "<p class='valid'>".$str." is available.</p>";
    //         }
    // }
    // echo $response ;

    // }
    // if($_SERVER['REQUEST_METHOD'] == "GET") {
    //     if(!(isset($_REQUEST["name"]))) return;
    //     $input = $_REQUEST["name"];
    //     $res = "";
    //     foreach ($arr as $username) {


    //         // if($input == $username){
    //         //     $res = "0";
    //         //     break;
    //         // }else{
    //         //     $res = "1";
    //         // }
    //     }   
    // echo $res;
    // }

    
    
?>