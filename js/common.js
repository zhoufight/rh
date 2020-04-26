var tpl = '/tpl/renhe';

function adaptive() {
  !(function () {
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
$(document).ready(function () {
  //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））
  $(window).scroll(function () {
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
    function () {
      $(this)
        .find(".subTitleWrap")
        .stop()
        .slideDown(200);
    },
    function () {
      $(this)
        .find(".subTitleWrap")
        .stop()
        .slideUp(200);
    }
  );

  //为返回顶部元素添加点击事件
  $(".backtop").click(function () {
    //将当前窗口的内容区滚动高度改为0，即顶部
    $("html,body").animate({
      scrollTop: 0
    }, "fast");
  });

  $(".weCanDo .itemMenu dd").hover(function () {
    $(this).addClass("active");
  }, function () {
    $(this).removeClass("active");
  });

});


// // 返回顶部
// $(".backtop").mouseover(function(){
//   // $(".img").attr("src",tpl+"/images/backtop_bd.png");
//   $(".img").attr("src","/images/backtop_bd.png");
// });

// $(".backtop").mouseout(function(){
//   // $(".img").attr("src",tpl+"/images/backtop.png");
//   $(".img").attr("src","/images/backtop.png");
// });

$(".backtop").hover(function () {
  $(".img").attr("src", "./images/backtop_bd.png");
}, function () {
  $(".img").attr("src", "./images/backtop.png");
});


// 联系 qq wx sina
$(".tengxun").hover(function () {
  // $(this).attr("src",tpl+"/images/hover_qq.png");
  $(this).attr("src", "images/hover_qq.png");
}, function () {
  //   // $(this).attr("src",tpl+"/images/qq.png");
  $(this).attr("src", "images/qq.png");
});

$(".wx").hover(function () {
  // $(this).attr("src",tpl+"/images/hover_wx.png");
  $(this).attr("src", "images/hover_wx.png");
}, function () {
  // $(this).attr("src",tpl+"/images/wx.png");
  $(this).attr("src", "images/wx.png");
});

$(".sina").hover(function () {
  // $(this).attr("src",tpl+"/images/hover_sina.png");
  $(this).attr("src", "images/hover_sina.png");
}, function () {
  // $(this).attr("src",tpl+"/images/sina.png");
  $(this).attr("src", "images/sina.png");
});


// 联系我们 --人和时代·国际三个小图
$(".phone").hover(function () {
  // $(this).attr("src",tpl+"/images/phone_hover.png");
  $(this).attr("src", "images/phone_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/phone.png");
  $(this).attr("src", "images/phone.png");
});

$(".bjnews").hover(function () {
  // $(this).attr("src",tpl+"/images/bjnews_hover.png");
  $(this).attr("src", "images/bjnews_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/bjnews.png");
  $(this).attr("src", "images/bjnews.png");
});

$(".tikTok").hover(function () {
  // $(this).attr("src",tpl+"/images/tikTok_hover.png");
  $(this).attr("src", "images/tikTok_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/tikTok.png");
  $(this).attr("src", "images/tikTok.png");
});

// 新闻，设计详情--分享，分页
$(".share").hover(function () {
  // $(this).attr("src",tpl+"/images/design/share_hover.png");
  $(this).attr("src", "images/design/share_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/design/share.png");
  $(this).attr("src", "images/design/share.png");
});

$(".page_left").hover(function () {
  // $(this).attr("src",tpl+"/images/design/left_hover.png");
  $(this).attr("src", "images/design/left_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/page_left.png");
  $(this).attr("src", "images/design/page_left.png");
});

$(".page_center").hover(function () {
  // $(this).attr("src",tpl+"/images/design/center_hover.png");
  $(this).attr("src", "images/design/center_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/design/page_center.png");
  $(this).attr("src", "images/design/page_center.png");
});

$(".page_right").hover(function () {
  // $(this).attr("src",tpl+"/images/design/right_hover.png");
  $(this).attr("src", "images/design/right_hover.png");
}, function () {
  // $(this).attr("src",tpl+"/images/design/page_right.png");
  $(this).attr("src", "images/design/page_right.png");
});

// 显示弹层菜单
function showMaskMenu(param) {
  $(".maskMenu").fadeIn(500);
}
//隐藏弹层菜单
function hideMaskMenu() {
  $(".maskMenu").fadeOut(500);
}

// 导航菜单滚动显示
function navScroll() {
  $(window).scroll(function () {
    var scroTop = $(window).scrollTop();

    if (scroTop > 200) {
      $('.menuWrap').addClass('show');
      $('.brand').removeClass('logo2');
      // $('.brand img').attr('src',tpl+'/images/pc_logo.png');
      $('.brand img').attr('src', './images/pc_logo.png');
    } else {
      $('.menuWrap').addClass('hide');
      $('.menuWrap').removeClass('show');
      $('.brand').addClass('logo2');

      // $('.brand img').attr('src',tpl+'/images/logo.png');
      $('.brand img').attr('src', './images/logo.png');

    }
  });
}

//弹出二维码
$('[data-toggle="popover"]').popover({
  trigger: 'focus', // 这个是定义鼠标事件，等于data-trigger="focus"
  html: true // 关键在这里， 这样修改之后，我们的data-content里面就可以写html代码啦
  })


//新闻，设计详情标签少于3个的情况处理
function addColumn(classnameParent, classname2) {
  const parentDiv = $(`.${classnameParent} .${classname2}`)

  console.log($(parentDiv[2]).find("div.column").length)


  for (let i = 0; i < parentDiv.length; i++) {
    console.log($(parentDiv[i]).find("div.column"))
    const item = $(parentDiv[i]).find('div.column')
    for (let j = 0; j < item.length; j++) {
      const itemP = $(item[j]).find("p")
      if (itemP.length === 2) {
        $(item[j]).addClass("column2")
      }
    }
    console.log("item:", item)
  }

  // parentDiv.map((el,index)=>{
  //        console.log(index)
  //  const item = $(parentDiv[index]).find('div.column')
  //  console.log("item:",item)
  //  item.map((itemx, i)=>{
  //   const itemP = $(item[i]).find("p")
  //   console.log(itemP.length)
  //   if (itemP.length === 2) {
  //     $(item[i]).addClass("column2")
  //   }
  //  })
  // })
}



//分享到微博,微信
ShareTip = function () {}

ShareTip.prototype.sharetosina = function (title, url) {
  var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url;
  //            var sharesinastring='http://v.t.sina.com.cn/share/share.php?&appkey='+appkey+'&title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='picurl;
  //  window.open(sharesinastring,'newwindow');
  window.open(sharesinastring, 'newwindow', 'height=500,width=500,top=100,left=100');
}

$('.shareSina').on('click', function () {
  var shareTitle = $('.blog-single-head h1').text();
  var shareContent = $('.blog-single-head h2').text();
  var shareUrl = window.location.href;
  var share1 = new ShareTip();
  share1.sharetosina(shareTitle + "  " + shareContent, shareUrl);
})

//分享到微信
// $('.shareWx').on('click', function () {
//   $('.wxBox').css('display', 'block');
//   // var shareUrl = window.location.href;//跳转
//   //生成二维码
//   // $("#wxCode").empty().qrcode({
//   //     render: 'canvas', 
//   //     text: shareUrl //任意内容
//   // });
//   console.log(1111111111111);
// })
// $('.wxClose').on('click', function () {
//   $('.wxBox').css('display', 'none');
// })


// 移动端案例，设计导航
$(".icon").click(function () {

  $(this).siblings("ul").slideToggle(600).parent().siblings("").find("ul");

})

$(document).click(function () {

  var icon = $(".icon").siblings("ul").slideUp(300);

  console.log(icon);
})

$(".icon").click(function (event) {

  event.stopPropagation();

})



  //底部滚动
    $(document).ready(function () { 
  //底部滚动
  $(".listWrap").mCustomScrollbar({
      scrollButtons: {
          enable: false,
          scrollType: "continuous",
          scrollSpeed: 20,
          scrollAmount: 40
      },
      horizontalScroll: false
    });
 })

 //  移动设备上的浏览器,优化点击事件
$(function() {
  FastClick.attach(document.body);
});
