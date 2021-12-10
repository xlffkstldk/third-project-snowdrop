$(function () {

  $(".pop-close").click(function () {
    $(".pop").hide();
  });

  $(".menu-icon").click(function () {
    $(".mobile-dimmed").css("display", "block");
    $("body").css("overflow-y","hidden");
    $(".m-nav").addClass("move");

  });
  $(".m-close").click(function () {
    $(".mobile-dimmed").css("display", "none");
    $("body").css("overflow-y","auto");
    $(".m-nav").removeClass("move");
  });

  $(".search-icon").click(function () {
    $(".m-search").show();
  });
  $(".s-close").click(function () {
    $(".m-search").hide();
  });
 
  //소속 하위메뉴만 슬라이드다운방식
  $(".m-menu1 li").click(function () {
    if( $(this).find("i").hasClass("fa-minus")) {
      $(this).children(".m-smenu").slideUp(200);
      $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".m-menu1").find(".m-smenu").slideUp(200);
      $(".m-menu1").find("i.fa-minus").removeClass("fa-minus").addClass("fa-plus");
      $(this).children(".m-smenu").stop().slideDown(200);
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    }

  });


  $(window).resize(function () {

  });
  
});