$.getScript("https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js")
    .done(() => {
        var scroll = new SmoothScroll('a[href*="#"]');
    });

$(function(){
    $("nav").load("includes/nav.html");
});