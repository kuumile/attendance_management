<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->stid = $_POST['stid'];

$result = $post->deleteStudent();
if ($result) {
    echo json_encode(['result' => 'success', 'message' => 'Student detected successfully']);
} else {
    echo json_encode(['result' => 'error', 'message' => 'Student not detected']);
}