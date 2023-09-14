<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->sbjid = ($_POST['sbjid'] ?? '');
$post->code = $_POST['code'];
$post->subject = $_POST['subject'];
$post->pid = $_POST['programme'];
$sbjid = ($_POST['sbjid'] ?? '');
if (empty($sbjid)) {
    $checksub = $post->checkSubject();
    if ($checksub->num_rows > 0) {
        echo json_encode(['result' => 'error', 'message' => 'Subject Already registered']);
    } else {
        $addsubject = $post->addSubject();
        if ($addsubject) {
            echo json_encode(['result' => 'success', 'message' => 'Subject Saved Successfully']);
        } else {
            echo json_encode(['result' => 'error', 'message' => 'Subject not saved']);
        }
    }
} else {
    $results = $post->updateSubject();
    if ($results) {
        echo json_encode(['result' => 'success', 'message' => 'Subject Updated Successfully']);
    } else {
        echo json_encode(['result' => 'error', 'message' => 'Subject not Updated']);
    }
}