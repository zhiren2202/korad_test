
// Initialize Swiper

// 메인비주얼 슬라이드
var swiper1_1 = new Swiper('.main_visualGroup', {
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    centeredSlides: true,
    effect : 'fade',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
});

$('.main_visual_btns_start').click(function(){
    swiper1_1.autoplay.start();
    return false;
});
$('.main_visual_btns_stop').click(function(){
    swiper1_1.autoplay.stop();
    return false;
});

var mainVisualBullet = $('.swiper-pagination .swiper-pagination-bullet');
mainVisualBullet.focusin(function(){
    swiper1_1.autoplay.stop();
    $(this).addClass('swiper-pagination-bullet-active');
    mainVisualBullet.not($(this)).removeClass('swiper-pagination-bullet-active');
    return false;
});
mainVisualBullet.focusout(function(){
    swiper1_1.autoplay.start();
    $(this).removeClass("swiper-pagination-bullet-active");
    return false;
});



// 퀵메뉴 슬라이드
// let ww = window.innerWidth;
// let swiper;

// responsiveSwiper();

// function initSwiper(effect) {
//   if (typeof(swiper) == 'object') swiper.destroy();

//   return swiper = new Swiper('.main_quickmenuContainer', {
//     slidesPerView: 11.2,
//     spaceBetween: 0,
//     // init: false,
//     breakpoints: {
//         1250: {
//             slidesPerView: 8,
//             spaceBetween: 0,
//         },
//         1024: {
//             slidesPerView: 7,
//             spaceBetween: 0,
//         },
//         820: {
//             slidesPerView: 5,
//             spaceBetween: 0,
//         },
//         640: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//         },
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         }
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     a11y: {
//         prevSlideMessage: '이전 슬라이드',
//         nextSlideMessage: '다음 슬라이드',
//         slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
//     },
//     effect: effect
//   })
// }

// 퀵메뉴 슬라이드
window.addEventListener('resize', function() {
    if (window.innerWidth < 1250) {
        var swiper = new Swiper('.main_quickmenuContainer', {
            slidesPerView: 8,
            spaceBetween: 0,
            // init: false,
            breakpoints: {
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
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            a11y: {
                prevSlideMessage: '이전 슬라이드',
                nextSlideMessage: '다음 슬라이드',
                slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
            },
        });
    } else {
        var swiper = new Swiper('.main_quickmenuContainer', {
            slidesPerView: 11,
            spaceBetween: 0,
        });
    }
});



// Korad 소식 (모바일 슬라이드)
var swiper = new Swiper(".koradNewsContainer", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: ".slide_button_next",
        prevEl: ".slide_button_prev",
    },
    a11y: {
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
    breakpoints: {
        820: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});

var koradNewsSlide = $('.koradNewsWrapper .swiper-slide');
koradNewsSlide.focusin(function(){
    $(this).addClass('swiper-slide-active');
    $(this).removeClass('swiper-slide-next');
    $(this).removeClass('swiper-slide-prev');
    $(this).prev().addClass('swiper-slide-prev');
    $(this).next().addClass('swiper-slide-next');
    koradNewsSlide.not($(this)).removeClass('swiper-slide-active');
    return false;
});
koradNewsSlide.focusout(function(){
    $(this).removeClass("swiper-slide-active");
    return false;
});



// 푸터배너 슬라이드
var swiper = new Swiper('.footer_bannerContainer', {
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

