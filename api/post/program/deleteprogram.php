<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->pid = ($_POST["pid"] ?? '');

$result = $post->deleteProgram();

if ($result) {
    echo json_encode(['result' => 'success', 'message' => 'Program deleted successfully']);
} else {
    echo json_encode(['result' => 'error', 'message' => 'Program not deleted']);
}