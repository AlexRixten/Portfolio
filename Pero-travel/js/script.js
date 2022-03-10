import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import cardsReview from './modules/card-review'; 
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    // const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    // tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    // modal('[data-modal]', '.modal', modalTimerId);
    // timer('.timer', '2020-06-11');
    cards();
    cardsReview();
    // calc();
    // forms('form', modalTimerId);
    // slider({
    //     container: '.offer__slider',
    //     slide: '.offer__slide',
    //     nextArrow: '.offer__slider-next',
    //     prevArrow: '.offer__slider-prev',
    //     totalCounter: '#total',
    //     currentCounter: '#current',
    //     wrapper: '.offer__slider-wrapper',
    //     field: '.offer__slider-inner'
    // });
    const swiper = new Swiper('.slider', {
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        
          scrollbar: {
            el: '.swiper-scrollbar',
          },
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
        centerSlides: true,
        spaceBetween: 70,
        // centeredSlides: true,
    });
});