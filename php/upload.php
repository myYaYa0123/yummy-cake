<?php
  if (($_FILES['userfile']['type'] == 'image/gif')
    ||($_FILES['userfile']['type'] == 'image/jpeg')
    ||($_FILES['userfile']['type'] == 'image/pjpeg')) {
    if (!file_exists('../files/'.$_FILES['userfile']['name'])) {
      move_uploaded_file($_FILES['userfile']['tmp_name'],'../files/'.$_FILES['userfile']['name']);
    }
    echo $_SERVER['HTTP_REFERER'].'files/'.$_FILES['userfile']['name'];
  }
  print_r($_FILES['userfile']);
?>
