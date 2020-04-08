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
        .stop()
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
  // $(".img").attr("src",tpl+"/images/backtop_bd.png");
  $(".img").attr("src","/images/backtop_bd.png");
});

$(".backtop").mouseout(function(){
  // $(".img").attr("src",tpl+"/images/backtop.png");
  $(".img").attr("src","/images/backtop.png");

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
function navScroll(){
  $(window).scroll(function(){
    var scroTop = $(window).scrollTop();
   
    if(scroTop > 200){
      $('.menuWrap').addClass('show');
      $('.brand').removeClass('logo2');
      // $('.brand img').attr('src',tpl+'/images/pc_logo.png');
      $('.brand img').attr('src','./images/pc_logo.png');

    }else{
      $('.menuWrap').addClass('hide');
      $('.menuWrap').removeClass('show');
      $('.brand').addClass('logo2');

      // $('.brand img').attr('src',tpl+'/images/logo.png');
      $('.brand img').attr('src','./images/logo.png');

    }
 });
}


//新闻，设计详情标签少于3个的情况处理
function addColumn(classnameParent,classname2) {
  const parentDiv  =  $(`.${classnameParent} .${classname2}`)

  console.log($(parentDiv[2]).find("div.column").length)


  for (let i = 0 ;i< parentDiv.length;i++) {
    console.log($(parentDiv[i]).find("div.column"))
    const item = $(parentDiv[i]).find('div.column')
    for(let j = 0;j<item.length;j++) {
      const itemP = $(item[j]).find("p")
      if (itemP.length === 2) {
        $(item[j]).addClass("column2")
      }
    }
    console.log("item:",item)
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
