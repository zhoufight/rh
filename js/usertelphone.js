$(document).reay(function(){
  var marker, map = new AMap.Map("container", {
    resizeEnable: true,
    center: [113.930885,22.531746],
    zoom: 16,
    lang: "zh_cn" //可选值：en，zh_en, zh_cn
  });
  marker = new AMap.Marker({
    // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
    // position: [113.930885,22.531746],
    // offset: new AMap.Pixel(-13, -30)
    position: new AMap.LngLat(113.930885, 22.531746),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
   
  });
  marker.setMap(map);

})