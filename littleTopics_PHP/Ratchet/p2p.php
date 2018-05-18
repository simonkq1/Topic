
<?php

include_once 'sql.php';
include_once 'member.php';
session_start();
if (!isset($_SESSION['member'])) header('Location: login.php');

$member = $_SESSION['member'];
$toId = $_GET['toId'];
$myId = $_GET['myId'];

$_SESSION['toId'] = $toId;
$_SESSION['myId'] = $myId;
?>
    <script src="jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="roomStyle.css">
    <script>


        // -------------------取得訊息記錄-------------------
window.onload=function(){focus()};
        setInterval(function () {
            $.post('p2pAJAX.php', {toId:<?php echo $toId ?>, myId:<?php echo $myId ?>}, function (text, status) {
                // document.getElementById('debug').innerHTML=status;
                if (status == 'success') {
                    var data = JSON.parse(text);
                    $("#chatBox").empty();
                    for (i = 0; i < data.length; i++) {
                        if (data[i].account == '<?php echo $member->account ?>') {
                            $("#chatBox").append("<p id='b'> <span id='myChat'>  &nbsp;"
                                + data[i].text + "&nbsp;</span><small>&nbsp; << " + data[i].name
                                + "</small><br><small><small>" + data[i].date + "</small></small></p>");
                        } else {
                            $("#chatBox").append("<p id='a'><small>" + data[i].name
                                + " >>&nbsp;</small> <span id='chatSpan'> &nbsp;" + data[i].text
                                + "&nbsp;</span><br><small><small>" + data[i].date + "</small></small></p>");

                        }
                    }
                }
            });
        }, 500);

        // -------------------發送訊息-------------------

        function sendMessage(text) {
            if (text != '') {
                $.post('p2p_insertmessage.php', {text: text, toId:<?php echo $toId ?>}, function (data) {
                });
                document.getElementById('chat').value = '';
                setTimeout(scroll,30)
            }else{
                scroll();
            }
            // var div = document.getElementById('chatBox');
            // div.scrollTop = div.scrollHeight;
        }
        function scroll(){
            var div = document.getElementById('chatBox');
            div.scrollTop = div.scrollHeight;
        }
        function focus(){
            $("#chat").focus();
        }


    </script>

    <div class="chatBox" id="chatBox">

    </div>
    <!--    <div id="debug" style="border: 1px black solid;width: 100px;height: 100px"></div>-->


    <div class="chatArea">
        <input type="text" name="chat" id="chat" onkeypress="if (event.keyCode==13){sendMessage(this.value);}">
        <!--            <input type="submit" value=">>" onclick="sendMessage($('#chat').val())">-->
        <button type="button" id="bt1" onclick="sendMessage($('#chat').val())"> >></button>
    </div>
<?php


