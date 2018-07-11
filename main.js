$('document').ready(function() {

    $(".menu").hide();
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass("is-active");
        $(".menu").toggle(800);
    });

});
