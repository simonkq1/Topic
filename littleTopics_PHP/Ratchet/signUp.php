<?php
include_once 'sql.php';
if (isset($_POST['account']) && isset($_POST['password'])) {
    $rName = $_POST['realName'];
    $account = $_POST['account'];
    $password = $_POST['password'];

    $newPassword = password_hash($password, PASSWORD_DEFAULT);



    $sql = "insert into member (`name`,`account`,`password`) values (?,?,?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sss",$rName,$account,$newPassword);




    if($stmt->execute()){
        $result = $stmt->get_result();
        header('Location:login.php');
    }else {
        echo "<span style='color: red'>Account is exist</span>";
    }


}

?>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<form method="post">


    Real Name:
    <input type="text" name="realName"><br>


    Account:
    <input type="text" name="account" id="account"><br>


    Password:
    <input type="password" name="password" id="password"><br>



    <input type="submit" value="sent">

</form>
