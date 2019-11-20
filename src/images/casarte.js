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

// 侧边栏
$('.js_btnlist').on('mouseenter', '.js_user', function() {
    var li = $(this);
    li.find('b').addClass('displayblock');
    li.find('span').addClass('colorwhite');
    li.addClass('bca88747');
});
$('.js_btnlist').on('mouseleave', '.js_user', function() {
    var li = $(this);
    li.find('b').removeClass('displayblock');
    li.find('span').removeClass('colorwhite');
    li.removeClass('bca88747');
});
$('.js_btnlist').on('mouseenter', '.js_twocode', function() {
    var twocode = $(this);
    twocode.find('.cont').addClass('displayblock')
});
$('.js_btnlist').on('mouseleave', '.js_twocode', function() {
    var twocode2 = $(this);
    twocode2.find('.cont').removeClass('displayblock')
});
// 回到顶部
$(".js_gototop_box").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 500);
});