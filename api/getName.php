<?php


    # 链接数据库
    $con = mysqli_connect('localhost','root','123456','user');

    $username=$_POST['username'];
  
    # 设置SQL语句
    $sql = "SELECT * FROM `user` WHERE `username`='$username'";

    # 执行SQL语句
    $res = mysqli_query($con,$sql);


    if(!$res){
        die('error'.mysqli_error($con));
    };
    $row=mysqli_fetch_assoc($res);
   if(!$row){
       print_r(json_encode(true));
   }else{
       print_r(json_encode(false));
    }
    
   
  
   
  
?>