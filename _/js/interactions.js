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
    
    $('#next-one').click(function () {
    	$('.story-three').addClass('story-hide');
        $('.story-one').removeClass('story-hide');
		$('#carousel-button-three').removeClass('carousel-selected');
        $('#carousel-button-one').addClass('carousel-selected');
    });
    
    $('#next-two').click(function () {
    	$('.story-one').addClass('story-hide');
        $('.story-two').removeClass('story-hide');
		$('#carousel-button-one').removeClass('carousel-selected');
        $('#carousel-button-two').addClass('carousel-selected');
    });
    
    $('#next-three').click(function () {
    	$('.story-two').addClass('story-hide');
        $('.story-three').removeClass('story-hide');
		$('#carousel-button-two').removeClass('carousel-selected');
        $('#carousel-button-three').addClass('carousel-selected');
    });
    
    $('#back-one').click(function () {
    	$('.story-two').addClass('story-hide');
        $('.story-one').removeClass('story-hide');
		$('#carousel-button-two').removeClass('carousel-selected');
        $('#carousel-button-one').addClass('carousel-selected');
    });
    
    $('#back-two').click(function () {
    	$('.story-three').addClass('story-hide');
        $('.story-two').removeClass('story-hide');
		$('#carousel-button-three').removeClass('carousel-selected');
        $('#carousel-button-two').addClass('carousel-selected');
    });
    
    $('#back-three').click(function () {
    	$('.story-one').addClass('story-hide');
        $('.story-three').removeClass('story-hide');
		$('#carousel-button-one').removeClass('carousel-selected');
        $('#carousel-button-three').addClass('carousel-selected');
    });
    
    


	$('#harvest-snaps').hover(function () { 
       $('.work-hero').css("backgroundImage", "url(_/assets/bsm-new-harvestsnaps.jpg)");  
	});
	
	$('#maricopa-county').hover(function () { 
       $('.work-hero').css("backgroundImage", "url(_/assets/Composed-Images-Vertical-CafeComp1.jpg)");  
	});
    
    
		

});
    
    
    
    
	

    
    
