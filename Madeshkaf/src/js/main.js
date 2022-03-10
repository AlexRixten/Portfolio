$(function(){

    $('.subheader-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/subheader/arrow_up.svg" alt="up"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/subheader/arrow_dn.svg" alt="down"></button>',
        fade: true
    });

    $('.reservations_slider').slick({
        slidesToShow: 5,
        slideToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.reservations_content_slider',
        vertical: true,
        centerMode:true,
        prevArrow: '<button type="button" class="reservations_slider-prev"><img src="icons/reservation/up.svg" alt="up"></button>',
        nextArrow: '<button type="button" class="reservations_slider-next"><img src="icons/reservation/dn.svg" alt="down"></button>'
    });
    $('.reservations_content_slider').slick({
        slidesToShow: 1,
        slideToScroll: 1,
        asNavFor: '.reservations_slider',
        fade:true,
        prevArrow: '<button type="button" class="reservations_content_slider-prev"><img src="icons/reservation/up.svg" alt="up"></button>',
        nextArrow: '<button type="button" class="reservations_content_slider-prev"><img src="icons/reservation/dn.svg" alt="down"></button>'
    });

    $('.gallery_photo').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="gallery_photo-next"><img src="icons/reservation/up.svg" alt="up"></button>',
        nextArrow: '<button type="button" class="gallery_photo-prev"><img src="icons/reservation/dn.svg" alt="down"></button>'
      });
});