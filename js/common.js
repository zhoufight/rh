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

// 返回顶部
$(".backtop").mouseover(function(){
  $(".img").attr("src",tpl+"/images/backtop_bd.png");
  // $(".img").attr("src","/images/backtop_bd.png");
});

$(".backtop").mouseout(function(){
  $(".img").attr("src",tpl+"/images/backtop.png");
  // $(".img").attr("src","/images/backtop.png");
});

// 联系 qq wx sina
$(".tengxun").mouseover(function(){
  $(this).attr("src",tpl+"/images/hover_qq.png");
  // $(this).attr("src","images/hover_qq.png");
  // console.log(1)
});

$(".tengxun").mouseout(function(){
  $(this).attr("src",tpl+"/images/qq.png");
  // $(this).attr("src","images/qq.png");

});

$(".wx").mouseover(function(){
  $(this).attr("src",tpl+"/images/hover_wx.png");
  // $(this).attr("src","images/hover_wx.png");

});

$(".wx").mouseout(function(){
  $(this).attr("src",tpl+"/images/wx.png");
  // $(this).attr("src","images/wx.png");
});

$(".sina").mouseover(function(){
  $(this).attr("src",tpl+"/images/hover_sina.png");
  // $(this).attr("src","images/hover_sina.png");

});

$(".sina").mouseout(function(){
  $(this).attr("src",tpl+"/images/sina.png");
  // $(this).attr("src","images/sina.png");
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
      // $('.navWrap .navBarWrap').css("padding-top","10px");
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




/*
：自定义底部滚动条实现
*/
(function(win, doc, $){
  // 定义的滚动条的构造函数
  function CusScrollBar(options) {
    // 函数的调用
    this._init(options);
  }
  // 对象的合并
  $.extend(CusScrollBar.prototype, {
    _init: function(options){
      // 闭包
      var self = this;
      // 初始化参数
      self.options = {
        scrollDir: 'Y',       //滚动的方向
        contentSelector: '',  //滚动内容区选择器
        barSelector: '',      //滚动条选择器
        sliderSelector: '',   //滚动滑块选择器
        wheelStep: 100,        //滚动步长（鼠标移动一下，内容滚动的幅度）
      }
      // 覆盖参数
      $.extend(true, self.options, options||{});
      self._initDomEvent();
      return self;
    },

    /**
     * 初始化DOM引用
     * @method _initDomEvent
     * @return {CusScrollBar}
     */
     _initDomEvent: function() {
      var opts = this.options;
      // 滚动内容区对象，必填项
      this.$cont = $(opts.contentSelector);
      // 滚动条滑块对象，必须项
      this.$slider = $(opts.sliderSelector);
      // 滚动条对象
      this.$bar = opts.barSelector ? $(opts.barSelector) : self.$slider.parent();
      // 获取文档对象
      this.$doc = $(doc);
      // 获取初始化滑块拖动功能
      this._initSliderDragEvent();
      // 获取同步滑块的位置
      this._bindContentScroll();
      // 获取鼠标滚轮事件
      this._bindMousewheel();
      // 获取内容来定义滑块的高度
      this._initSliderHeight();

     },
     // 根据内容来定义滑块的高度
     _initSliderHeight: function() {
      var rate = this.$cont.height()/this.$cont[0].scrollHeight;
      var sliderHeight = rate*this.$bar.height();
      this.$slider.css('height',sliderHeight);
     },
     

     /**
      * 初始化滑块拖动功能
      * @return {[Object]} [this]
      */
    _initSliderDragEvent: function() {
      var self = this;
      // 滑块元素
      var slider = this.$slider,
          sliderEl = slider[0];
      // 如果元素存在
      if (sliderEl) {
        var doc = this.$doc,
            dragStartPagePostion,
            dragStartScrollPostion,
            dragContBarRate;
        function mousemoveHandler(e) {
          e.preventDefault();
          if (dragStartPagePostion == null) {
            return;
          }
          //内容开始卷曲的高度+rate*(鼠标释放的位置-开始的位置) == 就是内容滑动的位置
          self.scrollTo(dragStartScrollPostion + (e.pageY - dragStartPagePostion)*dragContBarRate);
        }
        slider.on('mousedown', function(e){
          e.preventDefault();
          // 获取鼠标的点击的开始位置
          dragStartPagePostion = e.pageY;
          // 获取内容区域的向上卷区的高度
          dragStartScrollPostion = self.$cont[0].scrollTop;
          dragContBarRate = self.getMaxScrollPosition()/self.getMaxSliderPosition();
          // 监听的document对象
          doc.on('mousemove.scroll', mousemoveHandler).on('mouseup.scroll',function(){
            doc.off('.scroll');
          });
        });
        return self;
      }
    },
    
    // 计算滑块的当前位置
    getSliderPosition: function() {
      var self = this,
      // 滑块可以移动的距离
          maxSliderPosition = self.getMaxSliderPosition();
          // 滑块移动的距离
      return Math.min(maxSliderPosition, maxSliderPosition*self.$cont[0].scrollTop/self.getMaxScrollPosition());
    },

    // 内容可滚动的高度
    getMaxScrollPosition: function() {
      var self = this;
      return Math.max(self.$cont.height(), self.$cont[0].scrollHeight) - self.$cont.height();
    
    },

    //滑块可移动的距离
    getMaxSliderPosition: function(){
      var self = this;
      return self.$bar.height() - self.$slider.height();
    },

    // 监听内容的滚动，同步滑块的位置
    _bindContentScroll: function() {
      var self = this;
      self.$cont.on('scroll', function(){
        var sliderEl = self.$slider && self.$slider[0];
        if (sliderEl) {
          // 设置滑块的位置
          sliderEl.style.top = self.getSliderPosition() + 'px';
        }
      });
      return self;
    },

    // 鼠标滚轮事件
    _bindMousewheel: function() {
      var self = this;
      // on监听事件，多个事件利用空格分开
      self.$cont.on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        // 判断原生事件对象的属性
        var oEv = e.originalEvent,
        //原生事件对象,（其他浏览器负数向下，firefox正数向下,所以在wheelDelta前面有负数）
        // 想要达到的效果，鼠标向下滚动，内容向下走
            wheelRange = oEv.wheelDelta ? -oEv.wheelDelta/120 : (oEv.detail || 0)/3;
            // 调用scrollTo方法。
            self.scrollTo(self.$cont[0].scrollTop + wheelRange*self.options.wheelStep)
      });
    },

    // 内容的滑动
    scrollTo: function(positonVal) {
      var self = this;
      self.$cont.scrollTop(positonVal);
    }
  });

  win.CusScrollBar = CusScrollBar;
})(window,document,jQuery)

new CusScrollBar({
  contentSelector: '.scroll_cont', //滚动内容区
  barSelector: '.scroll_bar', //滚动条
  sliderSelector: '.scroll_slider' //滚动滑块
});