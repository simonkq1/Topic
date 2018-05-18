<?php
include_once 'sql.php';
include_once 'member.php';

session_start();
$member=$_SESSION['member'];

$sql="select * from member where online='on'";
$result=$mysqli->query($sql);

$onlineNum=$result->num_rows;
echo $onlineNum;