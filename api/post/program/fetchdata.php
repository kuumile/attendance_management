<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$result = $post->getProgram();
if ($result->num_rows < 1) {
    echo json_encode(['result' => 'error', 'message' => 'No program registered']);
} else {
    $post_arr = array();
    while ($row = $result->fetch_array()) {
        extract($row);
        $post_items = array(
            'pid' => $pid,
            'program' => $program_name
        );
        array_push($post_arr, $post_items);
    }

    echo json_encode($post_arr);
}