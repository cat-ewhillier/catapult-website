$(document).ready(function() {
    
    $('.button').click(function () {
        $('header').toggleClass('open');
    });
    
    $('#carousel-link-one').click(function () {
        $('.story-one').removeClass('story-hide');
        $('.story-two').addClass('story-hide');
        $('.story-three').addClass('story-hide');
        $('#carousel-button-one').addClass('carousel-selected');
        $('#carousel-button-two').removeClass('carousel-selected');
        $('#carousel-button-three').removeClass('carousel-selected');
    });
    
    $('#carousel-link-two').click(function () {
        $('.story-one').addClass('story-hide');
        $('.story-two').removeClass('story-hide');
        $('.story-three').addClass('story-hide');
        $('#carousel-button-one').removeClass('carousel-selected');
        $('#carousel-button-two').addClass('carousel-selected');
        $('#carousel-button-three').removeClass('carousel-selected');
    });
    
    $('#carousel-link-three').click(function () {
        $('.story-one').addClass('story-hide');
        $('.story-two').addClass('story-hide');
        $('.story-three').removeClass('story-hide');
        $('#carousel-button-one').removeClass('carousel-selected');
        $('#carousel-button-two').removeClass('carousel-selected');
        $('#carousel-button-three').addClass('carousel-selected');
    });
    


    
    
});