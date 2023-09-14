<?php
include "../../../config/Config.php";
include "../../../config/Login.php";

$database = new Config();
$db = $database->connect();

$logs = new Login($db);

$logs->username = mysqli_real_escape_string($db, $_POST['username']);
$logs->password = mysqli_real_escape_string($db, $_POST['password']);

if ($logs->getLogin()) {
    $logs->getLog();
}
