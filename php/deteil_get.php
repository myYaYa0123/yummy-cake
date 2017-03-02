<?php
header('Content-type:application/json;charset=UTF-8');
$pid=$_REQUEST['pid'];
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM yummy_products WHERE pid= '$pid'";
$result=mysqli_query($conn,$sql);
$output = [];
while($row=mysqli_fetch_assoc($result)){
    $output[]=$row;
}
echo json_encode($output);
?>
