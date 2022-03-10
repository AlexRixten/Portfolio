$(document).ready(function(){
    $('.auctions__img').each(function(i) {
        $(this).on('click',function() {
            $('.auctions__img').eq(i).toggleClass('auctions__img-active'),
            $('.auctions__info').eq(i).toggleClass('auctions__info-active');
        });
    });
});
new Swiper(".swiper-container", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    width: 351,
    height: 472, 
  });