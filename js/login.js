$(document).ready(function () {
  var username = "admin";
  var userpassword = 123456;

  $("#submit-button").click(function () {
    if ($("#user").val() == username && $("#pwd").val() == userpassword) {
      alert("登录成功");
    } else {
      alert("账号或密码错误");
    }
  });
});
