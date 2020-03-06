$(document).ready(function () {
  $(window).scroll(function(){
    var scroTop = $(window).scrollTop();
   
    if(scroTop > 200){
      $('.menuWrap').addClass('show');
      $('.brand').addClass('logo2');
      $('.brand img').attr('src','images/logo.png');
    }else{
      $('.menuWrap').addClass('hide');
      $('.menuWrap').removeClass('show');
      $('.brand').removeClass('logo2');
      $('.brand img').attr('src','images/pc_logo.png');
    }
 });
});