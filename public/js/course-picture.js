define(['jquery', 'template', 'util', 'uploadify', 'jcrop', 'form'], function ($, template, util) {
  //设置默认选中的导航
  util.select('/course/add');

  var csId = util.getId('cs_id');
  $.ajax({
    url: '/api/course/picture',
    type: 'get',
    dataType: 'JSON',
    data: {cs_id: csId},
    success: function (data) {
      //模板渲染
      var html = template('tpl', data.result);
      $("#pictureInfo").html(html);
      var nowCrop = null;// 保证裁切实例的唯一性

      //图片上传
      $("#myfile").uploadify({
        width: 80,
        height: 'auto',
        //设置进度条为空
        itemTemplate: '<span></span>',
        buttonText: '选择图片',
        buttonClass: 'btn btn-success btn-sm',
        swf: '/public/assets/uploadify/uploadify.swf',
        //后台接口
        uploader: '/api/uploader/cover',
        //传递的课程图片名称
        fileObjName: 'cs_cover_original',
        //额外传递的参数
        formData: {cs_id: csId},
        onUploadSuccess: function (a, b) {
          var obj = JSON.parse(b);
          $(".preview img").html('');
          $('.preview img').attr('src', obj.result.path);
          cropImg();
          $("#cropBtn").text('保存图片').attr('data-flag', true)
        }
      });

      //选中图片
      var img = $(".preview img")
      ////图片裁切
      $("#cropBtn").click(function () {
        var flag = $(this).attr('data-flag');
        if (flag) {
          //把裁切后的图片提交
          $('#cropForm').ajaxSubmit({
            url: '/api/course/update/picture',
            type: 'post',
            data: {cs_id: csId},
            dataType: 'json',
            success: function (data) {
              if (data.code == 200) {
                location.href = '/course/lesson?cs_id=' + data.result.cs_id;
              }
            }
          })
        } else {
          //第一次点击没有值
          $(this).text('保存图片').attr('data-flag', true);
          //实现裁切功能
          cropImg();
        }
      });
      //封装一个独立方法实现图片裁切
      function cropImg() {
        img.Jcrop({
          aspectRatio: 2//(拖拽时的比例)
        }, function () {
          //启用缩略图预览
          //先清空里面的内容
          nowCrop && nowCrop.destroy();
          nowCrop = this;
          $('.thumb').html('');
          this.initComponent('Thumbnailer', {width: 240, height: 120, mythumb: '.thumb'});
          //获取图片宽高
          var width = this.ui.stage.width;
          var height = this.ui.stage.height;

          //计算选取的数据
          var x = 0;
          var y = (height - width / 2) / 2;
          var w = width;
          var h = width / 2;
          //创建一个选区
          this.newSelection();
          this.setSelect([x, y, w, h]);
          // 设置缩略图的位置
          $('.jcrop-thumb').css({
            position : 'absolute',
            top :0,
            left :0
          })
          //监控选区变化
          img.parent().on('cropstart cropmove cropend', function (a, b, c) {
            //把移动后的位置记录下来传给表单
            var input = $("#cropForm").find('input');
            input.eq(0).val(c.x);
            input.eq(1).val(c.y);
            input.eq(2).val(c.w);
            input.eq(3).val(c.h);
          })
        });
      }
    }
  })
})