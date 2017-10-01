define(['jquery', 'template', 'util', 'bootstrap'], function ($, template, util) {
  util.select('/teacher/list')
  //列表展示
  $.ajax({
    url: '/api/teacher',
    dataType: 'JSON',
    type: 'get',
    success: function (data) {
      var html = template('tpl', {list: data.result});
      $("#teacherInfo").html(html);
      //ajax是异步的，so展示成功后再做操作，不是并列关系
      //注销启用
      $('.startOrStop').click(function () {
        var tcId = $(this).parent('td').attr('data-id');
        var status = $(this).attr('data-status');
        var that = this;
        $.ajax({
          url: '/api/teacher/handle',
          dataType: 'JSON',
          type: 'POST',
          data: {tc_id: tcId, tc_status: status},
          success: function (data) {
            if (data.code == 200) {
              $(that).attr('data-status', data.result.tc_status);
              if (data.result.tc_status == 1) {
                $(that).text('启用')
              } else {
                $(that).text('注销')
              }
            }
            //var html = template('tpl2', {list: data.result});
            //$("#teacherInfo").html(html);
          }
        })
      })
      //查看
      $('.looks').click(function () {
        var tcId = $(this).parent('td').attr('data-id');
        $.ajax({
          url: '/api/teacher/view',
          dataType: 'JSON',
          type: 'get',
          data: {tc_id: tcId},
          success: function (data) {
            if (data.code == 200) {
              var html = template('tpltwo', data.result);
              $("#modalInfo").html(html);
              $("#teacherModal").modal()
            }
          }
        })
      })
    }
  })
})