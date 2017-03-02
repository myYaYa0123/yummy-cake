<?php
if($_REQUEST['data.pimg']){
  $pimg=$_REQUEST['data.pimg'];
}
else if($_REQUEST['data.ptitle']){
      $ptitle=$_REQUEST['data.ptitle'];
}
else if($_REQUEST['data.pname']){
       $pname=$_REQUEST['data.pname'];
 }
 else if($_REQUEST['data.price']){
        $price=$_REQUEST['data.price'];
  }
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT pid FROM yummy_products WHERE pimg= '$pimg' OR ptitle='$ptitle' OR pname='$pname' OR price='$price'";
$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_assoc($result)){
    $output=$row;
}
echo json_encode($output);
?>
