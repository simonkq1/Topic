<?php
include_once 'sql.php';
include_once 'member.php';

session_start();
$member = $_SESSION['member'];

$sql = "select * from member where online='on' and id != {$member->id}";
$result = $mysqli->query($sql);
if ($result = $mysqli->query($sql)) {

    while ($data = $result->fetch_assoc()) {
//        if($data['cid']==$member->id){

        echo "<div class='mlist' id='{$data['id']}'  ondblclick='p2p(this.id)'><input id='name_list' name='{$data['name']}' value='{$data['name']}' readonly > </div>";

//        }

        }

}

//if ($result = $mysqli->query($sql)) {
//
//    while ($data = $result->fetch_object('Chat')) {
//        foreach ($data as $k => $v) {
//            echo "{$v}:";
//        }
//        echo '<br>';
//    }
//}