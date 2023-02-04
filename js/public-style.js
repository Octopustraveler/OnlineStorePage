$(document).ready(function () {
  var index;
  $(".tags a").mouseenter(function () {
    index = $(".tags a").index(this);
    $(".tags a").eq(index).css({ color: "#a0138e" });
  });
  $(".tags a").mouseleave(function () {
    index = $(".tags a").index(this);
    $(".tags a").eq(index).css({ color: "#2a331d" });
  });

  $(".otherLink a i").mouseenter(function () {
    var color0 = "#4867aa";
    var color1 = "#1da1f2";
    var color2 = "#0881b0";
    if ((index = $(".otherLink a i").index(this)) === 0) {
      $(".otherLink a i").eq(index).css("color", color0);
    } else if ((index = $(".otherLink a i").index(this)) === 1) {
      $(".otherLink a i").eq(index).css("color", color1);
    } else if ((index = $(".otherLink a i").index(this)) === 2) {
      $(".otherLink a i").eq(index).css("color", color2);
    }
  });

  // 页脚图标鼠标浮动效果
  $(".otherLink a i").mouseleave(function () {
    $(".otherLink a i").eq(index).css("color", "");
  });
});
