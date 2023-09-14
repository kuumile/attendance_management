<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);
$post->pid = ($_POST['pid'] ?? '');
$post->kid = ($_POST['kid'] ?? '');

$result = $post->fetchStudents();

if ($result->num_rows > 0) {
    $array = array();
    while ($row = $result->fetch_assoc()) {
        extract($row);

        $post->pid = ($_POST['pid'] ?? '');
        $recs = $post->editProgram();
        $rowx = $recs->fetch_array();
        $proname = $rowx['program_name'];
        $post->kid = ($_POST['kid'] ?? '');
        $recss = $post->editKlass();
        $rowss = $recss->fetch_array();
        extract($rowss);
        $post_items = array(
            'stid' => $stid,
            'name' => $fullname,
            'program' => $proname,
            'klass' => $klass_name,
            'idnumber' => $idnumber,
            'picture' => $picture,
            'status' => $status,
            'dor' => $dor
        );
        array_push($array, $post_items);


    }
    echo json_encode($array);
} else {
    echo json_encode(['result' => 'error', 'message' => 'No records found']);
}

