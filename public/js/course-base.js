define(['jquery', 'template', 'util', 'ckeditor', 'validate', 'form'], function ($, template, util, CKEDITOR) {
  util.select('/course/add');
  var csId = util.getId('cs_id');
  $.ajax({
    type: 'get',
    url: '/api/course/basic',
    dataType: 'json',
    data: {cs_id: csId},
    success: function (data) {
      if (data.code == 200) {
        data.result.opton = "课程添加";
        var html = template('tpl', data.result);
        $("#baseInfo").html(html);
        CKEDITOR.replace('brief');

        //处理二级分类的下拉联动操作
        $("#firstType").change(function () {
          var cgId = $(this).val();
          $.ajax({
            url: '/api/category/child',
            type: 'get',
            dataType: 'json',
            data: {cg_id: cgId},
            success: function (data) {
              var tpl = '{{each list}}' +
                '<option value="{{$value.cg_id}}">{{$value.cg_name}}</option> ' +
                '{{/each}}';
              var html = template.render(tpl, {list: data.result});
              $("#secondType").html(html);
            }
          })
        })

        $("#baseForm").validate({
          sendForm: false,
          valid: function () {
            $(this).ajaxSubmit({
                url: '/api/course/update/basic',
                type: 'POST',
                dataType: 'json',
                data: {cs_id : csId},
                success :function (data) {
                  location.href='/course/picture?cs_id='+data.result.cs_id;
               }
            })
          }
        })
      }
    }
  });
})