<?php
    include("connect.php");
    $sql = "UPDATE mesboard SET name = '$_POST[name]', title ='$_POST[title]', messages = '$_POST[content]' WHERE id = '$_POST[id]'";

    if (mysqli_query($link, $sql)) {
        echo "Record updated successfully";
    }
    else {
        echo "Error updating record: " . mysqli_error($link);
    }
    header("location:index.php");
    mysqli_close($link);
?>
