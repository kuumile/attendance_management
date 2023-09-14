<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);

$post->title = $_POST['title'];
$post->today = date('Y-m-d');

$result = $post->getTodaysVerification();

if ($result->num_rows > 0) {
    $array = array();
    while ($row = $result->fetch_assoc()) {
        extract($row);
        $post->sbjid = $row['subject'];
        $getsubject = $post->getsubject();
        $srow = $getsubject->fetch_array();
        extract($srow);
        $post->idnumber = $idnumber;
        $stresult = $post->checkStudent();
        $rows = $stresult->fetch_assoc();
        extract($rows);
        $post->pid = $program;
        $recs = $post->editProgram();
        $rowx = $recs->fetch_array();
        $proname = $rowx['program_name'];
        $post->kid = $klass;
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
            'subject' => $subject,
            'code' => $code,
            'status' => $status
        );
        array_push($array, $post_items);
    }
    echo json_encode($array);
} else {
    echo json_encode(['result' => 'error', 'message' => 'No records found']);
}