<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
//$post = new Post($db);

$result = $db->query("select * from student_account where status='Active'");
if ($result->num_rows > 0) {
    $total = $result->num_rows;

    echo json_encode(['result' => $total]);
} else {
    echo json_encode(['result' => 0]);
}
