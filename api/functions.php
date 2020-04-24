<?php

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    function connect(){
        global $conn;
        //See if key was sent with request
        if(!isset($_REQUEST['key'])) die(json_encode(['success' => false, 'msg' => 'No API Key sent']));

        //Connect to DB
        $conn = new mysqli('localhost', 'root', 'root', 'college-sports', 10011);
        if($conn->connect_error){
            die(json_encode(['success' => false, 'msg' => 'Connection not established']));
        }

        //Make Query to test API Key
        $results = $conn->query('SELECT * FROM api_keys WHERE `api_key` = "'.$conn->real_escape_string($_REQUEST['key']).'"');

        //Test API Key search in DB
        if(!$results || $results->num_rows == 0) die(json_encode(['success' => false, 'msg' => 'Invalid API Key']));

        //Return Success
        return true;
    }

    function response($success, $message, $extras = false){
        $data = [];
        if($extras){
            foreach($extras as $ek => $ev){
                $data[$ek] = $ev;
            }
        }
        die(json_encode([
            'success' => $success,
            'message' => $message,
            'data' => $data
        ]));
    }
