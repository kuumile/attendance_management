<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$kid = ($_POST['kid'] ?? '');
$post->klass_name = mysqli_real_escape_string($db, $_POST['kname']);
$post->pid = $_POST['pid'];

if (empty($kid)) {
    $result = $post->checkKlass();
    if ($result->num_rows < 1) {
        $results = $post->addKlass();
        if ($result) {
            echo json_encode(['result' => 'success', 'message' => 'Class created successfully']);
        } else {
            echo json_encode(['result' => 'error', 'message' => 'class creation failed']);
        }
    } else {
        echo json_encode(['result' => 'error', 'message' => 'Class already exists']);
    }
} else {
    $results = $post->updateKlass();
    if ($results) {
        echo json_encode(['result' => 'success', 'message' => 'Class updated successfully']);
    } else {
        echo json_encode(['result' => 'error', 'message' => 'class update failed']);
    }
}