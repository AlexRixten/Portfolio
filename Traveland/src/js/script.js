const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        670: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
    },

    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 2,
    centerSlides: true,
    spaceBetween: 70,
    // centeredSlides: true,


});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuElem = document.querySelector('.menu__list'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuElem.addEventListener('click', () => {
    menu.classList.remove('active');
});