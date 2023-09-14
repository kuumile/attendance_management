<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);
$post->stid = ($_POST['stid'] ?? '');

$results = $post->editStudent();
if ($results->num_rows > 0) {
    $rowc = $results->fetch_array();
    extract($rowc);
    if ($status == "Active") {
        $status = "Inactive";

    } elseif ($status == "Inactive") {
        $status = "Active";

    }
    $post->stid = ($_POST['stid'] ?? '');
    $post->status = $status;
    $resultz = $post->changeStatus();
    //if ($resultz) {
    $post->pid = $program;
    $post->kid = $klass;
    $resultx = $post->fetchStudents();

    if ($resultx->num_rows > 0) {
        $array = array();
        while ($row = $resultx->fetch_assoc()) {
            extract($row);

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
                'status' => $status,
                'dor' => $dor
            );
            array_push($array, $post_items);


        }
        echo json_encode($array);
    } else {
        echo json_encode(['result' => 'error', 'message' => 'No records found']);
    }
    //}

}