<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);
$post->pid = $_POST['programme'];
$post->kid = $_POST['klass'];
$row = 0;
$tempFileName = "../../../uploaded/" . time() . ".csv";
if (is_uploaded_file($_FILES["file"]['tmp_name'])) {
    $fileUploaded = move_uploaded_file($_FILES["file"]['tmp_name'], $tempFileName);

    if ($fileUploaded) {

        if (($handle = fopen($tempFileName, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if ($row > 0) {
                    $post->idnumber = $data[0];
                    $checkid = $post->checkStudent();
                    if ($checkid->num_rows > 0) {
                    } else {
                        $post->idnumber = $data[0];
                        $post->stname = $data[1];
                        $post->contact = $data[2];
                        $post->status = "Active";

                        try {
                            $results = $post->uploadStudent();
                        } catch (Exception $ex) {
                            printErrorMessage($ex->getMessage());
                        }
                    }
                }
                $row++;
            }
            echo json_encode(['result' => 'success', 'msg' => 'Students Uploaded Successfully']);
        }
    } else {
        echo json_encode(['result' => 'error', 'msg' => 'Failed to Upload Records']);
    }
}
