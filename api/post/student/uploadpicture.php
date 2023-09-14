<?php
include "../../../config/Config.php";
include "../../../config/Post.php";

$database = new Config();
$db = $database->connect();

$post = new Post($db);


// File upload configuration
$targetDir = "../../../pictures/";
$imageLocation = "pictures/";
$allowTypes = array('jpg', 'JPG', 'png', 'PNG', 'jpeg', 'JPEG', 'gif', 'GIF');

$statusMsg = $errorMsg = $insertValuesSQL = $errorUpload = $errorUploadType = '';
$fileNames = array_filter($_FILES['files']['name']);
if (!empty($fileNames)) {
    foreach ($_FILES['files']['name'] as $key => $val) {
        // File upload path
        $fileName = basename($_FILES['files']['name'][$key]);
        $targetFilePath = $targetDir . $fileName;
        $newFilePath = $imageLocation . $fileName;
        // Check whether file type is valid
        $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
        $fileTypeName = pathinfo($targetFilePath);
        if (in_array($fileType, $allowTypes)) {
            $idnumber = $fileTypeName['filename'];
            $post->idnumber = $idnumber;
            $post->picture = $newFilePath;
            $resultz = $post->checkStudent();
            if ($resultz->num_rows > 0) {
                if (file_exists($targetFilePath)) {
                    unlink($targetFilePath);
                }
                // Upload file to server
                if (move_uploaded_file($_FILES["files"]["tmp_name"][$key], $targetFilePath)) {
                    // Insert image file name into database
                    $insert = $post->uploadPictures();
                    if ($insert) {
                        echo json_encode(['result' => 'success', 'message' => 'Files are uploaded successfully ' . $errorMsg]);
                    } else {
                        echo json_encode(['result' => 'error', 'message' => 'Sorry, there was an error uploading your file.']);
                    }
                } else {
                    $errorUpload .= $_FILES['files']['name'][$key] . ' | ';
                    echo json_encode(['result' => 'error', 'message' => 'Failed moving file! ' . $errorMsg]);
                }
            }
        } else {
            $errorUploadType .= $_FILES['files']['name'][$key] . ' | ';
            echo json_encode(['result' => 'error', 'message' => 'Wrong file Type! ' . $errorUploadType]);
        }
    }

} else {
    echo json_encode(['result' => 'error', 'message' => 'Please select a file to upload.']);
}