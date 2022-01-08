<?php

session_start();
include_once "PHP files/dataManager.php";

if (isset(  $_GET["createNewEntry"]) ) {
    
    createNewEntry();

    unset( $_GET["createNewEntry"] );
}