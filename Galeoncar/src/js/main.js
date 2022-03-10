 
$(function(){
    $('.main-slider').slick({
        // centerMode: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="main-slider-back"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="main-slider-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        infinite:true,
        initialSlide: 2,
        centerPadding: '20%'
    });
    $('.parkcar_list').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.parkcar-slider',
    });
    $('.parkcar-slider').slick({
        slidesToShow: 3,
        draggable: false,
        asNavFor: '.parkcar_list',
        slideToScroll: 3,
        // variableWidth: true,
        arrows: false,
        centerMode: true,
        initialSlide:4,
        centerPadding: '1%',
        infinite: true
    }); 
    $('.review_list').slick({
        slidesToShow: 6,
        slideToScroll: 0,
        focusOnSelect: true,
        asNavFor: '.review-slider',
    });
    $('.review-slider').slick({
        slidesToShow: 1,
        draggable: false,
        slideToScroll: 1,
        asNavFor: '.review_list',
        fade:true,
        arrows: false
    }); 
});
