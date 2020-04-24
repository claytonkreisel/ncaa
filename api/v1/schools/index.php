<?php

    global $conn;

    require_once '../../functions.php';

    connect();

    //Test for request type
    switch($_SERVER['REQUEST_METHOD']){

        //If GET (select/read)
        case 'GET':
            if(isset($_GET['school_id'])){
                $sql = 'SELECT schools.*, conferences.name as conference_name
                        FROM schools
                        INNER JOIN conferences ON schools.conference=conferences.id
                        WHERE schoools.id = ' . $conn->real_escape_string($_GET['school_id']) . ';';
            } elseif(isset($_GET['school_name'])){
                $sql = 'SELECT schools.*, conferences.name as conference_name
                        FROM schools
                        INNER JOIN conferences ON schools.conference=conferences.id
                        WHERE schools.name LIKE "%' . $conn->real_escape_string($_GET['school_name']) . '%" OR full_name LIKE "%' . $conn->real_escape_string($_GET['school_name']) . '%";';
            } else {
                response(false, 'Must provide school name or ID');
            }
            $results = $conn->query($sql);
            $schools = [];
            if($results->num_rows == 0) response(false, 'No school with that ID or school with that name');
            while($result = $results->fetch_assoc()){
                $schools[] = $result;
            }
            response(true, 'School(s) found', ['schools' => $schools]);
            break;

        //If POST (insert/create)
        case 'POST':
            break;

        //If DELETE (delete)
        case 'DELETE':
            break;

        //IF PATCH (update)
        case 'PATCH':
            break;
    }
