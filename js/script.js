$(function () {

  $(".pop-close").click(function () {
    $(".pop").hide();
  });

  $(".menu-icon").click(function () {
    $(".mobile-dimmed").css("display", "block");
    $(".m-nav").addClass("move");

  });
  $(".m-close").click(function () {
    $(".mobile-dimmed").css("display", "none");
    $(".m-nav").removeClass("move");
  });

  $(".search-icon").click(function () {
    $(".m-search").show();
  });
  $(".s-close").click(function () {
    $(".m-search").hide();
  });
 
      //소속 하위메뉴만 슬라이드다운방식
      $(".m-menu1 li").mouseover(function () {
        $(this).children(".m-smenu").stop().slideDown(200);
      });
      $(".m-menu1 li").mouseout(function () {
        //소속 하위메뉴만 슬라이드업방식
        $(this).children(".m-smenu").stop().slideUp(200);
  
      });

  $(window).resize(function () {

  });
  
});