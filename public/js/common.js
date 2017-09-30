define(['jquery', 'cookie'], function ($) {
  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });
  //退出登录
  $("#quit").click(function () {
    $.ajax({
      url: '/api/logout',
      type: 'POST',
      success: function () {
        location.href = '/main/login';
      }
    })
  })
//只有后端判断登录状态，此时输入配置的域名可以直接访问,so
  var flag = $.cookie('PHPSESSID');
  if (!flag && location.pathname != '/main/login') {
    location.href = '/main/login';
  }
  //ͷ头像与名字
  var loginInfo = $.cookie('loginInfo');
  loginInfo = loginInfo && JSON.parse(loginInfo);

  $(".aside .profile .avatar img").attr('src', loginInfo.tc_avatar);
  $(".aside .profile h4").html(loginInfo.tc_name)
})
