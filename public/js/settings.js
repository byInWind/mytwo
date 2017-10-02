define(['jquery', 'template', 'ckeditor', 'validate', 'form', 'datepicker', 'language','region'], function ($, template,CKEDITOR) {
  $.ajax({
    type: 'get',
    url: '/api/teacher/profile',
    dataType: 'json',
    success: function (data) {
      if (data.code == 200) {
        var html = template('tpl', data.result);
        $("#selfInfo").html(html);

        CKEDITOR.replace('introduce');

        $('#pcd').region({
          url: '/public/assets/jquery-region/region.json'
        });
      }
    }
  });
})