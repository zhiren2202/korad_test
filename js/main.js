
// 메인비주얼 슬라이드
var swiper1 = new Swiper('.main_visualGroup', {
    spaceBetween: 30,
    // keyboard: {
    //     enabled: true,
    // },
    centeredSlides: true,
    effect : 'fade',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main_visualGroup .swiper-pagination',
        clickable: true,
    },
    a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
});

$('.main_visual_btns_start').click(function(){
    swiper1.autoplay.start();
    $(this).removeClass('active');
    $('.main_visual_btns_stop').addClass('active');
    return false;
});
$('.main_visual_btns_stop').click(function(){
    swiper1.autoplay.stop();
    $(this).removeClass('active');
    $('.main_visual_btns_start').addClass('active');
    return false;
});


var mainVisualBullet = $('.swiper-pagination .swiper-pagination-bullet');

mainVisualBullet.focusin(function(){
    swiper1.autoplay.stop();
    $(this).addClass('swiper-pagination-bullet-active');
    $(this).focus();
    mainVisualBullet.not($(this)).removeClass('swiper-pagination-bullet-active');
    $(this).transitionStart();
    return false;
});
mainVisualBullet.focusout(function(){
    swiper1.autoplay.start();
    $(this).removeClass("swiper-pagination-bullet-active");
    return false;
});


// 퀵메뉴 슬라이드
var swiper2 = new Swiper(".main_quickmenuContainer", {
    slidesPerView: 11,
    spaceBetween: 0,
    // init: false,
    breakpoints: {
        1250: {
        slidesPerView: 8,
        spaceBetween: 0,
        },
        1024: {
        slidesPerView: 7,
        spaceBetween: 0,
        },
        820: {
        slidesPerView: 5,
        spaceBetween: 0,
        },
        640: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
        320: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    touchReleaseOnEdges: true,
    a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage:
        "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
    },
    });
    swiper2.on("keyPress", (swiper, keyCode) => {
        switch (keyCode) {
          case 38:
            swiper.slidePrev();
            break;
          case 40:
            swiper.slideNext();
            break;
        }
      });


var quickmenuSlide = $('.main_quickmenuWrapper .swiper-slide');
quickmenuSlide.focusin(function(){
    $(this).addClass('swiper-slide-active');
    $(this).removeClass('swiper-slide-prev');
    $(this).removeClass('swiper-slide-next');
    quickmenuSlide.not($(this)).removeClass('swiper-slide-active');
    quickmenuSlide.not($(this).prev()).removeClass('swiper-slide-prev');
    quickmenuSlide.not($(this).next()).removeClass('swiper-slide-next');
    $(this).prev().addClass('swiper-slide-prev');
    $(this).next().addClass('swiper-slide-next');
    return false;
});
quickmenuSlide.focusout(function(){
    $(this).removeClass("swiper-slide-active");
    return false;
});

// var scale = (current + 1) / total;
// swiper2.on('slideChange',function(){
//         var scaleX = 1;
//         var scaleY = 1;

//     $(this).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
// });



// Korad 소식 (모바일 슬라이드)
var swiper3 = new Swiper(".koradNewsContainer", {
    slidesPerView: 4,
    spaceBetween: 10,
    keyboard: {
        enabled: true,
        // onlyInViewport: true,
    },
    navigation: {
        nextEl: ".koradNewsGroup .slide_button_next",
        prevEl: ".koradNewsGroup .slide_button_prev",
    },
    a11y: {
        prevSlideMessage: "이전 슬라이드",
        nextSlideMessage: "다음 슬라이드",
        slideLabelMessage:
        "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
    },
    breakpoints: {
        820: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup : 2,
        },
    },
    touchReleaseOnEdges: true,
});

var koradNewsSlide = $('.koradNewsWrapper .swiper-slide');

koradNewsSlide.focusin(function () {
  $(this).addClass("swiper-slide-active");
  $(this).removeClass("swiper-slide-prev");
  $(this).removeClass("swiper-slide-next");
  koradNewsSlide.not($(this)).removeClass("swiper-slide-active");
  koradNewsSlide.not($(this).prev()).removeClass("swiper-slide-prev");
  koradNewsSlide.not($(this).next()).removeClass("swiper-slide-next");
  $(this).prev().addClass("swiper-slide-prev");
  $(this).next().addClass("swiper-slide-next");
  $(this).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
  return false;
});
koradNewsSlide.focusout(function () {
  $(this).removeClass("swiper-slide-active");
  return false;
});


// 푸터배너 슬라이드
var swiper4 = new Swiper('.footer_bannerContainer', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    }
});

var footerSlide = $('.footer_bannerWrapper .swiper-slide');
footerSlide.focusin(function(){
    $(this).addClass('swiper-slide-active');
    $(this).removeClass('swiper-slide-next');
    $(this).removeClass('swiper-slide-prev');
    $(this).prev().addClass('swiper-slide-prev');
    $(this).next().addClass('swiper-slide-next');
    footerSlide.not($(this)).removeClass('swiper-slide-active');
    return false;
});
footerSlide.focusout(function(){
    $(this).removeClass("swiper-slide-active");
    return false;
});

