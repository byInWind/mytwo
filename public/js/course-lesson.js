define(['jquery', 'template', 'util', 'bootstrap', 'form'], function ($, template, util) {

  //设置导航高亮
  util.select('/course/add');
  //获取课程ID
  var csId = util.getId('cs_id');
  //响应
  $.ajax({
    url: '/api/course/lesson',
    type: 'get',
    dataType: 'json',
    data: {cs_id: csId},
    success: function (data) {
      if (data.code == 200) {
        //渲染模板
        var html = template('lessonTpl', data.result);
        $("#lessonInfo").html(html);
      }
    }
  })
})