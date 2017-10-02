define(['jquery', 'template', 'ckeditor', 'validate', 'form', 'datepicker', 'language', 'region', 'uploadify'], function ($, template, CKEDITOR) {
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
        //图片上传
        $("#upfile").uploadify({
          swf: '/public/assets/uploadify/uploadify.swf',
          width: 120,
          height: 120,
          buttonText: '',
          //接口地址
          uploader: '/api/uploader/avatar',
          //        //请求参数tc_avatar
          fileObjName: 'tc_avatar',
          itemTemplate: '<span></span>',
          onUploadSuccess: function (a, b) {
            var obj = JSON.parse(b);
            $(".preview img").attr('src', obj.result.path);
          }
        });
      }
    }
  });
})