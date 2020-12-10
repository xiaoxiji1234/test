let verifyCode = new GVerify({
    id: "codes",
    length: 4
});
jQuery.validator.addMethod('testCode', function(value) {
    let codeRes = verifyCode.validate(value)
    if (codeRes) {
        return true
    } else {
        return false
    }

}, '验证码不正确')
$('#login').validate({
    rules: {
        code: {
            required: true,
            testCode: true
        }
    },
    messages: {
        code: {
            required: '验证码不能为空'
        }
    },
    submitHandler: function() {
        pAjax({
            url: '../api/login.php',
            type: 'post',
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            }
        }).then(function(res) {
            if (JSON.parse(res).code) {
                alert('登录成功')
            } else {
                alert('用户名或密码错误');
                location.reload()
            }
        })
    }
})