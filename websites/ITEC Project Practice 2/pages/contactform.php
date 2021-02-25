<?php


if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $mailTo = "brandon.davies001@gmail.com";
    $headers = "From:" .$mailFrom;
    $txt = "You have recieved and email from " .$name. ".\n\n".$message;



    mail($mailTo,$tel,$txt, $headers);
    header("Location: index.php?maildsend");

}



?>