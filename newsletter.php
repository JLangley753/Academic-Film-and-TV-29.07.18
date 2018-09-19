<?php
  $emailadd = $_POST['email'];

  $email_from = 'yourname@yourwebsite.com';

  $email_subject = 'Newsletter Request';

  $email_body = "Hi Tim, this person wants to be added to your mailing list. $emailadd".

  $to = "JLangley753@gmail.com";

  mail($to, $email_subject,$email_body);
?>
