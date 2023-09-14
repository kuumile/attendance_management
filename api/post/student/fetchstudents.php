<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);
$post->pid = $_POST['program'];
$post->kid = $_POST['klass'];

$result = $post->fetchStudents();
if ($result->num_rows > 0) {
    $post_array = array();
    $post->pid = $_POST['program'];
    $recs = $post->editProgram();
    $rows = $recs->fetch_array();
    $proname = $rows['program_name'];
    $post->kid = $_POST['klass'];
    $recss = $post->editKlass();
    $rowss = $recss->fetch_array();
    extract($rowss);
    $chk = $post->checkCompany();
    if ($chk) {
        $rox = $chk->fetch_array();
        extract($rox);
    }
    while ($row = $result->fetch_array()) {
        extract($row);
        $post_items = array(
            'stid' => $stid,
            'name' => $fullname,
            'program' => $proname,
            'klass' => $klass_name,
            'idnumber' => $idnumber,
            'picture' => $picture,
            'company' => $company_name,
            'logo' => $company_logo,
            'status' => $status
        );
        array_push($post_array, $post_items);
    }
    echo json_encode($post_array);
}