<?php
include "../../../config/Connect.php";

$db = Database::getConnection();

//$post = new Post($db);

$search = ($_POST['searchx']);
$title = $_POST['title'];
$today = date('Y-m-d');

if (empty($_POST['searchx'])) {
    echo json_encode(['search' => 'empty']);
} else {

    $result = $db->query("select * from st_cardtb where title = '$title' and vdate = '$today' and idnumber like '%$search%' order by idnumber");

    if ($result->num_rows > 0) {
        $array = array();
        while ($row = $result->fetch_assoc()) {
            extract($row);
            $record = $db->query("select * from student_account where idnumber ='$idnumber'");
            $rec = $record->fetch_array();
            extract($rec);
            $sub = $db->query("select * from subjecttb where sbj = '$subject'");
            $srow = $sub->fetch_assoc();
            extract($srow);
            $prog = $db->query("select * from program where pid = '$program'");
            $prow = $prog->fetch_assoc();
            extract($prow);
            $kname = $db->query("select * from klass where kid = '$klass'");
            $krow = $kname->fetch_assoc();
            extract($krow);
            $post_items = array(
                'stid' => $stid,
                'name' => $fullname,
                'program' => $program_name,
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
}