<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->sbjid = $_POST['sbjid'];

$result = $post->deleteSubject();
if ($result) {
    echo json_encode(['result' => 'success', 'message' => 'Subject deleted successfully']);
} else {
    echo json_encode(['result' => 'error', 'message' => 'Subject not deleted']);
}