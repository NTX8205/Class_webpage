<?php
include("connect.php");


$sql = "DELETE FROM mesboard WHERE id="."$_GET[id]";

if ($con->query($sql) === TRUE) {
  echo "delete success";
} 
else {
  echo "failed" . $con->error;
}
header("location:index.php");
$con->close();
?>