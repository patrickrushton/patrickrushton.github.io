
window.addEventListener("load", function () {

  
  new Glider(document.querySelector("#selected-work .carousel"), {
    slidesToShow: 1.1,
    slidesToScroll: 1,
    duration: 1,
    dots: "#selected-work .dots",
    arrows: {
      prev: "#selected-work .glider-prev",
      next: "#selected-work .glider-next",
    },
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 3,
        },
      },
    ],
  });

  new Glider(document.querySelector("#recommendations .carousel"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    duration: 1,
    dots: "#recommendations .dots",
    arrows: {
      prev: "#recommendations .glider-prev",
      next: "#recommendations .glider-next",
    },
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
  new Glider(document.querySelector("#clients .carousel"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    duration: 1,
    dots: "#clients .dots",
    arrows: {
      prev: "#clients .glider-prev",
      next: "#clients .glider-next",
    },
  });
  
}); //end load listener
