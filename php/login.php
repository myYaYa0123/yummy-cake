<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $uname=$_REQUEST['uname'];
 $upwd=$_REQUEST['upwd'];

 $conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
 $sql="SET NAMES UTF8";
 mysqli_query($conn,$sql);
 $sql="SELECT * FROM yummy_userinfo WHERE uname='$uname' AND upwd='$upwd'";
 $result=mysqli_query($conn,$sql);

 $output=['code'=>0,'msg'=>null];
 if(($p=mysqli_fetch_assoc($result))!==null){
	 $output=[
        	'code'=>1001,
     	'msg'=>$uname,
     	'pwd'=>$upwd
     	];
 }
 else{
    $output=[
        'code'=>1000,
        'msg'=>'error'];
 }
 echo json_encode($output);

