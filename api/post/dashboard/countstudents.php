<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$result = $post->getStudent();
if ($result->num_rows > 0) {
    $total = $result->num_rows;

    echo json_encode(['result' => $total]);
} else {
    echo json_encode(['result' => 0]);
}
