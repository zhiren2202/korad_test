
// Initialize Swiper

// 메인비주얼 슬라이드
var swiper = new Swiper('.main_visualGroup', {
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    centeredSlides: true,
    effect : 'fade',
    autoplay: {
        delay: 5000,
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

window.addEventListener('resize', function() {
    if (window.innerWidth < 1200) {
        var swiper = new Swiper('.main_quickmenuContainer', {
            slidesPerView: 11.2,
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
            a11y: {
                prevSlideMessage: '이전 슬라이드',
                nextSlideMessage: '다음 슬라이드',
                slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
            },
        });
    }
});



// Korad 소식 (모바일 슬라이드)
var swiper = new Swiper(".koradNewsContainer", {
    slidesPerView: 4,
    spaceBetween: 10,
    // slidesOffsetBefore:10,
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
            spaceBetween: 4,
        }
    }
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
    },
});