define(['jquery', 'template', 'util', 'validate', 'form'], function ($, template, util) {
  util.select('/course/add');
  $("#creatInfo").validate({
    sendForm: false,
    valid: function () {
      $(this).ajaxSubmit({
        url: '/api/course/create',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
          if (data.code == 200) {
            location.href = '/course/base?cs_id=' + data.result.cs_id;
          }
        }
      })
    },
    description: {
      cs_name: {
        required: "课程不能为空"
      }
    }
  })
})