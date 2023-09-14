<?php
include "../../../config/Config.php";
include "../../../config/Post.php";
$database = new Config();
$db = $database->connect();

$post = new Post($db);
$response = $post->getUsers();
if ($response->num_rows > 0) {
    $post_arr = array();
    while ($row = $response->fetch_array()) {
        extract($row);
        $post_items = array(
            'uid' => $uid,
            'username' => $username,
            'name' => $name,
            'email' => $email
        );
        array_push($post_arr, $post_items);
    }

    echo json_encode($post_arr);
} else {
    echo json_encode(['result' => 'not_found']);
}