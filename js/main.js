$(document).ready(function() {
  showMenu();
  slideShow();
});
function showMenu() {
  $(".left-menu-1").click(function() {
    if ($(this).hasClass("active")) {
      $(".hide-menu-left").slideUp();
      $(this).removeClass("active");
    } else {
      $(".hide-menu-left").slideDown();
      $(".right-menu").slideUp();
      $(this).addClass("active");
    }
  });
  $(".left-menu-3").click(function() {
    if ($(this).hasClass("active")) {
      $(".right-menu").slideUp();
      $(this).removeClass("active");
    } else {
      $(".right-menu").slideDown();
      $(".hide-menu-left").slideUp();
      $(this).addClass("active");
    }
  });
  $(".left-menu-4").click(function() {
    if ($(this).hasClass("active")) {
      $(".catg-menu").slideUp();
      $(this).removeClass("active");
    } else {
      $(".catg-menu").slideDown();
      $(this).addClass("active");
    }
  });
}

function slideShow() {
  var stt = 0;
  startImg = $("img.slide:first").attr("stt");
  endImg = $("img.slide:last").attr("stt");
  $("img.slide").each(function() {
    if ($(this).is(":visible"))
      stt = $(this).attr("stt");
  });
  $(".next").click(function(){
    if(stt == endImg){
      stt = -1;
    }
    next = ++stt;
    $("img.slide").hide();
    $("img.slide").eq(next).show();
  })
  $(".prev").click(function(){
    if(stt == 0){
      stt = endImg;
      prev = stt++;
    }
    prev = --stt;
    $("img.slide").hide();
    $("img.slide").eq(prev).show();
  })
  setInterval(function(){
    $(".next").click()
  }, 5000);
}

