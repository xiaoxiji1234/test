<?php


    # 链接数据库
    $con = mysqli_connect('localhost','root','123456','user');

    $username=$_POST['username'];
    $tel=$_POST['tel'];
    $password=$_POST['password'];
  
    # 设置SQL语句
    $sql = "INSERT INTO `user`(`id`, `username`, `password`, `tel`) VALUES (NULL,'$username','$password','$tel')";

    # 执行SQL语句
    $res = mysqli_query($con,$sql);

    
    if(!$res){
        die('error'.mysqli_error($con));
    };
    print_r(json_encode(array('code'=>true,'msg'=>'添加成功')));
    
    
   
  
   
  
?>