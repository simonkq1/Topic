<?php
include_once 'sql.php';
include_once 'member.php';
session_start();
$account=$_REQUEST['account'];
$password=$_REQUEST['password'];



//$sql="select * from member where account='{$account}'";
//$result=$mysqli->query($sql);


$sql = "select * from member " .
    "where account=?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s",$account);
$stmt->execute();


$result = $stmt->get_result();


if($result->num_rows>0){
    $member=$result->fetch_object('member');
    if(password_verify($password,$member->password)){
        $_SESSION['member']=$member;
//        if(isset($_SESSION['member'])){
        $sql="update member set online='on' where id={$member->id}";
        $mysqli->query($sql);

            header('Location: chatRoom.php');
//        }
    }else{
        header('Location: login.php');
    }
}else{
    header('Location: login.php');
}

