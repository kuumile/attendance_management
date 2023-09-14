<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->pid = ($_POST["pid"] ?? '');
$result = $post->editProgram();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    extract($row);
    $post_items = array(
        'pid' => $pid,
        'program' => $program_name
    );
    echo json_encode($post_items);
}