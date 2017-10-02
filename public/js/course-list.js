define(['jquery', 'template', 'util'], function ($, template, util) {
  util.select('/course/list')
  $.ajax({
    type: 'get',
    url: '/api/course',
    dataType: 'json',
    success: function (data) {
      if (data.code == 200) {
        var html = template('tpl', {list: data.result});
        $("#courseInfo").html(html)
      }
    }
  });
})