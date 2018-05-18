<?php

    include_once 'sql.php';
    include_once 'member.php';
    session_start();
    $member = $_SESSION['member'];
    $sql= "update member set online='on' where id={$member->id}";
    $mysqli->query($sql);

