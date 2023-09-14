<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->username = trim(($_POST['username']));

echo $post->checkUsername();
