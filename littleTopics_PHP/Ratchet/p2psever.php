<?php
include_once 'Chat.php';
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

$room=$_REQUEST['room'];
//use MyApp\Chat;

require dirname(__DIR__) . '/Ratchet/vendor/autoload.php';
$port=8080;
$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
        )
    ),
    $port+$room
);

$server->run();


header('Location:wstest2.php');