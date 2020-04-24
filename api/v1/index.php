<?php

    require_once '../functions.php';

    //Test the connection
    if(connect()) response(true, 'Connection Successful', ['code' => 'CONNECT_SUCCESS']);

?>
