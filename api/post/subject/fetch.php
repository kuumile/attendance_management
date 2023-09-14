<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$result = $post->fetchSubject();
if ($result->num_rows > 0) {
    $post_array = array();
    while ($row = $result->fetch_array()) {
        extract($row);
        $post->pid = $program;
        $getpro = $post->editProgram();
        $rows = $getpro->fetch_array();
        extract($rows);
        $post_items = array(
            'sbj' => $sbj,
            'subject' => $subject,
            'code' => $code,
            'program' => $program_name
        );
        array_push($post_array, $post_items);
    }
    echo json_encode($post_array);
} else {
    echo json_encode(['result' => 'error', 'message' => 'No records found']);
}