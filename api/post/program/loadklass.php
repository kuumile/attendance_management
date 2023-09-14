<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->pid = $_POST['pid'];

$response = $post->loadKlass();
if ($response->num_rows > 0) {
    $post_array = array();
    while ($row = $response->fetch_array()) {
        extract($row);
        $post_items = array(
            'kid' => $kid,
            'kname' => $klass_name
        );
        array_push($post_array, $post_items);
    }
    echo json_encode($post_array);
}