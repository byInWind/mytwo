define(['jquery', 'template', 'util'], function ($, template, util) {
  util.select('/teacher/list')
  //列表展示
  $.ajax({
    url: '/api//teacher',
    dataType: 'JSON',
    type: 'get',
    success: function (data) {
      console.log(data)
      var html = template('tpl', {list: data.result});
      $("#teacherInfo").html(html);
    }
  })
  //注销启用

  //模态框

})