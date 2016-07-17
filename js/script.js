$(document).ready(function() {
	var heightInner, heightOuter, height;
	heightOuter = $('.products .store_sub').height();

	$('.products li').hover(function() {
		
		heightInner = $('.products li:hover .inner_menu').height();
		heightInner > heightOuter ? height = heightInner : height = heightOuter;
		if ( heightInner < heightOuter ) {
			height = heightOuter
			$('.products li:hover .inner_menu').css({
				'height': heightOuter
			});
			
		}

		else {
			$('.products .store_sub').css({
				'height': height
			});
		}

	}, function() {

	});
});