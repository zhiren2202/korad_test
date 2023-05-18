
// Initialize Swiper

// 메인비주얼 슬라이드
var swiper = new Swiper('.main_visual_swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    effect : 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    on: {
        init: function () {
            thisSlide = this;
            autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
            autoPlayBtn.addEventListener('click', (e) => {
                autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                if (autoPlayState === 'false') {
                    autoPlayBtn.setAttribute('aria-pressed', 'true');
                    thisSlide.autoplay.stop();
                } else if (autoPlayState === 'true') {
                    autoPlayBtn.setAttribute('aria-pressed', 'false');
                    thisSlide.autoplay.start();
                };
            });
        },
    },
});

// 메인비주얼 메뉴아이콘 슬라이드
var swiper = new Swiper('.main_visual_menuSlide', {
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
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Korad 소식 (모바일 슬라이드)
var swiper = new Swiper(".koradNews_slide", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
        nextEl: ".slide_button_next",
        prevEl: ".slide_button_prev",
    },
    breakpoints: {
        820: {
            slidesPerView: 2,
            spaceBetween: 0,
        }
    }
});

// $(window).resize(function() {
//     // var width_size = window.outerWidth;
//     if (window.innerWidth > 820) {
//         div.classList.remove('koradNews_slide');
//     } else {
//         div.classList.add('koradNews_slide');
//     }
// }).resize();

// function mediaq() {
//     var windowWidth = $(window).width();
//     if (windowWidth < 768) {
//         div.classList.add('koradNews_slide');
//     } else {
//         div.classList.remove('koradNews_slide');
//     }
// }

// //mediaq를 setResponsive에 담는다.
// function setResponsive() {
//     mediaq();
// }
// //브라우저가 로드될때 실행
// $(window).on("load", function () {
//     setResponsive();
// });
// //브라우저가 리사이즈될때 실행
// $(window).on("resize", function () {
//     etResponsive();
// });


// 푸터배너 슬라이드
var swiper = new Swiper('.footer_banner_swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});