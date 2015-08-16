'use strict';

$(document).ready(function() {
	$('.block-title').click(function() {

		var $blockTitle = $('.block-title');
		var $blockContent = $('.block-content');
		var index = $.inArray(this, $blockTitle);
		
		$('.block-content:eq(' + index + ')').toggleClass('hidden');
		$(this).find('.expand-icon').toggleClass(function() {

			return $(this).hasClass('fa-angle-up') ? 'fa-angle-down': 'fa-angle-up';
		});
	});

});