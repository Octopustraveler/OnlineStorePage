$(document).ready(function(){
    // 记录鼠标浮动目标的坐标
    var index;
    $(".index-img").mouseenter(function(){
        index = $(".index-img").index(this);
    $(".img-animate").eq(index).animate({height:'toggle'},260);
    })

    $(".index-img").mouseleave(function(){
        $(".img-animate").eq(index).animate({height:'toggle'},260);
    })
})
