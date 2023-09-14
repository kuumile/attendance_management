<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->stid = $_POST['stid'];

$result = $post->editStudent();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    extract($row);
    $post_items = array(
        'stid' => $stid,
        'name' => $fullname,
        'program' => $program,
        'klass' => $klass,
        'idnumber' => $idnumber,
        'contact' => $contact,
        'status' => $status
    );
    echo json_encode($post_items);
}
