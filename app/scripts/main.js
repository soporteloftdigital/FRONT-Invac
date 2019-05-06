$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
});
$(document).scroll(function(){
  if($(this).scrollTop()>=10) {
    $('.navbar-fixed').addClass("bg_azul");
    $('.navbar-fixed nav').removeClass("z-depth-0");
  }
  else
  {
    $('.navbar-fixed').removeClass("bg_azul");
    
    $('.navbar-fixed nav').addClass("z-depth-0");
  }
  var swiper = new Swiper('#nuestros_clientes .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

);