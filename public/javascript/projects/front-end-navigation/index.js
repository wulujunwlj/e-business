'use strict';

$(document).ready(function() {
	console.log(111111111111);

	$.ajax({
		type: 'GET',
		url: 'javascript/projects/front-end-navigation/data/index.json',
		dataType: 'text',
		success: function(data) {
			// console.log(data);
			console.log($.parseJSON(data));
		},
		error: function(msg) {
			console.error(msg);
		}
	});

});