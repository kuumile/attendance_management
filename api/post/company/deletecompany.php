<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->cid = $_POST['cid'];

$result = $post->deleteCompany();
if ($result) {
    echo json_encode(['result' => 'success', 'message' => 'Company deleted successfully']);
} else {
    echo json_encode(['result' => 'error', 'message' => 'Error deleting company']);
}