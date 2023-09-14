<?php
include "../../../config/Config.php";
include "../../../config/Post.php";
$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->uid = $_POST['uid'];

$result = $post->editUsers();
if ($result->num_rows > 0) {
    $row = $result->fetch_array();
    extract($row);
    $post_item = array(
        'uid' => $uid,
        'username' => $username,
        'name' => $name,
        'email' => $email,
        'password' => $password
    );
    array_push($post_item);
    echo json_encode($post_item);
}