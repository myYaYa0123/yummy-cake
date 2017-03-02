<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $uname=$_REQUEST['uname'];
 $upwd=$_REQUEST['upwd'];
 $birthday=$_REQUEST['birthday'];
 $location=$_REQUEST['location'];
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM yummy_userinfo WHERE uname='$uname'";
$result=mysqli_query($conn,$sql);
 $output=['code'=>0,'msg'=>null,'pwd'=>null];

  if(($p=mysqli_fetch_assoc($result))!==null){
         $output=[
             'code'=>2001,
             'msg'=>'error',
             'pwd'=>'error'
             ];
  }
  else{
      $sql="INSERT INTO yummy_userinfo VALUES('$uname','$upwd','$birthday','$location')";
    	 mysqli_query($conn,$sql);
    	 $output=[
    	    'code'=>2000,
    		'msg'=>$uname,
            'pwd'=>$upwd
    		];
  }
echo json_encode($output);


 ?>