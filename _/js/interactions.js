$(document).ready(function() {
    
    $('.button').click(function () {
        $('header').toggleClass('open');
    });
    
    $('.nav-link-one').click(function () {
        $('.story-one').removeClass('story-hide');
        $('.story-two').addClass('story-hide');
        $('.story-three').addClass('story-hide');
    });
    
    $('.nav-link-two').click(function () {
        $('.story-one').addClass('story-hide');
        $('.story-two').removeClass('story-hide');
        $('.story-three').addClass('story-hide');
    });
    
    $('.nav-link-three').click(function () {
        $('.story-one').addClass('story-hide');
        $('.story-two').addClass('story-hide');
        $('.story-three').removeClass('story-hide');
    });
    
    
});