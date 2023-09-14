<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$post->program = $_POST['program'];
$pid = ($_POST['pid'] ?? '');
$post->pid = $pid;
if (empty($pid)) {
    $checkResult = $post->checkProgram();
    if ($checkResult->num_rows < 1) {
        $result = $post->addProgram();
        if ($result) {
            echo json_encode(['result' => 'success', 'message' => 'Program added successfully']);
        } else {
            echo json_encode(['result' => 'error', 'message' => 'Program adding failed']);
        }
    } else {
        echo json_encode(['result' => 'success', 'message' => 'Program already added']);
    }
} else {
    $result = $post->updateProgram();
    if ($result) {
        echo json_encode(['result' => 'success', 'message' => 'Program updated successfully']);
    } else {
        echo json_encode(['result' => 'error', 'message' => 'Program update failed']);
    }

}