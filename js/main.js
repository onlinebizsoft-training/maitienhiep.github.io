$(document).ready(function() {
  showMenu();
  slideShow();
  scrollFunction();
  stickyHeader();
});

// Hàm ẩn/hiện menu
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

// Create action for slideshow.
function slideShow() {
  // Khởi tạo một biến số thứ tự = 0.
  var stt = 0;
  // Một biến mới được gán cho ảnh bắt đầu của slide.
  startImg = $("img.slide:first").attr("stt");
  // Một biến mới được gán cho ảnh kết thúc của slide.
  endImg = $("img.slide:last").attr("stt");
  // Khởi tạo vòng lặp qua từng ảnh có trong slide.
  $("img.slide").each(function() {
    if ($(this).is(":visible")) stt = $(this).attr("stt");
  });
  // Khởi tạo hành động cho next button.
  $(".next").click(function() {
    if (stt == endImg) {
      stt = -1;
    }
    next = ++stt;
    $("img.slide").hide();
    $("img.slide")
      .eq(next)
      .show();
  });
  // Khởi tạo hành động cho prev button.
  $(".prev").click(function() {
    if (stt == 0) {
      stt = endImg;
      prev = stt++;
    }
    prev = --stt;
    $("img.slide").hide();
    $("img.slide")
      .eq(prev)
      .show();
  });
  // Lặp lại hành động.
  setInterval(function() {
    $(".next").click();
  }, 5000);
}

// Scroll to top function
function scrollFunction() {
  // Đặt điều kiện ẩn/hiện scroll button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  // Đặt hành động khi click vào scroll button
  $(".scrollToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
}

// Sticky header on scroll
function stickyHeader() {
  // Xác định, kiểm tra điều kiện kích thước trình duyệt để tùy từng giao diện hiển thị nav khác nhau.
  if(window.innerWidth < 768){
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 316.66) {
        $(".left-menu").addClass("fixed-header");
        $(this).addClass("visible-title");
      } else {
        $(".left-menu").removeClass("fixed-header");
        $(this).removeClass("visible-title");
      }
    });
  } else if(window.innerWidth <= 1024){
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 158) {
        $(".left-menu").addClass("fixed-header");
        $(this).addClass("visible-title");
      } else {
        $(".left-menu").removeClass("fixed-header");
        $(this).removeClass("visible-title");
      }
    });
  } else {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 138) {
        $(".nav").addClass("fixed-header");
        $(this).addClass("visible-title");
        $(".left-menu").addClass("custom2");
        $('.catg-menu').slideUp();
      } else {
        $(".nav").removeClass("fixed-header");
        $(this).removeClass("visible-title");
        $(".left-menu").removeClass("custom2");
        $('.catg-menu').slideDown();
      }
    });
  }
}
