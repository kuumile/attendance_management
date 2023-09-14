<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$result = $post->checkCompany();

if ($result->num_rows > 0) {
    $row = $result->fetch_array();
    extract($row);
    $post_items = array(
        'cname' => $company_name,
        'email' => $company_email,
        'logo' => $company_logo,
        'cid' => $cid
    );
    echo json_encode($post_items);
} else {
    echo json_encode(['error' => 'No records found']);
}