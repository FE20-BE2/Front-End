<?php
    header("Access-Control-Allow-Origin: *");

    // Allow specific HTTP methods (POST, GET, etc.)
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    
    // Allow specific headers (Content-Type, etc.)
    header("Access-Control-Allow-Headers: Content-Type");
    
    // Allow credentials (cookies, authorization headers, etc.) to be included in the request
    header("Access-Control-Allow-Credentials: true");
    
    // Set the response content type to JSON
    header("Content-Type: application/json");
    
    // Check if the request method is OPTIONS (preflight request)
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
    
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    include 'conn.php';
    
    header('Content-Type: application/json');

    try {
        // Create a new PDO instance to establish the database connection
        $conn = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        // Prepare and execute the SELECT statement
        $stmt = $conn->prepare("SELECT email, username, password, validation FROM users");
        $stmt->execute();
    
        // Fetch all the rows from the result as an associative array
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        // Close the database connection
        $conn = null;
    
        // Return the user data as JSON response
        echo json_encode($users);
    
    } catch (PDOException $e) {
        // Return a server error response if there's any database connection issue
        http_response_code(500);
        echo json_encode(['message' => 'Failed to fetch user data.']);
    }
?>