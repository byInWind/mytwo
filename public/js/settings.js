define(['jquery', 'template', 'ckeditor', 'validate', 'form', 'datepicker', 'language'], function ($, template,CKEDITOR) {
  $.ajax({
    type: 'get',
    url: '/api/teacher/profile',
    dataType: 'json',
    success: function (data) {
      if (data.code == 200) {
        var html = template('tpl', data.result);
        $("#selfInfo").html(html);
        CKEDITOR.replace('introduce')
      }
    }
  });
})