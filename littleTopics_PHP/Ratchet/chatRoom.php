<!DOCTYPE HTML>

<html>
<head>

    <link rel="stylesheet" href="roomStyle.css" charset="UTF-8">
    <link rel="stylesheet" href="jquery-ui/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="jquery-ui/jquery-ui.js"></script>
    <?php

    include_once 'sql.php';
    include_once 'member.php';
    include_once 'setInterval.php';
    session_start();
    if (!isset($_SESSION['member'])) header('Location: login.php');
    $member = $_SESSION['member'];

    ?>
    <script type="text/javascript">
        var ws = new WebSocket("ws://localhost:8080");
        $(document).ready(WebSocketTest(), setOnline(), faceIcon());

        // -------------------開啟WebSocket-------------------



        function WebSocketTest() {

            if ("WebSocket" in window) {
                var wsa = ws.readyState;

                ws.onopen = function () {

                    var myName = document.getElementById('<?php echo $member->id ?>').value;
                    ws.send(myName + " is online");
                };

                ws.onmessage = function (evt) {
                    var received_msg = evt.data;

                    $("#chatBox").append("<p id='a'><span id='chatSpan'> &nbsp; " + received_msg + " &nbsp; </span></p>")
                };

                ws.onclose = function () {

                    // websocket is closed.
                    alert("Connection is closed...");
                };
            } else {

                // The browser doesn't support WebSocket
                alert("WebSocket NOT supported by your Browser!");
            }
        }

        // -------------------傳送訊息-------------------

        function sendMessage(input) {
            var input = document.getElementById('chat').value;
            var myName = document.getElementById('<?php echo $member->id ?>').value;
            if (input != '') {
                ws.send(myName + ":" + input);
                $("#chatBox").append("<p id='b'><span id='myChat'> &nbsp; " + input + " &nbsp; </span></p>");
                document.getElementById('chat').value = '';
            }
            var div = document.getElementById('chatBox');
            div.scrollTop = div.scrollHeight;
        }

        // -------------------上線名單-------------------

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var ret = xhttp.responseText;
                var chatBox = document.getElementById('memberList')
                chatBox.innerHTML = ret
            }
            ;
        };

        setInterval(function () {
            xhttp.open('POST', 'onlineList.php', true)
            xhttp.send();
        }, 2000);


        function setOnline() {
            setInterval(function () {
                $.get('setOnline.php', function (data) {
                })
            }, 60000)

        }


        // -------------------上線人數-------------------


        $(document).ready(function () {
            var numRequest = new XMLHttpRequest();
            numRequest.onreadystatechange = function () {
                if (numRequest.readyState == 4 && numRequest.status == 200) {
                    var ret = numRequest.responseText;
                    var num = document.getElementById('numOfOnline');
                    num.innerHTML = ret
                }
            };


            setInterval(function () {
                    numRequest.open('POST', 'nowOnline.php', true);
                    numRequest.send();

                }
                , 1000);
            //
        });

        // -------------------開啟一對一視窗-------------------

        function p2p(toId) {

            var myName = document.getElementById('<?php echo $member->id ?>').value;

            window.open("p2p.php?myId=" + <?php echo $member->id ?> +"&toId=" + toId, 1,
                config = "location=no,toolbar=no")
        }


        // -------------------表情符號-------------------

        function faceIcon() {
            $.post('faceIcon.php', function (data, status) {
                var icon = JSON.parse(data)

                for (i = 0; i < icon.length; i++) {
                    $("#face").append("<input type='button' class='icon' id='icon' value='" + icon[i] + "' onclick='typeIcon(this.value)'>&nbsp;")
                }
            })
        }

        function typeIcon(icon) {
            var chat = document.getElementById('chat').value;
            document.getElementById('chat').value = chat + icon;
            $("#chat").focus();
        }

        // -------------------清除訊息-------------------
        function clearMessage() {
            $("#chatBox").empty();
        }


        // -------------------jQuery-UI-------------------
        $(function () {
            $("#accordion").accordion({
                collapsible: true,
                active: false,
                heightStyle: "content"
            });
        });

        $(function () {
            $("#draggable").draggable();
        });

    </script>
</head>

<body>


<div class='list' id='onlineList'>
    <h1 style='font-size: 20px;font-weight: bold'>online list</h1>
    <small><span>Online People : </span><span id='numOfOnline' style='color: red'></span></small>
    <div class='mlist' id='list_<?php echo $member->id ?>'><input class='myname' id='<?php echo $member->id ?>'
                                                                  name='<?php echo $member->name ?>'
                                                                  value='<?php echo $member->name ?>' readonly>
        <div class='mlist' id='memberList'></div>
    </div>
    <div class='mlist' id='onlineList'></div>

</div>
<a href="logout.php"> Logout </a>


<div class="chatBox" id="chatBox">

</div>

<div class="chatArea">
    <button type="button" class="bt2" id="bt2" onclick="clearMessage()"> clear message</button>
    <br>
    <input type="text" name="chat" id="chat" onkeypress="if (event.keyCode==13){ sendMessage(this.value);}">
    <button type="button" id="bt1" onclick="sendMessage()" style="margin-bottom: 5px"> >></button>
    <br>
</div>

<!--<div id="draggable" class="ui-widget-content c">-->
<div class="faceIcon " id="accordion">

    <h3>Face Icon 😀 </h3>
    <div class="face" id="face">
    </div>
</div>
<!--</div>-->
<!--<div>-->
<!--    <input id="debug">-->
<!---->
<!--</div>-->
</body>
</html>