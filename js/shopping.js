$(document).ready(function () {
  var num = parseInt($("#num").val());
  // console.log(typeof num);
  var price = parseFloat($("#calcu").html());
  // console.log(price);
  $("#minus").click(function () {
    if (num > 1) {
      $("#num").val(--num);
      var totalspend = parseFloat(num * price).toFixed(2);
      $("#calcu").html(totalspend);
    } else {
      alert("已经是最小数量了");
    }
  });

  $("#plus").click(function () {
    $("#num").val(++num);

    var totalspend = parseFloat(num * price).toFixed(2);
    $("#calcu").html(totalspend);
  });
});
