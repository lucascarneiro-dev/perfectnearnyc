
document.getElementById('videobgmob').play();

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
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<i class="fs fa-arrow-circle-right slick-next"><img src="img/carousel/right-arrow.png" style="height: 5vh"></i>',
  prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"><img src="img/carousel/left-arrow.png" style="height: 5vh"></i>',
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
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
x=window.screen.width
if(x<800){
$('.amenities').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: '<i class="fs fa-arrow-circle-right slick-next"><img src="img/carousel/right-arrow.png" style="height: 5vh"></i>',
  prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"><img src="img/carousel/left-arrow.png" style="height: 5vh"></i>',
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});
}