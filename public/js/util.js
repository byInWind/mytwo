define(['jquery'],function () {
    return {
      select: function (path) {
        $(".navs li a[href ='"+path+"']").addClass("active").closest('ul').show();
      },
      getId:function () {
       // return:Id;
      }
    }
})