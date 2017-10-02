define(['jquery', 'template', 'util', 'validate', 'form'], function ($, template, util, validate) {
  util.select('/teacher/list');
  var tcId = util.getId('tc_id');
  if (tcId) {
    //编辑
    $.ajax({
      url: '/api/teacher/edit',
      dataType: 'JSON',
      type: 'get',
      data: {tc_id: tcId},
      success: function (data) {
        if (data.code == 200) {
          data.result.option = "讲师编辑";
          var html = template('tpl', data.result);
          $("#addInfo").html(html);
          submitForm('/api/teacher/update')
        }
      }
    });
  } else {
    //添加
    var html = template('tpl', {option: '添加讲师'});
    $("#addInfo").html(html);
    submitForm('/api/teacher/add')
  }
//表单提交
  function submitForm(url) {
    $('#addForm').validate({
      sendForm: false,
      valid: function () {
        $(this).ajaxSubmit({
          url: url,
          dataType: 'JSON',
          success: function (data) {
            if (data.code == 200) {
              location.href='/teacher/list';
            }
          }
        });
      }
    })
  }
})