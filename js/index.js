// $.getScript(
//   "https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"
// ).done(() => {
//   var scroll = new SmoothScroll('a[href*="#"]');
// });
  
$(function(){
  $(".work-carousel").load("includes/work-carousel.html");
});

window.addEventListener("load", function () {
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
