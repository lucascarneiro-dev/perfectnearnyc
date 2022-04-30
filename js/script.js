window.onload = appendImgsCarousel(accomodationsImg)
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

function displayRule(ruleid) {
  if (window.screen.width < 800) {
    if (document.getElementById(ruleid).style.display != "flex") {
      document.getElementById("rulesOverlay").style.display = "flex";
      document.getElementById(ruleid).style.display = "flex";
    }
    else {
      document.getElementById("rulesOverlay").style.display = "none";
      document.getElementById(ruleid).style.display = "none";
    }
  }
}

function appendImgsCarousel(Id) {
  var carouselElement = document.getElementById(Id);
  var index = 1
  while (true) {
    var URL = `${window.location.host}/img/carousel/${index}.jpg`;
    $.get(URL)
      .done(function () {
        alert(URL)
        var image = document.createElement("img");
        image.setAttribute("src", `img/carousel/${index}.jpg`);
        carouselElement.appendChild(image)
      })
      .fail(function () {
        var end = true;
      })

    index += 1;
    if (end) { break }
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
  responsive: [{
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
x = window.screen.width
if (x < 800) {
  $('.amenities').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: '<i class="fs fa-arrow-circle-right slick-next"><img src="img/carousel/right-arrow.png" style="height: 5vh"></i>',
    prevArrow: '<i class="fas fa-arrow-circle-left slick-prev"><img src="img/carousel/left-arrow.png" style="height: 5vh"></i>',
    responsive: [{
      breakpoint: 770,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    }
    ]
  });
  $('#policies').slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
}