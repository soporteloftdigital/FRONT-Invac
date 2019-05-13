$(document).ready(function(){
  $('.sidenav').sidenav();
  $('#bodegas .carousel.carousel-slider, #bodegas_oficinas .carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.tabs').tabs();
  $('#red_de_bodegas_in  .carousel').carousel({
    fullWidth: true,
    indicators: true
  });
  $('#red_de_bodegas .carousel').carousel({
    fullWidth: true,
    indicators: false,
    no_wrap: true
  });
  var swiper = new Swiper('#nuestros_clientes .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      768:
      {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });

  var swiper_bodegas = new Swiper('#red_de_bodegas .swiper-container', {
    effect: 'fade',
  });

  var red_bodega = new Swiper('#red_de_bodegas_in .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //cambiar slider red bodegas según navegacion

  var position;
  $('#red_de_bodegas .collection-item').on('click',function(){
    $('.activo').removeClass('activo');
    $(this).addClass('activo');
    position = $(this).attr('data-position');
    swiper_bodegas.slideTo(position);
  });
  $('.modal').modal();
});

$(document).scroll(function(){
  if($(this).scrollTop()>=10) {
    $('.navbar-fixed').addClass('bg_blanco');
    //$('.navbar-fixed nav').removeClass('z-depth-0');
  }
  else
  {
    $('.navbar-fixed').removeClass('bg_blanco');
    
    //$('.navbar-fixed nav').addClass('z-depth-0');
  } 
});