let verifyCode = new GVerify({
    id: "codes",
    length: 4
});



jQuery.validator.addMethod('testTel', function(value) {
    let reg = /^1[3,5,6,7,8]\d{9}$/
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}, '手机号格式不正确')
jQuery.validator.addMethod('testCode', function(value) {
    let codeRes = verifyCode.validate(value)
    if (codeRes) {
        return true
    } else {
        return false
    }

}, '验证码不正确')
jQuery.validator.addMethod('testCheck', function(value) {
    if (value == 'on') {
        return true
    } else {
        return false
    }

}, '需要同意协议')
$('#resiger').validate({
    rules: {
        username: {
            required: true,
            maxlength: 14,
            remote: {
                url: "../api/getName.php", //后台处理程序
                type: "post", //数据发送方式
                dataType: "json", //接受数据格式   
                data: { //要传递的数据
                    username: function() {
                        return $("#username").val()
                    }
                }
            }
        },
        tel: {
            required: true,
            testTel: true
        },
        password: {
            required: true,
            maxlength: 14,
            minlength: 8
        },
        code: {
            required: true,
            testCode: true
        },
        check: {
            testCheck: true
        }
    },
    messages: {
        username: {
            required: '用户名不能为空',
            maxlength: '用户名的长度最长不超过14位',
            remote: '用户名已存在，请重新输入'
        },
        tel: {
            required: '手机号不能为空'
        },
        password: {
            minlength: '密码的长度最短不少于8位',
            maxlength: '密码的长度最长不超过14位',
            required: '密码不能为空'
        },
        code: {
            required: '验证码不能为空'
        }
    },
    submitHandler: function() {
        pAjax({
            url: '../api/addUser.php',
            type: 'post',
            data: {
                username: $("#username").val(),
                password: $("#password").val(),
                tel: $("#tel").val()

            }
        }).then(function(res) {
            if (JSON.parse(res).code) {
                alert('注册成功')

            } else {
                console.log("数据有错误");
            }
        })
    }

})