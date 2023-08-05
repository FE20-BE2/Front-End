<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");
    
    $host = 'localhost';
    $dbName = 'tineijer_user';
    $username = 'tineijer_userPass';
    $password = 'Du~O[9G[afu{';
    
    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }
?>