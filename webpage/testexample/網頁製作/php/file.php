<?php 
include("connect.php");
$sql = "INSERT INTO `mesboard`(`name`, `title`,`messages`) VALUES ('$_POST[name]','$_POST[title]','$_POST[content]')"; 

mysqli_query($link, $sql);
    header("location:index.php")
?>