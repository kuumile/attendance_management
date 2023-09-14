<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);
$post->uid = ($_POST['uid'] ?? "");
$post->username = mysqli_real_escape_string($db, (trim($_POST['username']) ?? ""));
$post->password = mysqli_real_escape_string($db, ($_POST['password'] ?? ""));
$post->uname = mysqli_real_escape_string($db, ($_POST['name'] ?? ""));
$post->email = mysqli_real_escape_string($db, ($_POST['email'] ?? ""));

$post->userID();
$validuid = $post->userID();
if (empty($validuid)) {
    $post->dupUsername();
    $result = $post->dupUsername();
    if ($result->num_rows > 0) {
        echo json_encode(['message' => 'Username already exists']);
    } else {
        echo $post->addUser();
    }
} else {
    $post->updateUser();
    $result = $post->updateUser();
    if ($result) {
        echo $post->updateUser();
    }
}


