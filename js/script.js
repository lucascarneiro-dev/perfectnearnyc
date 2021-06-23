
function toggleMenu() {
  var menu = document.getElementById("menu");
  var style = menu.style.display;
  if (style != "flex") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }

}


$('.carousel').slick({
  infinite: true,
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<i class="fs fa-arrow-circle-right slick-next"><img src="img/carousel/right-arrow.png" style="height: 5vh"></i>',
  prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"><img src="img/carousel/left-arrow.png" style="height: 5vh"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});