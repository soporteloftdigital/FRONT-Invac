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
}
);