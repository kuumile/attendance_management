<?php
include "../../../config/Config.php";
include "../../../config/Post.php";
$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->uid = $_POST['uid'];


echo $post->deleteUser();
