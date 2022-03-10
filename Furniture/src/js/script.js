const swiper = new Swiper('.swiper', {
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //     },
    //     670: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2,
    //     },
    //     992: {
    //         slidesPerView: 4,
    //         slidesPerGroup: 2,
    //     },
    // },
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 2,
    CenterSlides: true,
    spaceBetween: 10,
    // setWrapperSize: true,
    // slidesOffsetAfter: 60,
    // slidesOffsetBefore: 20,
    // freeMode: true,
    // centeredSlides: true,
});


// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.menu'),
//     menuElem = document.querySelector('.menu__list'),
//     closeElem = document.querySelector('.menu__close'),
//     closeMenu = document.querySelector('.menu__block');

// hamburger.addEventListener('click', function () {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', function () {
//     menu.classList.remove('active');
// });

// menuElem.addEventListener('click', function () {
//     menu.classList.remove('active');
// });

// closeMenu.addEventListener('click', function () {
//     menu.classList.remove('active');
// });

const jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
    jsTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const id = this.getAttribute('data-tab'),
                content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
                activeTrigger = document.querySelector('.js-tab-trigger.active'),
                activeContent = document.querySelector('.js-tab-content.active');

            activeTrigger.classList.remove('active'); // 1
            trigger.classList.add('active'); // 2

            activeContent.classList.remove('active'); // 3
            content.classList.add('active'); // 4
        });
    });
