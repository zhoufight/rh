function adaptive() {
  !function () {
    function e() {
    var e = document.documentElement.clientWidth, t = document.querySelector("html");
    var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值 1rem=100px
    var bodyWidth = document.body.clientWidth;// 当前窗口的宽度
    var f = bodyWidth * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    window.fontSize = f;
    t.style.fontSize = f + "px"
    }
    e(), window.addEventListener("resize", e);
    }();
  }