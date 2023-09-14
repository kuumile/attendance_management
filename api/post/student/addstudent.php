<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$imagename = $_FILES['file']['name'];
//$allowed_extension  = array('png','jpeg','jpg','gif');
$location = "pictures/" . $imagename;
$path = "../../../pictures/" . $imagename;
$extension = pathinfo($path, PATHINFO_EXTENSION);
$extension = strtolower($extension);
$post->idnumber = mysqli_real_escape_string($db, $_POST['idnumber']);
$stid = mysqli_real_escape_string($db, $_POST['stid']);
if (empty($stid)) {
    $check = $post->checkStudent();
    if ($check->num_rows < 1) {
        if (move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
            $post->stname = mysqli_real_escape_string($db, $_POST['stname']);
            $post->pid = mysqli_real_escape_string($db, $_POST['programme']);
            $post->idnumber = mysqli_real_escape_string($db, trim($_POST['idnumber']));
            $post->contact = mysqli_real_escape_string($db, $_POST['contact']);
            $post->status = mysqli_real_escape_string($db, $_POST['status']);
            $post->kid = mysqli_real_escape_string($db, $_POST['klass']);
            $post->picture = $location;
            $result = $post->addStudent();
            if ($result) {
                echo json_encode(['result' => 'success', 'message' => 'Student added successfully']);
            } else {
                echo json_encode(['result' => 'error', 'message' => 'Student not added successfully']);
            }
        }
    } else {
        echo json_encode(['result' => 'error', 'message' => 'Student Index Number already exists']);
    }
} else {
    if (move_uploaded_file($_FILES['file']['tmp_name'], $path)) {
        $post->stid = mysqli_real_escape_string($db, $_POST['stid']);
        $post->stname = mysqli_real_escape_string($db, $_POST['stname']);
        $post->pid = mysqli_real_escape_string($db, $_POST['programme']);
        $post->idnumber = mysqli_real_escape_string($db, trim($_POST['idnumber']));
        $post->contact = mysqli_real_escape_string($db, $_POST['contact']);
        $post->status = mysqli_real_escape_string($db, $_POST['status']);
        $post->kid = mysqli_real_escape_string($db, $_POST['klass']);
        $post->picture = $location;
        $result = $post->updateStudent();
        if ($result) {
            echo json_encode(['result' => 'success', 'message' => 'Student updated successfully']);
        } else {
            echo json_encode(['result' => 'error', 'message' => 'Student not updated successfully']);
        }
    }
}