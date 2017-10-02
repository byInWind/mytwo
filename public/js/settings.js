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
        //表单
        $("#setInfo").validate({
          sendForm: false,
          valid: function () {
            var hometown = '';
            var p = $("#p").find('option:selected').text();
            var c = $("#c").find('option:selected').text();
            var d = $("#d").find('option:selected').text();
            hometown = p + '|' + c + '|' + d;
            //富文本无法更改，需要用ckeditor的方法更新富文本内容
            for (var instance in CKEDITOR.instances) {
              CKEDITOR.instances[instance].updateElement();
            }
            $(this).ajaxSubmit({
              url: '/api/teacher/modify',
              dataType: 'json',
              data: {tc_hometown: hometown},
              success: function (data) {
                if (data.code == 200) {
                  location.reload();
                }
              }
            })
          }
        })
      }
    }
  });
})