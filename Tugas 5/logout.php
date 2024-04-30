<?php

session_start();
$_SESSION = [];
session_unset();
session_destroy();

header("Location: http://localhost/platform/Tugas%205/login.php");
exit;

?>