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

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the request data
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Validate and sanitize the data
    if (!isset($data['email']) || !isset($data['username']) || !isset($data['password']) || !isset($data['otp'])) {
        http_response_code(400); // Bad Request
        echo json_encode(array('success' => false, 'message' => 'Incomplete data.'));
        exit;
    }
    
    // Extract data fields
    $email = $data['email'];
    $username = $data['username'];
    $password = $data['password'];
    $otp = $data['otp'];

    // Insert data into the database
    $sql = "INSERT INTO users (email, username, password, otp, validation) VALUES ('$email', '$username', '$password', '$otp', 'false')";

    if ($conn->query($sql) === TRUE) {
        // Data inserted successfully
        $response = array(
            'success' => true,
            'message' => 'Account created successfully.'
        );
    } else {
        // Error occurred during data insertion
        $response = array(
            'success' => false,
            'message' => 'Error: ' . $conn->error
        );
    }

    // Return the response as JSON
    echo json_encode($response);
} else {
    // Invalid request method (Only POST is allowed)
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('success' => false, 'message' => 'Invalid request method.'));
}

// Close the database connection
$conn->close();
?>