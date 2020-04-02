var tpl = '/tpl/renhe' ;

function adaptive() {
  !(function() {
    function e() {
      var e = document.documentElement.clientWidth,
        t = document.querySelector("html");
      var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值 1rem=100px
      var bodyWidth = document.body.clientWidth; // 当前窗口的宽度
      var f = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      window.fontSize = f;
      t.style.fontSize = f + "px";
    }
    e(), window.addEventListener("resize", e);
  })();
}
$(document).ready(function() {
  //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））
  $(window).scroll(function() {
    var scroTop = $(window).scrollTop();

    //创建一个变量存储当前窗口下移的高度
    //判断当前窗口滚动高度
    //如果大于100，则显示顶部元素，否则隐藏顶部元素
    if (scroTop > 100) {
      $(".backtop").fadeIn(500);
    } else {
      $(".backtop").fadeOut(500);
    }
  });

  $(".menuItem").hover(
    function() {
      $(this)
        .find(".subTitleWrap")
        .stop()
        .slideDown(200);
    },
    function() {
      $(this)
        .find(".subTitleWrap")
        
        .slideUp(200);
    }
  );

  //为返回顶部元素添加点击事件
  $(".backtop").click(function() {
    //将当前窗口的内容区滚动高度改为0，即顶部
    $("html,body").animate({ scrollTop: 0 }, "fast");
  });

  $(".weCanDo .itemMenu dd").hover(function(){
    $(this).addClass("active");
  },function(){
    $(this).removeClass("active");
  });

});

$(".backtop").mouseover(function(){
  $(".img").attr("src",tpl+"/images/backtop_bd.png");
  // console.log(111111);
});

$(".backtop").mouseout(function(){
  $(".img").attr("src",tpl+"/images/backtop.png");
});



// 显示弹层菜单
function showMaskMenu(param) {
  $(".maskMenu").fadeIn(500);
}
//隐藏弹层菜单
function hideMaskMenu() { 
  $(".maskMenu").fadeOut(500);
}



$(".subMenuWrap").mouseover(function(){
  $(this).fadeOut(500).stop();
});

$(".subMenuWrap").mouseout(function(){
    $(this).fadeIn(500).stop();
});

// 导航菜单滚动显示
function navScroll(){
  $(window).scroll(function(){
    var scroTop = $(window).scrollTop();
   
    if(scroTop > 200){
      $('.menuWrap').addClass('show');
      $('.brand').removeClass('logo2');
      $('.brand img').attr('src',tpl+'/images/pc_logo.png');
    }else{
      $('.menuWrap').addClass('hide');
      $('.menuWrap').removeClass('show');
      $('.brand').addClass('logo2');

      $('.brand img').attr('src',tpl+'/images/logo.png');
    }
 });
}