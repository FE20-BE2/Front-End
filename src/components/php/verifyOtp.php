<?php
// Assuming you have a database connection already established.
// Replace 'your_db_host', 'your_db_username', 'your_db_password', and 'your_db_name' with your actual database credentials.

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
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the request data
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Extract data fields
    $email = $data['email'];
    $validation = $data['validation'];

    // Insert data into the database
    $sql = "UPDATE users SET validation = $validation WHERE email = '$email'";

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
