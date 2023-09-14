<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->sbjid = $_POST['sbj'];

$result = $post->getSubject();
if ($result->num_rows < 1) {

} else {
    $rows = $result->fetch_assoc();
    extract($rows);
    $post_items = array(
        'sbj' => $sbj,
        'code' => $code,
        'subject' => $subject,
        'program' => $program
    );
    echo json_encode($post_items);
}