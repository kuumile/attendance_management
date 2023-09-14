<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$result = $post->getStudent();
if ($result->num_rows > 0) {
    $post_array = array();
    while ($row = $result->fetch_array()) {
        extract($row);
        $post->pid = $program;
        $recs = $post->editProgram();
        $rows = $recs->fetch_array();
        $proname = $rows['program_name'];
        $post->kid = $klass;
        $recss = $post->editKlass();
        $rowss = $recss->fetch_array();
        extract($rowss);
        $post_items = array(
            'stid' => $stid,
            'name' => $fullname,
            'program' => $proname,
            'klass' => $klass_name,
            'idnumber' => $idnumber,
            'contact' => $contact,
            'picture' => $picture,
            'status' => $status
        );
        array_push($post_array, $post_items);
    }
    echo json_encode($post_array);
} else {
    echo json_encode(['result' => 'error', 'message' => 'No record found']);
}