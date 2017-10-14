$( document ).ready(function() {

    scaleSection('#first-section');
    scaleSection('.content-section');

    initBanner('.video-container .poster img');
    initBanner('.video-container .filter');
    initBanner('.video-container video');

    initBanner('.section-background');

    $(window).on('resize', function() {
        scaleSection('#first-section');
        scaleBanner('.video-container .poster img');
        scaleBanner('.video-container .filter');
        scaleBanner('.video-container video');

        scaleSection('.content-section')
        scaleBanner('.section-background');

    });

    
    animateATag();

});

function scaleSection(selector) {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $(selector).css('height',unitHeight);

}

function initBanner(element){

    $(element).each(function(){
    	console.log($(this));
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBanner(element);

}

function scaleBanner(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

        $(this).width(videoWidth).height(videoHeight);

        $('#first-section .video-container video').addClass('fadeIn animated');

    });
}

function animateATag() {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({ 
				scrollTop: $(hash).offset().top
			}, 1000, function(){
				window.location.hash = hash;
			});
		}
	});
}
