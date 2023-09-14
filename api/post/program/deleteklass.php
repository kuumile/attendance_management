<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->kid = $_POST['kid'];

if ($post->deleteKlass()) {
    echo json_encode(['result' => 'success', 'message' => 'Class deleted successfully']);
} else {
    echo json_encode(['result' => 'error', 'message' => 'Class deleting failed']);
}