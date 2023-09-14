<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->kid = ($_POST['kid'] ?? '');

$reults = $post->editKlass();

if ($reults->num_rows > 0) {
    $row = $reults->fetch_array();
    extract($row);
    $post_items = array(
        'kid' => $kid,
        'pid' => $pid,
        'kname' => $klass_name
    );
    echo json_encode($post_items);
}