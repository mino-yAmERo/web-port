<?php 
    require 'db_connect.php';
    if($conn -> connect_error){
        die("Connection failed : ".$conn->connect_error );
    }
    $sql = 'SELECT Username from UserInfo';
    $result = $conn->query($sql);
    $arr = array();
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            array_push($arr,$row['Username']);
        }
    }
    // $myJSON = json_encode($arr);
    
    $str = $_REQUEST["str"];
    $response = "";
        foreach ($arr as $username){
            if ($str != $username) {
                $response = "<p class='valid'>".$str." is available.</p>";
            } else {
                $response = "<p class='invalid'>".$str." is already taken.</p>";
            }
        }
    
    echo $response ;

    
    
?>