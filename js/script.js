$(function () {

  /* 최상단 팝업여부에 따라 메뉴 높이 조정 */
  if ($("body").children().find("pop")) {
    $(".sub-bg").css("top", "115px");
  }
  $(".pop-close").click(function () {
    $(".pop").hide();
    $(".sub-bg").css("top", "70px");
  });
  $(".menu-icon").click(function () {
    $(".mobile-dimmed").css("display", "block");
    $(".menu").addClass("move");

  });
  $(".close").click(function () {
    $(".mobile-dimmed").css("display", "none");
    $(".menu").removeClass("move");
  });

  if ($(window).width() >= 768) {

    $(".mobile-dimmed").css("display", "none");
    //$(".menu").removeClass("move");



    $(".pmain-nav li").mouseover(function () {

      //전체 서브메뉴 슬라이드다운방식 
      $(".sub-nav, .sub-bg").stop().slideDown(200);

    });


    $(".pmain-nav li").mouseout(function () {
      //전체 서브메뉴 슬라이드업
      $(".sub-nav, .sub-bg").stop().slideUp(200);

    });

  } else {
    //모바일

    if ($("body").children().find("pop")) {
      $(".menu").css("top", "115px");
    }
   
    $(".pop-close").click(function () {
      $(".pop").hide();
      $(".menu").css("top", "70px");
    });

    //소속 하위메뉴만 슬라이드다운방식
    $(".main-nav li").mouseover(function () {
      $(this).children(".sub-nav2").stop().slideDown(200);
    });
    $(".main-nav li").mouseout(function () {
      //소속 하위메뉴만 슬라이드업방식
      $(this).children(".sub-nav2").stop().slideUp(200);

    });
  }
  $(window).resize(function () {



    if ($(window).width() >= 768) { //해상도 변경시 햄버거 메뉴 사라지게 
      $(".mobile-dimmed").css("display", "none");
      $(".menu").removeClass("move");

     
      if ($("body").children().find("pop")) {
        $(".pmenu").css("top", "unset");
      }
      $(".pop-close").click(function () {
        $(".pop").hide();
        $(".pmenu").css("top", "unset");
      }); 

      $(".pmain-nav li").mouseover(function () {
        //전체 서브메뉴 슬라이드다운방식 
        $(".sub-nav, .sub-bg").stop().slideDown(200);

      });


      $(".pmain-nav li").mouseout(function () {
        //전체 서브메뉴 슬라이드업
        $(".sub-nav, .sub-bg").stop().slideUp(200);

      });
      

    } else {
      //모바일      
      if ($("body").children().find("pop")) {
        $(".menu").css("top", "115px");
      }
      //dispaly:none인 경우
      if (!$("body").children().find("pop").is(':visible'))  {
        $(".menu").css("top", "70px");
      }

      $(".pop-close").click(function () {
        $(".pop").hide();
        $(".menu").css("top", "70px");
      });     
      

         // // //소속 하위메뉴만 슬라이드다운방식
        $(".main-nav li").mouseover(function () {
         $(this).children(".sub-nav2").stop().slideDown(200);
        });
       $(".main-nav li").mouseout(function () {
         //소속 하위메뉴만 슬라이드업방식
         $(this).children(".sub-nav2").stop().slideUp(200);
         console.log("222");
       });
    }
  });

  
});