<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);
$post->idnumber = $_POST['cardid'];
$vid = $_POST['cardid'];
$post->subject = ($_POST['subject'] ?? '');
$post->uid = $_POST['uid'];
$post->title = $_POST['title'];
$title = $_POST['title'];
$result = $post->checkStudentStatus();
if ($result->num_rows > 0) {
//    $post_array = array();
    if ($title == 'Class Attendance') {

        $chk = $post->checkCompany();
        if ($chk) {
            $rox = $chk->fetch_array();
            extract($rox);
        }
        while ($row = $result->fetch_array()) {
            extract($row);
            $post->pid = $program;
            $recs = $post->editProgram();
            $rows = $recs->fetch_array();
            $proname = $rows['program_name'];
            $post->kid = $klass;
            $recss = $post->editKlass();
            $rowss = $recss->fetch_array();
            extract($rowss);
            $checkVerify = $post->checkCardVerification();
            if ($checkVerify->num_rows > 0) {

            } else {
                $post->status = $status;
                $post->saveCardVerification();
            }
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
//        array_push($post_array, $post_items);
        }
        echo json_encode($post_items);
    } else {
        $result = $post->checkStudentStatus();
        $crow = $result->fetch_array();
        extract($crow);
        $newstatus = $status;
        if ($status == 'Inactive') {
            echo json_encode(['result' => 'error', 'message' => 'This ID Number: ' . $vid . ' is ' . $newstatus . ', please contact the accountant']);
        } else {

            $result = $post->checkStudentStatus();
            $chk = $post->checkCompany();
            if ($chk) {
                $rox = $chk->fetch_array();
                extract($rox);
            }
            $post_array = 0;
            while ($row = $result->fetch_array()) {
                extract($row);
                $post->pid = $program;
                $recs = $post->editProgram();
                $rows = $recs->fetch_array();
                $proname = $rows['program_name'];
                $post->kid = $klass;
                $recss = $post->editKlass();
                $rowss = $recss->fetch_array();
                extract($rowss);
                $checkVerify = $post->checkCardVerification();
                if ($checkVerify->num_rows > 0) {

                } else {
                    $post->status = $status;
                    $post->saveCardVerification();
                }
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
//        array_push($post_array, $post_items);
                $post_array = $post_items;

            }
            echo json_encode($post_array);
        }
    }
} else {
    echo json_encode(['result' => 'error', 'message' => 'This ID Number: ' . $vid . ' is not Registered on the system']);
}