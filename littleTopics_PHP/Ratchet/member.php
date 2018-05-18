<?php

class member
{
    private $cart;
    private $id, $name, $account, $password, $test;

    function __get($name)       //'account
    {
        return $this->$name;    //$this->account  $name不是 private的$name

    }

    function __set($name, $value)
    {
        $this->$name = $value;
    }

//    function setCart($cart){
////        return $cart;
//        $this->cart;
//    }

}