<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();
$post = new Post($db);

$imagename = $_FILES['file']['name'];
//$allowed_extension  = array('png','jpeg','jpg','gif');
$location = "logo/" . $imagename;
$path = "../../../logo/" . $imagename;
$extension = pathinfo($path, PATHINFO_EXTENSION);
$extension = strtolower($extension);

$results = $post->checkCompany();
if ($results->num_rows < 1) {
    if (move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
        $post->company_logo = $location;
        $post->company_name = $_POST['cname'];
        $post->company_email = $_POST['email'];
        $result = $post->addCompany();
        if ($result) {
            echo json_encode(['message' => 'Company added successfully']);
        } else {
            echo json_encode(['message' => 'Company registration failed']);
        }
    } else {
        echo json_encode(['message' => 'Error adding company logo']);
    }
} else {

    if (move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
        $post->company_logo = $location;
        $post->company_name = $_POST['cname'];
        $post->company_email = $_POST['email'];
        $result = $post->updateCompany();
        if ($result) {
            echo json_encode(['message' => 'Company updated successfully']);
        } else {
            echo json_encode(['message' => 'Company registration update failed']);
        }
    } else {
        echo json_encode(['message' => 'Error adding company logo']);
    }
}






