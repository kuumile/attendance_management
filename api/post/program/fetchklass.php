<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$result = $post->getKlass();

if ($result->num_rows < 1) {
    echo json_encode(['result' => 'norecords', 'message' => 'No records found']);
} else {
    $post_arr = array();
    while ($row = $result->fetch_assoc()) {
        extract($row);
        $post_items = array(
            'kid' => $kid,
            'kname' => $klass_name,
            'pid' => $pid
        );
        array_push($post_arr, $post_items);
    }
    echo json_encode($post_arr);
}
