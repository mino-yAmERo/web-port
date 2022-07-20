<?php
    include 'db_connect.php';
    $id = $_POST['userID'];

    $sql = "SELECT UserID, Username, Firstname, Lastname , Status FROM UserInfo WHERE UserID = '$id'";
    $result = $conn->query($sql);
    $data = [];
    $resultArray = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
        array_push($resultArray,$row);
        }
    }

    $list = array(
        'status'=>true,
        'data'=>$resultArray
    );

$myJson = json_encode($list);
echo $myJson;
?>