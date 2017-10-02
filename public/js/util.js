define(['jquery'], function () {
    return {
      select: function (path) {
        $(".navs li a[href ='" + path + "']").addClass("active").closest('ul').show();
      },
      getId: function (key) {
        var str = location.search.substr(1);
        var tcId = null;
        if (str) {
          var x = str.split('&');
          $.each(x, function (i, item) {
            var arr = item.split('=');
            if (arr[0] == key) {
              tcId = arr[1];
              return false;
            }
          });
        }
        return tcId;
      }
    }
  }
)