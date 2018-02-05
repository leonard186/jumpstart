$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    slidesToSroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var headerScrollZero = 0;
  $(window).scroll(function() {
    var headerScrollCurrent = $(this).scrollTop();
    if (headerScrollCurrent - headerScrollZero > 50) {
      var navbarHeight = $(".nav").css("height");
      $(".nav").animate({top: "-" + navbarHeight}, 150);
      headerScrollZero = headerScrollCurrent;
    }
    else if(headerScrollZero - headerScrollCurrent > 50){
      $(".nav").animate({top: "0px"}, 150);
      headerScrollZero = headerScrollCurrent;
    }
  });
});
