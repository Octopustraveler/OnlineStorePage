$(document).ready(function () {
  // 记录鼠标浮动目标的坐标
  var index;
  // 记录目标原始图片属性
  var orimg;
  // 记录新的图片属性
  var newimg;
  // 记录图片 images/shop 路径
  var front_path = "images/shop/";
  // 记录图片后缀
  var end_name = ".webp";

  // 鼠标进入动画开始
  $(".index-img").mouseenter(function () {
    index = $(".index-img").index(this);
    // 条幅浮动动画
    $(".img-animate").eq(index).animate({ height: "toggle" }, 260);

    // 对应图片改变效果
    // 获取完整图片 src
    orimg = $(".index-img").eq(index).children("img").attr("src");
    // 分割获取的路径字符串
    orimg = orimg.split("/");
    // 再细分出图片名
    orimg = orimg[2];
    orimg = orimg.split(".");
    orimg = orimg[0];
    // console.log(orimg);
    // 判断条件替换对应的图片
    switch (orimg) {
      case "01":
        newimg = "10";
        // newimg = (front_path + "10" + end_name);
        // $(".index-img").eq(index).children("img").attr("src",newimg);
        break;
      case "02":
        newimg = "20";
        break;
      case "03":
        newimg = "30";
        break;
      case "04":
        newimg = "40";
        break;
      case "05":
        newimg = "50";
        break;
      case "06":
        newimg = "60";
        break;
      case "07":
        newimg = "70";
        break;
      case "08":
        newimg = "80";
        break;
      case "09":
        newimg = "90";
        break;
      case "001":
        newimg = "100";
        break;
      case "002":
        newimg = "200";
        break;
      case "003":
        newimg = "300";
        break;
      default:
        console.log("error, this image name is not conclude this situation");
        break;
    } //判断结束
    newimg = front_path + newimg + end_name;
    $(".index-img").eq(index).children("img").attr("src", newimg);
  });

  // 鼠标离开动画结束
  $(".index-img").mouseleave(function () {
    $(".img-animate").eq(index).animate({ height: "toggle" }, 260);

    // 还原已经替换的图片
    orimg = front_path + orimg + end_name;
    $(".index-img").eq(index).children("img").attr("src", orimg);
  });
});
