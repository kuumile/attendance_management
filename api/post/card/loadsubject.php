<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->pid = $_POST['program'];
$result = $post->loadSubject();
if ($result->num_rows == 0) {

} else {
    $post_array = array();
    while ($row = $result->fetch_array()) {
        extract($row);
        $post_items = array(
            'sbjid' => $sbj,
            'subject' => $subject
        );
        array_push($post_array, $post_items);
    }
    echo json_encode($post_array);
}
