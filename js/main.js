// Add html components
/*
 * Menu
 */
$(function () {
    $("#header").load("html/header.html");
    $("#menu").load("html/menu.html");
    $("#hours").load("html/hours.html");
    $("#news").load("html/news.html");
    $("#about").load("html/about.html");
    $("#colophon").load("html/colophon.html");
});


window.addEventListener('scroll', (event) => {
    var topDistance = window.pageYOffset;
    var layers = document.querySelectorAll("[data-type='parallax']");

    layers.forEach(layer => {
        var depth = layer.getAttribute('data-depth');
        var movement = -(topDistance * depth);
        var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
    });

});