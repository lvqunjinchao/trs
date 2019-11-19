// 第一个轮播图
var bannerSlider = $(".js_banner").oSlider({
    loop: true,
    pager: ".js_pager",
    pagerHover: false,
    speed: 3000,
    startFn: function() {
        console.log("开始");
    },
    playFn: function() {
        console.log("play");
    }
});
bannerSlider.init();
// 第二个轮播图
var bannerSlider2 = $(".js_banner2").oSlider({
    loop: true,
    pager: ".js_pager2",
    pagerHover: false,
});
bannerSlider2.init();